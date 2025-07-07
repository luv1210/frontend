let data = [
  {
img:"https://images.unsplash.com/photo-1654649451086-dd75d8170a27?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },
   {
    img:"https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1719418812953-fcca92314ec0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  img:"https://images.unsplash.com/photo-1748897364750-a9ce5b1067cc?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

let index = 0;

setInterval(() => {
  index = (index + 1) % data.length;
  slide();
}, 1000);

let slide = ()=>{
  document.getElementById("image").innerHTML = `<img class="images" src="${data[index].img}">`
}


slide()