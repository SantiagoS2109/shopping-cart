/* eslint-disable react/prop-types */

import { useShoppingCart } from "../context/ShoppingCartContext";
import Button from "./ui/Button";

function ShoppingCartItem({ item }) {
  const { dispatch } = useShoppingCart();

  return (
    <li className="mb-3 flex justify-between last:mb-0">
      <div>
        <h3 className="text-sm">
          <span className="font-bold">{item.quantity}x</span> {item.name}
        </h3>
        <p className="text-sm">Talla: {item.size}</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-bold">{item.price} $</span>
        <Button
          onClick={() => dispatch({ type: "remove", payload: item })}
          type="danger"
          aditionalStyle={"text-sm px-3 py-2"}
        >
          Remove
        </Button>
      </div>
    </li>
  );
}

export default ShoppingCartItem;
