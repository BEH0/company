// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href')
			? anchor.getAttribute('href')
			: 'body'

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock')
			iconBody.classList.remove('_active')
			iconMenu.classList.remove('_active')
		}
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}

// =====================================================================

// function testWebP(callback) {
// 	var webP = new Image()
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2)
// 	}
// 	webP.src =
// 		'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
// }

// testWebP(function (support) {
// 	if (support == true) {
// 		document.querySelector('body').classList.add('webp')
// 	} else {
// 		document.querySelector('body').classList.add('no-webp')
// 	}
// })

// =====================================================================

const iconMenu = document.querySelector('.menu__icon')
const iconBody = document.querySelector('.menu__body')

if (iconMenu) {
	const iconBody = document.querySelector('.menu__body')
	iconMenu.addEventListener('click', function () {
		document.body.classList.toggle('_lock')
		iconBody.classList.toggle('_active')
		iconMenu.classList.toggle('_active')
	})
}

// =====================================================================

$(function () {
	$('.services__list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: "<img src='../img/arrow.ico' class='prev' alt='#'>",
		nextArrow: "<img src='../img/icons/Вправо.svg' class='next' alt='#'>",

		responsive: [
			{
				breakpoint: 996,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 546,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
		],
	})
})



$('.open-popup').click(function () {
	$('.popup-bg').fadeIn(500);
	$('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
	$('.popup-bg').fadeOut(500);
	$('html').removeClass('no-scroll');
});


AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});