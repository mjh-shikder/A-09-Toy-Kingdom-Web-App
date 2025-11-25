import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext);

  //   console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  // Update Informaiton
  const handleUpdateInfo = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    //   console.log(name, photo);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
     setUser({...user, photoURL:photo, displayName:name} )
    });
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
          <div className="bg-base-200 p-5 rounded-xl ">
            <p className="text-xl text-accent  ">
              Name:{" "}
              <span className="text-xl text-accent font-bold ">
                {user?.displayName}
              </span>
            </p>
            <p className="text-accent ">
              Email: <span className="font-semibold ">{user?.email}</span>
            </p>
          </div>
          <button
            onClick={handleOpenForm}
            className="btn btn-secondary rounded-xl btn-outline my-5"
          >
            Update Info{" "}
          </button>

          {isOpen ? (
            <form
              className="bg-base-200 p-5 rounded-xl w-2xs "
              onSubmit={handleUpdateInfo}
            >
              <fieldset className="fieldset relative">
                {/* Email Feild */}
                <label className="label">Name</label>
                <input
                  type="name"
                  className="input rounded-xl"
                  name="name"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                />
                {/* Password Feild */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input rounded-xl"
                  name="photo"
                  placeholder="Photo URL"
                  defaultValue={user?.photoURL}
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
