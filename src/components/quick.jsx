import { getAnimations } from "./MergeSort";

export function quicksort(arr, left, right) {
	let index;
	const animation=[];

	if (arr.length > 1)	{
		index = sortingUsingPivot(arr, left, right, animation);

		if (left < index - 1) {
			quicksort(arr, left, index - 1);
		}

		if (index < right) {
			quicksort(arr, index, right);
		}
	}
	return animation;
} 

function sortingUsingPivot(arr, left, right,animation) {
	let pivot = arr[left];
	let l = left; 
	let r = right; 
  
	while (l <= r) {
		while (arr[l] < pivot) {
			l++;
			//when we want to do it turn red we will pass
			// true then it will know ki comparison hora hai
			animation.push([true,l]);
		}

		while (arr[r] > pivot) {
			r--;
			animation.push([true,r]);
		} 

		if (l <= r) {
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
	animation.push([false, 0]);
	animation.push([false, leftIndex]);
	animation.push([false, rightIndex]);
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
	
}