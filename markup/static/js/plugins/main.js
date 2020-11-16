

$(document).ready(function () {
	
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();
	



	
	

	// let lazyImages = [...document.querySelectorAll('img')]
	// let inAdvance = 300
	
	// function lazyLoad() {
	// 	lazyImages.forEach(image => {
	// 		if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
	// 			image.src = image.dataset.src
	// 			image.onload = () => image.classList.add('loaded')
	// 		}
	// 	})
	
	// }
	// lazyLoad();

	

	var mySwiper = new Swiper('.slider', {
		loop: true,
		slidesPerView: "auto",
		breakpoints: {
			1024: {
				loop: true,
				slidesPerView: 3,
				spaceBetween: 20
			},
			768: {
				loop: true,
				slidesPerView: 2,
				spaceBetween: 20
			},
			425: {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
	})
	
	var mySwiper1 = new Swiper('.slider1', {
			slidesPerView: "auto",
		spaceBetween: 241,
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
		  },

		  on: {
			slideNextTransitionStart: function () {
				var index = +$(".slider1 .swiper-slide-active").index() + 1;
				$(".reviews-all-autor").removeClass("active");
				$(".reviews-all-autor:nth-child("+index+")").addClass("active");
			},
			slidePrevTransitionStart: function () {
				var index = +$(".slider1 .swiper-slide-active").index() + 1;
				$(".reviews-all-autor").removeClass("active");
				$(".reviews-all-autor:nth-child("+index+")").addClass("active");
			},
		}
	});

	

		$(document).ready(function(n) {
	
			// typing animation
			(function($) {
			  $.fn.writeText = function(content) {
				  var contentArray = content.split(""),
					  current = 0,
					  elem = this;
				  setInterval(function() {
					  if(current < contentArray.length) {
						  elem.text(elem.text() + contentArray[current++]);
					  }
				  }, 80);
			  };
			  
			})(jQuery);
		  
			// input text for typing animation 
			$("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");
		  
			// initialize wow.js
			new WOW().init();
			  
			// Push the body and the nav over by 285px over
			var main = function() {
			  $('.fa-bars').click(function() {
				$('.nav-screen').animate({
				  right: "0px"
				}, 200);
		  
				$('body').animate({
				  right: "285px"
				}, 200);
			  });
		  
			  // Then push them back */
			  $('.fa-times').click(function() {
				$('.nav-screen').animate({
				  right: "-285px"
				}, 200);
		  
				$('body').animate({
				  right: "0px"
				}, 200);
			  });
		  
			  $('.nav-links a').click(function() {
				$('.nav-screen').animate({
				  right: "-285px"
				}, 500);
		  
				$('body').animate({
				  right: "0px"
				}, 500);
			  });
			};
		  
			$(document).ready(main);
			
			// initiate full page scroll
		  
			n('#fullpage').fullpage({
			  scrollBar: false,
			  responsiveWidth: 400,
			  navigation: true,
			  navigationTooltips: ['head', 'plus', 'stat', 'analit', 'autors', 'step', 'top-autors', 'reviews', 'footer'],
			  anchors: ['head', 'plus', 'stat', 'analit', 'autors', 'step', 'top-autors', 'reviews', 'footer'],
			  menu: '#myMenu',
			  fitToSection: false,
			
			  afterLoad: function ( anchorLink, index){
				var loadedSection = $(this);
		  
				//using index
				if(index==1){
				  /* add opacity to arrow */
				  $('.fa-chevron-down').each(function(){
					$(this).css('opacity','1')
				  });
				  $('.header-links a').each(function(){
					$(this).css('color','white')
				  });
				  $('.header-links').css("background-color","transparent");
				}
		  
				else if(index!=1){
				  $('.header-links a').each(function(){
					$(this).css('color','black')
				  });
				  $('.header-links').css('background-color', 'white');
				}
		  
				//using index
				if(index == 2){
		  
				  /* animate skill bars */
				  $('.skillbar').each(function(){
					$(this).find('.skillbar-bar').animate({
					  width: $(this).attr('data-percent')
					},2500);
				  });
				}
			  }
			});

		  
			// move section down one
			$(document).on('click', '#moveDown', function(){
			  $.fn.fullpage.moveSectionDown();
			  
			});

		  
			// fullpage.js link navigation
			$(document).on('click', '#skills', function(){
			  $.fn.fullpage.moveTo(2);
			});
		  
			$(document).on('click', '#projects', function(){
			  $.fn.fullpage.moveTo(3);
			});
		  
			$(document).on('click', '#contact', function(){
			  $.fn.fullpage.moveTo(4);
			});
		  
			// smooth scrolling
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 700);
					return false;
				  }
				}
			  });
			});
		  
			//ajax form
			$(function() {
		  
			  // Get the form.
			  var form = $('#ajax-contact');
		  
			  // Get the messages div.
			  var formMessages = $('#form-messages');
		  
			  // Set up an event listener for the contact form.
			  $(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();
		  
				// Serialize the form data.
				var formData = $(form).serialize();
		  
				// Submit the form using AJAX.
				$.ajax({
				  type: 'POST',
				  url: $(form).attr('action'),
				  data: formData
				})
				.done(function(response) {
				  // Make sure that the formMessages div has the 'success' class.
				  $(formMessages).removeClass('error');
				  $(formMessages).addClass('success');
		  
				  // Set the message text.
				  $(formMessages).text(response);
		  
				  // Clear the form.
				  $('#name').val('');
				  $('#email').val('');
				  $('#message').val('');
				})
				.fail(function(data) {
				  // Make sure that the formMessages div has the 'error' class.
				  $(formMessages).removeClass('success');
				  $(formMessages).addClass('error');
		  
				  // Set the message text.
				  if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				  } else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				  }
				});
		  
			  });
		  
			});



			if ($(window).width() <= 425) {
				fullpage_api.destroy('all');
			}	
			



			
		

		});




	// window.addEventListener('scroll', _.throttle(lazyLoad, 16))
	// window.addEventListener('resize', _.throttle(lazyLoad, 16))
	
	$(".sticky-block").stick_in_parent();
	if ($(window).width() < 1025) {
	}

	$(document).ready(function() {
		$('select').niceSelect();
	});

	$(".lightgallery").lightGallery();

	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
	
	if ($('#slider').length > 0) {
		var slider = document.getElementById('slider');
		var rangeMin = +$("#slider").attr("data-min")
		var rangeMax = +$("#slider").attr("data-max")

		var valMin = +$(".input-min").val();
		var valMax = +$(".input-max").val();
		
		var rangeStep = $("#slider").data("step")
		$(".output-left").text(parseFloat(valMin).toFixed(0));
		$(".output-right").text(parseFloat(valMax).toFixed(0));
		// $(".input-min").text(parseFloat(rangeMin).toFixed(0));
		noUiSlider.create(slider, {
			start: [valMin, valMax],
			connect: true,
			step: rangeStep,
			range: {
				'min': rangeMin,
				'max': rangeMax
			},
			format: wNumb({
				decimals: 0
			})
			
		});	
		$(".filter__open").click(function() {
			$(".filter__container").addClass("active");
			$(".overlay").addClass("visible")

		});
		$(".filter__close-mobile, .overlay").click(function() {
			$(".filter__container").removeClass("active");
			$(".overlay").removeClass("visible")
		});
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-left").text(parseFloat(val).toFixed(0));
		// 	$(".input-min").val(parseFloat(val).toFixed(0));
		// });
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-right").text(parseFloat(val).toFixed(0));
		// 	$(".input-max").val(parseFloat(val).toFixed(0));
		// });
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-lower").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-min").text(val.toFixed(0));
			});
		});
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-upper").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-max").text(val.toFixed(0));
			});
		});
	}

	
	


	
	
	

	$(".noUi-handle-lower").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-min").text(val.toFixed(0));
	});
	$(".noUi-handle-upper").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-max").text(val.toFixed(0));
	});

	$(".html > img").each(function() {
		$(this).wrap("<figure></figure>")
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: true,
				},
				phone: {
					required: true,
				},
				email: {
					required: true,
					email: true,	
				},
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				if ($(".js-check").prop('checked')) {
					location.href = 'thanks.html'
				} else {
					$(".js-check").closest("label").addClass("error")
				}
			},  
         });
	 });

	$('body').on('click','[data-popup]',function(e) { //Вызов попапов
    	e.preventDefault();
    	var popup = $(this).data('popup');
    	var width = $('.blur').prop('scrollWidth');
    	$('html').addClass('no-scroll');
    	$('body').css('width',width);
    	$('.blur').addClass('active');
		$('.popup').removeClass('active');
    	$('.popup-'+popup).addClass('active');
    });
    $('body').on('mousedown','.blur',function(e) { //Закрытие попапов по .blur
    	if (this == e.target) {
    		$('.popup').removeClass('active');
    		$('html').removeClass('no-scroll');
    		$('body').css('width','auto');
			$('.blur').removeClass('active');
			$('.popup').each(function() {
				$(this).find('input[type=text],input[type=mail],textarea').val('');
				$(this).find('input[type=checkbox]').prop('checked', false);
				$(this).find('.active').removeClass('active');
			});
			$(".header__right").removeClass("active");
			$(".catalog__sidebar-container").removeClass('active');

    	}
	});



	$(".fs-hdr").each(function() {
		var screenHeight = $(window).height();
		if ($(window).scrollTop() >= screenHeight) {
			$(this).addClass("fixed");
		}
		if ($(window).scrollTop() < screenHeight) {
			$(this).removeClass("fixed");
		}
	});
	$(window).on('scroll', function () {
		$(".fs-hdr").each(function() {
			var screenHeight = $(window).height();
			if ($(window).scrollTop() >= screenHeight) {
				$(this).addClass("fixed");
			}
			if ($(window).scrollTop() < screenHeight) {
				$(this).removeClass("fixed");
			}
		});
		if ($(window).scrollTop() > 300) {
			$(".first-mouse").addClass("active");
		} else {
			$(".first-mouse").removeClass("active");		
		}
	});
	if ($(window).scrollTop() > 300) {
		$(".first-mouse").addClass("active");
	} else {
		$(".first-mouse").removeClass("active");		
	}

	$(function() {
		var el = $('.first__branch-1');
		var offsetTop = el.offset().top;
		var screenHeight = $(window).height();
		var itogHeight = offsetTop - screenHeight;
		$(window).on('scroll', function () {
				var scroll = $(document).scrollTop();
				el.css({
					'transform':'translateY( ' + (-0.4*scroll)+'px)'
				});
			});
		if ($(document).scrollTop() > itogHeight) {
			$(window).on('scroll', function () {
				var scroll = $(document).scrollTop();
				el.css({
					'transform':'translateY( ' + (-0.4*scroll)+'px)'
				});
			});
		}
	});

	 

	// var location = window.location.hash;
	// if (location != "") {
	// 	$(window).scrollTop(0);
	// 	var offset = $(location).offset().top;
	// 	$(window).scrollTop(0);
	// 	$([document.documentElement, document.body]).animate({
	// 		scrollTop:offset - 100
	// 	}, 1000);
	// 	$(location).addClass('active');
	// 	setTimeout(function(){
	// 		offset = $(location).offset().top;
	// 		$([document.documentElement, document.body]).animate({
	// 			scrollTop:offset - 100
	// 		}, 50);
	// 	},50) 
	// }


	


		
	// var jump=function(e) {
	// 	//prevent the "normal" behaviour which would be a "hard" jump
	// 	e.preventDefault();
	// 	//Get the target
	// 	var target = $(this).attr("href");
	// 	//perform animated scrolling
	// 	$('html,body').animate({
	// 			//get top-position of target-element and set it as scroll target
	// 			scrollTop: $(target).offset().top - 100
	// 	//scrolldelay: 2 seconds	
	// 	},1000,function(){
	// 			//attach the hash (#jumptarget) to the pageurl
	// 			location.hash = target;
	// 	});
	// }


	if ($(window).width() > 1024) {
			
		$(function() {
			var el = $('.branch-parallax');
			var offsetTop = el.offset().top;
			var screenHeight = $(window).height();
			var itogHeight = offsetTop - screenHeight;
			if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			$(window).on('scroll', function () {
				if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			});
		});

		$(function() {
			var el = $('.branch-parallax-left');
			var offsetTop = el.offset().top;
			var screenHeight = $(window).height();
			var itogHeight = offsetTop - screenHeight;
			if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			$(window).on('scroll', function () {
				if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			});
		});

		$(function() {
			var el = $('.info__branch');
			var offsetTop = el.offset().top;
			var screenHeight = $(window).height();
			var itogHeight = offsetTop - screenHeight;
			if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			$(window).on('scroll', function () {
				if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(thisHeight + -0.3*scroll)+'px)'
					});
				}
			});
		});

		$(function() {
			var el = $('.mama-parallax');
			var offsetTop = el.offset().top;
			var screenHeight = $(window).height();
			var itogHeight = offsetTop - screenHeight;
			if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(400 + -0.1*scroll)+'px)'
					});
				}
			$(window).on('scroll', function () {
				if ($(document).scrollTop() > itogHeight) {
					var scroll = $(document).scrollTop();
					var thisHeight = el.height();
					el.css({
						'transform':'translateY( '+(400 + -0.1*scroll)+'px)'
					});
				}
			});
		});
	}


	// $(function() {
	// 	var el = $('.care__item-1');
	// 	var offsetTop = el.offset().top;
	// 	var screenHeight = $(window).height();
	// 	var itogHeight = offsetTop - screenHeight;
	// 	$(window).on('scroll', function () {
	// 		if ($(document).scrollTop() > itogHeight) {
	// 			var scroll = $(document).scrollTop();
	// 			var thisHeight = el.height();
	// 			el.css({
	// 				'transform':'translateY( '+(250 + -0.1*scroll)+'px)'
	// 			});
	// 		}
	// 	});
	// });

	// $(function() {
	// 	var el = $('.care__item-2');
	// 	var offsetTop = el.offset().top;
	// 	var screenHeight = $(window).height();
	// 	var itogHeight = offsetTop - screenHeight;
	// 	$(window).on('scroll', function () {
	// 		if ($(document).scrollTop() > itogHeight) {
	// 			var scroll = $(document).scrollTop();
	// 			var thisHeight = el.height();
	// 			el.css({
	// 				'transform':'translateY( '+(250 + -0.13*scroll)+'px)'
	// 			});
	// 		}
	// 	});
	// });

	// $(function() {
	// 	var el = $('.care__item-3');
	// 	var offsetTop = el.offset().top;
	// 	var screenHeight = $(window).height();
	// 	var itogHeight = offsetTop - screenHeight;
	// 	$(window).on('scroll', function () {
	// 		if ($(document).scrollTop() > itogHeight) {
	// 			var scroll = $(document).scrollTop();
	// 			var thisHeight = el.height();
	// 			el.css({
	// 				'transform':'translateY( '+(250 + -0.16*scroll)+'px)'
	// 			});
	// 		}
	// 	});
	// });
	$(function() {
		var el = $('.first__branch-2');
		var scroll = $(document).scrollTop();
			el.css({
				'transform':'translateY( '+(-0.6*scroll)+'px)'
			});
		$(window).on('scroll', function () {
			var scroll = $(document).scrollTop();
			el.css({
				'transform':'translateY( '+(-0.6*scroll)+'px)'
			});
		});
	});
	$(function() {
		var el = $('.first__branch-4');
		var scroll = $(document).scrollTop();
			el.css({
				'transform':'translateY( '+(0.2*scroll)+'px)'
			});
		$(window).on('scroll', function () {
			var scroll = $(document).scrollTop();
			el.css({
				'transform':'translateY( '+(0.2*scroll)+'px)'
			});
		});
	});
	// $(function() {
	// 	var el = $('.first__content');
	// 	$(window).on('scroll', function () {
	// 		var scroll = $(document).scrollTop();
	// 		el.css({
	// 			'transform':'translateY( '+(-0.1*scroll)+'px)'
	// 		});
	// 	});
	// });

	$(function() {
		var el = $('.first__logo-img');
		$(window).on('scroll', function () {
			var scroll = $(document).scrollTop();
			el.css({
				'transform':'translateY( '+(-0.15*scroll)+'px)'
			});
		});
	});
	
    $('body').on('click','.popup__close',function(e) { //Закрытие попапов по .popup__close
		$('.popup').removeClass('active');
		$('html').removeClass('no-scroll');
		$('body').css('width','auto');
		$('.blur').removeClass('active');
		$('.popup').each(function() {
			$(this).find('input[type=text],input[type=mail],textarea').val('');
			$(this).find('input[type=checkbox]').prop('checked', false);
			$(this).find('.active').removeClass('active');
		});
	});

	if($("#fullpage").length) {
		if ($(window).width() < 1280) {
			$(".fp-tableCell, .fp-table").css("height", "auto");
			$('select').niceSelect();
			$("#fullpage").css({"position": "static", "transform": "none"});
			$.fn.fullpage.destroy();
		}
		$('#fullpage').fullpage({
			scrollingSpeed: 1000,
			autoScrolling:true,
			scrollHorizontally: true,
			navigation: false,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',
			afterLoad: function(index, direction){
				var index = $(".section.active").index() + 1;
				$(".blt").removeClass("hidden");
				$(".blt").removeClass("white");
				$(".blt__item").removeClass("active")
				$(".blt__item:nth-child("+index+")").addClass("active")
				if ($(".section.active").hasClass("serv__section")) {
					$(".blt").addClass("hidden");
				}
				if ($(".section.active").hasClass("no-pag")) {
					$(".blt").addClass("hidden");
				}
				if ($(".section.active").hasClass("blue")) {
					$(".blt").addClass("white");
				}
				$(".blt__cur").text("0" + index);
				if($('.ggg').hasClass('active')) {
					$('.count').each(function () {
						$(this).prop('Counter',0).animate({
							Counter: $(this).text()
						}, {
							duration: 1000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
				}
			 }
		});	
	}

	$(".header__mobile").click(function() {
		$(".header__menu").addClass("active");
	});

	$(".header__close").click(function() {
		$(".header__menu").removeClass("active");
	});

	$(".header__left").click(function() {
		$(this).toggleClass("active");
		$(".header__menu").toggleClass("active");
	});


	
	$(".info__ctg-item img").click(function(e) {
		$(".info__slider").addClass("active");
		$(".info__slide").removeClass("active");
		e.preventDefault();
		var index = $(this).closest(".info__ctg-item").index() + 1;
		$(".info__nav-link").removeClass("active");
		// $(this).addClass("active");
		$(".info__slide:nth-child("+index+")").addClass("active");
		$(".info__nav-link:nth-child("+index+")").addClass("active");
	});

	$(".info__close").click(function() {
		$(".info__slider").removeClass("active");
		$(".info__slide").removeClass("active");
		$(".info__nav-link").removeClass("active");
	})

	$(".info__nav-link").click(function(e) {
		e.preventDefault();
		var index = $(this).index() + 1;
		$(".info__nav-link").removeClass("active");
		$(this).addClass("active");
		$(".info__slide").removeClass("active");
		$(".info__slide:nth-child("+index+")").addClass("active");

	});

	
	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("data-src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 
})
