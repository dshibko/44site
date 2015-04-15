$(document).ready(function() {

	var link = $('.nav-button');

	link.click(function() {
		$('body').toggleClass('menu-open');
		link.toggleClass('active');
	});

	$('.bg-overlay, .navigation .close-btn').on('click', function(){
		$('body').removeClass('menu-open');
		link.removeClass('active');
	});

	//scroll
	/*$(".top-nav ul a").click(function(){
	      var selected = $(this).attr('href');	
	      $.scrollTo(selected, 700);		
	});*/

	/*e-mail popup */
	$('.email-section').on('click', function(){
		$('.email-popup').show();
	});

	$('.email-popup .close-button').on('click', function(e){
		e.preventDefault();
		$('.email-popup').hide();
	});

	/*find-us popup */
	$('.find-us-section').on('click', function(){
		$('.find-us-popup').show();
	});

	$('.find-us-popup .close-button').on('click', function(e){
		e.preventDefault();
		$('.find-us-popup').hide();
	});
	
	var $slider = $('#custom-application-slider');


	if($slider.length) {
		$slider.slick({
	  		dots: true,
	  		autoplay: true,
	  		arrows: false,
	  		draggable: false,
	  		pauseOnHover: false,
	  		autoplaySpeed: 3000,
	  		speed: 600
	  	});
	}
  
});



