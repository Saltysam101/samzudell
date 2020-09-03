import React, { Component } from 'react';
import '../home.css';
import image from '../Assets/damian-zaleski-RYyr-k3Ysqg-unsplash(1).png';
import icon from '../Assets/iconfinder_github-social-media_765246(1).png';
import { Link } from 'react-router-dom';
import currentWeather from '../Assets/currentweather.png';
import petsy from '../Assets/petsy.png';
import chatme from '../Assets/chatme.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-page">
                    <img className="hero-bg-img" src={image} alt=""/>
                    <div className="hero-info">
                        <h1 className="hero-stmt">I can help expand your interests with a website!</h1>
                        <div className="git-container">
                            <h3 className="hero-git-title">My Github:</h3>
                            <Link className="hero-git-link" target="_blank" to={"//github.com/Saltysam101"}>
                                <img className="hero-git-icon" src={icon} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-section">
                    <h2 className="section-title">Projects</h2>
                    <div className="project-container">
                        <div className="project-item">
                            <h3 className="project-name">Current Weather</h3>
                            <Link target="_blank" to={"//www.currentweathertemp.com/"}>
                                <img src={currentWeather} alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <Link target="_blank" to={"//github.com/Saltysam101/weather-js"}>
                                <button className="see-code">See Code</button>
                            </Link>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">Petsy</h3>
                            <Link target="_blank" to={"//www.dogsstuff.net/"}>
                                <img src={petsy} alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <Link target="_blank" to={"//github.com/Saltysam101/petsy"}>
                                <button className="see-code">See Code</button>
                            </Link>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">ChatMe</h3>
                            <Link target="_blank" to={"//chatmeapp.net/"}>
                                <img src={chatme} alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <Link target="_blank" to={"//github.com/Saltysam101/ChatMe"}>
                                <button className="see-code">See Code</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <br/>
                <br/>

            </div>
        )
    }
}
