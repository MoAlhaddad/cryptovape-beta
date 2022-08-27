import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/cvnavbar.svg";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import { Router } from "react-router-dom";
import {selectUser} from "../slices/userSlice";
import {useSelector} from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { text: "Vapes", href: "/vapes" },
  { text: "Accessories", href: "/accessories" },
  { text: "Account", href: "/account" },
  { text: "Register", href: "/register" },
  { text: "Login",  href: "/users/1"}
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const user = useSelector(selectUser);

  const handleClick = () => {
    console.log('taking you to login')
    router.push('/login');
  }

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
          <div>{user ? <Logout /> : <Login /> }</div>
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
