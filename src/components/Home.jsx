import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Teknolojik Yemekler</h1>
            <h2>Kod acıktırır, pizza doyurur</h2>
            <button onClick={() => navigate("/order")} className="order-button">Acıktım</button>
        </div>
    );
}
