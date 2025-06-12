document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	//Відкриття і закриття підпунктів у меню в ecobazar.html
	if (targetElement.closest('.menu__arrow')) {
		targetElement.closest('.menu__item').classList.toggle('active')
	}

	// Відкриття/закриття меню при кліку на бургер-іконку в ecobazar.html
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}

	// Відкриття/закриття меню при кліку на бургер-іконку в business/index.html
	if (targetElement.closest('.business-header__menu-icon')) {
		document.body.classList.toggle('menu-open-2')
	}


	// Закриття меню та плавний скролл при натисканні на пункт меню
	if (targetElement.classList.contains('business-header__link')) {
		// Закриваємо меню
		document.body.classList.remove('menu-open-2');

		// Отримуємо href (ідентифікатор блоку)
		const goTo = targetElement.getAttribute('href');

		// Знаходимо цей блок на сторінці
		const goToElement = document.querySelector(goTo);

		// Висота хедера, щоб не перекрив блок
		const headerHeight = document.querySelector('.business-header').offsetHeight;

		if (goToElement) {
			// Плавна прокрутка
			window.scrollTo({
				top: goToElement.offsetTop - headerHeight - 10,
				behavior: 'smooth'
			});
		}

		// Забороняємо стандартну поведінку (перехід за посиланням)
		e.preventDefault();
	}
}