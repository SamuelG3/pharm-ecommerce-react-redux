import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Faça seu Login</h3>
              <h1>Minha Conta</h1>
            </div>
          </div>
        </div>

        <form action="">
          <span>Nome de Usuário ou Email*</span>
          <input type="text" required />

          <span>Senha</span>
          <input type="text" required />
          <button className="button">Login</button>

          <br />

          <p className="redirection">
            Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </form>
      </section>
    </>
  );
}
