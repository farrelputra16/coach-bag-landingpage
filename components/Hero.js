import SlideItem from "./SlideItem";

const Hero = () => {
  const bikeData = [
    {
      name: "Maroon Red",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "Pink Leather",
      image: "/images/6489548.png",
    },
    {
      name: "Red Signature",
      image: "/images/b1.png",
    },
  ];

  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        {bikeData.map(({ name, image }, index) => (
          <SlideItem name={name} image={image} key={index} />
        ))}

        <div className="hero-txt">y2kcoach</div>

        <ul className="slide-control">
          <li className="slide-prev">
            <i className="bx bx-chevron-left"></i>
          </li>
          <li className="slide-control-item active">01</li>
          <li className="slide-control-item">02</li>
          <li className="slide-control-item">03</li>
          <li className="slide-next">
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
