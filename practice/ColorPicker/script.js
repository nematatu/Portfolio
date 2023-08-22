console.log("Hello World!");
window.addEventListener('load',()=>{
    loading.classList.add('loaded')
})
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
    document.querySelector('.color_class').style.background=color.value;
}
color.addEventListener('input',colorbg);
const btn=document.querySelector('#button');
btn.addEventListener('click',()=>{
    document.querySelector('.darkmode').classList.toggle('dark_theme');
    if(btn.textContent==='DarkMode'){
        btn.textContent='LightMode';
    }else{
        btn.textContent='DarkMode';
    }
});
const textform=document.querySelector('#text');
const count=document.querySelector('#count');

textform.addEventListener('keyup',()=>{
    count.textContent=textform.value.length;
    if(textform.value.length>100){
        count.classList.add('alert');
    }
})
