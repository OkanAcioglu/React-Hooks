import React, { useState } from 'react'
//! Array is more straightforward in one case just wipe out the data and set it on the empty array and second thing we had the function that was just returning a new array

const UseStateObject = () => {
  // Object State
  const [person, setPerson] = useState({
    //! Pass in object directly
    name: 'Okan',
    age: 24,
    message: 'random message',
  })

  // Separate(Multiple) States
  //! Below case we are not dealing object anymore
  const [name, setName] = useState('Okan #2')
  const [age, setAge] = useState('28')
  const [message, setMessage] = useState('random message #2')

  const changeMessageHandler = () => {
    //! If we do below we wipe out all the data and set the person to string
    //setPerson('Hello World')
    //! If we do below we changed the message but we wipe out all the  other data
    //setPerson({ message: 'Hello World' })
    //! If we do below we leave the other pairs same and override the message only
    //! Do not forget to use spread operator when tackling with object in useState
    setPerson({ ...person, message: 'Hello World' })
  }

  const changeMessageHandler2 = () => {
    setMessage('Hello World')
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessageHandler}>
        Change Message
      </button>
      <br />
      <br />
      <br />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessageHandler2}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject

//! There is no rule that prevents us to setting up as many state values as we want. So instead of going one big object, we can setup multiple smaller state values where we just a single value and function that controls it.
//! But if we decided to go with object ,some uses cases where object will be more logical, never never forget to preserve the old values with using spread operator.
//
