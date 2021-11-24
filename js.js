let nav = document.querySelector('header .nav_menu');
let menu = document.querySelector('header .uil-apps');
let chart = document.querySelector('header .cart');
let char = document.querySelector('header .uil-shopping-bag');
let clos = document.querySelector('header .cart .uil-multiply');
let plus = document.querySelectorAll('header .plus .uil-plus');
let count_1 = 1;
let count_2 = 1;
let count_3 = 1;
let p = document.querySelectorAll('header .plus p')
let minus = document.querySelectorAll('header .uil-minus');
let dark = document.querySelector('.uil-moon');
let header = document.querySelector('header');
let land = document.querySelector('.landing');
let feturs = document.querySelector('.feturs');
let our = document.querySelector('.our');
let testomnian = document.querySelector('.testomnian');
let product = document.querySelector('.product');
let footer = document.querySelector('.footer');
let body = document.querySelector('body');





dark.onclick = () => {
    header.classList.toggle('dark');
    land.classList.toggle('dark')
    feturs.classList.toggle('dark')
    our.classList.toggle('dark')
    testomnian.classList.toggle('dark')
    product.classList.toggle('dark')
    footer.classList.toggle('dark')
    body.classList.toggle('dark')
    dark.classList.toggle('uil-sun')
}



menu.onclick = () => {

    nav.classList.toggle('activ')
}

char.onclick = () => {
    chart.classList.toggle('activ')
}


clos.onclick = () => {
    chart.classList.remove('activ')

}


function scroll() {
    let head = document.querySelector('header');
    if (this.scrollY >= 50) head.classList.add('scroll');
    else head.classList.remove('scroll')
}

window.addEventListener('scroll', scroll);

plus[0].onclick = () => {
    count_1++
    p[0].innerHTML = count_1;
}
minus[0].onclick = () => {
    count_1--
    p[0].innerHTML = count_1;
}
plus[1].onclick = () => {
    count_2++
    p[1].innerHTML = count_2;
}
minus[1].onclick = () => {
    count_2--
    p[1].innerHTML = count_2;
}
plus[2].onclick = () => {
    count_3++
    p[2].innerHTML = count_3;
}
minus[2].onclick = () => {
    count_3--;
    p[2].innerHTML = count_3;
}

var swiper = new Swiper(".blogs-slider", {


    spaceBetween: 30,
    loop: 'true',




    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


});
var swiper = new Swiper(".product-slider", {

    spaceBetween: 30,
    loop: 'true',

    autoplay: {

        delay: 9500,
        disabOnInteraction: false,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,

        },


        450: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    }



});