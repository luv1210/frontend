//  if , if else , leader , nested , switch , turnarry


// 1.if  and if else and ternary
/*
syntex:-

      if(condition){
        statement 
      }
*/

//  let a =12;
// if(a%2==0){
//   console.log("even Number");
// }


/*
syntex:-

      if(condition){
        statement 
      } else{
       statement 
       }
*/


// let a =12;
// if(a%2==0){
//   console.log("even Number");
// }  else{
//   console.log("odd Number");
// }



/* 
 syntex:-

    condition ? true:false
*/
// let a =12;
// a%2==0 ?console.log("even Number"):console.log("odd Number");



// 2.nested if else

/*
   syntex:-

   if(condition){

      if(condition){
        statment
      } else{
       }

   }   else{

       if(condition){
        statment
      } else{
       }

      }
 */


// let a=10,b=23,c=45;

// if(a>b){
//      if(a>c){
//       console.log("a is max");
//      }  else{
//        console.log("c is max");
//      }
// }  else{
//     if(b>c){
//       console.log("b is max");
//     }  else{
//       console.log("c is maximum");

//     }
// }


//PROGRAM

// 1.Enter two value find smallest.

// let a =20, b =85;
// if(a<b){
//   console.log("a is small");
// } else{
//   console.log("b is small");
// }


// 2. Enter one value find its positive or negative.

//  let a;
//  a = Number(prompt("Enter value"));

// if(a>=0){
//    console.log("Positive Number");
// }  else{
//    console.log("Negative Number");
// }


// 3. Enter one value find its divisible by 5 or not.

//  let a;
//  a = Number(prompt("Enter value"));

//  if(a%5==0){
//     console.log(a,"this number is divisible by 5");
//  } else{
//     console.log(a,"this number is not divisible by 5");
//  }


// 4.Enter one value find its divisible by 5 and 3 or not.


//   let a;
//  a = Number(prompt("Enter value"));

//  if(a%5==0 || a%3==0){
//     console.log(a,"this number is divisible by 5 and 3");
//  } else{
//     console.log(a,"this number is not divisible by 5 and 3");
//  }


// 5.Enter Students marks wheather pass or not

//  let marks;
//  marks = parseInt(prompt("Enter marks to check pass or not",marks));

//  if(marks>=33){
//      console.log("This student is pass");
//  } else{
//      console.log("This student is faile");     
//  }



// 6.Enter year find its leap year or not

//  let year = 1996;

// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }


// 7. Enter a, b, c find minimum among them

// let a = 10,b=20,c=30;

//   if(a>b){
//      if(a>c){
//       console.log("a is max");
//      }else{
//        console.log("c is max");
//      }
// }  else{
//     if(b>c){
//       console.log("b is max");
//     }else{
//       console.log("c is maximum");

//     }
// }



// 8. changed password

// let password=123;
// let cur_pass=123 , new_pass=2345 , con_pass=2345 ;

// if (password==cur_pass) {
//   if (cur_pass==new_pass) {
//     console.log("current password & new password is both are same");
//   }else{
//     console.log("your password is successfully changed");
//   }
// }else{
//   console.log("your current password is wrong..");
// }



// practice

// 1  electricity

// let units = 309, bill;

// if (units <= 100) {
//   bill = units * 0.60;
//   // bill+=50;
// } else if (units <= 300) {
//   bill = units * 0.80;
//   // bill+=50;
// } else {
//   bill = units * 0.90;
//   bill += 50;
// }
// if (bill > 300) {
//   bill += bill * 15 / 100;
// }
// console.log("your bill is=", bill);


//  2.ELIGIGBLE FOR VOTIN OR NOT 

// let age;
      
//   age = Number(prompt("Enter Age",age))
//   if(age>=18){
//       console.log("Your Eligible For Voting")
//   } else{
//     if(age<0){
//       console.log("Enter Valide age")
//     }else{
//       console.log("Your Not Eligible For Voting")
//     }
//   }



// 3.   CALCULATE GROSS SALARY

// let salary=9000,hra,da,gro_salary

// if(salary<=5000){
//      hra = salary*0.08;
//      da = salary*0.20;
// } else if(salary<=10000){
//      hra = salary*0.12;
//      da = salary*0.30;
// }  else if(salary<=15000){
//      hra = salary*0.15;
//      da = salary*0.40;
// }  else if(salary>15000){
//      hra = salary*0.20;
//      da = salary*0.50;
// }

// gro_salary = salary+hra+da;
// console.log("Your salary:",salary);
// console.log("Your HRA:",hra);
// console.log("Your DA:",da);
// console.log("Your Gross Salary:",gro_salary);


 // 4. INCOME TEX SLAB RATES

//     let income=10000,slab2,slab3,salb4;
//  if(income<=2500){
//   console.log("TEXT PAY RS: 0")
//  }  else if(income>2500 && income<=5000){
//            income-=2500;
//            slab2 = income *0.10;
//            console.log("TEX PAY RS:",slab2,)
//  }   else if(income>5000 &&income<=10000){
//            slab2 = 2500*0.10;
//            income-=5000;
//            slab3= income *0.20;
//            console.log("TEX PAY RS:",slab2+slab3)
//  }   else{
//          slab2 = 2500*0.10;
//          slab3 = 5000*0.20;
//          income -=10000;
//          salb4 = income*0.30;
//          console.log("TEX PAY RS:",slab2+slab3+salb4)
//         }
        
        
  //  5.GRADE 
        
        
   // if(marks<0 || marks>100){
   // let marks=86;
   //   console.log("Enter valid Marks");
   // }else{
   //       if (marks>=90) {
   //   console.log("Your Grade is: A");
   // } else if(marks>=75){
   //   console.log("Your Grade is: B");
  //   console.log("Your Grade is: C")
        // } else if(marks>=60){
        //   console.log("Your Grade is: D")
   // } else if(marks>=35){
   // }  else{
   //   console.log("Your suucessfully Failed")
   // }
   // }


  // 6 PRINT X <2000 and >3000; AND Y = >100 and <500;

  // let x=4000 ,y=400;
           
  // if (x<2000 || x>3000)
  //   {
  //     console.log("X=",x);
  //   }   else{
  //       console.log("X is not criterion")
  //   }

  //   if (y>=100 &&y<=500) {
  //     console.log("Y=",y);
  //   } else{
  //       console.log("Y is not criterion")
  //   }



  // IF ELSE PROJECT =

  // 1. ELECTRICITY

// let units = 170, bill;

// if (units <= 50) {
//   bill = units * 1;
// } else if (units <= 150) {
//   bill = units * 2;
// } else if (units<=250){
//   bill = units * 3;
// }else{
//  bill=units*4;
// }
// if (bill > 150) {
//   bill += bill * 20 / 100;
// }
// console.log("your bill is=", bill);


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

// let p = 30000, r, i, n = 3;

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
   //  p=30000 and n = 10
   //  total interest = 12000




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

   let age = 25;
  if(age<0){
    console.log("Enter valid age")
  } else{
if(age<=1){
    console.log("Infant")
   } else if (age<=12) {
     console.log("Child")
   }  else if (age<=19) {
    console.log("Teenager")
   } else if (age<=30) {
    console.log("Young Adult")
   } else if(age<=59){
    console.log("Adult")
   } else{
    console.log("Senior")
   }
  }
   
  // output :
  // age = 22
  // print: teenager