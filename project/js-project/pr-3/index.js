// 1. table

// let i=1;
// let n=4;

// while(i<=10){
//     console.log(n+"*"+i+"*"+n*i);
//     i++;
// }

// output= n=4;

// 4*1*4
// 4*2*8
// 4*3*12
// 4*4*16
// 4*5*20
// 4*6*24
// 4*7*28
// 4*8*32
// 4*9*36
// 4*10*40


// 2. factorial

// let input = Number(prompt("Enter Number To Calculate Factorial Number"));
//  let factorial = 1;
//  let i = 1;
//   while(i<=input){
//     factorial = factorial *i;
//     i++;
//   }
//    console.log("factorial Is A:",factorial);

// output is a
// input=5;
// then print answer is=120


// 3. armstrong number

//     let digit = 1775;
//    let number = digit;
//    let count = 0;
//   let sum = 0;

//    while(digit!=0){
//      digit =  Math.floor(digit/10);
//      count++;
//    }
//    digit = number;
// do{
//     let power = number%10;
//     sum +=power**count;
//     number = Math.floor(number/10);
// } while(number!=0);

//     if(digit==sum){
//       console.log(digit + " is a armstrong number");
//     }else{
//       console.log(digit + " is not a armstrong number");
//     }

//   output ia a 
//   number = 1775
//   then print 1775 is a armstrong number


// 4. palindrome number

//  let number = 242;
//  let digit = number;
//  let str="";

//  while(number!=0){
//     str+=number%10;
//     number = Math.floor(number/10);
//  }

//    if(digit == str){
//     console.log(digit+" is a palindrome number");
//    }else{
//     console.log(digit+" ia not a palindrome number");
//    }


//   output ia a 
//   number = 242
//   print is 242 is a palindrome number


// 5. fibonacci series

//  let i = 10
//   let n=Number(prompt("Enter the number:"));
//   let x=0;
//   let y=1,z;

//   while(i<=n){
//    console.log(x);
//     z = y;
//     y=x;
//     x = y+z;
//     i++;
// }

//   output is a
//   n = 10;
//   then print is a 0 1 1 2 3 5 8 13 21 34


// 6. sum

// let i = 1;
// let sum  = 0;
// do{
// sum +=i;
// i++;
// } while(i<=20);
// console.log(" sum is:",sum);

// output is a  
// 1 To 20 Sum Is: 210


// 7. fizz buzz

//  let i = 1;
//  do{
//      if(i%3==0 && i%5 ==0){
//       console.log("FizzBuzz");
//      } else if(i%3==0){
//       console.log("Fizz");
//      } else if(i%5==0){
//       console.log("Buzz");
//      } else{
//       console.log(i);
//      }
//  i++;
//  } while(i<=100);


//   output is a
//   0 1 2 Fizz 4 Buzz Fizz ....13 14 FizzBuzz...


// 8. 

//  let str = ""
//  for(let i = 1;i<=10;i++){
//        str+= i
//        if(i<10){
//         str += "-";
//        }
//  }
//  console.log(str)

// out put is a
// 1-2-3-4-5-6-7-8-9-10


// 9. 1+4+9+16+...+100=385 sum

//  let sum = 0;
//  let str = "";
//  let n = Number(prompt("Enter Number"));
         
//  for (let i = 1; i <= n; i++) {
//    sum += i * i;
//    str += i * i
//    if (i < n) {
//      str += " + ";
//    } else {
//      str += " = " + sum;
//      console.log(str);
//    }
//  }


//    output is a
//    n = 10
//    1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385


// 10. pettern

                    // 5 
                    // 5 4 
                    // 5 4 3 
                    // 5 4 3 2 
                    // 5 4 3 2 1 

//  let i,j;
//  for(i=5 ;i>0 ; i--){
//   let str ="";
//       for(j=5;j>=i;j--){
//           str+= j + " "
//       }
//       console.log(str);
//  }

// output is a
// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1                  


// 11. pettern

// 1 
// 2  3 
// 4  5  6 
// 7  8  9  10 
// 11 12 13 14 15 


    // let count =0;
    // for(let i = 1;i<=5;i++){
    //   let str = "";
    //       for(let j = 1;j<=i;j++){
    //         count++;
    //         str += count + " "
    //       }
    //       console.log(str);
    // }     

    //  output is a
    //  1
    //  2 3
    //  4 5 6
    //  7 8 9 10
    //  11 12 13 14 15