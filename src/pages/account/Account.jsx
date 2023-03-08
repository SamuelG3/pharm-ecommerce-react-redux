import React from "react";
import "./account.css";

export default function Account() {
  const image = "https://cdn-icons-png.flaticon.com/512/4333/4333609.png";
  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Minha Conta</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="imgs" />
                <img src={image} alt="" className="image-preview" />
              </div>
            </div>
            <div className="right">
              <label>Nome de Usuário</label>
              <input type="text" required />

              <label>Email</label>
              <input type="text" required />

              <label>Senha*</label>
              <input type="text" required />

              <button className="button">Atualizar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
