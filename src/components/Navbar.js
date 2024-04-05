import React from "react"
import logo from '../images/logo192.png'
import '../style.css'


export default function Navbar() {
    return(
        <nav className="navbar flex-container">
            <img src={logo} className="reactLogo" alt="ReactFacts logo" />
            <h3 className="logoText">ReactFacts</h3>
            <h4 className="navTitle">React Course - Project 1</h4>
        </nav>
    )
}