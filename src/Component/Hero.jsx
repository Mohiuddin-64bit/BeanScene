const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[80vh] bg-cover bg-center bg-[url('img/hero.png')]"
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className=" lg:text-left text-center text-neutral-content">
          <div className="grid lg:grid-cols-3 px-24 mt-12 ">
            <div className="col-span-2 lg:col-span-1">
              <p className="mb-3">We’ve got your morning covered with</p>
              <p className="mb-5 text-6xl md:text-[120px] lg:text-[220px]  font-clicker text-white">
                Coffee
              </p>
              <p className="mb-5">
                It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best for
                our customers.
              </p>
              <button className="custom-btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
