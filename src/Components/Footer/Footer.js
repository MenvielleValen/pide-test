import React from 'react';
import './Footer.scss'
import Logo from './../../Assets/img/icon.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="PIDE - Delivery" />
        </footer>
    )
}
