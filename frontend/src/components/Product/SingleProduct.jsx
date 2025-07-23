import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCLP } from "../../utils/formatCLP.js";
import UserContext from "../../contexts/user/UserContext.js";
import ProductContext from "../../contexts/product/ProductContext.jsx";
import { useContext, useEffect, useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location?.state;

  const userCtx = useContext(UserContext);
  const { authStatus, cart, editCart, getCart } = userCtx;

  const { setCurrentProduct } = useContext(ProductContext);

  useEffect(() => {
    if (!product) {
      navigate("/productos");
      return;
    }

    setCurrentProduct(product);
    getCart();
  }, []);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (quantity === 0) return;

    const item = {
      priceID: product.priceID,
      name: product.name,
      quantity,
      price: product.price,
      img: product.img,
      slug: product.slug,
    };

    const existingItemIndex = cart.findIndex((el) => el.priceID === item.priceID);
    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cart.map((el, i) =>
        i === existingItemIndex ? { ...el, quantity: item.quantity } : el
      );
    } else {
      updatedCart = [...cart, item];
    }

    await editCart(updatedCart);
  };

  if (!product) return null;

  const { name, description, img, price } = product;
  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <main className="max-w-5xl mx-auto pt-16 pb-24 px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        <section>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-4">{description}</p>
          <p className="mt-4 text-xl font-semibold">Precio: {formatCLP(price)}</p>

          {authStatus ? (
            <form onSubmit={handleSubmit} className="mt-8">
              <label className="block mb-2 font-medium text-gray-700">Cantidad</label>
              <select
                className="w-32 border border-gray-300 rounded-md p-2"
                value={quantity}
                onChange={handleChange}
              >
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>

              <button type="submit" className="btn-product mt-6" disabled={quantity === 0}>
                {cart.length ? "Modificar carrito" : "Agregar al carrito"}
              </button>
            </form>
          ) : (
            <Link to="/registro">
              <button className="btn-product mt-6">Regístrate para comprar</button>
            </Link>
          )}
        </section>

        <figure>
          <img src={img} alt={description} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </figure>
      </div>
    </main>
  );
};

export default SingleProduct;

