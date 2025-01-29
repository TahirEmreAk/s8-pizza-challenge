import { useHistory } from "react-router-dom";
import React from "react";
import "./Home.css";

export default function Home() {
    const history = useHistory();

    return (
        <div className="banner-container">
            <div className="banner">
                <img src="./images/iteration-1-images/home-banner.png" alt="Banner" className="banner-image" />
                <div className="overlay"></div>
            </div>

            <div className="content">
                <img src="./images/iteration-1-images/logo.svg" alt="Logo" className="logo" />
                <h1 className="title">KOD ACIKTIRIR</h1>
                <h2 className="subtitle">PİZZA, DOYURUR</h2>
                <button onClick={() => history.push("/order")} className="cta-button">
                    ACIKTIM
                </button>
            </div>
        </div>
    );
}
