(function () {
  /*

   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

   Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  (function () {
    function V(b) {
      function a(a, e) {
        Object.defineProperty(a, "innerHTML", {
          enumerable: e.enumerable,
          configurable: !0,
          get: e.get,
          set: function (a) {
            var f = this,
              d = void 0;
            g(this) && (d = [], t(this, function (b) {
              b !== f && d.push(b)
            }));
            e.set.call(this, a);
            if (d)
              for (var c = 0; c < d.length; c++) {
                var k = d[c];
                1 === k.__CE_state && b.disconnectedCallback(k)
              }
            this.ownerDocument.__CE_hasRegistry ? b.c(this) : b.l(this);
            return a
          }
        })
      }

      function d(a, e) {
        m(a, "insertAdjacentElement", function (a, f) {
          var d = g(f);
          a = e.call(this, a, f);
          d && b.a(f);
          g(a) && b.b(f);
          return a
        })
      }
      H ? m(Element.prototype, "attachShadow", function (b) {
        return this.__CE_shadowRoot = b = H.call(this, b)
      }) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");
      if (v && v.get) a(Element.prototype, v);
      else if (w && w.get) a(HTMLElement.prototype, w);
      else {
        var c = z.call(document, "div");
        b.s(function (b) {
          a(b, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return I.call(this, !0).innerHTML
            },
            set: function (b) {
              var a = "template" === this.localName ? this.content : this;
              for (c.innerHTML = b; 0 < a.childNodes.length;) C.call(a,
                a.childNodes[0]);
              for (; 0 < c.childNodes.length;) y.call(a, c.childNodes[0])
            }
          })
        })
      }
      m(Element.prototype, "setAttribute", function (a, e) {
        if (1 !== this.__CE_state) return J.call(this, a, e);
        var f = D.call(this, a);
        J.call(this, a, e);
        e = D.call(this, a);
        f !== e && b.attributeChangedCallback(this, a, f, e, null)
      });
      m(Element.prototype, "setAttributeNS", function (a, e, d) {
        if (1 !== this.__CE_state) return K.call(this, a, e, d);
        var f = x.call(this, a, e);
        K.call(this, a, e, d);
        d = x.call(this, a, e);
        f !== d && b.attributeChangedCallback(this, e, f, d, a)
      });
      m(Element.prototype,
        "removeAttribute",
        function (a) {
          if (1 !== this.__CE_state) return L.call(this, a);
          var d = D.call(this, a);
          L.call(this, a);
          null !== d && b.attributeChangedCallback(this, a, d, null, null)
        });
      m(Element.prototype, "removeAttributeNS", function (a, d) {
        if (1 !== this.__CE_state) return M.call(this, a, d);
        var f = x.call(this, a, d);
        M.call(this, a, d);
        var e = x.call(this, a, d);
        f !== e && b.attributeChangedCallback(this, d, f, e, a)
      });
      N ? d(HTMLElement.prototype, N) : O ? d(Element.prototype, O) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
      P(b, Element.prototype, {
        C: W,
        append: X
      });
      Y(b, {
        I: Z,
        H: aa,
        K: ba,
        remove: ca
      })
    }

    function Y(b, a) {
      var d = Element.prototype;
      d.before = function (d) {
        for (var f = [], e = 0; e < arguments.length; ++e) f[e - 0] = arguments[e];
        e = f.filter(function (b) {
          return b instanceof Node && g(b)
        });
        a.I.apply(this, f);
        for (var c = 0; c < e.length; c++) b.a(e[c]);
        if (g(this))
          for (e = 0; e < f.length; e++) c = f[e], c instanceof Element && b.b(c)
      };
      d.after = function (d) {
        for (var f = [], e = 0; e < arguments.length; ++e) f[e - 0] = arguments[e];
        e = f.filter(function (b) {
          return b instanceof Node &&
            g(b)
        });
        a.H.apply(this, f);
        for (var c = 0; c < e.length; c++) b.a(e[c]);
        if (g(this))
          for (e = 0; e < f.length; e++) c = f[e], c instanceof Element && b.b(c)
      };
      d.replaceWith = function (d) {
        for (var f = [], e = 0; e < arguments.length; ++e) f[e - 0] = arguments[e];
        var e = f.filter(function (b) {
            return b instanceof Node && g(b)
          }),
          c = g(this);
        a.K.apply(this, f);
        for (var u = 0; u < e.length; u++) b.a(e[u]);
        if (c)
          for (b.a(this), e = 0; e < f.length; e++) c = f[e], c instanceof Element && b.b(c)
      };
      d.remove = function () {
        var d = g(this);
        a.remove.call(this);
        d && b.a(this)
      }
    }

    function da(b) {
      function a(a,
        c) {
        Object.defineProperty(a, "textContent", {
          enumerable: c.enumerable,
          configurable: !0,
          get: c.get,
          set: function (a) {
            if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);
            else {
              var d = void 0;
              if (this.firstChild) {
                var f = this.childNodes,
                  u = f.length;
                if (0 < u && g(this))
                  for (var d = Array(u), h = 0; h < u; h++) d[h] = f[h]
              }
              c.set.call(this, a);
              if (d)
                for (a = 0; a < d.length; a++) b.a(d[a])
            }
          }
        })
      }
      m(Node.prototype, "insertBefore", function (a, c) {
        if (a instanceof DocumentFragment) {
          var d = Array.prototype.slice.apply(a.childNodes);
          a = Q.call(this, a, c);
          if (g(this))
            for (c =
              0; c < d.length; c++) b.b(d[c]);
          return a
        }
        d = g(a);
        c = Q.call(this, a, c);
        d && b.a(a);
        g(this) && b.b(a);
        return c
      });
      m(Node.prototype, "appendChild", function (a) {
        if (a instanceof DocumentFragment) {
          var d = Array.prototype.slice.apply(a.childNodes);
          a = y.call(this, a);
          if (g(this))
            for (var f = 0; f < d.length; f++) b.b(d[f]);
          return a
        }
        d = g(a);
        f = y.call(this, a);
        d && b.a(a);
        g(this) && b.b(a);
        return f
      });
      m(Node.prototype, "cloneNode", function (a) {
        a = I.call(this, a);
        this.ownerDocument.__CE_hasRegistry ? b.c(a) : b.l(a);
        return a
      });
      m(Node.prototype, "removeChild",
        function (a) {
          var d = g(a),
            f = C.call(this, a);
          d && b.a(a);
          return f
        });
      m(Node.prototype, "replaceChild", function (a, c) {
        if (a instanceof DocumentFragment) {
          var d = Array.prototype.slice.apply(a.childNodes);
          a = R.call(this, a, c);
          if (g(this))
            for (b.a(c), c = 0; c < d.length; c++) b.b(d[c]);
          return a
        }
        var d = g(a),
          e = R.call(this, a, c),
          k = g(this);
        k && b.a(c);
        d && b.a(a);
        k && b.b(a);
        return e
      });
      E && E.get ? a(Node.prototype, E) : b.s(function (b) {
        a(b, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
            return a.join("")
          },
          set: function (a) {
            for (; this.firstChild;) C.call(this, this.firstChild);
            y.call(this, document.createTextNode(a))
          }
        })
      })
    }

    function ea(b) {
      m(Document.prototype, "createElement", function (a) {
        if (this.__CE_hasRegistry) {
          var d = b.f(a);
          if (d) return new d.constructor
        }
        a = z.call(this, a);
        b.g(a);
        return a
      });
      m(Document.prototype, "importNode", function (a, d) {
        a = fa.call(this, a, d);
        this.__CE_hasRegistry ? b.c(a) : b.l(a);
        return a
      });
      m(Document.prototype, "createElementNS", function (a, d) {
        if (this.__CE_hasRegistry && (null ===
            a || "http://www.w3.org/1999/xhtml" === a)) {
          var c = b.f(d);
          if (c) return new c.constructor
        }
        a = ga.call(this, a, d);
        b.g(a);
        return a
      });
      P(b, Document.prototype, {
        C: ha,
        append: ia
      })
    }

    function P(b, a, d) {
      a.prepend = function (a) {
        for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];
        e = c.filter(function (a) {
          return a instanceof Node && g(a)
        });
        d.C.apply(this, c);
        for (var k = 0; k < e.length; k++) b.a(e[k]);
        if (g(this))
          for (e = 0; e < c.length; e++) k = c[e], k instanceof Element && b.b(k)
      };
      a.append = function (a) {
        for (var c = [], e = 0; e < arguments.length; ++e) c[e -
          0] = arguments[e];
        e = c.filter(function (a) {
          return a instanceof Node && g(a)
        });
        d.append.apply(this, c);
        for (var k = 0; k < e.length; k++) b.a(e[k]);
        if (g(this))
          for (e = 0; e < c.length; e++) k = c[e], k instanceof Element && b.b(k)
      }
    }

    function ja(b) {
      window.HTMLElement = function () {
        function a() {
          var a = this.constructor,
            c = b.L(a);
          if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
          var f = c.constructionStack;
          if (!f.length) return f = z.call(document, c.localName), Object.setPrototypeOf(f, a.prototype),
            f.__CE_state = 1, f.__CE_definition = c, b.g(f), f;
          var c = f.length - 1,
            e = f[c];
          if (e === S) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          f[c] = S;
          Object.setPrototypeOf(e, a.prototype);
          b.g(e);
          return e
        }
        a.prototype = ka.prototype;
        return a
      }()
    }

    function l(b) {
      this.f = !1;
      this.a = b;
      this.i = new Map;
      this.g = function (a) {
        return a()
      };
      this.b = !1;
      this.c = [];
      this.l = new F(b, document)
    }

    function T() {
      var b = this;
      this.b = this.a = void 0;
      this.f = new Promise(function (a) {
        b.b = a;
        b.a &&
          a(b.a)
      })
    }

    function F(b, a) {
      this.c = b;
      this.a = a;
      this.b = void 0;
      this.c.c(this.a);
      "loading" === this.a.readyState && (this.b = new MutationObserver(this.g.bind(this)), this.b.observe(this.a, {
        childList: !0,
        subtree: !0
      }))
    }

    function p() {
      this.o = new Map;
      this.m = new Map;
      this.j = [];
      this.i = !1
    }

    function U(b) {
      var a = la.has(b);
      b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);
      return !a && b
    }

    function g(b) {
      var a = b.isConnected;
      if (void 0 !== a) return a;
      for (; b && !(b.__CE_isImportDocument || b instanceof Document);) b = b.parentNode || (window.ShadowRoot &&
        b instanceof ShadowRoot ? b.host : void 0);
      return !(!b || !(b.__CE_isImportDocument || b instanceof Document))
    }

    function G(b, a) {
      for (; a && a !== b && !a.nextSibling;) a = a.parentNode;
      return a && a !== b ? a.nextSibling : null
    }

    function t(b, a, d) {
      d = d ? d : new Set;
      for (var c = b; c;) {
        if (c.nodeType === Node.ELEMENT_NODE) {
          var f = c;
          a(f);
          var e = f.localName;
          if ("link" === e && "import" === f.getAttribute("rel")) {
            c = f.import;
            if (c instanceof Node && !d.has(c))
              for (d.add(c), c = c.firstChild; c; c = c.nextSibling) t(c, a, d);
            c = G(b, f);
            continue
          } else if ("template" === e) {
            c =
              G(b, f);
            continue
          }
          if (f = f.__CE_shadowRoot)
            for (f = f.firstChild; f; f = f.nextSibling) t(f, a, d)
        }
        c = c.firstChild ? c.firstChild : G(b, c)
      }
    }

    function m(b, a, d) {
      b[a] = d
    }(function (b) {
      function a(a, b) {
        if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
        return c
      }

      function d(a) {
        if (l) return a.ownerDocument !== document ? a.ownerDocument : null;
        var b = a.__importDoc;
        if (!b && a.parentNode) {
          b = a.parentNode;
          if ("function" === typeof b.closest) b =
            b.closest("link[rel=import]");
          else
            for (; !g(b) && (b = b.parentNode););
          a.__importDoc = b
        }
        return b
      }

      function c(a) {
        var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"),
          c = b.length;
        if (c)
          for (var d = 0, e = b.length, n; d < e && (n = b[d]); d++) k(n, function () {
            --c || a()
          });
        else a()
      }

      function f(a) {
        if ("loading" !== document.readyState) a();
        else {
          var b = function () {
            "loading" !== document.readyState && (document.removeEventListener("readystatechange", b), a())
          };
          document.addEventListener("readystatechange", b)
        }
      }

      function e(a) {
        f(function () {
          return c(function () {
            return a &&
              a()
          })
        })
      }

      function k(a, b) {
        if (a.__loaded) b && b();
        else if (g(a) && !l && null === a.import || a.import && "complete" === a.import.readyState) a.__loaded = !0, b && b();
        else if ("script" !== a.localName || a.src) {
          var c = function (d) {
            a.removeEventListener(d.type, c);
            a.__loaded = !0;
            b && b()
          };
          a.addEventListener("load", c);
          v && "style" === a.localName || a.addEventListener("error", c)
        } else a.__loaded = !0, b && b()
      }

      function g(a) {
        return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
      }

      function h() {
        var a = this;
        this.a = {};
        this.b = 0;
        this.c = new MutationObserver(function (b) {
          return a.m(b)
        });
        f(function () {
          a.c.observe(document.head, {
            childList: !0,
            subtree: !0
          });
          a.f(document)
        })
      }
      var l = "import" in document.createElement("link"),
        m = null;
      !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
        get: function () {
          return m || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
        },
        configurable: !0
      });
      var p = /(^\/)|(^#)|(^[\w-\d]*:)/,
        r = /(url\()([^)]*)(\))/g,
        t = /(@import[\s]+(?!url\())([^;]*)(;)/g,
        y = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
        q = {
          J: function (a, b) {
            a.href && a.setAttribute("href", q.w(a.getAttribute("href"), b));
            a.src && a.setAttribute("src", q.w(a.getAttribute("src"), b));
            if ("style" === a.localName) {
              var c = q.D(a.textContent, b, r);
              a.textContent = q.D(c, b, t)
            }
          },
          D: function (a, b, c) {
            return a.replace(c, function (a, c, d, e) {
              a = d.replace(/["']/g, "");
              b && (a = q.F(a, b));
              return c + "'" + a + "'" + e
            })
          },
          w: function (a, b) {
            return a && p.test(a) ? a : q.F(a, b)
          },
          F: function (a, b) {
            if (void 0 === q.v) {
              q.v = !1;
              try {
                var c = new URL("b", "http://a");
                c.pathname = "c%20d";
                q.v = "http://a/c%20d" ===
                  c.href
              } catch (na) {}
            }
            if (q.v) return (new URL(a, b)).href;
            c = q.G;
            c || (c = document.implementation.createHTMLDocument("temp"), q.G = c, c.B = c.createElement("base"), c.head.appendChild(c.B), c.A = c.createElement("a"));
            c.B.href = b;
            c.A.href = a;
            return c.A.href || a
          }
        },
        x = {
          async: !0,
          load: function (a, b, c) {
            if (a)
              if (a.match(/^data:/)) {
                a = a.split(",");
                var d = a[1],
                  d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                b(d)
              } else {
                var e = new XMLHttpRequest;
                e.open("GET", a, x.async);
                e.onload = function () {
                  var a = e.getResponseHeader("Location");
                  a && !a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                  var d = e.response || e.responseText;
                  304 === e.status || !e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                };
                e.send()
              }
            else c("error: href must be specified")
          }
        },
        v = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
      h.prototype.f = function (a) {
        a = a.querySelectorAll("link[rel=import]");
        for (var b = 0, c = a.length; b < c; b++) this.i(a[b])
      };
      h.prototype.i = function (a) {
        var b = this,
          c = a.href;
        if (void 0 !== this.a[c]) {
          var d = this.a[c];
          d && d.__loaded && (a.import = d, this.g(a))
        } else this.b++, this.a[c] = "pending", x.load(c, function (a, d) {
          a = b.o(a, d || c);
          b.a[c] = a;
          b.b--;
          b.f(a);
          b.j()
        }, function () {
          b.a[c] = null;
          b.b--;
          b.j()
        })
      };
      h.prototype.o = function (a, b) {
        if (!a) return document.createDocumentFragment();
        v && (a = a.replace(y, function (a, b, c) {
          return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a
        }));
        var c = document.createElement("template");
        c.innerHTML = a;
        if (c.content) a = c.content;
        else
          for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        if (c = a.querySelector("base")) b = q.w(c.getAttribute("href"), b), c.removeAttribute("href");
        for (var c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), d = 0, e = 0, f = c.length, n; e < f && (n = c[e]); e++) k(n), q.J(n, b), n.setAttribute("import-dependency", ""), "script" === n.localName && !n.src && n.textContent && (n.setAttribute("src",
          "data:text/javascript;charset=utf-8," + encodeURIComponent(n.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), n.textContent = "", d++);
        return a
      };
      h.prototype.j = function () {
        var a = this;
        if (!this.b) {
          this.c.disconnect();
          this.flatten(document);
          var b = !1,
            c = !1,
            d = function () {
              c && b && (a.c.observe(document.head, {
                childList: !0,
                subtree: !0
              }), a.l())
            };
          this.u(function () {
            c = !0;
            d()
          });
          this.s(function () {
            b = !0;
            d()
          })
        }
      };
      h.prototype.flatten = function (a) {
        a = a.querySelectorAll("link[rel=import]");
        for (var b = {}, c = 0, d = a.length; c < d &&
          (b.n = a[c]); b = {
            n: b.n
          }, c++) {
          var e = this.a[b.n.href];
          (b.n.import = e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (this.a[b.n.href] = b.n, b.n.readyState = "loading", b.n.import = b.n, Object.defineProperty(b.n, "baseURI", {
            get: function (a) {
              return function () {
                return a.n.href
              }
            }(b),
            configurable: !0,
            enumerable: !0
          }), this.flatten(e), b.n.appendChild(e))
        }
      };
      h.prototype.s = function (a) {
        function b(e) {
          if (e < d) {
            var f = c[e],
              n = document.createElement("script");
            f.removeAttribute("import-dependency");
            for (var g = 0, h = f.attributes.length; g < h; g++) n.setAttribute(f.attributes[g].name,
              f.attributes[g].value);
            m = n;
            f.parentNode.replaceChild(n, f);
            k(n, function () {
              m = null;
              b(e + 1)
            })
          } else a()
        }
        var c = document.querySelectorAll("script[import-dependency]"),
          d = c.length;
        b(0)
      };
      h.prototype.u = function (a) {
        var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
          c = b.length;
        if (c)
          for (var e = v && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]"), f = {}, g = 0, n = b.length; g < n && (f.h = b[g]); f = {
              h: f.h
            }, g++) {
            if (k(f.h, function (b) {
                return function () {
                  b.h.removeAttribute("import-dependency");
                  --c || a()
                }
              }(f)), e && f.h.parentNode !== document.head) {
              var h = document.createElement(f.h.localName);
              h.__appliedElement = f.h;
              h.setAttribute("type", "import-placeholder");
              f.h.parentNode.insertBefore(h, f.h.nextSibling);
              for (h = d(f.h); h && d(h);) h = d(h);
              h.parentNode !== document.head && (h = null);
              document.head.insertBefore(f.h, h);
              f.h.removeAttribute("type")
            }
          } else a()
      };
      h.prototype.l = function () {
        for (var a = document.querySelectorAll("link[rel=import]"), b = a.length - 1, c; 0 <= b && (c = a[b]); b--) this.g(c)
      };
      h.prototype.g = function (b) {
        b.__loaded ||
          (b.__loaded = !0, b.import && (b.import.readyState = "complete"), b.dispatchEvent(a(b.import ? "load" : "error", {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          })))
      };
      h.prototype.m = function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if (c.addedNodes)
            for (var d = 0; d < c.addedNodes.length; d++) {
              var e = c.addedNodes[d];
              e && e.nodeType === Node.ELEMENT_NODE && (g(e) ? this.i(e) : this.f(e))
            }
        }
      };
      if (l) {
        for (var A = document.querySelectorAll("link[rel=import]"), w = 0, z = A.length, B; w < z && (B = A[w]); w++) B.import && "loading" === B.import.readyState || (B.__loaded = !0);
        A = function (a) {
          a = a.target;
          g(a) && (a.__loaded = !0)
        };
        document.addEventListener("load", A, !0);
        document.addEventListener("error", A, !0)
      } else new h;
      e(function () {
        return document.dispatchEvent(a("HTMLImportsLoaded", {
          cancelable: !0,
          bubbles: !0,
          detail: void 0
        }))
      });
      b.useNative = l;
      b.whenReady = e;
      b.importForElement = d
    })(window.HTMLImports = window.HTMLImports || {});
    var la = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
    p.prototype.M =
      function (b, a) {
        this.o.set(b, a);
        this.m.set(a.constructor, a)
      };
    p.prototype.f = function (b) {
      return this.o.get(b)
    };
    p.prototype.L = function (b) {
      return this.m.get(b)
    };
    p.prototype.s = function (b) {
      this.i = !0;
      this.j.push(b)
    };
    p.prototype.l = function (b) {
      var a = this;
      this.i && t(b, function (b) {
        return a.g(b)
      })
    };
    p.prototype.g = function (b) {
      if (this.i && !b.__CE_patched) {
        b.__CE_patched = !0;
        for (var a = 0; a < this.j.length; a++) this.j[a](b)
      }
    };
    p.prototype.b = function (b) {
      var a = [];
      t(b, function (b) {
        return a.push(b)
      });
      for (b = 0; b < a.length; b++) {
        var d =
          a[b];
        1 === d.__CE_state ? this.connectedCallback(d) : this.u(d)
      }
    };
    p.prototype.a = function (b) {
      var a = [];
      t(b, function (b) {
        return a.push(b)
      });
      for (b = 0; b < a.length; b++) {
        var d = a[b];
        1 === d.__CE_state && this.disconnectedCallback(d)
      }
    };
    p.prototype.c = function (b, a) {
      a = a ? a : new Set;
      var d = this,
        c = [];
      t(b, function (b) {
        if ("link" === b.localName && "import" === b.getAttribute("rel")) {
          var e = b.import;
          e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : b.addEventListener("load", function () {
            var c =
              b.import;
            c.__CE_documentLoadHandled || (c.__CE_documentLoadHandled = !0, c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0, new Set(a), a.delete(c), d.c(c, a))
          })
        } else c.push(b)
      }, a);
      if (this.i)
        for (b = 0; b < c.length; b++) this.g(c[b]);
      for (b = 0; b < c.length; b++) this.u(c[b])
    };
    p.prototype.u = function (b) {
      if (void 0 === b.__CE_state) {
        var a = this.f(b.localName);
        if (a) {
          a.constructionStack.push(b);
          var d = a.constructor;
          try {
            try {
              if (new d !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              a.constructionStack.pop()
            }
          } catch (e) {
            throw b.__CE_state =
              2, e;
          }
          b.__CE_state = 1;
          b.__CE_definition = a;
          if (a.attributeChangedCallback)
            for (a = a.observedAttributes, d = 0; d < a.length; d++) {
              var c = a[d],
                f = b.getAttribute(c);
              null !== f && this.attributeChangedCallback(b, c, null, f, null)
            }
          g(b) && this.connectedCallback(b)
        }
      }
    };
    p.prototype.connectedCallback = function (b) {
      var a = b.__CE_definition;
      a.connectedCallback && a.connectedCallback.call(b)
    };
    p.prototype.disconnectedCallback = function (b) {
      var a = b.__CE_definition;
      a.disconnectedCallback && a.disconnectedCallback.call(b)
    };
    p.prototype.attributeChangedCallback =
      function (b, a, d, c, f) {
        var e = b.__CE_definition;
        e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(a) && e.attributeChangedCallback.call(b, a, d, c, f)
      };
    F.prototype.f = function () {
      this.b && this.b.disconnect()
    };
    F.prototype.g = function (b) {
      var a = this.a.readyState;
      "interactive" !== a && "complete" !== a || this.f();
      for (a = 0; a < b.length; a++)
        for (var d = b[a].addedNodes, c = 0; c < d.length; c++) this.c.c(d[c])
    };
    T.prototype.c = function () {
      if (this.a) throw Error("Already resolved.");
      this.a = void 0;
      this.b && this.b(void 0)
    };
    l.prototype.j =
      function (b, a) {
        var d = this;
        if (!(a instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        if (!U(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
        if (this.a.f(b)) throw Error("A custom element with name '" + b + "' has already been defined.");
        if (this.f) throw Error("A custom element is already being defined.");
        this.f = !0;
        var c, f, e, g, l;
        try {
          var h = function (a) {
              var b = m[a];
              if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
              return b
            },
            m = a.prototype;
          if (!(m instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
          c = h("connectedCallback");
          f = h("disconnectedCallback");
          e = h("adoptedCallback");
          g = h("attributeChangedCallback");
          l = a.observedAttributes || []
        } catch (ma) {
          return
        } finally {
          this.f = !1
        }
        this.a.M(b, {
          localName: b,
          constructor: a,
          connectedCallback: c,
          disconnectedCallback: f,
          adoptedCallback: e,
          attributeChangedCallback: g,
          observedAttributes: l,
          constructionStack: []
        });
        this.c.push(b);
        this.b || (this.b = !0, this.g(function () {
          return d.m()
        }))
      };
    l.prototype.m = function () {
      if (!1 !== this.b)
        for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
          var b = this.c.shift();
          (b = this.i.get(b)) && b.c()
        }
    };
    l.prototype.get = function (b) {
      if (b = this.a.f(b)) return b.constructor
    };
    l.prototype.s = function (b) {
      if (!U(b)) return Promise.reject(new SyntaxError("'" + b + "' is not a valid custom element name."));
      var a = this.i.get(b);
      if (a) return a.f;
      a = new T;
      this.i.set(b, a);
      this.a.f(b) && -1 === this.c.indexOf(b) && a.c();
      return a.f
    };
    l.prototype.o = function (b) {
      this.l.f();
      var a = this.g;
      this.g = function (d) {
        return b(function () {
          return a(d)
        })
      }
    };
    window.CustomElementRegistry = l;
    l.prototype.define = l.prototype.j;
    l.prototype.get = l.prototype.get;
    l.prototype.whenDefined = l.prototype.s;
    l.prototype.polyfillWrapFlushCallback = l.prototype.o;
    var z = window.Document.prototype.createElement,
      ga = window.Document.prototype.createElementNS,
      fa = window.Document.prototype.importNode,
      ha = window.Document.prototype.prepend,
      ia = window.Document.prototype.append,
      I = window.Node.prototype.cloneNode,
      y = window.Node.prototype.appendChild,
      Q = window.Node.prototype.insertBefore,
      C = window.Node.prototype.removeChild,
      R = window.Node.prototype.replaceChild,
      E = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      H = window.Element.prototype.attachShadow,
      v = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      D = window.Element.prototype.getAttribute,
      J = window.Element.prototype.setAttribute,
      L = window.Element.prototype.removeAttribute,
      x = window.Element.prototype.getAttributeNS,
      K = window.Element.prototype.setAttributeNS,
      M =
      window.Element.prototype.removeAttributeNS,
      O = window.Element.prototype.insertAdjacentElement,
      W = window.Element.prototype.prepend,
      X = window.Element.prototype.append,
      Z = window.Element.prototype.before,
      aa = window.Element.prototype.after,
      ba = window.Element.prototype.replaceWith,
      ca = window.Element.prototype.remove,
      ka = window.HTMLElement,
      w = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      N = window.HTMLElement.prototype.insertAdjacentElement,
      S = new function () {},
      r = window.customElements;
    if (!r ||
      r.forcePolyfill || "function" != typeof r.define || "function" != typeof r.get) r = new p, ja(r), ea(r), da(r), V(r), document.__CE_hasRegistry = !0, r = new l(r), Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: r
    });
    (function () {
      var b = window.customElements,
        a = window.HTMLImports;
      if (b && b.polyfillWrapFlushCallback) {
        var d, c = function () {
            if (d) {
              var a = d;
              d = null;
              a();
              return !0
            }
          },
          f = a.whenReady;
        b.polyfillWrapFlushCallback(function (a) {
          d = a;
          f(c)
        });
        a.whenReady = function (b) {
          f(function () {
            c() ? a.whenReady(b) :
              b()
          })
        }
      }
      a.whenReady(function () {
        requestAnimationFrame(function () {
          window.dispatchEvent(new CustomEvent("WebComponentsReady"))
        })
      })
    })();
    (function () {
      var b = document.createElement("style");
      b.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
      var a = document.querySelector("head");
      a.insertBefore(b, a.firstChild)
    })()
  })();
}).call(self)

//# sourceMappingURL=webcomponents-hi-ce.js.map