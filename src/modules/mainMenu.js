import { scrollingToView } from "/modules/helpers";

export const mainMenu = () => {
	const menu = document.querySelector('.top-menu');
	menu.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target.closest('a')) {
			console.log(target);
			scrollingToView(target, { block: "center", inline: "nearest", behavior: "smooth" });
		}
	});
};