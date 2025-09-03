// 1.circular queue

// class circulerQueue {
//     constructor(size) {
//         this.queue = new Array(size)
//         this.i = -1
//         this.start = -1

//     }


//     insert(value) {
//         if (this.i === -1 && this.start == -1) {
//             this.i = this.start = 0
//             this.queue[this.i] = value
//         } else if ((this.i + 1) % this.queue.length == this.start) {
//             console.log("queue is Full")
//         } else {
//             this.i = (this.i + 1) % this.queue.length
//             this.queue[this.i] = value
//         }
//     }

//     delete() {
//         if (this.i == -1 && this.start == -1) {
//             console.log("queue is empty")
//         } else if (this.i == this.start) {
//             this.i = this.start = -1
//         } else {
//             this.start = (this.start + 1) % this.queue.length
//         }
//     }


//     display() {
//         let index = this.start
//         if (this.i == -1 && this.start == -1) {
//             console.log("Queue is empty")
//         } else {

//             while (index != this.i) {
//                 console.log(this.queue[index])
//                 index = (index + 1) % this.queue.length
//             }
//             console.log(this.queue[this.i])
//         }
//     }
// }


// let queue = new circulerQueue(5)

// queue.insert(10)
// queue.insert(20)
// queue.insert(30)
// queue.insert(40)
// queue.insert(50)
// queue.display()
// console.log("first")
// queue.delete()
// queue.insert(60)

// queue.delete()
// queue.insert(70)
// queue.display()

// output:
// 10
// 20
// 30
// 40
// 50
// first
// 30
// 40
// 50
// 60
// 70


// 2.

// class Queue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   insert(x) {
//     this.s1.push(x);
//     console.log(`${x} insertd`);
//   }

//   delete() {
//     if (this.isEmpty()) {
//       console.log("Queue is Empty");
//       return null;
//     }

//     if (this.s2.length === 0) {
//       while (this.s1.length > 0) {
//         this.s2.push(this.s1.pop());
//       }
//     }

//     let removed = this.s2.pop();
//     console.log(`${removed} deleted`);
//     return removed;
//   }

//   front() {
//     if (this.isEmpty()) return null;

//     if (this.s2.length === 0) {
//       while (this.s1.length > 0) {
//         this.s2.push(this.s1.pop());
//       }
//     }

//     return this.s2[this.s2.length - 1];
//   }

//   isEmpty() {
//     return this.s1.length === 0 && this.s2.length === 0;
//   }

//   size() {
//     return this.s1.length + this.s2.length;
//   }

//   print() {
//     let temp = [...this.s2].reverse().concat(this.s1);
//     console.log("Queue:", temp.join(" <- "));
//   }
// }

// let q = new Queue();

// q.insert(10);
// q.insert(20);
// q.insert(30);
// q.print();

// console.log("Front:", q.front());

// q.delete();
// q.print();

// output:
// 10 insertd
// 20 insertd
// 30 insertd
// Queue: 10 <- 20 <- 30
// Front: 10
// 10 deleted
// Queue: 20 <- 30

// 3.

function canSwapToEqual(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    let diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }

    if (diff.length !== 2) return false;

    let arr = s1.split("");
    let i = diff[0], j = diff[1];
    [arr[i], arr[j]] = [arr[j], arr[i]];

    return arr.join("") === s2;
}

console.log(canSwapToEqual("bank", "kanb"));
console.log(canSwapToEqual("attack", "defend"));
console.log(canSwapToEqual("abcd", "abdc"));
console.log(canSwapToEqual("abcd", "abcd"));

// output:

// true
// false
// true
// true