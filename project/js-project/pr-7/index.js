// 1. Create a school class & create a student & faculty method 

// class School {
//   student(name, email, contact) {
//     console.log("**** Student Details ****");
//     console.log("Name:" ,name);
//     console.log("Email:" ,email);
//     console.log("Contact:" ,contact);
//     console.log("  ");
//   }


//   faculty(name, email, contact) {
//     console.log("**** Faculty Details ****");
//     console.log("Name:" ,name);
//     console.log("Email:" ,email);
//     console.log("Contact:" ,contact);
//   }
// }

// let school = new School();
// school.student("luv dhameliya", "luvdhameliya@gmail.com", "7567655955");
// school.faculty("Dr. girish sir", "girish@gmail.com", "8765432109");


// output:

// **** Student Details ****
// Name: luv dhameliya 
// Email: luvdhameliya@gmail.com
// Contact: 7567655955
// **** Faculty Details ****
// Name: Dr. girish sir
// Email: girish@gmail.com
// Contact: 8765432109


// 2. 

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   printdetails() {
//     console.log("Name: " , this.name);
//     console.log("Age: " , this.age);
//   }
// }

// class Employee extends Person {}
// let employee = new Employee("darshik", 24);
// employee.printdetails();

// output:

// Name:  darshik
// Age:  24


// 3.

// class Employee {
//   constructor() {
//     console.log("This is a new employee our company.");
//   }
// }

// let obj= new Employee();

// output:

// print : This is a new employee our company.

// 4.

// class Shape {
//   circle(radius) {
//     const area = 3.14 * radius * radius;
//     console.log("Circle Area: " , area);
//   }

//   rectangle(width, height) {
//     const area = width * height;
//     console.log("Rectangle Area: " , area);
//   }
// }

// let shape = new Shape();
// shape.circle(7);     
// shape.rectangle(5, 10);

// output:

// Circle Area:  153.86
// Rectangle Area:  50