import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../nav.css';

export default class Nav extends Component {


    render() {

        return (
            <div className="nav">
                <div className="tab">
                    <h1 className="my-name">Samuel Zudell</h1>
                    <h3 className="my-role">Web Developer</h3>
                </div>
                <ul className="nav-links">
                    <NavLink to="/" exact activeClassName="isActive">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="isActive">
                        About
                    </NavLink>
                    <NavLink to="/contact" activeClassName="isActive">
                        Contact
                    </NavLink>
                </ul>
                <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                
            </div>
        )
    }
}


