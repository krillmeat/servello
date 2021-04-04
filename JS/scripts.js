var debug, heroBlobs;

window.onload = function(){
    init();
}

function init(){
    console.log("%cInitializing...","color:#999");

    setupDebug();
    document.querySelector("button.mobile-menu").addEventListener("click", toggleMenu);

    document.querySelector("button.cart").addEventListener("click",toggleCart);

    // COOL MOUSE
    heroBlobs = document.querySelectorAll(".hero .blob");
    document.getElementById("hero")?.addEventListener("mousemove",handleCoolMouse,true);
    document.getElementById("hero")?.addEventListener("mouseleave",clearBlobs);
}

/**
 * SETUP DEBUG
 * ----------------------------------------------------------------------
 * Creates an instance of the Debug Class
 * ----------------------------------------------------------------------
 */
 function setupDebug(){
  debug = new DEBUGTOOL(false,document.querySelector("section .content-wrap"),[12,12,12]);
}

function toggleMenu(e){
  let nav = document.querySelector("nav.hidden-side");
  nav.dataset.state = nav.dataset.state === "inactive" ? "active" : "inactive";
}



// POTENTIAL COOL MOUSE EFFECT ON HERO
function handleCoolMouse(e){
  let t = document.getElementById("hero");

  let hCenter = t.offsetWidth / 2;
  let vCenter = t.offsetHeight / 2;
  let deltaX = (e.clientX - t.offsetLeft) - hCenter;
  let deltaY = (e.clientY - t.offsetTop) - vCenter;

  if(deltaX > 200){
     deltaX = 200;
  } else if(deltaX < -200){
    deltaX = -200;
  }

  if(deltaY > 200){
    deltaY = 200
  } else if(deltaY < -200){
    deltaY = -200
  }

  for(let i = 0; i < heroBlobs.length; i++){
    let translate = `translate(${-1*(deltaX/4)*heroBlobs[i].dataset.offset}px,${-1*(deltaY/4)*heroBlobs[i].dataset.offset}px)`;
    heroBlobs[i].style.transform = translate;
  }
}

function clearBlobs(e){
  for(let i = 0; i < heroBlobs.length; i++){
    heroBlobs[i].style.transform = "translate(0px,0px)";
  }
}


function toggleCart(e){
  let popupCart = document.querySelector("nav.popup-cart");
  popupCart.dataset.state = popupCart.dataset.state === 'show' ? 'hide' : 'show';
}