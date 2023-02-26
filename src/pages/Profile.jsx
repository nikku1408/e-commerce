import React from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../fireBase";
import { doc, updateDoc } from "firebase/firestore";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  const onsubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        //update the display name in firebase authentication!..
        await updateProfile(auth.currentUser, { displayName: name });
        //update the name to firestore!..
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
        toast.success("Profile has been updated!..");
      } else {
        toast.info("Inputs might be the same, co could not update!..");
      }
    } catch (error) {
      toast.error("Coudnt update profile details!..");
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out ${
                 changeDetail && "bg-red-200 focus:bg-red-200"
               }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out ${
                 changeDetail && "bg-red-200 focus:bg-red-200"
               }`}
            />

            {/* whitespace-nowrap is to prevent text to go to next line when screen
            is small */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do You Want To Change Your Name?
                <span
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-2 cursor-pointer"
                  onClick={() => {
                    changeDetail && onsubmit();
                    setChangeDetail((previousState) => !previousState);
                  }}
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                onClick={onLogout}
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
