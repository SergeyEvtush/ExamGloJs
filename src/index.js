import { sendForm } from "./modules/forms";
import { modal } from "./modules/modal";
import {  mainMenu } from "./modules/mainMenu";
import {  scrollingArrow } from "./modules/scrollingArrow";


mainMenu();
scrollingArrow();
modal();
sendForm({
	formId: 'form[name=form-callback]',
},"https://jsonplaceholder.typicode.com/posts");
sendForm({
	formId: 'form[name=form-feedback]',
},"https://jsonplaceholder.typicode.com/posts");