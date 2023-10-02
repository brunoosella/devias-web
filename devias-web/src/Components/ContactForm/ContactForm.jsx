// External modules
import React from 'react'
import emailjs from '@emailjs/browser'

// Internal modules
import './ContactForm.scss'

export default function ContactForm (){

  //Constant
  const form = React.useRef()

  // Request of EmailJS
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

          {/* Title formularie */}
          <div className='contact-title'>

            <h2>
              Let's talk.
            </h2>

          </div>

          {/* Container of data */}
          <div className='data-container'>

            <div className='locker'>
              <label className='form-label '>Name <span>*</span></label>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                required
              />
            </div>

            <div className='locker'>
              <label className='form-label' >Last name <span>*</span></label>
              <input
                type='text'
                name='user_last_name'
                placeholder='Last name'
                required
              />
            </div>

            <div className='locker'>

              <label className='form-label' >Company <span>*</span></label>
              <input
                type='text'
                name='user_company'
                placeholder='Company'
                required
              />
            </div>

            <div className='locker'>

              <label className='form-label' >E-mail <span>*</span></label>
              <input
                type='email'
                name='user_email'
                placeholder='E-mail'
                required
              />
            </div>
          </div>

          {/* Container of consult */}
          <div className='consult-container'>

            <label className='form-label' >Consult <span>*</span></label>
            <textarea
              name='consult'
              required
            />
            <input
              type='submit'
              value='Send'
            />
          </div>

        </div>

      </div>
    </form>
  )

}