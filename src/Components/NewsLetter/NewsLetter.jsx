const NewsLetter = () => {
  return (
    <section className="bg-amber-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 mb-4">
          Get Exclusive Offers on Your Email
        </h1>

        <p className="text-zinc-600 mb-8 text-sm sm:text-base">
          Subscribe to our newsletter and stay updated
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your Email id"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />

          <button className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
