let menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function(link) {
	link.addEventListener('click', function (e) {
		let activeMenuLink = document.querySelector('.menu__link.active');

		e.preventDefault();
		link.classList.add('active');
		activeMenuLink.classList.remove('active');
	});
});