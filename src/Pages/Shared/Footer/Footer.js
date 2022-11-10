import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-sky-500 text-white">
            <div>
                <img src={logo} alt="" />
                <p>Abrar's Photography</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/"className="link link-hover">Branding</a>
                <a href="/"className="link link-hover">Photography</a>
                <a href="/"className="link link-hover">Marketing</a>
                <a href="/"className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/"className="link link-hover">About us</a>
                <a href="/"className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/"className="link link-hover">Terms of use</a>
                <a href="/"className="link link-hover">Privacy policy</a>
                <a href="/"className="link link-hover">Cookie policy</a>
            </div>
            <div className='items-center'>@copyright by 2022</div>
        </footer>
        
    );
};

export default Footer;