let counter = 60;
let sec = 1;
let min = 0;
let hr = 0;

function count(){
    console.log(hr + ": "+ min + ": " + sec);
    sec++;

    if (sec >= 6) {
        sec = 0;
        min++;
    }

    if (min >= 6) {
        min = 0;
        hr++;
    }
}

setInterval(count, 1*1000);