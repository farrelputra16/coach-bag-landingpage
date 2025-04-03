const Footer = () => {
  return (
    <footer>
      <div className="section-content footer-compact">
        <div className="row">
          <div className="col-3"> {/* Changed from col-4 to col-3 */}
            <a href="#" className="logo">
              <h1
                style={{
                  fontSize: "2rem", // Reduced from 3rem
                  fontWeight: "900",
                  letterSpacing: "1px", // Reduced from 2px
                }}
              >
                y2kcoach
              </h1>
            </a>
            <p className="footer-description">
              Vintage Authentic Coach Bags for Sale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;