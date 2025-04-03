const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <h1
          style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
        >
          y2kcoach
        </h1>
      </a>
      <div className="main-menu-wrapper">
        <ul className="main-menu">
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
          <a href="#category-section">contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
