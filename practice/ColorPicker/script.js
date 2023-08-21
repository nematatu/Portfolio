console.log("Hello World!");
console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent='ColorCode?';
document.querySelector('#colorText').textContent='ColorCode?';
const color=document.querySelector('#colorPicker');
const text=document.querySelector('#colorText');
const colorbg=()=>{
    if(color.value==='#ffffff'){
    text.textContent="it's white!";
    }
    else if(color.value==='#000000'){
        text.textContent="it's black!";
    }
    else{
        text.textContent=color.value;
    }
    document.body.style.background=color.value;
}
color.addEventListener('input',colorbg);
