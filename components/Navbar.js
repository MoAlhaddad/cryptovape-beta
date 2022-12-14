import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/cvnavbar.svg";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import { Router } from "react-router-dom";
// import {selectUser} from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import Login from "./Login";
import Logout from "./Logout";
import Vapes from "./Vapes";
import { userR } from "../slices/userSlice";
import LoginOne from "../pages/users/[id]";
import { store } from "../slices";
import { login, userReducer, selectUser } from "../slices/userSlice";

const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { text: "Vapes", href: "/vapes" },
  { text: "Accessories", href: "/accessories" },
  { text: "Account", href: "/account" },
  { text: "Register", href: "/register" },
  { text: "Login", href: "/users/1" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();

  // const {username} = useSelector( state => this.state.);
  const username = useSelector(state=> state.selectUser);
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log("taking you to login");
    router.push("/users/1");
  };

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
          {username ? (<div>{username}</div>): <LoginOne /> }
          {/* <div>{user1 ? <Logout /> : <Login /> }</div> */}
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
