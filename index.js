let currentimage = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    //setInterval(slideshow, 3000);
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


let firstx;
let secondx;
let pos;

document.getElementById("menuslider").addEventListener("touchstart", (e)=>{
    firstx = e.changedTouches[0].clientX;
    console.log(firstx);
})

document.getElementById("menuslider").addEventListener("touchend", (e)=>{
    if (pos >= -150) {
        document.getElementById("menuslider").style.left = `${0}px`;
    } else {
        document.getElementById("menuslider").style.left = `${-300}px`;
    }
    /*else if ( pos > -450) {
        document.getElementById("menuslider").style.left = `${-300}px`;
    }*/
})

document.getElementById("menuslider").addEventListener("touchmove", (e)=>{
    let offsetmove = abs(e.changedTouches[0].clientX - firstx);
    if (e.changedTouches[0].clientX > firstx) {
        console.log("swiping right");
        pos = document.getElementById("menuslider").getBoundingClientRect().left + offsetmove;
        pos = pos + 20;
        console.log(pos);
        document.getElementById("menuslider").style.left = `${pos}px`;
    } else {
        console.log("swiping left");
        pos = document.getElementById("menuslider").getBoundingClientRect().left - offsetmove;
        document.getElementById("menuslider").style.left = `${pos}px`;
    }
})

function abs(number) {
    if (number < 0){
        return -1 * number;
    } else {
        return number;
    }
}
