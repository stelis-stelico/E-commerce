import { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo} alt="logo" className="cursor-pointer w-8 sm:w-9" />
            </Link>
            <Link to="/">
              <p className="cursor-pointer text-xl sm:text-2xl font-semibold tracking-tight">
                <span className="text-zinc-900">SHOP</span>
                <span className="text-amber-500">PER</span>
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-700">
            {["shop", "men", "women", "kids"].map((item) => (
              <li
                key={item}
                onClick={() => setMenu(item)}
                className="relative cursor-pointer hover:text-amber-500 transition duration-300"
              >
                <Link to={item === "shop" ? "/" : `/${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
                {/* {menu === item && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-amber-500 rounded"></span>
                )} */}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-6">

            <Link to="/login">
              <button className=" px-5 py-2 text-sm font-medium border border-zinc-900 rounded-lg hover:bg-zinc-900 hover:text-white transition duration-300">
                Login
              </button>
            </Link>

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <img src={cart_icon} alt="cart" className="w-6 cursor-pointer" />
              </Link>

              <div className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getTotalCartItems()}
              </div>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5"
            >
              <span className="w-6 h-0.5 bg-zinc-800"></span>
              <span className="w-6 h-0.5 bg-zinc-800"></span>
              <span className="w-6 h-0.5 bg-zinc-800"></span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-6">
            <ul className="flex flex-col gap-6 text-sm font-medium text-zinc-700">
              {["shop", "men", "women", "kids"].map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setMenu(item);
                    setMenuOpen(false);
                  }}
                  className="relative cursor-pointer hover:text-amber-500 transition duration-300"
                >
                  <Link to={item === "shop" ? "/" : `/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                  {menu === item && (
                    <span className="block mt-1 w-6 h-[2px] bg-amber-500 rounded"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
