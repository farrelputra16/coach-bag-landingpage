const PopularItem = ({ image }) => {
  return (
    <div className="col-4 testimonial-item">
      <div className="product-card">
        <div className="product-card-img">
          <img src={image} alt="Testimonial" />
        </div>
      </div>
    </div>
  );
};

export default PopularItem;