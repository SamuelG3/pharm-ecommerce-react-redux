import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Cadastre-se</h3>
              <h1>Minha Conta</h1>
            </div>
          </div>
        </div>

        <form action="">
          <span>Endereço de Email*</span>
          <input type="text" required />
          <span>Nome de Usuário*</span>
          <input type="text" required />
          <span>Senha*</span>
          <input type="password" required />
          <span>Confirme Sua Senha*</span>
          <input type="password" required />
          <button className="button">Cadastrar</button>
          <br />
          <p className="redirection">
            Já possui uma conta? <Link to="/login">Faça Login!</Link>
          </p>
        </form>
      </section>
    </>
  );
}
