"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductController_1 = require("./controller/ProductController");
var routes = (0, express_1.Router)();
// Products
routes.get("/products", ProductController_1.default.findAll);
routes.post("/product", ProductController_1.default.create);
routes.delete("/product/:id", ProductController_1.default.delete);
exports.default = routes;
