// 1.

// let color = ["Red","Green","White","Black"];

// console.log(color.join(","));
// console.log(color.join("+"));
// console.log(color.slice(0,3).join(","));
// console.log(color[0]);
// console.log(color.slice(1,3).join(","));
// color.push("orange");
// console.log(color.join(","));


// output=

//  Red,Green,White,Black
//  Red+Green+White+Black
//  Red,Green,White
//  Red
//  Green,White
//  Red,Green,White,Black,orange


// 2.

// let data=[10,20,76,34,76,12];

// let sum =0

// for (let i = 0; i < data.length; i++) {
//     sum += data[i] 
// }
// console.log(sum);

// let sum=0
// data.forEach(element => {
//     return sum += element;
// });

// console.log(sum);

// output=

// forloop ans=228;
// foreach ans=228;


// 3.

  // let num = [23,45,56,54,67,32,97,78,90,12,24,15,7,2]

  // let pk = (arr)=>{
  // let max = arr[0];
  // let min = arr[0];
  
  //  for(let i = 1; i < arr.length;i++){
  //        if(arr[i] > max){
  //          max = arr[i];
  //        }

  //        if(arr[i] < min){
  //          min =  arr[i];
  //        }
        
  //  }
  //  console.log("Max Number is:",max);
  //  console.log("Min Number is:",min);
  // }
  // pk(num)


  // OUTPUT
    // Max Number is:97
    // Min Number is:2


// 4.
    // let arr = ['A', 'b', 'C', 'D',"B"]
    // let ascii = [];
    // for(let i = 0;i<arr.length;i++){
    //     ascii.push(arr[i].charCodeAt())
    // }
    // console.log(ascii)


    // OUTPUT 
    // [65, 98, 67, 68, 66]



// 5.
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20]; 
//     let positivenumber = numbers.filter((element)=> element >0)
//        console.log(positivenumber)

      // OUTPUT 
      // [1,5,12,19,20];



// 6. 

// let arr = [2, 5, 6, 3, 8, 9]; 

// let arr2 =  arr.map((ele)=>ele**2)
// console.log(arr2)

// OUTPUT 
//  [4, 25, 36, 9, 64, 81]



// 7.

// let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
// let myColor = ["Red", "Green", "White", "Black"]; 

// console.log(numbers.sort((x,y)=> x-y))
// console.log(myColor.sort()) 

// console.log(numbers.sort((x,y)=> x-y).reverse()) 
// console.log(myColor.sort().reverse())     

 // OUTPUT 
 //  ascending:        
 //  [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23
 //  ['Black', 'Green', 'Red', 'White']
 // descending:
 // [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]
 // ['White', 'Red', 'Green', 'Black']


// 8. 

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']; 

// let less8 =   words.filter((ele)=>ele.length<8)
// console.log(less8)
  
      // OUTPUT 
      //  ['Python', 'Go', 'Java', 'PHP', 'Ruby']


// 9.

// let x="airplane";
// console.log(x[2])  

//  OUTPUT: r 

// let x = "oxoxoxox"; 
// let char = '';
//       for(let i = 0;i<x.length;i++){
//         if(i%2==1){
//           char +=  x[i].toUpperCase()
//         }else{
//           char+=x[i]  
//         }
//       }
//       console.log(char)

   // OUTPUT:- "oXoXoXoX" 

  // let  x= "A New Java Book"; 
  // console.log(x.toLowerCase());     // a new java book  
  // console.log(x.toUpperCase());     //"A NEW JAVA BOOK" 


  // 10. 

  // let arr = [12,34,56,3,23,56,87,86,1,2,7,8,10];

  // console.log(arr.reverse())  
  
  // output

  //[10, 8, 7, 2, 1, 86, 87, 56, 23, 3, 56, 34, 12]


  // 11. write a JavaScript program to check if a value is found or not? 

  // let arr = [12,34,56,3,23,56,87,86,1,2,7,8,10];

  //      let u_input = Number(prompt("Enter Number to Finde Number"));

  //  let finde = arr.includes(u_input)
  //  if(finde==true){
  //   console.log(`${u_input} is found`)
  //  }else{
  //   console.log(`${u_input} is not found`)
  //  }

// OUTPUT 
//  u_input = 23 
//  then   print 23 is found 

// 12. 

// let myname = "luv maheshbhai dhameliya"
//  myname  = myname.trim().split(" ").join("");
// console.log(`my name langht is: ${myname.length}`)

// OUTPUT 
// my name langht is: 3


// 13.

// let per =  "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"; 

// let result =   per.replaceAll("dog","cat")
//   console.log(result)

// OUTPUT: 
// "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning" 
             

// 14.

// let pera =  "Hire the top 1% freelance developers"; 
//      let result = pera.split(" ",4)
//      console.log(result)

// OUTPUT:
//  ["Hire", "the", "top", "1%"] 


// 15.

// let arr =  ['5', 32, 'Daniel']; 
// console.log(arr.join(","))

// OUTPUT:
//  5,32, Daniel 