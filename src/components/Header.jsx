import { RiMentalHealthLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="head container-fluid ">
      <div>
        <p className=" fs-4 text-center">
          Daha iyi hissetme yolculuğunuzda ilk adımınıza özel <b>500 TL</b>{" "}
          indirim kodu: <b>MEBHAS500</b>
        </p>
      </div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <h3 style={{ fontWeight: "700" }}>
              <span className="fs-1 ms-5 p-3">
                <RiMentalHealthLine />
              </span>
              MEBHAS PSİKOLOJİ
            </h3>
            <a className="navbar-brand" href="#"></a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="my-auto me-2">
                <button
                  className="btn btn-outline-dark rounded-4 "
                  type="submit"
                >
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
