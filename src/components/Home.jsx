import { useHistory } from "react-router-dom";
import React from "react";

export default function Home() {
    const history = useHistory();
    return (
        <div className="home">
            <h1>Teknolojik Yemekler</h1>
            <h2>Kod acıktırır, pizza doyurur</h2>
            <button onClick={() => history.push("/order")} className="order-button">Acıktım</button>
        </div>
    );
}
