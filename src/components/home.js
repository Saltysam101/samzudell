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
                    <h2>Projects</h2>
                    <div className="project-container">
                        <div className="project-item">
                            <h3 className="project-name">Current Weather</h3>
                            <Link>
                                <img src="" alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <button className="see-code">See Code</button>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">Petsy</h3>
                            <Link>
                                <img src="" alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <button className="see-code">See Code</button>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">ChatMe</h3>
                            <Link>
                                <img src="" alt=""/>
                            </Link>
                            <p className="project-description"></p>
                            <button className="see-code">See Code</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
