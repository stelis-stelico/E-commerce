import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2">
            <img src={footer_logo} alt="logo" className="w-8" />
            <p className="text-2xl font-semibold tracking-tight">
              <span className="text-zinc-900">SHOP</span>
              <span className="text-amber-500">PER</span>
            </p>
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-gray-600 font-medium mb-10">
          <li className="cursor-pointer hover:text-amber-500 transition duration-300">
            Company
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-300">
            Products
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-300">
            Offices
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-300">
            Contact
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <img
            src={instagram_icon}
            alt="instagram"
            className="w-5 cursor-pointer hover:scale-110 transition duration-300"
          />
          <img
            src={pinterest_icon}
            alt="pinterest"
            className="w-5 cursor-pointer hover:scale-110 transition duration-300"
          />
          <img
            src={whatsapp_icon}
            alt="whatsapp"
            className="w-5 cursor-pointer hover:scale-110 transition duration-300"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Shopper. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
