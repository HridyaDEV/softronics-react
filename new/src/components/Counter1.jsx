import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Counter/countSlice'

export default function Counter1() {

    const {value,items} =useSelector((state)=> state.count)

    const dispatch = useDispatch()

    const addition = ()=>{
         dispatch(increment({status : "add", id : value+1}))

    }

    console.log(items);
    
        





  return (
    <div>
       <h1>Counter: {value}</h1>
       <div>

       
       <button type='button' onClick={addition } 
       style={{backgroundColor:"blueviolet", padding:"10px",margin:"10px"}}>
        Increment</button>

        <button type='button' 
         onClick={ ()=> dispatch(decrement())} 
         style={{backgroundColor:"blueviolet", padding:"10px"}}>Decrement</button>
         </div>

         {items?.map((item) => (
    <div key={item.id}>
        <h3>{item.id}</h3>
        <p>{item.status}</p>
    </div>
    
         ))}
         </div>
  )}

