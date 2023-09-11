/* eslint-disable no-unused-vars */
import React from "react";

export const validation = (userData) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email ingresado no es valido.";
  }
  if (!userData.email) {
    errors.email = "Ingresa un email";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no debe tener mas de 35 caracteres.";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "Su contraseña debe tener al menos 1 número";
  }
  if(userData.password.length < 6 || userData.password.length > 10){
    errors.password = "El tamaño de la contraseña debe ser entre 6 y 10 caracteres"
  }

  return errors;
};
