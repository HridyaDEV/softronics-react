import React from 'react'
import { Image } from 'react-bootstrap'

function Card2({image,title,description}) {
  return (

    <div className='portfolio-item d-felx justify-content-center align-items-center gap-5 text-white'>
       <Image src={image} thumbnail width="250" height="150"/>
       <h4 className='mt-3 text-danger'>{title}</h4>
       <p>{description}</p>
      
    </div>
  )
}

export default Card2
