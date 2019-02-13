import React from 'react';
import logo from '../images/logo.png';
export default function Header(props) {
    return (
        <header>
        <img className="header__logo" alt ='' src={logo} />
        <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}