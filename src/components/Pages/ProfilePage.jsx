import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <title>Toys Kingdom - Profile</title>

      <div className="flex flex-col items-center justify-center bg-white rounded-xl h-screen ">
        <div className="avatar ">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <p className="text-xl">{user?.displayName}</p>
          <p>{user?.email}</p>
          <button
            onClick={handleOpenForm}
            className="btn btn-secondary rounded-xl btn-outline my-5"
          >
            Update Info{" "}
          </button>

          {isOpen ? (
            <form className="bg-base-200 p-5 rounded-xl " onSubmit={``}>
              <fieldset className="fieldset relative">
                {/* Email Feild */}
                <label className="label">Name</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                {/* Password Feild */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="password"
                  placeholder="Password"
                />

                <button className="btn btn-primary mt-4 rounded-xl ">
                  Update
                </button>
              </fieldset>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
