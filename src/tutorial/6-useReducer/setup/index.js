import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'
//? ----1-----
//! In order to affect anythink in the state we would need to dispatch it
//! We call "dispatch()" and in it ALWAYS need to pass in the object with a property by the name of "type".
//! So "action" is going to be our object and in that object we must have the property by the name of "type"
//! Then we need to set "type" equal to smth. Common practice is using uppercase and between words use (_)
//! Once we "dispatch", then in reducer we need to handle it.
//! From reducer we need ALWAYS want to return some kind of state
//! Go with if statement and check whether we are dispatching the action with type of testing. If it matches we wanna do something
//! What we do is set up a dispatch function with our action objects and in reducer we catch them and do smthing.
//? ----3-----
//! Now in the reducer we are not only checking for the type but also want to grab that payload.
//! Before adding it to return state, grab the all state value in that property...
// const reducer = (state, action) => {
//   if (action.type === 'ADD_ITEM') {
//     const newPeople = [...state.people, action.payload]
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'item added',
//     }
//   }
//   if (action.type === 'NO_VALUE') {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'Please enter value',
//     }
//   }
//   //? ---5---
//   //! we wanna call it after 3 seconds for doing it we will pass the closeModal function to the Modal component as a prop.
//   if (action.type === 'CLOSE_MODAL') {
//     return { ...state, isModalOpen: false }
//   }
//   //? ---7---
//   if (action.type === 'REMOVE_ITEM') {
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload
//     )
//     return { ...state, people: newPeople }
//   }

//   //! For the last state we can return a state but in practice throwing error if the action that we passed in does not match any of the types that we are checking for...
//   throw new Error('No matching action type')
// }
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')

  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      //? ----2-------
      //! Now we decide how we can pass the data and it is done by adding more properties to the object
      const newItem = { id: new Date().getTime().toString(), name } //! What we have in our state value
      //! common practice to adding more properties is using "payload" but we can use whatever we like
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  //? ---4---
  //! Lets create a function that is responsible for the closing modal
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            {/* //? ---6--- */}
            {/* //! Lets create a button to remove item */}
            {/* //! for that we add a payload for id because we need to use which item we will remove  */}
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index

//! useReducer used whenever we have more complicated setup. As our app gets more complicated, it definitely is a good practice to useReducer essentially it will add more structure to our states.
//! useReducer relies heavily on Redux. If we understand useReducer, it is going to be very easy to pick up Redux.

//! state and dispatch are just names but there are common practice.
//! When we invoke useReducer we getting state value and dispatch function
//! First think we passed in is the "reducer" function
//! And difference between useState and useReducer that each and every time we want to do something with that whole state we always must use dispatch and it is gonna go through the reducer
//! reducer function is a simple function
//! look for two things:
//! 1) state --> that state right before the update
//! 2) action --> what are we trying to do
//! We can think of reducer function as something that takes the old state and takes in something called action and then spits back that new state
//! useReducer is looking for reducer function, so the function of that will manipulate the state and it will happen once we dispatch the action and then the second one is that initial state (we can directly pass it in or we can create new variable and pass the variable name into it like we did below)
//! Whole idea why we're using useReducer because we only want to update these things once we call dispatch and one we pass in the proper action and we will handle them in one place (in reducer)
