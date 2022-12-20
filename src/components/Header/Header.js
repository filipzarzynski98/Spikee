import React from 'react';
import "./Header.scss"
import logo from "../../images/Spikee-logo-poprawione.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="logo"></img>
            <ul className='header__nav-list'>
                <li><strong>Contact</strong></li>
                <li>FAQ</li>
                <li>Regulamin</li>
                <li>Rodo</li>
            </ul>
            <div className='header__login-and-menu__wrapper'>
                <h3 className='login'>Login</h3>
                <div className='menu__wrapper'>
                    <div className='menu-squeres__top'>
                        <div className='squere'></div>
                        <div className='squere'></div>
                    </div>
                    <div className='menu-squeres__bottom'>
                        <div className='squere'></div>
                        <div className='squere'></div>
                    </div>
                    Menu
                </div>
            </div>
        </div>
    );
};

export default Header;