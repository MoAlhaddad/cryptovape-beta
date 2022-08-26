import React from "react";
import LoginSt from "../styles/Login.module.css";

const Login = () => {
    return (
        <div className="login">
            <form className="login__form">
                <h1>Login Here</h1>
                <input type="name"  placeholder="Name"/>
                <input type="email"  placeholder="Email"/>
                <input type="password"  placeholder="Password"/>
            </form>
        </div>
    )
}

export default Login;