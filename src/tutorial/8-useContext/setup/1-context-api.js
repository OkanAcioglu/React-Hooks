import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

//! First we need to create context
const PersonContext = React.createContext()
//! Now we have access to 2 components
//! Provider and Consumer. // Consumer is not used anymore...
//! Provider works as distributor.
//! We need to find root component ( Here ContextAPI) and "return" of the root component we need to wrap PersonContext.Provider.
//! For PersonContext.Provider we have "value" prop that we can pass whatever we want.
//! and with useContext we can access this value
//! Then in any component create a variable and named it as wish and equate it useContext(PersonContext)
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(PersonContext)
  console.log(mainData) //! just to show it is a object
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
