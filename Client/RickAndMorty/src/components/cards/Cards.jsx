/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Card from "./Card";


export default function Cards({ characters, onClose }) {
  return (
    <>
    <div className="flex flex-wrap flex-row gap-[20px] mt-[80px] ml-[4px]">
        {characters.map(
          ({ id, name, status, species, gender, origin, image}, index) => {
            return (
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
            );
          }
        )}
</div>
    </>
  );
}
