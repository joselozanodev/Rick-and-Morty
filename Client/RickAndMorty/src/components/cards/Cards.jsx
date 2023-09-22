/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Card from "./Card";


export default function Cards({ characters, onClose }) {
  return (
    <>
        {characters.map(
          ({ id, name, status, species, gender, origin, image}, index) => {
            return (
              
                <div className=" bg-gradient-to-r from-slate-800 to-gray-700 my-[70px] flex w-[70%] mx-auto justify-between rounded-[9px] shadow-2xl " key={index}>
                    <Card
                      id={id}
                      name={name}
                      status={status}
                      species={species}
                      gender={gender}
                      origin={origin.name}
                      image={image}
                      onClose={onClose}

                    />
                  </div>
            );
          }
        )}

    </>
  );
}
