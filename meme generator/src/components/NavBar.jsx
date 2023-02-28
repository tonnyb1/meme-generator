import React from "react";
import logo from '../assets/Logo.png';

export default function NavBar() {

    return (
        <header>
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="logotitle">Meme Generator</h1>
            </div>
        </header>
    )
}