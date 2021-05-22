"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = __importDefault(require("faker"));
var User = /** @class */ (function () {
    function User() {
        this.color = 'red';
        this.name = faker_1.default.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude())
        };
    }
    User.prototype.markerContent = function () {
        return "" + this.name;
    };
    return User;
}());
exports.User = User;
