import React, { useState } from 'react'
//! All this time we used value in updated form
const UseStateCounter = () => {
  console.log('render')
  const [value, setValue] = useState(0)
  const [value1, setValue1] = useState(0)

  const decreaseHandler = () => {
    //! Below is the way of passing the value directly in set function
    //! When we log the value it is still the initial value although UI decreased by 1
    setValue(value - 1)
    console.log(value)
  }
  const resetHandler = () => {
    setValue(0)
    console.log(value)
  }
  const increaseHandler = () => {
    //! Below is the way of passing the value directly in set function
    //! When we log the value it is still the initial value although UI increased by 1
    setValue(value + 1)
    console.log(value)
  }
  const decreaseHandler1 = () => {
    //! Below case although there is two setValue1 function when we click the decrease button there is only rendered only 1 decrease because for each setValue1 value1 is 0...
    // setValue1(value1 - 1)
    // setValue1(value1 - 1)
    //! Instead use functional approach to grab the prevValue before the render...
    setValue1((prevValue) => {
      return prevValue - 1
    })
    setValue1((prevValue) => {
      return prevValue - 1
    })
  }
  const resetHandler1 = () => {
    setValue1(0)
    console.log(value1)
  }
  const increaseHandler1 = () => {
    //! When we click 3 times after 2 second count increase just 1 WHY?
    //! We grabbing the value inside the setValue1... But setValue1 function is async... When we click 3 times all of the clicks value1 taken as 0...
    // setTimeout(() => {
    //   setValue1(value1 + 1)
    // }, 2000)
    //! What we need to do is instead of directly passing the value we should pass it in a function...
    //! This function gets a parameter as old value
    //! This time when we click 5 times counter will start increase smoothly from 0 to 5 after 2 seconds
    //! Do not forget to write return when using function case...
    setTimeout(() => {
      setValue1((prevValue) => {
        return prevValue + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={decreaseHandler}>
          Decrease
        </button>
        <button className='btn' onClick={resetHandler}>
          Reset
        </button>
        <button className='btn' onClick={increaseHandler}>
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex Counter Counter</h2>
        <h1>{value1}</h1>
        <button className='btn' onClick={decreaseHandler1}>
          Decrease
        </button>
        <button className='btn' onClick={resetHandler1}>
          Reset
        </button>
        <button className='btn' onClick={increaseHandler1}>
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
