import { Router } from "express";
import ProductController from "./controller/ProductController";

const routes = Router();

// Products
routes.get("/products", ProductController.findAll);
routes.post("/product", ProductController.create);
routes.delete("/product/:id", ProductController.delete);

export default routes;