// Create a Function for Temperature Conversion

function convertToCelcius(Fahrenheit) {
    let Celsius;
    if (isNaN(Fahrenheit)) {
        return "Invlid input, please enter  number"
    }
    Celsius = (Fahrenheit - 32) * (5/9)
    return Celsius
}
console.log(convertToCelcius(100));


// Create a Function with Multiple Parameters and Return

function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} yers old`;
}
console.log(createGreeting("Steph", 22));


//  Manipulate an Array of Numbers
let numbers = [1,2,3,4,5]
numbers.push(6);
numbers.shift();
numbers.unshift(0);
let text = numbers.join("-");
console.log(text) 

// // Double the Values with `map()
let doubledNumbers = numbers.map(element => element * 2)
console.log(doubledNumbers)


// Filter Out Odd Numbers
let evenNumbers = numbers.filter(element => element % 2 === 0)
console.log(evenNumbers)


// Create a Loop to Sum Numbers
function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum+= array[i]
    }
    return sum
}
let num=[1,2,3,4,5]
console.log(sumArray(num))