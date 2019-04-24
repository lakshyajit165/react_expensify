//Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstname ='Anonymous', age} = person;

// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} is ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennsylvania', '19143'];

const [, city, state='New York'] = address;

console.log(`You are in ${state}.`);