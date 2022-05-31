"use strict";

$(document).ready(function() {
   console.log($("#dropdown").style.display);
   $(document).on('click','.topbar-burger', function(e) {
      console.log('hi!');
      if ($(".topbar-dropdown").style.display === "none") {
         $(".topbar-dropdown").style.display = "flex";
       } else {
         $(".topbar-dropdown").style.display = "none";
       }
    });
	/*
	$(".join-link").on("click", function(event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 200)
	});

	$(".sponsor-link").on("click", function(event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 200);
	});
   */
});


const readMore = document.getElementById("read-more");
$(document.body).on('touchmove', () => {resizeReadMore()});
$(document).ready(() => {resizeReadMore()});
$(window).scroll(() => {resizeReadMore()});
$(window).resize(() => {resizeReadMore()});

function resizeReadMore() {
   const a = document.documentElement.scrollTop;
   const b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   // Im actually fucking malding rn. What fucking nerd JS developer calls the root node a documentELement. 
   // I thought that was a placeholder for an actual document element like 'body' or 'footer'. What an absolute fucking nonce. 
   // End your career IMMEDIATELY and give me $500 JS coins or I will uhh... uh.. auauahhhhhh
   const c = a / b;
   console.log(a);
	if (b === 0 || c > 0.4) {
      // readMore.style.display = "none";
      readMore.style.opacity = 0;
   } else {
      // readMore.style.display = "inherit";
      readMore.style.opacity = 1;
   }
}
