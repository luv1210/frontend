//1. Find Maximum number of given array
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; arr[i] !== undefined; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr1 = [5, 3, 9, 1, 10];
console.log("Max:", findMax(arr1)); 



// 2. Remove Duplicate Elements

let arr2 = [1, 2, 2, 3, 1, 4];

function removeDuplicates(arr) {
  let result = [];
  let resIndex = 0;

  for (let i = 0; arr[i] !== undefined; i++) {
    let isDuplicate = false;

    for (let j = 0; j < resIndex; j++) {
      if (result[j] === arr[i]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result[resIndex] = arr[i];
      resIndex++;
    }
  }

  return result;
}

let unique = removeDuplicates(arr2);


let remove = "Without Duplicates: ";
for (let i = 0; unique[i] !== undefined; i++) {
  str += unique[i] + " ";
}
console.log(remove); 

// 3.Reverse an Array

let arr3 = [1, 2, 3, 4];

function reverseArray(arr) {
  let result = [];

  
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }

  for (let i = 0; i < count; i++) {
    result[i] = arr[count - 1 - i];
  }

  return result;
}

let reversed = reverseArray(arr3);


let kp = "Reversed: ";
for (let i = 0; reversed[i] !== undefined; i++) {
  str += reversed[i] + " ";
}
console.log(kp); 


// 4. Concatenate Multiple Arrays


let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [5, 6];
let combined = concatArrays(a1, a2, a3);

function concatArrays(arr1, arr2, arr3) {
  let result = [];
  let index = 0;

  for (let i = 0; arr1[i] !== undefined; i++) {
    result[index] = arr1[i];
    index++;
  }

  for (let i = 0; arr2[i] !== undefined; i++) {
    result[index] = arr2[i];
    index++;
  }

  for (let i = 0; arr3[i] !== undefined; i++) {
    result[index] = arr3[i];
    index++;
  }

  return result;
}


let ck = "Concatenated: ";
for (let i = 0; combined[i] !== undefined; i++) {
  ck += combined[i] + " ";
}
console.log(ck); 


5.