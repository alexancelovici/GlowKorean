const express = require("express");
const router = express.Router();
const auth = require("../middleware/authorization");
const {
  getCart,
  editCart,
  createCheckoutSession,
} = require("../controllers/cart.controller");

router.get("/get-cart", auth, getCart);
router.put("/edit-cart", auth, editCart);
router.get("/create-checkout-session", auth, createCheckoutSession);

module.exports = router;
