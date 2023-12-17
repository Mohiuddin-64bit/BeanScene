const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  p-default px-12">
      <div className="pt-12">
        <h1 className="text-secondary-color text-6xl font-bold">
          Discover the best coffee
        </h1>
        <p className="py-12 leading-7">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.Having a cup of coffee is good, but having a cup of real
          coffee is greater.There is no doubt that you will enjoy this coffee
          more than others you have ever tasted.
        </p>
        <button className="custom-btn">Learn More</button>
      </div>
      <div className="lg:ml-auto mx-auto">
        <img src="img/coffee-beans.png" alt="description" />
      </div>
    </div>
  );
};

export default AboutSection;
