import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };

  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(authActions.login());
  };

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                alt=""
              />
            </button>

            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <div className="img">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h4>João de Barro</h4>
                    <label htmlFor="">São Paulo, SP</label>
                  </div>
                </div>
                <Link to="/account">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>Minha Conta</h4>
                  </button>
                </Link>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>Meus Pedidos</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Lista de Desejos</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Ajuda</h4>
                </button>
                <button className="box" onClick={logoutHandler}>
                  <BiLogOut className="icon" />
                  <h4>Sair</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <button>Minha Conta</button>
          </Link>
        )}
      </div>
    </>
  );
};
