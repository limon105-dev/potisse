$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// **..mobile-dropdown-accordion js start..**
	$('.dropdown-btn').on('click', function () {
		$(this).next(".sub-menu").slideToggle();
		$(this).toggleClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(this).toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

	// cart-sidebar js start---
	$(".cart-sidebar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".cart-sidebar-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").removeClass("active");
		$("body").toggleClass("active");
	});

	$(".side-cart-close-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});
	// cart-sidebar js end---

	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});
	// filter sidebar js end--

	// **..filter-accordion js start..**
	$('.accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..filter-accordion js end..**

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// size-guide modal js start..
	$(".size-guide-popup-btn").click(function (event) {
		event.stopPropagation();
		$(".size-guide-popup").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".size-guide-modal-close-btn").click(function (event) {
		event.stopPropagation();
		$(".size-guide-popup").toggleClass("active");
		$("body").toggleClass("active");
	});
	// size-guide modal js end..

	// product-details modal js start..
	$(".product-details-popup-btn").click(function (event) {
		event.stopPropagation();
		$(".product-details-popup").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".product-details-modal-close-btn").click(function (event) {
		event.stopPropagation();
		$(".product-details-popup").toggleClass("active");
		$("body").toggleClass("active");
	});
	// product-details modal js end..

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// product single section js start...
	if (window.matchMedia("(min-width: 993px)").matches) {
		$(".slider-zoom-btn").click(function (event) {
			event.stopPropagation();
			$(".product-img-area").addClass('active');
			$("body").addClass('active');
		});

		$(".slider-zoom-close-btn").click(function (event) {
			event.stopPropagation();
			$(".product-img-area").removeClass('active');
			$("body").removeClass('active');
			$('.swiper-slide-active').removeClass('swiper-slide-zoomed');
			$('.swiper-slide-active').find('.swiper-zoom-container').removeAttr('style');
			$('.swiper-slide-active').find('img').removeAttr('style');
		});
	}
	// product single section js end...

})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// product-single-slider js start---
var swiper = new Swiper(".product-single-thumb-slider", {
	direction: 'vertical',
	spaceBetween: 10,
	slidesPerView: 5,
	freeMode: true,
	mousewheel: true,
});
var swiper2 = new Swiper(".product-single-slider", {
	direction: 'vertical',
	mousewheel: true,
	spaceBetween: 0,
	zoom: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	thumbs: {
		swiper: swiper,
	},
	breakpoints: {
		// when window width is >= 1px
		1: {
			direction: 'horizontal',
			mousewheel: false,
		},
		// when window width is >= 993px
		993: {
			direction: 'vertical',
		}
	}
});
// product-single-slider js end---

// related-product slider js start--
var swiper = new Swiper(".related-product-slider", {
	slidesPerView: 4,
	spaceBetween: 30,
	grabCursor: true,
	loop: false,
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 2.2,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3.4,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 30,
			slidesPerView: 4,
		}
	}
});
// related-product slider js end--

// side-cart-product slider js start--
var swiper = new Swiper(".side-cart-slider", {
	slidesPerView: 2.2,
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	speed: 1000,
});
// side-cart-product slider js end--

// progesss-bar js start--
const progress = document.querySelector('.progress');
progress.addEventListener('input', function () {
	const value = this.value;
	this.style.background = `linear-gradient(to right,rgb(36, 40, 51) 0%,rgb(36, 40, 51) ${value}%,rgb(216, 216, 216) ${value}%)`
})
// progesss-bar js end--

// modal js start---
var body = document.querySelector("body");
var modal = document.querySelector(".masurement-modal");
var measurement_guide_modal_btn = document.querySelector(".measurement-guide-modal-btn");
var closeButton = document.querySelector(".modal-close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
	body.classList.toggle("active");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

measurement_guide_modal_btn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// modal js end---