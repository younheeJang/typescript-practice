"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cookieSession = require("cookie-session");
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sdaf'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(2000, function () {
    console.log('2000');
});
