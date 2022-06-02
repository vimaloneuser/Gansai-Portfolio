import React from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import { route } from "../../common/constants";

const Login = () => {
  const navigate = useNavigate();
  const loginProcess = (event) => {
    event.preventDefault();
    let email = event.target.inputEmail.value,
      password = event.target.inputPassword.value;

    if (email === "admin@mail.com" && password === "dhara123") {
      localStorage.setItem("isLoggedIn", "true");
      toastr.success("Login successfully.");
      navigate(route.editCategory);
    } else toastr.error("Login failed.");
  };

  return (
    <section>
      <div
        className="container"
        style={{
          padding: "10%",
        }}
      >
        <br />
        <br />
        <br />
        <form className="row g-3" onSubmit={loginProcess}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail"
              />
            </div>
          </div>
          <p></p>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                required
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <p></p>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
