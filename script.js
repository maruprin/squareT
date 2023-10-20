const btn_menu = document.querySelector(".menu-icon");
const menu_container = document.querySelector(".menu-mobile");

btn_menu.addEventListener('click',()=>{
    menu_container.classList.toggle('active');
    btn_menu.classList.toggle('opened');
})

