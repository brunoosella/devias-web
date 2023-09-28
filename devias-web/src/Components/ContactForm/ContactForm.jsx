// External modules
import React from 'react'
import emailjs from '@emailjs/browser'

// Internal modules
import './ContactForm.scss'

export default function ContactForm (){

  //Constant
  const form = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_f9jpfqc', 'template_d4lzjah', form.current, 'fzV6NkqgeJ4dUbYVN')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <div className='container'>
        <div className='form-container'>

          <div className='locker'>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>

          <div className='locker'>
            <label>Last name</label>
            <input type="text" name="user_last_name" />
          </div>

          <div className='locker'>

            <label>Company</label>
            <input type="text" name="user_company" />
          </div>

          <div className='locker'>

            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          
          <label>Consult</label>
          <textarea name="consult" />
          <input type="submit" value="Send" />

        </div>

      </div>
    </form>
  )
}