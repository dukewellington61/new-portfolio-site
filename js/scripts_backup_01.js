/* Original --> unverändert seit min 30.09.2020 */

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

//No fixed navbar on width 598px - 768px
document.addEventListener('scroll', () => removeNavbar());

const removeNavbar = () => {
  if (window.screen.width >=598 && window.screen.width <= 768) {
    $(window).scrollTop() > 10 ? document.querySelector('#navbar-example').classList.add('remove-navbar') : document.querySelector('#navbar-example').classList.remove('remove-navbar');  
  };
};


//Interval for Glitch Backround Image
// const glitch = () => {
//   $('#hero_image').addClass('glitch');
//   setTimeout( () => $('#hero_image').removeClass('glitch'), 1000);
// };

// setTimeout( () => { glitch() }, 6000 );
// setInterval( () => { glitch() }, 10000 );


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

//Different image on mobile portrait

// window.onload = () => {
//   if (window.screen.width >=300 && window.screen.width <= 400) document.querySelector('#intro-img').src="./img/me-2_small.png";
//   if (window.screen.width >=400) document.querySelector('#intro-img').src="./img/me-2.png";
// };

// window.onresize = () => {
//   if (window.screen.width >=300 && window.screen.width <= 400) document.querySelector('#intro-img').src="./img/me-2_small.png";
//   if (window.screen.width >=400) document.querySelector('#intro-img').src="./img/me-2.png";
// };


//Type Writer Effect for Intro

const typeWriter = () => {  

  var _CONTENT_LINE_1 = "Hi, I'm Andreas." + '<br>' + "&ltWeb Development&gt" + '<br>' + "is what I do."; 

  var _PART_INDEX_LINE_1 = 0;

  var _ELEMENT_LINE_1 = document.querySelector("#text-line-1"); 

  function typeLineOne() { 
    var text =  _CONTENT_LINE_1.substring(0, _PART_INDEX_LINE_1 + 1);
    _ELEMENT_LINE_1.innerHTML = text; 
    _PART_INDEX_LINE_1++;	   
  }; 

  const interval = setInterval(typeLineOne, 100);
}

typeWriter();


// Delay Display See More Link in Intro Section
$('#read-more-link').hide().delay(6000).fadeIn(400); 


// See More Button Slide out on Scroll down
documentEl.on('scroll', () => {
  if (documentEl.scrollTop() + screen.height > screen.height + 100) $('#read-more-link').addClass('roll-out-blurred-left');
});
  

// Type Writer Effect for Header Projects
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


// Tic Tac Toe container height increases + vertically scales up on clicking the start image or clicking on reconnect button respectively and decreases + vertically scales down on idle socket timeout  
// document.querySelector('#tic-tac-toe-logo').addEventListener("click", () => {ticTacToeContainerIncreasedHeight(); ticTacToeIframeWrapperIncreasedHeight(); vericallyScaleUp()});
// document.querySelector('#project-description-tic-tac-toe').addEventListener("click", () => {ticTacToeContainerIncreasedHeight(); ticTacToeIframeWrapperIncreasedHeight(); vericallyScaleUp()});


// window.addEventListener('height', message => {  
  
//   if (message.data[0] === 'disconnect') {   
//     vericallyScaleDown();       
//   };

//   if (message.data[0] === 'reconnect') {        
//     vericallyScaleUp('reconnect');
//   };

// });

// const ticTacToeContainerIncreasedHeight = () => document.querySelector('#tic-tac-toe-container').classList.add('tic-tac-toe-container-increased-height');

// const ticTacToeIframeWrapperIncreasedHeight = () => document.querySelector('#tic-tac-toe-iframe-wrapper').classList.add('tic-tac-toe-iframe-wrapper-increased-height');

// const vericallyScaleUp = val => {

//   if (!val) {
//     document.querySelector('#tic-tac-toe-container').classList.remove('scale-down-ver-top');
//     document.querySelector('#tic-tac-toe-container').classList.add('scale-up-ver-center');
//     document.querySelector('#tic-tac-toe-container').style.transition = "all 1s ease-in-out";
//     document.querySelector('#tic-tac-toe-container').style.height = "36em";  
//   }

//   else {
//     document.querySelector('#tic-tac-toe-container').style.transition = "all 1s ease-in-out";
//     document.querySelector('#tic-tac-toe-container').style.height = "36em";  
//   };
// };

// const vericallyScaleDown = () => {
//   document.querySelector('#tic-tac-toe-container').classList.remove('scale-up-ver-center');
//   document.querySelector('#tic-tac-toe-container').style.transition = "all 1s ease-in-out";
//   document.querySelector('#tic-tac-toe-container').style.height = "85vw";  
// };


// Tic Tac Toe dynamic iframe height
window.addEventListener('message', bodyHeight => dynamicIframeHeight(bodyHeight));  

const dynamicIframeHeight = height => {  
  if (height.data === '376px') document.querySelector('#tic-tac-toe-iframe-wrapper').style.height = '85vw';
  else document.querySelector('#tic-tac-toe-iframe-wrapper').style.height = height.data;  
};


// Webshop container horizontally scale up on click
document.querySelector('#webshop-project-image-container').addEventListener("click", () => {horizontallyScaleUp(); marginZero(); displayIframeWrapperWebShop()});

const horizontallyScaleUp = () => document.querySelector('#webshop-container').classList.add('scale-up-hor-center');

const marginZero = () => document.querySelector('#iframe-wrapper-webshop').classList.add('margin-zero');

const displayIframeWrapperWebShop = () => document.querySelector('#iframe-wrapper-webshop').classList.add('display-iframe-wrapper-webshop');


// Iframes load their content + reveal themselves + see-the-code-buttons appear on click
let projectImageVariable = Array.from(document.getElementsByClassName('project-image-container'));

projectImageVariable.map(projectImageContainer => projectImageContainer.addEventListener("click", event => {revealIframe(event); loadIframesContent(event)}));

const revealIframe = e => {
  e.currentTarget.classList.add('project-image-hide');  
  if (e.currentTarget.id.includes('puzzle')) document.querySelector('#see-the-code-button-puzzle').classList.add('see-the-code-button-show');
  if (e.currentTarget.id.includes('tic-tac-toe')) document.querySelector('#see-the-code-button-tic-tac-toe').classList.add('see-the-code-button-show'); 
  if (e.currentTarget.id.includes('webshop')) document.querySelector('#see-the-code-button-webshop').classList.add('see-the-code-button-show');  
};

const loadIframesContent = e => {
  if (e.currentTarget.id.includes('puzzle')) document.querySelector('#puzzle-iframe').src="https://puzzle-react.herokuapp.com/";
  if (e.currentTarget.id.includes('tic-tac-toe')) document.querySelector('#tic-tac-toe-iframe').src="https://tic-tac-toe-web-s.herokuapp.com/";
  // if (e.currentTarget.id.includes('webshop')) document.querySelector('#webshop-iframe').src="https://duke-wellington-example-app.herokuapp.com/";
};

  
// Iframes have loading spinner
// $('#puzzle-iframe').on('load', function(){
//   $('#puzzle-spinner-div').addClass('hide-puzzle-spinner');
// });

// const addClassAfterWindowLoad = () => {  
//   if (!$('#puzzle-spinner-div').hasClass('hide-spinner')) $('#puzzle-spinner-div').addClass('hide-spinner');
// };

// $(window).on('load', () => addClassAfterWindowLoad());

$('#puzzle-iframe').on('load', function(){
  $('#puzzle-spinner-div').addClass('hide-spinner');
});

$('#tic-tac-toe-iframe').on('load', function(){
  $('#tic-tac-toe-spinner-div').addClass('hide-spinner');
});

$('#webshop-iframe').on('load', function(){
  $('#webshop-spinner-div').addClass('hide-spinner');
});


// Tic tac toe iframe has permanent reload button
// document.querySelector('#reload-button').addEventListener('click', () => document.querySelector('#tic-tac-toe-iframe').contentWindow.postMessage('reload-app', '*'));


// Portfolio page is receiving ping from tic tac toe app every second --> if ping stops reload button in upper left corner is beeing displayed 

// const pingTimeObj = {}

// window.addEventListener('message', msg => {
//   if (msg.data === 'ping') {
//     let currentPingTime = new Date().toLocaleTimeString();        
//     pingTimeObj.time = currentPingTime;
//     console.log(pingTimeObj);
//   };
// }); 

// Tic tac toe iframe dynmaically displays reload button in upper left corner if app has fallen asleep durring mobile screen off
const sendMessagetoApp = () => document.querySelector('#tic-tac-toe-iframe').contentWindow.postMessage('reload-app', '*');

const removeReloadButton = () => document.querySelector('#reload-button').classList.add('reload-button-display-none');

window.addEventListener('message', msg => {  
  if (msg.data === 'app-sleeps') {    
    document.querySelector('#reload-button').classList.remove('reload-button-display-none');
    document.querySelector('#reload-button').addEventListener('click', () => {sendMessagetoApp(); removeReloadButton()});
  };
}); 


// Gist open and close
// const gistState = {
//   puzzleShow: false,
//   ticTacToeShow: false
// };

// document.querySelector("#see-the-code-button-puzzle").addEventListener('click', e => gistState.puzzleShow == false ? showGist(e) : hideGist(e));
// document.querySelector("#see-the-code-button-tic-tac-toe").addEventListener('click', e => gistState.ticTacToeShow == false ? showGist(e) : hideGist(e));

// const showGist = (e) => {
//   if (e.currentTarget.id.includes('puzzle')) {
//     document.querySelector('#puzzle-gist-wrapper').classList.add('show-gist');
//     gistState.puzzleShow = true;
//   };

//   if (e.currentTarget.id.includes('tic-tac-toe')) {
//     document.querySelector('#tic-tac-toe-gist-wrapper').classList.add('show-gist');
//     gistState.ticTacToeShow = true;
//   };  

//   e.currentTarget.innerHTML ='hide the code';
// };

// const hideGist = (e) => {
//   if (e.currentTarget.id.includes('puzzle')) {
//     document.querySelector('#puzzle-gist-wrapper').classList.remove('show-gist');
//     gistState.puzzleShow = false;
//   };

//   if (e.currentTarget.id.includes('tic-tac-toe')) {
//     document.querySelector('#tic-tac-toe-gist-wrapper').classList.remove('show-gist');
//     gistState.ticTacToeShow = false;
//   };  

//   e.currentTarget.innerHTML ='show the code';
// };

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


