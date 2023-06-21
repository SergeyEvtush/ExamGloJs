import Swiper, { Navigation, Pagination } from 'swiper';

console.log(document.querySelector('.swiper'));

export const sliderSwiper = () => {
	return  new Swiper('.swiper', {
		speed: 400,
		spaceBetween: 100,
	 });
 }
 