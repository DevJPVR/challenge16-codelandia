import React from "react";

import images from '../constants/images';
import {AiOutlineGift} from 'react-icons/ai';
import './Cta.css';

export function Cta() {
    return (
        <div className="app__cta-container section__padding" id="cta">
            <div className="app__cta-img">
                <img src={images.shared} alt="shared" />
            </div>
            <div className="app__cta-info">
                <h1 className="headtext__poppins">Comemore com <br/> muito amor!</h1>
                <p className="p__poppins">Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal.</p>
                <button className="custom__button" type="button"><AiOutlineGift style={{ fontSize: '22px', marginRight: '0.5rem' }} /> Fazer doação</button>
            </div>
        </div>
    )
}