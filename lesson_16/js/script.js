document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.menu__arrow')) {
		targetElement.closest('.menu__item').classList.toggle('active')
	}
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
		if (targetElement.closest('.business-header__menu-icon')) {
		document.body.classList.toggle('menu-open-2')
	}
}