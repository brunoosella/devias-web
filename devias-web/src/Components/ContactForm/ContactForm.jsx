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

  const [touchedFields, setTouchedFields] = React.useState({
    user_name: false,
    user_last_name: false,
    user_company: false,
    user_email: false,
    consult: false
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

  const handleBlur = (e) => {

    const {name} = e.target
    setTouchedFields({...touchedFields, [name]: true})

  }

  const isFieldValid = (fieldName) => {

    if (touchedFields[fieldName]) {

      switch (fieldName) {

        case 'user_name':
          return formData.user_name.length >= 4

        case 'user_last_name':
          return formData.user_last_name.length >= 4

        case 'user_company':
          return formData.user_company.length >= 4

        case 'user_email':
          return formData.user_email.length >= 8 && formData.user_email.includes('@')

        case 'consult':
          return formData.consult.length >= 15

        default:
          return true

      }

    }
    return true

  }

  const allFieldsValid = Object.keys(formData).every((fieldName) => isFieldValid(fieldName))

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
                onBlur={handleBlur}
                placeholder='Name'
              />

              {touchedFields.user_name && !isFieldValid('user_name') && (
                <h4 className='input-incorrect'>Short name</h4>
              )}
            </div>

            <div className='locker'>
              <label className='form-label' >Last name <span>*</span></label>
              <input
                type='text'
                name='user_last_name'
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Last name'
              />

              {touchedFields.user_name && !isFieldValid('user_last_name') && (
                <h4 className='input-incorrect'>Short last name</h4>
              )}
            </div>

            <div className='locker'>

              <label className='form-label' >Company <span>*</span></label>
              <input
                type='text'
                name='user_company'
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Company'
              />

              {touchedFields.user_name && !isFieldValid('user_company') && (
                <h4 className='input-incorrect'>Short name company</h4>
              )}
            </div>

            <div className='locker'>

              <label className='form-label' >E-mail <span>*</span></label>
              <input
                type='email'
                name='user_email'
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='E-mail'
              />

              {touchedFields.user_name && !isFieldValid('user_email') && (
                <h4 className='input-incorrect'>Incorrect email</h4>
              )}
            </div>
          </div>

          {/* Container of consult */}
          <div className='consult-container'>

            <label className='form-label' >Consult <span>*</span></label>
            <textarea
              name='consult'
              value={formData.consult}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Leave your consult'
            />

            {touchedFields.user_name && !isFieldValid('consult') && (
              <h4 className='input-incorrect-consult'>The minimum number of characters is (15)</h4>
            )}
            <input
              className={`${!formComplet ? 'form-empty' : ''}`}
              type='submit'
              value={isLoading ? 'Sending...' : 'Send'}
              disabled={!allFieldsValid}
            />
          </div>

        </div>

      </div>
    </form>
  )

}