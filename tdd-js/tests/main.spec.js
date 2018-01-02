const expect = require("chai").expect;

describe('Main', () => {

    let arr;

    beforeEach(() => {
        arr = ["a","b","c"];
    });

    it('should have length of 4 when pushed another value', () => {
        arr.push("z");
        expect(arr).to.have.lengthOf(4);
    });

    it('should have length of 2 when pop the array', () => {      
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

    it('should remove "c" when pop the array', () => {
        arr.pop();
        expect(arr).to.not.include("c");
    });
});