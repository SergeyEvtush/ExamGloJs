import { validations,validationForm,sendData,findModal,addRemoveStyle } from "/modules/helpers";
//https://jsonplaceholder.typicode.com/posts

export const sendForm = ({ formId, someElem = [] },url) => {
	const form = document.querySelector(formId);
	const formContainer = document.querySelector(`#${formId.slice(formId.indexOf('-')+1,formId.indexOf(']'))}`);
	const statusBlock = document.querySelector('#responseMessage');
	const modalContent = document.querySelector('.modal-content');
	
	const message = {
		loadText: 'Load...',
		errorText: 'Error...',
		successText: 'Success'
	};
	

	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		const bool = true;
		const val = validationForm(formElements, validations);
		
		
		const nameInputs = {
			"fio": "Фамилия Имя",
			"tel":"Номер телефона"
		}
		formData.forEach((key, val) => {
			formBody[key] = val;
		});

		someElem.forEach(el => {
			const element = document.getElementById(el.id)
			if (el.type === "block") {
				formBody[el.id] = element.textContent;
			}
			else if (el.type === "input") {
				formBody[el.id] = element.value;
			}
		});
		if (statusBlock) {
			const messageBtn = document.querySelector('.fancyClose');
			const owerlayModal = document.querySelector('.modal-overlay');
			messageBtn.addEventListener('click', (e) => { 
				e.preventDefault();
				addRemoveStyle(statusBlock, owerlayModal, 'none');
				
			});
			
		 }
		
		

		if (val.some(el => el.hasOwnProperty(bool))) {
			const arrayErrors = val.filter(el => el.hasOwnProperty(bool));
			findModal(statusBlock, window.innerWidth);
			modalContent.innerHTML = '';
			statusBlock.style.display = 'block';
			modalContent.classList.add('error');
			form.style.display = 'none';
			arrayErrors.forEach(elem => { 
				modalContent.insertAdjacentHTML('afterbegin', ` Ошибка ввода данных в input ${elem[bool]==="fio"?nameInputs["fio"]:nameInputs["tel"]}`);
				setTimeout(() => {
					statusBlock.style.display = 'none';
					form.style.display = 'block';
					modalContent.classList.remove('error');
					modalContent.innerHTML = '';
				}, 2000);
			}); 
			
		} else {  
			sendData(url, formBody, modalContent, message);
			formContainer.style.display = 'none';
			findModal(statusBlock, window.innerWidth);
			modalContent.innerHTML = '';
			statusBlock.style.display = 'block';
			modalContent.classList.add('error');
		 } 
		
		formElements.forEach(el => {
			el.value = '';
		});
	};

	try {
		if (!form) {
			throw new Error('Ошибка нет формы');
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault();
				submitForm();
		});
		
	} catch (error) {
		console.log(error.message);
	}
};