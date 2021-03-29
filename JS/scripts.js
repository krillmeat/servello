var debug;

window.onload = function(){
    init();
}

function init(){
    console.log("%cInitializing...","color:#999");

    setupDebug();
    document.querySelector("button.mobile-menu").addEventListener("click", toggleMenu);
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