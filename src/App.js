/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Loginform from "./components/Loginform";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <div
                    className="links"
                    style={{ padding: "20px", paddingBottom: "40px" }}
                >
                    <a href="/">Home</a> &nbsp; &nbsp;
                    <a href="/login">Login</a>&nbsp; &nbsp;
                    <a href="/register">Register</a>&nbsp; &nbsp;
                </div>
            </div>
            <Router>
                <Route path="/" exact render={(props) => <Home />} />
                <Route path="/login" render={(props) => <Loginform />} />
                <Route path="/register" render={(props) => <Register />} />
            </Router>
        </div>
    );
}

export default App;
