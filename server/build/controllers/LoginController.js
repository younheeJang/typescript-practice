"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\"/>\n      </div>\n      <button>Submit</button>\n    </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'hi@hi.com' && password === 'password') {
            req.session = { loggedIn: true };
            console.log('req.session: ' + req.session);
            res.redirect('/');
        }
        else {
            res.send('invalid email or password');
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorators_1.get('/login')
    ], LoginController.prototype, "getLogin");
    __decorate([
        decorators_1.post('/login'),
        decorators_1.bodyValidator('email', 'password')
    ], LoginController.prototype, "postLogin");
    __decorate([
        decorators_1.get('/logout')
    ], LoginController.prototype, "getLogout");
    LoginController = __decorate([
        decorators_1.controller('/auth')
    ], LoginController);
    return LoginController;
}());
