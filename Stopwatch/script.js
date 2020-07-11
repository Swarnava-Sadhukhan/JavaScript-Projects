
//stores seconds,centiseconds and minutes
var seconds = 00;
var tens = 00;
var mins = 00;

//to update the display clock
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendMins = document.getElementById('mins');

var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var interval; 
var f = 0;

function startTimer(){
    tens++;
    if(tens<=9){
        appendTens.innerHTML = "0" + tens;
    }
    else{
        appendTens.innerHTML = tens;
    }
    //increments second
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0; 
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
    //increments minutes
    if(seconds>59){
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if(mins>9){
        appendMins.innerHTML = mins;
    }
}

//starts timer
buttonStart.onclick = function(){
    f++;
    if(f==1)
        interval = setInterval(startTimer);
}

//stops timer
buttonStop.onclick = function (){
    clearInterval(interval);
    f=0;
}

//resets timer
buttonReset.onclick = function (){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    f=0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins
}
