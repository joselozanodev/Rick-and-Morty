/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import styles from "./card.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <>
      <div className="card border border-1">
        <div className="card-body p-0">
        <CloseButton onClick={()=>onClose(id)} className="btn-close btn-close"/>
        <Link to={`/detail/${id}`}>
        <h2 className="card-name">{name}</h2>
        </Link>
        <h4 className="card-text text-start">{status}</h4>
        <h4 className="card-text text-start">{species}</h4>
        <h4 className="card-text text-start">{gender}</h4>
        <h4 className="card-text text-start">{origin}</h4>
        <img src={image} className="charImage w-100" />
        </div>
      </div>
    </>
  );
}



