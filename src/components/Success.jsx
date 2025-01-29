import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Success.css";

const Success = ({ orderData }) => {
    const location = useLocation();
    const history = useHistory();


    useEffect(() => {
        if (!orderData) {
            history.replace("/");
        }
    }, [orderData, history]);

    if (!orderData) return null;

    // @ts-ignore
    const { name, size, dough, toppings = [], quantity = 1 } = orderData;
    const basePrice = 85.5;
    const toppingsPrice = toppings.length * 5;
    const totalPrice = (basePrice + toppingsPrice) * quantity;

    return (
        <div className="success-container">
            <h1 className="success-title">Teknolojik Yemekler</h1>
            <p className="success-subtitle">Lezzetin yolda</p>
            <h2 className="success-message">SİPARİŞ ALINDI</h2>

            <div className="order-summary">
                <h3>{name}</h3>
                <p><strong>Boyut:</strong> {size}</p>
                <p><strong>Hamur:</strong> {dough}</p>
                <p><strong>Ek Malzemeler:</strong> {toppings.length > 0 ? toppings.join(", ") : "Yok"}</p>

                <div className="total-box">
                    <p><strong>Seçimler:</strong> {toppingsPrice.toFixed(2)}₺</p>
                    <p><strong>Toplam:</strong> {totalPrice.toFixed(2)}₺</p>
                </div>
            </div>

            <footer className="success-footer">
                <h2>Teknolojik Yemekler</h2>
                <p>341 Londonderry Road, Istanbul Türkiye</p>
            </footer>
        </div>
    );
};

export default Success;
