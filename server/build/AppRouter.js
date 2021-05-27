"use strict";
exports.__esModule = true;
exports.AppRouter = void 0;
var express = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.getInstance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
