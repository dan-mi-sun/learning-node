$(document).ready(function() {

	// Global variables.
	globalDelay = 2500;

	globalTransition = globalDelay / 4;

	// Carousel functionality.
	$('.carousel .carousel-item').hide();

	$('.carousel .carousel-item:nth-child(1)').show();

	carouselCounter = 1;

	totalCarouselItems = $('.carousel .carousel-item').length;
	console.log('total carousel items: ', totalCarouselItems);

	function resetCarousel() {

		clearTimeout(carouselRotate);

		runCarousel();

	}

	function runCarousel() {

		carouselRotate = setTimeout(function() {

			if (carouselCounter === totalCarouselItems) {

				clearTimeout(carouselRotate);

				carouselCounter = 1;

				$('.carousel .carousel-item:nth-child(1)').fadeIn('slow');

				runCarousel();

				console.log('end of carousel');

			} else {

				carouselCounter++;

				$('.carousel .carousel-item').fadeOut('slow');

				$('.carousel .carousel-item:nth-child(' + carouselCounter + ')').fadeIn('slow');

				runCarousel();

				console.log('carousel counter: ', carouselCounter);

			}

		}, globalDelay);

	}
	runCarousel();

	$('.left').on('click', function() {

		resetCarousel();

		if (carouselCounter === 1) {

			var lastCarouselItem = parseInt(totalCarouselItems);

			carouselCounter = lastCarouselItem;

			$('.carousel .carousel-item').fadeOut('slow');

			$('.carousel .carousel-item:nth-child(' + lastCarouselItem + ')').fadeIn('slow');

		} else {

			carouselCounter--;

			$('.carousel .carousel-item').fadeOut('slow');

			$('.carousel .carousel-item:nth-child(' + carouselCounter + ')').fadeIn('slow');

		}

		console.log('carousel counter: ', carouselCounter);

	});

	$('.right').on('click', function() {

		resetCarousel();

		if (carouselCounter === 3) {

			$('.carousel .carousel-item').fadeOut('slow');

			$('.carousel .carousel-item:nth-child(1)').fadeIn('slow');

			carouselCounter = 1;

		} else {

			carouselCounter++;

			$('.carousel .carousel-item').fadeOut('slow');

			$('.carousel .carousel-item:nth-child(' + carouselCounter + ')').fadeIn('slow');

		}

		console.log('carousel counter: ', carouselCounter);

	});

});