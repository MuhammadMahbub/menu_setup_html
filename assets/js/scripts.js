$(document).ready(function(){
	$(".header-item-right span").click(function(){
	$(".header-item-right").toggleClass("hhhh");
		$(".header-bottom").toggleClass("open");
	});
});
	
$(".header-menu ul li ul").parent("li").addClass("m");
$('.header-menu ul li a').on('click', function(e) {
	var element = $(this).parent('li');
	if (element.hasClass('open')) {
		element.removeClass('open');
		element.find('li').removeClass('open');
		element.find('ul').slideUp("swing");
	}
	else {
		element.addClass('open');
		element.children('ul').slideDown("swing");
		element.siblings('li').children('ul').slideUp("swing");
		element.siblings('li').removeClass('open');
		element.siblings('li').find('li').removeClass('open');
		element.siblings('li').find('ul').slideUp("swing");
	}
});		

