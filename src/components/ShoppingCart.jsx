import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const { state } = useShoppingCart();
  const items = state.items;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section>
      <div className="p-4">
        <header className="mb-4">
          <h2 className="mb-2 text-2xl font-bold">Shopping Cart</h2>
          <p className="text-sm ">{totalItems} shirts in cart</p>
        </header>

        <ul className="mb-4 max-h-[224px] min-h-[224px]  overflow-y-auto border-b-[1px] border-t-[1px] border-slate-300 py-4 ">
          {!items.length && (
            <li className="text-center text-sm">No items in cart</li>
          )}
          {items.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </ul>

        {items.length > 0 && (
          <footer>
            <h4 className="font-bold">Total:</h4>
            <span className="text-2xl font-bold">
              {totalPrice.toFixed(2)} $
            </span>
          </footer>
        )}
      </div>
    </section>
  );
}

export default ShoppingCart;
