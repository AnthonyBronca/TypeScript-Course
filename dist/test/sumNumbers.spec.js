"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _chai = require('chai');
const expect = _chai.expect;
const sumNumbers_1 = __importDefault(require("../Chapter2/problems/sumNumbers"));
describe('sumNumbers function', () => {
    it('should return 0 for an empty array', () => {
        const numbers = [];
        const result = (0, sumNumbers_1.default)(numbers);
        expect(result).to.eql(0);
    });
    it('should return the number for an array with a single number', () => {
        const numbers = [5];
        const result = (0, sumNumbers_1.default)(numbers);
        expect(result).to.eql(5);
    });
    it('should return the sum for an array with multiple positive numbers', () => {
        const numbers = [2, 3, 5, 8];
        const result = (0, sumNumbers_1.default)(numbers);
        expect(result).to.eql(18);
    });
    it('should return the sum for an array with multiple negative numbers', () => {
        const numbers = [-2, -3, -5, -8];
        const result = (0, sumNumbers_1.default)(numbers);
        expect(result).to.eql(-18);
    });
    it('should return the sum for an array with both positive and negative numbers', () => {
        const numbers = [-2, 3, -5, 8];
        const result = (0, sumNumbers_1.default)(numbers);
        expect(result).to.eql(4);
    });
});
//# sourceMappingURL=sumNumbers.spec.js.map