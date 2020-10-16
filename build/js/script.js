"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var l = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var l in e) {
      n.d(o, l, function (t) {
        return e[t];
      }.bind(null, l));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 9);
}([function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = !1;

    function t() {
      e = !0, setTimeout(function () {
        e = !1;
      }, 9e3);
      var t = document.getElementById("circleNum"),
          n = t.style.top,
          o = t.style.left,
          l = document.getElementById("circleNum1"),
          i = document.getElementById("circleNum12"),
          r = (document.getElementById("circleNum2"), document.getElementById("circleNum22")),
          c = (document.getElementById("circleNum3"), document.getElementById("circleNum32"));
      t.getBoundingClientRect(), l.getBoundingClientRect();

      function a() {
        t.style.transition = "all linear 1s", t.classList.remove("active"), t.style.left = o, t.style.top = n;
      }

      new Promise(function (e) {
        !function () {
          t.classList.add("active");
          var e = $("#circleNum1").offset();
          $("#circleNum").css("left", "".concat(e.left, "px"));
        }(), setTimeout(function () {
          e();
        }, 1e3);
      }).then(function () {
        $("#circleNum").offset($("#circleNum3").offset()), function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (t === s.length) return a(), void (s[t - 1].style.clip = "rect(0px, 150px, 0px, 0px)");
          0 != t && (s[t - 1].style.clip = "rect(0px, 150px, 0px, 0px)");
          var n = s[t];
          n.classList.add("active"), n.style.clip = "rect(0px, 150px, 300px, 0px)", setTimeout(function () {
            n.classList.remove("active"), t++, e(t);
          }, d[t]);
        }();
      });
      var s = [i, r, c],
          d = [2500, 3e3, 1600];
    }

    var n = document.getElementById("case"),
        o = function o(e) {
      var t = {
        top: window.pageYOffset + e.getBoundingClientRect().top,
        left: window.pageXOffset + e.getBoundingClientRect().left,
        right: window.pageXOffset + e.getBoundingClientRect().right,
        bottom: window.pageYOffset + e.getBoundingClientRect().bottom
      },
          n = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
      t.top, e.offsetHeight;

      function o() {
        var e = document.getElementById("bgAnim");
        document.getElementById("textClipColor");

        function o(t) {
          e.getBoundingClientRect().left, e.getBoundingClientRect().width;

          if (600 === window.innerWidth && 125, !(window.innerWidth < 600)) {
            switch (t = 100 * Math.round(t / 100)) {
              case 0:
              case 100:
              case 200:
              case 300:
                e.style.transform = "scale(1)";
                break;

              case 400:
                e.style.transform = "scale(2)";
                break;

              case 500:
                e.style.transform = "scale(3)";
                break;

              case 600:
                e.style.transform = "scale(4)";
                break;

              case 700:
                e.style.transform = "scale(5)";
                break;

              case 800:
                e.style.transform = "scale(6)";
                break;

              case 900:
              default:
                e.style.transform = "scale(7)";
            }
          }
        }

        t.top < n.top ? o(n.top - t.top) : o(t.top - n.top);
      }

      t.bottom > n.top && t.top < n.bottom && o();
    },
        l = document.getElementById("faq"),
        i = function i(n) {
      var o = window.pageYOffset + n.getBoundingClientRect().top,
          l = window.pageYOffset + n.getBoundingClientRect().bottom,
          i = window.pageYOffset,
          r = window.pageYOffset + document.documentElement.clientHeight;
      n.offsetHeight;
      l > i && o < r && window.innerWidth > 1024 && !e && t();
    };

    window.addEventListener("scroll", function () {
      o(n), i(l);
    }), o(n), i(l);
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = {},
        t = document.querySelectorAll('input[name="email"]');
    Array.prototype.slice.call(t).forEach(function (t) {
      Inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"
      }).mask(t);

      var n = t.parentElement,
          o = function o() {
        n.classList.remove("valid"), n.classList.remove("invalid");
      };

      t.addEventListener("blur", function () {
        o(), t.value.trim() && (!function (e) {
          return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(e);
        }(t.value) ? (n.classList.add("invalid"), e[t] = !1) : (n.classList.add("valid"), e[t] = !0));
      }), t.addEventListener("change", o), t.addEventListener("keyup", o);
    });
    var n = {},
        o = document.querySelectorAll('input[name="tel"]');
    Array.prototype.slice.call(o).forEach(function (e) {
      Inputmask({
        mask: "+99999999999[9][9][9][9]"
      }).mask(e);

      var t = window.intlTelInput(e, {
        utilsScript: "./build/lib/mask/js/utils.js",
        preferredCountries: ["ru", "ua"]
      }),
          o = e.parentElement.parentElement,
          l = function l() {
        console.log(t), o.classList.remove("valid"), o.classList.remove("invalid");
      };

      e.addEventListener("blur", function () {
        l();
        if (e.value.trim()) if (t.isValidNumber()) o.classList.add("valid"), n[e] = !0;else {
          t.getValidationError();
          o.classList.add("invalid"), n[e] = !1;
        }
      }), e.addEventListener("change", l), e.addEventListener("keyup", l);
    });
    document.getElementById("open-form"), document.getElementById("open-form2"), document.getElementById("open-form5"), document.getElementById("open-form3"), document.getElementById("open-form4"), document.getElementById("open-form6");
    var l = document.querySelectorAll(".same__form");
    Array.prototype.slice.call(l).forEach(function (t) {
      $(t).on("submit", function (o) {
        o.preventDefault();
        var l = this.querySelector('input[name="tel"]'),
            i = (this.querySelector('button[type="submit"]'), this.querySelector('input[name="tel"]'));
        if (i) e[i];
        if (!n[l] || !i) return alert("Некорректно заполнены поля");
        var r = $(this).attr("data-block"),
            c = $(this).serialize();
        r ? (c += "&block=".concat(r), console.log("block"), console.log(r)) : (r = localStorage.getItem("blockNameForSend"), c += "&block=".concat(r), console.log("block"), console.log(r)), console.log("sendBody"), console.log(c), fetch("./send.php", {
          method: "POST",
          body: c,
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }).then(function (e) {
          (console.log(e), e.ok) ? (alert("Заявка отправлена"), Array.prototype.slice.call(t.querySelectorAll("input")).forEach(function (e) {
            return e.value = "";
          })) : (alert("Ошибка отправки. Попробуйте позже."), console.error("Fetch: ".concat(e.statusText)));
        });
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    $("#promodalGallery").fotorama({
      width: "100%",
      maxwidth: "100%",
      ratio: 16 / 9,
      allowfullscreen: !0,
      nav: "thumbs",
      thumbmargin: 20,
      swipe: !0
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.getElementById("header"),
        t = window.scrollY;
    t >= 100 && e.classList.add("fix"), t < 100 && e.classList.remove("fix"), window.addEventListener("scroll", function (n) {
      (t = window.scrollY) >= 100 && e.classList.add("active"), t < 100 && e.classList.remove("active");
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    document.addEventListener("click", function (e) {
      var t = document.querySelector("#map iframe");
      "map" === e.target.id ? t.classList.add("active") : t.classList.remove("active");
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.getElementById("html"),
        t = document.getElementById("burger"),
        n = document.getElementById("closeNav"),
        o = document.getElementById("mobNav");

    function l(t) {
      t.classList.remove("active"), e.style.overflowX = "hidden", e.style.overflowY = "scroll";
    }

    function i(t) {
      t.classList.add("active"), e.style.overflowX = "hidden", e.style.overflowY = "hidden";
    }

    t.addEventListener("click", function () {
      i(o);
    }), n.addEventListener("click", function () {
      l(o);
    });
    var r = document.querySelectorAll(".header__navlink");
    Array.prototype.slice.call(r).forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), l(o);
      });
    });
    var c = document.getElementById("prodCard"),
        a = document.getElementById("closeProdCard"),
        s = document.querySelectorAll(".prodslider__slider-eyecont");
    Array.prototype.slice.call(s).forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), i(c);
        var t = e.target.parentElement.parentElement.children[3].children[0].innerText;
        localStorage.setItem("blockNameForSend", t), console.log(t);
      });
    }), a.addEventListener("click", function (e) {
      e.preventDefault(), l(c);
    });
    var d = document.getElementById("prodmodalToBuy"),
        u = document.getElementById("buyModal"),
        f = document.getElementById("closeBuyModal"),
        m = document.querySelectorAll(".prodslider__slider-btn");
    Array.prototype.slice.call(m).forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), i(u);
        var t = e.target.parentElement.children[0].innerText;
        localStorage.setItem("blockNameForSend", t), console.log(t);
      });
    }), f.addEventListener("click", function (e) {
      e.preventDefault(), l(u);
    }), d.addEventListener("click", function (e) {
      e.preventDefault(), l(c), i(u);
    });
    var p = document.getElementById("telModal"),
        v = document.getElementById("freeCall");
    document.getElementById("closeTelModal").addEventListener("click", function (e) {
      e.preventDefault(), l(p);
    }), v.addEventListener("click", function (e) {
      e.preventDefault(), i(p);
    });
    var g = document.getElementById("catalogModal");
    document.getElementById("closeCatalogModal").addEventListener("click", function (e) {
      e.preventDefault(), l(g);
    });
    var y = document.querySelectorAll(".prodslider__btn");
    Array.prototype.slice.call(y).forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), i(g);
        var t = "Заявка на каталог — ";
        t += e.target.parentElement.parentElement.children[0].innerText, localStorage.setItem("blockNameForSend", t), console.log(t);
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    for (var e = $(".prodslider").find(".prodslider__slider"), t = 0; t <= e.length; t++) {
      $(e[t]).slick({
        infinite: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: !0,
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            arrows: !1,
            dots: !0
          }
        }, {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            arrows: !1,
            dots: !0
          }
        }]
      }).on("setPosition", function (e, t) {
        t.$slides.css("height", t.$slideTrack.height() + "px");
      });
    }

    $(".brands__slider").slick({
      infinite: !1,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: !0,
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: !1,
          dots: !0
        }
      }, {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          arrows: !1,
          dots: !0
        }
      }]
    }), $(".reviews__slider").slick({
      infinite: !1,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !1,
      swipeToSlide: !0,
      responsive: [{
        breakpoint: 1441,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 993,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.querySelectorAll("a"),
        t = Array.prototype.slice.call(e),
        n = [];
    t.forEach(function (e) {
      var t = e.getAttribute("href");
      /^#/.exec(t) && n.push(e);
    }), n.forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        var t = this.getAttribute("href").substring(1),
            n = document.getElementById(t).getBoundingClientRect().top - 100;
        window.scrollBy({
          top: n,
          behavior: "smooth"
        });
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.getElementById("sentprodLoad"),
        t = e.innerText,
        n = !1;
    e.addEventListener("click", function () {
      if (n) {
        n = !1;
        o = document.querySelectorAll(".sentprod__map-item.hidden");
        Array.prototype.slice.call(o).forEach(function (e, t) {
          e.classList.remove("active"), e.classList.remove("visible");
        }), e.innerText = t;
      } else {
        n = !0;
        var o = document.querySelectorAll(".sentprod__map-item.hidden");
        Array.prototype.slice.call(o).forEach(function (e, t) {
          e.classList.add("visible"), setTimeout(function () {
            e.classList.add("active");
          }, 100 * t);
        }), e.innerText = "Скрыть список";
      }
    });
  };
}, function (e, t, n) {
  n(0), n(1), n(10), n(2), n(3), n(4), n(5), n(11), n(6), n(7), e.exports = n(8);
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {};
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var o = n(3),
      l = n(6),
      i = n(5),
      r = n(7),
      c = n(8),
      a = n(4),
      s = n(0),
      d = n(2),
      u = n(1);
  document.addEventListener("DOMContentLoaded", function () {
    Object(o["default"])(), Object(l["default"])(), Object(i["default"])(), Object(r["default"])(), Object(c["default"])(), Object(a["default"])(), Object(s["default"])(), Object(d["default"])(), Object(u["default"])();
  });
}]);