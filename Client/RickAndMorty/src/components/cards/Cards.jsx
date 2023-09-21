/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Card from "./Card";


export default function Cards({ characters, onClose }) {
  return (
    <>
      <div className="container ">
      <div className="row " >
        {characters.map(
          ({ id, name, status, species, gender, origin, image}, index) => {
            return (
              
                <div className="col-md-4" key={index}>
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
        </div>  
      </div>
    </>
  );
}
