var chai = require('chai');
var expect = chai.expect;
var sumNumbersTest = require('../solution1.ts');
describe('sumNumbers function', function () {
    it('should return 0 for an empty array', function () {
        var numbers = [];
        var result = sumNumbersTest(numbers);
        expect(result).toBe(0);
    });
    it('should return the number for an array with a single number', function () {
        var numbers = [5];
        var result = sumNumbersTest(numbers);
        expect(result).toBe(5);
    });
    it('should return the sum for an array with multiple positive numbers', function () {
        var numbers = [2, 3, 5, 8];
        var result = sumNumbersTest(numbers);
        expect(result).toBe(18);
    });
    it('should return the sum for an array with multiple negative numbers', function () {
        var numbers = [-2, -3, -5, -8];
        var result = sumNumbersTest(numbers);
        expect(result).toBe(-18);
    });
    it('should return the sum for an array with both positive and negative numbers', function () {
        var numbers = [-2, 3, -5, 8];
        var result = sumNumbersTest(numbers);
        expect(result).toBe(4);
    });
    it('should throw an error for an array with non-numeric values', function () {
        var numbers = [1, 2, 'three', 4];
        expect(function () {
            sumNumbersTest(numbers);
        }).toThrowError();
    });
});
