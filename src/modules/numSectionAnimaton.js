import { visiblityElem,animate } from "/modules/helpers";

export const numSectionAnimation = () => {
	const numSection = document.querySelector('.num-section');
	const year=() => {
		const today = new Date;
		return today.getFullYear();
	}
	const data = {
		num1: 2000,
		num3:year()-2008,
		num2: 60,
		num4: 1500
	};


	window.addEventListener('scroll', () => {
		if (visiblityElem(numSection)) {
			const num = numSection.querySelectorAll('.num');
			num.forEach(element => {
				element.classList.add('animated');
				const span = element.querySelector('span');
				const id = span.id;
				
					if (Object.keys(data).includes(id)) { 
						span.innerHTML = data[id];
						animate({
							duration: 1000,
							timing(timeFraction) {
							  return timeFraction;
							},
							draw(progress) {
								span.innerHTML = Math.round(((progress*1000) * (data[id]*1000))/1000000);
							}
						});
					}
				
				
			});
		}
	});
	

};