import React, { useContext, useState } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import Img from '../../../Assets/Logo.png';
import './navbar.scss';
import { UserContext } from '../../../Context/UserContext';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
    const [active, setActive] = useState('navBar');
    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar');
    };

    const { user } = useContext(UserContext);

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <Link to="/home" className="logo flex">
                        <img src={Img} alt="" className="icon" />
                        <h2>HueTour.</h2>
                    </Link>
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
                            <a href="/#" className="navLink">
                                Contact
                            </a>
                        </li>

                        <Link to="/account" className="user-btn">
                            <FaUserCircle className="user" />
                            {!!user && <span className="user-name">{user.email.slice(0, -10)}</span>}
                        </Link>
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

export default NavbarLogin;
