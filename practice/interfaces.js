"use strict";
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "" + this.name;
    }
};
var drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 0,
    summary: function () {
        return "" + this.sugar;
    }
};
var printSummary = function (item) {
    console.log("" + item.summary());
};
printSummary(oldCivic);
printSummary(drink1);
