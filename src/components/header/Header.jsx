import React from "react";
import "./header.css";
import Hospital from "../../assets/images/hospital.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { User } from "./User";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <Link className="link" to="/">
            <div className="logo">
              <img src={Hospital} alt="" />
              <h1>pharm-aid</h1>
            </div>
          </Link>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
