const Footer = () => {
  return (
    <footer>
      <div className="section-content">
        <div className="row">
          <div className="col-4">
            <a href="#" className="logo">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                y2kcoach
              </h1>
            </a>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, consequuntur obcaecati. Debitis sed velit, aliquid
              nihil, omnis illo dignissimos, quod vitae repellat quo nam quas
              similique cum molestias et fugiat.
            </p>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">gallery</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="subscribe-form">
              <input type="text" name="" placeholder="Your Email..." />
              <button className="btn">subscribe now</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
