import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading on form submit

    // Safely check the refs and access their values
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    // Validate the form data
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          alt="background img"
        />
      </div>
      <form
        onSubmit={handleFormSubmit} // Call handleFormSubmit when form is submitted
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
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
          type="submit" // Use type="submit" to trigger the form submission
          className="p-4 my-4 bg-red-700 w-full rounded-lg font-bold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
