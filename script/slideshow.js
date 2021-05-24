
let clouds = false;

let rain = false;

let olay = document.getElementById("overlayimgtxt");

let snowing = false;

let hueshifted = document.getElementById("slide");

let ddescrip = document.getElementById("wdescrip");
let wimg = document.getElementById("icontxt")
var slide1 = document.getElementById("todayslide");

let txtime = document.getElementById("timenow")

let weather = Math.floor(Math.random()* 4);
console.log(weather);

document.addEventListener('DOMContentLoaded', (event) => {
    
    
  wimg.src = "images/todayslide/icons/icon"+curweather+".png";
    

    



    
var dt = new Date();

//var time = dt.getHours();

//let airtemp  = Math.floor(Math.random() * (99 - 60 + 1)) + 60;
console.log(airtemp);









  
  let dark = -(Math.pow(((curtime-12) * .08333), 2)) + 1;
  hueshifted.style.filter = "brightness("+dark+") hue-rotate("+shift+")";
  console.log(dark);



  ddescrip.innerHTML = wdescrip;
  txtime.innerHTML = showtime+" <sup>(MST)</sup>";
  wdescrip.innerHTML = wdescrip; //displays the weather description established by the index's script
  
  if(overlaycheck == true){
    olay.src = "images/todayslide/overlays/o"+curweather+".png";
  }else{
    olay.src = "";
  }

//console.log("Dark val: "+dark);







   
  })





