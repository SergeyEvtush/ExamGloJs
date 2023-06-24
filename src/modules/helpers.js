export const animate = ({ timing, draw, duration }) => {

	let start = performance.now();
 
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;
 
		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);
 
		draw(progress); // отрисовать её
 
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
 
	});
};
export const validations = {
	"tel": (elem) => {
		let bool;
		if (/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(elem.value) && elem.value !== '') { //валидация на номера телефона только чисел
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"user_email": (elem) => {
		let bool;
		if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g.test(elem.value) && elem.value !== '') { //валидация на ввод email
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"fio": (elem) => {
		let bool;
		if (/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"message": (elem) => {
		let bool;
		if (/[^а-яА-Я]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только кирилицы
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"isNumber": (elem) => {
	
		if (!/[^\d]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел
			isError(elem, false);
		} else {
			isError(elem, true);
		}
	}
	
};
export const validationForm = (formInputs, functions) => {
	const arr = [];
	formInputs.forEach(el => {
		if (functions.hasOwnProperty(el.name)) {
			const obj = {};
			obj[functions[el.name](el)] =el.name ;
			arr.push(obj);
		}
	});
	console.log(arr);
	return arr;
};
export const isError = (elem, bool) => {
	const message = {
		errorMessage: "bad validation",
		succesMessage: "good validation"
	};

	if (bool === true) {
		elem.classList.add('iserror');
		elem.value = message.errorMessage;
		setTimeout(()=>{elem.value = ''}, 1000);
		console.log(message.errorMessage);
		
	} else {
		if (elem.classList.contains('iserror')) {
			elem.classList.remove('iserror');
			console.log(message.succesMessage);
		}
		console.log(message.succesMessage);
		
	}
	return bool;
};
export const scrollingToView = (targetElement, scrollOptions) => {
	const elem = document.querySelector(`#${getNameOfBlock(targetElement)}`)
	elem.scrollIntoView(scrollOptions);//
};
export const getNameOfBlock = (link) => {
	const hrefLink = link.href;
	const res = hrefLink.split('#').pop();
	return res;
};
export const sendData = (url, data, messageElement, {errorText,successText}) => {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then(() => {
			setTimeout(() => { messageElement.textContent = successText }, 1000);
		})
		.then(() => {
			setTimeout(() => { messageElement.textContent = '' }, 2000);
		})
		.catch(dataError => messageElement.textContent = `${errorText}:${dataError.message}`);
};
export const getData = (url) => {
	return fetch(url)
		.then(data => data.json())
		.catch(errorData => console.log(errorData))
		.finally(() => console.log('Сессия завершена')
		);
};
export const findModal = (modal,width) => { 
	if ((modal.getBoundingClientRect().x + (+(window.getComputedStyle(modal).width.slice(0, -2)) / 2)) < ((width / 2) - 14)) {
		modal.style.cssText = `
		position:fixed;
		top:20%;
		left:${((width / 2) - ((window.getComputedStyle(modal).width.slice(0, -2)) / 2))}px;
		z-index:999;`;
	}
}
export const addRemoveStyle = (arrayEl, style) => {
	arrayEl.forEach(el => {el.style.display = style; });
};
export const  visiblityElem = (target)=> {
	// Все позиции элемента
	const targetPosition = {
		 top: window.pageYOffset + target.getBoundingClientRect().top,
		 left: window.pageXOffset + target.getBoundingClientRect().left,
		 right: window.pageXOffset + target.getBoundingClientRect().right,
		 bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	  },
	  // Получаем позиции окна
	  windowPosition = {
		 	top: window.pageYOffset,
			left: window.pageXOffset,
			right: window.pageXOffset + document.documentElement.clientWidth,
		 	bottom: window.pageYOffset + document.documentElement.clientHeight
	  };
	if (
	  targetPosition.top < windowPosition.bottom  // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
	) { 
		
		return true;
	} else {
		return false;
	};
};
 export const fillInput = (inputsArray, data) => {
	 if (data) {
		 if (data.length > 0) {
			 inputsArray.forEach(el => {
				 if (el.hasAttribute('readonly')) {
					console.log(data);
					 el.value = data;
					 el.setAttribute('data-application', `${data}`);
				 } else {
					 return;
				 }
			 });
		  }
		 
	 } else { 
		 return;
	 }
};
export const animationScroll = () => {
	const animItems=document.querySelectorAll('._anim-items');//класс объектов которые будут анимироваться
if(animItems.length>0)
{
	window.addEventListener('scroll',animOnScroll);//слушаем событи скролл,когда он происходит запускаем метод animOnScroll
function animOnScroll(params)
{
for(let i=0;i<animItems.length;i++){
	const animItem=animItems[i];
	const animItemHeight=animItem.offsetHeight;
	const animItemOffset = offset(animItem).top;//с пом функции(см ниже) растояние от верха экрана до объекта 
	const animStart=4;//коэффициент регулирующий момент старта анимации
	//расчет точки начала анимации
let animItemPoint=window.innerHeight-animItemHeight/animStart;//высота окна браузера минус высота объекта поделенную на коэффициент регулирующий момент начала старта анимации
//если объект по высоте больше чем высота окна браузера то расчет точки начала анимации будет считаться по формуле ниже
if(animItemHeight>window.innerHeight)
{
	animItemPoint=window.innerHeight-window.innerHeight/animStart;
}
//если пркручено больше чем позиция объекта минус точка старта и меньше чем позиция объекта минус его высота
if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight))
{
	animItem.classList.add('_activeScroll');
}else{
	animItem.classList.remove('_activeScroll');
}
			}

}
//функция вычисляющая растояние от верха экрана до начала объекта
//или гот правой части экрана до объекта
function offset(el){
const rect = el.getBoundingClientRect(),
scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
scrollTop=window.pageYOffset||document.documentElement.scrollTop;
return{top:rect.top+scrollTop,left:rect.left+screenLeft}
		}
		//метод задержки анимации
		setTimeout(()=>{
				//вызываю метод "изначально" для того чтобы анимация была сразу при загрузке окна
		animOnScroll();
		},300);
	
}
 }