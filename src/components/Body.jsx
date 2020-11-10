import React from "react";
import { mergeSortAnimation} from "./Algorithms";
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
 const ANIMATION_SPEED_MS = 1;
 const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

    const mergeSort =()=>{
        const animations=  mergeSortAnimation(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array_bars');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
    }

    return(
        
       <div className="container-fluid">
       <div className= " array_section">
       
       {array.map((value,index)=>(
           <div className="array_bars" key={index} style={{height:`${value}px` ,}}></div> 
       ))}

       </div>
       <div className="fixed-bottom">
       <div className=" menu ">
        <button className="btn" onClick={callMe}>RESEST ARRAY</button>
       <button className="btn" onClick={mergeSort}>MERGE SORT</button>
        </div>
        <div className="footer ">
        <div className="space"></div>
      SRISHTY TAKYAR_2020  Sorting visualizer_© 
      
     
     
     </div>
        </div> 
         
         
      
       </div>
        
    )
}
export default Body;



