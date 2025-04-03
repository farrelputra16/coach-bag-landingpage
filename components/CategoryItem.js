const CategoryItem = ({ category, image, link }) => {
  return (
    <div className="col-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="category-link"
      >
        <div className="category-img to-top show-on-scroll">
          <div
            className="category-img-inner"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="category-title">{category}</div>
        </div>
      </a>
    </div>
  );
};

export default CategoryItem;