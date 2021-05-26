"use strict";
exports.__esModule = true;
var express = require("express");
var loginRoutes_1 = require("./routes/loginRoutes");
var bodyParser = require("body-parser");
var cookieSession = require("cookie-session");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sdaf'] }));
app.use(loginRoutes_1.router);
app.get('/', function (req, res) {
    res.send("\n    <div>hi</div>\n    ");
});
app.listen(2000, function () {
    console.log('2000');
});
