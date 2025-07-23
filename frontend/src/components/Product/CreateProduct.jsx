import { useState } from "react";
import axios from "../../config/axios";

function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    currency: "clp",
    slug: "",
    img: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/products", form);
      alert("✅ Producto creado correctamente");
      console.log(res.data);
    } catch (error) {
      alert("❌ Error al crear producto");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto space-y-4">
      <h2 className="text-xl font-bold">Crear nuevo producto</h2>
      <input name="name" placeholder="Nombre" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="description" placeholder="Descripción" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="price" type="number" placeholder="Precio" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="slug" placeholder="Slug único" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="img" placeholder="URL de la imagen" onChange={handleChange} required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Crear producto
      </button>
    </form>
  );
}

export default CreateProduct;
