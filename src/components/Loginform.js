/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState("");
    const [loginResponse, setLoginResponse] = useState("");

    const handleClick = () => {
        axios
            .post("http://localhost:9000/users/login", {
                data: { email: email, password: password },
            })
            .then((res) => {
                console.log(email);
                console.log(password);
                console.log(res.data);
                setLoginResponse(JSON.stringify(res.data));
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <label>
                Email:{" "}
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button onClick={handleClick}>Login</button>
            <br />
            {showError}
            <br />
            {loginResponse}
            <br />
            <label>
                Not a member? <a href="/register">Click here to Register</a>
            </label>
            <Router>
                <Route
                    path="/register"
                    exact
                    render={(props) => <Register />}
                />
            </Router>
        </>
    );
}

export default Loginform;
