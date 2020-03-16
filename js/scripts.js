"use strict";

/* Achtung!

Überarbeitung begonnen am 24.02.2020

Ziel: 
neue Erkenntnisse zu DOM Manipulation sowie asynchronous JS einarbeiten
Abschnitt // Iframes load their content + reveal themselves + see-the-code-buttons appear on click


Teilziel 1:

loading spinner soll erst bei anklicken von project image geladen werden
loading spinner soll dynmaisch durch insertAdjacendHTML eingefügt werden und nicht länger hard coded in index.html sein


Teilziel 2:

loading spinner soll unmittelbar nach fertig Laden des iframes verschwinden
dies soll durch async/await ausgelöst werden nicht länger durch onload - event


Teilziel 3:

project container sollen nicht länger hard coded in index.html sein sondern durch insertAdjacendHTML eingefügt werden. 
dazu müssen



*/


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


    // Iframes load their content + reveal themselves + see-the-code-buttons appear on click on project image

    const webDevProjects = {
        puzzle: {
            name: 'puzzle',
            description: 'This is a Sliding Puzzle coded with React',
            src: 'https://puzzle-react.herokuapp.com/',
            img: './img/react-logo2.png',
            github: 'https://github.com/akoeth-portfolio/sliding-puzzle'
        },

        tic_tac_toe: {
            name: 'tic_tac_toe',
            description: 'This is a multiplayer online version of <br> Tic Tac Toe coded with Node.js',
            src: 'https://tic-tac-toe-web-s.herokuapp.com/',
            img: './img/node-logo.jpg',
            github: 'https://github.com/akoeth-portfolio/tic-tac-toe'
        },

        webshop: {
            name: 'webshop',
            description: 'This is an example webshop coded with <br> Ruby on Rails',
            src: 'https://akoeth-example-webshop.herokuapp.com/',
            img: './img/ruby-logo.png',
            github: 'https://github.com/akoeth-portfolio/webshop'
        }
    };


    const projectArr = Object.keys(webDevProjects).map(i => webDevProjects[i]).reverse();   


    projectArr.forEach(obj => {
        renderProjekt(obj);
        renderReloadButton(obj) //tic-tac-toe has a reload button (unlike the rest of the projects) wich is beeing seperatly inserted into the corresponding project container
    }); 

        
    function renderProjekt (obj) {
        const parent = document.getElementById('projects')

        const project = `
            <div id="${obj.name}-container" class="project-container">      
        
                <div id="${obj.name}-project-image-container" class="project-image-container">
                    <img id="${obj.name}-logo" class="project-image" src="${obj.img}">
                    <span class="project-description">${obj.description}</span>
                </div>        
                
                <div id="${obj.name}-iframe-wrapper" class="iframe-wrapper">           
                    <iframe id="${obj.name}-iframe" class="project-iframe" scrolling="no" ></iframe>             
                </div>            

            </div>   
        
            <button id="see-the-code-button-${obj.name}" class="see-the-code-button btn-lg btn-dark" target="_blank" onclick="window.open('${obj.github}');return false;">visit the GitHub</button>         
        `;
        parent.insertAdjacentHTML('afterend', project)
    };
    

    function renderReloadButton (obj) {
        if (obj.name === 'tic_tac_toe') {
            const parent = document.getElementById('tic_tac_toe-container');         
            
            const button = `<button id="reload-button" type="button" class="reload-button-display-none btn btn-outline-dark"><img src="./img/reload.png"></button>`;
            
            parent.insertAdjacentHTML('afterbegin', button);
        };
    };   
  

    const projectImageVariable = Array.from(document.getElementsByClassName('project-image-container'));


    projectImageVariable.map(projectImageContainer => projectImageContainer.addEventListener("click", event => {
        revealIframe(event);
        renderGitHubButton(event);        
        renderLoadingSpinner(event);        
        loadIframesContent(event);
        removeLoadingSpinner(event);
    }));


    const revealIframe = e => {
        e.currentTarget.classList.add('project-image-hide');  
    };


    const renderGitHubButton = e => {
        const projectName = e.currentTarget.id.split("-")[0];          
        document.querySelector(`#see-the-code-button-${projectName}`).style.display = 'block';
    };        


    const loadIframesContent = e => {
        const projectName = e.currentTarget.id.split("-")[0]; 

        const currentObj = projectArr.filter( obj => {
            if (obj.name === projectName) return obj;            
        });        

        document.querySelector(`#${projectName}-iframe`).src=`${currentObj[0].src}`;      
    };    


    const renderLoadingSpinner = e => {
        const parent = e.currentTarget.parentNode;        
    
        const loader = `
            <div id="spinner-${parent.id}" class="spinner-border" role="status">      
                <span class="fa fa-spinner fa-spin fa-5x text-light"></span>
                <p>loading app...</p>          
            </div> 
        `;
        parent.insertAdjacentHTML('afterbegin', loader)
    };


    const removeLoadingSpinner = e => {            
        const parent = e.currentTarget.parentNode;

        const loader = document.getElementById(`spinner-${parent.id}`);                 

        const iframe = e.currentTarget.nextElementSibling.childNodes[1];        
        
        iframe.addEventListener('load', () => {
            parent.removeChild(loader);            
        });
    };   


    // Tic Tac Toe dynamic iframe height
    window.addEventListener('message', bodyHeight => dynamicIframeHeight(bodyHeight));  

    const dynamicIframeHeight = height => {  
        if (height.data === '376px') document.querySelector('#tic_tac_toe-iframe-wrapper').style.height = '85vw';
        else document.querySelector('#tic_tac_toe-iframe-wrapper').style.height = height.data;  
    };


    // Webshop container horizontally scale up on click
    document.querySelector('#webshop-project-image-container').addEventListener("click", () => {horizontallyScaleUp(); marginZero(); displayIframeWrapperWebShop()});

    const horizontallyScaleUp = () => document.querySelector('#webshop-container').classList.add('scale-up-hor-center');

    const marginZero = () => document.querySelector('#webshop-iframe-wrapper').classList.add('margin-zero');

    const displayIframeWrapperWebShop = () => document.querySelector('#webshop-iframe-wrapper').classList.add('display-webshop-iframe-wrapper');


    // Tic tac toe iframe dynmaically displays reload button in upper left corner if app has fallen asleep durring mobile screen off
    const sendMessagetoApp = () => document.querySelector('#tic_tac_toe-iframe').contentWindow.postMessage('reload-app', '*');

    const removeReloadButton = () => document.querySelector('#reload-button').classList.add('reload-button-display-none');

    window.addEventListener('message', msg => {  
        if (msg.data === 'app-sleeps') {    
            document.querySelector('#reload-button').classList.remove('reload-button-display-none');
            document.querySelector('#reload-button').addEventListener('click', () => {sendMessagetoApp(); removeReloadButton()});
        };
    }); 

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


