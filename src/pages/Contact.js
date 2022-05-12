import React from 'react'
import PizzaLeft from '../assets/img/pizzaLeft.jpg'
import '../styles/contact.css'
function Contact() {
  return (
    <>
    <div className="contact">
        <div className="leftSide" style={{backgroundImage : `url(${PizzaLeft})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form action="" id='contact-from' method='POST'>
                <label htmlFor="name">Full Name :</label>
                <input type="text" name="name" id="" placeholder='Enter name' />
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="" placeholder='Enter Email' />
                <label htmlFor="massge">Message :</label>
                <textarea rows='6' placeholder='Enter Message ...' name='message' required />           
                <button type='submit'> Send Message</button>
                </form>
        </div>
    </div>
    </>
  )
}

export default Contact