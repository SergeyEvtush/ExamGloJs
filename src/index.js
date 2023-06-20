import { sendForm } from "./modules/forms";
import { modal } from "./modules/modal";

modal();

sendForm({
	formId: 'form[name=form-callback]',
},"https://jsonplaceholder.typicode.com/posts");
sendForm({
	formId: 'form[name=form-feedback]',
},"https://jsonplaceholder.typicode.com/posts");