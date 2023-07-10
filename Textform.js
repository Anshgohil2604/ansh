

import React, { useState } from "react";
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, mobile, email, password } = user;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // Handle verification code if needed
   
  };

  return (
    <html>
      <head>
        <title>Signup Page</title>
      </head>
      <body>
        <section className="vh-50 gradient-custom">
          <div className="container py-5 h-101">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10 col-md-10 col-lg-7 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderradius: " 2rem" }}>
                  <div className="card-body p-10 text-center">
                    <div className="mb-md-10 mt-md-10 pb-3">
                      <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <form onSubmit={handleSubmit}>
                        <div className="form-outline form-white mb-1">
                          <input
                            type="Name"
                            id="typeNameX"
                            value={user.name}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            name="name"
                          />
                          <label className="form-label" htmlFor="typeNameX">
                            Name
                          </label>
                        </div>

                        <div className="form-outline form-white mb-3">
                          <input
                            type="Mobile"
                            id="typeMobileX"
                            value={user.mobile}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            name="mobile"
                          />
                          <label className="form-label" htmlFor="typeNameX">
                            Mobile
                          </label>
                        </div>

                        <div className="form-outline form-white mb-3">
                          <input
                            type="email"
                            id="typeEmailX"
                            value={user.email}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            name="email"
                          />
                          <label className="form-label" htmlFor="typeEmailX">
                            Email
                          </label>
                        </div>

                        <div className="form-outline form-white mb-3">
                          <input
                            type="password"
                            id="typePassword"
                            value={user.password}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            name="password"
                          />
                          <label className="form-label" htmlFor="typePasswordX">
                            Password
                          </label>
                        </div>
                        <p className="small mb-5 pb-lg-2">
                          <a className="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <button className="btn btn-outline-light btn-lg px-5" href="home" type="submit">
                          Signup
                        </button>

                        <div className="d-flex justify-content-center text-center mt-2 pt-1">
                          {/* <a href="#!" className="text-white"><i className ="fab fa-facebook-f fa-lg"></i></a>
                          <a href="#!" className="text-white"><i className ="fab fa-twitter fa-lg mx-2 px-2"></i></a>
                          <a href="#!" className="text-white"><i className ="fab fa-google fa-lg"></i></a> */}
                        </div>
                      </form>
                    </div>

                    <div>
                      <p className="mb-0">
                        Have Registered Already{" "}
                        <a href="Textform" className="text-white-50 fw-bold">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

