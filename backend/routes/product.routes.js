const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductBySlug // 👈 agregalo si no está
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);

// 👇 ESTA es la ruta que te falta
productRouter.get("/:slug", getProductBySlug);

module.exports = productRouter;

