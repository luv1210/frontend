let data = [
  {
    img:"https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    img:"https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    img:"https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
  img:"https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
]

let index = 0;
let index1 = 1

let prev = ()=>{
  if(index == 0 ){
    index = data.length -1;
   
  }else{
    index--;
  }
  slide()
}

let next = ()=>{
   if(index == data.length -1 ){
    index = 0 ;
    
  }else{
    index++;
  }
  slide()
}


let slide = ()=>{
  document.getElementById("image").innerHTML = `<img class="images" src="${data[index].img}">`
}


slide()