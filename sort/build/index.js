"use strict";
exports.__esModule = true;
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
//const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
sorter.sort();
linkedList.print();
