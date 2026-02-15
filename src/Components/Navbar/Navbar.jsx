import { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 sm:w-9" />
            <p className="text-xl sm:text-2xl font-semibold tracking-tight">
              <span className="text-zinc-900">SHOP</span>
              <span className="text-amber-500">PER</span>
            </p>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-700">
            <li
              onClick={() => setMenu("shop")}
              className="relative cursor-pointer hover:text-amber-500 transition duration-300"
            >
              <Link to="/">Shop</Link>
              {menu === "shop" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-amber-500 rounded"></span>
              )}
            </li>

            <li
              onClick={() => setMenu("men")}
              className="relative cursor-pointer hover:text-amber-500 transition duration-300"
            >
              <Link to="/men">Men</Link>
              {menu === "men" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-amber-500 rounded"></span>
              )}
            </li>

            <li
              onClick={() => setMenu("women")}
              className="relative cursor-pointer hover:text-amber-500 transition duration-300"
            >
              <Link to="/women">Women</Link>
              {menu === "women" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-amber-500 rounded"></span>
              )}
            </li>

            <li
              onClick={() => setMenu("kids")}
              className="relative cursor-pointer hover:text-amber-500 transition duration-300"
            >
              <Link to="/kids">Kids</Link>
              {menu === "kids" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-amber-500 rounded"></span>
              )}
            </li>
          </ul>

          {/* Login + Cart */}
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="hidden sm:block px-5 py-2 text-sm font-medium border border-zinc-900 rounded-lg hover:bg-zinc-900 hover:text-white transition duration-300">
                Login
              </button>
            </Link>

            <div className="relative">
              <Link to="/cart">
                <img
                  src={cart_icon}
                  alt="cart"
                  className="w-6 cursor-pointer"
                />
              </Link>

              <div className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getTotalCartItems()}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
