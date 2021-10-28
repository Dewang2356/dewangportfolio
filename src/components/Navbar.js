import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const [state, setState] = useState(true);
  useEffect(() => {}, [location]);
  const close = () => {
    document.querySelector("#navbarNav").classList.remove("show");
  };

  return (
    <>
      <div className="container">
        <nav
          className={`navbar navbar-expand-lg navbar-dark bg-transparent d-flex align-items-center`}
          data-aos="fade-up"
        >
          <h4>Dewang</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>{
              if (document.querySelector(".navbar-toggler").classList.contains("collapsed")) {
                console.log("contains");
                setState(true)
              }
              else{
                setState(false)
              }
            }}
          >
           
       <div id="nav-icon3" className={`${state?"":"open"}`}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
           
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li
                className="nav-item"
                onClick={() => {
                  close();
                  setState(true)
                }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  close();
                  setState(true);
                }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  close();
                  setState(true);
                }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/resume" ? "active" : ""
                  }`}
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  close();
                  setState(true);
                }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/work" ? "active" : ""
                  }`}
                  to="/work"
                >
                  Work
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  close();
                  setState(true);
                }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
