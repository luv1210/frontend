let arr = [29, 10, 14, 37, 13];

for (let i = 0; i < arr.length - 1; i++) {
  let select = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[select]) {
      select = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[select];
  arr[select] = temp;
}
console.log("Sorted array:", arr);
