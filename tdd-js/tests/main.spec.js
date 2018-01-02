const expect = require("chai").expect;
const Calc = require("../src/main.js")

describe('Calc', () => {

    //smoke test
    describe('Smoke Test', () => {

        it('should exist Calc lib', () => {
            expect(Calc).to.exist;    
        });

        it('should exist method sum', () => {
            expect(Calc.sum).to.exist;
            expect(Calc.sum).to.be.a("function");
        });
    });

    describe('Sum method', () => {

        it('should sum 2+2 and return 4', () => {
            expect(Calc.sum(2,2)).to.be.equal(4);
        });

        it('should throw a new error if parameters doesnt exist or isNan', () => {
            expect(Calc.sum(2)).to.be.false;
            expect(Calc.sum("dummyText", new Array())).to.be.false;
        });

    });
});