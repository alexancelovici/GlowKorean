const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    idProd: { type: String, required: true },
    priceID: { type: String, required: true },
    currency: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
