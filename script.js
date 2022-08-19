let values;
let inpValue = document.querySelector(".textvalue")
let btn = document.querySelector(".btn");
let todos = document.querySelector(".todos ul");
btn.setAttribute("class" , "new");
console.log(btn);

btn.onclick = function() {
    if(inpValue.value){
        values = inpValue.value
        let element = document.createElement("li");
        element.innerHTML = inpValue.value;
        element.setAttribute("class" , "list")
        console.log(element);
        console.log(element);
        todos.append(element);
    }else{
        alert("empty");
    }
    
}


console.log(inpValue);