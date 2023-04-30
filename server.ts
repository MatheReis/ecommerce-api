import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes";


const app = express();

mongoose.connect("mongodb://localhost/ecommerce");

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
