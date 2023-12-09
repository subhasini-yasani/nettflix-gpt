import React from 'react'
import Header from "./Header";
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  
    const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
    <Header />
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />            
    </div>
    <form className=" w-3/12 absolute p-12 bg-block bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
      <h1 className="font-bold text-3xl p-">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {!isSignInForm &&(<input type="text" 
      placeholder="Full Name" 
      className="p-4 my-4 w-full bg-gray-700"/>)
      }

      
      <input type="text" 
      placeholder="Email Address" 
      className="p-4 my-4 w-full bg-gray-700"/>

      <input 
      type="Password" 
      placeholder="Password" 
      className="p-4 my-4 w-full bg-gray-700"/>
      sign in
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className="py-6" onClick={toggleSignInForm}>{isSignInForm ? 
      "New to Netflixn Sign Up Now" 
      : "Already registered? Sign In Now."}</p>

      

    </form>
    

    </div>
  )
}

export default Login;

