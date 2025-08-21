
let arr = [15, 18, 20, 3, 6, 12];

function findPivot(arr) {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1; 
        } else {
            high = mid; 
        }
    }
    return low; 
}
console.log("Pivot index:", findPivot(arr));

