
let startingMinutes = 20;
let time = startingMinutes * 60;
let timeEl = document.querySelector('#time-el')
let startEl = document.querySelector('#start-el')

startEl.addEventListener('click', function countDown() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60; 

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeEl.innerHTML = `${minutes} : ${seconds}`
    time--;
    startEl.classList.add('hidden')
    setInterval(countDown, 1000);  
})