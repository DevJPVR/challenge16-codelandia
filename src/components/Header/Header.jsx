import React from "react";

import {AiOutlineGift} from 'react-icons/ai';
import images from '../constants/images';
import './Header.css';

export function Header() {
    return (
        <div className="app__header section__padding" id="home">
            <div className="app__header-info">
                <h1 className="headtext__poppins">Feliz Natal e <br />Feliz Ano Novo!</h1>
                <p className="p__poppins">Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                
                <button type="button" className="custom__button"><AiOutlineGift style={{ fontSize: '22px', marginRight: '0.5rem' }} />Fazer uma doação</button>
            </div>
            <div className="app__header-img">
                <img src={images.send} alt="send gift" />
            </div>
        </div>
    )
}