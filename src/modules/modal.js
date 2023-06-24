import { findModal,addRemoveStyle,fillInput } from "/modules/helpers";

export const modal = () => {
	const modalBtns = document.querySelectorAll('.fancyboxModal');
	const owerlayModal = document.querySelector('.modal-overlay');
	


	modalBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			const id = target.href.slice(target.href.indexOf('#'));
			
			if (id) {
				const modal = document.querySelector(id);
				if (target.dataset) {
					const inputs = modal.querySelectorAll('input');
					fillInput(inputs,target.dataset.application);
				}

				findModal(modal,window.innerWidth);
				addRemoveStyle([modal, owerlayModal], 'block');

				window.addEventListener('click', (e) => {
					if(e.target.closest('.modal-close')||e.target.closest('.modal-overlay')){
						addRemoveStyle([modal, owerlayModal] ,'none');
					}
					if (e.target.closest('a.fancyClose')) {
						const inputs = modal.querySelectorAll('input');
						fillInput(inputs, target.dataset.application);
						const form = modal.querySelector('form');
						if (!form.hasAttribute('data-error')) { 
							addRemoveStyle([modal, owerlayModal] ,'none');
						}
					 }
				
				});
			}
		});
	});
	
};