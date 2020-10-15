import React, { Component } from 'react'
import me from '../Assets/about-pic.jpg';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <h3 className="about-section-title">About</h3>
                <div className="about-hero">
                    <h4 className="about-hero-stmt">Do you want to know the man behind the website? Check out my short bio below.</h4>
                    <img className="me" src={me} alt=""/>
               </div>

               <div className="about-me">
                   <h3 className="title">A little about me</h3>
                   <p>I am a self-taught web developer. Throughout my
                    short work experience, I have worked in fast food
                    restaurants and more recently in a factory. 
                    I don't particularly like factory work, so I began to 
                    search for other opportunities that would interest
                    me. While I was in high school, I always 
                    enjoyed math. I actually took more math than I 
                    had to. I knew problem solving was something I 
                    was very interested in and I stumbled into 
                    programming. It's really a dual-edge sword. I get 
                    to solve problems with code but it also forces me 
                    to be creative and I love that!
                    </p>
               </div>

               <div className="unrelated-facts">
                   <h3 className="title">Unrelated Facts</h3>
                   <p>I am a pet owner of five!(Yikes) I have two Golden
                        Doodles and three cats. The dog's names are 
                        Amber and Jackson and the cat's names are Coal,
                        Storm, and Gray. And yes, all but one animal is 
                        named based on the color of their fur!
                        I am also a homeowner in northeast Ohio. 

 </p>
               </div>
            </div>
        )
    }
}
