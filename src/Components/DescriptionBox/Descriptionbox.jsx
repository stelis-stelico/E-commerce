const Descriptionbox = () => {
  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Navigator */}
        <div className="flex border-b border-gray-200">
          <div className="px-6 py-3 text-sm font-medium text-zinc-900 border-b-2 border-amber-500 cursor-pointer">
            Description
          </div>
          <div className="px-6 py-3 text-sm font-medium text-zinc-500 cursor-pointer hover:text-amber-500 transition">
            Reviews (122)
          </div>
        </div>

        {/* Description Content */}
        <div className="mt-6 text-sm sm:text-base text-zinc-600 leading-relaxed space-y-4">
          <p>An e-commerce website is an online platform</p>
          <p>E-commerce website typically display product</p>
        </div>

      </div>
    </section>
  );
};

export default Descriptionbox;
