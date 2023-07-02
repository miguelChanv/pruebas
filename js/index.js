const menu= document.getElementById('menu')
const hamburguer = document.getElementById('hamburguer')

let abierto=false;
hamburguer.addEventListener("click",()=>{
    if(abierto){
        menu.classList.remove('d-flex')
        menu.classList.add('d-none')
    }else{
        menu.classList.remove('d-none')
        menu.classList.add('d-flex')
    }
    abierto= !abierto
})
