const Items = [
  {
    img: "img/coffee/1.png",
    name: "Cappuccino",
    desc: "Coffee 50% | Milk 50%",
    price: "8.50",
  },
  {
    img: "img/coffee/2.png",
    name: "Chai Latte",
    desc: "Coffee 50% | Milk 50%",
    price: "8.50",
  },
  {
    img: "img/coffee/3.png",
    name: "Macchiato",
    desc: "Coffee 50% | Milk 50%",
    price: "8.50",
  },
  {
    img: "img/coffee/4.png",
    name: "Expresso",
    desc: "Coffee 50% | Milk 50%",
    price: "8.50",
  },
];

const Products = () => {
  return (
    <div>
      <h1 className="custom-header text-center p-default ">
        Enjoy a new blend of coffee style
      </h1>
      <p className="text-center px-5">
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 px-12 md:px-8 2xl:px-72 mt-12">
        {Items.map((item, index) => (
          <div className="bg-[#FFF9F1] border relative" key={index}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="text-center pb-9 pt-5">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p>{item.desc}</p>
              <p className="font-bold text-lg">${item.price}</p>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <button className="custom-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
