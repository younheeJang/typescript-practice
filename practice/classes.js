"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // color: string;
    // constructor(color: string) {
    //   this.color = color;
    // }
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('beeeep');
    };
    return Vehicle;
}());
var Car1 = /** @class */ (function (_super) {
    __extends(Car1, _super);
    function Car1(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car1.prototype.drive = function () {
        console.log('bureung-bureung');
    };
    Car1.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car1;
}(Vehicle));
var car1 = new Car1(3, 'orange');
car1.startDrivingProcess();
var vehicle = new Vehicle('blue');
console.log(vehicle.color);
