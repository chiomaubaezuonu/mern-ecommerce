import cors from "cors";
import express from "express";
import { Product } from "./Model/ProductModel.js";
import  userRoutes   from "./Routes/userRoutes.js"
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes)
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Mongodb successfully connected"))
  .catch((err) => console.error(err));

app.get("/products", (req, res) => {
  Product.find().then((result) => res.json(result));
});

app.post("/products", async (req, res) => {
  try {
    const newProductData = req.body;
    const savedProduct = await Product.create(newProductData);
    res
      .status(201)
      .json({ message: "Product created successfully", product: savedProduct });
  } catch (error) {
    console.error("Error creating product", error);
    res;
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await Product.findById(id);
    if (!singleProduct) {
      return res.status(404).json({ message: "No product found" });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      product: singleProduct,
    });
  } catch (error) {
    console.error("Error fetching Product", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sever is running on http://localhost:${PORT}`);
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "No product matches specified id" });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ message: "No product matches specified id." });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.patch("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedField = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedField) {
      return res
        .status(404)
        .json({ message: "No product matches specified id." });
    }
    res
      .status(200)
      .json({ message: "Field successfully updated", product: updatedField });
  } catch (error) {
    console.error("Error updating field", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});
