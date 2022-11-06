import React from 'react';
import "./Header.scss"
import logo from "../../images/Spikee-logo-poprawione.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="logo"></img>
            <div className='header__login-and-menu__wrapper'>
                <h3>Zaloguj się</h3>
                <div>Menu</div>
            </div>
        </div>
    );
};

export default Header;