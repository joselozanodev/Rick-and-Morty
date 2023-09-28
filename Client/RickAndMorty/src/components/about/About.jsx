import React from "react";

export const About = () => {
  return (
    <div className="p-8 bg-gray-300 dark:bg-gray-900 flex items-center justify-center w-screen h-screen">
      <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
        <div className="flex mb-4">
          <img className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/pw/ADCreHfLGA9eWC_mE3TMM6YUH0fuko7JNElk0G_23NoQ3YqhTg6suGSmDyQOEnheoDvVdvtCm24zKsRyY60UCKcweGetgwPQI3qLcF6NLgReatFswoxbl9wjdWJSgh8S06hcMRFIbTxTgYzsZo9xIqSbvEySup9KH8IW75eFqDP0iUaRH9nGstDaDylei7IV7YM_77FcLpy59frZS4a6QxtOEWH293v24e-l2q11xeUvNHSu7Eg_kuHgotjXiusqxWYS0IwrzLhrqnl9O7K26LKsFrzcykrSzvfqMofLMUfbgdxiucWwK40Z-6K0YMXh2ZXJbFk8dGCyNyCatxso390h_aEvrHz3S6JEa8YRuTAXHFRAX0_tORpZz6cpf-upPb6IpeMA4lNiJWXKDiHH8H0yOaRr2x8NMncUkugDsSFNNAmYV8-asUDU62PiMh99rX-szuh_-F_bSxEBR5shqPi3hOPJWhTOK3pTqCHMka-5U3BxzirU7zhp2WmtzN1wREaLbGqE48NFODY1sxJSD-UR78DwLzP-9goNEqKKm_MFSXzaK9LJq078md5CrE2kERweXbA66CIN-dOvg2gJ1o2i_8Q35PVvmqMObnsmB9JDQ0OptbF1aMbj8IEsxlCmYVhOSrVlC0bT-QP_EBEsPlu14z5MGW9KPv441KWPL559NFNTZViTChlYqfWjsDp7uZbsYhpVtOukUtcZRzpcYGkPRR5tiiPvn9xttIBNG5Kew0OAEYdqzv2zQZESVgtIbbL8Krewz7Sd5Dsqejx3AG_IbSk-m5PH0IfY8SDJsTvxP7uHWblEBxfEE3Iz6xfMTr-JLJDps31p9UM7eUvLnHCtFPwN-MzCaVvUm9UyWo-5AG8JknpkWz_pvIYZTL8AYoXIddJDRIeViMPRqF0E2xGZvg=w822-h619-s-no?authuser=0" alt="José Lozano" />
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
