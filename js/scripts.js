// global
const documentEl = $(document);


// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function(){
        
//Smooth Scolling
var $root = $('html, body');
$('#navbar-example a, #read-more-link').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
  }
  return false;
});


//Interval for Glitch Backround Image
const glitch = () => {
  $('#hero_image').addClass('glitch');
  setTimeout( () => $('#hero_image').removeClass('glitch'), 1000);
};

setTimeout( () => { glitch() }, 6000 );
setInterval( () => { glitch() }, 10000 );


//Background Image Effects on Scroll to Section Projects
$(function() {
  let documentEl = $(document);
  let scrollObject1 = {};

  documentEl.on('scroll', () => {      
    if (documentEl.scrollTop() + screen.height > screen.height) {
      scrollObject1.higher = true;
      $('#hero_image').addClass('greyscale').addClass('swing-in-top-fwd').removeClass('swing-in-top-bckw');        
    };  
    if (documentEl.scrollTop() < screen.height - 200) {       
      if (scrollObject1.higher) $('#hero_image').removeClass('swing-in-top-fwd').addClass('swing-in-top-bckw').removeClass('greyscale');        
    };   
  });
});  


//Type Writer Effect for Intro
var _CONTENT_LINE_1 = "Hi, I'm Andreas."; 
var _CONTENT_LINE_2 = "Web Development"; 
var _CONTENT_LINE_3 = "is what I do."; 

var _PART_INDEX_LINE_1 = 0;
var _PART_INDEX_LINE_2 = 0;
var _PART_INDEX_LINE_3 = 0;

var _ELEMENT_LINE_1 = document.querySelector("#text-line-1"); 
var _ELEMENT_LINE_2 = document.querySelector("#text-line-2");
var _ELEMENT_LINE_3 = document.querySelector("#text-line-3");

$('#text-line-2').hide();
$('#text-line-3').hide();

function typeLineOne() { 
  var text =  _CONTENT_LINE_1.substring(0, _PART_INDEX_LINE_1 + 1);
  _ELEMENT_LINE_1.innerHTML = text; 
  _PART_INDEX_LINE_1++;	

  setTimeout ( () => $ ( '#text-line-2' ).show(), 1500 );

  if (_ELEMENT_LINE_1.innerHTML.length >= _CONTENT_LINE_1.length) {
    setTimeout ( () => $('#text-line-1').toggleClass('changed'), 500 );  
    clearInterval(interval);    
    setTimeout ( () => { 
      const interval2 = setInterval ( typeLineTwo, 100 );
      setTimeout ( () => { $ ( '#text-line-2' ).toggleClass ('changed'); clearInterval ( interval2 ) }, 2000 );    
    }, 600 );
    
  }
}; 

function typeLineTwo() {   
	var text =  _CONTENT_LINE_2.substring(0, _PART_INDEX_LINE_2 + 1);
	_ELEMENT_LINE_2.innerHTML = text;
  _PART_INDEX_LINE_2++;

  $('#text-line-3').fadeIn(3500);
  
  if (_ELEMENT_LINE_2.innerHTML.length >= _CONTENT_LINE_2.length) {
    const interval3 = setInterval ( typeLineThree, 500 );
    setTimeout ( () => clearInterval ( interval3 ), 3000 );
  }
};

function typeLineThree() { 
	var text =  _CONTENT_LINE_3.substring(0, _PART_INDEX_LINE_3 + 1);
	_ELEMENT_LINE_3.innerHTML = text;
  _PART_INDEX_LINE_3++;  
};

const interval = setInterval(typeLineOne, 100);


//Delay Display See More Link in Intro Section
$('#read-more-link').hide().delay(6000).fadeIn(400); 


//See More Button Slide out on Scroll down
documentEl.on('scroll', () => {
  if (documentEl.scrollTop() + screen.height - 80 > $('#projects-header').offset().top) $('#read-more-link').addClass('roll-out-blurred-left');
});
  

//Type Writer Effect for Header Projects
const headerEl = document.querySelector("#projects-header");
const headerText = "Projects"; 
let _PART_INDEX_LINE_0 = 0;

function typeHeaderProject() { 
  var text = headerText.substring(0, _PART_INDEX_LINE_0 + 1);
  headerEl.innerHTML = text; 
  _PART_INDEX_LINE_0++;	
};

documentEl.on('scroll.awesome', () => {
  if (documentEl.scrollTop() + screen.height - 80 > $('#projects-header').offset().top) {
    
    const headerProjectInterval = setInterval(typeHeaderProject, 250);
    documentEl.off('scroll.awesome');
    setTimeout ( () => clearInterval ( headerProjectInterval ), 6000 )
  };
});


//Project Fields slide in 
documentEl.on('scroll', () => {
  if (documentEl.scrollTop() > screen.height - 200) {
    
    $('.project-field').show().addClass('slide-in-elliptic-top-fwd');
  };
});
  
  
//Modal has Loader Screen
$('#modal-sliding-puzzle-content').on('load', () => {
  $("#spinner-div").hide();    
});


//Contact Button move down on scroll
let contactButtonElement = $("#contact-button");  
const contactButtonObject = {
  down: false
}

documentEl.on('scroll', () => moveDown());    

const moveDown = () => {
  if (documentEl.scrollTop() > screen.height * 1.25 && contactButtonObject.down === false) {
    contactButtonElement.animate({top: "50%"}, 2000); 
    contactButtonObject.down = true
  };  
}; 


//Contact Button move up on scroll
documentEl.on('scroll', () => moveUp()); 

const moveUp = () => {
  if (documentEl.scrollTop() < screen.height * 1.25 && contactButtonObject.down === true) {
    contactButtonElement.animate({top: "10%"}, 2000); 
    contactButtonObject.down = false
  };  
}; 



//Contact Button open Form
$("#contact-button").on('click', () => $("form").show().addClass("slide-in-elliptic-top-fwd")).on('click', () => $("#contact-button").hide());


//Contact Form//
$("#submit-button").on('click', function() {

  let name = $("#name").val();

  let email = $("#email").val();

  let message = $("#message-box").val();

  if (message==="") {
    $("#message-box").css("border-color", "red");
}

else {

 	if (message!="" && name==="" || email==="") {
 		$("#visible-comment").html("If you wanna leave a message please leave your name and email address too");
 	}

 		else {

 			$("#visible-comment").html("Thank you for leaving a message. We shall get back to you shortly.");
 			$(".form-group-name").hide();

 			$(".form-group-phone").hide();

 			$(".form-group-email").hide();

 			$("#message").hide()

 			$("#submit-button").hide(); 	
}

  return false;
  }
  	
});
  
});

 

 

