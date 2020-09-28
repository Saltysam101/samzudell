import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/nav.css';

export default class Nav extends React.Component {

        state = { condition: false };
        hamburger = React.createRef();
    
    isVisible(){
       const style = getComputedStyle(this.hamburger.current);
       if(style.visibility === "hidden"){
           return false
       }
       else{
           this.handleClick();
       }
    }

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
                    <NavLink onClick={() => this.isVisible()} to="/" exact activeClassName="isActive">
                        Home
                    </NavLink>
                    <NavLink onClick={() => this.isVisible()} to="/about" activeClassName="isActive">
                        About
                    </NavLink>
                    <NavLink onClick={() => this.isVisible()} to="/contact" activeClassName="isActive">
                        Contact
                    </NavLink>
                </ul>
                <div ref={this.hamburger} onClick={() => this.isVisible()} className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                
            </div>
        )
    }
}


