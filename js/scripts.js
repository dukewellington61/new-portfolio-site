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
    }, 2500, function () {
      window.location.hash = href;
    });
  }
  return false;
});

//No fixed navbar on width 598xpx - 768px

document.addEventListener('scroll', () => removeNavbar());

const removeNavbar = () => {
  if (window.screen.width >=598 && window.screen.width <= 768) {
    $(window).scrollTop() > 10 ? document.querySelector('#navbar-example').classList.add('remove-navbar') : document.querySelector('#navbar-example').classList.remove('remove-navbar');  
  };
};

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
      $('#hero_image').addClass('greyscale').addClass('skew-background-img').removeClass('unskew-background-img');        
      scrollObject1.higher = true;
    };  
    if (documentEl.scrollTop() < screen.height - 200) {       
      if (scrollObject1.higher) $('#hero_image').removeClass('skew-background-img').addClass('unskew-background-img').removeClass('greyscale');        
    };   
  });
});  


//Type Writer Effect for Intro
var _CONTENT_LINE_1 = "Hi, I'm Andreas."; 
var _CONTENT_LINE_2 = "&ltWeb Development&gt"; 
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
      const interval2 = setInterval ( typeLineTwo, 90 );
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


// Delay Display See More Link in Intro Section
$('#read-more-link').hide().delay(6000).fadeIn(400); 


// See More Button Slide out on Scroll down
documentEl.on('scroll', () => {
  if (documentEl.scrollTop() + screen.height > screen.height + 100) $('#read-more-link').addClass('roll-out-blurred-left');
});
  

//Type Writer Effect for Header Projects
const headerEl = document.querySelector("#projects-header");
const headerText = "&ltProjects&gt"; 
let _PART_INDEX_LINE_0 = 0;

function typeHeaderProject() { 
  var text = headerText.substring(0, _PART_INDEX_LINE_0 + 1);
  headerEl.innerHTML = text; 
  _PART_INDEX_LINE_0++;	
};

const someKindaFn = () => {
  const headerProjectInterval = setInterval(typeHeaderProject, 250);
  setTimeout ( () => clearInterval ( headerProjectInterval ), 6000 )
};

if (screen.width >= 799 && screen.width <= 992) setTimeout ( () => someKindaFn(), 6000);    

else {
  documentEl.on('scroll.awesome', () => {
    if (documentEl.scrollTop() + screen.height - 80 > $('#projects-header').offset().top) {
      
      const headerProjectInterval = setInterval(typeHeaderProject, 250);
      documentEl.off('scroll.awesome');
      setTimeout ( () => clearInterval ( headerProjectInterval ), 6000 )
    };
  });
};




//Project Fields slide in 
documentEl.on('scroll', () => {
  if (documentEl.scrollTop() > screen.height - 200) {
    
    $('.project-field').show().addClass('slide-in-elliptic-top-fwd');
  };
});

//Iframes reveal themselves on click and see-the-code-buttons appear
let projectImageVariable = Array.from(document.getElementsByClassName('project-image-container'));

projectImageVariable.map(projectImageContainer => projectImageContainer.addEventListener("click", event => hideOrShowElement(event)));

const hideOrShowElement = e => {
  e.currentTarget.classList.add('project-image-hide');  
  if (e.currentTarget.id.includes('puzzle')) document.querySelector('#see-the-code-button-puzzle').classList.add('see-the-code-button-show');
  if (e.currentTarget.id.includes('tic-tac-toe')) document.querySelector('#see-the-code-button-tic-tac-toe').classList.add('see-the-code-button-show'); 
  if (e.currentTarget.id.includes('webshop')) document.querySelector('#see-the-code-button-webshop').classList.add('see-the-code-button-show');  
};

  
//Iframe has Loading Spinner

$('#puzzle-iframe').on('load', function(){
  $('.project-spinner').addClass('hide-spinner')
});

const addClassAfterWindowLoad = () => {  
  if (!$('.project-spinner').hasClass('hide-spinner')) $('.project-spinner').addClass('hide-spinner');
};

$(window).on('load', () => addClassAfterWindowLoad());


//gist open and close

const gistState = {
  puzzleShow: false,
  ticTacToeShow: false
};

document.querySelector("#see-the-code-button-puzzle").addEventListener('click', e => gistState.puzzleShow == false ? showGist(e) : hideGist(e));
document.querySelector("#see-the-code-button-tic-tac-toe").addEventListener('click', e => gistState.ticTacToeShow == false ? showGist(e) : hideGist(e));

const showGist = (e) => {
  if (e.currentTarget.id.includes('puzzle')) {
    document.querySelector('#puzzle-gist-wrapper').classList.add('show-gist');
    gistState.puzzleShow = true;
  };

  if (e.currentTarget.id.includes('tic-tac-toe')) {
    document.querySelector('#tic-tac-toe-gist-wrapper').classList.add('show-gist');
    gistState.ticTacToeShow = true;
  };  

  e.currentTarget.innerHTML ='hide the code';
};

const hideGist = (e) => {
  if (e.currentTarget.id.includes('puzzle')) {
    document.querySelector('#puzzle-gist-wrapper').classList.remove('show-gist');
    gistState.puzzleShow = false;
  };

  if (e.currentTarget.id.includes('tic-tac-toe')) {
    document.querySelector('#tic-tac-toe-gist-wrapper').classList.remove('show-gist');
    gistState.ticTacToeShow = false;
  };  

  e.currentTarget.innerHTML ='show the code';
};

});


// Email form disappears when message has been sent and a response text appears on the screen (the mailing stuff is handled by https://formsubmit.co/)

let testVar1 = "";
let testVar2 = "";

window.onload = () => {
  if (performance.navigation.type > 0) { //performance.navigation.type counts the number of reloads. If the page is left and then reentered via redirect it starts afresh.
    testVar1 = "some other value";
  }
  else {
    testVar1 = JSON.stringify('https://formsubmit.co/dukewellington61@googlemail.com');
    testVar2 = JSON.stringify(document.referrer); //document.referrer remembers the page from which my page was accessed (i.e. the formsubmit page) 
    if (testVar2 === testVar1) {
      document.querySelector('form').classList.add('hide-form'); 
      document.querySelector('#message-field-header').innerHTML = "Thank you for your message. I will be in touch very shortly.";
    };
  };
};










