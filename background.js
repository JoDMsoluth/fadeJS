const bgImg = document.getElementById("bg");
let opacity = Number(window.getComputedStyle(bgImg).getPropertyValue("opacity"));
let isFade = false;

opacity = 1;


const BG_NUMBER = 10;

function setBg() {
  const randomBG = Math.ceil(Math.random()*BG_NUMBER);
  bgImg.src = `img/${randomBG}.jpg`;
}

function fadeOut() {
  const outFade = setInterval(function() {
    if(opacity>0.2 && isFade === false){
      opacity = opacity-0.1;
      bgImg.style.opacity = opacity;
    }
    else{
      isFade=true;
      opacity=0.1;
      bgImg.style.opacity = opacity;
      clearInterval(outFade);
    }
  },40);
}


function fadeIn() {
  const inFade = setInterval(function() {
      if(opacity<0.9 && isFade){
        opacity = opacity+0.1;
        bgImg.style.opacity = opacity;
      }
      else {
        isFade=false;
        opacity = 1;
        bgImg.style.opacity = opacity;
        clearInterval(inFade);
      }
  }, 40);
}

function fade() {
  fadeOut();
  setTimeout(setBg,400);
  setTimeout(fadeIn,400);
}

function changeBg() {
  const random = setInterval(fade, 3360);
}

function callRandomBG() {
  setBg();
  changeBg();
}

callRandomBG();
