!(function (e) {
  "use strict";
  setTimeout(function () {
    var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      ),
      t = document.getElementById("preloader");
    e
      ? t && t.parentNode && t.parentNode.removeChild(t)
      : (setTimeout(function () {
          t.classList.add("preloaded");
        }, 1e3),
        setTimeout(function () {
          t && t.parentNode && t.parentNode.removeChild(t);
        }, 2e3));
  }, 1e3);
  var t,
    s = ".menu_toggle, .close-menu ",
    i = ".mobile-menu, .minfo__app, .menu-overlay";
  function n() {
    1240 > e(window).width()
      ? e.scrollIt({ scrollTime: 1e3, topOffset: -55 })
      : e.scrollIt({ scrollTime: 1e3, topOffset: 0 });
  }
  (t = e(s)).on("click", function () {
    e(s).toggleClass("is-menu-open");
  }),
    e(s).on("click", function () {
      e(i).toggleClass("is-menu-open");
    }),
    e(document).on("click", function (n) {
      var o = e(i).add(t);
      !0 !== o.is(n.target) &&
        0 === o.has(n.target).length &&
        (e(i).removeClass("is-menu-open"), e(s).removeClass("is-menu-open"));
    }),
    e(".mobile-menu .main-menu a, .menu-overlay").on("click", function (t) {
      e(i).removeClass("is-menu-open"), e(s).removeClass("is-menu-open");
    }),
    e(document).ready(function () {
      e(window).on("resize", n), n();
    }),
    e(".counters .number span").counterUp({ delay: 10, time: 1500 }),
    new Swiper(".logo-slider .swiper", {
      spaceBetween: 30,
      slidesPerView: 3,
      loop: !0,
      speed: 3e3,
      autoplay: { delay: 0, disableOnInteraction: !1 },
      allowTouchMove: !1,
      breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
      },
    }),
    new Swiper(".skills-slider .swiper", {
      spaceBetween: 30,
      slidesPerView: 2,
      loop: !1,
      speed: 800,
      breakpoints: { 600: { slidesPerView: 3 }, 800: { slidesPerView: 4 } },
      navigation: {
        nextEl: "#skill .button-next",
        prevEl: "#skill .button-prev",
      },
      on: {
        init: function () {
          e(".skills-slider-navigation .counter").html(
            '<span class="text-theme">' +
              (this.realIndex + 1) +
              "</span>/" +
              this.slides.length
          );
        },
        slideChange: function () {
          e(".skills-slider-navigation .counter").html(
            '<span class="text-theme">' +
              (this.realIndex + 1) +
              "</span>/" +
              this.slides.length
          );
        },
      },
    }),
    new Swiper(".testimonial-slider .swiper", {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: !1,
      speed: 800,
      breakpoints: { 768: { slidesPerView: 2 } },
      navigation: {
        nextEl: ".testimonial-slider-navigation .button-next",
        prevEl: ".testimonial-slider-navigation .button-prev",
      },
      on: {
        init: function () {
          e(".testimonial-slider-navigation .counter").html(
            '<span class="text-theme">' +
              (this.realIndex + 1) +
              "</span>/" +
              this.slides.length
          );
        },
        slideChange: function () {
          e(".testimonial-slider-navigation .counter").html(
            '<span class="text-theme">' +
              (this.realIndex + 1) +
              "</span>/" +
              this.slides.length
          );
        },
      },
    });
  var o = e(".progressbar");
  if (
    (o.length > 0 &&
      o.waypoint(
        function () {
          e(".bar").each(function () {
            e(this)
              .find(".progress-content")
              .animate({ width: e(this).attr("data-percentage") }, 2e3);
          });
        },
        { offset: "100%" }
      ),
    e(".custom_cursor").length)
  ) {
    var l = document.querySelector(".custom_cursor_one"),
      r = document.querySelector(".custom_cursor_two"),
      a = document.querySelectorAll("a");
    document.addEventListener("mousemove", function (e) {
      e.clientX,
        e.clientY,
        (l.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`);
    }),
      document.addEventListener("mousemove", function (e) {
        var t = e.clientX,
          s = e.clientY;
        (r.style.left = t + "px"), (r.style.top = s + "px");
      }),
      document.addEventListener("mousedown", function () {
        l.classList.add("click"), r.classList.add("custom_cursor_hover");
      }),
      document.addEventListener("mouseup", function () {
        l.classList.remove("click"), r.classList.remove("custom_cursor_hover");
      }),
      a.forEach((e) => {
        e.addEventListener("mouseover", () => {
          l.classList.add("custom_cursor_hover");
        }),
          e.addEventListener("mouseleave", () => {
            l.classList.remove("custom_cursor_hover");
          });
      });
  }
  function c() {
    e(".minfo__sidebar .progressCircle").each(function () {
      var t = e(this).offset().top,
        s = e(window).scrollTop(),
        i = e(this).find(".circle").attr("data-percent"),
        n = e(this).data("animate");
      t < s + e(window).height() - 30 &&
        !n &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 30,
            value: i / 100,
            thickness: 2,
            lineCap: "round",
            emptyFill: "#777777",
            fill: "#00BC91",
            size: e(".circle").width(),
          })
          .on("circle-animation-progress")
          .stop());
    }),
      e(".skills-slider .progressCircle").each(function () {
        var t = e(this).offset().top,
          s = e(window).scrollTop(),
          i = e(this).find(".circle").attr("data-percent"),
          n = e(this).data("animate");
        t < s + e(window).height() - 30 &&
          !n &&
          (e(this).data("animate", !0),
          e(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: i / 100,
              thickness: 1.5,
              lineCap: "round",
              emptyFill: "#777777",
              fill: "#00BC91",
              size: e(".skills-slider .circle").width(),
            })
            .on("circle-animation-progress")
            .stop());
      });
  }
  setTimeout(function () {
    c(), e(window).scroll(c);
  }, 2500);
})(jQuery);
