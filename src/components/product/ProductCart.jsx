import React from "react";
import "./product.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ProductCart = ({ key, id, cover, name, price }) => {
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt="Imagem do Produto" />
          </Link>
        </div>
        <div className="details">
          <h3>R$ {price} </h3>
          <p>{name}</p>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
};
