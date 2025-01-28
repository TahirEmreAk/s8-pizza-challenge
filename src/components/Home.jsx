import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <div className="home-container">
            <h1>En Lezzetli Pizzalar Burada!</h1>
            <p>Hemen sipariş ver, sıcak ve taze pizzanın keyfini çıkar.</p>
            <Link to="/order">
                <button className="order-button">Sipariş Ver</button>
            </Link>
        </div>
    );
};

export default Home;
