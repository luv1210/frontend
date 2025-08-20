function lowerBound(arr, target) {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; // index of first element >= target
}

function upperBound(arr, target) {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; // index of first element > target
}

// Example usage
let arr = [10, 20, 20, 30, 40];

console.log("Lower Bound of 20:", lowerBound(arr, 20)); // 1
console.log("Upper Bound of 20:", upperBound(arr, 20)); // 3
console.log("Lower Bound of 25:", lowerBound(arr, 25)); // 3
console.log("Upper Bound of 25:", upperBound(arr, 25)); // 3
