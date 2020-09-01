import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="tab">
                    <h1>Samuel Zudell</h1>
                    <h3>Web Developer</h3>
                </div>
                <ul className="nav-links">
                    <Link to="/">
                        <li>
                            Home 
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            About 
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            Contact 
                        </li>
                    </Link>
                </ul>
                
            </div>
        )
    }
}
