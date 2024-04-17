let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
let x = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    const seconds = Math.floor( (timeLeft/1000) % 120 );
    console.log( + seconds + "s ");
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 1000);
