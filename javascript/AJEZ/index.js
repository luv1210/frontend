

document.querySelector("button").addEventListener("click",()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1")

    xhr.onload = function(){
        let data = JSON.parse(this.responseText);
        console.log(data);
        data.forEach(todo => {
           let li = document.createElement("li");
           li.innerHTML=todo.title
           document.querySelector("div").append(li); 
        });
    }
})