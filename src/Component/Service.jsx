import { GiCoffeeBeans } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { TbCoffee } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";

const items = [
  {
    icon: <GiCoffeeBeans className="mx-auto" />,
    title: "Quality Coffee",
    desc: "Our coffee is made with the finest beans, expertly roasted and blended to create the perfect cup.",
  },
  {
    icon: <SlBadge className="mx-auto" />,
    title: "Best Ingredients",
    desc: "We use only the best ingredients to make your favourite coffee blend.",
  },
  {
    icon: <TbCoffee className="mx-auto" />,
    title: "Quality Coffee",
    desc: "Our coffee is made with the finest beans, expertly roasted and blended to create the perfect cup.",
  },
  {
    icon: <CiBadgeDollar className="mx-auto" />,
    title: "Best Ingredients",
    desc: "We use only the best ingredients to make your favourite coffee blend.",
  },
];

const Service = () => {
  return (
    <div>
      <h1 className="custom-header text-center p-default ">
        Why are we different?
      </h1>
      <p className="text-center px-5">
        We don’t just make your coffee, we make your day!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 px-12 md:px-8 2xl:px-72 mt-12">
        {items.map((item, index) => (
          <div
            className="bg-[#FFF9F1] transition-all hover:bg-[#FFEED8] border relative"
            key={index}
          >
            <div className="text-center pb-9 pt-5">
              <div className="pb-9 pt-5 text-[80px]">{item.icon}</div>
              <h3 className="font-bold text-2xl pb-2 text-secondary-color">
                {item.title}
              </h3>
              <p className="px-8">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="">Great ideas start with great coffee, Lets help you achieve that</p>
        <h4 className="text-3xl text-secondary-color font-bold">Get started today.</h4>
        <button className="custom-btn mt-4">Join Us</button>
      </div>
    </div>
  );
};

export default Service;
