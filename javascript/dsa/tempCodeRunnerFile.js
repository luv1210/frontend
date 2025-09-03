class Queue {
  constructor(size) {
    this.items = [];
    this.maxSize = size;
  }

  insert(element) {
    if (this.maxSize && this.items.length === this.maxSize) {
      console.log("Queue is Full");
      return;
    }
    this.items.push(element);
    console.log(`${element} inserted`);
  }

  delete() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }
    let removed = this.items.shift();
    console.log(`${removed} removed`);
    return removed;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }

  print() {
    console.log("Queue:", this.items.join(" <- "));
  }
}

let q = new Queue(5);

q.insert(10);
q.insert(20);
q.insert(30);
q.print();

console.log("Front Element:", q.peek());

q.delete();
q.print();
console.log("Queue Length:", q.length()); 
