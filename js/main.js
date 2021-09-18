(function(a) {
	a(document).ready(function() {
		a(".preloader").delay(500).animate({
			opacity: "0"
		}, 500, function() {
			a(".preloader").css("display", "none")
		});
		a("select").niceSelect();
		e()
	});
	a(window).on("load", function() {
		i();
		j()
	});
	new WOW().init();

	function e() {
		var t = a(".bg_img");
		t.css("background-image", function() {
			var u = ("url(" + a(this).data("background") + ")");
			return u
		})
	}
	var r = a(window).width();
	var k = (r > 1199) ? 80 : 0;
	if (a(".sidebar").length) {
		a(".sidebar").theiaStickySidebar({
			containerSelector: ".blog-section",
			additionalMarginTop: k,
			minWidth: 992,
		})
	}
	setInterval(function() {
		a(".banner-group-shape").addClass("active")
	}, 1000);
	var h = a(".header-section");
	a(window).on("scroll", function() {
		if (a(window).scrollTop() > 500) {
			h.addClass("animated fadeInDown header-fixed")
		} else {
			h.removeClass("animated fadeInDown header-fixed")
		}
	});
	a(".navbar li a").on("click", function() {
		var t = a(this).parent("li");
		if (t.hasClass("show")) {
			t.removeClass("show");
			t.find("li").removeClass("show")
		} else {
			t.addClass("show");
			t.siblings("li").removeClass("show");
			t.siblings("li").find("li").removeClass("show")
		}
	});
	a(".popup-youtube").magnificPopup({
		type: "video"
	});
	a(".image-popup").magnificPopup({
		type: "image"
	});
	var m = a(".scrollToTop");
	a(window).on("scroll", function() {
		if (a(this).scrollTop() < 500) {
			m.removeClass("active")
		} else {
			m.addClass("active")
		}
	});
	a(document).on("click", ".search-bar, .skip", function() {
		a(".header-form").toggleClass("active")
	});
	a(document).on("click", ".ellipsis-bar", function() {
		a(".header-top-area").toggleClass("active");
		a(".overlay").addClass("active")
	});
	a(document).on("click", ".custom-btn, .close", function() {
		a(".header-register-form").toggleClass("active")
	});
	a(document).on("click", ".ellipsis-bar", function() {
		a(".header-top-area").toggleClass("active");
		a(".overlay").addClass("active")
	});
	a(document).on("click", ".custom-btn--style, .stop", function() {
		a(".header-login-form").toggleClass("active")
	});
	a(document).on("click", ".ellipsis-bar", function() {
		a(".header-top-area").toggleClass("active");
		a(".overlay").addClass("active")
	});
	a(".header-bar").on("click", function() {
		a(this).toggleClass("active");
		a(".header-btn-group").toggleClass("active wow")
	});
	a(".datepicker-here").datepicker();
	a(document).on("click", ".overlay", function() {
		a(this).removeClass("active");
		a(".header-bar").removeClass("active");
		a(".menu").removeClass("active");
		a(".header-top-area").removeClass("active")
	});
	a(".faq-wrapper .faq-title").on("click", function(t) {
		var u = a(this).parent(".faq-item");
		if (u.hasClass("open")) {
			u.removeClass("open");
			u.find(".faq-content").removeClass("open");
			u.find(".faq-content").slideUp(300, "swing")
		} else {
			u.addClass("open");
			u.children(".faq-content").slideDown(300, "swing");
			u.siblings(".faq-item").children(".faq-content").slideUp(300, "swing");
			u.siblings(".faq-item").removeClass("open");
			u.siblings(".faq-item").find(".faq-title").removeClass("open");
			u.siblings(".taq-item").find(".faq-content").slideUp(300, "swing")
		}
	});
	a(".faq-wrapper--style .faq-title").on("click", function(t) {
		var u = a(this).parent(".faq-item--style");
		if (u.hasClass("open")) {
			u.removeClass("open");
			u.find(".faq-content--style").removeClass("open");
			u.find(".faq-content--style").slideUp(300, "swing")
		} else {
			u.addClass("open");
			u.children(".faq-content--style").slideDown(300, "swing");
			u.siblings(".faq-item--style").children(".faq-content--style").slideUp(300, "swing");
			u.siblings(".faq-item--style").removeClass("open");
			u.siblings(".faq-item--style").find(".faq-title").removeClass("open");
			u.siblings(".taq-item--style").find(".faq-content--style").slideUp(300, "swing")
		}
	});
	a(".counter-number").counterUp({
		delay: 10,
		time: 5000,
		offset: 70,
		beginAt: 10,
		formatter: function(t) {
			return t.replace(/,/g, ".")
		}
	});
	var d = a(".grid").isotope({
		itemSelector: ".grid-item",
		masonry: {
			columnWidth: ".grid-item"
		}
	});
	var c = a(".grid").isotope({});
	a(".filter-btn-group").on("click", "button", function() {
		var t = a(this).attr("data-filter");
		d.isotope({
			filter: t
		})
	});
	a(".filter-btn-group").on("click", "button", function() {
		a(this).addClass("active").siblings().removeClass("active")
	});
	var n = new Swiper(".banner-slider", {
		pagination: {
			el: ".banner-pagination",
			clickable: true,
			renderBullet: function(u, t) {
				return '<span class="' + t + '">' + (u + 1) + "</span>"
			},
		},
		autoplay: {
			delay: 3000,
			speed: 2000,
		},
		speed: 2000,
	});
	var n = new Swiper(".client-slider", {
		slidesPerView: 3,
		spaceBetween: 0,
		centeredSlides: true,
		loop: true,
		autoplay: {
			speeds: 1000,
			delay: 4000,
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});
	var n = new Swiper(".client-wrapper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".ruddra-next",
			prevEl: ".ruddra-prev",
		},
		autoplay: {
			speeds: 1000,
			delay: 3000,
		},
		speed: 1000,
		breakpoints: {
			991: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});
	var n = new Swiper(".blog-post-wrapper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".ruddra-next",
			prevEl: ".ruddra-prev",
		},
		autoplay: {
			speeds: 1000,
			delay: 3000,
		},
		speed: 1500,
		breakpoints: {
			991: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});
	var n = new Swiper(".play-wrapper", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".ruddra-next",
			prevEl: ".ruddra-prev",
		},
		autoplay: {
			speeds: 1000,
			delay: 3000,
		},
		speed: 1000,
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});
	var n = new Swiper(".brand-wrapper", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			speeds: 1000,
			delay: 2000,
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		}
	});
	a(".my-paroller").paroller();
	a(window).on("load", function() {
		var t = a(".grid");
		var u = {};
		t.isotope({
			itemSelector: ".grid-item",
			masonry: {
				columnWidth: 0,
			}
		});
		a(".filter-btn-group").on("click", "button", function() {
			var v = a(this).attr("data-filter");
			v = u[v] || v;
			t.isotope({
				filter: v
			})
		});
		a(".filter-btn-group").each(function(x, w) {
			var v = a(w);
			v.on("click", "button", function() {
				v.find(".active").removeClass("active");
				a(this).addClass("active")
			})
		})
	});
	a(window).on("load", function() {
		var t = a(".offer-grid");
		var u = {};
		t.isotope({
			itemSelector: ".offer-item",
			masonry: {
				columnWidth: 0,
			}
		});
		a(".filter-btn-group").on("click", "button", function() {
			var v = a(this).attr("data-filter");
			v = u[v] || v;
			t.isotope({
				filter: v
			})
		});
		a(".filter-btn-group").each(function(x, w) {
			var v = a(w);
			v.on("click", "button", function() {
				v.find(".active").removeClass("active");
				a(this).addClass("active")
			})
		})
	});
	a(".privacy-sidebar li a").on("click", function(t) {
		var u = a(this).parent("li");
		if (u.hasClass("open")) {
			u.removeClass("open");
			u.find("li").removeClass("open");
			u.find("ul").slideUp(300, "swing")
		} else {
			u.addClass("open");
			u.children("ul").slideDown(300, "swing");
			u.siblings("li").children("ul").slideUp(300, "swing");
			u.siblings("li").removeClass("open");
			u.siblings("li").find("li").removeClass("open");
			u.siblings("li").find("ul").slideUp(300, "swing")
		}
	});
	a("#show-pass-one").on("click", function() {
		var t = document.getElementById("myInput");
		if (t.type === "password") {
			t.type = "text"
		} else {
			t.type = "password"
		}
	});
	a("#show-pass-two").on("click", function() {
		var t = document.getElementById("myInputTwo");
		if (t.type === "password") {
			t.type = "text"
		} else {
			t.type = "password"
		}
	});
	a("#show-pass-three").on("click", function() {
		var t = document.getElementById("myInputThree");
		if (t.type === "password") {
			t.type = "text"
		} else {
			t.type = "password"
		}
	});
	a(".account-control-button").on("click", function() {
		a(".account-area").toggleClass("change-form")
	});
	a(".progressbar").each(function() {
		a(this).find(".bar").animate({
			width: a(this).attr("data-perc")
		}, 8000);
		a(this).find(".label").animate({
			left: a(this).attr("data-perc")
		}, 8000)
	});
	var q = a(".faq-tab-wrapper"),
		p = q.find(".tab-menu li"),
		o = q.find(".tab-cont > .tab-item");
	o.not(":nth-child(1)").fadeOut(350);
	p.each(function(t) {
		a(this).attr("data-tab", "tab" + t)
	});
	o.each(function(t) {
		a(this).attr("data-tab", "tab" + t)
	});
	p.on("click", function() {
		var t = a(this).data("tab");
		q.find(o).fadeOut(350);
		q.find(o).filter("[data-tab=" + t + "]").fadeIn(350)
	});
	a(".tab-menu > li").on("click", function() {
		var t = a(".tab-menu li.active");
		t.removeClass("active");
		a(this).addClass("active")
	});

	function i() {
		a(".portfolio-wrapper").isotope({
			itemSelector: ".portfolio-item",
			masonry: {
				columnWidth: 0,
			}
		})
	}
	if (a(".counter-item").length) {
		a(".counter-item").each(function() {
			a(this).isInViewport(function(v) {
				if (v === "entered") {
					for (var u = 0; u < document.querySelectorAll(".odometer").length; u++) {
						var t = document.querySelectorAll(".odometer")[u];
						t.innerHTML = t.getAttribute("data-odometer-final")
					}
				}
			})
		})
	}

	function j() {
		var t = a(".grid");
		var u = {};
		t.isotope({
			itemSelector: ".grid-item",
			masonry: {
				columnWidth: 0,
			}
		});
		a("ul.filter").on("click", "li", function() {
			var v = a(this).attr("data-filter");
			v = u[v] || v;
			t.isotope({
				filter: v
			})
		});
		a("ul.filter").each(function(x, w) {
			var v = a(w);
			v.on("click", "li", function() {
				v.find(".active").removeClass("active");
				a(this).addClass("active")
			})
		})
	}
	a(".remove-cart").on("click", function(t) {
		t.preventDefault();
		a(this).parent().parent().hide(300)
	});
	a("#cart-button").on("click", function(t) {
		t.preventDefault();
		a(".cart-sidebar-area").addClass("active");
		a(".body-overlay").addClass("active")
	});
	a("#body-overlay").on("click", function(t) {
		t.preventDefault();
		a(".cart-sidebar-area").removeClass("active");
		a(".body-overlay").removeClass("active")
	});
	a(".side-sidebar-close-btn").on("click", function(t) {
		t.preventDefault();
		a(".cart-sidebar-area").removeClass("active");
		a(".body-overlay").removeClass("active")
	});
	a(".search-bar a").on("click", function() {
		a(".header-top-search-area").toggleClass("active")
	});
	var b = a(".cursor");

	function l(u) {
		var w = u.clientX + "px",
			v = u.clientY + "px";
		TweenMax.to(b, 0.2, {
			left: w,
			top: v,
			ease: "Power1.easeOut"
		})
	}
	a(window).on("mousemove", l);

	function s(t) {
		TweenMax.to(b, 0.1, {
			scale: 3,
			ease: "Power1.easeOut"
		});
		a(b).removeClass("cursor-close")
	}
	a("a, .zoom-cursor").on("mouseenter", s);

	function f(t) {
		TweenMax.to(b, 0.1, {
			scale: 3,
			ease: "Power1.easeOut"
		});
		a(b).addClass("cursor-close")
	}
	a(".trigger-close").on("mouseenter", f);

	function g(t) {
		TweenLite.to(b, 0.1, {
			scale: 1,
			ease: "Power1.easeOut"
		});
		a(b).removeClass("cursor-close")
	}
	a("a, .zoom-cursor, .trigger-close, .trigger-plus").on("mouseleave", g)
})(jQuery);
