let apple: number = 5;
let speed: string = "fast";
// speed = 2;
let nothingMuch: null = null;
let nothing: undefined = undefined;
//built in objects
let now: Date = new Date();

//array
let colors: string[] = ["red", "green"];
let numbersArr: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

//classes
class Car {}
let car = new Car();
let car2: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let num = 10; // still assigned type of number
// num = 'a'; // does not work

let anyValue;
anyValue = 10;
anyValue = "a";

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When declaring a variable on one line and init it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // bad code example

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Annotation round functions
