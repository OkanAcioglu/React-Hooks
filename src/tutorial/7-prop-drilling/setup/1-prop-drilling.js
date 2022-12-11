import React, { useState } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)
//! Prop drilling is not a official term however it is somewhat a side-effect if we have multiple components and we need to start passing some state from the top component all the way to the bottom component.

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  //! Below function will delete the person from the list.
  //! Now we need to get this function in the SinglePerson component
  //! For that we need to first pass it to the List component, destructure it then we will need to pass into a single person
  //! But List component does not need that function but there is no other way for use to pass it down to a single person and this is what prop drilling is.
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling
