import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className='section__title'>Get In Touch</h2>
      <div className='contact__info'>
        <h3 className='contact__title'>Lets Talk Games!</h3>
        <p className='contact__details'> Send Me an Email!</p>
      </div>

      <form action="https://formspree.io/f/xnqelekv" method="POST" className='contact__form'>
        <div className='contact__form-group'>
          <div className='contact__form-div'>
            <input type='name' name="name" className='contact__form-input' placeholder='Insert Your Name'/>
          </div>

          <div className='contact__form-div'>
            <input type='email' name= "email" className='contact__form-input' placeholder='Insert Your Email'/>
          </div>

        </div>
        <div className='contact__form-div'>
            <input type='text' name="subect" className='contact__form-input' placeholder='Subject?'/>
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your worries away!'></textarea>
          </div>
          <button className='btn'>Lightspeed!</button>
      </form>
    </section>
  )
}

export default Contact