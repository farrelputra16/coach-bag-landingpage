import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularBikesData = [
    { name: "popular", image: "/images/testimonial1.jpg" },
    { name: "popular", image: "/images/testimonial2.jpg" },
    { name: "popular", image: "/images/testimonial3.jpg" },
    { name: "popular", image: "/images/testimonial4.jpg" },
    { name: "popular", image: "/images/testimonial5.jpg" },
    { name: "popular", image: "/images/testimonial6.jpg" },
    { name: "popular", image: "/images/testimonial7.jpg" },
  ];

  return (
    <div className="section popular-section-bg">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">
          Testimonials & Reviews
        </h3>
        <h3 className="main-title to-left show-on-scroll"></h3>
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