//SLIDERS
/* if ($('.slider-in-num').length > 0) {
	$('.slider-in-num').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		autoplaySpeed: 6500,
		vertical: true,
		verticalSwiping: true,
		appendDots: $('.in-num__dots'),
		dotsClass: 'dots-in-num__list',
		customPaging: function (slider, i) {
			return '<button type="button" role="tab" aria-selected="true">0' + (i + 1) + '</button>';
		}
	});
} */
if ($('.cases-testimonials').length > 0) {
	$('.cases-testimonials').slick({
		autoplay: true,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		autoplaySpeed: 6500,
		appendArrows: $('.testimonials__arrow'),
		prevArrow: `<button type="button" class="testimonials__prev arrow__prev"><svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.252587 3.85836C0.0573246 4.05362 0.0573246 4.37021 0.252587 4.56547L3.43457 7.74745C3.62983 7.94271 3.94641 7.94271 4.14167 7.74745C4.33694 7.55219 4.33694 7.2356 4.14167 7.04034L1.31325 4.21191L4.14167 1.38349C4.33694 1.18822 4.33694 0.871642 4.14167 0.67638C3.94641 0.481118 3.62983 0.481118 3.43457 0.67638L0.252587 3.85836ZM25.6061 3.71191L0.60614 3.71191V4.71191L25.6061 4.71191V3.71191Z" /></svg></button>`,
		nextArrow: `<button type="button" class="testimonials__next arrow__next"><svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5648 3.85836C24.7601 4.05362 24.7601 4.37021 24.5648 4.56547L21.3828 7.74745C21.1876 7.94271 20.871 7.94271 20.6757 7.74745C20.4805 7.55219 20.4805 7.2356 20.6757 7.04034L23.5042 4.21191L20.6757 1.38349C20.4805 1.18822 20.4805 0.871642 20.6757 0.67638C20.871 0.481118 21.1876 0.481118 21.3828 0.67638L24.5648 3.85836ZM-0.000854492 3.71191L24.2113 3.71191V4.71191L-0.000854492 4.71191L-0.000854492 3.71191Z" /></svg></button>`
	});
	if ($('.cases-testimonials .slick-track') && $('.cases-testimonials .slick-list')) {
		$('.cases-testimonials .slick-track').addClass('cases-testimonials__track');
		$('.cases-testimonials .slick-list').addClass('cases-testimonials__list')
	}
} 



if ($('.cards-clients').length > 0) {
	$('.cards-clients').slick({
		autoplay: true,
		dots: false,
		arrows: true,
		slidesToShow: 4,
		autoplaySpeed: 4000,
		appendArrows: $('.clients__arrow'),
		prevArrow: `<button type="button" class="clients__prev arrow__prev"><svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.252587 3.85836C0.0573246 4.05362 0.0573246 4.37021 0.252587 4.56547L3.43457 7.74745C3.62983 7.94271 3.94641 7.94271 4.14167 7.74745C4.33694 7.55219 4.33694 7.2356 4.14167 7.04034L1.31325 4.21191L4.14167 1.38349C4.33694 1.18822 4.33694 0.871642 4.14167 0.67638C3.94641 0.481118 3.62983 0.481118 3.43457 0.67638L0.252587 3.85836ZM25.6061 3.71191L0.60614 3.71191V4.71191L25.6061 4.71191V3.71191Z" /></svg></button>`,
		nextArrow: `<button type="button" class="clients__next arrow__next"><svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5648 3.85836C24.7601 4.05362 24.7601 4.37021 24.5648 4.56547L21.3828 7.74745C21.1876 7.94271 20.871 7.94271 20.6757 7.74745C20.4805 7.55219 20.4805 7.2356 20.6757 7.04034L23.5042 4.21191L20.6757 1.38349C20.4805 1.18822 20.4805 0.871642 20.6757 0.67638C20.871 0.481118 21.1876 0.481118 21.3828 0.67638L24.5648 3.85836ZM-0.000854492 3.71191L24.2113 3.71191V4.71191L-0.000854492 4.71191L-0.000854492 3.71191Z" /></svg></button>`,
		responsive: [
			{
				breakpoint: 1182,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 1.7
				}
			},
			{
				breakpoint: 550.98,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	if ($('.cards-clients .slick-track') && $('.cards-clients .slick-list')) {
		$('.cards-clients .slick-track').addClass('cards-clients__track');
		$('.cards-clients .slick-list').addClass('cards-clients__list')
	}
}


/*
<button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="0" aria-selected="true">3</button>

// SLIDER ON MOBILE
if($('.reviews-object__items').length>0){
		let slider=$('.reviews-object__items');
	function reviews_object(){
		slider.slick({
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next ic-arrow"></button>',
			prevArrow:'<button type="button" class="slick-prev ic-arrow"></button>',
			responsive: [{
				breakpoint: 9999,
				settings:'unslick'
			},{
				breakpoint: 768,
				settings: {

				}
			}]
		});
	}
		reviews_object();
	$(window).resize(function(event) {
			var w=$(this).outerWidth();
		if(w<768 && !slider.hasClass('slick-initialized')){
			reviews_object();
		}
	});
}


//SLICK FIX
function slick_fix(slider){
	//SET OPTIONS
	//$('.progress__slider').slick('slickSetOption',{autoplay:false},true);
		var sltoshow=slider.get(0).slick.options.slidesToShow;
		var all=slider.find('.slick-slide').length;
		var allactive=slider.find('.slick-slide').not('.slick-cloned').length;
	slider.on('beforeChange', function(event,slick,currentSlide,nextSlide){
		if(nextSlide==0){
				var ind=all-allactive;
			if(sltoshow==1){
				slider.find('.slick-slide').eq(ind).addClass('active');
			}else{
				sliderfix(slider,ind);
			}
		}
		if(nextSlide==allactive-1){
			if(sltoshow==1){
				slider.find('.slick-slide').eq(0).addClass('active');
			}else{
				sliderfix(slider,sltoshow-1);
			}
		}
		//DIRECTION
		if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
			direction = 'prev';
		}else if(nextSlide > currentSlide || (currentSlide === (slick.$slides.length - 1) && nextSlide === 0 )) {
			direction = 'next';
		}else{
			direction = 'prev';
		}
		//console.log(direction);
	});
	slider.on('afterChange', function(event, slick, currentSlide){
		slider.find('.slick-slide').removeClass('active');
	});
	function sliderfix(slider,v){
		for (var i=0; i < sltoshow; i++) {
				var n=v+i;
			slider.find('.slick-slide').eq(n).addClass('active');
		}
	}
}
*/
/*
if($('.newsmodule-slider').length>0){
	//Опция
	$('.newsmodule-slider').get(0).slick.options.slidesToShow

	$('.newsmodule-items-item').click(function(event) {
		$('.newsmodule-items-item').removeClass('active');
		$(this).addClass('active');
		$('.newsmodule-slider').slick('goTo',$(this).index());
	});
	$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);

	$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.newsmodule-navigator-info span').eq(0).html(nextSlide+1);
	});
	$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
		$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
	});
	$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
		$('.newsmodule-slider').slick('slickPrev');
	});
	$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
		$('.newsmodule-slider').slick('slickNext');
	});
}
*/