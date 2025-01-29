import React from "react";
import './Header.css';

export default function Header() {

    return (
        <header className="header">
            <a href="/" className="header-link">
                <img
                    src="./images/iteration-1-images/logo.svg"
                    alt="Teknolojik Yemekler Logo"
                    className="header-logo"
                />
                <h1 className="header-title">
                    Teknolojik Yemekler
                </h1>
            </a>
        </header>
    );
}


