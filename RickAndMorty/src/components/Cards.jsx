/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <>
      <div>
        {characters.map(({id, name, status, species, gender, origin, image}) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={() => alert("Emulamos que se cierra la card")}
            />
          );
        })}
      </div>
    </>
  );
}
