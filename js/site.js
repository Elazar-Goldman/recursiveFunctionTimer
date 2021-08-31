"use strict";

let hand = document.getElementById('myDiv');
let deg = 0;
let count = 60;
let chan = 0 ;
let iter = 0;
function change(){
    
    if(count===0){
        return
    }
    if(count===5){
        document.getElementById('timeCounter').style.backgroundColor="red"
        document.getElementById('innerDiv').style.backgroundColor="red"
        document.getElementById('myDiv').style.backgroundColor="green"
    }
    setTimeout(()=>{
        deg +=chan;
        hand.style.transformOrigin = "bottom" ;
        hand.style.transform = `rotate(${deg}deg)`;
       
       
        change(); 
    },1000)

    count-- 
    iter++
    setTime();
}

let startTime=()=>{
    count = document.getElementById('userTime').value;
    chan = 360/count;
    change();
}

let setTime=()=>{
    document.getElementById('timeCounter').innerHTML= count;
}
