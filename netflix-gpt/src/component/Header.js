import React from 'react'
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';



const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    signOut(auth)
    .then(() => { 
    })
    .catch((error) => {
       navigate("/error")
      // An error happened.
    });
    
  };
  useEffect(() =>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({
           uid: uid,
           email: email, 
           displayName: displayName, 
           photoURL: photoURL})
           );
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        // navigate("/");
      }
    });
    // unsubscribe when componet unmounts
    return () => unsubscribe();
    
    }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="flex justify-between">
      <img className="w-44"
      src={LOGO}
      alt="logo" />
      </div>
      {user && ( <div className="flex "> 
      <img className="w-10 h-10 mt-5"alt="usericon" src={user.photoURL} />   
      <button onClick={handleSignOut}className="font-bold text-white">(sign out)</button>
      </div>)}
       </div>

    
  )
}

export default Header;
