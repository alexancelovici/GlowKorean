require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const Product = require("./models/product.model");

const filePath = path.join(__dirname, "products.json");

const insertProducts = async () => {
  try {
    // Verifica que el archivo existe
    if (!fs.existsSync(filePath)) {
      throw new Error("El archivo products.json no existe.");
    }

    const rawData = fs.readFileSync(filePath);
    const products = JSON.parse(rawData);

    // Conexión a MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Limpieza previa (opcional)
    await Product.deleteMany();
    console.log("🧼 Productos anteriores eliminados");

    // Inserción
    await Product.insertMany(products);
    console.log("✅ Productos insertados correctamente");

    process.exit();
  } catch (err) {
    console.error("❌ Error insertando productos:", err.message);
    process.exit(1);
  }
};

insertProducts();

