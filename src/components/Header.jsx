import { Link } from "react-router-dom";
import Slider from "./Slider";
import "../styles/home.css";




function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="headerLink nav-link navbar-brand">Tech Solutions</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="headerLink nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="headerLink nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="headerLink nav-link">Services</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className="headerLink nav-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Slider className="slidediv"/>
  </>
  );
}

export default Header;