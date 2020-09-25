import React, { Component } from 'react';
import '../styles/home.css';
import image from '../Assets/damian-zaleski-RYyr-k3Ysqg-unsplash(1).png';
import icon from '../Assets/iconfinder_github-social-media_765246(1).png';
import { Link } from 'react-router-dom';
import currentWeather from '../Assets/currentweather.png';
import petsy from '../Assets/petsy.png';
import chatme from '../Assets/chatme.png';
import contactImage from '../Assets/contactpic.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-page">
                    <img className="hero-bg-img" src={image} alt=""/>
                    <div className="hero-info">
                        <h1 className="hero-stmt">I can help expand your interests with a website!</h1>
                        <div className="git-container">
                            <Link className="hero-git-link" target="_blank" to={"//github.com/Saltysam101"}>
                                <button className="git-link-btn"> 
                                    <img className="hero-git-icon" src={icon} alt=""/> 
                                    <span>My Github</span>
                                </button>
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
                                <img className="project-img" src={currentWeather} alt=""/>
                            </Link>
                            <div className="div">
                                <p className="project-description">
                                    This is a basic weather website. It will ask for permission to track your location and then based on that it will tell you some basic weather info for that location. The site will also give you a 3 day forecast that is updated every 3 hours.
                                </p>
                                <Link className="git-link" target="_blank" to={"//github.com/Saltysam101/weather-js"}>
                                    <button className="see-code">See Code</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">Petsy</h3>
                            <Link target="_blank" to={"//www.dogsstuff.net/"}>
                                <img className="project-img" src={petsy} alt=""/>
                            </Link>
                            <div className="div">
                                <p className="project-description">Petsy is a make-believe dog store. It sells different brands of dog food and dog toys. When you click the 'add to cart' button, it adds it to the cart and if you want more than just one of that item, you can adjust the quantity in the cart. The total should update to adding items and adjustments to the quantities. Finally, when you click the 'checkout' button, an alert will pop up and let you know your "purchase" went through and it will clear the cart.</p>
                                <Link className="git-link" target="_blank" to={"//github.com/Saltysam101/petsy"}>
                                    <button className="see-code">See Code</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-item">
                            <h3 className="project-name">ChatMe</h3>
                            <Link target="_blank" to={"//chatmeapp.net/"}>
                                <img className="project-img" src={chatme} alt=""/>
                            </Link>
                            <div className="div">
                                <p className="project-description">ChatMe is a basic realtime chat site. You can create an account and just chat with anyone who is on there. There are no seperate groups for different chats, it's all just one chat.</p>
                                <Link className="git-link" target="_blank" to={"//github.com/Saltysam101/ChatMe"}>
                                    <button className="see-code">See Code</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="contact-section">
                    <img className="contact-img" src={contactImage} alt=""/>
                   <div className="contact-info">
                    <h2 className="contact-stmt">If you like what you see, contact me below!</h2>
                        <Link className="contact-link" to="/contact">
                            <button className="contact-btn">Contact</button>
                        </Link>
                   </div>
                </div>

            </div>
        )
    }
}
