import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  const categoryData = [
    {
      category: "Bucket Bag",
      image: "/images/alvan-nee-EHILKZNmTuA-unsplash.jpg",
    },
    {
      category: "Tote Bag",
      image: "/images/eberhard-grossgasteiger-8lDkmXnKo7s-unsplash.jpg",
    },
    {
      category: "Shoulder Bag",
      image: "/images/tom-austin-3L76b-LMyeI-unsplash.jpg",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">bags category</h3>
        <h3 className="main-title to-left show-on-scroll">choose your style</h3>
      </div>
      <div className="section-content">
        <div className="row">
          {categoryData.map(({ category, image }, index) => (
            <CategoryItem category={category} image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
