"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _chai = require('chai');
const expect = _chai.expect;
const getUserSummary_1 = __importDefault(require("../Chapter2/problems/getUserSummary"));
describe('getUserSummary function', () => {
    const userProfile = {
        name: 'John Doe',
        age: 35,
        email: 'johndoe@gmail.com',
        phoneNumber: '+1-202-555-0175',
        address: {
            street: '123 Main Street',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            zipCode: '12345'
        }
    };
    it('should return an object', () => {
        expect((0, getUserSummary_1.default)(userProfile)).to.be.an.instanceOf(Object);
    });
    it('should return a UserSummary', () => {
        let res = { name: 'John Doe', email: 'johndoe@gmail.com' };
        expect((0, getUserSummary_1.default)(userProfile)).to.eql(res);
    });
});
//# sourceMappingURL=getUserSummar.spec.js.map