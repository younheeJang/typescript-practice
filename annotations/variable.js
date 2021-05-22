"use strict";
// primitive:
var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
//built in object:
var now = new Date();
//array:
var colort = ['red', 'yellow', 'blue'];
var numbers = [1, 2, 3];
var booleans = [true, true, false];
//class:
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//object literal:
var point = {
    x: 10,
    y: 20
};
//function:
var logNumber = function (i) {
    console.log(i);
};
//when to use annotations:
//1. function that returns the any type
var json = '{"x":10, "y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
//2. when declare a variable on one line and initialize it later:
var words = ['a', 'aa', 'aaa'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'a') {
        foundWord = true;
    }
}
//3. variable whose type cannot be inferred correctly:
var numbers1 = [-2, -33, 99];
var numberAboveZero = false;
for (var i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 0) {
        numberAboveZero = numbers1[i];
    }
}
