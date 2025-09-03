class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q2.push(x);

    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    console.log(`${x} pushed`);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    }
    let removed = this.q1.shift(); 
    console.log(`${removed} popped`);
    return removed;
  }

  top() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    }
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }

  size() {
    return this.q1.length;
  }

  print() {
    console.log("Stack:", this.q1.join(" <- "));
  }
}

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.print(); 

console.log("Top Element:", st.top()); 

st.pop();
st.print(); 
