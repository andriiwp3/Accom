let menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		let activeMenuLink = document.querySelector('.menu__link.active');

		e.preventDefault();
		link.classList.add('active');
		activeMenuLink.classList.remove('active');
	});
});

let whatDoWeTakeSpollers = document.querySelectorAll('.spollers-what-do-we-take__title.spoller');
let spollersWhatDoWeTakeImages = document.querySelectorAll('.images-what-do-we-take__img');

whatDoWeTakeSpollers.forEach(function (spoller, i) {
	spoller.setAttribute('data-wdwt-spoller-index', i);

	spoller.addEventListener('click', function (e) {
		let spollerWhatDoWeTakeItem = spoller.closest('.spollers-what-do-we-take__item');

		if (!spollerWhatDoWeTakeItem.classList.contains('active')) {
			let activeSpollerWhatDoWeTakeItem = document.querySelector('.spollers-what-do-we-take__item.active');
			let activeSpollerWhatDoWeTakeImg = document.querySelector('.images-what-do-we-take__img.active');

			if (activeSpollerWhatDoWeTakeItem) {
				activeSpollerWhatDoWeTakeItem.classList.remove('active');
			}
			spollerWhatDoWeTakeItem.classList.add('active')
			activeSpollerWhatDoWeTakeImg.classList.remove('active');
			spollersWhatDoWeTakeImages[spoller.dataset.wdwtSpollerIndex].classList.add('active');
		} else {
			spollerWhatDoWeTakeItem.classList.remove('active');
		}
	});
});