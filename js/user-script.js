$(document).ready(function() {

	//nav
	var list = $('.top-nav ul'),
	    link = $('.nav-button');

	link.click(function() {
		list.toggle();
		link.toggleClass('active');
		return false;
	});
	list.on('click', 'li', function () {		
		list.hide();
		link.removeClass('active');
	});


	//scroll
	$(".top-nav ul a").click(function(){
	      var selected = $(this).attr('href');	
	      $.scrollTo(selected, 700);		
	   });
});