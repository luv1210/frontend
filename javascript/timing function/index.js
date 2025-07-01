// console.log("hello world");

// let a = 10, b = 20;

// let id = setTimeout(()=>{
//     console.log("aditiom of a and b :",a+b)
// },5000)

// console.log(id)
// clearTimeout(id)

// let id = setInterval(() => {
//     console.log("aditiom of a and b :", a + b)
// }, 5000)

// console.log(id)
// clearTimeout(id)

// console.log("luv dhameliya")



setInterval(() => {
    let currentdata = new Date()
    let time = currentdata.toLocaleTimeString()
    document.querySelector('h2').innerHTML = time
}, 1000)

