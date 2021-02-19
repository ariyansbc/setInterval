

const counter = document.querySelector(".count")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
let count  = 0 ;
let timer;

start.addEventListener("click", ()=>{
    timer =  setInterval(setCounter,1000)
})

stop.addEventListener("click",()=> {
   clearInterval(timer)
})
const setCounter = () => {
    counter.innerHTML = count;
    count++;
    
}