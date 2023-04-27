const toggleMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const scrollSlider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

scrollSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollSlider.classList.add('active');
    startX = e.pageX - scrollSlider.offsetLeft;
    scrollLeft = scrollSlider.scrollLeft;
});

scrollSlider.addEventListener('mouseleave', () => {
    isDown = false;
    scrollSlider.classList.remove('active');
});

scrollSlider.addEventListener('mouseup', () => {
    isDown = false;
    scrollSlider.classList.remove('active');
});

scrollSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollSlider.offsetLeft;
    const walk = (x - startX) * 3;
    scrollSlider.scrollLeft = scrollLeft - walk;
});


const learnMoreBtn = document.querySelector('.learn-more-button');
const videoContainer = document.querySelector('.video-container');

learnMoreBtn.addEventListener('click', () => {
    videoContainer.classList.add('active');
    document.getElementById('video-player').play();
});

videoContainer.addEventListener('click', () => {
    videoContainer.classList.remove('active');
    document.getElementById('video-player').pause();
});

const learnMoreButton = document.querySelector('.learn-more-button');

learnMoreButton.addEventListener('click', () => {
    window.location.href = 'C:/Users/prane2/Desktop/ead hw/video-page.html';
});



























