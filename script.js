const mainMenu = document.querySelector('.nav-items');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.bars');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    // mainMenu.style.display = 'hidden';
}
function close(){
    mainMenu.style.top = '-150%';
}