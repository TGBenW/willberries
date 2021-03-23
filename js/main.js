const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
const overlay = document.querySelector('.overlay');

function openModal() {
	modalCart.classList.toggle('show');
}

const closeModal = function () {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

// scroll smooth

(function() {
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function (event) {
			event.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		});
	};
})()

//additional task day 1

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('overlay')) {
    closeModal();
  };
});

const escapeHandler = event => {
  if (event.code === "Escape") {
    closeModal();
  }
};

document.addEventListener('keydown', escapeHandler);