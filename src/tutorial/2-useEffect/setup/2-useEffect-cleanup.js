import React, { useState, useEffect } from 'react'

// cleanup function

//! What we done below is we have useEffect inside of it we have callback function inside callback function we set up the event listener on a window. Each and every time event will take place, the resize , will invoke the checkSize function. We just call setSize and then we get the current width of the window.
//! But when go to the console -> elements -> event listeners -> resize... We should have one event listener but it doesnt. Problem with this one is that eventually we will just have a memory leak which will cause huge problems.
//! setSize is triggering the re-render. Each and every time we call checkSize we also trigger re-render. So the moment we trigger a render, then again we call the useEffect
//! This is where cleanup function comes in.
//! Whenever we have useEffect we have an option of returning a function...
//! Whatever we place inside the return callback function will be invoked once we exit.
//! When refresh page there is initial render and there is useEffect with useEffect we trigger re-render and before we call that useEffect (before we add another event listener) we clean that up.
//! Here we could use dependencies list ([]) and trigger the useEffect only once when component mount and when we check the event-listener we have only 1 event listener.
//! But cleanup function is very important when we dealing with component appearing and disappearing meaning there is going to be a conditional rendering... There is gonna be components are displayed and then removed and problem with this case is that eventhough useEffect runs only the initial render(mount), each time we show and hide the component, it will add event listener or whatever side effect we have.
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  console.log('render')
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // useEffect(() => {
  //   console.log('useEffect')
  //   window.addEventListener('resize', checkSize)
  //   return () => {
  //     console.log('cleanup')
  //     window.removeEventListener('resize', checkSize)
  //   }
  // })

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('cleanup')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
