import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <h2>Teknolojik Yemekler</h2>
                    <ul className="contact-info">
                        <ol>
                            <i>
                                <img src='./images/iteration-2-images/footer/icons/icon-1.png' />
                            </i>
                            34/1 Londonderry Road, İstanbul, Türkiye
                        </ol>
                        <ol>
                            <i >
                                <img src='./images/iteration-2-images/footer/icons/icon-2.png' />
                            </i>
                            aciktim@teknolojikyemekler.com
                        </ol>
                        <ol>
                            <i>
                                <img src='./images/iteration-2-images/footer/icons/icon-3.png' />
                            </i>
                            +90 216 123 45 67
                        </ol>
                    </ul>
                    <p>Teknolojik Yemekler</p>
                </div>
                <div className="footer-center">
                    <h3>Hot Menu</h3>
                    <ul>
                        <ol>Tamla Pizza</ol>
                        <ol>5 Kişilik Hackathon Pizza</ol>
                        <ol>useEffect Tavuklu Pizza</ol>
                        <ol>Beyaz Console Frosty</ol>
                        <ol>Testler Geçti Mutlu Burger</ol>
                        <ol>Position Absolute Acı Burger</ol>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Instagram</h3>

                </div>
            </div>
        </footer>
    );
}

