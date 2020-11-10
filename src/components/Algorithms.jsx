export function mergeSortAnimation(array){
const animations=[];
const auxiliaryArray= array.slice();
mergeHelper(array,0,array.length-1,auxiliaryArray, animations);
return animations;}

function mergeHelper(mainArray, start, end, auxiliaryArray, animations){

let middle= Math.floor((start+end)/2);
mergeHelper(auxiliaryArray, start, middle, mainArray, animations);
mergeHelper(auxiliaryArray, middle, end, mainArray, animations);
merge(mainArray,start,middle,end,auxiliaryArray,animations);
}

function merge(mainArray,start,middle,end,auxiliaryArray,animations){
    let k= start;
    let j= middle+1;
    let i= start;
    while(start<= middle && middle+1<= end){
        animations.push([start,middle+1]);
        animations.push([start,middle+1]);
        if(auxiliaryArray[start]<= auxiliaryArray[middle+1]){
          animations.push(k,auxiliaryArray[start]);
        mainArray[k++]=auxiliaryArray[start++];
        }else {
           
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
          }
    }

    while (i <= middle) {
       
        animations.push([i, i]);
       
        animations.push([i, i]);
       
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= end) {
       
        animations.push([j, j]);
       
        animations.push([j, j]);
      
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    

}