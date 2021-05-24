class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const array = new ArrayOfAnything(['a', 'g']);

function printStrings(array: string[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function printNumbers(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function printAnything<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printAnything<string>(['a', 'g']);

class House {
  print() {
    console.log('house');
  }
}

class Car2 {
  print() {
    console.log('car');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    array[i].print();
  }
}
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car2>([new Car2(), new Car2()]);
