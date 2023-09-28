/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
    <form onSubmit={handleSubmit} className=" bg-slate-200 shadow-2xl h-[550px] w-[27%] rounded-[5px] flex flex-col justify-center text-center">
      <img src={"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"} className="h-[250px] w-[250px] self-center" />
      <label className="text-slate-900 font-poppins pb-[10px] text-lg">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Type your email..."
        value={userData.email}
        onChange={handleChange}
        className="w-[75%] mx-auto rounded-[2px] border-[1px] border-slate-500 focus:outline-slate-600 focus:shadow-md"
      />
      {
        errors.email?<p style={{color:"red"}}>{errors.email}</p> :null
      }
      <label className="text-slate-900 font-poppins py-[10px] text-lg">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Type your password..."
        value={userData.password}
        onChange={handleChange}
        className="w-[75%] mx-auto rounded-[2px] border-[1px] border-slate-500 focus:outline-slate-600 focus:shadow-md"
      />
      {
         errors.password?<p style={{color:"red"}}>{errors.password}</p> :null
      }
      <button
        type="submit"
        id="submit"
        className="text-slate-200 font-poppins bg-slate-700 h-[30px] w-[60%] rounded-[8px] self-center mt-[30px] hover:bg-slate-600 active:bg-slate-700"
        >
        Submit
      </button>
    </form>
    </div>
  );
};

// /\S+@\S+\.\S+/
