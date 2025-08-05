// 1. 2D Array Print and Transpose

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7,8,9]
];

console.log("Orignal Array:");

for(let i = 0;i<array.length;i++){
    let temp = []
    for(let j = 0;j<array[i].length;j++){
       temp.push(array[i][j])   
    }
    console.log(temp);
}

console.log("Transpose:");


for(let i = 0;i<array.length;i++){
    let temp = []
    for(let j = 0;j<array[i].length;j++){
       temp.push(array[j][i])   
    }
    console.log(temp);
}

// 2: Array Descending Order using Selection Sort

let arr = [4, 1, 7, 3, 9];

for (let i = 0; i < arr.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[maxIndex]) {
      maxIndex = j;
    }
  }
 
  let temp = arr[i];
  arr[i] = arr[maxIndex];
  arr[maxIndex] = temp;
}

console.log("Descending Order:");
console.log(arr.join(" "));


// 3. Ascending Order using Merge Sort


let arrayToSort = [5, 3, 8, 4, 2];
let sortedArray = mergeSort(arrayToSort);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Ascending Order :");
console.log(sortedArray.join(" "));
