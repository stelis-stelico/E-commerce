import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto bg-amber-50 rounded-3xl overflow-hidden shadow-sm">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left Side */}
          <div className="p-10 sm:p-16 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Exclusive <br className="hidden sm:block" />
              Offers for You
            </h1>

            <p className="mt-4 text-zinc-600 text-sm sm:text-base tracking-wide">
              ONLY ON BEST SELLERS PRODUCT
            </p>

            <button className="mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition duration-300">
              Check Now
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-auto p-6 sm:p-10">
            <img
              src={exclusive_image}
              alt="exclusive offer"
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
