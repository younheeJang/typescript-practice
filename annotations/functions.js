"use strict";
var add = function (a, b) {
    return a + b;
};
var substract = function (a, b) {
    return a - b;
};
var devide = function (a, b) {
    return a / b;
};
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
