/* eslint-disable react/prop-types */

import { useShoppingCart } from "../context/ShoppingCartContext";

function ShoppingCartItem({ item }) {
  const { dispatch } = useShoppingCart();

  return (
    <li className="mb-3 flex justify-between last:mb-0">
      <div>
        <h3 className="text-sm">
          <span className="font-bold">{item.quantity}x</span> {item.name}
        </h3>
        <p className="text-sm">Talla: S</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-bold">{item.price} $</span>
        <button
          onClick={() => dispatch({ type: "remove", payload: item })}
          className="block rounded-md bg-greenBrand px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-red-400"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default ShoppingCartItem;
