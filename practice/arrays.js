"use strict";
var carMakers = ['benz', 'toyota', 'audi'];
var dates = [new Date(), new Date()];
var carsByMake = [];
//help with inference when extracting values
var aCar = carMakers[0];
var myCar = carMakers.pop();
//help with map:
carMakers.map(function (car) {
    return car;
});
//flexible types:
var importantDates = [new Date(), '2020-01-01'];
