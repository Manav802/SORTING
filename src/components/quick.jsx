export function quicksort(arr, left, right) {
	let index;

	if (arr.length > 1)	{
		index = sortingUsingPivot(arr, left, right);

		if (left < index - 1) {
			quicksort(arr, left, index - 1);
		}

		if (index < right) {
			quicksort(arr, index, right);
		}
	}
} 

function sortingUsingPivot(arr, left, right) {
	let pivot = arr[Math.floor((right + left) / 2)];
	let l = left; 
	let r = right; 
  
	while (l <= r) {
		while (arr[l] < pivot) {
			l++;
		}

		while (arr[r] > pivot) {
			r--;
		} 

		if (l <= r) {
			swap(arr, l, r);
			l++;
			r--;
		}
	}
  
	return l;
}

function swap(arr, leftIndex, rightIndex) {
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
}