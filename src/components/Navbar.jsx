import './Navbar.css';
const Navbar = (props) => {
  const menu = ["home", "about", "skills", "projects", "contact"];
  const upperCase = (word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          VIGNESH E's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menu.map((item) => (
              <li className="nav-item" key={item}>
                <a className={props.currentPath=="/"+item ? "nav-link active":"nav-link"} href={"#" + item}>
                  {upperCase(item)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
