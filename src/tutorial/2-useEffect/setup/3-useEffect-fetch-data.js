import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  //! Inside the callback we can simply perform as fetch request. We can do this either directly typing inside or we can setup a separate function.
  //! We will go with separate function with using async-await. We can setup async-await inside the callback as well.
  //! There is one more rule that we cannot make callback function of useEffect async function because it is simply returns promise. (useEffect(async () => {...}, [])--> We cannot do that)
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    // setUsers(users)
    //! If we comment out the above code -> We getting users then we set it into the setUsers so we update the users so this triggers re-render and when we re-render, useEffect triggered and we getting users than set it into setUsers so essentially we are setting up infinite loop.
    //! Solution is adding dependencies array ([])
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
