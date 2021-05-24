//Javascript
$('#Sunday').click(function(){
    $('body').css('background-color','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#Monday').click(function(){
    $('body').css('background-color','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#tuesday').click(function(){
    $('body').css('background-color','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#wensday').click(function(){
    $('body').css('background-color','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#thursday').click(function(){
    $('body').css('background-image','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#friday').click(function(){
    $('body').css('background-color','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})
$('#Saturday').click(function(){
    $('body').css('background-image','')
    $('.accordion-body').css('background-color','#006BEE')
    $('h3').css('color','white')
    $('p').css('color','white')
})


//everything below here is intended for temperature icons within the accordion

var temps = document.getElementsByClassName("temp2");
for (var i = 0; i < temps.length; i++) {

   var temperimg = document.createElement("img");
   temperimg.classList.add('tempimg');
   
   var tempvalue = parseInt(temps[i].innerHTML.substring(0, 3));
   temps[i].textContent.replace(/f/g, '<span>F</span>');
   
   
 
  
if(tempvalue > 0){
    temperimg.src = "images/tempicons/iceicon.png";
}

   if(tempvalue >= 70){
       temperimg.src = "images/tempicons/sflameicon.png";
   }
   if(tempvalue > 90){
       temperimg.src = "images/tempicons/flameicon.png";
   }
   temps[i].appendChild(temperimg);
}
