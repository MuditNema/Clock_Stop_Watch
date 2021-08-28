`use strict`;


setInterval(function(){
    let dt = new Date();
    document.getElementById('hrs').innerHTML  =dt.getHours()
    document.getElementById('mn').innerHTML  =dt.getMinutes()
    document.getElementById('sc').innerHTML  =dt.getSeconds()
    let htime = dt.getHours();
    let mtime = dt.getMinutes();
    let stime = dt.getSeconds();
    let hrotation = (30*htime + mtime/2).toString();
    let mrotation = 6*mtime;
    let srotation = 6*stime;
    document.getElementById("handH").style.transform="rotate("+hrotation+"deg)";
    document.getElementById("handM").style.transform="rotate("+mrotation+"deg)";
    document.getElementById("handS").style.transform="rotate("+srotation+"deg)";
    
},1000);


let ans = true;
function Display(text) {
    document.getElementById("go").innerHTML = text;
}

let sec = 00;
let min = 00;
let hrs = 00;
function ShowTime(hours , minutes , seconds) {
    Display(hours.toString() + " : " + minutes.toString() + " : " + seconds.toString())
}
let InterId;
function WatchStart(){
    if(ans){
        InterId = setInterval(Starting , 1000);
        Starting();
        ans=false;
    }
}
function Starting(){
    sec++;
    if(sec===60){
        sec=0;
        min++;
    }
    if(min===60){
        min=0;
        hrs++;
    }
    ShowTime(hrs , min , sec);
}
function StopWatch(){
    if(!ans){
        clearInterval(InterId);
        ans=true;
    }
}
function ResetWatch(){
    sec=0;
    min=0;
    hrs=0;
    clearInterval(InterId);
    ans=true;
    ShowTime(hrs,min,sec);
}
document.getElementById("begin").addEventListener("click", WatchStart);
document.getElementById("stop").addEventListener("click", StopWatch);
document.getElementById("reset").addEventListener("click", ResetWatch);



// Analog-watch Content
