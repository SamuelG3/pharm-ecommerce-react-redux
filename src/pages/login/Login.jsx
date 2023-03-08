import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

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

        <form onSubmit={handleSubmit}>
          <span>Nome de Usuário ou Email*</span>
          <input type="text" required />

          <span>Senha</span>
          <input type="password" required />
          <button className="button" type="submit">
            Login
          </button>

          <br />

          <p className="redirection">
            Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </form>
      </section>
    </>
  );
}
