import React, { Component } from 'react';
import '../home.css';
import image from '../Assets/damian-zaleski-RYyr-k3Ysqg-unsplash(1).png';
import icon from '../Assets/iconfinder_github-social-media_765246(1).png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-page">
                    <img className="hero-bg-img" src={image} alt=""/>
                    <h1 className="hero-stmt">I can help expand your interests with a website!</h1>
                    <h3 className="hero-git-title">My Github:</h3>
                    <Link className="hero-git-link" target="_blank" to={"//github.com/Saltysam101"}>
                        <img className="hero-git-icon" src={icon} alt=""/>
                    </Link>
                </div>
            </div>
        )
    }
}
