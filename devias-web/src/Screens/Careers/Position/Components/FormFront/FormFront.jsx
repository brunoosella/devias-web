// External modules
import React from 'react'
import {CSSTransition} from 'react-transition-group'

//Internal modules
import './FormFront.scss'

export default function FormFront({form_position}) {

  // Local State
  const [step, setStep]         = React.useState(0)
  const [show, setShow]         = React.useState(true)
  const [formData,setFormData]  = React.useState({
    user_name: '',
    user_last_name: '',
    user_resume: '',
    user_response: '',
    user_response_job: '',
    user_email: '',
    user_phone: ''
  })
  const [touchedFields, setTouchedFields] = React.useState({
    user_name: false,
    user_last_name: false,
    user_resume: false,
    user_response: false,
    user_response_job: false,
    user_email: false,
    user_phone: false
  })

  // Constants
  const nodeRef = React.useRef(null)

  // Save the new values
  const handleChange = (e) => {

    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }

  // Check blur
  const handleBlur = (e) => {

    const {name} = e.target
    setTouchedFields({...touchedFields, [name]: true})

  }

  // Finish the transition to start the next one
  const nextStep = (event) => {

    event.preventDefault()

    setShow(false)

  }

  // Start the transition and next step
  const onExited = () => {

    setShow(true)
    setStep(step + 1)

  }

  // Verify is field valid
  /* const isFieldValid = (fieldName) => {

    if (!touchedFields[fieldName]) {

      return false

    } else {

      switch (fieldName) {

        case 'user_name':
          return formData.user_name.length >= 4

        case 'user_last_name':
          return formData.user_last_name.length >= 4

        case 'user_email':
          return formData.user_email.length >= 8 && formData.user_email.includes('@')

        default:
          return true

      }

    }

  } */

  return (
    <div id='form-front'>
      <div className='container'>

        <CSSTransition
          nodeRef={nodeRef}
          in={show}
          timeout={500}
          classNames='fade'
          unmountOnExit
          onExited={onExited}
        >
          <form ref={nodeRef}>
            {step === 0 && (
              <div>
                <h2 style={{color: 'black', fontSize: '2em'}}>
                  {form_position.title}
                </h2>
                <button onClick={nextStep}>{form_position.button}</button>
              </div>
            )}
            {step === 1 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_name}<span>*</span></label>
                <input
                  type='text'
                  name='user_name'
                  value={formData.user_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={form_position.placeholder}
                />
                <button onClick={nextStep}>{form_position.button}</button>
              </div>
            )}
            {step === 2 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_last_name} <span>*</span></label>
                <input
                  type='text'
                  name='user_last_name'
                  value={formData.user_last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={form_position.placeholder}
                />
                <button onClick={nextStep}> {form_position.button} </button>
              </div>
            )}
            {step === 3 && (
              <div>
                <label style={{color: 'black'}}> {formData.user_name} {form_position.user_resume} <span>{form_position.user_resume_span}</span> </label>
                <input
                  type='text'
                  name='user_resume'
                  value={formData.user_resume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={form_position.placeholder}
                />
                <button onClick={nextStep}> {form_position.button} </button>
              </div>
            )}
            {step === 4 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_response}</label>
                <input
                  type='text'
                  name='user_response'
                  value={formData.user_response}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={form_position.placeholder}
                />
                <button onClick={nextStep}>{form_position.button}</button>
              </div>
            )}
            {step === 5 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_response_job}</label>
                <input
                  type='text'
                  name='user_response_job'
                  value={formData.user_response_job}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={form_position.placeholder}
                />
                <button onClick={nextStep}>{form_position.button}</button>
              </div>
            )}
            {step === 6 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_email}</label>
                <input
                  type='email'
                  name='user_email'
                  value={formData.user_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='name@example.com'
                />

                {/* Verify touched email and valid email */}
                {/* {touchedFields.user_email && !isFieldValid('user_email') && (
                  <h4 className='input-incorrect'>Incorrect email</h4>
                )} */}
                <button onClick={nextStep}>{form_position.button}</button>
              </div>
            )}
            {step === 7 && (
              <div>
                <label style={{color: 'black'}}>{form_position.user_phone}</label>
                <input
                  type='number'
                  name='user_phone'
                  value={formData.user_phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='(0000) 1234'
                />
                <button onClick={nextStep}>{form_position.button_send}</button>
              </div>
            )}
            {step === 8 && (
              <div>
                <h3 style={{color: 'black', fontSize: '3em'}}>{form_position.end_form}</h3>
              </div>
            )}
          </form>
        </CSSTransition>
      </div>
    </div>
  )

}
