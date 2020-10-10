import React, { Component, useState } from 'react';
import '../styles/contact.css';
import db from '../components/firebase';



export default class Contact extends Component {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert('Message has been submitted')
    })
    .catch((error) => {
        alert(error.message)
    })

    setName("");
    setEmail("");
    setMessage("");
}

    render() {
        return (
            <div>
                <form onSubmit={handleSubmit} >

                    <label htmlFor="name">Name</label>
                    <input 
                    placeholder="Name"
                    name="name" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="email">Email</label>
                    <input 
                    placeholder="Email" 
                    type="email" 
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="message">Message</label>
                    <textarea 
                    placeholder="Message" 
                    name="message" 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30" 
                    rows="10"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
