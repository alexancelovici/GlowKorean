const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  priceID: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String },
  slug: { type: String },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  products: [cartItemSchema],
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
