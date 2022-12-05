import React, { useState, useEffect } from 'react'

// cleanup function

//! What we done below is we have useEffect inside of it we have callback function inside callback function we set up the event listener on a window. Each and every time event will take place, the resize , will invoke the checkSize function. We just call setSize and then we get the current width of the window.
//! But when go to the console -> elements -> event listeners -> resize... We should have one event listener but it doesnt. Problem with this one is that eventually we will just have a memory leak which will cause huge problems.
//! setSize is triggering the re-render. Each and every time we call checkSize we also trigger re-render. So the moment we trigger a render, then again we call the useEffect
//! This is where cleanup function comes in.
//! Whenever we have useEffect we have an option of returning a function...
//! Whatever we place inside the return callback function will be invoked once we exit.
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    console.log('')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
