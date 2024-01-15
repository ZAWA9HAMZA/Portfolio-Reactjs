// Footer.jsx

import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 flex flex-col justify-center items-center mt-5">
            <div className="flex space-x-4">
                <a href="lien-twitter" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
                <a href="lien-linkedin" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                <a href="lien-github" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
                <a href="lien-instagram" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
            </div>
            <div className="flex flex-col items-center space-y-2 mt-4">
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt />
                    <span>Emile Zola Belvedere Casablanca</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaPhone />
                    <span>(+212)600000000</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaEnvelope />
                    <span>Zcode2000@gmail.com</span>
                </div>
            </div>
            <p>&copy; Hamza {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
