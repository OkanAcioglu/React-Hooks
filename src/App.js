import React from 'react'
import Setup from './tutorial/8-useContext/setup/1-context-api'
function App() {
  return (
    <div className='container'>
      <Setup />
    </div>
  )
}

export default App

//! General Rules of Hooks
//? Hooks start with "use" (also applies for custom hooks)
//? Components where we invoke hooks must be uppercase (const Shop = ()=>{...})
//? Hook must be in the function or component body
//? Hooks can not be called conditionally (Not the function getting back from the hook)
