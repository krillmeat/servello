var debug;

window.onload = function(){
    init();
}

function init(){
    console.log("%cInitializing...","color:#999");

    setupDebug();
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