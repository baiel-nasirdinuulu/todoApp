window.addEventListener("load",()=>{


    const input =document.querySelector("input");
const btn=document.querySelector(".btn");
const ul=document.querySelector(".list");


function createTodo(text){
    const li=document.createElement("li");
    li.innerText=text;
    li.classList.add("list-item");
    li.addEventListener("click",deleteTodo)
    ul.append(li);
}
function deleteTodo(){
    this.removeEventListener("click",deleteTodo);
    this.remove(); 
}

function handleClick(){
    const inputValue=this.previousElementSibling.value.trim();
    if(inputValue){
        createTodo(inputValue);
        this.previousElementSibling.value="";

    }else{
        alert(7689)
    }
}

btn.addEventListener("click",handleClick) 

})