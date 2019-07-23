
let works1 = [
  {
    title: "example pic one",
    pic: "img/ARA_01.png"
  },
  {
    title: "example pic two",
    pic: "img/ARA_02.png"
  },
  {
    title: "example pic three",
    pic: "img/ARA_03.png"
  },
  {
    title: "example pic four",
    pic: "img/ARA_04.png"
  }
];





for(var i = 0; i < works1.length; ++i ) {	
  		$("#work1").append(
  			'<div class="col-xs-12 col-sm-6 col-md-3"><a class= "work1_img"><img class="img-fluid" id="work1_png" src="'+ works1[i].pic +'"><span class="info"><p class="proj-title">'+ works1[i].title +'</p></span></a></div>');

  		let images = $("#work1 .img-fluid");

		if ([i]%2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		}

			else {
				$(images[i]).css("border", "2px solid salmon");
			}


  		}; //end of loop

  		// hover caption--show/hide image caption
  		$(".work1_img").mouseenter(function() {
 		$(".info",this).show().css('z-index', 1).css("background-color", "rgba(0, 0, 0, 0.7)").css("width","336").css("position", "absolute").css("text-align", "center").css("left", 0);}).mouseleave( function() {$(".info",this).hide();})	

  // 		$(window).resize(function(){
		// if ($(window).width() > 360){	
		// do something here
	
  		// hover caption--size image
 		$(".info").mouseenter(function() {
 		$("#work1_png",this).css("position","relative").css("z-index",1).css("-webkit-transform","scale(2)").css("transform","scale(2)");});

		$(".info").mouseleave(function() {
		$("#work1_png",this).css("position","relative").css("z-index",0).css("-webkit-transform","scale(1)").css("transform","scale(1)");});

		// hover image--size image
		$(".work1_img").mouseenter(function() {
 		$("#work1_png",this).css("position","relative").css("z-index",1).css("-webkit-transform","scale(2)").css("transform","scale(2)").css("transition", "2s ease-in-out");});

		$(".work1_img").mouseleave(function() {
		$("#work1_png",this).css("position","relative").css("z-index",0).css("-webkit-transform","scale(1)").css("transform","scale(1)");});
		// };	
		// });

// i=-1;

// for(let numberImg of works2){
//   		$("#work2").append('<div class="col-xs-12 col-sm-6 col-md-3"><img src="'+ numberImg +'" class="img-fluid"></div>');

// 		let images = $("#work2 .img-fluid");

// 		i++;

// 		if ([i]%2 === 0) {
// 			$(images[i]).css("border", "2px solid DodgerBlue");
// 		}

// 			else {
// 				$(images[i]).css("border", "2px solid salmon");
// 			}
// }