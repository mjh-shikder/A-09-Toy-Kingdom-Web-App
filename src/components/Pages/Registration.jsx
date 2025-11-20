import React from "react";
import MyContainer from "../MyContainer";
import { Link } from "react-router";

const Registration = () => {
  return (
      <div>
           <title>Toy Kingdom - Register</title>
      <MyContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40 mb-40">
          <div className="card-body">
            <h1 className="text-3xl text-primary font-bold text-center">
              Register Now!
            </h1>
            <form onSubmit={``}>
              <fieldset className="fieldset">
                {/* Name Feild */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Name"
                />
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
                <div></div>
                <button className="btn btn-primary mt-4">Register</button>
              </fieldset>
            </form>
            <p>
              Already Have an Accoutn? Then{" "}
              <Link className="text-secondary hover:underline " to={"/login"}>
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Registration;
