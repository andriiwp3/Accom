document.addEventListener('DOMContentLoaded', function (e) {
	$(window).on('load', function () {
			$('.preloader').find('.preloader__loader').fadeOut();
			$('.preloader').delay(350).fadeOut();
			$('body').removeClass('lock');
	});
	@@include('animate_on_scroll.js')
	@@include('dynamic_adapt.js')
	@@include('jq-start.js')
	setTimeout(function () {
		@@include('script.js')
		@@include('jquery.animateNumber.min.js')
		@@include('jquery.inputmask.bundle.min.js')
		@@include('forms.js')
		@@include('slick.min.js')
		@@include('sliders.js')
		@@include('custom.js')
	}, 1500);
});