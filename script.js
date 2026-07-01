let startTime;
let elapsed = 0;
let timer;

function updateDisplay(){
    let time = Date.now() - startTime + elapsed;

    let ms = time % 1000;
    let sec = Math.floor(time/1000)%60;
    let min = Math.floor(time/60000)%60;
    let hr = Math.floor(time/3600000);

    document.getElementById("display").innerHTML =
    String(hr).padStart(2,'0') + ":" +
    String(min).padStart(2,'0') + ":" +
    String(sec).padStart(2,'0') + ":" +
    String(ms).padStart(3,'0');
}

function start(){
    if(!timer){
        startTime = Date.now();
        timer = setInterval(updateDisplay,10);
    }
}

function pause(){
    clearInterval(timer);
    timer = null;
    elapsed += Date.now() - startTime;
}

function reset(){
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    document.getElementById("display").innerHTML="00:00:00:000";
    document.getElementById("laps").innerHTML="";
}

function lap(){
    let li = document.createElement("li");
    li.innerHTML = document.getElementById("display").innerHTML;
    document.getElementById("laps").appendChild(li);
}