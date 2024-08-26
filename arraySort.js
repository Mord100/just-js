// Array Sort



//Sorting an array of strings

// const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

// fruits.sort();

// console.log(fruits);


// sorting an array of numbers

// const numbers = [4, 2, 1, 5, 3]

// numbers.sort((a, b) => a - b);

// console.log(numbers)



//sorting objects

const people = [
   {
     name: "spongebob",
     age: 24,
     gpa: 3.5
   },
   {
    name: "patrick",
    age: 36,
    gpa: 1.5
  },
  {
    name: "sandy",
    age: 22,
    gpa: 4.5
  },
]

// people.sort((a, b) => a.age - b.age); //sort by age
people.sort((a, b)=> a.name.localeCompare(b.name)) //sort values with a string in an object

console.log(people);


