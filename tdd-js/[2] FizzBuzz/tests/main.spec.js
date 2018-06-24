const expect = require("chai").expect;
const Fizz = require("../src/main.js")

describe('FizzBuzz', () => {

    //smoke test
    describe('Smoke Test', () => {

        it('should exist Fizz lib', () => {
            expect(Fizz).to.exist;    
        });
    });
});