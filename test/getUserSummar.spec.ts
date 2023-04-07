const _chai = require('chai');
const expect = _chai.expect;

import getUserSummary from '../Chapter2/problems/getUserSummary';


describe('getUserSummary function', ()=> {


interface UserProfile {
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}
    const userProfile: UserProfile = {
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

type UserSummary = {
    name: string,
    email: string
}
    it('should return an object', ()=> {

        expect(getUserSummary(userProfile)).to.be.an.instanceOf(Object)
    });

    it('should return a UserSummary', ()=> {
        let res: UserSummary = {name: 'John Doe', email: 'johndoe@gmail.com'}
        expect(getUserSummary(userProfile)).to.eql(res)
    })
})
