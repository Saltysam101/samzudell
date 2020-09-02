import React, { Component } from 'react';
import '../home.css';
import image from '../Assets/damian-zaleski-RYyr-k3Ysqg-unsplash(1).png';
import icon from '../Assets/iconfinder_github-social-media_765246(1).png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-page">
                    <img className="hero-bg-img" src={image} alt=""/>
                    <h1 className="hero-stmt">I can help expand your interests with a website!</h1>
                    <h3>My Github:</h3>
                    <img src={icon} alt=""/>
                </div>
            </div>
        )
    }
}
