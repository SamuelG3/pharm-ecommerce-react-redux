import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const incCartItems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  const descCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const removeItem = () => {
    dispatch(cartActions.removeAllItemFromCart(id));
  };

  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter" onClick={removeItem}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Preço da Unidade R${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartItems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">{quantity}</button>
                <button className="minus" onClick={descCartItems}>
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
