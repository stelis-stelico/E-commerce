import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
            Related Products
          </h1>
          <div className="w-16 h-[3px] bg-amber-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
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

export default RelatedProducts;
