$(() => {
	// Новинки, Акции, Хиты
	if ($('.articles .swiper-container').length) {
		new Swiper('.articles .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 28,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Карусель в тексте
	if ($('.text_block .text_carousel .swiper-container').length) {
		new Swiper('.text_block .text_carousel .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 4
				}
			}
		})
	}


	// Изделия из наших тканей
	if ($('.made_from_our .swiper-container').length) {
		new Swiper('.made_from_our .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			slidesPerView: 1,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Может быть интересно
	if ($('.interesting .swiper-container').length) {
		new Swiper('.interesting .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.interesting_swiper-button-next',
				prevEl: '.interesting_swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			}
		})
	}


	// Рекомендуем
	if ($('.recommend .swiper-container').length) {
		new Swiper('.recommend .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.recommend_swiper-button-next',
				prevEl: '.recommend_swiper-button-prev'
			}
		})
	}


	// Графики
	if ($('.product .chart').length) {
		$('.product .chart').each(function () {
			const config = {
				type: 'doughnut',
				data: {
					datasets: [{
						data: $(this).data('chart-data'),
						backgroundColor: ['#68B3E6', '#CF2138', '#4CED23', '#D4DC80', '#EE1D24', '#FDA428']
					}]
				},
				options: {
					layout: {
						padding: 0
					},
					elements: {
						arc: {
							borderWidth: 0
						}
					},
					responsive: true,
					plugins: {
						tooltip: false,
						legend: false
					}
				}
			}

			new Chart($(this).find('canvas'), config)
		})
	}


	// Боковая колонка - фильтр
	$('aside .mob_filter_btn').click(function (e) {
		e.preventDefault()

		!$(this).hasClass('active')
			? $(this).addClass('active').next().slideDown(300)
			: $(this).removeClass('active').next().slideUp(200)
	})


	// Товар в корзину
	$('.product .buy_btn').click(function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#cart_success_modal',
			type: 'inline',
			touch: false
		})
	})


	// Отправка форм
	$('body').on('submit', '.action_form form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#action_success_modal',
			type: 'inline',
			touch: false
		})
	})

	$('body').on('submit', '.subscribe form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#subscribe_success_modal',
			type: 'inline',
			touch: false
		})
	})
})