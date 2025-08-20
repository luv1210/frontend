function kadanes(arr) {
  let kandas = arr[0];   
  let maxEndingHere = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
  maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
  kandas = Math.max(kandas, maxEndingHere);
  }

  return kandas;
}

let nums = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(kadanes(nums));  
