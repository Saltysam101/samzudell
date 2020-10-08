import React, { Component } from 'react';
import '../styles/contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <form action="">

                    <label htmlFor="name">Name</label>
                    <input placeholder="Name" name="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" type="email" name="email" id="email"/>

                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Message" name="message" id="message" cols="30" rows="10"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
