
//this way animation is returned befor completion of program.
//we need to have a funcytion in which final function is called after all entries are done in animation array.
// export function quick(arr, left, right) {
// 	let index;
// 	let animation=[];

// 	if (arr.length > 1)	{
// 		index = sortingUsingPivot(arr, left, right, animation);

// 		if (left < index - 1) {
// 			quick(arr, left, index - 1);
// 		}

// 		if (index < right) {
// 			quick(arr, index, right);
// 		}
// 	}
// 	return animation;
// } 
export function getAnimation(array){
    const animation =[];
    if (array.length<=1) return ['x',array];
   
    quick(array, 0, array.length-1, animation);
    return animation;
    
}
export function quick(arr, left, right, animation) {
		let index;
		
	
		if (arr.length > 1)	{
			index = sortingUsingPivot(arr, left, right, animation);
	
			if (left < index - 1) {
				quick(arr, left, index - 1, animation);                         //earlier every time here new animation was formed now will will pass onle one to all the recurssive calls.
			}
	
			if (index < right) {
				quick(arr, index, right, animation);
			}
			animation.push(['y',right]);      //In while r-- happens so last element does not get swapped with itself so it's color doesnt change.
		}
		}
function sortingUsingPivot(arr, l, r,animation) {
	let pivot = arr[l];

  
	while (l <= r) {
		animation.push(['x',l]);
		animation.push(['x',r]);

		while (arr[l] < pivot) {
		
			l++;
			//when we want to do it turn red we will pass
			// true then it will know ki comparison hora hai
	
		}

		while (arr[r] > pivot) {
			
			r--;
			
		} 

		if (l <=r) {
			Swap(arr, l, r,animation);
			l++;
			r--;
		}
    }
    
  
	return l;
}
//function with less arguments
// function swap(arr, leftIndex, rightIndex) {
// 	let temp = arr[leftIndex];
// 	arr[leftIndex] = arr[rightIndex];
// 	arr[rightIndex] = temp;
// }

function Swap(arr, leftIndex, rightIndex,animation) {
	
	animation.push([rightIndex, arr[leftIndex]]);
	animation.push([leftIndex, arr[rightIndex]]);
	
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
	
}