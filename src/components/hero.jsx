function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700">

      <div className="container py-20 flex items-center">

        <div className="text-white max-w-xl">

          <h1 className="text-5xl font-bold">
            Big Shopping Sale
          </h1>

          <p className="text-xl mt-5">
            Get amazing deals on electronics, fashion and more.
          </p>


          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500">
            Shop Now
          </button>

        </div>


      </div>

    </section>
  );
}

export default Hero;