export function quicksort (arr, low, high) {
const animations=[];
    // base condition
    if (low >= high) {
      return;
    }

    // rearrange the elements across pivot
    const pivot = partitionLow(arr, low, high, animations);

    // recur on sub-array containing elements less than pivot
    quicksort(arr, low, pivot - 1);

    // recur on sub-array containing elements more than pivot
    quicksort(arr, pivot + 1, high);
    return animations;
    
}
function partitionLow (arr, low, high, animations)  {
    //Pick the first element as pivot
    let pivot = arr[low];
    let i=low;
    let j=high;
    
    //Partition the array into two parts using the pivot

    while(i<j){
 do{
   i++;
 }while(arr[i+1]<=pivot);
 do{
  j--;
}while(arr[j]>pivot);

if (i<j){
  swap(arr,i,j,animations);
}
    }
  
    swap(arr,high, low,animations);
    //Return the pivot index
    return high;
  }
  function swap (arr, left, right, animations)  {
    
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
  }
  