// let person = {
//     name: "darshik shekhada",
//     hobi: "babu white chuna mava",
//     work: "fullstack devlopper",
//     age: "24",
//     email:"darshik007@gmail.com",
//     mobile:9987634529,
// }
//   console.log(person)

// //   console.log(person.hobi) 
// person.hobi="chetting on online compiler with girls";
// console.log(person.hobi);


// let person = {
//   name:"luv dhameliya",
//   email:"dhameliyaluv@gmail.com",
//   mobile: 7567655955,
//   age:21,
//   hobbies:"gaming","eatting"
  
// }

let data = [
  {
       quote:"Life isn’t about getting and having, it’s about giving and being.",
       author:"Kevin Kruse"},
{
       quote:"Whatever the mind of man can conceive and believe, it can achieve.",
       author:"Napoleon Hill"},
{
       quote:"Strive not to be a success, but rather to be of value.",
       author:"Albert Einstein"},
{
       quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
       author:"Robert Frost"},
{
       quote:"I attribute my success to this: I never gave or took any excuse.",
       author:"Florence Nightingale"},
{
       quote:"You miss 100% of the shots you don’t take.",
       author:"Wayne Gretzky"},
{
       quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
       author:"Michael Jordan"},

       {
       quote:"Life shrinks or expands in proportion to one’s courage.",
       author:"Anais Nin"},


]

// console.log(data);
let index = 0;

let pre =()=>{
  if(index==0){
    index = data.length-1
  }else{
    index--;
  }
  display();
}

let next =()=>{
if(index==data.length-1){
    index =0;
  }else{
    index++;
  }
  display();
}

let display =()=>{
  document.getElementById("quote").innerHTML=data[index].quote
  document.getElementById("author").innerHTML=data[index].author
}
display();