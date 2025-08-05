function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}


let numbers = [4, 2, 7, 1, 9, 5];
let target = 7;
let result = linearSearch(numbers, target);

console.log(result); 