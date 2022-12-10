import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
//! reducer function is a simple function
//! look for two things:
//! 1) state --> that state right before the update
//! 2) action --> what are we trying to do
const reducer = (state, action) => {}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  //! state and dispatch are just names but there are common practice.
  //! When we invoke useReducer we getting state value and dispatch function
  //! First think we passed in is the "reducer" function
  //! And difference between useState and useReducer that each and every time we want to do something with that whole state we always must use dispatch and it is gonna go through the reducer
  //! We can think of reducer function as something that takes the old state and takes in something called action and then spits back that new state
  //! useReducer is looking for reducer function, so the function of that will manipulate the state and it will happen once we dispatch the action and then the second one is that initial state (we can directly pass it in or we can create new variable and pass the variable name into it like we did below)
  //! Whole idea why we're using useReducer because we only want to update these things once we call dispatch and one we pass in the proper action and we will handle them in one place (in reducer)
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
    } else {
    }
  }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index

//! useReducer used whenever we have more complicated setup. As our app gets more complicated, it definitely is a good practice to useReducer essentially it will add more structure to our states.
//! useReducer relies heavily on Redux. If we understand useReducer, it is going to be very easy to pick up Redux.
