export const accordeon = ({accordeonClass,accordeonitemsCollectionClass,visibilityClass,contentClass}) => { 
	const accordeon = document.querySelector(accordeonClass);
	const accordeonItems = accordeon.querySelectorAll(accordeonitemsCollectionClass);

	accordeon.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target.closest(accordeonClass)) { 
			console.log('click');
			accordeonItems.forEach(el => { 
				if (el.classList.contains(visibilityClass)) {
					el.querySelector(contentClass).style.display = 'none';
					el.classList.remove(visibilityClass);
				 }
			});
			if (target.closest(accordeonitemsCollectionClass)) { 
			target.parentElement.classList.add(visibilityClass);
			target.parentElement.querySelector(contentClass).style.display = 'block';
			}
			
		}
	 });

};