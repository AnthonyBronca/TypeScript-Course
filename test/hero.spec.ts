const _chai = require('chai');
const expect = _chai.expect;


import Hero from '../Chapter3/solutions/hero-solutions';

const spiderman = new Hero(
    'Peter Parker',
    'Spider-Man',
    ['web-slinging',
    'wall-climbing'],
    'Mary Jane',
    ['Hob Goblin',
    'Doc Oc'],
    ['Bad Friends']
    );

describe('Hero Class', ()=> {
    it('should have realName, heroName, powers, loveInterest, and enemies properties on creation', ()=>{
        const values = Object.getOwnPropertyNames(spiderman)
            expect(values).to.eql([ 'realName', 'heroName', 'powers', 'loveInterest', 'enemies', 'weakness' ]);

    });

    it('should have an instance method that returns the hero\'s real name', ()=>{
        const res = 'Peter Parker';
        expect(spiderman.getName()).to.equal(res)
    });

    it('Should have a static method that returns a weakness variable', ()=> {
        expect(Hero.getWeakness(spiderman)).to.eql(['Bad Friends']);
    })

    it('Should have a private variable called weakness', ()=> {
        const values = Object.getOwnPropertyNames(spiderman);
        console.log(values);
    });
});
