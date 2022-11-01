import React from 'react';
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>Logo</div>
            <div className='header__login-and-menu__wrapper'>
                <h3>Zaloguj się</h3>
                <div>Menu</div>
            </div>
        </div>
    );
};

export default Header;