// 1.Write a program for Stack Operation Program (Insert, pop, isEmpty, Length) 

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack length:", stack.length()); 
console.log("delete element:", stack.pop()); 
console.log("Stack length:", stack.length()); 
console.log("Is stack empty?", stack.isEmpty()); 


// output:

// Stack length: 3
// popd element: 30
// Stack length: 2
// Is stack empty? false


// 2.Write a program for Next Greater Element using Stack. 

// function GreaterElements(arr) {
//   let n = arr.length;
//   let result = new Array(n).fill(-1);  
//   let stack = []; 

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1];
//     }

//     stack.push(arr[i]);
//   }

//   return result;
// }

// console.log(GreaterElements([4, 5, 2, 25])); 

// output:

// [ 5, 25, 25, -1 ]


// 3.reverse string using stack

// function reverseStringUsingStack(str) {
//   let stack = [];
//   let reversed = "";

//   for (let i = 0; i < str.length; i++) {
//     stack.push(str[i]);
//   }

//   while (stack.length > 0) {
//     reversed += stack.pop();
//   }

//   return reversed;
// }

// console.log(reverseStringUsingStack("hello"));

// output:
// olleh