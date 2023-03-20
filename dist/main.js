(() => {
  "use strict";
  var y = {
      689: (i, o, r) => {
        r.a(
          i,
          async (a, b) => {
            try {
              var c = r(246);
              async function t() {
                const n = await (await fetch("./json/pets.json")).json();
                new c.Z({
                  className: "our-friends",
                  neighbor: ".about",
                  files: n,
                });
              }
              await t(), b();
            } catch (t) {
              b(t);
            }
          },
          1
        );
      },
      246: (i, o, r) => {
        r.d(o, { Z: () => x });
        class a {
          constructor({ tag: e, className: s, parent: d }) {
            (this.element = document.createElement(e)),
              (this.element.className = s),
              d && d.append(this.element);
          }
          static getFirstClassName(e) {
            return e.split(" ")[0];
          }
          static getRandomNumber(e, s) {
            return Math.floor(e + Math.random() * (s + 1 - e));
          }
        }
        class b extends a {
          constructor(e) {
            super({ tag: "section", ...e }),
              (this.neighbor = document.querySelector(e.neighbor)),
              this.neighbor.after(this.element);
          }
        }
        class c extends a {
          constructor(e) {
            super(e), (this.element.innerHTML = e.text);
          }
        }
        const t =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDE0IDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNCAyVjRIM1Y2TDAgM0wzIDBWMkgxNFoiIGZpbGw9IiMyOTI5MjkiLz4KPC9zdmc+Cg==";
        class m extends a {
          constructor(e) {
            super({ tag: "img", ...e }),
              (this.element.src = e.src),
              e.alt
                ? (this.element.alt = e.alt)
                : (this.element.alt = m.getBaseName(e.src));
          }
          static getBaseName(e) {
            return e.split("/").slice(-1)[0].split(".")[0];
          }
        }
        class n extends a {
          constructor({ className: e, parent: s, text: d, src: f, alt: p }) {
            super({ tag: "button", className: e, parent: s }),
              d && (this.element.textContent = d),
              f &&
                (this.image = new m({
                  className: `${a.getFirstClassName(e)}-img`,
                  parent: this.element,
                  src: f,
                  alt: p,
                }));
          }
        }
        class h extends a {
          constructor(e) {
            super(e),
              (this.src = e.settings.img),
              (this.image = new m({
                className: "our-friends-card-img",
                parent: this.element,
                src: e.settings.img,
              })),
              (this.name = new c({
                tag: "p",
                className: "our-friends-card-text",
                parent: this.element,
                text: `${e.settings.name}`,
              })),
              (this.button = new n({
                className: "our-friends-card-button",
                parent: this.element,
                text: "Learn more",
              }));
          }
        }
        class l extends a {
          static activeCards = [];
          static previouseGeneratedCards = [];
          constructor(e) {
            super(e),
              (this.files = e.files),
              (this.previouseCards = []),
              (this.cardsInSlide = []),
              (this.cards = this.generateCards(l.previouseGeneratedCards));
          }
          generateCards(e) {
            const s = [],
              f = [];
            for (let p = 0; p < 3; p += 1) {
              const C = this.getRandomCard(e);
              s.push(C[0]), f.push(C[1]);
            }
            return (
              e === l.previouseGeneratedCards
                ? (l.previouseGeneratedCards = f)
                : (l.activeCards = f),
              s
            );
          }
          getRandomCard(e) {
            const s = a.getRandomNumber(0, this.files.length - 1),
              d = this.files[s];
            return e.includes(d.name) || this.previouseCards.includes(d.name)
              ? this.getRandomCard(e)
              : (this.previouseCards.push(d.name),
                [
                  new h({
                    tag: "div",
                    className: "our-friends-card",
                    parent: this.element,
                    settings: d,
                  }),
                  d.name,
                ]);
          }
        }
        class v extends a {}
        class _ extends v {
          constructor(e) {
            super(e), (this.files = e.files), this.getSlides();
          }
          getSlides() {
            this.slides = [];
            for (let e = 0; e < 3; e += 1)
              this.slides.push(
                new l({
                  tag: "div",
                  className: "our-friends-slide",
                  parent: this.element,
                  files: this.files,
                })
              );
          }
        }
        class x extends b {
          constructor(e) {
            super(e),
              (this.files = e.files),
              (this.container = new a({
                tag: "div",
                className: "container",
                parent: this.element,
              })),
              (this.ourFriendsWrapper = new a({
                tag: "div",
                className: "our-friends-wrapper",
                parent: this.container.element,
              })),
              (this.title = new c({
                tag: "h2",
                className: "our-friends-title h2",
                parent: this.ourFriendsWrapper.element,
                text: "Our friends who <br> are looking for a house",
              })),
              (this.sliderWrapper = new a({
                tag: "div",
                className: "our-friends-slider",
                parent: this.ourFriendsWrapper.element,
              })),
              (this.left = new n({
                className: "our-friends-slider-button left",
                parent: this.sliderWrapper.element,
                src: t,
                alt: "left",
              })),
              (this.viewport = new _({
                tag: "div",
                className: "our-friends-viewport",
                parent: this.sliderWrapper.element,
                files: this.files,
              })),
              (this.right = new n({
                className: "our-friends-slider-button right",
                parent: this.sliderWrapper.element,
                src: t,
                alt: "right",
              })),
              (this.button = new a({
                tag: "div",
                className: "our-friends-button",
                parent: this.ourFriendsWrapper.element,
              })),
              (this.buttonText = new c({
                tag: "p",
                className: "our-friends-button-text",
                parent: this.button.element,
                text: "Get to know the rest",
              }));
          }
        }
      },
    },
    N = {};
  function g(i) {
    var o = N[i];
    if (o !== void 0) return o.exports;
    var r = (N[i] = { exports: {} });
    return y[i](r, r.exports, g), r.exports;
  }
  (() => {
    var i =
        typeof Symbol == "function"
          ? Symbol("webpack queues")
          : "__webpack_queues__",
      o =
        typeof Symbol == "function"
          ? Symbol("webpack exports")
          : "__webpack_exports__",
      r =
        typeof Symbol == "function"
          ? Symbol("webpack error")
          : "__webpack_error__",
      a = (c) => {
        c &&
          !c.d &&
          ((c.d = 1),
          c.forEach((t) => t.r--),
          c.forEach((t) => (t.r-- ? t.r++ : t())));
      },
      b = (c) =>
        c.map((t) => {
          if (t !== null && typeof t == "object") {
            if (t[i]) return t;
            if (t.then) {
              var m = [];
              (m.d = 0),
                t.then(
                  (l) => {
                    (n[o] = l), a(m);
                  },
                  (l) => {
                    (n[r] = l), a(m);
                  }
                );
              var n = {};
              return (n[i] = (l) => l(m)), n;
            }
          }
          var h = {};
          return (h[i] = (l) => {}), (h[o] = t), h;
        });
    g.a = (c, t, m) => {
      var n;
      m && ((n = []).d = 1);
      var h = new Set(),
        l = c.exports,
        v,
        _,
        x,
        u = new Promise((e, s) => {
          (x = s), (_ = e);
        });
      (u[o] = l),
        (u[i] = (e) => (n && e(n), h.forEach(e), u.catch((s) => {}))),
        (c.exports = u),
        t(
          (e) => {
            v = b(e);
            var s,
              d = () =>
                v.map((p) => {
                  if (p[r]) throw p[r];
                  return p[o];
                }),
              f = new Promise((p) => {
                (s = () => p(d)), (s.r = 0);
                var C = (w) =>
                  w !== n &&
                  !h.has(w) &&
                  (h.add(w), w && !w.d && (s.r++, w.push(s)));
                v.map((w) => w[i](C));
              });
            return s.r ? f : d();
          },
          (e) => (e ? x((u[r] = e)) : _(l), a(n))
        ),
        n && (n.d = 0);
    };
  })(),
    (g.d = (i, o) => {
      for (var r in o)
        g.o(o, r) &&
          !g.o(i, r) &&
          Object.defineProperty(i, r, { enumerable: !0, get: o[r] });
    }),
    (g.o = (i, o) => Object.prototype.hasOwnProperty.call(i, o));
  var k = g(689);
})();

//# sourceMappingURL=main.js.map
