const Banner = () => {
  return (
    <div className="mt-12">
      <div className='h-[41rem] bg-[url("img/banner.png")] bg-no-repeat bg-cover bg relative'>
        <div className="absolute inset-0 bg-[#6F4E37] opacity-50"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-56 items-center top-1/2 -translate-y-1/2   justify-items-center ">
          <div className="text-white px-5 md:px-12 flex flex-col justify-center">
            <h3 className=" text-[54px] leading-tight font-bold">
              Get a chance to have an Amazing morning
            </h3>
            <p className="my-4">
              We are giving you are one time opportunity to
              <br /> experience a better life with coffee.
            </p>
            <div>
              <button className="custom-btn">Order Now</button>
            </div>
          </div>

          <div className="lg:block hidden">
            <img src="img/cup.png" alt="" />
          </div>
          <img
            className="absolute lg:block hidden -z-20 -top-1 right-0"
            src="img/coffee-beans2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
