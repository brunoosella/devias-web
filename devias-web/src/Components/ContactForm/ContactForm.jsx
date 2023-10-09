// External modules
import React from 'react'
import emailjs from '@emailjs/browser'

// Internal modules
import './ContactForm.scss'

export default function ContactForm (){

  // Local State
  const [isLoading, setIsLoading] = React.useState(false)

  const [formData,setFormData] = React.useState({
    user_name: '',
    user_last_name: '',
    user_company: '',
    user_email: '',
    consult: ''
  })

  // Constant
  const form = React.useRef()

  const handleChange = (e) => {

    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }

  const formComplet = formData.user_name !== '' &&
                      formData.user_last_name !== '' &&
                      formData.user_company !== '' &&
                      formData.user_email !== '' &&
                      formData.consult !== ''

  // Request of EmailJS
  const sendEmail = (e) => {

    e.preventDefault()
    setIsLoading(true)

    emailjs.sendForm('service_f9jpfqc', 'template_d4lzjah', form.current, 'fzV6NkqgeJ4dUbYVN')
      .then((result) => {

        console.log(result.text)
        setIsLoading(false)
        form.current.reset()

      }, (error) => {

        console.log(error.text)
        setIsLoading(false)

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
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                required
              />
            </div>

            <div className='locker'>
              <label className='form-label' >Last name <span>*</span></label>
              <input
                type='text'
                name='user_last_name'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last name'
                required
              />
            </div>

            <div className='locker'>

              <label className='form-label' >Company <span>*</span></label>
              <input
                type='text'
                name='user_company'
                value={formData.company}
                onChange={handleChange}
                placeholder='Company'
                required
              />
            </div>

            <div className='locker'>

              <label className='form-label' >E-mail <span>*</span></label>
              <input
                type='email'
                name='user_email'
                value={formData.email}
                onChange={handleChange}
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
              value={formData.consult}
              onChange={handleChange}
              placeholder='Leave your consult'
              required
            />
            <input
              className={`${!formComplet ? 'form-empty' : ''}`}
              type='submit'
              value={isLoading ? 'Sending...' : 'Send'}
              disabled={isLoading}
            />
          </div>

        </div>

      </div>
    </form>
  )

}