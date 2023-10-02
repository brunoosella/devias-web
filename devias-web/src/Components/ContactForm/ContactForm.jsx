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

          <div className='input-container'>

            <div className='locker'>
              <label className='form-label '>Name</label>
              <input type='text' name='user_name' placeholder='Name' />
            </div>

            <div className='locker'>
              <label className='form-label' >Last name</label>
              <input type='text' name='user_last_name' placeholder='Last name' />
            </div>

            <div className='locker'>

              <label className='form-label' >Company</label>
              <input type='text' name='user_company' placeholder='Company' />
            </div>

            <div className='locker'>

              <label className='form-label' >E-mail</label>
              <input type='email' name='user_email' placeholder='E-mail' />
            </div>
          </div>

          <div className='consult-container'>

            <label className='form-label' >Consult</label>
            <textarea name='consult' placeholder='Consult' />
            <input type='submit' value='Send' />
          </div>

        </div>

      </div>
    </form>
  )

}