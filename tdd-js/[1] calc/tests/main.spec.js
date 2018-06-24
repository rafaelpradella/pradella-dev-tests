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

        it('should exist method mult', () => {
            expect(Calc.mult).to.exist;
            expect(Calc.mult).to.be.a("function");
        });

        it('should exist method sub', () => {
            expect(Calc.sub).to.exist;
            expect(Calc.sub).to.be.a("function");
        });

        it('should exist method div', () => {
            expect(Calc.div).to.exist;
            expect(Calc.div).to.be.a("function");
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

    describe('Sub method', () => {

        it('should sub 6-2 and return 4', () => {
            expect(Calc.sub(6,2)).to.be.equal(4);
        });

        it('should sub 10-20 and return -10', () => {
            expect(Calc.sub(10,20)).to.be.equal(-10);
        });

    });

    describe('Mult method', () => {

        it('should mult 2x2 and return 4', () => {
            expect(Calc.mult(2,2)).to.be.equal(4);
        });
    });

    describe('Div method', () => {
        it('should mult 8:2 and return 4', () => {
            expect(Calc.div(8,2)).to.be.equal(4);
        });

        it('divide by zero', () => {
            expect(Calc.div(8,0)).to.be.equal("Please, don´t divide by zero. For our safety as human race!");
        })
    });
});