import React, { useState } from 'react'
//! In React when we talk about JSX we talk about the fact that it has to return a expression meaning has to return value. For example if we use if..else.. statement inside the JSX it will not work.
//! We have a multiple returns but if we have one return and based on some condition, there is going to be either some data shown or hidden staff along lines we would use below operations
// short-circuit evaluation
// ternary operator
//! Difference between short-circuit and ternary operator is that ternary operator gives us two possible values

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world' //! "" is falsey here so "hello world" will be taken
  // const secondValue = text && 'hello world' //! "" is falsey so here text will be taken

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}

      {/* Below case working like if text is empty ("") , "Okan" will return as default... We were returning element regardless */}
      <h1>{text || 'Okan'}</h1>
      {/* Below case working like if text is true , "Hello World" will return as default... We can trigger showing or hiding element */}

      {/* {text && <h1>Hello World</h1>}
      {!text && <h1>Hello World</h1>} */}

      {/* What button says we call setIsError inside and set it opposite of isError so when we click the button, isError state flipped to other state(if it is true flipped to false). Essentially we setup toggle state */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error...</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
