
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  insert(x) {
    this.s1.push(x);
    console.log(`${x} insertd`);
  }

  delete() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return null;
    }

    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    let removed = this.s2.pop();
    console.log(`${removed} deleted`);
    return removed;
  }

  front() {
    if (this.isEmpty()) return null;

    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2[this.s2.length - 1];
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }

  size() {
    return this.s1.length + this.s2.length;
  }

  print() {
    let temp = [...this.s2].reverse().concat(this.s1);
    console.log("Queue:", temp.join(" <- "));
  }
}

let q = new Queue();

q.insert(10);
q.insert(20);
q.insert(30);
q.print();

console.log("Front:", q.front());

q.delete();
q.print();
