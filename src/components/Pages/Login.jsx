import React, { useContext } from "react";
import MyContainer from "../MyContainer";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {

  const { userLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({email, password});
    
    userLogin(email, password)
      .then(res => {
      console.log(res.user); 
      })
      .catch(error => {
      alert(error.message, error.code)
    })

  }
  

  return (
    <div className="">
          <title>Toy Kingdom - Login</title>
      <MyContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-40 mt-40">
          <div className="card-body">
            <h1 className="text-3xl text-secondary font-bold text-center">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* Email Feild */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                {/* Password Feild */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-primary">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-secondary mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              Don't Have an Accout? Then{" "}
              <Link
                className="text-primary  hover:underline "
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
