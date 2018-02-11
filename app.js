var main = function() {
	$('.main-body').click(function() {
		//alert('body clicked');

		$('.menu').animate({left: '0px'}, 300);
		$('body').animate({left:'285px'}, 300);
	});

	$('.icon-close').click(function() {
		$('.menu').animate({left: '-285px'}, 300);
		$('body').animate({left:'0px'}, 300);
	});
};

$(document).ready(main);