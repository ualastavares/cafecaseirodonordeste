const bgVideo = document.getElementById('bgVideo');

bgVideo.addEventListener('loadedmetadata',()=>{

bgVideo.currentTime = 3;

});
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load',()=>{

gsap.to('.loader',{
opacity:0,
duration:1.5,
delay:1,
onComplete:()=>{
document.querySelector('.loader').style.display='none';
}
});

gsap.from('.hero-text h1',{
y:120,
opacity:0,
duration:1.5
});

gsap.from('.hero-text p',{
y:80,
opacity:0,
duration:1.5,
delay:.2
});

gsap.from('.product',{
scale:.5,
opacity:0,
duration:1.8,
stagger:.2
});

});

gsap.utils.toArray('.card').forEach(card=>{

gsap.from(card,{
scrollTrigger:{
trigger:card,
start:'top 85%'
},
y:100,
opacity:0,
duration:1
});

});

const tradicional = document.querySelector('.tradicional');
const extraforte = document.querySelector('.extraforte');

function swapProducts(){

if(tradicional.classList.contains('active')){

tradicional.classList.remove('active');
tradicional.classList.add('back');

extraforte.classList.remove('back');
extraforte.classList.add('active');

}else{

extraforte.classList.remove('active');
extraforte.classList.add('back');

tradicional.classList.remove('back');
tradicional.classList.add('active');

}

}

setInterval(swapProducts,6000);

document.addEventListener('mousemove',(e)=>{

const x = (window.innerWidth/2 - e.pageX)/40;
const y = (window.innerHeight/2 - e.pageY)/40;

gsap.to('.products',{
x:x,
y:y,
duration:1
});

});
