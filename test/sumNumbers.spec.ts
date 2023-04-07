const _chai = require('chai');
const expect = _chai.expect;


import sumNumbers from '../Chapter2/problems/sumNumbers';



describe('sumNumbers function', () => {
    it('should return 0 for an empty array', () => {
        const numbers: number[] = [];
        const result = sumNumbers(numbers);
        expect(result).to.eql(0);
    });

    it('should return the number for an array with a single number', () => {
        const numbers: number[] = [5];
        const result = sumNumbers(numbers);
        expect(result).to.eql(5);
    });

    it('should return the sum for an array with multiple positive numbers', () => {
        const numbers: number[] = [2, 3, 5, 8];
        const result = sumNumbers(numbers);
        expect(result).to.eql(18);
    });

    it('should return the sum for an array with multiple negative numbers', () => {
        const numbers: number[] = [-2, -3, -5, -8];
        const result = sumNumbers(numbers);
        expect(result).to.eql(-18);
    });

    it('should return the sum for an array with both positive and negative numbers', () => {
        const numbers: number[] = [-2, 3, -5, 8];
        const result = sumNumbers(numbers);
        expect(result).to.eql(4);
    });
});
