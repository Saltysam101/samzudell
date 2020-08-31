import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
            <div>
                <div className="tab">
                    <h1>Samuel Zudell</h1>
                    <h3>Web Developer</h3>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                
            </div>
        )
    }
}
