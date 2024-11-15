!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s = {}, a = {}) {
    Object.keys(a).forEach((i) => {
      void 0 === s[i]
        ? (s[i] = a[i])
        : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }
  let s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    let e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  let i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    let e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  class l extends Array {
    constructor(e) {
      super(...(e || [])),
        (function (e) {
          let t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }
  function n(e = []) {
    let t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...n(e)) : t.push(e);
      }),
      t
    );
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    let s = r(),
      i = a(),
      n = [];
    if (!t && e instanceof l) return e;
    if (!e) return new l(n);
    if ("string" == typeof e) {
      let o = e.trim();
      if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
        let d = "div";
        0 === o.indexOf("<li") && (d = "ul"),
          0 === o.indexOf("<tr") && (d = "tbody"),
          (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (d = "tr"),
          0 === o.indexOf("<tbody") && (d = "table"),
          0 === o.indexOf("<option") && (d = "select");
        let p = i.createElement(d);
        p.innerHTML = o;
        for (let c = 0; c < p.childNodes.length; c += 1)
          n.push(p.childNodes[c]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          let s = [],
            a = t.querySelectorAll(e);
          for (let i = 0; i < a.length; i += 1) s.push(a[i]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof l) return e;
      n = e;
    }
    return new l(
      (function (e) {
        let t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  d.fn = l.prototype;
  let p = {
    addClass: function (...e) {
      let t = n(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      let t = n(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      let t = n(e.map((e) => e.split(" ")));
      return (
        o(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      let t = n(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (let a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, a, i] = e;
      function r(e) {
        let t = e.target;
        if (!t) return;
        let i = e.target.dom7EventData || [];
        if ((0 > i.indexOf(e) && i.unshift(e), d(t).is(s))) a.apply(t, i);
        else {
          let r = d(t).parents();
          for (let l = 0; l < r.length; l += 1)
            d(r[l]).is(s) && a.apply(r[l], i);
        }
      }
      function l(e) {
        let t = (e && e.target && e.target.dom7EventData) || [];
        0 > t.indexOf(e) && t.unshift(e), a.apply(this, t);
      }
      "function" == typeof e[1] && (([t, a, i] = e), (s = void 0)),
        i || (i = !1);
      let n = t.split(" "),
        o;
      for (let p = 0; p < this.length; p += 1) {
        let c = this[p];
        if (s)
          for (o = 0; o < n.length; o += 1) {
            let u = n[o];
            c.dom7LiveListeners || (c.dom7LiveListeners = {}),
              c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []),
              c.dom7LiveListeners[u].push({ listener: a, proxyListener: r }),
              c.addEventListener(u, r, i);
          }
        else
          for (o = 0; o < n.length; o += 1) {
            let m = n[o];
            c.dom7Listeners || (c.dom7Listeners = {}),
              c.dom7Listeners[m] || (c.dom7Listeners[m] = []),
              c.dom7Listeners[m].push({ listener: a, proxyListener: l }),
              c.addEventListener(m, l, i);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, a, i] = e;
      "function" == typeof e[1] && (([t, a, i] = e), (s = void 0)),
        i || (i = !1);
      let r = t.split(" ");
      for (let l = 0; l < r.length; l += 1) {
        let n = r[l];
        for (let o = 0; o < this.length; o += 1) {
          let d = this[o],
            p;
          if (
            (!s && d.dom7Listeners
              ? (p = d.dom7Listeners[n])
              : s && d.dom7LiveListeners && (p = d.dom7LiveListeners[n]),
            p && p.length)
          )
            for (let c = p.length - 1; c >= 0; c -= 1) {
              let u = p[c];
              (a && u.listener === a) ||
              (a &&
                u.listener &&
                u.listener.dom7proxy &&
                u.listener.dom7proxy === a)
                ? (d.removeEventListener(n, u.proxyListener, i), p.splice(c, 1))
                : a ||
                  (d.removeEventListener(n, u.proxyListener, i),
                  p.splice(c, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      let t = r(),
        s = e[0].split(" "),
        a = e[1];
      for (let i = 0; i < s.length; i += 1) {
        let l = s[i];
        for (let n = 0; n < this.length; n += 1) {
          let o = this[n];
          if (t.CustomEvent) {
            let d = new t.CustomEvent(l, {
              detail: a,
              bubbles: !0,
              cancelable: !0,
            });
            (o.dom7EventData = e.filter((e, t) => t > 0)),
              o.dispatchEvent(d),
              (o.dom7EventData = []),
              delete o.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      let t = this;
      return (
        e &&
          t.on("transitionend", function s(a) {
            a.target === this && (e.call(this, a), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          let t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          let t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      let e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        let e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          l = t.body,
          n = s.clientTop || l.clientTop || 0,
          o = s.clientLeft || l.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          p = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - n, left: i.left + p - o };
      }
      return null;
    },
    css: function (e, t) {
      let s = r(),
        a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (let i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e)
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
      return this;
    },
    each: function (e) {
      return (
        e &&
          this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
        this
      );
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      let t = r(),
        s = a(),
        i = this[0],
        n,
        o;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = d(e), o = 0; o < n.length; o += 1) if (n[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof l) {
        for (n = e.nodeType ? [e] : e, o = 0; o < n.length; o += 1)
          if (n[o] === i) return !0;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      let t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        let s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function (...e) {
      let t,
        s = a();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let r = 0; r < this.length; r += 1)
          if ("string" == typeof t) {
            let n = s.createElement("div");
            for (n.innerHTML = t; n.firstChild; )
              this[r].appendChild(n.firstChild);
          } else if (t instanceof l)
            for (let o = 0; o < t.length; o += 1) this[r].appendChild(t[o]);
          else this[r].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      let t = a(),
        s,
        i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          let r = t.createElement("div");
          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(r.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof l)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
          ? d([this[0].nextElementSibling])
          : d([])
        : d([]);
    },
    nextAll: function (e) {
      let t = [],
        s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        let a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        let t = this[0];
        return e
          ? t.previousElementSibling && d(t.previousElementSibling).is(e)
            ? d([t.previousElementSibling])
            : d([])
          : t.previousElementSibling
          ? d([t.previousElementSibling])
          : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      let t = [],
        s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        let a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      let t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      let t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      let t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].querySelectorAll(e);
        for (let i = 0; i < a.length; i += 1) t.push(a[i]);
      }
      return d(t);
    },
    children: function (e) {
      let t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].children;
        for (let i = 0; i < a.length; i += 1)
          (e && !d(a[i]).is(e)) || t.push(a[i]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function c(e, t = 0) {
    return setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function m(e, t = "x") {
    let s = r(),
      a,
      i,
      l,
      n = (function (e) {
        let t = r(),
          s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (l = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : (a = (l =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? l.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? l.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function h(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(...e) {
    var t;
    let s = Object(e[0]),
      a = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      let r = e[i];
      if (
        null != r &&
        ((t = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? t instanceof HTMLElement
          : t && (1 === t.nodeType || 11 === t.nodeType)))
      ) {
        let l = Object.keys(Object(r)).filter((e) => 0 > a.indexOf(e));
        for (let n = 0, o = l.length; n < o; n += 1) {
          let d = l[n],
            p = Object.getOwnPropertyDescriptor(r, d);
          void 0 !== p &&
            p.enumerable &&
            (h(s[d]) && h(r[d])
              ? r[d].__swiper__
                ? (s[d] = r[d])
                : f(s[d], r[d])
              : !h(s[d]) && h(r[d])
              ? ((s[d] = {}), r[d].__swiper__ ? (s[d] = r[d]) : f(s[d], r[d]))
              : (s[d] = r[d]));
        }
      }
    }
    return s;
  }
  function g(e, t, s) {
    e.style.setProperty(t, s);
  }
  function $({ swiper: e, targetPosition: t, side: s }) {
    let a = r(),
      i = -e.translate,
      l,
      n = null,
      o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      a.cancelAnimationFrame(e.cssModeFrameID);
    let d = t > i ? "next" : "prev",
      p = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      c = () => {
        (l = new Date().getTime()), null === n && (n = l);
        let r = Math.max(Math.min((l - n) / o, 1), 0),
          d = i + (0.5 - Math.cos(r * Math.PI) / 2) * (t - i);
        if ((p(d, t) && (d = t), e.wrapperEl.scrollTo({ [s]: d }), p(d, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: d });
            }),
            void a.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = a.requestAnimationFrame(c);
      };
    c();
  }
  let v, w, _;
  function b() {
    return (
      v ||
        (v = (function () {
          let e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                let s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (a) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      v
    );
  }
  function x({ swiper: e, runCallbacks: t, direction: s, step: a }) {
    let { activeIndex: i, previousIndex: r } = e,
      l = s;
    if (
      (l || (l = i > r ? "next" : i < r ? "prev" : "reset"),
      e.emit(`transition${a}`),
      t && i !== r)
    ) {
      if ("reset" === l) return void e.emit(`slideResetTransition${a}`);
      e.emit(`slideChangeTransition${a}`),
        "next" === l
          ? e.emit(`slideNextTransition${a}`)
          : e.emit(`slidePrevTransition${a}`);
    }
  }
  function y(e) {
    let t = this,
      s = a(),
      i = r(),
      l = t.touchEventsData,
      { params: n, touches: o, enabled: p } = t;
    if (!p || (t.animating && n.preventInteractionOnTransition)) return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let c = e;
    c.originalEvent && (c = c.originalEvent);
    let m = d(c.target);
    if (
      ("wrapper" === n.touchEventsTarget && !m.closest(t.wrapperEl).length) ||
      ((l.isTouchEvent = "touchstart" === c.type),
      !l.isTouchEvent && "which" in c && 3 === c.which) ||
      (!l.isTouchEvent && "button" in c && c.button > 0) ||
      (l.isTouched && l.isMoved)
    )
      return;
    n.noSwipingClass &&
      "" !== n.noSwipingClass &&
      c.target &&
      c.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (m = d(e.path[0]));
    let h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
      f = !(!c.target || !c.target.shadowRoot);
    if (
      n.noSwiping &&
      (f
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== a() && s !== r()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(h, c.target)
        : m.closest(h)[0])
    )
      return void (t.allowClick = !0);
    if (n.swipeHandler && !m.closest(n.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
      (o.currentY =
        "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
    let g = o.currentX,
      $ = o.currentY,
      v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
      w = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
    if (v && (g <= w || g >= i.innerWidth - w)) {
      if ("prevent" !== v) return;
      e.preventDefault();
    }
    if (
      (Object.assign(l, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = $),
      (l.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      n.threshold > 0 && (l.allowThresholdMove = !1),
      "touchstart" !== c.type)
    ) {
      let _ = !0;
      m.is(l.focusableElements) && (_ = !1),
        s.activeElement &&
          d(s.activeElement).is(l.focusableElements) &&
          s.activeElement !== m[0] &&
          s.activeElement.blur();
      let b = _ && t.allowTouchMove && n.touchStartPreventDefault;
      (n.touchStartForcePreventDefault || b) &&
        !m[0].isContentEditable &&
        c.preventDefault();
    }
    t.emit("touchStart", c);
  }
  function E(e) {
    let t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: l, rtlTranslate: n, enabled: o } = s;
    if (!o) return;
    let p = e;
    if ((p.originalEvent && (p = p.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", p)
      );
    if (i.isTouchEvent && "touchmove" !== p.type) return;
    let c =
        "touchmove" === p.type &&
        p.targetTouches &&
        (p.targetTouches[0] || p.changedTouches[0]),
      m = "touchmove" === p.type ? c.pageX : p.pageX,
      h = "touchmove" === p.type ? c.pageY : p.pageY;
    if (p.preventedByNestedSwiper) return (l.startX = m), void (l.startY = h);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(l, { startX: m, startY: h, currentX: m, currentY: h }),
          (i.touchStartTime = u()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
      if (s.isVertical()) {
        if (
          (h < l.startY && s.translate <= s.maxTranslate()) ||
          (h > l.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (m < l.startX && s.translate <= s.maxTranslate()) ||
        (m > l.startX && s.translate >= s.minTranslate())
      )
        return;
    }
    if (
      i.isTouchEvent &&
      t.activeElement &&
      p.target === t.activeElement &&
      d(p.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", p),
      p.targetTouches && p.targetTouches.length > 1)
    )
      return;
    (l.currentX = m), (l.currentY = h);
    let f = l.currentX - l.startX,
      g = l.currentY - l.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let $;
      (s.isHorizontal() && l.currentY === l.startY) ||
      (s.isVertical() && l.currentX === l.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          (($ = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? $ > r.touchAngle
            : 90 - $ > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", p),
      void 0 === i.startMoving &&
        ((l.currentX === l.startX && l.currentY === l.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && p.cancelable && p.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && p.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", p)),
      s.emit("sliderMove", p),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (l.diff = v),
      (v *= r.touchRatio),
      n && (v = -v),
      (s.swipeDirection = v > 0 ? "prev" : "next"),
      (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      _ = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (_ = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + v) ** _))
        : v < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - v) ** _)),
      w && (p.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (i.currentTranslate = i.startTranslate),
          void (l.diff = s.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function T(e) {
    let t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: l, enabled: n } = t;
    if (!n) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    let d = u(),
      p = d - s.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(o),
        t.emit("tap click", o),
        p < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o)),
      (s.lastClickTime = u()),
      c(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let m;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (m = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: m });
    let h = 0,
      f = t.slidesSizesGrid[0];
    for (
      let g = 0;
      g < l.length;
      g += g < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      let $ = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== l[g + $]
        ? m >= l[g] && m < l[g + $] && ((h = g), (f = l[g + $] - l[g]))
        : m >= l[g] && ((h = g), (f = l[l.length - 1] - l[l.length - 2]));
    }
    let v = (m - l[h]) / f,
      w = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (v >= a.longSwipesRatio ? t.slideTo(h + w) : t.slideTo(h)),
        "prev" === t.swipeDirection &&
          (v > 1 - a.longSwipesRatio ? t.slideTo(h + w) : t.slideTo(h));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(h + w)
          : t.slideTo(h)
        : ("next" === t.swipeDirection && t.slideTo(h + w),
          "prev" === t.swipeDirection && t.slideTo(h));
    }
  }
  function C() {
    let e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    let { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function S(e) {
    this.enabled &&
      (this.allowClick ||
        (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation &&
          this.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function P() {
    let e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
      e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  Object.keys(p).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: p[e], writable: !0 });
  });
  let k = !1;
  function M() {}
  let z = (e, t) => {
      let s = a(),
        {
          params: i,
          touchEvents: r,
          el: l,
          wrapperEl: n,
          device: o,
          support: d,
        } = e,
        p = !!i.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (d.touch) {
        let m = !(
          "touchstart" !== r.start ||
          !d.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        l[c](r.start, e.onTouchStart, m),
          l[c](
            r.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: p } : p
          ),
          l[c](r.end, e.onTouchEnd, m),
          r.cancel && l[c](r.cancel, e.onTouchEnd, m);
      } else
        l[c](r.start, e.onTouchStart, !1),
          s[c](r.move, e.onTouchMove, p),
          s[c](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        l[c]("click", e.onClick, !0),
        i.cssMode && n[c]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              C,
              !0
            )
          : e[u]("observerUpdate", C, !0);
    },
    L = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var I = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  let O = {
      eventsEmitter: {
        on(e, t, s) {
          let a = this;
          if ("function" != typeof t) return a;
          let i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t);
            }),
            a
          );
        },
        once(e, t, s) {
          let a = this;
          if ("function" != typeof t) return a;
          function i(...s) {
            a.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy,
              t.apply(a, s);
          }
          return (i.__emitterProxy = t), a.on(e, i, s);
        },
        onAny(e, t) {
          return (
            "function" != typeof e ||
              (0 > this.eventsAnyListeners.indexOf(e) &&
                this.eventsAnyListeners[t ? "unshift" : "push"](e)),
            this
          );
        },
        offAny(e) {
          if (!this.eventsAnyListeners) return this;
          let t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off(e, t) {
          let s = this;
          return (
            s.eventsListeners &&
              e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((a, i) => {
                      (a === t ||
                        (a.__emitterProxy && a.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(i, 1);
                    });
              }),
            s
          );
        },
        emit(...e) {
          let t = this;
          if (!t.eventsListeners) return t;
          let s, a, i;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (a = e.slice(1, e.length)), (i = t))
              : ((s = e[0].events), (a = e[0].data), (i = e[0].context || t)),
            a.unshift(i),
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(i, [e, ...a]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(i, a);
                  });
            }),
            t
          );
        },
      },
      update: {
        updateSize: function () {
          let e,
            t,
            s = this.$el;
          (e =
            void 0 !== this.params.width && null !== this.params.width
              ? this.params.width
              : s[0].clientWidth),
            (t =
              void 0 !== this.params.height && null !== this.params.height
                ? this.params.height
                : s[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          let e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          let a = e.params,
            { $wrapperEl: i, size: r, rtlTranslate: l, wrongRTL: n } = e,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = i.children(`.${e.params.slideClass}`),
            c = o ? e.virtual.slides.length : p.length,
            u = [],
            m = [],
            h = [],
            f = a.slidesOffsetBefore;
          "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
          let $ = a.slidesOffsetAfter;
          "function" == typeof $ && ($ = a.slidesOffsetAfter.call(e));
          let v = e.snapGrid.length,
            w = e.slidesGrid.length,
            _ = a.spaceBetween,
            b = -f,
            x = 0,
            y = 0;
          if (void 0 === r) return;
          "string" == typeof _ &&
            _.indexOf("%") >= 0 &&
            (_ = (parseFloat(_.replace("%", "")) / 100) * r),
            (e.virtualSize = -_),
            l
              ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            a.centeredSlides &&
              a.cssMode &&
              (g(e.wrapperEl, "--swiper-centered-offset-before", ""),
              g(e.wrapperEl, "--swiper-centered-offset-after", ""));
          let E = a.grid && a.grid.rows > 1 && e.grid,
            T;
          E && e.grid.initSlides(c);
          let C =
            "auto" === a.slidesPerView &&
            a.breakpoints &&
            Object.keys(a.breakpoints).filter(
              (e) => void 0 !== a.breakpoints[e].slidesPerView
            ).length > 0;
          for (let S = 0; S < c; S += 1) {
            T = 0;
            let P = p.eq(S);
            if (
              (E && e.grid.updateSlide(S, P, c, t), "none" !== P.css("display"))
            ) {
              if ("auto" === a.slidesPerView) {
                C && (p[S].style[t("width")] = "");
                let k = getComputedStyle(P[0]),
                  M = P[0].style.transform,
                  z = P[0].style.webkitTransform;
                if (
                  (M && (P[0].style.transform = "none"),
                  z && (P[0].style.webkitTransform = "none"),
                  a.roundLengths)
                )
                  T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                else {
                  let L = s(k, "width"),
                    I = s(k, "padding-left"),
                    O = s(k, "padding-right"),
                    D = s(k, "margin-left"),
                    A = s(k, "margin-right"),
                    G = k.getPropertyValue("box-sizing");
                  if (G && "border-box" === G) T = L + D + A;
                  else {
                    let { clientWidth: B, offsetWidth: N } = P[0];
                    T = L + I + O + D + A + (N - B);
                  }
                }
                M && (P[0].style.transform = M),
                  z && (P[0].style.webkitTransform = z),
                  a.roundLengths && (T = Math.floor(T));
              } else
                (T = (r - (a.slidesPerView - 1) * _) / a.slidesPerView),
                  a.roundLengths && (T = Math.floor(T)),
                  p[S] && (p[S].style[t("width")] = `${T}px`);
              p[S] && (p[S].swiperSlideSize = T),
                h.push(T),
                a.centeredSlides
                  ? ((b = b + T / 2 + x / 2 + _),
                    0 === x && 0 !== S && (b = b - r / 2 - _),
                    0 === S && (b = b - r / 2 - _),
                    0.001 > Math.abs(b) && (b = 0),
                    a.roundLengths && (b = Math.floor(b)),
                    y % a.slidesPerGroup == 0 && u.push(b),
                    m.push(b))
                  : (a.roundLengths && (b = Math.floor(b)),
                    (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                      e.params.slidesPerGroup ==
                      0 && u.push(b),
                    m.push(b),
                    (b = b + T + _)),
                (e.virtualSize += T + _),
                (x = T),
                (y += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + $),
            l &&
              n &&
              ("slide" === a.effect || "coverflow" === a.effect) &&
              i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
            a.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(T, u, t),
            !a.centeredSlides)
          ) {
            let X = [];
            for (let H = 0; H < u.length; H += 1) {
              let Y = u[H];
              a.roundLengths && (Y = Math.floor(Y)),
                u[H] <= e.virtualSize - r && X.push(Y);
            }
            (u = X),
              Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(e.virtualSize - r);
          }
          if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
            let W = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
            p.filter((e, t) => !a.cssMode || t !== p.length - 1).css({
              [W]: `${_}px`,
            });
          }
          if (a.centeredSlides && a.centeredSlidesBounds) {
            let R = 0;
            h.forEach((e) => {
              R += e + (a.spaceBetween ? a.spaceBetween : 0);
            }),
              (R -= a.spaceBetween);
            let V = R - r;
            u = u.map((e) => (e < 0 ? -f : e > V ? V + $ : e));
          }
          if (a.centerInsufficientSlides) {
            let q = 0;
            if (
              (h.forEach((e) => {
                q += e + (a.spaceBetween ? a.spaceBetween : 0);
              }),
              (q -= a.spaceBetween) < r)
            ) {
              let F = (r - q) / 2;
              u.forEach((e, t) => {
                u[t] = e - F;
              }),
                m.forEach((e, t) => {
                  m[t] = e + F;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: p,
              snapGrid: u,
              slidesGrid: m,
              slidesSizesGrid: h,
            }),
            a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
          ) {
            g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              g(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            let j = -e.snapGrid[0],
              U = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + j)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + U));
          }
          c !== d && e.emit("slidesLengthChange"),
            u.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            m.length !== w && e.emit("slidesGridLengthChange"),
            a.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          let t = this,
            s = [],
            a = t.virtual && t.params.virtual.enabled,
            i,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          let l = (e) =>
            a
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                s.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                let n = t.activeIndex + i;
                if (n > t.slides.length && !a) break;
                s.push(l(n));
              }
          } else s.push(l(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              let o = s[i].offsetHeight;
              r = o > r ? o : r;
            }
          r && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          let e = this.slides;
          for (let t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          let t = this,
            s = t.params,
            { slides: a, rtlTranslate: i, snapGrid: r } = t;
          if (0 === a.length) return;
          void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
          let l = -e;
          i && (l = e),
            a.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let n = 0; n < a.length; n += 1) {
            let o = a[n],
              p = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (p -= a[0].swiperSlideOffset);
            let c =
                (l + (s.centeredSlides ? t.minTranslate() : 0) - p) /
                (o.swiperSlideSize + s.spaceBetween),
              u =
                (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - p) /
                (o.swiperSlideSize + s.spaceBetween),
              m = -(l - p),
              h = m + t.slidesSizesGrid[n];
            ((m >= 0 && m < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (m <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(n),
              a.eq(n).addClass(s.slideVisibleClass)),
              (o.progress = i ? -c : c),
              (o.originalProgress = i ? -u : u);
          }
          t.visibleSlides = d(t.visibleSlides);
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            let t = this.rtlTranslate ? -1 : 1;
            e = (this && this.translate && this.translate * t) || 0;
          }
          let s = this.params,
            a = this.maxTranslate() - this.minTranslate(),
            { progress: i, isBeginning: r, isEnd: l } = this,
            n = r,
            o = l;
          0 === a
            ? ((i = 0), (r = !0), (l = !0))
            : ((r = (i = (e - this.minTranslate()) / a) <= 0), (l = i >= 1)),
            Object.assign(this, { progress: i, isBeginning: r, isEnd: l }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              this.updateSlidesProgress(e),
            r && !n && this.emit("reachBeginning toEdge"),
            l && !o && this.emit("reachEnd toEdge"),
            ((n && !r) || (o && !l)) && this.emit("fromEdge"),
            this.emit("progress", i);
        },
        updateSlidesClasses: function () {
          let {
              slides: e,
              params: t,
              $wrapperEl: s,
              activeIndex: a,
              realIndex: i,
            } = this,
            r = this.virtual && t.virtual.enabled,
            l;
          e.removeClass(
            `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
          ),
            (l = r
              ? this.$wrapperEl.find(
                  `.${t.slideClass}[data-swiper-slide-index="${a}"]`
                )
              : e.eq(a)).addClass(t.slideActiveClass),
            t.loop &&
              (l.hasClass(t.slideDuplicateClass)
                ? s
                    .children(
                      `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
                    )
                    .addClass(t.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
                    )
                    .addClass(t.slideDuplicateActiveClass));
          let n = l
            .nextAll(`.${t.slideClass}`)
            .eq(0)
            .addClass(t.slideNextClass);
          t.loop && 0 === n.length && (n = e.eq(0)).addClass(t.slideNextClass);
          let o = l
            .prevAll(`.${t.slideClass}`)
            .eq(0)
            .addClass(t.slidePrevClass);
          t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass),
            t.loop &&
              (n.hasClass(t.slideDuplicateClass)
                ? s
                    .children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${n.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(t.slideDuplicateNextClass)
                : s
                    .children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${n.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(t.slideDuplicateNextClass),
              o.hasClass(t.slideDuplicateClass)
                ? s
                    .children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(t.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(t.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          let t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: a,
              snapGrid: i,
              params: r,
              activeIndex: l,
              realIndex: n,
              snapIndex: o,
            } = t,
            d,
            p = e;
          if (void 0 === p) {
            for (let c = 0; c < a.length; c += 1)
              void 0 !== a[c + 1]
                ? s >= a[c] && s < a[c + 1] - (a[c + 1] - a[c]) / 2
                  ? (p = c)
                  : s >= a[c] && s < a[c + 1] && (p = c + 1)
                : s >= a[c] && (p = c);
            r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (i.indexOf(s) >= 0) d = i.indexOf(s);
          else {
            let u = Math.min(r.slidesPerGroupSkip, p);
            d = u + Math.floor((p - u) / r.slidesPerGroup);
          }
          if ((d >= i.length && (d = i.length - 1), p === l))
            return void (
              d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
            );
          let m = parseInt(
            t.slides.eq(p).attr("data-swiper-slide-index") || p,
            10
          );
          Object.assign(t, {
            snapIndex: d,
            realIndex: m,
            previousIndex: l,
            activeIndex: p,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            n !== m && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          let t = this,
            s = t.params,
            a = d(e.target).closest(`.${s.slideClass}`)[0],
            i,
            r = !1;
          if (a) {
            for (let l = 0; l < t.slides.length; l += 1)
              if (t.slides[l] === a) {
                (r = !0), (i = l);
                break;
              }
          }
          if (!a || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = a),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  d(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          let {
            params: t,
            rtlTranslate: s,
            translate: a,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          let r = m(i[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          let s = this,
            {
              rtlTranslate: a,
              params: i,
              $wrapperEl: r,
              wrapperEl: l,
              progress: n,
            } = s,
            o,
            d = 0,
            p = 0;
          s.isHorizontal() ? (d = a ? -e : e) : (p = e),
            i.roundLengths && ((d = Math.floor(d)), (p = Math.floor(p))),
            i.cssMode
              ? (l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -d : -p)
              : i.virtualTranslate ||
                r.transform(`translate3d(${d}px, ${p}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? d : p);
          let c = s.maxTranslate() - s.minTranslate();
          (o = 0 === c ? 0 : (e - s.minTranslate()) / c) !== n &&
            s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          s = !0,
          a = !0,
          i
        ) {
          let r = this,
            { params: l, wrapperEl: n } = r;
          if (r.animating && l.preventInteractionOnTransition) return !1;
          let o = r.minTranslate(),
            d = r.maxTranslate(),
            p;
          if (
            ((p = a && e > o ? o : a && e < d ? d : e),
            r.updateProgress(p),
            l.cssMode)
          ) {
            let c = r.isHorizontal();
            if (0 === t) n[c ? "scrollLeft" : "scrollTop"] = -p;
            else {
              if (!r.support.smoothScroll)
                return (
                  $({
                    swiper: r,
                    targetPosition: -p,
                    side: c ? "left" : "top",
                  }),
                  !0
                );
              n.scrollTo({ [c ? "left" : "top"]: -p, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(p),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(p),
                s &&
                  (r.emit("beforeTransitionStart", t, i),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          let { params: s } = this;
          s.cssMode ||
            (s.autoHeight && this.updateAutoHeight(),
            x({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          let s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              x({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: {
        slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            let r = parseInt(e, 10);
            if (!isFinite(r))
              throw Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = r;
          }
          let l = this,
            n = e;
          n < 0 && (n = 0);
          let {
            params: o,
            snapGrid: d,
            slidesGrid: p,
            previousIndex: c,
            activeIndex: u,
            rtlTranslate: m,
            wrapperEl: h,
            enabled: f,
          } = l;
          if (
            (l.animating && o.preventInteractionOnTransition) ||
            (!f && !a && !i)
          )
            return !1;
          let g = Math.min(l.params.slidesPerGroupSkip, n),
            v = g + Math.floor((n - g) / l.params.slidesPerGroup);
          v >= d.length && (v = d.length - 1),
            (u || o.initialSlide || 0) === (c || 0) &&
              s &&
              l.emit("beforeSlideChangeStart");
          let w = -d[v];
          if ((l.updateProgress(w), o.normalizeSlideIndex))
            for (let _ = 0; _ < p.length; _ += 1) {
              let b = -Math.floor(100 * w),
                x = Math.floor(100 * p[_]),
                y = Math.floor(100 * p[_ + 1]);
              void 0 !== p[_ + 1]
                ? b >= x && b < y - (y - x) / 2
                  ? (n = _)
                  : b >= x && b < y && (n = _ + 1)
                : b >= x && (n = _);
            }
          if (
            l.initialized &&
            n !== u &&
            ((!l.allowSlideNext && w < l.translate && w < l.minTranslate()) ||
              (!l.allowSlidePrev &&
                w > l.translate &&
                w > l.maxTranslate() &&
                (u || 0) !== n))
          )
            return !1;
          let E;
          if (
            ((E = n > u ? "next" : n < u ? "prev" : "reset"),
            (m && -w === l.translate) || (!m && w === l.translate))
          )
            return (
              l.updateActiveIndex(n),
              o.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== o.effect && l.setTranslate(w),
              "reset" !== E && (l.transitionStart(s, E), l.transitionEnd(s, E)),
              !1
            );
          if (o.cssMode) {
            let T = l.isHorizontal(),
              C = m ? w : -w;
            if (0 === t) {
              let S = l.virtual && l.params.virtual.enabled;
              S &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                (h[T ? "scrollLeft" : "scrollTop"] = C),
                S &&
                  requestAnimationFrame(() => {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!l.support.smoothScroll)
                return (
                  $({ swiper: l, targetPosition: C, side: T ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [T ? "left" : "top"]: C, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (l.setTransition(0),
                l.setTranslate(w),
                l.updateActiveIndex(n),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, a),
                l.transitionStart(s, E),
                l.transitionEnd(s, E))
              : (l.setTransition(t),
                l.setTranslate(w),
                l.updateActiveIndex(n),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, a),
                l.transitionStart(s, E),
                l.animating ||
                  ((l.animating = !0),
                  l.onSlideToWrapperTransitionEnd ||
                    (l.onSlideToWrapperTransitionEnd = function (e) {
                      l &&
                        !l.destroyed &&
                        e.target === this &&
                        (l.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          l.onSlideToWrapperTransitionEnd
                        ),
                        l.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          l.onSlideToWrapperTransitionEnd
                        ),
                        (l.onSlideToWrapperTransitionEnd = null),
                        delete l.onSlideToWrapperTransitionEnd,
                        l.transitionEnd(s, E));
                    }),
                  l.$wrapperEl[0].addEventListener(
                    "transitionend",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    l.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
          let i = e;
          return (
            this.params.loop && (i += this.loopedSlides),
            this.slideTo(i, t, s, a)
          );
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          let a = this,
            { animating: i, enabled: r, params: l } = a;
          if (!r) return a;
          let n = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (n = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          let o = a.activeIndex < l.slidesPerGroupSkip ? 1 : n;
          if (l.loop) {
            if (i && l.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          let a = this,
            {
              params: i,
              animating: r,
              snapGrid: l,
              slidesGrid: n,
              rtlTranslate: o,
              enabled: d,
            } = a;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          let c = p(o ? a.translate : -a.translate),
            u = l.map((e) => p(e)),
            m = l[u.indexOf(c) - 1];
          if (void 0 === m && i.cssMode) {
            let h;
            l.forEach((e, t) => {
              c >= e && (h = t);
            }),
              void 0 !== h && (m = l[h > 0 ? h - 1 : h]);
          }
          let f = 0;
          return (
            void 0 !== m &&
              ((f = n.indexOf(m)) < 0 && (f = a.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                (f = Math.max(
                  (f = f - a.slidesPerViewDynamic("previous", !0) + 1),
                  0
                ))),
            a.slideTo(f, e, t, s)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, a = 0.5) {
          let i = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, i),
            l = r + Math.floor((i - r) / this.params.slidesPerGroup),
            n = this.rtlTranslate ? this.translate : -this.translate;
          if (n >= this.snapGrid[l]) {
            let o = this.snapGrid[l];
            n - o > (this.snapGrid[l + 1] - o) * a &&
              (i += this.params.slidesPerGroup);
          } else {
            let d = this.snapGrid[l - 1];
            n - d <= (this.snapGrid[l] - d) * a &&
              (i -= this.params.slidesPerGroup);
          }
          return (
            (i = Math.min((i = Math.max(i, 0)), this.slidesGrid.length - 1)),
            this.slideTo(i, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          let e = this,
            { params: t, $wrapperEl: s } = e,
            a =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView,
            i,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              d(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - a / 2 ||
                  r > e.slides.length - e.loopedSlides + a / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    c(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - a
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  c(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          let e = this,
            t = a(),
            { params: s, $wrapperEl: i } = e,
            r = d(i.children()[0].parentNode);
          r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let l = r.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            let n = s.slidesPerGroup - (l.length % s.slidesPerGroup);
            if (n !== s.slidesPerGroup) {
              for (let o = 0; o < n; o += 1) {
                let p = d(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                r.append(p);
              }
              l = r.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = l.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > l.length && (e.loopedSlides = l.length);
          let c = [],
            u = [];
          l.each((t, s) => {
            let a = d(t);
            s < e.loopedSlides && u.push(t),
              s < l.length && s >= l.length - e.loopedSlides && c.push(t),
              a.attr("data-swiper-slide-index", s);
          });
          for (let m = 0; m < u.length; m += 1)
            r.append(d(u[m].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let h = c.length - 1; h >= 0; h -= 1)
            r.prepend(d(c[h].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          let e = this;
          e.emit("beforeLoopFix");
          let {
              activeIndex: t,
              slides: s,
              loopedSlides: a,
              allowSlidePrev: i,
              allowSlideNext: r,
              snapGrid: l,
              rtlTranslate: n,
            } = e,
            o;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          let d = -l[t] - e.getTranslate();
          t < a
            ? ((o = s.length - 3 * a + t),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((n ? -e.translate : e.translate) - d))
            : t >= s.length - a &&
              ((o = -s.length + t + a),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((n ? -e.translate : e.translate) - d)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          let { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (
            this.support.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode
          )
            return;
          let t =
            "container" === this.params.touchEventsTarget
              ? this.el
              : this.wrapperEl;
          (t.style.cursor = "move"),
            (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (t.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          let e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: {
        attachEvents: function () {
          let e = this,
            t = a(),
            { params: s, support: i } = e;
          (e.onTouchStart = y.bind(e)),
            (e.onTouchMove = E.bind(e)),
            (e.onTouchEnd = T.bind(e)),
            s.cssMode && (e.onScroll = P.bind(e)),
            (e.onClick = S.bind(e)),
            i.touch && !k && (t.addEventListener("touchstart", M), (k = !0)),
            z(e, "on");
        },
        detachEvents: function () {
          z(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          let e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: a = 0,
              params: i,
              $el: r,
            } = e,
            l = i.breakpoints;
          if (!l || (l && 0 === Object.keys(l).length)) return;
          let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          let o = (n in l ? l[n] : void 0) || e.originalParams,
            d = L(e, i),
            p = L(e, o),
            c = i.enabled;
          d && !p
            ? (r.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              p &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          let u = o.direction && o.direction !== i.direction,
            m = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), f(e.params, o);
          let h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !h ? e.disable() : !c && h && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", o),
            m &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let a = !1,
            i = r(),
            l = "window" === t ? i.innerHeight : s.clientHeight,
            n = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                let t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              }
              return { value: e, point: e };
            });
          n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let o = 0; o < n.length; o += 1) {
            let { point: d, value: p } = n[o];
            "window" === t
              ? i.matchMedia(`(min-width: ${p}px)`).matches && (a = d)
              : p <= s.clientWidth && (a = d);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          let e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            let i = e.slides.length - 1,
              r = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * a;
            e.isLocked = e.size > r;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          let {
              classNames: e,
              params: t,
              rtl: s,
              $el: a,
              device: i,
              support: r,
            } = this,
            l = (function (e, t) {
              let s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((a) => {
                        e[a] && s.push(t + a);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                t.direction,
                { "pointer-events": !r.touch },
                { "free-mode": this.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: s },
                { grid: t.grid && t.grid.rows > 1 },
                {
                  "grid-column":
                    t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
              ],
              t.containerModifierClass
            );
          e.push(...l),
            a.addClass([...e].join(" ")),
            this.emitContainerClasses();
        },
        removeClasses: function () {
          let { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, s, a, i, l) {
          let n = r(),
            o;
          function p() {
            l && l();
          }
          d(e).parent("picture")[0] || (e.complete && i)
            ? p()
            : t
            ? (((o = new n.Image()).onload = p),
              (o.onerror = p),
              a && (o.sizes = a),
              s && (o.srcset = s),
              t && (o.src = t))
            : p();
        },
        preloadImages: function () {
          let e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            let a = e.imagesToLoad[s];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    D = {};
  class A {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = f({}, s)),
        t && !s.el && (s.el = t),
        s.el && d(s.el).length > 1)
      ) {
        let a = [];
        return (
          d(s.el).each((e) => {
            let t = f({}, s, { el: e });
            a.push(new A(t));
          }),
          a
        );
      }
      let i = this;
      (i.__swiper__ = !0),
        (i.support = b()),
        (i.device = (function e(t = {}) {
          return (
            w ||
              (w = (function ({ userAgent: e } = {}) {
                let t = b(),
                  s = r(),
                  a = s.navigator.platform,
                  i = e || s.navigator.userAgent,
                  l = { ios: !1, android: !1 },
                  n = s.screen.width,
                  o = s.screen.height,
                  d = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                  p = i.match(/(iPad).*OS\s([\d_]+)/),
                  c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                  u = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  m = "MacIntel" === a;
                return (
                  !p &&
                    m &&
                    t.touch &&
                    [
                      "1024x1366",
                      "1366x1024",
                      "834x1194",
                      "1194x834",
                      "834x1112",
                      "1112x834",
                      "768x1024",
                      "1024x768",
                      "820x1180",
                      "1180x820",
                      "810x1080",
                      "1080x810",
                    ].indexOf(`${n}x${o}`) >= 0 &&
                    ((p = i.match(/(Version)\/([\d.]+)/)) ||
                      (p = [0, 1, "13_0_0"]),
                    (m = !1)),
                  d && "Win32" !== a && ((l.os = "android"), (l.android = !0)),
                  (p || u || c) && ((l.os = "ios"), (l.ios = !0)),
                  l
                );
              })(t)),
            w
          );
        })({ userAgent: s.userAgent })),
        (i.browser =
          (_ ||
            (_ = (function () {
              let e = r();
              return {
                isSafari: (function () {
                  let t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    0 > t.indexOf("chrome") &&
                    0 > t.indexOf("android")
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          _)),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
      let l = {};
      i.modules.forEach((e) => {
        var t, a;
        e({
          swiper: i,
          extendParams:
            ((t = s),
            (a = l),
            function (e = {}) {
              let s = Object.keys(e)[0],
                i = e[s];
              "object" == typeof i &&
                null !== i &&
                (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                  !0 === t[s] &&
                  (t[s] = { auto: !0 }),
                s in t &&
                  "enabled" in i &&
                  (!0 === t[s] && (t[s] = { enabled: !0 }),
                  "object" != typeof t[s] ||
                    "enabled" in t[s] ||
                    (t[s].enabled = !0),
                  t[s] || (t[s] = { enabled: !1 }))),
                f(a, e);
            }),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      let n = f({}, I, l);
      return (
        (i.params = f({}, n, D, s)),
        (i.originalParams = f({}, i.params)),
        (i.passedParams = f({}, s)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = d),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            let e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      let e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      let e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      e = Math.min(Math.max(e, 0), 1);
      let s = this.minTranslate(),
        a = (this.maxTranslate() - s) * e + s;
      this.translateTo(a, void 0 === t ? 0 : t),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
    }
    emitContainerClasses() {
      let e = this;
      if (!e.params._emitClasses || !e.el) return;
      let t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      let t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      let e = this;
      if (!e.params._emitClasses || !e.el) return;
      let t = [];
      e.slides.each((s) => {
        let a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      let {
          params: s,
          slides: a,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: l,
          activeIndex: n,
        } = this,
        o = 1;
      if (s.centeredSlides) {
        let d,
          p = a[n].swiperSlideSize;
        for (let c = n + 1; c < a.length; c += 1)
          a[c] &&
            !d &&
            ((p += a[c].swiperSlideSize), (o += 1), p > l && (d = !0));
        for (let u = n - 1; u >= 0; u -= 1)
          a[u] &&
            !d &&
            ((p += a[u].swiperSlideSize), (o += 1), p > l && (d = !0));
      } else if ("current" === e)
        for (let m = n + 1; m < a.length; m += 1)
          (t ? i[m] + r[m] - i[n] < l : i[m] - i[n] < l) && (o += 1);
      else for (let h = n - 1; h >= 0; h -= 1) i[n] - i[h] < l && (o += 1);
      return o;
    }
    update() {
      let e = this;
      if (!e || e.destroyed) return;
      let { snapGrid: t, params: s } = e;
      function a() {
        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : (i =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)) || a(),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      let s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      let t = this;
      if (t.mounted) return !0;
      let s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      let i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
        r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            let t = d(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
      if (0 === r.length && t.params.createElements) {
        let l = a().createElement("div");
        (r = d(l)),
          (l.className = t.params.wrapperClass),
          s.append(l),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
        }),
        !0
      );
    }
    init(e) {
      let t = this;
      return (
        t.initialized ||
          !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      let s = this,
        { params: a, $el: i, $wrapperEl: r, slides: l } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            l &&
              l.length &&
              l
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              let t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (s) {}
                try {
                  delete t[e];
                } catch (a) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      f(D, e);
    }
    static get extendedDefaults() {
      return D;
    }
    static get defaults() {
      return I;
    }
    static installModule(e) {
      A.prototype.__modules__ || (A.prototype.__modules__ = []);
      let t = A.prototype.__modules__;
      "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => A.installModule(e)), A)
        : (A.installModule(e), A);
    }
  }
  function G(e, t, s, i) {
    let r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let l = e.$el.children(`.${i[a]}`)[0];
            l ||
              (((l = r.createElement("div")).className = i[a]),
              e.$el.append(l)),
              (s[a] = l),
              (t[a] = l);
          }
        }),
      s
    );
  }
  function B(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function N(e) {
    let { $wrapperEl: t, params: s } = this;
    if ((s.loop && this.loopDestroy(), "object" == typeof e && "length" in e))
      for (let a = 0; a < e.length; a += 1) e[a] && t.append(e[a]);
    else t.append(e);
    s.loop && this.loopCreate(), s.observer || this.update();
  }
  function X(e) {
    let { params: t, $wrapperEl: s, activeIndex: a } = this;
    t.loop && this.loopDestroy();
    let i = a + 1;
    if ("object" == typeof e && "length" in e) {
      for (let r = 0; r < e.length; r += 1) e[r] && s.prepend(e[r]);
      i = a + e.length;
    } else s.prepend(e);
    t.loop && this.loopCreate(),
      t.observer || this.update(),
      this.slideTo(i, 0, !1);
  }
  function H(e, t) {
    let s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s,
      l = r;
    i.loop &&
      ((l -= s.loopedSlides),
      s.loopDestroy(),
      (s.slides = a.children(`.${i.slideClass}`)));
    let n = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= n) return void s.appendSlide(t);
    let o = l > e ? l + 1 : l,
      d = [];
    for (let p = n - 1; p >= e; p -= 1) {
      let c = s.slides.eq(p);
      c.remove(), d.unshift(c);
    }
    if ("object" == typeof t && "length" in t) {
      for (let u = 0; u < t.length; u += 1) t[u] && a.append(t[u]);
      o = l > e ? l + t.length : l;
    } else a.append(t);
    for (let m = 0; m < d.length; m += 1) a.append(d[m]);
    i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function Y(e) {
    let t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t,
      r = i;
    s.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = a.children(`.${s.slideClass}`)));
    let l,
      n = r;
    if ("object" == typeof e && "length" in e) {
      for (let o = 0; o < e.length; o += 1)
        (l = e[o]), t.slides[l] && t.slides.eq(l).remove(), l < n && (n -= 1);
      n = Math.max(n, 0);
    } else (l = e), t.slides[l] && t.slides.eq(l).remove(), l < n && (n -= 1), (n = Math.max(n, 0));
    s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function W() {
    let e = [];
    for (let t = 0; t < this.slides.length; t += 1) e.push(t);
    this.removeSlide(e);
  }
  function R(e) {
    let {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: l,
      perspective: n,
    } = e;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        n && n() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      let e = l ? l() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      });
  }
  function V(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function q({ swiper: e, duration: t, transformEl: s, allSlides: a }) {
    let { slides: i, activeIndex: r, $wrapperEl: l } = e;
    if (e.params.virtualTranslate && 0 !== t) {
      let n,
        o = !1;
      (n = a
        ? s
          ? i.find(s)
          : i
        : s
        ? i.eq(r).find(s)
        : i.eq(r)).transitionEnd(() => {
        if (o || !e || e.destroyed) return;
        (o = !0), (e.animating = !1);
        let t = ["webkitTransitionEnd", "transitionend"];
        for (let s = 0; s < t.length; s += 1) l.trigger(t[s]);
      });
    }
  }
  function F(e, t, s) {
    let a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
      i = e.transformEl ? t.find(e.transformEl) : t,
      r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(O).forEach((e) => {
    Object.keys(O[e]).forEach((t) => {
      A.prototype[t] = O[e][t];
    });
  }),
    A.use([
      function ({ swiper: e, on: t, emit: s }) {
        let a = r(),
          i = null,
          l = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          n = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== a.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              (i = new ResizeObserver((t) => {
                let { width: s, height: a } = e,
                  i = s,
                  r = a;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: a }) => {
                    (a && a !== e.el) ||
                      ((i = s ? s.width : (t[0] || t).inlineSize),
                      (r = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (i === s && r === a) || l();
              })).observe(e.el)
            : (a.addEventListener("resize", l),
              a.addEventListener("orientationchange", n));
        }),
          t("destroy", () => {
            i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
              a.removeEventListener("resize", l),
              a.removeEventListener("orientationchange", n);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: a }) {
        let i = [],
          l = r(),
          n = (e, t = {}) => {
            let s = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void a("observerUpdate", e[0]);
                let t = function () {
                  a("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(t)
                  : l.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                let t = e.$el.parents();
                for (let s = 0; s < t.length; s += 1) n(t[s]);
              }
              n(e.$el[0], { childList: e.params.observeSlideChildren }),
                n(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            i.forEach((e) => {
              e.disconnect();
            }),
              i.splice(0, i.length);
          });
      },
    ]);
  let j = [
    function ({ swiper: e, extendParams: t, on: s }) {
      let a;
      function i(t, s) {
        let a = e.params.virtual;
        if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
        let i = a.renderSlide
          ? d(a.renderSlide.call(e, t, s))
          : d(
              `<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`
            );
        return (
          i.attr("data-swiper-slide-index") ||
            i.attr("data-swiper-slide-index", s),
          a.cache && (e.virtual.cache[s] = i),
          i
        );
      }
      function r(t) {
        let {
            slidesPerView: s,
            slidesPerGroup: a,
            centeredSlides: r,
          } = e.params,
          { addSlidesBefore: l, addSlidesAfter: n } = e.params.virtual,
          { from: o, to: d, slides: p, slidesGrid: c, offset: u } = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        let m = e.activeIndex || 0,
          h,
          f,
          g;
        (h = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"),
          r
            ? ((f = Math.floor(s / 2) + a + n), (g = Math.floor(s / 2) + a + l))
            : ((f = s + (a - 1) + n), (g = a + l));
        let $ = Math.max((m || 0) - g, 0),
          v = Math.min((m || 0) + f, p.length - 1),
          w = (e.slidesGrid[$] || 0) - (e.slidesGrid[0] || 0);
        function _() {
          e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.lazy && e.params.lazy.enabled && e.lazy.load();
        }
        if (
          (Object.assign(e.virtual, {
            from: $,
            to: v,
            offset: w,
            slidesGrid: e.slidesGrid,
          }),
          o === $ && d === v && !t)
        )
          return (
            e.slidesGrid !== c && w !== u && e.slides.css(h, `${w}px`),
            void e.updateProgress()
          );
        if (e.params.virtual.renderExternal)
          return (
            e.params.virtual.renderExternal.call(e, {
              offset: w,
              from: $,
              to: v,
              slides: (function () {
                let e = [];
                for (let t = $; t <= v; t += 1) e.push(p[t]);
                return e;
              })(),
            }),
            void (e.params.virtual.renderExternalUpdate && _())
          );
        let b = [],
          x = [];
        if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
        else
          for (let y = o; y <= d; y += 1)
            (y < $ || y > v) &&
              e.$wrapperEl
                .find(`.${e.params.slideClass}[data-swiper-slide-index="${y}"]`)
                .remove();
        for (let E = 0; E < p.length; E += 1)
          E >= $ &&
            E <= v &&
            (void 0 === d || t
              ? x.push(E)
              : (E > d && x.push(E), E < o && b.push(E)));
        x.forEach((t) => {
          e.$wrapperEl.append(i(p[t], t));
        }),
          b
            .sort((e, t) => t - e)
            .forEach((t) => {
              e.$wrapperEl.prepend(i(p[t], t));
            }),
          e.$wrapperEl.children(".swiper-slide").css(h, `${w}px`),
          _();
      }
      t({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (e.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        s("beforeInit", () => {
          e.params.virtual.enabled &&
            ((e.virtual.slides = e.params.virtual.slides),
            e.classNames.push(`${e.params.containerModifierClass}virtual`),
            (e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0),
            e.params.initialSlide || r());
        }),
        s("setTranslate", () => {
          e.params.virtual.enabled &&
            (e.params.cssMode && !e._immediateVirtual
              ? (clearTimeout(a),
                (a = setTimeout(() => {
                  r();
                }, 100)))
              : r());
        }),
        s("init update resize", () => {
          e.params.virtual.enabled &&
            e.params.cssMode &&
            g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
        }),
        Object.assign(e.virtual, {
          appendSlide: function (t) {
            if ("object" == typeof t && "length" in t)
              for (let s = 0; s < t.length; s += 1)
                t[s] && e.virtual.slides.push(t[s]);
            else e.virtual.slides.push(t);
            r(!0);
          },
          prependSlide: function (t) {
            let s = e.activeIndex,
              a = s + 1,
              i = 1;
            if (Array.isArray(t)) {
              for (let l = 0; l < t.length; l += 1)
                t[l] && e.virtual.slides.unshift(t[l]);
              (a = s + t.length), (i = t.length);
            } else e.virtual.slides.unshift(t);
            if (e.params.virtual.cache) {
              let n = e.virtual.cache,
                o = {};
              Object.keys(n).forEach((e) => {
                let t = n[e],
                  s = t.attr("data-swiper-slide-index");
                s && t.attr("data-swiper-slide-index", parseInt(s, 10) + i),
                  (o[parseInt(e, 10) + i] = t);
              }),
                (e.virtual.cache = o);
            }
            r(!0), e.slideTo(a, 0);
          },
          removeSlide: function (t) {
            if (null == t) return;
            let s = e.activeIndex;
            if (Array.isArray(t))
              for (let a = t.length - 1; a >= 0; a -= 1)
                e.virtual.slides.splice(t[a], 1),
                  e.params.virtual.cache && delete e.virtual.cache[t[a]],
                  t[a] < s && (s -= 1),
                  (s = Math.max(s, 0));
            else
              e.virtual.slides.splice(t, 1),
                e.params.virtual.cache && delete e.virtual.cache[t],
                t < s && (s -= 1),
                (s = Math.max(s, 0));
            r(!0), e.slideTo(s, 0);
          },
          removeAllSlides: function () {
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              r(!0),
              e.slideTo(0, 0);
          },
          update: r,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      let l = a(),
        n = r();
      function o(t) {
        if (!e.enabled) return;
        let { rtlTranslate: s } = e,
          a = t;
        a.originalEvent && (a = a.originalEvent);
        let r = a.keyCode || a.charCode,
          o = e.params.keyboard.pageUpDown,
          d = o && 33 === r,
          p = o && 34 === r,
          c = 37 === r,
          u = 39 === r,
          m = 38 === r,
          h = 40 === r;
        if (
          (!e.allowSlideNext &&
            ((e.isHorizontal() && u) || (e.isVertical() && h) || p)) ||
          (!e.allowSlidePrev &&
            ((e.isHorizontal() && c) || (e.isVertical() && m) || d))
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            e.params.keyboard.onlyInViewport &&
            (d || p || c || u || m || h)
          ) {
            let f = !1;
            if (
              e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
              0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
            )
              return;
            let g = e.$el,
              $ = g[0].clientWidth,
              v = g[0].clientHeight,
              w = n.innerWidth,
              _ = n.innerHeight,
              b = e.$el.offset();
            s && (b.left -= e.$el[0].scrollLeft);
            let x = [
              [b.left, b.top],
              [b.left + $, b.top],
              [b.left, b.top + v],
              [b.left + $, b.top + v],
            ];
            for (let y = 0; y < x.length; y += 1) {
              let E = x[y];
              if (E[0] >= 0 && E[0] <= w && E[1] >= 0 && E[1] <= _) {
                if (0 === E[0] && 0 === E[1]) continue;
                f = !0;
              }
            }
            if (!f) return;
          }
          e.isHorizontal()
            ? ((d || p || c || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((p || u) && !s) || ((d || c) && s)) && e.slideNext(),
              (((d || c) && !s) || ((p || u) && s)) && e.slidePrev())
            : ((d || p || m || h) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (p || h) && e.slideNext(),
              (d || m) && e.slidePrev()),
            i("keyPress", r);
        }
      }
      function p() {
        e.keyboard.enabled ||
          (d(l).on("keydown", o), (e.keyboard.enabled = !0));
      }
      function c() {
        e.keyboard.enabled &&
          (d(l).off("keydown", o), (e.keyboard.enabled = !1));
      }
      (e.keyboard = { enabled: !1 }),
        t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        s("init", () => {
          e.params.keyboard.enabled && p();
        }),
        s("destroy", () => {
          e.keyboard.enabled && c();
        }),
        Object.assign(e.keyboard, { enable: p, disable: c });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      let i = r(),
        l;
      t({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (e.mousewheel = { enabled: !1 });
      let n,
        o = u(),
        p = [];
      function m() {
        e.enabled && (e.mouseEntered = !0);
      }
      function h() {
        e.enabled && (e.mouseEntered = !1);
      }
      function f(t) {
        return (
          !(
            e.params.mousewheel.thresholdDelta &&
            t.delta < e.params.mousewheel.thresholdDelta
          ) &&
          !(
            e.params.mousewheel.thresholdTime &&
            u() - o < e.params.mousewheel.thresholdTime
          ) &&
          ((t.delta >= 6 && u() - o < 60) ||
            (t.direction < 0
              ? (e.isEnd && !e.params.loop) ||
                e.animating ||
                (e.slideNext(), a("scroll", t.raw))
              : (e.isBeginning && !e.params.loop) ||
                e.animating ||
                (e.slidePrev(), a("scroll", t.raw)),
            (o = new i.Date().getTime()),
            !1))
        );
      }
      function g(t) {
        var s;
        let i = t,
          r = !0;
        if (!e.enabled) return;
        let o = e.params.mousewheel;
        e.params.cssMode && i.preventDefault();
        let m = e.$el;
        if (
          ("container" !== e.params.mousewheel.eventsTarget &&
            (m = d(e.params.mousewheel.eventsTarget)),
          !e.mouseEntered && !m[0].contains(i.target) && !o.releaseOnEdges)
        )
          return !0;
        i.originalEvent && (i = i.originalEvent);
        let h = 0,
          g,
          $,
          v,
          w,
          _ = e.rtlTranslate ? -1 : 1,
          b =
            ((s = i),
            (g = 0),
            ($ = 0),
            (v = 0),
            (w = 0),
            "detail" in s && ($ = s.detail),
            "wheelDelta" in s && ($ = -s.wheelDelta / 120),
            "wheelDeltaY" in s && ($ = -s.wheelDeltaY / 120),
            "wheelDeltaX" in s && (g = -s.wheelDeltaX / 120),
            "axis" in s && s.axis === s.HORIZONTAL_AXIS && ((g = $), ($ = 0)),
            (v = 10 * g),
            (w = 10 * $),
            "deltaY" in s && (w = s.deltaY),
            "deltaX" in s && (v = s.deltaX),
            s.shiftKey && !v && ((v = w), (w = 0)),
            (v || w) &&
              s.deltaMode &&
              (1 === s.deltaMode
                ? ((v *= 40), (w *= 40))
                : ((v *= 800), (w *= 800))),
            v && !g && (g = v < 1 ? -1 : 1),
            w && !$ && ($ = w < 1 ? -1 : 1),
            { spinX: g, spinY: $, pixelX: v, pixelY: w });
        if (o.forceToAxis) {
          if (e.isHorizontal()) {
            if (!(Math.abs(b.pixelX) > Math.abs(b.pixelY))) return !0;
            h = -b.pixelX * _;
          } else {
            if (!(Math.abs(b.pixelY) > Math.abs(b.pixelX))) return !0;
            h = -b.pixelY;
          }
        } else
          h =
            Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * _ : -b.pixelY;
        if (0 === h) return !0;
        o.invert && (h = -h);
        let x = e.getTranslate() + h * o.sensitivity;
        if (
          (x >= e.minTranslate() && (x = e.minTranslate()),
          x <= e.maxTranslate() && (x = e.maxTranslate()),
          (r =
            !!e.params.loop ||
            !(x === e.minTranslate() || x === e.maxTranslate())) &&
            e.params.nested &&
            i.stopPropagation(),
          e.params.freeMode && e.params.freeMode.enabled)
        ) {
          let y = { time: u(), delta: Math.abs(h), direction: Math.sign(h) },
            E =
              n &&
              y.time < n.time + 500 &&
              y.delta <= n.delta &&
              y.direction === n.direction;
          if (!E) {
            (n = void 0), e.params.loop && e.loopFix();
            let T = e.getTranslate() + h * o.sensitivity,
              C = e.isBeginning,
              S = e.isEnd;
            if (
              (T >= e.minTranslate() && (T = e.minTranslate()),
              T <= e.maxTranslate() && (T = e.maxTranslate()),
              e.setTransition(0),
              e.setTranslate(T),
              e.updateProgress(),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              ((!C && e.isBeginning) || (!S && e.isEnd)) &&
                e.updateSlidesClasses(),
              e.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), p.length >= 15 && p.shift();
              let P = p.length ? p[p.length - 1] : void 0,
                k = p[0];
              if (
                (p.push(y),
                P && (y.delta > P.delta || y.direction !== P.direction))
              )
                p.splice(0);
              else if (
                p.length >= 15 &&
                y.time - k.time < 500 &&
                k.delta - y.delta >= 1 &&
                y.delta <= 6
              ) {
                let M = h > 0 ? 0.8 : 0.2;
                (n = y),
                  p.splice(0),
                  (l = c(() => {
                    e.slideToClosest(e.params.speed, !0, void 0, M);
                  }, 0));
              }
              l ||
                (l = c(() => {
                  (n = y),
                    p.splice(0),
                    e.slideToClosest(e.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (E || a("scroll", i),
              e.params.autoplay &&
                e.params.autoplayDisableOnInteraction &&
                e.autoplay.stop(),
              T === e.minTranslate() || T === e.maxTranslate())
            )
              return !0;
          }
        } else {
          let z = {
            time: u(),
            delta: Math.abs(h),
            direction: Math.sign(h),
            raw: t,
          };
          p.length >= 2 && p.shift();
          let L = p.length ? p[p.length - 1] : void 0;
          if (
            (p.push(z),
            L
              ? (z.direction !== L.direction ||
                  z.delta > L.delta ||
                  z.time > L.time + 150) &&
                f(z)
              : f(z),
            (function (t) {
              let s = e.params.mousewheel;
              if (t.direction < 0) {
                if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
              } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(z))
          )
            return !0;
        }
        return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
      }
      function $(t) {
        let s = e.$el;
        "container" !== e.params.mousewheel.eventsTarget &&
          (s = d(e.params.mousewheel.eventsTarget)),
          s[t]("mouseenter", m),
          s[t]("mouseleave", h),
          s[t]("wheel", g);
      }
      function v() {
        return e.params.cssMode
          ? (e.wrapperEl.removeEventListener("wheel", g), !0)
          : !e.mousewheel.enabled && ($("on"), (e.mousewheel.enabled = !0), !0);
      }
      function w() {
        return e.params.cssMode
          ? (e.wrapperEl.addEventListener(event, g), !0)
          : !!e.mousewheel.enabled &&
              ($("off"), (e.mousewheel.enabled = !1), !0);
      }
      s("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && w(),
          e.params.mousewheel.enabled && v();
      }),
        s("destroy", () => {
          e.params.cssMode && v(), e.mousewheel.enabled && w();
        }),
        Object.assign(e.mousewheel, { enable: v, disable: w });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      function i(t) {
        let s;
        return (
          t &&
            ((s = d(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function r(t, s) {
        let a = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](a.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
      }
      function l() {
        if (e.params.loop) return;
        let { $nextEl: t, $prevEl: s } = e.navigation;
        r(s, e.isBeginning), r(t, e.isEnd);
      }
      function n(t) {
        t.preventDefault(), (e.isBeginning && !e.params.loop) || e.slidePrev();
      }
      function o(t) {
        t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
      }
      function p() {
        let t = e.params.navigation;
        if (
          ((e.params.navigation = G(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let s = i(t.nextEl),
          a = i(t.prevEl);
        s && s.length > 0 && s.on("click", o),
          a && a.length > 0 && a.on("click", n),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: a,
            prevEl: a && a[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
      }
      function c() {
        let { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", n),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          p(), l();
        }),
        s("toEdge fromEdge lock unlock", () => {
          l();
        }),
        s("destroy", () => {
          c();
        }),
        s("enable disable", () => {
          let { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          let { $nextEl: i, $prevEl: r } = e.navigation,
            l = s.target;
          if (e.params.navigation.hideOnClick && !d(l).is(r) && !d(l).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === l || e.pagination.el.contains(l))
            )
              return;
            let n;
            i
              ? (n = i.hasClass(e.params.navigation.hiddenClass))
              : r && (n = r.hasClass(e.params.navigation.hiddenClass)),
              a(!0 === n ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: l, init: p, destroy: c });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      let i = "swiper-pagination",
        r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function n() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function o(t, s) {
        let { bulletActiveClass: a } = e.params.pagination;
        t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function p() {
        let t = e.rtl,
          s = e.params.pagination;
        if (n()) return;
        let i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          p = e.pagination.$el,
          c,
          u = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((c = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )) >
                i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== e.params.paginationType && (c = u + c))
            : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          let m = e.pagination.bullets,
            h,
            f,
            g;
          if (
            (s.dynamicBullets &&
              ((r = m
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              p.css(
                e.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((l += c - e.previousIndex) > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (g =
                ((f =
                  (h = c - l) +
                  (Math.min(m.length, s.dynamicMainBullets) - 1)) +
                  h) /
                2)),
            m.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            p.length > 1)
          )
            m.each((e) => {
              let t = d(e),
                a = t.index();
              a === c && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= h &&
                    a <= f &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  a === h && o(t, "prev"),
                  a === f && o(t, "next"));
            });
          else {
            let $ = m.eq(c),
              v = $.index();
            if (($.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              let w = m.eq(h),
                _ = m.eq(f);
              for (let b = h; b <= f; b += 1)
                m.eq(b).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop) {
                if (v >= m.length - s.dynamicMainBullets) {
                  for (let x = s.dynamicMainBullets; x >= 0; x -= 1)
                    m.eq(m.length - x).addClass(`${s.bulletActiveClass}-main`);
                  m.eq(m.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else o(w, "prev"), o(_, "next");
              } else o(w, "prev"), o(_, "next");
            }
          }
          if (s.dynamicBullets) {
            let y = Math.min(m.length, s.dynamicMainBullets + 4),
              E = (r * y - r) / 2 - g * r;
            m.css(e.isHorizontal() ? (t ? "right" : "left") : "top", `${E}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (p.find(B(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
            p.find(B(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let T;
          T = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          let C = (c + 1) / u,
            S = 1,
            P = 1;
          "horizontal" === T ? (S = C) : (P = C),
            p
              .find(B(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${S}) scaleY(${P})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (p.html(s.renderCustom(e, c + 1, u)), a("paginationRender", p[0]))
          : a("paginationUpdate", p[0]),
          e.params.watchOverflow &&
            e.enabled &&
            p[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function c() {
        let t = e.params.pagination;
        if (n()) return;
        let s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el,
          r = "";
        if ("bullets" === t.type) {
          let l = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            l > s &&
            (l = s);
          for (let o = 0; o < l; o += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, o, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(r), (e.pagination.bullets = i.find(B(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== t.type && a("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = G(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        let t = e.params.pagination;
        if (!t.el) return;
        let s = d(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            (s = e.$el.find(t.el)).length > 1 &&
            (s = s.filter((t) => d(t).parents(".swiper")[0] === e.el)),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (l = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", B(t.bulletClass), function (t) {
              t.preventDefault();
              let s = d(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function m() {
        let t = e.params.pagination;
        if (n()) return;
        let s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", B(t.bulletClass));
      }
      s("init", () => {
        u(), c(), p();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && p();
        }),
        s("snapIndexChange", () => {
          e.params.loop || p();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (c(), p());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (c(), p());
        }),
        s("destroy", () => {
          m();
        }),
        s("enable disable", () => {
          let { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          p();
        }),
        s("click", (t, s) => {
          let i = s.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r.length > 0 &&
            !d(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            let l = r.hasClass(e.params.pagination.hiddenClass);
            a(!0 === l ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: c,
          update: p,
          init: u,
          destroy: m,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      let r = a(),
        l,
        n,
        o,
        p,
        u = !1,
        m = null,
        h = null;
      function f() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        let { scrollbar: t, rtlTranslate: s, progress: a } = e,
          { $dragEl: i, $el: r } = t,
          l = e.params.scrollbar,
          d = n,
          p = (o - n) * a;
        s
          ? (p = -p) > 0
            ? ((d = n - p), (p = 0))
            : -p + n > o && (d = o + p)
          : p < 0
          ? ((d = n + p), (p = 0))
          : p + n > o && (d = o - p),
          e.isHorizontal()
            ? (i.transform(`translate3d(${p}px, 0, 0)`),
              (i[0].style.width = `${d}px`))
            : (i.transform(`translate3d(0px, ${p}px, 0)`),
              (i[0].style.height = `${d}px`)),
          l.hide &&
            (clearTimeout(m),
            (r[0].style.opacity = 1),
            (m = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function g() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        let { scrollbar: t } = e,
          { $dragEl: s, $el: a } = t;
        (s[0].style.width = ""),
          (s[0].style.height = ""),
          (o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (p =
            e.size /
            (e.virtualSize +
              e.params.slidesOffsetBefore -
              (e.params.centeredSlides ? e.snapGrid[0] : 0))),
          (n =
            "auto" === e.params.scrollbar.dragSize
              ? o * p
              : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (s[0].style.width = `${n}px`)
            : (s[0].style.height = `${n}px`),
          (a[0].style.display = p >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (a[0].style.opacity = 0),
          e.params.watchOverflow &&
            e.enabled &&
            t.$el[e.isLocked ? "addClass" : "removeClass"](
              e.params.scrollbar.lockClass
            );
      }
      function $(t) {
        return e.isHorizontal()
          ? "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientX
            : t.clientX
          : "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].clientY
          : t.clientY;
      }
      function v(t) {
        let { scrollbar: s, rtlTranslate: a } = e,
          { $el: i } = s,
          r;
        (r = Math.max(
          Math.min(
            (r =
              ($(t) -
                i.offset()[e.isHorizontal() ? "left" : "top"] -
                (null !== l ? l : n / 2)) /
              (o - n)),
            1
          ),
          0
        )),
          a && (r = 1 - r);
        let d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
        e.updateProgress(d),
          e.setTranslate(d),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      function w(t) {
        let s = e.params.scrollbar,
          { scrollbar: a, $wrapperEl: r } = e,
          { $el: n, $dragEl: o } = a;
        (u = !0),
          (l =
            t.target === o[0] || t.target === o
              ? $(t) -
                t.target.getBoundingClientRect()[
                  e.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          r.transition(100),
          o.transition(100),
          v(t),
          clearTimeout(h),
          n.transition(0),
          s.hide && n.css("opacity", 1),
          e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
          i("scrollbarDragStart", t);
      }
      function _(t) {
        let { scrollbar: s, $wrapperEl: a } = e,
          { $el: r, $dragEl: l } = s;
        u &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          v(t),
          a.transition(0),
          r.transition(0),
          l.transition(0),
          i("scrollbarDragMove", t));
      }
      function b(t) {
        let s = e.params.scrollbar,
          { scrollbar: a, $wrapperEl: r } = e,
          { $el: l } = a;
        u &&
          ((u = !1),
          e.params.cssMode &&
            (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          s.hide &&
            (clearTimeout(h),
            (h = c(() => {
              l.css("opacity", 0), l.transition(400);
            }, 1e3))),
          i("scrollbarDragEnd", t),
          s.snapOnRelease && e.slideToClosest());
      }
      function x(t) {
        let {
            scrollbar: s,
            touchEventsTouch: a,
            touchEventsDesktop: i,
            params: l,
            support: n,
          } = e,
          o = s.$el[0],
          d = !(!n.passiveListener || !l.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          p = !(!n.passiveListener || !l.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!o) return;
        let c = "on" === t ? "addEventListener" : "removeEventListener";
        n.touch
          ? (o[c](a.start, w, d), o[c](a.move, _, d), o[c](a.end, b, p))
          : (o[c](i.start, w, d), r[c](i.move, _, d), r[c](i.end, b, p));
      }
      function y() {
        let { scrollbar: t, $el: s } = e;
        e.params.scrollbar = G(
          e,
          e.originalParams.scrollbar,
          e.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        let a = e.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        e.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.find(a.el).length &&
          (i = s.find(a.el));
        let r = i.find(`.${e.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(t, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && e.params.scrollbar.el && x("on"),
          i &&
            i[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
      }
      function E() {
        e.params.scrollbar.el && x("off");
      }
      t({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      }),
        (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        s("init", () => {
          y(), g(), f();
        }),
        s("update resize observerUpdate lock unlock", () => {
          g();
        }),
        s("setTranslate", () => {
          f();
        }),
        s("setTransition", (t, s) => {
          var a;
          (a = s),
            e.params.scrollbar.el &&
              e.scrollbar.el &&
              e.scrollbar.$dragEl.transition(a);
        }),
        s("enable disable", () => {
          let { $el: t } = e.scrollbar;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
        }),
        s("destroy", () => {
          E();
        }),
        Object.assign(e.scrollbar, {
          updateSize: g,
          setTranslate: f,
          init: y,
          destroy: E,
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ parallax: { enabled: !1 } });
      let a = (t, s) => {
          let { rtl: a } = e,
            i = d(t),
            r = a ? -1 : 1,
            l = i.attr("data-swiper-parallax") || "0",
            n = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y"),
            p = i.attr("data-swiper-parallax-scale"),
            c = i.attr("data-swiper-parallax-opacity");
          n || o
            ? ((n = n || "0"), (o = o || "0"))
            : e.isHorizontal()
            ? ((n = l), (o = "0"))
            : ((o = l), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * s * r + "%"
                : n * s * r + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
            null != c && (i[0].style.opacity = c - (c - 1) * (1 - Math.abs(s))),
            null == p
              ? i.transform(`translate3d(${n}, ${o}, 0px)`)
              : i.transform(
                  `translate3d(${n}, ${o}, 0px) scale(${
                    p - (p - 1) * (1 - Math.abs(s))
                  })`
                );
        },
        i = () => {
          let { $el: t, slides: s, progress: i, snapGrid: r } = e;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              a(e, i);
            }),
            s.each((t, s) => {
              let l = t.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (l += Math.ceil(s / 2) - i * (r.length - 1)),
                (l = Math.min(Math.max(l, -1), 1)),
                d(t)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    a(e, l);
                  });
            });
        };
      s("beforeInit", () => {
        e.params.parallax.enabled &&
          ((e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0));
      }),
        s("init", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTranslate", () => {
          e.params.parallax.enabled && i();
        }),
        s("setTransition", (t, s) => {
          e.params.parallax.enabled &&
            ((t = e.params.speed) => {
              let { $el: s } = e;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((e) => {
                let s = d(e),
                  a =
                    parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                0 === t && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      let i = r();
      t({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (e.zoom = { enabled: !1 });
      let l,
        n,
        o,
        p = 1,
        c = !1,
        u = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        h = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        f = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        },
        g = 1;
      function $(e) {
        if (e.targetTouches.length < 2) return 1;
        let t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function v(t) {
        let s = e.support,
          a = e.params.zoom;
        if (((n = !1), (o = !1), !s.gestures)) {
          if (
            "touchstart" !== t.type ||
            ("touchstart" === t.type && t.targetTouches.length < 2)
          )
            return;
          (n = !0), (u.scaleStart = $(t));
        }
        (u.$slideEl && u.$slideEl.length) ||
        ((u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
        0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find(`.${a.containerClass}`)
          .eq(0)
          .find("img, svg, canvas, picture, .swiper-zoom-target")),
        (u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)),
        (u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== u.$imageWrapEl.length)
          ? (u.$imageEl && u.$imageEl.transition(0), (c = !0))
          : (u.$imageEl = void 0);
      }
      function w(t) {
        let s = e.support,
          a = e.params.zoom,
          i = e.zoom;
        if (!s.gestures) {
          if (
            "touchmove" !== t.type ||
            ("touchmove" === t.type && t.targetTouches.length < 2)
          )
            return;
          (o = !0), (u.scaleMove = $(t));
        }
        u.$imageEl && 0 !== u.$imageEl.length
          ? (s.gestures
              ? (i.scale = t.scale * p)
              : (i.scale = (u.scaleMove / u.scaleStart) * p),
            i.scale > u.maxRatio &&
              (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio &&
              (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : "gesturechange" === t.type && v(t);
      }
      function _(t) {
        let s = e.device,
          a = e.support,
          i = e.params.zoom,
          r = e.zoom;
        if (!a.gestures) {
          if (
            !n ||
            !o ||
            "touchend" !== t.type ||
            ("touchend" === t.type && t.changedTouches.length < 2 && !s.android)
          )
            return;
          (n = !1), (o = !1);
        }
        u.$imageEl &&
          0 !== u.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio)),
          u.$imageEl
            .transition(e.params.speed)
            .transform(`translate3d(0,0,0) scale(${r.scale})`),
          (p = r.scale),
          (c = !1),
          1 === r.scale && (u.$slideEl = void 0));
      }
      function b(t) {
        let s = e.zoom;
        if (
          !u.$imageEl ||
          0 === u.$imageEl.length ||
          ((e.allowClick = !1), !h.isTouched || !u.$slideEl)
        )
          return;
        h.isMoved ||
          ((h.width = u.$imageEl[0].offsetWidth),
          (h.height = u.$imageEl[0].offsetHeight),
          (h.startX = m(u.$imageWrapEl[0], "x") || 0),
          (h.startY = m(u.$imageWrapEl[0], "y") || 0),
          (u.slideWidth = u.$slideEl[0].offsetWidth),
          (u.slideHeight = u.$slideEl[0].offsetHeight),
          u.$imageWrapEl.transition(0));
        let a = h.width * s.scale,
          i = h.height * s.scale;
        if (!(a < u.slideWidth && i < u.slideHeight)) {
          if (
            ((h.minX = Math.min(u.slideWidth / 2 - a / 2, 0)),
            (h.maxX = -h.minX),
            (h.minY = Math.min(u.slideHeight / 2 - i / 2, 0)),
            (h.maxY = -h.minY),
            (h.touchesCurrent.x =
              "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
            (h.touchesCurrent.y =
              "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
            !h.isMoved &&
              !c &&
              ((e.isHorizontal() &&
                ((Math.floor(h.minX) === Math.floor(h.startX) &&
                  h.touchesCurrent.x < h.touchesStart.x) ||
                  (Math.floor(h.maxX) === Math.floor(h.startX) &&
                    h.touchesCurrent.x > h.touchesStart.x))) ||
                (!e.isHorizontal() &&
                  ((Math.floor(h.minY) === Math.floor(h.startY) &&
                    h.touchesCurrent.y < h.touchesStart.y) ||
                    (Math.floor(h.maxY) === Math.floor(h.startY) &&
                      h.touchesCurrent.y > h.touchesStart.y)))))
          )
            return void (h.isTouched = !1);
          t.cancelable && t.preventDefault(),
            t.stopPropagation(),
            (h.isMoved = !0),
            (h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX),
            (h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY),
            h.currentX < h.minX &&
              (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
            h.currentX > h.maxX &&
              (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
            h.currentY < h.minY &&
              (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
            h.currentY > h.maxY &&
              (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
            f.prevPositionX || (f.prevPositionX = h.touchesCurrent.x),
            f.prevPositionY || (f.prevPositionY = h.touchesCurrent.y),
            f.prevTime || (f.prevTime = Date.now()),
            (f.x =
              (h.touchesCurrent.x - f.prevPositionX) /
              (Date.now() - f.prevTime) /
              2),
            (f.y =
              (h.touchesCurrent.y - f.prevPositionY) /
              (Date.now() - f.prevTime) /
              2),
            2 > Math.abs(h.touchesCurrent.x - f.prevPositionX) && (f.x = 0),
            2 > Math.abs(h.touchesCurrent.y - f.prevPositionY) && (f.y = 0),
            (f.prevPositionX = h.touchesCurrent.x),
            (f.prevPositionY = h.touchesCurrent.y),
            (f.prevTime = Date.now()),
            u.$imageWrapEl.transform(
              `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            );
        }
      }
      function x() {
        let t = e.zoom;
        u.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (p = 1),
          (u.$slideEl = void 0),
          (u.$imageEl = void 0),
          (u.$imageWrapEl = void 0));
      }
      function y(t) {
        let s = e.zoom,
          a = e.params.zoom;
        if (
          (u.$slideEl ||
            (t &&
              t.target &&
              (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
            u.$slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (u.$slideEl = e.$wrapperEl.children(
                    `.${e.params.slideActiveClass}`
                  ))
                : (u.$slideEl = e.slides.eq(e.activeIndex))),
            (u.$imageEl = u.$slideEl
              .find(`.${a.containerClass}`)
              .eq(0)
              .find("img, svg, canvas, picture, .swiper-zoom-target")),
            (u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`))),
          !u.$imageEl ||
            0 === u.$imageEl.length ||
            !u.$imageWrapEl ||
            0 === u.$imageWrapEl.length)
        )
          return;
        let r, l, n, o, c, m, f, g, $, v, w, _, b, x, y, E, T, C;
        e.params.cssMode &&
          ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.touchAction = "none")),
          u.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === h.touchesStart.x && t
            ? ((r =
                "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
              (l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
            : ((r = h.touchesStart.x), (l = h.touchesStart.y)),
          (s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          (p = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          t
            ? ((T = u.$slideEl[0].offsetWidth),
              (C = u.$slideEl[0].offsetHeight),
              (n = u.$slideEl.offset().left + i.scrollX),
              (o = u.$slideEl.offset().top + i.scrollY),
              (c = n + T / 2 - r),
              (m = o + C / 2 - l),
              ($ = u.$imageEl[0].offsetWidth),
              (v = u.$imageEl[0].offsetHeight),
              (w = $ * s.scale),
              (_ = v * s.scale),
              (b = Math.min(T / 2 - w / 2, 0)),
              (x = Math.min(C / 2 - _ / 2, 0)),
              (y = -b),
              (E = -x),
              (f = c * s.scale),
              (g = m * s.scale),
              f < b && (f = b),
              f > y && (f = y),
              g < x && (g = x),
              g > E && (g = E))
            : ((f = 0), (g = 0)),
          u.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${f}px, ${g}px,0)`),
          u.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function E() {
        let t = e.zoom,
          s = e.params.zoom;
        u.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (u.$slideEl = e.$wrapperEl.children(
                `.${e.params.slideActiveClass}`
              ))
            : (u.$slideEl = e.slides.eq(e.activeIndex)),
          (u.$imageEl = u.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("img, svg, canvas, picture, .swiper-zoom-target")),
          (u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`))),
          u.$imageEl &&
            0 !== u.$imageEl.length &&
            u.$imageWrapEl &&
            0 !== u.$imageWrapEl.length &&
            (e.params.cssMode &&
              ((e.wrapperEl.style.overflow = ""),
              (e.wrapperEl.style.touchAction = "")),
            (t.scale = 1),
            (p = 1),
            u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            u.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (u.$slideEl = void 0));
      }
      function T(t) {
        let s = e.zoom;
        s.scale && 1 !== s.scale ? E() : y(t);
      }
      function C() {
        let t = e.support;
        return {
          passiveListener: !(
            "touchstart" !== e.touchEvents.start ||
            !t.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !t.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function S() {
        return `.${e.params.slideClass}`;
      }
      function P(t) {
        let { passiveListener: s } = C(),
          a = S();
        e.$wrapperEl[t]("gesturestart", a, v, s),
          e.$wrapperEl[t]("gesturechange", a, w, s),
          e.$wrapperEl[t]("gestureend", a, _, s);
      }
      function k() {
        l || ((l = !0), P("on"));
      }
      function M() {
        l && ((l = !1), P("off"));
      }
      function z() {
        let t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        let s = e.support,
          { passiveListener: a, activeListenerWithCapture: i } = C(),
          r = S();
        s.gestures
          ? (e.$wrapperEl.on(e.touchEvents.start, k, a),
            e.$wrapperEl.on(e.touchEvents.end, M, a))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.on(e.touchEvents.start, r, v, a),
            e.$wrapperEl.on(e.touchEvents.move, r, w, i),
            e.$wrapperEl.on(e.touchEvents.end, r, _, a),
            e.touchEvents.cancel &&
              e.$wrapperEl.on(e.touchEvents.cancel, r, _, a)),
          e.$wrapperEl.on(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            b,
            i
          );
      }
      function L() {
        let t = e.zoom;
        if (!t.enabled) return;
        let s = e.support;
        t.enabled = !1;
        let { passiveListener: a, activeListenerWithCapture: i } = C(),
          r = S();
        s.gestures
          ? (e.$wrapperEl.off(e.touchEvents.start, k, a),
            e.$wrapperEl.off(e.touchEvents.end, M, a))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.off(e.touchEvents.start, r, v, a),
            e.$wrapperEl.off(e.touchEvents.move, r, w, i),
            e.$wrapperEl.off(e.touchEvents.end, r, _, a),
            e.touchEvents.cancel &&
              e.$wrapperEl.off(e.touchEvents.cancel, r, _, a)),
          e.$wrapperEl.off(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            b,
            i
          );
      }
      Object.defineProperty(e.zoom, "scale", {
        get: () => g,
        set(e) {
          if (g !== e) {
            let t = u.$imageEl ? u.$imageEl[0] : void 0,
              s = u.$slideEl ? u.$slideEl[0] : void 0;
            a("zoomChange", e, t, s);
          }
          g = e;
        },
      }),
        s("init", () => {
          e.params.zoom.enabled && z();
        }),
        s("destroy", () => {
          L();
        }),
        s("touchStart", (t, s) => {
          e.zoom.enabled &&
            (function (t) {
              let s = e.device;
              u.$imageEl &&
                0 !== u.$imageEl.length &&
                (h.isTouched ||
                  (s.android && t.cancelable && t.preventDefault(),
                  (h.isTouched = !0),
                  (h.touchesStart.x =
                    "touchstart" === t.type
                      ? t.targetTouches[0].pageX
                      : t.pageX),
                  (h.touchesStart.y =
                    "touchstart" === t.type
                      ? t.targetTouches[0].pageY
                      : t.pageY)));
            })(s);
        }),
        s("touchEnd", (t, s) => {
          e.zoom.enabled &&
            (function () {
              let t = e.zoom;
              if (!u.$imageEl || 0 === u.$imageEl.length) return;
              if (!h.isTouched || !h.isMoved)
                return (h.isTouched = !1), void (h.isMoved = !1);
              (h.isTouched = !1), (h.isMoved = !1);
              let s = 300,
                a = 300,
                i = f.x * s,
                r = h.currentX + i,
                l = f.y * a,
                n = h.currentY + l;
              0 !== f.x && (s = Math.abs((r - h.currentX) / f.x)),
                0 !== f.y && (a = Math.abs((n - h.currentY) / f.y));
              let o = Math.max(s, a);
              (h.currentX = r), (h.currentY = n);
              let d = h.width * t.scale,
                p = h.height * t.scale;
              (h.minX = Math.min(u.slideWidth / 2 - d / 2, 0)),
                (h.maxX = -h.minX),
                (h.minY = Math.min(u.slideHeight / 2 - p / 2, 0)),
                (h.maxY = -h.minY),
                (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
                (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
                u.$imageWrapEl
                  .transition(o)
                  .transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`);
            })();
        }),
        s("doubleTap", (t, s) => {
          !e.animating &&
            e.params.zoom.enabled &&
            e.zoom.enabled &&
            e.params.zoom.toggle &&
            T(s);
        }),
        s("transitionEnd", () => {
          e.zoom.enabled && e.params.zoom.enabled && x();
        }),
        s("slideChange", () => {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && x();
        }),
        Object.assign(e.zoom, {
          enable: z,
          disable: L,
          in: y,
          out: E,
          toggle: T,
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: a }) {
      t({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (e.lazy = {});
      let i = !1,
        l = !1;
      function n(t, s = !0) {
        let i = e.params.lazy;
        if (void 0 === t || 0 === e.slides.length) return;
        let r =
            e.virtual && e.params.virtual.enabled
              ? e.$wrapperEl.children(
                  `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                )
              : e.slides.eq(t),
          l = r.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !r.hasClass(i.elementClass) ||
          r.hasClass(i.loadedClass) ||
          r.hasClass(i.loadingClass) ||
          l.push(r[0]),
          0 !== l.length &&
            l.each((t) => {
              let l = d(t);
              l.addClass(i.loadingClass);
              let o = l.attr("data-background"),
                p = l.attr("data-src"),
                c = l.attr("data-srcset"),
                u = l.attr("data-sizes"),
                m = l.parent("picture");
              e.loadImage(l[0], p || o, c, u, !1, () => {
                if (null != e && e && (!e || e.params) && !e.destroyed) {
                  if (
                    (o
                      ? (l.css("background-image", `url("${o}")`),
                        l.removeAttr("data-background"))
                      : (c &&
                          (l.attr("srcset", c), l.removeAttr("data-srcset")),
                        u && (l.attr("sizes", u), l.removeAttr("data-sizes")),
                        m.length &&
                          m.children("source").each((e) => {
                            let t = d(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        p && (l.attr("src", p), l.removeAttr("data-src"))),
                    l.addClass(i.loadedClass).removeClass(i.loadingClass),
                    r.find(`.${i.preloaderClass}`).remove(),
                    e.params.loop && s)
                  ) {
                    let t = r.attr("data-swiper-slide-index");
                    r.hasClass(e.params.slideDuplicateClass)
                      ? n(
                          e.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        )
                      : n(
                          e.$wrapperEl
                            .children(
                              `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                            )
                            .index(),
                          !1
                        );
                  }
                  a("lazyImageReady", r[0], l[0]),
                    e.params.autoHeight && e.updateAutoHeight();
                }
              }),
                a("lazyImageLoad", r[0], l[0]);
            });
      }
      function o() {
        let { $wrapperEl: t, params: s, slides: a, activeIndex: i } = e,
          r = e.virtual && s.virtual.enabled,
          o = s.lazy,
          p = s.slidesPerView;
        function c(e) {
          if (r) {
            if (
              t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
        }
        if (
          ("auto" === p && (p = 0), l || (l = !0), e.params.watchSlidesProgress)
        )
          t.children(`.${s.slideVisibleClass}`).each((e) => {
            n(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
          });
        else if (p > 1) for (let m = i; m < i + p; m += 1) c(m) && n(m);
        else n(i);
        if (o.loadPrevNext) {
          if (p > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            let h = o.loadPrevNextAmount,
              f = p,
              g = Math.min(i + f + Math.max(h, f), a.length),
              $ = Math.max(i - Math.max(f, h), 0);
            for (let v = i + p; v < g; v += 1) c(v) && n(v);
            for (let w = $; w < i; w += 1) c(w) && n(w);
          } else {
            let _ = t.children(`.${s.slideNextClass}`);
            _.length > 0 && n(u(_));
            let b = t.children(`.${s.slidePrevClass}`);
            b.length > 0 && n(u(b));
          }
        }
      }
      function p() {
        let t = r();
        if (!e || e.destroyed) return;
        let s = e.params.lazy.scrollingElement
            ? d(e.params.lazy.scrollingElement)
            : d(t),
          a = s[0] === t,
          l = a ? t.innerWidth : s[0].offsetWidth,
          n = a ? t.innerHeight : s[0].offsetHeight,
          c = e.$el.offset(),
          { rtlTranslate: u } = e,
          m = !1;
        u && (c.left -= e.$el[0].scrollLeft);
        let h = [
          [c.left, c.top],
          [c.left + e.width, c.top],
          [c.left, c.top + e.height],
          [c.left + e.width, c.top + e.height],
        ];
        for (let f = 0; f < h.length; f += 1) {
          let g = h[f];
          if (g[0] >= 0 && g[0] <= l && g[1] >= 0 && g[1] <= n) {
            if (0 === g[0] && 0 === g[1]) continue;
            m = !0;
          }
        }
        let $ = !(
          "touchstart" !== e.touchEvents.start ||
          !e.support.passiveListener ||
          !e.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        m
          ? (o(), s.off("scroll", p, $))
          : i || ((i = !0), s.on("scroll", p, $));
      }
      s("beforeInit", () => {
        e.params.lazy.enabled &&
          e.params.preloadImages &&
          (e.params.preloadImages = !1);
      }),
        s("init", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o());
        }),
        s("scroll", () => {
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.freeMode.sticky &&
            o();
        }),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o());
        }),
        s("transitionStart", () => {
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart && !l)) &&
            (e.params.lazy.checkInView ? p() : o());
        }),
        s("transitionEnd", () => {
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            (e.params.lazy.checkInView ? p() : o());
        }),
        s("slideChange", () => {
          let {
            lazy: t,
            cssMode: s,
            watchSlidesProgress: a,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = e.params;
          t.enabled && (s || (a && (i || 0 === r))) && o();
        }),
        Object.assign(e.lazy, { load: o, loadInSlide: n });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      function a(e, t) {
        let s,
          a,
          i,
          r = (e, t) => {
            for (a = -1, s = e.length; s - a > 1; )
              e[(i = (s + a) >> 1)] <= t ? (a = i) : (s = i);
            return s;
          },
          l,
          n;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((l = (n = r(this.x, e)) - 1),
                ((e - this.x[l]) * (this.y[n] - this.y[l])) /
                  (this.x[n] - this.x[l]) +
                  this.y[l])
              : 0;
          }),
          this
        );
      }
      function i() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        s("beforeInit", () => {
          e.controller.control = e.params.controller.control;
        }),
        s("update", () => {
          i();
        }),
        s("resize", () => {
          i();
        }),
        s("observerUpdate", () => {
          i();
        }),
        s("setTranslate", (t, s, a) => {
          e.controller.control && e.controller.setTranslate(s, a);
        }),
        s("setTransition", (t, s, a) => {
          e.controller.control && e.controller.setTransition(s, a);
        }),
        Object.assign(e.controller, {
          setTranslate: function (t, s) {
            let i = e.controller.control,
              r,
              l,
              n = e.constructor;
            function o(t) {
              var s;
              let i = e.rtlTranslate ? -e.translate : e.translate;
              "slide" === e.params.controller.by &&
                ((s = t),
                e.controller.spline ||
                  (e.controller.spline = e.params.loop
                    ? new a(e.slidesGrid, s.slidesGrid)
                    : new a(e.snapGrid, s.snapGrid)),
                (l = -e.controller.spline.interpolate(-i))),
                (l && "container" !== e.params.controller.by) ||
                  ((r =
                    (t.maxTranslate() - t.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (l = (i - e.minTranslate()) * r + t.minTranslate())),
                e.params.controller.inverse && (l = t.maxTranslate() - l),
                t.updateProgress(l),
                t.setTranslate(l, e),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let d = 0; d < i.length; d += 1)
                i[d] !== s && i[d] instanceof n && o(i[d]);
            else i instanceof n && s !== i && o(i);
          },
          setTransition: function (t, s) {
            let a = e.constructor,
              i = e.controller.control,
              r;
            function l(s) {
              s.setTransition(t, e),
                0 !== t &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    c(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        "slide" === e.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && l(i[r]);
            else i instanceof a && s !== i && l(i);
          },
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
        },
      });
      let a = null;
      function i(e) {
        let t = a;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function r(e) {
        e.attr("tabIndex", "0");
      }
      function l(e) {
        e.attr("tabIndex", "-1");
      }
      function n(e, t) {
        e.attr("role", t);
      }
      function o(e, t) {
        e.attr("aria-roledescription", t);
      }
      function p(e, t) {
        e.attr("aria-label", t);
      }
      function c(e) {
        e.attr("aria-disabled", !0);
      }
      function u(e) {
        e.attr("aria-disabled", !1);
      }
      function m(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        let s = e.params.a11y,
          a = d(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          a.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            a.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
          e.pagination &&
            a.is(B(e.params.pagination.bulletClass)) &&
            a[0].click();
      }
      function h() {
        if (e.params.loop || !e.navigation) return;
        let { $nextEl: t, $prevEl: s } = e.navigation;
        s && s.length > 0 && (e.isBeginning ? (c(s), l(s)) : (u(s), r(s))),
          t && t.length > 0 && (e.isEnd ? (c(t), l(t)) : (u(t), r(t)));
      }
      function f() {
        return (
          e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length
        );
      }
      let g = (e, t, s) => {
        r(e),
          "BUTTON" !== e[0].tagName && (n(e, "button"), e.on("keydown", m)),
          p(e, s),
          (function (e, t) {
            e.attr("aria-controls", t);
          })(e, t);
      };
      s("beforeInit", () => {
        a = d(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        s("afterInit", () => {
          e.params.a11y.enabled &&
            ((function t() {
              var s;
              let i = e.params.a11y;
              e.$el.append(a);
              let r = e.$el;
              i.containerRoleDescriptionMessage &&
                o(r, i.containerRoleDescriptionMessage),
                i.containerMessage && p(r, i.containerMessage);
              let l = e.$wrapperEl,
                c =
                  l.attr("id") ||
                  `swiper-wrapper-${(function (e = 16) {
                    return "x"
                      .repeat(e)
                      .replace(/x/g, () =>
                        Math.round(16 * Math.random()).toString(16)
                      );
                  })(16)}`,
                u =
                  e.params.autoplay && e.params.autoplay.enabled
                    ? "off"
                    : "polite";
              (s = c),
                l.attr("id", s),
                (function (e, t) {
                  e.attr("aria-live", t);
                })(l, u),
                i.itemRoleDescriptionMessage &&
                  o(d(e.slides), i.itemRoleDescriptionMessage),
                n(d(e.slides), i.slideRole);
              let h = e.params.loop
                  ? e.slides.filter(
                      (t) => !t.classList.contains(e.params.slideDuplicateClass)
                    ).length
                  : e.slides.length,
                $,
                v;
              e.slides.each((t, s) => {
                let a = d(t),
                  r = e.params.loop
                    ? parseInt(a.attr("data-swiper-slide-index"), 10)
                    : s;
                p(
                  a,
                  i.slideLabelMessage
                    .replace(/\{\{index\}\}/, r + 1)
                    .replace(/\{\{slidesLength\}\}/, h)
                );
              }),
                e.navigation &&
                  e.navigation.$nextEl &&
                  ($ = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (v = e.navigation.$prevEl),
                $ && $.length && g($, c, i.nextSlideMessage),
                v && v.length && g(v, c, i.prevSlideMessage),
                f() &&
                  e.pagination.$el.on(
                    "keydown",
                    B(e.params.pagination.bulletClass),
                    m
                  );
            })(),
            h());
        }),
        s("toEdge", () => {
          e.params.a11y.enabled && h();
        }),
        s("fromEdge", () => {
          e.params.a11y.enabled && h();
        }),
        s("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              let t = e.params.a11y;
              f() &&
                e.pagination.bullets.each((s) => {
                  let a = d(s);
                  r(a),
                    e.params.pagination.renderBullet ||
                      (n(a, "button"),
                      p(
                        a,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          a.index() + 1
                        )
                      ));
                });
            })();
        }),
        s("destroy", () => {
          let t, s;
          e.params.a11y.enabled &&
            (a && a.length > 0 && a.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
            t && t.off("keydown", m),
            s && s.off("keydown", m),
            f() &&
              e.pagination.$el.off(
                "keydown",
                B(e.params.pagination.bulletClass),
                m
              ));
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
      });
      let a = !1,
        i = {},
        l = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        n = (e) => {
          let t = r(),
            s;
          s = e ? new URL(e) : t.location;
          let a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        o = (t, s) => {
          let i = r();
          if (!a || !e.params.history.enabled) return;
          let n;
          n = e.params.url ? new URL(e.params.url) : i.location;
          let o = e.slides.eq(s),
            d = l(o.attr("data-history"));
          if (e.params.history.root.length > 0) {
            let p = e.params.history.root;
            "/" === p[p.length - 1] && (p = p.slice(0, p.length - 1)),
              (d = `${p}/${t}/${d}`);
          } else n.pathname.includes(t) || (d = `${t}/${d}`);
          let c = i.history.state;
          (c && c.value === d) ||
            (e.params.history.replaceState
              ? i.history.replaceState({ value: d }, null, d)
              : i.history.pushState({ value: d }, null, d));
        },
        d = (t, s, a) => {
          if (s)
            for (let i = 0, r = e.slides.length; i < r; i += 1) {
              let n = e.slides.eq(i);
              if (
                l(n.attr("data-history")) === s &&
                !n.hasClass(e.params.slideDuplicateClass)
              ) {
                let o = n.index();
                e.slideTo(o, t, a);
              }
            }
          else e.slideTo(0, t, a);
        },
        p = () => {
          (i = n(e.params.url)), d(e.params.speed, e.paths.value, !1);
        };
      s("init", () => {
        e.params.history.enabled &&
          (() => {
            let t = r();
            if (e.params.history) {
              if (!t.history || !t.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              (a = !0),
                ((i = n(e.params.url)).key || i.value) &&
                  (d(0, i.value, e.params.runCallbacksOnInit),
                  e.params.history.replaceState ||
                    t.addEventListener("popstate", p));
            }
          })();
      }),
        s("destroy", () => {
          e.params.history.enabled &&
            (() => {
              let t = r();
              e.params.history.replaceState ||
                t.removeEventListener("popstate", p);
            })();
        }),
        s("transitionEnd _freeModeNoMomentumRelease", () => {
          a && o(e.params.history.key, e.activeIndex);
        }),
        s("slideChange", () => {
          a && e.params.cssMode && o(e.params.history.key, e.activeIndex);
        });
    },
    function ({ swiper: e, extendParams: t, emit: s, on: i }) {
      let l = !1,
        n = a(),
        o = r();
      t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      let p = () => {
          s("hashChange");
          let t = n.location.hash.replace("#", "");
          if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            let a = e.$wrapperEl
              .children(`.${e.params.slideClass}[data-hash="${t}"]`)
              .index();
            if (void 0 === a) return;
            e.slideTo(a);
          }
        },
        c = () => {
          if (l && e.params.hashNavigation.enabled) {
            if (
              e.params.hashNavigation.replaceState &&
              o.history &&
              o.history.replaceState
            )
              o.history.replaceState(
                null,
                null,
                `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
              ),
                s("hashSet");
            else {
              let t = e.slides.eq(e.activeIndex),
                a = t.attr("data-hash") || t.attr("data-history");
              (n.location.hash = a || ""), s("hashSet");
            }
          }
        };
      i("init", () => {
        e.params.hashNavigation.enabled &&
          (() => {
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            l = !0;
            let t = n.location.hash.replace("#", "");
            if (t)
              for (let s = 0, a = e.slides.length; s < a; s += 1) {
                let i = e.slides.eq(s);
                if (
                  (i.attr("data-hash") || i.attr("data-history")) === t &&
                  !i.hasClass(e.params.slideDuplicateClass)
                ) {
                  let r = i.index();
                  e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
                }
              }
            e.params.hashNavigation.watchState && d(o).on("hashchange", p);
          })();
      }),
        i("destroy", () => {
          e.params.hashNavigation.enabled &&
            e.params.hashNavigation.watchState &&
            d(o).off("hashchange", p);
        }),
        i("transitionEnd _freeModeNoMomentumRelease", () => {
          l && c();
        }),
        i("slideChange", () => {
          l && e.params.cssMode && c();
        });
    },
    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
      let r;
      function l() {
        let t = e.slides.eq(e.activeIndex),
          s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(r),
          (r = c(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    i("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && l();
          }, s));
      }
      function n() {
        return (
          void 0 === r &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), i("autoplayStart"), l(), !0)
        );
      }
      function o() {
        return (
          !!e.autoplay.running &&
          void 0 !== r &&
          (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          i("autoplayStop"),
          !0)
        );
      }
      function d(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (r && clearTimeout(r),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, u);
                })
              : ((e.autoplay.paused = !1), l())));
      }
      function p() {
        let t = a();
        "hidden" === t.visibilityState && e.autoplay.running && d(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (l(), (e.autoplay.paused = !1));
      }
      function u(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? l() : o());
      }
      function m() {
        e.params.autoplay.disableOnInteraction ? o() : d(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          });
      }
      function h() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), l());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          e.params.autoplay.enabled &&
            (n(),
            a().addEventListener("visibilitychange", p),
            e.params.autoplay.pauseOnMouseEnter &&
              (e.$el.on("mouseenter", m), e.$el.on("mouseleave", h)));
        }),
        s("beforeTransitionStart", (t, s, a) => {
          e.autoplay.running &&
            (a || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(s)
              : o());
        }),
        s("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? o() : d());
        }),
        s("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            l();
        }),
        s("destroy", () => {
          e.$el.off("mouseenter", m),
            e.$el.off("mouseleave", h),
            e.autoplay.running && o(),
            a().removeEventListener("visibilitychange", p);
        }),
        Object.assign(e.autoplay, { pause: d, run: l, start: n, stop: o });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let a = !1,
        i = !1;
      function r() {
        let t = e.thumbs.swiper;
        if (!t) return;
        let s = t.clickedIndex,
          a = t.clickedSlide;
        if (
          (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
          null == s
        )
          return;
        let i;
        if (
          ((i = t.params.loop
            ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          e.params.loop)
        ) {
          let r = e.activeIndex;
          e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (r = e.activeIndex));
          let l = e.slides
              .eq(r)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            n = e.slides
              .eq(r)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === l ? n : void 0 === n ? l : n - r < r - l ? n : l;
        }
        e.slideTo(i);
      }
      function l() {
        let { thumbs: t } = e.params;
        if (a) return !1;
        a = !0;
        let s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (h(t.swiper)) {
          let l = Object.assign({}, t.swiper);
          Object.assign(l, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(l)),
            (i = !0);
        }
        return (
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", r),
          !0
        );
      }
      function n(t) {
        let s = e.thumbs.swiper;
        if (!s) return;
        let a =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          i = e.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;
        if (e.realIndex !== s.realIndex || r) {
          let l,
            n,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            let d = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index(),
              p = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index();
            (l =
              void 0 === d
                ? p
                : void 0 === p
                ? d
                : p - o == o - d
                ? s.params.slidesPerGroup > 1
                  ? p
                  : o
                : p - o < o - d
                ? p
                : d),
              (n = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else n = (l = e.realIndex) > e.previousIndex ? "next" : "prev";
          r && (l += "next" === n ? i : -1 * i),
            s.visibleSlidesIndexes &&
              0 > s.visibleSlidesIndexes.indexOf(l) &&
              (s.params.centeredSlides
                ? (l =
                    l > o
                      ? l - Math.floor(a / 2) + 1
                      : l + Math.floor(a / 2) - 1)
                : l > o && s.params.slidesPerGroup,
              s.slideTo(l, t ? 0 : void 0));
        }
        let c = 1,
          u = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (c = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (c = 1),
          (c = Math.floor(c)),
          s.slides.removeClass(u),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let m = 0; m < c; m += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${e.realIndex + m}"]`)
              .addClass(u);
        else
          for (let h = 0; h < c; h += 1)
            s.slides.eq(e.realIndex + h).addClass(u);
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          let { thumbs: t } = e.params;
          t && t.swiper && (l(), n(!0));
        }),
        s("slideChange update resize observerUpdate", () => {
          e.thumbs.swiper && n();
        }),
        s("setTransition", (t, s) => {
          let a = e.thumbs.swiper;
          a && a.setTransition(s);
        }),
        s("beforeDestroy", () => {
          let t = e.thumbs.swiper;
          t && i && t && t.destroy();
        }),
        Object.assign(e.thumbs, { init: l, update: n });
    },
    function ({ swiper: e, extendParams: t, emit: s, once: a }) {
      t({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(e, {
          freeMode: {
            onTouchMove: function () {
              let { touchEventsData: t, touches: s } = e;
              0 === t.velocities.length &&
                t.velocities.push({
                  position: s[e.isHorizontal() ? "startX" : "startY"],
                  time: t.touchStartTime,
                }),
                t.velocities.push({
                  position: s[e.isHorizontal() ? "currentX" : "currentY"],
                  time: u(),
                });
            },
            onTouchEnd: function ({ currentPos: t }) {
              let {
                  params: i,
                  $wrapperEl: r,
                  rtlTranslate: l,
                  snapGrid: n,
                  touchEventsData: o,
                } = e,
                d = u() - o.touchStartTime;
              if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (t > -e.maxTranslate())
                e.slides.length < n.length
                  ? e.slideTo(n.length - 1)
                  : e.slideTo(e.slides.length - 1);
              else {
                if (i.freeMode.momentum) {
                  if (o.velocities.length > 1) {
                    let p = o.velocities.pop(),
                      c = o.velocities.pop(),
                      m = p.position - c.position,
                      h = p.time - c.time;
                    (e.velocity = m / h),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < i.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (h > 150 || u() - p.time > 300) && (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= i.freeMode.momentumVelocityRatio),
                    (o.velocities.length = 0);
                  let f = 1e3 * i.freeMode.momentumRatio,
                    g = e.velocity * f,
                    $ = e.translate + g;
                  l && ($ = -$);
                  let v,
                    w = !1,
                    _ =
                      20 *
                      Math.abs(e.velocity) *
                      i.freeMode.momentumBounceRatio,
                    b;
                  if ($ < e.maxTranslate())
                    i.freeMode.momentumBounce
                      ? ($ + e.maxTranslate() < -_ &&
                          ($ = e.maxTranslate() - _),
                        (v = e.maxTranslate()),
                        (w = !0),
                        (o.allowMomentumBounce = !0))
                      : ($ = e.maxTranslate()),
                      i.loop && i.centeredSlides && (b = !0);
                  else if ($ > e.minTranslate())
                    i.freeMode.momentumBounce
                      ? ($ - e.minTranslate() > _ && ($ = e.minTranslate() + _),
                        (v = e.minTranslate()),
                        (w = !0),
                        (o.allowMomentumBounce = !0))
                      : ($ = e.minTranslate()),
                      i.loop && i.centeredSlides && (b = !0);
                  else if (i.freeMode.sticky) {
                    let x;
                    for (let y = 0; y < n.length; y += 1)
                      if (n[y] > -$) {
                        x = y;
                        break;
                      }
                    $ = -($ =
                      Math.abs(n[x] - $) < Math.abs(n[x - 1] - $) ||
                      "next" === e.swipeDirection
                        ? n[x]
                        : n[x - 1]);
                  }
                  if (
                    (b &&
                      a("transitionEnd", () => {
                        e.loopFix();
                      }),
                    0 !== e.velocity)
                  ) {
                    if (
                      ((f = l
                        ? Math.abs((-$ - e.translate) / e.velocity)
                        : Math.abs(($ - e.translate) / e.velocity)),
                      i.freeMode.sticky)
                    ) {
                      let E = Math.abs((l ? -$ : $) - e.translate),
                        T = e.slidesSizesGrid[e.activeIndex];
                      f =
                        E < T
                          ? i.speed
                          : E < 2 * T
                          ? 1.5 * i.speed
                          : 2.5 * i.speed;
                    }
                  } else if (i.freeMode.sticky) return void e.slideToClosest();
                  i.freeMode.momentumBounce && w
                    ? (e.updateProgress(v),
                      e.setTransition(f),
                      e.setTranslate($),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      r.transitionEnd(() => {
                        e &&
                          !e.destroyed &&
                          o.allowMomentumBounce &&
                          (s("momentumBounce"),
                          e.setTransition(i.speed),
                          setTimeout(() => {
                            e.setTranslate(v),
                              r.transitionEnd(() => {
                                e && !e.destroyed && e.transitionEnd();
                              });
                          }, 0));
                      }))
                    : e.velocity
                    ? (s("_freeModeNoMomentumRelease"),
                      e.updateProgress($),
                      e.setTransition(f),
                      e.setTranslate($),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        r.transitionEnd(() => {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress($),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else {
                  if (i.freeMode.sticky) return void e.slideToClosest();
                  i.freeMode && s("_freeModeNoMomentumRelease");
                }
                (!i.freeMode.momentum || d >= i.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              }
            },
          },
        });
    },
    function ({ swiper: e, extendParams: t }) {
      let s, a, i;
      t({ grid: { rows: 1, fill: "column" } }),
        (e.grid = {
          initSlides(t) {
            let { slidesPerView: r } = e.params,
              { rows: l, fill: n } = e.params.grid;
            (a = s / l),
              (i = Math.floor(t / l)),
              (s = Math.floor(t / l) === t / l ? t : Math.ceil(t / l) * l),
              "auto" !== r && "row" === n && (s = Math.max(s, r * l));
          },
          updateSlide(t, r, l, n) {
            let { slidesPerGroup: o, spaceBetween: d } = e.params,
              { rows: p, fill: c } = e.params.grid,
              u,
              m,
              h;
            if ("row" === c && o > 1) {
              let f = Math.floor(t / (o * p)),
                g = t - p * o * f,
                $ = 0 === f ? o : Math.min(Math.ceil((l - f * p * o) / p), o);
              (h = Math.floor(g / $)),
                (u = (m = g - h * $ + f * o) + (h * s) / p),
                r.css({ "-webkit-order": u, order: u });
            } else
              "column" === c
                ? ((m = Math.floor(t / p)),
                  (h = t - m * p),
                  (m > i || (m === i && h === p - 1)) &&
                    (h += 1) >= p &&
                    ((h = 0), (m += 1)))
                : ((h = Math.floor(t / a)), (m = t - h * a));
            r.css(n("margin-top"), 0 !== h ? d && `${d}px` : "");
          },
          updateWrapperSize(t, a, i) {
            let {
                spaceBetween: r,
                centeredSlides: l,
                roundLengths: n,
              } = e.params,
              { rows: o } = e.params.grid;
            if (
              ((e.virtualSize = (t + r) * s),
              (e.virtualSize = Math.ceil(e.virtualSize / o) - r),
              e.$wrapperEl.css({ [i("width")]: `${e.virtualSize + r}px` }),
              l)
            ) {
              a.splice(0, a.length);
              let d = [];
              for (let p = 0; p < a.length; p += 1) {
                let c = a[p];
                n && (c = Math.floor(c)),
                  a[p] < e.virtualSize + a[0] && d.push(c);
              }
              a.push(...d);
            }
          },
        });
    },
    function ({ swiper: e }) {
      Object.assign(e, {
        appendSlide: N.bind(e),
        prependSlide: X.bind(e),
        addSlide: H.bind(e),
        removeSlide: Y.bind(e),
        removeAllSlides: W.bind(e),
      });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } }),
        R({
          effect: "fade",
          swiper: e,
          on: s,
          setTranslate() {
            let { slides: t } = e,
              s = e.params.fadeEffect;
            for (let a = 0; a < t.length; a += 1) {
              let i = e.slides.eq(a),
                r = -i[0].swiperSlideOffset;
              e.params.virtualTranslate || (r -= e.translate);
              let l = 0;
              e.isHorizontal() || ((l = r), (r = 0));
              let n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i[0].progress), 0)
                : 1 + Math.min(Math.max(i[0].progress, -1), 0);
              V(s, i)
                .css({ opacity: n })
                .transform(`translate3d(${r}px, ${l}px, 0px)`);
            }
          },
          setTransition(t) {
            let { transformEl: s } = e.params.fadeEffect;
            (s ? e.slides.find(s) : e.slides).transition(t),
              q({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      }),
        R({
          effect: "cube",
          swiper: e,
          on: s,
          setTranslate() {
            let {
                $el: t,
                $wrapperEl: s,
                slides: a,
                width: i,
                height: r,
                rtlTranslate: l,
                size: n,
                browser: o,
              } = e,
              p = e.params.cubeEffect,
              c = e.isHorizontal(),
              u = e.virtual && e.params.virtual.enabled,
              m,
              h = 0;
            p.shadow &&
              (c
                ? (0 === (m = s.find(".swiper-cube-shadow")).length &&
                    ((m = d('<div class="swiper-cube-shadow"></div>')),
                    s.append(m)),
                  m.css({ height: `${i}px` }))
                : 0 === (m = t.find(".swiper-cube-shadow")).length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  t.append(m)));
            for (let f = 0; f < a.length; f += 1) {
              let g = a.eq(f),
                $ = f;
              u && ($ = parseInt(g.attr("data-swiper-slide-index"), 10));
              let v = 90 * $,
                w = Math.floor(v / 360);
              l && (w = Math.floor(-(v = -v) / 360));
              let _ = Math.max(Math.min(g[0].progress, 1), -1),
                b = 0,
                x = 0,
                y = 0;
              $ % 4 == 0
                ? ((b = -(4 * w) * n), (y = 0))
                : ($ - 1) % 4 == 0
                ? ((b = 0), (y = -(4 * w) * n))
                : ($ - 2) % 4 == 0
                ? ((b = n + 4 * w * n), (y = n))
                : ($ - 3) % 4 == 0 && ((b = -n), (y = 3 * n + 4 * n * w)),
                l && (b = -b),
                c || ((x = b), (b = 0));
              let E = `rotateX(${c ? 0 : -v}deg) rotateY(${
                c ? v : 0
              }deg) translate3d(${b}px, ${x}px, ${y}px)`;
              if (
                (_ <= 1 &&
                  _ > -1 &&
                  ((h = 90 * $ + 90 * _), l && (h = -(90 * $) - 90 * _)),
                g.transform(E),
                p.slideShadows)
              ) {
                let T = c
                    ? g.find(".swiper-slide-shadow-left")
                    : g.find(".swiper-slide-shadow-top"),
                  C = c
                    ? g.find(".swiper-slide-shadow-right")
                    : g.find(".swiper-slide-shadow-bottom");
                0 === T.length &&
                  ((T = d(
                    `<div class="swiper-slide-shadow-${
                      c ? "left" : "top"
                    }"></div>`
                  )),
                  g.append(T)),
                  0 === C.length &&
                    ((C = d(
                      `<div class="swiper-slide-shadow-${
                        c ? "right" : "bottom"
                      }"></div>`
                    )),
                    g.append(C)),
                  T.length && (T[0].style.opacity = Math.max(-_, 0)),
                  C.length && (C[0].style.opacity = Math.max(_, 0));
              }
            }
            if (
              (s.css({
                "-webkit-transform-origin": `50% 50% -${n / 2}px`,
                "transform-origin": `50% 50% -${n / 2}px`,
              }),
              p.shadow)
            ) {
              if (c)
                m.transform(
                  `translate3d(0px, ${i / 2 + p.shadowOffset}px, ${
                    -i / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
                );
              else {
                let S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  P = p.shadowScale,
                  k =
                    p.shadowScale /
                    (1.5 -
                      (Math.sin((2 * S * Math.PI) / 360) / 2 +
                        Math.cos((2 * S * Math.PI) / 360) / 2)),
                  M = p.shadowOffset;
                m.transform(
                  `scale3d(${P}, 1, ${k}) translate3d(0px, ${r / 2 + M}px, ${
                    -r / 2 / k
                  }px) rotateX(-90deg)`
                );
              }
            }
            let z = o.isSafari || o.isWebView ? -n / 2 : 0;
            s.transform(
              `translate3d(0px,0,${z}px) rotateX(${
                e.isHorizontal() ? 0 : h
              }deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`
            );
          },
          setTransition(t) {
            let { $el: s, slides: a } = e;
            a
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              e.params.cubeEffect.shadow &&
                !e.isHorizontal() &&
                s.find(".swiper-cube-shadow").transition(t);
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      }),
        R({
          effect: "flip",
          swiper: e,
          on: s,
          setTranslate() {
            let { slides: t, rtlTranslate: s } = e,
              a = e.params.flipEffect;
            for (let i = 0; i < t.length; i += 1) {
              let r = t.eq(i),
                l = r[0].progress;
              e.params.flipEffect.limitRotation &&
                (l = Math.max(Math.min(r[0].progress, 1), -1));
              let n = r[0].swiperSlideOffset,
                o = -180 * l,
                d = 0,
                p = e.params.cssMode ? -n - e.translate : -n,
                c = 0;
              if (
                (e.isHorizontal()
                  ? s && (o = -o)
                  : ((c = p), (p = 0), (d = -o), (o = 0)),
                (r[0].style.zIndex = -Math.abs(Math.round(l)) + t.length),
                a.slideShadows)
              ) {
                let u = e.isHorizontal()
                    ? r.find(".swiper-slide-shadow-left")
                    : r.find(".swiper-slide-shadow-top"),
                  m = e.isHorizontal()
                    ? r.find(".swiper-slide-shadow-right")
                    : r.find(".swiper-slide-shadow-bottom");
                0 === u.length &&
                  (u = F(a, r, e.isHorizontal() ? "left" : "top")),
                  0 === m.length &&
                    (m = F(a, r, e.isHorizontal() ? "right" : "bottom")),
                  u.length && (u[0].style.opacity = Math.max(-l, 0)),
                  m.length && (m[0].style.opacity = Math.max(l, 0));
              }
              let h = `translate3d(${p}px, ${c}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
              V(a, r).transform(h);
            }
          },
          setTransition(t) {
            let { transformEl: s } = e.params.flipEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              q({ swiper: e, duration: t, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        R({
          effect: "coverflow",
          swiper: e,
          on: s,
          setTranslate() {
            let { width: t, height: s, slides: a, slidesSizesGrid: i } = e,
              r = e.params.coverflowEffect,
              l = e.isHorizontal(),
              n = e.translate,
              o = l ? t / 2 - n : s / 2 - n,
              d = l ? r.rotate : -r.rotate,
              p = r.depth;
            for (let c = 0, u = a.length; c < u; c += 1) {
              let m = a.eq(c),
                h = i[c],
                f = ((o - m[0].swiperSlideOffset - h / 2) / h) * r.modifier,
                g = l ? d * f : 0,
                $ = l ? 0 : d * f,
                v = -p * Math.abs(f),
                w = r.stretch;
              "string" == typeof w &&
                -1 !== w.indexOf("%") &&
                (w = (parseFloat(r.stretch) / 100) * h);
              let _ = l ? 0 : w * f,
                b = l ? w * f : 0,
                x = 1 - (1 - r.scale) * Math.abs(f);
              0.001 > Math.abs(b) && (b = 0),
                0.001 > Math.abs(_) && (_ = 0),
                0.001 > Math.abs(v) && (v = 0),
                0.001 > Math.abs(g) && (g = 0),
                0.001 > Math.abs($) && ($ = 0),
                0.001 > Math.abs(x) && (x = 0);
              let y = `translate3d(${b}px,${_}px,${v}px)  rotateX(${$}deg) rotateY(${g}deg) scale(${x})`;
              if (
                (V(r, m).transform(y),
                (m[0].style.zIndex = 1 - Math.abs(Math.round(f))),
                r.slideShadows)
              ) {
                let E = l
                    ? m.find(".swiper-slide-shadow-left")
                    : m.find(".swiper-slide-shadow-top"),
                  T = l
                    ? m.find(".swiper-slide-shadow-right")
                    : m.find(".swiper-slide-shadow-bottom");
                0 === E.length && (E = F(r, m, l ? "left" : "top")),
                  0 === T.length && (T = F(r, m, l ? "right" : "bottom")),
                  E.length && (E[0].style.opacity = f > 0 ? f : 0),
                  T.length && (T[0].style.opacity = -f > 0 ? -f : 0);
              }
            }
          },
          setTransition(t) {
            let { transformEl: s } = e.params.coverflowEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      let a = (e) => ("string" == typeof e ? e : `${e}px`);
      R({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate() {
          let { slides: t, $wrapperEl: s, slidesSizesGrid: i } = e,
            r = e.params.creativeEffect,
            { progressMultiplier: l } = r,
            n = e.params.centeredSlides;
          if (n) {
            let o = i[0] / 2 - e.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${o}px))`);
          }
          for (let d = 0; d < t.length; d += 1) {
            let p = t.eq(d),
              c = p[0].progress,
              u = Math.min(
                Math.max(p[0].progress, -r.limitProgress),
                r.limitProgress
              ),
              m = u;
            n ||
              (m = Math.min(
                Math.max(p[0].originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            let h = p[0].swiperSlideOffset,
              f = [e.params.cssMode ? -h - e.translate : -h, 0, 0],
              g = [0, 0, 0],
              $ = !1;
            e.isHorizontal() || ((f[1] = f[0]), (f[0] = 0));
            let v = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            u < 0
              ? ((v = r.next), ($ = !0))
              : u > 0 && ((v = r.prev), ($ = !0)),
              f.forEach((e, t) => {
                f[t] = `calc(${e}px + (${a(v.translate[t])} * ${Math.abs(
                  u * l
                )}))`;
              }),
              g.forEach((e, t) => {
                g[t] = v.rotate[t] * Math.abs(u * l);
              }),
              (p[0].style.zIndex = -Math.abs(Math.round(c)) + t.length);
            let w = f.join(", "),
              _ = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
              b =
                m < 0
                  ? `scale(${1 + (1 - v.scale) * m * l})`
                  : `scale(${1 - (1 - v.scale) * m * l})`,
              x =
                m < 0
                  ? 1 + (1 - v.opacity) * m * l
                  : 1 - (1 - v.opacity) * m * l,
              y = `translate3d(${w}) ${_} ${b}`;
            if (($ && v.shadow) || !$) {
              let E = p.children(".swiper-slide-shadow");
              if ((0 === E.length && v.shadow && (E = F(r, p)), E.length)) {
                let T = r.shadowPerProgress ? u * (1 / r.limitProgress) : u;
                E[0].style.opacity = Math.min(Math.max(Math.abs(T), 0), 1);
              }
            }
            let C = V(r, p);
            C.transform(y).css({ opacity: x }),
              v.origin && C.css("transform-origin", v.origin);
          }
        },
        setTransition(t) {
          let { transformEl: s } = e.params.creativeEffect;
          (s ? e.slides.find(s) : e.slides)
            .transition(t)
            .find(".swiper-slide-shadow")
            .transition(t),
            q({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
        },
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function ({ swiper: e, extendParams: t, on: s }) {
      t({ cardsEffect: { slideShadows: !0, transformEl: null } }),
        R({
          effect: "cards",
          swiper: e,
          on: s,
          setTranslate() {
            let { slides: t, activeIndex: s } = e,
              a = e.params.cardsEffect,
              { startTranslate: i, isTouched: r } = e.touchEventsData,
              l = e.translate;
            for (let n = 0; n < t.length; n += 1) {
              let o = t.eq(n),
                d = o[0].progress,
                p = Math.min(Math.max(d, -4), 4),
                c = o[0].swiperSlideOffset;
              e.params.centeredSlides &&
                !e.params.cssMode &&
                e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides &&
                  e.params.cssMode &&
                  (c -= t[0].swiperSlideOffset);
              let u = e.params.cssMode ? -c - e.translate : -c,
                m = 0,
                h = -100 * Math.abs(p),
                f = 1,
                g = -2 * p,
                $ = 8 - 0.75 * Math.abs(p),
                v =
                  (n === s || n === s - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (r || e.params.cssMode) &&
                  l < i,
                w =
                  (n === s || n === s + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (r || e.params.cssMode) &&
                  l > i;
              if (v || w) {
                let _ = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * p * _),
                  (f += -0.5 * _),
                  ($ += 96 * _),
                  (m = -25 * _ * Math.abs(p) + "%");
              }
              if (
                ((u =
                  p < 0
                    ? `calc(${u}px + (${$ * Math.abs(p)}%))`
                    : p > 0
                    ? `calc(${u}px + (-${$ * Math.abs(p)}%))`
                    : `${u}px`),
                !e.isHorizontal())
              ) {
                let b = m;
                (m = u), (u = b);
              }
              let x = `
        translate3d(${u}, ${m}, ${h}px)
        rotateZ(${g}deg)
        scale(${p < 0 ? "" + (1 + (1 - f) * p) : "" + (1 - (1 - f) * p)})
      `;
              if (a.slideShadows) {
                let y = o.find(".swiper-slide-shadow");
                0 === y.length && (y = F(a, o)),
                  y.length &&
                    (y[0].style.opacity = Math.min(
                      Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              (o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length),
                V(a, o).transform(x);
            }
          },
          setTransition(t) {
            let { transformEl: s } = e.params.cardsEffect;
            (s ? e.slides.find(s) : e.slides)
              .transition(t)
              .find(".swiper-slide-shadow")
              .transition(t),
              q({ swiper: e, duration: t, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
  ];
  return A.use(j), A;
});
