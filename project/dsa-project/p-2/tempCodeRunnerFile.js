class cnode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class circularList {
//   constructor() {
//     this.head = null;
//     this.last = null;
//   }

//   apddend(val) {
//     let temp = new cnode(val);
//     if (this.head == null) {
//       this.head = temp;
//       this.last = temp;
//       this.last.next = this.head;
//     } else {
//       this.last.next = temp;
//       temp.next = this.head;
//       this.last = temp;
//     }
//   }

//   deleteData() {
//     let currnt = this.head;
//     let previus = null;

//     if (this.head == this.last) {
//       this.head = null;
//       this.last = null;
//     } else {
//       while (currnt !== this.last) {
//         previus = currnt;
//         currnt = currnt.next;
//       }

//       previus.next = this.head;
//       this.last = previus;
//     }
//   }

//   displayData() {
//     let currnt = this.head;
//     if (this.head == null) {
//       console.log("List Empty");
//       return;
//     }

//     do {
//       console.log(currnt.data);
//       currnt = currnt.next;
//     } while (currnt !== this.head);
//   }
// }

// let circular = new circularList();
// circular.apddend(10);
// circular.apddend(20);
// circular.apddend(30);
// circular.apddend(40);
// circular.apddend(50);
// circular.deleteData();
// circular.deleteData();

// circular.displayData();
