import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../fireBase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //to show the user name
      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredentials.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();

      //for saving data to firebase
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("Registered Successfully!..");
      navigate("/");
    } catch (error) {
      toast.error("Something Went Wrong!..");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className=" md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Sign In"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                id="name"
                value={name}
                className="w-full rounded px-4 py-4 text-xl
                 text-gray-700 bg-white border-gray-200 transition ease-in-out mb-6"
                onChange={onChangeHandler}
                placeholder="Full Name"
              ></input>

              <input
                type="email"
                id="email"
                value={email}
                className="w-full rounded px-4 py-4 text-xl
               text-gray-700 bg-white border-gray-200 transition ease-in-out mb-6"
                onChange={onChangeHandler}
                placeholder="Email Address"
              ></input>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                className="w-full rounded px-4 py-4 text-xl text-gray-700 bg-white border-gray-200 
                transition ease-in-out mb-6"
                onChange={onChangeHandler}
                placeholder="Password"
              ></input>

              {showPassword ? (
                <BsEyeFill
                  className="absolute right-3 top-5 text-xl cursor-pointer"
                  onClick={() =>
                    setShowPassword((previousState) => !previousState)
                  }
                />
              ) : (
                <BsEyeSlashFill
                  className="absolute right-3 top-5 text-xl cursor-pointer"
                  onClick={() =>
                    setShowPassword((previousState) => !previousState)
                  }
                />
              )}
            </div>

            {/* sm:text-lg means for small(mobile) and above screen text must be large */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-xl">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-green-600 transition duration-200 ease-in-out ml-1"
                >
                  Sign In
                </Link>
              </p>
              <Link
                to="/forgot-password"
                className="text-fuchsia-600 hover:text-green-600 transition duration-200 
                ease-in-out ml-1"
              >
                Forgot Password?{" "}
              </Link>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase 
            rounded shadow-md hover:bg-blue-700 transition-duration 150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign Up
            </button>
            <div
              className="flex items-center my-4 before:border-t  before:flex-1  before:border-gray-300
          after:border-t  after:flex-1  after:border-gray-300"
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
