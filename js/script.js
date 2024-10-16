let body = document.body;
let show = document.querySelector('.show_cards')
const ImgElement = document.getElementById('mode_changer');
const hamburger = document.getElementById('mobile_hamburger');
const mobileMenu = document.querySelector('.mobile_nav_sec1');

ImgElement.addEventListener('click', () => {
    if (ImgElement.src.includes('sun.svg')) {
        ImgElement.src = 'All Icons/moon.svg';
    } else {
        ImgElement.src = 'All Icons/sun.svg';
    }

    // Toggle light_theme class
    body.classList.toggle('light_theme');
    show.classList.toggle('back')
});


hamburger.addEventListener('click', () => {
    if (mobileMenu.style.left === '0px') {
        mobileMenu.style.left = '-100%'; // Hide the menu
    } else {
        mobileMenu.style.left = '0px'; // Show the menu
    }
});

window.addEventListener('resize' , () => {
 
    if(window.innerWidth > 800){
        mobileMenu.style.left = '-100%'
    }
    
})