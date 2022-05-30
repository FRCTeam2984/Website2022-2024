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