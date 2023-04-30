"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../database/schemas/Product"));
class ProductController {
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.find();
                return response.json(products);
            }
            catch (error) {
                return response.status(500).send({
                    error: "Something went wrong",
                    message: error,
                });
            }
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, imageUrl, price, discount = 0, description } = request.body;
            try {
                const productExists = yield Product_1.default.findOne({ name });
                if (productExists) {
                    return response.status(400).send({
                        error: "Ooops",
                        message: "Product already exists",
                    });
                }
                const product = yield Product_1.default.create({
                    name,
                    imageUrl,
                    price,
                    discount,
                    description,
                });
                return response.json(product);
            }
            catch (error) {
                return response.status(500).send({
                    error: "Product registration failed",
                    message: error,
                });
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const product = yield Product_1.default.findByIdAndDelete(id);
                if (!product) {
                    return response.status(404).send({
                        error: "Ooops",
                        message: "Product not found",
                    });
                }
                return response.json(product);
            }
            catch (error) {
                return response.status(500).send({
                    error: "Product deletion failed",
                    message: error,
                });
            }
        });
    }
}
exports.default = new ProductController();
