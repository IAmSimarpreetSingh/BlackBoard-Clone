import React from 'react';
import '../css/navbar.css';
import navLogo from '../img/CustomNavigationLogo.png';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';


const toggle = () => {
    console.log('inside toggle function');
    document.getElementById('side-bar').classList.toggle('show');
    document.getElementById('side-bar-links').classList.toggle('show');
    document.getElementById('bottom-content').classList.toggle('show');

    
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
                        <li>
                            <i className="fa fa-globe fa-lg"></i>
                            <NavLink to="/activity">Activity Stream</NavLink>
                        </li>
                        <li className="active">
                            <i className="fa fa-book fa-lg"></i>
                            <NavLink to="/courses">Courses</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-sitemap fa-lg"></i>
                            <NavLink to="/organizations">Organizations</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-calendar fa-lg"></i>
                            <NavLink to="/calender">Calendar</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-comment fa-lg"></i>
                            <NavLink to="/messages">Messages</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-file-text fa-lg"></i>
                            <NavLink to="/grades">Grades</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-cog fa-lg"></i>
                            <NavLink to="tools">Tools</NavLink>
                        </li>
                        <li>
                            <i className="fa fa-sign-out fa-lg"></i>
                            <NavLink to="/signout">Sign Out</NavLink>
                        </li>
                    </ul>
                </div>

                <footer id="bottom-content">
                    <NavLink to="#">Privacy</NavLink>
                    <br />
                    <NavLink to="#">Terms</NavLink>
                </footer>

            </nav>
        </>
    )
}


// Toggle navbar 
// const toggleBtnEle = document.getElementById('icon');
// const sideBarEle = document.getElementById('side-bar');
// const ulContentEle = document.getElementById('side-bar-links');
// const footerContentEle = document.getElementById('bottom-content');



export default Navbar
