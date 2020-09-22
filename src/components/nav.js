import React from 'react';
import {NavLink} from 'react-router-dom';
import '../nav.css';

export default class Nav extends React.Component {

        state = { condition: false };
    
    
    

    handleClick() {
        this.setState({condition: !this.state.condition})
    }

    render() {

        const menu = this.state.condition ? "nav-links-toggled" : "nav-links"

        return (
            <div className="nav">
                <div className="tab">
                    <h1 className="my-name">Samuel Zudell</h1>
                    <h3 className="my-role">Web Developer</h3>
                </div>
                <ul className={menu}>
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
                <div onClick={() => this.handleClick()} className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                
            </div>
        )
    }
}


