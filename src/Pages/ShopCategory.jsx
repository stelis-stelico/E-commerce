import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="mb-10">
          <img
            src={props.banner}
            alt="category-banner"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">

          {/* Showing Text */}
          <p className="text-sm text-gray-600">
            <span className="font-medium text-zinc-900">
              Showing 1 – 12
            </span>{" "}
            out of {all_product.length} products
          </p>

          {/* Sort Box */}
          <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:border-zinc-900 transition duration-300">
            <span className="text-sm font-medium text-zinc-700">
              Sort by
            </span>
            <img src={dropdown_icon} alt="dropdown" className="w-3" />
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

      </div>
    </section>
  );
};

export default ShopCategory;
