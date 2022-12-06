import React, { useState } from 'react'
//! In React when we talk about JSX we talk about the fact that it has to return a expression meaning has to return value. For example if we use if..else.. statement inside the JSX it will not work.
//! We have a multiple returns but if we have one return and based on some condition, there is going to be either some data shown or hidden staff along lines we would use below operations
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world' // "" is falsey here so "hello world" will be taken
  const secondValue = text && 'hello world' // "" is falsey so here text will be taken

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* //! Below case working like if text is empty ("") , "Okan" will return as default... We were returning element regardless */}
      <h1>{text || 'Okan'}</h1>
      {/* //! Below case working like if text is true , "Hello World" will return as default... We can trigger showing or hiding element */}
      {!text && <h1>Hello World</h1>}
    </>
  )
}

export default ShortCircuit
