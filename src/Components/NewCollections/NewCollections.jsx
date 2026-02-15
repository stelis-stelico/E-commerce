import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-amber-500 font-medium tracking-wide mb-2">
              Just Arrived
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
              New Collections
            </h2>
          </div>

          <div className="mt-4 sm:mt-0">
            <button className="px-6 py-2 border border-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-900 hover:text-white transition duration-300">
              View All
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {new_collections.map((item, i) => {
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

export default NewCollections;
