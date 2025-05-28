// IF ELSE PROJECT


// 1. ELECTRICITY

let units = 170, bill;

if (units <= 50) {
  bill = units * 1;
} else if (units <= 150) {
  bill = units * 2;
} else if (units<=250){
  bill = units * 3;
}else{
 bill=units*4;
}
if (bill > 150) {
  bill += bill * 20 / 100;
}
console.log("your bill is=", bill);


// output :
// units = 170
// total Amount pay = 612



// 2. season

// let input;

// input=Number(prompt("enter number of 1to12="));

// switch (input) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("winter season") ;
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer season") ;
//     break;
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     console.log("monsoon season") ;
//     break;
     
//   default:
//     console.log("this number is not valid");
//     break;
// }


// output :
// input = 5
// output is :Summer



// 3. intrest

// let p = 10000, r, i, n = 3;

// if(n<3){
//    console.log("Minimum  calculate interest 3 Years")
// }  else{
// if (n >= 3 ) {
//   if (n <= 5) {
//     r = 3
//     i = (p * r * n) / 100; 
//     console.log("total interest:",i);
//   } else {
//     if (n <= 8) {
//       r = 5;
//       i = (p * r * n) / 100;
//       console.log("total interest:",i);
//     } else {
//       if (n <= 12) {
//         r = 12;
//         i = (p * r * n) / 100;
//         console.log("total interest:",i);
//       } else{
//   r = 15;
//   i = (p * r * n) / 100;
//   console.log("total interest:",i);
//       }
//     }
//   }
// }
// }

   //  output :
   //  p=30000 and n = 3
   //  total interest = 2700




// 4. Check Voting Eligibility 

  //  let age = Number(prompt("Enter Your age"));

  //    if(age>=18){
  //       console.log("You are Eilgible For Voting");
  //    }  else{
  //     if(age<=0){
  //       console.log("Enter valid Age");
  //     } else{
  //       console.log("You are still",age,"years old, so you cannot vote.");
  //     } 
  //    }

  // output :
  //  age = 19;
  // print: You are Eilgible For Voting




// 5. classify age group 

//    let age = 27;
//   if(age<0){
//     console.log("Enter valid age")
//   } else{
// if(age<=1){
//     console.log("Infant")
//    } else if (age<=12) {
//      console.log("Child")
//    }  else if (age<=19) {
//     console.log("Teenager")
//    } else if (age<=30) {
//     console.log("Young Adult")
//    } else if(age<=59){
//     console.log("Adult")
//    } else{
//     console.log("Senior")
//    }
//   }
   
  // output :
  // age = 27
  // print: Young Adult