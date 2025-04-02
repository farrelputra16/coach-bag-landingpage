import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularBikesData = [
    {
      name: "pink leather",
      image: "/images/6489548.png",
    },
    {
      name: "coach bucket bag",
      image: "/images/Polygon Cascade.png",
    },
    {
      name: "coach shoulder bag",
      image: "/images/b2.png",
    },
    {
      name: "maroon shoulder bag",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "red leather tote bag",
      image: "/images/b1.png",
    },
    {
      name: "coach tote bag",
      image: "/images/531352.png",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">
          customer choice
        </h3>
        <h3 className="main-title to-left show-on-scroll">popular bags</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll">
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          {popularBikesData.map(({ name, image }, index) => (
            <PopularItem name={name} image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
