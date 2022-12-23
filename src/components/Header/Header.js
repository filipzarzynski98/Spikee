import React from 'react';
import "./Header.scss"
import logo from "../../images/Spikee-logo-poprawione.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="logo"></img>
            <ul className='header__nav-list'>
                <li><strong>About us</strong></li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            <div className='header__login-and-menu__wrapper'>
                <div className='login__wrapper'>
                    <h3 className='login'>Log in</h3>
                </div>
                <div className='login__wrapper'>
                    <h3 className='login'>Sign in</h3>
                </div>
                <div className='menu__wrapper'>
                    <div className='menu-squeres__top'>
                        <div className='squere'></div>
                        <div className='squere'></div>
                    </div>
                    <div className='menu-squeres__bottom'>
                        <div className='squere'></div>
                        <div className='squere'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;