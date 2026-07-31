function scrollToJournal(){

document
.querySelector("#journal")
.scrollIntoView({
behavior:"smooth"
});

}



const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});


document
.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));




// floating particles

const particles=document.querySelector(".particles");


for(let i=0;i<40;i++){

let p=document.createElement("span");

p.style.left=Math.random()*100+"%";
p.style.animationDelay=Math.random()*10+"s";

particles.appendChild(p);

}