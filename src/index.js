const person = {
  name: 'James',
  age: 20,
  email: 'james@gmail.com',
};

const newPerson = {
  ...person,
  gender: 'male',
  age: 24,
};

console.log(person);
console.log(newPerson);
