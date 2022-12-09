import React, { useState } from 'react'
//? JS
//? const input = document.getElementById('myText');
//? const inputValue = input.value
//! React
//! value, onChange

//! Whenever we work with controlled inputs we will be hooking up our input to a state value
//! When its come to React there is two options: we can add onSubmit either at the form or we can still add it to the button a onClick
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  //! Now we head up our inputs for doing that we should add 2 attributes: onChange event listener and value.
  //! With value we  should reference the state. Note that when the time we connect the state and input via value attribute without adding onChange handler we cannot type on the form in the browser. Because state and input are connected and now state is clampted to the initial stage (empty string) that we assign.
  //! Now we add onChange and with onChange we can access the event object and in this case we are looking for is the event.target.value. This will give us whatever is typed in the input.
  //! With all that now we control the state with setFirstName and with value attribute also controlling the input.

  const submitHandler = (e) => {
    //! When we submit the form, browser try to submit it and refresh the page...
    //! To prevent this action we will use preventDefault on event.
    e.preventDefault()
    console.log('hello world')
    //! Now we have access to the firstName and email
    console.log(firstName, email)
  }
  return (
    <article>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          {/* In React if we wanna connect label to the input we should use htmlFor */}
          {/* Also in input we should have both id and name */}
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>add person</button>
        {/* <button type='submit' onClick={submitHandler}>add person</button> */}
      </form>
    </article>
  )
}

export default ControlledInputs
