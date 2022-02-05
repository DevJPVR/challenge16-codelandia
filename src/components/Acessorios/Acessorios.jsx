import React from "react";

import images from '../constants/images';
import './Acessorios.css';

export function Acessorios() {
    return (
        <div className="app__container" id="acessorios">
            <div className="app__container-head">
                <h1 className="headtext__poppins">Acessórios</h1>
                <p className="subtitle__poppins">Nessas festas de fim de ano mande um presente para < br />a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <div className="app__container-cards">
                <div className="app__container-cards_card">
                    <img src={images.giving1} alt="giving1" />
                    <p className="p__poppins">Presentes</p>
                    <p className="subtitle__poppins">Eles são os melhores presentes que existem.</p>
                </div>
                <div className="app__container-cards_card">
                    <img src={images.giving2} alt="giving2" />
                    <p className="p__poppins">Enfeites</p>
                    <p className="subtitle__poppins">Dê uma decoração.</p>
                </div>
                <div className="app__container-cards_card">
                    <img src={images.giving4} alt="giving4" />
                    <p className="p__poppins">Doces</p>
                    <p className="subtitle__poppins">Aproveite os doces natalinos.</p>
                </div>
                <div className="app__container-cards_card">
                    <img src={images.giving3} alt="giving3" />
                    <p className="p__poppins">Muito amor</p>
                    <p className="subtitle__poppins">Aproveite os sentimentos que duram para sempre.</p>
                </div>
            </div>
        </div>
    )
}