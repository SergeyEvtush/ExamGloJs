export const accordeon = () => { 
	const accordeon = document.querySelector('.accordeon');
	const accordeonItems = accordeon.querySelectorAll('.element');

	accordeon.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target.closest('.accordeon')) { 
			console.log('click');
			accordeonItems.forEach(el => { 
				if (el.classList.contains('active')) {
					el.querySelector('.element-content').style.display = 'none';
					el.classList.remove('active');
				 }
			});
			if (target.closest('.element')) { 
			target.parentElement.classList.add('active');
			target.parentElement.querySelector('.element-content').style.display = 'block';
			}
			
		}
	 });

};