import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import images from '../constants/images';
import './Navbar.css';

const Menu = () => (
    <>
        <li className="p__poppins"><a href="#home">Inicio</a></li>
        <li className="p__poppins"><a href="#acessorios">Acessórios</a></li>
        <li className="p__poppins"><a href="#cta">Doação</a></li>
        <li className="p__poppins"><a href="#contato">Contato</a></li>
    </>
)

export function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="logo" />
                    <p className="p__poppins">Feliz Natal</p>
                </div>
                    <ul className="app__navbar-links">
                        <Menu />
                    </ul>

                    <div className="app__navbar-menu">
                        { toggleMenu
                            ? <RiCloseLine style={{ color: '#fff', fontSize: '24px' }} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line  style={{ color: '#fff', fontSize: '24px' }} onClick={() => setToggleMenu(true)} />
                        }

                        { toggleMenu && (
                            <div className="app__navbar-menu_container">
                                <div className="app__navbar-menu_container-links">
                                    <Menu className="app__navbar-menu_links" />
                                </div>
                            </div>
                        )}
                    </div>
        </div>
    )
}