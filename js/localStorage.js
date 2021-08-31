let nums =[]

let crete = document.getElementById('numCreate')
let store = document.getElementById('numSrore')
let olimpic = document.getElementById('olimpcSrore')

crete.addEventListener('click',(evt)=>{
    console.log(evt)
   let newNum =  Math.floor(Math.random()*100)
  nums.push(newNum)
  console.log(nums)
})

store.addEventListener('click',()=>{

    localStorage.setItem('genNums', nums);
})






let olimpics = "Japen Olimpics";
olimpic.addEventListener('click',()=>{
    localStorage.setItem('olimpics', olimpics);
    console.log("hello")


})



