const $ = require('jquery');


const $loadingBar = $('#loading-bar');
const $resetButton = $('#reset-button');

// Set the date we're counting down to
const durationInMs = 25 * 60000;
let finalTime;
let id;

start();

function reset() {
    clearInterval(id);
    $loadingBar.css('width', '100%');
    start();
}

function start() {
    finalTime = new Date().getTime() + durationInMs;
    id = setInterval(frame, 1000);
}

function frame() {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const ratioLeftToFinalTime = (finalTime - now) / durationInMs;

    if (ratioLeftToFinalTime < 0) {
        clearInterval(id);
    } else {
        $loadingBar.css('width', ratioLeftToFinalTime * 100 + '%');
    }
}

$resetButton.on('click', () => {
    reset();
});