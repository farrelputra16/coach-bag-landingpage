import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
        <h1
          style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
        >
          y2kcoach
        </h1>
      </a>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`main-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
        <ul className="main-menu">
          <li>
            <a href="#" className="active" onClick={() => setIsMenuOpen(false)}>
              home
            </a>
          </li>
          <li>
            <a
              href="#category-section"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;