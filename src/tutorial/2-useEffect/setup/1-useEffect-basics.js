import React, { useState, useEffect } from 'react'
//! useEffect allows to do side effects
//! side effect means any work outside of the component that could be changing document title, signing up for subscription, fetching data, setting up event listener... even the console.log considered as side effects...
//! By default useEffect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  //! Took callback function, whatever functionality will place will run after every render...
  useEffect(() => {
    console.log('call useEffect')
    document.title = `New Messages(${value})`
  })
  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  )
}

export default UseEffectBasics
