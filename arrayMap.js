// map array method

// const  numbers = [1, 2, 3, 4, 5];

// const numbersDouble = numbers.map(multiply);

// function multiply (value, index, arr) {

//     // return value * 2;
//        return value * index;

// }

// console.log(numbersDouble);


const products = [
    {
        name: "laptop",
        value: "10000",
        count: "4"
    },
    {
        name: "phone",
        value: "14000",
        count: "10"
    },
    {
        name: "desktop",
        value: "17000",
        count: "3"
    },
]

const totalValueForProducts = products.map ((item) => ({
    name:  item.name,
    value: item.value * item.count
}));

console.log(totalValueForProducts);

