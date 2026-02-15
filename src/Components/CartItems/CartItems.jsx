import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Cart = () => {
  const {
    cartItems,
    all_product,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-semibold text-zinc-900 mb-10">
          Shopping Cart
        </h1>

        {/* Cart Table Header */}
        <div className="hidden sm:grid grid-cols-6 text-sm font-medium text-gray-600 border-b pb-4 mb-6">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div
                  key={e.id}
                  className="grid grid-cols-2 sm:grid-cols-6 items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <img
                    src={e.image}
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <p className="text-sm text-zinc-900 font-medium">
                    {e.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    ${e.new_price}
                  </p>

                  <button className="w-12 h-10 border rounded-lg text-sm">
                    {cartItems[e.id]}
                  </button>

                  <p className="text-sm font-medium text-zinc-900">
                    ${e.new_price * cartItems[e.id]}
                  </p>

                  <img
                    src={remove_icon}
                    alt=""
                    onClick={() => removeFromCart(e.id)}
                    className="w-4 cursor-pointer hover:scale-110 transition"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Cart Summary */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10">

          {/* Totals */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-zinc-900">
              Cart Totals
            </h2>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-zinc-900">
              <span>Total</span>
              <span>${getTotalCartAmount()}</span>
            </div>

            <button className="w-full mt-4 bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-amber-500 hover:text-black transition duration-300">
              Proceed to Checkout
            </button>
          </div>

          {/* Promo Code */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">
              Promo Code
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Enter your promo code if you have one.
            </p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-zinc-900"
              />
              <button className="px-6 bg-zinc-900 text-white rounded-lg text-sm hover:bg-amber-500 hover:text-black transition duration-300">
                Apply
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;
