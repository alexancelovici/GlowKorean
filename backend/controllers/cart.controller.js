const Cart = require("../models/cart.model");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.getCart = async (req, res) => {
  const userId = req.user.id;
  let cart = await Cart.findOne({ userId });
  if (!cart) cart = await Cart.create({ userId, products: [] });
  res.json({ cart });
};

exports.editCart = async (req, res) => {
  const userId = req.user.id;
  const { products } = req.body;

  if (!Array.isArray(products)) {
    return res.status(400).json({ message: "Products must be an array" });
  }

  const updatedCart = await Cart.findOneAndUpdate(
    { userId },
    { products },
    { new: true, upsert: true }
  );

  res.json({
    message: "Carrito actualizado correctamente",
    cart: updatedCart,
  });
};

exports.createCheckoutSession = async (req, res) => {
  const userId = req.user.id;
  const userEmail = req.user.email; // Desde el token JWT
  const cart = await Cart.findOne({ userId });

  if (!cart || cart.products.length === 0) {
    return res.status(400).json({ message: "Carrito vacío" });
  }

  const line_items = cart.products.map(item => ({
    price: item.priceID,
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
    customer_email: userEmail,
  });

  res.json({ url: session.url });
};
