import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = () => {
  return (
    
    <Link to="/">
      <button style={{backgroundColor:"violet", border:"none" ,borderRadius:"5px",
       color:"white",
       width:"150px", 
        height:"50px",marginLeft:"10px"
      }}>
         Go to Home</button>
    </Link>
  );
};

export default RedirectButton;
