"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var routes_1 = require("./src/routes");
var app = (0, express_1.default)();
mongoose_1.default.connect("mongodb://localhost/ecommerce");
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
