// External modules
import React from 'react'
import {CSSTransition} from 'react-transition-group'

//Internal modules
import './FormFront.scss'

export default function FormFront() {

  const [step, setStep] = React.useState(0)
  const [show, setShow] = React.useState(true)
  const nodeRef = React.useRef(null)

  const nextStep = (event) => {

    event.preventDefault()

    setShow(false)

  }

  const onExited = () => {

    setShow(true)
    setStep(step + 1)

  }

  return (
    <div id='form-front'>
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
              <label style={{color: 'black'}}> Este es el primero </label>
              <input
                type='text'
                name='Dentro del input'
              />
              <button onClick={nextStep}>Siguiente</button>
            </div>
          )}
          {step === 1 && (
            <div>
              <label style={{color: 'black'}}> Este es el segundo </label>
              <input
                type='text'
                name='Dentro del input'
              />
              <button onClick={nextStep}>Siguiente</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <label style={{color: 'black'}}> Este es el tercero </label>
              <input
                type='text'
                name='Dentro del input'
              />
              <button onClick={nextStep}>Siguiente</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <label style={{color: 'black'}}> Este es el cuarto </label>
              <input
                type='text'
                name='Dentro del input'
              />
              <button onClick={nextStep}>Siguiente</button>
            </div>
          )}
          {step === 4 && (
            <div>
              <label style={{color: 'black'}}> Este es el quinto </label>
              <input
                type='text'
                name='Dentro del input'
              />
              <button onClick={nextStep}>Siguiente</button>
            </div>
          )}
          {step === 5 && (
            <div>
              <h3 style={{color: 'black', fontSize: '5rem'}}> Hasta aca llegamos </h3>
            </div>
          )}
        </form>
      </CSSTransition>
    </div>
  )

}
