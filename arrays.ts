const carMakers: string[] = ['benz', 'toyota', 'audi'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [];

//help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

//help with map:
carMakers.map((car: string) => {
  return car;
});

//flexible types:
const importantDates: (Date | string)[] = [new Date(), '2020-01-01'];
