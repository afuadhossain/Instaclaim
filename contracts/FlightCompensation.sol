pragma solidity ^0.5.16;

contract FlightCompensation{
    /*
    * Compensation amounts
    */
    uint256 small3 = 125;
    uint256 small6 = 250;
    uint256 small9 = 500;
    uint256 large3 = 400;
    uint256 large6 = 700;
    uint256 large9 = 1000;
    uint256 private availableFunds; //variable storing the contract funds

    /*
    * Posible statuses for the claim:
    * 0: ongoing
    * 1: flight landed before maxArrivalTime0
    * 2: flight landed after maxArrivalTime0 but before maxArrivalTime1
    * 3: flight landed after maxArrivalTime1 but before maxArrivalTime2
    * 4: flight landed after maxArrivalTime2
    * 5: flight cancelled by the passenger
    * 6: flight cancelled by the airline
    */
    struct Claim{               //all information related to a passenger claim
        uint256 ID;             //ID identifying the claim/passenger
        uint8 airlineType;      //Possible airline types: 0: small airline, 1: large airline
        uint256 maxArrivalTime0;    //Original Arrival time + 3 hours
        uint256 maxArrivalTime1;   //Original Arrival time + 6 hours
        uint256 maxArrivalTime2;   //Original Arrival time + 9 hours
        uint8 status;           //status of the flight
        uint256 compensation;    //amount owed to the passenger: $0-$1000
        address payable compensationAddress;    //address to which we will send the compensation
    }

    event ClaimCreation(    //event sent when a new claim is added to the smart contract
        uint256 ID,        //ID identifying the claim/passenger
        uint8 airlineType, //Possible airline types: 0: small airline, 1: large airline
        bytes32 flightID  // <carrier_code><flight_number>.<timestamp_in_sec_of_departure_date>
    );

    event ClaimResolve(     //event sent when the claim is resolved
        uint256 ID,        //ID identifying the claim/passenger
        bytes32 flightID,   // <carrier_code><flight_number>.<timestamp_in_sec_of_departure_date>
        uint8 status,           //status of the flight
        uint256 compensation    //amount owed to the passenger: $0-$1000
    );

    event CompensationPaid(     //event sent when the claim's determined compensation has been payed to passenger
        uint256 ID,             //ID identifying the claim/passenger
        uint256 compensation,    //confirmed amount sent to the passenger's account in WEI
        address recipient       //passenger's address
    );

    event CompensationError(    //event sent when there is an error in sending the compensation to the passenger
        uint256 ID,             //ID identifying the claim/passenger
        uint256 compensation,    //confirmed amount sent to the passenger's account in WEI
        address recipient,      //passenger's address
        bytes32 errorMessage    //error message
    );

    address payable creator;        // address of the creator of the contract

    // All the insurances handled by this smart contract are contained in this mapping
    // key: a string containing the flight number and the timestamp separated by a dot
    // value: an array of insurance contracts for this flight
    mapping (bytes32 => Claim[]) claimList;

    /**
    * @dev This modifier checks that only the creator of the contract can call this smart contract
    */
    modifier onlyIfCreator {
        if (msg.sender == creator) _;
    }

    modifier enoughFunds(uint256 compensation) {
        require(availableFunds >= compensation/150, "Not enough funds in contract to pay compensation");
        _;
    }
    /**
    * @dev Constructor
    */
    constructor () public {
        creator = msg.sender;
    }

    function addNewClaim(
        uint256 ID,
        bytes32 flightID,
        uint8 airlineType,
        uint256 maxArrivalTime0,
        uint256 maxArrivalTime1,
        uint256 maxArrivalTime2,
        address payable compensationAddress
    )
    external onlyIfCreator {

        Claim memory claimToAdd;
        claimToAdd.ID = ID;
        claimToAdd.airlineType = airlineType;
        claimToAdd.maxArrivalTime0 = maxArrivalTime0;
        claimToAdd.maxArrivalTime1 = maxArrivalTime1;
        claimToAdd.maxArrivalTime2 = maxArrivalTime2;
        claimToAdd.compensationAddress = compensationAddress;
        claimToAdd.status = 0; //when we create a claim, it is ongoing -> code:0
        claimToAdd.compensation = 0; //when we create a claim, initial compensation is 0

        claimList[flightID].push(claimToAdd);

        emit ClaimCreation(ID, airlineType, flightID);
    }
    /*
    * @dev Update the status of a flight
    * @param flightId <carrier_code><flight_number>.<timestamp_in_sec_of_departure_date>
    * @param actualArrivalTime The actual arrival time of the flight (timestamp in sec)
    */
    function updateFlightStatus(
        bytes32 flightID,
        uint256 actualArrivalTime
    )
    external onlyIfCreator {
        //default is that the flight landed on time, we hope!
        uint8 updatedStatus = 1;

        //for all claims in a flight, do this...
        for (uint i = 0; i < claimList[flightID].length; i++) {
            //going through only the ongoing claims
            if (claimList[flightID][i].status == 0) {
                if (actualArrivalTime > claimList[flightID][i].maxArrivalTime2){
                    updatedStatus = 4;
                    if (claimList[flightID][i].airlineType == 0){
                        claimList[flightID][i].compensation = small9;
                    }
                    else {
                        claimList[flightID][i].compensation = large9;
                    }
                }
                else if (actualArrivalTime > claimList[flightID][i].maxArrivalTime1){
                    updatedStatus = 3;

                    if (claimList[flightID][i].airlineType == 0){
                        claimList[flightID][i].compensation = small6;
                    }
                    else {
                        claimList[flightID][i].compensation = large6;
                    }
                }
                else if (actualArrivalTime > claimList[flightID][i].maxArrivalTime0){
                    updatedStatus = 2;

                    if (claimList[flightID][i].airlineType == 0){
                        claimList[flightID][i].compensation = small3;
                    }
                    else {
                        claimList[flightID][i].compensation = large3;
                    }
                }
                // update the status of the claim
                claimList[flightID][i].status = updatedStatus;
                emit ClaimResolve(
                    claimList[flightID][i].ID,
                    flightID,
                    updatedStatus,
                    claimList[flightID][i].compensation
                );

                compensateIfEnoughFunds(claimList[flightID][i]);
            }
        }
    }

    function getClaimsCount(bytes32 flightID) public view onlyIfCreator returns (uint) {
        return claimList[flightID].length;
    }

    function getClaim(bytes32 flightID, uint i) public view onlyIfCreator returns (
                        uint256, uint8, uint256, uint256, uint256, uint8, uint256, address payable) {
        Claim memory claim = claimList[flightID][i];
        return (claim.ID, claim.airlineType, claim.maxArrivalTime0, claim.maxArrivalTime1,
                    claim.maxArrivalTime2, claim.status, claim.compensation, claim.compensationAddress);
    }

    //Requires pragma experimental ABIEncoderV2;
    // function getAllClaims(bytes32 flightID) public view onlyIfCreator returns (Claim[] memory) {
    //     return claimList[flightID];
    // }

    //Fallback function. All deposits without any calling function by default go to this function
    //https://solidity.readthedocs.io/en/v0.5.3/contracts.html#fallback-function
    function() external payable {
        availableFunds = availableFunds + msg.value;
    }

    function CADtoWei(uint256 amount) internal pure returns (uint256) {
        return (amount*1000000000000000000)/200;
    }

    function WeiToETH(uint256 amount) internal pure returns (uint256) {
        return amount/1000000000000000000;
    }

    //Deposits made with deposit() go to this function
    function deposit() external payable onlyIfCreator {
        availableFunds = availableFunds + msg.value;
    }
    function withdraw(uint256 amount) external onlyIfCreator enoughFunds(amount){
        availableFunds = availableFunds - amount;
        creator.transfer(amount);
    }
    function compensate(
        uint256 ID,
        uint256 compensation,
        address payable recipient
    )
    internal enoughFunds(compensation){
        uint256 WEIcompensation = CADtoWei(compensation);
        recipient.transfer(WEIcompensation);
        uint256 ETHcompensation = WeiToETH(WEIcompensation);
        emit CompensationPaid(ID, ETHcompensation, recipient);
    }
    function compensateIfEnoughFunds(Claim memory claimToPay) private {
        if (claimToPay.compensationAddress != address(0)) {
            compensate(claimToPay.ID, claimToPay.compensation, claimToPay.compensationAddress);
        }
    }

}