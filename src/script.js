"use strict";

$(document).ready(function() {
	$(".navbar-burger").click(() => {
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
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
   const a = document.body.scrollTop;
   const b = document.body.scrollHeight - document.body.clientHeight;
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
