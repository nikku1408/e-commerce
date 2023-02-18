import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../fireBase";
import { doc } from "firebase/firestore";

export default function OAuth() {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/");

      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        //adding the user to database
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      console.log(user);
    } catch (error) {
      toast.error("Could not authorized by Google!..");
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="flex items-center justify-center w-full bg-red-500 text-white px-7 py-3 text-sm font-medium
      hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 
      ease-in-out rounded"
        onClick={onGoogleClick}
        type="button"
      >
        <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue
        With Google
      </button>
    </>
  );
}
