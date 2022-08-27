import React, { useState} from "react";
import{useSelector, useDispatch} from "react-redux";
import LoginSt from "../styles/Login.module.css";
import { login } from "../slices/userSlice";
const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn: true,
        }))

    }
    return (
        <div className="login">
            <form className="login__form">
                <h1>Login Here</h1>
                <input type="name"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </form>
        </div>
    )
}

export default Login;