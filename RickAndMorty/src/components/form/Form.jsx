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
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Type your email..."
        value={userData.email}
        onChange={handleChange}
      />
      {
        errors.email?<p style={{color:"red"}}>{errors.email}</p>:null
      }
      <label>Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Type your password..."
        value={userData.password}
        onChange={handleChange}
      />
      {
         errors.password?<p style={{color:"red"}}>{errors.password}</p>:null
      }
      <button
        type="submit"
        id="submit"
        >
        Submit
      </button>
    </form>
  );
};

// /\S+@\S+\.\S+/
