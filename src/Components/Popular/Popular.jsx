import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-medium tracking-wide mb-3">
            Trending Now
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
            Popular In Women
          </h2>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data_product.map((item, i) => {
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
          })}
        </div>

      </div>
    </section>
  );
};

export default Popular;
