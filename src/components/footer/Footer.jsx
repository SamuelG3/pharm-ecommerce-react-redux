import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>Pharm-Aid - Direitos Reservados</p>
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
