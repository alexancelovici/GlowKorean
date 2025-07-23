import { useParams, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import ProductContext from "../contexts/product/ProductContext";
import CartContext from "../contexts/cart/CartContext";
import { formatCLP } from "../utils/formatCLP";

export default function ProductDetail() {
  const { slug } = useParams();
  const { products } = useContext(ProductContext);
  const { products: cartProducts, updateCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!products || products.length === 0) return null;

  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/404" />;

  const handleAddToCart = () => {
    const exists = cartProducts.find((item) => item.slug === product.slug);
    const updatedCart = exists
      ? cartProducts.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cartProducts, { ...product, quantity }];

    updateCart(updatedCart);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-2">{formatCLP(product.price)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity">Cantidad:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border border-gray-300 px-2 py-1"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-brand-purple text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
