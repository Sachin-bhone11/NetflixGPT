import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Safely check the refs and access their values
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    // Validate the form data
    const message = checkValidData(emailValue, passwordValue);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;

          // Update the user's profile once after creating the user
          return updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName || "",
              photoURL: photoURL || "",
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="background img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500 placeholder-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500 placeholder-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500 placeholder-white"
        />
        <p className="text-red-500"> {errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Register? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
