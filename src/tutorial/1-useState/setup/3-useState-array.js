import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  //! people -> state value
  //! setPeople -> function controls state value

  const clickHandler = () => {
    setPeople([])
  }

  const removeItemHandler = (id) => {
    console.log(id)
    //! Always try to create a new variable and pass it to the function
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h4> {name}</h4>
            <button className='btn' onClick={() => removeItemHandler(id)}>
              Clear Item
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={clickHandler}>
        Clear Items
      </button>
      {/* Alternative Button */}
      {/* <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button> */}
    </>
  )
}

export default UseStateArray

//! Either import {useState} then call useState() or directly use it with React.useState()
