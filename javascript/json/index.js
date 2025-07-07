// json ---> javascript object notation 

// let person= {
//    name :"luv dhameliya",
//    age :21,
//    email :"luv@gmail.com"
// }

// console.log(person);

// let jsonobj ={
//     "name" : "luv dhameliya",
//     "age" : 21,
//     "email" : "luv@gmail.com"
// }

// console.log(jsonobj);

let person = {
    name : "luv dhameliya",
    age :21,
    email :"luvdhameliya@gmail.com"
};
let data = JSON.stringify(person);
console.log(data);

localStorage.setItem("person",data);
let data1=localStorage.getItem("person");
let person1=JSON.parse(data1);
console.log(person1);