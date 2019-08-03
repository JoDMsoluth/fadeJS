const bgImg = document.getElementById("bg");
let opacity = Number(window.getComputedStyle(bgImg).getPropertyValue("opacity"));
let isFade = false;

opacity = 1;


const BG_NUMBER = 10;

function setBg() {
  console.log("setBG");
  const randomBG = Math.ceil(Math.random()*BG_NUMBER);
  bgImg.src = `img/${randomBG}.jpg`;
}

function hide () {

}

function reveal () {
}

function fadeOut() {
  const outFade = setInterval(function() {
    if(opacity>0.2 && isFade === false){
      opacity = opacity-0.1;
      bgImg.style.opacity = opacity;
      console.log(bgImg.style.opacity);
    }
    else{
      isFade=true;
      opacity=0.1;
      bgImg.style.opacity = opacity;
      clearInterval(outFade);
      console.log("out clear");
    }
  },40);
}


function fadeIn() {
  const inFade = setInterval(function() {
      if(opacity<0.9 && isFade){
        opacity = opacity+0.1;
        bgImg.style.opacity = opacity;
        console.log(bgImg.style.opacity);
      }
      else {
        isFade=false;
        opacity = 1;
        bgImg.style.opacity = opacity;
        clearInterval(inFade);
        console.log(bgImg.style.opacity);
        console.log("in clear");
      }
  }, 40);
}

function fade() {
  fadeOut();
  setTimeout(fadeIn,400);
}

function changeBg() {
  const random = setInterval(function()
  {
    setBg();
    setTimeout(fade,2600);
  }, 3000);
}

function callRandomBG() {
  setBg();
  setTimeout(fade, 2600);
  changeBg();
}


function init() {
  callRandomBG();
}

init();