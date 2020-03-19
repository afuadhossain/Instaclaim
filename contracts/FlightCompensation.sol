pragma solidity ^0.5.16;

contract FlightCompensation{
    struct Claim{
        uint256 ID; //unique ID identifying the claim/passenger
        uint8 airlineType; //0 -> small airline, 1 -> large airline
        uint8 status; //status of the flight
        uint16 compensation; //amount owed t
        uint limitArrivalTime0;
        uint limitArrivalTime1;
        uint limitArrivalTime2;

    }

}