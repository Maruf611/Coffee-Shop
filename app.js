let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let cartitem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () => {
    cartitem.classList.toggle('active')
}

let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active')
}