const _chai = require('chai');
const expect = _chai.expect;

let sumNumbersTest = require('../Chapter2/solution1.ts')

describe('sumNumbers function', () => {
    it('should return 0 for an empty array', () => {
        const numbers: number[] = [];
        const result = sumNumbersTest(numbers);
        expect(result).to.eql(0);
    });

    it('should return the number for an array with a single number', () => {
        const numbers: number[] = [5];
        const result = sumNumbersTest(numbers);
        expect(result).to.eql(5);
    });

    it('should return the sum for an array with multiple positive numbers', () => {
        const numbers: number[] = [2, 3, 5, 8];
        const result = sumNumbersTest(numbers);
        expect(result).to.eql(18);
    });

    it('should return the sum for an array with multiple negative numbers', () => {
        const numbers: number[] = [-2, -3, -5, -8];
        const result = sumNumbersTest(numbers);
        expect(result).to.eql(-18);
    });

    it('should return the sum for an array with both positive and negative numbers', () => {
        const numbers: number[] = [-2, 3, -5, 8];
        const result = sumNumbersTest(numbers);
        expect(result).to.eql(4);
    });
});
