/*=====================================================
					Video Button
======================================================*/
// To open a video window in browswer
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

/*=====================================================
					NAVIGATION
======================================================*/
// Show and hide transparant navigation bar
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() < 65) {
			// hide navigation bar
			$("nav").removeClass("simplydonate-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			// show navigation bar
			$("nav").addClass("simplydonate-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});

// Smooth scrolling
$(function() {
	$("a.smooth-scroll").click(function(event) {
		event.preventDefault();
		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(section).offset().top - 135
		}, 1200, "easeInOutExpo");
	});
});

// Close collapsed menu on tap
$(function(){
	$(".navbar-collapse ul li a").on("click touch", function() {
		$(".navbar-toggle").click();
	});
});

/*=====================================================
					ABOUT US
======================================================*/
$(document).ready(function() {
	// animate on scroll
	new WOW().init();
});

/*=====================================================
				   Our Gallery
======================================================*/
$(function() {
	$("#gallery").magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery:{
			enabled:true
		}
	});
});

/*=====================================================
				   Our Team
======================================================*/
$(function() {
	$("#team-members").owlCarousel( {
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoPlayHoverPause: true,
		responsive: {
			0 : {
				items: 1
			},
			400 : {
				items: 2
			},
			768 : {
				items: 3
			}
		}
	});
});

/*=====================================================
				   Stats
======================================================*/
$(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 7500
	});
});

/*=====================================================
				  Volunteer
======================================================*/
$(function() {
	$("#volunteer-comment").owlCarousel( {
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true
	});
});

/*=====================================================
				  Map
======================================================*/
var map = new GMaps({
	div: '.map',
	lat: 45.507804,
	lng: -73.577453,
	zoom: 15
});

map.addMarker({
	lat: 45.507804,
	lng: -73.577453,
	icon: "./img/mapicon.png",
	title: 'Lima',
	infoWindow: {
		content: '<p>This is our clothing drop of location (3580 Avenue Lorne, Montréal, QC H2X 2A7).</p> <p>You must text (489)-439-8010 24-hours in advance to drop of any clothing you would like to donate!</p>'
	}
});
