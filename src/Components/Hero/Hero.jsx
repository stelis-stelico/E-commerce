import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <div>
            <p className="text-amber-500 font-medium mb-4 tracking-wide">
              New Collection 2026
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Elevate Your <br /> Everyday Style
            </h1>

            <p className="text-gray-300 mb-8 max-w-md">
              Discover premium fashion crafted for modern living.
              Minimal design. Maximum impact.
            </p>

            <button className="bg-amber-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-400 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={hero_image}
              alt="Hero"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
