import React, { useState } from 'react'
//! useState is function
//! It returns an array --> [value, setValue]
//! initial value can be whatever JS value we want (object,boolean,array,number...)
const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title')

  const clickHandler = () => {
    // if (text === 'random title') {
    //   setText('Hello World')
    // } else {
    //   setText('random title')
    // }
    text === 'random title' ? setText('Hello World') : setText('random title')
  }

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={clickHandler}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
