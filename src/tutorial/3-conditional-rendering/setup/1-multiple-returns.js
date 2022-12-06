import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  //! Below we have typical loading state or it can be check for user exist or something that kind. And condition mets then we can display one part of the app (one giant component with other multiple component) and if the condition is not met we can display some sign-in page or loading page...
  const [loading, setLoading] = useState(true)
  if (loading) {
    return <h2>Loading...</h2>
  }

  return <h2>multiple returns</h2>
}

export default MultipleReturns

//! From JS we know ones we have return, everythink else is just ignored
//! Conditional Rendering means we will display different components or different content based on some condition.
//! When we look at the component, we know that it is a function and what can we return? We can return nothing (error occur) or we can have multiple returns
