import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import Img from '../../../Assets/Logo.png';
import './navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="/#" className="logo flex">
                        <img src={Img} alt="" className="icon" />
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="/#" className="navLink">
                                Home
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="/#" className="navLink">
                                Packages
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="/#" className="navLink">
                                Shop
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="/#" className="navLink">
                                About
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="/#" className="navLink">
                                Pages
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="/#" className="navLink">
                                News
                            </a>
                        </li>

                        <li className="navItem">
                            <Link to="/contact" className="navLink">
                                Contact
                            </Link>
                        </li>

                        <button className="btn">
                            <Link to="/login">Login</Link>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
