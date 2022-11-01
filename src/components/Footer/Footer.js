import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <ul className='footer__nav-list'>
                <li>FAQ</li>
                <li>Regulamin</li>
                <li>Rodo</li>
                <li><strong>Contact</strong></li>
            </ul>
        </div>
    );
};

export default Footer;