let counter = 10;

function count(){
    console.log(counter);
    counter--;

    if (counter < 0) {
        console.log("Countdown finished!");
        return 0;
    }
}

setInterval(count, 1*1000);