import { sendForm } from "./modules/forms";
import { modal } from "./modules/modal";
import {  mainMenu } from "./modules/mainMenu";
import {  scrollingArrow } from "./modules/scrollingArrow";
import {  slider,sliderSwiper } from "./modules/slider";
import {  accordeon } from "./modules/accordeon";



mainMenu();
scrollingArrow();
modal();
sendForm({
	formId: 'form[name=form-callback]',
}, "https://jsonplaceholder.typicode.com/posts");

sendForm({
	formId: 'form[name=form-feedback]',
}, "https://jsonplaceholder.typicode.com/posts");

sendForm({
	formId: 'form[name=form-application]',
}, "https://jsonplaceholder.typicode.com/posts");

slider('.top-slider', '.item');

sliderSwiper({
	sliderClass: '.services-elements',
	leftArrow: '.arrow-left',
	rightArrow: '.arrow-right',
	slidesPerviev: 3
});
accordeon({
	accordeonClass:'.accordeon',
	accordeonitemsCollectionClass:'.element',
	visibilityClass:'active',
	contentClass:'.element-content'
});