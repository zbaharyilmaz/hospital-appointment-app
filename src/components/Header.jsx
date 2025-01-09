import React from "react";
import { RiMentalHealthLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="container-fluid">
      <div>
      <p className="text-danger fs-3 text-center">
        Daha iyi hissetme yolculuğunuzda ilk adımınıza özel 500 TL indirim kodu: MEPHAS500
      </p>
      </div>
      <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <h3><span className="fs-1 ms-3 p-3"><RiMentalHealthLine/></span>MEPHAS PSİKOLOJİ</h3>
          <a className="navbar-brand" href="#"></a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="my-auto me-2">
            <button className="btn btn-outline-dark rounded-4 " type="submit">
              Search
            </button>    
            </div>
          </form>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Header;
