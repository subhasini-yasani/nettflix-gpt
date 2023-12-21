import React from 'react'
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";






const Body = () => {

   const dispatch = useDispatch();
  

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({
           uid: uid,
           email: email, 
           displayName: displayName, 
           photoURL: photoURL})
           );
      } else {
        dispatch(removeUser());
       
      }
    });

  }, []);
  
  return (

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Router>
      </div>

  );
};

export default Body;
