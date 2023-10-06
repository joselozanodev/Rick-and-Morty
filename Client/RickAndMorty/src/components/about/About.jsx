import React from "react";

export const About = () => {
  return (
    <div className="p-8 bg-gray-300 dark:bg-gray-900 flex items-center justify-center w-screen h-screen">
      <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
        <div className="flex mb-4">
          <img className="w-12 h-12 rounded-full" src="https://i.pinimg.com/474x/9b/34/d7/9b34d78c0b13f7276268e4edf5ec6f49.jpg" alt="José Lozano" />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              José Lozano
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
              26 September at 11:37
            </span>
          </div>
        </div>
        <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
        Hola, me llamo José. Soy un estudiante de henry, este es el proyecto de integración que hice durante el bootcamp, este proyecto es realizado con las siguientes tecnologías: Javascript, Html, Css y Nodejs. Además utilicé los siguientes frameworks: React-DOM, Redux, Tailwind y Express.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};
