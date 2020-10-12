import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseconfig'
import '../styles/contact.css'


const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-portfolio-7ed96.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ''}
            required
          />
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
            required
          />
        </div>

        <div className="message-container">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ''}
            required
          ></textarea>
        </div>
        <button className="form-submit" type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm