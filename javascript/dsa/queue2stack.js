class Queue {
  constructor() {
    this.s1 = []; // stack1
    this.s2 = []; // stack2
  }

  // Enqueue: O(1)
  enqueue(x) {
    this.s1.push(x);
    console.log(`${x} enqueued`);
  }

  // Dequeue: Amortized O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }

    // If s2 empty, move all elements from s1 to s2
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    let removed = this.s2.pop();
    console.log(`${removed} dequeued`);
    return removed;
  }

  // Peek at front element
  front() {
    if (this.isEmpty()) return null;

    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2[this.s2.length - 1];
  }

  // Check if empty
  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }

  // Get queue size
  size() {
    return this.s1.length + this.s2.length;
  }

  // Print queue elements
  print() {
    let temp = [...this.s2].reverse().concat(this.s1);
    console.log("Queue:", temp.join(" <- "));
  }
}

// Example Usage
let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print(); // Queue: 10 <- 20 <- 30

console.log("Front:", q.front()); // 10

q.dequeue(); // removes 10
q.print();   // Queue: 20 <- 30
