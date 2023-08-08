let menu=document.querySelector('#manu-bars');
let navbar=document.querySelector('.navbar');

manu.onclick=() =>{
menu.classList.toogle('fa-times');
navbar.classList.toogle('active');

}

window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=() =>{
    document.querySelector('#search-icon').classList.toogle('active');
}
document.querySelector('#close').onclick=() =>{
    document.querySelector('#search-icon').classList.remove('active');
}
//
