"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
mongoose_1.default.connect("mongodb://localhost/ecommerce");
mongoose_1.set('strictQuery', false);
app.use(express_1.default.json());
app.use(routes_1.default);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
