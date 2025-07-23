const Product = require("../models/product.model");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.getAllProducts = async (req, res) => {
  try {
    const productos = await Product.find({});
    res.json({ productos });
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los productos" });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, description, img, currency, slug } = req.body;

  try {
    const product = await stripe.products.create({
      name,
      description,
      images: [img],
      metadata: { productDescription: description, slug }
    });

    const stripePrice = await stripe.prices.create({
      unit_amount: price,
      currency,
      product: product.id
    });

    const newProduct = await Product.create({
      idProd: product.id,
      priceID: stripePrice.id,
      name,
      price,
      description,
      img,
      slug,
      currency
    });

    res.json(newProduct);
  } catch (error) {
    res.status(500).json({
      msg: "Error al crear el producto",
      error
    });
  }
};

exports.updateProductById = async (req, res) => {
  const { name, price, description, img } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, img },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(200).json({ updatedProduct });
  } catch (error) {
    return res.status(500).json({
      msg: "Error actualizando el producto",
      error: error.message
    });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const productoBorrado = await Product.findByIdAndDelete(req.params.id);
    res.json(productoBorrado);
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar el producto" });
  }
};
