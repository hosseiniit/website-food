import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { _adr } from "../rout";

const Header = () => {
  const [isPinned, setIsPinned] = useState(false);
  const pinnedRef = useRef(null);
  const mdb = window["mdb"];
  const handleMenu = (e) => {
    e.preventDefault();
    let _f = document.querySelector(".navbar-toggler");
    let menu = document.getElementById("navbarButtonsExample");
    let root = document.getElementsByTagName("body")[0];
    if (_f.classList.contains("active")) {
      menu.classList.remove("show");
      _f.classList.remove("active");
      root.classList.remove("show");
    } else {
      menu.classList.add("show");
      _f.classList.add("active");
      root.classList.add("show");
    }
  };
  const handlehideClass = () => {
    document.getElementsByTagName("body")[0].classList.remove("show");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > pinnedRef.current.offsetTop) {
        setIsPinned(true);
      } else {
        setIsPinned(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isPinned ? "pinned--is-sticky" : ""
        }`}
        ref={pinnedRef}
      >
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            onClick={handleMenu}
            type="button"
          >
            <i className="icon-bar"></i>
          </button>
          <Link className="navbar-brand me-2" to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/content/images/logo.webp"}
              height="100%"
              alt="Satrap"
              loading="lazy"
              className="d-none d-sm-block"
              style={{ marginTop: "1px" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/content/images/minimal-logo.webp"}
              height="100%"
              alt="Satrap"
              loading="lazy"
              className="d-block d-sm-none"
              style={{ marginTop: "1px" }}
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <Link className="brand-icon" onClick={handlehideClass} to={"/"}>
              <img
                src={process.env.PUBLIC_URL + "/content/images/logo.png"}
                alt=""
              />
            </Link>
            <span className="close-menu" onClick={handleMenu}>
              <i className="icon-close"></i>
            </span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={_adr.Root + _adr.Management}
                  onClick={handlehideClass}
                >
                  مدیریت رستوران
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={_adr.Root + _adr.Managementshop}
                  onClick={handlehideClass}
                >
                  مدیریت فروشگاه
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={_adr.Root + _adr.Agent}
                  onClick={handlehideClass}
                >
                  نمایندگی
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"https://blog.mysatrap.com/"}
                  onClick={handlehideClass}
                >
                  وبلاگ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={_adr.Root + _adr.About}
                  onClick={handlehideClass}
                >
                  درباره‌ما
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link
                to={_adr.Root + _adr.Login}
                className="btn btn-outline-info ml-1 btn-login"
                onClick={handlehideClass}
              >
                ورود
              </Link>
              <Link
                to={_adr.Root + _adr.Login}
                className="btn btn-info me-3 btn-show-package"
                onClick={(e) => {
                  e.preventDefault();
                  let popRequest = document.getElementById("popRequest");
                  new mdb.Modal(popRequest).show();
                }}
              >
                درخواست دمو
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
