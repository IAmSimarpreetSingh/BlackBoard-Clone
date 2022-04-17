import React from 'react';
import '../css/navbar.css';
import navLogo from '../img/CustomNavigationLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';


const toggle = () => {
    console.log('inside toggle function');
    document.getElementById('side-bar').classList.toggle('show');
    document.getElementById('side-bar-links').classList.toggle('show');
    document.getElementById('mainContainer').classList.toggle('hide');

};


const Navbar = () => {
    return (
        <>
            <nav className="side-bar" id="side-bar">
                <label id="icon" onClick={toggle}>
                    <i className="fa fa-bars"></i>
                </label>
                <div className="logo">
                    <img src={navLogo} alt="LogoImage" />
                </div>

                <div className="side-bar-links" id="side-bar-links">

                    <ul>
                        <li>
                            <i className="fa fa-user fa-lg"></i>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>

                        <li className="active">
                            <i className="fa fa-book fa-lg"></i>
                            <NavLink to="/courses">Courses</NavLink>
                        </li>

                        <li>
                            <i className="fa fa-sign-out fa-lg"></i>
                            <NavLink to="/signout">Sign Out</NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}


export default Navbar
