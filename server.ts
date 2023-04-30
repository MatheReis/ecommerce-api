import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes";

const app = express();

mongoose.connect("mongodb://localhost/ecommerce");

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
