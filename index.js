// section-1 
let close_icon=document.querySelector(".close-icon")
let section_1=document.querySelector(".section-1")

// close function 
close_icon.addEventListener("click",()=>{
    section_1.classList.add("hidden")
})



// section-3

let left_arrow=document.querySelector(".left-icon")
let right_arrow=document.querySelector(".right-icon")
let section__images=document.querySelector(".images__box")

let left=300
let right=300

left_arrow.addEventListener("click",()=>{
   

    section__images.classList.remove(`-translate-x-[${left}%]`)

    left=left<500?left+100:0
    section__images.classList.add(`-translate-x-[${left}%]`)
  


})


right_arrow.addEventListener("click",()=>{
  
    section__images.classList.remove(`-translate-x-[${left}%]`)

   left=left>0?left-100:500
    
    section__images.classList.add(`-translate-x-[${left}%]`)
    console.log("left")
    
    


})
