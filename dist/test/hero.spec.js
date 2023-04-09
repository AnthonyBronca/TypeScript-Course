"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _chai = require('chai');
const expect = _chai.expect;
const hero_1 = __importDefault(require("../Chapter3/problems/hero"));
const spiderman = new hero_1.default('Peter Parker', 'Spider-Man', ['web-slinging',
    'wall-climbing'], 'Mary Jane', ['Hob Goblin',
    'Doc Oc'], ['Bad Friends']);
describe('Hero Class', () => {
    it('should have realName, heroName, powers, loveInterest, and enemies properties on creation', () => {
        const values = Object.getOwnPropertyNames(spiderman);
        expect(values).to.eql(['realName', 'heroName', 'powers', 'loveInterest', 'enemies', 'weakness']);
    });
    it('should have an instance method that returns the hero\'s real name', () => {
        const res = 'Peter Parker';
        expect(spiderman.getName()).to.equal(res);
    });
    it('Should have a static method that returns a weakness variable', () => {
        expect(hero_1.default.getWeakness(spiderman)).to.eql(['Bad Friends']);
    });
    it('Should have a private variable called weakness', () => {
        const values = Object.getOwnPropertyNames(spiderman);
        console.log(values);
    });
});
//# sourceMappingURL=hero.spec.js.map