const expect = require("chai").expect;

const setSpotText = require('../src/functions/setup').setSpotText;
const setSpotClassName = require('../src/functions/setup').setSpotClassName;
const setColLetter = require('../src/functions/setup').setColLetter;
const returnRandomShipPositions = require('../src/functions/setup').returnRandomShipPositions;
const createShip = require('../src/functions/setup').createShip;
const checkAdjacentSpotIsTaken = require('../src/functions/setup').checkAdjacentSpotIsTaken;

describe('Setup', function() {
    it('Set spot text for Row Headings', function() {
        let row = 1;
        expect(setSpotText(row, 0)).to.equal(row);
        row = 3;
        expect(setSpotText(row, 0)).to.equal(row);
        expect(setSpotText(row, 0)).to.not.equal(row + 1);
        row = 0;
        expect(setSpotText(row, 0)).to.equal(row);
    });

    it('Set spot text for Column Headings', function() {
        let col = 2;
        expect(setSpotText(0, col)).to.equal(setColLetter(col));
        col = 3;
        expect(setSpotText(0, col)).to.equal(setColLetter(col));
        expect(setSpotText(0, col)).to.not.equal(setColLetter(col) + 1);
        col = 1;
        expect(setSpotText(0, col)).to.equal(setColLetter(col));
    });

    it('Set Spot class names', function() {
        expect(setSpotClassName(0, 1, null)).to.equal('board-heading');
        expect(setSpotClassName(2, 0, null)).to.equal('board-heading');
        expect(setSpotClassName(2, 2, 'Hit')).to.equal('spot-hit');
        expect(setSpotClassName(4, 5, 'Miss')).to.equal('spot-miss');
        expect(setSpotClassName(4, 5, null)).to.equal('board-spot');
    });

    it('Set Column letters', function() {
        expect(setColLetter(1)).to.equal('A');
        expect(setColLetter(2)).to.equal('B');
        expect(setColLetter(3)).to.equal('C');
        expect(setColLetter(4)).to.equal('D');
        expect(setColLetter(8)).to.equal('H');
        expect(setColLetter(10)).to.equal('J');
    });

    describe('Create two ship placements if random spot for X and Y plus ship length is below 10', function() { 
        let spotsTaken = [];
        let randomSpot = "1,1";
        let shipLength = 5;
        it('Expect two sets of arrays created', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.eql([['1,1', '2,1', '3,1', '4,1', '5,1'], ['1,1', '1,2', '1,3', '1,4', '1,5']]);
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.have.lengthOf(2);
        });
    })

    describe("Don't create ship placement if random spot for X plus ship length is above 10", function() { 
        let spotsTaken = [];
        let randomSpot = "8,2";
        let shipLength = 3;
        it('Expect array of length 1 to be created', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.eql([['8,2', '8,3', '8,4']]);
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.have.lengthOf(1);
        })
    })

    describe("Don't create ship placement if random spot for Y plus ship length is above 10", function() { 
        let spotsTaken = [];
        let randomSpot = "1,6";
        let shipLength = 5;
        it('Expect array of length 1 to be created', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.eql([['1,6', '2,6', '3,6', '4,6', '5,6']]);
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.have.lengthOf(1);
        })
    })

    describe("Don't create any ship placement if random spot for X AND Y plus ship length is above 10", function() { 
        let spotsTaken = [];
        let randomSpot = "7,6";
        let shipLength = 5;
        it('Expect false to be returned if no ship placements available', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.be.false;
        })
    })

    describe("Ship length tests", function() { 
        let spotsTaken = [];
        let randomSpot = "1,6";
        it('Expect ship of length 5 to be created', function() {
            expect(createShip(spotsTaken, randomSpot, 5)[0]).to.have.lengthOf(5);
        })
        it('Expect ship of length 4 to be created', function() {
            expect(createShip(spotsTaken, randomSpot, 4)[0]).to.have.lengthOf(4);
        })
        it('Expect ship of length 2 to be created', function() {
            expect(createShip(spotsTaken, randomSpot, 2)[0]).to.have.lengthOf(2);
        })
    })

    describe("Don't create any ship options if random spot already has a ship on it", function() {  
        let spotsTaken = ['3,4', '1,1'];
        let randomSpot = "1,1";
        let shipLength = 5;
        it('Expect false to be returned if random spot is already taken', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.be.false;
        });
    })

    describe("Don't create ship option if a spot in a ship placement already has a ship on it", function() {  
        let spotsTaken = ['1,3'];
        let randomSpot = "1,1";
        let shipLength = 5;
        it('Expect 1 ship placement option to be created if a spot in a ship placement already has a ship on it', function() {
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.eql([['1,1', '2,1', '3,1', '4,1', '5,1']]);
            expect(createShip(spotsTaken, randomSpot, shipLength)).to.have.lengthOf(1);
        });
    })

    describe("Test Return random ship positions function", function() {  
        it('Test if correct number of ships is returned', function() {
            expect(returnRandomShipPositions()).to.have.lengthOf(17);
        });
    })

    describe("Test preventing placing ships near each other", function() {  
        let x = 1;
        let y = 2;
        let spotsTaken = ['1,3', '8,8'];
        it('Test if adjecent ship returns true', function() {
            expect(checkAdjacentSpotIsTaken(x, y, spotsTaken)).to.be.true;
            expect(checkAdjacentSpotIsTaken(7, 8, spotsTaken)).to.be.true;
            expect(checkAdjacentSpotIsTaken(8, 7, spotsTaken)).to.be.true;
        });

        it('Test if no adjecent ships returns false', function() {
            expect(checkAdjacentSpotIsTaken(2, 2, spotsTaken)).to.be.false;
            expect(checkAdjacentSpotIsTaken(7, 7, spotsTaken)).to.be.false;
        });
    })
});