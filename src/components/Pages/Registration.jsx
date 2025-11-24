import React, { use } from "react";
import MyContainer from "../MyContainer";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Registration = () => {
  //
  const { createUser, setUser, showPassword, setShowPassword } =
    use(AuthContext);

  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    console.log(email, password, photoURL);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast("Registration Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    console.log("sign up with google");
  };

  return (
    <div>
      <title>Toy Kingdom - Register</title>
      <MyContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40 mb-40">
          <div className="card-body">
            <h1 className="text-3xl text-primary font-bold text-center">
              Register Now!
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset relative">
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
                {/* Photo url */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photoURL"
                  placeholder="Live link of your photo"
                />
                {/* Password Feild */}
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <button
                  className=" absolute top-62 right-6"
                  onClick={handleShowHidePassword}
                >
                  {showPassword ? (
                    <VscEye size={22}></VscEye>
                  ) : (
                    <VscEyeClosed size={22}></VscEyeClosed>
                  )}
                </button>
                <div></div>
                <button className="btn btn-primary mt-4">Register</button>
              </fieldset>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleSignUp}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign Up with Google
            </button>
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
