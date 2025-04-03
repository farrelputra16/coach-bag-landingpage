import SlideItem from "./SlideItem";

const Hero = () => {
  const slideData = [
    {
      name: "ORDER",
      image: "/images/MTBROMO_N7_2022.png",
      description: [
        "1. DM me the bag(s) you're interested in, and I will confirm availability",
        "2. Send payment via Zelle (preferred), Apple Pay, or Cash App",
        "3. Same/next day shipping offered with USPS Priority Mail",
        "4. I send you the shipping confirmation and tracking info ASAP",
      ],
    },
    {
      name: "INFORMATION",
      image: "/images/6489548.png",
      description: [
        "1. Prices are firm unless you have a discount",
        "2. US shipping only",
        "3. Forms of payment accepted: Zelle, Apple Pay, Cash App",
        "4. Items are final sale, no returns or exchanges",
      ],
    },
    {
      name: "DISCOUNTS",
      image: "/images/b1.png",
      description: [
        "1. 10% off to returning customers",
        "2. 15% off when you bundle 2 or more items",
        "3. 15% off to returning customers that posted review on their story",
      ],
    },
    {
      name: "HOLDS",
      image: "/images/b2.png",
      description: [
        "1. In order to put a bag on hold, you must pay 25% non-refundable deposit, which will be applied towards your purchase",
        "2. You will have up to 10 days to complete payment",
        "3. Once the final payment is received, I will ship your bag the same or next day with Priority Mail",
      ],
    },
  ];

  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        {slideData.map(({ name, image, description }, index) => (
          <SlideItem
            name={name}
            image={image}
            description={description}
            key={index}
          />
        ))}
        <div className="hero-txt">y2kcoach</div>
        <ul className="slide-control">
          <li className="slide-prev">
            <i className="bx bx-chevron-left"></i>
          </li>
          <li className="slide-control-item active">01</li>
          <li className="slide-control-item">02</li>
          <li className="slide-control-item">03</li>
          <li className="slide-control-item">04</li>
          <li className="slide-next">
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </div>
      <div className="bg-image-3"></div> {/* Added for Sonny Angels */}
    </div>
  );
};

export default Hero;