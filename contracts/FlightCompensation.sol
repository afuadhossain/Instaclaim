pragma solidity ^0.5.16;

contract FlightCompensation{
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
        uint16 compensation;    //amount owed to the passenger: $0-$1000
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
        uint16 compensation    //amount owed to the passenger: $0-$1000
    );

    address creator;        // address of the creator of the contract

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

    /**
    * @dev Constructor
    */
    constructor () public {
        creator = msg.sender;
    }

    function addNewClaim (
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

}