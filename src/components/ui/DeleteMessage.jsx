/* eslint-disable react/prop-types */

import { useShoppingCart } from "../../context/ShoppingCartContext";
import Button from "./Button";

function DeleteMessage({ onCloseModal, resourceName }) {
  const { dispatch } = useShoppingCart();

  return (
    <div className="p-6">
      <h3 className="text-center">
        Do you really want to delete{" "}
        <span className="font-bold">{resourceName}</span>?
      </h3>
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button
          type="danger"
          aditionalStyle={"text-lg"}
          onClick={() => dispatch({ type: "removeAll" })}
        >
          Delete
        </Button>
        <button onClick={onCloseModal}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteMessage;
