import React from "react";
import logo from "../assets/logo.svg";

const div = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              height="80"
              width="80"
              className="d-inline-block"
            />
            WUHU
          </a>
        </div>
      </nav>
    </>
  );
};

export default div;
