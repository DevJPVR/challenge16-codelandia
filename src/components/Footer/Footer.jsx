import React from "react";

import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'

import images from '../constants/images';
import './Footer.css';

export function Footer() {
    return (
        <div className="app__footer section__padding">
            <div className="app__footer-logo">
                <img src={images.logo} alt="logo" />
                <h1>Feliz Natal</h1>
            </div>
            <div className="app__footer-social">
                <a href="#"><FiTwitter /></a>
                <a href="#"><FiYoutube /></a>
                <a href="#"><FiLinkedin /></a>
                <a href="#"><FiInstagram /></a>
                <a href="#"><FiFacebook /></a>
            </div>
        </div>
    )
}