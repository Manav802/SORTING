import React from "react";

import { useState } from "react";
 function Body() {
     const initialCount = 0;
    let [array,setArray]= useState([initialCount]);
    

    const callMe=()=>{
        array.length=0;
        // console.log(array); 
        resetArray();
        
        
    }
    const resetArray =()=>{
    
    
            for (let i = 0; i < 260; i++) {
                
                let randomNumber = Math.floor(Math.random() * 600 ) + 5;
                setArray(newarray=>[...newarray,randomNumber]);
                }
                
                }

    

    return(
        
       <div className="container-fluid">
       <div className= " array_section">
       
       {array.map((value,index)=>(
           <div className="array_bars" key={index} style={{height:`${value}px` ,}}></div> 
       ))}

       </div>
       <div className="menu">
       <div className="btn">
        <button onClick={callMe}>RESEST ARRAY</button>
        </div>
        </div> 
         
         
      
       </div>
        
    )
}
export default Body;



