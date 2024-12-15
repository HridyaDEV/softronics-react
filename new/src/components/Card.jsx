import React from 'react'

function Card(props) {

    const backgroundColor = 
    props.status === "success" ? "green" :
    props.status === "warning" ? "yellow" :
    props.status === "error" ? "red": 
    "white";
    


  return (
    <div className="card" style={{backgroundColor}}>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
      
        <img src={props.imageUrl} className="card-image"/>
        
        
       
      
    </div>
  )
}

export default Card
