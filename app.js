
const word=document.querySelector(".word")
const time=document.querySelector(".time")
const score=document.querySelector(".score")
const wtext=document.querySelector("#wtext")
const times=document.querySelector(".times")
const select=document.querySelector("select")
const modal=document.querySelector(".modal")
const small=document.querySelector("small")
const highvalue=document.querySelector("highvalue")
const wrap=document.querySelector(".wrapper")
const over=document.querySelector(".overflow")
const close=document.querySelector(".close")
const Yscore=document.querySelector(".Yscore")



wtext.focus()
let randomword
 let sum=10
 let scor=0
 let maxscore

 const gamelevel=localStorage.getItem("gamelevel")
 let level= gamelevel ? gamelevel : "medium"
 select.value=level




 
 
 function newWord(){
    const randomindex=Math.trunc(Math.random()*175000)
    randomword=words[randomindex]
    word.textContent=randomword
}
newWord()

function load () {
    
wtext.addEventListener("input" , (e)=>{
    e.preventDefault()
    
    wtext.value=wtext.value.toLowerCase()
    if(randomword == wtext.value){
       
        newWord()
        scor=scor+1
        score.textContent=scor
        Yscore.textContent=scor
         
        wtext.value=""
        small.textContent="Great😍"
        wtext.style.border="4px solid rgb(15, 255, 15)"   
        switch(level){
            case "easy" :
                sum+=6;
                break
            case "medium" :
                sum+=4;
                break
            case "hard" :
                sum+=3;
                break    
        }
    }
    else {  
        small.textContent="..."
        // input.classList.toggle="textwrong"
        wtext.style.border="2px solid red"    

    }
    
   
    
    
})

}
load()
    
    
function interval() {
    setInterval(()=> {
        if(sum > 0){
            sum--
            if(sum<=5)
            times.style.color="red"
           else {
            times.style.color="white"
    
           }
           if(sum == 0){
            wrap.classList.toggle("hidden")
            modal.classList.remove("hidden")
            over.classList.remove("hidden")
        }
        }
        time.textContent=sum
    },1000)
}
interval()
select.addEventListener("change",()=>{
    localStorage.setItem("gamelevel", select.value)
   
    // highvalue.innerHTML=

})
close.addEventListener("click",()=>{
    wrap.classList.toggle("hidden")
    modal.classList.add("hidden")
    over.classList.add("hidden")
    load()
    interval()
    newWord()
})
over.addEventListener("click",()=>{
    wrap.classList.toggle("hidden")
    modal.classList.add("hidden")
    over.classList.add("hidden")

})






