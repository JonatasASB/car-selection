let menuMobile = document.querySelector('.menu-mobile');
let menuModified = document.querySelector('ul.header-menu')
menuMobile.addEventListener('click', () => {
    if (menuModified.style.visibility == 'visible' && menuModified.style.opacity == '0.8') {
        menuModified.style.visibility = 'hidden';
        menuModified.style.opacity = '0';
}
 else {
         menuModified.style.visibility = 'visible'
         menuModified.style.opacity = '0.8'
    }
})



let buttomLeft = document.getElementById('left');
let buttomRight = document.getElementById('right');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let number = document.querySelector('div.number');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1
function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let oldDots = indicators.querySelector('.active')
    oldDots.classList.remove('active')
    dots[active].classList.add('active')

    number.innerHTML = `0${active + 1}`
}
buttomRight.addEventListener('click', () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider()
    items[active].classList.add('active')


})

buttomLeft.addEventListener('click', () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider()

    items[active].classList.add('active')
})
