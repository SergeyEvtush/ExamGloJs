export const modal = () => {
	const modalBtns = document.querySelectorAll('.fancyboxModal');
	const owerlayModal = document.querySelector('.modal-overlay');
	const width = window.innerWidth;
	const addRemoveStyle = (el,el2, style) => {
		el.style.display = style;
		el2.style.display = style;
	};

	modalBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			const id = target.href.slice(target.href.indexOf('#'));
			if (id) {
				const modal = document.querySelector(id);
				if ((modal.getBoundingClientRect().x + (+(window.getComputedStyle(modal).width.slice(0, -2)) / 2)) < ((width / 2) - 14)) {
					modal.style.cssText = `
					position:fixed;
					top:20%;
					left:${((width / 2) - ((window.getComputedStyle(modal).width.slice(0, -2)) / 2))}px;
					z-index:999;`;
				}
				addRemoveStyle(modal, owerlayModal, 'block');
				
				window.addEventListener('click', (e) => {
					if(e.target.closest('.modal-close')||e.target.closest('.modal-overlay')){
						addRemoveStyle(modal, owerlayModal, 'none');
					}
				});
			}
		});
	});
	
	
};