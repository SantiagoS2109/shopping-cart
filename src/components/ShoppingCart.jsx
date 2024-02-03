import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartItem from "./ShoppingCartItem";
import Button from "./ui/Button";
import DeleteMessage from "./ui/DeleteMessage";
import Modal from "./ui/Modal";
import { coupons } from "../data/coupons";

function ShoppingCart() {
  const { state, dispatch } = useShoppingCart();
  const [currentCoupon, setCurrentCoupon] = useState("");

  const items = state.items;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  function handleCouponSubmit(e) {
    e.preventDefault();

    if (!currentCoupon) return;

    const discount = coupons.find((coupon) => coupon.code === currentCoupon);

    if (!discount) {
      alert("Coupon not found");
      setCurrentCoupon("");
      return;
    }

    dispatch({ type: "discount", payload: discount });
    setCurrentCoupon("");
  }

  return (
    <section>
      <div className="px-6 py-3">
        <header className="mb-4">
          <h2 className="mb-2 text-2xl font-bold">Shopping Cart</h2>
          <p className="text-sm ">{totalItems} shirts in cart</p>
        </header>

        <ul className="mb-4 max-h-[224px] min-h-[224px] overflow-y-auto  border-b-[1px] border-t-[1px] border-slate-300 px-2 py-4 ">
          {!items.length && (
            <li className="text-center text-sm">No items in cart</li>
          )}
          {items.map((item) => (
            <ShoppingCartItem
              key={`item-${item.id}-${item.size}`}
              item={item}
            />
          ))}
        </ul>

        {items.length > 0 && (
          <footer>
            <h4 className="font-bold">Total:</h4>
            <span className="text-2xl font-bold">
              {!state.discount.discount && totalPrice.toFixed(2)} $
              {state.discount.discount &&
                (totalPrice * (1 - state.discount.discount / 100)).toFixed(2)}
            </span>

            {state.discount?.discount > 0 && (
              <div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400  line-through">
                    {totalPrice.toFixed(2)} $
                  </span>
                  <p className="text-sm font-bold text-greenBrand">
                    {state.discount.discount}% OFF
                  </p>
                </div>

                <p className="text-sm font-medium">
                  <span className="font-bold text-greenBrand">
                    {state.discount.code}
                  </span>{" "}
                  is applied
                </p>
              </div>
            )}

            <form className="mb-4 mt-2 flex gap-4">
              <input
                type="text"
                placeholder="Enter your coupon code"
                className="w-1/2 rounded-md border-[1px] border-slate-300 px-4 py-2 text-sm  outline-none ring-greenBrand/80 ring-offset-2  transition-all duration-300 focus:ring"
                value={currentCoupon}
                onChange={(e) => setCurrentCoupon(e.target.value)}
              />
              <Button onClick={handleCouponSubmit}>Submit</Button>
            </form>

            <Modal>
              <Modal.Open opens="checkout">
                <Button aditionalStyle={"block px-4 py-2 text-sm"}>
                  Remove all
                </Button>
              </Modal.Open>

              <Modal.Window name="checkout">
                <DeleteMessage resourceName={"all t-shirts in the cart"} />
              </Modal.Window>
            </Modal>
          </footer>
        )}
      </div>
    </section>
  );
}

export default ShoppingCart;
