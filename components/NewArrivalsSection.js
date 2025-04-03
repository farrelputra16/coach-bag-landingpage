import NewArrivalItem from "./NewArrivalItem";

const NewArrivalsSection = () => {
  const newArrivalBikes = [
    {
      name: "new collections",
      image: "/images/b2.png",
    },
    {
      name: "new collections",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "new collections",
      image: "/images/b1.png",
    },
    {
      name: "new collections",
      image: "/images/531352.png",
    },
  ];

  return (
    <div className="section new-arrivals-bg">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">new collections</h3>
        <h3 className="main-title to-left show-on-scroll">new arrivals</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll"></div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-5 col-center">
            <div className="to-right show-on-scroll">
              <div className="product-card product-card-large">
                <a href="#">
                  <div className="product-card-img">
                    <img src="/images/Polygon Cascade.png" alt="" />
                  </div>
                  <h3 className="product-name">coach bucket bag</h3>
                  <span className="product-price">$155.0</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              {newArrivalBikes.map(({ image, name }, index) => (
                <NewArrivalItem key={index} image={image} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image-3"></div> {/* Added for Sonny Angels */}
    </div>
  );
};

export default NewArrivalsSection;