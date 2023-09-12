let currentimage = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(slideshow, 3000);
})

function slideshow(){
    document.querySelectorAll(".slidersround").forEach((c)=>{
        c.classList.remove("selected");
    })
    if (currentimage == 2) {
        document.getElementById("menuslider").style.left = `0px`;   
        currentimage = 0; 
    } else if (currentimage == 1) {
        document.getElementById("menuslider").style.left = `-600px`;
        currentimage = 2;
    } else if (currentimage == 0) {
        document.getElementById("menuslider").style.left = `-300px`;
        currentimage = 1;
    }
    document.querySelectorAll(".slidersround")[currentimage].classList.add("selected");
}

document.getElementById("right").addEventListener("click", ()=>{
    document.querySelectorAll(".slidersround").forEach((c)=>{
        c.classList.remove("selected");
    })
    console.log(document.getElementById("menuslider").getBoundingClientRect().left);
    if (currentimage < 2){
        const pos = document.getElementById("menuslider").getBoundingClientRect().left - 300;
        document.getElementById("menuslider").style.left = `${pos}px`;
        currentimage++;
        document.querySelectorAll(".slidersround")[currentimage].classList.add("selected");
    } else if (currentimage >= 2){
        const pos = document.getElementById("menuslider").getBoundingClientRect().left + 600;
        document.getElementById("menuslider").style.left = `${pos}px`;
        currentimage = 0;
        document.querySelectorAll(".slidersround")[currentimage].classList.add("selected");
    }
});

document.getElementById("left").addEventListener("click", ()=>{
    document.querySelectorAll(".slidersround").forEach((c)=>{
        c.classList.remove("selected");
    })
    console.log(document.getElementById("menuslider").getBoundingClientRect().left);
    if (currentimage > 0) {
        const pos = document.getElementById("menuslider").getBoundingClientRect().left + 300;
        document.getElementById("menuslider").style.left = `${pos}px`;
        currentimage--;
        document.querySelectorAll(".slidersround")[currentimage].classList.add("selected");
    } else if (currentimage <= 0) {
        const pos = document.getElementById("menuslider").getBoundingClientRect().left - 600;
        document.getElementById("menuslider").style.left = `${pos}px`;
        currentimage = 2;
        document.querySelectorAll(".slidersround")[currentimage].classList.add("selected");
    }
})

function moveImage(index) {
   if (index == 1){
    document.getElementById("menuslider").style.left = `0px`;   
    currentimage = 0; 
   } else if (index == 2){
    document.getElementById("menuslider").style.left = `-300px`;
    currentimage = 1;
   } else if (index == 3){
    document.getElementById("menuslider").style.left = `-600px`;
    currentimage = 2;
   }
}

document.querySelectorAll(".slidersround").forEach((b,i)=>{
    b.addEventListener("click", ()=>{
        document.querySelectorAll(".slidersround").forEach((c)=>{
            c.classList.remove("selected");
        })
        b.classList.add("selected");
        let index = i + 1;
        console.log(index);
        moveImage(index);
    })
})