export const createDots = () => {
	const portfolioDot = document.querySelector('.slick-dots');
	const portfolioItems = document.querySelectorAll('.item');
	
	const createElem = () => {
		const el = document.createElement('li');
		const btn = document.createElement('button');
		el.append(btn);
		return el;
	};
	const appendClass = (elem, classElem) => {
		elem.classList.add(classElem);
	};
	const createDotsCollection = (sliders, parentDots) => {
		sliders.forEach((el, index) => {
			const dot = createElem();
			if (index === 0) {
				appendClass(dot, 'slick');
				appendClass(dot, 'slick-active');
			} else {
				appendClass(dot, 'slick');
			}
			parentDots.append(dot);
		});
	};
	createDotsCollection(portfolioItems, portfolioDot);
};
