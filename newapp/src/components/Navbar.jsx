import React, { useContext } from 'react'
import CounterContext from '../Context/CounterContext'
import DarkContext from '../Context/DarkContext'

function Navbar() {
  const {count,reset }= useContext(CounterContext)
  const {isDarkMode}= useContext(DarkContext)
  return (
    <div className= 
         {`${isDarkMode? 'bg-black text-white': 'bg-white text-black'}`}>
      <h1 className="text-2xl text-red">Counter: {count}</h1>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded "
        onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}

export default Navbar
