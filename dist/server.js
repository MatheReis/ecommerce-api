"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb://localhost/ecommerce");
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
