import React, { useState } from 'react'

//! In here whole idea is that what if we have too many inputs. In these cases we dont want to have for example 10 different state values with 10 different functions

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  //! What if we would have 1 state and one function that is responsible for the changes regardless which input we are typing in...
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email }
  //     console.log(person)
  //     setPeople((people) => {
  //       return [...people, person]
  //     })
  //     setFirstName('')
  //     setEmail('')
  //   } else {
  //     console.log('empty values')
  //   }
  // }

  //! Refactor all the different onClick callback functions with one handleChange function presented below
  const handleChange = (e) => {
    //! Now we want to run the handleChange regarless of the input. We wanna getting the values and depending on the which input we would change, we also affect the person...
    const name = e.target.name
    const value = e.target.value

    //! We can use dynamic object properties
    setPerson({ ...person, [name]: value })
  }

  //! Refactoring handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              //! firstName changed person.firstName
              value={person.firstName}
              // onChange={(e) => setFirstName(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              //! email changed person.email
              value={person.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='email'
              id='age'
              name='age'
              //! age changed person.age
              value={person.age}
              // onChange={(e) => setAge(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
