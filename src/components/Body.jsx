import React from "react";
import {linearSearch} from "./linear";
import {getAnimations} from "./MergeSort";
import { useState } from "react";
import {getAnimation} from "./quick";


 function Body() {
     const initialCount = 0;
    let [array,setArray]= useState([initialCount]);
    const ANIMATION_SPEED_MS = 50;
 const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR ='limegreen';

//basically, initially resest is hidden and display is visible which on click makes reset visible and hides itself, resest 
//on click refreshes the page to get initial setting (resest is hidden and display is visible) back.

// reset button is only used to refresh the page to solve the color problem
    const generateArray=()=>{

      window.location.reload();

    }

    const callMe=()=>{
      
        array.length=0;
        
      resetArray();
      //it hiddes itself 
      document.getElementById('togglee').style.visibility = 'hidden';
      document.getElementById('togglee2').style.visibility = 'visible';  /*bcz we want it to show when we need to regenerate the array*/
    
     //reset array button is hidden and becomes visible if array is generated once.Then, on refreshing page again it becomes
     //hidden by defaut and display array button takes over and generates the array.
     
        
    }
    const resetArray =()=>{
    const size= prompt("no of bar graphs you want?");

    
            for (let i = 0; i < size; i++) {
                
                let randomNumber = Math.floor(Math.random() * 600 ) + 5;
                setArray(newarray=>[...newarray,randomNumber]);
              //   const arrayBar = document.getElementsByClassName('array_bars');
              //    const barStyle= arrayBar[i].style;
              //  barStyle.backgroundColor = 'turquoise' ;
                }
         
       return 0;
                }
                const width= 1200/array.length;
               
 
//quick sort  code
const quickSort =()=>{
console.log(array);
  
  const animation=getAnimation(array,0,array.length-1);
  console.log(array);
  console.log(animation);
  
  for (let i = 0; i < animation.length; i++) {
    const arrayBars = document.getElementsByClassName('array_bars');
  const [value1,value2]= animation[i];
  if(value1==='x'){
    const barStyle = arrayBars[value2].style;
    setTimeout(() => {

      barStyle.backgroundColor = SECONDARY_COLOR;
    
    }, i * ANIMATION_SPEED_MS);
  }
  else if(value1==='y'){
    const barStyle = arrayBars[value2].style;
    setTimeout(() => {

      barStyle.backgroundColor = 'purple';
    
    }, i * ANIMATION_SPEED_MS);
  }
  else{
    const barStyle = arrayBars[value1].style;
   

    setTimeout(() => {

     barStyle.backgroundColor = FINAL_COLOR;
     barStyle.height=`${value2}px`;
    }, i * ANIMATION_SPEED_MS);
  
  }
  }

  
 
}

//linear search code



const linear=()=>{

  console.log(array);

  let count=0;
  const key= prompt("which number are you looking for?");  //prompt returns string as output 
  if(key>0){
  const animations= linearSearch(array,key);
  
  console.log(animations);
 

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array_bars');
    const [barIdx,bool] = animations[i];

    if(barIdx>=0){
    const barStyle = arrayBars[barIdx].style;
    setTimeout(() => {
      // const color = bool == 'true' ? 'purple' : 'red';
      if(bool=='true'){
      barStyle.backgroundColor = 'purple';
      count++;
      
      }
      else{
       barStyle.backgroundColor='red'; 
      }

    }, i * ANIMATION_SPEED_MS*100);

  }
}

if(count){
  document.getElementById('result').style.visibility = 'visible';
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
 
  <button className="bt text-white "  id="togglee2"onClick={generateArray} style={{visibility:'hidden'}}>RESET ARRAY</button> 
  <button className="bt text-white " id="togglee" onClick={callMe}>DISPLAY ARRAY</button>
        <button className="bt text-white" onClick={mergeSort}>MERGE SORT</button>
        <button className="bt text-white" onClick={quickSort}>QUICK SORT</button>
        <button className="bt text-white" onClick={linear}>LINEAR SEARCH</button>
  
  
</nav>

       <div className="content">

       <div className= " array_section">
     
       {array.map((value,index)=>(
           <div className="array_bars" key={index} style={{ backgroundColor:PRIMARY_COLOR, height:`${value}px`, width: `${width}px`} }></div> 
       ))}

       
        <div className="footer fixed-bottom">
      
      <div className="space">SRISHTY TAKYAR_2020  Sorting visualizer_© 
    </div>
        </div> 
        <div id='result' className="text3d" style={{visibility:'hidden'}}>
          <h1>
          MATCH FOUND!!!
          </h1>
        </div>
        </div>
         </div>
         
      
       </div>
        
    )
}
export default Body;



