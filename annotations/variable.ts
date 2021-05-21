// primitive:
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in object:
let now: Date = new Date();

//array:
let colort: string[] = ['red', 'yellow', 'blue'];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, true, false];

//class:
class Car {}

let car: Car = new Car();

//object literal:
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function:
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations:
//1. function that returns the any type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2. when declare a variable on one line and initialize it later:
let words = ['a', 'aa', 'aaa'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'a') {
    foundWord = true;
  }
}

//3. variable whose type cannot be inferred correctly:
let numbers1 = [-2, -33, 99];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    numberAboveZero = numbers1[i];
  }
}
