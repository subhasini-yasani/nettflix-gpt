 import React, { useRef } from 'react'
 import Header from "./Header";
 import { useState } from 'react';

 import { checkValidData } from '../utils/validate';

 import { auth } from "../utils/firebase";
 import { createUserWithEmailAndPassword } from "firebase/auth";
 import { signInWithEmailAndPassword } from "firebase/auth";
  import { useNavigate } from "react-router-dom";
  import { updateProfile } from "firebase/auth";
 import { useDispatch } from 'react-redux'; 
 import { addUser } from  "../utils/userSlice";
 import { USER_AVATAR } from "../utils/constants";

 
 const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const name = useRef (null);
   const email = useRef(null);
   const password = useRef (null);

  const handleButtonClick = () => {

   console.log(email.current.value);
   console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
     console.log(message);
     setErrorMessage(message);
      
      navigate("/browse");
    // if(!message) return;
      // sign in /sign up logic
     if(!isSignInForm) {
       // sign up logic
      createUserWithEmailAndPassword(
          auth, 
         email.current.value, 
          password.current.value)
   .then((userCredential) => {
     const user = userCredential.user;
     console.log(user);
     updateProfile(user, {
       displayName: name.current.value, 
       photoURL: USER_AVATAR,
     })
     .then(() => {
       const {uid, email, displayName, photoURL} = auth.currentUser;
       console.log(uid)
          dispatch(addUser({
            uid: uid,
           email: email, 
           displayName: displayName, 
            photoURL: photoURL,})
            );
      
        }).catch((error) => {
    
       setErrorMessage(error.message);
     });
     console.log(user);
     //  navigate("/browse");
     
      })
    
    .catch((error) => {
      const errorCode = error.code;
     const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
      
    }
      else {
        // sign in logic
      signInWithEmailAndPassword(email.current.value, password.current.value)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
       navigate("/browse");
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     setErrorMessage(errorCode + "-" + errorMessage);
      });
      }
     };
  
      const toggleSignInForm = () =>{
     setIsSignInForm(!isSignInForm);
     };
    return (
     <div>
     <Header />
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />            
     </div>

     <form onSubmit={(e) => e.preventDefault()}  
     className=" w-3/12 absolute p-12 bg-block bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
       <h1 className="font-bold text-3xl p-">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm &&(<input
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-700"/>)
       }

      
       <input
       ref={email}
        type="text" 
       placeholder="Email Address" 
       className="p-4 my-4 w-full bg-gray-700"/>

       <input 
      ref={password}
       type="Password" 
       placeholder="Password" 
      className="p-4 my-4 w-full bg-gray-700"/>
      
       <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

      <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"} 
       </button>

      <p className="py-6" onClick={toggleSignInForm}>{isSignInForm ? 
       "New to Netflixn Sign Up Now" 
       : "Already registered? Sign In Now."}</p>

    </form>
    
     </div>
   )
 }

 export default Login;


       