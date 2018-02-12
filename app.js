var menu_exposed = false;

var move_menu = function(state) {
	if (state === false) {
		$('.menu').animate({left:'0px'}, 200);
		$('body').animate({left:'285px'}, 200);
		//$('.main-content').animate({opacity:'0.5'}, 200);
	} else {
		$('.menu').animate({left: '-285px'}, 200);
		$('body').animate({left:'0px'}, 200);
		//$('.main-content').animate({opacity:'1.0'}, 200);
	}
};



var main = function() {
	$('.icon-menu').click(function() {
		move_menu(menu_exposed);

		menu_exposed = !menu_exposed;
	});

	$('.icon-close').click(function() {
		move_menu(menu_exposed);

		menu_exposed = false;
	});
};

$(document).ready(main);