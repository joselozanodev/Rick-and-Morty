/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
   <>
   {character ? 
   <div className=" flex h-[100%] w-[100%] justify-between flex-row-reverse">
      <div className="h-[100%] flex flex-col relative right-[350px] ">
       <h2 className="inline relative text-black font-bold top-[130px] right-[-100px] my-[10px] text-[50px]">{character.name}</h2>
       <h2 className="inline relative text-black top-[130px] my-[20px] right-[-100px] text-[50px]">{character.status}</h2>
       <h2 className="inline relative text-black top-[130px] my-[20px]  right-[-100px] text-[50px]">{character.species}</h2>
       <h2 className="inline relative text-black top-[130px] my-[20px]  right-[-100px] text-[50px]">{character.gender}</h2>     
       <h2 className="inline relative text-black top-[130px] my-[20px]  right-[-100px] text-[50px]">{character.origin ? character.origin.name : null}</h2>
       </div>
       <div className="relative left-[30px] border-r-[5px] w-[500px] h-[100vh] ml-[-30px] backdrop-blur-xl bg-black/30">
       <img src={character.image} alt={character.name} className="rounded-[50%] relative top-[170px] left-[90px]"/>
       </div>
   </div> :null} 
</>
  );
};
