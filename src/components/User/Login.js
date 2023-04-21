/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import showAlert from "../../common/alert";

import Book from "../../images/opened-book.png"
import Logo from "../../images/Logo.png"

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const login = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          email: user?.email,
          password: user?.password
        }
      });
      if (response.data.length) {
        navigate('/profile');
      } else {
        showAlert('Email/password is incorrect', 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4 text-black mt-4">
              <div class="d-flex justify-content-center px-5 ms-xl-4">
                <img src={Logo} className="logo-w" />
              </div>
              <div class="d-flex justify-content-center px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <div>
                  <h3 class="fw-normal mb-3 pb-3 letter-space text-center" >Log In</h3>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                  </div>
                  <div class="pt-1 mb-4">
                    <button
                      class="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={() => {
                        login();
                      }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <p class="small mb-5 pb-lg-2 text-center"><a class="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account?
                    <a href="/register" class="link-info ml-1">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col px-0 d-none d-sm-block">
              <img src={Book}
                alt="Login image" class="w-100 vh-100 img-fit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
