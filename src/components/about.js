import React, { Component } from 'react'
import me from '../Assets/me.jpeg';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return (
            <div className="About-page">
                <h3 className="about-section-title">About</h3>
                <div className="about-hero">
                    <img className="me" loading="eager" src={me} alt=""/>
               </div>

               <div className="about-me">
                   <h3 className="title">A little about me</h3>
                   <p>I am a self-taught web developer. Throughout my
                    short work experience, I have worked in fast food
                    restaurants and more recently in a factory. 
                    I don't particularly like factory work, so I began to 
                    search for other opportunities that would interest
                    me. While I was in high school, I always 
                    enjoyed math. I knew problem solving was something I 
                    was very interested in and I stumbled into 
                    programming. It's really a dual-edge sword. I get 
                    to solve problems with code but it also forces me 
                    to be creative and I love that!
                    </p>
               </div>
            </div>
        )
    }
}
