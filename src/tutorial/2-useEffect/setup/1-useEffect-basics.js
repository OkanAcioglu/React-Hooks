import React, { useState, useEffect } from 'react'
//! useEffect allows to do side effects
//! side effect means any work outside of the component that could be changing document title, signing up for subscription, fetching data, setting up event listener... even the console.log considered as side effects...
//! By default useEffect runs after every re-render and we can have as many useEffects as we want.
// Second parameter: We can pass it an array and that is the array of dependencies.
// If we have no dependency array, useEffect triggered each and every re-render including initial render.
// If we leave it blank([]) that will only run on initial render.
// If the value that we pass inside the dependencies list changed(also in the initial render), useEffect triggered.
// cleanup function
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //! Took callback function, whatever functionality will place will run after every render...
  //! One way of adding conditional to the useEffect is use if else statement inside the callback function

  useEffect(() => {
    console.log('call useEffect')
    //document.title = `New Messages(${value})`

    if (value > 3) document.title = `New Messages(${value})`
  }, [value])

  console.log('render component')

  useEffect(() => {
    console.log('Hello World for ones')
  }, [])

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

//! As a general rule: We cannot call hooks conditionally
// if (value > 0) {
//   useEffect(() => {
//     console.log('call useEffect')
//     document.title = `New Messages(${value})`
//   })
// }
