
// 1. print message Good Morning. 

// let printmsg =(message)=>{
//       if(message){
//           console.log(message)
//       } else{
//           console.log("Good Morning")
//       }
// }

// printmsg();

// OUTPUT

// without argument
// printmsg()    then  print Good Morning 

// with argument
// printmsg("How Are You?") then print: How Are You?




// 2.  find Circle area (area pi*r*r) 

// let circle = (r)=> 3.14*(r**2)
// let user_input = Number(prompt("Enter value to finde circle area"))
// let area = circle(user_input);
// console.log("Circle Area Is:",area);


// OUTPUT 
// user_input = 20
// then print
// Circle Area Is: 1256



// 3. find Triangle area (area = (l*h)/2) 

//  let triangle = (l,h)=> (l*h)/2
//  let area = triangle(34,26);
//  console.log("Triangle Area Is:",area);


// OUTPUT 
// triangle(13,43)
// then print
// Triangle Area Is: 279.5



// 4. find Rectangle area = l h 

// let rectangle =(l,h)=> l*h 
//  let area = rectangle(7,24);
//  console.log("Rectangle Area Is:",area);


// OUTPUT 
// rectangle(23,87)
// then print
// Rectangle Area Is: 2001



// 5. find ans of ((b*b)(4*a*c))/(2*a) 

// let find_value = (a,b,c)=>((b*b)*(4*a*c))/(2*a)    
// let cal = find_value(12,35,53)
// console.log("Your Ans Is",cal);

// OUTPUT 
// find_value(10,20,30)
// then print
// Your Ans Is:24000



// 6. find ans of (a*a) + (2*a*b) + (b*b)  

// let find_value =(a,b)=> (a*a) + (2*a*b) + (b*b)    

// let cal = find_value(45,12)
// console.log("Your Ans Is:",cal)

// OUTPUT 

// find_value(15,10)
// then print
// Your Ans Is: 625



// 7. convert Fahrenheit to Celsius (c = (f-32)/1.8) 

// let celsius = (f)=> (f-32)/1.8

// let fahrenheit = Number(prompt("Enter Fahrenheit"));

// let cal_celsius = celsius(fahrenheit); 
// console.log("celsius is:",cal_celsius)

// OUTPUT 

// fahrenheit = 113
// then print
// celsius is: 45


// 8. convert Celsius to Fahrenheit (f= (c*1.8)+32) 


// let fahrenheit = (c)=> (c*1.8)+32

// let celsius = Number(prompt("Enter celsius"));

// let cal_fahrenheit = fahrenheit(celsius); 
// console.log("fahrenheit is:",cal_fahrenheit)

// OUTPUT 

// celsius = 59
// then print
// fahrenheit is: 138.2



// 9. given number is odd or even 

// let oddeven = (number)=>{
//   if(number%2==0){
//     console.log(number+" is even number");
//   } else{
//     console.log(number+" is odd number")
//   }
// } 

// let number = Number(prompt("Enter number to check odd or even"));
// oddeven(number);

// OUTPUT 

// number = 15
// then print 
// 15 is odd number 


// 10. swap a value  

// let swap = (a,b)=>{
//      a = a+b;
//      b = a-b;
//      a = a-b
//      console.log("value of a:",a)
//      console.log("value of b:",b)
// }

// swap(25,90)

// OUTPUT 
//  swap(23,50)
//  then print 
// value of a: 50
// value of b: 23