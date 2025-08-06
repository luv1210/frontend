// 1. 2D Array Print and Transpose

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
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

// Output:
// [ 1, 4, 7 ]
// [ 2, 5, 8 ]
// [ 3, 6, 9 ]


// 2.Array Descending order sorting using selection sort


//  let arr=[12,7,23,5,9,10,15,3,99]

// for(let i = 0;i<arr.length;i++){
//   let n = 0 ;
//   for(let j=i+1;j<arr.length;j++){
//    if(arr[i]<arr[j]){
//      n = arr[i];
//     arr[i] = arr[j]
//     arr[j] = n
//    }
//   }
// }

// console.log(arr)

// Output:
// [99, 23, 15, 12, 10, 9, 7,5 ,3] 



// 3.Array Ascending order sorting using Merge sort

// let arr = [12, 7, 23, 5, 9, 10, 15, 3, 99];

// let mergesort = (arr) => {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = mergesort(arr.slice(0, mid));
//   let right = mergesort(arr.slice(mid));

//   return sortiing(left, right); 
// };

// let sortiing = (left, right) => {
//   let result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());  
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return result.concat(left, right);
// };

// console.log(mergesort(arr)); 

// Output: [3, 5, 7, 9, 10, 12, 15, 23, 99]

