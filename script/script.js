
let startingMinutes = 2;
let time = startingMinutes * 1;
let firstTimeEl = document.querySelector('#first-time-el')
let secondTimeEl = document.querySelector('#second-time-el')
let startEl = document.querySelector('#start-el')
let paragraphEl = document.querySelector('#paragraph-el')
let modalContainer = document.querySelector('.modal-container')

function firstCountDown() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60; 

    seconds = seconds < 10 ? '0' + seconds : seconds;

    firstTimeEl.innerHTML = `${minutes} : ${seconds}`
    secondTimeEl.innerHTML = `${minutes} : ${seconds}`
    time--;
    startEl.classList.add('hidden') 
    if(time <= -1) {
        secondCountDown()
    }
}

function secondCountDown() {
    startingMinutes = 1;
    time = startingMinutes * 20;
    modalContainer.classList.add('show')

    firstCountDown()
}

startEl.addEventListener('click', function() {
    firstCountDown()
    setInterval(firstCountDown, 1000); 
})