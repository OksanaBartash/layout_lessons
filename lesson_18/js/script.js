document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

		// Відкриття/закриття меню при кліку на бургер-іконку
	if (targetElement.closest('.header__icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
		// Закриття меню та плавний скролл при натисканні на пункт меню
	if (targetElement.classList.contains('header__link')) {
		// Закриваємо меню
		document.body.classList.remove('menu-open');

		// Отримуємо href (ідентифікатор блоку)
		const goTo = targetElement.getAttribute('href');

		// Знаходимо цей блок на сторінці
		const goToElement = document.querySelector(goTo);

		// Висота хедера, щоб не перекрив блок
		const headerHeight = document.querySelector('.header').offsetHeight;

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

