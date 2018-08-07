$(document).ready(function () {

	$('.js-header-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		fade: true,
		autoplay: true
	});

	$(".menu").click(function() {
		$(".menu__open").toggleClass("active");
	});
});
