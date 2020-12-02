import React from "react";

import {getAnimations} from "./MergeSort";
import { useState } from "react";
import {quicksort} from "./quick";


 function Body() {
     const initialCount = 0;
    let [array,setArray]= useState([initialCount]);
    

    const callMe=()=>{
        array.length=0;
        // console.log(array); 
        resetArray();
       
        
    }
    const resetArray =()=>{
    const size= prompt("no of bar graphs you want?");

    
            for (let i = 0; i < size; i++) {
                
                let randomNumber = Math.floor(Math.random() * 600 ) + 5;
                setArray(newarray=>[...newarray,randomNumber]);
                }
       
       
                }
                const width= 1200/array.length;
               
 const ANIMATION_SPEED_MS = 10;
 const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR ='limegreen';
//quick sort  code
const quickSort =()=>{
console.log(array);
  
  const animation=quicksort(array,0,array.length-1);
  for (let i = 0; i < animation.length; i++) {
    const arrayBars = document.getElementsByClassName('array_bars');
  const [bool,value]=animation[i];
  if(bool){
    const barStyle = arrayBars[value].style;
    setTimeout(() => {
      barStyle.backgroundColor = SECONDARY_COLOR;
    
    }, i * ANIMATION_SPEED_MS);
  }
  else{
   let count=i;
    if(value==0){

    const barStyle = arrayBars[value].style;
    setTimeout(() => {
      barStyle.backgroundColor = FINAL_COLOR;
   
    }, i * ANIMATION_SPEED_MS);
  }
  }
  }

  
 
}
//merge sort code
    const mergeSort =()=>{
      console.log(array);
    
        const animations=  getAnimations(array);
      
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array_bars');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              // console.log(barOneIdx,barTwoIdx);
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : FINAL_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                // console.log(barOneIdx,newHeight);
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.backgroundColor = FINAL_COLOR;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }

          }
         
      // const javaScriptSortedArray = array.slice().sort();
      // const mergeSortedArray = array.slice();
      // const output=arraysAreEqual(javaScriptSortedArray, mergeSortedArray);
      // if(output){
      //  sorted();
      // }
          
         
    }
    function arraysAreEqual(arrayOne, arrayTwo) {
      if (arrayOne.length !== arrayTwo.length) return false;
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
      return true;
    }
    const sorted=() =>{

      for(let j=0;j<array.length;j++){
        const arraybars = document.getElementsByClassName('array_bars');
      const barstyle=arraybars[j].style;
      barstyle.backgroundColor='purple';
   
      }
    }
   
    return(
        
       <div >
       <nav  id="bt"class="navbar navbar-expand-lg navbar-dark bg-dark">
     
  <a class="bt navbar-brand" href="#">Sorting Visualizer</a>
 
  <button className="bt text-white " onClick={callMe}>RESEST ARRAY</button>
        <button className="bt text-white" onClick={mergeSort}>MERGE SORT</button>
        <button className="bt text-white" onClick={quickSort}>QUICK SORT</button>
  
</nav>

       <div className="content">

       <div className= " array_section">
     
       {array.map((value,index)=>(
           <div className="array_bars" key={index} style={{backgroundColor: PRIMARY_COLOR, height:`${value}px`, width: `${width}px`} }></div> 
       ))}

       
        <div className="footer fixed-bottom">
      
      <div className="space">SRISHTY TAKYAR_2020  Sorting visualizer_© 
    </div>
        </div> 
        </div>
         </div>
         
      
       </div>
        
    )
}
export default Body;



