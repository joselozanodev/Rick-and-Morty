/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./form.css";
import { useState } from "react";
import { validation } from "./validation";

export const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const value = target.value;

    setUserData({
      ...userData,
      [target.name]: value,
    });

    setErrors(validation({
        ...userData,
        [target.name]: value
    }))
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    login(userData)
  }

  return (
    <div className=" bg-gradient-to-b from-slate-500 to-slate-700 h-[100vh] flex justify-center items-center">
    <form onSubmit={handleSubmit} className="bg-slate-200 h-[500px] w-[27%] rounded-[10px] shadow-2xl flex flex-col justify-center text-center">
      <label className="text-slate-900 font-poppins py-[10px]">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Type your email..."
        value={userData.email}
        onChange={handleChange}
        className="w-[75%] mx-auto"
      />
      {
        errors.email?<p style={{color:"red"}}>{errors.email}</p> :null
      }
      <label className="text-slate-900 font-poppins py-[10px]">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Type your password..."
        value={userData.password}
        onChange={handleChange}
        className="w-[75%] mx-auto"
      />
      {
         errors.password?<p style={{color:"red"}}>{errors.password}</p> :null
      }
      <button
        type="submit"
        id="submit"
        className="text-slate-900 font-poppins bg-slate-500 h-[30px] w-[40%] "
        >
        Submit
      </button>
    </form>
    </div>
  );
};

// /\S+@\S+\.\S+/
