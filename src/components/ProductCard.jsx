/* eslint-disable react/prop-types */

import { useShoppingCart } from "../context/ShoppingCartContext";

function ProductCard({ product }) {
  const { dispatch } = useShoppingCart();

  function handleAddToCart(e) {
    e.preventDefault();

    dispatch({ type: "add", payload: { ...product, quantity: 1 } });
  }

  return (
    <li className="flex flex-col rounded-md bg-white p-4 shadow-lg">
      <picture className="relative aspect-square h-auto w-full rounded-md">
        <img
          className="rounded-sm object-cover"
          src="https://unblast.com/wp-content/uploads/2023/10/Blank-T-shirt-Mockup-PSD-1536x1306.jpg"
          alt="T-shirt mockup"
        />
        <p className="absolute bottom-0 left-0 inline rounded-tr-md bg-white px-2 py-1 font-bold text-greenBrand">
          {product.price} $
        </p>
      </picture>

      <div className="mt-6 flex flex-col">
        <h2 className="mb-2 font-bold">{product.name}</h2>
        <p className="mb-6 text-sm">{product.description}</p>
      </div>

      <form className="mt-auto flex justify-between">
        <select
          className="w-12 rounded-md bg-slate-200 p-2 font-bold outline-none transition-all duration-300 focus:ring-1 focus:ring-greenBrand focus:ring-offset-2"
          name="sizeSelect"
          id="size"
        >
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
        </select>
        <button
          onClick={handleAddToCart}
          className="rounded-md bg-greenBrand px-2 py-1 text-xs font-medium text-white"
        >
          Añadir al carrito
        </button>
      </form>
    </li>
  );
}

export default ProductCard;
