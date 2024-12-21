//import React from 'react'
import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount (count+1) ;
    }
    const decrement =() =>{
        if(count>0){
            setCount(count-1);

        }
        
    }
    const reset = () => {
        setCount(0);
    }


  return (
    <div className="counter-container">
        <h1>Counter App</h1>
        <p className="count-display">{count}</p>
        
         <button className="counter-button" onClick={decrement} >{props.decrementLabel}</button>

        <button className="counter-button" onClick={increment} >{props.incrementLabel}</button>
        {count>0 &&(
            <button className="counter-button" onClick={reset} disabled={count===0}>{props.resetLabel}</button>

        )}
        
        
        
      
    </div>
  )
}

export default Counter

