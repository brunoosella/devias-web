// External modules
import React from 'react'
import {CSSTransition} from 'react-transition-group'

//Internal modules
import './FormFront.scss'

export default function FormFront() {

  const [step, setStep] = React.useState(0)
  const [show, setShow] = React.useState(true)
  const steps = ['name', 'email', 'password']
  const nodeRef = React.useRef(null)

  const nextStep = (event) => {

    event.preventDefault()

    setShow(false)
    setTimeout(() => {

      if (step !== steps.length - 1) {

        setStep((prevStep) => (prevStep + 1) % steps.length)
        setShow(true)

      }

    }, 400)

  }

  return (
    <div id='form-front'>
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={400}
        classNames='fade'
        unmountOnExit
      >
        <form ref={nodeRef}>
          <div>
            <label style={{color: 'black'}}> {steps[step]} </label>
            <input
              type='text'
              name={steps[step]}
            />
            <button onClick={nextStep}>Siguiente</button>
          </div>
        </form>
      </CSSTransition>
    </div>
  )

}
