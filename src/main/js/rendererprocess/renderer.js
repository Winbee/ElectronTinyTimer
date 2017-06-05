const $ = require('jquery');


const $loadingBar = $('#loading-bar');

// Set the date we're counting down to
const durationInMs = 25 * 60000;
const finalTime = new Date().getTime() + durationInMs ;

const id = setInterval(frame, 1000);
function frame() {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const ratioLeftToFinalTime = (finalTime - now)/durationInMs;

    console.log(ratioLeftToFinalTime);
    if (ratioLeftToFinalTime < 0) {
        clearInterval(id);
    } else {
        $loadingBar.css('width', ratioLeftToFinalTime * 100 + '%');
    }
}