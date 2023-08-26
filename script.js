
let min = 0
let sec = 0
let hr = 0
let interval 
let timerStarted = false

function twoDigits(digit){
    if(digit < 10){
        return('0'+digit)
    }else{
        return(digit)
    }
}  

function start(){
    if (!timerStarted) {
        watch();
        interval = setInterval(watch, 1000);
        timerStarted = true;
        document.getElementById('startButton').disabled = true;
    }
}

function pause(){
    clearInterval(interval);
    timerStarted = false;
    document.getElementById('startButton').disabled = false;
}

function reset(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('watch').innerHTML = '00:00:00';
    timerStarted = false;
    document.getElementById('startButton').disabled = false;
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hr++
            min = 0
        }
    }
    document.getElementById('watch').innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}`
}