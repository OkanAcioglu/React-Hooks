import React, { useState, useEffect } from 'react'
//! Below toggling important because of 2 reasons:
//! 1) Fact that we are not limited to just HTML element...
//! 2) Fact that we need use clean-up function when we are setting up some kind of side effect. When we covered use effect, we stated that in particular scenarios empty dependencies array may not be save us and case in the Item component is one of the example of that scenario. Problem in that scenario is that we are toggling the component. Eventhough we run only once since we toggle the component we will set up multiple event listeners.
const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  )
}

//! We will show/hide another component
const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size} px</h2>
    </div>
  )
}
export default ShowHide
