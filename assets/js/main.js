$(document).ready(function(){
	// toggle button
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')

	});
	// sticky navbar less padding
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>=200){
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		}
		else{

			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');

		}	
	});
	
	// smoothscroll
	$('.nav-item a, .header-link, #back-to-top').click(function(link){
		link.preventDefault();

		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 25
		},3000);

	})

	// back-to-top
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>= 400){
			$('#back-to-top').addClass('scrollTop');
		} else{
			$('#back-to-top').removeClass('scrollTop');
		}	
	})


	// slideshow
	let images = new Array('assets/images/makeup/makeup.jpg','assets/images/makeup/makeup.jpg','assets/images/makeup/makeup.jpg');
	
	showslides();
	let slideIndex = 0;
	function showslides(){
		if (slideIndex >= images.length){slideIndex = 0;}
		$('#header')
		.css('background-image', 'url("'+images[slideIndex++]+'")')
		.fadeIn(500, function(){
			setTimeout(showslides, 3000);
		});
	
	};
	// ripples

	// $("header, .info").ripples({
 //  		dropRadius: 25,
 //  		perturbance: 0.7,
	// });
});