const User = require("../models/user.model");
const Cart = require("../models/cart.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTRO DE USUARIO
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hashear contraseña
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // 1. Crear el usuario primero
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // 2. Crear el carrito con el userId del nuevo usuario
    const newCart = await Cart.create({
      userId: newUser._id,
      products: []
    });

    // 3. (Opcional) Asociar cart al usuario, si tu modelo lo tiene
    // newUser.cart = newCart._id;
    // await newUser.save();

    return res.json({
      msg: "Usuario y carrito creados correctamente",
      user: newUser,
      cart: newCart
    });

  } catch (error) {
    return res.status(400).json({
      msg: error.message || "Error creando usuario"
    });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ msg: "Username does not exist" });
    }

    const passCorrecto = await bcryptjs.compare(password, foundUser.password);
    if (!passCorrecto) {
      return res
        .status(400)
        .json({ msg: "The username or password does not correspond" });
    }

    const payload = { user: { id: foundUser.id } };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) throw error;

        const isProd = process.env.NODE_ENV === "production";
        res
          .cookie("token", token, {
            httpOnly: true,
            secure: isProd,
            sameSite: isProd ? "None" : "Lax",
            maxAge: 24 * 60 * 60 * 1000,
          })
          .json({ msg: "Login successful" });
      }
    );
  } catch (error) {
    res.status(500).json({
      msg: "Login failed",
      error: error.message,
    });
  }
};

// VERIFICAR USUARIO AUTENTICADO
exports.verifyUser = async (req, res) => {
  try {
    const usuario = await User.findById(req.user.id).select("-password");
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({
      msg: "Error verificando usuario",
      error: error.message,
    });
  }
};

// ACTUALIZAR USUARIO
exports.updateUser = async (req, res) => {
  const newDataForOurUser = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      newDataForOurUser,
      { new: true }
    ).select("-password");

    res.json({
      msg: "Usuario actualizado con éxito.",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error actualizando el usuario.",
      error: error.message,
    });
  }
};

// LOGOUT
exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });
  return res.json({ msg: "Logout successful" });
};

