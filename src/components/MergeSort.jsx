


export function getAnimations(array){
    const animation =[];
    if (array.length<=1) return array;
    const auxarray = array.slice();
    mergeSort(array, 0, array.length-1,auxarray, animation);
    return animation;
    
}

function mergeSort(
    auxarray,start, end, mainArray, animation
){
    if (start=== end) return;
    
    
    const middle = Math.floor((start+end)/2);
    mergeSort(mainArray, start, middle, auxarray,animation);
    mergeSort(mainArray, middle+1,end, auxarray,animation);
    console.log(mainArray);
    console.log(auxarray);
    domerge(mainArray, start, middle,end, auxarray, animation);
}

function domerge(mainArray, start, middle, end, auxarray,animation){
 
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
      
      animation.push([i, j]);
      animation.push([i, j]);
  
      if (auxarray[i] <= auxarray[j]) {
        
        animation.push([k, auxarray[i]]);
        mainArray[k++] = auxarray[i++];
      } else {
        
        animation.push([k, auxarray[j]]);
        mainArray[k++] = auxarray[j++];
      }
    
    }
    while (i <= middle) {
      
      animation.push([i, i]);
      animation.push([i, i]);
     
      animation.push([k, auxarray[i]]);
      mainArray[k++] = auxarray[i++];
    }
    while (j <= end) {
      
      animation.push([j, j]);
      animation.push([j, j]);
      
      animation.push([k, auxarray[j]]);
      mainArray[k++] = auxarray[j++];
    }
  } 
