import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



 


function Navbar() {

    const {value} = useSelector((state)=> state.count)
  return (
    <div>
      <hi>Navbar: {value} </hi>
    </div>
  )
}

export default Navbar
