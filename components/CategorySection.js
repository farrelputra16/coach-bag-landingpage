import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  const categoryData = [
    {
      category: "DEPOP",
      image: "/images/alvan-nee-EHILKZNmTuA-unsplash.jpg",
      link: "https://www.depop.com/y2kcoachh/",
    },
    {
      category: "INSTAGRAM",
      image: "/images/eberhard-grossgasteiger-8lDkmXnKo7s-unsplash.jpg",
      link: "https://www.instagram.com/y2kcoach",
    },
    {
      category: "TIKTOK",
      image: "/images/tom-austin-3L76b-LMyeI-unsplash.jpg",
      link: "https://www.tiktok.com/@y2kcoachh",
    },
  ];

  return (
    <div className="section category-section-bg">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">our socials</h3>
        <h3 className="main-title to-left show-on-scroll">contact us</h3>
      </div>
      <div className="section-content">
        <div className="row">
          {categoryData.map(({ category, image, link }, index) => (
            <CategoryItem
              category={category}
              image={image}
              link={link}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="bg-image-3"></div> {/* Added for Sonny Angels */}
    </div>
  );
};

export default CategorySection;