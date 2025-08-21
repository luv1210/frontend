// 1. Write a program to implement binary search to find the index of a target element in a sorted array

// let arr = [1, 3, 5, 11, 23, 33 , 47];

// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === target) {
//             return mid; 
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return -1; 
// }

// console.log("Index of 7:", binarySearch(arr, 33));

// output:
// Index of 7: 5


// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// let arr = [2, 4, 4, 4, 6, 7, 7, 9];

// function firstOccurrence(arr, target) {
//     let low = 0, high = arr.length - 1, ans = -1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             ans = mid;
//             high = mid - 1; // move left
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return ans;
// }

// function lastOccurrence(arr, target) {
//     let low = 0, high = arr.length - 1, ans = -1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             ans = mid;
//             low = mid + 1; 
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return ans;
// }

// function firstLastCount(arr, target) {
//     let first = firstOccurrence(arr, target);
//     let last = lastOccurrence(arr, target);

//     if (first === -1) {
//         return { first: -1, last: -1, count: 0 };
//     }
//     return { first: first, last: last, count: last - first + 1 };
// }

// console.log("First, Last, Count:", firstLastCount(arr, 4));

// output:
// First, Last, Count: { first: 1, last: 3, count: 3 }



// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array

let arr = [4, 5, 6, 7, 0, 1, 2];

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

console.log("Pivot index:", findPivot(arr));
 // Output: 4
