/*
 * Menu
*/
let menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		let activeMenuLink = document.querySelector('.menu__link.active');

		e.preventDefault();
		link.classList.add('active');
		activeMenuLink.classList.remove('active');
	});
});



/*
* Spollers in section «What do we take»
*/
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



/*
	* Functionality for the "See More" button
*/
let limitedBlocks = document.querySelectorAll('._limited');

limitedBlocks.forEach(function (block) {
	let limLimit = block.getAttribute('data-limited-height');
	let limArr = limLimit.split(',');
	let limDesk = limArr[0] ? limArr[0].trim() : '50';
	let limMob = limArr[1] ? limArr[1].trim() : '30';
	let limBreakpoint = limArr[2] ? limArr[2].trim() : '550.98';
	let limMargin = limArr[3] ? limArr[3].trim() : '30';
	let limColOnDesk = limArr[4] ? limArr[4].trim() : '2';

	limCheckMedia(block, limDesk, limMob, limBreakpoint, limMargin, limColOnDesk);
});

// We get all the buttons on the page.
let btnSeeMore = document.querySelectorAll('.btn-see-more');

btnSeeMore.forEach(function (btn) {

	// We get a section that needs to be limited in height.
	let limBlock = btn.parentElement.querySelector('._limited');
	let limLimit = limBlock.getAttribute('data-limited-height');

	if (limLimit != '') {
		let limArr = limLimit.split(',');
		let limDesk = limArr[0] ? limArr[0].trim() : '50';
		let limMob = limArr[1] ? limArr[1].trim() : '30';
		let limBreakpoint = limArr[2] ? limArr[2].trim() : '550.98';
		let limMargin = limArr[3] ? limArr[3].trim() : '30';
		let limColOnDesk = limArr[4] ? limArr[4].trim() : '2';

		if (limArr.length > 0) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();

				// Add classes with predefined styles to the button and change the text.
				btn.classList.add('lock');
				btn.classList.toggle('active');
				changeTextOnSeeMoreBtn(btn);

				// We add classes to the necessary block and call the function that will limit it by height. Also, after the animation we remove the class that prohibits clicking on the button.
				limBlock.classList.toggle('active');

				limCheckMedia(limBlock, limDesk, limMob, limBreakpoint, limMargin, limColOnDesk);
				setTimeout(() => {
					btn.classList.remove('lock');
				}, 1500);
			})
		}
	}
});

window.addEventListener('resize', function (e) {
	let limLimit = limitedBlocks[0].getAttribute('data-limited-height');
	let limArr = limLimit.split(',');
	let limDesk = limArr[0] ? limArr[0].trim() : '50';
	let limMob = limArr[1] ? limArr[1].trim() : '30';
	let limBreakpoint = limArr[2] ? limArr[2].trim() : '550.98';
	let limMargin = limArr[3] ? limArr[3].trim() : '30';
	let limColOnDesk = limArr[4] ? limArr[4].trim() : '2';

	limCheckMedia(limitedBlocks[0], limDesk, limMob, limBreakpoint, limMargin, limColOnDesk);
});

function limCheckMedia(block, limitedHeightDesk = 50, limitedHeightMob = 30, limitedBreakpoint = 550.98, limitedMargin = 30, limitedColOnDesk = 2) {
	let blockChildren = [].slice.call(block.children);

	if (window.matchMedia('(max-width: ' + limitedBreakpoint + 'px').matches) {
		let childrenFullHeight = 0;

		blockChildren.forEach(function (child) {
			childrenFullHeight += child.getBoundingClientRect().height + +limitedMargin;
		});

		blockLimit(block, childrenFullHeight + 'px', childrenFullHeight / 100 * limitedHeightMob + 'px');
	}

	if (!window.matchMedia('(max-width: ' + limitedBreakpoint + 'px').matches) {
		let childrenFullHeight = 0;

		blockChildren.forEach(function (child) {
			childrenFullHeight += child.getBoundingClientRect().height + +limitedMargin;
		});

		childrenFullHeight /= +limitedColOnDesk;

		blockLimit(block, childrenFullHeight + 'px', childrenFullHeight / 100 * limitedHeightDesk + 'px');
	}
}

function blockLimit(block, blockFullHeight, limitedHeight) {
	// Limiting the block.
	if (!block.classList.contains('active')) {
		block.style.height = limitedHeight;
		return;
	}

	// Returning the block to full height.
	if (block.classList.contains('active')) {
		block.style.height = blockFullHeight;
		return;
	}
}

function changeTextOnSeeMoreBtn(btn) {
	if (btn.classList.contains('active')) {
		btn.textContent = 'Смотреть меньше';
		return;
	}
	btn.textContent = 'Смотреть все услуги';
}



let clientCardLinks = document.querySelectorAll('.card-client__testimonial-link');

clientCardLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let card = link.closest('.card-client');
		card.classList.toggle('active');
	})
});



let header = document.querySelector('header');

window.addEventListener('scroll', function (e) {
	if (window.scrollY > header.getBoundingClientRect().top + 100) {
		header.classList.add('scrolled');
		return;
	}
	header.classList.remove('scrolled');
});
