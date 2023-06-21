export const createDots = () => {
	const portfolioDot = document.querySelector('.top-slider-dots');
	const portfolioItems = document.querySelectorAll('.item');
	portfolioDot.computedStyleMap.cssText = `
	position: absolute;
	bottom: 20px;
	width: 100%;
	margin: 20px auto 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	z-index: 5;
	`;
	const createElem = () => {
		const el = document.createElement('li');
		return el;
	}
	const appendClass = (elem, classElem) => {
		elem.classList.add(classElem);
	}
	const createDotsCollection = (sliders, parentDots) => {
		sliders.forEach((el, index) => {
			const dot = createElem();
			if (index === 0) {
				appendClass(dot, 'dot');
				appendClass(dot, 'dot-active');

			} else {
				appendClass(dot, 'dot');
			}
			parentDots.append(dot);
		});
		
	};
	createDotsCollection(portfolioItems, portfolioDot);
};
