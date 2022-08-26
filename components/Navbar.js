import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/cvnavbar.svg";
import NavItem from "./NavItem";

const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { text: "Vapes", href: "/vapes" },
  { text: "Accessories", href: "/accessories" },
  { text: "Account", href: "/account" },
  { text: "Register", href: "/register" },
  { text: "Login", href: "/login"}
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <div
            style={{
              position: "relative",
              height: 76,
              width: 432,
              left: 100,
              top: 13,
              fontFamily: "Nunito",
              fontStyle: 40,
              fontWeight: 900,
              fontSize: 40,
              lineHeight: 55,
              display: "flex",
            }}
          >
            <Image src={Logo} />
            {/* <h1 className="logo">CryptoVapes</h1> */}
          </div>
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
