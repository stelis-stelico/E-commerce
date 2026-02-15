import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT - Images */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3">
              <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-lg border" />
              <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-lg border" />
              <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-lg border" />
              <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-lg border" />
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={product.image}
                alt=""
                className="w-full rounded-xl object-cover shadow-sm"
              />
            </div>

          </div>

          {/* RIGHT - Product Info */}
          <div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <img src={star_icon} alt="" className="w-4" />
              <img src={star_icon} alt="" className="w-4" />
              <img src={star_icon} alt="" className="w-4" />
              <img src={star_icon} alt="" className="w-4" />
              <img src={star_dull_icon} alt="" className="w-4" />
              <p className="text-sm text-gray-500 ml-2">(122 reviews)</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-semibold text-zinc-900">
                ${product.new_price}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ${product.old_price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              A premium quality piece designed for comfort and style.
              Crafted with attention to detail for everyday luxury wear.
            </p>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-zinc-900 mb-3">
                Select Size
              </h3>
              <div className="flex gap-3">
                <div className="px-4 py-2 border rounded-lg cursor-pointer hover:border-zinc-900 transition">
                  S
                </div>
                <div className="px-4 py-2 border rounded-lg cursor-pointer hover:border-zinc-900 transition">
                  M
                </div>
                <div className="px-4 py-2 border rounded-lg cursor-pointer hover:border-zinc-900 transition">
                  L
                </div>
                <div className="px-4 py-2 border rounded-lg cursor-pointer hover:border-zinc-900 transition">
                  XL
                </div>
              </div>
            </div>

            {/* Add To Cart */}
            <button
              onClick={() => addToCart(product.id)}
              className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-amber-500 hover:text-black transition duration-300"
            >
              Add to Cart
            </button>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-6">
              Category: <span className="text-zinc-900 font-medium">{product.category}</span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDisplay;
