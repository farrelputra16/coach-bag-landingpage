import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularBikesData = [
    {
      name: "popular",
      image: "/images/6489548.png",
    },
    {
      name: "popular",
      image: "/images/Polygon Cascade.png",
    },
    {
      name: "popular",
      image: "/images/b2.png",
    },
    {
      name: "popular",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "popular",
      image: "/images/b1.png",
    },
    {
      name: "popular",
      image: "/images/531352.png",
    },
  ];

  return (
    <div className="section popular-section-bg">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">
          customer choice
        </h3>
        <h3 className="main-title to-left show-on-scroll">popular bags</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll"></div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          {popularBikesData.map(({ name, image }, index) => (
            <PopularItem name={name} image={image} key={index} />
          ))}
        </div>
      </div>
      <div className="bg-image-3"></div> {/* Added for Sonny Angels */}
    </div>
  );
};

export default PopularSection;