var SB = document.getElementById("settingsbutton");
var OL = document.getElementById("overlayer");
var Menu = document.getElementById("menu");
var bh1 = document.getElementById("bh1");
var bh2 = document.getElementById("bh2");
var bh3 = document.getElementById("bh3");
var bh4 = document.getElementById("bh4");
var bh5 = document.getElementById("bh5");
var bh6 = document.getElementById("bh6");
var LS = document.getElementById("leftsided")
var bhh = document.getElementById("bhh")

var MO = false
SB.onclick = function() {
    OL.style.display = "block";
    Menu.style.display = "block";
    bh1.style.display = "block";
    bh2.style.display = "block";
    bh3.style.display = "block";
    bh4.style.display = "block";
    bh5.style.display = "block";
    bh6.style.display = "block";
    bhh.style.display = "block";
    setTimeout(function() {MO = true;console.log("done")}, 300)
}
LS.onmouseover = function() {
    OL.style.display = "block";
    Menu.style.display = "block";
    bh1.style.display = "block";
    bh2.style.display = "block";
    bh3.style.display = "block";
    bh4.style.display = "block";
    bh5.style.display = "block";
    bh6.style.display = "block";
    bhh.style.display = "block";
    setTimeout(function() {MO = true;console.log("done")}, 300)
}

OL.onmouseover = function() {
    if(MO == true) {
      OL.style.display = "none";
      Menu.style.display = "none";
    bh1.style.display = "none";
    bh2.style.display = "none";
    bh3.style.display = "none";
    bh4.style.display = "none";
    bh5.style.display = "none";
    bh6.style.display = "none";
    bhh.style.display = "none";
      MO = false
    }
}

var body = document.getElementById("body");
var BGMD = document.getElementById("BGMD");
var hr1 = document.getElementById("hr1")

var SFBGMD_hoverd = false;
var SFBGMD_hoverd2 = false;
bh6.style.marginBottom = "0px";
bh6.onmouseover = function() {
    SFBGMD_hoverd = true;
    BGMD.style.display = "block";
}
BGMD.onmouseover = function() {
    SFBGMD_hoverd2 = true;
    BGMD.style.display = "block";
}


bh6.onmouseout = function() {
    SFBGMD_hoverd = false;
    setTimeout(function() {if(SFBGMD_hoverd == false && SFBGMD_hoverd2 == false) {
        BGMD.style.display = "none";
    }},5)
}
               
BGMD.onmouseout = function() {
    SFBGMD_hoverd2 = false;
    setTimeout(function() {if(SFBGMD_hoverd == false && SFBGMD_hoverd2 == false) {
        BGMD.style.display = "none";
    }},5)
}

var dark = document.getElementById("darkM")
var light = document.getElementById("lightM")

var hotbar = document.getElementById("hotbar")

dark.onclick = function() {
    dark.style.backgroundColor = "rgb(120,120,120)";
    light.style.backgroundColor = "rgb(60,60,60)";
    
    body.style.backgroundColor = "rgb(66,66,66)";
    hotbar.style.backgroundColor = "rgb(88,88,88)";
    menu.style.backgroundColor = "rgb(66,66,66)";
    
}

light.onclick = function() {
    light.style.backgroundColor = "rgb(180, 180, 180)";
    dark.style.backgroundColor = "rgb(240, 240, 240)";
    
    body.style.backgroundColor = "rgb(240,240,240)";
    hotbar.style.backgroundColor = "rgb(255,255,255)";
    menu.style.backgroundColor = "rgb(240,240,240)";
}