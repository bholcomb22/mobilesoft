const menu = $('.nav-menu')[0];
const hamburger = $('.hamburger-container')[0];

menu.style.display = 'none';
let menuTracker = false;

hamburger.addEventListener('click', ()=>{
    menuTracker = !menuTracker;
    if(menuTracker) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});


const locationButton = document.querySelectorAll('.location-button');
const locationImg = document.querySelectorAll('.card > img');
console.log(locationImg)
let imgTracker = true;

//if screen resizes make map images always appear
window.addEventListener('resize', () => {
    if(window.innerWidth > 878) {
        locationImg.forEach((img) => {
            img.style.display = 'block';
        });
    } else {
        locationImg.forEach((img) => {
            img.style.display = 'none';
        });
    }
});

locationButton.forEach((button, index) => {
    
    button.addEventListener('click', (e) => {
        if(imgTracker) {
            imgTracker = !imgTracker;
            e.target.parentElement.children[10].style.display = 'block';
        } else {
            imgTracker = !imgTracker
            locationImg.forEach((image) => {
                e.target.parentElement.children[10].style.display = 'none';
            });
        }
    });
});
