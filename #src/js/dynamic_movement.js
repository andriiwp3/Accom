 


"use strict";

(function () {
	let dmOriginalPositions = [];
	let dmElements = document.querySelectorAll('[data-dm]');
	let dmElementsArray = [];
	let dmMatchMedia = [];

	//* Заполняем массивы
	if (dmElements.length > 0) {
		let number = 0;
		for (let index = 0; index < dmElements.length; index++) {
			const dmElement = dmElements[index];
			const dmMove = dmElement.getAttribute('data-dm');
			if (dmMove != '') {
				const dmArray = dmMove.split(',');
				const dmPlace = dmArray[1] ? dmArray[1].trim() : 'last';
				const dmCondition = dmArray[2] ? dmArray[2].trim() : '';
				const dmDestination = document.querySelector('.' + dmArray[0].trim());
				if (dmArray.length > 0 && dmDestination) {
					dmElement.setAttribute('data-dm-index', number);
					//Заполняем массив первоначальных позиций
					dmOriginalPositions[number] = {
						"parent": dmElement.parentNode,
						"index": indexInParent(dmElement)
					};
					//Заполняем массив элементов 
					dmElementsArray[number] = {
						"element": dmElement,
						"destination": document.querySelector('.' + dmArray[0].trim()),
						"place": dmPlace,
						"condition": dmCondition
					}
					number++;
				}
			}
		}
	}
	//* Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}

	if ()
	if (dmElementsArray[0].condition) {

	}

}()); 

(function() {
	// body
}())