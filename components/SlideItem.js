const SlideItem = ({ name, image, description }) => {
  return (
    <div className="slide">
      <div className="slide-txt">
        <div className="slide-title">
          <h3>{name}</h3>
        </div>
        <div className="slide-description">
          {Array.isArray(description) ? (
            description.map((line, index) => (
              <p key={index}>{line}</p>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="slide-btn">
          <a
            href="https://www.instagram.com/y2kcoach"
            className="hero-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact us
          </a>
        </div>
      </div>
      <div className="slide-img">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default SlideItem;