import {createDots} from '/modules/dots';
import Swiper from 'swiper/bundle';

export const slider = (sliderBlockClass, slidesClass) => {
	
	createDots();
	const sliderBlock = document.querySelector(sliderBlockClass);
	const slides = sliderBlock.querySelectorAll(slidesClass);
	const dots =  sliderBlock.querySelectorAll('.slick');
	const timeInterval = 3000;
	const activeSliderClass = 'item-active';
	const dotsActiveClass = 'slick-active';
	let currentSlide = 0;
	let interval;
	
	const prevSlide = (elems,index,strClass) => { 
		elems[index].classList.remove(strClass);
	};

	const nextSlide = (elems,index,strClass) => { 
		elems[index].classList.add(strClass);
	};

	const startSlide = (time = 2000) => {
					
		interval=setInterval(autoSlide,time);
	 };

	const autoSlide = () => {
		prevSlide(slides,currentSlide,activeSliderClass);
		prevSlide(dots,currentSlide,dotsActiveClass);
		currentSlide++;
		if (currentSlide >= slides.length) { 
			currentSlide = 0;
		}
		nextSlide(slides,currentSlide,activeSliderClass);
		nextSlide(dots,currentSlide,dotsActiveClass);
	};
	
	const stopSlide = () => {
		clearInterval(interval);
	};
	const createSlider = () => {

		sliderBlock.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			
			
			if (!target.closest('.slick,.slick-arrow')) {

				return;
			}
			prevSlide(slides, currentSlide, activeSliderClass);
			prevSlide(dots, currentSlide, dotsActiveClass);
			if (target.closest('#arrow-right')) {
				currentSlide++;
			}
			else if (target.closest('#arrow-left')) {
				currentSlide--;
			}
			else if (target.classList.contains('slick')) {
				dots.forEach((el, index) => {
					if (target === el) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			nextSlide(slides, currentSlide, activeSliderClass);
			nextSlide(dots, currentSlide, dotsActiveClass);
		});
		sliderBlock.addEventListener('mouseenter', (e) => {
			if (e.target.matches('.slick,.top-slider-btn')) {
				stopSlide();
			}
		}, true);
		sliderBlock.addEventListener('mouseleave', (e) => {
			if (e.target.matches('.slick,.top-slider-btn')) {
				startSlide(timeInterval);
			}
		}, true);
		startSlide(timeInterval);
	};
	
	if (sliderBlock === null || sliderBlock === "undefined" || slides === null || slides === "undefined"||slides.length===0) {
		console.log(sliderBlock);
		console.log(slides);
		return
	} else {
		createSlider();
	 }
};

export const sliderSwiper = ({sliderClass = '', leftArrow = '', rightArrow = '', slidesPerviev=1}) => {
	return new Swiper(sliderClass, {
		direction: 'horizontal',
		loop:true,
		grabCursor:true,
		slidesPerView: 1,
		speed: 400,
		spaceBetween: 100,
		navigation: {
			nextEl: rightArrow,
			prevEl: leftArrow,
		},
		breakpoints: {
			768: {
				slidesPerView: slidesPerviev,
				spaceBetween: 40
			},
			464: {
				slidesPerView: slidesPerviev-1,
				spaceBetween: 40
			},
			327: {
				slidesPerView:slidesPerviev-2,
				spaceBetween: 40
			}
		}
	 });
}

export const sliderNums = () => { 
	return new Swiper('.row-swiper', {
		direction: 'horizontal',
		loop: true,
		grabCursor: true,
		slidesPerView: 4,
		speed: 400,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 40
			},
			464: {
				slidesPerView: 2,
				spaceBetween: 40
			},
			327: {
				slidesPerView:1,
				spaceBetween: 40
			}
		}
	});
}

