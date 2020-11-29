
import React from 'react';

export function getAnimations(array){
    const animations =[];
    if (array.length<=1) return array;
    const auxarray = array.slice();
    mergeSort(array, 0, array.length-1,auxarray, animations);
    return animations;
    
}

function mergeSort(
    auxarray,start, end, mainArray, animations
){
    if (start=== end) return;
    
    
    const middle = Math.floor((start+end)/2);
    mergeSort(mainArray, start, middle, auxarray,animations);
    mergeSort(mainArray, middle+1,end, auxarray,animations);
    console.log(mainArray);
    console.log(auxarray);
    domerge(mainArray, start, middle,end, auxarray, animations);
}

function domerge(mainArray, start, middle, end, auxarray,animations){
 
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
      
      animations.push([i, j]);
      animations.push([i, j]);
  
      if (auxarray[i] <= auxarray[j]) {
        
        animations.push([k, auxarray[i]]);
        mainArray[k++] = auxarray[i++];
      } else {
        
        animations.push([k, auxarray[j]]);
        mainArray[k++] = auxarray[j++];
      }
    
    }
    while (i <= middle) {
      
      animations.push([i, i]);
      animations.push([i, i]);
     
      animations.push([k, auxarray[i]]);
      mainArray[k++] = auxarray[i++];
    }
    while (j <= end) {
      
      animations.push([j, j]);
      animations.push([j, j]);
      
      animations.push([k, auxarray[j]]);
      mainArray[k++] = auxarray[j++];
    }
  } 
