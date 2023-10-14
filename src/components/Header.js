import React from 'react'
import "./Header.css"
import headerIcon from "../images/HeaderIcon.png"

function Header() {
    return (
        <>
            <div className="header">
                <h1> <img src={headerIcon} alt="" /> RealAssist.AI</h1>
                <p>123 Main Street, Dover, NH03820-4667</p>
            </div>
            <div className="line"></div>
        </>
    )
}

export default Header