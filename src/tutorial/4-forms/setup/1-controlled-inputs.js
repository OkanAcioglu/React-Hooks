import React, { useState } from 'react'
//? JS
//? const input = document.getElementById('myText');
//? const inputValue = input.value
//! React
//! value, onChange

//! Whenever we work with controlled inputs we will be hooking up our input to a state value
//! When its come to React there is two options: we can add onSubmit either at the form or we can still add it to the button a onClick
const ControlledInputs = () => {
  const submitHandler = (e) => {
    //! When we submit the form, browser try to submit it and refresh the page...
    //! To prevent this action we will use preventDefault on event.
    e.preventDefault()
    console.log('hello world')
  }
  return (
    <article>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          {/* In React if we wanna connect label to the input we should use htmlFor */}
          {/* Also in input we should have both id and name */}
          <label htmlFor='firstName'>Name : </label>
          <input type='text' id='firstName' name='firstName' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input type='text' id='email' name='email' />
        </div>
        <button type='submit'>add person</button>
        {/* <button type='submit' onClick={submitHandler}>add person</button> */}
      </form>
    </article>
  )
}

export default ControlledInputs
