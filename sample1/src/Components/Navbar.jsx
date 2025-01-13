import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
        <ul style={{display:"flex" , gap:"10px", padding:"5px", listStyle:"none",
            
        }}>

            <li><Link to="/">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to = "/Service">Services</Link></li>
            <li><Link to = "/Contact">Contact</Link></li>
            
        </ul>

        </nav>
        
      
    </div>
  )
}

export default Navbar
