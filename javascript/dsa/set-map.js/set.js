
let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(20); 

console.log("Set values:", mySet); 
console.log(mySet.has(20)); 

mySet.delete(10);
console.log("After delete:", mySet); 

for (let val of mySet) {
  console.log(val);
}



let myMap = new Map();

myMap.set("name", "Luv");
myMap.set("age", 21);
myMap.set(100, "Code");
myMap.set(true, "Yes");

console.log(myMap.get("name")); 
console.log(myMap.has("age")); 


myMap.delete(100);
console.log("After delete:", myMap);

for (let [key, value] of myMap) {
  console.log(key, "=>", value);
}





