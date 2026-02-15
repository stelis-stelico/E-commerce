const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
          Sign Up
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />
        </div>

        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-300 mt-6">
          Continue
        </button>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <span className="text-amber-500 font-medium cursor-pointer hover:underline">
            Login Here
          </span>
        </p>

        <div className="flex items-start gap-2 mt-6 text-sm text-gray-600">
          <input type="checkbox" className="mt-1 accent-amber-500" />
          <p>
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
