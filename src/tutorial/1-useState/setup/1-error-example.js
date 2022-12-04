import React from 'react'

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    //! Below changing title like this will not work, title will changed to string as "hello world" as we see in console but component did not re-rendered...
    title = 'hello people'
    console.log(title)
    //! We want two things:
    //! 1) Keep the value between the renders
    //! 2) Trigger the render
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
