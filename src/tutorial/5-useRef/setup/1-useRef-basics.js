import React, { useEffect, useRef } from 'react'
//! We have a option of using of uncontrolled inputs and we do that with using useRef
//! There are many application of useRef but most popular is targeting dom element
//! useRef works a lot like useState
// preserves value in between renders (similarity)
// DOES NOT trigger re-render (difference)
// target DOM nodes/elements (most popular used case)

const UseRefBasics = () => {
  //! We create useRef set it initial value equal to zero and assign it to a variable
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  //! useRef is object with property name "current"
  console.log(refContainer)

  //! Whenever we submit a form since we added ref attribute and set it equal to refContainer, when we are submitting, the current.value will hold the value of our input
  const handleSubmit = (e) => {
    e.preventDefault()
    //! refContainer.current is now our input so just grab the value...
    console.log(refContainer.current.value)
    //!!! We are not setting up a controlled input. In this case we do not have state value that reflects the value that is going to be in the input. And we do not call onChange each and every time we type smth. in the input. Instead we use this ref and in the current property we are going to have a value.
    //! We can add this ref any HTML element.

    //! divContainer pointing to div DOM Node.
    console.log(divContainer.current)
  }

  //! One thing that we can do with useRef hook is to focus() our input the moment app renders.
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          {/*//! use ref attribute and set it equal to the refContainer */}
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  )
}

export default UseRefBasics
