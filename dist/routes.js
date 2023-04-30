"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("./controller/ProductController"));
const routes = (0, express_1.Router)();
// Products
routes.get("/products", ProductController_1.default.findAll);
routes.post("/product", ProductController_1.default.create);
routes.delete("/product/:id", ProductController_1.default.delete);
exports.default = routes;
