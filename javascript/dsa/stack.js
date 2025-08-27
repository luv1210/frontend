class Stack {
  constructor() {
    this.items = [];
  }

  // Push -> add element on top
  push(element) {
    this.items.push(element);
  }

  // Pop -> remove element from top
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek -> view top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size of stack
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.join(" "));
  }
}

// Example usage
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();   // 10 20 30

console.log("Top element:", stack.peek()); // 30
console.log("Popped:", stack.pop());       // 30
stack.print();   // 10 20
