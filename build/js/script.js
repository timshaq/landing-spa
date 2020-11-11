"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var l = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var l in t) {
      n.d(o, l, function (e) {
        return t[e];
      }.bind(null, l));
    }
    return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 11);
}([function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = !1;

    function e() {
      t = !0, setTimeout(function () {
        t = !1;
      }, 9e3);
      var e = document.getElementById("circleNum"),
          n = e.style.top,
          o = e.style.left,
          l = document.getElementById("circleNum1"),
          s = document.getElementById("circleNum12"),
          i = (document.getElementById("circleNum2"), document.getElementById("circleNum22")),
          a = (document.getElementById("circleNum3"), document.getElementById("circleNum32"));
      e.getBoundingClientRect(), l.getBoundingClientRect();

      function r() {
        e.style.transition = "all linear 1s", e.classList.remove("active"), e.style.left = o, e.style.top = n;
      }

      new Promise(function (t) {
        !function () {
          e.classList.add("active");
          var t = $("#circleNum1").offset();
          $("#circleNum").css("left", "".concat(t.left, "px"));
        }(), setTimeout(function () {
          t();
        }, 1e3);
      }).then(function () {
        $("#circleNum").offset($("#circleNum3").offset()), function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (e === d.length) return r(), void (d[e - 1].style.clip = "rect(0px, 150px, 0px, 0px)");
          0 != e && (d[e - 1].style.clip = "rect(0px, 150px, 0px, 0px)");
          var n = d[e];
          n.classList.add("active"), n.style.clip = "rect(0px, 150px, 300px, 0px)", setTimeout(function () {
            n.classList.remove("active"), e++, t(e);
          }, c[e]);
        }();
      });
      var d = [s, i, a],
          c = [2500, 3e3, 1600];
    }

    var n = document.getElementById("case"),
        o = function o(t) {
      var e = {
        top: window.pageYOffset + t.getBoundingClientRect().top,
        left: window.pageXOffset + t.getBoundingClientRect().left,
        right: window.pageXOffset + t.getBoundingClientRect().right,
        bottom: window.pageYOffset + t.getBoundingClientRect().bottom
      },
          n = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
      e.top, t.offsetHeight;

      function o() {
        var t = document.getElementById("bgAnim");
        document.getElementById("textClipColor");

        function o(e) {
          t.getBoundingClientRect().left, t.getBoundingClientRect().width;

          if (600 === window.innerWidth && 125, !(window.innerWidth < 600)) {
            switch (e = 100 * Math.round(e / 100)) {
              case 0:
              case 100:
              case 200:
              case 300:
                t.style.transform = "scale(1)";
                break;

              case 400:
                t.style.transform = "scale(2)";
                break;

              case 500:
                t.style.transform = "scale(3)";
                break;

              case 600:
                t.style.transform = "scale(4)";
                break;

              case 700:
                t.style.transform = "scale(5)";
                break;

              case 800:
                t.style.transform = "scale(6)";
                break;

              case 900:
              default:
                t.style.transform = "scale(7)";
            }
          }
        }

        e.top < n.top ? o(n.top - e.top) : o(e.top - n.top);
      }

      e.bottom > n.top && e.top < n.bottom && o();
    },
        l = document.getElementById("faq"),
        s = function s(n) {
      var o = window.pageYOffset + n.getBoundingClientRect().top,
          l = window.pageYOffset + n.getBoundingClientRect().bottom,
          s = window.pageYOffset,
          i = window.pageYOffset + document.documentElement.clientHeight;
      n.offsetHeight;
      l > s && o < i && window.innerWidth > 1024 && !t && e();
    };

    window.addEventListener("scroll", function () {
      o(n), s(l);
    }), o(n), s(l);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = {},
        e = document.querySelectorAll('input[name="email"]');
    Array.prototype.slice.call(e).forEach(function (e) {
      Inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"
      }).mask(e);

      var n = e.parentElement,
          o = function o() {
        n.classList.remove("valid"), n.classList.remove("invalid");
      };

      e.addEventListener("blur", function () {
        o(), e.value.trim() && (!function (t) {
          return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(t);
        }(e.value) ? (n.classList.add("invalid"), t[e] = !1) : (n.classList.add("valid"), t[e] = !0));
      }), e.addEventListener("change", o), e.addEventListener("keyup", o);
    });
    var n = {},
        o = document.querySelectorAll('input[name="tel"]');
    Array.prototype.slice.call(o).forEach(function (t) {
      Inputmask({
        mask: "+99999999999[9][9][9][9]"
      }).mask(t);

      var e = window.intlTelInput(t, {
        utilsScript: "./build/lib/mask/js/utils.js",
        preferredCountries: ["ru", "ua"]
      }),
          o = t.parentElement.parentElement,
          l = function l() {
        o.classList.remove("valid"), o.classList.remove("invalid");
      };

      t.addEventListener("blur", function () {
        l();
        if (t.value.trim()) if (e.isValidNumber()) o.classList.add("valid"), n[t] = !0;else {
          e.getValidationError();
          o.classList.add("invalid"), n[t] = !1;
        }
      }), t.addEventListener("change", l), t.addEventListener("keyup", l);
    });
    var l = document.querySelectorAll(".same__form");
    Array.prototype.slice.call(l).forEach(function (e) {
      $(e).on("submit", function (o) {
        o.preventDefault();
        var l = this.querySelector('input[name="tel"]'),
            s = (this.querySelector('button[type="submit"]'), this.querySelector('input[name="tel"]'));
        if (s) t[s];
        if (!n[l] || !s) return alert("Некорректно заполнены поля");
        var i = $(this).attr("data-block"),
            a = $(this).serialize();
        i || (i = localStorage.getItem("blockNameForSend")), a += "&block=".concat(i), fetch("./send.php", {
          method: "POST",
          body: a,
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }).then(function (t) {
          t.ok ? (alert("Заявка отправлена"), Array.prototype.slice.call(e.querySelectorAll("input")).forEach(function (t) {
            return t.value = "";
          }), e.parentElement.remove("active"), html.style.overflowX = "hidden", html.style.overflowY = "scroll") : (alert("Ошибка отправки. Попробуйте позже."), console.error("Fetch: ".concat(t.statusText)));
        });
      });
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
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
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = document.getElementById("header"),
        e = window.scrollY;
    e >= 100 && t.classList.add("fix"), e < 100 && t.classList.remove("fix"), window.addEventListener("scroll", function (n) {
      (e = window.scrollY) >= 100 && t.classList.add("active"), e < 100 && t.classList.remove("active");
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    console.log("loaded");
    var t = $("#hydroSlider"),
        e = $("#perelivSlider"),
        n = $("#swimSlider");
    var o;
    var l;
    $.getJSON("./build/lib/dataHeaders.json", function (i) {
      o = i, $.getJSON("./build/lib/dataProducts.json", function (o) {
        l = _toConsumableArray(o);

        for (var i = 0; i < 12; i++) {
          o.shift();
        }

        var c = function c(t) {
          for (var e = _toConsumableArray(t), n = e.length - 1; n > 0; n--) {
            var o = Math.floor(Math.random() * (n + 1)),
                l = e[n];
            e[n] = e[o], e[o] = l;
          }

          return e;
        };

        var u = c(o = o.filter(function (t) {
          return t.id.includes("gmb");
        })),
            p = c(u),
            m = c(p);
        u.map(function (e) {
          t.slick("slickAdd", s(e.name, e.img[0], e.price, e.id));
        }), p.map(function (t) {
          e.slick("slickAdd", s(t.name, t.img[0], t.price, t.id));
        }), m.map(function (t) {
          n.slick("slickAdd", s(t.name, t.img[0], t.price, t.id));
        }), function () {
          var t = document.getElementById("prodCard"),
              e = document.querySelectorAll(".prodslider__slider-eyecont"),
              n = Array.prototype.slice.call(e);
          var o = document.getElementById("currentProduct");
          n.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault();
              var n = e.target.offsetParent.offsetParent.querySelector("h3").innerText;
              localStorage.setItem("blockNameForSend", n);
              var s = e.target.offsetParent.offsetParent.getAttribute("data-product-id");

              if (s) {
                a(t);
                var i = l.find(function (t) {
                  return t.id == s;
                });
                o.innerHTML = d(i), r();
              }
            });
          });
        }();
      });
    });

    var s = function s(t, e, n, o) {
      var l = e.replace(".jpg", "").replace(".png", "");
      return "\n\t\t\t<div class=\"prodslider__slider-item\" data-product-id=\"".concat(o, "\">\n\t\t\t\t\n\t\t\t\t<div class=\"prodslider__slider-mask\"></div>\n\n\t\t\t\t<button class=\"prodslider__slider-eyecont\" type=\"button\">\n\t\t\t\t\t<picture>\n\t\t\t\t\t\t<source srcset=\"build/img/slider__eye.webp\" type=\"image/webp\">\n\t\t\t\t\t\t<img src=\"build/img/slider__eye.png\" alt=\"\" class=\"prodslider__slider-eye\">\n\t\t\t\t\t</picture>\n\t\t\t\t</button>\n\n\t\t\t\t<div class=\"prodslider__slider-phcont\">\n\t\t\t\t\t<picture>\n\t\t\t\t\t\t<source srcset=\"").concat(l = "build/img/products/" + (l += ".webp"), "\" type=\"image/webp\">\n\t\t\t\t\t\t<img src=\"").concat(e = "build/img/products/" + e, "\" alt=\"\" class=\"prodslider__slider-ph\">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"prodslider__slider-row\">\n\t\t\t\t\t<h3 class=\"prodslider__slider-title\">\n\t\t\t\t\t\t").concat(t, "\n\t\t\t\t\t</h3>\n\t\t\t\t\t<h4 class=\"prodslider__slider-price\">\n\t\t\t\t\t\t").concat(n, "\n\t\t\t\t\t</h4>\n\t\t\t\t\t<button class=\"prodslider__slider-btn\" type=\"button\">\n\t\t\t\t\t\t\u041A\u0443\u043F\u0438\u0442\u044C\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t");
    };

    function i(t) {
      t.classList.remove("active"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function a(t) {
      t.classList.add("active"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    function r() {
      $("#promodalGallery").fotorama({
        width: "100%",
        maxwidth: "100%",
        ratio: 16 / 9,
        allowfullscreen: !0,
        nav: "thumbs",
        thumbmargin: 20,
        swipe: !0
      });
      var t = document.getElementById("prodmodalToBuy"),
          e = document.getElementById("buyModal"),
          n = document.getElementById("closeBuyModal"),
          o = document.querySelectorAll(".prodslider__slider-btn");
      Array.prototype.slice.call(o).forEach(function (t) {
        t.addEventListener("click", function (t) {
          t.preventDefault(), a(e);
          var n = t.target.parentElement.children[0].innerText;
          localStorage.setItem("blockNameForSend", n);
        });
      }), n.addEventListener("click", function (t) {
        t.preventDefault(), i(e);
      }), t.addEventListener("click", function (t) {
        t.preventDefault(), i(prodCard), a(e);
      }), document.getElementById("closeProdCard").addEventListener("click", function (t) {
        t.preventDefault(), i(prodCard);
      });
    }

    var d = function d(t) {
      var e = "";

      if (t.img.map(function (t) {
        var n = t.replace(".jpg", "").replace(".png", "");
        n += ".webp";
        var o = document.getElementById("body").classList.contains("webp");
        e += o ? "\n\t\t\t\t<img src=\"build/img/products/".concat(n, "\" alt=\"\">\n\t\t\t") : "\n\t\t\t\t<img src=\"build/img/products/".concat(t, "\" alt=\"\">\n\t\t\t");
      }), t.id.includes("gmb")) {
        var n = "";
        Object.keys(t.technical_parameters).map(function (e) {
          n += "\n\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t".concat(o[e], "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t").concat(t.technical_parameters[e], "\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t\t");
        });
        var l = "",
            s = "",
            i = Object.keys(t.base_configuration);
        i.map(function (e, n) {
          n < i.length / 2 ? l += "\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t".concat(o[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.base_configuration[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t") : s += "\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t".concat(o[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.base_configuration[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t");
        });
        var a = "",
            r = "",
            d = Object.keys(t.add_options);
        return d.map(function (e, n) {
          n < d.length / 2 ? a += "\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t".concat(o[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.add_options[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t") : r += "\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t".concat(o[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.add_options[e], "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t");
        }), "\n\t\t\t<button type=\"button\" class=\"prodmodal__close\" id=\"closeProdCard\">\n\t\t\t\t<img src=\"build/img/close.png\" alt=\"\">\n\t\t\t</button>\n\t\t\t<h2 class=\"prodmodal__title\">\n\t\t\t\t".concat(t.name, "\n\t\t\t</h2>\n\n\t\t\t<div class=\"prodmodal__row\">\n\n\t\t\t\t<div class=\"prodmodal__col col-left gallery\">\n\n\t\t\t\t\t<div class=\"prodmodal__gallery\" id=\"promodalGallery\">\n\t\t\t\t\t\t").concat(e, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"prodmodal__col col-right\">\n\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.country, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.country, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.color_cup, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.color_cup, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.color_termo, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.color_termo, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t<h3 class=\"prodmodal__subtitle\">\n\t\t\t\t\t\t\t\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t").concat(n, "\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\n\t\t\t<h3 class=\"prodmodal__subtitle\">\n\t\t\t\t\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F\n\t\t\t</h3>\n\n\t\t\t<div class=\"prodmodal__row base\">\n\n\t\t\t\t<div class=\"prodmodal__col col-left base\">\n\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t").concat(l, "\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"prodmodal__col col-right base\">\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t").concat(s, "\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\n\t\t\t<h3 class=\"prodmodal__subtitle\">\n\t\t\t\t\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438\n\t\t\t</h3>\n\n\t\t\t<div class=\"prodmodal__row base\">\n\n\t\t\t\t<div class=\"prodmodal__col col-left base\">\n\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t").concat(a, "\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"prodmodal__col col-right base\">\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t").concat(r, "\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"prodmodal__row\">\n\t\t\t\t<button type=\"button\" class=\"prodmodal__btn btn_blue2\" id=\"prodmodalToBuy\">\n\t\t\t\t\t\u041A\u0443\u043F\u0438\u0442\u044C\n\t\t\t\t</button>\n\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t");
      }

      return "\n\t\t\t<button type=\"button\" class=\"prodmodal__close\" id=\"closeProdCard\">\n\t\t\t\t<img src=\"build/img/close.png\" alt=\"\">\n\t\t\t</button>\n\t\t\t<h2 class=\"prodmodal__title\">\n\t\t\t\t".concat(t.name, "\n\t\t\t</h2>\n\n\t\t\t<div class=\"prodmodal__row\">\n\n\t\t\t\t<div class=\"prodmodal__col col-left gallery\">\n\n\t\t\t\t\t<div class=\"prodmodal__gallery\" id=\"promodalGallery\">\n\t\t\t\t\t\t").concat(e, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"prodmodal__col col-right\">\n\n\t\t\t\t\t<ul class=\"prodmodal__options\">\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.brand_acces, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.country, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.articul_access, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.color_cup, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"prodmodal__options-item\">\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-name\">\n\t\t\t\t\t\t\t\t").concat(o.stock_access, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"prodmodal__options-descr\">\n\t\t\t\t\t\t\t\t").concat(t.color_termo, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"prodmodal__row\">\n\t\t\t\t<button type=\"button\" class=\"prodmodal__btn btn_blue2\" id=\"prodmodalToBuy\">\n\t\t\t\t\t\u041A\u0443\u043F\u0438\u0442\u044C\n\t\t\t\t</button>\n\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t");
    };
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = document.getElementById("map"),
        e = document.createElement("iframe");
    e.classList.add("footer__mapbg"), e.setAttribute("src", "https://yandex.ru/map-widget/v1/?um=constructor%3A7ca08e99e1dbd068bbf8aa43e9a7aa4c13e82b3b8d0d9fb9b31364459267a489&amp;source=constructor"), e.setAttribute("frameborder", "0"), t.append(e), document.addEventListener("click", function (t) {
      var e = document.querySelector("#map iframe");
      "map" === t.target.id ? e.classList.add("active") : e.classList.remove("active");
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = document.getElementById("html"),
        e = document.getElementById("burger"),
        n = document.getElementById("closeNav"),
        o = document.getElementById("mobNav");

    function l(e) {
      e.classList.remove("active"), t.style.overflowX = "hidden", t.style.overflowY = "scroll";
    }

    function s(e) {
      e.classList.add("active"), t.style.overflowX = "hidden", t.style.overflowY = "hidden";
    }

    e.addEventListener("click", function () {
      s(o);
    }), n.addEventListener("click", function () {
      l(o);
    });
    var i = document.querySelectorAll(".header__navlink");
    Array.prototype.slice.call(i).forEach(function (t) {
      t.addEventListener("click", function (t) {
        t.preventDefault(), l(o);
      });
    });
    var a = document.getElementById("telModal"),
        r = document.getElementById("freeCall");
    document.getElementById("closeTelModal").addEventListener("click", function (t) {
      t.preventDefault(), l(a);
    }), r.addEventListener("click", function (t) {
      t.preventDefault(), s(a);
    });
    var d = document.getElementById("catalogModal");
    document.getElementById("closeCatalogModal").addEventListener("click", function (t) {
      t.preventDefault(), l(d);
    });
    var c = document.querySelectorAll(".prodslider__btn");
    Array.prototype.slice.call(c).forEach(function (t) {
      t.addEventListener("click", function (t) {
        t.preventDefault(), s(d);
        var e = "Заявка на каталог — ";
        e += t.target.parentElement.parentElement.children[0].innerText, localStorage.setItem("blockNameForSend", e);
      });
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    for (var t = $(".prodslider").find(".prodslider__slider"), e = 0; e <= t.length; e++) {
      $(t[e]).slick({
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
      }).on("setPosition", function (t, e) {
        e.$slides.css("height", e.$slideTrack.height() + "px");
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
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = document.querySelectorAll("a"),
        e = Array.prototype.slice.call(t),
        n = [];
    e.forEach(function (t) {
      var e = t.getAttribute("href");
      /^#/.exec(e) && n.push(t);
    }), n.forEach(function (t) {
      t.addEventListener("click", function (t) {
        t.preventDefault();
        var e = this.getAttribute("href").substring(1),
            n = document.getElementById(e).getBoundingClientRect().top - 100;
        window.scrollBy({
          top: n,
          behavior: "smooth"
        });
      });
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t = document.getElementById("sentprodLoad"),
        e = t.innerText,
        n = !1;
    t.addEventListener("click", function () {
      if (n) {
        n = !1;
        o = document.querySelectorAll(".sentprod__map-item.hidden");
        Array.prototype.slice.call(o).forEach(function (t, e) {
          t.classList.remove("active"), t.classList.remove("visible");
        }), t.innerText = e;
      } else {
        n = !0;
        var o = document.querySelectorAll(".sentprod__map-item.hidden");
        Array.prototype.slice.call(o).forEach(function (t, e) {
          t.classList.add("visible"), setTimeout(function () {
            t.classList.add("active");
          }, 100 * e);
        }), t.innerText = "Скрыть список";
      }
    });
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {
    var t, e;
    t = function t(_t) {
      1 == _t ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp");
    }, (e = new Image()).onload = e.onerror = function () {
      t(2 == e.height);
    }, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
}, function (t, e, n) {
  n(0), n(1), n(12), n(2), n(3), n(4), n(5), n(6), n(13), n(7), n(8), n(9), t.exports = n(10);
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function () {};
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var o = n(3),
      l = n(7),
      s = n(6),
      i = n(8),
      a = n(9),
      r = n(5),
      d = n(0),
      c = n(2),
      u = n(1),
      p = n(10),
      m = n(4);
  Object(p["default"])(), document.addEventListener("DOMContentLoaded", function () {
    Object(o["default"])(), Object(i["default"])(), Object(l["default"])(), Object(a["default"])(), Object(d["default"])(), Object(c["default"])(), Object(r["default"])(), Object(s["default"])(), Object(u["default"])();
  }), window.onload = function () {
    Object(m["default"])();
  };
}]);