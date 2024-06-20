import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./assests/amazon_logo_black.png";

function Login() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="login_logo"></img>
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <h4>Email</h4>
        <form>
          <input type="email" className="email_input" value={email}></input>
        </form>
        <h4>Password</h4>
        <form>
          <input type="password" className="email_input" value={password}></input>
        </form>
        <button>Continue</button>
        <small>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </small>
      </div>
      <small>New to Amazon?</small>
      <button>Create your Amazon Account</button>
    </div>
  );
}

export default Login;
