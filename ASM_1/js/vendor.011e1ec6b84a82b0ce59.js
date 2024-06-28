!(function (t) {
  var e = {};
  function i(o) {
    if (e[o]) return e[o].exports;
    var n = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, o) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (i.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            o,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return o;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 1));
})([
  function (t, e, i) {
    var o;
    !(function (e, i) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? i(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return i(t);
              })
        : i(e);
    })("undefined" != typeof window ? window : this, function (i, n) {
      "use strict";
      var s = [],
        r = i.document,
        a = Object.getPrototypeOf,
        l = s.slice,
        c = s.concat,
        h = s.push,
        d = s.indexOf,
        u = {},
        p = u.toString,
        f = u.hasOwnProperty,
        g = f.toString,
        m = g.call(Object),
        v = {},
        y = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        w = function (t) {
          return null != t && t === t.window;
        },
        b = { type: !0, src: !0, noModule: !0 };
      function _(t, e, i) {
        var o,
          n = (e = e || r).createElement("script");
        if (((n.text = t), i)) for (o in b) i[o] && (n[o] = i[o]);
        e.head.appendChild(n).parentNode.removeChild(n);
      }
      function T(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? u[p.call(t)] || "object"
          : typeof t;
      }
      var x = function (t, e) {
          return new x.fn.init(t, e);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function S(t) {
        var e = !!t && "length" in t && t.length,
          i = T(t);
        return (
          !y(t) &&
          !w(t) &&
          ("array" === i ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (x.fn = x.prototype =
        {
          jquery: "3.3.1",
          constructor: x,
          length: 0,
          toArray: function () {
            return l.call(this);
          },
          get: function (t) {
            return null == t
              ? l.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var e = x.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return x.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              x.map(this, function (e, i) {
                return t.call(e, i, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (t) {
            var e = this.length,
              i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: h,
          sort: s.sort,
          splice: s.splice,
        }),
        (x.extend = x.fn.extend =
          function () {
            var t,
              e,
              i,
              o,
              n,
              s,
              r = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
                "object" == typeof r || y(r) || (r = {}),
                a === l && ((r = this), a--);
              a < l;
              a++
            )
              if (null != (t = arguments[a]))
                for (e in t)
                  (i = r[e]),
                    r !== (o = t[e]) &&
                      (c && o && (x.isPlainObject(o) || (n = Array.isArray(o)))
                        ? (n
                            ? ((n = !1), (s = i && Array.isArray(i) ? i : []))
                            : (s = i && x.isPlainObject(i) ? i : {}),
                          (r[e] = x.extend(c, s, o)))
                        : void 0 !== o && (r[e] = o));
            return r;
          }),
        x.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, i;
            return (
              !(!t || "[object Object]" !== p.call(t)) &&
              (!(e = a(t)) ||
                ("function" ==
                  typeof (i = f.call(e, "constructor") && e.constructor) &&
                  g.call(i) === m))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t) {
            _(t);
          },
          each: function (t, e) {
            var i,
              o = 0;
            if (S(t))
              for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++);
            else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
            return t;
          },
          trim: function (t) {
            return null == t ? "" : (t + "").replace(C, "");
          },
          makeArray: function (t, e) {
            var i = e || [];
            return (
              null != t &&
                (S(Object(t))
                  ? x.merge(i, "string" == typeof t ? [t] : t)
                  : h.call(i, t)),
              i
            );
          },
          inArray: function (t, e, i) {
            return null == e ? -1 : d.call(e, t, i);
          },
          merge: function (t, e) {
            for (var i = +e.length, o = 0, n = t.length; o < i; o++)
              t[n++] = e[o];
            return (t.length = n), t;
          },
          grep: function (t, e, i) {
            for (var o = [], n = 0, s = t.length, r = !i; n < s; n++)
              !e(t[n], n) !== r && o.push(t[n]);
            return o;
          },
          map: function (t, e, i) {
            var o,
              n,
              s = 0,
              r = [];
            if (S(t))
              for (o = t.length; s < o; s++)
                null != (n = e(t[s], s, i)) && r.push(n);
            else for (s in t) null != (n = e(t[s], s, i)) && r.push(n);
            return c.apply([], r);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (x.fn[Symbol.iterator] = s[Symbol.iterator]),
        x.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            u["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var E = (function (t) {
        var e,
          i,
          o,
          n,
          s,
          r,
          a,
          l,
          c,
          h,
          d,
          u,
          p,
          f,
          g,
          m,
          v,
          y,
          w,
          b = "sizzle" + 1 * new Date(),
          _ = t.document,
          T = 0,
          x = 0,
          C = rt(),
          S = rt(),
          E = rt(),
          z = function (t, e) {
            return t === e && (d = !0), 0;
          },
          k = {}.hasOwnProperty,
          $ = [],
          A = $.pop,
          O = $.push,
          I = $.push,
          D = $.slice,
          L = function (t, e) {
            for (var i = 0, o = t.length; i < o; i++) if (t[i] === e) return i;
            return -1;
          },
          W =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          N =
            "\\[" +
            H +
            "*(" +
            P +
            ")(?:" +
            H +
            "*([*^$|!~]?=)" +
            H +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            P +
            "))|)" +
            H +
            "*\\]",
          j =
            ":(" +
            P +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            N +
            ")*)|.*)\\)|)",
          M = new RegExp(H + "+", "g"),
          R = new RegExp(
            "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
            "g"
          ),
          q = new RegExp("^" + H + "*," + H + "*"),
          F = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          B = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
          U = new RegExp(j),
          Y = new RegExp("^" + P + "$"),
          V = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + j),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                H +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                H +
                "*(?:([+-]|)" +
                H +
                "*(\\d+)|))" +
                H +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + W + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                H +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                H +
                "*((?:-\\d)?\\d*)" +
                H +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          X = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          Z = /^[^{]+\{\s*\[native \w/,
          Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
          tt = function (t, e, i) {
            var o = "0x" + e - 65536;
            return o != o || i
              ? e
              : o < 0
              ? String.fromCharCode(o + 65536)
              : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
          },
          et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          it = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          ot = function () {
            u();
          },
          nt = yt(
            function (t) {
              return !0 === t.disabled && ("form" in t || "label" in t);
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          I.apply(($ = D.call(_.childNodes)), _.childNodes),
            $[_.childNodes.length].nodeType;
        } catch (t) {
          I = {
            apply: $.length
              ? function (t, e) {
                  O.apply(t, D.call(e));
                }
              : function (t, e) {
                  for (var i = t.length, o = 0; (t[i++] = e[o++]); );
                  t.length = i - 1;
                },
          };
        }
        function st(t, e, o, n) {
          var s,
            a,
            c,
            h,
            d,
            f,
            v,
            y = e && e.ownerDocument,
            T = e ? e.nodeType : 9;
          if (
            ((o = o || []),
            "string" != typeof t || !t || (1 !== T && 9 !== T && 11 !== T))
          )
            return o;
          if (
            !n &&
            ((e ? e.ownerDocument || e : _) !== p && u(e), (e = e || p), g)
          ) {
            if (11 !== T && (d = Q.exec(t)))
              if ((s = d[1])) {
                if (9 === T) {
                  if (!(c = e.getElementById(s))) return o;
                  if (c.id === s) return o.push(c), o;
                } else if (
                  y &&
                  (c = y.getElementById(s)) &&
                  w(e, c) &&
                  c.id === s
                )
                  return o.push(c), o;
              } else {
                if (d[2]) return I.apply(o, e.getElementsByTagName(t)), o;
                if (
                  (s = d[3]) &&
                  i.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return I.apply(o, e.getElementsByClassName(s)), o;
              }
            if (i.qsa && !E[t + " "] && (!m || !m.test(t))) {
              if (1 !== T) (y = e), (v = t);
              else if ("object" !== e.nodeName.toLowerCase()) {
                for (
                  (h = e.getAttribute("id"))
                    ? (h = h.replace(et, it))
                    : e.setAttribute("id", (h = b)),
                    a = (f = r(t)).length;
                  a--;

                )
                  f[a] = "#" + h + " " + vt(f[a]);
                (v = f.join(",")), (y = (K.test(t) && gt(e.parentNode)) || e);
              }
              if (v)
                try {
                  return I.apply(o, y.querySelectorAll(v)), o;
                } catch (t) {
                } finally {
                  h === b && e.removeAttribute("id");
                }
            }
          }
          return l(t.replace(R, "$1"), e, o, n);
        }
        function rt() {
          var t = [];
          return function e(i, n) {
            return (
              t.push(i + " ") > o.cacheLength && delete e[t.shift()],
              (e[i + " "] = n)
            );
          };
        }
        function at(t) {
          return (t[b] = !0), t;
        }
        function lt(t) {
          var e = p.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function ct(t, e) {
          for (var i = t.split("|"), n = i.length; n--; )
            o.attrHandle[i[n]] = e;
        }
        function ht(t, e) {
          var i = e && t,
            o =
              i &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (o) return o;
          if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
          return t ? 1 : -1;
        }
        function dt(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function ut(t) {
          return function (e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t;
          };
        }
        function pt(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && nt(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function ft(t) {
          return at(function (e) {
            return (
              (e = +e),
              at(function (i, o) {
                for (var n, s = t([], i.length, e), r = s.length; r--; )
                  i[(n = s[r])] && (i[n] = !(o[n] = i[n]));
              })
            );
          });
        }
        function gt(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((i = st.support = {}),
        (s = st.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (u = st.setDocument =
          function (t) {
            var e,
              n,
              r = t ? t.ownerDocument || t : _;
            return r !== p && 9 === r.nodeType && r.documentElement
              ? ((f = (p = r).documentElement),
                (g = !s(p)),
                _ !== p &&
                  (n = p.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", ot, !1)
                    : n.attachEvent && n.attachEvent("onunload", ot)),
                (i.attributes = lt(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (i.getElementsByTagName = lt(function (t) {
                  return (
                    t.appendChild(p.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (i.getElementsByClassName = Z.test(p.getElementsByClassName)),
                (i.getById = lt(function (t) {
                  return (
                    (f.appendChild(t).id = b),
                    !p.getElementsByName || !p.getElementsByName(b).length
                  );
                })),
                i.getById
                  ? ((o.filter.ID = function (t) {
                      var e = t.replace(J, tt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (o.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var i = e.getElementById(t);
                        return i ? [i] : [];
                      }
                    }))
                  : ((o.filter.ID = function (t) {
                      var e = t.replace(J, tt);
                      return function (t) {
                        var i =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return i && i.value === e;
                      };
                    }),
                    (o.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var i,
                          o,
                          n,
                          s = e.getElementById(t);
                        if (s) {
                          if ((i = s.getAttributeNode("id")) && i.value === t)
                            return [s];
                          for (
                            n = e.getElementsByName(t), o = 0;
                            (s = n[o++]);

                          )
                            if ((i = s.getAttributeNode("id")) && i.value === t)
                              return [s];
                        }
                        return [];
                      }
                    })),
                (o.find.TAG = i.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : i.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var i,
                        o = [],
                        n = 0,
                        s = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (i = s[n++]); ) 1 === i.nodeType && o.push(i);
                        return o;
                      }
                      return s;
                    }),
                (o.find.CLASS =
                  i.getElementsByClassName &&
                  function (t, e) {
                    if (void 0 !== e.getElementsByClassName && g)
                      return e.getElementsByClassName(t);
                  }),
                (v = []),
                (m = []),
                (i.qsa = Z.test(p.querySelectorAll)) &&
                  (lt(function (t) {
                    (f.appendChild(t).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + H + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        m.push("\\[" + H + "*(?:value|" + W + ")"),
                      t.querySelectorAll("[id~=" + b + "-]").length ||
                        m.push("~="),
                      t.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      t.querySelectorAll("a#" + b + "+*").length ||
                        m.push(".#.+[+~]");
                  }),
                  lt(function (t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        m.push("name" + H + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (f.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (i.matchesSelector = Z.test(
                  (y =
                    f.matches ||
                    f.webkitMatchesSelector ||
                    f.mozMatchesSelector ||
                    f.oMatchesSelector ||
                    f.msMatchesSelector)
                )) &&
                  lt(function (t) {
                    (i.disconnectedMatch = y.call(t, "*")),
                      y.call(t, "[s!='']:x"),
                      v.push("!=", j);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (e = Z.test(f.compareDocumentPosition)),
                (w =
                  e || Z.test(f.contains)
                    ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                          o = e && e.parentNode;
                        return (
                          t === o ||
                          !(
                            !o ||
                            1 !== o.nodeType ||
                            !(i.contains
                              ? i.contains(o)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(o))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (z = e
                  ? function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var o =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        o ||
                        (1 &
                          (o =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!i.sortDetached && e.compareDocumentPosition(t) === o)
                          ? t === p || (t.ownerDocument === _ && w(_, t))
                            ? -1
                            : e === p || (e.ownerDocument === _ && w(_, e))
                            ? 1
                            : h
                            ? L(h, t) - L(h, e)
                            : 0
                          : 4 & o
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var i,
                        o = 0,
                        n = t.parentNode,
                        s = e.parentNode,
                        r = [t],
                        a = [e];
                      if (!n || !s)
                        return t === p
                          ? -1
                          : e === p
                          ? 1
                          : n
                          ? -1
                          : s
                          ? 1
                          : h
                          ? L(h, t) - L(h, e)
                          : 0;
                      if (n === s) return ht(t, e);
                      for (i = t; (i = i.parentNode); ) r.unshift(i);
                      for (i = e; (i = i.parentNode); ) a.unshift(i);
                      for (; r[o] === a[o]; ) o++;
                      return o
                        ? ht(r[o], a[o])
                        : r[o] === _
                        ? -1
                        : a[o] === _
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
        (st.matches = function (t, e) {
          return st(t, null, null, e);
        }),
        (st.matchesSelector = function (t, e) {
          if (
            ((t.ownerDocument || t) !== p && u(t),
            (e = e.replace(B, "='$1']")),
            i.matchesSelector &&
              g &&
              !E[e + " "] &&
              (!v || !v.test(e)) &&
              (!m || !m.test(e)))
          )
            try {
              var o = y.call(t, e);
              if (
                o ||
                i.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return o;
            } catch (t) {}
          return st(e, p, null, [t]).length > 0;
        }),
        (st.contains = function (t, e) {
          return (t.ownerDocument || t) !== p && u(t), w(t, e);
        }),
        (st.attr = function (t, e) {
          (t.ownerDocument || t) !== p && u(t);
          var n = o.attrHandle[e.toLowerCase()],
            s =
              n && k.call(o.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
          return void 0 !== s
            ? s
            : i.attributes || !g
            ? t.getAttribute(e)
            : (s = t.getAttributeNode(e)) && s.specified
            ? s.value
            : null;
        }),
        (st.escape = function (t) {
          return (t + "").replace(et, it);
        }),
        (st.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (st.uniqueSort = function (t) {
          var e,
            o = [],
            n = 0,
            s = 0;
          if (
            ((d = !i.detectDuplicates),
            (h = !i.sortStable && t.slice(0)),
            t.sort(z),
            d)
          ) {
            for (; (e = t[s++]); ) e === t[s] && (n = o.push(s));
            for (; n--; ) t.splice(o[n], 1);
          }
          return (h = null), t;
        }),
        (n = st.getText =
          function (t) {
            var e,
              i = "",
              o = 0,
              s = t.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += n(t);
              } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (; (e = t[o++]); ) i += n(e);
            return i;
          }),
        ((o = st.selectors =
          {
            cacheLength: 50,
            createPseudo: at,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(J, tt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || st.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && st.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  i = !t[6] && t[2];
                return V.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : i &&
                        U.test(i) &&
                        (e = r(i, !0)) &&
                        (e = i.indexOf(")", i.length - e) - i.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(J, tt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = C[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                    C(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, i) {
                return function (o) {
                  var n = st.attr(o, t);
                  return null == n
                    ? "!=" === e
                    : !e ||
                        ((n += ""),
                        "=" === e
                          ? n === i
                          : "!=" === e
                          ? n !== i
                          : "^=" === e
                          ? i && 0 === n.indexOf(i)
                          : "*=" === e
                          ? i && n.indexOf(i) > -1
                          : "$=" === e
                          ? i && n.slice(-i.length) === i
                          : "~=" === e
                          ? (" " + n.replace(M, " ") + " ").indexOf(i) > -1
                          : "|=" === e &&
                            (n === i || n.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (t, e, i, o, n) {
                var s = "nth" !== t.slice(0, 3),
                  r = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === o && 0 === n
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, i, l) {
                      var c,
                        h,
                        d,
                        u,
                        p,
                        f,
                        g = s !== r ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a,
                        w = !1;
                      if (m) {
                        if (s) {
                          for (; g; ) {
                            for (u = e; (u = u[g]); )
                              if (
                                a
                                  ? u.nodeName.toLowerCase() === v
                                  : 1 === u.nodeType
                              )
                                return !1;
                            f = g = "only" === t && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                          for (
                            w =
                              (p =
                                (c =
                                  (h =
                                    (d = (u = m)[b] || (u[b] = {}))[
                                      u.uniqueID
                                    ] || (d[u.uniqueID] = {}))[t] || [])[0] ===
                                  T && c[1]) && c[2],
                              u = p && m.childNodes[p];
                            (u = (++p && u && u[g]) || (w = p = 0) || f.pop());

                          )
                            if (1 === u.nodeType && ++w && u === e) {
                              h[t] = [T, p, w];
                              break;
                            }
                        } else if (
                          (y &&
                            (w = p =
                              (c =
                                (h =
                                  (d = (u = e)[b] || (u[b] = {}))[u.uniqueID] ||
                                  (d[u.uniqueID] = {}))[t] || [])[0] === T &&
                              c[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (u =
                              (++p && u && u[g]) || (w = p = 0) || f.pop()) &&
                            ((a
                              ? u.nodeName.toLowerCase() !== v
                              : 1 !== u.nodeType) ||
                              !++w ||
                              (y &&
                                ((h =
                                  (d = u[b] || (u[b] = {}))[u.uniqueID] ||
                                  (d[u.uniqueID] = {}))[t] = [T, w]),
                              u !== e));

                          );
                        return (w -= n) === o || (w % o == 0 && w / o >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var i,
                  n =
                    o.pseudos[t] ||
                    o.setFilters[t.toLowerCase()] ||
                    st.error("unsupported pseudo: " + t);
                return n[b]
                  ? n(e)
                  : n.length > 1
                  ? ((i = [t, t, "", e]),
                    o.setFilters.hasOwnProperty(t.toLowerCase())
                      ? at(function (t, i) {
                          for (var o, s = n(t, e), r = s.length; r--; )
                            t[(o = L(t, s[r]))] = !(i[o] = s[r]);
                        })
                      : function (t) {
                          return n(t, 0, i);
                        })
                  : n;
              },
            },
            pseudos: {
              not: at(function (t) {
                var e = [],
                  i = [],
                  o = a(t.replace(R, "$1"));
                return o[b]
                  ? at(function (t, e, i, n) {
                      for (var s, r = o(t, null, n, []), a = t.length; a--; )
                        (s = r[a]) && (t[a] = !(e[a] = s));
                    })
                  : function (t, n, s) {
                      return (
                        (e[0] = t), o(e, null, s, i), (e[0] = null), !i.pop()
                      );
                    };
              }),
              has: at(function (t) {
                return function (e) {
                  return st(t, e).length > 0;
                };
              }),
              contains: at(function (t) {
                return (
                  (t = t.replace(J, tt)),
                  function (e) {
                    return (
                      (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                    );
                  }
                );
              }),
              lang: at(function (t) {
                return (
                  Y.test(t || "") || st.error("unsupported lang: " + t),
                  (t = t.replace(J, tt).toLowerCase()),
                  function (e) {
                    var i;
                    do {
                      if (
                        (i = g
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (i = i.toLowerCase()) === t ||
                          0 === i.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id;
              },
              root: function (t) {
                return t === f;
              },
              focus: function (t) {
                return (
                  t === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: pt(!1),
              disabled: pt(!0),
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !o.pseudos.empty(t);
              },
              header: function (t) {
                return G.test(t.nodeName);
              },
              input: function (t) {
                return X.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: ft(function () {
                return [0];
              }),
              last: ft(function (t, e) {
                return [e - 1];
              }),
              eq: ft(function (t, e, i) {
                return [i < 0 ? i + e : i];
              }),
              even: ft(function (t, e) {
                for (var i = 0; i < e; i += 2) t.push(i);
                return t;
              }),
              odd: ft(function (t, e) {
                for (var i = 1; i < e; i += 2) t.push(i);
                return t;
              }),
              lt: ft(function (t, e, i) {
                for (var o = i < 0 ? i + e : i; --o >= 0; ) t.push(o);
                return t;
              }),
              gt: ft(function (t, e, i) {
                for (var o = i < 0 ? i + e : i; ++o < e; ) t.push(o);
                return t;
              }),
            },
          }).pseudos.nth = o.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          o.pseudos[e] = dt(e);
        for (e in { submit: !0, reset: !0 }) o.pseudos[e] = ut(e);
        function mt() {}
        function vt(t) {
          for (var e = 0, i = t.length, o = ""; e < i; e++) o += t[e].value;
          return o;
        }
        function yt(t, e, i) {
          var o = e.dir,
            n = e.next,
            s = n || o,
            r = i && "parentNode" === s,
            a = x++;
          return e.first
            ? function (e, i, n) {
                for (; (e = e[o]); )
                  if (1 === e.nodeType || r) return t(e, i, n);
                return !1;
              }
            : function (e, i, l) {
                var c,
                  h,
                  d,
                  u = [T, a];
                if (l) {
                  for (; (e = e[o]); )
                    if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
                } else
                  for (; (e = e[o]); )
                    if (1 === e.nodeType || r)
                      if (
                        ((h =
                          (d = e[b] || (e[b] = {}))[e.uniqueID] ||
                          (d[e.uniqueID] = {})),
                        n && n === e.nodeName.toLowerCase())
                      )
                        e = e[o] || e;
                      else {
                        if ((c = h[s]) && c[0] === T && c[1] === a)
                          return (u[2] = c[2]);
                        if (((h[s] = u), (u[2] = t(e, i, l)))) return !0;
                      }
                return !1;
              };
        }
        function wt(t) {
          return t.length > 1
            ? function (e, i, o) {
                for (var n = t.length; n--; ) if (!t[n](e, i, o)) return !1;
                return !0;
              }
            : t[0];
        }
        function bt(t, e, i, o, n) {
          for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
            (s = t[a]) && ((i && !i(s, o, n)) || (r.push(s), c && e.push(a)));
          return r;
        }
        function _t(t, e, i, o, n, s) {
          return (
            o && !o[b] && (o = _t(o)),
            n && !n[b] && (n = _t(n, s)),
            at(function (s, r, a, l) {
              var c,
                h,
                d,
                u = [],
                p = [],
                f = r.length,
                g =
                  s ||
                  (function (t, e, i) {
                    for (var o = 0, n = e.length; o < n; o++) st(t, e[o], i);
                    return i;
                  })(e || "*", a.nodeType ? [a] : a, []),
                m = !t || (!s && e) ? g : bt(g, u, t, a, l),
                v = i ? (n || (s ? t : f || o) ? [] : r) : m;
              if ((i && i(m, v, a, l), o))
                for (c = bt(v, p), o(c, [], a, l), h = c.length; h--; )
                  (d = c[h]) && (v[p[h]] = !(m[p[h]] = d));
              if (s) {
                if (n || t) {
                  if (n) {
                    for (c = [], h = v.length; h--; )
                      (d = v[h]) && c.push((m[h] = d));
                    n(null, (v = []), c, l);
                  }
                  for (h = v.length; h--; )
                    (d = v[h]) &&
                      (c = n ? L(s, d) : u[h]) > -1 &&
                      (s[c] = !(r[c] = d));
                }
              } else (v = bt(v === r ? v.splice(f, v.length) : v)), n ? n(null, r, v, l) : I.apply(r, v);
            })
          );
        }
        function Tt(t) {
          for (
            var e,
              i,
              n,
              s = t.length,
              r = o.relative[t[0].type],
              a = r || o.relative[" "],
              l = r ? 1 : 0,
              h = yt(
                function (t) {
                  return t === e;
                },
                a,
                !0
              ),
              d = yt(
                function (t) {
                  return L(e, t) > -1;
                },
                a,
                !0
              ),
              u = [
                function (t, i, o) {
                  var n =
                    (!r && (o || i !== c)) ||
                    ((e = i).nodeType ? h(t, i, o) : d(t, i, o));
                  return (e = null), n;
                },
              ];
            l < s;
            l++
          )
            if ((i = o.relative[t[l].type])) u = [yt(wt(u), i)];
            else {
              if ((i = o.filter[t[l].type].apply(null, t[l].matches))[b]) {
                for (n = ++l; n < s && !o.relative[t[n].type]; n++);
                return _t(
                  l > 1 && wt(u),
                  l > 1 &&
                    vt(
                      t
                        .slice(0, l - 1)
                        .concat({ value: " " === t[l - 2].type ? "*" : "" })
                    ).replace(R, "$1"),
                  i,
                  l < n && Tt(t.slice(l, n)),
                  n < s && Tt((t = t.slice(n))),
                  n < s && vt(t)
                );
              }
              u.push(i);
            }
          return wt(u);
        }
        return (
          (mt.prototype = o.filters = o.pseudos),
          (o.setFilters = new mt()),
          (r = st.tokenize =
            function (t, e) {
              var i,
                n,
                s,
                r,
                a,
                l,
                c,
                h = S[t + " "];
              if (h) return e ? 0 : h.slice(0);
              for (a = t, l = [], c = o.preFilter; a; ) {
                for (r in ((i && !(n = q.exec(a))) ||
                  (n && (a = a.slice(n[0].length) || a), l.push((s = []))),
                (i = !1),
                (n = F.exec(a)) &&
                  ((i = n.shift()),
                  s.push({ value: i, type: n[0].replace(R, " ") }),
                  (a = a.slice(i.length))),
                o.filter))
                  !(n = V[r].exec(a)) ||
                    (c[r] && !(n = c[r](n))) ||
                    ((i = n.shift()),
                    s.push({ value: i, type: r, matches: n }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return e ? a.length : a ? st.error(t) : S(t, l).slice(0);
            }),
          (a = st.compile =
            function (t, e) {
              var i,
                n = [],
                s = [],
                a = E[t + " "];
              if (!a) {
                for (e || (e = r(t)), i = e.length; i--; )
                  (a = Tt(e[i]))[b] ? n.push(a) : s.push(a);
                (a = E(
                  t,
                  (function (t, e) {
                    var i = e.length > 0,
                      n = t.length > 0,
                      s = function (s, r, a, l, h) {
                        var d,
                          f,
                          m,
                          v = 0,
                          y = "0",
                          w = s && [],
                          b = [],
                          _ = c,
                          x = s || (n && o.find.TAG("*", h)),
                          C = (T += null == _ ? 1 : Math.random() || 0.1),
                          S = x.length;
                        for (
                          h && (c = r === p || r || h);
                          y !== S && null != (d = x[y]);
                          y++
                        ) {
                          if (n && d) {
                            for (
                              f = 0,
                                r || d.ownerDocument === p || (u(d), (a = !g));
                              (m = t[f++]);

                            )
                              if (m(d, r || p, a)) {
                                l.push(d);
                                break;
                              }
                            h && (T = C);
                          }
                          i && ((d = !m && d) && v--, s && w.push(d));
                        }
                        if (((v += y), i && y !== v)) {
                          for (f = 0; (m = e[f++]); ) m(w, b, r, a);
                          if (s) {
                            if (v > 0)
                              for (; y--; ) w[y] || b[y] || (b[y] = A.call(l));
                            b = bt(b);
                          }
                          I.apply(l, b),
                            h &&
                              !s &&
                              b.length > 0 &&
                              v + e.length > 1 &&
                              st.uniqueSort(l);
                        }
                        return h && ((T = C), (c = _)), w;
                      };
                    return i ? at(s) : s;
                  })(s, n)
                )).selector = t;
              }
              return a;
            }),
          (l = st.select =
            function (t, e, i, n) {
              var s,
                l,
                c,
                h,
                d,
                u = "function" == typeof t && t,
                p = !n && r((t = u.selector || t));
              if (((i = i || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = l[0]).type &&
                  9 === e.nodeType &&
                  g &&
                  o.relative[l[1].type]
                ) {
                  if (
                    !(e = (o.find.ID(c.matches[0].replace(J, tt), e) || [])[0])
                  )
                    return i;
                  u && (e = e.parentNode),
                    (t = t.slice(l.shift().value.length));
                }
                for (
                  s = V.needsContext.test(t) ? 0 : l.length;
                  s-- && ((c = l[s]), !o.relative[(h = c.type)]);

                )
                  if (
                    (d = o.find[h]) &&
                    (n = d(
                      c.matches[0].replace(J, tt),
                      (K.test(l[0].type) && gt(e.parentNode)) || e
                    ))
                  ) {
                    if ((l.splice(s, 1), !(t = n.length && vt(l))))
                      return I.apply(i, n), i;
                    break;
                  }
              }
              return (
                (u || a(t, p))(
                  n,
                  e,
                  !g,
                  i,
                  !e || (K.test(t) && gt(e.parentNode)) || e
                ),
                i
              );
            }),
          (i.sortStable = b.split("").sort(z).join("") === b),
          (i.detectDuplicates = !!d),
          u(),
          (i.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
          })),
          lt(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            ct("type|href|height|width", function (t, e, i) {
              if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (i.attributes &&
            lt(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            ct("value", function (t, e, i) {
              if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          lt(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            ct(W, function (t, e, i) {
              var o;
              if (!i)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (o = t.getAttributeNode(e)) && o.specified
                  ? o.value
                  : null;
            }),
          st
        );
      })(i);
      (x.find = E),
        (x.expr = E.selectors),
        (x.expr[":"] = x.expr.pseudos),
        (x.uniqueSort = x.unique = E.uniqueSort),
        (x.text = E.getText),
        (x.isXMLDoc = E.isXML),
        (x.contains = E.contains),
        (x.escapeSelector = E.escape);
      var z = function (t, e, i) {
          for (var o = [], n = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (n && x(t).is(i)) break;
              o.push(t);
            }
          return o;
        },
        k = function (t, e) {
          for (var i = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && i.push(t);
          return i;
        },
        $ = x.expr.match.needsContext;
      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(t, e, i) {
        return y(e)
          ? x.grep(t, function (t, o) {
              return !!e.call(t, o, t) !== i;
            })
          : e.nodeType
          ? x.grep(t, function (t) {
              return (t === e) !== i;
            })
          : "string" != typeof e
          ? x.grep(t, function (t) {
              return d.call(e, t) > -1 !== i;
            })
          : x.filter(e, t, i);
      }
      (x.filter = function (t, e, i) {
        var o = e[0];
        return (
          i && (t = ":not(" + t + ")"),
          1 === e.length && 1 === o.nodeType
            ? x.find.matchesSelector(o, t)
              ? [o]
              : []
            : x.find.matches(
                t,
                x.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        x.fn.extend({
          find: function (t) {
            var e,
              i,
              o = this.length,
              n = this;
            if ("string" != typeof t)
              return this.pushStack(
                x(t).filter(function () {
                  for (e = 0; e < o; e++) if (x.contains(n[e], this)) return !0;
                })
              );
            for (i = this.pushStack([]), e = 0; e < o; e++) x.find(t, n[e], i);
            return o > 1 ? x.uniqueSort(i) : i;
          },
          filter: function (t) {
            return this.pushStack(I(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(I(this, t || [], !0));
          },
          is: function (t) {
            return !!I(
              this,
              "string" == typeof t && $.test(t) ? x(t) : t || [],
              !1
            ).length;
          },
        });
      var D,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((x.fn.init = function (t, e, i) {
        var o, n;
        if (!t) return this;
        if (((i = i || D), "string" == typeof t)) {
          if (
            !(o =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : L.exec(t)) ||
            (!o[1] && e)
          )
            return !e || e.jquery
              ? (e || i).find(t)
              : this.constructor(e).find(t);
          if (o[1]) {
            if (
              ((e = e instanceof x ? e[0] : e),
              x.merge(
                this,
                x.parseHTML(
                  o[1],
                  e && e.nodeType ? e.ownerDocument || e : r,
                  !0
                )
              ),
              O.test(o[1]) && x.isPlainObject(e))
            )
              for (o in e) y(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
            return this;
          }
          return (
            (n = r.getElementById(o[2])) && ((this[0] = n), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : y(t)
          ? void 0 !== i.ready
            ? i.ready(t)
            : t(x)
          : x.makeArray(t, this);
      }).prototype = x.fn),
        (D = x(r));
      var W = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function P(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      x.fn.extend({
        has: function (t) {
          var e = x(t, this),
            i = e.length;
          return this.filter(function () {
            for (var t = 0; t < i; t++) if (x.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var i,
            o = 0,
            n = this.length,
            s = [],
            r = "string" != typeof t && x(t);
          if (!$.test(t))
            for (; o < n; o++)
              for (i = this[o]; i && i !== e; i = i.parentNode)
                if (
                  i.nodeType < 11 &&
                  (r
                    ? r.index(i) > -1
                    : 1 === i.nodeType && x.find.matchesSelector(i, t))
                ) {
                  s.push(i);
                  break;
                }
          return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? d.call(x(t), this[0])
              : d.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        x.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return z(t, "parentNode");
            },
            parentsUntil: function (t, e, i) {
              return z(t, "parentNode", i);
            },
            next: function (t) {
              return P(t, "nextSibling");
            },
            prev: function (t) {
              return P(t, "previousSibling");
            },
            nextAll: function (t) {
              return z(t, "nextSibling");
            },
            prevAll: function (t) {
              return z(t, "previousSibling");
            },
            nextUntil: function (t, e, i) {
              return z(t, "nextSibling", i);
            },
            prevUntil: function (t, e, i) {
              return z(t, "previousSibling", i);
            },
            siblings: function (t) {
              return k((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return k(t.firstChild);
            },
            contents: function (t) {
              return A(t, "iframe")
                ? t.contentDocument
                : (A(t, "template") && (t = t.content || t),
                  x.merge([], t.childNodes));
            },
          },
          function (t, e) {
            x.fn[t] = function (i, o) {
              var n = x.map(this, e, i);
              return (
                "Until" !== t.slice(-5) && (o = i),
                o && "string" == typeof o && (n = x.filter(o, n)),
                this.length > 1 &&
                  (H[t] || x.uniqueSort(n), W.test(t) && n.reverse()),
                this.pushStack(n)
              );
            };
          }
        );
      var N = /[^\x20\t\r\n\f]+/g;
      function j(t) {
        return t;
      }
      function M(t) {
        throw t;
      }
      function R(t, e, i, o) {
        var n;
        try {
          t && y((n = t.promise))
            ? n.call(t).done(e).fail(i)
            : t && y((n = t.then))
            ? n.call(t, e, i)
            : e.apply(void 0, [t].slice(o));
        } catch (t) {
          i.apply(void 0, [t]);
        }
      }
      (x.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  x.each(t.match(N) || [], function (t, i) {
                    e[i] = !0;
                  }),
                  e
                );
              })(t)
            : x.extend({}, t);
        var e,
          i,
          o,
          n,
          s = [],
          r = [],
          a = -1,
          l = function () {
            for (n = n || t.once, o = e = !0; r.length; a = -1)
              for (i = r.shift(); ++a < s.length; )
                !1 === s[a].apply(i[0], i[1]) &&
                  t.stopOnFalse &&
                  ((a = s.length), (i = !1));
            t.memory || (i = !1), (e = !1), n && (s = i ? [] : "");
          },
          c = {
            add: function () {
              return (
                s &&
                  (i && !e && ((a = s.length - 1), r.push(i)),
                  (function e(i) {
                    x.each(i, function (i, o) {
                      y(o)
                        ? (t.unique && c.has(o)) || s.push(o)
                        : o && o.length && "string" !== T(o) && e(o);
                    });
                  })(arguments),
                  i && !e && l()),
                this
              );
            },
            remove: function () {
              return (
                x.each(arguments, function (t, e) {
                  for (var i; (i = x.inArray(e, s, i)) > -1; )
                    s.splice(i, 1), i <= a && a--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? x.inArray(t, s) > -1 : s.length > 0;
            },
            empty: function () {
              return s && (s = []), this;
            },
            disable: function () {
              return (n = r = []), (s = i = ""), this;
            },
            disabled: function () {
              return !s;
            },
            lock: function () {
              return (n = r = []), i || e || (s = i = ""), this;
            },
            locked: function () {
              return !!n;
            },
            fireWith: function (t, i) {
              return (
                n ||
                  ((i = [t, (i = i || []).slice ? i.slice() : i]),
                  r.push(i),
                  e || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            },
          };
        return c;
      }),
        x.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  x.Callbacks("memory"),
                  x.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  x.Callbacks("once memory"),
                  x.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  x.Callbacks("once memory"),
                  x.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              o = "pending",
              n = {
                state: function () {
                  return o;
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return n.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return x
                    .Deferred(function (i) {
                      x.each(e, function (e, o) {
                        var n = y(t[o[4]]) && t[o[4]];
                        s[o[1]](function () {
                          var t = n && n.apply(this, arguments);
                          t && y(t.promise)
                            ? t
                                .promise()
                                .progress(i.notify)
                                .done(i.resolve)
                                .fail(i.reject)
                            : i[o[0] + "With"](this, n ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    })
                    .promise();
                },
                then: function (t, o, n) {
                  var s = 0;
                  function r(t, e, o, n) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var i, c;
                          if (!(t < s)) {
                            if ((i = o.apply(a, l)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              i &&
                              ("object" == typeof i ||
                                "function" == typeof i) &&
                              i.then),
                              y(c)
                                ? n
                                  ? c.call(i, r(s, e, j, n), r(s, e, M, n))
                                  : (s++,
                                    c.call(
                                      i,
                                      r(s, e, j, n),
                                      r(s, e, M, n),
                                      r(s, e, j, e.notifyWith)
                                    ))
                                : (o !== j && ((a = void 0), (l = [i])),
                                  (n || e.resolveWith)(a, l));
                          }
                        },
                        h = n
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (i) {
                                x.Deferred.exceptionHook &&
                                  x.Deferred.exceptionHook(i, h.stackTrace),
                                  t + 1 >= s &&
                                    (o !== M && ((a = void 0), (l = [i])),
                                    e.rejectWith(a, l));
                              }
                            };
                      t
                        ? h()
                        : (x.Deferred.getStackHook &&
                            (h.stackTrace = x.Deferred.getStackHook()),
                          i.setTimeout(h));
                    };
                  }
                  return x
                    .Deferred(function (i) {
                      e[0][3].add(r(0, i, y(n) ? n : j, i.notifyWith)),
                        e[1][3].add(r(0, i, y(t) ? t : j)),
                        e[2][3].add(r(0, i, y(o) ? o : M));
                    })
                    .promise();
                },
                promise: function (t) {
                  return null != t ? x.extend(t, n) : n;
                },
              },
              s = {};
            return (
              x.each(e, function (t, i) {
                var r = i[2],
                  a = i[5];
                (n[i[1]] = r.add),
                  a &&
                    r.add(
                      function () {
                        o = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  r.add(i[3].fire),
                  (s[i[0]] = function () {
                    return (
                      s[i[0] + "With"](this === s ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (s[i[0] + "With"] = r.fireWith);
              }),
              n.promise(s),
              t && t.call(s, s),
              s
            );
          },
          when: function (t) {
            var e = arguments.length,
              i = e,
              o = Array(i),
              n = l.call(arguments),
              s = x.Deferred(),
              r = function (t) {
                return function (i) {
                  (o[t] = this),
                    (n[t] = arguments.length > 1 ? l.call(arguments) : i),
                    --e || s.resolveWith(o, n);
                };
              };
            if (
              e <= 1 &&
              (R(t, s.done(r(i)).resolve, s.reject, !e),
              "pending" === s.state() || y(n[i] && n[i].then))
            )
              return s.then();
            for (; i--; ) R(n[i], r(i), s.reject);
            return s.promise();
          },
        });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (x.Deferred.exceptionHook = function (t, e) {
        i.console &&
          i.console.warn &&
          t &&
          q.test(t.name) &&
          i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (x.readyException = function (t) {
          i.setTimeout(function () {
            throw t;
          });
        });
      var F = x.Deferred();
      function B() {
        r.removeEventListener("DOMContentLoaded", B),
          i.removeEventListener("load", B),
          x.ready();
      }
      (x.fn.ready = function (t) {
        return (
          F.then(t).catch(function (t) {
            x.readyException(t);
          }),
          this
        );
      }),
        x.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --x.readyWait : x.isReady) ||
              ((x.isReady = !0),
              (!0 !== t && --x.readyWait > 0) || F.resolveWith(r, [x]));
          },
        }),
        (x.ready.then = F.then),
        "complete" === r.readyState ||
        ("loading" !== r.readyState && !r.documentElement.doScroll)
          ? i.setTimeout(x.ready)
          : (r.addEventListener("DOMContentLoaded", B),
            i.addEventListener("load", B));
      var U = function (t, e, i, o, n, s, r) {
          var a = 0,
            l = t.length,
            c = null == i;
          if ("object" === T(i))
            for (a in ((n = !0), i)) U(t, e, a, i[a], !0, s, r);
          else if (
            void 0 !== o &&
            ((n = !0),
            y(o) || (r = !0),
            c &&
              (r
                ? (e.call(t, o), (e = null))
                : ((c = e),
                  (e = function (t, e, i) {
                    return c.call(x(t), i);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], i, r ? o : o.call(t[a], a, e(t[a], i)));
          return n ? t : c ? e.call(t) : l ? e(t[0], i) : s;
        },
        Y = /^-ms-/,
        V = /-([a-z])/g;
      function X(t, e) {
        return e.toUpperCase();
      }
      function G(t) {
        return t.replace(Y, "ms-").replace(V, X);
      }
      var Z = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function Q() {
        this.expando = x.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Z(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, i) {
            var o,
              n = this.cache(t);
            if ("string" == typeof e) n[G(e)] = i;
            else for (o in e) n[G(o)] = e[o];
            return n;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][G(e)];
          },
          access: function (t, e, i) {
            return void 0 === e || (e && "string" == typeof e && void 0 === i)
              ? this.get(t, e)
              : (this.set(t, e, i), void 0 !== i ? i : e);
          },
          remove: function (t, e) {
            var i,
              o = t[this.expando];
            if (void 0 !== o) {
              if (void 0 !== e) {
                i = (e = Array.isArray(e)
                  ? e.map(G)
                  : (e = G(e)) in o
                  ? [e]
                  : e.match(N) || []).length;
                for (; i--; ) delete o[e[i]];
              }
              (void 0 === e || x.isEmptyObject(o)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !x.isEmptyObject(e);
          },
        });
      var K = new Q(),
        J = new Q(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function it(t, e, i) {
        var o;
        if (void 0 === i && 1 === t.nodeType)
          if (
            ((o = "data-" + e.replace(et, "-$&").toLowerCase()),
            "string" == typeof (i = t.getAttribute(o)))
          ) {
            try {
              i = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : tt.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(i);
            } catch (t) {}
            J.set(t, e, i);
          } else i = void 0;
        return i;
      }
      x.extend({
        hasData: function (t) {
          return J.hasData(t) || K.hasData(t);
        },
        data: function (t, e, i) {
          return J.access(t, e, i);
        },
        removeData: function (t, e) {
          J.remove(t, e);
        },
        _data: function (t, e, i) {
          return K.access(t, e, i);
        },
        _removeData: function (t, e) {
          K.remove(t, e);
        },
      }),
        x.fn.extend({
          data: function (t, e) {
            var i,
              o,
              n,
              s = this[0],
              r = s && s.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((n = J.get(s)), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))
              ) {
                for (i = r.length; i--; )
                  r[i] &&
                    0 === (o = r[i].name).indexOf("data-") &&
                    ((o = G(o.slice(5))), it(s, o, n[o]));
                K.set(s, "hasDataAttrs", !0);
              }
              return n;
            }
            return "object" == typeof t
              ? this.each(function () {
                  J.set(this, t);
                })
              : U(
                  this,
                  function (e) {
                    var i;
                    if (s && void 0 === e)
                      return void 0 !== (i = J.get(s, t))
                        ? i
                        : void 0 !== (i = it(s, t))
                        ? i
                        : void 0;
                    this.each(function () {
                      J.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              J.remove(this, t);
            });
          },
        }),
        x.extend({
          queue: function (t, e, i) {
            var o;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (o = K.get(t, e)),
                i &&
                  (!o || Array.isArray(i)
                    ? (o = K.access(t, e, x.makeArray(i)))
                    : o.push(i)),
                o || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var i = x.queue(t, e),
              o = i.length,
              n = i.shift(),
              s = x._queueHooks(t, e);
            "inprogress" === n && ((n = i.shift()), o--),
              n &&
                ("fx" === e && i.unshift("inprogress"),
                delete s.stop,
                n.call(
                  t,
                  function () {
                    x.dequeue(t, e);
                  },
                  s
                )),
              !o && s && s.empty.fire();
          },
          _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return (
              K.get(t, i) ||
              K.access(t, i, {
                empty: x.Callbacks("once memory").add(function () {
                  K.remove(t, [e + "queue", i]);
                }),
              })
            );
          },
        }),
        x.fn.extend({
          queue: function (t, e) {
            var i = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), i--),
              arguments.length < i
                ? x.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var i = x.queue(this, t, e);
                    x._queueHooks(this, t),
                      "fx" === t && "inprogress" !== i[0] && x.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              x.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var i,
              o = 1,
              n = x.Deferred(),
              s = this,
              r = this.length,
              a = function () {
                --o || n.resolveWith(s, [s]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              r--;

            )
              (i = K.get(s[r], t + "queueHooks")) &&
                i.empty &&
                (o++, i.empty.add(a));
            return a(), n.promise(e);
          },
        });
      var ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        nt = new RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
        st = ["Top", "Right", "Bottom", "Left"],
        rt = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display &&
              x.contains(t.ownerDocument, t) &&
              "none" === x.css(t, "display"))
          );
        },
        at = function (t, e, i, o) {
          var n,
            s,
            r = {};
          for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
          for (s in ((n = i.apply(t, o || [])), e)) t.style[s] = r[s];
          return n;
        };
      function lt(t, e, i, o) {
        var n,
          s,
          r = 20,
          a = o
            ? function () {
                return o.cur();
              }
            : function () {
                return x.css(t, e, "");
              },
          l = a(),
          c = (i && i[3]) || (x.cssNumber[e] ? "" : "px"),
          h = (x.cssNumber[e] || ("px" !== c && +l)) && nt.exec(x.css(t, e));
        if (h && h[3] !== c) {
          for (l /= 2, c = c || h[3], h = +l || 1; r--; )
            x.style(t, e, h + c),
              (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
              (h /= s);
          (h *= 2), x.style(t, e, h + c), (i = i || []);
        }
        return (
          i &&
            ((h = +h || +l || 0),
            (n = i[1] ? h + (i[1] + 1) * i[2] : +i[2]),
            o && ((o.unit = c), (o.start = h), (o.end = n))),
          n
        );
      }
      var ct = {};
      function ht(t) {
        var e,
          i = t.ownerDocument,
          o = t.nodeName,
          n = ct[o];
        return (
          n ||
          ((e = i.body.appendChild(i.createElement(o))),
          (n = x.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === n && (n = "block"),
          (ct[o] = n),
          n)
        );
      }
      function dt(t, e) {
        for (var i, o, n = [], s = 0, r = t.length; s < r; s++)
          (o = t[s]).style &&
            ((i = o.style.display),
            e
              ? ("none" === i &&
                  ((n[s] = K.get(o, "display") || null),
                  n[s] || (o.style.display = "")),
                "" === o.style.display && rt(o) && (n[s] = ht(o)))
              : "none" !== i && ((n[s] = "none"), K.set(o, "display", i)));
        for (s = 0; s < r; s++) null != n[s] && (t[s].style.display = n[s]);
        return t;
      }
      x.fn.extend({
        show: function () {
          return dt(this, !0);
        },
        hide: function () {
          return dt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                rt(this) ? x(this).show() : x(this).hide();
              });
        },
      });
      var ut = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ft = /^$|^module$|\/(?:java|ecma)script/i,
        gt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function mt(t, e) {
        var i;
        return (
          (i =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && A(t, e)) ? x.merge([t], i) : i
        );
      }
      function vt(t, e) {
        for (var i = 0, o = t.length; i < o; i++)
          K.set(t[i], "globalEval", !e || K.get(e[i], "globalEval"));
      }
      (gt.optgroup = gt.option),
        (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
        (gt.th = gt.td);
      var yt,
        wt,
        bt = /<|&#?\w+;/;
      function _t(t, e, i, o, n) {
        for (
          var s,
            r,
            a,
            l,
            c,
            h,
            d = e.createDocumentFragment(),
            u = [],
            p = 0,
            f = t.length;
          p < f;
          p++
        )
          if ((s = t[p]) || 0 === s)
            if ("object" === T(s)) x.merge(u, s.nodeType ? [s] : s);
            else if (bt.test(s)) {
              for (
                r = r || d.appendChild(e.createElement("div")),
                  a = (pt.exec(s) || ["", ""])[1].toLowerCase(),
                  l = gt[a] || gt._default,
                  r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2],
                  h = l[0];
                h--;

              )
                r = r.lastChild;
              x.merge(u, r.childNodes), ((r = d.firstChild).textContent = "");
            } else u.push(e.createTextNode(s));
        for (d.textContent = "", p = 0; (s = u[p++]); )
          if (o && x.inArray(s, o) > -1) n && n.push(s);
          else if (
            ((c = x.contains(s.ownerDocument, s)),
            (r = mt(d.appendChild(s), "script")),
            c && vt(r),
            i)
          )
            for (h = 0; (s = r[h++]); ) ft.test(s.type || "") && i.push(s);
        return d;
      }
      (yt = r.createDocumentFragment().appendChild(r.createElement("div"))),
        (wt = r.createElement("input")).setAttribute("type", "radio"),
        wt.setAttribute("checked", "checked"),
        wt.setAttribute("name", "t"),
        yt.appendChild(wt),
        (v.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (yt.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue);
      var Tt = r.documentElement,
        xt = /^key/,
        Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        St = /^([^.]*)(?:\.(.+)|)/;
      function Et() {
        return !0;
      }
      function zt() {
        return !1;
      }
      function kt() {
        try {
          return r.activeElement;
        } catch (t) {}
      }
      function $t(t, e, i, o, n, s) {
        var r, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof i && ((o = o || i), (i = void 0)), e))
            $t(t, a, i, o, e[a], s);
          return t;
        }
        if (
          (null == o && null == n
            ? ((n = i), (o = i = void 0))
            : null == n &&
              ("string" == typeof i
                ? ((n = o), (o = void 0))
                : ((n = o), (o = i), (i = void 0))),
          !1 === n)
        )
          n = zt;
        else if (!n) return t;
        return (
          1 === s &&
            ((r = n),
            ((n = function (t) {
              return x().off(t), r.apply(this, arguments);
            }).guid = r.guid || (r.guid = x.guid++))),
          t.each(function () {
            x.event.add(this, e, n, o, i);
          })
        );
      }
      (x.event = {
        global: {},
        add: function (t, e, i, o, n) {
          var s,
            r,
            a,
            l,
            c,
            h,
            d,
            u,
            p,
            f,
            g,
            m = K.get(t);
          if (m)
            for (
              i.handler && ((i = (s = i).handler), (n = s.selector)),
                n && x.find.matchesSelector(Tt, n),
                i.guid || (i.guid = x.guid++),
                (l = m.events) || (l = m.events = {}),
                (r = m.handle) ||
                  (r = m.handle =
                    function (e) {
                      return void 0 !== x && x.event.triggered !== e.type
                        ? x.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                c = (e = (e || "").match(N) || [""]).length;
              c--;

            )
              (p = g = (a = St.exec(e[c]) || [])[1]),
                (f = (a[2] || "").split(".").sort()),
                p &&
                  ((d = x.event.special[p] || {}),
                  (p = (n ? d.delegateType : d.bindType) || p),
                  (d = x.event.special[p] || {}),
                  (h = x.extend(
                    {
                      type: p,
                      origType: g,
                      data: o,
                      handler: i,
                      guid: i.guid,
                      selector: n,
                      needsContext: n && x.expr.match.needsContext.test(n),
                      namespace: f.join("."),
                    },
                    s
                  )),
                  (u = l[p]) ||
                    (((u = l[p] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(t, o, f, r)) ||
                      (t.addEventListener && t.addEventListener(p, r))),
                  d.add &&
                    (d.add.call(t, h),
                    h.handler.guid || (h.handler.guid = i.guid)),
                  n ? u.splice(u.delegateCount++, 0, h) : u.push(h),
                  (x.event.global[p] = !0));
        },
        remove: function (t, e, i, o, n) {
          var s,
            r,
            a,
            l,
            c,
            h,
            d,
            u,
            p,
            f,
            g,
            m = K.hasData(t) && K.get(t);
          if (m && (l = m.events)) {
            for (c = (e = (e || "").match(N) || [""]).length; c--; )
              if (
                ((p = g = (a = St.exec(e[c]) || [])[1]),
                (f = (a[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = x.event.special[p] || {},
                    u = l[(p = (o ? d.delegateType : d.bindType) || p)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    r = s = u.length;
                  s--;

                )
                  (h = u[s]),
                    (!n && g !== h.origType) ||
                      (i && i.guid !== h.guid) ||
                      (a && !a.test(h.namespace)) ||
                      (o && o !== h.selector && ("**" !== o || !h.selector)) ||
                      (u.splice(s, 1),
                      h.selector && u.delegateCount--,
                      d.remove && d.remove.call(t, h));
                r &&
                  !u.length &&
                  ((d.teardown && !1 !== d.teardown.call(t, f, m.handle)) ||
                    x.removeEvent(t, p, m.handle),
                  delete l[p]);
              } else for (p in l) x.event.remove(t, p + e[c], i, o, !0);
            x.isEmptyObject(l) && K.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            i,
            o,
            n,
            s,
            r,
            a = x.event.fix(t),
            l = new Array(arguments.length),
            c = (K.get(this, "events") || {})[a.type] || [],
            h = x.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((a.delegateTarget = this),
            !h.preDispatch || !1 !== h.preDispatch.call(this, a))
          ) {
            for (
              r = x.event.handlers.call(this, a, c), e = 0;
              (n = r[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = n.elem, i = 0;
                (s = n.handlers[i++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                  ((a.handleObj = s),
                  (a.data = s.data),
                  void 0 !==
                    (o = (
                      (x.event.special[s.origType] || {}).handle || s.handler
                    ).apply(n.elem, l)) &&
                    !1 === (a.result = o) &&
                    (a.preventDefault(), a.stopPropagation()));
            return h.postDispatch && h.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (t, e) {
          var i,
            o,
            n,
            s,
            r,
            a = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== t.type || !0 !== c.disabled)
              ) {
                for (s = [], r = {}, i = 0; i < l; i++)
                  void 0 === r[(n = (o = e[i]).selector + " ")] &&
                    (r[n] = o.needsContext
                      ? x(n, this).index(c) > -1
                      : x.find(n, this, null, [c]).length),
                    r[n] && s.push(o);
                s.length && a.push({ elem: c, handlers: s });
              }
          return (
            (c = this),
            l < e.length && a.push({ elem: c, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(x.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[x.expando] ? t : new x.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== kt() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === kt() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && A(this, "input"))
                return this.click(), !1;
            },
            _default: function (t) {
              return A(t.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (x.removeEvent = function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i);
        }),
        (x.Event = function (t, e) {
          if (!(this instanceof x.Event)) return new x.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Et
                  : zt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && x.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[x.expando] = !0);
        }),
        (x.Event.prototype = {
          constructor: x.Event,
          isDefaultPrevented: zt,
          isPropagationStopped: zt,
          isImmediatePropagationStopped: zt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Et),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Et),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Et),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        x.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && xt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && Ct.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          x.event.addProp
        ),
        x.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            x.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var i,
                  o = t.relatedTarget,
                  n = t.handleObj;
                return (
                  (o && (o === this || x.contains(this, o))) ||
                    ((t.type = n.origType),
                    (i = n.handler.apply(this, arguments)),
                    (t.type = e)),
                  i
                );
              },
            };
          }
        ),
        x.fn.extend({
          on: function (t, e, i, o) {
            return $t(this, t, e, i, o);
          },
          one: function (t, e, i, o) {
            return $t(this, t, e, i, o, 1);
          },
          off: function (t, e, i) {
            var o, n;
            if (t && t.preventDefault && t.handleObj)
              return (
                (o = t.handleObj),
                x(t.delegateTarget).off(
                  o.namespace ? o.origType + "." + o.namespace : o.origType,
                  o.selector,
                  o.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (n in t) this.off(n, e, t[n]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
              !1 === i && (i = zt),
              this.each(function () {
                x.event.remove(this, t, i, e);
              })
            );
          },
        });
      var At =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ot = /<script|<style|<link/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Lt(t, e) {
        return (
          (A(t, "table") &&
            A(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            x(t).children("tbody")[0]) ||
          t
        );
      }
      function Wt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Ht(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Pt(t, e) {
        var i, o, n, s, r, a, l, c;
        if (1 === e.nodeType) {
          if (
            K.hasData(t) &&
            ((s = K.access(t)), (r = K.set(e, s)), (c = s.events))
          )
            for (n in (delete r.handle, (r.events = {}), c))
              for (i = 0, o = c[n].length; i < o; i++)
                x.event.add(e, n, c[n][i]);
          J.hasData(t) &&
            ((a = J.access(t)), (l = x.extend({}, a)), J.set(e, l));
        }
      }
      function Nt(t, e, i, o) {
        e = c.apply([], e);
        var n,
          s,
          r,
          a,
          l,
          h,
          d = 0,
          u = t.length,
          p = u - 1,
          f = e[0],
          g = y(f);
        if (g || (u > 1 && "string" == typeof f && !v.checkClone && It.test(f)))
          return t.each(function (n) {
            var s = t.eq(n);
            g && (e[0] = f.call(this, n, s.html())), Nt(s, e, i, o);
          });
        if (
          u &&
          ((s = (n = _t(e, t[0].ownerDocument, !1, t, o)).firstChild),
          1 === n.childNodes.length && (n = s),
          s || o)
        ) {
          for (a = (r = x.map(mt(n, "script"), Wt)).length; d < u; d++)
            (l = n),
              d !== p &&
                ((l = x.clone(l, !0, !0)), a && x.merge(r, mt(l, "script"))),
              i.call(t[d], l, d);
          if (a)
            for (
              h = r[r.length - 1].ownerDocument, x.map(r, Ht), d = 0;
              d < a;
              d++
            )
              (l = r[d]),
                ft.test(l.type || "") &&
                  !K.access(l, "globalEval") &&
                  x.contains(h, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? x._evalUrl && x._evalUrl(l.src)
                    : _(l.textContent.replace(Dt, ""), h, l));
        }
        return t;
      }
      function jt(t, e, i) {
        for (var o, n = e ? x.filter(e, t) : t, s = 0; null != (o = n[s]); s++)
          i || 1 !== o.nodeType || x.cleanData(mt(o)),
            o.parentNode &&
              (i && x.contains(o.ownerDocument, o) && vt(mt(o, "script")),
              o.parentNode.removeChild(o));
        return t;
      }
      x.extend({
        htmlPrefilter: function (t) {
          return t.replace(At, "<$1></$2>");
        },
        clone: function (t, e, i) {
          var o,
            n,
            s,
            r,
            a,
            l,
            c,
            h = t.cloneNode(!0),
            d = x.contains(t.ownerDocument, t);
          if (
            !(
              v.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              x.isXMLDoc(t)
            )
          )
            for (r = mt(h), o = 0, n = (s = mt(t)).length; o < n; o++)
              (a = s[o]),
                (l = r[o]),
                (c = void 0),
                "input" === (c = l.nodeName.toLowerCase()) && ut.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (l.defaultValue = a.defaultValue);
          if (e)
            if (i)
              for (
                s = s || mt(t), r = r || mt(h), o = 0, n = s.length;
                o < n;
                o++
              )
                Pt(s[o], r[o]);
            else Pt(t, h);
          return (
            (r = mt(h, "script")).length > 0 && vt(r, !d && mt(t, "script")), h
          );
        },
        cleanData: function (t) {
          for (
            var e, i, o, n = x.event.special, s = 0;
            void 0 !== (i = t[s]);
            s++
          )
            if (Z(i)) {
              if ((e = i[K.expando])) {
                if (e.events)
                  for (o in e.events)
                    n[o] ? x.event.remove(i, o) : x.removeEvent(i, o, e.handle);
                i[K.expando] = void 0;
              }
              i[J.expando] && (i[J.expando] = void 0);
            }
        },
      }),
        x.fn.extend({
          detach: function (t) {
            return jt(this, t, !0);
          },
          remove: function (t) {
            return jt(this, t);
          },
          text: function (t) {
            return U(
              this,
              function (t) {
                return void 0 === t
                  ? x.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Nt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Lt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Nt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Lt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Nt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Nt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (x.cleanData(mt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return x.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return U(
              this,
              function (t) {
                var e = this[0] || {},
                  i = 0,
                  o = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Ot.test(t) &&
                  !gt[(pt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = x.htmlPrefilter(t);
                  try {
                    for (; i < o; i++)
                      1 === (e = this[i] || {}).nodeType &&
                        (x.cleanData(mt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Nt(
              this,
              arguments,
              function (e) {
                var i = this.parentNode;
                x.inArray(this, t) < 0 &&
                  (x.cleanData(mt(this)), i && i.replaceChild(e, this));
              },
              t
            );
          },
        }),
        x.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            x.fn[t] = function (t) {
              for (
                var i, o = [], n = x(t), s = n.length - 1, r = 0;
                r <= s;
                r++
              )
                (i = r === s ? this : this.clone(!0)),
                  x(n[r])[e](i),
                  h.apply(o, i.get());
              return this.pushStack(o);
            };
          }
        );
      var Mt = new RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
        Rt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = i), e.getComputedStyle(t);
        },
        qt = new RegExp(st.join("|"), "i");
      function Ft(t, e, i) {
        var o,
          n,
          s,
          r,
          a = t.style;
        return (
          (i = i || Rt(t)) &&
            ("" !== (r = i.getPropertyValue(e) || i[e]) ||
              x.contains(t.ownerDocument, t) ||
              (r = x.style(t, e)),
            !v.pixelBoxStyles() &&
              Mt.test(r) &&
              qt.test(e) &&
              ((o = a.width),
              (n = a.minWidth),
              (s = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = r),
              (r = i.width),
              (a.width = o),
              (a.minWidth = n),
              (a.maxWidth = s))),
          void 0 !== r ? r + "" : r
        );
      }
      function Bt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (h) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (h.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Tt.appendChild(c).appendChild(h);
            var t = i.getComputedStyle(h);
            (o = "1%" !== t.top),
              (l = 12 === e(t.marginLeft)),
              (h.style.right = "60%"),
              (a = 36 === e(t.right)),
              (n = 36 === e(t.width)),
              (h.style.position = "absolute"),
              (s = 36 === h.offsetWidth || "absolute"),
              Tt.removeChild(c),
              (h = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var o,
          n,
          s,
          a,
          l,
          c = r.createElement("div"),
          h = r.createElement("div");
        h.style &&
          ((h.style.backgroundClip = "content-box"),
          (h.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === h.style.backgroundClip),
          x.extend(v, {
            boxSizingReliable: function () {
              return t(), n;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), o;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), s;
            },
          }));
      })();
      var Ut = /^(none|table(?!-c[ea]).+)/,
        Yt = /^--/,
        Vt = { position: "absolute", visibility: "hidden", display: "block" },
        Xt = { letterSpacing: "0", fontWeight: "400" },
        Gt = ["Webkit", "Moz", "ms"],
        Zt = r.createElement("div").style;
      function Qt(t) {
        var e = x.cssProps[t];
        return (
          e ||
            (e = x.cssProps[t] =
              (function (t) {
                if (t in Zt) return t;
                for (
                  var e = t[0].toUpperCase() + t.slice(1), i = Gt.length;
                  i--;

                )
                  if ((t = Gt[i] + e) in Zt) return t;
              })(t) || t),
          e
        );
      }
      function Kt(t, e, i) {
        var o = nt.exec(e);
        return o ? Math.max(0, o[2] - (i || 0)) + (o[3] || "px") : e;
      }
      function Jt(t, e, i, o, n, s) {
        var r = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
        if (i === (o ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
          "margin" === i && (l += x.css(t, i + st[r], !0, n)),
            o
              ? ("content" === i && (l -= x.css(t, "padding" + st[r], !0, n)),
                "margin" !== i &&
                  (l -= x.css(t, "border" + st[r] + "Width", !0, n)))
              : ((l += x.css(t, "padding" + st[r], !0, n)),
                "padding" !== i
                  ? (l += x.css(t, "border" + st[r] + "Width", !0, n))
                  : (a += x.css(t, "border" + st[r] + "Width", !0, n)));
        return (
          !o &&
            s >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5
              )
            )),
          l
        );
      }
      function te(t, e, i) {
        var o = Rt(t),
          n = Ft(t, e, o),
          s = "border-box" === x.css(t, "boxSizing", !1, o),
          r = s;
        if (Mt.test(n)) {
          if (!i) return n;
          n = "auto";
        }
        return (
          (r = r && (v.boxSizingReliable() || n === t.style[e])),
          ("auto" === n ||
            (!parseFloat(n) && "inline" === x.css(t, "display", !1, o))) &&
            ((n = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = !0)),
          (n = parseFloat(n) || 0) +
            Jt(t, e, i || (s ? "border" : "content"), r, o, n) +
            "px"
        );
      }
      function ee(t, e, i, o, n) {
        return new ee.prototype.init(t, e, i, o, n);
      }
      x.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var i = Ft(t, "opacity");
                return "" === i ? "1" : i;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, i, o) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var n,
              s,
              r,
              a = G(e),
              l = Yt.test(e),
              c = t.style;
            if (
              (l || (e = Qt(a)),
              (r = x.cssHooks[e] || x.cssHooks[a]),
              void 0 === i)
            )
              return r && "get" in r && void 0 !== (n = r.get(t, !1, o))
                ? n
                : c[e];
            "string" === (s = typeof i) &&
              (n = nt.exec(i)) &&
              n[1] &&
              ((i = lt(t, e, n)), (s = "number")),
              null != i &&
                i == i &&
                ("number" === s &&
                  (i += (n && n[3]) || (x.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (c[e] = "inherit"),
                (r && "set" in r && void 0 === (i = r.set(t, i, o))) ||
                  (l ? c.setProperty(e, i) : (c[e] = i)));
          }
        },
        css: function (t, e, i, o) {
          var n,
            s,
            r,
            a = G(e);
          return (
            Yt.test(e) || (e = Qt(a)),
            (r = x.cssHooks[e] || x.cssHooks[a]) &&
              "get" in r &&
              (n = r.get(t, !0, i)),
            void 0 === n && (n = Ft(t, e, o)),
            "normal" === n && e in Xt && (n = Xt[e]),
            "" === i || i
              ? ((s = parseFloat(n)), !0 === i || isFinite(s) ? s || 0 : n)
              : n
          );
        },
      }),
        x.each(["height", "width"], function (t, e) {
          x.cssHooks[e] = {
            get: function (t, i, o) {
              if (i)
                return !Ut.test(x.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? te(t, e, o)
                  : at(t, Vt, function () {
                      return te(t, e, o);
                    });
            },
            set: function (t, i, o) {
              var n,
                s = Rt(t),
                r = "border-box" === x.css(t, "boxSizing", !1, s),
                a = o && Jt(t, e, o, r, s);
              return (
                r &&
                  v.scrollboxSize() === s.position &&
                  (a -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(s[e]) -
                      Jt(t, e, "border", !1, s) -
                      0.5
                  )),
                a &&
                  (n = nt.exec(i)) &&
                  "px" !== (n[3] || "px") &&
                  ((t.style[e] = i), (i = x.css(t, e))),
                Kt(0, i, a)
              );
            },
          };
        }),
        (x.cssHooks.marginLeft = Bt(v.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Ft(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  at(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        x.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (x.cssHooks[t + e] = {
            expand: function (i) {
              for (
                var o = 0,
                  n = {},
                  s = "string" == typeof i ? i.split(" ") : [i];
                o < 4;
                o++
              )
                n[t + st[o] + e] = s[o] || s[o - 2] || s[0];
              return n;
            },
          }),
            "margin" !== t && (x.cssHooks[t + e].set = Kt);
        }),
        x.fn.extend({
          css: function (t, e) {
            return U(
              this,
              function (t, e, i) {
                var o,
                  n,
                  s = {},
                  r = 0;
                if (Array.isArray(e)) {
                  for (o = Rt(t), n = e.length; r < n; r++)
                    s[e[r]] = x.css(t, e[r], !1, o);
                  return s;
                }
                return void 0 !== i ? x.style(t, e, i) : x.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (x.Tween = ee),
        (ee.prototype = {
          constructor: ee,
          init: function (t, e, i, o, n, s) {
            (this.elem = t),
              (this.prop = i),
              (this.easing = n || x.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = o),
              (this.unit = s || (x.cssNumber[i] ? "" : "px"));
          },
          cur: function () {
            var t = ee.propHooks[this.prop];
            return t && t.get ? t.get(this) : ee.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              i = ee.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                    x.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              i && i.set ? i.set(this) : ee.propHooks._default.set(this),
              this
            );
          },
        }),
        (ee.prototype.init.prototype = ee.prototype),
        (ee.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = x.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              x.fx.step[t.prop]
                ? x.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[x.cssProps[t.prop]] &&
                    !x.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : x.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (ee.propHooks.scrollTop = ee.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (x.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (x.fx = ee.prototype.init),
        (x.fx.step = {});
      var ie,
        oe,
        ne = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;
      function re() {
        oe &&
          (!1 === r.hidden && i.requestAnimationFrame
            ? i.requestAnimationFrame(re)
            : i.setTimeout(re, x.fx.interval),
          x.fx.tick());
      }
      function ae() {
        return (
          i.setTimeout(function () {
            ie = void 0;
          }),
          (ie = Date.now())
        );
      }
      function le(t, e) {
        var i,
          o = 0,
          n = { height: t };
        for (e = e ? 1 : 0; o < 4; o += 2 - e)
          n["margin" + (i = st[o])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n;
      }
      function ce(t, e, i) {
        for (
          var o,
            n = (he.tweeners[e] || []).concat(he.tweeners["*"]),
            s = 0,
            r = n.length;
          s < r;
          s++
        )
          if ((o = n[s].call(i, e, t))) return o;
      }
      function he(t, e, i) {
        var o,
          n,
          s = 0,
          r = he.prefilters.length,
          a = x.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (n) return !1;
            for (
              var e = ie || ae(),
                i = Math.max(0, c.startTime + c.duration - e),
                o = 1 - (i / c.duration || 0),
                s = 0,
                r = c.tweens.length;
              s < r;
              s++
            )
              c.tweens[s].run(o);
            return (
              a.notifyWith(t, [c, o, i]),
              o < 1 && r
                ? i
                : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            );
          },
          c = a.promise({
            elem: t,
            props: x.extend({}, e),
            opts: x.extend(
              !0,
              { specialEasing: {}, easing: x.easing._default },
              i
            ),
            originalProperties: e,
            originalOptions: i,
            startTime: ie || ae(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
              var o = x.Tween(
                t,
                c.opts,
                e,
                i,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(o), o;
            },
            stop: function (e) {
              var i = 0,
                o = e ? c.tweens.length : 0;
              if (n) return this;
              for (n = !0; i < o; i++) c.tweens[i].run(1);
              return (
                e
                  ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                  : a.rejectWith(t, [c, e]),
                this
              );
            },
          }),
          h = c.props;
        for (
          !(function (t, e) {
            var i, o, n, s, r;
            for (i in t)
              if (
                ((n = e[(o = G(i))]),
                (s = t[i]),
                Array.isArray(s) && ((n = s[1]), (s = t[i] = s[0])),
                i !== o && ((t[o] = s), delete t[i]),
                (r = x.cssHooks[o]) && ("expand" in r))
              )
                for (i in ((s = r.expand(s)), delete t[o], s))
                  (i in t) || ((t[i] = s[i]), (e[i] = n));
              else e[o] = n;
          })(h, c.opts.specialEasing);
          s < r;
          s++
        )
          if ((o = he.prefilters[s].call(c, t, h, c.opts)))
            return (
              y(o.stop) &&
                (x._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
              o
            );
        return (
          x.map(h, ce, c),
          y(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          x.fx.timer(x.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (x.Animation = x.extend(he, {
        tweeners: {
          "*": [
            function (t, e) {
              var i = this.createTween(t, e);
              return lt(i.elem, t, nt.exec(e), i), i;
            },
          ],
        },
        tweener: function (t, e) {
          y(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
          for (var i, o = 0, n = t.length; o < n; o++)
            (i = t[o]),
              (he.tweeners[i] = he.tweeners[i] || []),
              he.tweeners[i].unshift(e);
        },
        prefilters: [
          function (t, e, i) {
            var o,
              n,
              s,
              r,
              a,
              l,
              c,
              h,
              d = "width" in e || "height" in e,
              u = this,
              p = {},
              f = t.style,
              g = t.nodeType && rt(t),
              m = K.get(t, "fxshow");
            for (o in (i.queue ||
              (null == (r = x._queueHooks(t, "fx")).unqueued &&
                ((r.unqueued = 0),
                (a = r.empty.fire),
                (r.empty.fire = function () {
                  r.unqueued || a();
                })),
              r.unqueued++,
              u.always(function () {
                u.always(function () {
                  r.unqueued--, x.queue(t, "fx").length || r.empty.fire();
                });
              })),
            e))
              if (((n = e[o]), ne.test(n))) {
                if (
                  (delete e[o],
                  (s = s || "toggle" === n),
                  n === (g ? "hide" : "show"))
                ) {
                  if ("show" !== n || !m || void 0 === m[o]) continue;
                  g = !0;
                }
                p[o] = (m && m[o]) || x.style(t, o);
              }
            if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(p))
              for (o in (d &&
                1 === t.nodeType &&
                ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                null == (c = m && m.display) && (c = K.get(t, "display")),
                "none" === (h = x.css(t, "display")) &&
                  (c
                    ? (h = c)
                    : (dt([t], !0),
                      (c = t.style.display || c),
                      (h = x.css(t, "display")),
                      dt([t]))),
                ("inline" === h || ("inline-block" === h && null != c)) &&
                  "none" === x.css(t, "float") &&
                  (l ||
                    (u.done(function () {
                      f.display = c;
                    }),
                    null == c &&
                      ((h = f.display), (c = "none" === h ? "" : h))),
                  (f.display = "inline-block"))),
              i.overflow &&
                ((f.overflow = "hidden"),
                u.always(function () {
                  (f.overflow = i.overflow[0]),
                    (f.overflowX = i.overflow[1]),
                    (f.overflowY = i.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = K.access(t, "fxshow", { display: c })),
                  s && (m.hidden = !g),
                  g && dt([t], !0),
                  u.done(function () {
                    for (o in (g || dt([t]), K.remove(t, "fxshow"), p))
                      x.style(t, o, p[o]);
                  })),
                  (l = ce(g ? m[o] : 0, o, u)),
                  o in m ||
                    ((m[o] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? he.prefilters.unshift(t) : he.prefilters.push(t);
        },
      })),
        (x.speed = function (t, e, i) {
          var o =
            t && "object" == typeof t
              ? x.extend({}, t)
              : {
                  complete: i || (!i && e) || (y(t) && t),
                  duration: t,
                  easing: (i && e) || (e && !y(e) && e),
                };
          return (
            x.fx.off
              ? (o.duration = 0)
              : "number" != typeof o.duration &&
                (o.duration in x.fx.speeds
                  ? (o.duration = x.fx.speeds[o.duration])
                  : (o.duration = x.fx.speeds._default)),
            (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
            (o.old = o.complete),
            (o.complete = function () {
              y(o.old) && o.old.call(this), o.queue && x.dequeue(this, o.queue);
            }),
            o
          );
        }),
        x.fn.extend({
          fadeTo: function (t, e, i, o) {
            return this.filter(rt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, i, o);
          },
          animate: function (t, e, i, o) {
            var n = x.isEmptyObject(t),
              s = x.speed(e, i, o),
              r = function () {
                var e = he(this, x.extend({}, t), s);
                (n || K.get(this, "finish")) && e.stop(!0);
              };
            return (
              (r.finish = r),
              n || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            );
          },
          stop: function (t, e, i) {
            var o = function (t) {
              var e = t.stop;
              delete t.stop, e(i);
            };
            return (
              "string" != typeof t && ((i = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  n = null != t && t + "queueHooks",
                  s = x.timers,
                  r = K.get(this);
                if (n) r[n] && r[n].stop && o(r[n]);
                else for (n in r) r[n] && r[n].stop && se.test(n) && o(r[n]);
                for (n = s.length; n--; )
                  s[n].elem !== this ||
                    (null != t && s[n].queue !== t) ||
                    (s[n].anim.stop(i), (e = !1), s.splice(n, 1));
                (!e && i) || x.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  i = K.get(this),
                  o = i[t + "queue"],
                  n = i[t + "queueHooks"],
                  s = x.timers,
                  r = o ? o.length : 0;
                for (
                  i.finish = !0,
                    x.queue(this, t, []),
                    n && n.stop && n.stop.call(this, !0),
                    e = s.length;
                  e--;

                )
                  s[e].elem === this &&
                    s[e].queue === t &&
                    (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < r; e++)
                  o[e] && o[e].finish && o[e].finish.call(this);
                delete i.finish;
              })
            );
          },
        }),
        x.each(["toggle", "show", "hide"], function (t, e) {
          var i = x.fn[e];
          x.fn[e] = function (t, o, n) {
            return null == t || "boolean" == typeof t
              ? i.apply(this, arguments)
              : this.animate(le(e, !0), t, o, n);
          };
        }),
        x.each(
          {
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            x.fn[t] = function (t, i, o) {
              return this.animate(e, t, i, o);
            };
          }
        ),
        (x.timers = []),
        (x.fx.tick = function () {
          var t,
            e = 0,
            i = x.timers;
          for (ie = Date.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
          i.length || x.fx.stop(), (ie = void 0);
        }),
        (x.fx.timer = function (t) {
          x.timers.push(t), x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function () {
          oe || ((oe = !0), re());
        }),
        (x.fx.stop = function () {
          oe = null;
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fn.delay = function (t, e) {
          return (
            (t = (x.fx && x.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, o) {
              var n = i.setTimeout(e, t);
              o.stop = function () {
                i.clearTimeout(n);
              };
            })
          );
        }),
        (function () {
          var t = r.createElement("input"),
            e = r
              .createElement("select")
              .appendChild(r.createElement("option"));
          (t.type = "checkbox"),
            (v.checkOn = "" !== t.value),
            (v.optSelected = e.selected),
            ((t = r.createElement("input")).value = "t"),
            (t.type = "radio"),
            (v.radioValue = "t" === t.value);
        })();
      var de,
        ue = x.expr.attrHandle;
      x.fn.extend({
        attr: function (t, e) {
          return U(this, x.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            x.removeAttr(this, t);
          });
        },
      }),
        x.extend({
          attr: function (t, e, i) {
            var o,
              n,
              s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === t.getAttribute
                ? x.prop(t, e, i)
                : ((1 === s && x.isXMLDoc(t)) ||
                    (n =
                      x.attrHooks[e.toLowerCase()] ||
                      (x.expr.match.bool.test(e) ? de : void 0)),
                  void 0 !== i
                    ? null === i
                      ? void x.removeAttr(t, e)
                      : n && "set" in n && void 0 !== (o = n.set(t, i, e))
                      ? o
                      : (t.setAttribute(e, i + ""), i)
                    : n && "get" in n && null !== (o = n.get(t, e))
                    ? o
                    : null == (o = x.find.attr(t, e))
                    ? void 0
                    : o);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!v.radioValue && "radio" === e && A(t, "input")) {
                  var i = t.value;
                  return t.setAttribute("type", e), i && (t.value = i), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var i,
              o = 0,
              n = e && e.match(N);
            if (n && 1 === t.nodeType)
              for (; (i = n[o++]); ) t.removeAttribute(i);
          },
        }),
        (de = {
          set: function (t, e, i) {
            return !1 === e ? x.removeAttr(t, i) : t.setAttribute(i, i), i;
          },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var i = ue[e] || x.find.attr;
          ue[e] = function (t, e, o) {
            var n,
              s,
              r = e.toLowerCase();
            return (
              o ||
                ((s = ue[r]),
                (ue[r] = n),
                (n = null != i(t, e, o) ? r : null),
                (ue[r] = s)),
              n
            );
          };
        });
      var pe = /^(?:input|select|textarea|button)$/i,
        fe = /^(?:a|area)$/i;
      function ge(t) {
        return (t.match(N) || []).join(" ");
      }
      function me(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function ve(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(N)) || [];
      }
      x.fn.extend({
        prop: function (t, e) {
          return U(this, x.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[x.propFix[t] || t];
          });
        },
      }),
        x.extend({
          prop: function (t, e, i) {
            var o,
              n,
              s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return (
                (1 === s && x.isXMLDoc(t)) ||
                  ((e = x.propFix[e] || e), (n = x.propHooks[e])),
                void 0 !== i
                  ? n && "set" in n && void 0 !== (o = n.set(t, i, e))
                    ? o
                    : (t[e] = i)
                  : n && "get" in n && null !== (o = n.get(t, e))
                  ? o
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = x.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : pe.test(t.nodeName) || (fe.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (x.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        x.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            x.propFix[this.toLowerCase()] = this;
          }
        ),
        x.fn.extend({
          addClass: function (t) {
            var e,
              i,
              o,
              n,
              s,
              r,
              a,
              l = 0;
            if (y(t))
              return this.each(function (e) {
                x(this).addClass(t.call(this, e, me(this)));
              });
            if ((e = ve(t)).length)
              for (; (i = this[l++]); )
                if (
                  ((n = me(i)), (o = 1 === i.nodeType && " " + ge(n) + " "))
                ) {
                  for (r = 0; (s = e[r++]); )
                    o.indexOf(" " + s + " ") < 0 && (o += s + " ");
                  n !== (a = ge(o)) && i.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              i,
              o,
              n,
              s,
              r,
              a,
              l = 0;
            if (y(t))
              return this.each(function (e) {
                x(this).removeClass(t.call(this, e, me(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ve(t)).length)
              for (; (i = this[l++]); )
                if (
                  ((n = me(i)), (o = 1 === i.nodeType && " " + ge(n) + " "))
                ) {
                  for (r = 0; (s = e[r++]); )
                    for (; o.indexOf(" " + s + " ") > -1; )
                      o = o.replace(" " + s + " ", " ");
                  n !== (a = ge(o)) && i.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var i = typeof t,
              o = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && o
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : y(t)
              ? this.each(function (i) {
                  x(this).toggleClass(t.call(this, i, me(this), e), e);
                })
              : this.each(function () {
                  var e, n, s, r;
                  if (o)
                    for (n = 0, s = x(this), r = ve(t); (e = r[n++]); )
                      s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== i) ||
                      ((e = me(this)) && K.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              i,
              o = 0;
            for (e = " " + t + " "; (i = this[o++]); )
              if (1 === i.nodeType && (" " + ge(me(i)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var ye = /\r/g;
      x.fn.extend({
        val: function (t) {
          var e,
            i,
            o,
            n = this[0];
          return arguments.length
            ? ((o = y(t)),
              this.each(function (i) {
                var n;
                1 === this.nodeType &&
                  (null == (n = o ? t.call(this, i, x(this).val()) : t)
                    ? (n = "")
                    : "number" == typeof n
                    ? (n += "")
                    : Array.isArray(n) &&
                      (n = x.map(n, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    x.valHooks[this.type] ||
                    x.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, n, "value")) ||
                    (this.value = n));
              }))
            : n
            ? (e =
                x.valHooks[n.type] || x.valHooks[n.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (i = e.get(n, "value"))
              ? i
              : "string" == typeof (i = n.value)
              ? i.replace(ye, "")
              : null == i
              ? ""
              : i
            : void 0;
        },
      }),
        x.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = x.find.attr(t, "value");
                return null != e ? e : ge(x.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  i,
                  o,
                  n = t.options,
                  s = t.selectedIndex,
                  r = "select-one" === t.type,
                  a = r ? null : [],
                  l = r ? s + 1 : n.length;
                for (o = s < 0 ? l : r ? s : 0; o < l; o++)
                  if (
                    ((i = n[o]).selected || o === s) &&
                    !i.disabled &&
                    (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))
                  ) {
                    if (((e = x(i).val()), r)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function (t, e) {
                for (
                  var i, o, n = t.options, s = x.makeArray(e), r = n.length;
                  r--;

                )
                  ((o = n[r]).selected =
                    x.inArray(x.valHooks.option.get(o), s) > -1) && (i = !0);
                return i || (t.selectedIndex = -1), s;
              },
            },
          },
        }),
        x.each(["radio", "checkbox"], function () {
          (x.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = x.inArray(x(t).val(), e) > -1);
            },
          }),
            v.checkOn ||
              (x.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (v.focusin = "onfocusin" in i);
      var we = /^(?:focusinfocus|focusoutblur)$/,
        be = function (t) {
          t.stopPropagation();
        };
      x.extend(x.event, {
        trigger: function (t, e, o, n) {
          var s,
            a,
            l,
            c,
            h,
            d,
            u,
            p,
            g = [o || r],
            m = f.call(t, "type") ? t.type : t,
            v = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = l = o = o || r),
            3 !== o.nodeType &&
              8 !== o.nodeType &&
              !we.test(m + x.event.triggered) &&
              (m.indexOf(".") > -1 &&
                ((v = m.split(".")), (m = v.shift()), v.sort()),
              (h = m.indexOf(":") < 0 && "on" + m),
              ((t = t[x.expando]
                ? t
                : new x.Event(m, "object" == typeof t && t)).isTrigger = n
                ? 2
                : 3),
              (t.namespace = v.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = o),
              (e = null == e ? [t] : x.makeArray(e, [t])),
              (u = x.event.special[m] || {}),
              n || !u.trigger || !1 !== u.trigger.apply(o, e)))
          ) {
            if (!n && !u.noBubble && !w(o)) {
              for (
                c = u.delegateType || m, we.test(c + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (o.ownerDocument || r) &&
                g.push(l.defaultView || l.parentWindow || i);
            }
            for (s = 0; (a = g[s++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = s > 1 ? c : u.bindType || m),
                (d =
                  (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) &&
                  d.apply(a, e),
                (d = h && a[h]) &&
                  d.apply &&
                  Z(a) &&
                  ((t.result = d.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = m),
              n ||
                t.isDefaultPrevented() ||
                (u._default && !1 !== u._default.apply(g.pop(), e)) ||
                !Z(o) ||
                (h &&
                  y(o[m]) &&
                  !w(o) &&
                  ((l = o[h]) && (o[h] = null),
                  (x.event.triggered = m),
                  t.isPropagationStopped() && p.addEventListener(m, be),
                  o[m](),
                  t.isPropagationStopped() && p.removeEventListener(m, be),
                  (x.event.triggered = void 0),
                  l && (o[h] = l))),
              t.result
            );
          }
        },
        simulate: function (t, e, i) {
          var o = x.extend(new x.Event(), i, { type: t, isSimulated: !0 });
          x.event.trigger(o, null, e);
        },
      }),
        x.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              x.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return x.event.trigger(t, e, i, !0);
          },
        }),
        v.focusin ||
          x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var i = function (t) {
              x.event.simulate(e, t.target, x.event.fix(t));
            };
            x.event.special[e] = {
              setup: function () {
                var o = this.ownerDocument || this,
                  n = K.access(o, e);
                n || o.addEventListener(t, i, !0), K.access(o, e, (n || 0) + 1);
              },
              teardown: function () {
                var o = this.ownerDocument || this,
                  n = K.access(o, e) - 1;
                n
                  ? K.access(o, e, n)
                  : (o.removeEventListener(t, i, !0), K.remove(o, e));
              },
            };
          });
      var _e = i.location,
        Te = Date.now(),
        xe = /\?/;
      x.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new i.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            x.error("Invalid XML: " + t),
          e
        );
      };
      var Ce = /\[\]$/,
        Se = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        ze = /^(?:input|select|textarea|keygen)/i;
      function ke(t, e, i, o) {
        var n;
        if (Array.isArray(e))
          x.each(e, function (e, n) {
            i || Ce.test(t)
              ? o(t, n)
              : ke(
                  t + "[" + ("object" == typeof n && null != n ? e : "") + "]",
                  n,
                  i,
                  o
                );
          });
        else if (i || "object" !== T(e)) o(t, e);
        else for (n in e) ke(t + "[" + n + "]", e[n], i, o);
      }
      (x.param = function (t, e) {
        var i,
          o = [],
          n = function (t, e) {
            var i = y(e) ? e() : e;
            o[o.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == i ? "" : i);
          };
        if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
          x.each(t, function () {
            n(this.name, this.value);
          });
        else for (i in t) ke(i, t[i], e, n);
        return o.join("&");
      }),
        x.fn.extend({
          serialize: function () {
            return x.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = x.prop(this, "elements");
              return t ? x.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !x(this).is(":disabled") &&
                  ze.test(this.nodeName) &&
                  !Ee.test(t) &&
                  (this.checked || !ut.test(t))
                );
              })
              .map(function (t, e) {
                var i = x(this).val();
                return null == i
                  ? null
                  : Array.isArray(i)
                  ? x.map(i, function (t) {
                      return { name: e.name, value: t.replace(Se, "\r\n") };
                    })
                  : { name: e.name, value: i.replace(Se, "\r\n") };
              })
              .get();
          },
        });
      var $e = /%20/g,
        Ae = /#.*$/,
        Oe = /([?&])_=[^&]*/,
        Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        De = /^(?:GET|HEAD)$/,
        Le = /^\/\//,
        We = {},
        He = {},
        Pe = "*/".concat("*"),
        Ne = r.createElement("a");
      function je(t) {
        return function (e, i) {
          "string" != typeof e && ((i = e), (e = "*"));
          var o,
            n = 0,
            s = e.toLowerCase().match(N) || [];
          if (y(i))
            for (; (o = s[n++]); )
              "+" === o[0]
                ? ((o = o.slice(1) || "*"), (t[o] = t[o] || []).unshift(i))
                : (t[o] = t[o] || []).push(i);
        };
      }
      function Me(t, e, i, o) {
        var n = {},
          s = t === He;
        function r(a) {
          var l;
          return (
            (n[a] = !0),
            x.each(t[a] || [], function (t, a) {
              var c = a(e, i, o);
              return "string" != typeof c || s || n[c]
                ? s
                  ? !(l = c)
                  : void 0
                : (e.dataTypes.unshift(c), r(c), !1);
            }),
            l
          );
        }
        return r(e.dataTypes[0]) || (!n["*"] && r("*"));
      }
      function Re(t, e) {
        var i,
          o,
          n = x.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : o || (o = {}))[i] = e[i]);
        return o && x.extend(!0, t, o), t;
      }
      (Ne.href = _e.href),
        x.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _e.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                _e.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Pe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": x.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? Re(Re(t, x.ajaxSettings), e) : Re(x.ajaxSettings, t);
          },
          ajaxPrefilter: je(We),
          ajaxTransport: je(He),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var o,
              n,
              s,
              a,
              l,
              c,
              h,
              d,
              u,
              p,
              f = x.ajaxSetup({}, e),
              g = f.context || f,
              m = f.context && (g.nodeType || g.jquery) ? x(g) : x.event,
              v = x.Deferred(),
              y = x.Callbacks("once memory"),
              w = f.statusCode || {},
              b = {},
              _ = {},
              T = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (h) {
                    if (!a)
                      for (a = {}; (e = Ie.exec(s)); )
                        a[e[1].toLowerCase()] = e[2];
                    e = a[t.toLowerCase()];
                  }
                  return null == e ? null : e;
                },
                getAllResponseHeaders: function () {
                  return h ? s : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == h &&
                      ((t = _[t.toLowerCase()] = _[t.toLowerCase()] || t),
                      (b[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == h && (f.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (h) C.always(t[C.status]);
                    else for (e in t) w[e] = [w[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || T;
                  return o && o.abort(e), S(0, e), this;
                },
              };
            if (
              (v.promise(C),
              (f.url = ((t || f.url || _e.href) + "").replace(
                Le,
                _e.protocol + "//"
              )),
              (f.type = e.method || e.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              c = r.createElement("a");
              try {
                (c.href = f.url),
                  (c.href = c.href),
                  (f.crossDomain =
                    Ne.protocol + "//" + Ne.host != c.protocol + "//" + c.host);
              } catch (t) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = x.param(f.data, f.traditional)),
              Me(We, f, e, C),
              h)
            )
              return C;
            for (u in ((d = x.event && f.global) &&
              0 == x.active++ &&
              x.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !De.test(f.type)),
            (n = f.url.replace(Ae, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace($e, "+"))
              : ((p = f.url.slice(n.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((n += (xe.test(n) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((n = n.replace(Oe, "$1")),
                  (p = (xe.test(n) ? "&" : "?") + "_=" + Te++ + p)),
                (f.url = n + p)),
            f.ifModified &&
              (x.lastModified[n] &&
                C.setRequestHeader("If-Modified-Since", x.lastModified[n]),
              x.etag[n] && C.setRequestHeader("If-None-Match", x.etag[n])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              e.contentType) &&
              C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Pe + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              C.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, C, f) || h))
              return C.abort();
            if (
              ((T = "abort"),
              y.add(f.complete),
              C.done(f.success),
              C.fail(f.error),
              (o = Me(He, f, e, C)))
            ) {
              if (((C.readyState = 1), d && m.trigger("ajaxSend", [C, f]), h))
                return C;
              f.async &&
                f.timeout > 0 &&
                (l = i.setTimeout(function () {
                  C.abort("timeout");
                }, f.timeout));
              try {
                (h = !1), o.send(b, S);
              } catch (t) {
                if (h) throw t;
                S(-1, t);
              }
            } else S(-1, "No Transport");
            function S(t, e, r, a) {
              var c,
                u,
                p,
                b,
                _,
                T = e;
              h ||
                ((h = !0),
                l && i.clearTimeout(l),
                (o = void 0),
                (s = a || ""),
                (C.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || 304 === t),
                r &&
                  (b = (function (t, e, i) {
                    for (
                      var o, n, s, r, a = t.contents, l = t.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === o &&
                          (o =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (o)
                      for (n in a)
                        if (a[n] && a[n].test(o)) {
                          l.unshift(n);
                          break;
                        }
                    if (l[0] in i) s = l[0];
                    else {
                      for (n in i) {
                        if (!l[0] || t.converters[n + " " + l[0]]) {
                          s = n;
                          break;
                        }
                        r || (r = n);
                      }
                      s = s || r;
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s];
                  })(f, C, r)),
                (b = (function (t, e, i, o) {
                  var n,
                    s,
                    r,
                    a,
                    l,
                    c = {},
                    h = t.dataTypes.slice();
                  if (h[1])
                    for (r in t.converters)
                      c[r.toLowerCase()] = t.converters[r];
                  for (s = h.shift(); s; )
                    if (
                      (t.responseFields[s] && (i[t.responseFields[s]] = e),
                      !l &&
                        o &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = s),
                      (s = h.shift()))
                    )
                      if ("*" === s) s = l;
                      else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                          for (n in c)
                            if (
                              (a = n.split(" "))[1] === s &&
                              (r = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === r
                                ? (r = c[n])
                                : !0 !== c[n] && ((s = a[0]), h.unshift(a[1]));
                              break;
                            }
                        if (!0 !== r)
                          if (r && t.throws) e = r(e);
                          else
                            try {
                              e = r(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: r
                                  ? t
                                  : "No conversion from " + l + " to " + s,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(f, b, C, c)),
                c
                  ? (f.ifModified &&
                      ((_ = C.getResponseHeader("Last-Modified")) &&
                        (x.lastModified[n] = _),
                      (_ = C.getResponseHeader("etag")) && (x.etag[n] = _)),
                    204 === t || "HEAD" === f.type
                      ? (T = "nocontent")
                      : 304 === t
                      ? (T = "notmodified")
                      : ((T = b.state), (u = b.data), (c = !(p = b.error))))
                  : ((p = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                (C.status = t),
                (C.statusText = (e || T) + ""),
                c ? v.resolveWith(g, [u, T, C]) : v.rejectWith(g, [C, T, p]),
                C.statusCode(w),
                (w = void 0),
                d &&
                  m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? u : p]),
                y.fireWith(g, [C, T]),
                d &&
                  (m.trigger("ajaxComplete", [C, f]),
                  --x.active || x.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (t, e, i) {
            return x.get(t, e, i, "json");
          },
          getScript: function (t, e) {
            return x.get(t, void 0, e, "script");
          },
        }),
        x.each(["get", "post"], function (t, e) {
          x[e] = function (t, i, o, n) {
            return (
              y(i) && ((n = n || o), (o = i), (i = void 0)),
              x.ajax(
                x.extend(
                  { url: t, type: e, dataType: n, data: i, success: o },
                  x.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (x._evalUrl = function (t) {
          return x.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        x.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (y(t) && (t = t.call(this[0])),
                (e = x(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return y(t)
              ? this.each(function (e) {
                  x(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = x(this),
                    i = e.contents();
                  i.length ? i.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = y(t);
            return this.each(function (i) {
              x(this).wrapAll(e ? t.call(this, i) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  x(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (x.expr.pseudos.hidden = function (t) {
          return !x.expr.pseudos.visible(t);
        }),
        (x.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (x.ajaxSettings.xhr = function () {
          try {
            return new i.XMLHttpRequest();
          } catch (t) {}
        });
      var qe = { 0: 200, 1223: 204 },
        Fe = x.ajaxSettings.xhr();
      (v.cors = !!Fe && "withCredentials" in Fe),
        (v.ajax = Fe = !!Fe),
        x.ajaxTransport(function (t) {
          var e, o;
          if (v.cors || (Fe && !t.crossDomain))
            return {
              send: function (n, s) {
                var r,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest"),
                n))
                  a.setRequestHeader(r, n[r]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e =
                        o =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? s(0, "error")
                          : s(a.status, a.statusText)
                        : s(
                            qe[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (o = a.onerror = a.ontimeout = e("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = o)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          i.setTimeout(function () {
                            e && o();
                          });
                      }),
                  (e = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        x.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        x.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return x.globalEval(t), t;
            },
          },
        }),
        x.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        x.ajaxTransport("script", function (t) {
          var e, i;
          if (t.crossDomain)
            return {
              send: function (o, n) {
                (e = x("<script>")
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (i = function (t) {
                      e.remove(),
                        (i = null),
                        t && n("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  r.head.appendChild(e[0]);
              },
              abort: function () {
                i && i();
              },
            };
        });
      var Be,
        Ue = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
      x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Ue.pop() || x.expando + "_" + Te++;
          return (this[t] = !0), t;
        },
      }),
        x.ajaxPrefilter("json jsonp", function (t, e, o) {
          var n,
            s,
            r,
            a =
              !1 !== t.jsonp &&
              (Ye.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ye.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (n = t.jsonpCallback =
                y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Ye, "$1" + n))
                : !1 !== t.jsonp &&
                  (t.url += (xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
              (t.converters["script json"] = function () {
                return r || x.error(n + " was not called"), r[0];
              }),
              (t.dataTypes[0] = "json"),
              (s = i[n]),
              (i[n] = function () {
                r = arguments;
              }),
              o.always(function () {
                void 0 === s ? x(i).removeProp(n) : (i[n] = s),
                  t[n] && ((t.jsonpCallback = e.jsonpCallback), Ue.push(n)),
                  r && y(s) && s(r[0]),
                  (r = s = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Be = r.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Be.childNodes.length)),
        (x.parseHTML = function (t, e, i) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((i = e), (e = !1)),
              e ||
                (v.createHTMLDocument
                  ? (((o = (e =
                      r.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = r.location.href),
                    e.head.appendChild(o))
                  : (e = r)),
              (s = !i && []),
              (n = O.exec(t))
                ? [e.createElement(n[1])]
                : ((n = _t([t], e, s)),
                  s && s.length && x(s).remove(),
                  x.merge([], n.childNodes)));
          var o, n, s;
        }),
        (x.fn.load = function (t, e, i) {
          var o,
            n,
            s,
            r = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((o = ge(t.slice(a))), (t = t.slice(0, a))),
            y(e)
              ? ((i = e), (e = void 0))
              : e && "object" == typeof e && (n = "POST"),
            r.length > 0 &&
              x
                .ajax({ url: t, type: n || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (s = arguments),
                    r.html(o ? x("<div>").append(x.parseHTML(t)).find(o) : t);
                })
                .always(
                  i &&
                    function (t, e) {
                      r.each(function () {
                        i.apply(this, s || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        x.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            x.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        (x.expr.pseudos.animated = function (t) {
          return x.grep(x.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (x.offset = {
          setOffset: function (t, e, i) {
            var o,
              n,
              s,
              r,
              a,
              l,
              c = x.css(t, "position"),
              h = x(t),
              d = {};
            "static" === c && (t.style.position = "relative"),
              (a = h.offset()),
              (s = x.css(t, "top")),
              (l = x.css(t, "left")),
              ("absolute" === c || "fixed" === c) &&
              (s + l).indexOf("auto") > -1
                ? ((r = (o = h.position()).top), (n = o.left))
                : ((r = parseFloat(s) || 0), (n = parseFloat(l) || 0)),
              y(e) && (e = e.call(t, i, x.extend({}, a))),
              null != e.top && (d.top = e.top - a.top + r),
              null != e.left && (d.left = e.left - a.left + n),
              "using" in e ? e.using.call(t, d) : h.css(d);
          },
        }),
        x.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    x.offset.setOffset(this, t, e);
                  });
            var e,
              i,
              o = this[0];
            return o
              ? o.getClientRects().length
                ? ((e = o.getBoundingClientRect()),
                  (i = o.ownerDocument.defaultView),
                  { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                i,
                o = this[0],
                n = { top: 0, left: 0 };
              if ("fixed" === x.css(o, "position"))
                e = o.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    i = o.ownerDocument,
                    t = o.offsetParent || i.documentElement;
                  t &&
                  (t === i.body || t === i.documentElement) &&
                  "static" === x.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== o &&
                  1 === t.nodeType &&
                  (((n = x(t).offset()).top += x.css(t, "borderTopWidth", !0)),
                  (n.left += x.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - n.top - x.css(o, "marginTop", !0),
                left: e.left - n.left - x.css(o, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === x.css(t, "position");

              )
                t = t.offsetParent;
              return t || Tt;
            });
          },
        }),
        x.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var i = "pageYOffset" === e;
            x.fn[t] = function (o) {
              return U(
                this,
                function (t, o, n) {
                  var s;
                  if (
                    (w(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                    void 0 === n)
                  )
                    return s ? s[e] : t[o];
                  s
                    ? s.scrollTo(i ? s.pageXOffset : n, i ? n : s.pageYOffset)
                    : (t[o] = n);
                },
                t,
                o,
                arguments.length
              );
            };
          }
        ),
        x.each(["top", "left"], function (t, e) {
          x.cssHooks[e] = Bt(v.pixelPosition, function (t, i) {
            if (i)
              return (i = Ft(t, e)), Mt.test(i) ? x(t).position()[e] + "px" : i;
          });
        }),
        x.each({ Height: "height", Width: "width" }, function (t, e) {
          x.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (i, o) {
              x.fn[o] = function (n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                  a = i || (!0 === n || !0 === s ? "margin" : "border");
                return U(
                  this,
                  function (e, i, n) {
                    var s;
                    return w(e)
                      ? 0 === o.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((s = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          s["scroll" + t],
                          e.body["offset" + t],
                          s["offset" + t],
                          s["client" + t]
                        ))
                      : void 0 === n
                      ? x.css(e, i, a)
                      : x.style(e, i, n, a);
                  },
                  e,
                  r ? n : void 0,
                  r
                );
              };
            }
          );
        }),
        x.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            x.fn[e] = function (t, i) {
              return arguments.length > 0
                ? this.on(e, null, t, i)
                : this.trigger(e);
            };
          }
        ),
        x.fn.extend({
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        x.fn.extend({
          bind: function (t, e, i) {
            return this.on(t, null, e, i);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, i, o) {
            return this.on(e, t, i, o);
          },
          undelegate: function (t, e, i) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", i);
          },
        }),
        (x.proxy = function (t, e) {
          var i, o, n;
          if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), y(t)))
            return (
              (o = l.call(arguments, 2)),
              ((n = function () {
                return t.apply(e || this, o.concat(l.call(arguments)));
              }).guid = t.guid =
                t.guid || x.guid++),
              n
            );
        }),
        (x.holdReady = function (t) {
          t ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = A),
        (x.isFunction = y),
        (x.isWindow = w),
        (x.camelCase = G),
        (x.type = T),
        (x.now = Date.now),
        (x.isNumeric = function (t) {
          var e = x.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        void 0 ===
          (o = function () {
            return x;
          }.apply(e, [])) || (t.exports = o);
      var Ve = i.jQuery,
        Xe = i.$;
      return (
        (x.noConflict = function (t) {
          return (
            i.$ === x && (i.$ = Xe), t && i.jQuery === x && (i.jQuery = Ve), x
          );
        }),
        n || (i.jQuery = i.$ = x),
        x
      );
    });
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    i(2);
    try {
      i(3),
        (window.$ = window.jQuery = i(0)),
        i(4),
        i(6),
        i(7),
        i(8),
        i(9),
        i(10),
        i(11),
        i(12),
        i(13),
        i(14);
    } catch (t) {
      console.log(t);
    }
  },
  function (t, e, i) {},
  function (t, e) {
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    !(function (t, e, o) {
      var n = [],
        s = [],
        r = {
          _version: "3.6.0",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0,
          },
          _q: [],
          on: function (t, e) {
            var i = this;
            setTimeout(function () {
              e(i[t]);
            }, 0);
          },
          addTest: function (t, e, i) {
            s.push({ name: t, fn: e, options: i });
          },
          addAsyncTest: function (t) {
            s.push({ name: null, fn: t });
          },
        },
        a = function () {};
      (a.prototype = r),
        (a = new a()).addTest("customelements", "customElements" in t),
        a.addTest("history", function () {
          var e = navigator.userAgent;
          return (
            ((-1 === e.indexOf("Android 2.") &&
              -1 === e.indexOf("Android 4.0")) ||
              -1 === e.indexOf("Mobile Safari") ||
              -1 !== e.indexOf("Chrome") ||
              -1 !== e.indexOf("Windows Phone") ||
              "file:" === location.protocol) &&
            t.history &&
            "pushState" in t.history
          );
        }),
        a.addTest("postmessage", "postMessage" in t);
      var l = !1;
      try {
        l = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
      } catch (t) {}
      a.addTest("websockets", l),
        a.addTest("picture", "HTMLPictureElement" in t),
        a.addTest("webworkers", "Worker" in t);
      var c = r._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
      function h(t, e) {
        return i(t) === e;
      }
      r._prefixes = c;
      var d = e.documentElement,
        u = "svg" === d.nodeName.toLowerCase();
      function p(t) {
        var e = d.className,
          i = a._config.classPrefix || "";
        if ((u && (e = e.baseVal), a._config.enableJSClass)) {
          var o = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
          e = e.replace(o, "$1" + i + "js$2");
        }
        a._config.enableClasses &&
          ((e += " " + i + t.join(" " + i)),
          u ? (d.className.baseVal = e) : (d.className = e));
      }
      var f,
        g,
        m = r._config.usePrefixes
          ? "Moz O ms Webkit".toLowerCase().split(" ")
          : [];
      function v(t, e) {
        if ("object" == i(t)) for (var o in t) f(t, o) && v(o, t[o]);
        else {
          var n = (t = t.toLowerCase()).split("."),
            s = a[n[0]];
          if ((2 == n.length && (s = s[n[1]]), void 0 !== s)) return a;
          (e = "function" == typeof e ? e() : e),
            1 == n.length
              ? (a[n[0]] = e)
              : (!a[n[0]] ||
                  a[n[0]] instanceof Boolean ||
                  (a[n[0]] = new Boolean(a[n[0]])),
                (a[n[0]][n[1]] = e)),
            p([(e && 0 != e ? "" : "no-") + n.join("-")]),
            a._trigger(t, e);
        }
        return a;
      }
      function y() {
        return "function" != typeof e.createElement
          ? e.createElement(arguments[0])
          : u
          ? e.createElementNS.call(
              e,
              "http://www.w3.org/2000/svg",
              arguments[0]
            )
          : e.createElement.apply(e, arguments);
      }
      (r._domPrefixes = m),
        (f =
          h((g = {}.hasOwnProperty), "undefined") || h(g.call, "undefined")
            ? function (t, e) {
                return e in t && h(t.constructor.prototype[e], "undefined");
              }
            : function (t, e) {
                return g.call(t, e);
              }),
        (r._l = {}),
        (r.on = function (t, e) {
          this._l[t] || (this._l[t] = []),
            this._l[t].push(e),
            a.hasOwnProperty(t) &&
              setTimeout(function () {
                a._trigger(t, a[t]);
              }, 0);
        }),
        (r._trigger = function (t, e) {
          if (this._l[t]) {
            var i = this._l[t];
            setTimeout(function () {
              var t;
              for (t = 0; t < i.length; t++) (0, i[t])(e);
            }, 0),
              delete this._l[t];
          }
        }),
        a._q.push(function () {
          r.addTest = v;
        });
      var w = (function () {
        var t = !("onblur" in e.documentElement);
        return function (e, i) {
          var n;
          return (
            !!e &&
            ((i && "string" != typeof i) || (i = y(i || "div")),
            !(n = (e = "on" + e) in i) &&
              t &&
              (i.setAttribute || (i = y("div")),
              i.setAttribute(e, ""),
              (n = "function" == typeof i[e]),
              i[e] !== o && (i[e] = o),
              i.removeAttribute(e)),
            n)
          );
        };
      })();
      (r.hasEvent = w),
        a.addTest("pointerevents", function () {
          var t = !1,
            e = m.length;
          for (t = a.hasEvent("pointerdown"); e-- && !t; )
            w(m[e] + "pointerdown") && (t = !0);
          return t;
        });
      function b(t, i, o, n) {
        var s,
          r,
          a,
          l,
          c = "modernizr",
          h = y("div"),
          p = (function () {
            var t = e.body;
            return t || ((t = y(u ? "svg" : "body")).fake = !0), t;
          })();
        if (parseInt(o, 10))
          for (; o--; )
            ((a = y("div")).id = n ? n[o] : c + (o + 1)), h.appendChild(a);
        return (
          ((s = y("style")).type = "text/css"),
          (s.id = "s" + c),
          (p.fake ? p : h).appendChild(s),
          p.appendChild(h),
          s.styleSheet
            ? (s.styleSheet.cssText = t)
            : s.appendChild(e.createTextNode(t)),
          (h.id = c),
          p.fake &&
            ((p.style.background = ""),
            (p.style.overflow = "hidden"),
            (l = d.style.overflow),
            (d.style.overflow = "hidden"),
            d.appendChild(p)),
          (r = i(h, t)),
          p.fake
            ? (p.parentNode.removeChild(p),
              (d.style.overflow = l),
              d.offsetHeight)
            : h.parentNode.removeChild(h),
          !!r
        );
      }
      (r.prefixedCSSValue = function (t, e) {
        var i = !1,
          o = y("div").style;
        if (t in o) {
          var n = m.length;
          for (o[t] = e, i = o[t]; n-- && !i; )
            (o[t] = "-" + m[n] + "-" + e), (i = o[t]);
        }
        return "" === i && (i = !1), i;
      }),
        a.addTest("webgl", function () {
          var e = y("canvas"),
            i =
              "probablySupportsContext" in e
                ? "probablySupportsContext"
                : "supportsContext";
          return i in e
            ? e[i]("webgl") || e[i]("experimental-webgl")
            : "WebGLRenderingContext" in t;
        }),
        a.addAsyncTest(function () {
          var t,
            e,
            i = y("img"),
            o = "sizes" in i;
          !o && "srcset" in i
            ? ("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
              (t =
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
              (e = function () {
                v("sizes", 2 == i.width);
              }),
              (i.onload = e),
              (i.onerror = e),
              i.setAttribute("sizes", "9px"),
              (i.srcset =
                t +
                " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w"),
              (i.src = t))
            : v("sizes", o);
        }),
        a.addTest("srcset", "srcset" in y("img"));
      var _,
        T = (_ = t.matchMedia || t.msMatchMedia)
          ? function (t) {
              var e = _(t);
              return (e && e.matches) || !1;
            }
          : function (e) {
              var i = !1;
              return (
                b(
                  "@media " + e + " { #modernizr { position: absolute; } }",
                  function (e) {
                    i =
                      "absolute" ==
                      (t.getComputedStyle
                        ? t.getComputedStyle(e, null)
                        : e.currentStyle
                      ).position;
                  }
                ),
                i
              );
            };
      r.mq = T;
      r.testStyles = b;
      var x = r._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
      function C(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      r._cssomPrefixes = x;
      var S = { elem: y("modernizr") };
      a._q.push(function () {
        delete S.elem;
      });
      var E = { style: S.elem.style };
      function z(t) {
        return t
          .replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase();
          })
          .replace(/^ms-/, "-ms-");
      }
      function k(e, i) {
        var n = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
          for (; n--; ) if (t.CSS.supports(z(e[n]), i)) return !0;
          return !1;
        }
        if ("CSSSupportsRule" in t) {
          for (var s = []; n--; ) s.push("(" + z(e[n]) + ":" + i + ")");
          return b(
            "@supports (" +
              (s = s.join(" or ")) +
              ") { #modernizr { position: absolute; } }",
            function (e) {
              return (
                "absolute" ==
                (function (e, i, o) {
                  var n;
                  if ("getComputedStyle" in t) {
                    n = getComputedStyle.call(t, e, i);
                    var s = t.console;
                    null !== n
                      ? o && (n = n.getPropertyValue(o))
                      : s &&
                        s[s.error ? "error" : "log"].call(
                          s,
                          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                        );
                  } else n = !i && e.currentStyle && e.currentStyle[o];
                  return n;
                })(e, null, "position")
              );
            }
          );
        }
        return o;
      }
      function $(t, e, i, n) {
        if (((n = !h(n, "undefined") && n), !h(i, "undefined"))) {
          var s = k(t, i);
          if (!h(s, "undefined")) return s;
        }
        for (
          var r, a, l, c, d, u = ["modernizr", "tspan", "samp"];
          !E.style && u.length;

        )
          (r = !0), (E.modElem = y(u.shift())), (E.style = E.modElem.style);
        function p() {
          r && (delete E.style, delete E.modElem);
        }
        for (l = t.length, a = 0; a < l; a++)
          if (
            ((c = t[a]),
            (d = E.style[c]),
            ~("" + c).indexOf("-") &&
              (c = c
                .replace(/([a-z])-([a-z])/g, function (t, e, i) {
                  return e + i.toUpperCase();
                })
                .replace(/^-/, "")),
            E.style[c] !== o)
          ) {
            if (n || h(i, "undefined")) return p(), "pfx" != e || c;
            try {
              E.style[c] = i;
            } catch (t) {}
            if (E.style[c] != d) return p(), "pfx" != e || c;
          }
        return p(), !1;
      }
      a._q.unshift(function () {
        delete E.style;
      });
      r.testProp = function (t, e, i) {
        return $([t], o, e, i);
      };
      function A(t, e, i, o, n) {
        var s = t.charAt(0).toUpperCase() + t.slice(1),
          r = (t + " " + x.join(s + " ") + s).split(" ");
        return h(e, "string") || h(e, "undefined")
          ? $(r, e, o, n)
          : (function (t, e, i) {
              var o;
              for (var n in t)
                if (t[n] in e)
                  return !1 === i
                    ? t[n]
                    : h((o = e[t[n]]), "function")
                    ? C(o, i || e)
                    : o;
              return !1;
            })((r = (t + " " + m.join(s + " ") + s).split(" ")), e, i);
      }
      function O(t, e, i) {
        return A(t, o, o, e, i);
      }
      (r.testAllProps = A),
        (r.testAllProps = O),
        a.addTest("cssanimations", O("animationName", "a", !0)),
        (function () {
          a.addTest("csscolumns", function () {
            var t = !1,
              e = O("columnCount");
            try {
              (t = !!e) && (t = new Boolean(t));
            } catch (t) {}
            return t;
          });
          for (
            var t,
              e,
              i = [
                "Width",
                "Span",
                "Fill",
                "Gap",
                "Rule",
                "RuleColor",
                "RuleStyle",
                "RuleWidth",
                "BreakBefore",
                "BreakAfter",
                "BreakInside",
              ],
              o = 0;
            o < i.length;
            o++
          )
            (t = i[o].toLowerCase()),
              (e = O("column" + i[o])),
              ("breakbefore" !== t &&
                "breakafter" !== t &&
                "breakinside" != t) ||
                (e = e || O(i[o])),
              a.addTest("csscolumns." + t, e);
        })(),
        a.addTest("flexbox", O("flexBasis", "1px", !0)),
        (function () {
          var t, e, i, o, r, l;
          for (var c in s)
            if (s.hasOwnProperty(c)) {
              if (
                ((t = []),
                (e = s[c]).name &&
                  (t.push(e.name.toLowerCase()),
                  e.options && e.options.aliases && e.options.aliases.length))
              )
                for (i = 0; i < e.options.aliases.length; i++)
                  t.push(e.options.aliases[i].toLowerCase());
              for (
                o = h(e.fn, "function") ? e.fn() : e.fn, r = 0;
                r < t.length;
                r++
              )
                1 === (l = t[r].split(".")).length
                  ? (a[l[0]] = o)
                  : (!a[l[0]] ||
                      a[l[0]] instanceof Boolean ||
                      (a[l[0]] = new Boolean(a[l[0]])),
                    (a[l[0]][l[1]] = o)),
                  n.push((o ? "" : "no-") + l.join("-"));
            }
        })(),
        p(n),
        delete r.addTest,
        delete r.addAsyncTest;
      for (var I = 0; I < a._q.length; I++) a._q[I]();
      t.Modernizr = a;
    })(window, document);
  },
  function (t, e, i) {
    (function (t) {
      (function (e, i) {
        "use strict";
        function o(t, e) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function n(t, e, i) {
          return e && o(t.prototype, e), i && o(t, i), t;
        }
        function s(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
              o = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols &&
              (o = o.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })
              )),
              o.forEach(function (e) {
                s(t, e, i[e]);
              });
          }
          return t;
        }
        i = i && i.hasOwnProperty("default") ? i.default : i;
        var a = "transitionend";
        function l(t) {
          var e = this,
            o = !1;
          return (
            i(this).one(c.TRANSITION_END, function () {
              o = !0;
            }),
            setTimeout(function () {
              o || c.triggerTransitionEnd(e);
            }, t),
            this
          );
        }
        var c = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
              var i = t.getAttribute("href");
              e = i && "#" !== i ? i.trim() : "";
            }
            try {
              return document.querySelector(e) ? e : null;
            } catch (t) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = i(t).css("transition-duration"),
              o = i(t).css("transition-delay"),
              n = parseFloat(e),
              s = parseFloat(o);
            return n || s
              ? ((e = e.split(",")[0]),
                (o = o.split(",")[0]),
                1e3 * (parseFloat(e) + parseFloat(o)))
              : 0;
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (t) {
            i(t).trigger(a);
          },
          supportsTransitionEnd: function () {
            return Boolean(a);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, i) {
            for (var o in i)
              if (Object.prototype.hasOwnProperty.call(i, o)) {
                var n = i[o],
                  s = e[o],
                  r =
                    s && c.isElement(s)
                      ? "element"
                      : ((a = s),
                        {}.toString
                          .call(a)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase());
                if (!new RegExp(n).test(r))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      o +
                      '" provided type "' +
                      r +
                      '" but expected type "' +
                      n +
                      '".'
                  );
              }
            var a;
          },
          findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
              var e = t.getRootNode();
              return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
              ? t
              : t.parentNode
              ? c.findShadowRoot(t.parentNode)
              : null;
          },
        };
        (i.fn.emulateTransitionEnd = l),
          (i.event.special[c.TRANSITION_END] = {
            bindType: a,
            delegateType: a,
            handle: function (t) {
              if (i(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments);
            },
          });
        var h = i.fn.alert,
          d = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api",
          },
          u = "alert",
          p = "fade",
          f = "show",
          g = (function () {
            function t(t) {
              this._element = t;
            }
            var e = t.prototype;
            return (
              (e.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)),
                  this._triggerCloseEvent(e).isDefaultPrevented() ||
                    this._removeElement(e);
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.alert"), (this._element = null);
              }),
              (e._getRootElement = function (t) {
                var e = c.getSelectorFromElement(t),
                  o = !1;
                return (
                  e && (o = document.querySelector(e)),
                  o || (o = i(t).closest("." + u)[0]),
                  o
                );
              }),
              (e._triggerCloseEvent = function (t) {
                var e = i.Event(d.CLOSE);
                return i(t).trigger(e), e;
              }),
              (e._removeElement = function (t) {
                var e = this;
                if ((i(t).removeClass(f), i(t).hasClass(p))) {
                  var o = c.getTransitionDurationFromElement(t);
                  i(t)
                    .one(c.TRANSITION_END, function (i) {
                      return e._destroyElement(t, i);
                    })
                    .emulateTransitionEnd(o);
                } else this._destroyElement(t);
              }),
              (e._destroyElement = function (t) {
                i(t).detach().trigger(d.CLOSED).remove();
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this),
                    n = o.data("bs.alert");
                  n || ((n = new t(this)), o.data("bs.alert", n)),
                    "close" === e && n[e](this);
                });
              }),
              (t._handleDismiss = function (t) {
                return function (e) {
                  e && e.preventDefault(), t.close(this);
                };
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
              ]),
              t
            );
          })();
        i(document).on(
          d.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          g._handleDismiss(new g())
        ),
          (i.fn.alert = g._jQueryInterface),
          (i.fn.alert.Constructor = g),
          (i.fn.alert.noConflict = function () {
            return (i.fn.alert = h), g._jQueryInterface;
          });
        var m = i.fn.button,
          v = "active",
          y = "btn",
          w = "focus",
          b = '[data-toggle^="button"]',
          _ = '[data-toggle="buttons"]',
          T = 'input:not([type="hidden"])',
          x = ".active",
          C = ".btn",
          S = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API:
              "focus.bs.button.data-api blur.bs.button.data-api",
          },
          E = (function () {
            function t(t) {
              this._element = t;
            }
            var e = t.prototype;
            return (
              (e.toggle = function () {
                var t = !0,
                  e = !0,
                  o = i(this._element).closest(_)[0];
                if (o) {
                  var n = this._element.querySelector(T);
                  if (n) {
                    if ("radio" === n.type)
                      if (n.checked && this._element.classList.contains(v))
                        t = !1;
                      else {
                        var s = o.querySelector(x);
                        s && i(s).removeClass(v);
                      }
                    if (t) {
                      if (
                        n.hasAttribute("disabled") ||
                        o.hasAttribute("disabled") ||
                        n.classList.contains("disabled") ||
                        o.classList.contains("disabled")
                      )
                        return;
                      (n.checked = !this._element.classList.contains(v)),
                        i(n).trigger("change");
                    }
                    n.focus(), (e = !1);
                  }
                }
                e &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(v)
                  ),
                  t && i(this._element).toggleClass(v);
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.button"),
                  (this._element = null);
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this).data("bs.button");
                  o || ((o = new t(this)), i(this).data("bs.button", o)),
                    "toggle" === e && o[e]();
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
              ]),
              t
            );
          })();
        i(document)
          .on(S.CLICK_DATA_API, b, function (t) {
            t.preventDefault();
            var e = t.target;
            i(e).hasClass(y) || (e = i(e).closest(C)),
              E._jQueryInterface.call(i(e), "toggle");
          })
          .on(S.FOCUS_BLUR_DATA_API, b, function (t) {
            var e = i(t.target).closest(C)[0];
            i(e).toggleClass(w, /^focus(in)?$/.test(t.type));
          }),
          (i.fn.button = E._jQueryInterface),
          (i.fn.button.Constructor = E),
          (i.fn.button.noConflict = function () {
            return (i.fn.button = m), E._jQueryInterface;
          });
        var z = "carousel",
          k = ".bs.carousel",
          $ = i.fn[z],
          A = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
          },
          O = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
          },
          I = "next",
          D = "prev",
          L = "left",
          W = "right",
          H = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api",
          },
          P = "carousel",
          N = "active",
          j = "slide",
          M = "carousel-item-right",
          R = "carousel-item-left",
          q = "carousel-item-next",
          F = "carousel-item-prev",
          B = "pointer-event",
          U = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          Y = { TOUCH: "touch", PEN: "pen" },
          V = (function () {
            function t(t, e) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(e)),
                (this._element = t),
                (this._indicatorsElement = this._element.querySelector(
                  U.INDICATORS
                )),
                (this._touchSupported =
                  "ontouchstart" in document.documentElement ||
                  navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(
                  window.PointerEvent || window.MSPointerEvent
                )),
                this._addEventListeners();
            }
            var e = t.prototype;
            return (
              (e.next = function () {
                this._isSliding || this._slide(I);
              }),
              (e.nextWhenVisible = function () {
                !document.hidden &&
                  i(this._element).is(":visible") &&
                  "hidden" !== i(this._element).css("visibility") &&
                  this.next();
              }),
              (e.prev = function () {
                this._isSliding || this._slide(D);
              }),
              (e.pause = function (t) {
                t || (this._isPaused = !0),
                  this._element.querySelector(U.NEXT_PREV) &&
                    (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (e.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (e.to = function (t) {
                var e = this;
                this._activeElement = this._element.querySelector(
                  U.ACTIVE_ITEM
                );
                var o = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                  if (this._isSliding)
                    i(this._element).one(H.SLID, function () {
                      return e.to(t);
                    });
                  else {
                    if (o === t) return this.pause(), void this.cycle();
                    var n = t > o ? I : D;
                    this._slide(n, this._items[t]);
                  }
              }),
              (e.dispose = function () {
                i(this._element).off(k),
                  i.removeData(this._element, "bs.carousel"),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (e._getConfig = function (t) {
                return (t = r({}, A, t)), c.typeCheckConfig(z, t, O), t;
              }),
              (e._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                  var e = t / this.touchDeltaX;
                  e > 0 && this.prev(), e < 0 && this.next();
                }
              }),
              (e._addEventListeners = function () {
                var t = this;
                this._config.keyboard &&
                  i(this._element).on(H.KEYDOWN, function (e) {
                    return t._keydown(e);
                  }),
                  "hover" === this._config.pause &&
                    i(this._element)
                      .on(H.MOUSEENTER, function (e) {
                        return t.pause(e);
                      })
                      .on(H.MOUSELEAVE, function (e) {
                        return t.cycle(e);
                      }),
                  this._config.touch && this._addTouchEventListeners();
              }),
              (e._addTouchEventListeners = function () {
                var t = this;
                if (this._touchSupported) {
                  var e = function (e) {
                      t._pointerEvent &&
                      Y[e.originalEvent.pointerType.toUpperCase()]
                        ? (t.touchStartX = e.originalEvent.clientX)
                        : t._pointerEvent ||
                          (t.touchStartX = e.originalEvent.touches[0].clientX);
                    },
                    o = function (e) {
                      t._pointerEvent &&
                        Y[e.originalEvent.pointerType.toUpperCase()] &&
                        (t.touchDeltaX =
                          e.originalEvent.clientX - t.touchStartX),
                        t._handleSwipe(),
                        "hover" === t._config.pause &&
                          (t.pause(),
                          t.touchTimeout && clearTimeout(t.touchTimeout),
                          (t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e);
                          }, 500 + t._config.interval)));
                    };
                  i(this._element.querySelectorAll(U.ITEM_IMG)).on(
                    H.DRAG_START,
                    function (t) {
                      return t.preventDefault();
                    }
                  ),
                    this._pointerEvent
                      ? (i(this._element).on(H.POINTERDOWN, function (t) {
                          return e(t);
                        }),
                        i(this._element).on(H.POINTERUP, function (t) {
                          return o(t);
                        }),
                        this._element.classList.add(B))
                      : (i(this._element).on(H.TOUCHSTART, function (t) {
                          return e(t);
                        }),
                        i(this._element).on(H.TOUCHMOVE, function (e) {
                          return (function (e) {
                            e.originalEvent.touches &&
                            e.originalEvent.touches.length > 1
                              ? (t.touchDeltaX = 0)
                              : (t.touchDeltaX =
                                  e.originalEvent.touches[0].clientX -
                                  t.touchStartX);
                          })(e);
                        }),
                        i(this._element).on(H.TOUCHEND, function (t) {
                          return o(t);
                        }));
                }
              }),
              (e._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (e._getItemIndex = function (t) {
                return (
                  (this._items =
                    t && t.parentNode
                      ? [].slice.call(t.parentNode.querySelectorAll(U.ITEM))
                      : []),
                  this._items.indexOf(t)
                );
              }),
              (e._getItemByDirection = function (t, e) {
                var i = t === I,
                  o = t === D,
                  n = this._getItemIndex(e),
                  s = this._items.length - 1;
                if (((o && 0 === n) || (i && n === s)) && !this._config.wrap)
                  return e;
                var r = (n + (t === D ? -1 : 1)) % this._items.length;
                return -1 === r
                  ? this._items[this._items.length - 1]
                  : this._items[r];
              }),
              (e._triggerSlideEvent = function (t, e) {
                var o = this._getItemIndex(t),
                  n = this._getItemIndex(
                    this._element.querySelector(U.ACTIVE_ITEM)
                  ),
                  s = i.Event(H.SLIDE, {
                    relatedTarget: t,
                    direction: e,
                    from: n,
                    to: o,
                  });
                return i(this._element).trigger(s), s;
              }),
              (e._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                  var e = [].slice.call(
                    this._indicatorsElement.querySelectorAll(U.ACTIVE)
                  );
                  i(e).removeClass(N);
                  var o =
                    this._indicatorsElement.children[this._getItemIndex(t)];
                  o && i(o).addClass(N);
                }
              }),
              (e._slide = function (t, e) {
                var o,
                  n,
                  s,
                  r = this,
                  a = this._element.querySelector(U.ACTIVE_ITEM),
                  l = this._getItemIndex(a),
                  h = e || (a && this._getItemByDirection(t, a)),
                  d = this._getItemIndex(h),
                  u = Boolean(this._interval);
                if (
                  (t === I
                    ? ((o = R), (n = q), (s = L))
                    : ((o = M), (n = F), (s = W)),
                  h && i(h).hasClass(N))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(h, s).isDefaultPrevented() &&
                  a &&
                  h
                ) {
                  (this._isSliding = !0),
                    u && this.pause(),
                    this._setActiveIndicatorElement(h);
                  var p = i.Event(H.SLID, {
                    relatedTarget: h,
                    direction: s,
                    from: l,
                    to: d,
                  });
                  if (i(this._element).hasClass(j)) {
                    i(h).addClass(n),
                      c.reflow(h),
                      i(a).addClass(o),
                      i(h).addClass(o);
                    var f = parseInt(h.getAttribute("data-interval"), 10);
                    f
                      ? ((this._config.defaultInterval =
                          this._config.defaultInterval ||
                          this._config.interval),
                        (this._config.interval = f))
                      : (this._config.interval =
                          this._config.defaultInterval ||
                          this._config.interval);
                    var g = c.getTransitionDurationFromElement(a);
                    i(a)
                      .one(c.TRANSITION_END, function () {
                        i(h)
                          .removeClass(o + " " + n)
                          .addClass(N),
                          i(a).removeClass(N + " " + n + " " + o),
                          (r._isSliding = !1),
                          setTimeout(function () {
                            return i(r._element).trigger(p);
                          }, 0);
                      })
                      .emulateTransitionEnd(g);
                  } else
                    i(a).removeClass(N),
                      i(h).addClass(N),
                      (this._isSliding = !1),
                      i(this._element).trigger(p);
                  u && this.cycle();
                }
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this).data("bs.carousel"),
                    n = r({}, A, i(this).data());
                  "object" == typeof e && (n = r({}, n, e));
                  var s = "string" == typeof e ? e : n.slide;
                  if (
                    (o ||
                      ((o = new t(this, n)), i(this).data("bs.carousel", o)),
                    "number" == typeof e)
                  )
                    o.to(e);
                  else if ("string" == typeof s) {
                    if (void 0 === o[s])
                      throw new TypeError('No method named "' + s + '"');
                    o[s]();
                  } else n.interval && n.ride && (o.pause(), o.cycle());
                });
              }),
              (t._dataApiClickHandler = function (e) {
                var o = c.getSelectorFromElement(this);
                if (o) {
                  var n = i(o)[0];
                  if (n && i(n).hasClass(P)) {
                    var s = r({}, i(n).data(), i(this).data()),
                      a = this.getAttribute("data-slide-to");
                    a && (s.interval = !1),
                      t._jQueryInterface.call(i(n), s),
                      a && i(n).data("bs.carousel").to(a),
                      e.preventDefault();
                  }
                }
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return A;
                  },
                },
              ]),
              t
            );
          })();
        i(document).on(H.CLICK_DATA_API, U.DATA_SLIDE, V._dataApiClickHandler),
          i(window).on(H.LOAD_DATA_API, function () {
            for (
              var t = [].slice.call(document.querySelectorAll(U.DATA_RIDE)),
                e = 0,
                o = t.length;
              e < o;
              e++
            ) {
              var n = i(t[e]);
              V._jQueryInterface.call(n, n.data());
            }
          }),
          (i.fn[z] = V._jQueryInterface),
          (i.fn[z].Constructor = V),
          (i.fn[z].noConflict = function () {
            return (i.fn[z] = $), V._jQueryInterface;
          });
        var X = "collapse",
          G = i.fn[X],
          Z = { toggle: !0, parent: "" },
          Q = { toggle: "boolean", parent: "(string|element)" },
          K = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api",
          },
          J = "show",
          tt = "collapse",
          et = "collapsing",
          it = "collapsed",
          ot = "width",
          nt = "height",
          st = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          rt = (function () {
            function t(t, e) {
              (this._isTransitioning = !1),
                (this._element = t),
                (this._config = this._getConfig(e)),
                (this._triggerArray = [].slice.call(
                  document.querySelectorAll(
                    '[data-toggle="collapse"][href="#' +
                      t.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      t.id +
                      '"]'
                  )
                ));
              for (
                var i = [].slice.call(
                    document.querySelectorAll(st.DATA_TOGGLE)
                  ),
                  o = 0,
                  n = i.length;
                o < n;
                o++
              ) {
                var s = i[o],
                  r = c.getSelectorFromElement(s),
                  a = [].slice
                    .call(document.querySelectorAll(r))
                    .filter(function (e) {
                      return e === t;
                    });
                null !== r &&
                  a.length > 0 &&
                  ((this._selector = r), this._triggerArray.push(s));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var e = t.prototype;
            return (
              (e.toggle = function () {
                i(this._element).hasClass(J) ? this.hide() : this.show();
              }),
              (e.show = function () {
                var e,
                  o,
                  n = this;
                if (
                  !this._isTransitioning &&
                  !i(this._element).hasClass(J) &&
                  (this._parent &&
                    0 ===
                      (e = [].slice
                        .call(this._parent.querySelectorAll(st.ACTIVES))
                        .filter(function (t) {
                          return "string" == typeof n._config.parent
                            ? t.getAttribute("data-parent") === n._config.parent
                            : t.classList.contains(tt);
                        })).length &&
                    (e = null),
                  !(
                    e &&
                    (o = i(e).not(this._selector).data("bs.collapse")) &&
                    o._isTransitioning
                  ))
                ) {
                  var s = i.Event(K.SHOW);
                  if ((i(this._element).trigger(s), !s.isDefaultPrevented())) {
                    e &&
                      (t._jQueryInterface.call(
                        i(e).not(this._selector),
                        "hide"
                      ),
                      o || i(e).data("bs.collapse", null));
                    var r = this._getDimension();
                    i(this._element).removeClass(tt).addClass(et),
                      (this._element.style[r] = 0),
                      this._triggerArray.length &&
                        i(this._triggerArray)
                          .removeClass(it)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                      l = c.getTransitionDurationFromElement(this._element);
                    i(this._element)
                      .one(c.TRANSITION_END, function () {
                        i(n._element).removeClass(et).addClass(tt).addClass(J),
                          (n._element.style[r] = ""),
                          n.setTransitioning(!1),
                          i(n._element).trigger(K.SHOWN);
                      })
                      .emulateTransitionEnd(l),
                      (this._element.style[r] = this._element[a] + "px");
                  }
                }
              }),
              (e.hide = function () {
                var t = this;
                if (!this._isTransitioning && i(this._element).hasClass(J)) {
                  var e = i.Event(K.HIDE);
                  if ((i(this._element).trigger(e), !e.isDefaultPrevented())) {
                    var o = this._getDimension();
                    (this._element.style[o] =
                      this._element.getBoundingClientRect()[o] + "px"),
                      c.reflow(this._element),
                      i(this._element)
                        .addClass(et)
                        .removeClass(tt)
                        .removeClass(J);
                    var n = this._triggerArray.length;
                    if (n > 0)
                      for (var s = 0; s < n; s++) {
                        var r = this._triggerArray[s],
                          a = c.getSelectorFromElement(r);
                        if (null !== a)
                          i(
                            [].slice.call(document.querySelectorAll(a))
                          ).hasClass(J) ||
                            i(r).addClass(it).attr("aria-expanded", !1);
                      }
                    this.setTransitioning(!0);
                    this._element.style[o] = "";
                    var l = c.getTransitionDurationFromElement(this._element);
                    i(this._element)
                      .one(c.TRANSITION_END, function () {
                        t.setTransitioning(!1),
                          i(t._element)
                            .removeClass(et)
                            .addClass(tt)
                            .trigger(K.HIDDEN);
                      })
                      .emulateTransitionEnd(l);
                  }
                }
              }),
              (e.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.collapse"),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (e._getConfig = function (t) {
                return (
                  ((t = r({}, Z, t)).toggle = Boolean(t.toggle)),
                  c.typeCheckConfig(X, t, Q),
                  t
                );
              }),
              (e._getDimension = function () {
                return i(this._element).hasClass(ot) ? ot : nt;
              }),
              (e._getParent = function () {
                var e,
                  o = this;
                c.isElement(this._config.parent)
                  ? ((e = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (e = this._config.parent[0]))
                  : (e = document.querySelector(this._config.parent));
                var n =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]',
                  s = [].slice.call(e.querySelectorAll(n));
                return (
                  i(s).each(function (e, i) {
                    o._addAriaAndCollapsedClass(t._getTargetFromElement(i), [
                      i,
                    ]);
                  }),
                  e
                );
              }),
              (e._addAriaAndCollapsedClass = function (t, e) {
                var o = i(t).hasClass(J);
                e.length && i(e).toggleClass(it, !o).attr("aria-expanded", o);
              }),
              (t._getTargetFromElement = function (t) {
                var e = c.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null;
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this),
                    n = o.data("bs.collapse"),
                    s = r({}, Z, o.data(), "object" == typeof e && e ? e : {});
                  if (
                    (!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
                    n || ((n = new t(this, s)), o.data("bs.collapse", n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Z;
                  },
                },
              ]),
              t
            );
          })();
        i(document).on(K.CLICK_DATA_API, st.DATA_TOGGLE, function (t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var e = i(this),
            o = c.getSelectorFromElement(this),
            n = [].slice.call(document.querySelectorAll(o));
          i(n).each(function () {
            var t = i(this),
              o = t.data("bs.collapse") ? "toggle" : e.data();
            rt._jQueryInterface.call(t, o);
          });
        }),
          (i.fn[X] = rt._jQueryInterface),
          (i.fn[X].Constructor = rt),
          (i.fn[X].noConflict = function () {
            return (i.fn[X] = G), rt._jQueryInterface;
          });
        for (
          var at =
              "undefined" != typeof window && "undefined" != typeof document,
            lt = ["Edge", "Trident", "Firefox"],
            ct = 0,
            ht = 0;
          ht < lt.length;
          ht += 1
        )
          if (at && navigator.userAgent.indexOf(lt[ht]) >= 0) {
            ct = 1;
            break;
          }
        var dt =
          at && window.Promise
            ? function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    window.Promise.resolve().then(function () {
                      (e = !1), t();
                    }));
                };
              }
            : function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    setTimeout(function () {
                      (e = !1), t();
                    }, ct));
                };
              };
        function ut(t) {
          return t && "[object Function]" === {}.toString.call(t);
        }
        function pt(t, e) {
          if (1 !== t.nodeType) return [];
          var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
          return e ? i[e] : i;
        }
        function ft(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function gt(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body;
          }
          var e = pt(t),
            i = e.overflow,
            o = e.overflowX,
            n = e.overflowY;
          return /(auto|scroll|overlay)/.test(i + n + o) ? t : gt(ft(t));
        }
        var mt =
            at && !(!window.MSInputMethodContext || !document.documentMode),
          vt = at && /MSIE 10/.test(navigator.userAgent);
        function yt(t) {
          return 11 === t ? mt : 10 === t ? vt : mt || vt;
        }
        function wt(t) {
          if (!t) return document.documentElement;
          for (
            var e = yt(10) ? document.body : null, i = t.offsetParent || null;
            i === e && t.nextElementSibling;

          )
            i = (t = t.nextElementSibling).offsetParent;
          var o = i && i.nodeName;
          return o && "BODY" !== o && "HTML" !== o
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) &&
              "static" === pt(i, "position")
              ? wt(i)
              : i
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
        }
        function bt(t) {
          return null !== t.parentNode ? bt(t.parentNode) : t;
        }
        function _t(t, e) {
          if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
          var i =
              t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = i ? t : e,
            n = i ? e : t,
            s = document.createRange();
          s.setStart(o, 0), s.setEnd(n, 0);
          var r,
            a,
            l = s.commonAncestorContainer;
          if ((t !== l && e !== l) || o.contains(n))
            return "BODY" === (a = (r = l).nodeName) ||
              ("HTML" !== a && wt(r.firstElementChild) !== r)
              ? wt(l)
              : l;
          var c = bt(t);
          return c.host ? _t(c.host, e) : _t(t, bt(e).host);
        }
        function Tt(t) {
          var e =
              "top" ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top")
                ? "scrollTop"
                : "scrollLeft",
            i = t.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || o)[e];
          }
          return t[e];
        }
        function xt(t, e) {
          var i = "x" === e ? "Left" : "Top",
            o = "Left" === i ? "Right" : "Bottom";
          return (
            parseFloat(t["border" + i + "Width"], 10) +
            parseFloat(t["border" + o + "Width"], 10)
          );
        }
        function Ct(t, e, i, o) {
          return Math.max(
            e["offset" + t],
            e["scroll" + t],
            i["client" + t],
            i["offset" + t],
            i["scroll" + t],
            yt(10)
              ? parseInt(i["offset" + t]) +
                  parseInt(o["margin" + ("Height" === t ? "Top" : "Left")]) +
                  parseInt(o["margin" + ("Height" === t ? "Bottom" : "Right")])
              : 0
          );
        }
        function St(t) {
          var e = t.body,
            i = t.documentElement,
            o = yt(10) && getComputedStyle(i);
          return { height: Ct("Height", e, i, o), width: Ct("Width", e, i, o) };
        }
        var Et = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          zt = (function () {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var o = e[i];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, i, o) {
              return i && t(e.prototype, i), o && t(e, o), e;
            };
          })(),
          kt = function (t, e, i) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = i),
              t
            );
          },
          $t =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
              }
              return t;
            };
        function At(t) {
          return $t({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height,
          });
        }
        function Ot(t) {
          var e = {};
          try {
            if (yt(10)) {
              e = t.getBoundingClientRect();
              var i = Tt(t, "top"),
                o = Tt(t, "left");
              (e.top += i), (e.left += o), (e.bottom += i), (e.right += o);
            } else e = t.getBoundingClientRect();
          } catch (t) {}
          var n = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top,
            },
            s = "HTML" === t.nodeName ? St(t.ownerDocument) : {},
            r = s.width || t.clientWidth || n.right - n.left,
            a = s.height || t.clientHeight || n.bottom - n.top,
            l = t.offsetWidth - r,
            c = t.offsetHeight - a;
          if (l || c) {
            var h = pt(t);
            (l -= xt(h, "x")),
              (c -= xt(h, "y")),
              (n.width -= l),
              (n.height -= c);
          }
          return At(n);
        }
        function It(t, e) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = yt(10),
            n = "HTML" === e.nodeName,
            s = Ot(t),
            r = Ot(e),
            a = gt(t),
            l = pt(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
          i &&
            n &&
            ((r.top = Math.max(r.top, 0)), (r.left = Math.max(r.left, 0)));
          var d = At({
            top: s.top - r.top - c,
            left: s.left - r.left - h,
            width: s.width,
            height: s.height,
          });
          if (((d.marginTop = 0), (d.marginLeft = 0), !o && n)) {
            var u = parseFloat(l.marginTop, 10),
              p = parseFloat(l.marginLeft, 10);
            (d.top -= c - u),
              (d.bottom -= c - u),
              (d.left -= h - p),
              (d.right -= h - p),
              (d.marginTop = u),
              (d.marginLeft = p);
          }
          return (
            (o && !i ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
              (d = (function (t, e) {
                var i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  o = Tt(e, "top"),
                  n = Tt(e, "left"),
                  s = i ? -1 : 1;
                return (
                  (t.top += o * s),
                  (t.bottom += o * s),
                  (t.left += n * s),
                  (t.right += n * s),
                  t
                );
              })(d, e)),
            d
          );
        }
        function Dt(t) {
          if (!t || !t.parentElement || yt()) return document.documentElement;
          for (var e = t.parentElement; e && "none" === pt(e, "transform"); )
            e = e.parentElement;
          return e || document.documentElement;
        }
        function Lt(t, e, i, o) {
          var n =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            r = n ? Dt(t) : _t(t, e);
          if ("viewport" === o)
            s = (function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = t.ownerDocument.documentElement,
                o = It(t, i),
                n = Math.max(i.clientWidth, window.innerWidth || 0),
                s = Math.max(i.clientHeight, window.innerHeight || 0),
                r = e ? 0 : Tt(i),
                a = e ? 0 : Tt(i, "left");
              return At({
                top: r - o.top + o.marginTop,
                left: a - o.left + o.marginLeft,
                width: n,
                height: s,
              });
            })(r, n);
          else {
            var a = void 0;
            "scrollParent" === o
              ? "BODY" === (a = gt(ft(e))).nodeName &&
                (a = t.ownerDocument.documentElement)
              : (a = "window" === o ? t.ownerDocument.documentElement : o);
            var l = It(a, r, n);
            if (
              "HTML" !== a.nodeName ||
              (function t(e) {
                var i = e.nodeName;
                if ("BODY" === i || "HTML" === i) return !1;
                if ("fixed" === pt(e, "position")) return !0;
                var o = ft(e);
                return !!o && t(o);
              })(r)
            )
              s = l;
            else {
              var c = St(t.ownerDocument),
                h = c.height,
                d = c.width;
              (s.top += l.top - l.marginTop),
                (s.bottom = h + l.top),
                (s.left += l.left - l.marginLeft),
                (s.right = d + l.left);
            }
          }
          var u = "number" == typeof (i = i || 0);
          return (
            (s.left += u ? i : i.left || 0),
            (s.top += u ? i : i.top || 0),
            (s.right -= u ? i : i.right || 0),
            (s.bottom -= u ? i : i.bottom || 0),
            s
          );
        }
        function Wt(t, e, i, o, n) {
          var s =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf("auto")) return t;
          var r = Lt(i, o, s, n),
            a = {
              top: { width: r.width, height: e.top - r.top },
              right: { width: r.right - e.right, height: r.height },
              bottom: { width: r.width, height: r.bottom - e.bottom },
              left: { width: e.left - r.left, height: r.height },
            },
            l = Object.keys(a)
              .map(function (t) {
                return $t({ key: t }, a[t], {
                  area: ((e = a[t]), e.width * e.height),
                });
                var e;
              })
              .sort(function (t, e) {
                return e.area - t.area;
              }),
            c = l.filter(function (t) {
              var e = t.width,
                o = t.height;
              return e >= i.clientWidth && o >= i.clientHeight;
            }),
            h = c.length > 0 ? c[0].key : l[0].key,
            d = t.split("-")[1];
          return h + (d ? "-" + d : "");
        }
        function Ht(t, e, i) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return It(i, o ? Dt(e) : _t(e, i), o);
        }
        function Pt(t) {
          var e = t.ownerDocument.defaultView.getComputedStyle(t),
            i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            o = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
          return { width: t.offsetWidth + o, height: t.offsetHeight + i };
        }
        function Nt(t) {
          var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
          });
        }
        function jt(t, e, i) {
          i = i.split("-")[0];
          var o = Pt(t),
            n = { width: o.width, height: o.height },
            s = -1 !== ["right", "left"].indexOf(i),
            r = s ? "top" : "left",
            a = s ? "left" : "top",
            l = s ? "height" : "width",
            c = s ? "width" : "height";
          return (
            (n[r] = e[r] + e[l] / 2 - o[l] / 2),
            (n[a] = i === a ? e[a] - o[c] : e[Nt(a)]),
            n
          );
        }
        function Mt(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function Rt(t, e, i) {
          return (
            (void 0 === i
              ? t
              : t.slice(
                  0,
                  (function (t, e, i) {
                    if (Array.prototype.findIndex)
                      return t.findIndex(function (t) {
                        return t[e] === i;
                      });
                    var o = Mt(t, function (t) {
                      return t[e] === i;
                    });
                    return t.indexOf(o);
                  })(t, "name", i)
                )
            ).forEach(function (t) {
              t.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var i = t.function || t.fn;
              t.enabled &&
                ut(i) &&
                ((e.offsets.popper = At(e.offsets.popper)),
                (e.offsets.reference = At(e.offsets.reference)),
                (e = i(e, t)));
            }),
            e
          );
        }
        function qt(t, e) {
          return t.some(function (t) {
            var i = t.name;
            return t.enabled && i === e;
          });
        }
        function Ft(t) {
          for (
            var e = [!1, "ms", "Webkit", "Moz", "O"],
              i = t.charAt(0).toUpperCase() + t.slice(1),
              o = 0;
            o < e.length;
            o++
          ) {
            var n = e[o],
              s = n ? "" + n + i : t;
            if (void 0 !== document.body.style[s]) return s;
          }
          return null;
        }
        function Bt(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window;
        }
        function Ut(t, e, i, o) {
          (i.updateBound = o),
            Bt(t).addEventListener("resize", i.updateBound, { passive: !0 });
          var n = gt(t);
          return (
            (function t(e, i, o, n) {
              var s = "BODY" === e.nodeName,
                r = s ? e.ownerDocument.defaultView : e;
              r.addEventListener(i, o, { passive: !0 }),
                s || t(gt(r.parentNode), i, o, n),
                n.push(r);
            })(n, "scroll", i.updateBound, i.scrollParents),
            (i.scrollElement = n),
            (i.eventsEnabled = !0),
            i
          );
        }
        function Yt() {
          var t, e;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((t = this.reference),
              (e = this.state),
              Bt(t).removeEventListener("resize", e.updateBound),
              e.scrollParents.forEach(function (t) {
                t.removeEventListener("scroll", e.updateBound);
              }),
              (e.updateBound = null),
              (e.scrollParents = []),
              (e.scrollElement = null),
              (e.eventsEnabled = !1),
              e)));
        }
        function Vt(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function Xt(t, e) {
          Object.keys(e).forEach(function (i) {
            var o = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                i
              ) &&
              Vt(e[i]) &&
              (o = "px"),
              (t.style[i] = e[i] + o);
          });
        }
        var Gt = at && /Firefox/i.test(navigator.userAgent);
        function Zt(t, e, i) {
          var o = Mt(t, function (t) {
              return t.name === e;
            }),
            n =
              !!o &&
              t.some(function (t) {
                return t.name === i && t.enabled && t.order < o.order;
              });
          if (!n) {
            var s = "`" + e + "`",
              r = "`" + i + "`";
            console.warn(
              r +
                " modifier is required by " +
                s +
                " modifier in order to work, be sure to include it before " +
                s +
                "!"
            );
          }
          return n;
        }
        var Qt = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          Kt = Qt.slice(3);
        function Jt(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = Kt.indexOf(t),
            o = Kt.slice(i + 1).concat(Kt.slice(0, i));
          return e ? o.reverse() : o;
        }
        var te = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise",
        };
        function ee(t, e, i, o) {
          var n = [0, 0],
            s = -1 !== ["right", "left"].indexOf(o),
            r = t.split(/(\+|\-)/).map(function (t) {
              return t.trim();
            }),
            a = r.indexOf(
              Mt(r, function (t) {
                return -1 !== t.search(/,|\s/);
              })
            );
          r[a] &&
            -1 === r[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    r.slice(0, a).concat([r[a].split(l)[0]]),
                    [r[a].split(l)[1]].concat(r.slice(a + 1)),
                  ]
                : [r];
          return (
            (c = c.map(function (t, o) {
              var n = (1 === o ? !s : s) ? "height" : "width",
                r = !1;
              return t
                .reduce(function (t, e) {
                  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                    ? ((t[t.length - 1] = e), (r = !0), t)
                    : r
                    ? ((t[t.length - 1] += e), (r = !1), t)
                    : t.concat(e);
                }, [])
                .map(function (t) {
                  return (function (t, e, i, o) {
                    var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      s = +n[1],
                      r = n[2];
                    if (!s) return t;
                    if (0 === r.indexOf("%")) {
                      var a = void 0;
                      switch (r) {
                        case "%p":
                          a = i;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = o;
                      }
                      return (At(a)[e] / 100) * s;
                    }
                    if ("vh" === r || "vw" === r)
                      return (
                        (("vh" === r
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        s
                      );
                    return s;
                  })(t, n, e, i);
                });
            })).forEach(function (t, e) {
              t.forEach(function (i, o) {
                Vt(i) && (n[e] += i * ("-" === t[o - 1] ? -1 : 1));
              });
            }),
            n
          );
        }
        var ie = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (t) {
                  var e = t.placement,
                    i = e.split("-")[0],
                    o = e.split("-")[1];
                  if (o) {
                    var n = t.offsets,
                      s = n.reference,
                      r = n.popper,
                      a = -1 !== ["bottom", "top"].indexOf(i),
                      l = a ? "left" : "top",
                      c = a ? "width" : "height",
                      h = {
                        start: kt({}, l, s[l]),
                        end: kt({}, l, s[l] + s[c] - r[c]),
                      };
                    t.offsets.popper = $t({}, r, h[o]);
                  }
                  return t;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (t, e) {
                  var i = e.offset,
                    o = t.placement,
                    n = t.offsets,
                    s = n.popper,
                    r = n.reference,
                    a = o.split("-")[0],
                    l = void 0;
                  return (
                    (l = Vt(+i) ? [+i, 0] : ee(i, s, r, a)),
                    "left" === a
                      ? ((s.top += l[0]), (s.left -= l[1]))
                      : "right" === a
                      ? ((s.top += l[0]), (s.left += l[1]))
                      : "top" === a
                      ? ((s.left += l[0]), (s.top -= l[1]))
                      : "bottom" === a && ((s.left += l[0]), (s.top += l[1])),
                    (t.popper = s),
                    t
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (t, e) {
                  var i = e.boundariesElement || wt(t.instance.popper);
                  t.instance.reference === i && (i = wt(i));
                  var o = Ft("transform"),
                    n = t.instance.popper.style,
                    s = n.top,
                    r = n.left,
                    a = n[o];
                  (n.top = ""), (n.left = ""), (n[o] = "");
                  var l = Lt(
                    t.instance.popper,
                    t.instance.reference,
                    e.padding,
                    i,
                    t.positionFixed
                  );
                  (n.top = s), (n.left = r), (n[o] = a), (e.boundaries = l);
                  var c = e.priority,
                    h = t.offsets.popper,
                    d = {
                      primary: function (t) {
                        var i = h[t];
                        return (
                          h[t] < l[t] &&
                            !e.escapeWithReference &&
                            (i = Math.max(h[t], l[t])),
                          kt({}, t, i)
                        );
                      },
                      secondary: function (t) {
                        var i = "right" === t ? "left" : "top",
                          o = h[i];
                        return (
                          h[t] > l[t] &&
                            !e.escapeWithReference &&
                            (o = Math.min(
                              h[i],
                              l[t] - ("right" === t ? h.width : h.height)
                            )),
                          kt({}, i, o)
                        );
                      },
                    };
                  return (
                    c.forEach(function (t) {
                      var e =
                        -1 !== ["left", "top"].indexOf(t)
                          ? "primary"
                          : "secondary";
                      h = $t({}, h, d[e](t));
                    }),
                    (t.offsets.popper = h),
                    t
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (t) {
                  var e = t.offsets,
                    i = e.popper,
                    o = e.reference,
                    n = t.placement.split("-")[0],
                    s = Math.floor,
                    r = -1 !== ["top", "bottom"].indexOf(n),
                    a = r ? "right" : "bottom",
                    l = r ? "left" : "top",
                    c = r ? "width" : "height";
                  return (
                    i[a] < s(o[l]) && (t.offsets.popper[l] = s(o[l]) - i[c]),
                    i[l] > s(o[a]) && (t.offsets.popper[l] = s(o[a])),
                    t
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, e) {
                  var i;
                  if (!Zt(t.instance.modifiers, "arrow", "keepTogether"))
                    return t;
                  var o = e.element;
                  if ("string" == typeof o) {
                    if (!(o = t.instance.popper.querySelector(o))) return t;
                  } else if (!t.instance.popper.contains(o))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      t
                    );
                  var n = t.placement.split("-")[0],
                    s = t.offsets,
                    r = s.popper,
                    a = s.reference,
                    l = -1 !== ["left", "right"].indexOf(n),
                    c = l ? "height" : "width",
                    h = l ? "Top" : "Left",
                    d = h.toLowerCase(),
                    u = l ? "left" : "top",
                    p = l ? "bottom" : "right",
                    f = Pt(o)[c];
                  a[p] - f < r[d] && (t.offsets.popper[d] -= r[d] - (a[p] - f)),
                    a[d] + f > r[p] && (t.offsets.popper[d] += a[d] + f - r[p]),
                    (t.offsets.popper = At(t.offsets.popper));
                  var g = a[d] + a[c] / 2 - f / 2,
                    m = pt(t.instance.popper),
                    v = parseFloat(m["margin" + h], 10),
                    y = parseFloat(m["border" + h + "Width"], 10),
                    w = g - t.offsets.popper[d] - v - y;
                  return (
                    (w = Math.max(Math.min(r[c] - f, w), 0)),
                    (t.arrowElement = o),
                    (t.offsets.arrow =
                      (kt((i = {}), d, Math.round(w)), kt(i, u, ""), i)),
                    t
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (t, e) {
                  if (qt(t.instance.modifiers, "inner")) return t;
                  if (t.flipped && t.placement === t.originalPlacement)
                    return t;
                  var i = Lt(
                      t.instance.popper,
                      t.instance.reference,
                      e.padding,
                      e.boundariesElement,
                      t.positionFixed
                    ),
                    o = t.placement.split("-")[0],
                    n = Nt(o),
                    s = t.placement.split("-")[1] || "",
                    r = [];
                  switch (e.behavior) {
                    case te.FLIP:
                      r = [o, n];
                      break;
                    case te.CLOCKWISE:
                      r = Jt(o);
                      break;
                    case te.COUNTERCLOCKWISE:
                      r = Jt(o, !0);
                      break;
                    default:
                      r = e.behavior;
                  }
                  return (
                    r.forEach(function (a, l) {
                      if (o !== a || r.length === l + 1) return t;
                      (o = t.placement.split("-")[0]), (n = Nt(o));
                      var c = t.offsets.popper,
                        h = t.offsets.reference,
                        d = Math.floor,
                        u =
                          ("left" === o && d(c.right) > d(h.left)) ||
                          ("right" === o && d(c.left) < d(h.right)) ||
                          ("top" === o && d(c.bottom) > d(h.top)) ||
                          ("bottom" === o && d(c.top) < d(h.bottom)),
                        p = d(c.left) < d(i.left),
                        f = d(c.right) > d(i.right),
                        g = d(c.top) < d(i.top),
                        m = d(c.bottom) > d(i.bottom),
                        v =
                          ("left" === o && p) ||
                          ("right" === o && f) ||
                          ("top" === o && g) ||
                          ("bottom" === o && m),
                        y = -1 !== ["top", "bottom"].indexOf(o),
                        w =
                          !!e.flipVariations &&
                          ((y && "start" === s && p) ||
                            (y && "end" === s && f) ||
                            (!y && "start" === s && g) ||
                            (!y && "end" === s && m));
                      (u || v || w) &&
                        ((t.flipped = !0),
                        (u || v) && (o = r[l + 1]),
                        w &&
                          (s = (function (t) {
                            return "end" === t
                              ? "start"
                              : "start" === t
                              ? "end"
                              : t;
                          })(s)),
                        (t.placement = o + (s ? "-" + s : "")),
                        (t.offsets.popper = $t(
                          {},
                          t.offsets.popper,
                          jt(
                            t.instance.popper,
                            t.offsets.reference,
                            t.placement
                          )
                        )),
                        (t = Rt(t.instance.modifiers, t, "flip")));
                    }),
                    t
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (t) {
                  var e = t.placement,
                    i = e.split("-")[0],
                    o = t.offsets,
                    n = o.popper,
                    s = o.reference,
                    r = -1 !== ["left", "right"].indexOf(i),
                    a = -1 === ["top", "left"].indexOf(i);
                  return (
                    (n[r ? "left" : "top"] =
                      s[i] - (a ? n[r ? "width" : "height"] : 0)),
                    (t.placement = Nt(e)),
                    (t.offsets.popper = At(n)),
                    t
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (t) {
                  if (!Zt(t.instance.modifiers, "hide", "preventOverflow"))
                    return t;
                  var e = t.offsets.reference,
                    i = Mt(t.instance.modifiers, function (t) {
                      return "preventOverflow" === t.name;
                    }).boundaries;
                  if (
                    e.bottom < i.top ||
                    e.left > i.right ||
                    e.top > i.bottom ||
                    e.right < i.left
                  ) {
                    if (!0 === t.hide) return t;
                    (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === t.hide) return t;
                    (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                  }
                  return t;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (t, e) {
                  var i = e.x,
                    o = e.y,
                    n = t.offsets.popper,
                    s = Mt(t.instance.modifiers, function (t) {
                      return "applyStyle" === t.name;
                    }).gpuAcceleration;
                  void 0 !== s &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var r = void 0 !== s ? s : e.gpuAcceleration,
                    a = wt(t.instance.popper),
                    l = Ot(a),
                    c = { position: n.position },
                    h = (function (t, e) {
                      var i = t.offsets,
                        o = i.popper,
                        n = i.reference,
                        s = Math.round,
                        r = Math.floor,
                        a = function (t) {
                          return t;
                        },
                        l = s(n.width),
                        c = s(o.width),
                        h = -1 !== ["left", "right"].indexOf(t.placement),
                        d = -1 !== t.placement.indexOf("-"),
                        u = e ? (h || d || l % 2 == c % 2 ? s : r) : a,
                        p = e ? s : a;
                      return {
                        left: u(
                          l % 2 == 1 && c % 2 == 1 && !d && e
                            ? o.left - 1
                            : o.left
                        ),
                        top: p(o.top),
                        bottom: p(o.bottom),
                        right: u(o.right),
                      };
                    })(t, window.devicePixelRatio < 2 || !Gt),
                    d = "bottom" === i ? "top" : "bottom",
                    u = "right" === o ? "left" : "right",
                    p = Ft("transform"),
                    f = void 0,
                    g = void 0;
                  if (
                    ((g =
                      "bottom" === d
                        ? "HTML" === a.nodeName
                          ? -a.clientHeight + h.bottom
                          : -l.height + h.bottom
                        : h.top),
                    (f =
                      "right" === u
                        ? "HTML" === a.nodeName
                          ? -a.clientWidth + h.right
                          : -l.width + h.right
                        : h.left),
                    r && p)
                  )
                    (c[p] = "translate3d(" + f + "px, " + g + "px, 0)"),
                      (c[d] = 0),
                      (c[u] = 0),
                      (c.willChange = "transform");
                  else {
                    var m = "bottom" === d ? -1 : 1,
                      v = "right" === u ? -1 : 1;
                    (c[d] = g * m),
                      (c[u] = f * v),
                      (c.willChange = d + ", " + u);
                  }
                  var y = { "x-placement": t.placement };
                  return (
                    (t.attributes = $t({}, y, t.attributes)),
                    (t.styles = $t({}, c, t.styles)),
                    (t.arrowStyles = $t({}, t.offsets.arrow, t.arrowStyles)),
                    t
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                  var e, i;
                  return (
                    Xt(t.instance.popper, t.styles),
                    (e = t.instance.popper),
                    (i = t.attributes),
                    Object.keys(i).forEach(function (t) {
                      !1 !== i[t]
                        ? e.setAttribute(t, i[t])
                        : e.removeAttribute(t);
                    }),
                    t.arrowElement &&
                      Object.keys(t.arrowStyles).length &&
                      Xt(t.arrowElement, t.arrowStyles),
                    t
                  );
                },
                onLoad: function (t, e, i, o, n) {
                  var s = Ht(n, e, t, i.positionFixed),
                    r = Wt(
                      i.placement,
                      s,
                      e,
                      t,
                      i.modifiers.flip.boundariesElement,
                      i.modifiers.flip.padding
                    );
                  return (
                    e.setAttribute("x-placement", r),
                    Xt(e, { position: i.positionFixed ? "fixed" : "absolute" }),
                    i
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          oe = (function () {
            function t(e, i) {
              var o = this,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              Et(this, t),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(o.update);
                }),
                (this.update = dt(this.update.bind(this))),
                (this.options = $t({}, t.Defaults, n)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = i && i.jquery ? i[0] : i),
                (this.options.modifiers = {}),
                Object.keys($t({}, t.Defaults.modifiers, n.modifiers)).forEach(
                  function (e) {
                    o.options.modifiers[e] = $t(
                      {},
                      t.Defaults.modifiers[e] || {},
                      n.modifiers ? n.modifiers[e] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (t) {
                    return $t({ name: t }, o.options.modifiers[t]);
                  })
                  .sort(function (t, e) {
                    return t.order - e.order;
                  })),
                this.modifiers.forEach(function (t) {
                  t.enabled &&
                    ut(t.onLoad) &&
                    t.onLoad(o.reference, o.popper, o.options, t, o.state);
                }),
                this.update();
              var s = this.options.eventsEnabled;
              s && this.enableEventListeners(), (this.state.eventsEnabled = s);
            }
            return (
              zt(t, [
                {
                  key: "update",
                  value: function () {
                    return function () {
                      if (!this.state.isDestroyed) {
                        var t = {
                          instance: this,
                          styles: {},
                          arrowStyles: {},
                          attributes: {},
                          flipped: !1,
                          offsets: {},
                        };
                        (t.offsets.reference = Ht(
                          this.state,
                          this.popper,
                          this.reference,
                          this.options.positionFixed
                        )),
                          (t.placement = Wt(
                            this.options.placement,
                            t.offsets.reference,
                            this.popper,
                            this.reference,
                            this.options.modifiers.flip.boundariesElement,
                            this.options.modifiers.flip.padding
                          )),
                          (t.originalPlacement = t.placement),
                          (t.positionFixed = this.options.positionFixed),
                          (t.offsets.popper = jt(
                            this.popper,
                            t.offsets.reference,
                            t.placement
                          )),
                          (t.offsets.popper.position = this.options
                            .positionFixed
                            ? "fixed"
                            : "absolute"),
                          (t = Rt(this.modifiers, t)),
                          this.state.isCreated
                            ? this.options.onUpdate(t)
                            : ((this.state.isCreated = !0),
                              this.options.onCreate(t));
                      }
                    }.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return function () {
                      return (
                        (this.state.isDestroyed = !0),
                        qt(this.modifiers, "applyStyle") &&
                          (this.popper.removeAttribute("x-placement"),
                          (this.popper.style.position = ""),
                          (this.popper.style.top = ""),
                          (this.popper.style.left = ""),
                          (this.popper.style.right = ""),
                          (this.popper.style.bottom = ""),
                          (this.popper.style.willChange = ""),
                          (this.popper.style[Ft("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy &&
                          this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return function () {
                      this.state.eventsEnabled ||
                        (this.state = Ut(
                          this.reference,
                          this.options,
                          this.state,
                          this.scheduleUpdate
                        ));
                    }.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return Yt.call(this);
                  },
                },
              ]),
              t
            );
          })();
        (oe.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (oe.placements = Qt),
          (oe.Defaults = ie);
        var ne = "dropdown",
          se = i.fn[ne],
          re = new RegExp("38|40|27"),
          ae = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
          },
          le = "disabled",
          ce = "show",
          he = "dropup",
          de = "dropright",
          ue = "dropleft",
          pe = "dropdown-menu-right",
          fe = "position-static",
          ge = '[data-toggle="dropdown"]',
          me = ".dropdown form",
          ve = ".dropdown-menu",
          ye = ".navbar-nav",
          we = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          be = "top-start",
          _e = "top-end",
          Te = "bottom-start",
          xe = "bottom-end",
          Ce = "right-start",
          Se = "left-start",
          Ee = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
          },
          ze = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
          },
          ke = (function () {
            function t(t, e) {
              (this._element = t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var e = t.prototype;
            return (
              (e.toggle = function () {
                if (!this._element.disabled && !i(this._element).hasClass(le)) {
                  var e = t._getParentFromElement(this._element),
                    o = i(this._menu).hasClass(ce);
                  if ((t._clearMenus(), !o)) {
                    var n = { relatedTarget: this._element },
                      s = i.Event(ae.SHOW, n);
                    if ((i(e).trigger(s), !s.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === oe)
                          throw new TypeError(
                            "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                          );
                        var r = this._element;
                        "parent" === this._config.reference
                          ? (r = e)
                          : c.isElement(this._config.reference) &&
                            ((r = this._config.reference),
                            void 0 !== this._config.reference.jquery &&
                              (r = this._config.reference[0])),
                          "scrollParent" !== this._config.boundary &&
                            i(e).addClass(fe),
                          (this._popper = new oe(
                            r,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === i(e).closest(ye).length &&
                        i(document.body)
                          .children()
                          .on("mouseover", null, i.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        i(this._menu).toggleClass(ce),
                        i(e).toggleClass(ce).trigger(i.Event(ae.SHOWN, n));
                    }
                  }
                }
              }),
              (e.show = function () {
                if (
                  !(
                    this._element.disabled ||
                    i(this._element).hasClass(le) ||
                    i(this._menu).hasClass(ce)
                  )
                ) {
                  var e = { relatedTarget: this._element },
                    o = i.Event(ae.SHOW, e),
                    n = t._getParentFromElement(this._element);
                  i(n).trigger(o),
                    o.isDefaultPrevented() ||
                      (i(this._menu).toggleClass(ce),
                      i(n).toggleClass(ce).trigger(i.Event(ae.SHOWN, e)));
                }
              }),
              (e.hide = function () {
                if (
                  !this._element.disabled &&
                  !i(this._element).hasClass(le) &&
                  i(this._menu).hasClass(ce)
                ) {
                  var e = { relatedTarget: this._element },
                    o = i.Event(ae.HIDE, e),
                    n = t._getParentFromElement(this._element);
                  i(n).trigger(o),
                    o.isDefaultPrevented() ||
                      (i(this._menu).toggleClass(ce),
                      i(n).toggleClass(ce).trigger(i.Event(ae.HIDDEN, e)));
                }
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.dropdown"),
                  i(this._element).off(".bs.dropdown"),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (e.update = function () {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (e._addEventListeners = function () {
                var t = this;
                i(this._element).on(ae.CLICK, function (e) {
                  e.preventDefault(), e.stopPropagation(), t.toggle();
                });
              }),
              (e._getConfig = function (t) {
                return (
                  (t = r(
                    {},
                    this.constructor.Default,
                    i(this._element).data(),
                    t
                  )),
                  c.typeCheckConfig(ne, t, this.constructor.DefaultType),
                  t
                );
              }),
              (e._getMenuElement = function () {
                if (!this._menu) {
                  var e = t._getParentFromElement(this._element);
                  e && (this._menu = e.querySelector(ve));
                }
                return this._menu;
              }),
              (e._getPlacement = function () {
                var t = i(this._element.parentNode),
                  e = Te;
                return (
                  t.hasClass(he)
                    ? ((e = be), i(this._menu).hasClass(pe) && (e = _e))
                    : t.hasClass(de)
                    ? (e = Ce)
                    : t.hasClass(ue)
                    ? (e = Se)
                    : i(this._menu).hasClass(pe) && (e = xe),
                  e
                );
              }),
              (e._detectNavbar = function () {
                return i(this._element).closest(".navbar").length > 0;
              }),
              (e._getOffset = function () {
                var t = this,
                  e = {};
                return (
                  "function" == typeof this._config.offset
                    ? (e.fn = function (e) {
                        return (
                          (e.offsets = r(
                            {},
                            e.offsets,
                            t._config.offset(e.offsets, t._element) || {}
                          )),
                          e
                        );
                      })
                    : (e.offset = this._config.offset),
                  e
                );
              }),
              (e._getPopperConfig = function () {
                var t = {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                };
                return (
                  "static" === this._config.display &&
                    (t.modifiers.applyStyle = { enabled: !1 }),
                  t
                );
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this).data("bs.dropdown");
                  if (
                    (o ||
                      ((o = new t(this, "object" == typeof e ? e : null)),
                      i(this).data("bs.dropdown", o)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === o[e])
                      throw new TypeError('No method named "' + e + '"');
                    o[e]();
                  }
                });
              }),
              (t._clearMenus = function (e) {
                if (
                  !e ||
                  (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                )
                  for (
                    var o = [].slice.call(document.querySelectorAll(ge)),
                      n = 0,
                      s = o.length;
                    n < s;
                    n++
                  ) {
                    var r = t._getParentFromElement(o[n]),
                      a = i(o[n]).data("bs.dropdown"),
                      l = { relatedTarget: o[n] };
                    if ((e && "click" === e.type && (l.clickEvent = e), a)) {
                      var c = a._menu;
                      if (
                        i(r).hasClass(ce) &&
                        !(
                          e &&
                          (("click" === e.type &&
                            /input|textarea/i.test(e.target.tagName)) ||
                            ("keyup" === e.type && 9 === e.which)) &&
                          i.contains(r, e.target)
                        )
                      ) {
                        var h = i.Event(ae.HIDE, l);
                        i(r).trigger(h),
                          h.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              i(document.body)
                                .children()
                                .off("mouseover", null, i.noop),
                            o[n].setAttribute("aria-expanded", "false"),
                            i(c).removeClass(ce),
                            i(r)
                              .removeClass(ce)
                              .trigger(i.Event(ae.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (t._getParentFromElement = function (t) {
                var e,
                  i = c.getSelectorFromElement(t);
                return i && (e = document.querySelector(i)), e || t.parentNode;
              }),
              (t._dataApiKeydownHandler = function (e) {
                if (
                  (/input|textarea/i.test(e.target.tagName)
                    ? !(
                        32 === e.which ||
                        (27 !== e.which &&
                          ((40 !== e.which && 38 !== e.which) ||
                            i(e.target).closest(ve).length))
                      )
                    : re.test(e.which)) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !this.disabled && !i(this).hasClass(le))
                ) {
                  var o = t._getParentFromElement(this),
                    n = i(o).hasClass(ce);
                  if (n && (!n || (27 !== e.which && 32 !== e.which))) {
                    var s = [].slice.call(o.querySelectorAll(we));
                    if (0 !== s.length) {
                      var r = s.indexOf(e.target);
                      38 === e.which && r > 0 && r--,
                        40 === e.which && r < s.length - 1 && r++,
                        r < 0 && (r = 0),
                        s[r].focus();
                    }
                  } else {
                    if (27 === e.which) {
                      var a = o.querySelector(ge);
                      i(a).trigger("focus");
                    }
                    i(this).trigger("click");
                  }
                }
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Ee;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return ze;
                  },
                },
              ]),
              t
            );
          })();
        i(document)
          .on(ae.KEYDOWN_DATA_API, ge, ke._dataApiKeydownHandler)
          .on(ae.KEYDOWN_DATA_API, ve, ke._dataApiKeydownHandler)
          .on(ae.CLICK_DATA_API + " " + ae.KEYUP_DATA_API, ke._clearMenus)
          .on(ae.CLICK_DATA_API, ge, function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              ke._jQueryInterface.call(i(this), "toggle");
          })
          .on(ae.CLICK_DATA_API, me, function (t) {
            t.stopPropagation();
          }),
          (i.fn[ne] = ke._jQueryInterface),
          (i.fn[ne].Constructor = ke),
          (i.fn[ne].noConflict = function () {
            return (i.fn[ne] = se), ke._jQueryInterface;
          });
        var $e = i.fn.modal,
          Ae = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          Oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          Ie = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api",
          },
          De = "modal-dialog-scrollable",
          Le = "modal-scrollbar-measure",
          We = "modal-backdrop",
          He = "modal-open",
          Pe = "fade",
          Ne = "show",
          je = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
          },
          Me = (function () {
            function t(t, e) {
              (this._config = this._getConfig(e)),
                (this._element = t),
                (this._dialog = t.querySelector(je.DIALOG)),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollbarWidth = 0);
            }
            var e = t.prototype;
            return (
              (e.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
              }),
              (e.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                  i(this._element).hasClass(Pe) && (this._isTransitioning = !0);
                  var o = i.Event(Ie.SHOW, { relatedTarget: t });
                  i(this._element).trigger(o),
                    this._isShown ||
                      o.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      i(this._element).on(
                        Ie.CLICK_DISMISS,
                        je.DATA_DISMISS,
                        function (t) {
                          return e.hide(t);
                        }
                      ),
                      i(this._dialog).on(Ie.MOUSEDOWN_DISMISS, function () {
                        i(e._element).one(Ie.MOUSEUP_DISMISS, function (t) {
                          i(t.target).is(e._element) &&
                            (e._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return e._showElement(t);
                      }));
                }
              }),
              (e.hide = function (t) {
                var e = this;
                if (
                  (t && t.preventDefault(),
                  this._isShown && !this._isTransitioning)
                ) {
                  var o = i.Event(Ie.HIDE);
                  if (
                    (i(this._element).trigger(o),
                    this._isShown && !o.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var n = i(this._element).hasClass(Pe);
                    if (
                      (n && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      i(document).off(Ie.FOCUSIN),
                      i(this._element).removeClass(Ne),
                      i(this._element).off(Ie.CLICK_DISMISS),
                      i(this._dialog).off(Ie.MOUSEDOWN_DISMISS),
                      n)
                    ) {
                      var s = c.getTransitionDurationFromElement(this._element);
                      i(this._element)
                        .one(c.TRANSITION_END, function (t) {
                          return e._hideModal(t);
                        })
                        .emulateTransitionEnd(s);
                    } else this._hideModal();
                  }
                }
              }),
              (e.dispose = function () {
                [window, this._element, this._dialog].forEach(function (t) {
                  return i(t).off(".bs.modal");
                }),
                  i(document).off(Ie.FOCUSIN),
                  i.removeData(this._element, "bs.modal"),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._isTransitioning = null),
                  (this._scrollbarWidth = null);
              }),
              (e.handleUpdate = function () {
                this._adjustDialog();
              }),
              (e._getConfig = function (t) {
                return (t = r({}, Ae, t)), c.typeCheckConfig("modal", t, Oe), t;
              }),
              (e._showElement = function (t) {
                var e = this,
                  o = i(this._element).hasClass(Pe);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  i(this._dialog).hasClass(De)
                    ? (this._dialog.querySelector(je.MODAL_BODY).scrollTop = 0)
                    : (this._element.scrollTop = 0),
                  o && c.reflow(this._element),
                  i(this._element).addClass(Ne),
                  this._config.focus && this._enforceFocus();
                var n = i.Event(Ie.SHOWN, { relatedTarget: t }),
                  s = function () {
                    e._config.focus && e._element.focus(),
                      (e._isTransitioning = !1),
                      i(e._element).trigger(n);
                  };
                if (o) {
                  var r = c.getTransitionDurationFromElement(this._dialog);
                  i(this._dialog)
                    .one(c.TRANSITION_END, s)
                    .emulateTransitionEnd(r);
                } else s();
              }),
              (e._enforceFocus = function () {
                var t = this;
                i(document)
                  .off(Ie.FOCUSIN)
                  .on(Ie.FOCUSIN, function (e) {
                    document !== e.target &&
                      t._element !== e.target &&
                      0 === i(t._element).has(e.target).length &&
                      t._element.focus();
                  });
              }),
              (e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard
                  ? i(this._element).on(Ie.KEYDOWN_DISMISS, function (e) {
                      27 === e.which && (e.preventDefault(), t.hide());
                    })
                  : this._isShown || i(this._element).off(Ie.KEYDOWN_DISMISS);
              }),
              (e._setResizeEvent = function () {
                var t = this;
                this._isShown
                  ? i(window).on(Ie.RESIZE, function (e) {
                      return t.handleUpdate(e);
                    })
                  : i(window).off(Ie.RESIZE);
              }),
              (e._hideModal = function () {
                var t = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    i(document.body).removeClass(He),
                      t._resetAdjustments(),
                      t._resetScrollbar(),
                      i(t._element).trigger(Ie.HIDDEN);
                  });
              }),
              (e._removeBackdrop = function () {
                this._backdrop &&
                  (i(this._backdrop).remove(), (this._backdrop = null));
              }),
              (e._showBackdrop = function (t) {
                var e = this,
                  o = i(this._element).hasClass(Pe) ? Pe : "";
                if (this._isShown && this._config.backdrop) {
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = We),
                    o && this._backdrop.classList.add(o),
                    i(this._backdrop).appendTo(document.body),
                    i(this._element).on(Ie.CLICK_DISMISS, function (t) {
                      e._ignoreBackdropClick
                        ? (e._ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          ("static" === e._config.backdrop
                            ? e._element.focus()
                            : e.hide());
                    }),
                    o && c.reflow(this._backdrop),
                    i(this._backdrop).addClass(Ne),
                    !t)
                  )
                    return;
                  if (!o) return void t();
                  var n = c.getTransitionDurationFromElement(this._backdrop);
                  i(this._backdrop)
                    .one(c.TRANSITION_END, t)
                    .emulateTransitionEnd(n);
                } else if (!this._isShown && this._backdrop) {
                  i(this._backdrop).removeClass(Ne);
                  var s = function () {
                    e._removeBackdrop(), t && t();
                  };
                  if (i(this._element).hasClass(Pe)) {
                    var r = c.getTransitionDurationFromElement(this._backdrop);
                    i(this._backdrop)
                      .one(c.TRANSITION_END, s)
                      .emulateTransitionEnd(r);
                  } else s();
                } else t && t();
              }),
              (e._adjustDialog = function () {
                var t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  t &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !t &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (e._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (e._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  t.left + t.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (e._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                  var e = [].slice.call(
                      document.querySelectorAll(je.FIXED_CONTENT)
                    ),
                    o = [].slice.call(
                      document.querySelectorAll(je.STICKY_CONTENT)
                    );
                  i(e).each(function (e, o) {
                    var n = o.style.paddingRight,
                      s = i(o).css("padding-right");
                    i(o)
                      .data("padding-right", n)
                      .css(
                        "padding-right",
                        parseFloat(s) + t._scrollbarWidth + "px"
                      );
                  }),
                    i(o).each(function (e, o) {
                      var n = o.style.marginRight,
                        s = i(o).css("margin-right");
                      i(o)
                        .data("margin-right", n)
                        .css(
                          "margin-right",
                          parseFloat(s) - t._scrollbarWidth + "px"
                        );
                    });
                  var n = document.body.style.paddingRight,
                    s = i(document.body).css("padding-right");
                  i(document.body)
                    .data("padding-right", n)
                    .css(
                      "padding-right",
                      parseFloat(s) + this._scrollbarWidth + "px"
                    );
                }
                i(document.body).addClass(He);
              }),
              (e._resetScrollbar = function () {
                var t = [].slice.call(
                  document.querySelectorAll(je.FIXED_CONTENT)
                );
                i(t).each(function (t, e) {
                  var o = i(e).data("padding-right");
                  i(e).removeData("padding-right"),
                    (e.style.paddingRight = o || "");
                });
                var e = [].slice.call(
                  document.querySelectorAll("" + je.STICKY_CONTENT)
                );
                i(e).each(function (t, e) {
                  var o = i(e).data("margin-right");
                  void 0 !== o &&
                    i(e).css("margin-right", o).removeData("margin-right");
                });
                var o = i(document.body).data("padding-right");
                i(document.body).removeData("padding-right"),
                  (document.body.style.paddingRight = o || "");
              }),
              (e._getScrollbarWidth = function () {
                var t = document.createElement("div");
                (t.className = Le), document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e;
              }),
              (t._jQueryInterface = function (e, o) {
                return this.each(function () {
                  var n = i(this).data("bs.modal"),
                    s = r(
                      {},
                      Ae,
                      i(this).data(),
                      "object" == typeof e && e ? e : {}
                    );
                  if (
                    (n || ((n = new t(this, s)), i(this).data("bs.modal", n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e](o);
                  } else s.show && n.show(o);
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Ae;
                  },
                },
              ]),
              t
            );
          })();
        i(document).on(Ie.CLICK_DATA_API, je.DATA_TOGGLE, function (t) {
          var e,
            o = this,
            n = c.getSelectorFromElement(this);
          n && (e = document.querySelector(n));
          var s = i(e).data("bs.modal")
            ? "toggle"
            : r({}, i(e).data(), i(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            t.preventDefault();
          var a = i(e).one(Ie.SHOW, function (t) {
            t.isDefaultPrevented() ||
              a.one(Ie.HIDDEN, function () {
                i(o).is(":visible") && o.focus();
              });
          });
          Me._jQueryInterface.call(i(e), s, this);
        }),
          (i.fn.modal = Me._jQueryInterface),
          (i.fn.modal.Constructor = Me),
          (i.fn.modal.noConflict = function () {
            return (i.fn.modal = $e), Me._jQueryInterface;
          });
        var Re = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
          ],
          qe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          },
          Fe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
          Be =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
        function Ue(t, e, i) {
          if (0 === t.length) return t;
          if (i && "function" == typeof i) return i(t);
          for (
            var o = new window.DOMParser().parseFromString(t, "text/html"),
              n = Object.keys(e),
              s = [].slice.call(o.body.querySelectorAll("*")),
              r = function (t, i) {
                var o = s[t],
                  r = o.nodeName.toLowerCase();
                if (-1 === n.indexOf(o.nodeName.toLowerCase()))
                  return o.parentNode.removeChild(o), "continue";
                var a = [].slice.call(o.attributes),
                  l = [].concat(e["*"] || [], e[r] || []);
                a.forEach(function (t) {
                  (function (t, e) {
                    var i = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(i))
                      return (
                        -1 === Re.indexOf(i) ||
                        Boolean(t.nodeValue.match(Fe) || t.nodeValue.match(Be))
                      );
                    for (
                      var o = e.filter(function (t) {
                          return t instanceof RegExp;
                        }),
                        n = 0,
                        s = o.length;
                      n < s;
                      n++
                    )
                      if (i.match(o[n])) return !0;
                    return !1;
                  })(t, l) || o.removeAttribute(t.nodeName);
                });
              },
              a = 0,
              l = s.length;
            a < l;
            a++
          )
            r(a);
          return o.body.innerHTML;
        }
        var Ye = "tooltip",
          Ve = i.fn.tooltip,
          Xe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          Ge = ["sanitize", "whiteList", "sanitizeFn"],
          Ze = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
          },
          Qe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          },
          Ke = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: qe,
          },
          Je = "show",
          ti = "out",
          ei = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
          },
          ii = "fade",
          oi = "show",
          ni = ".tooltip-inner",
          si = ".arrow",
          ri = "hover",
          ai = "focus",
          li = "click",
          ci = "manual",
          hi = (function () {
            function t(t, e) {
              if (void 0 === oe)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = t),
                (this.config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
            }
            var e = t.prototype;
            return (
              (e.enable = function () {
                this._isEnabled = !0;
              }),
              (e.disable = function () {
                this._isEnabled = !1;
              }),
              (e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (e.toggle = function (t) {
                if (this._isEnabled)
                  if (t) {
                    var e = this.constructor.DATA_KEY,
                      o = i(t.currentTarget).data(e);
                    o ||
                      ((o = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      i(t.currentTarget).data(e, o)),
                      (o._activeTrigger.click = !o._activeTrigger.click),
                      o._isWithActiveTrigger()
                        ? o._enter(null, o)
                        : o._leave(null, o);
                  } else {
                    if (i(this.getTipElement()).hasClass(oi))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (e.dispose = function () {
                clearTimeout(this._timeout),
                  i.removeData(this.element, this.constructor.DATA_KEY),
                  i(this.element).off(this.constructor.EVENT_KEY),
                  i(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && i(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (e.show = function () {
                var t = this;
                if ("none" === i(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var e = i.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  i(this.element).trigger(e);
                  var o = c.findShadowRoot(this.element),
                    n = i.contains(
                      null !== o
                        ? o
                        : this.element.ownerDocument.documentElement,
                      this.element
                    );
                  if (e.isDefaultPrevented() || !n) return;
                  var s = this.getTipElement(),
                    r = c.getUID(this.constructor.NAME);
                  s.setAttribute("id", r),
                    this.element.setAttribute("aria-describedby", r),
                    this.setContent(),
                    this.config.animation && i(s).addClass(ii);
                  var a =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, s, this.element)
                        : this.config.placement,
                    l = this._getAttachment(a);
                  this.addAttachmentClass(l);
                  var h = this._getContainer();
                  i(s).data(this.constructor.DATA_KEY, this),
                    i.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || i(s).appendTo(h),
                    i(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new oe(this.element, s, {
                      placement: l,
                      modifiers: {
                        offset: this._getOffset(),
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: si },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function (e) {
                        e.originalPlacement !== e.placement &&
                          t._handlePopperPlacementChange(e);
                      },
                      onUpdate: function (e) {
                        return t._handlePopperPlacementChange(e);
                      },
                    })),
                    i(s).addClass(oi),
                    "ontouchstart" in document.documentElement &&
                      i(document.body).children().on("mouseover", null, i.noop);
                  var d = function () {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    (t._hoverState = null),
                      i(t.element).trigger(t.constructor.Event.SHOWN),
                      e === ti && t._leave(null, t);
                  };
                  if (i(this.tip).hasClass(ii)) {
                    var u = c.getTransitionDurationFromElement(this.tip);
                    i(this.tip)
                      .one(c.TRANSITION_END, d)
                      .emulateTransitionEnd(u);
                  } else d();
                }
              }),
              (e.hide = function (t) {
                var e = this,
                  o = this.getTipElement(),
                  n = i.Event(this.constructor.Event.HIDE),
                  s = function () {
                    e._hoverState !== Je &&
                      o.parentNode &&
                      o.parentNode.removeChild(o),
                      e._cleanTipClass(),
                      e.element.removeAttribute("aria-describedby"),
                      i(e.element).trigger(e.constructor.Event.HIDDEN),
                      null !== e._popper && e._popper.destroy(),
                      t && t();
                  };
                if ((i(this.element).trigger(n), !n.isDefaultPrevented())) {
                  if (
                    (i(o).removeClass(oi),
                    "ontouchstart" in document.documentElement &&
                      i(document.body)
                        .children()
                        .off("mouseover", null, i.noop),
                    (this._activeTrigger[li] = !1),
                    (this._activeTrigger[ai] = !1),
                    (this._activeTrigger[ri] = !1),
                    i(this.tip).hasClass(ii))
                  ) {
                    var r = c.getTransitionDurationFromElement(o);
                    i(o).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
                  } else s();
                  this._hoverState = "";
                }
              }),
              (e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (e.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (e.addAttachmentClass = function (t) {
                i(this.getTipElement()).addClass("bs-tooltip-" + t);
              }),
              (e.getTipElement = function () {
                return (
                  (this.tip = this.tip || i(this.config.template)[0]), this.tip
                );
              }),
              (e.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(
                  i(t.querySelectorAll(ni)),
                  this.getTitle()
                ),
                  i(t).removeClass(ii + " " + oi);
              }),
              (e.setElementContent = function (t, e) {
                "object" != typeof e || (!e.nodeType && !e.jquery)
                  ? this.config.html
                    ? (this.config.sanitize &&
                        (e = Ue(
                          e,
                          this.config.whiteList,
                          this.config.sanitizeFn
                        )),
                      t.html(e))
                    : t.text(e)
                  : this.config.html
                  ? i(e).parent().is(t) || t.empty().append(e)
                  : t.text(i(e).text());
              }),
              (e.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return (
                  t ||
                    (t =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  t
                );
              }),
              (e._getOffset = function () {
                var t = this,
                  e = {};
                return (
                  "function" == typeof this.config.offset
                    ? (e.fn = function (e) {
                        return (
                          (e.offsets = r(
                            {},
                            e.offsets,
                            t.config.offset(e.offsets, t.element) || {}
                          )),
                          e
                        );
                      })
                    : (e.offset = this.config.offset),
                  e
                );
              }),
              (e._getContainer = function () {
                return !1 === this.config.container
                  ? document.body
                  : c.isElement(this.config.container)
                  ? i(this.config.container)
                  : i(document).find(this.config.container);
              }),
              (e._getAttachment = function (t) {
                return Qe[t.toUpperCase()];
              }),
              (e._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (e) {
                  if ("click" === e)
                    i(t.element).on(
                      t.constructor.Event.CLICK,
                      t.config.selector,
                      function (e) {
                        return t.toggle(e);
                      }
                    );
                  else if (e !== ci) {
                    var o =
                        e === ri
                          ? t.constructor.Event.MOUSEENTER
                          : t.constructor.Event.FOCUSIN,
                      n =
                        e === ri
                          ? t.constructor.Event.MOUSELEAVE
                          : t.constructor.Event.FOCUSOUT;
                    i(t.element)
                      .on(o, t.config.selector, function (e) {
                        return t._enter(e);
                      })
                      .on(n, t.config.selector, function (e) {
                        return t._leave(e);
                      });
                  }
                }),
                  i(this.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      t.element && t.hide();
                    }),
                  this.config.selector
                    ? (this.config = r({}, this.config, {
                        trigger: "manual",
                        selector: "",
                      }))
                    : this._fixTitle();
              }),
              (e._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (e._enter = function (t, e) {
                var o = this.constructor.DATA_KEY;
                (e = e || i(t.currentTarget).data(o)) ||
                  ((e = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  i(t.currentTarget).data(o, e)),
                  t && (e._activeTrigger["focusin" === t.type ? ai : ri] = !0),
                  i(e.getTipElement()).hasClass(oi) || e._hoverState === Je
                    ? (e._hoverState = Je)
                    : (clearTimeout(e._timeout),
                      (e._hoverState = Je),
                      e.config.delay && e.config.delay.show
                        ? (e._timeout = setTimeout(function () {
                            e._hoverState === Je && e.show();
                          }, e.config.delay.show))
                        : e.show());
              }),
              (e._leave = function (t, e) {
                var o = this.constructor.DATA_KEY;
                (e = e || i(t.currentTarget).data(o)) ||
                  ((e = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  i(t.currentTarget).data(o, e)),
                  t && (e._activeTrigger["focusout" === t.type ? ai : ri] = !1),
                  e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                    (e._hoverState = ti),
                    e.config.delay && e.config.delay.hide
                      ? (e._timeout = setTimeout(function () {
                          e._hoverState === ti && e.hide();
                        }, e.config.delay.hide))
                      : e.hide());
              }),
              (e._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
                return !1;
              }),
              (e._getConfig = function (t) {
                var e = i(this.element).data();
                return (
                  Object.keys(e).forEach(function (t) {
                    -1 !== Ge.indexOf(t) && delete e[t];
                  }),
                  "number" ==
                    typeof (t = r(
                      {},
                      this.constructor.Default,
                      e,
                      "object" == typeof t && t ? t : {}
                    )).delay && (t.delay = { show: t.delay, hide: t.delay }),
                  "number" == typeof t.title && (t.title = t.title.toString()),
                  "number" == typeof t.content &&
                    (t.content = t.content.toString()),
                  c.typeCheckConfig(Ye, t, this.constructor.DefaultType),
                  t.sanitize &&
                    (t.template = Ue(t.template, t.whiteList, t.sanitizeFn)),
                  t
                );
              }),
              (e._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                  for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] &&
                      (t[e] = this.config[e]);
                return t;
              }),
              (e._cleanTipClass = function () {
                var t = i(this.getTipElement()),
                  e = t.attr("class").match(Xe);
                null !== e && e.length && t.removeClass(e.join(""));
              }),
              (e._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                (this.tip = e.popper),
                  this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(t.placement));
              }),
              (e._fixTransition = function () {
                var t = this.getTipElement(),
                  e = this.config.animation;
                null === t.getAttribute("x-placement") &&
                  (i(t).removeClass(ii),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = e));
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this).data("bs.tooltip"),
                    n = "object" == typeof e && e;
                  if (
                    (o || !/dispose|hide/.test(e)) &&
                    (o || ((o = new t(this, n)), i(this).data("bs.tooltip", o)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === o[e])
                      throw new TypeError('No method named "' + e + '"');
                    o[e]();
                  }
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Ke;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return Ye;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return "bs.tooltip";
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return ei;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return ".bs.tooltip";
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return Ze;
                  },
                },
              ]),
              t
            );
          })();
        (i.fn.tooltip = hi._jQueryInterface),
          (i.fn.tooltip.Constructor = hi),
          (i.fn.tooltip.noConflict = function () {
            return (i.fn.tooltip = Ve), hi._jQueryInterface;
          });
        var di = "popover",
          ui = i.fn.popover,
          pi = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          fi = r({}, hi.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          gi = r({}, hi.DefaultType, { content: "(string|element|function)" }),
          mi = "fade",
          vi = "show",
          yi = ".popover-header",
          wi = ".popover-body",
          bi = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
          },
          _i = (function (t) {
            var e, o;
            function s() {
              return t.apply(this, arguments) || this;
            }
            (o = t),
              ((e = s).prototype = Object.create(o.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = o);
            var r = s.prototype;
            return (
              (r.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (r.addAttachmentClass = function (t) {
                i(this.getTipElement()).addClass("bs-popover-" + t);
              }),
              (r.getTipElement = function () {
                return (
                  (this.tip = this.tip || i(this.config.template)[0]), this.tip
                );
              }),
              (r.setContent = function () {
                var t = i(this.getTipElement());
                this.setElementContent(t.find(yi), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)),
                  this.setElementContent(t.find(wi), e),
                  t.removeClass(mi + " " + vi);
              }),
              (r._getContent = function () {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (r._cleanTipClass = function () {
                var t = i(this.getTipElement()),
                  e = t.attr("class").match(pi);
                null !== e && e.length > 0 && t.removeClass(e.join(""));
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var e = i(this).data("bs.popover"),
                    o = "object" == typeof t ? t : null;
                  if (
                    (e || !/dispose|hide/.test(t)) &&
                    (e || ((e = new s(this, o)), i(this).data("bs.popover", e)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === e[t])
                      throw new TypeError('No method named "' + t + '"');
                    e[t]();
                  }
                });
              }),
              n(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return fi;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return di;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return "bs.popover";
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return bi;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return ".bs.popover";
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return gi;
                  },
                },
              ]),
              s
            );
          })(hi);
        (i.fn.popover = _i._jQueryInterface),
          (i.fn.popover.Constructor = _i),
          (i.fn.popover.noConflict = function () {
            return (i.fn.popover = ui), _i._jQueryInterface;
          });
        var Ti = "scrollspy",
          xi = i.fn[Ti],
          Ci = { offset: 10, method: "auto", target: "" },
          Si = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          Ei = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api",
          },
          zi = "dropdown-item",
          ki = "active",
          $i = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle",
          },
          Ai = "offset",
          Oi = "position",
          Ii = (function () {
            function t(t, e) {
              var o = this;
              (this._element = t),
                (this._scrollElement = "BODY" === t.tagName ? window : t),
                (this._config = this._getConfig(e)),
                (this._selector =
                  this._config.target +
                  " " +
                  $i.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  $i.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  $i.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                i(this._scrollElement).on(Ei.SCROLL, function (t) {
                  return o._process(t);
                }),
                this.refresh(),
                this._process();
            }
            var e = t.prototype;
            return (
              (e.refresh = function () {
                var t = this,
                  e =
                    this._scrollElement === this._scrollElement.window
                      ? Ai
                      : Oi,
                  o = "auto" === this._config.method ? e : this._config.method,
                  n = o === Oi ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  [].slice
                    .call(document.querySelectorAll(this._selector))
                    .map(function (t) {
                      var e,
                        s = c.getSelectorFromElement(t);
                      if ((s && (e = document.querySelector(s)), e)) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) return [i(e)[o]().top + n, s];
                      }
                      return null;
                    })
                    .filter(function (t) {
                      return t;
                    })
                    .sort(function (t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function (e) {
                      t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.scrollspy"),
                  i(this._scrollElement).off(".bs.scrollspy"),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (e._getConfig = function (t) {
                if (
                  "string" !=
                  typeof (t = r({}, Ci, "object" == typeof t && t ? t : {}))
                    .target
                ) {
                  var e = i(t.target).attr("id");
                  e || ((e = c.getUID(Ti)), i(t.target).attr("id", e)),
                    (t.target = "#" + e);
                }
                return c.typeCheckConfig(Ti, t, Si), t;
              }),
              (e._getScrollTop = function () {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (e._getScrollHeight = function () {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (e._getOffsetHeight = function () {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (e._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  i = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                  var o = this._targets[this._targets.length - 1];
                  this._activeTarget !== o && this._activate(o);
                } else {
                  if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var n = this._offsets.length; n--; ) {
                    this._activeTarget !== this._targets[n] &&
                      t >= this._offsets[n] &&
                      (void 0 === this._offsets[n + 1] ||
                        t < this._offsets[n + 1]) &&
                      this._activate(this._targets[n]);
                  }
                }
              }),
              (e._activate = function (t) {
                (this._activeTarget = t), this._clear();
                var e = this._selector.split(",").map(function (e) {
                    return (
                      e +
                      '[data-target="' +
                      t +
                      '"],' +
                      e +
                      '[href="' +
                      t +
                      '"]'
                    );
                  }),
                  o = i([].slice.call(document.querySelectorAll(e.join(","))));
                o.hasClass(zi)
                  ? (o
                      .closest($i.DROPDOWN)
                      .find($i.DROPDOWN_TOGGLE)
                      .addClass(ki),
                    o.addClass(ki))
                  : (o.addClass(ki),
                    o
                      .parents($i.NAV_LIST_GROUP)
                      .prev($i.NAV_LINKS + ", " + $i.LIST_ITEMS)
                      .addClass(ki),
                    o
                      .parents($i.NAV_LIST_GROUP)
                      .prev($i.NAV_ITEMS)
                      .children($i.NAV_LINKS)
                      .addClass(ki)),
                  i(this._scrollElement).trigger(Ei.ACTIVATE, {
                    relatedTarget: t,
                  });
              }),
              (e._clear = function () {
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .filter(function (t) {
                    return t.classList.contains(ki);
                  })
                  .forEach(function (t) {
                    return t.classList.remove(ki);
                  });
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this).data("bs.scrollspy");
                  if (
                    (o ||
                      ((o = new t(this, "object" == typeof e && e)),
                      i(this).data("bs.scrollspy", o)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === o[e])
                      throw new TypeError('No method named "' + e + '"');
                    o[e]();
                  }
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Ci;
                  },
                },
              ]),
              t
            );
          })();
        i(window).on(Ei.LOAD_DATA_API, function () {
          for (
            var t = [].slice.call(document.querySelectorAll($i.DATA_SPY)),
              e = t.length;
            e--;

          ) {
            var o = i(t[e]);
            Ii._jQueryInterface.call(o, o.data());
          }
        }),
          (i.fn[Ti] = Ii._jQueryInterface),
          (i.fn[Ti].Constructor = Ii),
          (i.fn[Ti].noConflict = function () {
            return (i.fn[Ti] = xi), Ii._jQueryInterface;
          });
        var Di = i.fn.tab,
          Li = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api",
          },
          Wi = "dropdown-menu",
          Hi = "active",
          Pi = "disabled",
          Ni = "fade",
          ji = "show",
          Mi = ".dropdown",
          Ri = ".nav, .list-group",
          qi = ".active",
          Fi = "> li > .active",
          Bi =
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          Ui = ".dropdown-toggle",
          Yi = "> .dropdown-menu .active",
          Vi = (function () {
            function t(t) {
              this._element = t;
            }
            var e = t.prototype;
            return (
              (e.show = function () {
                var t = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      i(this._element).hasClass(Hi)) ||
                    i(this._element).hasClass(Pi)
                  )
                ) {
                  var e,
                    o,
                    n = i(this._element).closest(Ri)[0],
                    s = c.getSelectorFromElement(this._element);
                  if (n) {
                    var r =
                      "UL" === n.nodeName || "OL" === n.nodeName ? Fi : qi;
                    o = (o = i.makeArray(i(n).find(r)))[o.length - 1];
                  }
                  var a = i.Event(Li.HIDE, { relatedTarget: this._element }),
                    l = i.Event(Li.SHOW, { relatedTarget: o });
                  if (
                    (o && i(o).trigger(a),
                    i(this._element).trigger(l),
                    !l.isDefaultPrevented() && !a.isDefaultPrevented())
                  ) {
                    s && (e = document.querySelector(s)),
                      this._activate(this._element, n);
                    var h = function () {
                      var e = i.Event(Li.HIDDEN, { relatedTarget: t._element }),
                        n = i.Event(Li.SHOWN, { relatedTarget: o });
                      i(o).trigger(e), i(t._element).trigger(n);
                    };
                    e ? this._activate(e, e.parentNode, h) : h();
                  }
                }
              }),
              (e.dispose = function () {
                i.removeData(this._element, "bs.tab"), (this._element = null);
              }),
              (e._activate = function (t, e, o) {
                var n = this,
                  s = (
                    !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                      ? i(e).children(qi)
                      : i(e).find(Fi)
                  )[0],
                  r = o && s && i(s).hasClass(Ni),
                  a = function () {
                    return n._transitionComplete(t, s, o);
                  };
                if (s && r) {
                  var l = c.getTransitionDurationFromElement(s);
                  i(s)
                    .removeClass(ji)
                    .one(c.TRANSITION_END, a)
                    .emulateTransitionEnd(l);
                } else a();
              }),
              (e._transitionComplete = function (t, e, o) {
                if (e) {
                  i(e).removeClass(Hi);
                  var n = i(e.parentNode).find(Yi)[0];
                  n && i(n).removeClass(Hi),
                    "tab" === e.getAttribute("role") &&
                      e.setAttribute("aria-selected", !1);
                }
                if (
                  (i(t).addClass(Hi),
                  "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !0),
                  c.reflow(t),
                  t.classList.contains(Ni) && t.classList.add(ji),
                  t.parentNode && i(t.parentNode).hasClass(Wi))
                ) {
                  var s = i(t).closest(Mi)[0];
                  if (s) {
                    var r = [].slice.call(s.querySelectorAll(Ui));
                    i(r).addClass(Hi);
                  }
                  t.setAttribute("aria-expanded", !0);
                }
                o && o();
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this),
                    n = o.data("bs.tab");
                  if (
                    (n || ((n = new t(this)), o.data("bs.tab", n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
              ]),
              t
            );
          })();
        i(document).on(Li.CLICK_DATA_API, Bi, function (t) {
          t.preventDefault(), Vi._jQueryInterface.call(i(this), "show");
        }),
          (i.fn.tab = Vi._jQueryInterface),
          (i.fn.tab.Constructor = Vi),
          (i.fn.tab.noConflict = function () {
            return (i.fn.tab = Di), Vi._jQueryInterface;
          });
        var Xi = i.fn.toast,
          Gi = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast",
          },
          Zi = "fade",
          Qi = "hide",
          Ki = "show",
          Ji = "showing",
          to = { animation: "boolean", autohide: "boolean", delay: "number" },
          eo = { animation: !0, autohide: !0, delay: 500 },
          io = '[data-dismiss="toast"]',
          oo = (function () {
            function t(t, e) {
              (this._element = t),
                (this._config = this._getConfig(e)),
                (this._timeout = null),
                this._setListeners();
            }
            var e = t.prototype;
            return (
              (e.show = function () {
                var t = this;
                i(this._element).trigger(Gi.SHOW),
                  this._config.animation && this._element.classList.add(Zi);
                var e = function () {
                  t._element.classList.remove(Ji),
                    t._element.classList.add(Ki),
                    i(t._element).trigger(Gi.SHOWN),
                    t._config.autohide && t.hide();
                };
                if (
                  (this._element.classList.remove(Qi),
                  this._element.classList.add(Ji),
                  this._config.animation)
                ) {
                  var o = c.getTransitionDurationFromElement(this._element);
                  i(this._element)
                    .one(c.TRANSITION_END, e)
                    .emulateTransitionEnd(o);
                } else e();
              }),
              (e.hide = function (t) {
                var e = this;
                this._element.classList.contains(Ki) &&
                  (i(this._element).trigger(Gi.HIDE),
                  t
                    ? this._close()
                    : (this._timeout = setTimeout(function () {
                        e._close();
                      }, this._config.delay)));
              }),
              (e.dispose = function () {
                clearTimeout(this._timeout),
                  (this._timeout = null),
                  this._element.classList.contains(Ki) &&
                    this._element.classList.remove(Ki),
                  i(this._element).off(Gi.CLICK_DISMISS),
                  i.removeData(this._element, "bs.toast"),
                  (this._element = null),
                  (this._config = null);
              }),
              (e._getConfig = function (t) {
                return (
                  (t = r(
                    {},
                    eo,
                    i(this._element).data(),
                    "object" == typeof t && t ? t : {}
                  )),
                  c.typeCheckConfig("toast", t, this.constructor.DefaultType),
                  t
                );
              }),
              (e._setListeners = function () {
                var t = this;
                i(this._element).on(Gi.CLICK_DISMISS, io, function () {
                  return t.hide(!0);
                });
              }),
              (e._close = function () {
                var t = this,
                  e = function () {
                    t._element.classList.add(Qi),
                      i(t._element).trigger(Gi.HIDDEN);
                  };
                if (
                  (this._element.classList.remove(Ki), this._config.animation)
                ) {
                  var o = c.getTransitionDurationFromElement(this._element);
                  i(this._element)
                    .one(c.TRANSITION_END, e)
                    .emulateTransitionEnd(o);
                } else e();
              }),
              (t._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = i(this),
                    n = o.data("bs.toast");
                  if (
                    (n ||
                      ((n = new t(this, "object" == typeof e && e)),
                      o.data("bs.toast", n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e](this);
                  }
                });
              }),
              n(t, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.3.1";
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return to;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return eo;
                  },
                },
              ]),
              t
            );
          })();
        (i.fn.toast = oo._jQueryInterface),
          (i.fn.toast.Constructor = oo),
          (i.fn.toast.noConflict = function () {
            return (i.fn.toast = Xi), oo._jQueryInterface;
          }),
          (function () {
            if (void 0 === i)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
              );
            var t = i.fn.jquery.split(" ")[0].split(".");
            if (
              (t[0] < 2 && t[1] < 9) ||
              (1 === t[0] && 9 === t[1] && t[2] < 1) ||
              t[0] >= 4
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
              );
          })(),
          (e.Util = c),
          (e.Alert = g),
          (e.Button = E),
          (e.Carousel = V),
          (e.Collapse = rt),
          (e.Dropdown = ke),
          (e.Modal = Me),
          (e.Popover = _i),
          (e.Scrollspy = Ii),
          (e.Tab = Vi),
          (e.Toast = oo),
          (e.Tooltip = hi),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(e, i(0));
    }).call(this, i(5));
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e) {
    !(function (t, e, i, o) {
      "use strict";
      t.fn.shopNav = function (o) {
        var n,
          s,
          r,
          a,
          l,
          c = t.extend({}, { mobileBreakpoint: 1024 }, o),
          h = Number.MAX_VALUE,
          d = 1,
          u = this,
          p = !1,
          f = u.find(".toggle-button"),
          g = u.find(".ah-close"),
          m = u.find(".has-dropdown").children(".js-menu-toggle");
        return this.each(function () {
          var o = function () {
              return (
                e.innerWidth ||
                i.documentElement.clientWidth ||
                i.body.clientWidth
              );
            },
            v = function () {
              s.hasClass("js-open") && s.removeClass("js-open");
            },
            y = function (t) {
              t.stopPropagation(), s.toggleClass("js-open");
            },
            w = function () {
              p &&
                ("landscape" === n
                  ? (s.on("click", y),
                    t(i.body).on("click", v),
                    r.on("mouseenter", b))
                  : (s.off("click"),
                    s.removeClass("js-open"),
                    t(i.body).off("click", v),
                    a.on("click", _),
                    r.off("mouseenter").off("mouseleave")));
            },
            b = function () {
              r.removeClass("js-active"),
                a.removeClass("js-toggle-mark"),
                t(this).addClass("js-active"),
                t(this).find("span").addClass("js-toggle-mark"),
                l.removeClass("js-active"),
                t(l[t(this).index()]).addClass("js-active");
            },
            _ = function () {
              a.removeClass("js-toggle-mark"),
                r.removeClass("js-active"),
                t(this).addClass("js-toggle-mark"),
                t(this).parent().addClass("js-active"),
                l.removeClass("js-active"),
                t(l[t(this).parent().index()]).addClass("js-active");
            },
            T = function () {
              o() <= c.mobileBreakpoint &&
                h > c.mobileBreakpoint &&
                ((n = "portrait"), w()),
                o() > c.mobileBreakpoint &&
                  d <= c.mobileBreakpoint &&
                  ((n = "landscape"),
                  w(),
                  u.removeClass("js-open"),
                  m.removeClass("js-toggle-mark"),
                  m.next().css("display", "")),
                (h = o()),
                (d = o());
            };
          u.find(".mega-menu").length > 0 &&
            ((p = !0),
            (s = t(".mega-text")),
            (r = u.find(".mega-menu-list").find("li")),
            (a = u.find(".mega-menu-list").find("span")),
            (l = u.find(".mega-menu-content"))),
            f.on("click", function () {
              u.addClass("js-open");
            }),
            g.on("click", function () {
              u.removeClass("js-open");
            }),
            m.on("click", function () {
              t(this).toggleClass("js-toggle-mark"),
                t(this).next().stop(!0, !0).slideToggle(300);
            }),
            T(),
            t(e).on("resize", function () {
              T();
            });
        });
      };
    })(jQuery, window, document);
  },
  function (t, e) {
    !(function (t, e, i) {
      "use strict";
      (t.fn.scrollUp = function (e) {
        t.data(i.body, "scrollUp") ||
          (t.data(i.body, "scrollUp", !0), t.fn.scrollUp.init(e));
      }),
        (t.fn.scrollUp.init = function (o) {
          var n,
            s,
            r,
            a,
            l,
            c,
            h = (t.fn.scrollUp.settings = t.extend(
              {},
              t.fn.scrollUp.defaults,
              o
            )),
            d = !1;
          switch (
            ((c = h.scrollTrigger
              ? t(h.scrollTrigger)
              : t("<a/>", { id: h.scrollName, href: "#top" })),
            h.scrollTitle && c.attr("title", h.scrollTitle),
            c.appendTo("body"),
            h.scrollImg || h.scrollTrigger || c.html(h.scrollText),
            c.css({ display: "none", position: "fixed", zIndex: h.zIndex }),
            h.activeOverlay &&
              t("<div/>", { id: h.scrollName + "-active" })
                .css({
                  position: "absolute",
                  top: h.scrollDistance + "px",
                  width: "100%",
                  borderTop: "1px dotted" + h.activeOverlay,
                  zIndex: h.zIndex,
                })
                .appendTo("body"),
            h.animation)
          ) {
            case "fade":
              (n = "fadeIn"), (s = "fadeOut"), (r = h.animationSpeed);
              break;
            case "slide":
              (n = "slideDown"), (s = "slideUp"), (r = h.animationSpeed);
              break;
            default:
              (n = "show"), (s = "hide"), (r = 0);
          }
          (a =
            "top" === h.scrollFrom
              ? h.scrollDistance
              : t(i).height() - t(e).height() - h.scrollDistance),
            t(e).scroll(function () {
              t(e).scrollTop() > a
                ? d || (c[n](r), (d = !0))
                : d && (c[s](r), (d = !1));
            }),
            h.scrollTarget
              ? "number" == typeof h.scrollTarget
                ? (l = h.scrollTarget)
                : "string" == typeof h.scrollTarget &&
                  (l = Math.floor(t(h.scrollTarget).offset().top))
              : (l = 0),
            c.click(function (e) {
              e.preventDefault(),
                t("html, body").animate(
                  { scrollTop: l },
                  h.scrollSpeed,
                  h.easingType
                );
            });
        }),
        (t.fn.scrollUp.defaults = {
          scrollName: "scrollUp",
          scrollDistance: 300,
          scrollFrom: "top",
          scrollSpeed: 300,
          easingType: "linear",
          animation: "fade",
          animationSpeed: 200,
          scrollTrigger: !1,
          scrollTarget: !1,
          scrollText: "Scroll to top",
          scrollTitle: !1,
          scrollImg: !1,
          activeOverlay: !1,
          zIndex: 2147483647,
        }),
        (t.fn.scrollUp.destroy = function (o) {
          t.removeData(i.body, "scrollUp"),
            t("#" + t.fn.scrollUp.settings.scrollName).remove(),
            t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(),
            t.fn.jquery.split(".")[1] >= 7
              ? t(e).off("scroll", o)
              : t(e).unbind("scroll", o);
        }),
        (t.scrollUp = t.fn.scrollUp);
    })(jQuery, window, document);
  },
  function (t, e) {
    var i, o;
    !(function (t, e, i, o) {
      function n(e, i) {
        (this.settings = null),
          (this.options = t.extend({}, n.Defaults, i)),
          (this.$element = t(e)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"],
            },
          }),
          t.each(
            ["onResize", "onThrottledResize"],
            t.proxy(function (e, i) {
              this._handlers[i] = t.proxy(this[i], this);
            }, this)
          ),
          t.each(
            n.Plugins,
            t.proxy(function (t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                this
              );
            }, this)
          ),
          t.each(
            n.Workers,
            t.proxy(function (e, i) {
              this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      (n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
      }),
        (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (n.Type = { Event: "event", State: "state" }),
        (n.Plugins = {}),
        (n.Workers = [
          {
            filter: ["width", "settings"],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              t.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              this.$stage.children(".cloned").remove();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                o = this.settings.rtl,
                n = {
                  width: "auto",
                  "margin-left": o ? e : "",
                  "margin-right": o ? "" : e,
                };
              !i && this.$stage.children().css(n), (t.css = n);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                i = null,
                o = this._items.length,
                n = !this.settings.autoWidth,
                s = [];
              for (t.items = { merge: !1, width: e }; o--; )
                (i = this._mergers[o]),
                  (i =
                    (this.settings.mergeFit &&
                      Math.min(i, this.settings.items)) ||
                    i),
                  (t.items.merge = i > 1 || t.items.merge),
                  (s[o] = n ? e * i : this._items[o].width());
              this._widths = s;
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              var e = [],
                i = this._items,
                o = this.settings,
                n = Math.max(2 * o.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                r = o.loop && i.length ? (o.rewind ? n : Math.max(n, s)) : 0,
                a = "",
                l = "";
              for (r /= 2; r > 0; )
                e.push(this.normalize(e.length / 2, !0)),
                  (a += i[e[e.length - 1]][0].outerHTML),
                  e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                  (l = i[e[e.length - 1]][0].outerHTML + l),
                  (r -= 1);
              (this._clones = e),
                t(a).addClass("cloned").appendTo(this.$stage),
                t(l).addClass("cloned").prependTo(this.$stage);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              for (
                var t = this.settings.rtl ? 1 : -1,
                  e = this._clones.length + this._items.length,
                  i = -1,
                  o = 0,
                  n = 0,
                  s = [];
                ++i < e;

              )
                (o = s[i - 1] || 0),
                  (n = this._widths[this.relative(i)] + this.settings.margin),
                  s.push(o + n * t);
              this._coordinates = s;
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  "padding-left": t || "",
                  "padding-right": t || "",
                };
              this.$stage.css(i);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                o = this.$stage.children();
              if (i && t.items.merge)
                for (; e--; )
                  (t.css.width = this._widths[this.relative(e)]),
                    o.eq(e).css(t.css);
              else i && ((t.css.width = t.items.width), o.css(t.css));
            },
          },
          {
            filter: ["items"],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              (t.current = t.current
                ? this.$stage.children().index(t.current)
                : 0),
                (t.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), t.current)
                )),
                this.reset(t.current);
            },
          },
          {
            filter: ["position"],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ["width", "position", "items", "settings"],
            run: function () {
              var t,
                e,
                i,
                o,
                n = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + s,
                a = r + this.width() * n,
                l = [];
              for (i = 0, o = this._coordinates.length; i < o; i++)
                (t = this._coordinates[i - 1] || 0),
                  (e = Math.abs(this._coordinates[i]) + s * n),
                  ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                    (this.op(e, "<", r) && this.op(e, ">", a))) &&
                    l.push(i);
              this.$stage.children(".active").removeClass("active"),
                this.$stage
                  .children(":eq(" + l.join("), :eq(") + ")")
                  .addClass("active"),
                this.$stage.children(".center").removeClass("center"),
                this.settings.center &&
                  this.$stage.children().eq(this.current()).addClass("center");
            },
          },
        ]),
        (n.prototype.initializeStage = function () {
          (this.$stage = this.$element.find("." + this.settings.stageClass)),
            this.$stage.length ||
              (this.$element.addClass(this.options.loadingClass),
              (this.$stage = t("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass,
              }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
              this.$element.append(this.$stage.parent()));
        }),
        (n.prototype.initializeItems = function () {
          var e = this.$element.find(".owl-item");
          if (e.length)
            return (
              (this._items = e.get().map(function (e) {
                return t(e);
              })),
              (this._mergers = this._items.map(function () {
                return 1;
              })),
              void this.refresh()
            );
          this.replace(this.$element.children().not(this.$stage.parent())),
            this.isVisible() ? this.refresh() : this.invalidate("width"),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
        }),
        (n.prototype.initialize = function () {
          var t, e, i;
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading")) &&
            ((t = this.$element.find("img")),
            (e = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : void 0),
            (i = this.$element.children(e).width()),
            t.length && i <= 0 && this.preloadAutoWidthImages(t));
          this.initializeStage(),
            this.initializeItems(),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized");
        }),
        (n.prototype.isVisible = function () {
          return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (n.prototype.setup = function () {
          var e = this.viewport(),
            i = this.options.responsive,
            o = -1,
            n = null;
          i
            ? (t.each(i, function (t) {
                t <= e && t > o && (o = Number(t));
              }),
              "function" ==
                typeof (n = t.extend({}, this.options, i[o])).stagePadding &&
                (n.stagePadding = n.stagePadding()),
              delete n.responsive,
              n.responsiveClass &&
                this.$element.attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        "(" + this.options.responsiveClass + "-)\\S+\\s",
                        "g"
                      ),
                      "$1" + o
                    )
                ))
            : (n = t.extend({}, this.options)),
            this.trigger("change", {
              property: { name: "settings", value: n },
            }),
            (this._breakpoint = o),
            (this.settings = n),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings },
            });
        }),
        (n.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (n.prototype.prepare = function (e) {
          var i = this.trigger("prepare", { content: e });
          return (
            i.data ||
              (i.data = t("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(e)),
            this.trigger("prepared", { content: i.data }),
            i.data
          );
        }),
        (n.prototype.update = function () {
          for (
            var e = 0,
              i = this._pipe.length,
              o = t.proxy(function (t) {
                return this[t];
              }, this._invalidated),
              n = {};
            e < i;

          )
            (this._invalidated.all ||
              t.grep(this._pipe[e].filter, o).length > 0) &&
              this._pipe[e].run(n),
              e++;
          (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (n.prototype.width = function (t) {
          switch ((t = t || n.Width.Default)) {
            case n.Width.Inner:
            case n.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                2 * this.settings.stagePadding +
                this.settings.margin
              );
          }
        }),
        (n.prototype.refresh = function () {
          this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
        }),
        (n.prototype.onThrottledResize = function () {
          e.clearTimeout(this.resizeTimer),
            (this.resizeTimer = e.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (n.prototype.onResize = function () {
          return (
            !!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.isVisible() &&
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))
          );
        }),
        (n.prototype.registerEventHandlers = function () {
          t.support.transition &&
            this.$stage.on(
              t.support.transition.end + ".owl.core",
              t.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
              this.on(e, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                "mousedown.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                "touchstart.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "touchcancel.owl.core",
                t.proxy(this.onDragEnd, this)
              ));
        }),
        (n.prototype.onDragStart = function (e) {
          var o = null;
          3 !== e.which &&
            (t.support.transform
              ? (o = {
                  x: (o = this.$stage
                    .css("transform")
                    .replace(/.*\(|\)| /g, "")
                    .split(","))[16 === o.length ? 12 : 4],
                  y: o[16 === o.length ? 13 : 5],
                })
              : ((o = this.$stage.position()),
                (o = {
                  x: this.settings.rtl
                    ? o.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : o.left,
                  y: o.top,
                })),
            this.is("animating") &&
              (t.support.transform ? this.animate(o.x) : this.$stage.stop(),
              this.invalidate("position")),
            this.$element.toggleClass(
              this.options.grabClass,
              "mousedown" === e.type
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = t(e.target)),
            (this._drag.stage.start = o),
            (this._drag.stage.current = o),
            (this._drag.pointer = this.pointer(e)),
            t(i).on(
              "mouseup.owl.core touchend.owl.core",
              t.proxy(this.onDragEnd, this)
            ),
            t(i).one(
              "mousemove.owl.core touchmove.owl.core",
              t.proxy(function (e) {
                var o = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on(
                  "mousemove.owl.core touchmove.owl.core",
                  t.proxy(this.onDragMove, this)
                ),
                  (Math.abs(o.x) < Math.abs(o.y) && this.is("valid")) ||
                    (e.preventDefault(),
                    this.enter("dragging"),
                    this.trigger("drag"));
              }, this)
            ));
        }),
        (n.prototype.onDragMove = function (t) {
          var e = null,
            i = null,
            o = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, n);
          this.is("dragging") &&
            (t.preventDefault(),
            this.settings.loop
              ? ((e = this.coordinates(this.minimum())),
                (i = this.coordinates(this.maximum() + 1) - e),
                (s.x = ((((s.x - e) % i) + i) % i) + e))
              : ((e = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (i = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (o = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
                (s.x = Math.max(Math.min(s.x, e + o), i + o))),
            (this._drag.stage.current = s),
            this.animate(s.x));
        }),
        (n.prototype.onDragEnd = function (e) {
          var o = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            s = (o.x > 0) ^ this.settings.rtl ? "left" : "right";
          t(i).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== o.x && this.is("dragging")) || !this.is("valid")) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(n.x, 0 !== o.x ? s : this._drag.direction)
              ),
              this.invalidate("position"),
              this.update(),
              (this._drag.direction = s),
              (Math.abs(o.x) > 3 ||
                new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one("click.owl.core", function () {
                  return !1;
                })),
            this.is("dragging") &&
              (this.leave("dragging"), this.trigger("dragged"));
        }),
        (n.prototype.closest = function (e, i) {
          var o = -1,
            n = this.width(),
            s = this.coordinates();
          return (
            this.settings.freeDrag ||
              t.each(
                s,
                t.proxy(function (t, r) {
                  return (
                    "left" === i && e > r - 30 && e < r + 30
                      ? (o = t)
                      : "right" === i && e > r - n - 30 && e < r - n + 30
                      ? (o = t + 1)
                      : this.op(e, "<", r) &&
                        this.op(
                          e,
                          ">",
                          void 0 !== s[t + 1] ? s[t + 1] : r - n
                        ) &&
                        (o = "left" === i ? t + 1 : t),
                    -1 === o
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(e, ">", s[this.minimum()])
                ? (o = e = this.minimum())
                : this.op(e, "<", s[this.maximum()]) &&
                  (o = e = this.maximum())),
            o
          );
        }),
        (n.prototype.animate = function (e) {
          var i = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
            i && (this.enter("animating"), this.trigger("translate")),
            t.support.transform3d && t.support.transition
              ? this.$stage.css({
                  transform: "translate3d(" + e + "px,0px,0px)",
                  transition:
                    this.speed() / 1e3 +
                    "s" +
                    (this.settings.slideTransition
                      ? " " + this.settings.slideTransition
                      : ""),
                })
              : i
              ? this.$stage.animate(
                  { left: e + "px" },
                  this.speed(),
                  this.settings.fallbackEasing,
                  t.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: e + "px" });
        }),
        (n.prototype.is = function (t) {
          return this._states.current[t] && this._states.current[t] > 0;
        }),
        (n.prototype.current = function (t) {
          if (void 0 === t) return this._current;
          if (0 !== this._items.length) {
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger("change", {
                property: { name: "position", value: t },
              });
              void 0 !== e.data && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }
        }),
        (n.prototype.invalidate = function (e) {
          return (
            "string" === t.type(e) &&
              ((this._invalidated[e] = !0),
              this.is("valid") && this.leave("valid")),
            t.map(this._invalidated, function (t, e) {
              return e;
            })
          );
        }),
        (n.prototype.reset = function (t) {
          void 0 !== (t = this.normalize(t)) &&
            ((this._speed = 0),
            (this._current = t),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(t)),
            this.release(["translate", "translated"]));
        }),
        (n.prototype.normalize = function (t, e) {
          var i = this._items.length,
            o = e ? 0 : this._clones.length;
          return (
            !this.isNumeric(t) || i < 1
              ? (t = void 0)
              : (t < 0 || t >= i + o) &&
                (t = ((((t - o / 2) % i) + i) % i) + o / 2),
            t
          );
        }),
        (n.prototype.relative = function (t) {
          return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (n.prototype.maximum = function (t) {
          var e,
            i,
            o,
            n = this.settings,
            s = this._coordinates.length;
          if (n.loop) s = this._clones.length / 2 + this._items.length - 1;
          else if (n.autoWidth || n.merge) {
            if ((e = this._items.length))
              for (
                i = this._items[--e].width(), o = this.$element.width();
                e-- &&
                !((i += this._items[e].width() + this.settings.margin) > o);

              );
            s = e + 1;
          } else
            s = n.center
              ? this._items.length - 1
              : this._items.length - n.items;
          return t && (s -= this._clones.length / 2), Math.max(s, 0);
        }),
        (n.prototype.minimum = function (t) {
          return t ? 0 : this._clones.length / 2;
        }),
        (n.prototype.items = function (t) {
          return void 0 === t
            ? this._items.slice()
            : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (n.prototype.mergers = function (t) {
          return void 0 === t
            ? this._mergers.slice()
            : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (n.prototype.clones = function (e) {
          var i = this._clones.length / 2,
            o = i + this._items.length,
            n = function (t) {
              return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2;
            };
          return void 0 === e
            ? t.map(this._clones, function (t, e) {
                return n(e);
              })
            : t.map(this._clones, function (t, i) {
                return t === e ? n(i) : null;
              });
        }),
        (n.prototype.speed = function (t) {
          return void 0 !== t && (this._speed = t), this._speed;
        }),
        (n.prototype.coordinates = function (e) {
          var i,
            o = 1,
            n = e - 1;
          return void 0 === e
            ? t.map(
                this._coordinates,
                t.proxy(function (t, e) {
                  return this.coordinates(e);
                }, this)
              )
            : (this.settings.center
                ? (this.settings.rtl && ((o = -1), (n = e + 1)),
                  (i = this._coordinates[e]),
                  (i +=
                    ((this.width() - i + (this._coordinates[n] || 0)) / 2) * o))
                : (i = this._coordinates[n] || 0),
              (i = Math.ceil(i)));
        }),
        (n.prototype.duration = function (t, e, i) {
          return 0 === i
            ? 0
            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                Math.abs(i || this.settings.smartSpeed);
        }),
        (n.prototype.to = function (t, e) {
          var i = this.current(),
            o = null,
            n = t - this.relative(i),
            s = (n > 0) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(n) > r / 2 &&
                (n += -1 * s * r),
              (o = (((((t = i + n) - a) % r) + r) % r) + a) !== t &&
                o - n <= l &&
                o - n > 0 &&
                ((i = o - n), (t = o), this.reset(i)))
            : (t = this.settings.rewind
                ? ((t % (l += 1)) + l) % l
                : Math.max(a, Math.min(l, t))),
            this.speed(this.duration(i, t, e)),
            this.current(t),
            this.isVisible() && this.update();
        }),
        (n.prototype.next = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (n.prototype.prev = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (n.prototype.onTransitionEnd = function (t) {
          if (
            void 0 !== t &&
            (t.stopPropagation(),
            (t.target || t.srcElement || t.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave("animating"), this.trigger("translated");
        }),
        (n.prototype.viewport = function () {
          var o;
          return (
            this.options.responsiveBaseElement !== e
              ? (o = t(this.options.responsiveBaseElement).width())
              : e.innerWidth
              ? (o = e.innerWidth)
              : i.documentElement && i.documentElement.clientWidth
              ? (o = i.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
            o
          );
        }),
        (n.prototype.replace = function (e) {
          this.$stage.empty(),
            (this._items = []),
            e && (e = e instanceof jQuery ? e : t(e)),
            this.settings.nestedItemSelector &&
              (e = e.find("." + this.settings.nestedItemSelector)),
            e
              .filter(function () {
                return 1 === this.nodeType;
              })
              .each(
                t.proxy(function (t, e) {
                  (e = this.prepare(e)),
                    this.$stage.append(e),
                    this._items.push(e),
                    this._mergers.push(
                      1 *
                        e
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    );
                }, this)
              ),
            this.reset(
              this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate("items");
        }),
        (n.prototype.add = function (e, i) {
          var o = this.relative(this._current);
          (i = void 0 === i ? this._items.length : this.normalize(i, !0)),
            (e = e instanceof jQuery ? e : t(e)),
            this.trigger("add", { content: e, position: i }),
            (e = this.prepare(e)),
            0 === this._items.length || i === this._items.length
              ? (0 === this._items.length && this.$stage.append(e),
                0 !== this._items.length && this._items[i - 1].after(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                ))
              : (this._items[i].before(e),
                this._items.splice(i, 0, e),
                this._mergers.splice(
                  i,
                  0,
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                )),
            this._items[o] && this.reset(this._items[o].index()),
            this.invalidate("items"),
            this.trigger("added", { content: e, position: i });
        }),
        (n.prototype.remove = function (t) {
          void 0 !== (t = this.normalize(t, !0)) &&
            (this.trigger("remove", { content: this._items[t], position: t }),
            this._items[t].remove(),
            this._items.splice(t, 1),
            this._mergers.splice(t, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: t }));
        }),
        (n.prototype.preloadAutoWidthImages = function (e) {
          e.each(
            t.proxy(function (e, i) {
              this.enter("pre-loading"),
                (i = t(i)),
                t(new Image())
                  .one(
                    "load",
                    t.proxy(function (t) {
                      i.attr("src", t.target.src),
                        i.css("opacity", 1),
                        this.leave("pre-loading"),
                        !this.is("pre-loading") &&
                          !this.is("initializing") &&
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    "src",
                    i.attr("src") ||
                      i.attr("data-src") ||
                      i.attr("data-src-retina")
                  );
            }, this)
          );
        }),
        (n.prototype.destroy = function () {
          for (var o in (this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          t(i).off(".owl.core"),
          !1 !== this.settings.responsive &&
            (e.clearTimeout(this.resizeTimer),
            this.off(e, "resize", this._handlers.onThrottledResize)),
          this._plugins))
            this._plugins[o].destroy();
          this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                    ""
                  )
              )
              .removeData("owl.carousel");
        }),
        (n.prototype.op = function (t, e, i) {
          var o = this.settings.rtl;
          switch (e) {
            case "<":
              return o ? t > i : t < i;
            case ">":
              return o ? t < i : t > i;
            case ">=":
              return o ? t <= i : t >= i;
            case "<=":
              return o ? t >= i : t <= i;
          }
        }),
        (n.prototype.on = function (t, e, i, o) {
          t.addEventListener
            ? t.addEventListener(e, i, o)
            : t.attachEvent && t.attachEvent("on" + e, i);
        }),
        (n.prototype.off = function (t, e, i, o) {
          t.removeEventListener
            ? t.removeEventListener(e, i, o)
            : t.detachEvent && t.detachEvent("on" + e, i);
        }),
        (n.prototype.trigger = function (e, i, o, s, r) {
          var a = {
              item: { count: this._items.length, index: this.current() },
            },
            l = t.camelCase(
              t
                .grep(["on", e, o], function (t) {
                  return t;
                })
                .join("-")
                .toLowerCase()
            ),
            c = t.Event(
              [e, "owl", o || "carousel"].join(".").toLowerCase(),
              t.extend({ relatedTarget: this }, a, i)
            );
          return (
            this._supress[e] ||
              (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(c);
              }),
              this.register({ type: n.Type.Event, name: e }),
              this.$element.trigger(c),
              this.settings &&
                "function" == typeof this.settings[l] &&
                this.settings[l].call(this, c)),
            c
          );
        }),
        (n.prototype.enter = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              void 0 === this._states.current[e] &&
                (this._states.current[e] = 0),
                this._states.current[e]++;
            }, this)
          );
        }),
        (n.prototype.leave = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              this._states.current[e]--;
            }, this)
          );
        }),
        (n.prototype.register = function (e) {
          if (e.type === n.Type.Event) {
            if (
              (t.event.special[e.name] || (t.event.special[e.name] = {}),
              !t.event.special[e.name].owl)
            ) {
              var i = t.event.special[e.name]._default;
              (t.event.special[e.name]._default = function (t) {
                return !i ||
                  !i.apply ||
                  (t.namespace && -1 !== t.namespace.indexOf("owl"))
                  ? t.namespace && t.namespace.indexOf("owl") > -1
                  : i.apply(this, arguments);
              }),
                (t.event.special[e.name].owl = !0);
            }
          } else
            e.type === n.Type.State &&
              (this._states.tags[e.name]
                ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                    e.tags
                  ))
                : (this._states.tags[e.name] = e.tags),
              (this._states.tags[e.name] = t.grep(
                this._states.tags[e.name],
                t.proxy(function (i, o) {
                  return t.inArray(i, this._states.tags[e.name]) === o;
                }, this)
              )));
        }),
        (n.prototype.suppress = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              this._supress[e] = !0;
            }, this)
          );
        }),
        (n.prototype.release = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              delete this._supress[e];
            }, this)
          );
        }),
        (n.prototype.pointer = function (t) {
          var i = { x: null, y: null };
          return (
            (t =
              (t = t.originalEvent || t || e.event).touches && t.touches.length
                ? t.touches[0]
                : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t).pageX
              ? ((i.x = t.pageX), (i.y = t.pageY))
              : ((i.x = t.clientX), (i.y = t.clientY)),
            i
          );
        }),
        (n.prototype.isNumeric = function (t) {
          return !isNaN(parseFloat(t));
        }),
        (n.prototype.difference = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
        (t.fn.owlCarousel = function (e) {
          var i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var o = t(this),
              s = o.data("owl.carousel");
            s ||
              ((s = new n(this, "object" == typeof e && e)),
              o.data("owl.carousel", s),
              t.each(
                [
                  "next",
                  "prev",
                  "to",
                  "destroy",
                  "refresh",
                  "replace",
                  "add",
                  "remove",
                ],
                function (e, i) {
                  s.register({ type: n.Type.Event, name: i }),
                    s.$element.on(
                      i + ".owl.carousel.core",
                      t.proxy(function (t) {
                        t.namespace &&
                          t.relatedTarget !== this &&
                          (this.suppress([i]),
                          s[i].apply(this, [].slice.call(arguments, 1)),
                          this.release([i]));
                      }, s)
                    );
                }
              )),
              "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i);
          });
        }),
        (t.fn.owlCarousel.Constructor = n);
    })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        var n = function (e) {
          (this._core = e),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (n.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.isVisible()),
              (this._interval = e.setInterval(
                t.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (n.prototype.refresh = function () {
            this._core.isVisible() !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass("owl-hidden", !this._visible),
              this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
          }),
          (n.prototype.destroy = function () {
            var t, i;
            for (t in (e.clearInterval(this._interval), this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        var n = function (e) {
          (this._core = e),
            (this._loaded = []),
            (this._handlers = {
              "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                t.proxy(function (e) {
                  if (
                    e.namespace &&
                    this._core.settings &&
                    this._core.settings.lazyLoad &&
                    ((e.property && "position" == e.property.name) ||
                      "initialized" == e.type)
                  ) {
                    var i = this._core.settings,
                      o = (i.center && Math.ceil(i.items / 2)) || i.items,
                      n = (i.center && -1 * o) || 0,
                      s =
                        (e.property && void 0 !== e.property.value
                          ? e.property.value
                          : this._core.current()) + n,
                      r = this._core.clones().length,
                      a = t.proxy(function (t, e) {
                        this.load(e);
                      }, this);
                    for (
                      i.lazyLoadEager > 0 &&
                      ((o += i.lazyLoadEager),
                      i.loop && ((s -= i.lazyLoadEager), o++));
                      n++ < o;

                    )
                      this.load(r / 2 + this._core.relative(s)),
                        r &&
                          t.each(this._core.clones(this._core.relative(s)), a),
                        s++;
                  }
                }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
          (n.prototype.load = function (i) {
            var o = this._core.$stage.children().eq(i),
              n = o && o.find(".owl-lazy");
            !n ||
              t.inArray(o.get(0), this._loaded) > -1 ||
              (n.each(
                t.proxy(function (i, o) {
                  var n,
                    s = t(o),
                    r =
                      (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                      s.attr("data-src") ||
                      s.attr("data-srcset");
                  this._core.trigger("load", { element: s, url: r }, "lazy"),
                    s.is("img")
                      ? s
                          .one(
                            "load.owl.lazy",
                            t.proxy(function () {
                              s.css("opacity", 1),
                                this._core.trigger(
                                  "loaded",
                                  { element: s, url: r },
                                  "lazy"
                                );
                            }, this)
                          )
                          .attr("src", r)
                      : s.is("source")
                      ? s
                          .one(
                            "load.owl.lazy",
                            t.proxy(function () {
                              this._core.trigger(
                                "loaded",
                                { element: s, url: r },
                                "lazy"
                              );
                            }, this)
                          )
                          .attr("srcset", r)
                      : (((n = new Image()).onload = t.proxy(function () {
                          s.css({
                            "background-image": 'url("' + r + '")',
                            opacity: "1",
                          }),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: r },
                              "lazy"
                            );
                        }, this)),
                        (n.src = r));
                }, this)
              ),
              this._loaded.push(o.get(0)));
          }),
          (n.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        var n = function (i) {
          (this._core = i),
            (this._previousHeight = null),
            (this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  "position" === t.property.name &&
                  this.update();
              }, this),
              "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  t.element
                    .closest("." + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            (this._intervalId = null);
          var o = this;
          t(e).on("load", function () {
            o._core.settings.autoHeight && o.update();
          }),
            t(e).resize(function () {
              o._core.settings.autoHeight &&
                (null != o._intervalId && clearTimeout(o._intervalId),
                (o._intervalId = setTimeout(function () {
                  o.update();
                }, 250)));
            });
        };
        (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
          (n.prototype.update = function () {
            var e = this._core._current,
              i = e + this._core.settings.items,
              o = this._core.settings.lazyLoad,
              n = this._core.$stage.children().toArray().slice(e, i),
              s = [],
              r = 0;
            t.each(n, function (e, i) {
              s.push(t(i).height());
            }),
              (r = Math.max.apply(null, s)) <= 1 &&
                o &&
                this._previousHeight &&
                (r = this._previousHeight),
              (this._previousHeight = r),
              this._core.$stage
                .parent()
                .height(r)
                .addClass(this._core.settings.autoHeightClass);
          }),
          (n.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        var n = function (e) {
          (this._core = e),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"],
                  });
              }, this),
              "resize.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  t.preventDefault();
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.is("resizing") &&
                  this._core.$stage.find(".cloned .owl-video-frame").remove();
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "position" === t.property.name &&
                  this._playing &&
                  this.stop();
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content).find(".owl-video");
                  i.length &&
                    (i.css("display", "none"), this.fetch(i, t(e.content)));
                }
              }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              "click.owl.video",
              ".owl-video-play-icon",
              t.proxy(function (t) {
                this.play(t);
              }, this)
            );
        };
        (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (n.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id")
                ? "vimeo"
                : t.attr("data-vzaar-id")
                ? "vzaar"
                : "youtube",
              o =
                t.attr("data-vimeo-id") ||
                t.attr("data-youtube-id") ||
                t.attr("data-vzaar-id"),
              n = t.attr("data-width") || this._core.settings.videoWidth,
              s = t.attr("data-height") || this._core.settings.videoHeight,
              r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (
              (o = r.match(
                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
              ))[3].indexOf("youtu") > -1
            )
              i = "youtube";
            else if (o[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
              if (!(o[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
              i = "vzaar";
            }
            (o = o[6]),
              (this._videos[r] = { type: i, id: o, width: n, height: s }),
              e.attr("data-video", r),
              this.thumbnail(t, this._videos[r]);
          }),
          (n.prototype.thumbnail = function (e, i) {
            var o,
              n,
              s =
                i.width && i.height
                  ? "width:" + i.width + "px;height:" + i.height + "px;"
                  : "",
              r = e.find("img"),
              a = "src",
              l = "",
              c = this._core.settings,
              h = function (i) {
                '<div class="owl-video-play-icon"></div>',
                  (o = c.lazyLoad
                    ? t("<div/>", { class: "owl-video-tn " + l, srcType: i })
                    : t("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + i + ")",
                      })),
                  e.after(o),
                  e.after('<div class="owl-video-play-icon"></div>');
              };
            if (
              (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: s })),
              this._core.settings.lazyLoad &&
                ((a = "data-src"), (l = "owl-lazy")),
              r.length)
            )
              return h(r.attr(a)), r.remove(), !1;
            "youtube" === i.type
              ? ((n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), h(n))
              : "vimeo" === i.type
              ? t.ajax({
                  type: "GET",
                  url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (n = t[0].thumbnail_large), h(n);
                  },
                })
              : "vzaar" === i.type &&
                t.ajax({
                  type: "GET",
                  url: "//vzaar.com/api/videos/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (n = t.framegrab_url), h(n);
                  },
                });
          }),
          (n.prototype.stop = function () {
            this._core.trigger("stop", null, "video"),
              this._playing.find(".owl-video-frame").remove(),
              this._playing.removeClass("owl-video-playing"),
              (this._playing = null),
              this._core.leave("playing"),
              this._core.trigger("stopped", null, "video");
          }),
          (n.prototype.play = function (e) {
            var i,
              o = t(e.target).closest("." + this._core.settings.itemClass),
              n = this._videos[o.attr("data-video")],
              s = n.width || "100%",
              r = n.height || this._core.$stage.height();
            this._playing ||
              (this._core.enter("playing"),
              this._core.trigger("play", null, "video"),
              (o = this._core.items(this._core.relative(o.index()))),
              this._core.reset(o.index()),
              (i = t(
                '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
              )).attr("height", r),
              i.attr("width", s),
              "youtube" === n.type
                ? i.attr(
                    "src",
                    "//www.youtube.com/embed/" +
                      n.id +
                      "?autoplay=1&rel=0&v=" +
                      n.id
                  )
                : "vimeo" === n.type
                ? i.attr(
                    "src",
                    "//player.vimeo.com/video/" + n.id + "?autoplay=1"
                  )
                : "vzaar" === n.type &&
                  i.attr(
                    "src",
                    "//view.vzaar.com/" + n.id + "/player?autoplay=true"
                  ),
              t(i)
                .wrap('<div class="owl-video-frame" />')
                .insertAfter(o.find(".owl-video")),
              (this._playing = o.addClass("owl-video-playing")));
          }),
          (n.prototype.isInFullScreen = function () {
            var e =
              i.fullscreenElement ||
              i.mozFullScreenElement ||
              i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame");
          }),
          (n.prototype.destroy = function () {
            var t, e;
            for (t in (this._core.$element.off("click.owl.video"),
            this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Video = n);
      })(window.Zepto || window.jQuery, window, document),
      (i = window.Zepto || window.jQuery),
      window,
      document,
      ((o = function (t) {
        (this.core = t),
          (this.core.options = i.extend({}, o.Defaults, this.core.options)),
          (this.swapping = !0),
          (this.previous = void 0),
          (this.next = void 0),
          (this.handlers = {
            "change.owl.carousel": i.proxy(function (t) {
              t.namespace &&
                "position" == t.property.name &&
                ((this.previous = this.core.current()),
                (this.next = t.property.value));
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
              i.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type);
              }, this),
            "translate.owl.carousel": i.proxy(function (t) {
              t.namespace &&
                this.swapping &&
                (this.core.options.animateOut || this.core.options.animateIn) &&
                this.swap();
            }, this),
          }),
          this.core.$element.on(this.handlers);
      }).Defaults = { animateOut: !1, animateIn: !1 }),
      (o.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          i.support.animation &&
          i.support.transition
        ) {
          this.core.speed(0);
          var t,
            e = i.proxy(this.clear, this),
            o = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((t =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              o
                .one(i.support.animation.end, e)
                .css({ left: t + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            s &&
              n
                .one(i.support.animation.end, e)
                .addClass("animated owl-animated-in")
                .addClass(s));
        }
      }),
      (o.prototype.clear = function (t) {
        i(t.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (i.fn.owlCarousel.Constructor.Plugins.Animate = o),
      (function (t, e, i, o) {
        var n = function (e) {
          (this._core = e),
            (this._call = null),
            (this._time = 0),
            (this._timeout = 0),
            (this._paused = !0),
            (this._handlers = {
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name
                  ? this._core.settings.autoplay
                    ? this.play()
                    : this.stop()
                  : t.namespace &&
                    "position" === t.property.name &&
                    this._paused &&
                    (this._time = 0);
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play();
              }, this),
              "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i);
              }, this),
              "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop();
              }, this),
              "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.play();
              }, this),
              "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = t.extend({}, n.Defaults, this._core.options));
        };
        (n.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
          (n.prototype._next = function (o) {
            (this._call = e.setTimeout(
              t.proxy(this._next, this, o),
              this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                this.read()
            )),
              this._core.is("interacting") ||
                i.hidden ||
                this._core.next(o || this._core.settings.autoplaySpeed);
          }),
          (n.prototype.read = function () {
            return new Date().getTime() - this._time;
          }),
          (n.prototype.play = function (i, o) {
            var n;
            this._core.is("rotating") || this._core.enter("rotating"),
              (i = i || this._core.settings.autoplayTimeout),
              (n = Math.min(this._time % (this._timeout || i), i)),
              this._paused
                ? ((this._time = this.read()), (this._paused = !1))
                : e.clearTimeout(this._call),
              (this._time += (this.read() % i) - n),
              (this._timeout = i),
              (this._call = e.setTimeout(t.proxy(this._next, this, o), i - n));
          }),
          (n.prototype.stop = function () {
            this._core.is("rotating") &&
              ((this._time = 0),
              (this._paused = !0),
              e.clearTimeout(this._call),
              this._core.leave("rotating"));
          }),
          (n.prototype.pause = function () {
            this._core.is("rotating") &&
              !this._paused &&
              ((this._time = this.read()),
              (this._paused = !0),
              e.clearTimeout(this._call));
          }),
          (n.prototype.destroy = function () {
            var t, e;
            for (t in (this.stop(), this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        "use strict";
        var n = function (e) {
          (this._core = e),
            (this._initialized = !1),
            (this._pages = []),
            (this._controls = {}),
            (this._templates = []),
            (this.$element = this._core.$element),
            (this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to,
            }),
            (this._handlers = {
              "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.push(
                    '<div class="' +
                      this._core.settings.dotClass +
                      '">' +
                      t(e.content)
                        .find("[data-dot]")
                        .addBack("[data-dot]")
                        .attr("data-dot") +
                      "</div>"
                  );
              }, this),
              "added.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 0, this._templates.pop());
              }, this),
              "remove.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 1);
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw();
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  !this._initialized &&
                  (this._core.trigger("initialize", null, "navigation"),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  (this._initialized = !0),
                  this._core.trigger("initialized", null, "navigation"));
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._initialized &&
                  (this._core.trigger("refresh", null, "navigation"),
                  this.update(),
                  this.draw(),
                  this._core.trigger("refreshed", null, "navigation"));
              }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this.$element.on(this._handlers);
        };
        (n.Defaults = {
          nav: !1,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>',
          ],
          navSpeed: !1,
          navElement: 'button type="button" role="presentation"',
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
        }),
          (n.prototype.initialize = function () {
            var e,
              i = this._core.settings;
            for (e in ((this._controls.$relative = (
              i.navContainer
                ? t(i.navContainer)
                : t("<div>")
                    .addClass(i.navContainerClass)
                    .appendTo(this.$element)
            ).addClass("disabled")),
            (this._controls.$previous = t("<" + i.navElement + ">")
              .addClass(i.navClass[0])
              .html(i.navText[0])
              .prependTo(this._controls.$relative)
              .on(
                "click",
                t.proxy(function (t) {
                  this.prev(i.navSpeed);
                }, this)
              )),
            (this._controls.$next = t("<" + i.navElement + ">")
              .addClass(i.navClass[1])
              .html(i.navText[1])
              .appendTo(this._controls.$relative)
              .on(
                "click",
                t.proxy(function (t) {
                  this.next(i.navSpeed);
                }, this)
              )),
            i.dotsData ||
              (this._templates = [
                t('<button role="button">')
                  .addClass(i.dotClass)
                  .append(t("<span>"))
                  .prop("outerHTML"),
              ]),
            (this._controls.$absolute = (
              i.dotsContainer
                ? t(i.dotsContainer)
                : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
            ).addClass("disabled")),
            this._controls.$absolute.on(
              "click",
              "button",
              t.proxy(function (e) {
                var o = t(e.target).parent().is(this._controls.$absolute)
                  ? t(e.target).index()
                  : t(e.target).parent().index();
                e.preventDefault(), this.to(o, i.dotsSpeed);
              }, this)
            ),
            this._overrides))
              this._core[e] = t.proxy(this[e], this);
          }),
          (n.prototype.destroy = function () {
            var t, e, i, o, n;
            for (t in ((n = this._core.settings), this._handlers))
              this.$element.off(t, this._handlers[t]);
            for (e in this._controls)
              "$relative" === e && n.navContainer
                ? this._controls[e].html("")
                : this._controls[e].remove();
            for (o in this.overides) this._core[o] = this._overrides[o];
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (n.prototype.update = function () {
            var t,
              e,
              i = this._core.clones().length / 2,
              o = i + this._core.items().length,
              n = this._core.maximum(!0),
              s = this._core.settings,
              r =
                s.center || s.autoWidth || s.dotsData
                  ? 1
                  : s.dotsEach || s.items;
            if (
              ("page" !== s.slideBy &&
                (s.slideBy = Math.min(s.slideBy, s.items)),
              s.dots || "page" == s.slideBy)
            )
              for (this._pages = [], t = i, e = 0, 0; t < o; t++) {
                if (e >= r || 0 === e) {
                  if (
                    (this._pages.push({
                      start: Math.min(n, t - i),
                      end: t - i + r - 1,
                    }),
                    Math.min(n, t - i) === n)
                  )
                    break;
                  (e = 0), 0;
                }
                e += this._core.mergers(this._core.relative(t));
              }
          }),
          (n.prototype.draw = function () {
            var e,
              i = this._core.settings,
              o = this._core.items().length <= i.items,
              n = this._core.relative(this._core.current()),
              s = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || o),
              i.nav &&
                (this._controls.$previous.toggleClass(
                  "disabled",
                  !s && n <= this._core.minimum(!0)
                ),
                this._controls.$next.toggleClass(
                  "disabled",
                  !s && n >= this._core.maximum(!0)
                )),
              this._controls.$absolute.toggleClass("disabled", !i.dots || o),
              i.dots &&
                ((e =
                  this._pages.length -
                  this._controls.$absolute.children().length),
                i.dotsData && 0 !== e
                  ? this._controls.$absolute.html(this._templates.join(""))
                  : e > 0
                  ? this._controls.$absolute.append(
                      new Array(e + 1).join(this._templates[0])
                    )
                  : e < 0 &&
                    this._controls.$absolute.children().slice(e).remove(),
                this._controls.$absolute.find(".active").removeClass("active"),
                this._controls.$absolute
                  .children()
                  .eq(t.inArray(this.current(), this._pages))
                  .addClass("active"));
          }),
          (n.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
              index: t.inArray(this.current(), this._pages),
              count: this._pages.length,
              size:
                i &&
                (i.center || i.autoWidth || i.dotsData
                  ? 1
                  : i.dotsEach || i.items),
            };
          }),
          (n.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t
              .grep(
                this._pages,
                t.proxy(function (t, i) {
                  return t.start <= e && t.end >= e;
                }, this)
              )
              .pop();
          }),
          (n.prototype.getPosition = function (e) {
            var i,
              o,
              n = this._core.settings;
            return (
              "page" == n.slideBy
                ? ((i = t.inArray(this.current(), this._pages)),
                  (o = this._pages.length),
                  e ? ++i : --i,
                  (i = this._pages[((i % o) + o) % o].start))
                : ((i = this._core.relative(this._core.current())),
                  (o = this._core.items().length),
                  e ? (i += n.slideBy) : (i -= n.slideBy)),
              i
            );
          }),
          (n.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
          }),
          (n.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
          }),
          (n.prototype.to = function (e, i, o) {
            var n;
            !o && this._pages.length
              ? ((n = this._pages.length),
                t.proxy(this._overrides.to, this._core)(
                  this._pages[((e % n) + n) % n].start,
                  i
                ))
              : t.proxy(this._overrides.to, this._core)(e, i);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        "use strict";
        var n = function (i) {
          (this._core = i),
            (this._hashes = {}),
            (this.$element = this._core.$element),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace &&
                  "URLHash" === this._core.settings.startPosition &&
                  t(e).trigger("hashchange.owl.navigation");
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content)
                    .find("[data-hash]")
                    .addBack("[data-hash]")
                    .attr("data-hash");
                  if (!i) return;
                  this._hashes[i] = e.content;
                }
              }, this),
              "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                  var o = this._core.items(
                      this._core.relative(this._core.current())
                    ),
                    n = t
                      .map(this._hashes, function (t, e) {
                        return t === o ? e : null;
                      })
                      .join();
                  if (!n || e.location.hash.slice(1) === n) return;
                  e.location.hash = n;
                }
              }, this),
            }),
            (this._core.options = t.extend({}, n.Defaults, this._core.options)),
            this.$element.on(this._handlers),
            t(e).on(
              "hashchange.owl.navigation",
              t.proxy(function (t) {
                var i = e.location.hash.substring(1),
                  o = this._core.$stage.children(),
                  n = this._hashes[i] && o.index(this._hashes[i]);
                void 0 !== n &&
                  n !== this._core.current() &&
                  this._core.to(this._core.relative(n), !1, !0);
              }, this)
            );
        };
        (n.Defaults = { URLhashListener: !1 }),
          (n.prototype.destroy = function () {
            var i, o;
            for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
              this._core.$element.off(i, this._handlers[i]);
            for (o in Object.getOwnPropertyNames(this))
              "function" != typeof this[o] && (this[o] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, o) {
        var n = t("<support>").get(0).style,
          s = "Webkit Moz O ms".split(" "),
          r = {
            transition: {
              end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend",
              },
            },
            animation: {
              end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend",
              },
            },
          },
          a = function () {
            return !!h("transform");
          },
          l = function () {
            return !!h("perspective");
          },
          c = function () {
            return !!h("animation");
          };
        function h(e, i) {
          var r = !1,
            a = e.charAt(0).toUpperCase() + e.slice(1);
          return (
            t.each((e + " " + s.join(a + " ") + a).split(" "), function (t, e) {
              if (n[e] !== o) return (r = !i || e), !1;
            }),
            r
          );
        }
        function d(t) {
          return h(t, !0);
        }
        (function () {
          return !!h("transition");
        })() &&
          ((t.support.transition = new String(d("transition"))),
          (t.support.transition.end = r.transition.end[t.support.transition])),
          c() &&
            ((t.support.animation = new String(d("animation"))),
            (t.support.animation.end = r.animation.end[t.support.animation])),
          a() &&
            ((t.support.transform = new String(d("transform"))),
            (t.support.transform3d = l()));
      })(window.Zepto || window.jQuery, window, document);
  },
  function (t, e, i) {
    var o, n, s;
    !(function (r) {
      "use strict";
      (n = [i(0)]),
        void 0 ===
          (s =
            "function" ==
            typeof (o = function (t) {
              var e = window.Slick || {};
              ((e = (function () {
                var e = 0;
                return function (i, o) {
                  var n,
                    s = this;
                  (s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow:
                      '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow:
                      '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                      return t('<button type="button" />').text(i + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                  }),
                    (s.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1,
                    }),
                    t.extend(s, s.initials),
                    (s.activeBreakpoint = null),
                    (s.animType = null),
                    (s.animProp = null),
                    (s.breakpoints = []),
                    (s.breakpointSettings = []),
                    (s.cssTransitions = !1),
                    (s.focussed = !1),
                    (s.interrupted = !1),
                    (s.hidden = "hidden"),
                    (s.paused = !0),
                    (s.positionProp = null),
                    (s.respondTo = null),
                    (s.rowCount = 1),
                    (s.shouldClick = !0),
                    (s.$slider = t(i)),
                    (s.$slidesCache = null),
                    (s.transformType = null),
                    (s.transitionType = null),
                    (s.visibilityChange = "visibilitychange"),
                    (s.windowWidth = 0),
                    (s.windowTimer = null),
                    (n = t(i).data("slick") || {}),
                    (s.options = t.extend({}, s.defaults, o, n)),
                    (s.currentSlide = s.options.initialSlide),
                    (s.originalSettings = s.options),
                    void 0 !== document.mozHidden
                      ? ((s.hidden = "mozHidden"),
                        (s.visibilityChange = "mozvisibilitychange"))
                      : void 0 !== document.webkitHidden &&
                        ((s.hidden = "webkitHidden"),
                        (s.visibilityChange = "webkitvisibilitychange"));
                  (s.autoPlay = t.proxy(s.autoPlay, s)),
                    (s.autoPlayClear = t.proxy(s.autoPlayClear, s)),
                    (s.autoPlayIterator = t.proxy(s.autoPlayIterator, s)),
                    (s.changeSlide = t.proxy(s.changeSlide, s)),
                    (s.clickHandler = t.proxy(s.clickHandler, s)),
                    (s.selectHandler = t.proxy(s.selectHandler, s)),
                    (s.setPosition = t.proxy(s.setPosition, s)),
                    (s.swipeHandler = t.proxy(s.swipeHandler, s)),
                    (s.dragHandler = t.proxy(s.dragHandler, s)),
                    (s.keyHandler = t.proxy(s.keyHandler, s)),
                    (s.instanceUid = e++),
                    (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    s.registerBreakpoints(),
                    s.init(!0);
                };
              })()).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (e.prototype.addSlide = e.prototype.slickAdd =
                  function (e, i, o) {
                    var n = this;
                    if ("boolean" == typeof i) (o = i), (i = null);
                    else if (i < 0 || i >= n.slideCount) return !1;
                    n.unload(),
                      "number" == typeof i
                        ? 0 === i && 0 === n.$slides.length
                          ? t(e).appendTo(n.$slideTrack)
                          : o
                          ? t(e).insertBefore(n.$slides.eq(i))
                          : t(e).insertAfter(n.$slides.eq(i))
                        : !0 === o
                        ? t(e).prependTo(n.$slideTrack)
                        : t(e).appendTo(n.$slideTrack),
                      (n.$slides = n.$slideTrack.children(this.options.slide)),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.append(n.$slides),
                      n.$slides.each(function (e, i) {
                        t(i).attr("data-slick-index", e);
                      }),
                      (n.$slidesCache = n.$slides),
                      n.reinit();
                  }),
                (e.prototype.animateHeight = function () {
                  var t = this;
                  if (
                    1 === t.options.slidesToShow &&
                    !0 === t.options.adaptiveHeight &&
                    !1 === t.options.vertical
                  ) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                  }
                }),
                (e.prototype.animateSlide = function (e, i) {
                  var o = {},
                    n = this;
                  n.animateHeight(),
                    !0 === n.options.rtl &&
                      !1 === n.options.vertical &&
                      (e = -e),
                    !1 === n.transformsEnabled
                      ? !1 === n.options.vertical
                        ? n.$slideTrack.animate(
                            { left: e },
                            n.options.speed,
                            n.options.easing,
                            i
                          )
                        : n.$slideTrack.animate(
                            { top: e },
                            n.options.speed,
                            n.options.easing,
                            i
                          )
                      : !1 === n.cssTransitions
                      ? (!0 === n.options.rtl &&
                          (n.currentLeft = -n.currentLeft),
                        t({ animStart: n.currentLeft }).animate(
                          { animStart: e },
                          {
                            duration: n.options.speed,
                            easing: n.options.easing,
                            step: function (t) {
                              (t = Math.ceil(t)),
                                !1 === n.options.vertical
                                  ? ((o[n.animType] =
                                      "translate(" + t + "px, 0px)"),
                                    n.$slideTrack.css(o))
                                  : ((o[n.animType] =
                                      "translate(0px," + t + "px)"),
                                    n.$slideTrack.css(o));
                            },
                            complete: function () {
                              i && i.call();
                            },
                          }
                        ))
                      : (n.applyTransition(),
                        (e = Math.ceil(e)),
                        !1 === n.options.vertical
                          ? (o[n.animType] =
                              "translate3d(" + e + "px, 0px, 0px)")
                          : (o[n.animType] =
                              "translate3d(0px," + e + "px, 0px)"),
                        n.$slideTrack.css(o),
                        i &&
                          setTimeout(function () {
                            n.disableTransition(), i.call();
                          }, n.options.speed));
                }),
                (e.prototype.getNavTarget = function () {
                  var e = this.options.asNavFor;
                  return e && null !== e && (e = t(e).not(this.$slider)), e;
                }),
                (e.prototype.asNavFor = function (e) {
                  var i = this.getNavTarget();
                  null !== i &&
                    "object" == typeof i &&
                    i.each(function () {
                      var i = t(this).slick("getSlick");
                      i.unslicked || i.slideHandler(e, !0);
                    });
                }),
                (e.prototype.applyTransition = function (t) {
                  var e = this,
                    i = {};
                  !1 === e.options.fade
                    ? (i[e.transitionType] =
                        e.transformType +
                        " " +
                        e.options.speed +
                        "ms " +
                        e.options.cssEase)
                    : (i[e.transitionType] =
                        "opacity " +
                        e.options.speed +
                        "ms " +
                        e.options.cssEase),
                    !1 === e.options.fade
                      ? e.$slideTrack.css(i)
                      : e.$slides.eq(t).css(i);
                }),
                (e.prototype.autoPlay = function () {
                  var t = this;
                  t.autoPlayClear(),
                    t.slideCount > t.options.slidesToShow &&
                      (t.autoPlayTimer = setInterval(
                        t.autoPlayIterator,
                        t.options.autoplaySpeed
                      ));
                }),
                (e.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (e.prototype.autoPlayIterator = function () {
                  var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                  t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                      (1 === t.direction &&
                      t.currentSlide + 1 === t.slideCount - 1
                        ? (t.direction = 0)
                        : 0 === t.direction &&
                          ((e = t.currentSlide - t.options.slidesToScroll),
                          t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
                }),
                (e.prototype.buildArrows = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    ((e.$prevArrow = t(e.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (e.$nextArrow = t(e.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    e.slideCount > e.options.slidesToShow
                      ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                        e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                        !0 !== e.options.infinite &&
                          e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (e.prototype.buildDots = function () {
                  var e,
                    i,
                    o = this;
                  if (
                    !0 === o.options.dots &&
                    o.slideCount > o.options.slidesToShow
                  ) {
                    for (
                      o.$slider.addClass("slick-dotted"),
                        i = t("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                      e <= o.getDotCount();
                      e += 1
                    )
                      i.append(
                        t("<li />").append(
                          o.options.customPaging.call(this, o, e)
                        )
                      );
                    (o.$dots = i.appendTo(o.options.appendDots)),
                      o.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (e.prototype.buildOut = function () {
                  var e = this;
                  (e.$slides = e.$slider
                    .children(e.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, i) {
                      t(i)
                        .attr("data-slick-index", e)
                        .data("originalStyling", t(i).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack =
                      0 === e.slideCount
                        ? t('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (e.$list = e.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode &&
                      !0 !== e.options.swipeToSlide) ||
                      (e.options.slidesToScroll = 1),
                    t("img[data-lazy]", e.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses(
                      "number" == typeof e.currentSlide ? e.currentSlide : 0
                    ),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
                }),
                (e.prototype.buildRows = function () {
                  var t,
                    e,
                    i,
                    o,
                    n,
                    s,
                    r,
                    a = this;
                  if (
                    ((o = document.createDocumentFragment()),
                    (s = a.$slider.children()),
                    a.options.rows > 0)
                  ) {
                    for (
                      r = a.options.slidesPerRow * a.options.rows,
                        n = Math.ceil(s.length / r),
                        t = 0;
                      t < n;
                      t++
                    ) {
                      var l = document.createElement("div");
                      for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                          var h = t * r + (e * a.options.slidesPerRow + i);
                          s.get(h) && c.appendChild(s.get(h));
                        }
                        l.appendChild(c);
                      }
                      o.appendChild(l);
                    }
                    a.$slider.empty().append(o),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / a.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (e.prototype.checkResponsive = function (e, i) {
                  var o,
                    n,
                    s,
                    r = this,
                    a = !1,
                    l = r.$slider.width(),
                    c = window.innerWidth || t(window).width();
                  if (
                    ("window" === r.respondTo
                      ? (s = c)
                      : "slider" === r.respondTo
                      ? (s = l)
                      : "min" === r.respondTo && (s = Math.min(c, l)),
                    r.options.responsive &&
                      r.options.responsive.length &&
                      null !== r.options.responsive)
                  ) {
                    for (o in ((n = null), r.breakpoints))
                      r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                          ? s < r.breakpoints[o] && (n = r.breakpoints[o])
                          : s > r.breakpoints[o] && (n = r.breakpoints[o]));
                    null !== n
                      ? null !== r.activeBreakpoint
                        ? (n !== r.activeBreakpoint || i) &&
                          ((r.activeBreakpoint = n),
                          "unslick" === r.breakpointSettings[n]
                            ? r.unslick(n)
                            : ((r.options = t.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[n]
                              )),
                              !0 === e &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(e)),
                          (a = n))
                        : ((r.activeBreakpoint = n),
                          "unslick" === r.breakpointSettings[n]
                            ? r.unslick(n)
                            : ((r.options = t.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[n]
                              )),
                              !0 === e &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(e)),
                          (a = n))
                      : null !== r.activeBreakpoint &&
                        ((r.activeBreakpoint = null),
                        (r.options = r.originalSettings),
                        !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e),
                        (a = n)),
                      e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
                  }
                }),
                (e.prototype.changeSlide = function (e, i) {
                  var o,
                    n,
                    s,
                    r = this,
                    a = t(e.currentTarget);
                  switch (
                    (a.is("a") && e.preventDefault(),
                    a.is("li") || (a = a.closest("li")),
                    (s = r.slideCount % r.options.slidesToScroll != 0),
                    (o = s
                      ? 0
                      : (r.slideCount - r.currentSlide) %
                        r.options.slidesToScroll),
                    e.data.message)
                  ) {
                    case "previous":
                      (n =
                        0 === o
                          ? r.options.slidesToScroll
                          : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide - n, !1, i);
                      break;
                    case "next":
                      (n = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide + n, !1, i);
                      break;
                    case "index":
                      var l =
                        0 === e.data.index
                          ? 0
                          : e.data.index ||
                            a.index() * r.options.slidesToScroll;
                      r.slideHandler(r.checkNavigable(l), !1, i),
                        a.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (e.prototype.checkNavigable = function (t) {
                  var e, i;
                  if (
                    ((e = this.getNavigableIndexes()),
                    (i = 0),
                    t > e[e.length - 1])
                  )
                    t = e[e.length - 1];
                  else
                    for (var o in e) {
                      if (t < e[o]) {
                        t = i;
                        break;
                      }
                      i = e[o];
                    }
                  return t;
                }),
                (e.prototype.cleanUpEvents = function () {
                  var e = this;
                  e.options.dots &&
                    null !== e.$dots &&
                    (t("li", e.$dots)
                      .off("click.slick", e.changeSlide)
                      .off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
                      .off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility &&
                      e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                      e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                      !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                          e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                          e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off(
                      "touchstart.slick mousedown.slick",
                      e.swipeHandler
                    ),
                    e.$list.off(
                      "touchmove.slick mousemove.slick",
                      e.swipeHandler
                    ),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      e.swipeHandler
                    ),
                    e.$list.off("click.slick", e.clickHandler),
                    t(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility &&
                      e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                    t(window).off(
                      "orientationchange.slick.slick-" + e.instanceUid,
                      e.orientationChange
                    ),
                    t(window).off(
                      "resize.slick.slick-" + e.instanceUid,
                      e.resize
                    ),
                    t("[draggable!=true]", e.$slideTrack).off(
                      "dragstart",
                      e.preventDefault
                    ),
                    t(window).off(
                      "load.slick.slick-" + e.instanceUid,
                      e.setPosition
                    );
                }),
                (e.prototype.cleanUpSlideEvents = function () {
                  var e = this;
                  e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                    e.$list.off(
                      "mouseleave.slick",
                      t.proxy(e.interrupt, e, !1)
                    );
                }),
                (e.prototype.cleanUpRows = function () {
                  var t,
                    e = this;
                  e.options.rows > 0 &&
                    ((t = e.$slides.children().children()).removeAttr("style"),
                    e.$slider.empty().append(t));
                }),
                (e.prototype.clickHandler = function (t) {
                  !1 === this.shouldClick &&
                    (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault());
                }),
                (e.prototype.destroy = function (e) {
                  var i = this;
                  i.autoPlayClear(),
                    (i.touchObject = {}),
                    i.cleanUpEvents(),
                    t(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow &&
                      i.$prevArrow.length &&
                      (i.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.prevArrow) &&
                        i.$prevArrow.remove()),
                    i.$nextArrow &&
                      i.$nextArrow.length &&
                      (i.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.nextArrow) &&
                        i.$nextArrow.remove()),
                    i.$slides &&
                      (i.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          t(this).attr(
                            "style",
                            t(this).data("originalStyling")
                          );
                        }),
                      i.$slideTrack.children(this.options.slide).detach(),
                      i.$slideTrack.detach(),
                      i.$list.detach(),
                      i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    (i.unslicked = !0),
                    e || i.$slider.trigger("destroy", [i]);
                }),
                (e.prototype.disableTransition = function (t) {
                  var e = this,
                    i = {};
                  (i[e.transitionType] = ""),
                    !1 === e.options.fade
                      ? e.$slideTrack.css(i)
                      : e.$slides.eq(t).css(i);
                }),
                (e.prototype.fadeSlide = function (t, e) {
                  var i = this;
                  !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
                      i.$slides
                        .eq(t)
                        .animate(
                          { opacity: 1 },
                          i.options.speed,
                          i.options.easing,
                          e
                        ))
                    : (i.applyTransition(t),
                      i.$slides
                        .eq(t)
                        .css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                        setTimeout(function () {
                          i.disableTransition(t), e.call();
                        }, i.options.speed));
                }),
                (e.prototype.fadeSlideOut = function (t) {
                  var e = this;
                  !1 === e.cssTransitions
                    ? e.$slides
                        .eq(t)
                        .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                        )
                    : (e.applyTransition(t),
                      e.$slides
                        .eq(t)
                        .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
                }),
                (e.prototype.filterSlides = e.prototype.slickFilter =
                  function (t) {
                    var e = this;
                    null !== t &&
                      ((e.$slidesCache = e.$slides),
                      e.unload(),
                      e.$slideTrack.children(this.options.slide).detach(),
                      e.$slidesCache.filter(t).appendTo(e.$slideTrack),
                      e.reinit());
                  }),
                (e.prototype.focusHandler = function () {
                  var e = this;
                  e.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (i) {
                      i.stopImmediatePropagation();
                      var o = t(this);
                      setTimeout(function () {
                        e.options.pauseOnFocus &&
                          ((e.focussed = o.is(":focus")), e.autoPlay());
                      }, 0);
                    });
                }),
                (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
                  function () {
                    return this.currentSlide;
                  }),
                (e.prototype.getDotCount = function () {
                  var t = this,
                    e = 0,
                    i = 0,
                    o = 0;
                  if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++o;
                    else
                      for (; e < t.slideCount; )
                        ++o,
                          (e = i + t.options.slidesToScroll),
                          (i +=
                            t.options.slidesToScroll <= t.options.slidesToShow
                              ? t.options.slidesToScroll
                              : t.options.slidesToShow);
                  else if (!0 === t.options.centerMode) o = t.slideCount;
                  else if (t.options.asNavFor)
                    for (; e < t.slideCount; )
                      ++o,
                        (e = i + t.options.slidesToScroll),
                        (i +=
                          t.options.slidesToScroll <= t.options.slidesToShow
                            ? t.options.slidesToScroll
                            : t.options.slidesToShow);
                  else
                    o =
                      1 +
                      Math.ceil(
                        (t.slideCount - t.options.slidesToShow) /
                          t.options.slidesToScroll
                      );
                  return o - 1;
                }),
                (e.prototype.getLeft = function (t) {
                  var e,
                    i,
                    o,
                    n,
                    s = this,
                    r = 0;
                  return (
                    (s.slideOffset = 0),
                    (i = s.$slides.first().outerHeight(!0)),
                    !0 === s.options.infinite
                      ? (s.slideCount > s.options.slidesToShow &&
                          ((s.slideOffset =
                            s.slideWidth * s.options.slidesToShow * -1),
                          (n = -1),
                          !0 === s.options.vertical &&
                            !0 === s.options.centerMode &&
                            (2 === s.options.slidesToShow
                              ? (n = -1.5)
                              : 1 === s.options.slidesToShow && (n = -2)),
                          (r = i * s.options.slidesToShow * n)),
                        s.slideCount % s.options.slidesToScroll != 0 &&
                          t + s.options.slidesToScroll > s.slideCount &&
                          s.slideCount > s.options.slidesToShow &&
                          (t > s.slideCount
                            ? ((s.slideOffset =
                                (s.options.slidesToShow - (t - s.slideCount)) *
                                s.slideWidth *
                                -1),
                              (r =
                                (s.options.slidesToShow - (t - s.slideCount)) *
                                i *
                                -1))
                            : ((s.slideOffset =
                                (s.slideCount % s.options.slidesToScroll) *
                                s.slideWidth *
                                -1),
                              (r =
                                (s.slideCount % s.options.slidesToScroll) *
                                i *
                                -1))))
                      : t + s.options.slidesToShow > s.slideCount &&
                        ((s.slideOffset =
                          (t + s.options.slidesToShow - s.slideCount) *
                          s.slideWidth),
                        (r = (t + s.options.slidesToShow - s.slideCount) * i)),
                    s.slideCount <= s.options.slidesToShow &&
                      ((s.slideOffset = 0), (r = 0)),
                    !0 === s.options.centerMode &&
                    s.slideCount <= s.options.slidesToShow
                      ? (s.slideOffset =
                          (s.slideWidth * Math.floor(s.options.slidesToShow)) /
                            2 -
                          (s.slideWidth * s.slideCount) / 2)
                      : !0 === s.options.centerMode && !0 === s.options.infinite
                      ? (s.slideOffset +=
                          s.slideWidth *
                            Math.floor(s.options.slidesToShow / 2) -
                          s.slideWidth)
                      : !0 === s.options.centerMode &&
                        ((s.slideOffset = 0),
                        (s.slideOffset +=
                          s.slideWidth *
                          Math.floor(s.options.slidesToShow / 2))),
                    (e =
                      !1 === s.options.vertical
                        ? t * s.slideWidth * -1 + s.slideOffset
                        : t * i * -1 + r),
                    !0 === s.options.variableWidth &&
                      ((o =
                        s.slideCount <= s.options.slidesToShow ||
                        !1 === s.options.infinite
                          ? s.$slideTrack.children(".slick-slide").eq(t)
                          : s.$slideTrack
                              .children(".slick-slide")
                              .eq(t + s.options.slidesToShow)),
                      (e =
                        !0 === s.options.rtl
                          ? o[0]
                            ? -1 *
                              (s.$slideTrack.width() -
                                o[0].offsetLeft -
                                o.width())
                            : 0
                          : o[0]
                          ? -1 * o[0].offsetLeft
                          : 0),
                      !0 === s.options.centerMode &&
                        ((o =
                          s.slideCount <= s.options.slidesToShow ||
                          !1 === s.options.infinite
                            ? s.$slideTrack.children(".slick-slide").eq(t)
                            : s.$slideTrack
                                .children(".slick-slide")
                                .eq(t + s.options.slidesToShow + 1)),
                        (e =
                          !0 === s.options.rtl
                            ? o[0]
                              ? -1 *
                                (s.$slideTrack.width() -
                                  o[0].offsetLeft -
                                  o.width())
                              : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                        (e += (s.$list.width() - o.outerWidth()) / 2))),
                    e
                  );
                }),
                (e.prototype.getOption = e.prototype.slickGetOption =
                  function (t) {
                    return this.options[t];
                  }),
                (e.prototype.getNavigableIndexes = function () {
                  var t,
                    e = this,
                    i = 0,
                    o = 0,
                    n = [];
                  for (
                    !1 === e.options.infinite
                      ? (t = e.slideCount)
                      : ((i = -1 * e.options.slidesToScroll),
                        (o = -1 * e.options.slidesToScroll),
                        (t = 2 * e.slideCount));
                    i < t;

                  )
                    n.push(i),
                      (i = o + e.options.slidesToScroll),
                      (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                          ? e.options.slidesToScroll
                          : e.options.slidesToShow);
                  return n;
                }),
                (e.prototype.getSlick = function () {
                  return this;
                }),
                (e.prototype.getSlideCount = function () {
                  var e,
                    i,
                    o = this;
                  return (
                    (i =
                      !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                    !0 === o.options.swipeToSlide
                      ? (o.$slideTrack
                          .find(".slick-slide")
                          .each(function (n, s) {
                            if (
                              s.offsetLeft - i + t(s).outerWidth() / 2 >
                              -1 * o.swipeLeft
                            )
                              return (e = s), !1;
                          }),
                        Math.abs(
                          t(e).attr("data-slick-index") - o.currentSlide
                        ) || 1)
                      : o.options.slidesToScroll
                  );
                }),
                (e.prototype.goTo = e.prototype.slickGoTo =
                  function (t, e) {
                    this.changeSlide(
                      { data: { message: "index", index: parseInt(t) } },
                      e
                    );
                  }),
                (e.prototype.init = function (e) {
                  var i = this;
                  t(i.$slider).hasClass("slick-initialized") ||
                    (t(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                    e && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && ((i.paused = !1), i.autoPlay());
                }),
                (e.prototype.initADA = function () {
                  var e = this,
                    i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    o = e.getNavigableIndexes().filter(function (t) {
                      return t >= 0 && t < e.slideCount;
                    });
                  e.$slides
                    .add(e.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== e.$dots &&
                      (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (i) {
                          var n = o.indexOf(i);
                          if (
                            (t(this).attr({
                              role: "tabpanel",
                              id: "slick-slide" + e.instanceUid + i,
                              tabindex: -1,
                            }),
                            -1 !== n)
                          ) {
                            var s = "slick-slide-control" + e.instanceUid + n;
                            t("#" + s).length &&
                              t(this).attr({ "aria-describedby": s });
                          }
                        }),
                      e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (n) {
                          var s = o[n];
                          t(this).attr({ role: "presentation" }),
                            t(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + e.instanceUid + n,
                                "aria-controls":
                                  "slick-slide" + e.instanceUid + s,
                                "aria-label": n + 1 + " of " + i,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var n = e.currentSlide, s = n + e.options.slidesToShow;
                    n < s;
                    n++
                  )
                    e.options.focusOnChange
                      ? e.$slides.eq(n).attr({ tabindex: "0" })
                      : e.$slides.eq(n).removeAttr("tabindex");
                  e.activateADA();
                }),
                (e.prototype.initArrowEvents = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        t.changeSlide
                      ),
                    t.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility &&
                      (t.$prevArrow.on("keydown.slick", t.keyHandler),
                      t.$nextArrow.on("keydown.slick", t.keyHandler)));
                }),
                (e.prototype.initDotEvents = function () {
                  var e = this;
                  !0 === e.options.dots &&
                    e.slideCount > e.options.slidesToShow &&
                    (t("li", e.$dots).on(
                      "click.slick",
                      { message: "index" },
                      e.changeSlide
                    ),
                    !0 === e.options.accessibility &&
                      e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots &&
                      !0 === e.options.pauseOnDotsHover &&
                      e.slideCount > e.options.slidesToShow &&
                      t("li", e.$dots)
                        .on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.initSlideEvents = function () {
                  var e = this;
                  e.options.pauseOnHover &&
                    (e.$list.on(
                      "mouseenter.slick",
                      t.proxy(e.interrupt, e, !0)
                    ),
                    e.$list.on(
                      "mouseleave.slick",
                      t.proxy(e.interrupt, e, !1)
                    ));
                }),
                (e.prototype.initializeEvents = function () {
                  var e = this;
                  e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      e.swipeHandler
                    ),
                    e.$list.on("click.slick", e.clickHandler),
                    t(document).on(
                      e.visibilityChange,
                      t.proxy(e.visibility, e)
                    ),
                    !0 === e.options.accessibility &&
                      e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                    t(window).on(
                      "orientationchange.slick.slick-" + e.instanceUid,
                      t.proxy(e.orientationChange, e)
                    ),
                    t(window).on(
                      "resize.slick.slick-" + e.instanceUid,
                      t.proxy(e.resize, e)
                    ),
                    t("[draggable!=true]", e.$slideTrack).on(
                      "dragstart",
                      e.preventDefault
                    ),
                    t(window).on(
                      "load.slick.slick-" + e.instanceUid,
                      e.setPosition
                    ),
                    t(e.setPosition);
                }),
                (e.prototype.initUI = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.show(), t.$nextArrow.show()),
                    !0 === t.options.dots &&
                      t.slideCount > t.options.slidesToShow &&
                      t.$dots.show();
                }),
                (e.prototype.keyHandler = function (t) {
                  var e = this;
                  t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === e.options.accessibility
                      ? e.changeSlide({
                          data: {
                            message: !0 === e.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === t.keyCode &&
                        !0 === e.options.accessibility &&
                        e.changeSlide({
                          data: {
                            message: !0 === e.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (e.prototype.lazyLoad = function () {
                  var e,
                    i,
                    o,
                    n = this;
                  function s(e) {
                    t("img[data-lazy]", e).each(function () {
                      var e = t(this),
                        i = t(this).attr("data-lazy"),
                        o = t(this).attr("data-srcset"),
                        s =
                          t(this).attr("data-sizes") ||
                          n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                      (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                          o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                            e
                              .attr("src", i)
                              .animate({ opacity: 1 }, 200, function () {
                                e.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            n.$slider.trigger("lazyLoaded", [n, e, i]);
                        });
                      }),
                        (r.onerror = function () {
                          e
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            n.$slider.trigger("lazyLoadError", [n, e, i]);
                        }),
                        (r.src = i);
                    });
                  }
                  if (
                    (!0 === n.options.centerMode
                      ? !0 === n.options.infinite
                        ? ((i =
                            n.currentSlide + (n.options.slidesToShow / 2 + 1)),
                          (o = i + n.options.slidesToShow + 2))
                        : ((i = Math.max(
                            0,
                            n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (o =
                            n.options.slidesToShow / 2 +
                            1 +
                            2 +
                            n.currentSlide))
                      : ((i = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                        (o = Math.ceil(i + n.options.slidesToShow)),
                        !0 === n.options.fade &&
                          (i > 0 && i--, o <= n.slideCount && o++)),
                    (e = n.$slider.find(".slick-slide").slice(i, o)),
                    "anticipated" === n.options.lazyLoad)
                  )
                    for (
                      var r = i - 1,
                        a = o,
                        l = n.$slider.find(".slick-slide"),
                        c = 0;
                      c < n.options.slidesToScroll;
                      c++
                    )
                      r < 0 && (r = n.slideCount - 1),
                        (e = (e = e.add(l.eq(r))).add(l.eq(a))),
                        r--,
                        a++;
                  s(e),
                    n.slideCount <= n.options.slidesToShow
                      ? s(n.$slider.find(".slick-slide"))
                      : n.currentSlide >= n.slideCount - n.options.slidesToShow
                      ? s(
                          n.$slider
                            .find(".slick-cloned")
                            .slice(0, n.options.slidesToShow)
                        )
                      : 0 === n.currentSlide &&
                        s(
                          n.$slider
                            .find(".slick-cloned")
                            .slice(-1 * n.options.slidesToShow)
                        );
                }),
                (e.prototype.loadSlider = function () {
                  var t = this;
                  t.setPosition(),
                    t.$slideTrack.css({ opacity: 1 }),
                    t.$slider.removeClass("slick-loading"),
                    t.initUI(),
                    "progressive" === t.options.lazyLoad &&
                      t.progressiveLazyLoad();
                }),
                (e.prototype.next = e.prototype.slickNext =
                  function () {
                    this.changeSlide({ data: { message: "next" } });
                  }),
                (e.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (e.prototype.pause = e.prototype.slickPause =
                  function () {
                    this.autoPlayClear(), (this.paused = !0);
                  }),
                (e.prototype.play = e.prototype.slickPlay =
                  function () {
                    var t = this;
                    t.autoPlay(),
                      (t.options.autoplay = !0),
                      (t.paused = !1),
                      (t.focussed = !1),
                      (t.interrupted = !1);
                  }),
                (e.prototype.postSlide = function (e) {
                  var i = this;
                  if (
                    !i.unslicked &&
                    (i.$slider.trigger("afterChange", [i, e]),
                    (i.animating = !1),
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    (i.swipeLeft = null),
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility &&
                      (i.initADA(), i.options.focusOnChange))
                  ) {
                    var o = t(i.$slides.get(i.currentSlide));
                    o.attr("tabindex", 0).focus();
                  }
                }),
                (e.prototype.prev = e.prototype.slickPrev =
                  function () {
                    this.changeSlide({ data: { message: "previous" } });
                  }),
                (e.prototype.preventDefault = function (t) {
                  t.preventDefault();
                }),
                (e.prototype.progressiveLazyLoad = function (e) {
                  e = e || 1;
                  var i,
                    o,
                    n,
                    s,
                    r,
                    a = this,
                    l = t("img[data-lazy]", a.$slider);
                  l.length
                    ? ((i = l.first()),
                      (o = i.attr("data-lazy")),
                      (n = i.attr("data-srcset")),
                      (s =
                        i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload =
                        function () {
                          n && (i.attr("srcset", n), s && i.attr("sizes", s)),
                            i
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                            !0 === a.options.adaptiveHeight && a.setPosition(),
                            a.$slider.trigger("lazyLoaded", [a, i, o]),
                            a.progressiveLazyLoad();
                        }),
                      (r.onerror = function () {
                        e < 3
                          ? setTimeout(function () {
                              a.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (i
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, i, o]),
                            a.progressiveLazyLoad());
                      }),
                      (r.src = o))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (e.prototype.refresh = function (e) {
                  var i,
                    o,
                    n = this;
                  (o = n.slideCount - n.options.slidesToShow),
                    !n.options.infinite &&
                      n.currentSlide > o &&
                      (n.currentSlide = o),
                    n.slideCount <= n.options.slidesToShow &&
                      (n.currentSlide = 0),
                    (i = n.currentSlide),
                    n.destroy(!0),
                    t.extend(n, n.initials, { currentSlide: i }),
                    n.init(),
                    e ||
                      n.changeSlide(
                        { data: { message: "index", index: i } },
                        !1
                      );
                }),
                (e.prototype.registerBreakpoints = function () {
                  var e,
                    i,
                    o,
                    n = this,
                    s = n.options.responsive || null;
                  if ("array" === t.type(s) && s.length) {
                    for (e in ((n.respondTo = n.options.respondTo || "window"),
                    s))
                      if (
                        ((o = n.breakpoints.length - 1), s.hasOwnProperty(e))
                      ) {
                        for (i = s[e].breakpoint; o >= 0; )
                          n.breakpoints[o] &&
                            n.breakpoints[o] === i &&
                            n.breakpoints.splice(o, 1),
                            o--;
                        n.breakpoints.push(i),
                          (n.breakpointSettings[i] = s[e].settings);
                      }
                    n.breakpoints.sort(function (t, e) {
                      return n.options.mobileFirst ? t - e : e - t;
                    });
                  }
                }),
                (e.prototype.reinit = function () {
                  var e = this;
                  (e.$slides = e.$slideTrack
                    .children(e.options.slide)
                    .addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount &&
                      0 !== e.currentSlide &&
                      (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow &&
                      (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                    e.setSlideClasses(
                      "number" == typeof e.currentSlide ? e.currentSlide : 0
                    ),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
                }),
                (e.prototype.resize = function () {
                  var e = this;
                  t(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                      (e.windowWidth = t(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                    }, 50)));
                }),
                (e.prototype.removeSlide = e.prototype.slickRemove =
                  function (t, e, i) {
                    var o = this;
                    if (
                      ((t =
                        "boolean" == typeof t
                          ? !0 === (e = t)
                            ? 0
                            : o.slideCount - 1
                          : !0 === e
                          ? --t
                          : t),
                      o.slideCount < 1 || t < 0 || t > o.slideCount - 1)
                    )
                      return !1;
                    o.unload(),
                      !0 === i
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                            .children(this.options.slide)
                            .eq(t)
                            .remove(),
                      (o.$slides = o.$slideTrack.children(this.options.slide)),
                      o.$slideTrack.children(this.options.slide).detach(),
                      o.$slideTrack.append(o.$slides),
                      (o.$slidesCache = o.$slides),
                      o.reinit();
                  }),
                (e.prototype.setCSS = function (t) {
                  var e,
                    i,
                    o = this,
                    n = {};
                  !0 === o.options.rtl && (t = -t),
                    (e =
                      "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (n[o.positionProp] = t),
                    !1 === o.transformsEnabled
                      ? o.$slideTrack.css(n)
                      : ((n = {}),
                        !1 === o.cssTransitions
                          ? ((n[o.animType] =
                              "translate(" + e + ", " + i + ")"),
                            o.$slideTrack.css(n))
                          : ((n[o.animType] =
                              "translate3d(" + e + ", " + i + ", 0px)"),
                            o.$slideTrack.css(n)));
                }),
                (e.prototype.setDimensions = function () {
                  var t = this;
                  !1 === t.options.vertical
                    ? !0 === t.options.centerMode &&
                      t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(
                        t.$slides.first().outerHeight(!0) *
                          t.options.slidesToShow
                      ),
                      !0 === t.options.centerMode &&
                        t.$list.css({
                          padding: t.options.centerPadding + " 0px",
                        })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                      ? ((t.slideWidth = Math.ceil(
                          t.listWidth / t.options.slidesToShow
                        )),
                        t.$slideTrack.width(
                          Math.ceil(
                            t.slideWidth *
                              t.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === t.options.variableWidth
                      ? t.$slideTrack.width(5e3 * t.slideCount)
                      : ((t.slideWidth = Math.ceil(t.listWidth)),
                        t.$slideTrack.height(
                          Math.ceil(
                            t.$slides.first().outerHeight(!0) *
                              t.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var e =
                    t.$slides.first().outerWidth(!0) -
                    t.$slides.first().width();
                  !1 === t.options.variableWidth &&
                    t.$slideTrack
                      .children(".slick-slide")
                      .width(t.slideWidth - e);
                }),
                (e.prototype.setFade = function () {
                  var e,
                    i = this;
                  i.$slides.each(function (o, n) {
                    (e = i.slideWidth * o * -1),
                      !0 === i.options.rtl
                        ? t(n).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          })
                        : t(n).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    i.$slides
                      .eq(i.currentSlide)
                      .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
                }),
                (e.prototype.setHeight = function () {
                  var t = this;
                  if (
                    1 === t.options.slidesToShow &&
                    !0 === t.options.adaptiveHeight &&
                    !1 === t.options.vertical
                  ) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                  }
                }),
                (e.prototype.setOption = e.prototype.slickSetOption =
                  function () {
                    var e,
                      i,
                      o,
                      n,
                      s,
                      r = this,
                      a = !1;
                    if (
                      ("object" === t.type(arguments[0])
                        ? ((o = arguments[0]),
                          (a = arguments[1]),
                          (s = "multiple"))
                        : "string" === t.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (n = arguments[1]),
                          (a = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === t.type(arguments[1])
                            ? (s = "responsive")
                            : void 0 !== arguments[1] && (s = "single")),
                      "single" === s)
                    )
                      r.options[o] = n;
                    else if ("multiple" === s)
                      t.each(o, function (t, e) {
                        r.options[t] = e;
                      });
                    else if ("responsive" === s)
                      for (i in n)
                        if ("array" !== t.type(r.options.responsive))
                          r.options.responsive = [n[i]];
                        else {
                          for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint ===
                              n[i].breakpoint &&
                              r.options.responsive.splice(e, 1),
                              e--;
                          r.options.responsive.push(n[i]);
                        }
                    a && (r.unload(), r.reinit());
                  }),
                (e.prototype.setPosition = function () {
                  var t = this;
                  t.setDimensions(),
                    t.setHeight(),
                    !1 === t.options.fade
                      ? t.setCSS(t.getLeft(t.currentSlide))
                      : t.setFade(),
                    t.$slider.trigger("setPosition", [t]);
                }),
                (e.prototype.setProps = function () {
                  var t = this,
                    e = document.body.style;
                  (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp
                      ? t.$slider.addClass("slick-vertical")
                      : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition &&
                      void 0 === e.MozTransition &&
                      void 0 === e.msTransition) ||
                      (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade &&
                      ("number" == typeof t.options.zIndex
                        ? t.options.zIndex < 3 && (t.options.zIndex = 3)
                        : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform &&
                      ((t.animType = "OTransform"),
                      (t.transformType = "-o-transform"),
                      (t.transitionType = "OTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                      ((t.animType = "MozTransform"),
                      (t.transformType = "-moz-transform"),
                      (t.transitionType = "MozTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                      ((t.animType = "webkitTransform"),
                      (t.transformType = "-webkit-transform"),
                      (t.transitionType = "webkitTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.msTransform &&
                      ((t.animType = "msTransform"),
                      (t.transformType = "-ms-transform"),
                      (t.transitionType = "msTransition"),
                      void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform &&
                      !1 !== t.animType &&
                      ((t.animType = "transform"),
                      (t.transformType = "transform"),
                      (t.transitionType = "transition")),
                    (t.transformsEnabled =
                      t.options.useTransform &&
                      null !== t.animType &&
                      !1 !== t.animType);
                }),
                (e.prototype.setSlideClasses = function (t) {
                  var e,
                    i,
                    o,
                    n,
                    s = this;
                  if (
                    ((i = s.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    s.$slides.eq(t).addClass("slick-current"),
                    !0 === s.options.centerMode)
                  ) {
                    var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (e = Math.floor(s.options.slidesToShow / 2)),
                      !0 === s.options.infinite &&
                        (t >= e && t <= s.slideCount - 1 - e
                          ? s.$slides
                              .slice(t - e + r, t + e + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((o = s.options.slidesToShow + t),
                            i
                              .slice(o - e + 1 + r, o + e + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === t
                          ? i
                              .eq(i.length - 1 - s.options.slidesToShow)
                              .addClass("slick-center")
                          : t === s.slideCount - 1 &&
                            i
                              .eq(s.options.slidesToShow)
                              .addClass("slick-center")),
                      s.$slides.eq(t).addClass("slick-center");
                  } else
                    t >= 0 && t <= s.slideCount - s.options.slidesToShow
                      ? s.$slides
                          .slice(t, t + s.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : i.length <= s.options.slidesToShow
                      ? i.addClass("slick-active").attr("aria-hidden", "false")
                      : ((n = s.slideCount % s.options.slidesToShow),
                        (o =
                          !0 === s.options.infinite
                            ? s.options.slidesToShow + t
                            : t),
                        s.options.slidesToShow == s.options.slidesToScroll &&
                        s.slideCount - t < s.options.slidesToShow
                          ? i
                              .slice(o - (s.options.slidesToShow - n), o + n)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : i
                              .slice(o, o + s.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== s.options.lazyLoad &&
                    "anticipated" !== s.options.lazyLoad) ||
                    s.lazyLoad();
                }),
                (e.prototype.setupInfinite = function () {
                  var e,
                    i,
                    o,
                    n = this;
                  if (
                    (!0 === n.options.fade && (n.options.centerMode = !1),
                    !0 === n.options.infinite &&
                      !1 === n.options.fade &&
                      ((i = null), n.slideCount > n.options.slidesToShow))
                  ) {
                    for (
                      o =
                        !0 === n.options.centerMode
                          ? n.options.slidesToShow + 1
                          : n.options.slidesToShow,
                        e = n.slideCount;
                      e > n.slideCount - o;
                      e -= 1
                    )
                      (i = e - 1),
                        t(n.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i - n.slideCount)
                          .prependTo(n.$slideTrack)
                          .addClass("slick-cloned");
                    for (e = 0; e < o + n.slideCount; e += 1)
                      (i = e),
                        t(n.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i + n.slideCount)
                          .appendTo(n.$slideTrack)
                          .addClass("slick-cloned");
                    n.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        t(this).attr("id", "");
                      });
                  }
                }),
                (e.prototype.interrupt = function (t) {
                  t || this.autoPlay(), (this.interrupted = t);
                }),
                (e.prototype.selectHandler = function (e) {
                  var i = this,
                    o = t(e.target).is(".slick-slide")
                      ? t(e.target)
                      : t(e.target).parents(".slick-slide"),
                    n = parseInt(o.attr("data-slick-index"));
                  n || (n = 0),
                    i.slideCount <= i.options.slidesToShow
                      ? i.slideHandler(n, !1, !0)
                      : i.slideHandler(n);
                }),
                (e.prototype.slideHandler = function (t, e, i) {
                  var o,
                    n,
                    s,
                    r,
                    a,
                    l = null,
                    c = this;
                  if (
                    ((e = e || !1),
                    !(
                      (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                      (!0 === c.options.fade && c.currentSlide === t)
                    ))
                  )
                    if (
                      (!1 === e && c.asNavFor(t),
                      (o = t),
                      (l = c.getLeft(o)),
                      (r = c.getLeft(c.currentSlide)),
                      (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                      !1 === c.options.infinite &&
                        !1 === c.options.centerMode &&
                        (t < 0 ||
                          t > c.getDotCount() * c.options.slidesToScroll))
                    )
                      !1 === c.options.fade &&
                        ((o = c.currentSlide),
                        !0 !== i && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(r, function () {
                              c.postSlide(o);
                            })
                          : c.postSlide(o));
                    else if (
                      !1 === c.options.infinite &&
                      !0 === c.options.centerMode &&
                      (t < 0 || t > c.slideCount - c.options.slidesToScroll)
                    )
                      !1 === c.options.fade &&
                        ((o = c.currentSlide),
                        !0 !== i && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(r, function () {
                              c.postSlide(o);
                            })
                          : c.postSlide(o));
                    else {
                      if (
                        (c.options.autoplay && clearInterval(c.autoPlayTimer),
                        (n =
                          o < 0
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? c.slideCount -
                                (c.slideCount % c.options.slidesToScroll)
                              : c.slideCount + o
                            : o >= c.slideCount
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? 0
                              : o - c.slideCount
                            : o),
                        (c.animating = !0),
                        c.$slider.trigger("beforeChange", [
                          c,
                          c.currentSlide,
                          n,
                        ]),
                        (s = c.currentSlide),
                        (c.currentSlide = n),
                        c.setSlideClasses(c.currentSlide),
                        c.options.asNavFor &&
                          (a = (a = c.getNavTarget()).slick("getSlick"))
                            .slideCount <= a.options.slidesToShow &&
                          a.setSlideClasses(c.currentSlide),
                        c.updateDots(),
                        c.updateArrows(),
                        !0 === c.options.fade)
                      )
                        return (
                          !0 !== i
                            ? (c.fadeSlideOut(s),
                              c.fadeSlide(n, function () {
                                c.postSlide(n);
                              }))
                            : c.postSlide(n),
                          void c.animateHeight()
                        );
                      !0 !== i && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(l, function () {
                            c.postSlide(n);
                          })
                        : c.postSlide(n);
                    }
                }),
                (e.prototype.startLoad = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots &&
                      t.slideCount > t.options.slidesToShow &&
                      t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
                }),
                (e.prototype.swipeDirection = function () {
                  var t,
                    e,
                    i,
                    o,
                    n = this;
                  return (
                    (t = n.touchObject.startX - n.touchObject.curX),
                    (e = n.touchObject.startY - n.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (o = Math.round((180 * i) / Math.PI)) < 0 &&
                      (o = 360 - Math.abs(o)),
                    o <= 45 && o >= 0
                      ? !1 === n.options.rtl
                        ? "left"
                        : "right"
                      : o <= 360 && o >= 315
                      ? !1 === n.options.rtl
                        ? "left"
                        : "right"
                      : o >= 135 && o <= 225
                      ? !1 === n.options.rtl
                        ? "right"
                        : "left"
                      : !0 === n.options.verticalSwiping
                      ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (e.prototype.swipeEnd = function (t) {
                  var e,
                    i,
                    o = this;
                  if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                    return (o.scrolling = !1), !1;
                  if (
                    ((o.interrupted = !1),
                    (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                    void 0 === o.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === o.touchObject.edgeHit &&
                      o.$slider.trigger("edge", [o, o.swipeDirection()]),
                    o.touchObject.swipeLength >= o.touchObject.minSwipe)
                  ) {
                    switch ((i = o.swipeDirection())) {
                      case "left":
                      case "down":
                        (e = o.options.swipeToSlide
                          ? o.checkNavigable(o.currentSlide + o.getSlideCount())
                          : o.currentSlide + o.getSlideCount()),
                          (o.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (e = o.options.swipeToSlide
                          ? o.checkNavigable(o.currentSlide - o.getSlideCount())
                          : o.currentSlide - o.getSlideCount()),
                          (o.currentDirection = 1);
                    }
                    "vertical" != i &&
                      (o.slideHandler(e),
                      (o.touchObject = {}),
                      o.$slider.trigger("swipe", [o, i]));
                  } else
                    o.touchObject.startX !== o.touchObject.curX &&
                      (o.slideHandler(o.currentSlide), (o.touchObject = {}));
                }),
                (e.prototype.swipeHandler = function (t) {
                  var e = this;
                  if (
                    !(
                      !1 === e.options.swipe ||
                      ("ontouchend" in document && !1 === e.options.swipe) ||
                      (!1 === e.options.draggable &&
                        -1 !== t.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((e.touchObject.fingerCount =
                        t.originalEvent && void 0 !== t.originalEvent.touches
                          ? t.originalEvent.touches.length
                          : 1),
                      (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                      !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                          e.listHeight / e.options.touchThreshold),
                      t.data.action)
                    ) {
                      case "start":
                        e.swipeStart(t);
                        break;
                      case "move":
                        e.swipeMove(t);
                        break;
                      case "end":
                        e.swipeEnd(t);
                    }
                }),
                (e.prototype.swipeMove = function (t) {
                  var e,
                    i,
                    o,
                    n,
                    s,
                    r,
                    a = this;
                  return (
                    (s =
                      void 0 !== t.originalEvent
                        ? t.originalEvent.touches
                        : null),
                    !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                      ((e = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX =
                        void 0 !== s ? s[0].pageX : t.clientX),
                      (a.touchObject.curY =
                        void 0 !== s ? s[0].pageY : t.clientY),
                      (a.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                        )
                      )),
                      (r = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                        )
                      )),
                      !a.options.verticalSwiping && !a.swiping && r > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping &&
                            (a.touchObject.swipeLength = r),
                          (i = a.swipeDirection()),
                          void 0 !== t.originalEvent &&
                            a.touchObject.swipeLength > 4 &&
                            ((a.swiping = !0), t.preventDefault()),
                          (n =
                            (!1 === a.options.rtl ? 1 : -1) *
                            (a.touchObject.curX > a.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === a.options.verticalSwiping &&
                            (n =
                              a.touchObject.curY > a.touchObject.startY
                                ? 1
                                : -1),
                          (o = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                            ((0 === a.currentSlide && "right" === i) ||
                              (a.currentSlide >= a.getDotCount() &&
                                "left" === i)) &&
                            ((o =
                              a.touchObject.swipeLength *
                              a.options.edgeFriction),
                            (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical
                            ? (a.swipeLeft = e + o * n)
                            : (a.swipeLeft =
                                e + o * (a.$list.height() / a.listWidth) * n),
                          !0 === a.options.verticalSwiping &&
                            (a.swipeLeft = e + o * n),
                          !0 !== a.options.fade &&
                            !1 !== a.options.touchMove &&
                            (!0 === a.animating
                              ? ((a.swipeLeft = null), !1)
                              : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (e.prototype.swipeStart = function (t) {
                  var e,
                    i = this;
                  if (
                    ((i.interrupted = !0),
                    1 !== i.touchObject.fingerCount ||
                      i.slideCount <= i.options.slidesToShow)
                  )
                    return (i.touchObject = {}), !1;
                  void 0 !== t.originalEvent &&
                    void 0 !== t.originalEvent.touches &&
                    (e = t.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX =
                      void 0 !== e ? e.pageX : t.clientX),
                    (i.touchObject.startY = i.touchObject.curY =
                      void 0 !== e ? e.pageY : t.clientY),
                    (i.dragging = !0);
                }),
                (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
                  function () {
                    var t = this;
                    null !== t.$slidesCache &&
                      (t.unload(),
                      t.$slideTrack.children(this.options.slide).detach(),
                      t.$slidesCache.appendTo(t.$slideTrack),
                      t.reinit());
                  }),
                (e.prototype.unload = function () {
                  var e = this;
                  t(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow &&
                      e.htmlExpr.test(e.options.prevArrow) &&
                      e.$prevArrow.remove(),
                    e.$nextArrow &&
                      e.htmlExpr.test(e.options.nextArrow) &&
                      e.$nextArrow.remove(),
                    e.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (e.prototype.unslick = function (t) {
                  var e = this;
                  e.$slider.trigger("unslick", [e, t]), e.destroy();
                }),
                (e.prototype.updateArrows = function () {
                  var t = this;
                  Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      !t.options.infinite &&
                      (t.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      t.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === t.currentSlide
                        ? (t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          t.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : t.currentSlide >=
                            t.slideCount - t.options.slidesToShow &&
                          !1 === t.options.centerMode
                        ? (t.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          t.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : t.currentSlide >= t.slideCount - 1 &&
                          !0 === t.options.centerMode &&
                          (t.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          t.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (e.prototype.updateDots = function () {
                  var t = this;
                  null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots
                      .find("li")
                      .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (e.prototype.visibility = function () {
                  var t = this;
                  t.options.autoplay &&
                    (document[t.hidden]
                      ? (t.interrupted = !0)
                      : (t.interrupted = !1));
                }),
                (t.fn.slick = function () {
                  var t,
                    i,
                    o = this,
                    n = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                  for (t = 0; t < r; t++)
                    if (
                      ("object" == typeof n || void 0 === n
                        ? (o[t].slick = new e(o[t], n))
                        : (i = o[t].slick[n].apply(o[t].slick, s)),
                      void 0 !== i)
                    )
                      return i;
                  return o;
                });
            })
              ? o.apply(e, n)
              : o) || (t.exports = s);
    })();
  },
  function (t, e, i) {
    var o, n, s, r, a, l, c, h, d, u, p, f, g, m, v, y, w, b, _, T, x;
    !(function (o, n) {
      (T = [i(0)]),
        void 0 ===
          (x = function (t) {
            return (function (t, e) {
              "use strict";
              var i = Array.prototype.slice,
                o = t.console,
                n =
                  void 0 === o
                    ? function () {}
                    : function (t) {
                        o.error(t);
                      };
              function s(o, s, a) {
                (a = a || e || t.jQuery) &&
                  (s.prototype.option ||
                    (s.prototype.option = function (t) {
                      a.isPlainObject(t) &&
                        (this.options = a.extend(!0, this.options, t));
                    }),
                  (a.fn[o] = function (t) {
                    if ("string" == typeof t) {
                      var e = i.call(arguments, 1);
                      return (function (t, e, i) {
                        var s,
                          r = "$()." + o + '("' + e + '")';
                        return (
                          t.each(function (t, l) {
                            var c = a.data(l, o);
                            if (c) {
                              var h = c[e];
                              if (h && "_" != e.charAt(0)) {
                                var d = h.apply(c, i);
                                s = void 0 === s ? d : s;
                              } else n(r + " is not a valid method");
                            } else n(o + " not initialized. Cannot call methods, i.e. " + r);
                          }),
                          void 0 !== s ? s : t
                        );
                      })(this, t, e);
                    }
                    var r;
                    return (
                      (r = t),
                      this.each(function (t, e) {
                        var i = a.data(e, o);
                        i
                          ? (i.option(r), i._init())
                          : ((i = new s(e, r)), a.data(e, o, i));
                      }),
                      this
                    );
                  }),
                  r(a));
              }
              function r(t) {
                !t || (t && t.bridget) || (t.bridget = s);
              }
              return r(e || t.jQuery), s;
            })(o, t);
          }.apply(e, T)) || (t.exports = x);
    })(window),
      "undefined" != typeof window && window,
      (s = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }),
      (o =
        "function" ==
        typeof (n = function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.on = function (t, e) {
              if (t && e) {
                var i = (this._events = this._events || {}),
                  o = (i[t] = i[t] || []);
                return -1 == o.indexOf(e) && o.push(e), this;
              }
            }),
            (e.once = function (t, e) {
              if (t && e) {
                this.on(t, e);
                var i = (this._onceEvents = this._onceEvents || {});
                return ((i[t] = i[t] || {})[e] = !0), this;
              }
            }),
            (e.off = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                var o = i.indexOf(e);
                return -1 != o && i.splice(o, 1), this;
              }
            }),
            (e.emitEvent = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                (i = i.slice(0)), (e = e || []);
                for (
                  var o = this._onceEvents && this._onceEvents[t], n = 0;
                  n < i.length;
                  n++
                ) {
                  var s = i[n];
                  o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e);
                }
                return this;
              }
            }),
            (e.allOff = function () {
              delete this._events, delete this._onceEvents;
            }),
            t
          );
        })
          ? n.call(s.exports, i, s.exports, s)
          : n),
      (s.loaded = !0),
      void 0 !== o || (o = s.exports),
      window,
      (l = { id: "get-size/get-size", exports: {}, loaded: !1 }),
      (r =
        "function" ==
        typeof (a = function () {
          "use strict";
          function t(t) {
            var e = parseFloat(t),
              i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e;
          }
          var e =
              "undefined" == typeof console
                ? function () {}
                : function (t) {
                    console.error(t);
                  },
            i = [
              "paddingLeft",
              "paddingRight",
              "paddingTop",
              "paddingBottom",
              "marginLeft",
              "marginRight",
              "marginTop",
              "marginBottom",
              "borderLeftWidth",
              "borderRightWidth",
              "borderTopWidth",
              "borderBottomWidth",
            ],
            o = i.length;
          function n(t) {
            var i = getComputedStyle(t);
            return (
              i ||
                e(
                  "Style returned " +
                    i +
                    ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                ),
              i
            );
          }
          var s,
            r = !1;
          function a(e) {
            if (
              ((function () {
                if (!r) {
                  r = !0;
                  var e = document.createElement("div");
                  (e.style.width = "200px"),
                    (e.style.padding = "1px 2px 3px 4px"),
                    (e.style.borderStyle = "solid"),
                    (e.style.borderWidth = "1px 2px 3px 4px"),
                    (e.style.boxSizing = "border-box");
                  var i = document.body || document.documentElement;
                  i.appendChild(e);
                  var o = n(e);
                  (s = 200 == Math.round(t(o.width))),
                    (a.isBoxSizeOuter = s),
                    i.removeChild(e);
                }
              })(),
              "string" == typeof e && (e = document.querySelector(e)),
              e && "object" == typeof e && e.nodeType)
            ) {
              var l = n(e);
              if ("none" == l.display)
                return (function () {
                  for (
                    var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0,
                      },
                      e = 0;
                    e < o;
                    e++
                  ) {
                    var n = i[e];
                    t[n] = 0;
                  }
                  return t;
                })();
              var c = {};
              (c.width = e.offsetWidth), (c.height = e.offsetHeight);
              for (
                var h = (c.isBorderBox = "border-box" == l.boxSizing), d = 0;
                d < o;
                d++
              ) {
                var u = i[d],
                  p = l[u],
                  f = parseFloat(p);
                c[u] = isNaN(f) ? 0 : f;
              }
              var g = c.paddingLeft + c.paddingRight,
                m = c.paddingTop + c.paddingBottom,
                v = c.marginLeft + c.marginRight,
                y = c.marginTop + c.marginBottom,
                w = c.borderLeftWidth + c.borderRightWidth,
                b = c.borderTopWidth + c.borderBottomWidth,
                _ = h && s,
                T = t(l.width);
              !1 !== T && (c.width = T + (_ ? 0 : g + w));
              var x = t(l.height);
              return (
                !1 !== x && (c.height = x + (_ ? 0 : m + b)),
                (c.innerWidth = c.width - (g + w)),
                (c.innerHeight = c.height - (m + b)),
                (c.outerWidth = c.width + v),
                (c.outerHeight = c.height + y),
                c
              );
            }
          }
          return a;
        })
          ? a.call(l.exports, i, l.exports, l)
          : a),
      (l.loaded = !0),
      void 0 !== r || (r = l.exports),
      (function (t, e) {
        "use strict";
        (d = {
          id: "desandro-matches-selector/matches-selector",
          exports: {},
          loaded: !1,
        }),
          (c =
            "function" == typeof (h = e)
              ? h.call(d.exports, i, d.exports, d)
              : h),
          (d.loaded = !0),
          void 0 !== c || (c = d.exports);
      })(window, function () {
        "use strict";
        var t = (function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i] + "MatchesSelector";
            if (t[o]) return o;
          }
        })();
        return function (e, i) {
          return e[t](i);
        };
      }),
      (function (t, i) {
        u = function (e) {
          return (function (t, e) {
            var i = {
                extend: function (t, e) {
                  for (var i in e) t[i] = e[i];
                  return t;
                },
                modulo: function (t, e) {
                  return ((t % e) + e) % e;
                },
              },
              o = Array.prototype.slice;
            (i.makeArray = function (t) {
              if (Array.isArray(t)) return t;
              if (null == t) return [];
              var e = "object" == typeof t && "number" == typeof t.length;
              return e ? o.call(t) : [t];
            }),
              (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
              }),
              (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; )
                  if (((t = t.parentNode), e(t, i))) return t;
              }),
              (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
              }),
              (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
              }),
              (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                  t.forEach(function (t) {
                    if (t instanceof HTMLElement)
                      if (o) {
                        e(t, o) && n.push(t);
                        for (
                          var i = t.querySelectorAll(o), s = 0;
                          s < i.length;
                          s++
                        )
                          n.push(i[s]);
                      } else n.push(t);
                  }),
                  n
                );
              }),
              (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                  n = e + "Timeout";
                t.prototype[e] = function () {
                  var t = this[n];
                  clearTimeout(t);
                  var e = arguments,
                    s = this;
                  this[n] = setTimeout(function () {
                    o.apply(s, e), delete s[n];
                  }, i);
                };
              }),
              (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e
                  ? setTimeout(t)
                  : document.addEventListener("DOMContentLoaded", t);
              }),
              (i.toDashed = function (t) {
                return t
                  .replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                  })
                  .toLowerCase();
              });
            var n = t.console;
            return (
              (i.htmlInit = function (e, o) {
                i.docReady(function () {
                  var s = i.toDashed(o),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    h = r + "-options",
                    d = t.jQuery;
                  c.forEach(function (t) {
                    var i,
                      s = t.getAttribute(r) || t.getAttribute(h);
                    try {
                      i = s && JSON.parse(s);
                    } catch (e) {
                      return void (
                        n &&
                        n.error(
                          "Error parsing " + r + " on " + t.className + ": " + e
                        )
                      );
                    }
                    var a = new e(t, i);
                    d && d.data(t, o, a);
                  });
                });
              }),
              i
            );
          })(t, e);
        }.apply(e, (T = [c]));
      })(window),
      window,
      (T = [o, r]),
      (p =
        "function" ==
        typeof (b = function (t, e) {
          "use strict";
          var i = document.documentElement.style,
            o =
              "string" == typeof i.transition
                ? "transition"
                : "WebkitTransition",
            n =
              "string" == typeof i.transform ? "transform" : "WebkitTransform",
            s = {
              WebkitTransition: "webkitTransitionEnd",
              transition: "transitionend",
            }[o],
            r = {
              transform: n,
              transition: o,
              transitionDuration: o + "Duration",
              transitionProperty: o + "Property",
              transitionDelay: o + "Delay",
            };
          function a(t, e) {
            t &&
              ((this.element = t),
              (this.layout = e),
              (this.position = { x: 0, y: 0 }),
              this._create());
          }
          var l = (a.prototype = Object.create(t.prototype));
          (l.constructor = a),
            (l._create = function () {
              (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t);
            }),
            (l.getSize = function () {
              this.size = e(this.element);
            }),
            (l.css = function (t) {
              var e = this.element.style;
              for (var i in t) {
                var o = r[i] || i;
                e[o] = t[i];
              }
            }),
            (l.getPosition = function () {
              var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                s = parseFloat(o),
                r = parseFloat(n),
                a = this.layout.size;
              -1 != o.indexOf("%") && (s = (s / 100) * a.width),
                -1 != n.indexOf("%") && (r = (r / 100) * a.height),
                (s = isNaN(s) ? 0 : s),
                (r = isNaN(r) ? 0 : r),
                (s -= e ? a.paddingLeft : a.paddingRight),
                (r -= i ? a.paddingTop : a.paddingBottom),
                (this.position.x = s),
                (this.position.y = r);
            }),
            (l.layoutPosition = function () {
              var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[n];
              (e[s] = this.getXValue(a)), (e[r] = "");
              var l = o ? "paddingTop" : "paddingBottom",
                c = o ? "top" : "bottom",
                h = o ? "bottom" : "top",
                d = this.position.y + t[l];
              (e[c] = this.getYValue(d)),
                (e[h] = ""),
                this.css(e),
                this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (t) {
              var e = this.layout._getOption("horizontal");
              return this.layout.options.percentPosition && !e
                ? (t / this.layout.size.width) * 100 + "%"
                : t + "px";
            }),
            (l.getYValue = function (t) {
              var e = this.layout._getOption("horizontal");
              return this.layout.options.percentPosition && e
                ? (t / this.layout.size.height) * 100 + "%"
                : t + "px";
            }),
            (l._transitionTo = function (t, e) {
              this.getPosition();
              var i = this.position.x,
                o = this.position.y,
                n = t == this.position.x && e == this.position.y;
              if ((this.setPosition(t, e), !n || this.isTransitioning)) {
                var s = t - i,
                  r = e - o,
                  a = {};
                (a.transform = this.getTranslate(s, r)),
                  this.transition({
                    to: a,
                    onTransitionEnd: { transform: this.layoutPosition },
                    isCleaning: !0,
                  });
              } else this.layoutPosition();
            }),
            (l.getTranslate = function (t, e) {
              var i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop");
              return (
                "translate3d(" +
                (t = i ? t : -t) +
                "px, " +
                (e = o ? e : -e) +
                "px, 0)"
              );
            }),
            (l.goTo = function (t, e) {
              this.setPosition(t, e), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (t, e) {
              (this.position.x = parseFloat(t)),
                (this.position.y = parseFloat(e));
            }),
            (l._nonTransition = function (t) {
              for (var e in (this.css(t.to),
              t.isCleaning && this._removeStyles(t.to),
              t.onTransitionEnd))
                t.onTransitionEnd[e].call(this);
            }),
            (l.transition = function (t) {
              if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                  e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                  (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                t.from && (this.css(t.from), this.element.offsetHeight),
                  this.enableTransition(t.to),
                  this.css(t.to),
                  (this.isTransitioning = !0);
              } else this._nonTransition(t);
            });
          var c =
            "opacity," +
            n.replace(/([A-Z])/g, function (t) {
              return "-" + t.toLowerCase();
            });
          (l.enableTransition = function () {
            if (!this.isTransitioning) {
              var t = this.layout.options.transitionDuration;
              (t = "number" == typeof t ? t + "ms" : t),
                this.css({
                  transitionProperty: c,
                  transitionDuration: t,
                  transitionDelay: this.staggerDelay || 0,
                }),
                this.element.addEventListener(s, this, !1);
            }
          }),
            (l.onwebkitTransitionEnd = function (t) {
              this.ontransitionend(t);
            }),
            (l.onotransitionend = function (t) {
              this.ontransitionend(t);
            });
          var h = { "-webkit-transform": "transform" };
          (l.ontransitionend = function (t) {
            if (t.target === this.element) {
              var e = this._transn,
                i = h[t.propertyName] || t.propertyName;
              if (
                (delete e.ingProperties[i],
                (function (t) {
                  for (var e in t) return !1;
                  return !0;
                })(e.ingProperties) && this.disableTransition(),
                i in e.clean &&
                  ((this.element.style[t.propertyName] = ""),
                  delete e.clean[i]),
                i in e.onEnd)
              ) {
                var o = e.onEnd[i];
                o.call(this), delete e.onEnd[i];
              }
              this.emitEvent("transitionEnd", [this]);
            }
          }),
            (l.disableTransition = function () {
              this.removeTransitionStyles(),
                this.element.removeEventListener(s, this, !1),
                (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (t) {
              var e = {};
              for (var i in t) e[i] = "";
              this.css(e);
            });
          var d = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
          };
          return (
            (l.removeTransitionStyles = function () {
              this.css(d);
            }),
            (l.stagger = function (t) {
              (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function () {
              this.element.parentNode.removeChild(this.element),
                this.css({ display: "" }),
                this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
              o && parseFloat(this.layout.options.transitionDuration)
                ? (this.once("transitionEnd", function () {
                    this.removeElem();
                  }),
                  this.hide())
                : this.removeElem();
            }),
            (l.reveal = function () {
              delete this.isHidden, this.css({ display: "" });
              var t = this.layout.options,
                e = {};
              (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                this.onRevealTransitionEnd),
                this.transition({
                  from: t.hiddenStyle,
                  to: t.visibleStyle,
                  isCleaning: !0,
                  onTransitionEnd: e,
                });
            }),
            (l.onRevealTransitionEnd = function () {
              this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (t) {
              var e = this.layout.options[t];
              if (e.opacity) return "opacity";
              for (var i in e) return i;
            }),
            (l.hide = function () {
              (this.isHidden = !0), this.css({ display: "" });
              var t = this.layout.options,
                e = {};
              (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                this.onHideTransitionEnd),
                this.transition({
                  from: t.visibleStyle,
                  to: t.hiddenStyle,
                  isCleaning: !0,
                  onTransitionEnd: e,
                });
            }),
            (l.onHideTransitionEnd = function () {
              this.isHidden &&
                (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
              this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: "",
              });
            }),
            a
          );
        })
          ? b.apply(e, T)
          : b),
      (function (t, i) {
        "use strict";
        f = function (e, i, o, n) {
          return (function (t, e, i, o, n) {
            var s = t.console,
              r = t.jQuery,
              a = function () {},
              l = 0,
              c = {};
            function h(t, e) {
              var i = o.getQueryElement(t);
              if (i) {
                (this.element = i),
                  r && (this.$element = r(this.element)),
                  (this.options = o.extend({}, this.constructor.defaults)),
                  this.option(e);
                var n = ++l;
                (this.element.outlayerGUID = n), (c[n] = this), this._create();
                var a = this._getOption("initLayout");
                a && this.layout();
              } else
                s &&
                  s.error(
                    "Bad element for " +
                      this.constructor.namespace +
                      ": " +
                      (i || t)
                  );
            }
            (h.namespace = "outlayer"),
              (h.Item = n),
              (h.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
              });
            var d = h.prototype;
            function u(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e
              );
            }
            o.extend(d, e.prototype),
              (d.option = function (t) {
                o.extend(this.options, t);
              }),
              (d._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                  ? this.options[e]
                  : this.options[t];
              }),
              (h.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
              }),
              (d._create = function () {
                this.reloadItems(),
                  (this.stamps = []),
                  this.stamp(this.options.stamp),
                  o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
              }),
              (d.reloadItems = function () {
                this.items = this._itemize(this.element.children);
              }),
              (d._itemize = function (t) {
                for (
                  var e = this._filterFindItemElements(t),
                    i = this.constructor.Item,
                    o = [],
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var s = e[n],
                    r = new i(s, this);
                  o.push(r);
                }
                return o;
              }),
              (d._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
              }),
              (d.getItemElements = function () {
                return this.items.map(function (t) {
                  return t.element;
                });
              }),
              (d.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                  e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
              }),
              (d._init = d.layout),
              (d._resetLayout = function () {
                this.getSize();
              }),
              (d.getSize = function () {
                this.size = i(this.element);
              }),
              (d._getMeasurement = function (t, e) {
                var o,
                  n = this.options[t];
                n
                  ? ("string" == typeof n
                      ? (o = this.element.querySelector(n))
                      : n instanceof HTMLElement && (o = n),
                    (this[t] = o ? i(o)[e] : n))
                  : (this[t] = 0);
              }),
              (d.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                  this._layoutItems(t, e),
                  this._postLayout();
              }),
              (d._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                  return !t.isIgnored;
                });
              }),
              (d._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                  var i = [];
                  t.forEach(function (t) {
                    var o = this._getItemLayoutPosition(t);
                    (o.item = t),
                      (o.isInstant = e || t.isLayoutInstant),
                      i.push(o);
                  }, this),
                    this._processLayoutQueue(i);
                }
              }),
              (d._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
              }),
              (d._processLayoutQueue = function (t) {
                this.updateStagger(),
                  t.forEach(function (t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                  }, this);
              }),
              (d.updateStagger = function () {
                var t = this.options.stagger;
                if (null != t)
                  return (
                    (this.stagger = (function (t) {
                      if ("number" == typeof t) return t;
                      var e = t.match(/(^\d*\.?\d*)(\w*)/),
                        i = e && e[1],
                        o = e && e[2];
                      if (!i.length) return 0;
                      i = parseFloat(i);
                      var n = p[o] || 1;
                      return i * n;
                    })(t)),
                    this.stagger
                  );
                this.stagger = 0;
              }),
              (d._positionItem = function (t, e, i, o, n) {
                o
                  ? t.goTo(e, i)
                  : (t.stagger(n * this.stagger), t.moveTo(e, i));
              }),
              (d._postLayout = function () {
                this.resizeContainer();
              }),
              (d.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                  var e = this._getContainerSize();
                  e &&
                    (this._setContainerMeasure(e.width, !0),
                    this._setContainerMeasure(e.height, !1));
                }
              }),
              (d._getContainerSize = a),
              (d._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                  var i = this.size;
                  i.isBorderBox &&
                    (t += e
                      ? i.paddingLeft +
                        i.paddingRight +
                        i.borderLeftWidth +
                        i.borderRightWidth
                      : i.paddingBottom +
                        i.paddingTop +
                        i.borderTopWidth +
                        i.borderBottomWidth),
                    (t = Math.max(t, 0)),
                    (this.element.style[e ? "width" : "height"] = t + "px");
                }
              }),
              (d._emitCompleteOnItems = function (t, e) {
                var i = this;
                function o() {
                  i.dispatchEvent(t + "Complete", null, [e]);
                }
                var n = e.length;
                if (e && n) {
                  var s = 0;
                  e.forEach(function (e) {
                    e.once(t, r);
                  });
                } else o();
                function r() {
                  ++s == n && o();
                }
              }),
              (d.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), r))
                  if (((this.$element = this.$element || r(this.element)), e)) {
                    var n = r.Event(e);
                    (n.type = t), this.$element.trigger(n, i);
                  } else this.$element.trigger(t, i);
              }),
              (d.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
              }),
              (d.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
              }),
              (d.stamp = function (t) {
                (t = this._find(t)) &&
                  ((this.stamps = this.stamps.concat(t)),
                  t.forEach(this.ignore, this));
              }),
              (d.unstamp = function (t) {
                (t = this._find(t)) &&
                  t.forEach(function (t) {
                    o.removeFrom(this.stamps, t), this.unignore(t);
                  }, this);
              }),
              (d._find = function (t) {
                if (t)
                  return (
                    "string" == typeof t &&
                      (t = this.element.querySelectorAll(t)),
                    (t = o.makeArray(t))
                  );
              }),
              (d._manageStamps = function () {
                this.stamps &&
                  this.stamps.length &&
                  (this._getBoundingRect(),
                  this.stamps.forEach(this._manageStamp, this));
              }),
              (d._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                  e = this.size;
                this._boundingRect = {
                  left: t.left + e.paddingLeft + e.borderLeftWidth,
                  top: t.top + e.paddingTop + e.borderTopWidth,
                  right: t.right - (e.paddingRight + e.borderRightWidth),
                  bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
              }),
              (d._manageStamp = a),
              (d._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                  o = this._boundingRect,
                  n = i(t),
                  s = {
                    left: e.left - o.left - n.marginLeft,
                    top: e.top - o.top - n.marginTop,
                    right: o.right - e.right - n.marginRight,
                    bottom: o.bottom - e.bottom - n.marginBottom,
                  };
                return s;
              }),
              (d.handleEvent = o.handleEvent),
              (d.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
              }),
              (d.unbindResize = function () {
                t.removeEventListener("resize", this),
                  (this.isResizeBound = !1);
              }),
              (d.onresize = function () {
                this.resize();
              }),
              o.debounceMethod(h, "onresize", 100),
              (d.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
              }),
              (d.needsResizeLayout = function () {
                var t = i(this.element),
                  e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
              }),
              (d.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
              }),
              (d.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
              }),
              (d.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                  var i = this.items.slice(0);
                  (this.items = e.concat(i)),
                    this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(e, !0),
                    this.reveal(e),
                    this.layoutItems(i);
                }
              }),
              (d.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                  var e = this.updateStagger();
                  t.forEach(function (t, i) {
                    t.stagger(i * e), t.reveal();
                  });
                }
              }),
              (d.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                  var e = this.updateStagger();
                  t.forEach(function (t, i) {
                    t.stagger(i * e), t.hide();
                  });
                }
              }),
              (d.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
              }),
              (d.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
              }),
              (d.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                  var i = this.items[e];
                  if (i.element == t) return i;
                }
              }),
              (d.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                  t.forEach(function (t) {
                    var i = this.getItem(t);
                    i && e.push(i);
                  }, this),
                  e
                );
              }),
              (d.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                  e &&
                    e.length &&
                    e.forEach(function (t) {
                      t.remove(), o.removeFrom(this.items, t);
                    }, this);
              }),
              (d.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                  (t.position = ""),
                  (t.width = ""),
                  this.items.forEach(function (t) {
                    t.destroy();
                  }),
                  this.unbindResize();
                var e = this.element.outlayerGUID;
                delete c[e],
                  delete this.element.outlayerGUID,
                  r && r.removeData(this.element, this.constructor.namespace);
              }),
              (h.data = function (t) {
                var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
                return e && c[e];
              }),
              (h.create = function (t, e) {
                var i = u(h);
                return (
                  (i.defaults = o.extend({}, h.defaults)),
                  o.extend(i.defaults, e),
                  (i.compatOptions = o.extend({}, h.compatOptions)),
                  (i.namespace = t),
                  (i.data = h.data),
                  (i.Item = u(n)),
                  o.htmlInit(i, t),
                  r && r.bridget && r.bridget(t, i),
                  i
                );
              });
            var p = { ms: 1, s: 1e3 };
            return (h.Item = n), h;
          })(t, e, i, o, n);
        }.apply(e, (T = [o, r, u, p]));
      })(window),
      window,
      (T = [f]),
      (g =
        "function" ==
        typeof (b = function (t) {
          "use strict";
          function e() {
            t.Item.apply(this, arguments);
          }
          var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
          (i._create = function () {
            (this.id = this.layout.itemGUID++),
              o.call(this),
              (this.sortData = {});
          }),
            (i.updateSortData = function () {
              if (!this.isIgnored) {
                (this.sortData.id = this.id),
                  (this.sortData["original-order"] = this.id),
                  (this.sortData.random = Math.random());
                var t = this.layout.options.getSortData,
                  e = this.layout._sorters;
                for (var i in t) {
                  var o = e[i];
                  this.sortData[i] = o(this.element, this);
                }
              }
            });
          var n = i.destroy;
          return (
            (i.destroy = function () {
              n.apply(this, arguments), this.css({ display: "" });
            }),
            e
          );
        })
          ? b.apply(e, T)
          : b),
      window,
      (T = [r, f]),
      (m =
        "function" ==
        typeof (b = function (t, e) {
          "use strict";
          function i(t) {
            (this.isotope = t),
              t &&
                ((this.options = t.options[this.namespace]),
                (this.element = t.element),
                (this.items = t.filteredItems),
                (this.size = t.size));
          }
          var o = i.prototype;
          return (
            [
              "_resetLayout",
              "_getItemLayoutPosition",
              "_manageStamp",
              "_getContainerSize",
              "_getElementOffset",
              "needsResizeLayout",
              "_getOption",
            ].forEach(function (t) {
              o[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments);
              };
            }),
            (o.needsVerticalResizeLayout = function () {
              var e = t(this.isotope.element);
              return (
                this.isotope.size &&
                e &&
                e.innerHeight != this.isotope.size.innerHeight
              );
            }),
            (o._getMeasurement = function () {
              this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
              this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
              this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
              var i = t + e,
                o = "outer" + e;
              if ((this._getMeasurement(i, o), !this[i])) {
                var n = this.getFirstItemSize();
                this[i] = (n && n[o]) || this.isotope.size["inner" + e];
              }
            }),
            (o.getFirstItemSize = function () {
              var e = this.isotope.filteredItems[0];
              return e && e.element && t(e.element);
            }),
            (o.layout = function () {
              this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
              this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
              function n() {
                i.apply(this, arguments);
              }
              return (
                (n.prototype = Object.create(o)),
                (n.prototype.constructor = n),
                e && (n.options = e),
                (n.prototype.namespace = t),
                (i.modes[t] = n),
                n
              );
            }),
            i
          );
        })
          ? b.apply(e, T)
          : b),
      window,
      (T = [f, r]),
      (v =
        "function" ==
        typeof (b = function (t, e) {
          var i = t.create("masonry");
          i.compatOptions.fitWidth = "isFitWidth";
          var o = i.prototype;
          return (
            (o._resetLayout = function () {
              this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns(),
                (this.colYs = []);
              for (var t = 0; t < this.cols; t++) this.colYs.push(0);
              (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
              if ((this.getContainerWidth(), !this.columnWidth)) {
                var t = this.items[0],
                  i = t && t.element;
                this.columnWidth =
                  (i && e(i).outerWidth) || this.containerWidth;
              }
              var o = (this.columnWidth += this.gutter),
                n = this.containerWidth + this.gutter,
                s = n / o,
                r = o - (n % o);
              (s = Math[r && r < 1 ? "round" : "floor"](s)),
                (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
              var t = this._getOption("fitWidth")
                  ? this.element.parentNode
                  : this.element,
                i = e(t);
              this.containerWidth = i && i.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
              t.getSize();
              var e = t.size.outerWidth % this.columnWidth,
                i = Math[e && e < 1 ? "round" : "ceil"](
                  t.size.outerWidth / this.columnWidth
                );
              i = Math.min(i, this.cols);
              for (
                var o = this[
                    this.options.horizontalOrder
                      ? "_getHorizontalColPosition"
                      : "_getTopColPosition"
                  ](i, t),
                  n = { x: this.columnWidth * o.col, y: o.y },
                  s = o.y + t.size.outerHeight,
                  r = i + o.col,
                  a = o.col;
                a < r;
                a++
              )
                this.colYs[a] = s;
              return n;
            }),
            (o._getTopColPosition = function (t) {
              var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
              return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
              if (t < 2) return this.colYs;
              for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                e[o] = this._getColGroupY(o, t);
              return e;
            }),
            (o._getColGroupY = function (t, e) {
              if (e < 2) return this.colYs[t];
              var i = this.colYs.slice(t, t + e);
              return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
              var i = this.horizontalColIndex % this.cols;
              i = t > 1 && i + t > this.cols ? 0 : i;
              var o = e.size.outerWidth && e.size.outerHeight;
              return (
                (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
                { col: i, y: this._getColGroupY(i, t) }
              );
            }),
            (o._manageStamp = function (t) {
              var i = e(t),
                o = this._getElementOffset(t),
                n = this._getOption("originLeft") ? o.left : o.right,
                s = n + i.outerWidth,
                r = Math.floor(n / this.columnWidth);
              r = Math.max(0, r);
              var a = Math.floor(s / this.columnWidth);
              (a -= s % this.columnWidth ? 0 : 1),
                (a = Math.min(this.cols - 1, a));
              for (
                var l =
                    (this._getOption("originTop") ? o.top : o.bottom) +
                    i.outerHeight,
                  c = r;
                c <= a;
                c++
              )
                this.colYs[c] = Math.max(l, this.colYs[c]);
            }),
            (o._getContainerSize = function () {
              this.maxY = Math.max.apply(Math, this.colYs);
              var t = { height: this.maxY };
              return (
                this._getOption("fitWidth") &&
                  (t.width = this._getContainerFitWidth()),
                t
              );
            }),
            (o._getContainerFitWidth = function () {
              for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
              return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
              var t = this.containerWidth;
              return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
          );
        })
          ? b.apply(e, T)
          : b),
      window,
      (T = [m, v]),
      (y =
        "function" ==
        typeof (b = function (t, e) {
          "use strict";
          var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
          for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
          var r = o.measureColumns;
          o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
          };
          var a = o._getOption;
          return (
            (o._getOption = function (t) {
              return "fitWidth" == t
                ? void 0 !== this.options.isFitWidth
                  ? this.options.isFitWidth
                  : this.options.fitWidth
                : a.apply(this.isotope, arguments);
            }),
            i
          );
        })
          ? b.apply(e, T)
          : b),
      window,
      (T = [m]),
      (w =
        "function" ==
        typeof (b = function (t) {
          "use strict";
          var e = t.create("fitRows"),
            i = e.prototype;
          return (
            (i._resetLayout = function () {
              (this.x = 0),
                (this.y = 0),
                (this.maxY = 0),
                this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
              t.getSize();
              var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
              0 !== this.x &&
                e + this.x > i &&
                ((this.x = 0), (this.y = this.maxY));
              var o = { x: this.x, y: this.y };
              return (
                (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
                (this.x += e),
                o
              );
            }),
            (i._getContainerSize = function () {
              return { height: this.maxY };
            }),
            e
          );
        })
          ? b.apply(e, T)
          : b),
      window,
      (T = [m]),
      (_ =
        "function" ==
        typeof (b = function (t) {
          "use strict";
          var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
          return (
            (i._resetLayout = function () {
              this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
              t.getSize();
              var e =
                  (this.isotope.size.innerWidth - t.size.outerWidth) *
                  this.options.horizontalAlignment,
                i = this.y;
              return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
              return { height: this.y };
            }),
            e
          );
        })
          ? b.apply(e, T)
          : b),
      (function (i, o) {
        void 0 ===
          (x = function (t, e, o, n, s, r) {
            return (function (t, e, i, o, n, s, r) {
              var a = t.jQuery,
                l = String.prototype.trim
                  ? function (t) {
                      return t.trim();
                    }
                  : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                    },
                c = e.create("isotope", {
                  layoutMode: "masonry",
                  isJQueryFiltering: !0,
                  sortAscending: !0,
                });
              (c.Item = s), (c.LayoutMode = r);
              var h = c.prototype;
              (h._create = function () {
                for (var t in ((this.itemGUID = 0),
                (this._sorters = {}),
                this._getSorters(),
                e.prototype._create.call(this),
                (this.modes = {}),
                (this.filteredItems = this.items),
                (this.sortHistory = ["original-order"]),
                r.modes))
                  this._initLayoutMode(t);
              }),
                (h.reloadItems = function () {
                  (this.itemGUID = 0), e.prototype.reloadItems.call(this);
                }),
                (h._itemize = function () {
                  for (
                    var t = e.prototype._itemize.apply(this, arguments), i = 0;
                    i < t.length;
                    i++
                  ) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                  }
                  return this._updateItemsSortData(t), t;
                }),
                (h._initLayoutMode = function (t) {
                  var e = r.modes[t],
                    i = this.options[t] || {};
                  (this.options[t] = e.options ? n.extend(e.options, i) : i),
                    (this.modes[t] = new e(this));
                }),
                (h.layout = function () {
                  this._isLayoutInited || !this._getOption("initLayout")
                    ? this._layout()
                    : this.arrange();
                }),
                (h._layout = function () {
                  var t = this._getIsInstant();
                  this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    (this._isLayoutInited = !0);
                }),
                (h.arrange = function (t) {
                  this.option(t), this._getIsInstant();
                  var e = this._filter(this.items);
                  (this.filteredItems = e.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                      ? this._noTransition(this._hideReveal, [e])
                      : this._hideReveal(e),
                    this._sort(),
                    this._layout();
                }),
                (h._init = h.arrange),
                (h._hideReveal = function (t) {
                  this.reveal(t.needReveal), this.hide(t.needHide);
                }),
                (h._getIsInstant = function () {
                  var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                  return (this._isInstant = e), e;
                }),
                (h._bindArrangeComplete = function () {
                  var t,
                    e,
                    i,
                    o = this;
                  function n() {
                    t &&
                      e &&
                      i &&
                      o.dispatchEvent("arrangeComplete", null, [
                        o.filteredItems,
                      ]);
                  }
                  this.once("layoutComplete", function () {
                    (t = !0), n();
                  }),
                    this.once("hideComplete", function () {
                      (e = !0), n();
                    }),
                    this.once("revealComplete", function () {
                      (i = !0), n();
                    });
                }),
                (h._filter = function (t) {
                  var e = this.options.filter;
                  e = e || "*";
                  for (
                    var i = [],
                      o = [],
                      n = [],
                      s = this._getFilterTest(e),
                      r = 0;
                    r < t.length;
                    r++
                  ) {
                    var a = t[r];
                    if (!a.isIgnored) {
                      var l = s(a);
                      l && i.push(a),
                        l && a.isHidden
                          ? o.push(a)
                          : l || a.isHidden || n.push(a);
                    }
                  }
                  return { matches: i, needReveal: o, needHide: n };
                }),
                (h._getFilterTest = function (t) {
                  return a && this.options.isJQueryFiltering
                    ? function (e) {
                        return a(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                        return t(e.element);
                      }
                    : function (e) {
                        return o(e.element, t);
                      };
                }),
                (h.updateSortData = function (t) {
                  var e;
                  t
                    ? ((t = n.makeArray(t)), (e = this.getItems(t)))
                    : (e = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(e);
                }),
                (h._getSorters = function () {
                  var t = this.options.getSortData;
                  for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = d(i);
                  }
                }),
                (h._updateItemsSortData = function (t) {
                  for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                  }
                });
              var d = (function () {
                return function (t) {
                  if ("string" != typeof t) return t;
                  var e = l(t).split(" "),
                    i = e[0],
                    o = i.match(/^\[(.+)\]$/),
                    n = (function (t, e) {
                      if (t)
                        return function (e) {
                          return e.getAttribute(t);
                        };
                      return function (t) {
                        var i = t.querySelector(e);
                        return i && i.textContent;
                      };
                    })(o && o[1], i),
                    s = c.sortDataParsers[e[1]];
                  return (t = s
                    ? function (t) {
                        return t && s(n(t));
                      }
                    : function (t) {
                        return t && n(t);
                      });
                };
              })();
              (c.sortDataParsers = {
                parseInt: function (t) {
                  return parseInt(t, 10);
                },
                parseFloat: function (t) {
                  return parseFloat(t);
                },
              }),
                (h._sort = function () {
                  if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) ||
                      (this.sortHistory = t.concat(this.sortHistory));
                    var e = (function (t, e) {
                      return function (i, o) {
                        for (var n = 0; n < t.length; n++) {
                          var s = t[n],
                            r = i.sortData[s],
                            a = o.sortData[s];
                          if (r > a || r < a) {
                            var l = void 0 !== e[s] ? e[s] : e,
                              c = l ? 1 : -1;
                            return (r > a ? 1 : -1) * c;
                          }
                        }
                        return 0;
                      };
                    })(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                  }
                }),
                (h._getIsSameSortBy = function (t) {
                  for (var e = 0; e < t.length; e++)
                    if (t[e] != this.sortHistory[e]) return !1;
                  return !0;
                }),
                (h._mode = function () {
                  var t = this.options.layoutMode,
                    e = this.modes[t];
                  if (!e) throw new Error("No layout mode: " + t);
                  return (e.options = this.options[t]), e;
                }),
                (h._resetLayout = function () {
                  e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout();
                }),
                (h._getItemLayoutPosition = function (t) {
                  return this._mode()._getItemLayoutPosition(t);
                }),
                (h._manageStamp = function (t) {
                  this._mode()._manageStamp(t);
                }),
                (h._getContainerSize = function () {
                  return this._mode()._getContainerSize();
                }),
                (h.needsResizeLayout = function () {
                  return this._mode().needsResizeLayout();
                }),
                (h.appended = function (t) {
                  var e = this.addItems(t);
                  if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                  }
                }),
                (h.prepended = function (t) {
                  var e = this._itemize(t);
                  if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                      (this.filteredItems = i.concat(this.filteredItems)),
                      (this.items = e.concat(this.items));
                  }
                }),
                (h._filterRevealAdded = function (t) {
                  var e = this._filter(t);
                  return (
                    this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
                  );
                }),
                (h.insert = function (t) {
                  var e = this.addItems(t);
                  if (e.length) {
                    var i,
                      o,
                      n = e.length;
                    for (i = 0; i < n; i++)
                      (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++)
                      delete e[i].isLayoutInstant;
                    this.reveal(s);
                  }
                });
              var u = h.remove;
              return (
                (h.remove = function (t) {
                  t = n.makeArray(t);
                  var e = this.getItems(t);
                  u.call(this, t);
                  for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                  }
                }),
                (h.shuffle = function () {
                  for (var t = 0; t < this.items.length; t++)
                    this.items[t].sortData.random = Math.random();
                  (this.options.sortBy = "random"),
                    this._sort(),
                    this._layout();
                }),
                (h._noTransition = function (t, e) {
                  var i = this.options.transitionDuration;
                  this.options.transitionDuration = 0;
                  var o = t.apply(this, e);
                  return (this.options.transitionDuration = i), o;
                }),
                (h.getFilteredItemElements = function () {
                  return this.filteredItems.map(function (t) {
                    return t.element;
                  });
                }),
                c
              );
            })(i, t, 0, o, n, s, r);
          }.apply(e, (T = [f, r, c, u, g, m, y, w, _]))) || (t.exports = x);
      })(window);
  },
  function (t, e, i) {
    var o, n, s;
    !(function (r) {
      "use strict";
      (n = [i(0)]),
        void 0 ===
          (s =
            "function" ==
            typeof (o = function (t) {
              var e = [],
                i = [],
                o = { precision: 100, elapse: !1, defer: !1 };
              i.push(/^[0-9]*$/.source),
                i.push(
                  /([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
                ),
                i.push(
                  /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/
                    .source
                ),
                (i = new RegExp(i.join("|")));
              var n = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                d: "daysToWeek",
                w: "weeks",
                W: "weeksToMonth",
                H: "hours",
                M: "minutes",
                S: "seconds",
                D: "totalDays",
                I: "totalHours",
                N: "totalMinutes",
                T: "totalSeconds",
              };
              function s(t, e) {
                var i = "s",
                  o = "";
                return (
                  t &&
                    (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length
                      ? (i = t[0])
                      : ((o = t[0]), (i = t[1]))),
                  Math.abs(e) > 1 ? i : o
                );
              }
              var r = function (i, n, s) {
                (this.el = i),
                  (this.$el = t(i)),
                  (this.interval = null),
                  (this.offset = {}),
                  (this.options = t.extend({}, o)),
                  (this.instanceNumber = e.length),
                  e.push(this),
                  this.$el.data("countdown-instance", this.instanceNumber),
                  s &&
                    ("function" == typeof s
                      ? (this.$el.on("update.countdown", s),
                        this.$el.on("stoped.countdown", s),
                        this.$el.on("finish.countdown", s))
                      : (this.options = t.extend({}, o, s))),
                  this.setFinalDate(n),
                  !1 === this.options.defer && this.start();
              };
              t.extend(r.prototype, {
                start: function () {
                  null !== this.interval && clearInterval(this.interval);
                  var t = this;
                  this.update(),
                    (this.interval = setInterval(function () {
                      t.update.call(t);
                    }, this.options.precision));
                },
                stop: function () {
                  clearInterval(this.interval),
                    (this.interval = null),
                    this.dispatchEvent("stoped");
                },
                toggle: function () {
                  this.interval ? this.stop() : this.start();
                },
                pause: function () {
                  this.stop();
                },
                resume: function () {
                  this.start();
                },
                remove: function () {
                  this.stop.call(this),
                    (e[this.instanceNumber] = null),
                    delete this.$el.data().countdownInstance;
                },
                setFinalDate: function (t) {
                  this.finalDate = (function (t) {
                    if (t instanceof Date) return t;
                    if (String(t).match(i))
                      return (
                        String(t).match(/^[0-9]*$/) && (t = Number(t)),
                        String(t).match(/\-/) &&
                          (t = String(t).replace(/\-/g, "/")),
                        new Date(t)
                      );
                    throw new Error(
                      "Couldn't cast `" + t + "` to a date object."
                    );
                  })(t);
                },
                update: function () {
                  if (0 !== this.$el.closest("html").length) {
                    var e,
                      i = void 0 !== t._data(this.el, "events"),
                      o = new Date();
                    (e = this.finalDate.getTime() - o.getTime()),
                      (e = Math.ceil(e / 1e3)),
                      (e = !this.options.elapse && e < 0 ? 0 : Math.abs(e)),
                      this.totalSecsLeft !== e &&
                        i &&
                        ((this.totalSecsLeft = e),
                        (this.elapsed = o >= this.finalDate),
                        (this.offset = {
                          seconds: this.totalSecsLeft % 60,
                          minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                          hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                          days:
                            Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                          daysToWeek:
                            Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                          daysToMonth: Math.floor(
                            (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                          ),
                          weeks: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24 / 7
                          ),
                          weeksToMonth:
                            Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) %
                            4,
                          months: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24 / 30.4368
                          ),
                          years: Math.abs(
                            this.finalDate.getFullYear() - o.getFullYear()
                          ),
                          totalDays: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24
                          ),
                          totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                          totalMinutes: Math.floor(this.totalSecsLeft / 60),
                          totalSeconds: this.totalSecsLeft,
                        }),
                        this.options.elapse || 0 !== this.totalSecsLeft
                          ? this.dispatchEvent("update")
                          : (this.stop(), this.dispatchEvent("finish")));
                  } else this.remove();
                },
                dispatchEvent: function (e) {
                  var i,
                    o = t.Event(e + ".countdown");
                  (o.finalDate = this.finalDate),
                    (o.elapsed = this.elapsed),
                    (o.offset = t.extend({}, this.offset)),
                    (o.strftime =
                      ((i = this.offset),
                      function (t) {
                        var e,
                          o,
                          r = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                        if (r)
                          for (var a = 0, l = r.length; a < l; ++a) {
                            var c = r[a].match(
                                /%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/
                              ),
                              h =
                                ((e = c[0]),
                                (o = void 0),
                                (o = e
                                  .toString()
                                  .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")),
                                new RegExp(o)),
                              d = c[1] || "",
                              u = c[3] || "",
                              p = null;
                            (c = c[2]),
                              n.hasOwnProperty(c) &&
                                ((p = n[c]), (p = Number(i[p]))),
                              null !== p &&
                                ("!" === d && (p = s(u, p)),
                                "" === d && p < 10 && (p = "0" + p.toString()),
                                (t = t.replace(h, p.toString())));
                          }
                        return (t = t.replace(/%%/, "%"));
                      })),
                    this.$el.trigger(o);
                },
              }),
                (t.fn.countdown = function () {
                  var i = Array.prototype.slice.call(arguments, 0);
                  return this.each(function () {
                    var o = t(this).data("countdown-instance");
                    if (void 0 !== o) {
                      var n = e[o],
                        s = i[0];
                      r.prototype.hasOwnProperty(s)
                        ? n[s].apply(n, i.slice(1))
                        : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                        ? (n.setFinalDate.call(n, s), n.start())
                        : t.error(
                            "Method %s does not exist on jQuery.countdown".replace(
                              /\%s/gi,
                              s
                            )
                          );
                    } else new r(this, i[0], i[1]);
                  });
                });
            })
              ? o.apply(e, n)
              : o) || (t.exports = s);
    })();
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (t.fn.fitVids = function (e) {
        var i = { customSelector: null, ignore: null };
        if (!document.getElementById("fit-vids-style")) {
          var o = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("div");
          (n.innerHTML =
            '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
            o.appendChild(n.childNodes[1]);
        }
        return (
          e && t.extend(i, e),
          this.each(function () {
            var e = [
              'iframe[src*="player.vimeo.com"]',
              'iframe[src*="youtube.com"]',
              'iframe[src*="youtube-nocookie.com"]',
              'iframe[src*="kickstarter.com"][src*="video.html"]',
              "object",
              "embed",
            ];
            i.customSelector && e.push(i.customSelector);
            var o = ".fitvidsignore";
            i.ignore && (o = o + ", " + i.ignore);
            var n = t(this).find(e.join(","));
            (n = (n = n.not("object object")).not(o)).each(function () {
              var e = t(this);
              if (
                !(
                  e.parents(o).length > 0 ||
                  ("embed" === this.tagName.toLowerCase() &&
                    e.parent("object").length) ||
                  e.parent(".fluid-width-video-wrapper").length
                )
              ) {
                e.css("height") ||
                  e.css("width") ||
                  (!isNaN(e.attr("height")) && !isNaN(e.attr("width"))) ||
                  (e.attr("height", 9), e.attr("width", 16));
                var i =
                  ("object" === this.tagName.toLowerCase() ||
                  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
                    ? parseInt(e.attr("height"), 10)
                    : e.height()) /
                  (isNaN(parseInt(e.attr("width"), 10))
                    ? e.width()
                    : parseInt(e.attr("width"), 10));
                if (!e.attr("name")) {
                  var n = "fitvid" + t.fn.fitVids._count;
                  e.attr("name", n), t.fn.fitVids._count++;
                }
                e
                  .wrap('<div class="fluid-width-video-wrapper"></div>')
                  .parent(".fluid-width-video-wrapper")
                  .css("padding-top", 100 * i + "%"),
                  e.removeAttr("height").removeAttr("width");
              }
            });
          })
        );
      }),
        (t.fn.fitVids._count = 0);
    })(window.jQuery || window.Zepto);
  },
  function (t, e) {
    var i, o;
    "function" != typeof Object.create &&
      (Object.create = function (t) {
        function e() {}
        return (e.prototype = t), new e();
      }),
      (i = jQuery),
      window,
      document,
      (o = {
        init: function (t, e) {
          var o = this;
          (o.elem = e),
            (o.$elem = i(e)),
            (o.imageSrc = o.$elem.data("zoom-image")
              ? o.$elem.data("zoom-image")
              : o.$elem.attr("src")),
            (o.options = i.extend({}, i.fn.elevateZoom.options, t)),
            o.options.tint &&
              ((o.options.lensColour = "none"), (o.options.lensOpacity = "1")),
            "inner" == o.options.zoomType && (o.options.showLens = !1),
            o.$elem.parent().removeAttr("title").removeAttr("alt"),
            (o.zoomImage = o.imageSrc),
            o.refresh(1),
            i("#" + o.options.gallery + " a").click(function (t) {
              return (
                o.options.galleryActiveClass &&
                  (i("#" + o.options.gallery + " a").removeClass(
                    o.options.galleryActiveClass
                  ),
                  i(this).addClass(o.options.galleryActiveClass)),
                t.preventDefault(),
                i(this).data("zoom-image")
                  ? (o.zoomImagePre = i(this).data("zoom-image"))
                  : (o.zoomImagePre = i(this).data("image")),
                o.swaptheimage(i(this).data("image"), o.zoomImagePre),
                !1
              );
            });
        },
        refresh: function (t) {
          var e = this;
          setTimeout(function () {
            e.fetch(e.imageSrc);
          }, t || e.options.refresh);
        },
        fetch: function (t) {
          var e = this,
            i = new Image();
          (i.onload = function () {
            (e.largeWidth = i.width),
              (e.largeHeight = i.height),
              e.startZoom(),
              (e.currentImage = e.imageSrc),
              e.options.onZoomedImageLoaded(e.$elem);
          }),
            (i.src = t);
        },
        startZoom: function () {
          var t = this;
          if (
            ((t.nzWidth = t.$elem.width()),
            (t.nzHeight = t.$elem.height()),
            (t.isWindowActive = !1),
            (t.isLensActive = !1),
            (t.isTintActive = !1),
            (t.overWindow = !1),
            t.options.imageCrossfade &&
              ((t.zoomWrap = t.$elem.wrap(
                '<div style="height:' +
                  t.nzHeight +
                  "px;width:" +
                  t.nzWidth +
                  'px;" class="zoomWrapper" />'
              )),
              t.$elem.css("position", "absolute")),
            (t.zoomLock = 1),
            (t.scrollingLock = !1),
            (t.changeBgSize = !1),
            (t.currentZoomLevel = t.options.zoomLevel),
            (t.nzOffset = t.$elem.offset()),
            (t.widthRatio = t.largeWidth / t.currentZoomLevel / t.nzWidth),
            (t.heightRatio = t.largeHeight / t.currentZoomLevel / t.nzHeight),
            "window" == t.options.zoomType &&
              (t.zoomWindowStyle =
                "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
                String(t.options.zoomWindowBgColour) +
                ";width: " +
                String(t.options.zoomWindowWidth) +
                "px;height: " +
                String(t.options.zoomWindowHeight) +
                "px;float: left;background-size: " +
                t.largeWidth / t.currentZoomLevel +
                "px " +
                t.largeHeight / t.currentZoomLevel +
                "px;display: none;z-index:100;border: " +
                String(t.options.borderSize) +
                "px solid " +
                t.options.borderColour +
                ";background-repeat: no-repeat;position: absolute;"),
            "inner" == t.options.zoomType)
          ) {
            var e = t.$elem.css("border-left-width");
            t.zoomWindowStyle =
              "overflow: hidden;margin-left: " +
              String(e) +
              ";margin-top: " +
              String(e) +
              ";background-position: 0px 0px;width: " +
              String(t.nzWidth) +
              "px;height: " +
              String(t.nzHeight) +
              "px;px;float: left;display: none;cursor:" +
              t.options.cursor +
              ";px solid " +
              t.options.borderColour +
              ";background-repeat: no-repeat;position: absolute;";
          }
          "window" == t.options.zoomType &&
            (t.nzHeight < t.options.zoomWindowWidth / t.widthRatio
              ? (t.lensHeight = t.nzHeight)
              : (t.lensHeight = String(
                  t.options.zoomWindowHeight / t.heightRatio
                )),
            t.largeWidth < t.options.zoomWindowWidth
              ? (t.lensHeight = t.nzWidth)
              : (t.lensWidth = t.options.zoomWindowWidth / t.widthRatio),
            (t.lensStyle =
              "background-position: 0px 0px;width: " +
              String(t.options.zoomWindowWidth / t.widthRatio) +
              "px;height: " +
              String(t.options.zoomWindowHeight / t.heightRatio) +
              "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
              t.options.lensOpacity +
              ";filter: alpha(opacity = " +
              100 * t.options.lensOpacity +
              "); zoom:1;width:" +
              t.lensWidth +
              "px;height:" +
              t.lensHeight +
              "px;background-color:" +
              t.options.lensColour +
              ";cursor:" +
              t.options.cursor +
              ";border: " +
              t.options.lensBorderSize +
              "px solid " +
              t.options.lensBorderColour +
              ";background-repeat: no-repeat;position: absolute;")),
            (t.tintStyle =
              "display: block;position: absolute;background-color: " +
              t.options.tintColour +
              ";filter:alpha(opacity=0);opacity: 0;width: " +
              t.nzWidth +
              "px;height: " +
              t.nzHeight +
              "px;"),
            (t.lensRound = ""),
            "lens" == t.options.zoomType &&
              (t.lensStyle =
                "background-position: 0px 0px;float: left;display: none;border: " +
                String(t.options.borderSize) +
                "px solid " +
                t.options.borderColour +
                ";width:" +
                String(t.options.lensSize) +
                "px;height:" +
                String(t.options.lensSize) +
                "px;background-repeat: no-repeat;position: absolute;"),
            "round" == t.options.lensShape &&
              (t.lensRound =
                "border-top-left-radius: " +
                String(t.options.lensSize / 2 + t.options.borderSize) +
                "px;border-top-right-radius: " +
                String(t.options.lensSize / 2 + t.options.borderSize) +
                "px;border-bottom-left-radius: " +
                String(t.options.lensSize / 2 + t.options.borderSize) +
                "px;border-bottom-right-radius: " +
                String(t.options.lensSize / 2 + t.options.borderSize) +
                "px;"),
            (t.zoomContainer = i(
              '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
                t.nzOffset.left +
                "px;top:" +
                t.nzOffset.top +
                "px;height:" +
                t.nzHeight +
                "px;width:" +
                t.nzWidth +
                'px;"></div>'
            )),
            t.options.zoomEnabled && i("body").append(t.zoomContainer),
            t.options.containLensZoom &&
              "lens" == t.options.zoomType &&
              t.zoomContainer.css("overflow", "hidden"),
            "inner" != t.options.zoomType &&
              ((t.zoomLens = i(
                "<div class='zoomLens' style='" +
                  t.lensStyle +
                  t.lensRound +
                  "'>&nbsp;</div>"
              )
                .appendTo(t.zoomContainer)
                .click(function () {
                  t.$elem.trigger("click");
                })),
              t.options.tint &&
                ((t.tintContainer = i("<div/>").addClass("tintContainer")),
                (t.zoomTint = i(
                  "<div class='zoomTint' style='" + t.tintStyle + "'></div>"
                )),
                t.zoomLens.wrap(t.tintContainer),
                (t.zoomTintcss = t.zoomLens.after(t.zoomTint)),
                (t.zoomTintImage = i(
                  '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                    t.nzWidth +
                    "px; height: " +
                    t.nzHeight +
                    'px;" src="' +
                    t.imageSrc +
                    '">'
                )
                  .appendTo(t.zoomLens)
                  .click(function () {
                    t.$elem.trigger("click");
                  })))),
            isNaN(t.options.zoomWindowPosition)
              ? (t.zoomWindow = i(
                  "<div style='z-index:999;left:" +
                    t.windowOffsetLeft +
                    "px;top:" +
                    t.windowOffsetTop +
                    "px;" +
                    t.zoomWindowStyle +
                    "' class='zoomWindow'>&nbsp;</div>"
                )
                  .appendTo("body")
                  .click(function () {
                    t.$elem.trigger("click");
                  }))
              : (t.zoomWindow = i(
                  "<div style='z-index:999;left:" +
                    t.windowOffsetLeft +
                    "px;top:" +
                    t.windowOffsetTop +
                    "px;" +
                    t.zoomWindowStyle +
                    "' class='zoomWindow'>&nbsp;</div>"
                )
                  .appendTo(t.zoomContainer)
                  .click(function () {
                    t.$elem.trigger("click");
                  })),
            (t.zoomWindowContainer = i("<div/>")
              .addClass("zoomWindowContainer")
              .css("width", t.options.zoomWindowWidth)),
            t.zoomWindow.wrap(t.zoomWindowContainer),
            "lens" == t.options.zoomType &&
              t.zoomLens.css({ backgroundImage: "url('" + t.imageSrc + "')" }),
            "window" == t.options.zoomType &&
              t.zoomWindow.css({
                backgroundImage: "url('" + t.imageSrc + "')",
              }),
            "inner" == t.options.zoomType &&
              t.zoomWindow.css({
                backgroundImage: "url('" + t.imageSrc + "')",
              }),
            t.$elem.bind("touchmove", function (e) {
              e.preventDefault();
              var i =
                e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              t.setPosition(i);
            }),
            t.zoomContainer.bind("touchmove", function (e) {
              "inner" == t.options.zoomType && t.showHideWindow("show"),
                e.preventDefault();
              var i =
                e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              t.setPosition(i);
            }),
            t.zoomContainer.bind("touchend", function (e) {
              t.showHideWindow("hide"),
                t.options.showLens && t.showHideLens("hide"),
                t.options.tint &&
                  "inner" != t.options.zoomType &&
                  t.showHideTint("hide");
            }),
            t.$elem.bind("touchend", function (e) {
              t.showHideWindow("hide"),
                t.options.showLens && t.showHideLens("hide"),
                t.options.tint &&
                  "inner" != t.options.zoomType &&
                  t.showHideTint("hide");
            }),
            t.options.showLens &&
              (t.zoomLens.bind("touchmove", function (e) {
                e.preventDefault();
                var i =
                  e.originalEvent.touches[0] ||
                  e.originalEvent.changedTouches[0];
                t.setPosition(i);
              }),
              t.zoomLens.bind("touchend", function (e) {
                t.showHideWindow("hide"),
                  t.options.showLens && t.showHideLens("hide"),
                  t.options.tint &&
                    "inner" != t.options.zoomType &&
                    t.showHideTint("hide");
              })),
            t.$elem.bind("mousemove", function (e) {
              0 == t.overWindow && t.setElements("show"),
                (t.lastX === e.clientX && t.lastY === e.clientY) ||
                  (t.setPosition(e), (t.currentLoc = e)),
                (t.lastX = e.clientX),
                (t.lastY = e.clientY);
            }),
            t.zoomContainer.bind("mousemove", function (e) {
              0 == t.overWindow && t.setElements("show"),
                (t.lastX === e.clientX && t.lastY === e.clientY) ||
                  (t.setPosition(e), (t.currentLoc = e)),
                (t.lastX = e.clientX),
                (t.lastY = e.clientY);
            }),
            "inner" != t.options.zoomType &&
              t.zoomLens.bind("mousemove", function (e) {
                (t.lastX === e.clientX && t.lastY === e.clientY) ||
                  (t.setPosition(e), (t.currentLoc = e)),
                  (t.lastX = e.clientX),
                  (t.lastY = e.clientY);
              }),
            t.options.tint &&
              "inner" != t.options.zoomType &&
              t.zoomTint.bind("mousemove", function (e) {
                (t.lastX === e.clientX && t.lastY === e.clientY) ||
                  (t.setPosition(e), (t.currentLoc = e)),
                  (t.lastX = e.clientX),
                  (t.lastY = e.clientY);
              }),
            "inner" == t.options.zoomType &&
              t.zoomWindow.bind("mousemove", function (e) {
                (t.lastX === e.clientX && t.lastY === e.clientY) ||
                  (t.setPosition(e), (t.currentLoc = e)),
                  (t.lastX = e.clientX),
                  (t.lastY = e.clientY);
              }),
            t.zoomContainer
              .add(t.$elem)
              .mouseenter(function () {
                0 == t.overWindow && t.setElements("show");
              })
              .mouseleave(function () {
                t.scrollLock ||
                  (t.setElements("hide"), t.options.onDestroy(t.$elem));
              }),
            "inner" != t.options.zoomType &&
              t.zoomWindow
                .mouseenter(function () {
                  (t.overWindow = !0), t.setElements("hide");
                })
                .mouseleave(function () {
                  t.overWindow = !1;
                }),
            t.options.zoomLevel,
            t.options.minZoomLevel
              ? (t.minZoomLevel = t.options.minZoomLevel)
              : (t.minZoomLevel = 2 * t.options.scrollZoomIncrement),
            t.options.scrollZoom &&
              t.zoomContainer
                .add(t.$elem)
                .bind(
                  "mousewheel DOMMouseScroll MozMousePixelScroll",
                  function (e) {
                    (t.scrollLock = !0),
                      clearTimeout(i.data(this, "timer")),
                      i.data(
                        this,
                        "timer",
                        setTimeout(function () {
                          t.scrollLock = !1;
                        }, 250)
                      );
                    var o =
                      e.originalEvent.wheelDelta || -1 * e.originalEvent.detail;
                    return (
                      e.stopImmediatePropagation(),
                      e.stopPropagation(),
                      e.preventDefault(),
                      o / 120 > 0
                        ? t.currentZoomLevel >= t.minZoomLevel &&
                          t.changeZoomLevel(
                            t.currentZoomLevel - t.options.scrollZoomIncrement
                          )
                        : t.options.maxZoomLevel
                        ? t.currentZoomLevel <= t.options.maxZoomLevel &&
                          t.changeZoomLevel(
                            parseFloat(t.currentZoomLevel) +
                              t.options.scrollZoomIncrement
                          )
                        : t.changeZoomLevel(
                            parseFloat(t.currentZoomLevel) +
                              t.options.scrollZoomIncrement
                          ),
                      !1
                    );
                  }
                );
        },
        setElements: function (t) {
          if (!this.options.zoomEnabled) return !1;
          "show" == t &&
            this.isWindowSet &&
            ("inner" == this.options.zoomType && this.showHideWindow("show"),
            "window" == this.options.zoomType && this.showHideWindow("show"),
            this.options.showLens && this.showHideLens("show"),
            this.options.tint &&
              "inner" != this.options.zoomType &&
              this.showHideTint("show")),
            "hide" == t &&
              ("window" == this.options.zoomType && this.showHideWindow("hide"),
              this.options.tint || this.showHideWindow("hide"),
              this.options.showLens && this.showHideLens("hide"),
              this.options.tint && this.showHideTint("hide"));
        },
        setPosition: function (t) {
          if (!this.options.zoomEnabled) return !1;
          (this.nzHeight = this.$elem.height()),
            (this.nzWidth = this.$elem.width()),
            (this.nzOffset = this.$elem.offset()),
            this.options.tint &&
              "inner" != this.options.zoomType &&
              (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 })),
            this.options.responsive &&
              !this.options.scrollZoom &&
              this.options.showLens &&
              (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                ? (this.lensHeight = this.nzHeight)
                : (this.lensHeight = String(
                    this.options.zoomWindowHeight / this.heightRatio
                  )),
              this.largeWidth < this.options.zoomWindowWidth
                ? (this.lensWidth = this.nzWidth)
                : (this.lensWidth =
                    this.options.zoomWindowWidth / this.widthRatio),
              (this.widthRatio = this.largeWidth / this.nzWidth),
              (this.heightRatio = this.largeHeight / this.nzHeight),
              "lens" != this.options.zoomType &&
                (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                  ? (lensHeight = this.nzHeight)
                  : (this.lensHeight = String(
                      this.options.zoomWindowHeight / this.heightRatio
                    )),
                this.nzWidth < this.options.zoomWindowHeight / this.heightRatio
                  ? (this.lensWidth = this.nzWidth)
                  : (this.lensWidth = String(
                      this.options.zoomWindowWidth / this.widthRatio
                    )),
                this.zoomLens.css("width", this.lensWidth),
                this.zoomLens.css("height", this.lensHeight),
                this.options.tint &&
                  (this.zoomTintImage.css("width", this.nzWidth),
                  this.zoomTintImage.css("height", this.nzHeight))),
              "lens" == this.options.zoomType &&
                this.zoomLens.css({
                  width: String(this.options.lensSize) + "px",
                  height: String(this.options.lensSize) + "px",
                })),
            this.zoomContainer.css({ top: this.nzOffset.top }),
            this.zoomContainer.css({ left: this.nzOffset.left }),
            (this.mouseLeft = parseInt(t.pageX - this.nzOffset.left)),
            (this.mouseTop = parseInt(t.pageY - this.nzOffset.top)),
            "window" == this.options.zoomType &&
              ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
              (this.Eboppos =
                this.mouseTop >
                this.nzHeight -
                  this.zoomLens.height() / 2 -
                  2 * this.options.lensBorderSize),
              (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
              (this.Eroppos =
                this.mouseLeft >
                this.nzWidth -
                  this.zoomLens.width() / 2 -
                  2 * this.options.lensBorderSize)),
            "inner" == this.options.zoomType &&
              ((this.Etoppos =
                this.mouseTop < this.nzHeight / 2 / this.heightRatio),
              (this.Eboppos =
                this.mouseTop >
                this.nzHeight - this.nzHeight / 2 / this.heightRatio),
              (this.Eloppos =
                this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
              (this.Eroppos =
                this.mouseLeft >
                this.nzWidth -
                  this.nzWidth / 2 / this.widthRatio -
                  2 * this.options.lensBorderSize)),
            this.mouseLeft < 0 ||
            this.mouseTop < 0 ||
            this.mouseLeft > this.nzWidth ||
            this.mouseTop > this.nzHeight
              ? this.setElements("hide")
              : (this.options.showLens &&
                  ((this.lensLeftPos = String(
                    Math.floor(this.mouseLeft - this.zoomLens.width() / 2)
                  )),
                  (this.lensTopPos = String(
                    Math.floor(this.mouseTop - this.zoomLens.height() / 2)
                  ))),
                this.Etoppos && (this.lensTopPos = 0),
                this.Eloppos &&
                  ((this.windowLeftPos = 0),
                  (this.lensLeftPos = 0),
                  (this.tintpos = 0)),
                "window" == this.options.zoomType &&
                  (this.Eboppos &&
                    (this.lensTopPos = Math.max(
                      this.nzHeight -
                        this.zoomLens.height() -
                        2 * this.options.lensBorderSize,
                      0
                    )),
                  this.Eroppos &&
                    (this.lensLeftPos =
                      this.nzWidth -
                      this.zoomLens.width() -
                      2 * this.options.lensBorderSize)),
                "inner" == this.options.zoomType &&
                  (this.Eboppos &&
                    (this.lensTopPos = Math.max(
                      this.nzHeight - 2 * this.options.lensBorderSize,
                      0
                    )),
                  this.Eroppos &&
                    (this.lensLeftPos =
                      this.nzWidth -
                      this.nzWidth -
                      2 * this.options.lensBorderSize)),
                "lens" == this.options.zoomType &&
                  ((this.windowLeftPos = String(
                    -1 *
                      ((t.pageX - this.nzOffset.left) * this.widthRatio -
                        this.zoomLens.width() / 2)
                  )),
                  (this.windowTopPos = String(
                    -1 *
                      ((t.pageY - this.nzOffset.top) * this.heightRatio -
                        this.zoomLens.height() / 2)
                  )),
                  this.zoomLens.css({
                    backgroundPosition:
                      this.windowLeftPos + "px " + this.windowTopPos + "px",
                  }),
                  this.changeBgSize &&
                    (this.nzHeight > this.nzWidth
                      ? ("lens" == this.options.zoomType &&
                          this.zoomLens.css({
                            "background-size":
                              this.largeWidth / this.newvalueheight +
                              "px " +
                              this.largeHeight / this.newvalueheight +
                              "px",
                          }),
                        this.zoomWindow.css({
                          "background-size":
                            this.largeWidth / this.newvalueheight +
                            "px " +
                            this.largeHeight / this.newvalueheight +
                            "px",
                        }))
                      : ("lens" == this.options.zoomType &&
                          this.zoomLens.css({
                            "background-size":
                              this.largeWidth / this.newvaluewidth +
                              "px " +
                              this.largeHeight / this.newvaluewidth +
                              "px",
                          }),
                        this.zoomWindow.css({
                          "background-size":
                            this.largeWidth / this.newvaluewidth +
                            "px " +
                            this.largeHeight / this.newvaluewidth +
                            "px",
                        })),
                    (this.changeBgSize = !1)),
                  this.setWindowPostition(t)),
                this.options.tint &&
                  "inner" != this.options.zoomType &&
                  this.setTintPosition(t),
                "window" == this.options.zoomType && this.setWindowPostition(t),
                "inner" == this.options.zoomType && this.setWindowPostition(t),
                this.options.showLens &&
                  (this.fullwidth &&
                    "lens" != this.options.zoomType &&
                    (this.lensLeftPos = 0),
                  this.zoomLens.css({
                    left: this.lensLeftPos + "px",
                    top: this.lensTopPos + "px",
                  })));
        },
        showHideWindow: function (t) {
          var e = this;
          "show" == t &&
            (e.isWindowActive ||
              (e.options.zoomWindowFadeIn
                ? e.zoomWindow
                    .stop(!0, !0, !1)
                    .fadeIn(e.options.zoomWindowFadeIn)
                : e.zoomWindow.show(),
              (e.isWindowActive = !0))),
            "hide" == t &&
              e.isWindowActive &&
              (e.options.zoomWindowFadeOut
                ? e.zoomWindow
                    .stop(!0, !0)
                    .fadeOut(e.options.zoomWindowFadeOut, function () {
                      e.loop && (clearInterval(e.loop), (e.loop = !1));
                    })
                : e.zoomWindow.hide(),
              (e.isWindowActive = !1));
        },
        showHideLens: function (t) {
          "show" == t &&
            (this.isLensActive ||
              (this.options.lensFadeIn
                ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn)
                : this.zoomLens.show(),
              (this.isLensActive = !0))),
            "hide" == t &&
              this.isLensActive &&
              (this.options.lensFadeOut
                ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut)
                : this.zoomLens.hide(),
              (this.isLensActive = !1));
        },
        showHideTint: function (t) {
          "show" == t &&
            (this.isTintActive ||
              (this.options.zoomTintFadeIn
                ? this.zoomTint
                    .css({ opacity: this.options.tintOpacity })
                    .animate()
                    .stop(!0, !0)
                    .fadeIn("slow")
                : (this.zoomTint
                    .css({ opacity: this.options.tintOpacity })
                    .animate(),
                  this.zoomTint.show()),
              (this.isTintActive = !0))),
            "hide" == t &&
              this.isTintActive &&
              (this.options.zoomTintFadeOut
                ? this.zoomTint
                    .stop(!0, !0)
                    .fadeOut(this.options.zoomTintFadeOut)
                : this.zoomTint.hide(),
              (this.isTintActive = !1));
        },
        setLensPostition: function (t) {},
        setWindowPostition: function (t) {
          var e = this;
          if (isNaN(e.options.zoomWindowPosition))
            (e.externalContainer = i("#" + e.options.zoomWindowPosition)),
              (e.externalContainerWidth = e.externalContainer.width()),
              (e.externalContainerHeight = e.externalContainer.height()),
              (e.externalContainerOffset = e.externalContainer.offset()),
              (e.windowOffsetTop = e.externalContainerOffset.top),
              (e.windowOffsetLeft = e.externalContainerOffset.left);
          else
            switch (e.options.zoomWindowPosition) {
              case 1:
                (e.windowOffsetTop = e.options.zoomWindowOffety),
                  (e.windowOffsetLeft = +e.nzWidth);
                break;
              case 2:
                e.options.zoomWindowHeight > e.nzHeight &&
                  ((e.windowOffsetTop =
                    -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2)),
                  (e.windowOffsetLeft = e.nzWidth));
                break;
              case 3:
                (e.windowOffsetTop =
                  e.nzHeight -
                  e.zoomWindow.height() -
                  2 * e.options.borderSize),
                  (e.windowOffsetLeft = e.nzWidth);
                break;
              case 4:
                (e.windowOffsetTop = e.nzHeight),
                  (e.windowOffsetLeft = e.nzWidth);
                break;
              case 5:
                (e.windowOffsetTop = e.nzHeight),
                  (e.windowOffsetLeft =
                    e.nzWidth -
                    e.zoomWindow.width() -
                    2 * e.options.borderSize);
                break;
              case 6:
                e.options.zoomWindowHeight > e.nzHeight &&
                  ((e.windowOffsetTop = e.nzHeight),
                  (e.windowOffsetLeft =
                    -1 *
                    (e.options.zoomWindowWidth / 2 -
                      e.nzWidth / 2 +
                      2 * e.options.borderSize)));
                break;
              case 7:
                (e.windowOffsetTop = e.nzHeight), (e.windowOffsetLeft = 0);
                break;
              case 8:
                (e.windowOffsetTop = e.nzHeight),
                  (e.windowOffsetLeft =
                    -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                break;
              case 9:
                (e.windowOffsetTop =
                  e.nzHeight -
                  e.zoomWindow.height() -
                  2 * e.options.borderSize),
                  (e.windowOffsetLeft =
                    -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                break;
              case 10:
                e.options.zoomWindowHeight > e.nzHeight &&
                  ((e.windowOffsetTop =
                    -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2)),
                  (e.windowOffsetLeft =
                    -1 * (e.zoomWindow.width() + 2 * e.options.borderSize)));
                break;
              case 11:
                (e.windowOffsetTop = e.options.zoomWindowOffety),
                  (e.windowOffsetLeft =
                    -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                break;
              case 12:
                (e.windowOffsetTop =
                  -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                  (e.windowOffsetLeft =
                    -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                break;
              case 13:
                (e.windowOffsetTop =
                  -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                  (e.windowOffsetLeft = 0);
                break;
              case 14:
                e.options.zoomWindowHeight > e.nzHeight &&
                  ((e.windowOffsetTop =
                    -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                  (e.windowOffsetLeft =
                    -1 *
                    (e.options.zoomWindowWidth / 2 -
                      e.nzWidth / 2 +
                      2 * e.options.borderSize)));
                break;
              case 15:
                (e.windowOffsetTop =
                  -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                  (e.windowOffsetLeft =
                    e.nzWidth -
                    e.zoomWindow.width() -
                    2 * e.options.borderSize);
                break;
              case 16:
                (e.windowOffsetTop =
                  -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                  (e.windowOffsetLeft = e.nzWidth);
                break;
              default:
                (e.windowOffsetTop = e.options.zoomWindowOffety),
                  (e.windowOffsetLeft = e.nzWidth);
            }
          (e.isWindowSet = !0),
            (e.windowOffsetTop =
              e.windowOffsetTop + e.options.zoomWindowOffety),
            (e.windowOffsetLeft =
              e.windowOffsetLeft + e.options.zoomWindowOffetx),
            e.zoomWindow.css({ top: e.windowOffsetTop }),
            e.zoomWindow.css({ left: e.windowOffsetLeft }),
            "inner" == e.options.zoomType &&
              (e.zoomWindow.css({ top: 0 }), e.zoomWindow.css({ left: 0 })),
            (e.windowLeftPos = String(
              -1 *
                ((t.pageX - e.nzOffset.left) * e.widthRatio -
                  e.zoomWindow.width() / 2)
            )),
            (e.windowTopPos = String(
              -1 *
                ((t.pageY - e.nzOffset.top) * e.heightRatio -
                  e.zoomWindow.height() / 2)
            )),
            e.Etoppos && (e.windowTopPos = 0),
            e.Eloppos && (e.windowLeftPos = 0),
            e.Eboppos &&
              (e.windowTopPos =
                -1 *
                (e.largeHeight / e.currentZoomLevel - e.zoomWindow.height())),
            e.Eroppos &&
              (e.windowLeftPos =
                -1 *
                (e.largeWidth / e.currentZoomLevel - e.zoomWindow.width())),
            e.fullheight && (e.windowTopPos = 0),
            e.fullwidth && (e.windowLeftPos = 0),
            ("window" != e.options.zoomType && "inner" != e.options.zoomType) ||
              (1 == e.zoomLock &&
                (e.widthRatio <= 1 && (e.windowLeftPos = 0),
                e.heightRatio <= 1 && (e.windowTopPos = 0)),
              "window" == e.options.zoomType &&
                (e.largeHeight < e.options.zoomWindowHeight &&
                  (e.windowTopPos = 0),
                e.largeWidth < e.options.zoomWindowWidth &&
                  (e.windowLeftPos = 0)),
              e.options.easing
                ? (e.xp || (e.xp = 0),
                  e.yp || (e.yp = 0),
                  e.loop ||
                    (e.loop = setInterval(function () {
                      (e.xp +=
                        (e.windowLeftPos - e.xp) / e.options.easingAmount),
                        (e.yp +=
                          (e.windowTopPos - e.yp) / e.options.easingAmount),
                        e.scrollingLock
                          ? (clearInterval(e.loop),
                            (e.xp = e.windowLeftPos),
                            (e.yp = e.windowTopPos),
                            (e.xp =
                              -1 *
                              ((t.pageX - e.nzOffset.left) * e.widthRatio -
                                e.zoomWindow.width() / 2)),
                            (e.yp =
                              -1 *
                              ((t.pageY - e.nzOffset.top) * e.heightRatio -
                                e.zoomWindow.height() / 2)),
                            e.changeBgSize &&
                              (e.nzHeight > e.nzWidth
                                ? ("lens" == e.options.zoomType &&
                                    e.zoomLens.css({
                                      "background-size":
                                        e.largeWidth / e.newvalueheight +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                    }),
                                  e.zoomWindow.css({
                                    "background-size":
                                      e.largeWidth / e.newvalueheight +
                                      "px " +
                                      e.largeHeight / e.newvalueheight +
                                      "px",
                                  }))
                                : ("lens" != e.options.zoomType &&
                                    e.zoomLens.css({
                                      "background-size":
                                        e.largeWidth / e.newvaluewidth +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                    }),
                                  e.zoomWindow.css({
                                    "background-size":
                                      e.largeWidth / e.newvaluewidth +
                                      "px " +
                                      e.largeHeight / e.newvaluewidth +
                                      "px",
                                  })),
                              (e.changeBgSize = !1)),
                            e.zoomWindow.css({
                              backgroundPosition:
                                e.windowLeftPos + "px " + e.windowTopPos + "px",
                            }),
                            (e.scrollingLock = !1),
                            (e.loop = !1))
                          : Math.round(
                              Math.abs(e.xp - e.windowLeftPos) +
                                Math.abs(e.yp - e.windowTopPos)
                            ) < 1
                          ? (clearInterval(e.loop),
                            e.zoomWindow.css({
                              backgroundPosition:
                                e.windowLeftPos + "px " + e.windowTopPos + "px",
                            }),
                            (e.loop = !1))
                          : (e.changeBgSize &&
                              (e.nzHeight > e.nzWidth
                                ? ("lens" == e.options.zoomType &&
                                    e.zoomLens.css({
                                      "background-size":
                                        e.largeWidth / e.newvalueheight +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                    }),
                                  e.zoomWindow.css({
                                    "background-size":
                                      e.largeWidth / e.newvalueheight +
                                      "px " +
                                      e.largeHeight / e.newvalueheight +
                                      "px",
                                  }))
                                : ("lens" != e.options.zoomType &&
                                    e.zoomLens.css({
                                      "background-size":
                                        e.largeWidth / e.newvaluewidth +
                                        "px " +
                                        e.largeHeight / e.newvaluewidth +
                                        "px",
                                    }),
                                  e.zoomWindow.css({
                                    "background-size":
                                      e.largeWidth / e.newvaluewidth +
                                      "px " +
                                      e.largeHeight / e.newvaluewidth +
                                      "px",
                                  })),
                              (e.changeBgSize = !1)),
                            e.zoomWindow.css({
                              backgroundPosition: e.xp + "px " + e.yp + "px",
                            }));
                    }, 16)))
                : (e.changeBgSize &&
                    (e.nzHeight > e.nzWidth
                      ? ("lens" == e.options.zoomType &&
                          e.zoomLens.css({
                            "background-size":
                              e.largeWidth / e.newvalueheight +
                              "px " +
                              e.largeHeight / e.newvalueheight +
                              "px",
                          }),
                        e.zoomWindow.css({
                          "background-size":
                            e.largeWidth / e.newvalueheight +
                            "px " +
                            e.largeHeight / e.newvalueheight +
                            "px",
                        }))
                      : ("lens" == e.options.zoomType &&
                          e.zoomLens.css({
                            "background-size":
                              e.largeWidth / e.newvaluewidth +
                              "px " +
                              e.largeHeight / e.newvaluewidth +
                              "px",
                          }),
                        e.largeHeight / e.newvaluewidth <
                        e.options.zoomWindowHeight
                          ? e.zoomWindow.css({
                              "background-size":
                                e.largeWidth / e.newvaluewidth +
                                "px " +
                                e.largeHeight / e.newvaluewidth +
                                "px",
                            })
                          : e.zoomWindow.css({
                              "background-size":
                                e.largeWidth / e.newvalueheight +
                                "px " +
                                e.largeHeight / e.newvalueheight +
                                "px",
                            })),
                    (e.changeBgSize = !1)),
                  e.zoomWindow.css({
                    backgroundPosition:
                      e.windowLeftPos + "px " + e.windowTopPos + "px",
                  })));
        },
        setTintPosition: function (t) {
          (this.nzOffset = this.$elem.offset()),
            (this.tintpos = String(
              -1 * (t.pageX - this.nzOffset.left - this.zoomLens.width() / 2)
            )),
            (this.tintposy = String(
              -1 * (t.pageY - this.nzOffset.top - this.zoomLens.height() / 2)
            )),
            this.Etoppos && (this.tintposy = 0),
            this.Eloppos && (this.tintpos = 0),
            this.Eboppos &&
              (this.tintposy =
                -1 *
                (this.nzHeight -
                  this.zoomLens.height() -
                  2 * this.options.lensBorderSize)),
            this.Eroppos &&
              (this.tintpos =
                -1 *
                (this.nzWidth -
                  this.zoomLens.width() -
                  2 * this.options.lensBorderSize)),
            this.options.tint &&
              (this.fullheight && (this.tintposy = 0),
              this.fullwidth && (this.tintpos = 0),
              this.zoomTintImage.css({ left: this.tintpos + "px" }),
              this.zoomTintImage.css({ top: this.tintposy + "px" }));
        },
        swaptheimage: function (t, e) {
          var o = this,
            n = new Image();
          o.options.loadingIcon &&
            ((o.spinner = i(
              "<div style=\"background: url('" +
                o.options.loadingIcon +
                "') no-repeat center;height:" +
                o.nzHeight +
                "px;width:" +
                o.nzWidth +
                'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
            )),
            o.$elem.after(o.spinner)),
            o.options.onImageSwap(o.$elem),
            (n.onload = function () {
              (o.largeWidth = n.width),
                (o.largeHeight = n.height),
                (o.zoomImage = e),
                o.zoomWindow.css({
                  "background-size":
                    o.largeWidth + "px " + o.largeHeight + "px",
                }),
                o.swapAction(t, e);
            }),
            (n.src = e);
        },
        swapAction: function (t, e) {
          var o = this,
            n = new Image();
          if (
            ((n.onload = function () {
              (o.nzHeight = n.height),
                (o.nzWidth = n.width),
                o.options.onImageSwapComplete(o.$elem),
                o.doneCallback();
            }),
            (n.src = t),
            (o.currentZoomLevel = o.options.zoomLevel),
            (o.options.maxZoomLevel = !1),
            "lens" == o.options.zoomType &&
              o.zoomLens.css({ backgroundImage: "url('" + e + "')" }),
            "window" == o.options.zoomType &&
              o.zoomWindow.css({ backgroundImage: "url('" + e + "')" }),
            "inner" == o.options.zoomType &&
              o.zoomWindow.css({ backgroundImage: "url('" + e + "')" }),
            (o.currentImage = e),
            o.options.imageCrossfade)
          ) {
            var s = o.$elem,
              r = s.clone();
            if (
              (o.$elem.attr("src", t),
              o.$elem.after(r),
              r.stop(!0).fadeOut(o.options.imageCrossfade, function () {
                i(this).remove();
              }),
              o.$elem.width("auto").removeAttr("width"),
              o.$elem.height("auto").removeAttr("height"),
              s.fadeIn(o.options.imageCrossfade),
              o.options.tint && "inner" != o.options.zoomType)
            ) {
              var a = o.zoomTintImage,
                l = a.clone();
              o.zoomTintImage.attr("src", e),
                o.zoomTintImage.after(l),
                l.stop(!0).fadeOut(o.options.imageCrossfade, function () {
                  i(this).remove();
                }),
                a.fadeIn(o.options.imageCrossfade),
                o.zoomTint.css({ height: o.$elem.height() }),
                o.zoomTint.css({ width: o.$elem.width() });
            }
            o.zoomContainer.css("height", o.$elem.height()),
              o.zoomContainer.css("width", o.$elem.width()),
              "inner" == o.options.zoomType &&
                (o.options.constrainType ||
                  (o.zoomWrap.parent().css("height", o.$elem.height()),
                  o.zoomWrap.parent().css("width", o.$elem.width()),
                  o.zoomWindow.css("height", o.$elem.height()),
                  o.zoomWindow.css("width", o.$elem.width()))),
              o.options.imageCrossfade &&
                (o.zoomWrap.css("height", o.$elem.height()),
                o.zoomWrap.css("width", o.$elem.width()));
          } else
            o.$elem.attr("src", t),
              o.options.tint &&
                (o.zoomTintImage.attr("src", e),
                o.zoomTintImage.attr("height", o.$elem.height()),
                o.zoomTintImage.css({ height: o.$elem.height() }),
                o.zoomTint.css({ height: o.$elem.height() })),
              o.zoomContainer.css("height", o.$elem.height()),
              o.zoomContainer.css("width", o.$elem.width()),
              o.options.imageCrossfade &&
                (o.zoomWrap.css("height", o.$elem.height()),
                o.zoomWrap.css("width", o.$elem.width()));
          o.options.constrainType &&
            ("height" == o.options.constrainType &&
              (o.zoomContainer.css("height", o.options.constrainSize),
              o.zoomContainer.css("width", "auto"),
              o.options.imageCrossfade
                ? (o.zoomWrap.css("height", o.options.constrainSize),
                  o.zoomWrap.css("width", "auto"),
                  (o.constwidth = o.zoomWrap.width()))
                : (o.$elem.css("height", o.options.constrainSize),
                  o.$elem.css("width", "auto"),
                  (o.constwidth = o.$elem.width())),
              "inner" == o.options.zoomType &&
                (o.zoomWrap.parent().css("height", o.options.constrainSize),
                o.zoomWrap.parent().css("width", o.constwidth),
                o.zoomWindow.css("height", o.options.constrainSize),
                o.zoomWindow.css("width", o.constwidth)),
              o.options.tint &&
                (o.tintContainer.css("height", o.options.constrainSize),
                o.tintContainer.css("width", o.constwidth),
                o.zoomTint.css("height", o.options.constrainSize),
                o.zoomTint.css("width", o.constwidth),
                o.zoomTintImage.css("height", o.options.constrainSize),
                o.zoomTintImage.css("width", o.constwidth))),
            "width" == o.options.constrainType &&
              (o.zoomContainer.css("height", "auto"),
              o.zoomContainer.css("width", o.options.constrainSize),
              o.options.imageCrossfade
                ? (o.zoomWrap.css("height", "auto"),
                  o.zoomWrap.css("width", o.options.constrainSize),
                  (o.constheight = o.zoomWrap.height()))
                : (o.$elem.css("height", "auto"),
                  o.$elem.css("width", o.options.constrainSize),
                  (o.constheight = o.$elem.height())),
              "inner" == o.options.zoomType &&
                (o.zoomWrap.parent().css("height", o.constheight),
                o.zoomWrap.parent().css("width", o.options.constrainSize),
                o.zoomWindow.css("height", o.constheight),
                o.zoomWindow.css("width", o.options.constrainSize)),
              o.options.tint &&
                (o.tintContainer.css("height", o.constheight),
                o.tintContainer.css("width", o.options.constrainSize),
                o.zoomTint.css("height", o.constheight),
                o.zoomTint.css("width", o.options.constrainSize),
                o.zoomTintImage.css("height", o.constheight),
                o.zoomTintImage.css("width", o.options.constrainSize))));
        },
        doneCallback: function () {
          this.options.loadingIcon && this.spinner.hide(),
            (this.nzOffset = this.$elem.offset()),
            (this.nzWidth = this.$elem.width()),
            (this.nzHeight = this.$elem.height()),
            (this.currentZoomLevel = this.options.zoomLevel),
            (this.widthRatio = this.largeWidth / this.nzWidth),
            (this.heightRatio = this.largeHeight / this.nzHeight),
            "window" == this.options.zoomType &&
              (this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                ? (this.lensHeight = this.nzHeight)
                : (this.lensHeight = String(
                    this.options.zoomWindowHeight / this.heightRatio
                  )),
              this.options.zoomWindowWidth < this.options.zoomWindowWidth
                ? (this.lensWidth = this.nzWidth)
                : (this.lensWidth =
                    this.options.zoomWindowWidth / this.widthRatio),
              this.zoomLens &&
                (this.zoomLens.css("width", this.lensWidth),
                this.zoomLens.css("height", this.lensHeight)));
        },
        getCurrentImage: function () {
          return this.zoomImage;
        },
        getGalleryList: function () {
          var t = this;
          return (
            (t.gallerylist = []),
            t.options.gallery
              ? i("#" + t.options.gallery + " a").each(function () {
                  var e = "";
                  i(this).data("zoom-image")
                    ? (e = i(this).data("zoom-image"))
                    : i(this).data("image") && (e = i(this).data("image")),
                    e == t.zoomImage
                      ? t.gallerylist.unshift({
                          href: "" + e,
                          title: i(this).find("img").attr("title"),
                        })
                      : t.gallerylist.push({
                          href: "" + e,
                          title: i(this).find("img").attr("title"),
                        });
                })
              : t.gallerylist.push({
                  href: "" + t.zoomImage,
                  title: i(this).find("img").attr("title"),
                }),
            t.gallerylist
          );
        },
        changeZoomLevel: function (t) {
          (this.scrollingLock = !0),
            (this.newvalue = parseFloat(t).toFixed(2)),
            (newvalue = parseFloat(t).toFixed(2)),
            (maxheightnewvalue =
              this.largeHeight /
              ((this.options.zoomWindowHeight / this.nzHeight) *
                this.nzHeight)),
            (maxwidthtnewvalue =
              this.largeWidth /
              ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth)),
            "inner" != this.options.zoomType &&
              (maxheightnewvalue <= newvalue
                ? ((this.heightRatio =
                    this.largeHeight / maxheightnewvalue / this.nzHeight),
                  (this.newvalueheight = maxheightnewvalue),
                  (this.fullheight = !0))
                : ((this.heightRatio =
                    this.largeHeight / newvalue / this.nzHeight),
                  (this.newvalueheight = newvalue),
                  (this.fullheight = !1)),
              maxwidthtnewvalue <= newvalue
                ? ((this.widthRatio =
                    this.largeWidth / maxwidthtnewvalue / this.nzWidth),
                  (this.newvaluewidth = maxwidthtnewvalue),
                  (this.fullwidth = !0))
                : ((this.widthRatio =
                    this.largeWidth / newvalue / this.nzWidth),
                  (this.newvaluewidth = newvalue),
                  (this.fullwidth = !1)),
              "lens" == this.options.zoomType &&
                (maxheightnewvalue <= newvalue
                  ? ((this.fullwidth = !0),
                    (this.newvaluewidth = maxheightnewvalue))
                  : ((this.widthRatio =
                      this.largeWidth / newvalue / this.nzWidth),
                    (this.newvaluewidth = newvalue),
                    (this.fullwidth = !1)))),
            "inner" == this.options.zoomType &&
              ((maxheightnewvalue = parseFloat(
                this.largeHeight / this.nzHeight
              ).toFixed(2)),
              (maxwidthtnewvalue = parseFloat(
                this.largeWidth / this.nzWidth
              ).toFixed(2)),
              newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
              newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
              maxheightnewvalue <= newvalue
                ? ((this.heightRatio =
                    this.largeHeight / newvalue / this.nzHeight),
                  newvalue > maxheightnewvalue
                    ? (this.newvalueheight = maxheightnewvalue)
                    : (this.newvalueheight = newvalue),
                  (this.fullheight = !0))
                : ((this.heightRatio =
                    this.largeHeight / newvalue / this.nzHeight),
                  newvalue > maxheightnewvalue
                    ? (this.newvalueheight = maxheightnewvalue)
                    : (this.newvalueheight = newvalue),
                  (this.fullheight = !1)),
              maxwidthtnewvalue <= newvalue
                ? ((this.widthRatio =
                    this.largeWidth / newvalue / this.nzWidth),
                  newvalue > maxwidthtnewvalue
                    ? (this.newvaluewidth = maxwidthtnewvalue)
                    : (this.newvaluewidth = newvalue),
                  (this.fullwidth = !0))
                : ((this.widthRatio =
                    this.largeWidth / newvalue / this.nzWidth),
                  (this.newvaluewidth = newvalue),
                  (this.fullwidth = !1))),
            (scrcontinue = !1),
            "inner" == this.options.zoomType &&
              (this.nzWidth >= this.nzHeight &&
                (this.newvaluewidth <= maxwidthtnewvalue
                  ? (scrcontinue = !0)
                  : ((scrcontinue = !1),
                    (this.fullheight = !0),
                    (this.fullwidth = !0))),
              this.nzHeight > this.nzWidth &&
                (this.newvaluewidth <= maxwidthtnewvalue
                  ? (scrcontinue = !0)
                  : ((scrcontinue = !1),
                    (this.fullheight = !0),
                    (this.fullwidth = !0)))),
            "inner" != this.options.zoomType && (scrcontinue = !0),
            scrcontinue &&
              ((this.zoomLock = 0),
              (this.changeZoom = !0),
              this.options.zoomWindowHeight / this.heightRatio <=
                this.nzHeight &&
                ((this.currentZoomLevel = this.newvalueheight),
                "lens" != this.options.zoomType &&
                  "inner" != this.options.zoomType &&
                  ((this.changeBgSize = !0),
                  this.zoomLens.css({
                    height:
                      String(this.options.zoomWindowHeight / this.heightRatio) +
                      "px",
                  })),
                ("lens" != this.options.zoomType &&
                  "inner" != this.options.zoomType) ||
                  (this.changeBgSize = !0)),
              this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth &&
                ("inner" != this.options.zoomType &&
                  this.newvaluewidth > this.newvalueheight &&
                  (this.currentZoomLevel = this.newvaluewidth),
                "lens" != this.options.zoomType &&
                  "inner" != this.options.zoomType &&
                  ((this.changeBgSize = !0),
                  this.zoomLens.css({
                    width:
                      String(this.options.zoomWindowWidth / this.widthRatio) +
                      "px",
                  })),
                ("lens" != this.options.zoomType &&
                  "inner" != this.options.zoomType) ||
                  (this.changeBgSize = !0)),
              "inner" == this.options.zoomType &&
                ((this.changeBgSize = !0),
                this.nzWidth > this.nzHeight &&
                  (this.currentZoomLevel = this.newvaluewidth),
                this.nzHeight > this.nzWidth &&
                  (this.currentZoomLevel = this.newvaluewidth))),
            this.setPosition(this.currentLoc);
        },
        closeAll: function () {
          self.zoomWindow && self.zoomWindow.hide(),
            self.zoomLens && self.zoomLens.hide(),
            self.zoomTint && self.zoomTint.hide();
        },
        changeState: function (t) {
          "enable" == t && (this.options.zoomEnabled = !0),
            "disable" == t && (this.options.zoomEnabled = !1);
        },
      }),
      (i.fn.elevateZoom = function (t) {
        return this.each(function () {
          var e = Object.create(o);
          e.init(t, this), i.data(this, "elevateZoom", e);
        });
      }),
      (i.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: i.noop,
        onDestroy: function () {},
        onZoomedImageLoaded: function () {},
        onImageSwap: i.noop,
        onImageSwapComplete: i.noop,
      });
  },
  function (t, e, i) {
    var o, n;
    (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = {
                mode: "lg-slide",
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 150,
                hideBarsDelay: 6e3,
                useLeft: !1,
                closable: !0,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimatoin: !0,
                hideControlOnEnd: !1,
                mousewheel: !0,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 1,
                showAfterLoad: !0,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: !1,
                iframeMaxWidth: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                galleryId: 1,
              };
              function i(i, o) {
                if (
                  ((this.el = i),
                  (this.$el = e(i)),
                  (this.s = e.extend({}, t, o)),
                  this.s.dynamic &&
                    "undefined" !== this.s.dynamicEl &&
                    this.s.dynamicEl.constructor === Array &&
                    !this.s.dynamicEl.length)
                )
                  throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return (
                  (this.modules = {}),
                  (this.lGalleryOn = !1),
                  (this.lgBusy = !1),
                  (this.hideBartimeout = !1),
                  (this.isTouch = "ontouchstart" in document.documentElement),
                  this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                  this.s.dynamic
                    ? (this.$items = this.s.dynamicEl)
                    : "this" === this.s.selector
                    ? (this.$items = this.$el)
                    : "" !== this.s.selector
                    ? this.s.selectWithin
                      ? (this.$items = e(this.s.selectWithin).find(
                          this.s.selector
                        ))
                      : (this.$items = this.$el.find(e(this.s.selector)))
                    : (this.$items = this.$el.children()),
                  (this.$slide = ""),
                  (this.$outer = ""),
                  this.init(),
                  this
                );
              }
              (i.prototype.init = function () {
                var t = this;
                t.s.preload > t.$items.length &&
                  (t.s.preload = t.$items.length);
                var i = window.location.hash;
                i.indexOf("lg=" + this.s.galleryId) > 0 &&
                  ((t.index = parseInt(i.split("&slide=")[1], 10)),
                  e("body").addClass("lg-from-hash"),
                  e("body").hasClass("lg-on") ||
                    (setTimeout(function () {
                      t.build(t.index);
                    }),
                    e("body").addClass("lg-on"))),
                  t.s.dynamic
                    ? (t.$el.trigger("onBeforeOpen.lg"),
                      (t.index = t.s.index || 0),
                      e("body").hasClass("lg-on") ||
                        setTimeout(function () {
                          t.build(t.index), e("body").addClass("lg-on");
                        }))
                    : t.$items.on("click.lgcustom", function (i) {
                        try {
                          i.preventDefault(), i.preventDefault();
                        } catch (t) {
                          i.returnValue = !1;
                        }
                        t.$el.trigger("onBeforeOpen.lg"),
                          (t.index = t.s.index || t.$items.index(this)),
                          e("body").hasClass("lg-on") ||
                            (t.build(t.index), e("body").addClass("lg-on"));
                      });
              }),
                (i.prototype.build = function (t) {
                  var i = this;
                  i.structure(),
                    e.each(e.fn.lightGallery.modules, function (t) {
                      i.modules[t] = new e.fn.lightGallery.modules[t](i.el);
                    }),
                    i.slide(t, !1, !1, !1),
                    i.s.keyPress && i.keyPress(),
                    i.$items.length > 1
                      ? (i.arrow(),
                        setTimeout(function () {
                          i.enableDrag(), i.enableSwipe();
                        }, 50),
                        i.s.mousewheel && i.mousewheel())
                      : i.$slide.on("click.lg", function () {
                          i.$el.trigger("onSlideClick.lg");
                        }),
                    i.counter(),
                    i.closeGallery(),
                    i.$el.trigger("onAfterOpen.lg"),
                    i.$outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        i.$outer.removeClass("lg-hide-items"),
                          clearTimeout(i.hideBartimeout),
                          (i.hideBartimeout = setTimeout(function () {
                            i.$outer.addClass("lg-hide-items");
                          }, i.s.hideBarsDelay));
                      }
                    ),
                    i.$outer.trigger("mousemove.lg");
                }),
                (i.prototype.structure = function () {
                  var t,
                    i = "",
                    o = "",
                    n = 0,
                    s = "",
                    r = this;
                  for (
                    e("body").append('<div class="lg-backdrop"></div>'),
                      e(".lg-backdrop").css(
                        "transition-duration",
                        this.s.backdropDuration + "ms"
                      ),
                      n = 0;
                    n < this.$items.length;
                    n++
                  )
                    i += '<div class="lg-item"></div>';
                  if (
                    (this.s.controls &&
                      this.$items.length > 1 &&
                      (o =
                        '<div class="lg-actions"><button class="lg-prev lg-icon">' +
                        this.s.prevHtml +
                        '</button><button class="lg-next lg-icon">' +
                        this.s.nextHtml +
                        "</button></div>"),
                    ".lg-sub-html" === this.s.appendSubHtmlTo &&
                      (s = '<div class="lg-sub-html"></div>'),
                    (t =
                      '<div class="lg-outer ' +
                      this.s.addClass +
                      " " +
                      this.s.startClass +
                      '"><div class="lg" style="width:' +
                      this.s.width +
                      "; height:" +
                      this.s.height +
                      '"><div class="lg-inner">' +
                      i +
                      '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
                      o +
                      s +
                      "</div></div>"),
                    e("body").append(t),
                    (this.$outer = e(".lg-outer")),
                    (this.$slide = this.$outer.find(".lg-item")),
                    this.s.useLeft
                      ? (this.$outer.addClass("lg-use-left"),
                        (this.s.mode = "lg-slide"))
                      : this.$outer.addClass("lg-use-css3"),
                    r.setTop(),
                    e(window).on("resize.lg orientationchange.lg", function () {
                      setTimeout(function () {
                        r.setTop();
                      }, 100);
                    }),
                    this.$slide.eq(this.index).addClass("lg-current"),
                    this.doCss()
                      ? this.$outer.addClass("lg-css3")
                      : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
                    this.$outer.addClass(this.s.mode),
                    this.s.enableDrag &&
                      this.$items.length > 1 &&
                      this.$outer.addClass("lg-grab"),
                    this.s.showAfterLoad &&
                      this.$outer.addClass("lg-show-after-load"),
                    this.doCss())
                  ) {
                    var a = this.$outer.find(".lg-inner");
                    a.css("transition-timing-function", this.s.cssEasing),
                      a.css("transition-duration", this.s.speed + "ms");
                  }
                  setTimeout(function () {
                    e(".lg-backdrop").addClass("in");
                  }),
                    setTimeout(function () {
                      r.$outer.addClass("lg-visible");
                    }, this.s.backdropDuration),
                    this.s.download &&
                      this.$outer
                        .find(".lg-toolbar")
                        .append(
                          '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                        ),
                    (this.prevScrollTop = e(window).scrollTop());
                }),
                (i.prototype.setTop = function () {
                  if ("100%" !== this.s.height) {
                    var t = e(window).height(),
                      i = (t - parseInt(this.s.height, 10)) / 2,
                      o = this.$outer.find(".lg");
                    t >= parseInt(this.s.height, 10)
                      ? o.css("top", i + "px")
                      : o.css("top", "0px");
                  }
                }),
                (i.prototype.doCss = function () {
                  return !!(function () {
                    var t = [
                        "transition",
                        "MozTransition",
                        "WebkitTransition",
                        "OTransition",
                        "msTransition",
                        "KhtmlTransition",
                      ],
                      e = document.documentElement,
                      i = 0;
                    for (i = 0; i < t.length; i++)
                      if (t[i] in e.style) return !0;
                  })();
                }),
                (i.prototype.isVideo = function (t, e) {
                  var i;
                  if (
                    ((i = this.s.dynamic
                      ? this.s.dynamicEl[e].html
                      : this.$items.eq(e).attr("data-html")),
                    !t)
                  )
                    return i
                      ? { html5: !0 }
                      : (console.error(
                          "lightGallery :- data-src is not pvovided on slide item " +
                            (e + 1) +
                            ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
                        ),
                        !1);
                  var o = t.match(
                      /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                    ),
                    n = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    s = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    r = t.match(
                      /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                    );
                  return o
                    ? { youtube: o }
                    : n
                    ? { vimeo: n }
                    : s
                    ? { dailymotion: s }
                    : r
                    ? { vk: r }
                    : void 0;
                }),
                (i.prototype.counter = function () {
                  this.s.counter &&
                    e(this.s.appendCounterTo).append(
                      '<div id="lg-counter"><span id="lg-counter-current">' +
                        (parseInt(this.index, 10) + 1) +
                        '</span> / <span id="lg-counter-all">' +
                        this.$items.length +
                        "</span></div>"
                    );
                }),
                (i.prototype.addHtml = function (t) {
                  var i,
                    o,
                    n = null;
                  if (
                    (this.s.dynamic
                      ? this.s.dynamicEl[t].subHtmlUrl
                        ? (i = this.s.dynamicEl[t].subHtmlUrl)
                        : (n = this.s.dynamicEl[t].subHtml)
                      : (o = this.$items.eq(t)).attr("data-sub-html-url")
                      ? (i = o.attr("data-sub-html-url"))
                      : ((n = o.attr("data-sub-html")),
                        this.s.getCaptionFromTitleOrAlt &&
                          !n &&
                          (n =
                            o.attr("title") ||
                            o.find("img").first().attr("alt"))),
                    !i)
                  )
                    if (null != n) {
                      var s = n.substring(0, 1);
                      ("." !== s && "#" !== s) ||
                        (n =
                          this.s.subHtmlSelectorRelative && !this.s.dynamic
                            ? o.find(n).html()
                            : e(n).html());
                    } else n = "";
                  ".lg-sub-html" === this.s.appendSubHtmlTo
                    ? i
                      ? this.$outer.find(this.s.appendSubHtmlTo).load(i)
                      : this.$outer.find(this.s.appendSubHtmlTo).html(n)
                    : i
                    ? this.$slide.eq(t).load(i)
                    : this.$slide.eq(t).append(n),
                    null != n &&
                      ("" === n
                        ? this.$outer
                            .find(this.s.appendSubHtmlTo)
                            .addClass("lg-empty-html")
                        : this.$outer
                            .find(this.s.appendSubHtmlTo)
                            .removeClass("lg-empty-html")),
                    this.$el.trigger("onAfterAppendSubHtml.lg", [t]);
                }),
                (i.prototype.preload = function (t) {
                  var e = 1,
                    i = 1;
                  for (
                    e = 1;
                    e <= this.s.preload && !(e >= this.$items.length - t);
                    e++
                  )
                    this.loadContent(t + e, !1, 0);
                  for (i = 1; i <= this.s.preload && !(t - i < 0); i++)
                    this.loadContent(t - i, !1, 0);
                }),
                (i.prototype.loadContent = function (t, i, o) {
                  var n,
                    s,
                    r,
                    a,
                    l,
                    c,
                    h = this,
                    d = !1,
                    u = function (t) {
                      for (var i = [], o = [], n = 0; n < t.length; n++) {
                        var r = t[n].split(" ");
                        "" === r[0] && r.splice(0, 1),
                          o.push(r[0]),
                          i.push(r[1]);
                      }
                      for (var a = e(window).width(), l = 0; l < i.length; l++)
                        if (parseInt(i[l], 10) > a) {
                          s = o[l];
                          break;
                        }
                    };
                  if (h.s.dynamic) {
                    if (
                      (h.s.dynamicEl[t].poster &&
                        ((d = !0), (r = h.s.dynamicEl[t].poster)),
                      (c = h.s.dynamicEl[t].html),
                      (s = h.s.dynamicEl[t].src),
                      h.s.dynamicEl[t].responsive)
                    ) {
                      var p = h.s.dynamicEl[t].responsive.split(",");
                      u(p);
                    }
                    (a = h.s.dynamicEl[t].srcset), (l = h.s.dynamicEl[t].sizes);
                  } else {
                    if (
                      (h.$items.eq(t).attr("data-poster") &&
                        ((d = !0), (r = h.$items.eq(t).attr("data-poster"))),
                      (c = h.$items.eq(t).attr("data-html")),
                      (s =
                        h.$items.eq(t).attr("href") ||
                        h.$items.eq(t).attr("data-src")),
                      h.$items.eq(t).attr("data-responsive"))
                    ) {
                      var f = h.$items.eq(t).attr("data-responsive").split(",");
                      u(f);
                    }
                    (a = h.$items.eq(t).attr("data-srcset")),
                      (l = h.$items.eq(t).attr("data-sizes"));
                  }
                  var g = !1;
                  h.s.dynamic
                    ? h.s.dynamicEl[t].iframe && (g = !0)
                    : "true" === h.$items.eq(t).attr("data-iframe") && (g = !0);
                  var m = h.isVideo(s, t);
                  if (!h.$slide.eq(t).hasClass("lg-loaded")) {
                    if (g)
                      h.$slide
                        .eq(t)
                        .prepend(
                          '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                            h.s.iframeMaxWidth +
                            '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                            s +
                            '"  allowfullscreen="true"></iframe></div></div>'
                        );
                    else if (d) {
                      var v = "";
                      (v =
                        m && m.youtube
                          ? "lg-has-youtube"
                          : m && m.vimeo
                          ? "lg-has-vimeo"
                          : "lg-has-html5"),
                        h.$slide
                          .eq(t)
                          .prepend(
                            '<div class="lg-video-cont ' +
                              v +
                              ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                              r +
                              '" /></div></div>'
                          );
                    } else
                      m
                        ? (h.$slide
                            .eq(t)
                            .prepend(
                              '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                            ),
                          h.$el.trigger("hasVideo.lg", [t, s, c]))
                        : h.$slide
                            .eq(t)
                            .prepend(
                              '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                                s +
                                '" /></div>'
                            );
                    if (
                      (h.$el.trigger("onAferAppendSlide.lg", [t]),
                      (n = h.$slide.eq(t).find(".lg-object")),
                      l && n.attr("sizes", l),
                      a)
                    ) {
                      n.attr("srcset", a);
                      try {
                        picturefill({ elements: [n[0]] });
                      } catch (t) {
                        console.warn(
                          "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
                        );
                      }
                    }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && h.addHtml(t),
                      h.$slide.eq(t).addClass("lg-loaded");
                  }
                  h.$slide
                    .eq(t)
                    .find(".lg-object")
                    .on("load.lg error.lg", function () {
                      var i = 0;
                      o && !e("body").hasClass("lg-from-hash") && (i = o),
                        setTimeout(function () {
                          h.$slide.eq(t).addClass("lg-complete"),
                            h.$el.trigger("onSlideItemLoad.lg", [t, o || 0]);
                        }, i);
                    }),
                    m &&
                      m.html5 &&
                      !d &&
                      h.$slide.eq(t).addClass("lg-complete"),
                    !0 === i &&
                      (h.$slide.eq(t).hasClass("lg-complete")
                        ? h.preload(t)
                        : h.$slide
                            .eq(t)
                            .find(".lg-object")
                            .on("load.lg error.lg", function () {
                              h.preload(t);
                            }));
                }),
                (i.prototype.slide = function (t, i, o, n) {
                  var s = this.$outer.find(".lg-current").index(),
                    r = this;
                  if (!r.lGalleryOn || s !== t) {
                    var a,
                      l,
                      c,
                      h = this.$slide.length,
                      d = r.lGalleryOn ? this.s.speed : 0;
                    r.lgBusy ||
                      (this.s.download &&
                        ((a = r.s.dynamic
                          ? !1 !== r.s.dynamicEl[t].downloadUrl &&
                            (r.s.dynamicEl[t].downloadUrl ||
                              r.s.dynamicEl[t].src)
                          : "false" !==
                              r.$items.eq(t).attr("data-download-url") &&
                            (r.$items.eq(t).attr("data-download-url") ||
                              r.$items.eq(t).attr("href") ||
                              r.$items.eq(t).attr("data-src")))
                          ? (e("#lg-download").attr("href", a),
                            r.$outer.removeClass("lg-hide-download"))
                          : r.$outer.addClass("lg-hide-download")),
                      this.$el.trigger("onBeforeSlide.lg", [s, t, i, o]),
                      (r.lgBusy = !0),
                      clearTimeout(r.hideBartimeout),
                      ".lg-sub-html" === this.s.appendSubHtmlTo &&
                        setTimeout(function () {
                          r.addHtml(t);
                        }, d),
                      this.arrowDisable(t),
                      n || (t < s ? (n = "prev") : t > s && (n = "next")),
                      i
                        ? (this.$slide.removeClass(
                            "lg-prev-slide lg-current lg-next-slide"
                          ),
                          h > 2
                            ? ((l = t - 1),
                              (c = t + 1),
                              0 === t && s === h - 1
                                ? ((c = 0), (l = h - 1))
                                : t === h - 1 &&
                                  0 === s &&
                                  ((c = 0), (l = h - 1)))
                            : ((l = 0), (c = 1)),
                          "prev" === n
                            ? r.$slide.eq(c).addClass("lg-next-slide")
                            : r.$slide.eq(l).addClass("lg-prev-slide"),
                          r.$slide.eq(t).addClass("lg-current"))
                        : (r.$outer.addClass("lg-no-trans"),
                          this.$slide.removeClass(
                            "lg-prev-slide lg-next-slide"
                          ),
                          "prev" === n
                            ? (this.$slide.eq(t).addClass("lg-prev-slide"),
                              this.$slide.eq(s).addClass("lg-next-slide"))
                            : (this.$slide.eq(t).addClass("lg-next-slide"),
                              this.$slide.eq(s).addClass("lg-prev-slide")),
                          setTimeout(function () {
                            r.$slide.removeClass("lg-current"),
                              r.$slide.eq(t).addClass("lg-current"),
                              r.$outer.removeClass("lg-no-trans");
                          }, 50)),
                      r.lGalleryOn
                        ? (setTimeout(function () {
                            r.loadContent(t, !0, 0);
                          }, this.s.speed + 50),
                          setTimeout(function () {
                            (r.lgBusy = !1),
                              r.$el.trigger("onAfterSlide.lg", [s, t, i, o]);
                          }, this.s.speed))
                        : (r.loadContent(t, !0, r.s.backdropDuration),
                          (r.lgBusy = !1),
                          r.$el.trigger("onAfterSlide.lg", [s, t, i, o])),
                      (r.lGalleryOn = !0),
                      this.s.counter && e("#lg-counter-current").text(t + 1)),
                      (r.index = t);
                  }
                }),
                (i.prototype.goToNextSlide = function (t) {
                  var e = this,
                    i = e.s.loop;
                  t && e.$slide.length < 3 && (i = !1),
                    e.lgBusy ||
                      (e.index + 1 < e.$slide.length
                        ? (e.index++,
                          e.$el.trigger("onBeforeNextSlide.lg", [e.index]),
                          e.slide(e.index, t, !1, "next"))
                        : i
                        ? ((e.index = 0),
                          e.$el.trigger("onBeforeNextSlide.lg", [e.index]),
                          e.slide(e.index, t, !1, "next"))
                        : e.s.slideEndAnimatoin &&
                          !t &&
                          (e.$outer.addClass("lg-right-end"),
                          setTimeout(function () {
                            e.$outer.removeClass("lg-right-end");
                          }, 400)));
                }),
                (i.prototype.goToPrevSlide = function (t) {
                  var e = this,
                    i = e.s.loop;
                  t && e.$slide.length < 3 && (i = !1),
                    e.lgBusy ||
                      (e.index > 0
                        ? (e.index--,
                          e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]),
                          e.slide(e.index, t, !1, "prev"))
                        : i
                        ? ((e.index = e.$items.length - 1),
                          e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]),
                          e.slide(e.index, t, !1, "prev"))
                        : e.s.slideEndAnimatoin &&
                          !t &&
                          (e.$outer.addClass("lg-left-end"),
                          setTimeout(function () {
                            e.$outer.removeClass("lg-left-end");
                          }, 400)));
                }),
                (i.prototype.keyPress = function () {
                  var t = this;
                  this.$items.length > 1 &&
                    e(window).on("keyup.lg", function (e) {
                      t.$items.length > 1 &&
                        (37 === e.keyCode &&
                          (e.preventDefault(), t.goToPrevSlide()),
                        39 === e.keyCode &&
                          (e.preventDefault(), t.goToNextSlide()));
                    }),
                    e(window).on("keydown.lg", function (e) {
                      !0 === t.s.escKey &&
                        27 === e.keyCode &&
                        (e.preventDefault(),
                        t.$outer.hasClass("lg-thumb-open")
                          ? t.$outer.removeClass("lg-thumb-open")
                          : t.destroy());
                    });
                }),
                (i.prototype.arrow = function () {
                  var t = this;
                  this.$outer.find(".lg-prev").on("click.lg", function () {
                    t.goToPrevSlide();
                  }),
                    this.$outer.find(".lg-next").on("click.lg", function () {
                      t.goToNextSlide();
                    });
                }),
                (i.prototype.arrowDisable = function (t) {
                  !this.s.loop &&
                    this.s.hideControlOnEnd &&
                    (t + 1 < this.$slide.length
                      ? this.$outer
                          .find(".lg-next")
                          .removeAttr("disabled")
                          .removeClass("disabled")
                      : this.$outer
                          .find(".lg-next")
                          .attr("disabled", "disabled")
                          .addClass("disabled"),
                    t > 0
                      ? this.$outer
                          .find(".lg-prev")
                          .removeAttr("disabled")
                          .removeClass("disabled")
                      : this.$outer
                          .find(".lg-prev")
                          .attr("disabled", "disabled")
                          .addClass("disabled"));
                }),
                (i.prototype.setTranslate = function (t, e, i) {
                  this.s.useLeft
                    ? t.css("left", e)
                    : t.css({
                        transform: "translate3d(" + e + "px, " + i + "px, 0px)",
                      });
                }),
                (i.prototype.touchMove = function (t, i) {
                  var o = i - t;
                  Math.abs(o) > 15 &&
                    (this.$outer.addClass("lg-dragging"),
                    this.setTranslate(this.$slide.eq(this.index), o, 0),
                    this.setTranslate(
                      e(".lg-prev-slide"),
                      -this.$slide.eq(this.index).width() + o,
                      0
                    ),
                    this.setTranslate(
                      e(".lg-next-slide"),
                      this.$slide.eq(this.index).width() + o,
                      0
                    ));
                }),
                (i.prototype.touchEnd = function (t) {
                  var e = this;
                  "lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"),
                    this.$slide
                      .not(".lg-current, .lg-prev-slide, .lg-next-slide")
                      .css("opacity", "0"),
                    setTimeout(function () {
                      e.$outer.removeClass("lg-dragging"),
                        t < 0 && Math.abs(t) > e.s.swipeThreshold
                          ? e.goToNextSlide(!0)
                          : t > 0 && Math.abs(t) > e.s.swipeThreshold
                          ? e.goToPrevSlide(!0)
                          : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"),
                        e.$slide.removeAttr("style");
                    }),
                    setTimeout(function () {
                      e.$outer.hasClass("lg-dragging") ||
                        "lg-slide" === e.s.mode ||
                        e.$outer.removeClass("lg-slide");
                    }, e.s.speed + 100);
                }),
                (i.prototype.enableSwipe = function () {
                  var t = this,
                    e = 0,
                    i = 0,
                    o = !1;
                  t.s.enableSwipe &&
                    t.doCss() &&
                    (t.$slide.on("touchstart.lg", function (i) {
                      t.$outer.hasClass("lg-zoomed") ||
                        t.lgBusy ||
                        (i.preventDefault(),
                        t.manageSwipeClass(),
                        (e = i.originalEvent.targetTouches[0].pageX));
                    }),
                    t.$slide.on("touchmove.lg", function (n) {
                      t.$outer.hasClass("lg-zoomed") ||
                        (n.preventDefault(),
                        (i = n.originalEvent.targetTouches[0].pageX),
                        t.touchMove(e, i),
                        (o = !0));
                    }),
                    t.$slide.on("touchend.lg", function () {
                      t.$outer.hasClass("lg-zoomed") ||
                        (o
                          ? ((o = !1), t.touchEnd(i - e))
                          : t.$el.trigger("onSlideClick.lg"));
                    }));
                }),
                (i.prototype.enableDrag = function () {
                  var t = this,
                    i = 0,
                    o = 0,
                    n = !1,
                    s = !1;
                  t.s.enableDrag &&
                    t.doCss() &&
                    (t.$slide.on("mousedown.lg", function (o) {
                      t.$outer.hasClass("lg-zoomed") ||
                        t.lgBusy ||
                        e(o.target).text().trim() ||
                        (o.preventDefault(),
                        t.manageSwipeClass(),
                        (i = o.pageX),
                        (n = !0),
                        (t.$outer.scrollLeft += 1),
                        (t.$outer.scrollLeft -= 1),
                        t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        t.$el.trigger("onDragstart.lg"));
                    }),
                    e(window).on("mousemove.lg", function (e) {
                      n &&
                        ((s = !0),
                        (o = e.pageX),
                        t.touchMove(i, o),
                        t.$el.trigger("onDragmove.lg"));
                    }),
                    e(window).on("mouseup.lg", function (r) {
                      s
                        ? ((s = !1),
                          t.touchEnd(o - i),
                          t.$el.trigger("onDragend.lg"))
                        : (e(r.target).hasClass("lg-object") ||
                            e(r.target).hasClass("lg-video-play")) &&
                          t.$el.trigger("onSlideClick.lg"),
                        n &&
                          ((n = !1),
                          t.$outer
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab"));
                    }));
                }),
                (i.prototype.manageSwipeClass = function () {
                  var t = this.index + 1,
                    e = this.index - 1;
                  this.s.loop &&
                    this.$slide.length > 2 &&
                    (0 === this.index
                      ? (e = this.$slide.length - 1)
                      : this.index === this.$slide.length - 1 && (t = 0)),
                    this.$slide.removeClass("lg-next-slide lg-prev-slide"),
                    e > -1 && this.$slide.eq(e).addClass("lg-prev-slide"),
                    this.$slide.eq(t).addClass("lg-next-slide");
                }),
                (i.prototype.mousewheel = function () {
                  var t = this;
                  t.$outer.on("mousewheel.lg", function (e) {
                    e.deltaY &&
                      (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(),
                      e.preventDefault());
                  });
                }),
                (i.prototype.closeGallery = function () {
                  var t = this,
                    i = !1;
                  this.$outer.find(".lg-close").on("click.lg", function () {
                    t.destroy();
                  }),
                    t.s.closable &&
                      (t.$outer.on("mousedown.lg", function (t) {
                        i = !!(
                          e(t.target).is(".lg-outer") ||
                          e(t.target).is(".lg-item ") ||
                          e(t.target).is(".lg-img-wrap")
                        );
                      }),
                      t.$outer.on("mousemove.lg", function () {
                        i = !1;
                      }),
                      t.$outer.on("mouseup.lg", function (o) {
                        (e(o.target).is(".lg-outer") ||
                          e(o.target).is(".lg-item ") ||
                          (e(o.target).is(".lg-img-wrap") && i)) &&
                          (t.$outer.hasClass("lg-dragging") || t.destroy());
                      }));
                }),
                (i.prototype.destroy = function (t) {
                  var i = this;
                  t ||
                    (i.$el.trigger("onBeforeClose.lg"),
                    e(window).scrollTop(i.prevScrollTop)),
                    t &&
                      (i.s.dynamic ||
                        this.$items.off("click.lg click.lgcustom"),
                      e.removeData(i.el, "lightGallery")),
                    this.$el.off(".lg.tm"),
                    e.each(e.fn.lightGallery.modules, function (t) {
                      i.modules[t] && i.modules[t].destroy();
                    }),
                    (this.lGalleryOn = !1),
                    clearTimeout(i.hideBartimeout),
                    (this.hideBartimeout = !1),
                    e(window).off(".lg"),
                    e("body").removeClass("lg-on lg-from-hash"),
                    i.$outer && i.$outer.removeClass("lg-visible"),
                    e(".lg-backdrop").removeClass("in"),
                    setTimeout(function () {
                      i.$outer && i.$outer.remove(),
                        e(".lg-backdrop").remove(),
                        t || i.$el.trigger("onCloseAfter.lg");
                    }, i.s.backdropDuration + 50);
                }),
                (e.fn.lightGallery = function (t) {
                  return this.each(function () {
                    if (e.data(this, "lightGallery"))
                      try {
                        e(this).data("lightGallery").init();
                      } catch (t) {
                        console.error(
                          "lightGallery has not initiated properly"
                        );
                      }
                    else e.data(this, "lightGallery", new i(this, t));
                  });
                }),
                (e.fn.lightGallery.modules = {});
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = {
                  autoplay: !1,
                  pause: 5e3,
                  progressBar: !0,
                  fourceAutoplay: !1,
                  autoplayControls: !0,
                  appendAutoplayControlsTo: ".lg-toolbar",
                },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.$el = e(i)),
                    !(this.core.$items.length < 2) &&
                      ((this.core.s = e.extend({}, t, this.core.s)),
                      (this.interval = !1),
                      (this.fromAuto = !0),
                      (this.canceledOnTouch = !1),
                      (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
                      this.core.doCss() || (this.core.s.progressBar = !1),
                      this.init(),
                      this)
                  );
                };
              (i.prototype.init = function () {
                var t = this;
                t.core.s.autoplayControls && t.controls(),
                  t.core.s.progressBar &&
                    t.core.$outer
                      .find(".lg")
                      .append(
                        '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
                      ),
                  t.progress(),
                  t.core.s.autoplay &&
                    t.$el.one("onSlideItemLoad.lg.tm", function () {
                      t.startlAuto();
                    }),
                  t.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
                    t.interval && (t.cancelAuto(), (t.canceledOnTouch = !0));
                  }),
                  t.$el.on(
                    "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
                    function () {
                      !t.interval &&
                        t.canceledOnTouch &&
                        (t.startlAuto(), (t.canceledOnTouch = !1));
                    }
                  );
              }),
                (i.prototype.progress = function () {
                  var t,
                    e,
                    i = this;
                  i.$el.on("onBeforeSlide.lg.tm", function () {
                    i.core.s.progressBar &&
                      i.fromAuto &&
                      ((t = i.core.$outer.find(".lg-progress-bar")),
                      (e = i.core.$outer.find(".lg-progress")),
                      i.interval &&
                        (e.removeAttr("style"),
                        t.removeClass("lg-start"),
                        setTimeout(function () {
                          e.css(
                            "transition",
                            "width " +
                              (i.core.s.speed + i.core.s.pause) +
                              "ms ease 0s"
                          ),
                            t.addClass("lg-start");
                        }, 20))),
                      i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(),
                      (i.fromAuto = !1);
                  });
                }),
                (i.prototype.controls = function () {
                  var t = this;
                  e(this.core.s.appendAutoplayControlsTo).append(
                    '<span class="lg-autoplay-button lg-icon"></span>'
                  ),
                    t.core.$outer
                      .find(".lg-autoplay-button")
                      .on("click.lg", function () {
                        e(t.core.$outer).hasClass("lg-show-autoplay")
                          ? (t.cancelAuto(), (t.core.s.fourceAutoplay = !1))
                          : t.interval ||
                            (t.startlAuto(),
                            (t.core.s.fourceAutoplay = t.fourceAutoplayTemp));
                      });
                }),
                (i.prototype.startlAuto = function () {
                  var t = this;
                  t.core.$outer
                    .find(".lg-progress")
                    .css(
                      "transition",
                      "width " +
                        (t.core.s.speed + t.core.s.pause) +
                        "ms ease 0s"
                    ),
                    t.core.$outer.addClass("lg-show-autoplay"),
                    t.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
                    (t.interval = setInterval(function () {
                      t.core.index + 1 < t.core.$items.length
                        ? t.core.index++
                        : (t.core.index = 0),
                        (t.fromAuto = !0),
                        t.core.slide(t.core.index, !1, !1, "next");
                    }, t.core.s.speed + t.core.s.pause));
                }),
                (i.prototype.cancelAuto = function () {
                  clearInterval(this.interval),
                    (this.interval = !1),
                    this.core.$outer.find(".lg-progress").removeAttr("style"),
                    this.core.$outer.removeClass("lg-show-autoplay"),
                    this.core.$outer
                      .find(".lg-progress-bar")
                      .removeClass("lg-start");
                }),
                (i.prototype.destroy = function () {
                  this.cancelAuto(),
                    this.core.$outer.find(".lg-progress-bar").remove();
                }),
                (e.fn.lightGallery.modules.autoplay = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = { fullScreen: !0 },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.$el = e(i)),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    this.init(),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t = "";
                if (this.core.s.fullScreen) {
                  if (
                    !(
                      document.fullscreenEnabled ||
                      document.webkitFullscreenEnabled ||
                      document.mozFullScreenEnabled ||
                      document.msFullscreenEnabled
                    )
                  )
                    return;
                  (t = '<span class="lg-fullscreen lg-icon"></span>'),
                    this.core.$outer.find(".lg-toolbar").append(t),
                    this.fullScreen();
                }
              }),
                (i.prototype.requestFullscreen = function () {
                  var t = document.documentElement;
                  t.requestFullscreen
                    ? t.requestFullscreen()
                    : t.msRequestFullscreen
                    ? t.msRequestFullscreen()
                    : t.mozRequestFullScreen
                    ? t.mozRequestFullScreen()
                    : t.webkitRequestFullscreen && t.webkitRequestFullscreen();
                }),
                (i.prototype.exitFullscreen = function () {
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.msExitFullscreen
                    ? document.msExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen &&
                      document.webkitExitFullscreen();
                }),
                (i.prototype.fullScreen = function () {
                  var t = this;
                  e(document).on(
                    "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
                    function () {
                      t.core.$outer.toggleClass("lg-fullscreen-on");
                    }
                  ),
                    this.core.$outer
                      .find(".lg-fullscreen")
                      .on("click.lg", function () {
                        document.fullscreenElement ||
                        document.mozFullScreenElement ||
                        document.webkitFullscreenElement ||
                        document.msFullscreenElement
                          ? t.exitFullscreen()
                          : t.requestFullscreen();
                      });
                }),
                (i.prototype.destroy = function () {
                  this.exitFullscreen(),
                    e(document).off(
                      "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg"
                    );
                }),
                (e.fn.lightGallery.modules.fullscreen = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = { pager: !1 },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.$el = e(i)),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    this.core.s.pager &&
                      this.core.$items.length > 1 &&
                      this.init(),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t,
                  i,
                  o,
                  n = this,
                  s = "";
                if (
                  (n.core.$outer
                    .find(".lg")
                    .append('<div class="lg-pager-outer"></div>'),
                  n.core.s.dynamic)
                )
                  for (var r = 0; r < n.core.s.dynamicEl.length; r++)
                    s +=
                      '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                      n.core.s.dynamicEl[r].thumb +
                      '" /></div></span>';
                else
                  n.core.$items.each(function () {
                    n.core.s.exThumbImage
                      ? (s +=
                          '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                          e(this).attr(n.core.s.exThumbImage) +
                          '" /></div></span>')
                      : (s +=
                          '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                          e(this).find("img").attr("src") +
                          '" /></div></span>');
                  });
                (i = n.core.$outer.find(".lg-pager-outer")).html(s),
                  (t = n.core.$outer.find(".lg-pager-cont")).on(
                    "click.lg touchend.lg",
                    function () {
                      var t = e(this);
                      (n.core.index = t.index()),
                        n.core.slide(n.core.index, !1, !0, !1);
                    }
                  ),
                  i.on("mouseover.lg", function () {
                    clearTimeout(o), i.addClass("lg-pager-hover");
                  }),
                  i.on("mouseout.lg", function () {
                    o = setTimeout(function () {
                      i.removeClass("lg-pager-hover");
                    });
                  }),
                  n.core.$el.on("onBeforeSlide.lg.tm", function (e, i, o) {
                    t.removeClass("lg-pager-active"),
                      t.eq(o).addClass("lg-pager-active");
                  });
              }),
                (i.prototype.destroy = function () {}),
                (e.fn.lightGallery.modules.pager = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = {
                  thumbnail: !0,
                  animateThumb: !0,
                  currentPagerPosition: "middle",
                  thumbWidth: 100,
                  thumbHeight: "80px",
                  thumbContHeight: 100,
                  thumbMargin: 5,
                  exThumbImage: !1,
                  showThumbByDefault: !0,
                  toogleThumb: !0,
                  pullCaptionUp: !0,
                  enableThumbDrag: !0,
                  enableThumbSwipe: !0,
                  swipeThreshold: 50,
                  loadYoutubeThumbnail: !0,
                  youtubeThumbSize: 1,
                  loadVimeoThumbnail: !0,
                  vimeoThumbSize: "thumbnail_small",
                  loadDailymotionThumbnail: !0,
                },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    (this.$el = e(i)),
                    (this.$thumbOuter = null),
                    (this.thumbOuterWidth = 0),
                    (this.thumbTotalWidth =
                      this.core.$items.length *
                      (this.core.s.thumbWidth + this.core.s.thumbMargin)),
                    (this.thumbIndex = this.core.index),
                    this.core.s.animateThumb &&
                      (this.core.s.thumbHeight = "100%"),
                    (this.left = 0),
                    this.init(),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t = this;
                this.core.s.thumbnail &&
                  this.core.$items.length > 1 &&
                  (this.core.s.showThumbByDefault &&
                    setTimeout(function () {
                      t.core.$outer.addClass("lg-thumb-open");
                    }, 700),
                  this.core.s.pullCaptionUp &&
                    this.core.$outer.addClass("lg-pull-caption-up"),
                  this.build(),
                  this.core.s.animateThumb && this.core.doCss()
                    ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
                      this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
                      (this.thumbClickable = !1))
                    : (this.thumbClickable = !0),
                  this.toogle(),
                  this.thumbkeyPress());
              }),
                (i.prototype.build = function () {
                  var t,
                    i = this,
                    o = "",
                    n = "";
                  switch (this.core.s.vimeoThumbSize) {
                    case "thumbnail_large":
                      n = "640";
                      break;
                    case "thumbnail_medium":
                      n = "200x150";
                      break;
                    case "thumbnail_small":
                      n = "100x75";
                  }
                  function s(t, e, s) {
                    var r,
                      a = i.core.isVideo(t, s) || {},
                      l = "";
                    a.youtube || a.vimeo || a.dailymotion
                      ? a.youtube
                        ? (r = i.core.s.loadYoutubeThumbnail
                            ? "//img.youtube.com/vi/" +
                              a.youtube[1] +
                              "/" +
                              i.core.s.youtubeThumbSize +
                              ".jpg"
                            : e)
                        : a.vimeo
                        ? i.core.s.loadVimeoThumbnail
                          ? ((r = "//i.vimeocdn.com/video/error_" + n + ".jpg"),
                            (l = a.vimeo[1]))
                          : (r = e)
                        : a.dailymotion &&
                          (r = i.core.s.loadDailymotionThumbnail
                            ? "//www.dailymotion.com/thumbnail/video/" +
                              a.dailymotion[1]
                            : e)
                      : (r = e),
                      (o +=
                        '<div data-vimeo-id="' +
                        l +
                        '" class="lg-thumb-item" style="width:' +
                        i.core.s.thumbWidth +
                        "px; height: " +
                        i.core.s.thumbHeight +
                        "; margin-right: " +
                        i.core.s.thumbMargin +
                        'px"><img src="' +
                        r +
                        '" /></div>'),
                      (l = "");
                  }
                  if (
                    (i.core.$outer.addClass("lg-has-thumb"),
                    i.core.$outer
                      .find(".lg")
                      .append(
                        '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'
                      ),
                    (i.$thumbOuter = i.core.$outer.find(".lg-thumb-outer")),
                    (i.thumbOuterWidth = i.$thumbOuter.width()),
                    i.core.s.animateThumb &&
                      i.core.$outer
                        .find(".lg-thumb")
                        .css({
                          width: i.thumbTotalWidth + "px",
                          position: "relative",
                        }),
                    this.core.s.animateThumb &&
                      i.$thumbOuter.css(
                        "height",
                        i.core.s.thumbContHeight + "px"
                      ),
                    i.core.s.dynamic)
                  )
                    for (var r = 0; r < i.core.s.dynamicEl.length; r++)
                      s(
                        i.core.s.dynamicEl[r].src,
                        i.core.s.dynamicEl[r].thumb,
                        r
                      );
                  else
                    i.core.$items.each(function (t) {
                      i.core.s.exThumbImage
                        ? s(
                            e(this).attr("href") || e(this).attr("data-src"),
                            e(this).attr(i.core.s.exThumbImage),
                            t
                          )
                        : s(
                            e(this).attr("href") || e(this).attr("data-src"),
                            e(this).find("img").attr("src"),
                            t
                          );
                    });
                  i.core.$outer.find(".lg-thumb").html(o),
                    (t = i.core.$outer.find(".lg-thumb-item")).each(
                      function () {
                        var t = e(this),
                          o = t.attr("data-vimeo-id");
                        o &&
                          e.getJSON(
                            "//www.vimeo.com/api/v2/video/" +
                              o +
                              ".json?callback=?",
                            { format: "json" },
                            function (e) {
                              t.find("img").attr(
                                "src",
                                e[0][i.core.s.vimeoThumbSize]
                              );
                            }
                          );
                      }
                    ),
                    t.eq(i.core.index).addClass("active"),
                    i.core.$el.on("onBeforeSlide.lg.tm", function () {
                      t.removeClass("active"),
                        t.eq(i.core.index).addClass("active");
                    }),
                    t.on("click.lg touchend.lg", function () {
                      var t = e(this);
                      setTimeout(function () {
                        ((i.thumbClickable && !i.core.lgBusy) ||
                          !i.core.doCss()) &&
                          ((i.core.index = t.index()),
                          i.core.slide(i.core.index, !1, !0, !1));
                      }, 50);
                    }),
                    i.core.$el.on("onBeforeSlide.lg.tm", function () {
                      i.animateThumb(i.core.index);
                    }),
                    e(window).on(
                      "resize.lg.thumb orientationchange.lg.thumb",
                      function () {
                        setTimeout(function () {
                          i.animateThumb(i.core.index),
                            (i.thumbOuterWidth = i.$thumbOuter.width());
                        }, 200);
                      }
                    );
                }),
                (i.prototype.setTranslate = function (t) {
                  this.core.$outer
                    .find(".lg-thumb")
                    .css({ transform: "translate3d(-" + t + "px, 0px, 0px)" });
                }),
                (i.prototype.animateThumb = function (t) {
                  var e = this.core.$outer.find(".lg-thumb");
                  if (this.core.s.animateThumb) {
                    var i;
                    switch (this.core.s.currentPagerPosition) {
                      case "left":
                        i = 0;
                        break;
                      case "middle":
                        i =
                          this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                      case "right":
                        i = this.thumbOuterWidth - this.core.s.thumbWidth;
                    }
                    (this.left =
                      (this.core.s.thumbWidth + this.core.s.thumbMargin) * t -
                      1 -
                      i),
                      this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                        (this.left =
                          this.thumbTotalWidth - this.thumbOuterWidth),
                      this.left < 0 && (this.left = 0),
                      this.core.lGalleryOn
                        ? (e.hasClass("on") ||
                            this.core.$outer
                              .find(".lg-thumb")
                              .css(
                                "transition-duration",
                                this.core.s.speed + "ms"
                              ),
                          this.core.doCss() ||
                            e.animate(
                              { left: -this.left + "px" },
                              this.core.s.speed
                            ))
                        : this.core.doCss() || e.css("left", -this.left + "px"),
                      this.setTranslate(this.left);
                  }
                }),
                (i.prototype.enableThumbDrag = function () {
                  var t = this,
                    i = 0,
                    o = 0,
                    n = !1,
                    s = !1,
                    r = 0;
                  t.$thumbOuter.addClass("lg-grab"),
                    t.core.$outer
                      .find(".lg-thumb")
                      .on("mousedown.lg.thumb", function (e) {
                        t.thumbTotalWidth > t.thumbOuterWidth &&
                          (e.preventDefault(),
                          (i = e.pageX),
                          (n = !0),
                          (t.core.$outer.scrollLeft += 1),
                          (t.core.$outer.scrollLeft -= 1),
                          (t.thumbClickable = !1),
                          t.$thumbOuter
                            .removeClass("lg-grab")
                            .addClass("lg-grabbing"));
                      }),
                    e(window).on("mousemove.lg.thumb", function (e) {
                      n &&
                        ((r = t.left),
                        (s = !0),
                        (o = e.pageX),
                        t.$thumbOuter.addClass("lg-dragging"),
                        (r -= o - i) > t.thumbTotalWidth - t.thumbOuterWidth &&
                          (r = t.thumbTotalWidth - t.thumbOuterWidth),
                        r < 0 && (r = 0),
                        t.setTranslate(r));
                    }),
                    e(window).on("mouseup.lg.thumb", function () {
                      s
                        ? ((s = !1),
                          t.$thumbOuter.removeClass("lg-dragging"),
                          (t.left = r),
                          Math.abs(o - i) < t.core.s.swipeThreshold &&
                            (t.thumbClickable = !0))
                        : (t.thumbClickable = !0),
                        n &&
                          ((n = !1),
                          t.$thumbOuter
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab"));
                    });
                }),
                (i.prototype.enableThumbSwipe = function () {
                  var t = this,
                    e = 0,
                    i = 0,
                    o = !1,
                    n = 0;
                  t.core.$outer
                    .find(".lg-thumb")
                    .on("touchstart.lg", function (i) {
                      t.thumbTotalWidth > t.thumbOuterWidth &&
                        (i.preventDefault(),
                        (e = i.originalEvent.targetTouches[0].pageX),
                        (t.thumbClickable = !1));
                    }),
                    t.core.$outer
                      .find(".lg-thumb")
                      .on("touchmove.lg", function (s) {
                        t.thumbTotalWidth > t.thumbOuterWidth &&
                          (s.preventDefault(),
                          (i = s.originalEvent.targetTouches[0].pageX),
                          (o = !0),
                          t.$thumbOuter.addClass("lg-dragging"),
                          (n = t.left),
                          (n -= i - e) >
                            t.thumbTotalWidth - t.thumbOuterWidth &&
                            (n = t.thumbTotalWidth - t.thumbOuterWidth),
                          n < 0 && (n = 0),
                          t.setTranslate(n));
                      }),
                    t.core.$outer
                      .find(".lg-thumb")
                      .on("touchend.lg", function () {
                        t.thumbTotalWidth > t.thumbOuterWidth && o
                          ? ((o = !1),
                            t.$thumbOuter.removeClass("lg-dragging"),
                            Math.abs(i - e) < t.core.s.swipeThreshold &&
                              (t.thumbClickable = !0),
                            (t.left = n))
                          : (t.thumbClickable = !0);
                      });
                }),
                (i.prototype.toogle = function () {
                  var t = this;
                  t.core.s.toogleThumb &&
                    (t.core.$outer.addClass("lg-can-toggle"),
                    t.$thumbOuter.append(
                      '<span class="lg-toogle-thumb lg-icon"></span>'
                    ),
                    t.core.$outer
                      .find(".lg-toogle-thumb")
                      .on("click.lg", function () {
                        t.core.$outer.toggleClass("lg-thumb-open");
                      }));
                }),
                (i.prototype.thumbkeyPress = function () {
                  var t = this;
                  e(window).on("keydown.lg.thumb", function (e) {
                    38 === e.keyCode
                      ? (e.preventDefault(),
                        t.core.$outer.addClass("lg-thumb-open"))
                      : 40 === e.keyCode &&
                        (e.preventDefault(),
                        t.core.$outer.removeClass("lg-thumb-open"));
                  });
                }),
                (i.prototype.destroy = function () {
                  this.core.s.thumbnail &&
                    this.core.$items.length > 1 &&
                    (e(window).off(
                      "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"
                    ),
                    this.$thumbOuter.remove(),
                    this.core.$outer.removeClass("lg-has-thumb"));
                }),
                (e.fn.lightGallery.modules.Thumbnail = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = {
                  videoMaxWidth: "855px",
                  autoplayFirstVideo: !0,
                  youtubePlayerParams: !1,
                  vimeoPlayerParams: !1,
                  dailymotionPlayerParams: !1,
                  vkPlayerParams: !1,
                  videojs: !1,
                  videojsOptions: {},
                },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.$el = e(i)),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    (this.videoLoaded = !1),
                    this.init(),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t = this;
                t.core.$el.on(
                  "hasVideo.lg.tm",
                  function (t, e, i, o) {
                    var n = this;
                    if (
                      (n.core.$slide
                        .eq(e)
                        .find(".lg-video")
                        .append(n.loadVideo(i, "lg-object", !0, e, o)),
                      o)
                    )
                      if (n.core.s.videojs)
                        try {
                          videojs(
                            n.core.$slide.eq(e).find(".lg-html5").get(0),
                            n.core.s.videojsOptions,
                            function () {
                              !n.videoLoaded &&
                                n.core.s.autoplayFirstVideo &&
                                this.play();
                            }
                          );
                        } catch (t) {
                          console.error("Make sure you have included videojs");
                        }
                      else
                        !n.videoLoaded &&
                          n.core.s.autoplayFirstVideo &&
                          n.core.$slide.eq(e).find(".lg-html5").get(0).play();
                  }.bind(this)
                ),
                  t.core.$el.on(
                    "onAferAppendSlide.lg.tm",
                    function (t, e) {
                      var i = this.core.$slide.eq(e).find(".lg-video-cont");
                      i.hasClass("lg-has-iframe") ||
                        (i.css("max-width", this.core.s.videoMaxWidth),
                        (this.videoLoaded = !0));
                    }.bind(this)
                  ),
                  t.core.doCss() &&
                  t.core.$items.length > 1 &&
                  (t.core.s.enableSwipe || t.core.s.enableDrag)
                    ? t.core.$el.on("onSlideClick.lg.tm", function () {
                        var e = t.core.$slide.eq(t.core.index);
                        t.loadVideoOnclick(e);
                      })
                    : t.core.$slide.on("click.lg", function () {
                        t.loadVideoOnclick(e(this));
                      }),
                  t.core.$el.on(
                    "onBeforeSlide.lg.tm",
                    function (t, i, o) {
                      var n,
                        s = this.core.$slide.eq(i),
                        r = s.find(".lg-youtube").get(0),
                        a = s.find(".lg-vimeo").get(0),
                        l = s.find(".lg-dailymotion").get(0),
                        c = s.find(".lg-vk").get(0),
                        h = s.find(".lg-html5").get(0);
                      if (r)
                        r.contentWindow.postMessage(
                          '{"event":"command","func":"pauseVideo","args":""}',
                          "*"
                        );
                      else if (a)
                        try {
                          $f(a).api("pause");
                        } catch (t) {
                          console.error(
                            "Make sure you have included froogaloop2 js"
                          );
                        }
                      else if (l) l.contentWindow.postMessage("pause", "*");
                      else if (h)
                        if (this.core.s.videojs)
                          try {
                            videojs(h).pause();
                          } catch (t) {
                            console.error(
                              "Make sure you have included videojs"
                            );
                          }
                        else h.pause();
                      c &&
                        e(c).attr(
                          "src",
                          e(c).attr("src").replace("&autoplay", "&noplay")
                        ),
                        (n = this.core.s.dynamic
                          ? this.core.s.dynamicEl[o].src
                          : this.core.$items.eq(o).attr("href") ||
                            this.core.$items.eq(o).attr("data-src"));
                      var d = this.core.isVideo(n, o) || {};
                      (d.youtube || d.vimeo || d.dailymotion || d.vk) &&
                        this.core.$outer.addClass("lg-hide-download");
                    }.bind(this)
                  ),
                  t.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
                    t.core.$slide.eq(i).removeClass("lg-video-playing");
                  }),
                  t.core.s.autoplayFirstVideo &&
                    t.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
                      if (!t.core.lGalleryOn) {
                        var o = t.core.$slide.eq(i);
                        setTimeout(function () {
                          t.loadVideoOnclick(o);
                        }, 100);
                      }
                    });
              }),
                (i.prototype.loadVideo = function (t, i, o, n, s) {
                  var r = "",
                    a = 1,
                    l = "",
                    c = this.core.isVideo(t, n) || {};
                  if (
                    (o &&
                      (a = this.videoLoaded
                        ? 0
                        : this.core.s.autoplayFirstVideo
                        ? 1
                        : 0),
                    c.youtube)
                  )
                    (l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1"),
                      this.core.s.youtubePlayerParams &&
                        (l =
                          l + "&" + e.param(this.core.s.youtubePlayerParams)),
                      (r =
                        '<iframe class="lg-video-object lg-youtube ' +
                        i +
                        '" width="560" height="315" src="//www.youtube.com/embed/' +
                        c.youtube[1] +
                        l +
                        '" frameborder="0" allowfullscreen></iframe>');
                  else if (c.vimeo)
                    (l = "?autoplay=" + a + "&api=1"),
                      this.core.s.vimeoPlayerParams &&
                        (l = l + "&" + e.param(this.core.s.vimeoPlayerParams)),
                      (r =
                        '<iframe class="lg-video-object lg-vimeo ' +
                        i +
                        '" width="560" height="315"  src="//player.vimeo.com/video/' +
                        c.vimeo[1] +
                        l +
                        '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
                  else if (c.dailymotion)
                    (l = "?wmode=opaque&autoplay=" + a + "&api=postMessage"),
                      this.core.s.dailymotionPlayerParams &&
                        (l =
                          l +
                          "&" +
                          e.param(this.core.s.dailymotionPlayerParams)),
                      (r =
                        '<iframe class="lg-video-object lg-dailymotion ' +
                        i +
                        '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                        c.dailymotion[1] +
                        l +
                        '" frameborder="0" allowfullscreen></iframe>');
                  else if (c.html5) {
                    var h = s.substring(0, 1);
                    ("." !== h && "#" !== h) || (s = e(s).html()), (r = s);
                  } else
                    c.vk &&
                      ((l = "&autoplay=" + a),
                      this.core.s.vkPlayerParams &&
                        (l = l + "&" + e.param(this.core.s.vkPlayerParams)),
                      (r =
                        '<iframe class="lg-video-object lg-vk ' +
                        i +
                        '" width="560" height="315" src="//vk.com/video_ext.php?' +
                        c.vk[1] +
                        l +
                        '" frameborder="0" allowfullscreen></iframe>'));
                  return r;
                }),
                (i.prototype.loadVideoOnclick = function (t) {
                  var e = this;
                  if (
                    t.find(".lg-object").hasClass("lg-has-poster") &&
                    t.find(".lg-object").is(":visible")
                  )
                    if (t.hasClass("lg-has-video")) {
                      var i = t.find(".lg-youtube").get(0),
                        o = t.find(".lg-vimeo").get(0),
                        n = t.find(".lg-dailymotion").get(0),
                        s = t.find(".lg-html5").get(0);
                      if (i)
                        i.contentWindow.postMessage(
                          '{"event":"command","func":"playVideo","args":""}',
                          "*"
                        );
                      else if (o)
                        try {
                          $f(o).api("play");
                        } catch (t) {
                          console.error(
                            "Make sure you have included froogaloop2 js"
                          );
                        }
                      else if (n) n.contentWindow.postMessage("play", "*");
                      else if (s)
                        if (e.core.s.videojs)
                          try {
                            videojs(s).play();
                          } catch (t) {
                            console.error(
                              "Make sure you have included videojs"
                            );
                          }
                        else s.play();
                      t.addClass("lg-video-playing");
                    } else {
                      var r, a;
                      t.addClass("lg-video-playing lg-has-video");
                      var l = function (i, o) {
                        if (
                          (t
                            .find(".lg-video")
                            .append(e.loadVideo(i, "", !1, e.core.index, o)),
                          o)
                        )
                          if (e.core.s.videojs)
                            try {
                              videojs(
                                e.core.$slide
                                  .eq(e.core.index)
                                  .find(".lg-html5")
                                  .get(0),
                                e.core.s.videojsOptions,
                                function () {
                                  this.play();
                                }
                              );
                            } catch (t) {
                              console.error(
                                "Make sure you have included videojs"
                              );
                            }
                          else
                            e.core.$slide
                              .eq(e.core.index)
                              .find(".lg-html5")
                              .get(0)
                              .play();
                      };
                      e.core.s.dynamic
                        ? ((r = e.core.s.dynamicEl[e.core.index].src),
                          (a = e.core.s.dynamicEl[e.core.index].html),
                          l(r, a))
                        : ((r =
                            e.core.$items.eq(e.core.index).attr("href") ||
                            e.core.$items.eq(e.core.index).attr("data-src")),
                          (a = e.core.$items
                            .eq(e.core.index)
                            .attr("data-html")),
                          l(r, a));
                      var c = t.find(".lg-object");
                      t.find(".lg-video").append(c),
                        t.find(".lg-video-object").hasClass("lg-html5") ||
                          (t.removeClass("lg-complete"),
                          t
                            .find(".lg-video-object")
                            .on("load.lg error.lg", function () {
                              t.addClass("lg-complete");
                            }));
                    }
                }),
                (i.prototype.destroy = function () {
                  this.videoLoaded = !1;
                }),
                (e.fn.lightGallery.modules.video = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t,
                i,
                o = {
                  scale: 1,
                  zoom: !0,
                  actualSize: !0,
                  enableZoomAfter: 300,
                  useLeftForZoom:
                    ((t = !1),
                    (i = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)),
                    i && parseInt(i[2], 10) < 54 && (t = !0),
                    t),
                },
                n = function (t) {
                  return (
                    (this.core = e(t).data("lightGallery")),
                    (this.core.s = e.extend({}, o, this.core.s)),
                    this.core.s.zoom &&
                      this.core.doCss() &&
                      (this.init(),
                      (this.zoomabletimeout = !1),
                      (this.pageX = e(window).width() / 2),
                      (this.pageY =
                        e(window).height() / 2 + e(window).scrollTop())),
                    this
                  );
                };
              (n.prototype.init = function () {
                var t = this,
                  i =
                    '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                t.core.s.actualSize &&
                  (i += '<span id="lg-actual-size" class="lg-icon"></span>'),
                  t.core.s.useLeftForZoom
                    ? t.core.$outer.addClass("lg-use-left-for-zoom")
                    : t.core.$outer.addClass("lg-use-transition-for-zoom"),
                  this.core.$outer.find(".lg-toolbar").append(i),
                  t.core.$el.on(
                    "onSlideItemLoad.lg.tm.zoom",
                    function (i, o, n) {
                      var s = t.core.s.enableZoomAfter + n;
                      e("body").hasClass("lg-from-hash") && n
                        ? (s = 0)
                        : e("body").removeClass("lg-from-hash"),
                        (t.zoomabletimeout = setTimeout(function () {
                          t.core.$slide.eq(o).addClass("lg-zoomable");
                        }, s + 30));
                    }
                  );
                var o = 1,
                  n = function (i) {
                    var o,
                      n,
                      s = t.core.$outer.find(".lg-current .lg-image"),
                      r = (e(window).width() - s.prop("offsetWidth")) / 2,
                      a =
                        (e(window).height() - s.prop("offsetHeight")) / 2 +
                        e(window).scrollTop();
                    (o = t.pageX - r), (n = t.pageY - a);
                    var l = (i - 1) * o,
                      c = (i - 1) * n;
                    s
                      .css("transform", "scale3d(" + i + ", " + i + ", 1)")
                      .attr("data-scale", i),
                      t.core.s.useLeftForZoom
                        ? s
                            .parent()
                            .css({ left: -l + "px", top: -c + "px" })
                            .attr("data-x", l)
                            .attr("data-y", c)
                        : s
                            .parent()
                            .css(
                              "transform",
                              "translate3d(-" + l + "px, -" + c + "px, 0)"
                            )
                            .attr("data-x", l)
                            .attr("data-y", c);
                  },
                  s = function () {
                    o > 1 ? t.core.$outer.addClass("lg-zoomed") : t.resetZoom(),
                      o < 1 && (o = 1),
                      n(o);
                  },
                  r = function (i, n, r, a) {
                    var l,
                      c = n.prop("offsetWidth");
                    (l = t.core.s.dynamic
                      ? t.core.s.dynamicEl[r].width || n[0].naturalWidth || c
                      : t.core.$items.eq(r).attr("data-width") ||
                        n[0].naturalWidth ||
                        c),
                      t.core.$outer.hasClass("lg-zoomed")
                        ? (o = 1)
                        : l > c && (o = l / c || 2),
                      a
                        ? ((t.pageX = e(window).width() / 2),
                          (t.pageY =
                            e(window).height() / 2 + e(window).scrollTop()))
                        : ((t.pageX =
                            i.pageX || i.originalEvent.targetTouches[0].pageX),
                          (t.pageY =
                            i.pageY || i.originalEvent.targetTouches[0].pageY)),
                      s(),
                      setTimeout(function () {
                        t.core.$outer
                          .removeClass("lg-grabbing")
                          .addClass("lg-grab");
                      }, 10);
                  },
                  a = !1;
                t.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (e, i) {
                  var o = t.core.$slide.eq(i).find(".lg-image");
                  o.on("dblclick", function (t) {
                    r(t, o, i);
                  }),
                    o.on("touchstart", function (t) {
                      a
                        ? (clearTimeout(a), (a = null), r(t, o, i))
                        : (a = setTimeout(function () {
                            a = null;
                          }, 300)),
                        t.preventDefault();
                    });
                }),
                  e(window).on(
                    "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
                    function () {
                      (t.pageX = e(window).width() / 2),
                        (t.pageY =
                          e(window).height() / 2 + e(window).scrollTop()),
                        n(o);
                    }
                  ),
                  e("#lg-zoom-out").on("click.lg", function () {
                    t.core.$outer.find(".lg-current .lg-image").length &&
                      ((o -= t.core.s.scale), s());
                  }),
                  e("#lg-zoom-in").on("click.lg", function () {
                    t.core.$outer.find(".lg-current .lg-image").length &&
                      ((o += t.core.s.scale), s());
                  }),
                  e("#lg-actual-size").on("click.lg", function (e) {
                    r(
                      e,
                      t.core.$slide.eq(t.core.index).find(".lg-image"),
                      t.core.index,
                      !0
                    );
                  }),
                  t.core.$el.on("onBeforeSlide.lg.tm", function () {
                    (o = 1), t.resetZoom();
                  }),
                  t.zoomDrag(),
                  t.zoomSwipe();
              }),
                (n.prototype.resetZoom = function () {
                  this.core.$outer.removeClass("lg-zoomed"),
                    this.core.$slide
                      .find(".lg-img-wrap")
                      .removeAttr("style data-x data-y"),
                    this.core.$slide
                      .find(".lg-image")
                      .removeAttr("style data-scale"),
                    (this.pageX = e(window).width() / 2),
                    (this.pageY =
                      e(window).height() / 2 + e(window).scrollTop());
                }),
                (n.prototype.zoomSwipe = function () {
                  var t = this,
                    e = {},
                    i = {},
                    o = !1,
                    n = !1,
                    s = !1;
                  t.core.$slide.on("touchstart.lg", function (i) {
                    if (t.core.$outer.hasClass("lg-zoomed")) {
                      var o = t.core.$slide.eq(t.core.index).find(".lg-object");
                      (s =
                        o.prop("offsetHeight") * o.attr("data-scale") >
                        t.core.$outer.find(".lg").height()),
                        ((n =
                          o.prop("offsetWidth") * o.attr("data-scale") >
                          t.core.$outer.find(".lg").width()) ||
                          s) &&
                          (i.preventDefault(),
                          (e = {
                            x: i.originalEvent.targetTouches[0].pageX,
                            y: i.originalEvent.targetTouches[0].pageY,
                          }));
                    }
                  }),
                    t.core.$slide.on("touchmove.lg", function (r) {
                      if (t.core.$outer.hasClass("lg-zoomed")) {
                        var a,
                          l,
                          c = t.core.$slide
                            .eq(t.core.index)
                            .find(".lg-img-wrap");
                        r.preventDefault(),
                          (o = !0),
                          (i = {
                            x: r.originalEvent.targetTouches[0].pageX,
                            y: r.originalEvent.targetTouches[0].pageY,
                          }),
                          t.core.$outer.addClass("lg-zoom-dragging"),
                          (l = s
                            ? -Math.abs(c.attr("data-y")) + (i.y - e.y)
                            : -Math.abs(c.attr("data-y"))),
                          (a = n
                            ? -Math.abs(c.attr("data-x")) + (i.x - e.x)
                            : -Math.abs(c.attr("data-x"))),
                          (Math.abs(i.x - e.x) > 15 ||
                            Math.abs(i.y - e.y) > 15) &&
                            (t.core.s.useLeftForZoom
                              ? c.css({ left: a + "px", top: l + "px" })
                              : c.css(
                                  "transform",
                                  "translate3d(" + a + "px, " + l + "px, 0)"
                                ));
                      }
                    }),
                    t.core.$slide.on("touchend.lg", function () {
                      t.core.$outer.hasClass("lg-zoomed") &&
                        o &&
                        ((o = !1),
                        t.core.$outer.removeClass("lg-zoom-dragging"),
                        t.touchendZoom(e, i, n, s));
                    });
                }),
                (n.prototype.zoomDrag = function () {
                  var t = this,
                    i = {},
                    o = {},
                    n = !1,
                    s = !1,
                    r = !1,
                    a = !1;
                  t.core.$slide.on("mousedown.lg.zoom", function (o) {
                    var s = t.core.$slide.eq(t.core.index).find(".lg-object");
                    (a =
                      s.prop("offsetHeight") * s.attr("data-scale") >
                      t.core.$outer.find(".lg").height()),
                      (r =
                        s.prop("offsetWidth") * s.attr("data-scale") >
                        t.core.$outer.find(".lg").width()),
                      t.core.$outer.hasClass("lg-zoomed") &&
                        e(o.target).hasClass("lg-object") &&
                        (r || a) &&
                        (o.preventDefault(),
                        (i = { x: o.pageX, y: o.pageY }),
                        (n = !0),
                        (t.core.$outer.scrollLeft += 1),
                        (t.core.$outer.scrollLeft -= 1),
                        t.core.$outer
                          .removeClass("lg-grab")
                          .addClass("lg-grabbing"));
                  }),
                    e(window).on("mousemove.lg.zoom", function (e) {
                      if (n) {
                        var l,
                          c,
                          h = t.core.$slide
                            .eq(t.core.index)
                            .find(".lg-img-wrap");
                        (s = !0),
                          (o = { x: e.pageX, y: e.pageY }),
                          t.core.$outer.addClass("lg-zoom-dragging"),
                          (c = a
                            ? -Math.abs(h.attr("data-y")) + (o.y - i.y)
                            : -Math.abs(h.attr("data-y"))),
                          (l = r
                            ? -Math.abs(h.attr("data-x")) + (o.x - i.x)
                            : -Math.abs(h.attr("data-x"))),
                          t.core.s.useLeftForZoom
                            ? h.css({ left: l + "px", top: c + "px" })
                            : h.css(
                                "transform",
                                "translate3d(" + l + "px, " + c + "px, 0)"
                              );
                      }
                    }),
                    e(window).on("mouseup.lg.zoom", function (e) {
                      n &&
                        ((n = !1),
                        t.core.$outer.removeClass("lg-zoom-dragging"),
                        !s ||
                          (i.x === o.x && i.y === o.y) ||
                          ((o = { x: e.pageX, y: e.pageY }),
                          t.touchendZoom(i, o, r, a)),
                        (s = !1)),
                        t.core.$outer
                          .removeClass("lg-grabbing")
                          .addClass("lg-grab");
                    });
                }),
                (n.prototype.touchendZoom = function (t, e, i, o) {
                  var n = this.core.$slide
                      .eq(this.core.index)
                      .find(".lg-img-wrap"),
                    s = this.core.$slide.eq(this.core.index).find(".lg-object"),
                    r = -Math.abs(n.attr("data-x")) + (e.x - t.x),
                    a = -Math.abs(n.attr("data-y")) + (e.y - t.y),
                    l =
                      (this.core.$outer.find(".lg").height() -
                        s.prop("offsetHeight")) /
                      2,
                    c = Math.abs(
                      s.prop("offsetHeight") * Math.abs(s.attr("data-scale")) -
                        this.core.$outer.find(".lg").height() +
                        l
                    ),
                    h =
                      (this.core.$outer.find(".lg").width() -
                        s.prop("offsetWidth")) /
                      2,
                    d = Math.abs(
                      s.prop("offsetWidth") * Math.abs(s.attr("data-scale")) -
                        this.core.$outer.find(".lg").width() +
                        h
                    );
                  (Math.abs(e.x - t.x) > 15 || Math.abs(e.y - t.y) > 15) &&
                    (o && (a <= -c ? (a = -c) : a >= -l && (a = -l)),
                    i && (r <= -d ? (r = -d) : r >= -h && (r = -h)),
                    o
                      ? n.attr("data-y", Math.abs(a))
                      : (a = -Math.abs(n.attr("data-y"))),
                    i
                      ? n.attr("data-x", Math.abs(r))
                      : (r = -Math.abs(n.attr("data-x"))),
                    this.core.s.useLeftForZoom
                      ? n.css({ left: r + "px", top: a + "px" })
                      : n.css(
                          "transform",
                          "translate3d(" + r + "px, " + a + "px, 0)"
                        ));
                }),
                (n.prototype.destroy = function () {
                  this.core.$el.off(".lg.zoom"),
                    e(window).off(".lg.zoom"),
                    this.core.$slide.off(".lg.zoom"),
                    this.core.$el.off(".lg.tm.zoom"),
                    this.resetZoom(),
                    clearTimeout(this.zoomabletimeout),
                    (this.zoomabletimeout = !1);
                }),
                (e.fn.lightGallery.modules.zoom = n);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = { hash: !0 },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    this.core.s.hash &&
                      ((this.oldHash = window.location.hash), this.init()),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t,
                  i = this;
                i.core.$el.on("onAfterSlide.lg.tm", function (t, e, o) {
                  history.replaceState
                    ? history.replaceState(
                        null,
                        null,
                        window.location.pathname +
                          window.location.search +
                          "#lg=" +
                          i.core.s.galleryId +
                          "&slide=" +
                          o
                      )
                    : (window.location.hash =
                        "lg=" + i.core.s.galleryId + "&slide=" + o);
                }),
                  e(window).on("hashchange.lg.hash", function () {
                    t = window.location.hash;
                    var e = parseInt(t.split("&slide=")[1], 10);
                    t.indexOf("lg=" + i.core.s.galleryId) > -1
                      ? i.core.slide(e, !1, !1)
                      : i.core.lGalleryOn && i.core.destroy();
                  });
              }),
                (i.prototype.destroy = function () {
                  this.core.s.hash &&
                    (this.oldHash &&
                    this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
                      ? history.replaceState
                        ? history.replaceState(null, null, this.oldHash)
                        : (window.location.hash = this.oldHash)
                      : history.replaceState
                      ? history.replaceState(
                          null,
                          document.title,
                          window.location.pathname + window.location.search
                        )
                      : (window.location.hash = ""),
                    this.core.$el.off(".lg.hash"));
                }),
                (e.fn.lightGallery.modules.hash = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n),
      (o = [i(0)]),
      void 0 ===
        (n = function (t) {
          return (
            (e = t),
            void (function () {
              "use strict";
              var t = {
                  share: !0,
                  facebook: !0,
                  facebookDropdownText: "Facebook",
                  twitter: !0,
                  twitterDropdownText: "Twitter",
                  googlePlus: !0,
                  googlePlusDropdownText: "GooglePlus",
                  pinterest: !0,
                  pinterestDropdownText: "Pinterest",
                },
                i = function (i) {
                  return (
                    (this.core = e(i).data("lightGallery")),
                    (this.core.s = e.extend({}, t, this.core.s)),
                    this.core.s.share && this.init(),
                    this
                  );
                };
              (i.prototype.init = function () {
                var t = this,
                  i =
                    '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
                (i += t.core.s.facebook
                  ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                    this.core.s.facebookDropdownText +
                    "</span></a></li>"
                  : ""),
                  (i += t.core.s.twitter
                    ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                      this.core.s.twitterDropdownText +
                      "</span></a></li>"
                    : ""),
                  (i += t.core.s.googlePlus
                    ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                      this.core.s.googlePlusDropdownText +
                      "</span></a></li>"
                    : ""),
                  (i += t.core.s.pinterest
                    ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                      this.core.s.pinterestDropdownText +
                      "</span></a></li>"
                    : ""),
                  (i += "</ul></span>"),
                  this.core.$outer.find(".lg-toolbar").append(i),
                  this.core.$outer
                    .find(".lg")
                    .append('<div id="lg-dropdown-overlay"></div>'),
                  e("#lg-share").on("click.lg", function () {
                    t.core.$outer.toggleClass("lg-dropdown-active");
                  }),
                  e("#lg-dropdown-overlay").on("click.lg", function () {
                    t.core.$outer.removeClass("lg-dropdown-active");
                  }),
                  t.core.$el.on("onAfterSlide.lg.tm", function (i, o, n) {
                    setTimeout(function () {
                      e("#lg-share-facebook").attr(
                        "href",
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                          encodeURIComponent(
                            t.getSahreProps(n, "facebookShareUrl") ||
                              window.location.href
                          )
                      ),
                        e("#lg-share-twitter").attr(
                          "href",
                          "https://twitter.com/intent/tweet?text=" +
                            t.getSahreProps(n, "tweetText") +
                            "&url=" +
                            encodeURIComponent(
                              t.getSahreProps(n, "twitterShareUrl") ||
                                window.location.href
                            )
                        ),
                        e("#lg-share-googleplus").attr(
                          "href",
                          "https://plus.google.com/share?url=" +
                            encodeURIComponent(
                              t.getSahreProps(n, "googleplusShareUrl") ||
                                window.location.href
                            )
                        ),
                        e("#lg-share-pinterest").attr(
                          "href",
                          "http://www.pinterest.com/pin/create/button/?url=" +
                            encodeURIComponent(
                              t.getSahreProps(n, "pinterestShareUrl") ||
                                window.location.href
                            ) +
                            "&media=" +
                            encodeURIComponent(t.getSahreProps(n, "src")) +
                            "&description=" +
                            t.getSahreProps(n, "pinterestText")
                        );
                    }, 100);
                  });
              }),
                (i.prototype.getSahreProps = function (t, e) {
                  var i = "";
                  if (this.core.s.dynamic) i = this.core.s.dynamicEl[t][e];
                  else {
                    var o = this.core.$items.eq(t).attr("href"),
                      n = this.core.$items.eq(t).data(e);
                    i = ("src" === e && o) || n;
                  }
                  return i;
                }),
                (i.prototype.destroy = function () {}),
                (e.fn.lightGallery.modules.share = i);
            })()
          );
          var e;
        }.apply(e, o)) || (t.exports = n);
  },
]);
