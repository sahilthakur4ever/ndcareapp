import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ndcare from "./ndcare.png";
import "./Adminlogin.css";
import pngegg from "./pngegg-5.png"


function AdminLogin() {
  const username = "ndcareadmin";
  const password = "navdeepsharmaadmin";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputevent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const submitdata = (e) => {
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);

    if (data?.email === username && data?.password === password) {
      navigate("/adminhome");
      alert("data matched");
    } else {
      alert("data not matched");
    }
  };
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

      <section class="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src={ndcare}
                          style={{width: "185px"}}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">We are The Nirogam Team</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                            name="email"
                            onChange={inputevent}
                            value={data.email}
                          />
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            name="password"
                            onChange={inputevent}
                            value={data.password}
                          />
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                            onClick={submitdata}
                          >
                            Log in{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4" style={{color:"black"}}>We are more than just a company</h4>
                      <img src={pngegg} alt=""   style={{width: "100%" , height:"100%"}}/>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
