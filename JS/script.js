let buttons = document.querySelectorAll(".keys");
let textArea = document.querySelector("#text");
let capsLock = document.querySelector("#CapsLock");
let backSpace = document.querySelector("#Backspace");
let enter = document.querySelector("#Enter");
let capsActive = true;
let isOpen = true;

buttons.forEach(items =>{
    items.addEventListener("click", ()=>{
        items.style.backgroundColor = "white";
        setTimeout(()=>{
            items.style.backgroundColor = "#2E0000";
        },50);
        if (capsActive){
            textArea.value += items.value;
        }else{
            textArea.value += items.value.toUpperCase();
        }
    });
});
capsLock.addEventListener("click", ()=>{
    if (isOpen){
        capsActive = false;
        isOpen = false;
    }else{
        capsActive = true;
        isOpen = true;
    }
});
document.addEventListener("keydown", function (event){
    let keyCode = event.code;
    let keys = document.getElementById(keyCode);
    keys.style.backgroundColor = "white";
});
document.addEventListener("keyup", function (event){
    let keyCode = event.code;
    let keys = document.getElementById(keyCode);
    keys.style.backgroundColor = "#2E0000";
});
backSpace.addEventListener("click", ()=>{
    text.value = text.value.substr(0, text.value.length -1);
});
enter.addEventListener("click", ()=>{
    textArea.value += "\n";
});