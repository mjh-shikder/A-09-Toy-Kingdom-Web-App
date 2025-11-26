import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);

  const emailRef = useRef();
  // handle forgot btn
  const handleForget = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    console.log("forget password", email);

    sendPasswordResetEmail(auth, email)
      .then(() => {
          toast.warning('Varification Email Sent')
          e.target.email.value =''
            
      })
      .catch((err) => {
      toast.warning(err.message, err.code)
    })
  };

  return (
    <div
      data-aos="flip-right"
      className="flex justify-center h-screen items-center "
    >
      <form
        onSubmit={handleForget}
        className="bg-white p-5 rounded-xl md:w-4/12 w-10/12 "
      >
        <fieldset className="fieldset ">
          {/* Email Feild */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full rounded-xl"
            name="email"
            placeholder="Email"
            ref={emailRef}
          />

          <button className="btn btn-secondary mt-4 rounded-xl">
            Send Reset Link
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassword;
