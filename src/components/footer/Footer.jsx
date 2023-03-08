import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container flex">
          <p>© 2023 Pharm-aid. Todos os direitos reservados</p>
          <div className="social">
            <AiFillFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
}
