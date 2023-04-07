/*

You are given a TypeScript interface representing a
user's profile information as follows:

You want to create a type alias UserSummary that represents a
simplified version of this interface, containing only
the user's name and email. Write a TypeScript function
getUserSummary that takes a UserProfile as its argument
and returns a UserSummary object.
*/

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

//TODO: make type for UserSummary (needs name and email)



//TODO: Write a named getUserSummary function that returns a UserSummary when passing in an entire userProfile

function getUserSummary(userProfile) {

}




//TEST THESE
// const userSummary: UserSummary = getUserSummary(userProfile);
// console.log(userSummary); // { name: 'John Doe', email: 'johndoe@gmail.com'}


export default getUserSummary
