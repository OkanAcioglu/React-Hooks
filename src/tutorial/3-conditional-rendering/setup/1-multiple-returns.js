import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  //! Below we have typical loading state or it can be check for user exist or something that kind. And condition mets then we can display one part of the app (one giant component with other multiple component) and if the condition is not met we can display some sign-in page or loading page...
  // Loading state
  const [isLoading, setIsLoading] = useState(false)
  // Error State
  const [isError, setIsError] = useState(false)
  // User State
  const [user, setUser] = useState('default user')

  //! Moment I want to change the isLoading state to true is when I get the data.
  //! One problem with fetch is that when we talk about error essentially we are not talking about 404 error instead it is about network error. If we change the URL (make a mistake on purpose) of course use will not exist but error is not going to be triggered. So when we are getting the JSON, right before that we will check the status of our response. If the status in between 200 and 300 we will return JSON, if the status in between that range we will throw error.
  // Fetch data
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (isLoading) {
    return (
      <div>
        {/* Can be spinner or other stuffs */}
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns

//! From JS we know ones we have return, everythink else is just ignored
//! Conditional Rendering means we will display different components or different content based on some condition.
//! When we look at the component, we know that it is a function and what can we return? We can return nothing (error occur) or we can have multiple returns
