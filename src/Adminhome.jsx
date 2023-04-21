import React from "react";
import ndcare from "./ndcare.png";
import Layout from "./component/shared/Layout";
import Allmedicine from "./pages/Allmedicine";

function Adminhome() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container-xxl">
          <a className="navbar-brand" href="/">
            <img
              src={ndcare}
              className="img-fluid"
              style={{ width: "100px" }}

              alt="ndimg"
            />
          </a>
          <div className="nav" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item btn">
                <a
                  className="nav-link active color-green contact-no btn"
                  aria-current="page"
                  href="tel:+917307046464"
                >
                  <i className="fa-solid fa-phone-volume"></i> +91-7307046464
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />


      <Layout>
        <Allmedicine></Allmedicine>
      </Layout>
    </div>
  );
}

export default Adminhome;
