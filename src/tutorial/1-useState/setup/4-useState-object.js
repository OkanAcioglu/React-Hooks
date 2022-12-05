import React, { useState } from 'react'
//! Array is more straightforward in one case just wipe out the data and set it on the empty array and second thing we had the function that was just returning a new array

const UseStateObject = () => {
  const [person, setPerson] = useState({
    //! Pass in object directly
    name: 'Okan',
    age: 24,
    message: 'random message',
  })

  const changeMessageHandler = () => {
    //! If we do below we wipe out all the data and set the person to string
    //setPerson('Hello World')
    //! If we do below we changed the message but we wipe out all the  other data
    //setPerson({ message: 'Hello World' })
    //! If we do below we leave the other pairs same and override the message only
    //! Do not forget to use spread operator when tackling with object in useState
    setPerson({ ...person, message: 'Hello World' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessageHandler}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
