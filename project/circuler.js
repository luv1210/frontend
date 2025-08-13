class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let temp = this.head;

      while (temp.next !== this.head) {
        temp = temp.next;
      }

      temp.next = newNode;
      newNode.next = this.head;
    }
  }

  
  display() {
    if (!this.head) {
      console.log("List is empty.");
      return;
    }

    let temp = this.head;
    let result = [];

    do {
      result.push(temp.data);
      temp = temp.next;
    } while (temp !== this.head);

    console.log("Circular Linked List:", result.join(" -> "));
  }

  
  remove(data) {
    if (!this.head) {
      console.log("List is empty. Nothing to remove.");
      return;
    }

    let current = this.head;
    let  prev = null;

    
    if (current.next === this.head && current.data === data) {
      this.head = null;
      return;
    }

    if (current.data === data) {
      let last = this.head;

      
      while (last.next !== this.head) {
        last = last.next;
      }

      this.head = this.head.next;
      last.next = this.head;
      return;
    }

    
    prev = current;
    current = current.next;

    while (current !== this.head) {
      if (current.data === data) {
        prev.next = current.next;
        return;
      }

      prev = current;
      current = current.next;
    }

    console.log(`Node with value ${data} not found.`);
  }
}


let circuler = new CircularLinkedList();

circuler.append(10);
circuler.append(20);
circuler.append(30);
circuler.append(40);

circuler.display(); 

circuler.remove(30);
circuler.display(); 
circuler.remove(10);
circuler.display(); 

circuler.remove(99); 
