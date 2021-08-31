"use strict";

let num =0;

const recorse = (x)=>{
    num += x;
     if(num > 1000){
        console.log("feraf")
        return
        console.log("feraf")
    }

console.log(num);
    recorse(num);
}

recorse(1);


let newOldNums = localStorage.getItem('genNums');
