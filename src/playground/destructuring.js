//
// Object Destructuring
//

// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];

// const [street, city, state = 'Texas', zip] = address;
// // const [, , state] = address;

// // console.log(`You are in ${address[1]} ${address[2]}`);
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, sm, md, lg] = item;

console.log(`A medium ${drink} costs ${md}`);
