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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("../database/schemas/Product");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.findAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var products, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_1.default.find()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, response.json(products)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).send({
                                error: "Something went wrong",
                                message: error_1,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, imageUrl, price, _b, discount, description, category, productExists, product, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.body, name = _a.name, imageUrl = _a.imageUrl, price = _a.price, _b = _a.discount, discount = _b === void 0 ? 0 : _b, description = _a.description, category = _a.category;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Product_1.default.findOne({ name: name })];
                    case 2:
                        productExists = _c.sent();
                        if (productExists) {
                            return [2 /*return*/, response.status(400).send({
                                    error: "Ooops",
                                    message: "Product already exists",
                                })];
                        }
                        return [4 /*yield*/, Product_1.default.create({
                                name: name,
                                imageUrl: imageUrl,
                                price: price,
                                discount: discount,
                                description: description,
                                category: category,
                            })];
                    case 3:
                        product = _c.sent();
                        return [2 /*return*/, response.json(product)];
                    case 4:
                        error_2 = _c.sent();
                        return [2 /*return*/, response.status(500).send({
                                error: "Product registration failed",
                                message: error_2,
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Product_1.default.findByIdAndDelete(id)];
                    case 2:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, response.status(404).send({
                                    error: "Ooops",
                                    message: "Product not found",
                                })];
                        }
                        return [2 /*return*/, response.json(product)];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).send({
                                error: "Product deletion failed",
                                message: error_3,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = new ProductController();