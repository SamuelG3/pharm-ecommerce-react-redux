import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {

  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Preço da Unidade R${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus">
                  <AiOutlinePlus />
                </button>
                <button className="num">1{quantity}</button>
                <button className="minus">
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">R${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};