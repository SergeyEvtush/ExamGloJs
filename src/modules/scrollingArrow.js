import { visiblityElem } from "/modules/helpers";

export const scrollingArrow = () => {
	const arrow = document.querySelector('.up');
	const stepsSection = document.querySelector('.steps-section');
	arrow.style.display = 'none';
// Запускаем функцию при прокрутке страницы
	window.addEventListener('scroll', () => {
		if (visiblityElem(stepsSection)) {
			arrow.style.display = 'block';
			arrow.addEventListener('click', () => { 
				window.scrollTo({
					top: 0,
					behavior: "smooth"
			  });
			});

		} else { 
			arrow.style.display = 'none';
		}
	
 });
 
 // А также запустим функцию сразу. А то вдруг, элемент изначально видно
 visiblityElem (stepsSection);
 }