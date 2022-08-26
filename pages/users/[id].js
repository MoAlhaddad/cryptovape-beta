import React, {useState} from "react";
// import LoginSt from "../styles/Login.module.css";
// import "./Login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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