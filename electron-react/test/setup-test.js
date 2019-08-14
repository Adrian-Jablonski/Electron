const expect = require("chai").expect;

const setSpotText = require('../src/functions/setup').setSpotText;
const setSpotClassName = require('../src/functions/setup').setSpotClassName;
const setColLetter = require('../src/functions/setup').setColLetter;

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

    it('Set Spot class names');

    it('Set Column letters');
    
});