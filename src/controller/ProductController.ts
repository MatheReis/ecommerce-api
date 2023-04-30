import { Request, Response } from "express";
import Product from "../database/schemas/Product";

class ProductController {
  async findAll(request: Request, response: Response) {
    try {
      const products = await Product.find();
      return response.json(products);
    } catch (error) {
      return response.status(500).send({
        error: "Something went wrong",
        message: error,
      });
    }
  }

  async create(request: Request, response: Response) {
    const { name, imageUrl, price, discount = 0, description, category } = request.body;

    try {
      const productExists = await Product.findOne({ name });

      if (productExists) {
        return response.status(400).send({
          error: "Ooops",
          message: "Product already exists",
        });
      }

      const product = await Product.create({
        name,
        imageUrl,
        price,
        discount,
        description,
        category,
      });

      return response.json(product);
    } catch (error) {
      return response.status(500).send({
        error: "Product registration failed",
        message: error,
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const product = await Product.findByIdAndDelete(id);

      if (!product) {
        return response.status(404).send({
          error: "Ooops",
          message: "Product not found",
        });
      }

      return response.json(product);
    } catch (error) {
      return response.status(500).send({
        error: "Product deletion failed",
        message: error,
      });
    }
  }
}

export default new ProductController();
