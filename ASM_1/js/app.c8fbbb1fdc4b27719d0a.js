!(function (t) {
  var e = {};
  function o(i) {
    if (e[i]) return e[i].exports;
    var s = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = t),
    (o.c = e),
    (o.d = function (t, e, i) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          o.d(
            i,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return i;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 18));
})({
  18: function (t, e, o) {
    "use strict";
    o.r(e);
    o(19);
    o(20);
  },
  19: function (t, e, o) {},
  20: function (t, e) {
    var o,
      i,
      s,
      n,
      a,
      l,
      r,
      c,
      d,
      u,
      p,
      f,
      v,
      h,
      g,
      m,
      w,
      b,
      S,
      y,
      C,
      _,
      k,
      T,
      x,
      j,
      P;
    (o = jQuery),
      (i = {}),
      (s = o(".filter__grid-wrapper")),
      (n = o(".filter__btn")),
      (a = o("#hero-slider")),
      (l = o("#testimonial-slider")),
      (r = o("[data-click-scroll]")),
      (c = o(".product-slider")),
      (d = o(".tab-slider")),
      (u = o(".input-counter")),
      (p = o("[data-countdown]")),
      (f = o('[data-modal="modal"]')),
      (v = o("#get-address")),
      (h = o("[data-bill]")),
      (g = o(".post-gallery")),
      (m = o(".blog-m")),
      (w = o(".post-video-block")),
      (b = o('iframe[src*="youtube"]')),
      (S = o("#pd-o-initiate")),
      (y = o("#pd-o-thumbnail")),
      (C = o("#js-product-detail-modal")),
      (_ = o("#js-product-detail-modal-thumbnail")),
      (k = o(".shop-w__category-list .has-list > .js-shop-category-span")),
      (T = o(".js-shop-grid-target")),
      (x = o(".js-shop-list-target")),
      (j = o(".shop-p__collection > div")),
      (P = o(".js-shop-filter-target")),
      (i.initScrollUp = function () {
        o.scrollUp({
          scrollName: "topScroll",
          scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
          easingType: "linear",
          scrollSpeed: 900,
          animation: "fade",
          zIndex: 100,
        });
      }),
      (i.initScrollSpy = function () {
        var t = o("#js-scrollspy-trigger");
        t.length && t.scrollspy({ target: "#init-scrollspy" });
      }),
      (i.onClickScroll = function () {
        r.on("click", function (t) {
          t.preventDefault();
          var e = o(this).data("click-scroll");
          o(e).length &&
            o("html").animate(
              { scrollTop: o(e).offset().top },
              1e3,
              function () {}
            );
        });
      }),
      (i.initTooltip = function () {
        o('[data-tooltip="tooltip"]').tooltip({ trigger: "hover" });
      }),
      (i.initModal = function () {
        f.length &&
          f.on("click", function () {
            var t = o(this).data("modal-id");
            o(t).modal({ backdrop: "static", keyboard: !1, show: !0 });
          });
      }),
      (i.defaultAddressCheckbox = function () {
        v.length &&
          v.change(function () {
            this.checked
              ? (h.prop("disabled", !0),
                o("#make-default-address").prop("checked", !1))
              : h.prop("disabled", !1);
          });
      }),
      (i.reshopNavigation = function () {
        o("#navigation").shopNav(),
          o("#navigation1").shopNav(),
          o("#navigation2").shopNav(),
          o("#navigation3").shopNav();
      }),
      (i.onTabActiveRefreshSlider = function () {
        o('.tab-list [data-toggle="tab"]').on("shown.bs.tab", function (t) {
          var e = o(t.target).attr("href");
          o(e + ".active")
            .find(".tab-slider")
            .trigger("refresh.owl.carousel");
        });
      }),
      (i.primarySlider = function () {
        a.length &&
          a.owlCarousel({
            items: 1,
            autoplayTimeout: 8e3,
            loop: !0,
            margin: -1,
            dots: !1,
            smartSpeed: 1500,
            rewind: !1,
            nav: !1,
            responsive: { 992: { dots: !0 } },
          });
      }),
      (i.productSlider = function () {
        c.length &&
          c
            .on("initialize.owl.carousel", function () {
              o(this).closest(".slider-fouc").removeAttr("class");
            })
            .each(function () {
              var t = o(this),
                e = t.data("item");
              t.owlCarousel({
                autoplay: !1,
                loop: !1,
                dots: !1,
                rewind: !0,
                smartSpeed: 1500,
                nav: !0,
                navElement: "div",
                navClass: ["p-prev", "p-next"],
                navText: [
                  '<i class="fas fa-long-arrow-alt-left"></i>',
                  '<i class="fas fa-long-arrow-alt-right"></i>',
                ],
                responsive: {
                  0: { items: 1 },
                  768: { items: e - 2 },
                  991: { items: e - 1 },
                  1200: { items: e },
                },
              });
            });
      }),
      (i.tabSlider = function () {
        d.length &&
          d
            .on("initialize.owl.carousel", function () {
              o(this).closest(".slider-fouc").removeAttr("class");
            })
            .each(function () {
              var t = o(this),
                e = t.data("item");
              t.owlCarousel({
                autoplay: !1,
                loop: !1,
                dots: !1,
                rewind: !0,
                smartSpeed: 1500,
                nav: !0,
                navElement: "div",
                navClass: ["t-prev", "t-next"],
                navText: [
                  '<i class="fas fa-long-arrow-alt-left"></i>',
                  '<i class="fas fa-long-arrow-alt-right"></i>',
                ],
                responsive: {
                  0: { items: 1 },
                  768: { items: e - 2 },
                  991: { items: e - 1 },
                  1200: { items: e },
                },
              });
            });
      }),
      (i.brandSlider = function () {
        var t = o("#brand-slider");
        if (t.length) {
          var e = t.data("item");
          t.on("initialize.owl.carousel", function () {
            o(this).closest(".slider-fouc").removeAttr("class");
          }).owlCarousel({
            autoplay: !1,
            loop: !1,
            dots: !1,
            rewind: !0,
            nav: !0,
            navElement: "div",
            navClass: ["b-prev", "b-next"],
            navText: [
              '<i class="fas fa-angle-left"></i>',
              '<i class="fas fa-angle-right"></i>',
            ],
            responsive: {
              0: { items: 1 },
              768: { items: 3 },
              991: { items: e },
              1200: { items: e },
            },
          });
        }
      }),
      (i.testimonialSlider = function () {
        l.length &&
          l
            .on("initialize.owl.carousel", function () {
              o(this).closest(".slider-fouc").removeAttr("class");
            })
            .owlCarousel({
              items: 1,
              autoplay: !1,
              loop: !1,
              dots: !0,
              rewind: !1,
              smartSpeed: 1500,
              nav: !1,
            });
      }),
      (i.appConfiguration = function () {
        o("body").removeAttr("class"), o(".preloader").removeClass("is-active");
      }),
      (i.isotopeFilter = function () {
        s.length && s.isotope({ itemSelector: ".filter__item", filter: "*" }),
          n.length &&
            n.on("click", function () {
              var t = o(this).attr("data-filter");
              s.isotope({ filter: t }),
                o(this)
                  .closest(".filter-category-container")
                  .find(".js-checked")
                  .removeClass("js-checked"),
                o(this).addClass("js-checked");
            });
      }),
      (i.timerCountDown = function () {
        p.length &&
          p.each(function () {
            var t = o(this),
              e = o(this).data("countdown");
            t.countdown(e, function (e) {
              t.html(
                e.strftime(
                  '<div class="countdown__content"><div><span class="countdown__value">%D</span><span class="countdown__key">Days</span></div></div><div class="countdown__content"><div><span class="countdown__value">%H</span><span class="countdown__key">Hours</span></div></div><div class="countdown__content"><div><span class="countdown__value">%M</span><span class="countdown__key">Mins</span></div></div><div class="countdown__content"><div><span class="countdown__value">%S</span><span class="countdown__key">Secs</span></div></div>'
                )
              );
            });
          });
      }),
      (i.initInputCounter = function () {
        u.length &&
          (u.find(".input-counter__plus").on("click", function () {
            var t = o(this).parent().find("input"),
              e = parseInt(t.val()) + 1;
            t.val(e).change();
          }),
          u.find(".input-counter__minus").on("click", function () {
            var t = o(this).parent().find("input"),
              e = parseInt(t.val()) - 1;
            t.val(e).change();
          }),
          u.find("input").change(function () {
            var t = o(this),
              e = t.data("min"),
              i = t.data("max"),
              s = parseInt(t.val());
            s || (s = 1), (s = Math.min(s, i)), (s = Math.max(s, e)), t.val(s);
          }));
      }),
      (i.blogPostGallery = function () {
        g.length &&
          g
            .on("initialize.owl.carousel", function () {
              o(this).closest(".slider-fouc").removeAttr("class");
            })
            .each(function () {
              o(this).owlCarousel({
                items: 1,
                autoplay: !1,
                loop: !1,
                dots: !1,
                rewind: !0,
                smartSpeed: 1500,
                nav: !0,
                navElement: "div",
                navClass: ["post-prev", "post-next"],
                navText: [
                  '<i class="fas fa-long-arrow-alt-left"></i>',
                  '<i class="fas fa-long-arrow-alt-right"></i>',
                ],
              });
            });
      }),
      (i.blogPostMasonry = function () {
        m.length &&
          m
            .find(".blog-m-init")
            .isotope({
              itemSelector: ".blog-m__element",
              layoutMode: "masonry",
            });
      }),
      (i.blogPostVideo = function () {
        w.length &&
          w.on("click", function (t) {
            t.preventDefault();
            var e = o(this),
              i = e.find(".post-video")[0];
            o(i).on("ended", function () {
              e.removeClass("process");
            }),
              i.paused
                ? (i.play(),
                  o(this).addClass("process"),
                  o(this).hasClass("pause") && o(this).removeClass("pause"))
                : (i.pause(), o(this).addClass("pause"));
          });
      }),
      (i.blogPostEmbedVideo = function () {
        b.length && b.parent().fitVids();
      }),
      (i.productDetailInit = function () {
        if (S.length && y.length) {
          var t = {
            borderSize: 1,
            autoWidth: !0,
            zoomWindowWidth: 540,
            zoomWindowHeight: 540,
            zoomWindowOffetx: 10,
            borderColour: "#e9e9e9",
            cursor: "pointer",
          };
          S.on("init", function () {
            o(this).closest(".slider-fouc").removeClass("slider-fouc");
          }),
            S.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: !1,
              arrows: !1,
              dots: !1,
              fade: !0,
              asNavFor: y,
            }),
            o("#pd-o-initiate .slick-current img").elevateZoom(t),
            S.on("beforeChange", function (e, i, s, n) {
              var a = o(i.$slides[n]).find("img");
              o(".zoomWindowContainer,.zoomContainer").remove(),
                o(a).elevateZoom(t);
            }),
            S.lightGallery({
              selector: ".pd-o-img-wrap",
              download: !1,
              thumbnail: !1,
              autoplayControls: !1,
              actualSize: !1,
              hash: !1,
              share: !1,
            }),
            y.on("init", function () {
              o(this).closest(".slider-fouc").removeAttr("class");
            }),
            y.slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: !1,
              arrows: !0,
              dots: !1,
              focusOnSelect: !0,
              asNavFor: S,
              prevArrow:
                '<div class="pt-prev"><i class="fas fa-angle-left"></i>',
              nextArrow:
                '<div class="pt-next"><i class="fas fa-angle-right"></i>',
              responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 4 } },
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 576, settings: { slidesToShow: 2 } },
              ],
            });
        }
      }),
      (i.modalProductDetailInit = function () {
        C.length &&
          _.length &&
          (C.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !1,
            arrows: !1,
            dots: !1,
            fade: !0,
            asNavFor: _,
          }),
          _.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !1,
            arrows: !0,
            dots: !1,
            focusOnSelect: !0,
            asNavFor: C,
            prevArrow: '<div class="pt-prev"><i class="fas fa-angle-left"></i>',
            nextArrow:
              '<div class="pt-next"><i class="fas fa-angle-right"></i>',
            responsive: [
              { breakpoint: 1200, settings: { slidesToShow: 4 } },
              { breakpoint: 992, settings: { slidesToShow: 3 } },
              { breakpoint: 576, settings: { slidesToShow: 2 } },
            ],
          }),
          o("#quick-look").on("shown.bs.modal", function () {
            C.resize();
          }));
      }),
      (i.shopCategoryToggle = function () {
        k.length &&
          k.on("click", function () {
            o(this).toggleClass("is-expanded"),
              o(this).next("ul").stop(!0, !0).slideToggle();
          });
      }),
      (i.shopPerspectiveChange = function () {
        T.length &&
          x.length &&
          (T.on("click", function () {
            o(this).addClass("is-active"),
              x.removeClass("is-active"),
              j.removeClass("is-list-active"),
              j.addClass("is-grid-active");
          }),
          x.on("click", function () {
            o(this).addClass("is-active"),
              T.removeClass("is-active"),
              j.removeClass("is-grid-active"),
              j.addClass("is-list-active");
          }));
      }),
      (i.shopSideFilter = function () {
        P.length &&
          P.on("click", function () {
            o(this).toggleClass("is-active");
            var t = o(this).attr("data-side");
            o(t).toggleClass("is-open");
          });
      }),
      (i.showNewsletterModal = function () {
        o("#newsletter-modal").length &&
          setTimeout(function () {
            o("#newsletter-modal").modal({
              backdrop: "static",
              keyboard: !1,
              show: !0,
            });
          }, 5e3);
      }),
      o(window).on("load", function () {
        i.showNewsletterModal(),
          a.length &&
            ((a.data("owl.carousel").options.autoplay = !0),
            a.trigger("refresh.owl.carousel"));
      }),
      i.initScrollUp(),
      i.initTooltip(),
      i.initModal(),
      i.defaultAddressCheckbox(),
      i.initScrollSpy(),
      i.onClickScroll(),
      i.reshopNavigation(),
      i.primarySlider(),
      i.productSlider(),
      i.tabSlider(),
      i.onTabActiveRefreshSlider(),
      i.brandSlider(),
      i.testimonialSlider(),
      i.appConfiguration(),
      i.isotopeFilter(),
      i.timerCountDown(),
      i.initInputCounter(),
      i.blogPostGallery(),
      i.blogPostVideo(),
      i.blogPostEmbedVideo(),
      i.blogPostMasonry(),
      i.productDetailInit(),
      i.modalProductDetailInit(),
      i.shopCategoryToggle(),
      i.shopPerspectiveChange(),
      i.shopSideFilter();
  },
});
