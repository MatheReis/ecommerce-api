import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost/ecommerce");

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
function routes(routes: any) {
  throw new Error("Function not implemented.");
}

