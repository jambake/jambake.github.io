! function() {
  if ("ontouchstart" in window) {
    var e, n, t, i, r, a, o = {};
    e = function(e, n) {
      return Math.abs(e[0] - n[0]) > 5 || Math.abs(e[1] - n[1]) > 5
    }, n = function(e) {
      this.startXY = [e.touches[0].clientX, e.touches[0].clientY], this.threshold = !1
    }, t = function(n) {
      if (this.threshold) return !1;
      this.threshold = e(this.startXY, [n.touches[0].clientX, n.touches[0].clientY])
    }, i = function(n) {
      if (!this.threshold && !e(this.startXY, [n.changedTouches[0].clientX, n.changedTouches[0].clientY])) {
        var t = n.changedTouches[0],
          i = document.createEvent("MouseEvents");
        i.initMouseEvent("click", !0, !0, window, 0, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null), i.simulated = !0, n.target.dispatchEvent(i)
      }
    }, r = function(e) {
      var n = Date.now(),
        t = n - o.time,
        i = e.clientX,
        r = e.clientY,
        s = [Math.abs(o.x - i), Math.abs(o.y - r)],
        c = a(e.target, "A") || e.target,
        l = c.nodeName,
        u = "A" === l,
        d = window.navigator.standalone && u && e.target.getAttribute("href");
      if (o.time = n, o.x = i, o.y = r, (!e.simulated && (t < 500 || t < 1500 && s[0] < 50 && s[1] < 50) || d) && (e.preventDefault(), e.stopPropagation(), !d)) return !1;
      d && (window.location = c.getAttribute("href")), c && c.classList && (c.classList.add("energize-focus"), window.setTimeout(function() {
        c.classList.remove("energize-focus")
      }, 150))
    }, a = function(e, n) {
      for (var t = e; t !== document.body;) {
        if (!t || t.nodeName === n) return t;
        t = t.parentNode
      }
      return null
    }, document.addEventListener("touchstart", n, !1), document.addEventListener("touchmove", t, !1), document.addEventListener("touchend", i, !1), document.addEventListener("click", r, !0)
  }
}(),
/*!
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */
function(e, n) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? n(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return n(e)
  } : n(e)
}("undefined" != typeof window ? window : this, function(e, n) {
  function t(e) {
    var n = !!e && "length" in e && e.length,
      t = ae.type(e);
    return "function" !== t && !ae.isWindow(e) && ("array" === t || 0 === n || "number" == typeof n && n > 0 && n - 1 in e)
  }

  function i(e, n, t) {
    if (ae.isFunction(n)) return ae.grep(e, function(e, i) {
      return !!n.call(e, i, e) !== t
    });
    if (n.nodeType) return ae.grep(e, function(e) {
      return e === n !== t
    });
    if ("string" == typeof n) {
      if (fe.test(n)) return ae.filter(n, e, t);
      n = ae.filter(n, e)
    }
    return ae.grep(e, function(e) {
      return J.call(n, e) > -1 !== t
    })
  }

  function r(e, n) {
    for (;
      (e = e[n]) && 1 !== e.nodeType;);
    return e
  }

  function a(e) {
    var n = {};
    return ae.each(e.match(ke) || [], function(e, t) {
      n[t] = !0
    }), n
  }

  function o() {
    W.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o), ae.ready()
  }

  function s() {
    this.expando = ae.expando + s.uid++
  }

  function c(e, n, t) {
    var i;
    if (t === undefined && 1 === e.nodeType)
      if (i = "data-" + n.replace(Ae, "-$&").toLowerCase(), "string" == typeof(t = e.getAttribute(i))) {
        try {
          t = "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : Ce.test(t) ? ae.parseJSON(t) : t)
        } catch (e) {}
        we.set(e, n, t)
      } else t = undefined;
    return t
  }

  function l(e, n, t, i) {
    var r, a = 1,
      o = 20,
      s = i ? function() {
        return i.cur()
      } : function() {
        return ae.css(e, n, "")
      },
      c = s(),
      l = t && t[3] || (ae.cssNumber[n] ? "" : "px"),
      u = (ae.cssNumber[n] || "px" !== l && +c) && xe.exec(ae.css(e, n));
    if (u && u[3] !== l) {
      l = l || u[3], t = t || [], u = +c || 1;
      do {
        a = a || ".5", u /= a, ae.style(e, n, u + l)
      } while (a !== (a = s() / c) && 1 !== a && --o)
    }
    return t && (u = +u || +c || 0, r = t[1] ? u + (t[1] + 1) * t[2] : +t[2], i && (i.unit = l, i.start = u, i.end = r)), r
  }

  function u(e, n) {
    var t = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
    return n === undefined || n && ae.nodeName(e, n) ? ae.merge([e], t) : t
  }

  function d(e, n) {
    for (var t = 0, i = e.length; t < i; t++) Ee.set(e[t], "globalEval", !n || Ee.get(n[t], "globalEval"))
  }

  function p(e, n, t, i, r) {
    for (var a, o, s, c, l, p, _ = n.createDocumentFragment(), h = [], f = 0, m = e.length; f < m; f++)
      if ((a = e[f]) || 0 === a)
        if ("object" === ae.type(a)) ae.merge(h, a.nodeType ? [a] : a);
        else if (Pe.test(a)) {
      for (o = o || _.appendChild(n.createElement("div")), s = (qe.exec(a) || ["", ""])[1].toLowerCase(), c = je[s] || je._default, o.innerHTML = c[1] + ae.htmlPrefilter(a) + c[2], p = c[0]; p--;) o = o.lastChild;
      ae.merge(h, o.childNodes), o = _.firstChild, o.textContent = ""
    } else h.push(n.createTextNode(a));
    for (_.textContent = "", f = 0; a = h[f++];)
      if (i && ae.inArray(a, i) > -1) r && r.push(a);
      else if (l = ae.contains(a.ownerDocument, a), o = u(_.appendChild(a), "script"), l && d(o), t)
      for (p = 0; a = o[p++];) De.test(a.type || "") && t.push(a);
    return _
  }

  function _() {
    return !0
  }

  function h() {
    return !1
  }

  function f() {
    try {
      return W.activeElement
    } catch (e) {}
  }

  function m(e, n, t, i, r, a) {
    var o, s;
    if ("object" == typeof n) {
      "string" != typeof t && (i = i || t, t = undefined);
      for (s in n) m(e, s, t, i, n[s], a);
      return e
    }
    if (null == i && null == r ? (r = t, i = t = undefined) : null == r && ("string" == typeof t ? (r = i, i = undefined) : (r = i, i = t, t = undefined)), !1 === r) r = h;
    else if (!r) return this;
    return 1 === a && (o = r, r = function(e) {
      return ae().off(e), o.apply(this, arguments)
    }, r.guid = o.guid || (o.guid = ae.guid++)), e.each(function() {
      ae.event.add(this, n, r, i, t)
    })
  }

  function g(e, n) {
    return ae.nodeName(e, "table") && ae.nodeName(11 !== n.nodeType ? n : n.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
  }

  function y(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function T(e) {
    var n = Ke.exec(e.type);
    return n ? e.type = n[1] : e.removeAttribute("type"), e
  }

  function k(e, n) {
    var t, i, r, a, o, s, c, l;
    if (1 === n.nodeType) {
      if (Ee.hasData(e) && (a = Ee.access(e), o = Ee.set(n, a), l = a.events)) {
        delete o.handle, o.events = {};
        for (r in l)
          for (t = 0, i = l[r].length; t < i; t++) ae.event.add(n, r, l[r][t])
      }
      we.hasData(e) && (s = we.access(e), c = ae.extend({}, s), we.set(n, c))
    }
  }

  function v(e, n) {
    var t = n.nodeName.toLowerCase();
    "input" === t && He.test(e.type) ? n.checked = e.checked : "input" !== t && "textarea" !== t || (n.defaultValue = e.defaultValue)
  }

  function b(e, n, t, i) {
    n = Y.apply([], n);
    var r, a, o, s, c, l, d = 0,
      _ = e.length,
      h = _ - 1,
      f = n[0],
      m = ae.isFunction(f);
    if (m || _ > 1 && "string" == typeof f && !ie.checkClone && Be.test(f)) return e.each(function(r) {
      var a = e.eq(r);
      m && (n[0] = f.call(this, r, a.html())), b(a, n, t, i)
    });
    if (_ && (r = p(n, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
      for (o = ae.map(u(r, "script"), y), s = o.length; d < _; d++) c = r, d !== h && (c = ae.clone(c, !0, !0), s && ae.merge(o, u(c, "script"))), t.call(e[d], c, d);
      if (s)
        for (l = o[o.length - 1].ownerDocument, ae.map(o, T), d = 0; d < s; d++) c = o[d], De.test(c.type || "") && !Ee.access(c, "globalEval") && ae.contains(l, c) && (c.src ? ae._evalUrl && ae._evalUrl(c.src) : ae.globalEval(c.textContent.replace(ze, "")))
    }
    return e
  }

  function S(e, n, t) {
    for (var i, r = n ? ae.filter(n, e) : e, a = 0; null != (i = r[a]); a++) t || 1 !== i.nodeType || ae.cleanData(u(i)), i.parentNode && (t && ae.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function E(e, n) {
    var t = ae(n.createElement(e)).appendTo(n.body),
      i = ae.css(t[0], "display");
    return t.detach(), i
  }

  function w(e) {
    var n = W,
      t = Xe[e];
    return t || (t = E(e, n), "none" !== t && t || (Fe = (Fe || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(n.documentElement), n = Fe[0].contentDocument, n.write(), n.close(), t = E(e, n), Fe.detach()), Xe[e] = t), t
  }

  function C(e, n, t) {
    var i, r, a, o, s = e.style;
    return t = t || We(e), t && (o = t.getPropertyValue(n) || t[n], "" !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, n)), !ie.pixelMarginRight() && $e.test(o) && Me.test(n) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = t.width, s.width = i, s.minWidth = r, s.maxWidth = a)), o !== undefined ? o + "" : o
  }

  function A(e, n) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = n).apply(this, arguments)
      }
    }
  }

  function O(e) {
    if (e in tn) return e;
    for (var n = e[0].toUpperCase() + e.slice(1), t = nn.length; t--;)
      if ((e = nn[t] + n) in tn) return e
  }

  function x(e, n, t) {
    var i = xe.exec(n);
    return i ? Math.max(0, i[2] - (t || 0)) + (i[3] || "px") : n
  }

  function R(e, n, t, i, r) {
    for (var a = t === (i ? "border" : "content") ? 4 : "width" === n ? 1 : 0, o = 0; a < 4; a += 2) "margin" === t && (o += ae.css(e, t + Re[a], !0, r)), i ? ("content" === t && (o -= ae.css(e, "padding" + Re[a], !0, r)), "margin" !== t && (o -= ae.css(e, "border" + Re[a] + "Width", !0, r))) : (o += ae.css(e, "padding" + Re[a], !0, r), "padding" !== t && (o += ae.css(e, "border" + Re[a] + "Width", !0, r)));
    return o
  }

  function I(n, t, i) {
    var r = !0,
      a = "width" === t ? n.offsetWidth : n.offsetHeight,
      o = We(n),
      s = "border-box" === ae.css(n, "boxSizing", !1, o);
    if (W.msFullscreenElement && e.top !== e && n.getClientRects().length && (a = Math.round(100 * n.getBoundingClientRect()[t])), a <= 0 || null == a) {
      if (a = C(n, t, o), (a < 0 || null == a) && (a = n.style[t]), $e.test(a)) return a;
      r = s && (ie.boxSizingReliable() || a === n.style[t]), a = parseFloat(a) || 0
    }
    return a + R(n, t, i || (s ? "border" : "content"), r, o) + "px"
  }

  function H(e, n) {
    for (var t, i, r, a = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (a[o] = Ee.get(i, "olddisplay"), t = i.style.display, n ? (a[o] || "none" !== t || (i.style.display = ""), "" === i.style.display && Ie(i) && (a[o] = Ee.access(i, "olddisplay", w(i.nodeName)))) : (r = Ie(i), "none" === t && r || Ee.set(i, "olddisplay", r ? t : ae.css(i, "display"))));
    for (o = 0; o < s; o++) i = e[o], i.style && (n && "none" !== i.style.display && "" !== i.style.display || (i.style.display = n ? a[o] || "" : "none"));
    return e
  }

  function q(e, n, t, i, r) {
    return new q.prototype.init(e, n, t, i, r)
  }

  function D() {
    return e.setTimeout(function() {
      rn = undefined
    }), rn = ae.now()
  }

  function j(e, n) {
    var t, i = 0,
      r = {
        height: e
      };
    for (n = n ? 1 : 0; i < 4; i += 2 - n) t = Re[i], r["margin" + t] = r["padding" + t] = e;
    return n && (r.opacity = r.width = e), r
  }

  function P(e, n, t) {
    for (var i, r = (G.tweeners[n] || []).concat(G.tweeners["*"]), a = 0, o = r.length; a < o; a++)
      if (i = r[a].call(t, n, e)) return i
  }

  function N(e, n, t) {
    var i, r, a, o, s, c, l, u = this,
      d = {},
      p = e.style,
      _ = e.nodeType && Ie(e),
      h = Ee.get(e, "fxshow");
    t.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
      s.unqueued || c()
    }), s.unqueued++, u.always(function() {
      u.always(function() {
        s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in n || "width" in n) && (t.overflow = [p.overflow, p.overflowX, p.overflowY], l = ae.css(e, "display"), "inline" === ("none" === l ? Ee.get(e, "olddisplay") || w(e.nodeName) : l) && "none" === ae.css(e, "float") && (p.display = "inline-block")), t.overflow && (p.overflow = "hidden", u.always(function() {
      p.overflow = t.overflow[0], p.overflowX = t.overflow[1], p.overflowY = t.overflow[2]
    }));
    for (i in n)
      if (r = n[i], on.exec(r)) {
        if (delete n[i], a = a || "toggle" === r, r === (_ ? "hide" : "show")) {
          if ("show" !== r || !h || h[i] === undefined) continue;
          _ = !0
        }
        d[i] = h && h[i] || ae.style(e, i)
      } else l = undefined;
    if (ae.isEmptyObject(d)) "inline" === ("none" === l ? w(e.nodeName) : l) && (p.display = l);
    else {
      h ? "hidden" in h && (_ = h.hidden) : h = Ee.access(e, "fxshow", {}), a && (h.hidden = !_), _ ? ae(e).show() : u.done(function() {
        ae(e).hide()
      }), u.done(function() {
        var n;
        Ee.remove(e, "fxshow");
        for (n in d) ae.style(e, n, d[n])
      });
      for (i in d) o = P(_ ? h[i] : 0, i, u), i in h || (h[i] = o.start, _ && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
    }
  }

  function U(e, n) {
    var t, i, r, a, o;
    for (t in e)
      if (i = ae.camelCase(t), r = n[i], a = e[t], ae.isArray(a) && (r = a[1], a = e[t] = a[0]), t !== i && (e[i] = a, delete e[t]), (o = ae.cssHooks[i]) && "expand" in o) {
        a = o.expand(a), delete e[i];
        for (t in a) t in e || (e[t] = a[t], n[t] = r)
      } else n[i] = r
  }

  function G(e, n, t) {
    var i, r, a = 0,
      o = G.prefilters.length,
      s = ae.Deferred().always(function() {
        delete c.elem
      }),
      c = function() {
        if (r) return !1;
        for (var n = rn || D(), t = Math.max(0, l.startTime + l.duration - n), i = t / l.duration || 0, a = 1 - i, o = 0, c = l.tweens.length; o < c; o++) l.tweens[o].run(a);
        return s.notifyWith(e, [l, a, t]), a < 1 && c ? t : (s.resolveWith(e, [l]), !1)
      },
      l = s.promise({
        elem: e,
        props: ae.extend({}, n),
        opts: ae.extend(!0, {
          specialEasing: {},
          easing: ae.easing._default
        }, t),
        originalProperties: n,
        originalOptions: t,
        startTime: rn || D(),
        duration: t.duration,
        tweens: [],
        createTween: function(n, t) {
          var i = ae.Tween(e, l.opts, n, t, l.opts.specialEasing[n] || l.opts.easing);
          return l.tweens.push(i), i
        },
        stop: function(n) {
          var t = 0,
            i = n ? l.tweens.length : 0;
          if (r) return this;
          for (r = !0; t < i; t++) l.tweens[t].run(1);
          return n ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, n])) : s.rejectWith(e, [l, n]), this
        }
      }),
      u = l.props;
    for (U(u, l.opts.specialEasing); a < o; a++)
      if (i = G.prefilters[a].call(l, e, u, l.opts)) return ae.isFunction(i.stop) && (ae._queueHooks(l.elem, l.opts.queue).stop = ae.proxy(i.stop, i)), i;
    return ae.map(u, P, l), ae.isFunction(l.opts.start) && l.opts.start.call(e, l), ae.fx.timer(ae.extend(c, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function L(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function Z(e) {
    return function(n, t) {
      "string" != typeof n && (t = n, n = "*");
      var i, r = 0,
        a = n.toLowerCase().match(ke) || [];
      if (ae.isFunction(t))
        for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(t)) : (e[i] = e[i] || []).push(t)
    }
  }

  function B(e, n, t, i) {
    function r(s) {
      var c;
      return a[s] = !0, ae.each(e[s] || [], function(e, s) {
        var l = s(n, t, i);
        return "string" != typeof l || o || a[l] ? o ? !(c = l) : void 0 : (n.dataTypes.unshift(l), r(l), !1)
      }), c
    }
    var a = {},
      o = e === wn;
    return r(n.dataTypes[0]) || !a["*"] && r("*")
  }

  function K(e, n) {
    var t, i, r = ae.ajaxSettings.flatOptions || {};
    for (t in n) n[t] !== undefined && ((r[t] ? e : i || (i = {}))[t] = n[t]);
    return i && ae.extend(!0, e, i), e
  }

  function z(e, n, t) {
    for (var i, r, a, o, s = e.contents, c = e.dataTypes;
      "*" === c[0];) c.shift(), i === undefined && (i = e.mimeType || n.getResponseHeader("Content-Type"));
    if (i)
      for (r in s)
        if (s[r] && s[r].test(i)) {
          c.unshift(r);
          break
        } if (c[0] in t) a = c[0];
    else {
      for (r in t) {
        if (!c[0] || e.converters[r + " " + c[0]]) {
          a = r;
          break
        }
        o || (o = r)
      }
      a = a || o
    }
    if (a) return a !== c[0] && c.unshift(a), t[a]
  }

  function F(e, n, t, i) {
    var r, a, o, s, c, l = {},
      u = e.dataTypes.slice();
    if (u[1])
      for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
    for (a = u.shift(); a;)
      if (e.responseFields[a] && (t[e.responseFields[a]] = n), !c && i && e.dataFilter && (n = e.dataFilter(n, e.dataType)), c = a, a = u.shift())
        if ("*" === a) a = c;
        else if ("*" !== c && c !== a) {
      if (!(o = l[c + " " + a] || l["* " + a]))
        for (r in l)
          if (s = r.split(" "), s[1] === a && (o = l[c + " " + s[0]] || l["* " + s[0]])) {
            !0 === o ? o = l[r] : !0 !== l[r] && (a = s[0], u.unshift(s[1]));
            break
          } if (!0 !== o)
        if (o && e["throws"]) n = o(n);
        else try {
          n = o(n)
        } catch (e) {
          return {
            state: "parsererror",
            error: o ? e : "No conversion from " + c + " to " + a
          }
        }
    }
    return {
      state: "success",
      data: n
    }
  }

  function X(e, n, t, i) {
    var r;
    if (ae.isArray(n)) ae.each(n, function(n, r) {
      t || xn.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? n : "") + "]", r, t, i)
    });
    else if (t || "object" !== ae.type(n)) i(e, n);
    else
      for (r in n) X(e + "[" + r + "]", n[r], t, i)
  }

  function M(e) {
    return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var $ = [],
    W = e.document,
    V = $.slice,
    Y = $.concat,
    Q = $.push,
    J = $.indexOf,
    ee = {},
    ne = ee.toString,
    te = ee.hasOwnProperty,
    ie = {},
    re = "2.2.0",
    ae = function(e, n) {
      return new ae.fn.init(e, n)
    },
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    ce = /-([\da-z])/gi,
    le = function(e, n) {
      return n.toUpperCase()
    };
  ae.fn = ae.prototype = {
    jquery: re,
    constructor: ae,
    selector: "",
    length: 0,
    toArray: function() {
      return V.call(this)
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : V.call(this)
    },
    pushStack: function(e) {
      var n = ae.merge(this.constructor(), e);
      return n.prevObject = this, n.context = this.context, n
    },
    each: function(e) {
      return ae.each(this, e)
    },
    map: function(e) {
      return this.pushStack(ae.map(this, function(n, t) {
        return e.call(n, t, n)
      }))
    },
    slice: function() {
      return this.pushStack(V.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var n = this.length,
        t = +e + (e < 0 ? n : 0);
      return this.pushStack(t >= 0 && t < n ? [this[t]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: Q,
    sort: $.sort,
    splice: $.splice
  }, ae.extend = ae.fn.extend = function() {
    var e, n, t, i, r, a, o = arguments[0] || {},
      s = 1,
      c = arguments.length,
      l = !1;
    for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === c && (o = this, s--); s < c; s++)
      if (null != (e = arguments[s]))
        for (n in e) t = o[n], i = e[n], o !== i && (l && i && (ae.isPlainObject(i) || (r = ae.isArray(i))) ? (r ? (r = !1, a = t && ae.isArray(t) ? t : []) : a = t && ae.isPlainObject(t) ? t : {}, o[n] = ae.extend(l, a, i)) : i !== undefined && (o[n] = i));
    return o
  }, ae.extend({
    expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === ae.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      var n = e && e.toString();
      return !ae.isArray(e) && n - parseFloat(n) + 1 >= 0
    },
    isPlainObject: function(e) {
      return "object" === ae.type(e) && !e.nodeType && !ae.isWindow(e) && !(e.constructor && !te.call(e.constructor.prototype, "isPrototypeOf"))
    },
    isEmptyObject: function(e) {
      var n;
      for (n in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[ne.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      var n, t = eval;
      (e = ae.trim(e)) && (1 === e.indexOf("use strict") ? (n = W.createElement("script"), n.text = e, W.head.appendChild(n).parentNode.removeChild(n)) : t(e))
    },
    camelCase: function(e) {
      return e.replace(se, "ms-").replace(ce, le)
    },
    nodeName: function(e, n) {
      return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase()
    },
    each: function(e, n) {
      var i, r = 0;
      if (t(e))
        for (i = e.length; r < i && !1 !== n.call(e[r], r, e[r]); r++);
      else
        for (r in e)
          if (!1 === n.call(e[r], r, e[r])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(oe, "")
    },
    makeArray: function(e, n) {
      var i = n || [];
      return null != e && (t(Object(e)) ? ae.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
    },
    inArray: function(e, n, t) {
      return null == n ? -1 : J.call(n, e, t)
    },
    merge: function(e, n) {
      for (var t = +n.length, i = 0, r = e.length; i < t; i++) e[r++] = n[i];
      return e.length = r, e
    },
    grep: function(e, n, t) {
      for (var i = [], r = 0, a = e.length, o = !t; r < a; r++) !n(e[r], r) !== o && i.push(e[r]);
      return i
    },
    map: function(e, n, i) {
      var r, a, o = 0,
        s = [];
      if (t(e))
        for (r = e.length; o < r; o++) null != (a = n(e[o], o, i)) && s.push(a);
      else
        for (o in e) null != (a = n(e[o], o, i)) && s.push(a);
      return Y.apply([], s)
    },
    guid: 1,
    proxy: function(e, n) {
      var t, i, r;
      return "string" == typeof n && (t = e[n], n = e, e = t), ae.isFunction(e) ? (i = V.call(arguments, 2), r = function() {
        return e.apply(n || this, i.concat(V.call(arguments)))
      }, r.guid = e.guid = e.guid || ae.guid++, r) : undefined
    },
    now: Date.now,
    support: ie
  }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = $[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, n) {
    ee["[object " + n + "]"] = n.toLowerCase()
  });
  var ue =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    function(e) {
      function n(e, n, t, i) {
        var r, a, o, s, c, l, d, _, h = n && n.ownerDocument,
          f = n ? n.nodeType : 9;
        if (t = t || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return t;
        if (!i && ((n ? n.ownerDocument || n : L) !== H && I(n), n = n || H, D)) {
          if (11 !== f && (l = ge.exec(e)))
            if (r = l[1]) {
              if (9 === f) {
                if (!(o = n.getElementById(r))) return t;
                if (o.id === r) return t.push(o), t
              } else if (h && (o = h.getElementById(r)) && U(n, o) && o.id === r) return t.push(o), t
            } else {
              if (l[2]) return Q.apply(t, n.getElementsByTagName(e)), t;
              if ((r = l[3]) && v.getElementsByClassName && n.getElementsByClassName) return Q.apply(t, n.getElementsByClassName(r)), t
            } if (v.qsa && !F[e + " "] && (!j || !j.test(e))) {
            if (1 !== f) h = n, _ = e;
            else if ("object" !== n.nodeName.toLowerCase()) {
              for ((s = n.getAttribute("id")) ? s = s.replace(Te, "\\$&") : n.setAttribute("id", s = G), d = w(e), a = d.length, c = pe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = c + " " + p(d[a]);
              _ = d.join(","), h = ye.test(e) && u(n.parentNode) || n
            }
            if (_) try {
              return Q.apply(t, h.querySelectorAll(_)), t
            } catch (e) {} finally {
              s === G && n.removeAttribute("id")
            }
          }
        }
        return A(e.replace(se, "$1"), n, t, i)
      }

      function t() {
        function e(t, i) {
          return n.push(t + " ") > b.cacheLength && delete e[n.shift()], e[t + " "] = i
        }
        var n = [];
        return e
      }

      function i(e) {
        return e[G] = !0, e
      }

      function r(e) {
        var n = H.createElement("div");
        try {
          return !!e(n)
        } catch (e) {
          return !1
        } finally {
          n.parentNode && n.parentNode.removeChild(n), n = null
        }
      }

      function a(e, n) {
        for (var t = e.split("|"), i = t.length; i--;) b.attrHandle[t[i]] = n
      }

      function o(e, n) {
        var t = n && e,
          i = t && 1 === e.nodeType && 1 === n.nodeType && (~n.sourceIndex || M) - (~e.sourceIndex || M);
        if (i) return i;
        if (t)
          for (; t = t.nextSibling;)
            if (t === n) return -1;
        return e ? 1 : -1
      }

      function s(e) {
        return function(n) {
          return "input" === n.nodeName.toLowerCase() && n.type === e
        }
      }

      function c(e) {
        return function(n) {
          var t = n.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && n.type === e
        }
      }

      function l(e) {
        return i(function(n) {
          return n = +n, i(function(t, i) {
            for (var r, a = e([], t.length, n), o = a.length; o--;) t[r = a[o]] && (t[r] = !(i[r] = t[r]))
          })
        })
      }

      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }

      function d() {}

      function p(e) {
        for (var n = 0, t = e.length, i = ""; n < t; n++) i += e[n].value;
        return i
      }

      function _(e, n, t) {
        var i = n.dir,
          r = t && "parentNode" === i,
          a = B++;
        return n.first ? function(n, t, a) {
          for (; n = n[i];)
            if (1 === n.nodeType || r) return e(n, t, a)
        } : function(n, t, o) {
          var s, c, l, u = [Z, a];
          if (o) {
            for (; n = n[i];)
              if ((1 === n.nodeType || r) && e(n, t, o)) return !0
          } else
            for (; n = n[i];)
              if (1 === n.nodeType || r) {
                if (l = n[G] || (n[G] = {}), c = l[n.uniqueID] || (l[n.uniqueID] = {}), (s = c[i]) && s[0] === Z && s[1] === a) return u[2] = s[2];
                if (c[i] = u, u[2] = e(n, t, o)) return !0
              }
        }
      }

      function h(e) {
        return e.length > 1 ? function(n, t, i) {
          for (var r = e.length; r--;)
            if (!e[r](n, t, i)) return !1;
          return !0
        } : e[0]
      }

      function f(e, t, i) {
        for (var r = 0, a = t.length; r < a; r++) n(e, t[r], i);
        return i
      }

      function m(e, n, t, i, r) {
        for (var a, o = [], s = 0, c = e.length, l = null != n; s < c; s++)(a = e[s]) && (t && !t(a, i, r) || (o.push(a), l && n.push(s)));
        return o
      }

      function g(e, n, t, r, a, o) {
        return r && !r[G] && (r = g(r)), a && !a[G] && (a = g(a, o)), i(function(i, o, s, c) {
          var l, u, d, p = [],
            _ = [],
            h = o.length,
            g = i || f(n || "*", s.nodeType ? [s] : s, []),
            y = !e || !i && n ? g : m(g, p, e, s, c),
            T = t ? a || (i ? e : h || r) ? [] : o : y;
          if (t && t(y, T, s, c), r)
            for (l = m(T, _), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (T[_[u]] = !(y[_[u]] = d));
          if (i) {
            if (a || e) {
              if (a) {
                for (l = [], u = T.length; u--;)(d = T[u]) && l.push(y[u] = d);
                a(null, T = [], l, c)
              }
              for (u = T.length; u--;)(d = T[u]) && (l = a ? ee(i, d) : p[u]) > -1 && (i[l] = !(o[l] = d))
            }
          } else T = m(T === o ? T.splice(h, T.length) : T), a ? a(null, o, T, c) : Q.apply(o, T)
        })
      }

      function y(e) {
        for (var n, t, i, r = e.length, a = b.relative[e[0].type], o = a || b.relative[" "], s = a ? 1 : 0, c = _(function(e) {
            return e === n
          }, o, !0), l = _(function(e) {
            return ee(n, e) > -1
          }, o, !0), u = [function(e, t, i) {
            var r = !a && (i || t !== O) || ((n = t).nodeType ? c(e, t, i) : l(e, t, i));
            return n = null, r
          }]; s < r; s++)
          if (t = b.relative[e[s].type]) u = [_(h(u), t)];
          else {
            if (t = b.filter[e[s].type].apply(null, e[s].matches), t[G]) {
              for (i = ++s; i < r && !b.relative[e[i].type]; i++);
              return g(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(se, "$1"), t, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && p(e))
            }
            u.push(t)
          } return h(u)
      }

      function T(e, t) {
        var r = t.length > 0,
          a = e.length > 0,
          o = function(i, o, s, c, l) {
            var u, d, p, _ = 0,
              h = "0",
              f = i && [],
              g = [],
              y = O,
              T = i || a && b.find.TAG("*", l),
              k = Z += null == y ? 1 : Math.random() || .1,
              v = T.length;
            for (l && (O = o === H || o || l); h !== v && null != (u = T[h]); h++) {
              if (a && u) {
                for (d = 0, o || u.ownerDocument === H || (I(u), s = !D); p = e[d++];)
                  if (p(u, o || H, s)) {
                    c.push(u);
                    break
                  } l && (Z = k)
              }
              r && ((u = !p && u) && _--, i && f.push(u))
            }
            if (_ += h, r && h !== _) {
              for (d = 0; p = t[d++];) p(f, g, o, s);
              if (i) {
                if (_ > 0)
                  for (; h--;) f[h] || g[h] || (g[h] = V.call(c));
                g = m(g)
              }
              Q.apply(c, g), l && !i && g.length > 0 && _ + t.length > 1 && n.uniqueSort(c)
            }
            return l && (Z = k, O = y), f
          };
        return r ? i(o) : o
      }
      var k, v, b, S, E, w, C, A, O, x, R, I, H, q, D, j, P, N, U, G = "sizzle" + 1 * new Date,
        L = e.document,
        Z = 0,
        B = 0,
        K = t(),
        z = t(),
        F = t(),
        X = function(e, n) {
          return e === n && (R = !0), 0
        },
        M = 1 << 31,
        $ = {}.hasOwnProperty,
        W = [],
        V = W.pop,
        Y = W.push,
        Q = W.push,
        J = W.slice,
        ee = function(e, n) {
          for (var t = 0, i = e.length; t < i; t++)
            if (e[t] === n) return t;
          return -1
        },
        ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        te = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = "\\[" + te + "*(" + ie + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + te + "*\\]",
        ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
        oe = new RegExp(te + "+", "g"),
        se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
        ce = new RegExp("^" + te + "*," + te + "*"),
        le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
        ue = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
        de = new RegExp(ae),
        pe = new RegExp("^" + ie + "$"),
        _e = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + re),
          PSEUDO: new RegExp("^" + ae),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ne + ")$", "i"),
          needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
        },
        he = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        Te = /'|\\/g,
        ke = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
        ve = function(e, n, t) {
          var i = "0x" + n - 65536;
          return i !== i || t ? n : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        be = function() {
          I()
        };
      try {
        Q.apply(W = J.call(L.childNodes), L.childNodes), W[L.childNodes.length].nodeType
      } catch (e) {
        Q = {
          apply: W.length ? function(e, n) {
            Y.apply(e, J.call(n))
          } : function(e, n) {
            for (var t = e.length, i = 0; e[t++] = n[i++];);
            e.length = t - 1
          }
        }
      }
      v = n.support = {}, E = n.isXML = function(e) {
        var n = e && (e.ownerDocument || e).documentElement;
        return !!n && "HTML" !== n.nodeName
      }, I = n.setDocument = function(e) {
        var n, t, i = e ? e.ownerDocument || e : L;
        return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, q = H.documentElement, D = !E(H), (t = H.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", be, !1) : t.attachEvent && t.attachEvent("onunload", be)), v.attributes = r(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), v.getElementsByTagName = r(function(e) {
          return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
        }), v.getElementsByClassName = me.test(H.getElementsByClassName), v.getById = r(function(e) {
          return q.appendChild(e).id = G, !H.getElementsByName || !H.getElementsByName(G).length
        }), v.getById ? (b.find.ID = function(e, n) {
          if ("undefined" != typeof n.getElementById && D) {
            var t = n.getElementById(e);
            return t ? [t] : []
          }
        }, b.filter.ID = function(e) {
          var n = e.replace(ke, ve);
          return function(e) {
            return e.getAttribute("id") === n
          }
        }) : (delete b.find.ID, b.filter.ID = function(e) {
          var n = e.replace(ke, ve);
          return function(e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }), b.find.TAG = v.getElementsByTagName ? function(e, n) {
          return "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(e) : v.qsa ? n.querySelectorAll(e) : void 0
        } : function(e, n) {
          var t, i = [],
            r = 0,
            a = n.getElementsByTagName(e);
          if ("*" === e) {
            for (; t = a[r++];) 1 === t.nodeType && i.push(t);
            return i
          }
          return a
        }, b.find.CLASS = v.getElementsByClassName && function(e, n) {
          if ("undefined" != typeof n.getElementsByClassName && D) return n.getElementsByClassName(e)
        }, P = [], j = [], (v.qsa = me.test(H.querySelectorAll)) && (r(function(e) {
          q.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + te + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + G + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + G + "+*").length || j.push(".#.+[+~]")
        }), r(function(e) {
          var n = H.createElement("input");
          n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
        })), (v.matchesSelector = me.test(N = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && r(function(e) {
          v.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), P.push("!=", ae)
        }), j = j.length && new RegExp(j.join("|")), P = P.length && new RegExp(P.join("|")), n = me.test(q.compareDocumentPosition), U = n || me.test(q.contains) ? function(e, n) {
          var t = 9 === e.nodeType ? e.documentElement : e,
            i = n && n.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(t.contains ? t.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, n) {
          if (n)
            for (; n = n.parentNode;)
              if (n === e) return !0;
          return !1
        }, X = n ? function(e, n) {
          if (e === n) return R = !0, 0;
          var t = !e.compareDocumentPosition - !n.compareDocumentPosition;
          return t || (t = (e.ownerDocument || e) === (n.ownerDocument || n) ? e.compareDocumentPosition(n) : 1, 1 & t || !v.sortDetached && n.compareDocumentPosition(e) === t ? e === H || e.ownerDocument === L && U(L, e) ? -1 : n === H || n.ownerDocument === L && U(L, n) ? 1 : x ? ee(x, e) - ee(x, n) : 0 : 4 & t ? -1 : 1)
        } : function(e, n) {
          if (e === n) return R = !0, 0;
          var t, i = 0,
            r = e.parentNode,
            a = n.parentNode,
            s = [e],
            c = [n];
          if (!r || !a) return e === H ? -1 : n === H ? 1 : r ? -1 : a ? 1 : x ? ee(x, e) - ee(x, n) : 0;
          if (r === a) return o(e, n);
          for (t = e; t = t.parentNode;) s.unshift(t);
          for (t = n; t = t.parentNode;) c.unshift(t);
          for (; s[i] === c[i];) i++;
          return i ? o(s[i], c[i]) : s[i] === L ? -1 : c[i] === L ? 1 : 0
        }, H) : H
      }, n.matches = function(e, t) {
        return n(e, null, null, t)
      }, n.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== H && I(e), t = t.replace(ue, "='$1']"), v.matchesSelector && D && !F[t + " "] && (!P || !P.test(t)) && (!j || !j.test(t))) try {
          var i = N.call(e, t);
          if (i || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {}
        return n(t, H, null, [e]).length > 0
      }, n.contains = function(e, n) {
        return (e.ownerDocument || e) !== H && I(e), U(e, n)
      }, n.attr = function(e, n) {
        (e.ownerDocument || e) !== H && I(e);
        var t = b.attrHandle[n.toLowerCase()],
          i = t && $.call(b.attrHandle, n.toLowerCase()) ? t(e, n, !D) : undefined;
        return i !== undefined ? i : v.attributes || !D ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
      }, n.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, n.uniqueSort = function(e) {
        var n, t = [],
          i = 0,
          r = 0;
        if (R = !v.detectDuplicates, x = !v.sortStable && e.slice(0), e.sort(X), R) {
          for (; n = e[r++];) n === e[r] && (i = t.push(r));
          for (; i--;) e.splice(t[i], 1)
        }
        return x = null, e
      }, S = n.getText = function(e) {
        var n, t = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) t += S(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else
          for (; n = e[i++];) t += S(n);
        return t
      }, b = n.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: _e,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ke, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
          },
          PSEUDO: function(e) {
            var n, t = !e[6] && e[2];
            return _e.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && de.test(t) && (n = w(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var n = e.replace(ke, ve).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === n
            }
          },
          CLASS: function(e) {
            var n = K[e + " "];
            return n || (n = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && K(e, function(e) {
              return n.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, i) {
            return function(r) {
              var a = n.attr(r, e);
              return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === i : "!=" === t ? a !== i : "^=" === t ? i && 0 === a.indexOf(i) : "*=" === t ? i && a.indexOf(i) > -1 : "$=" === t ? i && a.slice(-i.length) === i : "~=" === t ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === t && (a === i || a.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, n, t, i, r) {
            var a = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              s = "of-type" === n;
            return 1 === i && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(n, t, c) {
              var l, u, d, p, _, h, f = a !== o ? "nextSibling" : "previousSibling",
                m = n.parentNode,
                g = s && n.nodeName.toLowerCase(),
                y = !c && !s,
                T = !1;
              if (m) {
                if (a) {
                  for (; f;) {
                    for (p = n; p = p[f];)
                      if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                    h = f = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [o ? m.firstChild : m.lastChild], o && y) {
                  for (p = m, d = p[G] || (p[G] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), l = u[e] || [], _ = l[0] === Z && l[1], T = _ && l[2], p = _ && m.childNodes[_]; p = ++_ && p && p[f] || (T = _ = 0) || h.pop();)
                    if (1 === p.nodeType && ++T && p === n) {
                      u[e] = [Z, _, T];
                      break
                    }
                } else if (y && (p = n, d = p[G] || (p[G] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), l = u[e] || [], _ = l[0] === Z && l[1], T = _), !1 === T)
                  for (;
                    (p = ++_ && p && p[f] || (T = _ = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++T || (y && (d = p[G] || (p[G] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [Z, T]), p !== n)););
                return (T -= r) === i || T % i == 0 && T / i >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var r, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
            return a[G] ? a(t) : a.length > 1 ? (r = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
              for (var i, r = a(e, t), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(n[i] = r[o])
            }) : function(e) {
              return a(e, 0, r)
            }) : a
          }
        },
        pseudos: {
          not: i(function(e) {
            var n = [],
              t = [],
              r = C(e.replace(se, "$1"));
            return r[G] ? i(function(e, n, t, i) {
              for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(n[s] = a))
            }) : function(e, i, a) {
              return n[0] = e, r(n, null, a, t), n[0] = null, !t.pop()
            }
          }),
          has: i(function(e) {
            return function(t) {
              return n(e, t).length > 0
            }
          }),
          contains: i(function(e) {
            return e = e.replace(ke, ve),
              function(n) {
                return (n.textContent || n.innerText || S(n)).indexOf(e) > -1
              }
          }),
          lang: i(function(e) {
            return pe.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(ke, ve).toLowerCase(),
              function(n) {
                var t;
                do {
                  if (t = D ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")) return (t = t.toLowerCase()) === e || 0 === t.indexOf(e + "-")
                } while ((n = n.parentNode) && 1 === n.nodeType);
                return !1
              }
          }),
          target: function(n) {
            var t = e.location && e.location.hash;
            return t && t.slice(1) === n.id
          },
          root: function(e) {
            return e === q
          },
          focus: function(e) {
            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var n = e.nodeName.toLowerCase();
            return "input" === n && !!e.checked || "option" === n && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !b.pseudos.empty(e)
          },
          header: function(e) {
            return fe.test(e.nodeName)
          },
          input: function(e) {
            return he.test(e.nodeName)
          },
          button: function(e) {
            var n = e.nodeName.toLowerCase();
            return "input" === n && "button" === e.type || "button" === n
          },
          text: function(e) {
            var n;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (n = e.getAttribute("type")) || "text" === n.toLowerCase())
          },
          first: l(function() {
            return [0]
          }),
          last: l(function(e, n) {
            return [n - 1]
          }),
          eq: l(function(e, n, t) {
            return [t < 0 ? t + n : t]
          }),
          even: l(function(e, n) {
            for (var t = 0; t < n; t += 2) e.push(t);
            return e
          }),
          odd: l(function(e, n) {
            for (var t = 1; t < n; t += 2) e.push(t);
            return e
          }),
          lt: l(function(e, n, t) {
            for (var i = t < 0 ? t + n : t; --i >= 0;) e.push(i);
            return e
          }),
          gt: l(function(e, n, t) {
            for (var i = t < 0 ? t + n : t; ++i < n;) e.push(i);
            return e
          })
        }
      }, b.pseudos.nth = b.pseudos.eq;
      for (k in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) b.pseudos[k] = s(k);
      for (k in {
          submit: !0,
          reset: !0
        }) b.pseudos[k] = c(k);
      return d.prototype = b.filters = b.pseudos, b.setFilters = new d, w = n.tokenize = function(e, t) {
        var i, r, a, o, s, c, l, u = z[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (s = e, c = [], l = b.preFilter; s;) {
          i && !(r = ce.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(a = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), a.push({
            value: i,
            type: r[0].replace(se, " ")
          }), s = s.slice(i.length));
          for (o in b.filter) !(r = _e[o].exec(s)) || l[o] && !(r = l[o](r)) || (i = r.shift(), a.push({
            value: i,
            type: o,
            matches: r
          }), s = s.slice(i.length));
          if (!i) break
        }
        return t ? s.length : s ? n.error(e) : z(e, c).slice(0)
      }, C = n.compile = function(e, n) {
        var t, i = [],
          r = [],
          a = F[e + " "];
        if (!a) {
          for (n || (n = w(e)), t = n.length; t--;) a = y(n[t]), a[G] ? i.push(a) : r.push(a);
          a = F(e, T(r, i)), a.selector = e
        }
        return a
      }, A = n.select = function(e, n, t, i) {
        var r, a, o, s, c, l = "function" == typeof e && e,
          d = !i && w(e = l.selector || e);
        if (t = t || [], 1 === d.length) {
          if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && v.getById && 9 === n.nodeType && D && b.relative[a[1].type]) {
            if (!(n = (b.find.ID(o.matches[0].replace(ke, ve), n) || [])[0])) return t;
            l && (n = n.parentNode), e = e.slice(a.shift().value.length)
          }
          for (r = _e.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !b.relative[s = o.type]);)
            if ((c = b.find[s]) && (i = c(o.matches[0].replace(ke, ve), ye.test(a[0].type) && u(n.parentNode) || n))) {
              if (a.splice(r, 1), !(e = i.length && p(a))) return Q.apply(t, i), t;
              break
            }
        }
        return (l || C(e, d))(i, n, !D, t, !n || ye.test(e) && u(n.parentNode) || n), t
      }, v.sortStable = G.split("").sort(X).join("") === G, v.detectDuplicates = !!R, I(), v.sortDetached = r(function(e) {
        return 1 & e.compareDocumentPosition(H.createElement("div"))
      }), r(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || a("type|href|height|width", function(e, n, t) {
        if (!t) return e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
      }), v.attributes && r(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || a("value", function(e, n, t) {
        if (!t && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), r(function(e) {
        return null == e.getAttribute("disabled")
      }) || a(ne, function(e, n, t) {
        var i;
        if (!t) return !0 === e[n] ? n.toLowerCase() : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
      }), n
    }(e);
  ae.find = ue, ae.expr = ue.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = ue.uniqueSort, ae.text = ue.getText, ae.isXMLDoc = ue.isXML, ae.contains = ue.contains;
  var de = function(e, n, t) {
      for (var i = [], r = t !== undefined;
        (e = e[n]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && ae(e).is(t)) break;
          i.push(e)
        } return i
    },
    pe = function(e, n) {
      for (var t = []; e; e = e.nextSibling) 1 === e.nodeType && e !== n && t.push(e);
      return t
    },
    _e = ae.expr.match.needsContext,
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    fe = /^.[^:#\[\.,]*$/;
  ae.filter = function(e, n, t) {
    var i = n[0];
    return t && (e = ":not(" + e + ")"), 1 === n.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(n, function(e) {
      return 1 === e.nodeType
    }))
  }, ae.fn.extend({
    find: function(e) {
      var n, t = this.length,
        i = [],
        r = this;
      if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
        for (n = 0; n < t; n++)
          if (ae.contains(r[n], this)) return !0
      }));
      for (n = 0; n < t; n++) ae.find(e, r[n], i);
      return i = this.pushStack(t > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && _e.test(e) ? ae(e) : e || [], !1).length
    }
  });
  var me, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (ae.fn.init = function(e, n, t) {
    var i, r;
    if (!e) return this;
    if (t = t || me, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || t).find(e) : this.constructor(n).find(e);
      if (i[1]) {
        if (n = n instanceof ae ? n[0] : n, ae.merge(this, ae.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : W, !0)), he.test(i[1]) && ae.isPlainObject(n))
          for (i in n) ae.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
        return this
      }
      return r = W.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = W, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? t.ready !== undefined ? t.ready(e) : e(ae) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
  }).prototype = ae.fn, me = ae(W);
  var ye = /^(?:parents|prev(?:Until|All))/,
    Te = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ae.fn.extend({
    has: function(e) {
      var n = ae(e, this),
        t = n.length;
      return this.filter(function() {
        for (var e = 0; e < t; e++)
          if (ae.contains(this, n[e])) return !0
      })
    },
    closest: function(e, n) {
      for (var t, i = 0, r = this.length, a = [], o = _e.test(e) || "string" != typeof e ? ae(e, n || this.context) : 0; i < r; i++)
        for (t = this[i]; t && t !== n; t = t.parentNode)
          if (t.nodeType < 11 && (o ? o.index(t) > -1 : 1 === t.nodeType && ae.find.matchesSelector(t, e))) {
            a.push(t);
            break
          } return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
    },
    index: function(e) {
      return e ? "string" == typeof e ? J.call(ae(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, n) {
      return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, n))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), ae.each({
    parent: function(e) {
      var n = e.parentNode;
      return n && 11 !== n.nodeType ? n : null
    },
    parents: function(e) {
      return de(e, "parentNode")
    },
    parentsUntil: function(e, n, t) {
      return de(e, "parentNode", t)
    },
    next: function(e) {
      return r(e, "nextSibling")
    },
    prev: function(e) {
      return r(e, "previousSibling")
    },
    nextAll: function(e) {
      return de(e, "nextSibling")
    },
    prevAll: function(e) {
      return de(e, "previousSibling")
    },
    nextUntil: function(e, n, t) {
      return de(e, "nextSibling", t)
    },
    prevUntil: function(e, n, t) {
      return de(e, "previousSibling", t)
    },
    siblings: function(e) {
      return pe((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return pe(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || ae.merge([], e.childNodes)
    }
  }, function(e, n) {
    ae.fn[e] = function(t, i) {
      var r = ae.map(this, n, t);
      return "Until" !== e.slice(-5) && (i = t), i && "string" == typeof i && (r = ae.filter(i, r)), this.length > 1 && (Te[e] || ae.uniqueSort(r), ye.test(e) && r.reverse()), this.pushStack(r)
    }
  });
  var ke = /\S+/g;
  ae.Callbacks = function(e) {
    e = "string" == typeof e ? a(e) : ae.extend({}, e);
    var n, t, i, r, o = [],
      s = [],
      c = -1,
      l = function() {
        for (r = e.once, i = n = !0; s.length; c = -1)
          for (t = s.shift(); ++c < o.length;) !1 === o[c].apply(t[0], t[1]) && e.stopOnFalse && (c = o.length, t = !1);
        e.memory || (t = !1), n = !1, r && (o = t ? [] : "")
      },
      u = {
        add: function() {
          return o && (t && !n && (c = o.length - 1, s.push(t)), function n(t) {
            ae.each(t, function(t, i) {
              ae.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== ae.type(i) && n(i)
            })
          }(arguments), t && !n && l()), this
        },
        remove: function() {
          return ae.each(arguments, function(e, n) {
            for (var t;
              (t = ae.inArray(n, o, t)) > -1;) o.splice(t, 1), t <= c && c--
          }), this
        },
        has: function(e) {
          return e ? ae.inArray(e, o) > -1 : o.length > 0
        },
        empty: function() {
          return o && (o = []), this
        },
        disable: function() {
          return r = s = [], o = t = "", this
        },
        disabled: function() {
          return !o
        },
        lock: function() {
          return r = s = [], t || (o = t = ""), this
        },
        locked: function() {
          return !!r
        },
        fireWith: function(e, t) {
          return r || (t = t || [], t = [e, t.slice ? t.slice() : t], s.push(t), n || l()), this
        },
        fire: function() {
          return u.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return u
  }, ae.extend({
    Deferred: function(e) {
      var n = [
          ["resolve", "done", ae.Callbacks("once memory"), "resolved"],
          ["reject", "fail", ae.Callbacks("once memory"), "rejected"],
          ["notify", "progress", ae.Callbacks("memory")]
        ],
        t = "pending",
        i = {
          state: function() {
            return t
          },
          always: function() {
            return r.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return ae.Deferred(function(t) {
              ae.each(n, function(n, a) {
                var o = ae.isFunction(e[n]) && e[n];
                r[a[1]](function() {
                  var e = o && o.apply(this, arguments);
                  e && ae.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this === i ? t.promise() : this, o ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? ae.extend(e, i) : i
          }
        },
        r = {};
      return i.pipe = i.then, ae.each(n, function(e, a) {
        var o = a[2],
          s = a[3];
        i[a[1]] = o.add, s && o.add(function() {
          t = s
        }, n[1 ^ e][2].disable, n[2][2].lock), r[a[0]] = function() {
          return r[a[0] + "With"](this === r ? i : this, arguments), this
        }, r[a[0] + "With"] = o.fireWith
      }), i.promise(r), e && e.call(r, r), r
    },
    when: function(e) {
      var n, t, i, r = 0,
        a = V.call(arguments),
        o = a.length,
        s = 1 !== o || e && ae.isFunction(e.promise) ? o : 0,
        c = 1 === s ? e : ae.Deferred(),
        l = function(e, t, i) {
          return function(r) {
            t[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : r, i === n ? c.notifyWith(t, i) : --s || c.resolveWith(t, i)
          }
        };
      if (o > 1)
        for (n = new Array(o), t = new Array(o), i = new Array(o); r < o; r++) a[r] && ae.isFunction(a[r].promise) ? a[r].promise().progress(l(r, t, n)).done(l(r, i, a)).fail(c.reject) : --s;
      return s || c.resolveWith(i, a), c.promise()
    }
  });
  var ve;
  ae.fn.ready = function(e) {
    return ae.ready.promise().done(e), this
  }, ae.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? ae.readyWait++ : ae.ready(!0)
    },
    ready: function(e) {
      (!0 === e ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, !0 !== e && --ae.readyWait > 0 || (ve.resolveWith(W, [ae]), ae.fn.triggerHandler && (ae(W).triggerHandler("ready"), ae(W).off("ready"))))
    }
  }), ae.ready.promise = function(n) {
    return ve || (ve = ae.Deferred(), "complete" === W.readyState || "loading" !== W.readyState && !W.documentElement.doScroll ? e.setTimeout(ae.ready) : (W.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o))), ve.promise(n)
  }, ae.ready.promise();
  var be = function(e, n, t, i, r, a, o) {
      var s = 0,
        c = e.length,
        l = null == t;
      if ("object" === ae.type(t)) {
        r = !0;
        for (s in t) be(e, n, s, t[s], !0, a, o)
      } else if (i !== undefined && (r = !0, ae.isFunction(i) || (o = !0), l && (o ? (n.call(e, i), n = null) : (l = n, n = function(e, n, t) {
          return l.call(ae(e), t)
        })), n))
        for (; s < c; s++) n(e[s], t, o ? i : i.call(e[s], s, n(e[s], t)));
      return r ? e : l ? n.call(e) : c ? n(e[0], t) : a
    },
    Se = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  s.uid = 1, s.prototype = {
    register: function(e, n) {
      var t = n || {};
      return e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        writable: !0,
        configurable: !0
      }), e[this.expando]
    },
    cache: function(e) {
      if (!Se(e)) return {};
      var n = e[this.expando];
      return n || (n = {}, Se(e) && (e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        configurable: !0
      }))), n
    },
    set: function(e, n, t) {
      var i, r = this.cache(e);
      if ("string" == typeof n) r[n] = t;
      else
        for (i in n) r[i] = n[i];
      return r
    },
    get: function(e, n) {
      return n === undefined ? this.cache(e) : e[this.expando] && e[this.expando][n]
    },
    access: function(e, n, t) {
      var i;
      return n === undefined || n && "string" == typeof n && t === undefined ? (i = this.get(e, n), i !== undefined ? i : this.get(e, ae.camelCase(n))) : (this.set(e, n, t), t !== undefined ? t : n)
    },
    remove: function(e, n) {
      var t, i, r, a = e[this.expando];
      if (a !== undefined) {
        if (n === undefined) this.register(e);
        else {
          ae.isArray(n) ? i = n.concat(n.map(ae.camelCase)) : (r = ae.camelCase(n), n in a ? i = [n, r] : (i = r, i = i in a ? [i] : i.match(ke) || [])), t = i.length;
          for (; t--;) delete a[i[t]]
        }(n === undefined || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var n = e[this.expando];
      return n !== undefined && !ae.isEmptyObject(n)
    }
  };
  var Ee = new s,
    we = new s,
    Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ae = /[A-Z]/g;
  ae.extend({
    hasData: function(e) {
      return we.hasData(e) || Ee.hasData(e)
    },
    data: function(e, n, t) {
      return we.access(e, n, t)
    },
    removeData: function(e, n) {
      we.remove(e, n)
    },
    _data: function(e, n, t) {
      return Ee.access(e, n, t)
    },
    _removeData: function(e, n) {
      Ee.remove(e, n)
    }
  }), ae.fn.extend({
    data: function(e, n) {
      var t, i, r, a = this[0],
        o = a && a.attributes;
      if (e === undefined) {
        if (this.length && (r = we.get(a), 1 === a.nodeType && !Ee.get(a, "hasDataAttrs"))) {
          for (t = o.length; t--;) o[t] && (i = o[t].name, 0 === i.indexOf("data-") && (i = ae.camelCase(i.slice(5)), c(a, i, r[i])));
          Ee.set(a, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        we.set(this, e)
      }) : be(this, function(n) {
        var t, i;
        if (a && n === undefined) {
          if ((t = we.get(a, e) || we.get(a, e.replace(Ae, "-$&").toLowerCase())) !== undefined) return t;
          if (i = ae.camelCase(e), (t = we.get(a, i)) !== undefined) return t;
          if ((t = c(a, i, undefined)) !== undefined) return t
        } else i = ae.camelCase(e), this.each(function() {
          var t = we.get(this, i);
          we.set(this, i, n), e.indexOf("-") > -1 && t !== undefined && we.set(this, e, n)
        })
      }, null, n, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        we.remove(this, e)
      })
    }
  }), ae.extend({
    queue: function(e, n, t) {
      var i;
      if (e) return n = (n || "fx") + "queue", i = Ee.get(e, n), t && (!i || ae.isArray(t) ? i = Ee.access(e, n, ae.makeArray(t)) : i.push(t)), i || []
    },
    dequeue: function(e, n) {
      n = n || "fx";
      var t = ae.queue(e, n),
        i = t.length,
        r = t.shift(),
        a = ae._queueHooks(e, n),
        o = function() {
          ae.dequeue(e, n)
        };
      "inprogress" === r && (r = t.shift(), i--), r && ("fx" === n && t.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
    },
    _queueHooks: function(e, n) {
      var t = n + "queueHooks";
      return Ee.get(e, t) || Ee.access(e, t, {
        empty: ae.Callbacks("once memory").add(function() {
          Ee.remove(e, [n + "queue", t])
        })
      })
    }
  }), ae.fn.extend({
    queue: function(e, n) {
      var t = 2;
      return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ae.queue(this[0], e) : n === undefined ? this : this.each(function() {
        var t = ae.queue(this, e, n);
        ae._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ae.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        ae.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, n) {
      var t, i = 1,
        r = ae.Deferred(),
        a = this,
        o = this.length,
        s = function() {
          --i || r.resolveWith(a, [a])
        };
      for ("string" != typeof e && (n = e, e = undefined), e = e || "fx"; o--;)(t = Ee.get(a[o], e + "queueHooks")) && t.empty && (i++, t.empty.add(s));
      return s(), r.promise(n)
    }
  });
  var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    xe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
    Re = ["Top", "Right", "Bottom", "Left"],
    Ie = function(e, n) {
      return e = n || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
    },
    He = /^(?:checkbox|radio)$/i,
    qe = /<([\w:-]+)/,
    De = /^$|\/(?:java|ecma)script/i,
    je = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td;
  var Pe = /<|&#?\w+;/;
  ! function() {
    var e = W.createDocumentFragment(),
      n = e.appendChild(W.createElement("div")),
      t = W.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), n.appendChild(t), ie.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
  }();
  var Ne = /^key/,
    Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ge = /^([^.]*)(?:\.(.+)|)/;
  ae.event = {
    global: {},
    add: function(e, n, t, i, r) {
      var a, o, s, c, l, u, d, p, _, h, f, m = Ee.get(e);
      if (m)
        for (t.handler && (a = t, t = a.handler, r = a.selector), t.guid || (t.guid = ae.guid++), (c = m.events) || (c = m.events = {}), (o = m.handle) || (o = m.handle = function(n) {
            return void 0 !== ae && ae.event.triggered !== n.type ? ae.event.dispatch.apply(e, arguments) : undefined
          }), n = (n || "").match(ke) || [""], l = n.length; l--;) s = Ge.exec(n[l]) || [], _ = f = s[1], h = (s[2] || "").split(".").sort(), _ && (d = ae.event.special[_] || {}, _ = (r ? d.delegateType : d.bindType) || _, d = ae.event.special[_] || {}, u = ae.extend({
          type: _,
          origType: f,
          data: i,
          handler: t,
          guid: t.guid,
          selector: r,
          needsContext: r && ae.expr.match.needsContext.test(r),
          namespace: h.join(".")
        }, a), (p = c[_]) || (p = c[_] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, o) || e.addEventListener && e.addEventListener(_, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = t.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), ae.event.global[_] = !0)
    },
    remove: function(e, n, t, i, r) {
      var a, o, s, c, l, u, d, p, _, h, f, m = Ee.hasData(e) && Ee.get(e);
      if (m && (c = m.events)) {
        for (n = (n || "").match(ke) || [""], l = n.length; l--;)
          if (s = Ge.exec(n[l]) || [], _ = f = s[1], h = (s[2] || "").split(".").sort(), _) {
            for (d = ae.event.special[_] || {}, _ = (i ? d.delegateType : d.bindType) || _, p = c[_] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--;) u = p[a], !r && f !== u.origType || t && t.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
            o && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || ae.removeEvent(e, _, m.handle), delete c[_])
          } else
            for (_ in c) ae.event.remove(e, _ + n[l], t, i, !0);
        ae.isEmptyObject(c) && Ee.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      e = ae.event.fix(e);
      var n, t, i, r, a, o = [],
        s = V.call(arguments),
        c = (Ee.get(this, "events") || {})[e.type] || [],
        l = ae.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (o = ae.event.handlers.call(this, e, c), n = 0;
          (r = o[n++]) && !e.isPropagationStopped();)
          for (e.currentTarget = r.elem,
            t = 0;
            (a = r.handlers[t++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, (i = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, n) {
      var t, i, r, a, o = [],
        s = n.delegateCount,
        c = e.target;
      if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
            for (i = [], t = 0; t < s; t++) a = n[t], r = a.selector + " ", i[r] === undefined && (i[r] = a.needsContext ? ae(r, this).index(c) > -1 : ae.find(r, this, null, [c]).length), i[r] && i.push(a);
            i.length && o.push({
              elem: c,
              handlers: i
            })
          } return s < n.length && o.push({
        elem: this,
        handlers: n.slice(s)
      }), o
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, n) {
        return null == e.which && (e.which = null != n.charCode ? n.charCode : n.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, n) {
        var t, i, r, a = n.button;
        return null == e.pageX && null != n.clientX && (t = e.target.ownerDocument || W, i = t.documentElement, r = t.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[ae.expando]) return e;
      var n, t, i, r = e.type,
        a = e,
        o = this.fixHooks[r];
      for (o || (this.fixHooks[r] = o = Ue.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(a), n = i.length; n--;) t = i[n], e[t] = a[t];
      return e.target || (e.target = W), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== f() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === f() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && ae.nodeName(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return ae.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, ae.removeEvent = function(e, n, t) {
    e.removeEventListener && e.removeEventListener(n, t)
  }, ae.Event = function(e, n) {
    if (!(this instanceof ae.Event)) return new ae.Event(e, n);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? _ : h) : this.type = e, n && ae.extend(this, n), this.timeStamp = e && e.timeStamp || ae.now(), this[ae.expando] = !0
  }, ae.Event.prototype = {
    constructor: ae.Event,
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = _, e && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = _, e && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = _, e && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, ae.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, n) {
    ae.event.special[e] = {
      delegateType: n,
      bindType: n,
      handle: function(e) {
        var t, i = this,
          r = e.relatedTarget,
          a = e.handleObj;
        return r && (r === i || ae.contains(i, r)) || (e.type = a.origType, t = a.handler.apply(this, arguments), e.type = n), t
      }
    }
  }), ae.fn.extend({
    on: function(e, n, t, i) {
      return m(this, e, n, t, i)
    },
    one: function(e, n, t, i) {
      return m(this, e, n, t, i, 1)
    },
    off: function(e, n, t) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, n, e[r]);
        return this
      }
      return !1 !== n && "function" != typeof n || (t = n, n = undefined), !1 === t && (t = h), this.each(function() {
        ae.event.remove(this, e, t, n)
      })
    }
  });
  var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ze = /<script|<style|<link/i,
    Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ke = /^true\/(.*)/,
    ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ae.extend({
    htmlPrefilter: function(e) {
      return e.replace(Le, "<$1></$2>")
    },
    clone: function(e, n, t) {
      var i, r, a, o, s = e.cloneNode(!0),
        c = ae.contains(e.ownerDocument, e);
      if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
        for (o = u(s), a = u(e), i = 0, r = a.length; i < r; i++) v(a[i], o[i]);
      if (n)
        if (t)
          for (a = a || u(e), o = o || u(s), i = 0, r = a.length; i < r; i++) k(a[i], o[i]);
        else k(e, s);
      return o = u(s, "script"), o.length > 0 && d(o, !c && u(e, "script")), s
    },
    cleanData: function(e) {
      for (var n, t, i, r = ae.event.special, a = 0;
        (t = e[a]) !== undefined; a++)
        if (Se(t)) {
          if (n = t[Ee.expando]) {
            if (n.events)
              for (i in n.events) r[i] ? ae.event.remove(t, i) : ae.removeEvent(t, i, n.handle);
            t[Ee.expando] = undefined
          }
          t[we.expando] && (t[we.expando] = undefined)
        }
    }
  }), ae.fn.extend({
    domManip: b,
    detach: function(e) {
      return S(this, e, !0)
    },
    remove: function(e) {
      return S(this, e)
    },
    text: function(e) {
      return be(this, function(e) {
        return e === undefined ? ae.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return b(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          g(this, e).appendChild(e)
        }
      })
    },
    prepend: function() {
      return b(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var n = g(this, e);
          n.insertBefore(e, n.firstChild)
        }
      })
    },
    before: function() {
      return b(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return b(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, n = 0; null != (e = this[n]); n++) 1 === e.nodeType && (ae.cleanData(u(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, n) {
      return e = null != e && e, n = null == n ? e : n, this.map(function() {
        return ae.clone(this, e, n)
      })
    },
    html: function(e) {
      return be(this, function(e) {
        var n = this[0] || {},
          t = 0,
          i = this.length;
        if (e === undefined && 1 === n.nodeType) return n.innerHTML;
        if ("string" == typeof e && !Ze.test(e) && !je[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ae.htmlPrefilter(e);
          try {
            for (; t < i; t++) n = this[t] || {}, 1 === n.nodeType && (ae.cleanData(u(n, !1)), n.innerHTML = e);
            n = 0
          } catch (e) {}
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return b(this, arguments, function(n) {
        var t = this.parentNode;
        ae.inArray(this, e) < 0 && (ae.cleanData(u(this)), t && t.replaceChild(n, this))
      }, e)
    }
  }), ae.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, n) {
    ae.fn[e] = function(e) {
      for (var t, i = [], r = ae(e), a = r.length - 1, o = 0; o <= a; o++) t = o === a ? this : this.clone(!0), ae(r[o])[n](t), Q.apply(i, t.get());
      return this.pushStack(i)
    }
  });
  var Fe, Xe = {
      HTML: "block",
      BODY: "block"
    },
    Me = /^margin/,
    $e = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
    We = function(n) {
      var t = n.ownerDocument.defaultView;
      return t.opener || (t = e), t.getComputedStyle(n)
    },
    Ve = function(e, n, t, i) {
      var r, a, o = {};
      for (a in n) o[a] = e.style[a], e.style[a] = n[a];
      r = t.apply(e, i || []);
      for (a in n) e.style[a] = o[a];
      return r
    },
    Ye = W.documentElement;
  ! function() {
    function n() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(o);
      var n = e.getComputedStyle(s);
      t = "1%" !== n.top, a = "2px" === n.marginLeft, i = "4px" === n.width, s.style.marginRight = "50%", r = "4px" === n.marginRight, Ye.removeChild(o)
    }
    var t, i, r, a, o = W.createElement("div"),
      s = W.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ae.extend(ie, {
      pixelPosition: function() {
        return n(), t
      },
      boxSizingReliable: function() {
        return null == i && n(), i
      },
      pixelMarginRight: function() {
        return null == i && n(), r
      },
      reliableMarginLeft: function() {
        return null == i && n(), a
      },
      reliableMarginRight: function() {
        var n, t = s.appendChild(W.createElement("div"));
        return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", Ye.appendChild(o), n = !parseFloat(e.getComputedStyle(t).marginRight), Ye.removeChild(o), s.removeChild(t), n
      }
    }))
  }();
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    en = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    nn = ["Webkit", "O", "Moz", "ms"],
    tn = W.createElement("div").style;
  ae.extend({
    cssHooks: {
      opacity: {
        get: function(e, n) {
          if (n) {
            var t = C(e, "opacity");
            return "" === t ? "1" : t
          }
        }
      }
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
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(e, n, t, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, a, o, s = ae.camelCase(n),
          c = e.style;
        if (n = ae.cssProps[s] || (ae.cssProps[s] = O(s) || s), o = ae.cssHooks[n] || ae.cssHooks[s], t === undefined) return o && "get" in o && (r = o.get(e, !1, i)) !== undefined ? r : c[n];
        a = typeof t, "string" === a && (r = xe.exec(t)) && r[1] && (t = l(e, n, r), a = "number"), null != t && t === t && ("number" === a && (t += r && r[3] || (ae.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== t || 0 !== n.indexOf("background") || (c[n] = "inherit"), o && "set" in o && (t = o.set(e, t, i)) === undefined || (c[n] = t))
      }
    },
    css: function(e, n, t, i) {
      var r, a, o, s = ae.camelCase(n);
      return n = ae.cssProps[s] || (ae.cssProps[s] = O(s) || s), o = ae.cssHooks[n] || ae.cssHooks[s], o && "get" in o && (r = o.get(e, !0, t)), r === undefined && (r = C(e, n, i)), "normal" === r && n in en && (r = en[n]), "" === t || t ? (a = parseFloat(r), !0 === t || isFinite(a) ? a || 0 : r) : r
    }
  }), ae.each(["height", "width"], function(e, n) {
    ae.cssHooks[n] = {
      get: function(e, t, i) {
        if (t) return Qe.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Ve(e, Je, function() {
          return I(e, n, i)
        }) : I(e, n, i)
      },
      set: function(e, t, i) {
        var r, a = i && We(e),
          o = i && R(e, n, i, "border-box" === ae.css(e, "boxSizing", !1, a), a);
        return o && (r = xe.exec(t)) && "px" !== (r[3] || "px") && (e.style[n] = t, t = ae.css(e, n)), x(e, t, o)
      }
    }
  }), ae.cssHooks.marginLeft = A(ie.reliableMarginLeft, function(e, n) {
    if (n) return (parseFloat(C(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), ae.cssHooks.marginRight = A(ie.reliableMarginRight, function(e, n) {
    if (n) return Ve(e, {
      display: "inline-block"
    }, C, [e, "marginRight"])
  }), ae.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, n) {
    ae.cssHooks[e + n] = {
      expand: function(t) {
        for (var i = 0, r = {}, a = "string" == typeof t ? t.split(" ") : [t]; i < 4; i++) r[e + Re[i] + n] = a[i] || a[i - 2] || a[0];
        return r
      }
    }, Me.test(e) || (ae.cssHooks[e + n].set = x)
  }), ae.fn.extend({
    css: function(e, n) {
      return be(this, function(e, n, t) {
        var i, r, a = {},
          o = 0;
        if (ae.isArray(n)) {
          for (i = We(e), r = n.length; o < r; o++) a[n[o]] = ae.css(e, n[o], !1, i);
          return a
        }
        return t !== undefined ? ae.style(e, n, t) : ae.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function() {
      return H(this, !0)
    },
    hide: function() {
      return H(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Ie(this) ? ae(this).show() : ae(this).hide()
      })
    }
  }), ae.Tween = q, q.prototype = {
    constructor: q,
    init: function(e, n, t, i, r, a) {
      this.elem = e, this.prop = t, this.easing = r || ae.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ae.cssNumber[t] ? "" : "px")
    },
    cur: function() {
      var e = q.propHooks[this.prop];
      return e && e.get ? e.get(this) : q.propHooks._default.get(this)
    },
    run: function(e) {
      var n, t = q.propHooks[this.prop];
      return this.options.duration ? this.pos = n = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : q.propHooks._default.set(this), this
    }
  }, q.prototype.init.prototype = q.prototype, q.propHooks = {
    _default: {
      get: function(e) {
        var n;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (n = ae.css(e.elem, e.prop, ""), n && "auto" !== n ? n : 0)
      },
      set: function(e) {
        ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, ae.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, ae.fx = q.prototype.init, ae.fx.step = {};
  var rn, an, on = /^(?:toggle|show|hide)$/,
    sn = /queueHooks$/;
  ae.Animation = ae.extend(G, {
      tweeners: {
        "*": [function(e, n) {
          var t = this.createTween(e, n);
          return l(t.elem, e, xe.exec(n), t), t
        }]
      },
      tweener: function(e, n) {
        ae.isFunction(e) ? (n = e, e = ["*"]) : e = e.match(ke);
        for (var t, i = 0, r = e.length; i < r; i++) t = e[i], G.tweeners[t] = G.tweeners[t] || [], G.tweeners[t].unshift(n)
      },
      prefilters: [N],
      prefilter: function(e, n) {
        n ? G.prefilters.unshift(e) : G.prefilters.push(e)
      }
    }), ae.speed = function(e, n, t) {
      var i = e && "object" == typeof e ? ae.extend({}, e) : {
        complete: t || !t && n || ae.isFunction(e) && e,
        duration: e,
        easing: t && n || n && !ae.isFunction(n) && n
      };
      return i.duration = ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ae.fx.speeds ? ae.fx.speeds[i.duration] : ae.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue)
      }, i
    }, ae.fn.extend({
      fadeTo: function(e, n, t, i) {
        return this.filter(Ie).css("opacity", 0).show().end().animate({
          opacity: n
        }, e, t, i)
      },
      animate: function(e, n, t, i) {
        var r = ae.isEmptyObject(e),
          a = ae.speed(n, t, i),
          o = function() {
            var n = G(this, ae.extend({}, e), a);
            (r || Ee.get(this, "finish")) && n.stop(!0)
          };
        return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
      },
      stop: function(e, n, t) {
        var i = function(e) {
          var n = e.stop;
          delete e.stop, n(t)
        };
        return "string" != typeof e && (t = n, n = e, e = undefined), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var n = !0,
            r = null != e && e + "queueHooks",
            a = ae.timers,
            o = Ee.get(this);
          if (r) o[r] && o[r].stop && i(o[r]);
          else
            for (r in o) o[r] && o[r].stop && sn.test(r) && i(o[r]);
          for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(t), n = !1, a.splice(r, 1));
          !n && t || ae.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var n, t = Ee.get(this),
            i = t[e + "queue"],
            r = t[e + "queueHooks"],
            a = ae.timers,
            o = i ? i.length : 0;
          for (t.finish = !0, ae.queue(this, e, []), r && r.stop && r.stop.call(this, !0), n = a.length; n--;) a[n].elem === this && a[n].queue === e && (a[n].anim.stop(!0), a.splice(n, 1));
          for (n = 0; n < o; n++) i[n] && i[n].finish && i[n].finish.call(this);
          delete t.finish
        })
      }
    }), ae.each(["toggle", "show", "hide"], function(e, n) {
      var t = ae.fn[n];
      ae.fn[n] = function(e, i, r) {
        return null == e || "boolean" == typeof e ? t.apply(this, arguments) : this.animate(j(n, !0), e, i, r)
      }
    }), ae.each({
      slideDown: j("show"),
      slideUp: j("hide"),
      slideToggle: j("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, n) {
      ae.fn[e] = function(e, t, i) {
        return this.animate(n, e, t, i)
      }
    }), ae.timers = [], ae.fx.tick = function() {
      var e, n = 0,
        t = ae.timers;
      for (rn = ae.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || ae.fx.stop(), rn = undefined
    }, ae.fx.timer = function(e) {
      ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
    }, ae.fx.interval = 13, ae.fx.start = function() {
      an || (an = e.setInterval(ae.fx.tick, ae.fx.interval))
    }, ae.fx.stop = function() {
      e.clearInterval(an), an = null
    }, ae.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ae.fn.delay = function(n, t) {
      return n = ae.fx ? ae.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
        var r = e.setTimeout(t, n);
        i.stop = function() {
          e.clearTimeout(r)
        }
      })
    },
    function() {
      var e = W.createElement("input"),
        n = W.createElement("select"),
        t = n.appendChild(W.createElement("option"));
      e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = t.selected, n.disabled = !0, ie.optDisabled = !t.disabled, e = W.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
    }();
  var cn, ln = ae.expr.attrHandle;
  ae.fn.extend({
    attr: function(e, n) {
      return be(this, ae.attr, e, n, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        ae.removeAttr(this, e)
      })
    }
  }), ae.extend({
    attr: function(e, n, t) {
      var i, r, a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ae.prop(e, n, t) : (1 === a && ae.isXMLDoc(e) || (n = n.toLowerCase(), r = ae.attrHooks[n] || (ae.expr.match.bool.test(n) ? cn : undefined)), t !== undefined ? null === t ? void ae.removeAttr(e, n) : r && "set" in r && (i = r.set(e, t, n)) !== undefined ? i : (e.setAttribute(n, t + ""), t) : r && "get" in r && null !== (i = r.get(e, n)) ? i : (i = ae.find.attr(e, n), null == i ? undefined : i))
    },
    attrHooks: {
      type: {
        set: function(e, n) {
          if (!ie.radioValue && "radio" === n && ae.nodeName(e, "input")) {
            var t = e.value;
            return e.setAttribute("type", n), t && (e.value = t), n
          }
        }
      }
    },
    removeAttr: function(e, n) {
      var t, i, r = 0,
        a = n && n.match(ke);
      if (a && 1 === e.nodeType)
        for (; t = a[r++];) i = ae.propFix[t] || t, ae.expr.match.bool.test(t) && (e[i] = !1), e.removeAttribute(t)
    }
  }), cn = {
    set: function(e, n, t) {
      return !1 === n ? ae.removeAttr(e, t) : e.setAttribute(t, t), t
    }
  }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, n) {
    var t = ln[n] || ae.find.attr;
    ln[n] = function(e, n, i) {
      var r, a;
      return i || (a = ln[n], ln[n] = r, r = null != t(e, n, i) ? n.toLowerCase() : null, ln[n] = a), r
    }
  });
  var un = /^(?:input|select|textarea|button)$/i,
    dn = /^(?:a|area)$/i;
  ae.fn.extend({
    prop: function(e, n) {
      return be(this, ae.prop, e, n, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[ae.propFix[e] || e]
      })
    }
  }), ae.extend({
    prop: function(e, n, t) {
      var i, r, a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ae.isXMLDoc(e) || (n = ae.propFix[n] || n, r = ae.propHooks[n]), t !== undefined ? r && "set" in r && (i = r.set(e, t, n)) !== undefined ? i : e[n] = t : r && "get" in r && null !== (i = r.get(e, n)) ? i : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var n = ae.find.attr(e, "tabindex");
          return n ? parseInt(n, 10) : un.test(e.nodeName) || dn.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), ie.optSelected || (ae.propHooks.selected = {
    get: function(e) {
      var n = e.parentNode;
      return n && n.parentNode && n.parentNode.selectedIndex, null
    }
  }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ae.propFix[this.toLowerCase()] = this
  });
  var pn = /[\t\r\n\f]/g;
  ae.fn.extend({
    addClass: function(e) {
      var n, t, i, r, a, o, s, c = 0;
      if (ae.isFunction(e)) return this.each(function(n) {
        ae(this).addClass(e.call(this, n, L(this)))
      });
      if ("string" == typeof e && e)
        for (n = e.match(ke) || []; t = this[c++];)
          if (r = L(t), i = 1 === t.nodeType && (" " + r + " ").replace(pn, " ")) {
            for (o = 0; a = n[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
            s = ae.trim(i), r !== s && t.setAttribute("class", s)
          } return this
    },
    removeClass: function(e) {
      var n, t, i, r, a, o, s, c = 0;
      if (ae.isFunction(e)) return this.each(function(n) {
        ae(this).removeClass(e.call(this, n, L(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (n = e.match(ke) || []; t = this[c++];)
          if (r = L(t), i = 1 === t.nodeType && (" " + r + " ").replace(pn, " ")) {
            for (o = 0; a = n[o++];)
              for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
            s = ae.trim(i), r !== s && t.setAttribute("class", s)
          } return this
    },
    toggleClass: function(e, n) {
      var t = typeof e;
      return "boolean" == typeof n && "string" === t ? n ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function(t) {
        ae(this).toggleClass(e.call(this, t, L(this), n), n)
      }) : this.each(function() {
        var n, i, r, a;
        if ("string" === t)
          for (i = 0, r = ae(this), a = e.match(ke) || []; n = a[i++];) r.hasClass(n) ? r.removeClass(n) : r.addClass(n);
        else e !== undefined && "boolean" !== t || (n = L(this), n && Ee.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === e ? "" : Ee.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var n, t, i = 0;
      for (n = " " + e + " "; t = this[i++];)
        if (1 === t.nodeType && (" " + L(t) + " ").replace(pn, " ").indexOf(n) > -1) return !0;
      return !1
    }
  });
  var _n = /\r/g;
  ae.fn.extend({
    val: function(e) {
      var n, t, i, r = this[0]; {
        if (arguments.length) return i = ae.isFunction(e), this.each(function(t) {
          var r;
          1 === this.nodeType && (r = i ? e.call(this, t, ae(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ae.isArray(r) && (r = ae.map(r, function(e) {
            return null == e ? "" : e + ""
          })), (n = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, r, "value") !== undefined || (this.value = r))
        });
        if (r) return (n = ae.valHooks[r.type] || ae.valHooks[r.nodeName.toLowerCase()]) && "get" in n && (t = n.get(r, "value")) !== undefined ? t : (t = r.value, "string" == typeof t ? t.replace(_n, "") : null == t ? "" : t)
      }
    }
  }), ae.extend({
    valHooks: {
      option: {
        get: function(e) {
          return ae.trim(e.value)
        }
      },
      select: {
        get: function(e) {
          for (var n, t, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, c = r < 0 ? s : a ? r : 0; c < s; c++)
            if (t = i[c], (t.selected || c === r) && (ie.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !ae.nodeName(t.parentNode, "optgroup"))) {
              if (n = ae(t).val(), a) return n;
              o.push(n)
            } return o
        },
        set: function(e, n) {
          for (var t, i, r = e.options, a = ae.makeArray(n), o = r.length; o--;) i = r[o], (i.selected = ae.inArray(ae.valHooks.option.get(i), a) > -1) && (t = !0);
          return t || (e.selectedIndex = -1), a
        }
      }
    }
  }), ae.each(["radio", "checkbox"], function() {
    ae.valHooks[this] = {
      set: function(e, n) {
        if (ae.isArray(n)) return e.checked = ae.inArray(ae(e).val(), n) > -1
      }
    }, ie.checkOn || (ae.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var hn = /^(?:focusinfocus|focusoutblur)$/;
  ae.extend(ae.event, {
    trigger: function(n, t, i, r) {
      var a, o, s, c, l, u, d, p = [i || W],
        _ = te.call(n, "type") ? n.type : n,
        h = te.call(n, "namespace") ? n.namespace.split(".") : [];
      if (o = s = i = i || W, 3 !== i.nodeType && 8 !== i.nodeType && !hn.test(_ + ae.event.triggered) && (_.indexOf(".") > -1 && (h = _.split("."), _ = h.shift(), h.sort()), l = _.indexOf(":") < 0 && "on" + _, n = n[ae.expando] ? n : new ae.Event(_, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = h.join("."), n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = undefined, n.target || (n.target = i), t = null == t ? [n] : ae.makeArray(t, [n]), d = ae.event.special[_] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
        if (!r && !d.noBubble && !ae.isWindow(i)) {
          for (c = d.delegateType || _, hn.test(c + _) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
          s === (i.ownerDocument || W) && p.push(s.defaultView || s.parentWindow || e)
        }
        for (a = 0;
          (o = p[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? c : d.bindType || _, u = (Ee.get(o, "events") || {})[n.type] && Ee.get(o, "handle"), u && u.apply(o, t), (u = l && o[l]) && u.apply && Se(o) && (n.result = u.apply(o, t), !1 === n.result && n.preventDefault());
        return n.type = _, r || n.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !Se(i) || l && ae.isFunction(i[_]) && !ae.isWindow(i) && (s = i[l], s && (i[l] = null), ae.event.triggered = _, i[_](), ae.event.triggered = undefined, s && (i[l] = s)), n.result
      }
    },
    simulate: function(e, n, t) {
      var i = ae.extend(new ae.Event, t, {
        type: e,
        isSimulated: !0
      });
      ae.event.trigger(i, null, n), i.isDefaultPrevented() && t.preventDefault()
    }
  }), ae.fn.extend({
    trigger: function(e, n) {
      return this.each(function() {
        ae.event.trigger(e, n, this)
      })
    },
    triggerHandler: function(e, n) {
      var t = this[0];
      if (t) return ae.event.trigger(e, n, t, !0)
    }
  }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
    ae.fn[n] = function(e, t) {
      return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), ae.fn.extend({
    hover: function(e, n) {
      return this.mouseenter(e).mouseleave(n || e)
    }
  }), ie.focusin = "onfocusin" in e, ie.focusin || ae.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, n) {
    var t = function(e) {
      ae.event.simulate(n, e.target, ae.event.fix(e))
    };
    ae.event.special[n] = {
      setup: function() {
        var i = this.ownerDocument || this,
          r = Ee.access(i, n);
        r || i.addEventListener(e, t, !0), Ee.access(i, n, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
          r = Ee.access(i, n) - 1;
        r ? Ee.access(i, n, r) : (i.removeEventListener(e, t, !0), Ee.remove(i, n))
      }
    }
  });
  var fn = e.location,
    mn = ae.now(),
    gn = /\?/;
  ae.parseJSON = function(e) {
    return JSON.parse(e + "")
  }, ae.parseXML = function(n) {
    var t;
    if (!n || "string" != typeof n) return null;
    try {
      t = (new e.DOMParser).parseFromString(n, "text/xml")
    } catch (e) {
      t = undefined
    }
    return t && !t.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + n), t
  };
  var yn = /#.*$/,
    Tn = /([?&])_=[^&]*/,
    kn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    bn = /^(?:GET|HEAD)$/,
    Sn = /^\/\//,
    En = {},
    wn = {},
    Cn = "*/".concat("*"),
    An = W.createElement("a");
  An.href = fn.href, ae.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fn.href,
      type: "GET",
      isLocal: vn.test(fn.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Cn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": ae.parseJSON,
        "text xml": ae.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, n) {
      return n ? K(K(e, ae.ajaxSettings), n) : K(ae.ajaxSettings, e)
    },
    ajaxPrefilter: Z(En),
    ajaxTransport: Z(wn),
    ajax: function(n, t) {
      function i(n, t, i, s) {
        var l, d, y, T, v, S = t;
        2 !== k && (k = 2, c && e.clearTimeout(c), r = undefined, o = s || "", b.readyState = n > 0 ? 4 : 0, l = n >= 200 && n < 300 || 304 === n, i && (T = z(p, b, i)), T = F(p, T, b, l), l ? (p.ifModified && (v = b.getResponseHeader("Last-Modified"), v && (ae.lastModified[a] = v), (v = b.getResponseHeader("etag")) && (ae.etag[a] = v)), 204 === n || "HEAD" === p.type ? S = "nocontent" : 304 === n ? S = "notmodified" : (S = T.state, d = T.data, y = T.error, l = !y)) : (y = S, !n && S || (S = "error", n < 0 && (n = 0))), b.status = n, b.statusText = (t || S) + "", l ? f.resolveWith(_, [d, S, b]) : f.rejectWith(_, [b, S, y]), b.statusCode(g), g = undefined, u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [b, p, l ? d : y]), m.fireWith(_, [b, S]), u && (h.trigger("ajaxComplete", [b, p]), --ae.active || ae.event.trigger("ajaxStop")))
      }
      "object" == typeof n && (t = n, n = undefined), t = t || {};
      var r, a, o, s, c, l, u, d, p = ae.ajaxSetup({}, t),
        _ = p.context || p,
        h = p.context && (_.nodeType || _.jquery) ? ae(_) : ae.event,
        f = ae.Deferred(),
        m = ae.Callbacks("once memory"),
        g = p.statusCode || {},
        y = {},
        T = {},
        k = 0,
        v = "canceled",
        b = {
          readyState: 0,
          getResponseHeader: function(e) {
            var n;
            if (2 === k) {
              if (!s)
                for (s = {}; n = kn.exec(o);) s[n[1].toLowerCase()] = n[2];
              n = s[e.toLowerCase()]
            }
            return null == n ? null : n
          },
          getAllResponseHeaders: function() {
            return 2 === k ? o : null
          },
          setRequestHeader: function(e, n) {
            var t = e.toLowerCase();
            return k || (e = T[t] = T[t] || e, y[e] = n), this
          },
          overrideMimeType: function(e) {
            return k || (p.mimeType = e), this
          },
          statusCode: function(e) {
            var n;
            if (e)
              if (k < 2)
                for (n in e) g[n] = [g[n], e[n]];
              else b.always(e[b.status]);
            return this
          },
          abort: function(e) {
            var n = e || v;
            return r && r.abort(n), i(0, n), this
          }
        };
      if (f.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, p.url = ((n || p.url || fn.href) + "").replace(yn, "").replace(Sn, fn.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ae.trim(p.dataType || "*").toLowerCase().match(ke) || [""], null == p.crossDomain) {
        l = W.createElement("a");
        try {
          l.href = p.url, l.href = l.href, p.crossDomain = An.protocol + "//" + An.host != l.protocol + "//" + l.host
        } catch (e) {
          p.crossDomain = !0
        }
      }
      if (p.data && p.processData && "string" != typeof p.data && (p.data = ae.param(p.data, p.traditional)), B(En, p, t, b), 2 === k) return b;
      u = ae.event && p.global, u && 0 == ae.active++ && ae.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !bn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (gn.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Tn.test(a) ? a.replace(Tn, "$1_=" + mn++) : a + (gn.test(a) ? "&" : "?") + "_=" + mn++)), p.ifModified && (ae.lastModified[a] && b.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && b.setRequestHeader("If-None-Match", ae.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType), b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : p.accepts["*"]);
      for (d in p.headers) b.setRequestHeader(d, p.headers[d]);
      if (p.beforeSend && (!1 === p.beforeSend.call(_, b, p) || 2 === k)) return b.abort();
      v = "abort";
      for (d in {
          success: 1,
          error: 1,
          complete: 1
        }) b[d](p[d]);
      if (r = B(wn, p, t, b)) {
        if (b.readyState = 1, u && h.trigger("ajaxSend", [b, p]), 2 === k) return b;
        p.async && p.timeout > 0 && (c = e.setTimeout(function() {
          b.abort("timeout")
        }, p.timeout));
        try {
          k = 1, r.send(y, i)
        } catch (e) {
          if (!(k < 2)) throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return b
    },
    getJSON: function(e, n, t) {
      return ae.get(e, n, t, "json")
    },
    getScript: function(e, n) {
      return ae.get(e, undefined, n, "script")
    }
  }), ae.each(["get", "post"], function(e, n) {
    ae[n] = function(e, t, i, r) {
      return ae.isFunction(t) && (r = r || i, i = t, t = undefined), ae.ajax(ae.extend({
        url: e,
        type: n,
        dataType: r,
        data: t,
        success: i
      }, ae.isPlainObject(e) && e))
    }
  }), ae._evalUrl = function(e) {
    return ae.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, ae.fn.extend({
    wrapAll: function(e) {
      var n;
      return ae.isFunction(e) ? this.each(function(n) {
        ae(this).wrapAll(e.call(this, n))
      }) : (this[0] && (n = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && n.insertBefore(this[0]), n.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(e) {
      return ae.isFunction(e) ? this.each(function(n) {
        ae(this).wrapInner(e.call(this, n))
      }) : this.each(function() {
        var n = ae(this),
          t = n.contents();
        t.length ? t.wrapAll(e) : n.append(e)
      })
    },
    wrap: function(e) {
      var n = ae.isFunction(e);
      return this.each(function(t) {
        ae(this).wrapAll(n ? e.call(this, t) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
      }).end()
    }
  }), ae.expr.filters.hidden = function(e) {
    return !ae.expr.filters.visible(e)
  }, ae.expr.filters.visible = function(e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
  };
  var On = /%20/g,
    xn = /\[\]$/,
    Rn = /\r?\n/g,
    In = /^(?:submit|button|image|reset|file)$/i,
    Hn = /^(?:input|select|textarea|keygen)/i;
  ae.param = function(e, n) {
    var t, i = [],
      r = function(e, n) {
        n = ae.isFunction(n) ? n() : null == n ? "" : n, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n)
      };
    if (n === undefined && (n = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
      r(this.name, this.value)
    });
    else
      for (t in e) X(t, e[t], n, r);
    return i.join("&").replace(On, "+")
  }, ae.fn.extend({
    serialize: function() {
      return ae.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = ae.prop(this, "elements");
        return e ? ae.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !ae(this).is(":disabled") && Hn.test(this.nodeName) && !In.test(e) && (this.checked || !He.test(e))
      }).map(function(e, n) {
        var t = ae(this).val();
        return null == t ? null : ae.isArray(t) ? ae.map(t, function(e) {
          return {
            name: n.name,
            value: e.replace(Rn, "\r\n")
          }
        }) : {
          name: n.name,
          value: t.replace(Rn, "\r\n")
        }
      }).get()
    }
  }), ae.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var qn = {
      0: 200,
      1223: 204
    },
    Dn = ae.ajaxSettings.xhr();
  ie.cors = !!Dn && "withCredentials" in Dn, ie.ajax = Dn = !!Dn, ae.ajaxTransport(function(n) {
    var t, i;
    if (ie.cors || Dn && !n.crossDomain) return {
      send: function(r, a) {
        var o, s = n.xhr();
        if (s.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
          for (o in n.xhrFields) s[o] = n.xhrFields[o];
        n.mimeType && s.overrideMimeType && s.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
        for (o in r) s.setRequestHeader(o, r[o]);
        t = function(e) {
          return function() {
            t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(qn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        }, s.onload = t(), i = s.onerror = t("error"), s.onabort !== undefined ? s.onabort = i : s.onreadystatechange = function() {
          4 === s.readyState && e.setTimeout(function() {
            t && i()
          })
        }, t = t("abort");
        try {
          s.send(n.hasContent && n.data || null)
        } catch (e) {
          if (t) throw e
        }
      },
      abort: function() {
        t && t()
      }
    }
  }), ae.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return ae.globalEval(e), e
      }
    }
  }), ae.ajaxPrefilter("script", function(e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), ae.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, t;
      return {
        send: function(i, r) {
          n = ae("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", t = function(e) {
            n.remove(), t = null, e && r("error" === e.type ? 404 : 200, e.type)
          }), W.head.appendChild(n[0])
        },
        abort: function() {
          t && t()
        }
      }
    }
  });
  var jn = [],
    Pn = /(=)\?(?=&|$)|\?\?/;
  ae.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = jn.pop() || ae.expando + "_" + mn++;
        return this[e] = !0, e
      }
    }),
    ae.ajaxPrefilter("json jsonp", function(n, t, i) {
      var r, a, o, s = !1 !== n.jsonp && (Pn.test(n.url) ? "url" : "string" == typeof n.data && 0 === (n.contentType || "").indexOf("application/x-www-form-urlencoded") && Pn.test(n.data) && "data");
      if (s || "jsonp" === n.dataTypes[0]) return r = n.jsonpCallback = ae.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s ? n[s] = n[s].replace(Pn, "$1" + r) : !1 !== n.jsonp && (n.url += (gn.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
        return o || ae.error(r + " was not called"), o[0]
      }, n.dataTypes[0] = "json", a = e[r], e[r] = function() {
        o = arguments
      }, i.always(function() {
        a === undefined ? ae(e).removeProp(r) : e[r] = a, n[r] && (n.jsonpCallback = t.jsonpCallback, jn.push(r)), o && ae.isFunction(a) && a(o[0]), o = a = undefined
      }), "script"
    }), ie.createHTMLDocument = function() {
      var e = W.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ae.parseHTML = function(e, n, t) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof n && (t = n, n = !1), n = n || (ie.createHTMLDocument ? W.implementation.createHTMLDocument("") : W);
      var i = he.exec(e),
        r = !t && [];
      return i ? [n.createElement(i[1])] : (i = p([e], n, r), r && r.length && ae(r).remove(), ae.merge([], i.childNodes))
    };
  var Nn = ae.fn.load;
  ae.fn.load = function(e, n, t) {
    if ("string" != typeof e && Nn) return Nn.apply(this, arguments);
    var i, r, a, o = this,
      s = e.indexOf(" ");
    return s > -1 && (i = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(n) ? (t = n, n = undefined) : n && "object" == typeof n && (r = "POST"), o.length > 0 && ae.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: n
    }).done(function(e) {
      a = arguments, o.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
    }).always(t && function(e, n) {
      o.each(function() {
        t.apply(o, a || [e.responseText, n, e])
      })
    }), this
  }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, n) {
    ae.fn[n] = function(e) {
      return this.on(n, e)
    }
  }), ae.expr.filters.animated = function(e) {
    return ae.grep(ae.timers, function(n) {
      return e === n.elem
    }).length
  }, ae.offset = {
    setOffset: function(e, n, t) {
      var i, r, a, o, s, c, l, u = ae.css(e, "position"),
        d = ae(e),
        p = {};
      "static" === u && (e.style.position = "relative"), s = d.offset(), a = ae.css(e, "top"), c = ae.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (a + c).indexOf("auto") > -1, l ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(c) || 0), ae.isFunction(n) && (n = n.call(e, t, ae.extend({}, s))), null != n.top && (p.top = n.top - s.top + o), null != n.left && (p.left = n.left - s.left + r), "using" in n ? n.using.call(e, p) : d.css(p)
    }
  }, ae.fn.extend({
    offset: function(e) {
      if (arguments.length) return e === undefined ? this : this.each(function(n) {
        ae.offset.setOffset(this, e, n)
      });
      var n, t, i = this[0],
        r = {
          top: 0,
          left: 0
        },
        a = i && i.ownerDocument;
      if (a) return n = a.documentElement, ae.contains(n, i) ? (r = i.getBoundingClientRect(), t = M(a), {
        top: r.top + t.pageYOffset - n.clientTop,
        left: r.left + t.pageXOffset - n.clientLeft
      }) : r
    },
    position: function() {
      if (this[0]) {
        var e, n, t = this[0],
          i = {
            top: 0,
            left: 0
          };
        return "fixed" === ae.css(t, "position") ? n = t.getBoundingClientRect() : (e = this.offsetParent(), n = this.offset(), ae.nodeName(e[0], "html") || (i = e.offset()), i.top += ae.css(e[0], "borderTopWidth", !0) - e.scrollTop(), i.left += ae.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
          top: n.top - i.top - ae.css(t, "marginTop", !0),
          left: n.left - i.left - ae.css(t, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) e = e.offsetParent;
        return e || Ye
      })
    }
  }), ae.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var t = "pageYOffset" === n;
    ae.fn[e] = function(i) {
      return be(this, function(e, i, r) {
        var a = M(e);
        if (r === undefined) return a ? a[n] : e[i];
        a ? a.scrollTo(t ? a.pageXOffset : r, t ? r : a.pageYOffset) : e[i] = r
      }, e, i, arguments.length)
    }
  }), ae.each(["top", "left"], function(e, n) {
    ae.cssHooks[n] = A(ie.pixelPosition, function(e, t) {
      if (t) return t = C(e, n), $e.test(t) ? ae(e).position()[n] + "px" : t
    })
  }), ae.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    ae.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(t, i) {
      ae.fn[i] = function(i, r) {
        var a = arguments.length && (t || "boolean" != typeof i),
          o = t || (!0 === i || !0 === r ? "margin" : "border");
        return be(this, function(n, t, i) {
          var r;
          return ae.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? ae.css(n, t, o) : ae.style(n, t, i, o)
        }, n, a ? i : undefined, a, null)
      }
    })
  }), ae.fn.extend({
    bind: function(e, n, t) {
      return this.on(e, null, n, t)
    },
    unbind: function(e, n) {
      return this.off(e, null, n)
    },
    delegate: function(e, n, t, i) {
      return this.on(n, e, t, i)
    },
    undelegate: function(e, n, t) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(n, e || "**", t)
    },
    size: function() {
      return this.length
    }
  }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ae
  });
  var Un = e.jQuery,
    Gn = e.$;
  return ae.noConflict = function(n) {
    return e.$ === ae && (e.$ = Gn), n && e.jQuery === ae && (e.jQuery = Un), ae
  }, n || (e.jQuery = e.$ = ae), ae
}),
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function() {
  function e() {}

  function n(e, n) {
    for (var t = e.length; t--;)
      if (e[t].listener === n) return t;
    return -1
  }

  function t(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    a = r.EventEmitter;
  i.getListeners = function(e) {
    var n, t, i = this._getEvents();
    if ("object" == typeof e) {
      n = {};
      for (t in i) i.hasOwnProperty(t) && e.test(t) && (n[t] = i[t])
    } else n = i[e] || (i[e] = []);
    return n
  }, i.flattenListeners = function(e) {
    var n, t = [];
    for (n = 0; e.length > n; n += 1) t.push(e[n].listener);
    return t
  }, i.getListenersAsObject = function(e) {
    var n, t = this.getListeners(e);
    return t instanceof Array && (n = {}, n[e] = t), n || t
  }, i.addListener = function(e, t) {
    var i, r = this.getListenersAsObject(e),
      a = "object" == typeof t;
    for (i in r) r.hasOwnProperty(i) && -1 === n(r[i], t) && r[i].push(a ? t : {
      listener: t,
      once: !1
    });
    return this
  }, i.on = t("addListener"), i.addOnceListener = function(e, n) {
    return this.addListener(e, {
      listener: n,
      once: !0
    })
  }, i.once = t("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var n = 0; e.length > n; n += 1) this.defineEvent(e[n]);
    return this
  }, i.removeListener = function(e, t) {
    var i, r, a = this.getListenersAsObject(e);
    for (r in a) a.hasOwnProperty(r) && -1 !== (i = n(a[r], t)) && a[r].splice(i, 1);
    return this
  }, i.off = t("removeListener"), i.addListeners = function(e, n) {
    return this.manipulateListeners(!1, e, n)
  }, i.removeListeners = function(e, n) {
    return this.manipulateListeners(!0, e, n)
  }, i.manipulateListeners = function(e, n, t) {
    var i, r, a = e ? this.removeListener : this.addListener,
      o = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof n || n instanceof RegExp)
      for (i = t.length; i--;) a.call(this, n, t[i]);
    else
      for (i in n) n.hasOwnProperty(i) && (r = n[i]) && ("function" == typeof r ? a.call(this, i, r) : o.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var n, t = typeof e,
      i = this._getEvents();
    if ("string" === t) delete i[e];
    else if ("object" === t)
      for (n in i) i.hasOwnProperty(n) && e.test(n) && delete i[n];
    else delete this._events;
    return this
  }, i.removeAllListeners = t("removeEvent"), i.emitEvent = function(e, n) {
    var t, i, r, a = this.getListenersAsObject(e);
    for (r in a)
      if (a.hasOwnProperty(r))
        for (i = a[r].length; i--;) t = a[r][i], !0 === t.once && this.removeListener(e, t.listener), t.listener.apply(this, n || []) === this._getOnceReturnValue() && this.removeListener(e, t.listener);
    return this
  }, i.trigger = t("emitEvent"), i.emit = function(e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, n)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = a, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
  function(e) {
    function n(n) {
      var t = e.event;
      return t.target = t.target || t.srcElement || n, t
    }
    var t = document.documentElement,
      i = function() {};
    t.addEventListener ? i = function(e, n, t) {
      e.addEventListener(n, t, !1)
    } : t.attachEvent && (i = function(e, t, i) {
      e[t + i] = i.handleEvent ? function() {
        var t = n(e);
        i.handleEvent.call(i, t)
      } : function() {
        var t = n(e);
        i.call(e, t)
      }, e.attachEvent("on" + t, e[t + i])
    });
    var r = function() {};
    t.removeEventListener ? r = function(e, n, t) {
      e.removeEventListener(n, t, !1)
    } : t.detachEvent && (r = function(e, n, t) {
      e.detachEvent("on" + n, e[n + t]);
      try {
        delete e[n + t]
      } catch (i) {
        e[n + t] = void 0
      }
    });
    var a = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", a) : e.eventie = a
  }(this),
  function(e, n) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(t, i) {
      return n(e, t, i)
    }) : "object" == typeof exports ? module.exports = n(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = n(e, e.EventEmitter, e.eventie)
  }(window, function(e, n, t) {
    function i(e, n) {
      for (var t in n) e[t] = n[t];
      return e
    }

    function r(e) {
      return "[object Array]" === p.call(e)
    }

    function a(e) {
      var n = [];
      if (r(e)) n = e;
      else if ("number" == typeof e.length)
        for (var t = 0, i = e.length; i > t; t++) n.push(e[t]);
      else n.push(e);
      return n
    }

    function o(e, n, t) {
      if (!(this instanceof o)) return new o(e, n);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = a(e), this.options = i({}, this.options), "function" == typeof n ? t = n : i(this.options, n), t && this.on("always", t), this.getImages(), l && (this.jqDeferred = new l.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function s(e) {
      this.img = e
    }

    function c(e) {
      this.src = e, _[e] = this
    }
    var l = e.jQuery,
      u = e.console,
      d = void 0 !== u,
      p = Object.prototype.toString;
    o.prototype = new n, o.prototype.options = {}, o.prototype.getImages = function() {
      this.images = [];
      for (var e = 0, n = this.elements.length; n > e; e++) {
        var t = this.elements[e];
        "IMG" === t.nodeName && this.addImage(t);
        var i = t.nodeType;
        if (i && (1 === i || 9 === i || 11 === i))
          for (var r = t.querySelectorAll("img"), a = 0, o = r.length; o > a; a++) {
            var s = r[a];
            this.addImage(s)
          }
      }
    }, o.prototype.addImage = function(e) {
      var n = new s(e);
      this.images.push(n)
    }, o.prototype.check = function() {
      function e(e, r) {
        return n.options.debug && d && u.log("confirm", e, r), n.progress(e), t++, t === i && n.complete(), !0
      }
      var n = this,
        t = 0,
        i = this.images.length;
      if (this.hasAnyBroken = !1, !i) return void this.complete();
      for (var r = 0; i > r; r++) {
        var a = this.images[r];
        a.on("confirm", e), a.check()
      }
    }, o.prototype.progress = function(e) {
      this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
      var n = this;
      setTimeout(function() {
        n.emit("progress", n, e), n.jqDeferred && n.jqDeferred.notify && n.jqDeferred.notify(n, e)
      })
    }, o.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var n = this;
      setTimeout(function() {
        if (n.emit(e, n), n.emit("always", n), n.jqDeferred) {
          var t = n.hasAnyBroken ? "reject" : "resolve";
          n.jqDeferred[t](n)
        }
      })
    }, l && (l.fn.imagesLoaded = function(e, n) {
      return new o(this, e, n).jqDeferred.promise(l(this))
    }), s.prototype = new n, s.prototype.check = function() {
      var e = _[this.img.src] || new c(this.img.src);
      if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
      if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
      var n = this;
      e.on("confirm", function(e, t) {
        return n.confirm(e.isLoaded, t), !0
      }), e.check()
    }, s.prototype.confirm = function(e, n) {
      this.isLoaded = e, this.emit("confirm", this, n)
    };
    var _ = {};
    return c.prototype = new n, c.prototype.check = function() {
      if (!this.isChecked) {
        var e = new Image;
        t.bind(e, "load", this), t.bind(e, "error", this), e.src = this.src, this.isChecked = !0
      }
    }, c.prototype.handleEvent = function(e) {
      var n = "on" + e.type;
      this[n] && this[n](e)
    }, c.prototype.onload = function(e) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function(e) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function(e, n) {
      this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, n)
    }, c.prototype.unbindProxyEvents = function(e) {
      t.unbind(e.target, "load", this), t.unbind(e.target, "error", this)
    }, o
  }),
  function() {
    "use strict";

    function e(e, r, a, o) {
      var s = {},
        c = 0,
        l = 0,
        u = document.title,
        d = function() {
          s = {}, c = $(document).height(), l = $(window).height(), e.find(r).each(function() {
            var e = $(this).attr("href");
            "#" === e[0] && (s[e] = $(e).offset().top)
          })
        },
        p = function() {
          $(".nav-link").each(function(e, n) {
            n.href == window.location.href && $(n).addClass("active")
          });
          var t = $(document).scrollTop() + o;
          t + l >= c && (t = c + 1e3);
          var i = null;
          for (var d in s)(s[d] < t && s[d] > s[i] || null === i) && (i = d);
          t != o || n || (i = window.location.hash, n = !0);
          var p = e.find("[href='" + i + "']").first();
          if (!p.hasClass("active")) {
            e.find(".active").removeClass("active"), e.find(".active-parent").removeClass("active-parent"), p.addClass("active"), p.parents(a).addClass("active").siblings(r).addClass("active-parent"), p.siblings(a).addClass("active"), e.find(a).filter(":not(.active)").slideUp(150), e.find(a).filter(".active").slideDown(150);
            var _ = p.data("title");
            _ && (document.title = _ + " \u2013 " + u)
          }
        };
      (function() {
        d(), p(), $("#nav-button").click(function() {
          return $(".toc-wrapper").toggleClass("open"), $("#nav-button").toggleClass("open"), !1
        }), $(".page-wrapper").click(i), $(".toc-link").click(i), e.find(r).click(function() {
          setTimeout(function() {
            p()
          }, 0)
        }), $(window).scroll(t(p, 200)), $(window).resize(t(d, 200))
      })(), window.recacheHeights = d, window.refreshToc = p
    }
    var n = !1,
      t = function(e, n) {
        var t = !1;
        return function() {
          !1 === t && (setTimeout(function() {
            e(), t = !1
          }, n), t = !0)
        }
      },
      i = function() {
        $(".toc-wrapper").removeClass("open"), $("#nav-button").removeClass("open")
      };
    window.loadToc = e
  }(),
  function() {
    "use strict";

    function e(e) {
      if (e && "" !== e) {
        $(".lang-selector a").removeClass("active"), $(".lang-selector a[data-language-name='" + e + "']").addClass("active");
        for (var n = 0; n < s.length; n++) $(".highlight.tab-" + s[n]).hide(), $(".lang-specific." + s[n]).hide();
        $(".highlight.tab-" + e).show(), $(".lang-specific." + e).show(), window.recacheHeights(), $(window.location.hash).get(0) && $(window.location.hash).get(0).scrollIntoView(!0)
      }
    }

    function n(e) {
      return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, n) {
        var t = n.replace(/\+/g, " ").split("="),
          i = t[0],
          r = t[1];
        return i = decodeURIComponent(i), r = r === undefined ? null : decodeURIComponent(r), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r, e
      }, {}) : {})
    }

    function t(e) {
      return e ? Object.keys(e).sort().map(function(n) {
        var t = e[n];
        return Array.isArray(t) ? t.sort().map(function(e) {
          return encodeURIComponent(n) + "=" + encodeURIComponent(e)
        }).join("&") : encodeURIComponent(n) + "=" + encodeURIComponent(t)
      }).join("&") : ""
    }

    function i() {
      if (location.search.length >= 1) {
        var e = n(location.search).language;
        if (e) return e;
        if (-1 != jQuery.inArray(location.search.substr(1), s)) return location.search.substr(1)
      }
      return !1
    }

    function r(e) {
      var i = n(location.search);
      return i.language ? (i.language = e, t(i)) : e
    }

    function a(e) {
      if (history) {
        var n = window.location.hash;
        n && (n = n.replace(/^#+/, "")), history.pushState({}, "", "?" + r(e) + "#" + n), localStorage.setItem("language", e)
      }
    }

    function o(n) {
      var t = localStorage.getItem("language");
      s = n;
      var r = i();
      r ? (e(r), localStorage.setItem("language", r)) : e(null !== t && -1 != jQuery.inArray(t, s) ? t : s[0])
    }
    var s = ["ruby", "shell"];
    window.setupLanguages = o, window.activateLanguage = e, window.getLanguageFromQueryString = i, $(function() {
      $(".lang-selector a").on("click", function() {
        var n = $(this).data("language-name");
        return a(n), e(n), !1
      })
    })
  }(), $(function() {
    loadToc($("#toc"), ".toc-link", ".toc-list-h2", 10), setupLanguages($("body").data("languages")), $(".content").imagesLoaded(function() {
      window.recacheHeights(), window.refreshToc()
    })
  }), window.onpopstate = function() {
    activateLanguage(getLanguageFromQueryString())
  };
var tokenString = '[{"id":"tradegecko - api - reference","title":"TradeGecko API Reference","body":"This website documents the public API for TradeGeckoYou can view code examples in the dark area to the right; switch the programming language of the examples with the tabs in the top right.If anything is missing or seems incorrect, please check the GitHub issues\\nfor existing known issues or create a new issue."},{"id":"authentication","title":"Authentication","body":"curl - X GET - H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products?sku=moko/\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(<CLIENT_ID>, <CLIENT_SECRET>)\\ngecko.authorize_from_existing(<ACCESS_TOKEN>, nil, nil)\\ngecko.Product.where(sku: \'moko\')\\nThe TradeGecko API is JSON based. In order to make an authenticated call to the API, you must include your access token with the call. OAuth2 uses a BEARER token that is passed along in an Authorization header."}, { "id": "registering-an-application", "title": "Registering an Application", "body": "In order to use the TradeGecko API, you must have an active TradeGecko account.\\nOnce you\'re logged in to your account you can register a new API application at \\nhttps://go.tradegecko.com/oauth/applications.After successfully registering a new application, you will be given a set of 2\\nunique keys: \\nAPPLICATION ID\\nAPPLICATION SECRET\\n\\n  Make sure to keep these keys secret.\\nThese two keys are subsequently used to obtain access tokens for making API calls." }, { "id": "oauth-authentication-flows", "title": "OAuth Authentication Flows", "body": "The TradeGecko API is based on version 22 of the OAuth 2.0 specification.If you are familiar with OAuth, then the authentication endpoints are as follows:\\nAuthorization: https://api.tradegecko.com/oauth/authorize \\nToken Request: https://api.tradegecko.com/oauth/token \\n\\n  We very highly recommend using a third-party library in your chosen language rather than trying to implement OAuth flows manually.\\n  \\n  You can find a list of recommended libraries here\\nAvailable Authentication FlowsThe TradeGecko API supports two common OAuth 2.0 flows:\\nAuthorization Code with Refresh Token flow\\nResource Owner Password Credentials flow\\nUnder the majority of circumstances we recommend the Authorization Code with Refresh Token flow as it provides the highest level of security.For prototyping, or one-off integrations you may use the Resource Owner Password Credentials flows.If you plan on building an application that will be used by multiple TradeGecko accounts, you MUST use the Authorization Code with Refresh token flow." }, { "id": "authorization-code-with-refresh-token", "title": "Authorization Code with Refresh Token", "body": "The Authorization Code flow is a redirection-based flow,\\nwhich means the application must be able to redirect the application user\\nand receive authorization codes via a web browser.Phase 1: Authorization Phase\\nTo authorize, use this code:\\nrequire \'gecko-ruby\'\\noauth_client = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>).oauth_client\\nauthorization_url = oauth_client.auth_code.authorize_url(redirect_uri: \'<REDIRECT_URI>\')\\n#=> \\"https://go.tradegecko.com/oauth/authorize?client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URI>&response_type=code\\"\\nredirect_to authorization_url\\nopen https://go.tradegecko.com/oauth/authorize?client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URI>&response_type=code\\n\\nMake sure to replace <OAUTH_ID>, <OAUTH_SECRET> <REDIRECT_URI> with your details.\\nAn authorization code is the key used to retrieve the access token.\\nIn order to acquire an authorization code, you need to redirect the user\'s\\nbrowser to the authorization endpoint.https://api.tradegecko.com/oauth/authorize?response_type=code&client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URI>\\nhttps://api.tradegecko.com/oauth/authorize: indicates the API authorization endpoint.\\nresponse_type=code: specifies that your application is requesting an authorization code grant.\\nclient_id=<CLIENT_ID>: the application\'s client ID provided when registering your application.\\nredirect_uri=<REDIRECT_URI>: should be set to a URL in your application where\\nthe user will be redirected back to after the request is authorized.\\nPhase 2: User AuthorizationOnce directed to the above link, the user will be asked to log in to their TradeGecko account (if they\'re not already logged in).\\nThey will then be asked to authorize or deny the authentication request.\\n  \\nPhase 3: Authorization Code responseAfter the user successfully authorizes the application, they will be redirected back to\\nthe provided redirect_uri with the authorization code as a query parameter named code.e.g. https://my.application.com/auth/app/callback?code=12bc6909c57aaa930Phase 4: Requesting an Access Tokencurl -H \\"Content-type: application/json\\" -X POST https://api.tradegecko.com/oauth/token -d \'{\\"client_id\\": \\"<CLIENT_ID>\\", \\"client_secret\\":\\"<CLIENT_SECRET>\\", \\"redirect_uri\\": \\"https://my.application.com/auth/app/callback\\", \\"code\\": \\"<CODE_FROM_PHASE_3>\\", \\"grant_type\\": \\"authorization_code\\"}\'\\n{\\n  \\"access_token\\": \\"57ed301af04bf35b40f255feb5ef469ab2f046aff14\\",\\n  \\"expires_in\\": 7200,\\n  \\"refresh_token\\": \\"026b343de07818b3ffebfb3001eff9a00aea43da0a\\",\\n  \\"scope\\": \\"public\\",\\n  \\"token_type\\": \\"bearer\\"\\n}\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\noauth_client = gecko.oauth_client\\naccess_token = oauth_client.auth_code.get_token(params[:code], redirect_uri: \'<REDIRECT_URI>\')\\ngecko.access_token = access_token\\ngecko.Account.current\\nThe access token is a unique key used to make requests to the API.In order to get an access token, the application must make a POST request to\\nhttps://api.tradegecko.com/oauth/token with the client_id,\\nclient_secret, redirect_uri, code and grant_type as parameters.\\nhttps://api.tradegecko.com/oauth/token: indicates the API token endpoint.\\ngrant_type=authorization_code: specifies that your application is requesting an authorization code.\\nclient_id=<CLIENT_ID>: the application\'s client ID provided when registering your application.\\nclient_secret=<CLIENT_SECRET>: the application\'s client secret provided when registering your application.\\nredirect_uri=<REDIRECT_URI>: should be set to a URL in your application where the code will be received.\\ncode=<CODE>  must match the authorization code returned by the authorization endpoint in Phase 3\\naccess_token.to_hash\\n#=> {\\"token_type\\"=>\\"bearer\\", \\"scope\\"=>\\"public\\", \\"created_at\\"=>1500000000, :access_token=>\\"<ACCESS_TOKEN>\\", :refresh_token=>\\"<REFRESH_TOKEN>\\", :expires_at=>1500007200}\\nOnce you have generated the access_token, this is the point where you will likely\\nwant to save off the details for future reuse without requiring user interaction.\\nTo reconstruct a refreshable access token you will need to store\\nthe access_token and refresh_token parameters returned.Phase 5: Refreshing an Access Tokencurl -H \\"Content-type: application/json\\" -X POST https://api.tradegecko.com/oauth/token -d \'{\\"client_id\\": \\"<CLIENT_ID>\\", \\"client_secret\\": \\"<CLIENT_SECRET>\\", \\"redirect_uri\\": \\"http://my.application.com/auth/callback\\", \\"refresh_token\\": \\"<REFRESH_TOKEN>\\", \\"grant_type\\": \\"refresh_token\\"}\'\\n{\\n  \\"access_token\\": \\"439fc57cf1525e51555\\",\\n  \\"expires_in\\": 7200,\\n  \\"refresh_token\\": \\"ecfa1a22bd612cc1d8\\",\\n  \\"scope\\": \\"public\\",\\n  \\"token_type\\": \\"bearer\\"\\n}\\n# From existing access_token object\\naccess_token.refresh!\\naccess_token.to_hash # For storage\\n\\n# From string\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(\\"<OAUTH_ID>\\", \\"<OAUTH_SECRET>\\")\\ngecko.authorize_from_refresh_token(\\"<REFRESH_TOKEN>\\")\\ngecko.access_token.to_hash # For storage\\nA refresh token is a unique token returned when creating an access token that can be\\nused to request a new access token when the existing current access token expires.To refresh an access token, the application must make a POST request to\\nhttps://api.tradegecko.com/oauth/token with the client_id,\\nclient_secret, redirect_uri, refresh_token and grant_type as parameters.\\nhttps://api.tradegecko.com/oauth/token: indicates the API token endpoint.\\ngrant_type=refresh_token: specifies that your application is requesting an refresh token.\\nclient_id=<CLIENT_ID>: the application\'s client ID provided when registering your application.\\nclient_secret=<CLIENT_SECRET>: the application\'s client secret provided when registering your application.\\nredirect_uri=<REDIRECT_URI>: should be set to a URL in your application where the code will be received.\\nrefresh_token: must match the refresh token returned by the authorization endpoint in Phase 4\\n\\n**Note:** When the access token is refreshed, a new refresh token is\\ngenerated and this should be stored and used the next time the token is refreshed is invoked.\\nUsing an expired refresh token will return an error.\\n" }, { "id": "resource-owner-password-credentials-flow", "title": "Resource Owner Password Credentials flow", "body": "The TradeGecko API also supports the Resource Owner Password Credentials flow\\nthrough the concept of Privileged Access Tokens.These tokens are generated through the TradeGecko UI and do not expire.\\nThis means that you can access the API using the privileged token without the need\\nto use browser redirects or manage refresh tokens.However you will need to manually manage key rotation yourselves if your privileged\\nkey gets compromised in any way.Because of the inherent higher safety risks involved in storing privileged access tokens,\\nthe Resource Owner Password Credentials flow is only available on single-account Applications.\\nOnce you have obtained your Privileged Access Token, you can use cURL or Ruby to check if it is working.\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <PRIVILEGED_ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/accounts/current\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\ngecko.authorize_from_existing(<PRIVILEGED_ACCESS_TOKEN>, nil, nil)\\ngecko.Account.current\\nPhase 1: Privileged Access Token GenerationAs the application developer, after registering your application,\\nyou will see a button to \\"Create a Privileged Token\\" for the application.\\n  \\nIf you have already registered your application, you can add a privileged token by\\nfinding your application in your TradeGecko App List.\\nImportant: The Privileged Access Tokens provide unfettered access to your TradeGecko\\naccount, be very careful to store them securely.\\n" }, { "id": "pagination", "title": "Pagination", "body": "\\nThe default limit is 100 items.\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users?limit=5&page=2\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.User.where(limit: 5, page: 2)\\nThe TradeGecko API enables pagination via limit\\nand page query parameters on GET requests to index pages. " }, { "id": "filtering-collections", "title": "Filtering Collections", "body": "The TradeGecko API allows filtering of records by passing along query parameters.\\nThese are some of the filters currently allowed by the API (where relevant).curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products?created_at_min=2015-11-04/\\nrequire \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Product.where(created_at_min: \\"2015-11-04\\")\\nIndex Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of object IDs, see Batching Requests\\n\\n\\ncreated_at_min\\nReturn objects only created since\\n\\n\\ncreated_at_max\\nReturn objects only created before\\n\\n\\nupdated_at_min\\nReturn objects only updated since\\n\\n\\nupdated_at_max\\nReturn objects only updated before\\n\\n\\norder\\nThe order to return the collection i.e \\"?order=created_at desc\\"\\n\\n\\nlimit\\nSee Pagination (default is 100)\\n\\n\\npage\\nSee Pagination\\n\\nIn addition, each record type has their own specific filters; \\nthese filters are covered in their respective sections.Batching RequestsRequests can be batched together to get records with different IDs in a single API call.\\nGET https://api.tradegecko.com/products?ids[]=1&ids[]=2Batching can also be done to return the results of multiple possible values.\\nFor example, a single API call can return products with multiple brands:\\nGET https://api.tradegecko.com/products?brand[]=ABC&brand[]=XYZOr statuses:\\nGET https://api.tradegecko.com/orders?status[]=draft&status[]=activeComma-separated support for Integer filtersFor ID based filters, optionally a comma-separated collection can be used instead for brevity.\\nGET https://api.tradegecko.com/products?ids=1,2, or\\nGET https://api.tradegecko.com/variants?product_id=1,2Combining Multiple Filters in a Single callYou can combine filters in a single API call to return tighter subsets of results.\\nGET https://api.tradegecko.com/companies?company_status=active&company_type=supplier&order=created_at+desc&page=2&limit=20" }, { "id": "response-metadata", "title": "Response Metadata", "body": "Every response returned from the TradeGecko API returns some useful pieces of information in the response headers." }, { "id": "request-ids", "title": "Request IDs", "body": "Every response will include an X-Request-ID parameter unique to that specific request.\\nIf you need to contact us about a specific request, please make sure to include the specific request ID in any communication with us to help speed up investigations." }, { "id": "pagination-links", "title": "Pagination Links", "body": "curl -IXGET https://api.tradegecko.com/products?page=1 -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <PRIVILEGED_ACCESS_TOKEN>\\" | grep X-Pagination\\nX-Pagination: {\\"total_records\\":3103,\\"total_pages\\":32,\\"first_page\\":true,\\"last_page\\":false,\\"out_of_bounds\\":false,\\"offset\\":0}\\nEvery response that returns a collection will include pagination data in the headers.\\nThis data can be found as JSON under the X-Pagination header.\\ntotal_records: The total number of records matching the filters (excludes page & limit params).\\ntotal_pages: The total number of pages of records matching the filters.\\nfirst_page: true/false based on whether this is the first page of results.\\nlast_page: true/false based on whether this is the last page of results.\\nout_of_bounds: true/false based on whether the pagination request is out of bounds.\\noffset: The offset from 0 for the start of this page\\n\\nA small handful of endpoints include a `meta` key in the JSON, \\nthis is for historical reasons and should not be relied on, please use the pagination headers instead.\\n" }, { "id": "rate-limiting", "title": "Rate Limiting", "body": "The TradeGecko API provides a rate limit of 300 requests per 300 seconds.curl -IXGET https://api.tradegecko.com/products?page=1 -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" | grep X-Rate-Limit\\nX-Rate-Limit-Limit: 300\\nX-Rate-Limit-Remaining: 291\\nX-Rate-Limit-Reset: 1509339000\\nYour current rate limit quota is provided in the response headers of every request.\\n\\nHeader\\nDescription\\n\\n\\n\\nX-Rate-Limit-Limit\\nNumber of requests available for this application (always 300)       .\\n\\n\\nX-Rate-Limit-Remaining\\nNumber of requests remaining in quota\\n\\n\\nX-Rate-Limit-Reset\\nThe timestamp (as seconds since epoch) when the quota will reset.\\n\\nIf you go over this limit the API will return a response with a status code of 429 until the reset time.  \\n The API limit is tracked against the combination of application and account, so if your application is serving multiple accounts each account will have it\'s own quota.\\n" }, { "id": "idempotency-tokens", "title": "Idempotency Tokens", "body": "curl https://api.tradegecko.com/orders/ </span>\\n     -X POST </span>\\n     -H \\"Idempotency-Key: ecf83ef1-0f85-4860-bbc3-70a4bd74be41\\" </span>\\n     -H \\"Content-type: application/json\\" </span>\\n     -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" </span>\\n     -d \'{\\"order\\": {\\"company_id\\": 101, \\"shipping_address_id\\": 1002, \\"billing_address_id\\": 1002, \\"status\\": \\"active\\", \\"issued_at\\": \\"21-02-2018\\", \\"order_line_items\\": [{\\"variant_id\\": 14, \\"quantity\\": 1}, {\\"variant_id\\": 15, \\"quantity\\": 2}]}}\'\\norder = gecko.Order.build({\\n  company_id: 101,\\n  shipping_address_id: 1002,\\n  billing_address_id: 1002,\\n  issued_at: Time.now,\\n})\\norder.order_line_items.build(variant_id: 14, quantity: 1)\\norder.order_line_items.build(variant_id: 15, quantity: 2)\\norder.save(idempotency_token: \\"ecf83ef1-0f85-4860-bbc3-70a4bd74be41\\")\\nThe TradeGecko API has support for idempotent \\nrequests via an optional Idempotency-Key request header.\\nBy providing a unique Idempotency key in your POST or PUT requests the API can \\nguarantee that a specific operation is only performed once.The keys expire after 24 hours." }, { "id": "soft-deletion", "title": "Soft Deletion", "body": "TradeGecko uses soft-deletion for most of its records. \\nIn the API, a soft-deleted object will have a status of archived. \\nThese records will not be returned by default, but can be accessed using filters to \\nspecifically return records with a status of archived." }, { "id": "sideloading-resources", "title": "Sideloading Resources", "body": "TradeGecko allows you retrieve associated resources as part of a single request.\\nThis can be done by adding an include parameter containing a comma-separated list of resources to load.  \\n  Sideloading for Orders and Purchase Orders are currently available only when retrieving a single order or purchase order. Using the `include` parameter won\'t work on index pages.\\nHere\'s a few examples:Fetching a ProductGET https://api.tradegecko.com/products/1?include=variantscurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" https://api.tradegecko.com/products/153172?include=variants\\n{\\n   \\"variants\\":[\\n      {\\n         \\"id\\":558277,\\n         \\"created_at\\":\\"2013-11-18T03:00:38.459Z\\",\\n         \\"updated_at\\":\\"2018-05-23T08:02:29.569Z\\",\\n         \\"product_id\\":153172,\\n         ...\\n      }\\n   ],\\n   \\"product\\":{\\n      \\"id\\":153172,\\n      \\"created_at\\":\\"2013-07-23T16:25:36.582Z\\",\\n      \\"updated_at\\":\\"2018-09-01T04:54:25.085Z\\",\\n      \\"brand\\":null,\\n      \\"description\\":\\"Wiggly and squiggly. Watch out for the tail falling off!\\\\u003cbr\\\\u003e\\",\\n      \\"image_url\\":null,\\n      ...\\n   }\\n}\\nFetching an OrderGET https://api.tradegecko.com/orders/160?include=order_line_items,shipping_address,billing_address,companycurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" https://api.tradegecko.com/orders?include=order_line_items,shipping_address,billing_address,company\\n{\\n   \\"order_line_items\\":[\\n      {\\n         \\"id\\":335,\\n         \\"created_at\\":\\"2018-02-23T07:54:43.756Z\\",\\n         \\"updated_at\\":\\"2018-03-22T13:50:57.564Z\\",\\n         \\"order_id\\":160,\\n         \\"variant_id\\":1193,\\n         ...\\n      },\\n      {\\n         \\"id\\":336,\\n         \\"created_at\\":\\"2018-02-23T07:54:43.765Z\\",\\n         \\"updated_at\\":\\"2018-03-22T13:50:57.507Z\\",\\n         \\"order_id\\":160,\\n         \\"variant_id\\":1199,\\n         ...\\n      },\\n      {\\n         \\"id\\":337,\\n         \\"created_at\\":\\"2018-02-23T07:54:43.774Z\\",\\n         \\"updated_at\\":\\"2018-03-22T13:50:57.475Z\\",\\n         \\"order_id\\":160,\\n         \\"variant_id\\":1182,\\n         ...\\n      }\\n   ],\\n   \\"addresses\\":[\\n      {\\n         \\"id\\":147,\\n         \\"created_at\\":\\"2018-02-23T07:54:42.462Z\\",\\n         \\"updated_at\\":\\"2018-02-23T07:54:42.462Z\\",\\n         \\"company_id\\":96,\\n         \\"address1\\":\\"1260 Billy Plaza\\",\\n         ...\\n      },\\n      {\\n         \\"id\\":146,\\n         \\"created_at\\":\\"2018-02-23T07:54:42.460Z\\",\\n         \\"updated_at\\":\\"2018-02-23T07:54:42.460Z\\",\\n         \\"company_id\\":96,\\n         \\"address1\\":\\"620 Pfannerstill Run\\",\\n         ...\\n      }\\n   ],\\n   \\"companies\\":[\\n      {\\n         \\"id\\":96,\\n         \\"created_at\\":\\"2018-02-23T07:54:42.457Z\\",\\n         \\"updated_at\\":\\"2018-03-22T13:50:30.892Z\\",\\n         ...\\n      }\\n   ],\\n   \\"order\\":{\\n      \\"id\\":160,\\n      \\"created_at\\":\\"2018-02-23T07:54:43.683Z\\",\\n      \\"updated_at\\":\\"2018-09-24T03:29:30.759Z\\",\\n      \\"assignee_id\\":null,\\n      \\"billing_address_id\\":147,\\n      \\"company_id\\":96,\\n      \\"contact_id\\":null,\\n      ...\\n   }\\n}\\n" }, { "id": "errors", "title": "Errors", "body": "The TradeGecko API uses the following error codes:\\n\\nError Code\\nMeaning\\n\\n\\n\\n400\\nBad Request -- You have passed a malformed request\\n\\n\\n401\\nUnauthorized -- Your API key is incorrect\\n\\n\\n402\\nPayment Required -- Your subscription has lapsed\\n\\n\\n403\\nForbidden -- The resource requested is not available with your permissions\\n\\n\\n404\\nNot Found -- The specified resource could not be found\\n\\n\\n414\\nRequest URI too long -- You have applied too many filters on a GET request\\n\\n\\n422\\nUnprocessable Entity -- Your request is invalid\\n\\n\\n429\\nToo Many Requests -- You are allowed 300 requests per 300 seconds\\n\\n\\n500\\nInternal Server Error -- We had a problem with our server. Try again later\\n\\n\\n503\\nService Unavailable (Time out) -- The server is overloaded or down for maintenance\\n\\n" }, { "id": "guides", "title": "Guides", "body": "" }, { "id": "creating-a-sales-order", "title": "Creating a Sales Order", "body": "There are several ways to create a Sales Order via the TradeGecko API, \\ndepending on the number of line items, and whether the order is being made to a \\nnew or existing customer.We\'re going to be POSTing a minimal JSON to the /orders endpoint.\\nCheck out The Order Object for descriptions of all \\nof the available fields.As always, check the sidebar for example code.Here\'s a few examples:\\nCreating a Sales Order for an existing customer being shipped and billed to an existing address.\\nCreating a Sales Order for an existing customer, but to a new address.\\nCreating a Sales Order for a new customer.\\n1. Order with Existing Customer{\\n  \\"order\\": {\\n    \\"company_id\\": 101,\\n    \\"shipping_address_id\\": 1002,\\n    \\"billing_address_id\\": 1002,\\n    \\"status\\": \\"active\\",\\n    \\"issued_at\\": \\"21-02-2018\\",\\n    \\"order_line_items\\": [\\n      { \\"variant_id\\": 14, \\"quantity\\": 1 },\\n      { \\"variant_id\\": 15, \\"quantity\\": 2 }\\n    ]\\n  }\\n}\\norder = gecko.Order.build({\\n  company_id: 101,\\n  shipping_address_id: 1002,\\n  billing_address_id: 1002,\\n  issued_at: Time.now,\\n})\\norder.order_line_items.build(variant_id: 14, quantity: 1)\\norder.order_line_items.build(variant_id: 15, quantity: 2)\\norder.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" https://api.tradegecko.com/orders/ \\\\\\n-d \'{\\"order\\": {\\"company_id\\": 101, \\"shipping_address_id\\": 1002, \\"billing_address_id\\": 1002, \\"status\\": \\"active\\", \\"issued_at\\": \\"21-02-2018\\", \\"order_line_items\\": [{\\"variant_id\\": 14, \\"quantity\\": 1}, {\\"variant_id\\": 15, \\"quantity\\": 2}]}}\'\\n2. Order with Existing Customer but new addressWe have two options here, we can either create the address in a separate request,\\nor as in the JSON below we can embed the new address inside the Order JSON and\\nit will get created for us.{\\n  \\"order\\": {\\n    \\"company_id\\": 101,\\n    \\"shipping_address\\": {\\n      \\"address1\\": \\"123 Cross St\\",\\n      \\"city\\": \\"Springfield\\",\\n      \\"country\\": \\"USA\\",\\n      \\"label\\": \\"Head Office\\"\\n    },\\n    \\"status\\": \\"active\\",\\n    \\"issued_at\\": \\"21-02-2018\\",\\n    \\"order_line_items\\": [\\n      { \\"variant_id\\": 14, \\"quantity\\": 1 },\\n      { \\"variant_id\\": 15, \\"quantity\\": 2 }\\n    ]\\n  }\\n}\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" https://api.tradegecko.com/orders/\\n-d \'{\\"order\\": {\\"company_id\\": 101, \\"shipping_address\\": {\\"address1\\": \\"123 Cross St\\", \\"city\\": \\"Springfield\\", \\"country\\": \\"USA\\", \\"label\\": \\"Head Office\\"}, \\"status\\": \\"active\\", \\"issued_at\\": \\"21-02-2018\\", \\"order_line_items\\": [{\\"variant_id\\": 14, \\"quantity\\": 1}, {\\"variant_id\\": 15, \\"quantity\\": 2}]}}\'\\n# The rubygem does not yet support creating nested addresses,\\n# so this will make two API requests.\\naddress = gecko.Address.build({\\n  company_id: 101,\\n  address1: \\"123 Cross St\\",\\n  city: \\"Springfield\\",\\n  country: \\"USA\\",\\n  label: \\"Head Office\\"\\n})\\naddress.save\\norder = gecko.Order.build({\\n  company_id: 101,\\n  shipping_address_id: address.id,\\n  billing_address_id: address.id,\\n  issued_at: Time.now,\\n})\\norder.order_line_items.build(variant_id: 14, quantity: 1)\\norder.order_line_items.build(variant_id: 15, quantity: 2)\\norder.save\\n\\n  If you are unsure whether an address exists in your system yet, you will need to\\n  handle lookup separately as the order endpoint does not do any address deduping work.\\n\\n  In the example above we have not included a billing address,\\n  if the billing address is not included the API will assume the shipping address\\n  is the same as the billing address, if there is a different billing address,\\n  then either include a `billing_address_id` if the address already exists,\\n  or nest a new address under the `billing_address` key.\\n3. Order for New CustomerIf the order is for a new company, the company can either be created via a separate\\nrequest, or nested inside the order.\\nIf nesting inside the order, at least a shipping_address must be included as well.{\\n  \\"order\\": {\\n    \\"company\\": {\\n      \\"name\\": \\"Bill\'s Boots\\",\\n      \\"company_code\\": \\"BB-123\\",\\n      \\"company_type\\": \\"business\\",\\n      \\"email\\": \\"billy@billsboots.com\\",\\n      \\"website\\": \\"https://billsboots.com\\"\\n    },\\n    \\"shipping_address\\": {\\n      \\"address1\\": \\"123 Cross St\\",\\n      \\"city\\": \\"Springfield\\",\\n      \\"country\\": \\"USA\\",\\n      \\"label\\": \\"Head Office\\"\\n    },\\n    \\"status\\": \\"active\\",\\n    \\"issued_at\\": \\"21-02-2018\\",\\n    \\"order_line_items\\": [\\n      { \\"variant_id\\": 14, \\"quantity\\": 1 },\\n      { \\"variant_id\\": 15, \\"quantity\\": 2 }\\n    ]\\n  }\\n}\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\" https://api.tradegecko.com/orders/ \\\\\\n-d \'{\\"order\\": {\\"company\\": {\\"name\\": \\"Bill\\\\\'s Boots\\", \\"company_code\\": \\"BB-123\\", \\"company_type\\": \\"business\\", \\"email\\": \\"billy@billsboots.com\\", \\"website\\": \\"https://billsboots.com\\"}, \\"shipping_address\\": {\\"address1\\": \\"123 Cross St\\", \\"city\\": \\"Springfield\\", \\"country\\": \\"USA\\", \\"label\\": \\"Head Office\\"}, \\"status\\": \\"active\\", \\"issued_at\\": \\"21-02-2018\\", \\"order_line_items\\": [{\\"variant_id\\": 14, \\"quantity\\": 1}, {\\"variant_id\\": 15, \\"quantity\\": 2 }]}}\'\\ncompany = gecko.Company.build({\\n  name: \\"Bill\'s Boots\\",\\n  company_code: \\"BB-123\\",\\n  company_type: \\"business\\",\\n  email: \\"billy@billsboots.com\\",\\n  website: \\"https://billsboots.com\\"\\n})\\ncompany.save\\naddress = gecko.Address.build({\\n  address1: \\"123 Cross St\\",\\n  city: \\"Springfield\\",\\n  country: \\"USA\\",\\n  label: \\"Head Office\\"\\n})\\naddress.save\\n  company_id: company.id,\\n  shipping_address_id: address.id,\\n  billing_address_id: address.id,\\n  issued_at: Time.now,\\n})\\norder.order_line_items.build(variant_id: 14, quantity: 1)\\norder.order_line_items.build(variant_id: 15, quantity: 2)\\norder.save\\nCreating a Sales Order with > 250 items.If you are regularly creating orders with several hundreds of items you may run into\\nthe occasional case where the server times out.To mitigate effects of timeouts we suggest the use of two extra mechanisms.1. Idempotency Tokens\\nBy using an Idempotency Token header when creating the\\nSales Order, you can automatically recover from occasional timeout errors by simply\\nretrying the POST request and the API will ensure only a single Sales Order is created.2. Multi-part Creates\\nFor an order with a significant number of line items, it may make sense to split\\nthem into multiple requests.\\nWe don\'t suggest unless you\'re running into regular issues with Sales Order size.\\nIn this case, create the Sales Order as above with a section of the line items\\n(150 for example), and then fire an Order update request with just an array of\\nthe next set of items.PUT /orders/12345{\\n  \\"order\\": {\\n    \\"order_line_items\\": [\\n      { \\"variant_id\\": 14, \\"quantity\\": 1 },\\n      { \\"variant_id\\": 15, \\"quantity\\": 2 }\\n    ]\\n  }\\n}\\n\\nIf you are regularly making > 400 line item orders via the TradeGecko API, please\\ncontact your success rep as we\'d love to discuss your usecases further.\\n" }, { "id": "resources", "title": "Resources", "body": "" }, { "id": "account", "title": "Account", "body": "This is an object representing an account." }, { "id": "the-account-object", "title": "The Account object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the account was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the account was last updated.\\ntrue\\n\\n\\ncontact_email\\nString\\nContact email used on TradeGecko documents and emails.\\n\\n\\n\\ncontact_mobile\\nString\\nContact mobile number for your account.\\n\\n\\n\\ncontact_phone\\nString\\nContact phone number used on TradeGecko documents and emails.\\n\\n\\n\\ncountry\\nString\\nNeeds to be a valid ISO3166-1 alpha-2 code (US, NZ, SG etc)\\n\\n\\n\\ndefault_order_price_list_id\\nString\\nThe default price list id for new Sales Orders, unless a price list is set on the company.\\n\\n\\n\\ndefault_purchase_order_price_list_id\\nString\\nThe default price list for new Purchase Orders, unless a price list is set on the company.\\n\\n\\n\\ndefault_sales_ledger_account_on\\nString\\nValue can either be \'company\', \'variant\' or \'channel\'. This determines how your sales total will be tracked on.\\n\\n\\n\\ndefault_tax_treatment\\nString\\nValue can either be \'inclusive\' or \'exclusive\'. This will be the default tax treatment for orders created without assigning a tax_treatment attribute.\\n\\n\\n\\nindustry\\nString\\nThe industry in which your account belongs to.\\n\\n\\n\\nlogo_url  deprecated\\nString\\nImage URL for the account\'s logo.\\ntrue\\n\\n\\nname\\nString\\nName of the account.\\n\\n\\n\\nstock_level_warn\\nBoolean\\nShow a warning if attempting to ship a shipment without all the stock available\\n\\n\\n\\ntax_label\\nString\\nPrimary tax label for your business. e.g. VAT or GST.\\n\\n\\n\\ntax_number\\nString\\nYour company\'s tax number. e.g. 12-345-678.\\n\\n\\n\\ntax_number_label\\nString\\nTax Number Label for your Organization. e.g. VAT Number.\\n\\n\\n\\ntime_zone\\nString\\nThe name of the time zone in TZ format. e.g. Asia/Singapore\\n\\n\\n\\nwebsite\\nString\\nYour company\'s website URL.\\n\\n\\n\\nprimary_location_id\\nInteger\\nThe default location used when dealing with stock. New variants will be added here.\\n\\n\\n\\nprimary_billing_location_id\\nInteger\\nThe default billing address used on your document headers and purchase orders.\\n\\n\\n\\ndefault_currency_id\\nInteger\\nThe default currency for creating a new sales order.\\n\\n\\n\\ndefault_payment_term_id\\nInteger\\nThe default method of payment. This can also be used to push to multiple ledger accounts in your accounting integration.\\n\\n\\n\\nbilling_contact_id\\nInteger\\nAccount Owner, can only be transferred by existing owner\\n\\n\\n\\ndefault_sales_order_tax_type_id\\nInteger\\nThe default tax type for creating a new sales order.\\n\\n\\n\\ndefault_purchase_order_tax_type_id\\nInteger\\nThe default tax type that is selected when you create a new purchase order.\\n\\n\\n\\ndefault_tax_exempt_id\\nInteger\\nThe default tax type for non-taxable products.\\n\\n\\n\\ndefault_tax_rate  deprecated\\nString\\n\\ntrue\\n\\n\\ndefault_tax_type  deprecated\\nString\\n\\n\\n\\n\\ndefault_tax_type_id\\nInteger\\nThe default tax type for creating a new sales order.\\n\\n\\n\\ndefault_order_price_type_id  deprecated\\nString\\n\\n\\n\\n\\ndefault_purchase_order_price_type_id  deprecated\\nString\\n\\n\\n\\n\\nlocation_ids\\nArray\\nAn array of IDs of all the account\'s active locations\\ntrue\\n\\n\\nuser_ids\\nArray\\nAn array of IDs of all the account\'s active users\\ntrue\\n\\n" }, { "id": "get-current-account", "title": "Get current account", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Account.current\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/accounts/current\\n{\\n  \\"account\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:23.803Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:24.326Z\\",\\n  \\"contact_email\\": \\"lcp@tradegecko.com\\",\\n  \\"contact_mobile\\": null,\\n  \\"contact_phone\\": null,\\n  \\"country\\": \\"NZ\\",\\n  \\"default_order_price_list_id\\": \\"wholesale\\",\\n  \\"default_purchase_order_price_list_id\\": \\"buy\\",\\n  \\"default_sales_ledger_account_on\\": \\"company\\",\\n  \\"default_tax_treatment\\": \\"exclusive\\",\\n  \\"default_document_theme_id\\": 1,\\n  \\"industry\\": \\"\\",\\n  \\"logo_url\\": null,\\n  \\"name\\": \\"Bob\'s Burgers\\",\\n  \\"stock_level_warn\\": true,\\n  \\"tax_label\\": \\"GST\\",\\n  \\"tax_number\\": null,\\n  \\"tax_number_label\\": \\"GST Registration Number\\",\\n  \\"time_zone\\": \\"Pacific/Auckland\\",\\n  \\"website\\": null,\\n  \\"primary_location_id\\": 1,\\n  \\"primary_billing_location_id\\": 1,\\n  \\"default_currency_id\\": 1,\\n  \\"default_payment_term_id\\": 3,\\n  \\"billing_contact_id\\": 1,\\n  \\"default_sales_order_tax_type_id\\": 2,\\n  \\"default_purchase_order_tax_type_id\\": 3,\\n  \\"default_tax_exempt_id\\": 1,\\n  \\"default_tax_rate\\": \\"15.0\\",\\n  \\"default_tax_type\\": \\"exclusive\\",\\n  \\"default_tax_type_id\\": 2,\\n  \\"default_order_price_type_id\\": \\"wholesale\\",\\n  \\"default_purchase_order_price_type_id\\": \\"buy\\",\\n  \\"location_ids\\": [\\n    1\\n  ],\\n  \\"user_ids\\": [\\n    1\\n  ]\\n}\\n}\\nRetrieves the details of the current account.HTTP RequestGET https://api.tradegecko.com/accounts/current" }, { "id": "update-an-account", "title": "Update an account", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\naccount = gecko.Account.find(1)\\naccount.attributes = {\\n  rate: \\"12.0\\",\\n}\\naccount.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/accounts/1 -d \'{\\"account\\":{\\"country\\":\\"US\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the account gets updated successfully.\\n\\nUpdates the specified account by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the account creation call.HTTP RequestPUT https://api.tradegecko.com/accounts/{RESOURCE_ID}" }, { "id": "address", "title": "Address", "body": "This is an object representing an address of a company. Companies can\\n  have multiple addresses but an address object belongs to only one\\n  Company." }, { "id": "the-address-object", "title": "The Address object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the address was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the address was last updated.\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'.\\ntrue\\n\\n\\ncompany_id\\nInteger\\nThe company id where the address belongs.\\n\\n\\n\\naddress1\\nString\\nFirst line of address.\\n\\n\\n\\naddress2\\nString\\nSecond line of address.\\n\\n\\n\\ncity\\nString\\nCity of an address.\\n\\n\\n\\ncompany_name\\nString\\nAttention to field of an address.\\n\\n\\n\\ncountry\\nString\\nCountry of an address.\\n\\n\\n\\nemail\\nString\\nEmail of person associated with address.\\n\\n\\n\\nfirst_name\\nString\\nFirst name of person associated with address. Used in attention to field.\\n\\n\\n\\nlast_name\\nString\\nLast name of person associated with address. Used in attention to field.\\n\\n\\n\\nlabel\\nString\\nA (unique per company) label for the address e.g. Shipping, Billing.\\n\\n\\n\\nphone_number\\nString\\nPhone number of person associated with address.\\n\\n\\n\\nstate\\nString\\nState of an address.\\n\\n\\n\\nsuburb\\nString\\nSuburb of an address.\\n\\n\\n\\nzip_code\\nString\\nZip code of an address.\\n\\n\\n" }, { "id": "list-all-addresses", "title": "List all addresses", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Address.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/addresses/\\n{\\n  \\"addresses\\": [\\n  {\\n    \\"id\\": 6,\\n    \\"created_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n    \\"updated_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n    \\"company_id\\": 4,\\n    \\"address1\\": \\"Test address\\",\\n    \\"address2\\": \\"\\",\\n    \\"city\\": \\"Singapore\\",\\n    \\"company_name\\": \\"\\",\\n    \\"country\\": \\"Singapore\\",\\n    \\"email\\": \\"\\",\\n    \\"first_name\\": null,\\n    \\"last_name\\": null,\\n    \\"label\\": \\"Shipping\\",\\n    \\"phone_number\\": \\"\\",\\n    \\"state\\": \\"\\",\\n    \\"status\\": \\"active\\",\\n    \\"suburb\\": \\"\\",\\n    \\"zip_code\\": \\"\\"\\n  },\\n  {\\n    \\"id\\": 5,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.630Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.630Z\\",\\n    \\"company_id\\": 3,\\n    \\"address1\\": \\"06157 Waters Road\\",\\n    \\"address2\\": \\"505 Frederick Flat\\",\\n    \\"city\\": \\"East Trudie\\",\\n    \\"company_name\\": null,\\n    \\"country\\": \\"UK\\",\\n    \\"email\\": \\"samara@williamwonkacandyltd.com\\",\\n    \\"first_name\\": null,\\n    \\"last_name\\": null,\\n    \\"label\\": \\"Warehouse (DEMO)\\",\\n    \\"phone_number\\": \\"952-649-4655\\",\\n    \\"state\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"suburb\\": null,\\n    \\"zip_code\\": \\"98366-5837\\"\\n  }\\n]\\n}\\nReturns a list of addresses you\u2019ve previously created. The addresses are returned in sorted order, with the most recent addresses appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of address IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\ncompany_id\\nFilter addresses by company\\n\\nHTTP Request:GET  https://api.tradegecko.com/addresses" }, { "id": "create-a-new-address", "title": "Create a new address", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\naddress = gecko.Address.build({:company_id=>1, :label=>\\"Main Office\\", :address1=>\\"12 Park Ave\\"})\\naddress.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/addresses/ -d \'{\\"address\\":{\\"company_id\\":1,\\"label\\":\\"Main Office\\",\\"address1\\":\\"12 Park Ave\\"}\'}\\n{\\n  \\"address\\": {\\n  \\"id\\": 6,\\n  \\"created_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n  \\"updated_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n  \\"company_id\\": 4,\\n  \\"address1\\": \\"Test address\\",\\n  \\"address2\\": \\"\\",\\n  \\"city\\": \\"Singapore\\",\\n  \\"company_name\\": \\"\\",\\n  \\"country\\": \\"Singapore\\",\\n  \\"email\\": \\"\\",\\n  \\"first_name\\": null,\\n  \\"last_name\\": null,\\n  \\"label\\": \\"Shipping\\",\\n  \\"phone_number\\": \\"\\",\\n  \\"state\\": \\"\\",\\n  \\"status\\": \\"active\\",\\n  \\"suburb\\": \\"\\",\\n  \\"zip_code\\": \\"\\"\\n}\\n}\\nCreates a new address object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ncompany_id\\nInteger\\nThe company id where the address belongs.\\ntrue\\n\\n\\naddress1\\nString\\nFirst line of address.\\ntrue\\n\\n\\naddress2\\nString\\nSecond line of address.\\n\\n\\n\\ncity\\nString\\nCity of an address.\\n\\n\\n\\ncompany_name\\nString\\nAttention to field of an address.\\n\\n\\n\\ncountry\\nString\\nCountry of an address.\\n\\n\\n\\nemail\\nString\\nEmail of person associated with address.\\n\\n\\n\\nfirst_name\\nString\\nFirst name of person associated with address. Used in attention to field.\\n\\n\\n\\nlast_name\\nString\\nLast name of person associated with address. Used in attention to field.\\n\\n\\n\\nlabel\\nString\\nA (unique per company) label for the address e.g. Shipping, Billing.\\n\\n\\n\\nphone_number\\nString\\nPhone number of person associated with address.\\n\\n\\n\\nstate\\nString\\nState of an address.\\n\\n\\n\\nsuburb\\nString\\nSuburb of an address.\\n\\n\\n\\nzip_code\\nString\\nZip code of an address.\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/addresses/" }, { "id": "retrieve-a-particular-address", "title": "Retrieve a particular address", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Address.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/addresses/1\\n{\\n  \\"address\\": {\\n  \\"id\\": 6,\\n  \\"created_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n  \\"updated_at\\": \\"2015-11-04T06:59:35.285Z\\",\\n  \\"company_id\\": 4,\\n  \\"address1\\": \\"Test address\\",\\n  \\"address2\\": \\"\\",\\n  \\"city\\": \\"Singapore\\",\\n  \\"company_name\\": \\"\\",\\n  \\"country\\": \\"Singapore\\",\\n  \\"email\\": \\"\\",\\n  \\"first_name\\": null,\\n  \\"last_name\\": null,\\n  \\"label\\": \\"Shipping\\",\\n  \\"phone_number\\": \\"\\",\\n  \\"state\\": \\"\\",\\n  \\"status\\": \\"active\\",\\n  \\"suburb\\": \\"\\",\\n  \\"zip_code\\": \\"\\"\\n}\\n}\\nRetrieves the details of an existing address. You need only supply the unique address identifier that was returned upon address creation.HTTP RequestGET https://api.tradegecko.com/addresses/{RESOURCE_ID}" }, { "id": "update-an-address", "title": "Update an address", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\naddress = gecko.Address.find(1)\\naddress.attributes = {\\n  rate: \\"12.0\\",\\n}\\naddress.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/addresses/1 -d \'{\\"address\\":{\\"address1\\":\\"12 Park Ave\\",\\"city\\":\\"Singapore\\",\\"label\\":\\"Main Office\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the address gets updated successfully.\\n\\nUpdates the specified address by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the address creation call.HTTP RequestPUT https://api.tradegecko.com/addresses/{RESOURCE_ID}" }, { "id": "delete-an-address", "title": "Delete an address", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\naddress = gecko.Address.find(1).\\naddress.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/addresses/1\\n\\nResponse\\n\\nReturns 204 status when the address gets deleted successfully.\\n\\nPermanently deletes an address. It cannot be undone. This address is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/addresses/{RESOURCE_ID}/" }, { "id": "company", "title": "Company", "body": "This is an object representing a company." }, { "id": "the-company-object", "title": "The Company object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\', \'disabled\' or \'archived\'\\n\\n\\n\\nassignee_id\\nInteger\\nID of the user to which new PO/SO will be assigned by default\\n\\n\\n\\ndefault_ledger_account_id\\nInteger\\n\\n\\n\\n\\ndefault_payment_term_id\\nInteger\\n\\n\\n\\n\\ndefault_stock_location_id\\nInteger\\n\\n\\n\\n\\ndefault_tax_type_id\\nInteger\\n\\n\\n\\n\\ncompany_code\\nString\\nA unique identifier for your records\\n\\n\\n\\ncompany_type\\nString\\nCan be \'business\', \'supplier\' or \'consumer\'\\n\\n\\n\\ndefault_discount_rate\\nString\\n\\n\\n\\n\\ndefault_price_list_id\\nString\\n\\n\\n\\n\\ndefault_tax_rate  deprecated\\nString\\nAlias to default_tax_type#effective_rate\\n\\n\\n\\ndescription\\nString\\n\\n\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nfax\\nString\\n\\n\\n\\n\\nname\\nString\\n\\n\\n\\n\\nphone_number\\nString\\n\\n\\n\\n\\ntax_number\\nString\\n\\n\\n\\n\\nwebsite\\nString\\n\\n\\n\\n\\ntags\\nArray[String]\\nCompany tags for easier filtering and searching\\n\\n\\n\\naddress_ids\\nArray\\n\\ntrue\\n\\n\\ncontact_ids\\nArray\\n\\ntrue\\n\\n\\nnote_ids\\nArray\\n\\ntrue\\n\\n\\ndefault_price_type_id  deprecated\\nString\\n\\n\\n\\n" }, { "id": "list-all-companies", "title": "List all companies", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Company.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/companies/\\n{\\n  \\"companies\\": [\\n  {\\n    \\"id\\": 4,\\n    \\"created_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n    \\"assignee_id\\": 1,\\n    \\"default_ledger_account_id\\": null,\\n    \\"default_payment_term_id\\": null,\\n    \\"default_stock_location_id\\": null,\\n    \\"default_tax_type_id\\": null,\\n    \\"company_code\\": null,\\n    \\"company_type\\": \\"business\\",\\n    \\"default_discount_rate\\": null,\\n    \\"default_price_list_id\\": null,\\n    \\"default_tax_rate\\": null,\\n    \\"default_document_theme_id\\": null,\\n    \\"description\\": \\"\\",\\n    \\"email\\": null,\\n    \\"fax\\": null,\\n    \\"name\\": \\"B2B Test Company\\",\\n    \\"phone_number\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"tax_number\\": null,\\n    \\"website\\": null,\\n    \\"tags\\": [\\n\\n],\\n    \\"address_ids\\": [\\n      6\\n    ],\\n    \\"contact_ids\\": [\\n      7\\n    ],\\n    \\"note_ids\\": [\\n\\n],\\n    \\"default_price_type_id\\": null\\n  },\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.612Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.612Z\\",\\n    \\"assignee_id\\": null,\\n    \\"default_ledger_account_id\\": null,\\n    \\"default_payment_term_id\\": null,\\n    \\"default_stock_location_id\\": null,\\n    \\"default_tax_type_id\\": null,\\n    \\"company_code\\": null,\\n    \\"company_type\\": \\"supplier\\",\\n    \\"default_discount_rate\\": null,\\n    \\"default_price_list_id\\": null,\\n    \\"default_tax_rate\\": null,\\n    \\"default_document_theme_id\\": null,\\n    \\"description\\": \\"Greatest Candy-maker and chocolatier of all time and place\\",\\n    \\"email\\": \\"william@example.com\\",\\n    \\"fax\\": null,\\n    \\"name\\": \\"Wonka Candy (DEMO)\\",\\n    \\"phone_number\\": \\"123-456-789\\",\\n    \\"status\\": \\"active\\",\\n    \\"tax_number\\": null,\\n    \\"website\\": \\"http://williamwonkacandyltd.com\\",\\n    \\"tags\\": [\\n\\n],\\n    \\"address_ids\\": [\\n      4,\\n      5\\n    ],\\n    \\"contact_ids\\": [\\n      3,\\n      4,\\n      5\\n    ],\\n    \\"note_ids\\": [\\n\\n],\\n    \\"default_price_type_id\\": null\\n  }\\n]\\n}\\nReturns a list of companies you\u2019ve previously created. The companies are returned in sorted order, with the most recent companies appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of company IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nPossible options are: active, disabled.\\n\\n\\nassignee_id\\nPossibe options: ID of any user\\n\\n\\ndefault_ledger_account_id\\n\\n\\n\\ndefault_payment_term_id\\n\\n\\n\\ndefault_stock_location_id\\n\\n\\n\\ndefault_tax_type_id\\n\\n\\n\\ncompany_code\\n\\n\\n\\ncompany_type\\nPossible options are: business, supplier, or consumer\\n\\n\\ndefault_price_list_id\\n\\n\\n\\ndefault_document_theme_id\\n\\n\\n\\nemail\\n\\n\\n\\ndefault_price_type_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/companies" }, { "id": "create-a-new-company", "title": "Create a new company", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncompany = gecko.Company.build({:name=>\\"TradeGecko (Demo)\\", :company_type=>\\"Supplier\\"})\\ncompany.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/companies/ -d \'{\\"company\\":{\\"name\\":\\"TradeGecko (Demo)\\",\\"company_type\\":\\"Supplier\\"}\'}\\n{\\n  \\"company\\": {\\n  \\"id\\": 4,\\n  \\"created_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n  \\"assignee_id\\": 1,\\n  \\"default_ledger_account_id\\": null,\\n  \\"default_payment_term_id\\": null,\\n  \\"default_stock_location_id\\": null,\\n  \\"default_tax_type_id\\": null,\\n  \\"company_code\\": null,\\n  \\"company_type\\": \\"business\\",\\n  \\"default_discount_rate\\": null,\\n  \\"default_price_list_id\\": null,\\n  \\"default_tax_rate\\": null,\\n  \\"default_document_theme_id\\": null,\\n  \\"description\\": \\"\\",\\n  \\"email\\": null,\\n  \\"fax\\": null,\\n  \\"name\\": \\"B2B Test Company\\",\\n  \\"phone_number\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"tax_number\\": null,\\n  \\"website\\": null,\\n  \\"tags\\": [\\n\\n],\\n  \\"address_ids\\": [\\n    6\\n  ],\\n  \\"contact_ids\\": [\\n    7\\n  ],\\n  \\"note_ids\\": [\\n\\n],\\n  \\"default_price_type_id\\": null\\n}\\n}\\nCreates a new company object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nassignee_id\\nInteger\\nID of the user to which new PO/SO will be assigned by default\\n\\n\\n\\ndefault_ledger_account_id\\nInteger\\n\\n\\n\\n\\ndefault_payment_term_id\\nInteger\\n\\n\\n\\n\\ndefault_stock_location_id\\nInteger\\n\\n\\n\\n\\ndefault_tax_type_id\\nInteger\\n\\n\\n\\n\\ncompany_code\\nString\\nA unique identifier for your records\\n\\n\\n\\ncompany_type\\nString\\nCan be \'business\', \'supplier\' or \'consumer\'\\ntrue\\n\\n\\ndefault_discount_rate\\nString\\n\\n\\n\\n\\ndefault_price_list_id\\nString\\n\\n\\n\\n\\ndefault_tax_rate deprecated\\nString\\nAlias to default_tax_type#effective_rate\\n\\n\\n\\ndescription\\nString\\n\\n\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nfax\\nString\\n\\n\\n\\n\\nname\\nString\\n\\ntrue\\n\\n\\nphone_number\\nString\\n\\n\\n\\n\\ntax_number\\nString\\n\\n\\n\\n\\nwebsite\\nString\\n\\n\\n\\n\\ntags\\nArray[String]\\nCompany tags for easier filtering and searching\\n\\n\\n\\ndefault_price_type_id deprecated\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/companies/" }, { "id": "retrieve-a-particular-company", "title": "Retrieve a particular company", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Company.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/companies/1\\n{\\n  \\"company\\": {\\n  \\"id\\": 4,\\n  \\"created_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:44:42.417Z\\",\\n  \\"assignee_id\\": 1,\\n  \\"default_ledger_account_id\\": null,\\n  \\"default_payment_term_id\\": null,\\n  \\"default_stock_location_id\\": null,\\n  \\"default_tax_type_id\\": null,\\n  \\"company_code\\": null,\\n  \\"company_type\\": \\"business\\",\\n  \\"default_discount_rate\\": null,\\n  \\"default_price_list_id\\": null,\\n  \\"default_tax_rate\\": null,\\n  \\"default_document_theme_id\\": null,\\n  \\"description\\": \\"\\",\\n  \\"email\\": null,\\n  \\"fax\\": null,\\n  \\"name\\": \\"B2B Test Company\\",\\n  \\"phone_number\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"tax_number\\": null,\\n  \\"website\\": null,\\n  \\"tags\\": [\\n\\n],\\n  \\"address_ids\\": [\\n    6\\n  ],\\n  \\"contact_ids\\": [\\n    7\\n  ],\\n  \\"note_ids\\": [\\n\\n],\\n  \\"default_price_type_id\\": null\\n}\\n}\\nRetrieves the details of an existing company. You need only supply the unique company identifier that was returned upon company creation.HTTP RequestGET https://api.tradegecko.com/companies/{RESOURCE_ID}" }, { "id": "update-a-company", "title": "Update a company", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncompany = gecko.Company.find(1)\\ncompany.attributes = {\\n  rate: \\"12.0\\",\\n}\\ncompany.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/companies/1 -d \'{\\"company\\":{\\"name\\":\\"Elephant\\",\\"email\\":\\"hello@tradegecko.com\\",\\"website\\":\\"http://tradegecko.com\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the company gets updated successfully.\\n\\nUpdates the specified company by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the company creation call.HTTP RequestPUT https://api.tradegecko.com/companies/{RESOURCE_ID}" }, { "id": "delete-a-company", "title": "Delete a company", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncompany = gecko.Company.find(1).\\ncompany.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/companies/1\\n\\nResponse\\n\\nReturns 204 status when the company gets deleted successfully.\\n\\nPermanently deletes a company. It cannot be undone. This company is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/companies/{RESOURCE_ID}/" }, { "id": "contact", "title": "Contact", "body": "This is an object representing a contact of a company. Companies can\\n  have multiple contacts but a contact object belongs to only one\\n  Company." }, { "id": "the-contact-object", "title": "The Contact object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the contact was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the contact was last updated.\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'.\\ntrue\\n\\n\\ncompany_id\\nInteger\\nThe company id where the contact belongs.\\n\\n\\n\\nemail\\nString\\nEmail address of the contact.\\n\\n\\n\\nfax\\nString\\nFax number of the contact.\\n\\n\\n\\nfirst_name\\nString\\nFirst name of the contact.\\n\\n\\n\\nlast_name\\nString\\nLast name of the contact.\\n\\n\\n\\nlocation\\nString\\nDepartment of the contact.\\n\\n\\n\\nmobile\\nString\\nMobile number of the contact.\\n\\n\\n\\nnotes\\nString\\nNotes on the contact.\\n\\n\\n\\nphone_number\\nString\\nPhone number of the contact.\\n\\n\\n\\nposition\\nString\\nJob title of the contact.\\n\\n\\n\\nonline_ordering\\nBoolean\\nTells whether this contact has access to your B2B store.\\n\\n\\n\\nphone  deprecated\\nString\\n\\n\\n\\n" }, { "id": "list-all-contacts", "title": "List all contacts", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Contact.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/contacts/\\n{\\n  \\"contacts\\": [\\n  {\\n    \\"id\\": 7,\\n    \\"created_at\\": \\"2015-11-02T01:44:42.483Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:45:17.085Z\\",\\n    \\"company_id\\": 4,\\n    \\"email\\": \\"lachlan@tradegecko.com\\",\\n    \\"fax\\": null,\\n    \\"first_name\\": \\"B2B Test Contact\\",\\n    \\"last_name\\": \\"\\",\\n    \\"location\\": null,\\n    \\"mobile\\": null,\\n    \\"notes\\": null,\\n    \\"phone_number\\": null,\\n    \\"position\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"iguana_admin\\": true,\\n    \\"online_ordering\\": true,\\n    \\"invitation_accepted_at\\": \\"2015-11-02T01:45:17.082Z\\",\\n    \\"phone\\": null\\n  },\\n  {\\n    \\"id\\": 6,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.821Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:33:35.379Z\\",\\n    \\"company_id\\": 1,\\n    \\"email\\": \\"lcp@tradegecko.com\\",\\n    \\"fax\\": null,\\n    \\"first_name\\": \\"lcp\\",\\n    \\"last_name\\": \\"Gecko\\",\\n    \\"location\\": null,\\n    \\"mobile\\": null,\\n    \\"notes\\": null,\\n    \\"phone_number\\": null,\\n    \\"position\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"iguana_admin\\": null,\\n    \\"online_ordering\\": true,\\n    \\"invitation_accepted_at\\": \\"2015-11-02T01:33:35.377Z\\",\\n    \\"phone\\": null\\n  }\\n]\\n}\\nReturns a list of contacts you\u2019ve previously created. The contacts are returned in sorted order, with the most recent contacts appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of contact IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\ncompany_id\\nFilter contacts by company\\n\\n\\nonline_ordering\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/contacts" }, { "id": "create-a-new-contact", "title": "Create a new contact", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncontact = gecko.Contact.build({:first_name=>\\"TradeGecko (Demo)\\", :company_id=>1})\\ncontact.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/contacts/ -d \'{\\"contact\\":{\\"first_name\\":\\"TradeGecko (Demo)\\",\\"company_id\\":1}\'}\\n{\\n  \\"contact\\": {\\n  \\"id\\": 7,\\n  \\"created_at\\": \\"2015-11-02T01:44:42.483Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:45:17.085Z\\",\\n  \\"company_id\\": 4,\\n  \\"email\\": \\"lachlan@tradegecko.com\\",\\n  \\"fax\\": null,\\n  \\"first_name\\": \\"B2B Test Contact\\",\\n  \\"last_name\\": \\"\\",\\n  \\"location\\": null,\\n  \\"mobile\\": null,\\n  \\"notes\\": null,\\n  \\"phone_number\\": null,\\n  \\"position\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"iguana_admin\\": true,\\n  \\"online_ordering\\": true,\\n  \\"invitation_accepted_at\\": \\"2015-11-02T01:45:17.082Z\\",\\n  \\"phone\\": null\\n}\\n}\\nCreates a new contact object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ncompany_id\\nInteger\\nThe company id where the contact belongs.\\ntrue\\n\\n\\nemail\\nString\\nEmail address of the contact.\\n\\n\\n\\nfax\\nString\\nFax number of the contact.\\n\\n\\n\\nfirst_name\\nString\\nFirst name of the contact.\\ntrue\\n\\n\\nlast_name\\nString\\nLast name of the contact.\\n\\n\\n\\nlocation\\nString\\nDepartment of the contact.\\n\\n\\n\\nmobile\\nString\\nMobile number of the contact.\\n\\n\\n\\nnotes\\nString\\nNotes on the contact.\\n\\n\\n\\nphone_number\\nString\\nPhone number of the contact.\\n\\n\\n\\nposition\\nString\\nJob title of the contact.\\n\\n\\n\\nonline_ordering\\nBoolean\\nTells whether this contact has access to your B2B store.\\n\\n\\n\\nphone deprecated\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/contacts/" }, { "id": "retrieve-a-particular-contact", "title": "Retrieve a particular contact", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Contact.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/contacts/1\\n{\\n  \\"contact\\": {\\n  \\"id\\": 7,\\n  \\"created_at\\": \\"2015-11-02T01:44:42.483Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:45:17.085Z\\",\\n  \\"company_id\\": 4,\\n  \\"email\\": \\"lachlan@tradegecko.com\\",\\n  \\"fax\\": null,\\n  \\"first_name\\": \\"B2B Test Contact\\",\\n  \\"last_name\\": \\"\\",\\n  \\"location\\": null,\\n  \\"mobile\\": null,\\n  \\"notes\\": null,\\n  \\"phone_number\\": null,\\n  \\"position\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"iguana_admin\\": true,\\n  \\"online_ordering\\": true,\\n  \\"invitation_accepted_at\\": \\"2015-11-02T01:45:17.082Z\\",\\n  \\"phone\\": null\\n}\\n}\\nRetrieves the details of an existing contact. You need only supply the unique contact identifier that was returned upon contact creation.HTTP RequestGET https://api.tradegecko.com/contacts/{RESOURCE_ID}" }, { "id": "update-a-contact", "title": "Update a contact", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncontact = gecko.Contact.find(1)\\ncontact.attributes = {\\n  rate: \\"12.0\\",\\n}\\ncontact.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/contacts/1 -d \'{\\"contact\\":{\\"last_name\\":\\"Rogers\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the contact gets updated successfully.\\n\\nUpdates the specified contact by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the contact creation call.HTTP RequestPUT https://api.tradegecko.com/contacts/{RESOURCE_ID}" }, { "id": "delete-a-contact", "title": "Delete a contact", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncontact = gecko.Contact.find(1).\\ncontact.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/contacts/1\\n\\nResponse\\n\\nReturns 204 status when the contact gets deleted successfully.\\n\\nPermanently deletes a contact. It cannot be undone. This contact is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/contacts/{RESOURCE_ID}/" }, { "id": "currency", "title": "Currency", "body": "This is an object representing a currency." }, { "id": "the-currency-object", "title": "The Currency object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\ndelimiter\\nString\\n\\n\\n\\n\\nformat\\nString\\nUses %n (number) and %u (unit). e.g. (%u%n would appear as \'$12\')\\n\\n\\n\\niso\\nString\\nThree-character currency code\\n\\n\\n\\nname\\nString\\n\\n\\n\\n\\nprecision\\nString\\n\\n\\n\\n\\nrate\\nString\\nExchange rate based on account\'s base currency\\n\\n\\n\\nseparator\\nString\\n\\n\\n\\n\\nsymbol\\nString\\n\\n\\n\\n" }, { "id": "list-all-currencies", "title": "List all currencies", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Currency.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/currencies/\\n{\\n  \\"currencies\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n    \\"delimiter\\": \\",\\",\\n    \\"format\\": \\"%u%n\\",\\n    \\"iso\\": \\"NZD\\",\\n    \\"name\\": \\"New Zealand Dollars\\",\\n    \\"precision\\": 2,\\n    \\"rate\\": \\"1.1\\",\\n    \\"separator\\": \\".\\",\\n    \\"symbol\\": \\"$\\",\\n    \\"status\\": \\"active\\",\\n    \\"subunit\\": 100\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n    \\"delimiter\\": \\",\\",\\n    \\"format\\": \\"%u%n\\",\\n    \\"iso\\": \\"SGD\\",\\n    \\"name\\": \\"Singaporean Dollars\\",\\n    \\"precision\\": 2,\\n    \\"rate\\": \\"1.0\\",\\n    \\"separator\\": \\".\\",\\n    \\"symbol\\": \\"$\\",\\n    \\"status\\": \\"active\\",\\n    \\"subunit\\": 100\\n  }\\n]\\n}\\nReturns a list of currencies you\u2019ve previously created. The currencies are returned in sorted order, with the most recent currencies appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of currency IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\nHTTP Request:GET  https://api.tradegecko.com/currencies" }, { "id": "create-a-new-currency", "title": "Create a new currency", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncurrency = gecko.Currency.build({:iso=>\\"USD\\", :precision=>4, :format=>\\"%n%u\\"})\\ncurrency.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/currencies/ -d \'{\\"currency\\":{\\"iso\\":\\"USD\\",\\"precision\\":4,\\"format\\":\\"%n%u\\"}\'}\\n{\\n  \\"currency\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n  \\"delimiter\\": \\",\\",\\n  \\"format\\": \\"%u%n\\",\\n  \\"iso\\": \\"NZD\\",\\n  \\"name\\": \\"New Zealand Dollars\\",\\n  \\"precision\\": 2,\\n  \\"rate\\": \\"1.1\\",\\n  \\"separator\\": \\".\\",\\n  \\"symbol\\": \\"$\\",\\n  \\"status\\": \\"active\\",\\n  \\"subunit\\": 100\\n}\\n}\\nCreates a new currency object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ndelimiter\\nString\\n\\n\\n\\n\\nformat\\nString\\nUses %n (number) and %u (unit). e.g. (%u%n would appear as \'$12\')\\n\\n\\n\\niso\\nString\\nThree-character currency code\\ntrue\\n\\n\\nname\\nString\\n\\n\\n\\n\\nprecision\\nString\\n\\n\\n\\n\\nrate\\nString\\nExchange rate based on account\'s base currency\\n\\n\\n\\nseparator\\nString\\n\\n\\n\\n\\nsymbol\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/currencies/" }, { "id": "retrieve-a-particular-currency", "title": "Retrieve a particular currency", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Currency.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/currencies/1\\n{\\n  \\"currency\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:23.947Z\\",\\n  \\"delimiter\\": \\",\\",\\n  \\"format\\": \\"%u%n\\",\\n  \\"iso\\": \\"NZD\\",\\n  \\"name\\": \\"New Zealand Dollars\\",\\n  \\"precision\\": 2,\\n  \\"rate\\": \\"1.1\\",\\n  \\"separator\\": \\".\\",\\n  \\"symbol\\": \\"$\\",\\n  \\"status\\": \\"active\\",\\n  \\"subunit\\": 100\\n}\\n}\\nRetrieves the details of an existing currency. You need only supply the unique currency identifier that was returned upon currency creation.HTTP RequestGET https://api.tradegecko.com/currencies/{RESOURCE_ID}" }, { "id": "update-a-currency", "title": "Update a currency", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncurrency = gecko.Currency.find(1)\\ncurrency.attributes = {\\n  rate: \\"12.0\\",\\n}\\ncurrency.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/currencies/1 -d \'{\\"currency\\":{\\"separator\\":\\".\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the currency gets updated successfully.\\n\\nUpdates the specified currency by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the currency creation call.HTTP RequestPUT https://api.tradegecko.com/currencies/{RESOURCE_ID}" }, { "id": "delete-a-currency", "title": "Delete a currency", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ncurrency = gecko.Currency.find(1).\\ncurrency.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/currencies/1\\n\\nResponse\\n\\nReturns 204 status when the currency gets deleted successfully.\\n\\nPermanently deletes a currency. It cannot be undone. This currency is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/currencies/{RESOURCE_ID}/" }, { "id": "fulfillment", "title": "Fulfillment", "body": "This is an object representing a fulfillment." }, { "id": "the-fulfillment-object", "title": "The Fulfillment object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the fulfillment was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the fulfillment was last updated.\\ntrue\\n\\n\\norder_id\\nInteger\\nThe order to which the fulfillment belongs.\\n\\n\\n\\nshipping_address_id\\nInteger\\nThe shipping address for the fulfillment.\\n\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the fulfillment.\\n\\n\\n\\nstock_location_id\\nInteger\\nThe stock location where stock will be withdrawn from.\\n\\n\\n\\ndelivery_type\\nString\\nMode of delivery.\\n\\n\\n\\nexchange_rate\\nString\\nCurrency exchange_rate at time of creation.\\n\\n\\n\\nnotes\\nString\\nAdditional notes.\\n\\n\\n\\npacked_at\\nString\\nTimestamp when fulfillment is packed.\\n\\n\\n\\nreceived_at\\nString\\nTimestamp when fulfillment is received.\\n\\n\\n\\nservice\\nString\\nDictates the service where this fulfillment was handled.\\n\\n\\n\\nshipped_at\\nString\\nTimestamp when fulfillment is shipped.\\n\\n\\n\\nstatus\\nString\\nOne of packed or fulfilled. Will update to deleted or void if deleted, respectively.\\n\\n\\n\\ntracking_company\\nString\\nService that is providing fulfillment.\\n\\n\\n\\ntracking_number\\nString\\nTracking number provided by tracking company.\\n\\n\\n\\ntracking_url\\nString\\nLink to tracking info.\\n\\n\\n\\norder_number\\nString\\nOrder Number of associated order.\\ntrue\\n\\n\\ncompany_id\\nInteger\\nCompany of associated order.\\ntrue\\n\\n\\nfulfillment_line_item_ids\\nArray\\nAn array of IDs of the fulfillment\'s line items.\\ntrue\\n\\n" }, { "id": "list-all-fulfillments", "title": "List all fulfillments", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Fulfillment.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillments/\\n{\\n  \\"fulfillments\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n    \\"order_id\\": 2,\\n    \\"shipping_address_id\\": 1,\\n    \\"billing_address_id\\": 1,\\n    \\"stock_location_id\\": 1,\\n    \\"delivery_type\\": null,\\n    \\"exchange_rate\\": \\"1.0\\",\\n    \\"notes\\": null,\\n    \\"packed_at\\": \\"2015-11-02\\",\\n    \\"receipt\\": {\\n    },\\n    \\"received_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n    \\"service\\": null,\\n    \\"shipped_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n    \\"status\\": \\"packed\\",\\n    \\"tracking_company\\": null,\\n    \\"tracking_number\\": null,\\n    \\"tracking_url\\": null,\\n    \\"order_number\\": \\"SO0002\\",\\n    \\"company_id\\": 1,\\n    \\"fulfillment_line_item_ids\\": [\\n      3,\\n      2,\\n      1\\n    ]\\n  }\\n]\\n}\\nReturns a list of fulfillments you\u2019ve previously created. The fulfillments are returned in sorted order, with the most recent fulfillments appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of fulfillment IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\norder_id\\n\\n\\n\\nshipping_address_id\\n\\n\\n\\nbilling_address_id\\n\\n\\n\\nstock_location_id\\n\\n\\n\\nreceipt\\nUsed by Shopify\\n\\n\\nstatus\\nPossible options: packed, or fulfilled, void, deleted\\n\\n\\ncompany_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/fulfillments" }, { "id": "create-a-new-fulfillment", "title": "Create a new fulfillment", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment = gecko.Fulfillment.build({:order_id=>1, :packed_at=>\\"Time.now\\", :billing_address_id=>1, :shipping_address_id=>1, :fulfillment_line_items=>[{:order_line_item_id=>1}, {:order_line_item_id=>2}]})\\nfulfillment.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillments/ -d \'{\\"fulfillment\\":{\\"order_id\\":1,\\"packed_at\\":\\"Time.now\\",\\"billing_address_id\\":1,\\"shipping_address_id\\":1,\\"fulfillment_line_items\\":[{\\"order_line_item_id\\":1},{\\"order_line_item_id\\":2}]}\'}\\n{\\n  \\"fulfillment\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n  \\"order_id\\": 2,\\n  \\"shipping_address_id\\": 1,\\n  \\"billing_address_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"delivery_type\\": null,\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"notes\\": null,\\n  \\"packed_at\\": \\"2015-11-02\\",\\n  \\"receipt\\": {\\n  },\\n  \\"received_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n  \\"service\\": null,\\n  \\"shipped_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n  \\"status\\": \\"packed\\",\\n  \\"tracking_company\\": null,\\n  \\"tracking_number\\": null,\\n  \\"tracking_url\\": null,\\n  \\"order_number\\": \\"SO0002\\",\\n  \\"company_id\\": 1,\\n  \\"fulfillment_line_item_ids\\": [\\n    3,\\n    2,\\n    1\\n  ]\\n}\\n}\\nCreates a new fulfillment object.\\nThis endpoint also accepts embedded fulfillment_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the fulfillment belongs.\\ntrue\\n\\n\\nshipping_address_id\\nInteger\\nThe shipping address for the fulfillment.\\n\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the fulfillment.\\n\\n\\n\\nstock_location_id\\nInteger\\nThe stock location where stock will be withdrawn from.\\n\\n\\n\\ndelivery_type\\nString\\nMode of delivery.\\n\\n\\n\\nexchange_rate\\nString\\nCurrency exchange_rate at time of creation.\\n\\n\\n\\nnotes\\nString\\nAdditional notes.\\n\\n\\n\\npacked_at\\nString\\nTimestamp when fulfillment is packed.\\n\\n\\n\\nreceived_at\\nString\\nTimestamp when fulfillment is received.\\n\\n\\n\\nservice\\nString\\nDictates the service where this fulfillment was handled.\\n\\n\\n\\nshipped_at\\nString\\nTimestamp when fulfillment is shipped.\\n\\n\\n\\nstatus\\nString\\nOne of packed or fulfilled. Will update to deleted or void if deleted, respectively.\\n\\n\\n\\ntracking_company\\nString\\nService that is providing fulfillment.\\n\\n\\n\\ntracking_number\\nString\\nTracking number provided by tracking company.\\n\\n\\n\\ntracking_url\\nString\\nLink to tracking info.\\n\\n\\nFulfillmentLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nfulfillment_id\\nInteger\\nThe fulfillment to which the fulfillment_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_line_item belongs.\\ntrue\\n\\n\\nbase_price\\nString\\nSales value of the variant in base currency at fulfillment shipped_at date.\\n\\n\\n\\nposition\\nInteger\\nDisplay order.\\n\\n\\n\\nquantity\\nString\\nQuantity of the variant fulfilled.\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/fulfillments/" }, { "id": "retrieve-a-particular-fulfillment", "title": "Retrieve a particular fulfillment", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Fulfillment.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillments/1\\n{\\n  \\"fulfillment\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.524Z\\",\\n  \\"order_id\\": 2,\\n  \\"shipping_address_id\\": 1,\\n  \\"billing_address_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"delivery_type\\": null,\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"notes\\": null,\\n  \\"packed_at\\": \\"2015-11-02\\",\\n  \\"receipt\\": {\\n  },\\n  \\"received_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n  \\"service\\": null,\\n  \\"shipped_at\\": \\"2015-11-02T00:00:00.000Z\\",\\n  \\"status\\": \\"packed\\",\\n  \\"tracking_company\\": null,\\n  \\"tracking_number\\": null,\\n  \\"tracking_url\\": null,\\n  \\"order_number\\": \\"SO0002\\",\\n  \\"company_id\\": 1,\\n  \\"fulfillment_line_item_ids\\": [\\n    3,\\n    2,\\n    1\\n  ]\\n}\\n}\\nRetrieves the details of an existing fulfillment. You need only supply the unique fulfillment identifier that was returned upon fulfillment creation.HTTP RequestGET https://api.tradegecko.com/fulfillments/{RESOURCE_ID}" }, { "id": "update-a-fulfillment", "title": "Update a fulfillment", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment = gecko.Fulfillment.find(1)\\nfulfillment.attributes = {\\n  rate: \\"12.0\\",\\n}\\nfulfillment.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillments/1 -d \'{\\"fulfillment\\":{\\"tracking_company\\":\\"GeckoShip\\",\\"tracking_number\\":\\"123TrackMe\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the fulfillment gets updated successfully.\\n\\nUpdates the specified fulfillment by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the fulfillment creation call.HTTP RequestPUT https://api.tradegecko.com/fulfillments/{RESOURCE_ID}" }, { "id": "delete-a-fulfillment", "title": "Delete a fulfillment", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment = gecko.Fulfillment.find(1).\\nfulfillment.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillments/1\\n\\nResponse\\n\\nReturns 204 status when the fulfillment gets deleted successfully.\\n\\nPermanently deletes a fulfillment. It cannot be undone. This fulfillment is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/fulfillments/{RESOURCE_ID}/" }, { "id": "fulfillmentlineitem", "title": "FulfillmentLineItem", "body": "This is an object representing a fulfillment_line_item of a fulfillment. Fulfillments can\\n  have multiple fulfillment_line_items but a fulfillment_line_item object belongs to only one\\n  Fulfillment." }, { "id": "the-fulfillmentlineitem-object", "title": "The FulfillmentLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nfulfillment_id\\nInteger\\nThe fulfillment to which the fulfillment_line_item belongs.\\n\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_line_item belongs.\\n\\n\\n\\nbase_price\\nString\\nSales value of the variant in base currency at fulfillment shipped_at date.\\ntrue\\n\\n\\nposition\\nInteger\\nDisplay order.\\n\\n\\n\\nquantity\\nString\\nQuantity of the variant fulfilled.\\n\\n\\n" }, { "id": "list-all-fulfillment_line_items", "title": "List all fulfillment_line_items", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.FulfillmentLineItem.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_line_items/\\n{\\n  \\"fulfillment_line_items\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"fulfillment_id\\": 1,\\n    \\"order_line_item_id\\": 4,\\n    \\"base_price\\": null,\\n    \\"position\\": 1,\\n    \\"quantity\\": \\"1.0\\"\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.533Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.533Z\\",\\n    \\"fulfillment_id\\": 1,\\n    \\"order_line_item_id\\": 5,\\n    \\"base_price\\": null,\\n    \\"position\\": 2,\\n    \\"quantity\\": \\"2.0\\"\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.531Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.531Z\\",\\n    \\"fulfillment_id\\": 1,\\n    \\"order_line_item_id\\": 6,\\n    \\"base_price\\": null,\\n    \\"position\\": 3,\\n    \\"quantity\\": \\"2.0\\"\\n  }\\n]\\n}\\nReturns a list of fulfillment_line_items you\u2019ve previously created. The fulfillment_line_items are returned in sorted order, with the most recent fulfillment_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of fulfillment_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nfulfillment_id\\nFilter fulfillment_line_items by fulfillment\\n\\n\\norder_line_item_id\\nFilter fulfillment_line_items by order_line_item\\n\\n\\nbase_price\\n\\n\\n\\nposition\\n\\n\\n\\nquantity\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/fulfillment_line_items" }, { "id": "create-a-new-fulfillment_line_item", "title": "Create a new fulfillment_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_line_item = gecko.FulfillmentLineItem.build({:fulfillment_id=>1, :order_line_item_id=>1, :quantity=>\\"10.0\\", :position=>1})\\nfulfillment_line_item.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_line_items/ -d \'{\\"fulfillment_line_item\\":{\\"fulfillment_id\\":1,\\"order_line_item_id\\":1,\\"quantity\\":\\"10.0\\",\\"position\\":1}\'}\\n{\\n  \\"fulfillment_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"fulfillment_id\\": 1,\\n  \\"order_line_item_id\\": 4,\\n  \\"base_price\\": null,\\n  \\"position\\": 1,\\n  \\"quantity\\": \\"1.0\\"\\n}\\n}\\nCreates a new fulfillment_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nfulfillment_id\\nInteger\\nThe fulfillment to which the fulfillment_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_line_item belongs.\\ntrue\\n\\n\\nbase_price\\nString\\nSales value of the variant in base currency at fulfillment shipped_at date.\\n\\n\\n\\nposition\\nInteger\\nDisplay order.\\n\\n\\n\\nquantity\\nString\\nQuantity of the variant fulfilled.\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/fulfillment_line_items/" }, { "id": "retrieve-a-particular-fulfillment_line_item", "title": "Retrieve a particular fulfillment_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.FulfillmentLineItem.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_line_items/1\\n{\\n  \\"fulfillment_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"fulfillment_id\\": 1,\\n  \\"order_line_item_id\\": 4,\\n  \\"base_price\\": null,\\n  \\"position\\": 1,\\n  \\"quantity\\": \\"1.0\\"\\n}\\n}\\nRetrieves the details of an existing fulfillment_line_item. You need only supply the unique fulfillment_line_item identifier that was returned upon fulfillment_line_item creation.HTTP RequestGET https://api.tradegecko.com/fulfillment_line_items/{RESOURCE_ID}" }, { "id": "update-a-fulfillment_line_item", "title": "Update a fulfillment_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_line_item = gecko.FulfillmentLineItem.find(1)\\nfulfillment_line_item.attributes = {\\n  rate: \\"12.0\\",\\n}\\nfulfillment_line_item.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_line_items/1 -d \'{\\"fulfillment_line_item\\":{\\"quantity\\":\\"22.0\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_line_item gets updated successfully.\\n\\nUpdates the specified fulfillment_line_item by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the fulfillment_line_item creation call.HTTP RequestPUT https://api.tradegecko.com/fulfillment_line_items/{RESOURCE_ID}" }, { "id": "delete-a-fulfillment_line_item", "title": "Delete a fulfillment_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_line_item = gecko.FulfillmentLineItem.find(1).\\nfulfillment_line_item.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_line_item gets deleted successfully.\\n\\nPermanently deletes a fulfillment_line_item. It cannot be undone. This fulfillment_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/fulfillment_line_items/{RESOURCE_ID}/" }, { "id": "fulfillmentreturn", "title": "FulfillmentReturn", "body": "This is an object representing a fulfillment_return of an order. Orders can\\n  have multiple fulfillment_returns but a fulfillment_return object belongs to only one\\n  Order." }, { "id": "the-fulfillmentreturn-object", "title": "The FulfillmentReturn object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the fulfillment_return was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the fulfillment_return was last updated.\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'returning\', \'received\', \'void\' or \'deleted\'\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the fulfillment_return belongs.\\n\\n\\n\\nlocation_id\\nInteger\\nThe location to which the fulfillment_return belongs.\\n\\n\\n\\ntracking_number\\nString\\nTracking number of fulfillment_return.\\n\\n\\n\\ntracking_url\\nString\\nTracking url of fulfillment_return.\\n\\n\\n\\ntracking_company\\nString\\nTracking company used for fulfillment_return.\\n\\n\\n\\ndelivery_type\\nString\\nMode of delivery.\\n\\n\\n\\nnotes\\nString\\nAdditional notes.\\n\\n\\n\\nexchange_rate\\nString\\nCurrency exchange_rate at time of creation.\\n\\n\\n\\nreceived_at\\nString\\nTimestamp when fulfillment_return is received.\\n\\n\\n\\ncredit_note_number\\nString\\nAfter a fulfillment return is created, a credit note with this number is created for accounting purposes.\\n\\n\\n\\ncompany_id\\nInteger\\nCompany of associated order.\\ntrue\\n\\n" }, { "id": "list-all-fulfillment_returns", "title": "List all fulfillment_returns", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.FulfillmentReturn.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_returns/\\n{\\n  \\"fulfillment_returns\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"order_id\\": 1,\\n    \\"location_id\\": 1,\\n    \\"delivery_type\\": null,\\n    \\"exchange_rate\\": \\"1.0\\",\\n    \\"notes\\": null,\\n    \\"received_at\\": null,\\n    \\"tracking_company\\": null,\\n    \\"tracking_number\\": null,\\n    \\"tracking_url\\": null,\\n    \\"status\\": \\"returning\\",\\n    \\"credit_note_number\\": \\"CN0001\\",\\n    \\"order_number\\": \\"SO0001\\",\\n    \\"company_id\\": 1\\n  }\\n]\\n}\\nReturns a list of fulfillment_returns you\u2019ve previously created. The fulfillment_returns are returned in sorted order, with the most recent fulfillment_returns appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of fulfillment_return IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\norder_id\\n\\n\\n\\nlocation_id\\n\\n\\n\\ncompany_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/fulfillment_returns" }, { "id": "create-a-new-fulfillment_return", "title": "Create a new fulfillment_return", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return = gecko.FulfillmentReturn.build({:order_id=>1, :fulfillment_return_line_items=>[{:order_line_item_id=>1, :quantity=>1}, {:order_line_item_id=>2, :quantity=>1}]})\\nfulfillment_return.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_returns/ -d \'{\\"fulfillment_return\\":{\\"order_id\\":1,\\"fulfillment_return_line_items\\":[{\\"order_line_item_id\\":1,\\"quantity\\":1},{\\"order_line_item_id\\":2,\\"quantity\\":1}]}\'}\\n{\\n  \\"fulfillment_return\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"order_id\\": 1,\\n  \\"location_id\\": 1,\\n  \\"delivery_type\\": null,\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"notes\\": null,\\n  \\"received_at\\": null,\\n  \\"tracking_company\\": null,\\n  \\"tracking_number\\": null,\\n  \\"tracking_url\\": null,\\n  \\"status\\": \\"returning\\",\\n  \\"credit_note_number\\": \\"CN0001\\",\\n  \\"order_number\\": \\"SO0001\\",\\n  \\"company_id\\": 1\\n}\\n}\\nCreates a new fulfillment_return object.\\nThis endpoint also accepts embedded fulfillment_return_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the fulfillment_return belongs.\\ntrue\\n\\n\\nlocation_id\\nInteger\\nThe location to which the fulfillment_return belongs.\\n\\n\\n\\ntracking_number\\nString\\nTracking number of fulfillment_return.\\n\\n\\n\\ntracking_url\\nString\\nTracking url of fulfillment_return.\\n\\n\\n\\ntracking_company\\nString\\nTracking company used for fulfillment_return.\\n\\n\\n\\ndelivery_type\\nString\\nMode of delivery.\\n\\n\\n\\nnotes\\nString\\nAdditional notes.\\n\\n\\n\\nexchange_rate\\nString\\nCurrency exchange_rate at time of creation.\\n\\n\\n\\nreceived_at\\nString\\nTimestamp when fulfillment_return is received.\\n\\n\\n\\ncredit_note_number\\nString\\nAfter a fulfillment return is created, a credit note with this number is created for accounting purposes.\\n\\n\\nFulfillmentReturnLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nfulfillment_return_id\\nInteger\\nThe fulfillment_return to which the fulfillment_return_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_return_line_item belongs.\\ntrue\\n\\n\\nbase_price\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\ntrue\\n\\n\\nledger_account_id\\nInteger\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/fulfillment_returns/" }, { "id": "retrieve-a-particular-fulfillment_return", "title": "Retrieve a particular fulfillment_return", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.FulfillmentReturn.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_returns/1\\n{\\n  \\"fulfillment_return\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"order_id\\": 1,\\n  \\"location_id\\": 1,\\n  \\"delivery_type\\": null,\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"notes\\": null,\\n  \\"received_at\\": null,\\n  \\"tracking_company\\": null,\\n  \\"tracking_number\\": null,\\n  \\"tracking_url\\": null,\\n  \\"status\\": \\"returning\\",\\n  \\"credit_note_number\\": \\"CN0001\\",\\n  \\"order_number\\": \\"SO0001\\",\\n  \\"company_id\\": 1\\n}\\n}\\nRetrieves the details of an existing fulfillment_return. You need only supply the unique fulfillment_return identifier that was returned upon fulfillment_return creation.HTTP RequestGET https://api.tradegecko.com/fulfillment_returns/{RESOURCE_ID}" }, { "id": "update-a-fulfillment_return", "title": "Update a fulfillment_return", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return = gecko.FulfillmentReturn.find(1)\\nfulfillment_return.attributes = {\\n  rate: \\"12.0\\",\\n}\\nfulfillment_return.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_returns/1 -d \'{\\"fulfillment_return\\":{\\"location_id\\":2}}\'\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_return gets updated successfully.\\n\\nUpdates the specified fulfillment_return by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the fulfillment_return creation call.HTTP RequestPUT https://api.tradegecko.com/fulfillment_returns/{RESOURCE_ID}" }, { "id": "delete-a-fulfillment_return", "title": "Delete a fulfillment_return", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return = gecko.FulfillmentReturn.find(1).\\nfulfillment_return.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_returns/1\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_return gets deleted successfully.\\n\\nPermanently deletes a fulfillment_return. It cannot be undone. This fulfillment_return is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/fulfillment_returns/{RESOURCE_ID}/" }, { "id": "fulfillmentreturnlineitem", "title": "FulfillmentReturnLineItem", "body": "This is an object representing a fulfillment_return_line_item of a fulfillment_return. Fulfillment_returns can\\n  have multiple fulfillment_return_line_items but a fulfillment_return_line_item object belongs to only one\\n  Fulfillment_return." }, { "id": "the-fulfillmentreturnlineitem-object", "title": "The FulfillmentReturnLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and time when the fulfillment_return_line_item was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and time when the fulfillment_return_line_item was created.\\ntrue\\n\\n\\nfulfillment_return_id\\nInteger\\nThe fulfillment_return to which the fulfillment_return_line_item belongs.\\n\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_return_line_item belongs.\\n\\n\\n\\nbase_price\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nledger_account_id\\nInteger\\n\\n\\n\\n" }, { "id": "list-all-fulfillment_return_line_items", "title": "List all fulfillment_return_line_items", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.FulfillmentReturnLineItem.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_return_line_items/\\n{\\n  \\"fulfillment_return_line_items\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n    \\"fulfillment_return_id\\": 1,\\n    \\"order_line_item_id\\": 1,\\n    \\"base_price\\": null,\\n    \\"position\\": 0,\\n    \\"quantity\\": \\"1.0\\",\\n    \\"ledger_account_id\\": null,\\n    \\"stock_trail_ids\\": [\\n\\n]\\n  }\\n]\\n}\\nReturns a list of fulfillment_return_line_items you\u2019ve previously created. The fulfillment_return_line_items are returned in sorted order, with the most recent fulfillment_return_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of fulfillment_return_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nfulfillment_return_id\\nFilter fulfillment_return_line_items by fulfillment_return\\n\\n\\norder_line_item_id\\nFilter fulfillment_return_line_items by order_line_item\\n\\n\\nledger_account_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/fulfillment_return_line_items" }, { "id": "create-a-new-fulfillment_return_line_item", "title": "Create a new fulfillment_return_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return_line_item = gecko.FulfillmentReturnLineItem.build({:fulfillment_return_id=>1, :order_line_item_id=>1, :quantity=>\\"10.0\\"})\\nfulfillment_return_line_item.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_return_line_items/ -d \'{\\"fulfillment_return_line_item\\":{\\"fulfillment_return_id\\":1,\\"order_line_item_id\\":1,\\"quantity\\":\\"10.0\\"}\'}\\n{\\n  \\"fulfillment_return_line_item\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"fulfillment_return_id\\": 1,\\n  \\"order_line_item_id\\": 1,\\n  \\"base_price\\": null,\\n  \\"position\\": 0,\\n  \\"quantity\\": \\"1.0\\",\\n  \\"ledger_account_id\\": null,\\n  \\"stock_trail_ids\\": [\\n\\n]\\n}\\n}\\nCreates a new fulfillment_return_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nfulfillment_return_id\\nInteger\\nThe fulfillment_return to which the fulfillment_return_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the fulfillment_return_line_item belongs.\\ntrue\\n\\n\\nbase_price\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\ntrue\\n\\n\\nledger_account_id\\nInteger\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/fulfillment_return_line_items/" }, { "id": "retrieve-a-particular-fulfillment_return_line_item", "title": "Retrieve a particular fulfillment_return_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.FulfillmentReturnLineItem.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_return_line_items/1\\n{\\n  \\"fulfillment_return_line_item\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.535Z\\",\\n  \\"fulfillment_return_id\\": 1,\\n  \\"order_line_item_id\\": 1,\\n  \\"base_price\\": null,\\n  \\"position\\": 0,\\n  \\"quantity\\": \\"1.0\\",\\n  \\"ledger_account_id\\": null,\\n  \\"stock_trail_ids\\": [\\n\\n]\\n}\\n}\\nRetrieves the details of an existing fulfillment_return_line_item. You need only supply the unique fulfillment_return_line_item identifier that was returned upon fulfillment_return_line_item creation.HTTP RequestGET https://api.tradegecko.com/fulfillment_return_line_items/{RESOURCE_ID}" }, { "id": "update-a-fulfillment_return_line_item", "title": "Update a fulfillment_return_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return_line_item = gecko.FulfillmentReturnLineItem.find(1)\\nfulfillment_return_line_item.attributes = {\\n  rate: \\"12.0\\",\\n}\\nfulfillment_return_line_item.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_return_line_items/1 -d \'{\\"fulfillment_return_line_item\\":{\\"quantity\\":\\"22.0\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_return_line_item gets updated successfully.\\n\\nUpdates the specified fulfillment_return_line_item by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the fulfillment_return_line_item creation call.HTTP RequestPUT https://api.tradegecko.com/fulfillment_return_line_items/{RESOURCE_ID}" }, { "id": "delete-a-fulfillment_return_line_item", "title": "Delete a fulfillment_return_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nfulfillment_return_line_item = gecko.FulfillmentReturnLineItem.find(1).\\nfulfillment_return_line_item.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/fulfillment_return_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the fulfillment_return_line_item gets deleted successfully.\\n\\nPermanently deletes a fulfillment_return_line_item. It cannot be undone. This fulfillment_return_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/fulfillment_return_line_items/{RESOURCE_ID}/" }, { "id": "image", "title": "Image", "body": "This is an object representing an image of a variant. Variants can\\n  have multiple images but an image object belongs to only one\\n  Variant." }, { "id": "the-image-object", "title": "The Image object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\nproduct_id\\nInteger\\nThe product to which the image belongs.\\n\\n\\n\\nvariant_id  deprecated\\nInteger\\nThe variant to which the image belongs.\\n\\n\\n\\nvariant_ids\\nArray\\nThe variants to which the image belongs.\\n\\n\\n\\nuploader_id\\nInteger\\nIdentifier of the creating user or Integration (e.g. \'Shopify\')\\ntrue\\n\\n\\nname\\nString\\nName of the file if changed\\n\\n\\n\\nposition\\nInteger\\n\\ntrue\\n\\n\\nbase_path\\nString\\nBase URL where image has been uploaded\\ntrue\\n\\n\\nfile_name\\nString\\nParsed name of the file\\ntrue\\n\\n\\nversions\\nString\\nAn array of image sizes\\ntrue\\n\\n\\nimage_processing\\nString\\nTells whether image sizes have been generated\\ntrue\\n\\n\\nurl\\nString\\nURL of image for fetching\\n\\n\\n" }, { "id": "list-all-images", "title": "List all images", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Image.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/images/\\n{\\n  \\"images\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"product_id\\": 1,\\n    \\"variant_id\\": 1,\\n    \\"variant_ids\\": [\\n      1,\\n      2\\n    ],\\n    \\"uploader_id\\": 1,\\n    \\"name\\": \\"\\",\\n    \\"position\\": 1,\\n    \\"base_path\\": \\"https://tradegecko-development-images.s3.amazonaws.com/uploads/variant_image/image/2231\\",\\n    \\"file_name\\": \\"1xUh3yT8SN6SjK6l1WXw_photo_large.png\\",\\n    \\"versions\\": [\\n      \\"thumbnail\\",\\n      \\"medium\\"\\n    ]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"product_id\\": 1,\\n    \\"variant_id\\": 1,\\n    \\"variant_ids\\": [\\n      1,\\n      2\\n    ],\\n    \\"uploader_id\\": 1,\\n    \\"name\\": null,\\n    \\"position\\": 1,\\n    \\"base_path\\": \\"https://tradegecko-development-images.s3.amazonaws.com/uploads/variant_image/image/2229\\",\\n    \\"file_name\\": \\"shw005a_4.jpg\\",\\n    \\"versions\\": [\\n      \\"thumbnail\\",\\n      \\"medium\\"\\n    ],\\n    \\"image_processing\\": true\\n  }\\n]\\n}\\nReturns a list of images you\u2019ve previously created. The images are returned in sorted order, with the most recent images appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of image IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nproduct_id\\nFilter images by product\\n\\n\\nvariant_id\\nFilter images by variant\\n\\n\\nvariant_ids\\nFilter images by variant\\n\\n\\nuploader_id\\nFilter images by uploader\\n\\nHTTP Request:GET  https://api.tradegecko.com/images" }, { "id": "create-a-new-image", "title": "Create a new image", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nimage = gecko.Image.build({:product_id=>1, :variant_ids=>[1, 2], :url=>\\"http://www.thisismyimage.com/image.png\\"})\\nimage.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/images/ -d \'{\\"image\\":{\\"product_id\\":1,\\"variant_ids\\":[1,2],\\"url\\":\\"http://www.thisismyimage.com/image.png\\"}\'}\\n{\\n  \\"image\\": {\\n  \\"id\\": 2,\\n  \\"product_id\\": 1,\\n  \\"variant_id\\": 1,\\n  \\"variant_ids\\": [\\n    1,\\n    2\\n  ],\\n  \\"uploader_id\\": 1,\\n  \\"name\\": \\"\\",\\n  \\"position\\": 1,\\n  \\"base_path\\": \\"https://tradegecko-development-images.s3.amazonaws.com/uploads/variant_image/image/2231\\",\\n  \\"file_name\\": \\"1xUh3yT8SN6SjK6l1WXw_photo_large.png\\",\\n  \\"versions\\": [\\n    \\"thumbnail\\",\\n    \\"medium\\"\\n  ]\\n}\\n}\\nCreates a new image object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nproduct_id\\nInteger\\nThe product to which the image belongs.\\ntrue\\n\\n\\nvariant_id deprecated\\nInteger\\nThe variant to which the image belongs.\\n\\n\\n\\nvariant_ids\\nArray\\nThe variants to which the image belongs.\\ntrue\\n\\n\\nurl\\nString\\nURL of image for fetching\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/images/" }, { "id": "retrieve-a-particular-image", "title": "Retrieve a particular image", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Image.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/images/1\\n{\\n  \\"image\\": {\\n  \\"id\\": 2,\\n  \\"product_id\\": 1,\\n  \\"variant_id\\": 1,\\n  \\"variant_ids\\": [\\n    1,\\n    2\\n  ],\\n  \\"uploader_id\\": 1,\\n  \\"name\\": \\"\\",\\n  \\"position\\": 1,\\n  \\"base_path\\": \\"https://tradegecko-development-images.s3.amazonaws.com/uploads/variant_image/image/2231\\",\\n  \\"file_name\\": \\"1xUh3yT8SN6SjK6l1WXw_photo_large.png\\",\\n  \\"versions\\": [\\n    \\"thumbnail\\",\\n    \\"medium\\"\\n  ]\\n}\\n}\\nRetrieves the details of an existing image. You need only supply the unique image identifier that was returned upon image creation.HTTP RequestGET https://api.tradegecko.com/images/{RESOURCE_ID}" }, { "id": "delete-an-image", "title": "Delete an image", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nimage = gecko.Image.find(1).\\nimage.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/images/1\\n\\nResponse\\n\\nReturns 204 status when the image gets deleted successfully.\\n\\nPermanently deletes an image. It cannot be undone. This image is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/images/{RESOURCE_ID}/" }, { "id": "invoice", "title": "Invoice", "body": "This is an object representing an invoice." }, { "id": "the-invoice-object", "title": "The Invoice object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\norder_id\\nInteger\\nThe order to which the invoice belongs.\\n\\n\\n\\nshipping_address_id\\nInteger\\nThe shipping address for the invoice.\\n\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the invoice.\\n\\n\\n\\npayment_term_id\\nInteger\\n\\n\\n\\n\\ndue_at\\nString\\n\\n\\n\\n\\nexchange_rate\\nString\\n\\n\\n\\n\\ninvoice_number\\nString\\n\\n\\n\\n\\ninvoiced_at\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\ncached_total\\nString\\n\\ntrue\\n\\n\\npayment_status\\nString\\n\\ntrue\\n\\n\\norder_number\\nString\\n\\ntrue\\n\\n\\ncompany_id\\nInteger\\n\\ntrue\\n\\n\\ncurrency_id\\nInteger\\n\\ntrue\\n\\n\\ninvoice_line_item_ids\\nArray\\n\\ntrue\\n\\n\\npayment_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-invoices", "title": "List all invoices", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Invoice.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoices/\\n{\\n  \\"invoices\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n    \\"document_url\\": \\"http://localhost:3000/d/-34nGV_4zRUNysT7LE3mAaUN\\",\\n    \\"order_id\\": 2,\\n    \\"shipping_address_id\\": 1,\\n    \\"billing_address_id\\": 1,\\n    \\"payment_term_id\\": null,\\n    \\"due_at\\": \\"2015-11-02\\",\\n    \\"exchange_rate\\": \\"1.0\\",\\n    \\"invoice_number\\": \\"SO0002\\",\\n    \\"invoiced_at\\": \\"2015-11-02\\",\\n    \\"notes\\": null,\\n    \\"cached_total\\": \\"102.0\\",\\n    \\"payment_status\\": \\"unpaid\\",\\n    \\"order_number\\": \\"SO0002\\",\\n    \\"company_id\\": 1,\\n    \\"currency_id\\": 1,\\n    \\"status\\": \\"active\\",\\n    \\"invoice_line_item_ids\\": [\\n      {\\n        \\"quantity\\": \\"1.0\\",\\n        \\"order_line_item_id\\": 123\\n      },\\n      {\\n        \\"quantity\\": \\"1.0\\",\\n        \\"order_line_item_id\\": 456\\n      }\\n    ],\\n    \\"payment_ids\\": [\\n\\n],\\n    \\"refund_ids\\": [\\n\\n]\\n  }\\n]\\n}\\nReturns a list of invoices you\u2019ve previously created. The invoices are returned in sorted order, with the most recent invoices appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of invoice IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\norder_id\\n\\n\\n\\nshipping_address_id\\n\\n\\n\\nbilling_address_id\\n\\n\\n\\npayment_term_id\\n\\n\\n\\ninvoice_number\\n\\n\\n\\npayment_status\\n\\n\\n\\ncompany_id\\n\\n\\n\\ncurrency_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/invoices" }, { "id": "create-a-new-invoice", "title": "Create a new invoice", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice = gecko.Invoice.build({:order_id=>1, :billing_address_id=>1, :shipping_address_id=>1, :invoice_line_items=>[{:quantity=>\\"1.0\\", :order_line_item_id=>123}, {:quantity=>\\"1.0\\", :order_line_item_id=>456}]})\\ninvoice.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoices/ -d \'{\\"invoice\\":{\\"order_id\\":1,\\"billing_address_id\\":1,\\"shipping_address_id\\":1,\\"invoice_line_items\\":[{\\"quantity\\":\\"1.0\\",\\"order_line_item_id\\":123},{\\"quantity\\":\\"1.0\\",\\"order_line_item_id\\":456}]}\'}\\n{\\n  \\"invoice\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n  \\"document_url\\": \\"http://localhost:3000/d/-34nGV_4zRUNysT7LE3mAaUN\\",\\n  \\"order_id\\": 2,\\n  \\"shipping_address_id\\": 1,\\n  \\"billing_address_id\\": 1,\\n  \\"payment_term_id\\": null,\\n  \\"due_at\\": \\"2015-11-02\\",\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"invoice_number\\": \\"SO0002\\",\\n  \\"invoiced_at\\": \\"2015-11-02\\",\\n  \\"notes\\": null,\\n  \\"cached_total\\": \\"102.0\\",\\n  \\"payment_status\\": \\"unpaid\\",\\n  \\"order_number\\": \\"SO0002\\",\\n  \\"company_id\\": 1,\\n  \\"currency_id\\": 1,\\n  \\"status\\": \\"active\\",\\n  \\"invoice_line_item_ids\\": [\\n    {\\n      \\"quantity\\": \\"1.0\\",\\n      \\"order_line_item_id\\": 123\\n    },\\n    {\\n      \\"quantity\\": \\"1.0\\",\\n      \\"order_line_item_id\\": 456\\n    }\\n  ],\\n  \\"payment_ids\\": [\\n\\n],\\n  \\"refund_ids\\": [\\n\\n]\\n}\\n}\\nCreates a new invoice object.\\nThis endpoint also accepts embedded invoice_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the invoice belongs.\\ntrue\\n\\n\\nshipping_address_id\\nInteger\\nThe shipping address for the invoice.\\n\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the invoice.\\n\\n\\n\\npayment_term_id\\nInteger\\n\\n\\n\\n\\ndue_at\\nString\\n\\n\\n\\n\\nexchange_rate\\nString\\n\\n\\n\\n\\ninvoice_number\\nString\\n\\n\\n\\n\\ninvoiced_at\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\nInvoiceLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ninvoice_id\\nInteger\\nThe invoice to which the invoice_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the invoice_line_item belongs.\\ntrue\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/invoices/" }, { "id": "retrieve-a-particular-invoice", "title": "Retrieve a particular invoice", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Invoice.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoices/1\\n{\\n  \\"invoice\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.408Z\\",\\n  \\"document_url\\": \\"http://localhost:3000/d/-34nGV_4zRUNysT7LE3mAaUN\\",\\n  \\"order_id\\": 2,\\n  \\"shipping_address_id\\": 1,\\n  \\"billing_address_id\\": 1,\\n  \\"payment_term_id\\": null,\\n  \\"due_at\\": \\"2015-11-02\\",\\n  \\"exchange_rate\\": \\"1.0\\",\\n  \\"invoice_number\\": \\"SO0002\\",\\n  \\"invoiced_at\\": \\"2015-11-02\\",\\n  \\"notes\\": null,\\n  \\"cached_total\\": \\"102.0\\",\\n  \\"payment_status\\": \\"unpaid\\",\\n  \\"order_number\\": \\"SO0002\\",\\n  \\"company_id\\": 1,\\n  \\"currency_id\\": 1,\\n  \\"status\\": \\"active\\",\\n  \\"invoice_line_item_ids\\": [\\n    {\\n      \\"quantity\\": \\"1.0\\",\\n      \\"order_line_item_id\\": 123\\n    },\\n    {\\n      \\"quantity\\": \\"1.0\\",\\n      \\"order_line_item_id\\": 456\\n    }\\n  ],\\n  \\"payment_ids\\": [\\n\\n],\\n  \\"refund_ids\\": [\\n\\n]\\n}\\n}\\nRetrieves the details of an existing invoice. You need only supply the unique invoice identifier that was returned upon invoice creation.HTTP RequestGET https://api.tradegecko.com/invoices/{RESOURCE_ID}" }, { "id": "update-an-invoice", "title": "Update an invoice", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice = gecko.Invoice.find(1)\\ninvoice.attributes = {\\n  rate: \\"12.0\\",\\n}\\ninvoice.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoices/1 -d \'{\\"invoice\\":{\\"billing_address_id\\":2,\\"payment_term_id\\":1}}\'\\n\\nResponse\\n\\nReturns 204 status when the invoice gets updated successfully.\\n\\nUpdates the specified invoice by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the invoice creation call.HTTP RequestPUT https://api.tradegecko.com/invoices/{RESOURCE_ID}" }, { "id": "delete-an-invoice", "title": "Delete an invoice", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice = gecko.Invoice.find(1).\\ninvoice.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoices/1\\n\\nResponse\\n\\nReturns 204 status when the invoice gets deleted successfully.\\n\\nPermanently deletes an invoice. It cannot be undone. This invoice is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/invoices/{RESOURCE_ID}/" }, { "id": "invoicelineitem", "title": "InvoiceLineItem", "body": "This is an object representing an invoice_line_item of an invoice. Invoices can\\n  have multiple invoice_line_items but an invoice_line_item object belongs to only one\\n  Invoice." }, { "id": "the-invoicelineitem-object", "title": "The InvoiceLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\ninvoice_id\\nInteger\\nThe invoice to which the invoice_line_item belongs.\\n\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the invoice_line_item belongs.\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n" }, { "id": "list-all-invoice_line_items", "title": "List all invoice_line_items", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.InvoiceLineItem.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoice_line_items/\\n{\\n  \\"invoice_line_items\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n    \\"invoice_id\\": 1,\\n    \\"order_line_item_id\\": 4,\\n    \\"ledger_account_id\\": null,\\n    \\"position\\": 1,\\n    \\"quantity\\": \\"1.0\\"\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.424Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.424Z\\",\\n    \\"invoice_id\\": 1,\\n    \\"order_line_item_id\\": 5,\\n    \\"ledger_account_id\\": null,\\n    \\"position\\": 2,\\n    \\"quantity\\": \\"2.0\\"\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:25.420Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:25.420Z\\",\\n    \\"invoice_id\\": 1,\\n    \\"order_line_item_id\\": 6,\\n    \\"ledger_account_id\\": null,\\n    \\"position\\": 3,\\n    \\"quantity\\": \\"2.0\\"\\n  }\\n]\\n}\\nReturns a list of invoice_line_items you\u2019ve previously created. The invoice_line_items are returned in sorted order, with the most recent invoice_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of invoice_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ninvoice_id\\nFilter invoice_line_items by invoice\\n\\n\\norder_line_item_id\\nFilter invoice_line_items by order_line_item\\n\\n\\nbase_price\\nSales value of the variant in base currency at invoice shipped_at date\\n\\n\\nposition\\n\\n\\n\\nquantity\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/invoice_line_items" }, { "id": "create-a-new-invoice_line_item", "title": "Create a new invoice_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice_line_item = gecko.InvoiceLineItem.build({:invoice_id=>1, :order_line_item_id=>1, :quantity=>\\"10.0\\", :position=>1})\\ninvoice_line_item.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoice_line_items/ -d \'{\\"invoice_line_item\\":{\\"invoice_id\\":1,\\"order_line_item_id\\":1,\\"quantity\\":\\"10.0\\",\\"position\\":1}\'}\\n{\\n  \\"invoice_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n  \\"invoice_id\\": 1,\\n  \\"order_line_item_id\\": 4,\\n  \\"ledger_account_id\\": null,\\n  \\"position\\": 1,\\n  \\"quantity\\": \\"1.0\\"\\n}\\n}\\nCreates a new invoice_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ninvoice_id\\nInteger\\nThe invoice to which the invoice_line_item belongs.\\ntrue\\n\\n\\norder_line_item_id\\nInteger\\nThe order_line_item to which the invoice_line_item belongs.\\ntrue\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nquantity\\nString\\n\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/invoice_line_items/" }, { "id": "retrieve-a-particular-invoice_line_item", "title": "Retrieve a particular invoice_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.InvoiceLineItem.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoice_line_items/1\\n{\\n  \\"invoice_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:25.427Z\\",\\n  \\"invoice_id\\": 1,\\n  \\"order_line_item_id\\": 4,\\n  \\"ledger_account_id\\": null,\\n  \\"position\\": 1,\\n  \\"quantity\\": \\"1.0\\"\\n}\\n}\\nRetrieves the details of an existing invoice_line_item. You need only supply the unique invoice_line_item identifier that was returned upon invoice_line_item creation.HTTP RequestGET https://api.tradegecko.com/invoice_line_items/{RESOURCE_ID}" }, { "id": "update-an-invoice_line_item", "title": "Update an invoice_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice_line_item = gecko.InvoiceLineItem.find(1)\\ninvoice_line_item.attributes = {\\n  rate: \\"12.0\\",\\n}\\ninvoice_line_item.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoice_line_items/1 -d \'{\\"invoice_line_item\\":{\\"quantity\\":\\"22.0\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the invoice_line_item gets updated successfully.\\n\\nUpdates the specified invoice_line_item by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the invoice_line_item creation call.HTTP RequestPUT https://api.tradegecko.com/invoice_line_items/{RESOURCE_ID}" }, { "id": "delete-an-invoice_line_item", "title": "Delete an invoice_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ninvoice_line_item = gecko.InvoiceLineItem.find(1).\\ninvoice_line_item.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/invoice_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the invoice_line_item gets deleted successfully.\\n\\nPermanently deletes an invoice_line_item. It cannot be undone. This invoice_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/invoice_line_items/{RESOURCE_ID}/" }, { "id": "location", "title": "Location", "body": "This is an object representing a location." }, { "id": "the-location-object", "title": "The Location object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\naddress1\\nString\\n\\n\\n\\n\\naddress2\\nString\\n\\n\\n\\n\\ncity\\nString\\n\\n\\n\\n\\ncountry\\nString\\nTwo letter country code (e.g. SG, US)\\n\\n\\n\\nholds_stock\\nString\\nTells whether location is a warehouse\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nstate\\nString\\n\\n\\n\\n\\nsuburb\\nString\\n\\n\\n\\n\\nzip_code\\nString\\n\\n\\n\\n" }, { "id": "list-all-locations", "title": "List all locations", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Location.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/locations/\\n{\\n  \\"locations\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n    \\"address1\\": null,\\n    \\"address2\\": null,\\n    \\"city\\": null,\\n    \\"country\\": \\"NZ\\",\\n    \\"holds_stock\\": true,\\n    \\"label\\": \\"Secondary Location\\",\\n    \\"state\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"suburb\\": null,\\n    \\"zip_code\\": null\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n    \\"address1\\": null,\\n    \\"address2\\": null,\\n    \\"city\\": null,\\n    \\"country\\": \\"NZ\\",\\n    \\"holds_stock\\": true,\\n    \\"label\\": \\"Primary Location\\",\\n    \\"state\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"suburb\\": null,\\n    \\"zip_code\\": null\\n  }\\n]\\n}\\nReturns a list of locations you\u2019ve previously created. The locations are returned in sorted order, with the most recent locations appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of location IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\nHTTP Request:GET  https://api.tradegecko.com/locations" }, { "id": "create-a-new-location", "title": "Create a new location", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nlocation = gecko.Location.build({:label=>\\"Secondary office\\", :address1=>\\"887 Orchard Road\\", :country=>\\"Singapore\\"})\\nlocation.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/locations/ -d \'{\\"location\\":{\\"label\\":\\"Secondary office\\",\\"address1\\":\\"887 Orchard Road\\",\\"country\\":\\"Singapore\\"}\'}\\n{\\n  \\"location\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n  \\"address1\\": null,\\n  \\"address2\\": null,\\n  \\"city\\": null,\\n  \\"country\\": \\"NZ\\",\\n  \\"holds_stock\\": true,\\n  \\"label\\": \\"Secondary Location\\",\\n  \\"state\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"suburb\\": null,\\n  \\"zip_code\\": null\\n}\\n}\\nCreates a new location object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\naddress1\\nString\\n\\ntrue\\n\\n\\naddress2\\nString\\n\\n\\n\\n\\ncity\\nString\\n\\n\\n\\n\\ncountry\\nString\\nTwo letter country code (e.g. SG, US)\\ntrue\\n\\n\\nholds_stock\\nString\\nTells whether location is a warehouse\\n\\n\\n\\nlabel\\nString\\n\\ntrue\\n\\n\\nstate\\nString\\n\\n\\n\\n\\nsuburb\\nString\\n\\n\\n\\n\\nzip_code\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/locations/" }, { "id": "retrieve-a-particular-location", "title": "Retrieve a particular location", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Location.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/locations/1\\n{\\n  \\"location\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:24.335Z\\",\\n  \\"address1\\": null,\\n  \\"address2\\": null,\\n  \\"city\\": null,\\n  \\"country\\": \\"NZ\\",\\n  \\"holds_stock\\": true,\\n  \\"label\\": \\"Secondary Location\\",\\n  \\"state\\": null,\\n  \\"status\\": \\"active\\",\\n  \\"suburb\\": null,\\n  \\"zip_code\\": null\\n}\\n}\\nRetrieves the details of an existing location. You need only supply the unique location identifier that was returned upon location creation.HTTP RequestGET https://api.tradegecko.com/locations/{RESOURCE_ID}" }, { "id": "update-a-location", "title": "Update a location", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nlocation = gecko.Location.find(1)\\nlocation.attributes = {\\n  rate: \\"12.0\\",\\n}\\nlocation.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/locations/1 -d \'{\\"location\\":{\\"address1\\":\\"121 Telok Ayer Street\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the location gets updated successfully.\\n\\nUpdates the specified location by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the location creation call.HTTP RequestPUT https://api.tradegecko.com/locations/{RESOURCE_ID}" }, { "id": "delete-a-location", "title": "Delete a location", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nlocation = gecko.Location.find(1).\\nlocation.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/locations/1\\n\\nResponse\\n\\nReturns 204 status when the location gets deleted successfully.\\n\\nPermanently deletes a location. It cannot be undone. This location is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/locations/{RESOURCE_ID}/" }, { "id": "note", "title": "Note", "body": "This is an object representing a note of a company. Companies can\\n  have multiple notes but a note object belongs to only one\\n  Company." }, { "id": "the-note-object", "title": "The Note object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\ncompany_id\\nInteger\\nThe company id where the address belongs.\\n\\n\\n\\nuser_id\\nInteger\\nThe user id of the author of the note.\\ntrue\\n\\n\\nbody\\nString\\n\\n\\n\\n" }, { "id": "list-all-notes", "title": "List all notes", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Note.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/notes/\\n{\\n  \\"notes\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n    \\"updated_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n    \\"company_id\\": 4,\\n    \\"user_id\\": 1,\\n    \\"body\\": \\"90% discount, right? They are the best.\\"\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-13T08:29:23.837Z\\",\\n    \\"updated_at\\": \\"2015-11-13T08:29:23.837Z\\",\\n    \\"company_id\\": 4,\\n    \\"user_id\\": 1,\\n    \\"body\\": \\"Working with them has been a real pleasure.\\"\\n  }\\n]\\n}\\nReturns a list of notes you\u2019ve previously created. The notes are returned in sorted order, with the most recent notes appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of note IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncompany_id\\nFilter addresses by company\\n\\n\\nuser_id\\nFilter addresses by user\\n\\nHTTP Request:GET  https://api.tradegecko.com/notes" }, { "id": "create-a-new-note", "title": "Create a new note", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nnote = gecko.Note.build({:company_id=>1, :body=>\\"These kittens are adorable.\\"})\\nnote.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/notes/ -d \'{\\"note\\":{\\"company_id\\":1,\\"body\\":\\"These kittens are adorable.\\"}\'}\\n{\\n  \\"note\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n  \\"updated_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n  \\"company_id\\": 4,\\n  \\"user_id\\": 1,\\n  \\"body\\": \\"90% discount, right? They are the best.\\"\\n}\\n}\\nCreates a new note object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ncompany_id\\nInteger\\nThe company id where the address belongs.\\ntrue\\n\\n\\nbody\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/notes/" }, { "id": "retrieve-a-particular-note", "title": "Retrieve a particular note", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Note.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/notes/1\\n{\\n  \\"note\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n  \\"updated_at\\": \\"2015-11-13T08:29:32.741Z\\",\\n  \\"company_id\\": 4,\\n  \\"user_id\\": 1,\\n  \\"body\\": \\"90% discount, right? They are the best.\\"\\n}\\n}\\nRetrieves the details of an existing note. You need only supply the unique note identifier that was returned upon note creation.HTTP RequestGET https://api.tradegecko.com/notes/{RESOURCE_ID}" }, { "id": "update-a-note", "title": "Update a note", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nnote = gecko.Note.find(1)\\nnote.attributes = {\\n  rate: \\"12.0\\",\\n}\\nnote.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/notes/1 -d \'{\\"note\\":{\\"body\\":\\"Cupcakes are for champions\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the note gets updated successfully.\\n\\nUpdates the specified note by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the note creation call.HTTP RequestPUT https://api.tradegecko.com/notes/{RESOURCE_ID}" }, { "id": "delete-a-note", "title": "Delete a note", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nnote = gecko.Note.find(1).\\nnote.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/notes/1\\n\\nResponse\\n\\nReturns 204 status when the note gets deleted successfully.\\n\\nPermanently deletes a note. It cannot be undone. This note is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/notes/{RESOURCE_ID}/" }, { "id": "order", "title": "Order", "body": "This is an object representing an order." }, { "id": "the-order-object", "title": "The Order object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nassignee_id\\nInteger\\nThe assignee to which the order belongs.\\n\\n\\n\\nissued_at\\nString\\nIssue date for the order\\n\\n\\n\\nship_at\\nString\\nShip date for the order.\\n\\n\\n\\nbilling_address_id\\nInteger\\n\\n\\n\\n\\ncompany_id\\nInteger\\n\\n\\n\\n\\ncontact_id\\nInteger\\n\\n\\n\\n\\ncurrency_id\\nInteger\\n\\n\\n\\n\\nshipping_address_id\\nInteger\\n\\n\\n\\n\\nstock_location_id\\nInteger\\n\\n\\n\\n\\nuser_id\\nInteger\\n\\ntrue\\n\\n\\nsource_id\\nString\\nInternal ID of the OAuth application that created the order (if not via web interface)\\ntrue\\n\\n\\ndefault_price_list_id\\nString\\n\\n\\n\\n\\ndocument_url\\nString\\nShareable URL for resource document\\ntrue\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\norder_number\\nString\\n\\n\\n\\n\\nphone_number\\nString\\n\\n\\n\\n\\nreference_number\\nString\\nA reference for the order that isn\'t the order_number\\n\\n\\n\\nsource_url\\nString\\n\\n\\n\\n\\ntags\\nArray\\nReference tags for the order, used in filtering.\\n\\n\\n\\ntax_treatment\\nString\\nOne of \'exclusive\' or \'inclusive\', if not provided defaults to account default.\\n\\n\\n\\ntotal\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nSignifies the current state of the order, can be set as \'draft\', \'active\' or \'finalized\'\\n\\n\\n\\npayment_status\\nString\\n\\ntrue\\n\\n\\ninvoice_status\\nString\\n\\ntrue\\n\\n\\npacked_status\\nString\\n\\ntrue\\n\\n\\nfulfillment_status\\nString\\n\\ntrue\\n\\n\\nreturn_status\\nString\\n\\ntrue\\n\\n\\nreturning_status\\nString\\n\\ntrue\\n\\n\\nshippability_status\\nString\\n\\ntrue\\n\\n\\nbackordering_status\\nString\\n\\ntrue\\n\\n\\nfulfillment_ids\\nArray\\n\\ntrue\\n\\n\\ninvoice_ids\\nArray\\n\\ntrue\\n\\n\\nfulfillment_return_ids\\nArray\\n\\ntrue\\n\\n\\npayment_ids\\nArray\\n\\ntrue\\n\\n\\nrefund_ids\\nArray\\n\\ntrue\\n\\n\\ninvoices\\nArray\\n\\ntrue\\n\\n\\ninvoice_numbers\\nHash\\n\\ntrue\\n\\n\\norder_line_item_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-orders", "title": "List all orders", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Order.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/\\n{\\n  \\"orders\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n    \\"updated_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n    \\"document_url\\": \\"https://go.tradegecko.com/d/not-a-real-token-2\\",\\n    \\"assignee_id\\": \\"nil\\",\\n    \\"billing_address_id\\": 1,\\n    \\"company_id\\": 1,\\n    \\"contact_id\\": \\"nil\\",\\n    \\"currency_id\\": 1,\\n    \\"shipping_address_id\\": 1,\\n    \\"stock_location_id\\": 1,\\n    \\"user_id\\": 1,\\n    \\"default_price_list_id\\": \\"retail\\",\\n    \\"email\\": \\"example@tradegecko.com\\",\\n    \\"fulfillment_status\\": \\"unshipped\\",\\n    \\"invoice_status\\": \\"uninvoiced\\",\\n    \\"issued_at\\": \\"2015-11-12\\",\\n    \\"notes\\": \\"nil\\",\\n    \\"order_number\\": \\"SO0001\\",\\n    \\"packed_status\\": \\"unpacked\\",\\n    \\"payment_status\\": \\"unpaid\\",\\n    \\"phone_number\\": \\"+1 650-468-2904\\",\\n    \\"reference_number\\": \\"nil\\",\\n    \\"return_status\\": \\"unreturned\\",\\n    \\"returning_status\\": \\"unreturning\\",\\n    \\"ship_at\\": \\"nil\\",\\n    \\"source_url\\": \\"nil\\",\\n    \\"status\\": \\"draft\\",\\n    \\"tax_label\\": \\"GST\\",\\n    \\"tax_override\\": \\"nil\\",\\n    \\"tax_treatment\\": \\"inclusive\\",\\n    \\"total\\": 0,\\n    \\"tags\\": [\\n\\n],\\n    \\"fulfillment_ids\\": [\\n\\n],\\n    \\"fulfillment_return_ids\\": [\\n\\n],\\n    \\"invoice_ids\\": [\\n\\n],\\n    \\"payment_ids\\": [\\n\\n],\\n    \\"refund_ids\\": [\\n\\n],\\n    \\"invoices\\": [\\n\\n],\\n    \\"cached_total\\": 0,\\n    \\"default_price_type_id\\": \\"wholesale\\",\\n    \\"source\\": \\"nil\\",\\n    \\"tax_type\\": \\"exclusive\\",\\n    \\"tracking_number\\": \\"nil\\",\\n    \\"url\\": \\"nil\\",\\n    \\"source_id\\": \\"nil\\",\\n    \\"invoice_numbers\\": {\\n      \\"1\\": \\"INV001\\"\\n    },\\n    \\"order_line_item_ids\\": [\\n      1,\\n      2\\n    ]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-12T08:06:00.561Z\\",\\n    \\"updated_at\\": \\"2015-11-12T08:06:00.561Z\\",\\n    \\"document_url\\": \\"https://go.tradegecko.com/d/not-a-real-token\\",\\n    \\"assignee_id\\": \\"nil\\",\\n    \\"billing_address_id\\": 1,\\n    \\"company_id\\": 1,\\n    \\"contact_id\\": \\"nil\\",\\n    \\"currency_id\\": 1,\\n    \\"shipping_address_id\\": 1,\\n    \\"stock_location_id\\": 1,\\n    \\"user_id\\": 1,\\n    \\"default_price_list_id\\": \\"wholesale\\",\\n    \\"email\\": \\"example@tradegecko.com\\",\\n    \\"fulfillment_status\\": \\"unshipped\\",\\n    \\"invoice_status\\": \\"uninvoiced\\",\\n    \\"issued_at\\": \\"2015-11-12\\",\\n    \\"notes\\": \\"nil\\",\\n    \\"order_number\\": \\"SO0001\\",\\n    \\"packed_status\\": \\"unpacked\\",\\n    \\"payment_status\\": \\"unpaid\\",\\n    \\"phone_number\\": \\"+1 650-468-2904\\",\\n    \\"reference_number\\": \\"nil\\",\\n    \\"return_status\\": \\"unreturned\\",\\n    \\"returning_status\\": \\"unreturning\\",\\n    \\"ship_at\\": \\"nil\\",\\n    \\"source_url\\": \\"nil\\",\\n    \\"status\\": \\"draft\\",\\n    \\"tax_label\\": \\"GST\\",\\n    \\"tax_override\\": \\"nil\\",\\n    \\"tax_treatment\\": \\"exclusive\\",\\n    \\"total\\": 0,\\n    \\"tags\\": [\\n\\n],\\n    \\"fulfillment_ids\\": [\\n\\n],\\n    \\"fulfillment_return_ids\\": [\\n\\n],\\n    \\"invoice_ids\\": [\\n\\n],\\n    \\"payment_ids\\": [\\n\\n],\\n    \\"refund_ids\\": [\\n\\n],\\n    \\"invoices\\": [\\n\\n],\\n    \\"cached_total\\": 0,\\n    \\"default_price_type_id\\": \\"wholesale\\",\\n    \\"source\\": \\"nil\\",\\n    \\"tax_type\\": \\"exclusive\\",\\n    \\"tracking_number\\": \\"nil\\",\\n    \\"url\\": \\"nil\\",\\n    \\"source_id\\": \\"nil\\",\\n    \\"invoice_numbers\\": {\\n      \\"1\\": \\"INV001\\"\\n    },\\n    \\"order_line_item_ids\\": [\\n\\n]\\n  }\\n]\\n}\\nReturns a list of orders you\u2019ve previously created. The orders are returned in sorted order, with the most recent orders appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of order IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nassignee_id\\nFilter orders by assignee\\n\\n\\nbilling_address_id\\n\\n\\n\\ncompany_id\\n\\n\\n\\ncontact_id\\n\\n\\n\\ncurrency_id\\n\\n\\n\\nshipping_address_id\\n\\n\\n\\nstock_location_id\\n\\n\\n\\nuser_id\\n\\n\\n\\nsource_id\\nInternal ID of the OAuth application that created the order (if not via web interface)\\n\\n\\norder_number\\n\\n\\n\\nreference_number\\n\\n\\n\\ntags\\n\\n\\n\\nstatus\\nPossible options are draft, active, finalized\\n\\n\\npayment_status\\ne.g. unpaid, partial or paid\\n\\n\\ninvoice_status\\ne.g. uninvoiced, partial or invoiced\\n\\n\\npacked_status\\ne.g. unpacked, partial or packed\\n\\n\\nfulfillment_status\\ne.g. unshipped, partial or shipped\\n\\n\\nreturn_status\\ne.g. unreturned, partial or returned\\n\\n\\nreturning_status\\ne.g. unreturning, partial or returning\\n\\n\\nshippability_status\\ne.g. not_shippable, partially_shippable or shippable\\n\\n\\nbackordering_status\\ne.g. not_backordered, partially_backordered or backordered\\n\\nHTTP Request:GET  https://api.tradegecko.com/orders" }, { "id": "create-a-new-order", "title": "Create a new order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder = gecko.Order.build({:company_id=>1, :issued_at=>\\"Time.now\\", :billing_address_id=>1, :shipping_address_id=>1, :order_line_items=>[{:variant_id=>123, :quantity=>2}, {:variant_id=>456, :quantity=>5}]})\\norder.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/ -d \'{\\"order\\":{\\"company_id\\":1,\\"issued_at\\":\\"Time.now\\",\\"billing_address_id\\":1,\\"shipping_address_id\\":1,\\"order_line_items\\":[{\\"variant_id\\":123,\\"quantity\\":2},{\\"variant_id\\":456,\\"quantity\\":5}]}\'}\\n{\\n  \\"order\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n  \\"updated_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n  \\"document_url\\": \\"https://go.tradegecko.com/d/not-a-real-token-2\\",\\n  \\"assignee_id\\": \\"nil\\",\\n  \\"billing_address_id\\": 1,\\n  \\"company_id\\": 1,\\n  \\"contact_id\\": \\"nil\\",\\n  \\"currency_id\\": 1,\\n  \\"shipping_address_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"user_id\\": 1,\\n  \\"default_price_list_id\\": \\"retail\\",\\n  \\"email\\": \\"example@tradegecko.com\\",\\n  \\"fulfillment_status\\": \\"unshipped\\",\\n  \\"invoice_status\\": \\"uninvoiced\\",\\n  \\"issued_at\\": \\"2015-11-12\\",\\n  \\"notes\\": \\"nil\\",\\n  \\"order_number\\": \\"SO0001\\",\\n  \\"packed_status\\": \\"unpacked\\",\\n  \\"payment_status\\": \\"unpaid\\",\\n  \\"phone_number\\": \\"+1 650-468-2904\\",\\n  \\"reference_number\\": \\"nil\\",\\n  \\"return_status\\": \\"unreturned\\",\\n  \\"returning_status\\": \\"unreturning\\",\\n  \\"ship_at\\": \\"nil\\",\\n  \\"source_url\\": \\"nil\\",\\n  \\"status\\": \\"draft\\",\\n  \\"tax_label\\": \\"GST\\",\\n  \\"tax_override\\": \\"nil\\",\\n  \\"tax_treatment\\": \\"inclusive\\",\\n  \\"total\\": 0,\\n  \\"tags\\": [\\n\\n],\\n  \\"fulfillment_ids\\": [\\n\\n],\\n  \\"fulfillment_return_ids\\": [\\n\\n],\\n  \\"invoice_ids\\": [\\n\\n],\\n  \\"payment_ids\\": [\\n\\n],\\n  \\"refund_ids\\": [\\n\\n],\\n  \\"invoices\\": [\\n\\n],\\n  \\"cached_total\\": 0,\\n  \\"default_price_type_id\\": \\"wholesale\\",\\n  \\"source\\": \\"nil\\",\\n  \\"tax_type\\": \\"exclusive\\",\\n  \\"tracking_number\\": \\"nil\\",\\n  \\"url\\": \\"nil\\",\\n  \\"source_id\\": \\"nil\\",\\n  \\"invoice_numbers\\": {\\n    \\"1\\": \\"INV001\\"\\n  },\\n  \\"order_line_item_ids\\": [\\n    1,\\n    2\\n  ]\\n}\\n}\\nCreates a new order object.\\nThis endpoint also accepts embedded order_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nassignee_id\\nInteger\\nThe assignee to which the order belongs.\\n\\n\\n\\nissued_at\\nString\\nIssue date for the order\\ntrue\\n\\n\\nship_at\\nString\\nShip date for the order.\\n\\n\\n\\nbilling_address_id\\nInteger\\n\\ntrue\\n\\n\\ncompany_id\\nInteger\\n\\ntrue\\n\\n\\ncontact_id\\nInteger\\n\\n\\n\\n\\nshipping_address_id\\nInteger\\n\\ntrue\\n\\n\\nstock_location_id\\nInteger\\n\\n\\n\\n\\ndefault_price_list_id\\nString\\n\\n\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\norder_number\\nString\\n\\n\\n\\n\\nphone_number\\nString\\n\\n\\n\\n\\nreference_number\\nString\\nA reference for the order that isn\'t the order_number\\n\\n\\n\\nsource_url\\nString\\n\\n\\n\\n\\ntags\\nArray\\nReference tags for the order, used in filtering.\\n\\n\\n\\ntax_treatment\\nString\\nOne of \'exclusive\' or \'inclusive\', if not provided defaults to account default.\\n\\n\\n\\nstatus\\nString\\nSignifies the current state of the order, can be set as \'draft\', \'active\' or \'finalized\'\\n\\n\\nOrderLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the order_line_item belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the order_line_item belongs.\\ntrue\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the order_line_item belongs.\\ntrue\\n\\n\\ndiscount\\nString\\nBetween -100 and 100\\n\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nline_type\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\nPrice of a single item. If not provided, we will attempt to pull the price from the parent order\'s default price list\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\n\\n\\n\\n\\ntax_rate\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/orders/" }, { "id": "retrieve-a-particular-order", "title": "Retrieve a particular order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Order.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/1\\n{\\n  \\"order\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n  \\"updated_at\\": \\"2015-11-12T08:06:01.561Z\\",\\n  \\"document_url\\": \\"https://go.tradegecko.com/d/not-a-real-token-2\\",\\n  \\"assignee_id\\": \\"nil\\",\\n  \\"billing_address_id\\": 1,\\n  \\"company_id\\": 1,\\n  \\"contact_id\\": \\"nil\\",\\n  \\"currency_id\\": 1,\\n  \\"shipping_address_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"user_id\\": 1,\\n  \\"default_price_list_id\\": \\"retail\\",\\n  \\"email\\": \\"example@tradegecko.com\\",\\n  \\"fulfillment_status\\": \\"unshipped\\",\\n  \\"invoice_status\\": \\"uninvoiced\\",\\n  \\"issued_at\\": \\"2015-11-12\\",\\n  \\"notes\\": \\"nil\\",\\n  \\"order_number\\": \\"SO0001\\",\\n  \\"packed_status\\": \\"unpacked\\",\\n  \\"payment_status\\": \\"unpaid\\",\\n  \\"phone_number\\": \\"+1 650-468-2904\\",\\n  \\"reference_number\\": \\"nil\\",\\n  \\"return_status\\": \\"unreturned\\",\\n  \\"returning_status\\": \\"unreturning\\",\\n  \\"ship_at\\": \\"nil\\",\\n  \\"source_url\\": \\"nil\\",\\n  \\"status\\": \\"draft\\",\\n  \\"tax_label\\": \\"GST\\",\\n  \\"tax_override\\": \\"nil\\",\\n  \\"tax_treatment\\": \\"inclusive\\",\\n  \\"total\\": 0,\\n  \\"tags\\": [\\n\\n],\\n  \\"fulfillment_ids\\": [\\n\\n],\\n  \\"fulfillment_return_ids\\": [\\n\\n],\\n  \\"invoice_ids\\": [\\n\\n],\\n  \\"payment_ids\\": [\\n\\n],\\n  \\"refund_ids\\": [\\n\\n],\\n  \\"invoices\\": [\\n\\n],\\n  \\"cached_total\\": 0,\\n  \\"default_price_type_id\\": \\"wholesale\\",\\n  \\"source\\": \\"nil\\",\\n  \\"tax_type\\": \\"exclusive\\",\\n  \\"tracking_number\\": \\"nil\\",\\n  \\"url\\": \\"nil\\",\\n  \\"source_id\\": \\"nil\\",\\n  \\"invoice_numbers\\": {\\n    \\"1\\": \\"INV001\\"\\n  },\\n  \\"order_line_item_ids\\": [\\n    1,\\n    2\\n  ]\\n}\\n}\\nRetrieves the details of an existing order. You need only supply the unique order identifier that was returned upon order creation.HTTP RequestGET https://api.tradegecko.com/orders/{RESOURCE_ID}" }, { "id": "update-an-order", "title": "Update an order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder = gecko.Order.find(1)\\norder.attributes = {\\n  rate: \\"12.0\\",\\n}\\norder.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/1 -d \'{\\"order\\":{\\"status\\":\\"active\\",\\"email\\":\\"hello@tradegecko.com\\",\\"billing_address_id\\":2}}\'\\n\\nResponse\\n\\nReturns 204 status when the order gets updated successfully.\\n\\nUpdates the specified order by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the order creation call.HTTP RequestPUT https://api.tradegecko.com/orders/{RESOURCE_ID}" }, { "id": "order-actions", "title": "Order actions", "body": "Use the following endpoints to manage the order\'s invoice, payment and fulfillment. POST /orders/[:order_id]/actions/[:action]curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/[:order_id]/actions/[:order_action]\\n\\n\\nAction\\nDescription\\n\\n\\n\\ninvoice\\nInvoice the order\\n\\n\\npay\\nPay for the order\\n\\n\\npack\\nCreate a fulfillment with status: packed\\n\\n\\nfulfil\\nCreate a fulfillment with status: fulfilled\\n\\n\\nvoid\\nVoid the order\\n\\n" }, { "id": "delete-an-order", "title": "Delete an order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder = gecko.Order.find(1).\\norder.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/orders/1\\n\\nResponse\\n\\nReturns 204 status when the order gets deleted successfully.\\n\\nPermanently deletes an order. It cannot be undone. This order is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/orders/{RESOURCE_ID}/" }, { "id": "orderlineitem", "title": "OrderLineItem", "body": "This is an object representing an order_line_item of an order. Orders can\\n  have multiple order_line_items but an order_line_item object belongs to only one\\n  Order." }, { "id": "the-orderlineitem-object", "title": "The OrderLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\norder_id\\nInteger\\nThe order to which the order_line_item belongs.\\n\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the order_line_item belongs.\\n\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the order_line_item belongs.\\n\\n\\n\\ndiscount\\nString\\nBetween -100 and 100\\n\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nline_type\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\nPrice of a single item. If not provided, we will attempt to pull the price from the parent order\'s default price list\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\n\\n\\n\\n\\ntax_rate\\nString\\n\\n\\n\\n\\nfulfillment_line_item_ids\\nArray\\n\\ntrue\\n\\n\\nfulfillment_return_line_item_ids\\nArray\\n\\ntrue\\n\\n\\ninvoice_line_item_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-order_line_items", "title": "List all order_line_items", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.OrderLineItem.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/order_line_items/\\n{\\n  \\"order_line_items\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n    \\"updated_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n    \\"order_id\\": 1,\\n    \\"variant_id\\": 2,\\n    \\"tax_type_id\\": 1,\\n    \\"discount\\": \\"11.0\\",\\n    \\"freeform\\": false,\\n    \\"image_url\\": \\"nil\\",\\n    \\"label\\": \\"nil\\",\\n    \\"line_type\\": \\"nil\\",\\n    \\"position\\": 0,\\n    \\"price\\": \\"189.0\\",\\n    \\"quantity\\": \\"1.0\\",\\n    \\"tax_rate_override\\": \\"nil\\",\\n    \\"tax_rate\\": \\"nil\\",\\n    \\"fulfillment_line_item_ids\\": [\\n\\n],\\n    \\"fulfillment_return_line_item_ids\\": [\\n\\n],\\n    \\"invoice_line_item_ids\\": [\\n\\n]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-12T06:32:31.607Z\\",\\n    \\"updated_at\\": \\"2015-11-12T06:32:31.607Z\\",\\n    \\"order_id\\": 1,\\n    \\"variant_id\\": 1,\\n    \\"tax_type_id\\": 1,\\n    \\"discount\\": \\"11.0\\",\\n    \\"freeform\\": false,\\n    \\"image_url\\": \\"null\\",\\n    \\"label\\": \\"null\\",\\n    \\"line_type\\": \\"null\\",\\n    \\"position\\": 0,\\n    \\"price\\": \\"189.0\\",\\n    \\"quantity\\": \\"1.0\\",\\n    \\"tax_rate_override\\": \\"nil\\",\\n    \\"tax_rate\\": \\"nil\\",\\n    \\"fulfillment_line_item_ids\\": [\\n\\n],\\n    \\"fulfillment_return_line_item_ids\\": [\\n\\n],\\n    \\"invoice_line_item_ids\\": [\\n\\n]\\n  }\\n]\\n}\\nReturns a list of order_line_items you\u2019ve previously created. The order_line_items are returned in sorted order, with the most recent order_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of order_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\norder_id\\nFilter order_line_items by order\\n\\n\\nvariant_id\\nFilter order_line_items by variant\\n\\n\\ntax_type_id\\nFilter order_line_items by tax_type\\n\\nHTTP Request:GET  https://api.tradegecko.com/order_line_items" }, { "id": "create-a-new-order_line_item", "title": "Create a new order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder_line_item = gecko.OrderLineItem.build({:quantity=>\\"12.0\\", :order_id=>1, :tax_type_id=>1, :price=>\\"10.0\\"})\\norder_line_item.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/order_line_items/ -d \'{\\"order_line_item\\":{\\"quantity\\":\\"12.0\\",\\"order_id\\":1,\\"tax_type_id\\":1,\\"price\\":\\"10.0\\"}\'}\\n{\\n  \\"order_line_item\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n  \\"updated_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n  \\"order_id\\": 1,\\n  \\"variant_id\\": 2,\\n  \\"tax_type_id\\": 1,\\n  \\"discount\\": \\"11.0\\",\\n  \\"freeform\\": false,\\n  \\"image_url\\": \\"nil\\",\\n  \\"label\\": \\"nil\\",\\n  \\"line_type\\": \\"nil\\",\\n  \\"position\\": 0,\\n  \\"price\\": \\"189.0\\",\\n  \\"quantity\\": \\"1.0\\",\\n  \\"tax_rate_override\\": \\"nil\\",\\n  \\"tax_rate\\": \\"nil\\",\\n  \\"fulfillment_line_item_ids\\": [\\n\\n],\\n  \\"fulfillment_return_line_item_ids\\": [\\n\\n],\\n  \\"invoice_line_item_ids\\": [\\n\\n]\\n}\\n}\\nCreates a new order_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\norder_id\\nInteger\\nThe order to which the order_line_item belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the order_line_item belongs.\\ntrue\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the order_line_item belongs.\\ntrue\\n\\n\\ndiscount\\nString\\nBetween -100 and 100\\n\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nline_type\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\nPrice of a single item. If not provided, we will attempt to pull the price from the parent order\'s default price list\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\n\\n\\n\\n\\ntax_rate\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/order_line_items/" }, { "id": "retrieve-a-particular-order_line_item", "title": "Retrieve a particular order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.OrderLineItem.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/order_line_items/1\\n{\\n  \\"order_line_item\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n  \\"updated_at\\": \\"2015-11-12T06:39:53.231Z\\",\\n  \\"order_id\\": 1,\\n  \\"variant_id\\": 2,\\n  \\"tax_type_id\\": 1,\\n  \\"discount\\": \\"11.0\\",\\n  \\"freeform\\": false,\\n  \\"image_url\\": \\"nil\\",\\n  \\"label\\": \\"nil\\",\\n  \\"line_type\\": \\"nil\\",\\n  \\"position\\": 0,\\n  \\"price\\": \\"189.0\\",\\n  \\"quantity\\": \\"1.0\\",\\n  \\"tax_rate_override\\": \\"nil\\",\\n  \\"tax_rate\\": \\"nil\\",\\n  \\"fulfillment_line_item_ids\\": [\\n\\n],\\n  \\"fulfillment_return_line_item_ids\\": [\\n\\n],\\n  \\"invoice_line_item_ids\\": [\\n\\n]\\n}\\n}\\nRetrieves the details of an existing order_line_item. You need only supply the unique order_line_item identifier that was returned upon order_line_item creation.HTTP RequestGET https://api.tradegecko.com/order_line_items/{RESOURCE_ID}" }, { "id": "update-an-order_line_item", "title": "Update an order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder_line_item = gecko.OrderLineItem.find(1)\\norder_line_item.attributes = {\\n  rate: \\"12.0\\",\\n}\\norder_line_item.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/order_line_items/1 -d \'{\\"order_line_item\\":{\\"quantity\\":\\"22.0\\",\\"price\\":\\"12.0\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the order_line_item gets updated successfully.\\n\\nUpdates the specified order_line_item by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the order_line_item creation call.HTTP RequestPUT https://api.tradegecko.com/order_line_items/{RESOURCE_ID}" }, { "id": "delete-an-order_line_item", "title": "Delete an order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\norder_line_item = gecko.OrderLineItem.find(1).\\norder_line_item.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/order_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the order_line_item gets deleted successfully.\\n\\nPermanently deletes an order_line_item. It cannot be undone. This order_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/order_line_items/{RESOURCE_ID}/" }, { "id": "paymentterm", "title": "PaymentTerm", "body": "This is an object representing a payment_term." }, { "id": "the-paymentterm-object", "title": "The PaymentTerm object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\nname\\nString\\n\\n\\n\\n\\ndue_in_days\\nString\\nNumber of days until payment is due\\n\\n\\n\\nfrom\\nString\\nDictates whether due_in_days starts from \'now\' or \'eom\' (end of month).\\n\\n\\n" }, { "id": "list-all-payment_terms", "title": "List all payment_terms", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.PaymentTerm.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/payment_terms/\\n{\\n  \\"payment_terms\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"name\\": \\"NET30\\",\\n    \\"due_in_days\\": 30,\\n    \\"status\\": \\"active\\",\\n    \\"from\\": \\"now\\"\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"name\\": \\"NET10\\",\\n    \\"due_in_days\\": 10,\\n    \\"status\\": \\"active\\",\\n    \\"from\\": \\"now\\"\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"name\\": \\"Cash on Delivery\\",\\n    \\"due_in_days\\": 0,\\n    \\"status\\": \\"active\\",\\n    \\"from\\": \\"now\\"\\n  }\\n]\\n}\\nReturns a list of payment_terms you\u2019ve previously created. The payment_terms are returned in sorted order, with the most recent payment_terms appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of payment_term IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\nHTTP Request:GET  https://api.tradegecko.com/payment_terms" }, { "id": "create-a-new-payment_term", "title": "Create a new payment_term", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npayment_term = gecko.PaymentTerm.build({:name=>\\"NET30\\", :due_in_days=>\\"30\\", :from=>\\"eom\\"})\\npayment_term.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/payment_terms/ -d \'{\\"payment_term\\":{\\"name\\":\\"NET30\\",\\"due_in_days\\":\\"30\\",\\"from\\":\\"eom\\"}\'}\\n{\\n  \\"payment_term\\": {\\n  \\"id\\": 3,\\n  \\"name\\": \\"NET30\\",\\n  \\"due_in_days\\": 30,\\n  \\"status\\": \\"active\\",\\n  \\"from\\": \\"now\\"\\n}\\n}\\nCreates a new payment_term object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nname\\nString\\n\\n\\n\\n\\ndue_in_days\\nString\\nNumber of days until payment is due\\n\\n\\n\\nfrom\\nString\\nDictates whether due_in_days starts from \'now\' or \'eom\' (end of month).\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/payment_terms/" }, { "id": "retrieve-a-particular-payment_term", "title": "Retrieve a particular payment_term", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.PaymentTerm.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/payment_terms/1\\n{\\n  \\"payment_term\\": {\\n  \\"id\\": 3,\\n  \\"name\\": \\"NET30\\",\\n  \\"due_in_days\\": 30,\\n  \\"status\\": \\"active\\",\\n  \\"from\\": \\"now\\"\\n}\\n}\\nRetrieves the details of an existing payment_term. You need only supply the unique payment_term identifier that was returned upon payment_term creation.HTTP RequestGET https://api.tradegecko.com/payment_terms/{RESOURCE_ID}" }, { "id": "update-a-payment_term", "title": "Update a payment_term", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npayment_term = gecko.PaymentTerm.find(1)\\npayment_term.attributes = {\\n  rate: \\"12.0\\",\\n}\\npayment_term.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/payment_terms/1 -d \'{\\"payment_term\\":{\\"from\\":\\"now\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the payment_term gets updated successfully.\\n\\nUpdates the specified payment_term by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the payment_term creation call.HTTP RequestPUT https://api.tradegecko.com/payment_terms/{RESOURCE_ID}" }, { "id": "delete-a-payment_term", "title": "Delete a payment_term", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npayment_term = gecko.PaymentTerm.find(1).\\npayment_term.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/payment_terms/1\\n\\nResponse\\n\\nReturns 204 status when the payment_term gets deleted successfully.\\n\\nPermanently deletes a payment_term. It cannot be undone. This payment_term is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/payment_terms/{RESOURCE_ID}/" }, { "id": "product", "title": "Product", "body": "This is an object representing a product." }, { "id": "the-product-object", "title": "The Product object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\', \'disabled\' or \'archived\'\\ntrue\\n\\n\\nbrand\\nString\\nName of the brand of the product\\n\\n\\n\\ndescription\\nString\\nA brief description of the product\\n\\n\\n\\nimage_url\\nString\\nFirst image of the product (sorted on position)\\ntrue\\n\\n\\nname\\nString\\n\\n\\n\\n\\nopt1\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nopt2\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nopt3\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nproduct_type\\nString\\n\\n\\n\\n\\nquantity\\nString\\nSum of the quantities of child variants\\ntrue\\n\\n\\nsupplier  deprecated\\nString\\nName of the supplier of the product\\n\\n\\n\\nsupplier_ids\\nArray\\nShould currently only be one ID for backwards compatibility purposes\\n\\n\\n\\nimage_ids\\nArray\\nThe IDs of all the images linked to the product\\n\\n\\n\\ntags\\nArray\\nProduct tags for easier filtering and searching\\n\\n\\n\\nvariant_ids\\nArray\\n\\ntrue\\n\\n\\nvendor  deprecated\\nString\\nWill be removed very soon.\\n\\n\\n" }, { "id": "list-all-products", "title": "List all products", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Product.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products/\\n{\\n  \\"products\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n    \\"brand\\": null,\\n    \\"description\\": \\"All ready for Easter, our giant golden chocolate eggs are just what the doctor ordered, adults and children alike\\",\\n    \\"image_url\\": null,\\n    \\"name\\": \\"Golden Egg\\",\\n    \\"opt1\\": \\"Size\\",\\n    \\"opt2\\": null,\\n    \\"opt3\\": null,\\n    \\"product_type\\": \\"Chocolate\\",\\n    \\"quantity\\": \\"32.5\\",\\n    \\"search_cache\\": \\"DEMO-EGG-L Large DEMO-EGG-XL Extra-Large DEMO-EGG-M Medium DEMO-EGG-S Small\\",\\n    \\"status\\": \\"active\\",\\n    \\"supplier\\": \\"Wonka Candy\\",\\n    \\"supplier_ids\\": [\\n      3\\n    ],\\n    \\"image_ids\\": [\\n      1,\\n      2\\n    ],\\n    \\"tags\\": \\"candy,chocolate\\",\\n    \\"variant_ids\\": [\\n      4,\\n      5,\\n      6,\\n      7\\n    ],\\n    \\"vendor\\": \\"Wonka Candy\\"\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.660Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:24.660Z\\",\\n    \\"brand\\": null,\\n    \\"description\\": \\"These everlasting gobstoppers will never run out. Just keep going forever and ever, full flavour guaranteed\\",\\n    \\"image_url\\": null,\\n    \\"name\\": \\"Everlasting Gobstopper\\",\\n    \\"opt1\\": \\"Flavour\\",\\n    \\"opt2\\": null,\\n    \\"opt3\\": null,\\n    \\"product_type\\": \\"Candy\\",\\n    \\"quantity\\": \\"17\\",\\n    \\"search_cache\\": \\"DEMO-GOBS-PEA Peach DEMO-GOBS-SNO Snozzberry\\",\\n    \\"status\\": \\"active\\",\\n    \\"supplier\\": \\"Wonka Candy\\",\\n    \\"supplier_ids\\": [\\n      3\\n    ],\\n    \\"image_ids\\": [\\n\\n],\\n    \\"tags\\": \\"candy,summer\\",\\n    \\"variant_ids\\": [\\n      2,\\n      3\\n    ],\\n    \\"vendor\\": \\"Wonka Candy\\"\\n  }\\n]\\n}\\nReturns a list of products you\u2019ve previously created. The products are returned in sorted order, with the most recent products appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of product IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nPossible options are: active, disabled.\\n\\n\\nbrand\\n\\n\\n\\nproduct_type\\n\\n\\n\\ntags\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/products" }, { "id": "create-a-new-product", "title": "Create a new product", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nproduct = gecko.Product.build({:name=>\\"Everlasting Gobstopper\\", :opt1=>\\"Colour\\"})\\nproduct.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products/ -d \'{\\"product\\":{\\"name\\":\\"Everlasting Gobstopper\\",\\"opt1\\":\\"Colour\\"}\'}\\n{\\n  \\"product\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n  \\"brand\\": null,\\n  \\"description\\": \\"All ready for Easter, our giant golden chocolate eggs are just what the doctor ordered, adults and children alike\\",\\n  \\"image_url\\": null,\\n  \\"name\\": \\"Golden Egg\\",\\n  \\"opt1\\": \\"Size\\",\\n  \\"opt2\\": null,\\n  \\"opt3\\": null,\\n  \\"product_type\\": \\"Chocolate\\",\\n  \\"quantity\\": \\"32.5\\",\\n  \\"search_cache\\": \\"DEMO-EGG-L Large DEMO-EGG-XL Extra-Large DEMO-EGG-M Medium DEMO-EGG-S Small\\",\\n  \\"status\\": \\"active\\",\\n  \\"supplier\\": \\"Wonka Candy\\",\\n  \\"supplier_ids\\": [\\n    3\\n  ],\\n  \\"image_ids\\": [\\n    1,\\n    2\\n  ],\\n  \\"tags\\": \\"candy,chocolate\\",\\n  \\"variant_ids\\": [\\n    4,\\n    5,\\n    6,\\n    7\\n  ],\\n  \\"vendor\\": \\"Wonka Candy\\"\\n}\\n}\\nCreates a new product object.\\nThis endpoint also accepts embedded variants.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nbrand\\nString\\nName of the brand of the product\\n\\n\\n\\ndescription\\nString\\nA brief description of the product\\n\\n\\n\\nname\\nString\\n\\ntrue\\n\\n\\nopt1\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nopt2\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nopt3\\nString\\nCustom product property name eg. \'Size\', \'Color\'\\n\\n\\n\\nproduct_type\\nString\\n\\n\\n\\n\\nquantity\\nString\\nSum of the quantities of child variants\\n\\n\\n\\nsupplier deprecated\\nString\\nName of the supplier of the product\\n\\n\\n\\nsupplier_ids\\nArray\\nShould currently only be one ID for backwards compatibility purposes\\n\\n\\n\\ntags\\nArray\\nProduct tags for easier filtering and searching\\n\\n\\n\\nvendor deprecated\\nString\\nWill be removed very soon.\\n\\n\\nVariant\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nproduct_id\\nInteger\\nThe product to which the variant belongs.\\ntrue\\n\\n\\ndefault_ledger_account_id\\nInteger\\nUsed for accounting integrations. (e.g. Revenue Ledger)\\n\\n\\n\\nbuy_price\\nString\\n\\n\\n\\n\\ncomposite\\nBoolean\\nTells whether this variant is a composite (composed of other variants)\\n\\n\\n\\ndescription\\nString\\n\\n\\n\\n\\ninitial_cost_price\\nString\\nThe initial item cost price of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_level\\nString\\nThe initial stock level of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_location_id\\nInteger\\nThe ID of the stock location where initial stock levels should be added, only available when first creating the variant, defaults to your primary stock location\\n\\n\\n\\nkeep_selling\\nBoolean\\nAllow item to continue to be sold, even if it is no longer in stock\\n\\n\\n\\nmanage_stock\\nBoolean\\nFor composite variants, the value of manage_stock will always be true\\n\\n\\n\\nmax_online\\nString\\nIntegrated online store(s) should show current stock levels up to a maximum of this value\\n\\n\\n\\nname\\nString\\n\\n\\n\\n\\nonline_ordering\\nBoolean\\nTells whether variant is for sale on B2B platform\\n\\n\\n\\nopt1\\nString\\n\\n\\n\\n\\nopt2\\nString\\n\\n\\n\\n\\nopt3\\nString\\n\\n\\n\\n\\nposition\\nString\\nDefault sort position of this variant (unique to product)\\n\\n\\n\\nretail_price\\nString\\nThe recommended retail price\\n\\n\\n\\nsellable\\nString\\nTells whether can be added to sales orders\\n\\n\\n\\nsku\\nString\\nStock Keeping Unit (should be unique)\\n\\n\\n\\nsupplier_code\\nString\\n\\n\\n\\n\\ntaxable\\nBoolean\\nTells whether this variant can be taxed\\n\\n\\n\\nupc\\nString\\nThe barcode or UPC number\\n\\n\\n\\nweight\\nString\\nThe weight value\\n\\n\\n\\nweight_unit\\nString\\nThe weight unit (kg, gm, oz or lb)\\n\\n\\n\\nwholesale_price\\nString\\nThe recommended wholesale price for this product\\n\\n\\n\\nimage_ids\\nArray\\nImages assigned to the variant. The order of the Image IDs here is the position of the images on the variant.\\n\\n\\n\\nvariant_prices\\nArray\\nAn array of prices with price list IDs and the price value.\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/products/" }, { "id": "retrieve-a-particular-product", "title": "Retrieve a particular product", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Product.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products/1\\n{\\n  \\"product\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:24.817Z\\",\\n  \\"brand\\": null,\\n  \\"description\\": \\"All ready for Easter, our giant golden chocolate eggs are just what the doctor ordered, adults and children alike\\",\\n  \\"image_url\\": null,\\n  \\"name\\": \\"Golden Egg\\",\\n  \\"opt1\\": \\"Size\\",\\n  \\"opt2\\": null,\\n  \\"opt3\\": null,\\n  \\"product_type\\": \\"Chocolate\\",\\n  \\"quantity\\": \\"32.5\\",\\n  \\"search_cache\\": \\"DEMO-EGG-L Large DEMO-EGG-XL Extra-Large DEMO-EGG-M Medium DEMO-EGG-S Small\\",\\n  \\"status\\": \\"active\\",\\n  \\"supplier\\": \\"Wonka Candy\\",\\n  \\"supplier_ids\\": [\\n    3\\n  ],\\n  \\"image_ids\\": [\\n    1,\\n    2\\n  ],\\n  \\"tags\\": \\"candy,chocolate\\",\\n  \\"variant_ids\\": [\\n    4,\\n    5,\\n    6,\\n    7\\n  ],\\n  \\"vendor\\": \\"Wonka Candy\\"\\n}\\n}\\nRetrieves the details of an existing product. You need only supply the unique product identifier that was returned upon product creation.HTTP RequestGET https://api.tradegecko.com/products/{RESOURCE_ID}" }, { "id": "update-a-product", "title": "Update a product", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nproduct = gecko.Product.find(1)\\nproduct.attributes = {\\n  rate: \\"12.0\\",\\n}\\nproduct.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products/1 -d \'{\\"product\\":{\\"opt2\\":\\"Size\\",\\"opt3\\":\\"Weight\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the product gets updated successfully.\\n\\nUpdates the specified product by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the product creation call.HTTP RequestPUT https://api.tradegecko.com/products/{RESOURCE_ID}" }, { "id": "delete-a-product", "title": "Delete a product", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nproduct = gecko.Product.find(1).\\nproduct.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/products/1\\n\\nResponse\\n\\nReturns 204 status when the product gets deleted successfully.\\n\\nPermanently deletes a product. It cannot be undone. This product is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/products/{RESOURCE_ID}/" }, { "id": "purchaseorder", "title": "PurchaseOrder", "body": "This is an object representing a purchase_order." }, { "id": "the-purchaseorder-object", "title": "The PurchaseOrder object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\n\\ntrue\\n\\n\\ndocument_url\\nString\\nShareable URL for resource document\\ntrue\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the purchase_order.\\n\\n\\n\\ncompany_id\\nInteger\\nThe company that will be supplying the purchase order\\n\\n\\n\\ncurrency_id\\nInteger\\nThe currency of the purchase_order\\n\\n\\n\\nstock_location_id\\nInteger\\nThe stock location where stock will be delivered\\n\\n\\n\\nsupplier_address_id\\nInteger\\nThe supplier address for the purchase_order.\\n\\n\\n\\ndefault_price_list_id\\nString\\nDefault prices for the purchase_order_line_items (if the variant has a price on this Price List\\n\\n\\n\\ndue_at\\nString\\n\\n\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\norder_number\\nString\\n\\n\\n\\n\\nprocurement_status\\nString\\n\\ntrue\\n\\n\\nreference_number\\nString\\nA reference for the purchase order that isn\'t the order_number\\n\\n\\n\\ntax_treatment\\nString\\nOne of \'exclusive\' or \'inclusive\', if not provided defaults to account default.\\n\\n\\n\\nreceived_at\\nString\\n\\ntrue\\n\\n\\ntotal\\nString\\n\\ntrue\\n\\n\\ntags\\nString\\nReference tags for the purchase order, used in filtering.\\n\\n\\n\\ncached_quantity\\nString\\n\\ntrue\\n\\n\\ncached_total  deprecated\\nString\\n\\ntrue\\n\\n\\ndefault_price_type_id  deprecated\\nString\\n\\n\\n\\n\\ntax_type  deprecated\\nString\\n\\n\\n\\n\\npurchase_order_line_item_ids\\nArray\\n\\ntrue\\n\\n\\nprocurement_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-purchase_orders", "title": "List all purchase_orders", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.PurchaseOrder.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/\\n{\\n  \\"purchase_orders\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-23T11:19:49.857Z\\",\\n    \\"updated_at\\": \\"2015-11-23T11:19:50.427Z\\",\\n    \\"status\\": \\"active\\",\\n    \\"document_url\\": \\"http://localhost:3000/d/gfPPrlS40mrZOGXXgmOIZcue\\",\\n    \\"billing_address_id\\": 1,\\n    \\"company_id\\": 3,\\n    \\"currency_id\\": 1,\\n    \\"stock_location_id\\": 1,\\n    \\"supplier_address_id\\": 4,\\n    \\"default_price_list_id\\": \\"buy\\",\\n    \\"due_at\\": \\"2015-12-07\\",\\n    \\"email\\": \\"william@example.com\\",\\n    \\"notes\\": null,\\n    \\"order_number\\": \\"PO0002\\",\\n    \\"procurement_status\\": \\"unprocured\\",\\n    \\"reference_number\\": null,\\n    \\"tax_treatment\\": \\"exclusive\\",\\n    \\"received_at\\": null,\\n    \\"total\\": \\"8.63\\",\\n    \\"tags\\": [\\n\\n],\\n    \\"cached_quantity\\": \\"3.0\\",\\n    \\"cached_total\\": \\"8.63\\",\\n    \\"default_price_type_id\\": \\"buy\\",\\n    \\"tax_type\\": \\"exclusive\\",\\n    \\"purchase_order_line_item_ids\\": [\\n      3,\\n      2\\n    ],\\n    \\"procurement_ids\\": [\\n\\n]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"document_url\\": \\"http://localhost:3000/d/RHEDdlXiapBcsQ-CspVHn0i3\\",\\n    \\"created_at\\": \\"2015-11-23T11:19:07.072Z\\",\\n    \\"updated_at\\": \\"2015-11-23T11:19:07.483Z\\",\\n    \\"billing_address_id\\": 1,\\n    \\"company_id\\": 3,\\n    \\"currency_id\\": 1,\\n    \\"stock_location_id\\": 1,\\n    \\"supplier_address_id\\": 4,\\n    \\"default_price_list_id\\": \\"buy\\",\\n    \\"due_at\\": \\"2015-12-07\\",\\n    \\"email\\": \\"william@example.com\\",\\n    \\"notes\\": null,\\n    \\"order_number\\": \\"PO0001\\",\\n    \\"procurement_status\\": \\"unprocured\\",\\n    \\"reference_number\\": null,\\n    \\"status\\": \\"active\\",\\n    \\"tax_treatment\\": \\"exclusive\\",\\n    \\"received_at\\": null,\\n    \\"total\\": \\"2.88\\",\\n    \\"tags\\": [\\n\\n],\\n    \\"cached_quantity\\": \\"1.0\\",\\n    \\"cached_total\\": \\"2.88\\",\\n    \\"default_price_type_id\\": \\"buy\\",\\n    \\"tax_type\\": \\"exclusive\\",\\n    \\"purchase_order_line_item_ids\\": [\\n      1\\n    ],\\n    \\"procurement_ids\\": [\\n\\n]\\n  }\\n]\\n}\\nReturns a list of purchase_orders you\u2019ve previously created. The purchase_orders are returned in sorted order, with the most recent purchase_orders appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of purchase_order IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nPossible options are: active, disabled.\\n\\n\\nbilling_address_id\\n\\n\\n\\ncompany_id\\n\\n\\n\\ncurrency_id\\n\\n\\n\\nstock_location_id\\n\\n\\n\\nsupplier_address_id\\n\\n\\n\\norder_number\\n\\n\\n\\ntags\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/purchase_orders" }, { "id": "create-a-new-purchase_order", "title": "Create a new purchase_order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order = gecko.PurchaseOrder.build({:company_id=>1, :issued_at=>\\"Time.now\\", :billing_address_id=>1, :shipping_address_id=>1})\\npurchase_order.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/ -d \'{\\"purchase_order\\":{\\"company_id\\":1,\\"issued_at\\":\\"Time.now\\",\\"billing_address_id\\":1,\\"shipping_address_id\\":1}\'}\\n{\\n  \\"purchase_order\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-23T11:19:49.857Z\\",\\n  \\"updated_at\\": \\"2015-11-23T11:19:50.427Z\\",\\n  \\"status\\": \\"active\\",\\n  \\"document_url\\": \\"http://localhost:3000/d/gfPPrlS40mrZOGXXgmOIZcue\\",\\n  \\"billing_address_id\\": 1,\\n  \\"company_id\\": 3,\\n  \\"currency_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"supplier_address_id\\": 4,\\n  \\"default_price_list_id\\": \\"buy\\",\\n  \\"due_at\\": \\"2015-12-07\\",\\n  \\"email\\": \\"william@example.com\\",\\n  \\"notes\\": null,\\n  \\"order_number\\": \\"PO0002\\",\\n  \\"procurement_status\\": \\"unprocured\\",\\n  \\"reference_number\\": null,\\n  \\"tax_treatment\\": \\"exclusive\\",\\n  \\"received_at\\": null,\\n  \\"total\\": \\"8.63\\",\\n  \\"tags\\": [\\n\\n],\\n  \\"cached_quantity\\": \\"3.0\\",\\n  \\"cached_total\\": \\"8.63\\",\\n  \\"default_price_type_id\\": \\"buy\\",\\n  \\"tax_type\\": \\"exclusive\\",\\n  \\"purchase_order_line_item_ids\\": [\\n    3,\\n    2\\n  ],\\n  \\"procurement_ids\\": [\\n\\n]\\n}\\n}\\nCreates a new purchase_order object.\\nThis endpoint also accepts embedded purchase_order_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstatus\\nString\\n\\n\\n\\n\\nbilling_address_id\\nInteger\\nThe billing address for the purchase_order.\\n\\n\\n\\ncompany_id\\nInteger\\nThe company that will be supplying the purchase order\\ntrue\\n\\n\\ncurrency_id\\nInteger\\nThe currency of the purchase_order\\n\\n\\n\\nstock_location_id\\nInteger\\nThe stock location where stock will be delivered\\n\\n\\n\\nsupplier_address_id\\nInteger\\nThe supplier address for the purchase_order.\\n\\n\\n\\ndefault_price_list_id\\nString\\nDefault prices for the purchase_order_line_items (if the variant has a price on this Price List\\n\\n\\n\\ndue_at\\nString\\n\\ntrue\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\norder_number\\nString\\n\\n\\n\\n\\nprocurement_status\\nString\\n\\n\\n\\n\\nreference_number\\nString\\nA reference for the purchase order that isn\'t the order_number\\n\\n\\n\\ntax_treatment\\nString\\nOne of \'exclusive\' or \'inclusive\', if not provided defaults to account default.\\ntrue\\n\\n\\nreceived_at\\nString\\n\\n\\n\\n\\ntotal\\nString\\n\\n\\n\\n\\ntags\\nString\\nReference tags for the purchase order, used in filtering.\\n\\n\\n\\ncached_quantity\\nString\\n\\n\\n\\n\\ncached_total deprecated\\nString\\n\\n\\n\\n\\ndefault_price_type_id deprecated\\nString\\n\\n\\n\\n\\ntax_type deprecated\\nString\\n\\n\\n\\nPurchaseOrderLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\npurchase_order_id\\nInteger\\nThe purchase_order to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\nprocurement_id\\nInteger\\n\\n\\n\\n\\nbase_price\\nString\\n\\n\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\nOptional tax rate override\\n\\n\\n\\nextra_cost_value\\nString\\n\\n\\n\\n\\ntax_rate deprecated\\nString\\nDeprecated in favour of tax_rate_override\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/purchase_orders/" }, { "id": "retrieve-a-particular-purchase_order", "title": "Retrieve a particular purchase_order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.PurchaseOrder.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/1\\n{\\n  \\"purchase_order\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-23T11:19:49.857Z\\",\\n  \\"updated_at\\": \\"2015-11-23T11:19:50.427Z\\",\\n  \\"status\\": \\"active\\",\\n  \\"document_url\\": \\"http://localhost:3000/d/gfPPrlS40mrZOGXXgmOIZcue\\",\\n  \\"billing_address_id\\": 1,\\n  \\"company_id\\": 3,\\n  \\"currency_id\\": 1,\\n  \\"stock_location_id\\": 1,\\n  \\"supplier_address_id\\": 4,\\n  \\"default_price_list_id\\": \\"buy\\",\\n  \\"due_at\\": \\"2015-12-07\\",\\n  \\"email\\": \\"william@example.com\\",\\n  \\"notes\\": null,\\n  \\"order_number\\": \\"PO0002\\",\\n  \\"procurement_status\\": \\"unprocured\\",\\n  \\"reference_number\\": null,\\n  \\"tax_treatment\\": \\"exclusive\\",\\n  \\"received_at\\": null,\\n  \\"total\\": \\"8.63\\",\\n  \\"tags\\": [\\n\\n],\\n  \\"cached_quantity\\": \\"3.0\\",\\n  \\"cached_total\\": \\"8.63\\",\\n  \\"default_price_type_id\\": \\"buy\\",\\n  \\"tax_type\\": \\"exclusive\\",\\n  \\"purchase_order_line_item_ids\\": [\\n    3,\\n    2\\n  ],\\n  \\"procurement_ids\\": [\\n\\n]\\n}\\n}\\nRetrieves the details of an existing purchase_order. You need only supply the unique purchase_order identifier that was returned upon purchase_order creation.HTTP RequestGET https://api.tradegecko.com/purchase_orders/{RESOURCE_ID}" }, { "id": "update-a-purchase_order", "title": "Update a purchase_order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order = gecko.PurchaseOrder.find(1)\\npurchase_order.attributes = {\\n  rate: \\"12.0\\",\\n}\\npurchase_order.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/1 -d \'{\\"purchase_order\\":{\\"status\\":\\"active\\",\\"email\\":\\"hello@tradegecko.com\\",\\"billing_address_id\\":2}}\'\\n\\nResponse\\n\\nReturns 204 status when the purchase_order gets updated successfully.\\n\\nUpdates the specified purchase_order by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the purchase_order creation call.HTTP RequestPUT https://api.tradegecko.com/purchase_orders/{RESOURCE_ID}" }, { "id": "purchase-order-actions", "title": "Purchase Order actions", "body": "Use the following endpoints to manage the receiving of the purchase order. POST /purchase_orders/[:purchase_order_id]/actions/[:action]curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/[:purchase_order_id]/actions/[:purchase_order_action]\\n\\n\\nAction\\nDescription\\n\\n\\n\\nreceive\\nCreate a procurement for the purchase order\\n\\n" }, { "id": "delete-a-purchase_order", "title": "Delete a purchase_order", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order = gecko.PurchaseOrder.find(1).\\npurchase_order.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_orders/1\\n\\nResponse\\n\\nReturns 204 status when the purchase_order gets deleted successfully.\\n\\nPermanently deletes a purchase_order. It cannot be undone. This purchase_order is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/purchase_orders/{RESOURCE_ID}/" }, { "id": "purchaseorderlineitem", "title": "PurchaseOrderLineItem", "body": "This is an object representing a purchase_order_line_item of a purchase_order. Purchase_orders can\\n  have multiple purchase_order_line_items but a purchase_order_line_item object belongs to only one\\n  Purchase_order." }, { "id": "the-purchaseorderlineitem-object", "title": "The PurchaseOrderLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\npurchase_order_id\\nInteger\\nThe purchase_order to which the purchase_order_line_item belongs.\\n\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the purchase_order_line_item belongs.\\n\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the purchase_order_line_item belongs.\\n\\n\\n\\nprocurement_id\\nInteger\\n\\n\\n\\n\\nbase_price\\nString\\n\\ntrue\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\ntrue\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\nOptional tax rate override\\n\\n\\n\\nextra_cost_value\\nString\\n\\ntrue\\n\\n\\ntax_rate  deprecated\\nString\\nDeprecated in favour of tax_rate_override\\n\\n\\n" }, { "id": "list-all-purchase_order_line_items", "title": "List all purchase_order_line_items", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.PurchaseOrderLineItem.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_order_line_items/\\n{\\n  \\"purchase_order_line_items\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n    \\"updated_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n    \\"procurement_id\\": null,\\n    \\"purchase_order_id\\": 2,\\n    \\"tax_type_id\\": 3,\\n    \\"variant_id\\": 8,\\n    \\"base_price\\": null,\\n    \\"freeform\\": false,\\n    \\"image_url\\": null,\\n    \\"label\\": null,\\n    \\"position\\": 0,\\n    \\"price\\": \\"2.5\\",\\n    \\"quantity\\": \\"2.0\\",\\n    \\"tax_rate_override\\": null,\\n    \\"extra_cost_value\\": \\"0.0\\",\\n    \\"tax_rate\\": null\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-23T11:19:07.469Z\\",\\n    \\"updated_at\\": \\"2015-11-23T11:19:07.469Z\\",\\n    \\"procurement_id\\": null,\\n    \\"purchase_order_id\\": 1,\\n    \\"tax_type_id\\": 3,\\n    \\"variant_id\\": 8,\\n    \\"base_price\\": null,\\n    \\"freeform\\": false,\\n    \\"image_url\\": null,\\n    \\"label\\": null,\\n    \\"position\\": 0,\\n    \\"price\\": \\"2.5\\",\\n    \\"quantity\\": \\"1.0\\",\\n    \\"tax_rate_override\\": null,\\n    \\"extra_cost_value\\": \\"0.0\\",\\n    \\"tax_rate\\": null\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-23T11:19:50.297Z\\",\\n    \\"updated_at\\": \\"2015-11-23T11:19:50.297Z\\",\\n    \\"procurement_id\\": null,\\n    \\"purchase_order_id\\": 2,\\n    \\"tax_type_id\\": 3,\\n    \\"variant_id\\": 9,\\n    \\"base_price\\": null,\\n    \\"freeform\\": false,\\n    \\"image_url\\": null,\\n    \\"label\\": null,\\n    \\"position\\": 1,\\n    \\"price\\": \\"2.5\\",\\n    \\"quantity\\": \\"1.0\\",\\n    \\"tax_rate_override\\": null,\\n    \\"extra_cost_value\\": \\"0.0\\",\\n    \\"tax_rate\\": null\\n  }\\n]\\n}\\nReturns a list of purchase_order_line_items you\u2019ve previously created. The purchase_order_line_items are returned in sorted order, with the most recent purchase_order_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of purchase_order_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\npurchase_order_id\\nFilter purchase_order_line_items by order\\n\\n\\nvariant_id\\nFilter purchase_order_line_items by variant\\n\\n\\ntax_type_id\\nFilter purchase_order_line_items by tax_type\\n\\n\\nprocurement_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/purchase_order_line_items" }, { "id": "create-a-new-purchase_order_line_item", "title": "Create a new purchase_order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order_line_item = gecko.PurchaseOrderLineItem.build({:quantity=>\\"12.0\\", :order_id=>1, :tax_type_id=>1, :price=>\\"10.0\\"})\\npurchase_order_line_item.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_order_line_items/ -d \'{\\"purchase_order_line_item\\":{\\"quantity\\":\\"12.0\\",\\"order_id\\":1,\\"tax_type_id\\":1,\\"price\\":\\"10.0\\"}\'}\\n{\\n  \\"purchase_order_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n  \\"updated_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n  \\"procurement_id\\": null,\\n  \\"purchase_order_id\\": 2,\\n  \\"tax_type_id\\": 3,\\n  \\"variant_id\\": 8,\\n  \\"base_price\\": null,\\n  \\"freeform\\": false,\\n  \\"image_url\\": null,\\n  \\"label\\": null,\\n  \\"position\\": 0,\\n  \\"price\\": \\"2.5\\",\\n  \\"quantity\\": \\"2.0\\",\\n  \\"tax_rate_override\\": null,\\n  \\"extra_cost_value\\": \\"0.0\\",\\n  \\"tax_rate\\": null\\n}\\n}\\nCreates a new purchase_order_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\npurchase_order_id\\nInteger\\nThe purchase_order to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\ntax_type_id\\nInteger\\nThe tax_type to which the purchase_order_line_item belongs.\\ntrue\\n\\n\\nprocurement_id\\nInteger\\n\\n\\n\\n\\nbase_price\\nString\\n\\n\\n\\n\\nfreeform\\nBoolean\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\n\\nlabel\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\ntax_rate_override\\nString\\nOptional tax rate override\\n\\n\\n\\nextra_cost_value\\nString\\n\\n\\n\\n\\ntax_rate deprecated\\nString\\nDeprecated in favour of tax_rate_override\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/purchase_order_line_items/" }, { "id": "retrieve-a-particular-purchase_order_line_item", "title": "Retrieve a particular purchase_order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.PurchaseOrderLineItem.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_order_line_items/1\\n{\\n  \\"purchase_order_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n  \\"updated_at\\": \\"2015-11-23T11:19:50.405Z\\",\\n  \\"procurement_id\\": null,\\n  \\"purchase_order_id\\": 2,\\n  \\"tax_type_id\\": 3,\\n  \\"variant_id\\": 8,\\n  \\"base_price\\": null,\\n  \\"freeform\\": false,\\n  \\"image_url\\": null,\\n  \\"label\\": null,\\n  \\"position\\": 0,\\n  \\"price\\": \\"2.5\\",\\n  \\"quantity\\": \\"2.0\\",\\n  \\"tax_rate_override\\": null,\\n  \\"extra_cost_value\\": \\"0.0\\",\\n  \\"tax_rate\\": null\\n}\\n}\\nRetrieves the details of an existing purchase_order_line_item. You need only supply the unique purchase_order_line_item identifier that was returned upon purchase_order_line_item creation.HTTP RequestGET https://api.tradegecko.com/purchase_order_line_items/{RESOURCE_ID}" }, { "id": "update-a-purchase_order_line_item", "title": "Update a purchase_order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order_line_item = gecko.PurchaseOrderLineItem.find(1)\\npurchase_order_line_item.attributes = {\\n  rate: \\"12.0\\",\\n}\\npurchase_order_line_item.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_order_line_items/1 -d \'{\\"purchase_order_line_item\\":{\\"quantity\\":\\"22.0\\",\\"price\\":\\"12.0\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the purchase_order_line_item gets updated successfully.\\n\\nUpdates the specified purchase_order_line_item by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the purchase_order_line_item creation call.HTTP RequestPUT https://api.tradegecko.com/purchase_order_line_items/{RESOURCE_ID}" }, { "id": "delete-a-purchase_order_line_item", "title": "Delete a purchase_order_line_item", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\npurchase_order_line_item = gecko.PurchaseOrderLineItem.find(1).\\npurchase_order_line_item.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/purchase_order_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the purchase_order_line_item gets deleted successfully.\\n\\nPermanently deletes a purchase_order_line_item. It cannot be undone. This purchase_order_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/purchase_order_line_items/{RESOURCE_ID}/" }, { "id": "stockadjustment", "title": "StockAdjustment", "body": "This is an object representing a stock_adjustment." }, { "id": "the-stockadjustment-object", "title": "The StockAdjustment object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nadjustment_number\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\nreason\\nString\\nOne of supplier (New Products), customer (Returned goods), damaged, shrinkage, promotion or production.\\n\\n\\n\\nreason_label\\nString\\nDisplay label of the stock adjustment\'s reason (unifies the reason and stock_adjustment_reason_id fields)\\n\\n\\n\\nstock_adjustment_reason_id\\nInteger\\nInternal ID of Custom stock adjustment reasons. See https://go.tradegecko.com/account/stock_adjustment_reasons for your accounts reasons\\n\\n\\n\\nstock_location_id\\nInteger\\nDefaults to account primary_location.\\n\\n\\n\\ncached_quantity\\nString\\nCumulative quantity of all variants being adjusted\\ntrue\\n\\n\\ncached_total\\nString\\nCumulative value of all variants being adjusted\\ntrue\\n\\n\\nstock_adjustment_line_item_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-stock_adjustments", "title": "List all stock_adjustments", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustments/\\n{\\n  \\"stock_adjustments\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-25T07:27:39.813Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:40.176Z\\",\\n    \\"adjustment_number\\": \\"SA0002\\",\\n    \\"notes\\": \\"Reversal of Stock Adjustment #SA0001\\",\\n    \\"reason\\": \\"damaged\\",\\n    \\"stock_location_id\\": 1,\\n    \\"cached_quantity\\": \\"-15.0\\",\\n    \\"cached_total\\": \\"37.5\\",\\n    \\"stock_adjustment_line_item_ids\\": [\\n      3,\\n      4\\n    ]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-25T07:27:20.194Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:20.740Z\\",\\n    \\"adjustment_number\\": \\"SA0001\\",\\n    \\"notes\\": null,\\n    \\"reason\\": \\"production\\",\\n    \\"stock_location_id\\": 1,\\n    \\"cached_quantity\\": \\"25.0\\",\\n    \\"cached_total\\": \\"62.5\\",\\n    \\"stock_adjustment_line_item_ids\\": [\\n      1,\\n      2\\n    ]\\n  }\\n]\\n}\\nReturns a list of stock_adjustments you\u2019ve previously created. The stock_adjustments are returned in sorted order, with the most recent stock_adjustments appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of stock_adjustment IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nadjustment_number\\n\\n\\n\\nstock_adjustment_reason_id\\n\\n\\n\\nstock_location_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/stock_adjustments" }, { "id": "create-a-new-stock_adjustment", "title": "Create a new stock_adjustment", "body": "curl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustments/ -d \'{\\"stock_adjustment\\":{\\"company_id\\":1,\\"issued_at\\":\\"Time.now\\",\\"billing_address_id\\":1,\\"shipping_address_id\\":1}\'}\\n{\\n  \\"stock_adjustment\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-25T07:27:39.813Z\\",\\n  \\"updated_at\\": \\"2015-11-25T07:27:40.176Z\\",\\n  \\"adjustment_number\\": \\"SA0002\\",\\n  \\"notes\\": \\"Reversal of Stock Adjustment #SA0001\\",\\n  \\"reason\\": \\"damaged\\",\\n  \\"stock_location_id\\": 1,\\n  \\"cached_quantity\\": \\"-15.0\\",\\n  \\"cached_total\\": \\"37.5\\",\\n  \\"stock_adjustment_line_item_ids\\": [\\n    3,\\n    4\\n  ]\\n}\\n}\\nCreates a new stock_adjustment object.\\nThis endpoint also accepts embedded stock_adjustment_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nadjustment_number\\nString\\n\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\nreason\\nString\\nOne of supplier (New Products), customer (Returned goods), damaged, shrinkage, promotion or production.\\n\\n\\nStockAdjustmentLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstock_adjustment_id\\nInteger\\nThe stock_adjustment to which the resource belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/stock_adjustments/" }, { "id": "retrieve-a-particular-stock_adjustment", "title": "Retrieve a particular stock_adjustment", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustments/1\\n{\\n  \\"stock_adjustment\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-25T07:27:39.813Z\\",\\n  \\"updated_at\\": \\"2015-11-25T07:27:40.176Z\\",\\n  \\"adjustment_number\\": \\"SA0002\\",\\n  \\"notes\\": \\"Reversal of Stock Adjustment #SA0001\\",\\n  \\"reason\\": \\"damaged\\",\\n  \\"stock_location_id\\": 1,\\n  \\"cached_quantity\\": \\"-15.0\\",\\n  \\"cached_total\\": \\"37.5\\",\\n  \\"stock_adjustment_line_item_ids\\": [\\n    3,\\n    4\\n  ]\\n}\\n}\\nRetrieves the details of an existing stock_adjustment. You need only supply the unique stock_adjustment identifier that was returned upon stock_adjustment creation.HTTP RequestGET https://api.tradegecko.com/stock_adjustments/{RESOURCE_ID}" }, { "id": "stock-adjustment-actions", "title": "Stock Adjustment actions", "body": "Use the following endpoints to manage the reverting of the stock adjustment. POST /stock_adjustments/[:stock_adjustment_id]/actions/[:action]curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustments/[:stock_adjustment_id]/actions/[:stock_adjustment_action]\\n\\n\\nAction\\nDescription\\n\\n\\n\\nrevert\\nRevert the stock adjustment\\n\\n" }, { "id": "delete-a-stock_adjustment", "title": "Delete a stock_adjustment", "body": "curl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustments/1\\n\\nResponse\\n\\nReturns 204 status when the stock_adjustment gets deleted successfully.\\n\\nPermanently deletes a stock_adjustment. It cannot be undone. This stock_adjustment is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/stock_adjustments/{RESOURCE_ID}/" }, { "id": "stockadjustmentlineitem", "title": "StockAdjustmentLineItem", "body": "This is an object representing a stock_adjustment_line_item of a stock_adjustment. Stock_adjustments can\\n  have multiple stock_adjustment_line_items but a stock_adjustment_line_item object belongs to only one\\n  Stock_adjustment." }, { "id": "the-stockadjustmentlineitem-object", "title": "The StockAdjustmentLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstock_adjustment_id\\nInteger\\nThe stock_adjustment to which the resource belongs.\\n\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\n\\n\\n" }, { "id": "list-all-stock_adjustment_line_items", "title": "List all stock_adjustment_line_items", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustment_line_items/\\n{\\n  \\"stock_adjustment_line_items\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n    \\"stock_adjustment_id\\": 2,\\n    \\"variant_id\\": 8,\\n    \\"quantity\\": \\"-5.0\\",\\n    \\"position\\": 0,\\n    \\"price\\": \\"2.5\\"\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-25T07:27:20.464Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:20.464Z\\",\\n    \\"stock_adjustment_id\\": 1,\\n    \\"variant_id\\": 8,\\n    \\"quantity\\": \\"10.0\\",\\n    \\"position\\": 0,\\n    \\"price\\": \\"2.5\\"\\n  },\\n  {\\n    \\"id\\": 4,\\n    \\"created_at\\": \\"2015-11-25T07:27:40.136Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:40.136Z\\",\\n    \\"stock_adjustment_id\\": 2,\\n    \\"variant_id\\": 9,\\n    \\"quantity\\": \\"-10.0\\",\\n    \\"position\\": 1,\\n    \\"price\\": \\"2.5\\"\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-25T07:27:20.697Z\\",\\n    \\"updated_at\\": \\"2015-11-25T07:27:20.697Z\\",\\n    \\"stock_adjustment_id\\": 1,\\n    \\"variant_id\\": 9,\\n    \\"quantity\\": \\"15.0\\",\\n    \\"position\\": 1,\\n    \\"price\\": \\"2.5\\"\\n  }\\n]\\n}\\nReturns a list of stock_adjustment_line_items you\u2019ve previously created. The stock_adjustment_line_items are returned in sorted order, with the most recent stock_adjustment_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of stock_adjustment_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstock_adjustment_id\\nFilter resources by stock_adjustment\\n\\n\\nvariant_id\\nFilter resources by variant\\n\\nHTTP Request:GET  https://api.tradegecko.com/stock_adjustment_line_items" }, { "id": "create-a-new-stock_adjustment_line_item", "title": "Create a new stock_adjustment_line_item", "body": "curl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustment_line_items/ -d \'{\\"stock_adjustment_line_item\\":{\\"quantity\\":\\"12.0\\",\\"stock_adjustment_id\\":1,\\"variant_id\\":1,\\"price\\":\\"10.0\\"}\'}\\n{\\n  \\"stock_adjustment_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n  \\"updated_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n  \\"stock_adjustment_id\\": 2,\\n  \\"variant_id\\": 8,\\n  \\"quantity\\": \\"-5.0\\",\\n  \\"position\\": 0,\\n  \\"price\\": \\"2.5\\"\\n}\\n}\\nCreates a new stock_adjustment_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstock_adjustment_id\\nInteger\\nThe stock_adjustment to which the resource belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nprice\\nString\\n\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/stock_adjustment_line_items/" }, { "id": "retrieve-a-particular-stock_adjustment_line_item", "title": "Retrieve a particular stock_adjustment_line_item", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustment_line_items/1\\n{\\n  \\"stock_adjustment_line_item\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n  \\"updated_at\\": \\"2015-11-25T07:27:39.967Z\\",\\n  \\"stock_adjustment_id\\": 2,\\n  \\"variant_id\\": 8,\\n  \\"quantity\\": \\"-5.0\\",\\n  \\"position\\": 0,\\n  \\"price\\": \\"2.5\\"\\n}\\n}\\nRetrieves the details of an existing stock_adjustment_line_item. You need only supply the unique stock_adjustment_line_item identifier that was returned upon stock_adjustment_line_item creation.HTTP RequestGET https://api.tradegecko.com/stock_adjustment_line_items/{RESOURCE_ID}" }, { "id": "delete-a-stock_adjustment_line_item", "title": "Delete a stock_adjustment_line_item", "body": "curl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_adjustment_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the stock_adjustment_line_item gets deleted successfully.\\n\\nPermanently deletes a stock_adjustment_line_item. It cannot be undone. This stock_adjustment_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/stock_adjustment_line_items/{RESOURCE_ID}/" }, { "id": "stocktransfer", "title": "StockTransfer", "body": "This is an object representing a stock_transfer." }, { "id": "the-stocktransfer-object", "title": "The StockTransfer object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'received\'\\n\\n\\n\\nadjustment_number\\nString\\n\\n\\n\\n\\nreceived_at\\nString\\nAutomatically set when stock transfer status is set to received\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\nsource_location_id\\nInteger\\nOrigin of stock being tranferred\\n\\n\\n\\ndestination_location_id\\nInteger\\nDestination of stock being transferred\\n\\n\\n\\ncached_quantity\\nString\\nCumulative quantity of all variants being transferred\\ntrue\\n\\n\\ntransacted_at\\nString\\n\\n\\n\\n\\nstock_transfer_line_item_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-stock_transfers", "title": "List all stock_transfers", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfers/\\n{\\n  \\"stock_transfers\\": [\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-26T04:14:45.572Z\\",\\n    \\"updated_at\\": \\"2015-11-26T04:14:45.606Z\\",\\n    \\"adjustment_number\\": \\"ST0002\\",\\n    \\"status\\": \\"active\\",\\n    \\"received_at\\": null,\\n    \\"notes\\": \\"Reversal of Stock Transfer #ST0001\\",\\n    \\"source_location_id\\": 3,\\n    \\"destination_location_id\\": 1,\\n    \\"cached_quantity\\": \\"8.0\\",\\n    \\"transacted_at\\": null,\\n    \\"stock_transfer_line_item_ids\\": [\\n      3,\\n      4\\n    ]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-26T03:53:17.729Z\\",\\n    \\"updated_at\\": \\"2015-11-26T03:53:21.760Z\\",\\n    \\"adjustment_number\\": \\"ST0001\\",\\n    \\"status\\": \\"received\\",\\n    \\"received_at\\": \\"2015-11-26T03:52:51.000Z\\",\\n    \\"notes\\": null,\\n    \\"source_location_id\\": 1,\\n    \\"destination_location_id\\": 3,\\n    \\"cached_quantity\\": \\"17.0\\",\\n    \\"transacted_at\\": \\"2015-11-26T03:52:51.000Z\\",\\n    \\"stock_transfer_line_item_ids\\": [\\n      1,\\n      2\\n    ]\\n  }\\n]\\n}\\nReturns a list of stock_transfers you\u2019ve previously created. The stock_transfers are returned in sorted order, with the most recent stock_transfers appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of stock_transfer IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\nstatus\\n\\n\\n\\nadjustment_number\\n\\n\\n\\nreceived_at\\n\\n\\n\\nnotes\\n\\n\\n\\nsource_location_id\\n\\n\\n\\ndestination_location_id\\n\\n\\n\\ncached_quantity\\n\\n\\n\\ntransacted_at\\n\\n\\n\\nstock_transfer_line_item_ids\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/stock_transfers" }, { "id": "create-a-new-stock_transfer", "title": "Create a new stock_transfer", "body": "curl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfers/ -d \'{\\"stock_transfer\\":{\\"company_id\\":1,\\"issued_at\\":\\"Time.now\\",\\"billing_address_id\\":1,\\"shipping_address_id\\":1}\'}\\n{\\n  \\"stock_transfer\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-26T04:14:45.572Z\\",\\n  \\"updated_at\\": \\"2015-11-26T04:14:45.606Z\\",\\n  \\"adjustment_number\\": \\"ST0002\\",\\n  \\"status\\": \\"active\\",\\n  \\"received_at\\": null,\\n  \\"notes\\": \\"Reversal of Stock Transfer #ST0001\\",\\n  \\"source_location_id\\": 3,\\n  \\"destination_location_id\\": 1,\\n  \\"cached_quantity\\": \\"8.0\\",\\n  \\"transacted_at\\": null,\\n  \\"stock_transfer_line_item_ids\\": [\\n    3,\\n    4\\n  ]\\n}\\n}\\nCreates a new stock_transfer object.\\nThis endpoint also accepts embedded stock_transfer_line_items.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'received\'\\n\\n\\n\\nadjustment_number\\nString\\n\\n\\n\\n\\nreceived_at\\nString\\nAutomatically set when stock transfer status is set to received\\n\\n\\n\\nnotes\\nString\\n\\n\\n\\n\\nsource_location_id\\nInteger\\nOrigin of stock being tranferred\\ntrue\\n\\n\\ndestination_location_id\\nInteger\\nDestination of stock being transferred\\ntrue\\n\\n\\ntransacted_at\\nString\\n\\n\\n\\n\\nstock_transfer_line_item_ids\\nArray\\n\\n\\n\\nStockTransferLineItem\\n\\nChild Attribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstock_transfer_id\\nInteger\\nThe stock_transfer to which the resource belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/stock_transfers/" }, { "id": "retrieve-a-particular-stock_transfer", "title": "Retrieve a particular stock_transfer", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfers/1\\n{\\n  \\"stock_transfer\\": {\\n  \\"id\\": 2,\\n  \\"created_at\\": \\"2015-11-26T04:14:45.572Z\\",\\n  \\"updated_at\\": \\"2015-11-26T04:14:45.606Z\\",\\n  \\"adjustment_number\\": \\"ST0002\\",\\n  \\"status\\": \\"active\\",\\n  \\"received_at\\": null,\\n  \\"notes\\": \\"Reversal of Stock Transfer #ST0001\\",\\n  \\"source_location_id\\": 3,\\n  \\"destination_location_id\\": 1,\\n  \\"cached_quantity\\": \\"8.0\\",\\n  \\"transacted_at\\": null,\\n  \\"stock_transfer_line_item_ids\\": [\\n    3,\\n    4\\n  ]\\n}\\n}\\nRetrieves the details of an existing stock_transfer. You need only supply the unique stock_transfer identifier that was returned upon stock_transfer creation.HTTP RequestGET https://api.tradegecko.com/stock_transfers/{RESOURCE_ID}" }, { "id": "stock-transfer-actions", "title": "Stock Transfer actions", "body": "Use the following endpoints to manage the receiving or reverting of the stock transfer. POST /stock_transfers/[:stock_transfer_id]/actions/[:action]curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfers/[:stock_transfer_id]/actions/[:stock_transfer_action]\\n\\n\\nAction\\nDescription\\n\\n\\n\\nreceive\\nReceive the stock transfer\\n\\n\\nrevert\\nRevert the stock transfer\\n\\n" }, { "id": "delete-a-stock_transfer", "title": "Delete a stock_transfer", "body": "curl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfers/1\\n\\nResponse\\n\\nReturns 204 status when the stock_transfer gets deleted successfully.\\n\\nPermanently deletes a stock_transfer. It cannot be undone. This stock_transfer is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/stock_transfers/{RESOURCE_ID}/" }, { "id": "stocktransferlineitem", "title": "StockTransferLineItem", "body": "This is an object representing a stock_transfer_line_item of a stock_transfer. Stock_transfers can\\n  have multiple stock_transfer_line_items but a stock_transfer_line_item object belongs to only one\\n  Stock_transfer." }, { "id": "the-stocktransferlineitem-object", "title": "The StockTransferLineItem object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstock_transfer_id\\nInteger\\nThe stock_transfer to which the resource belongs.\\n\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\n\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nimage_url\\nString\\n\\ntrue\\n\\n" }, { "id": "list-all-stock_transfer_line_items", "title": "List all stock_transfer_line_items", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfer_line_items/\\n{\\n  \\"stock_transfer_line_items\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n    \\"updated_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n    \\"stock_transfer_id\\": 1,\\n    \\"variant_id\\": 8,\\n    \\"quantity\\": \\"8.0\\",\\n    \\"position\\": 0,\\n    \\"image_url\\": null\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-26T03:53:17.775Z\\",\\n    \\"updated_at\\": \\"2015-11-26T03:53:17.775Z\\",\\n    \\"stock_transfer_id\\": 1,\\n    \\"variant_id\\": 9,\\n    \\"quantity\\": \\"9.0\\",\\n    \\"position\\": 1,\\n    \\"image_url\\": null\\n  }\\n]\\n}\\nReturns a list of stock_transfer_line_items you\u2019ve previously created. The stock_transfer_line_items are returned in sorted order, with the most recent stock_transfer_line_items appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of stock_transfer_line_item IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstock_transfer_id\\nFilter resources by stock_transfer\\n\\n\\nvariant_id\\nFilter resources by variant\\n\\nHTTP Request:GET  https://api.tradegecko.com/stock_transfer_line_items" }, { "id": "create-a-new-stock_transfer_line_item", "title": "Create a new stock_transfer_line_item", "body": "curl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfer_line_items/ -d \'{\\"stock_transfer_line_item\\":{\\"quantity\\":\\"12.0\\",\\"stock_transfer_id\\":1,\\"variant_id\\":1,\\"price\\":\\"10.0\\"}\'}\\n{\\n  \\"stock_transfer_line_item\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n  \\"updated_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n  \\"stock_transfer_id\\": 1,\\n  \\"variant_id\\": 8,\\n  \\"quantity\\": \\"8.0\\",\\n  \\"position\\": 0,\\n  \\"image_url\\": null\\n}\\n}\\nCreates a new stock_transfer_line_item object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nstock_transfer_id\\nInteger\\nThe stock_transfer to which the resource belongs.\\ntrue\\n\\n\\nvariant_id\\nInteger\\nThe variant to which the resource belongs.\\ntrue\\n\\n\\nquantity\\nString\\n\\n\\n\\n\\nposition\\nInteger\\n\\n\\n\\n\\nimage_url\\nString\\n\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/stock_transfer_line_items/" }, { "id": "retrieve-a-particular-stock_transfer_line_item", "title": "Retrieve a particular stock_transfer_line_item", "body": "curl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfer_line_items/1\\n{\\n  \\"stock_transfer_line_item\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n  \\"updated_at\\": \\"2015-11-26T03:53:17.761Z\\",\\n  \\"stock_transfer_id\\": 1,\\n  \\"variant_id\\": 8,\\n  \\"quantity\\": \\"8.0\\",\\n  \\"position\\": 0,\\n  \\"image_url\\": null\\n}\\n}\\nRetrieves the details of an existing stock_transfer_line_item. You need only supply the unique stock_transfer_line_item identifier that was returned upon stock_transfer_line_item creation.HTTP RequestGET https://api.tradegecko.com/stock_transfer_line_items/{RESOURCE_ID}" }, { "id": "delete-a-stock_transfer_line_item", "title": "Delete a stock_transfer_line_item", "body": "curl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/stock_transfer_line_items/1\\n\\nResponse\\n\\nReturns 204 status when the stock_transfer_line_item gets deleted successfully.\\n\\nPermanently deletes a stock_transfer_line_item. It cannot be undone. This stock_transfer_line_item is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/stock_transfer_line_items/{RESOURCE_ID}/" }, { "id": "taxtype", "title": "TaxType", "body": "This is an object representing a tax_type." }, { "id": "the-taxtype-object", "title": "The TaxType object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\ncode\\nString\\n\\n\\n\\n\\nimported_from\\nString\\nSource location (e.g. Quickbooks)\\ntrue\\n\\n\\nname\\nString\\nDisplay name\\n\\n\\n\\neffective_rate\\nString\\nComputed rate of child tax_components\\ntrue\\n\\n\\ntax_component_ids\\nArray\\n\\ntrue\\n\\n" }, { "id": "list-all-tax_types", "title": "List all tax_types", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.TaxType.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/tax_types/\\n{\\n  \\"tax_types\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"code\\": \\"PURCHASES\\",\\n    \\"imported_from\\": null,\\n    \\"name\\": \\"Purchases Tax\\",\\n    \\"status\\": \\"active\\",\\n    \\"quickbooks_online_id\\": null,\\n    \\"xero_online_id\\": null,\\n    \\"effective_rate\\": \\"15.0\\",\\n    \\"tax_component_ids\\": [\\n      3\\n    ]\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"code\\": \\"SALES\\",\\n    \\"imported_from\\": null,\\n    \\"name\\": \\"Sales Tax\\",\\n    \\"status\\": \\"active\\",\\n    \\"quickbooks_online_id\\": null,\\n    \\"xero_online_id\\": null,\\n    \\"effective_rate\\": \\"15.0\\",\\n    \\"tax_component_ids\\": [\\n      2\\n    ]\\n  },\\n  {\\n    \\"id\\": 1,\\n    \\"code\\": \\"TAX EXEMPT\\",\\n    \\"imported_from\\": null,\\n    \\"name\\": \\"Tax Exempt\\",\\n    \\"status\\": \\"active\\",\\n    \\"quickbooks_online_id\\": null,\\n    \\"xero_online_id\\": null,\\n    \\"effective_rate\\": \\"0.0\\",\\n    \\"tax_component_ids\\": [\\n      1\\n    ]\\n  }\\n]\\n}\\nReturns a list of tax_types you\u2019ve previously created. The tax_types are returned in sorted order, with the most recent tax_types appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of tax_type IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\nHTTP Request:GET  https://api.tradegecko.com/tax_types" }, { "id": "create-a-new-tax_type", "title": "Create a new tax_type", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ntax_type = gecko.TaxType.build({:name=>\\"Retail\\", :code=>\\"RETAIL\\"})\\ntax_type.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/tax_types/ -d \'{\\"tax_type\\":{\\"name\\":\\"Retail\\",\\"code\\":\\"RETAIL\\"}\'}\\n{\\n  \\"tax_type\\": {\\n  \\"id\\": 3,\\n  \\"code\\": \\"PURCHASES\\",\\n  \\"imported_from\\": null,\\n  \\"name\\": \\"Purchases Tax\\",\\n  \\"status\\": \\"active\\",\\n  \\"quickbooks_online_id\\": null,\\n  \\"xero_online_id\\": null,\\n  \\"effective_rate\\": \\"15.0\\",\\n  \\"tax_component_ids\\": [\\n    3\\n  ]\\n}\\n}\\nCreates a new tax_type object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\ncode\\nString\\n\\n\\n\\n\\nname\\nString\\nDisplay name\\ntrue\\n\\nHTTP RequestPOST https://api.tradegecko.com/tax_types/" }, { "id": "retrieve-a-particular-tax_type", "title": "Retrieve a particular tax_type", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.TaxType.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/tax_types/1\\n{\\n  \\"tax_type\\": {\\n  \\"id\\": 3,\\n  \\"code\\": \\"PURCHASES\\",\\n  \\"imported_from\\": null,\\n  \\"name\\": \\"Purchases Tax\\",\\n  \\"status\\": \\"active\\",\\n  \\"quickbooks_online_id\\": null,\\n  \\"xero_online_id\\": null,\\n  \\"effective_rate\\": \\"15.0\\",\\n  \\"tax_component_ids\\": [\\n    3\\n  ]\\n}\\n}\\nRetrieves the details of an existing tax_type. You need only supply the unique tax_type identifier that was returned upon tax_type creation.HTTP RequestGET https://api.tradegecko.com/tax_types/{RESOURCE_ID}" }, { "id": "update-a-tax_type", "title": "Update a tax_type", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ntax_type = gecko.TaxType.find(1)\\ntax_type.attributes = {\\n  rate: \\"12.0\\",\\n}\\ntax_type.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/tax_types/1 -d \'{\\"tax_type\\":{\\"name\\":\\"Wholesale\\",\\"code\\":\\"WHOLESALE\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the tax_type gets updated successfully.\\n\\nUpdates the specified tax_type by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the tax_type creation call.HTTP RequestPUT https://api.tradegecko.com/tax_types/{RESOURCE_ID}" }, { "id": "delete-a-tax_type", "title": "Delete a tax_type", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ntax_type = gecko.TaxType.find(1).\\ntax_type.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/tax_types/1\\n\\nResponse\\n\\nReturns 204 status when the tax_type gets deleted successfully.\\n\\nPermanently deletes a tax_type. It cannot be undone. This tax_type is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/tax_types/{RESOURCE_ID}/" }, { "id": "user", "title": "User", "body": "This is an object representing a user." }, { "id": "the-user-object", "title": "The User object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\naction_items_email\\nString\\nFrequency of action items email [off, daily, weekly]\\n\\n\\n\\navatar_url\\nString\\nThis image is not processed (so it accepts gifs!)\\n\\n\\n\\nbilling_contact\\nBoolean\\nTells whether user is billing_contact for the current account\\n\\n\\n\\nemail\\nString\\n\\n\\n\\n\\nfirst_name\\nString\\n\\n\\n\\n\\nlast_name\\nString\\n\\n\\n\\n\\nlast_sign_in_at\\nString\\n\\n\\n\\n\\nlocation\\nString\\n\\n\\n\\n\\nlogin_id\\nInteger\\nThe current login identifier.\\ntrue\\n\\n\\nmobile\\nString\\n\\n\\n\\n\\nnotification_email\\nBoolean\\n\\n\\n\\n\\npermissions\\nArray\\nPermissions available to user.\\n\\n\\n\\nphone_number\\nString\\n\\n\\n\\n\\nposition\\nString\\nRole in the company\\n\\n\\n\\nsales_report_email\\nBoolean\\n\\n\\n\\n\\naccount_id\\nString\\nThe current account identifier.\\ntrue\\n\\n" }, { "id": "list-all-users", "title": "List all users", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.User.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users/\\n{\\n  \\"users\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2015-11-02T01:22:23.877Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:22:23.920Z\\",\\n    \\"action_items_email\\": \\"weekly\\",\\n    \\"avatar_url\\": \\"/assets/avatars/avatar1-70fa2b37c7341a16d9ef72fc6b0f961c253965e9c395fc063ad0165bc65b7167.png\\",\\n    \\"billing_contact\\": true,\\n    \\"email\\": \\"example@tradegecko.com\\",\\n    \\"first_name\\": \\"Gordon\\",\\n    \\"last_name\\": \\"Gecko\\",\\n    \\"last_sign_in_at\\": \\"2015-11-17T06:35:25.521Z\\",\\n    \\"location\\": null,\\n    \\"login_id\\": 1,\\n    \\"mobile\\": null,\\n    \\"notification_email\\": true,\\n    \\"permissions\\": [\\n      \\"read_reports\\",\\n      \\"write_stocks\\",\\n      \\"write_orders\\",\\n      \\"write_products\\",\\n      \\"write_settings\\",\\n      \\"write_companies\\",\\n      \\"read_buy_prices\\"\\n    ],\\n    \\"phone_number\\": null,\\n    \\"position\\": null,\\n    \\"sales_report_email\\": true,\\n    \\"status\\": \\"active\\",\\n    \\"account_id\\": 1\\n  }\\n]\\n}\\nReturns a list of users you\u2019ve previously created. The users are returned in sorted order, with the most recent users appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of user IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\nlogin_id\\n\\n\\n\\naccount_id\\n\\n\\nHTTP Request:GET  https://api.tradegecko.com/users" }, { "id": "retrieve-a-particular-user", "title": "Retrieve a particular user", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.User.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users/1\\n{\\n  \\"user\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:23.877Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:23.920Z\\",\\n  \\"action_items_email\\": \\"weekly\\",\\n  \\"avatar_url\\": \\"/assets/avatars/avatar1-70fa2b37c7341a16d9ef72fc6b0f961c253965e9c395fc063ad0165bc65b7167.png\\",\\n  \\"billing_contact\\": true,\\n  \\"email\\": \\"example@tradegecko.com\\",\\n  \\"first_name\\": \\"Gordon\\",\\n  \\"last_name\\": \\"Gecko\\",\\n  \\"last_sign_in_at\\": \\"2015-11-17T06:35:25.521Z\\",\\n  \\"location\\": null,\\n  \\"login_id\\": 1,\\n  \\"mobile\\": null,\\n  \\"notification_email\\": true,\\n  \\"permissions\\": [\\n    \\"read_reports\\",\\n    \\"write_stocks\\",\\n    \\"write_orders\\",\\n    \\"write_products\\",\\n    \\"write_settings\\",\\n    \\"write_companies\\",\\n    \\"read_buy_prices\\"\\n  ],\\n  \\"phone_number\\": null,\\n  \\"position\\": null,\\n  \\"sales_report_email\\": true,\\n  \\"status\\": \\"active\\",\\n  \\"account_id\\": 1\\n}\\n}\\nRetrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.HTTP RequestGET https://api.tradegecko.com/users/{RESOURCE_ID}" }, { "id": "get-current-user", "title": "Get current user", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.User.current\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users/current\\n{\\n  \\"user\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2015-11-02T01:22:23.877Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:22:23.920Z\\",\\n  \\"action_items_email\\": \\"weekly\\",\\n  \\"avatar_url\\": \\"/assets/avatars/avatar1-70fa2b37c7341a16d9ef72fc6b0f961c253965e9c395fc063ad0165bc65b7167.png\\",\\n  \\"billing_contact\\": true,\\n  \\"email\\": \\"example@tradegecko.com\\",\\n  \\"first_name\\": \\"Gordon\\",\\n  \\"last_name\\": \\"Gecko\\",\\n  \\"last_sign_in_at\\": \\"2015-11-17T06:35:25.521Z\\",\\n  \\"location\\": null,\\n  \\"login_id\\": 1,\\n  \\"mobile\\": null,\\n  \\"notification_email\\": true,\\n  \\"permissions\\": [\\n    \\"read_reports\\",\\n    \\"write_stocks\\",\\n    \\"write_orders\\",\\n    \\"write_products\\",\\n    \\"write_settings\\",\\n    \\"write_companies\\",\\n    \\"read_buy_prices\\"\\n  ],\\n  \\"phone_number\\": null,\\n  \\"position\\": null,\\n  \\"sales_report_email\\": true,\\n  \\"status\\": \\"active\\",\\n  \\"account_id\\": 1\\n}\\n}\\nRetrieves the details of the current user.HTTP RequestGET https://api.tradegecko.com/users/current" }, { "id": "update-a-user", "title": "Update a user", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nuser = gecko.User.find(1)\\nuser.attributes = {\\n  rate: \\"12.0\\",\\n}\\nuser.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users/1 -d \'{\\"user\\":{\\"first_name\\":\\"Gordon\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the user gets updated successfully.\\n\\nUpdates the specified user by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the user creation call.HTTP RequestPUT https://api.tradegecko.com/users/{RESOURCE_ID}" }, { "id": "delete-a-user", "title": "Delete a user", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nuser = gecko.User.find(1).\\nuser.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/users/1\\n\\nResponse\\n\\nReturns 204 status when the user gets deleted successfully.\\n\\nPermanently deletes a user. It cannot be undone. This user is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/users/{RESOURCE_ID}/" }, { "id": "variant", "title": "Variant", "body": "This is an object representing a variant of a product. Products can\\n  have multiple variants but a variant object belongs to only one\\n  Product." }, { "id": "the-variant-object", "title": "The Variant object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\n\\ntrue\\n\\n\\nupdated_at\\nString\\n\\ntrue\\n\\n\\nstatus\\nString\\nTells whether the resource is \'active\' or \'archived\'\\ntrue\\n\\n\\nproduct_id\\nInteger\\nThe product to which the variant belongs.\\n\\n\\n\\ndefault_ledger_account_id\\nInteger\\nUsed for accounting integrations. (e.g. Revenue Ledger)\\n\\n\\n\\nbuy_price\\nString\\n\\n\\n\\n\\ncommitted_stock\\nString\\nStock committed for sale across all locations\\ntrue\\n\\n\\nincoming_stock\\nString\\nStock on order across all locations\\ntrue\\n\\n\\ncomposite\\nBoolean\\nTells whether this variant is a composite (composed of other variants)\\n\\n\\n\\ndescription\\nString\\n\\n\\n\\n\\ninitial_cost_price\\nString\\nThe initial item cost price of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_level\\nString\\nThe initial stock level of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_location_id\\nInteger\\nThe ID of the stock location where initial stock levels should be added, only available when first creating the variant, defaults to your primary stock location\\n\\n\\n\\nkeep_selling\\nBoolean\\nAllow item to continue to be sold, even if it is no longer in stock\\n\\n\\n\\nlast_cost_price\\nString\\nLast purchase price paid for this variant\\ntrue\\n\\n\\nmanage_stock\\nBoolean\\nFor composite variants, the value of manage_stock will always be true\\n\\n\\n\\nmax_online\\nString\\nIntegrated online store(s) should show current stock levels up to a maximum of this value\\n\\n\\n\\nmoving_average_cost\\nString\\nAverage cost price paid for this variant\\ntrue\\n\\n\\nname\\nString\\n\\n\\n\\n\\nonline_ordering\\nBoolean\\nTells whether variant is for sale on B2B platform\\n\\n\\n\\nopt1\\nString\\n\\n\\n\\n\\nopt2\\nString\\n\\n\\n\\n\\nopt3\\nString\\n\\n\\n\\n\\nposition\\nString\\nDefault sort position of this variant (unique to product)\\n\\n\\n\\nproduct_name\\nString\\nprovided by the product to which the variant belongs\\ntrue\\n\\n\\nproduct_status\\nString\\nprovided by the product to which the variant belongs\\ntrue\\n\\n\\nproduct_type\\nString\\nprovided by the product to which the variant belongs\\ntrue\\n\\n\\nretail_price\\nString\\nThe recommended retail price\\n\\n\\n\\nsellable\\nString\\nTells whether can be added to sales orders\\n\\n\\n\\nsku\\nString\\nStock Keeping Unit (should be unique)\\n\\n\\n\\nstock_on_hand\\nString\\nStock on hand across all locations\\ntrue\\n\\n\\nsupplier_code\\nString\\n\\n\\n\\n\\ntaxable\\nBoolean\\nTells whether this variant can be taxed\\n\\n\\n\\nupc\\nString\\nThe barcode or UPC number\\n\\n\\n\\nweight\\nString\\nThe weight value\\n\\n\\n\\nweight_unit\\nString\\nThe weight unit (kg, gm, oz or lb)\\n\\n\\n\\nwholesale_price\\nString\\nThe recommended wholesale price for this product\\n\\n\\n\\nimage_ids\\nArray\\nImages assigned to the variant. The order of the Image IDs here is the position of the images on the variant.\\n\\n\\n\\nvariant_prices\\nArray\\nAn array of prices with price list IDs and the price value.\\n\\n\\n\\nlocations\\nArray\\nAn array of per-warehouse data about current variant.\\ntrue\\n\\n\\nprices  deprecated\\nHash\\n\\ntrue\\n\\n\\nstock_levels  deprecated\\nHash\\n\\ntrue\\n\\n\\ncommitted_stock_levels  deprecated\\nHash\\n\\ntrue\\n\\n" }, { "id": "list-all-variants", "title": "List all variants", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Variant.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/variants/\\n{\\n  \\"variants\\": [\\n  {\\n    \\"id\\": 3,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.772Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:34:04.502Z\\",\\n    \\"product_id\\": 1,\\n    \\"default_ledger_account_id\\": null,\\n    \\"buy_price\\": \\"4.5\\",\\n    \\"committed_stock\\": \\"3\\",\\n    \\"incoming_stock\\": \\"0\\",\\n    \\"composite\\": null,\\n    \\"description\\": null,\\n    \\"keep_selling\\": false,\\n    \\"last_cost_price\\": \\"5.0\\",\\n    \\"manage_stock\\": true,\\n    \\"max_online\\": null,\\n    \\"moving_average_cost\\": \\"5\\",\\n    \\"name\\": \\"Peach\\",\\n    \\"online_ordering\\": true,\\n    \\"opt1\\": \\"Peach\\",\\n    \\"opt2\\": null,\\n    \\"opt3\\": null,\\n    \\"position\\": 2,\\n    \\"product_name\\": \\"Everlasting Gobstopper\\",\\n    \\"product_status\\": \\"active\\",\\n    \\"product_type\\": \\"Candy\\",\\n    \\"retail_price\\": \\"22.0\\",\\n    \\"sellable\\": true,\\n    \\"sku\\": \\"DEMO-GOBS-PEA\\",\\n    \\"status\\": \\"active\\",\\n    \\"stock_on_hand\\": \\"10\\",\\n    \\"supplier_code\\": null,\\n    \\"taxable\\": true,\\n    \\"upc\\": null,\\n    \\"weight\\": null,\\n    \\"weight_unit\\": null,\\n    \\"weight_value\\": null,\\n    \\"wholesale_price\\": \\"12.0\\",\\n    \\"image_ids\\": [\\n\\n],\\n    \\"variant_prices\\": [\\n      {\\n        \\"price_list_id\\": \\"retail\\",\\n        \\"value\\": \\"22.0\\"\\n      },\\n      {\\n        \\"price_list_id\\": \\"wholesale\\",\\n        \\"value\\": \\"12.0\\"\\n      },\\n      {\\n        \\"price_list_id\\": \\"buy\\",\\n        \\"value\\": \\"4.5\\"\\n      }\\n    ],\\n    \\"locations\\": [\\n      {\\n        \\"location_id\\": 1,\\n        \\"stock_on_hand\\": \\"10\\",\\n        \\"committed\\": \\"3\\",\\n        \\"incoming\\": null,\\n        \\"bin_location\\": null,\\n        \\"reorder_point\\": null\\n      }\\n    ],\\n    \\"prices\\": {\\n      \\"retail\\": \\"22.0\\",\\n      \\"wholesale\\": \\"12.0\\",\\n      \\"buy\\": \\"4.5\\"\\n    },\\n    \\"stock_levels\\": {\\n      \\"1\\": \\"10.0\\"\\n    },\\n    \\"committed_stock_levels\\": {\\n      \\"1\\": \\"3.0\\"\\n    }\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2015-11-02T01:22:24.796Z\\",\\n    \\"updated_at\\": \\"2015-11-02T01:34:04.474Z\\",\\n    \\"product_id\\": 1,\\n    \\"default_ledger_account_id\\": null,\\n    \\"buy_price\\": \\"4.5\\",\\n    \\"committed_stock\\": \\"0\\",\\n    \\"incoming_stock\\": \\"0\\",\\n    \\"composite\\": null,\\n    \\"description\\": null,\\n    \\"keep_selling\\": false,\\n    \\"last_cost_price\\": \\"6.0\\",\\n    \\"manage_stock\\": true,\\n    \\"max_online\\": null,\\n    \\"moving_average_cost\\": \\"6\\",\\n    \\"name\\": \\"Snozzberry\\",\\n    \\"online_ordering\\": true,\\n    \\"opt1\\": \\"Snozzberry\\",\\n    \\"opt2\\": null,\\n    \\"opt3\\": null,\\n    \\"position\\": 3,\\n    \\"product_name\\": \\"Everlasting Gobstopper\\",\\n    \\"product_status\\": \\"active\\",\\n    \\"product_type\\": \\"Candy\\",\\n    \\"retail_price\\": \\"24.0\\",\\n    \\"sellable\\": true,\\n    \\"sku\\": \\"DEMO-GOBS-SNO\\",\\n    \\"status\\": \\"active\\",\\n    \\"stock_on_hand\\": \\"10\\",\\n    \\"supplier_code\\": null,\\n    \\"taxable\\": true,\\n    \\"upc\\": null,\\n    \\"weight\\": null,\\n    \\"weight_unit\\": null,\\n    \\"weight_value\\": null,\\n    \\"wholesale_price\\": \\"12.0\\",\\n    \\"image_ids\\": [\\n\\n],\\n    \\"variant_prices\\": [\\n      {\\n        \\"price_list_id\\": \\"retail\\",\\n        \\"value\\": \\"24.0\\"\\n      },\\n      {\\n        \\"price_list_id\\": \\"wholesale\\",\\n        \\"value\\": \\"12.0\\"\\n      },\\n      {\\n        \\"price_list_id\\": \\"buy\\",\\n        \\"value\\": \\"4.5\\"\\n      }\\n    ],\\n    \\"locations\\": [\\n      {\\n        \\"location_id\\": 1,\\n        \\"stock_on_hand\\": \\"10\\",\\n        \\"committed\\": null,\\n        \\"incoming\\": null,\\n        \\"bin_location\\": null,\\n        \\"reorder_point\\": null\\n      }\\n    ],\\n    \\"prices\\": {\\n      \\"retail\\": \\"24.0\\",\\n      \\"wholesale\\": \\"12.0\\",\\n      \\"buy\\": \\"4.5\\"\\n    },\\n    \\"stock_levels\\": {\\n      \\"1\\": 10\\n    },\\n    \\"committed_stock_levels\\": {\\n    }\\n  }\\n]\\n}\\nReturns a list of variants you\u2019ve previously created. The variants are returned in sorted order, with the most recent variants appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of variant IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nstatus\\nDefault is active\\n\\n\\nproduct_id\\n\\n\\n\\nsku\\nfind product variant by SKU\\n\\nHTTP Request:GET  https://api.tradegecko.com/variants" }, { "id": "create-a-new-variant", "title": "Create a new variant", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nvariant = gecko.Variant.build({:product_id=>1, :initial_cost_price=>25, :initial_stock_level=>100, :initial_stock_location_id=>1, :retail_price=>\\"10.0\\", :name=>\\"Sample Variant\\", :sku=>\\"SV1234\\"})\\nvariant.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/variants/ -d \'{\\"variant\\":{\\"product_id\\":1,\\"initial_cost_price\\":25,\\"initial_stock_level\\":100,\\"initial_stock_location_id\\":1,\\"retail_price\\":\\"10.0\\",\\"name\\":\\"Sample Variant\\",\\"sku\\":\\"SV1234\\"}\'}\\n{\\n  \\"variant\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.772Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:34:04.502Z\\",\\n  \\"product_id\\": 1,\\n  \\"default_ledger_account_id\\": null,\\n  \\"buy_price\\": \\"4.5\\",\\n  \\"committed_stock\\": \\"3\\",\\n  \\"incoming_stock\\": \\"0\\",\\n  \\"composite\\": null,\\n  \\"description\\": null,\\n  \\"keep_selling\\": false,\\n  \\"last_cost_price\\": \\"5.0\\",\\n  \\"manage_stock\\": true,\\n  \\"max_online\\": null,\\n  \\"moving_average_cost\\": \\"5\\",\\n  \\"name\\": \\"Peach\\",\\n  \\"online_ordering\\": true,\\n  \\"opt1\\": \\"Peach\\",\\n  \\"opt2\\": null,\\n  \\"opt3\\": null,\\n  \\"position\\": 2,\\n  \\"product_name\\": \\"Everlasting Gobstopper\\",\\n  \\"product_status\\": \\"active\\",\\n  \\"product_type\\": \\"Candy\\",\\n  \\"retail_price\\": \\"22.0\\",\\n  \\"sellable\\": true,\\n  \\"sku\\": \\"DEMO-GOBS-PEA\\",\\n  \\"status\\": \\"active\\",\\n  \\"stock_on_hand\\": \\"10\\",\\n  \\"supplier_code\\": null,\\n  \\"taxable\\": true,\\n  \\"upc\\": null,\\n  \\"weight\\": null,\\n  \\"weight_unit\\": null,\\n  \\"weight_value\\": null,\\n  \\"wholesale_price\\": \\"12.0\\",\\n  \\"image_ids\\": [\\n\\n],\\n  \\"variant_prices\\": [\\n    {\\n      \\"price_list_id\\": \\"retail\\",\\n      \\"value\\": \\"22.0\\"\\n    },\\n    {\\n      \\"price_list_id\\": \\"wholesale\\",\\n      \\"value\\": \\"12.0\\"\\n    },\\n    {\\n      \\"price_list_id\\": \\"buy\\",\\n      \\"value\\": \\"4.5\\"\\n    }\\n  ],\\n  \\"locations\\": [\\n    {\\n      \\"location_id\\": 1,\\n      \\"stock_on_hand\\": \\"10\\",\\n      \\"committed\\": \\"3\\",\\n      \\"incoming\\": null,\\n      \\"bin_location\\": null,\\n      \\"reorder_point\\": null\\n    }\\n  ],\\n  \\"prices\\": {\\n    \\"retail\\": \\"22.0\\",\\n    \\"wholesale\\": \\"12.0\\",\\n    \\"buy\\": \\"4.5\\"\\n  },\\n  \\"stock_levels\\": {\\n    \\"1\\": \\"10.0\\"\\n  },\\n  \\"committed_stock_levels\\": {\\n    \\"1\\": \\"3.0\\"\\n  }\\n}\\n}\\nCreates a new variant object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nproduct_id\\nInteger\\nThe product to which the variant belongs.\\ntrue\\n\\n\\ndefault_ledger_account_id\\nInteger\\nUsed for accounting integrations. (e.g. Revenue Ledger)\\n\\n\\n\\nbuy_price\\nString\\n\\n\\n\\n\\ncomposite\\nBoolean\\nTells whether this variant is a composite (composed of other variants)\\n\\n\\n\\ndescription\\nString\\n\\n\\n\\n\\ninitial_cost_price\\nString\\nThe initial item cost price of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_level\\nString\\nThe initial stock level of the variant, only available when first creating the variant\\n\\n\\n\\ninitial_stock_location_id\\nInteger\\nThe ID of the stock location where initial stock levels should be added, only available when first creating the variant, defaults to your primary stock location\\n\\n\\n\\nkeep_selling\\nBoolean\\nAllow item to continue to be sold, even if it is no longer in stock\\n\\n\\n\\nmanage_stock\\nBoolean\\nFor composite variants, the value of manage_stock will always be true\\n\\n\\n\\nmax_online\\nString\\nIntegrated online store(s) should show current stock levels up to a maximum of this value\\n\\n\\n\\nname\\nString\\n\\n\\n\\n\\nonline_ordering\\nBoolean\\nTells whether variant is for sale on B2B platform\\n\\n\\n\\nopt1\\nString\\n\\n\\n\\n\\nopt2\\nString\\n\\n\\n\\n\\nopt3\\nString\\n\\n\\n\\n\\nposition\\nString\\nDefault sort position of this variant (unique to product)\\n\\n\\n\\nretail_price\\nString\\nThe recommended retail price\\n\\n\\n\\nsellable\\nString\\nTells whether can be added to sales orders\\n\\n\\n\\nsku\\nString\\nStock Keeping Unit (should be unique)\\n\\n\\n\\nsupplier_code\\nString\\n\\n\\n\\n\\ntaxable\\nBoolean\\nTells whether this variant can be taxed\\n\\n\\n\\nupc\\nString\\nThe barcode or UPC number\\n\\n\\n\\nweight\\nString\\nThe weight value\\n\\n\\n\\nweight_unit\\nString\\nThe weight unit (kg, gm, oz or lb)\\n\\n\\n\\nwholesale_price\\nString\\nThe recommended wholesale price for this product\\n\\n\\n\\nimage_ids\\nArray\\nImages assigned to the variant. The order of the Image IDs here is the position of the images on the variant.\\n\\n\\n\\nvariant_prices\\nArray\\nAn array of prices with price list IDs and the price value.\\n\\n\\nHTTP RequestPOST https://api.tradegecko.com/variants/" }, { "id": "retrieve-a-particular-variant", "title": "Retrieve a particular variant", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Variant.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/variants/1\\n{\\n  \\"variant\\": {\\n  \\"id\\": 3,\\n  \\"created_at\\": \\"2015-11-02T01:22:24.772Z\\",\\n  \\"updated_at\\": \\"2015-11-02T01:34:04.502Z\\",\\n  \\"product_id\\": 1,\\n  \\"default_ledger_account_id\\": null,\\n  \\"buy_price\\": \\"4.5\\",\\n  \\"committed_stock\\": \\"3\\",\\n  \\"incoming_stock\\": \\"0\\",\\n  \\"composite\\": null,\\n  \\"description\\": null,\\n  \\"keep_selling\\": false,\\n  \\"last_cost_price\\": \\"5.0\\",\\n  \\"manage_stock\\": true,\\n  \\"max_online\\": null,\\n  \\"moving_average_cost\\": \\"5\\",\\n  \\"name\\": \\"Peach\\",\\n  \\"online_ordering\\": true,\\n  \\"opt1\\": \\"Peach\\",\\n  \\"opt2\\": null,\\n  \\"opt3\\": null,\\n  \\"position\\": 2,\\n  \\"product_name\\": \\"Everlasting Gobstopper\\",\\n  \\"product_status\\": \\"active\\",\\n  \\"product_type\\": \\"Candy\\",\\n  \\"retail_price\\": \\"22.0\\",\\n  \\"sellable\\": true,\\n  \\"sku\\": \\"DEMO-GOBS-PEA\\",\\n  \\"status\\": \\"active\\",\\n  \\"stock_on_hand\\": \\"10\\",\\n  \\"supplier_code\\": null,\\n  \\"taxable\\": true,\\n  \\"upc\\": null,\\n  \\"weight\\": null,\\n  \\"weight_unit\\": null,\\n  \\"weight_value\\": null,\\n  \\"wholesale_price\\": \\"12.0\\",\\n  \\"image_ids\\": [\\n\\n],\\n  \\"variant_prices\\": [\\n    {\\n      \\"price_list_id\\": \\"retail\\",\\n      \\"value\\": \\"22.0\\"\\n    },\\n    {\\n      \\"price_list_id\\": \\"wholesale\\",\\n      \\"value\\": \\"12.0\\"\\n    },\\n    {\\n      \\"price_list_id\\": \\"buy\\",\\n      \\"value\\": \\"4.5\\"\\n    }\\n  ],\\n  \\"locations\\": [\\n    {\\n      \\"location_id\\": 1,\\n      \\"stock_on_hand\\": \\"10\\",\\n      \\"committed\\": \\"3\\",\\n      \\"incoming\\": null,\\n      \\"bin_location\\": null,\\n      \\"reorder_point\\": null\\n    }\\n  ],\\n  \\"prices\\": {\\n    \\"retail\\": \\"22.0\\",\\n    \\"wholesale\\": \\"12.0\\",\\n    \\"buy\\": \\"4.5\\"\\n  },\\n  \\"stock_levels\\": {\\n    \\"1\\": \\"10.0\\"\\n  },\\n  \\"committed_stock_levels\\": {\\n    \\"1\\": \\"3.0\\"\\n  }\\n}\\n}\\nRetrieves the details of an existing variant. You need only supply the unique variant identifier that was returned upon variant creation.HTTP RequestGET https://api.tradegecko.com/variants/{RESOURCE_ID}" }, { "id": "update-a-variant", "title": "Update a variant", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nvariant = gecko.Variant.find(1)\\nvariant.attributes = {\\n  rate: \\"12.0\\",\\n}\\nvariant.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/variants/1 -d \'{\\"variant\\":{\\"retail_price\\":\\"12.0\\",\\"name\\":\\"Sample Variant\\",\\"sku\\":\\"SV1234\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the variant gets updated successfully.\\n\\nUpdates the specified variant by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the variant creation call.HTTP RequestPUT https://api.tradegecko.com/variants/{RESOURCE_ID}" }, { "id": "delete-a-variant", "title": "Delete a variant", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nvariant = gecko.Variant.find(1).\\nvariant.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/variants/1\\n\\nResponse\\n\\nReturns 204 status when the variant gets deleted successfully.\\n\\nPermanently deletes a variant. It cannot be undone. This variant is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/variants/{RESOURCE_ID}/" }, { "id": "webhook", "title": "Webhook", "body": "This is an object representing a webhook." }, { "id": "the-webhook-object", "title": "The Webhook object", "body": "\\n\\nAttribute\\nType\\nDescription\\nReadonly\\n\\n\\n\\nid\\nInteger\\nA unique identifier for the resource.\\ntrue\\n\\n\\ncreated_at\\nString\\nDate and Time when the webhook was created.\\ntrue\\n\\n\\nupdated_at\\nString\\nDate and Time when the webhook was last updated.\\ntrue\\n\\n\\nevent\\nString\\nEvent which fires the webhook from TradeGecko to the specified address.\\n\\n\\n\\naddress\\nString\\nURI where a POST request will be sent everytime an event occurs in TradeGecko\\n\\n\\n" }, { "id": "list-all-webhooks", "title": "List all webhooks", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\n\\ngecko.Webhook.where(limit: 25, status: \'active\')\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/webhooks/\\n{\\n  \\"webhooks\\": [\\n  {\\n    \\"id\\": 1,\\n    \\"created_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n    \\"updated_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n    \\"event\\": \\"product.create\\",\\n    \\"address\\": \\"https://mywebsite.com/webhooks\\",\\n    \\"oauth_application_id\\": 1\\n  },\\n  {\\n    \\"id\\": 2,\\n    \\"created_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n    \\"updated_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n    \\"event\\": \\"product.update\\",\\n    \\"address\\": \\"https://mywebsite.com/webhooks\\",\\n    \\"oauth_application_id\\": 1\\n  }\\n]\\n}\\nReturns a list of webhooks you\u2019ve previously created. The webhooks are returned in sorted order, with the most recent webhooks appearing first.Filters\\n\\nArguments\\nDescription\\n\\n\\n\\nids\\nAn array of webhook IDs. See Getting Started for examples.\\n\\n\\nlimit\\nused for pagination (default is 100)\\n\\n\\npage\\nused for pagination (default is 1)\\n\\n\\ncreated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\ncreated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_min\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\n\\nupdated_at_max\\nISO 8601 format (e.g. 2015-11-04T00:00:00.00Z)\\n\\nHTTP Request:GET  https://api.tradegecko.com/webhooks" }, { "id": "create-a-new-webhook", "title": "Create a new webhook", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nwebhook = gecko.Webhook.build({:address=>\\"https://mywebsite.com/webhooks\\", :event=>\\"product.create\\"})\\nwebhook.save\\ncurl -X POST -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/webhooks/ -d \'{\\"webhook\\":{\\"address\\":\\"https://mywebsite.com/webhooks\\",\\"event\\":\\"product.create\\"}\'}\\n{\\n  \\"webhook\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n  \\"updated_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n  \\"event\\": \\"product.create\\",\\n  \\"address\\": \\"https://mywebsite.com/webhooks\\",\\n  \\"oauth_application_id\\": 1\\n}\\n}\\nCreates a new webhook object.Arguments\\n\\nAttribute\\nType\\nDescription\\nRequired\\n\\n\\n\\nevent\\nString\\nEvent which fires the webhook from TradeGecko to the specified address.\\ntrue\\n\\n\\naddress\\nString\\nURI where a POST request will be sent everytime an event occurs in TradeGecko\\ntrue\\n\\nList of Available Events\\n\\nResource\\nEvent\\n\\n\\n\\naccount\\naccount.update\\n\\n\\naddresss\\naddress.create, address.update\\n\\n\\ncompany\\ncompany.create, company.update\\n\\n\\ncontact\\ncontact.create, contact.update\\n\\n\\ndocument_theme\\ndocument_theme.update\\n\\n\\nfulfillment\\nfulfillment.create, fulfillment.fulfilled\\n\\n\\nfulfillment_return\\nfulfillment_return.create\\n\\n\\ninvoice\\ninvoice.create\\n\\n\\nlocation\\nlocation.create, location.update\\n\\n\\norder\\norder.create, order.finalized, order.fulfilled\\n\\n\\npayment\\npayment.create\\n\\n\\nproduct\\nproduct.create\\n\\n\\nprocurement\\nprocurement.create\\n\\n\\npurchase_order\\npurchase_order.create\\n\\n\\nstock_adjustment\\nstock_adjustment.create\\n\\n\\nstock_transfer\\nstock_transfer.create\\n\\n\\nvariant\\nvariant.create, variant.stock_level_update\\n\\n\\nimage\\nimage.create\\n\\nHTTP RequestPOST https://api.tradegecko.com/webhooks/" }, { "id": "retrieve-a-particular-webhook", "title": "Retrieve a particular webhook", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\ngecko.Webhook.find(1)\\ncurl -X GET -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/webhooks/1\\n{\\n  \\"webhook\\": {\\n  \\"id\\": 1,\\n  \\"created_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n  \\"updated_at\\": \\"2018-09-24T11:12:49.244Z\\",\\n  \\"event\\": \\"product.create\\",\\n  \\"address\\": \\"https://mywebsite.com/webhooks\\",\\n  \\"oauth_application_id\\": 1\\n}\\n}\\nRetrieves the details of an existing webhook. You need only supply the unique webhook identifier that was returned upon webhook creation.HTTP RequestGET https://api.tradegecko.com/webhooks/{RESOURCE_ID}" }, { "id": "update-a-webhook", "title": "Update a webhook", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nwebhook = gecko.Webhook.find(1)\\nwebhook.attributes = {\\n  rate: \\"12.0\\",\\n}\\nwebhook.save\\ncurl -X PUT -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/webhooks/1 -d \'{\\"webhook\\":{\\"address\\":\\"https://mynewwebsite.com/webhooks\\",\\"event\\":\\"product.create\\"}}\'\\n\\nResponse\\n\\nReturns 204 status when the webhook gets updated successfully.\\n\\nUpdates the specified webhook by setting the values of the parameters passed.Any parameters not provided will be left unchanged.\\nThis request accepts the same arguments as the webhook creation call.HTTP RequestPUT https://api.tradegecko.com/webhooks/{RESOURCE_ID}" }, { "id": "delete-a-webhook", "title": "Delete a webhook", "body": "require \'gecko-ruby\'\\ngecko = Gecko::Client.new(<OAUTH_ID>, <OAUTH_SECRET>)\\naccess_token = OAuth2::AccessToken.new(gecko.oauth_client, <ACCESS_TOKEN>)\\ngecko.access_token = access_token\\nwebhook = gecko.Webhook.find(1).\\nwebhook.destroy\\ncurl -X DELETE -H \\"Content-type: application/json\\" -H \\"Authorization: Bearer <ACCESS_TOKEN>\\"\\nhttps://api.tradegecko.com/webhooks/1\\n\\nResponse\\n\\nReturns 204 status when the webhook gets deleted successfully.\\n\\nPermanently deletes a webhook. It cannot be undone. This webhook is no longer available for future Sales Orders.HTTP RequestDELETE https://api.tradegecko.com/webhooks/{RESOURCE_ID}/" }, { "id": "libraries", "title": "Libraries", "body": "\\nOfficial Rubygem\\nOfficial Omniauth strategy\\nExample Rails App w/ Omniauth\\n" }]';
window.tokens = JSON.parse(tokenString),
  /**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.7
   * Copyright (C) 2014 Oliver Nightingale
   * MIT Licensed
   * @license
   */
  function() {
    var e = function(n) {
      var t = new e.Index;
      return t.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), n && n.call(t, t), t
    };
    e.version = "0.5.7",
      /*!
       * lunr.utils
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.utils = {}, e.utils.warn = function(e) {
        return function(n) {
          e.console && console.warn && console.warn(n)
        }
      }(this),
      /*!
       * lunr.EventEmitter
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.EventEmitter = function() {
        this.events = {}
      }, e.EventEmitter.prototype.addListener = function() {
        var e = Array.prototype.slice.call(arguments),
          n = e.pop(),
          t = e;
        if ("function" != typeof n) throw new TypeError("last argument must be a function");
        t.forEach(function(e) {
          this.hasHandler(e) || (this.events[e] = []), this.events[e].push(n)
        }, this)
      }, e.EventEmitter.prototype.removeListener = function(e, n) {
        if (this.hasHandler(e)) {
          var t = this.events[e].indexOf(n);
          this.events[e].splice(t, 1), this.events[e].length || delete this.events[e]
        }
      }, e.EventEmitter.prototype.emit = function(e) {
        if (this.hasHandler(e)) {
          var n = Array.prototype.slice.call(arguments, 1);
          this.events[e].forEach(function(e) {
            e.apply(undefined, n)
          })
        }
      }, e.EventEmitter.prototype.hasHandler = function(e) {
        return e in this.events
      },
      /*!
       * lunr.tokenizer
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.tokenizer = function(e) {
        if (!arguments.length || null == e || e == undefined) return [];
        if (Array.isArray(e)) return e.map(function(e) {
          return e.toLowerCase()
        });
        for (var n = e.toString().replace(/^\s+/, ""), t = n.length - 1; t >= 0; t--)
          if (/\S/.test(n.charAt(t))) {
            n = n.substring(0, t + 1);
            break
          } return n.split(/(?:\s+|\-)/).filter(function(e) {
          return !!e
        }).map(function(e) {
          return e.toLowerCase()
        })
      },
      /*!
       * lunr.Pipeline
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.Pipeline = function() {
        this._stack = []
      }, e.Pipeline.registeredFunctions = {}, e.Pipeline.registerFunction = function(n, t) {
        t in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + t), n.label = t, e.Pipeline.registeredFunctions[n.label] = n
      }, e.Pipeline.warnIfFunctionNotRegistered = function(n) {
        n.label && n.label in this.registeredFunctions || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", n)
      }, e.Pipeline.load = function(n) {
        var t = new e.Pipeline;
        return n.forEach(function(n) {
          var i = e.Pipeline.registeredFunctions[n];
          if (!i) throw new Error("Cannot load un-registered function: " + n);
          t.add(i)
        }), t
      }, e.Pipeline.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(n) {
          e.Pipeline.warnIfFunctionNotRegistered(n), this._stack.push(n)
        }, this)
      }, e.Pipeline.prototype.after = function(n, t) {
        e.Pipeline.warnIfFunctionNotRegistered(t);
        var i = this._stack.indexOf(n) + 1;
        this._stack.splice(i, 0, t)
      }, e.Pipeline.prototype.before = function(n, t) {
        e.Pipeline.warnIfFunctionNotRegistered(t);
        var i = this._stack.indexOf(n);
        this._stack.splice(i, 0, t)
      }, e.Pipeline.prototype.remove = function(e) {
        var n = this._stack.indexOf(e);
        this._stack.splice(n, 1)
      }, e.Pipeline.prototype.run = function(e) {
        for (var n = [], t = e.length, i = this._stack.length, r = 0; r < t; r++) {
          for (var a = e[r], o = 0; o < i && void 0 !== (a = this._stack[o](a, r, e)); o++);
          void 0 !== a && n.push(a)
        }
        return n
      }, e.Pipeline.prototype.reset = function() {
        this._stack = []
      }, e.Pipeline.prototype.toJSON = function() {
        return this._stack.map(function(n) {
          return e.Pipeline.warnIfFunctionNotRegistered(n), n.label
        })
      },
      /*!
       * lunr.Vector
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.Vector = function() {
        this._magnitude = null, this.list = undefined, this.length = 0
      }, e.Vector.Node = function(e, n, t) {
        this.idx = e, this.val = n, this.next = t
      }, e.Vector.prototype.insert = function(n, t) {
        var i = this.list;
        if (!i) return this.list = new e.Vector.Node(n, t, i), this.length++;
        for (var r = i, a = i.next; a != undefined;) {
          if (n < a.idx) return r.next = new e.Vector.Node(n, t, a), this.length++;
          r = a, a = a.next
        }
        return r.next = new e.Vector.Node(n, t, a), this.length++
      }, e.Vector.prototype.magnitude = function() {
        if (this._magniture) return this._magnitude;
        for (var e, n = this.list, t = 0; n;) e = n.val, t += e * e, n = n.next;
        return this._magnitude = Math.sqrt(t)
      }, e.Vector.prototype.dot = function(e) {
        for (var n = this.list, t = e.list, i = 0; n && t;) n.idx < t.idx ? n = n.next : n.idx > t.idx ? t = t.next : (i += n.val * t.val, n = n.next, t = t.next);
        return i
      }, e.Vector.prototype.similarity = function(e) {
        return this.dot(e) / (this.magnitude() * e.magnitude())
      },
      /*!
       * lunr.SortedSet
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.SortedSet = function() {
        this.length = 0, this.elements = []
      }, e.SortedSet.load = function(e) {
        var n = new this;
        return n.elements = e, n.length = e.length, n
      }, e.SortedSet.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(e) {
          ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e)
        }, this), this.length = this.elements.length
      }, e.SortedSet.prototype.toArray = function() {
        return this.elements.slice()
      }, e.SortedSet.prototype.map = function(e, n) {
        return this.elements.map(e, n)
      }, e.SortedSet.prototype.forEach = function(e, n) {
        return this.elements.forEach(e, n)
      }, e.SortedSet.prototype.indexOf = function(e, n, t) {
        var n = n || 0,
          t = t || this.elements.length,
          i = t - n,
          r = n + Math.floor(i / 2),
          a = this.elements[r];
        return i <= 1 ? a === e ? r : -1 : a < e ? this.indexOf(e, r, t) : a > e ? this.indexOf(e, n, r) : a === e ? r : void 0
      }, e.SortedSet.prototype.locationFor = function(e, n, t) {
        var n = n || 0,
          t = t || this.elements.length,
          i = t - n,
          r = n + Math.floor(i / 2),
          a = this.elements[r];
        if (i <= 1) {
          if (a > e) return r;
          if (a < e) return r + 1
        }
        return a < e ? this.locationFor(e, r, t) : a > e ? this.locationFor(e, n, r) : void 0
      }, e.SortedSet.prototype.intersect = function(n) {
        for (var t = new e.SortedSet, i = 0, r = 0, a = this.length, o = n.length, s = this.elements, c = n.elements;;) {
          if (i > a - 1 || r > o - 1) break;
          s[i] !== c[r] ? s[i] < c[r] ? i++ : s[i] > c[r] && r++ : (t.add(s[i]), i++, r++)
        }
        return t
      }, e.SortedSet.prototype.clone = function() {
        var n = new e.SortedSet;
        return n.elements = this.toArray(), n.length = n.elements.length, n
      }, e.SortedSet.prototype.union = function(e) {
        var n, t, i;
        return this.length >= e.length ? (n = this, t = e) : (n = e, t = this), i = n.clone(), i.add.apply(i, t.toArray()), i
      }, e.SortedSet.prototype.toJSON = function() {
        return this.toArray()
      },
      /*!
       * lunr.Index
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.Index = function() {
        this._fields = [], this._ref = "id", this.pipeline = new e.Pipeline, this.documentStore = new e.Store, this.tokenStore = new e.TokenStore, this.corpusTokens = new e.SortedSet, this.eventEmitter = new e.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
          this._idfCache = {}
        }.bind(this))
      }, e.Index.prototype.on = function() {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e)
      }, e.Index.prototype.off = function(e, n) {
        return this.eventEmitter.removeListener(e, n)
      }, e.Index.load = function(n) {
        n.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + n.version);
        var t = new this;
        return t._fields = n.fields, t._ref = n.ref, t.documentStore = e.Store.load(n.documentStore), t.tokenStore = e.TokenStore.load(n.tokenStore), t.corpusTokens = e.SortedSet.load(n.corpusTokens), t.pipeline = e.Pipeline.load(n.pipeline), t
      }, e.Index.prototype.field = function(e, n) {
        var n = n || {},
          t = {
            name: e,
            boost: n.boost || 1
          };
        return this._fields.push(t), this
      }, e.Index.prototype.ref = function(e) {
        return this._ref = e, this
      }, e.Index.prototype.add = function(n, t) {
        var i = {},
          r = new e.SortedSet,
          a = n[this._ref],
          t = t === undefined || t;
        this._fields.forEach(function(t) {
          var a = this.pipeline.run(e.tokenizer(n[t.name]));
          i[t.name] = a, e.SortedSet.prototype.add.apply(r, a)
        }, this), this.documentStore.set(a, r), e.SortedSet.prototype.add.apply(this.corpusTokens, r.toArray());
        for (var o = 0; o < r.length; o++) {
          var s = r.elements[o],
            c = this._fields.reduce(function(e, n) {
              var t = i[n.name].length;
              return t ? e + i[n.name].filter(function(e) {
                return e === s
              }).length / t * n.boost : e
            }, 0);
          this.tokenStore.add(s, {
            ref: a,
            tf: c
          })
        }
        t && this.eventEmitter.emit("add", n, this)
      }, e.Index.prototype.remove = function(e, n) {
        var t = e[this._ref],
          n = n === undefined || n;
        if (this.documentStore.has(t)) {
          var i = this.documentStore.get(t);
          this.documentStore.remove(t), i.forEach(function(e) {
            this.tokenStore.remove(e, t)
          }, this), n && this.eventEmitter.emit("remove", e, this)
        }
      }, e.Index.prototype.update = function(e, n) {
        var n = n === undefined || n;
        this.remove(e, !1), this.add(e, !1), n && this.eventEmitter.emit("update", e, this)
      }, e.Index.prototype.idf = function(e) {
        var n = "@" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, n)) return this._idfCache[n];
        var t = this.tokenStore.count(e),
          i = 1;
        return t > 0 && (i = 1 + Math.log(this.tokenStore.length / t)), this._idfCache[n] = i
      }, e.Index.prototype.search = function(n) {
        var t = this.pipeline.run(e.tokenizer(n)),
          i = new e.Vector,
          r = [],
          a = this._fields.reduce(function(e, n) {
            return e + n.boost
          }, 0);
        return t.some(function(e) {
          return this.tokenStore.has(e)
        }, this) ? (t.forEach(function(n, t, o) {
          var s = 1 / o.length * this._fields.length * a,
            c = this,
            l = this.tokenStore.expand(n).reduce(function(t, r) {
              var a = c.corpusTokens.indexOf(r),
                o = c.idf(r),
                l = 1,
                u = new e.SortedSet;
              if (r !== n) {
                var d = Math.max(3, r.length - n.length);
                l = 1 / Math.log(d)
              }
              return a > -1 && i.insert(a, s * o * l), Object.keys(c.tokenStore.get(r)).forEach(function(e) {
                u.add(e)
              }), t.union(u)
            }, new e.SortedSet);
          r.push(l)
        }, this), r.reduce(function(e, n) {
          return e.intersect(n)
        }).map(function(e) {
          return {
            ref: e,
            score: i.similarity(this.documentVector(e))
          }
        }, this).sort(function(e, n) {
          return n.score - e.score
        })) : []
      }, e.Index.prototype.documentVector = function(n) {
        for (var t = this.documentStore.get(n), i = t.length, r = new e.Vector, a = 0; a < i; a++) {
          var o = t.elements[a],
            s = this.tokenStore.get(o)[n].tf,
            c = this.idf(o);
          r.insert(this.corpusTokens.indexOf(o), s * c)
        }
        return r
      }, e.Index.prototype.toJSON = function() {
        return {
          version: e.version,
          fields: this._fields,
          ref: this._ref,
          documentStore: this.documentStore.toJSON(),
          tokenStore: this.tokenStore.toJSON(),
          corpusTokens: this.corpusTokens.toJSON(),
          pipeline: this.pipeline.toJSON()
        }
      }, e.Index.prototype.use = function(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        n.unshift(this), e.apply(this, n)
      },
      /*!
       * lunr.Store
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.Store = function() {
        this.store = {}, this.length = 0
      }, e.Store.load = function(n) {
        var t = new this;
        return t.length = n.length, t.store = Object.keys(n.store).reduce(function(t, i) {
          return t[i] = e.SortedSet.load(n.store[i]), t
        }, {}), t
      }, e.Store.prototype.set = function(e, n) {
        this.has(e) || this.length++, this.store[e] = n
      }, e.Store.prototype.get = function(e) {
        return this.store[e]
      }, e.Store.prototype.has = function(e) {
        return e in this.store
      }, e.Store.prototype.remove = function(e) {
        this.has(e) && (delete this.store[e], this.length--)
      }, e.Store.prototype.toJSON = function() {
        return {
          store: this.store,
          length: this.length
        }
      },
      /*!
       * lunr.stemmer
       * Copyright (C) 2014 Oliver Nightingale
       * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
       */
      e.stemmer = function() {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
          },
          n = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
          },
          t = "[^aeiou]",
          i = "[aeiouy]",
          r = t + "[^aeiouy]*",
          a = i + "[aeiou]*",
          o = "^(" + r + ")?" + a + r,
          s = "^(" + r + ")?" + a + r + "(" + a + ")?$",
          c = "^(" + r + ")?" + a + r + a + r,
          l = "^(" + r + ")?" + i,
          u = new RegExp(o),
          d = new RegExp(c),
          p = new RegExp(s),
          _ = new RegExp(l),
          h = /^(.+?)(ss|i)es$/,
          f = /^(.+?)([^s])s$/,
          m = /^(.+?)eed$/,
          g = /^(.+?)(ed|ing)$/,
          y = /.$/,
          T = /(at|bl|iz)$/,
          k = new RegExp("([^aeiouylsz])\\1$"),
          v = new RegExp("^" + r + i + "[^aeiouwxy]$"),
          b = /^(.+?[^aeiou])y$/,
          S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          w = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          C = /^(.+?)(s|t)(ion)$/,
          A = /^(.+?)e$/,
          O = /ll$/,
          x = new RegExp("^" + r + i + "[^aeiouwxy]$");
        return function(t) {
          var i, r, a, o, s, c, l;
          if (t.length < 3) return t;
          if (a = t.substr(0, 1), "y" == a && (t = a.toUpperCase() + t.substr(1)), o = h, s = f, o.test(t) ? t = t.replace(o, "$1$2") : s.test(t) && (t = t.replace(s, "$1$2")), o = m, s = g, o.test(t)) {
            var R = o.exec(t);
            o = u, o.test(R[1]) && (o = y, t = t.replace(o, ""))
          } else if (s.test(t)) {
            var R = s.exec(t);
            i = R[1], s = _, s.test(i) && (t = i, s = T, c = k, l = v, s.test(t) ? t += "e" : c.test(t) ? (o = y, t = t.replace(o, "")) : l.test(t) && (t += "e"))
          }
          if (o = b, o.test(t)) {
            var R = o.exec(t);
            i = R[1], t = i + "i"
          }
          if (o = S, o.test(t)) {
            var R = o.exec(t);
            i = R[1], r = R[2], o = u, o.test(i) && (t = i + e[r])
          }
          if (o = E, o.test(t)) {
            var R = o.exec(t);
            i = R[1], r = R[2], o = u, o.test(i) && (t = i + n[r])
          }
          if (o = w, s = C, o.test(t)) {
            var R = o.exec(t);
            i = R[1], o = d, o.test(i) && (t = i)
          } else if (s.test(t)) {
            var R = s.exec(t);
            i = R[1] + R[2], s = d, s.test(i) && (t = i)
          }
          if (o = A, o.test(t)) {
            var R = o.exec(t);
            i = R[1], o = d, s = p, c = x, (o.test(i) || s.test(i) && !c.test(i)) && (t = i)
          }
          return o = O, s = d, o.test(t) && s.test(t) && (o = y, t = t.replace(o, "")), "y" == a && (t = a.toLowerCase() + t.substr(1)), t
        }
      }(), e.Pipeline.registerFunction(e.stemmer, "stemmer"),
      /*!
       * lunr.stopWordFilter
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.stopWordFilter = function(n) {
        if (-1 === e.stopWordFilter.stopWords.indexOf(n)) return n
      }, e.stopWordFilter.stopWords = new e.SortedSet, e.stopWordFilter.stopWords.length = 119, e.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
      /*!
       * lunr.trimmer
       * Copyright (C) 2014 Oliver Nightingale
       */
      e.trimmer = function(e) {
        return e.replace(/^\W+/, "").replace(/\W+$/, "")
      }, e.Pipeline.registerFunction(e.trimmer, "trimmer"),
      /*!
       * lunr.stemmer
       * Copyright (C) 2014 Oliver Nightingale
       * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
       */
      e.TokenStore = function() {
        this.root = {
          docs: {}
        }, this.length = 0
      }, e.TokenStore.load = function(e) {
        var n = new this;
        return n.root = e.root, n.length = e.length, n
      }, e.TokenStore.prototype.add = function(e, n, t) {
        var t = t || this.root,
          i = e[0],
          r = e.slice(1);
        return i in t || (t[i] = {
          docs: {}
        }), 0 === r.length ? (t[i].docs[n.ref] = n, void(this.length += 1)) : this.add(r, n, t[i])
      }, e.TokenStore.prototype.has = function(e) {
        if (!e) return !1;
        for (var n = this.root, t = 0; t < e.length; t++) {
          if (!n[e[t]]) return !1;
          n = n[e[t]]
        }
        return !0
      }, e.TokenStore.prototype.getNode = function(e) {
        if (!e) return {};
        for (var n = this.root, t = 0; t < e.length; t++) {
          if (!n[e[t]]) return {};
          n = n[e[t]]
        }
        return n
      }, e.TokenStore.prototype.get = function(e, n) {
        return this.getNode(e, n).docs || {}
      }, e.TokenStore.prototype.count = function(e, n) {
        return Object.keys(this.get(e, n)).length
      }, e.TokenStore.prototype.remove = function(e, n) {
        if (e) {
          for (var t = this.root, i = 0; i < e.length; i++) {
            if (!(e[i] in t)) return;
            t = t[e[i]]
          }
          delete t.docs[n]
        }
      }, e.TokenStore.prototype.expand = function(e, n) {
        var t = this.getNode(e),
          i = t.docs || {},
          n = n || [];
        return Object.keys(i).length && n.push(e), Object.keys(t).forEach(function(t) {
          "docs" !== t && n.concat(this.expand(e + t, n))
        }, this), n
      }, e.TokenStore.prototype.toJSON = function() {
        return {
          root: this.root,
          length: this.length
        }
      },
      function(e, n) {
        "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n() : e.lunr = n()
      }(this, function() {
        return e
      })
  }(),
  /*
   * jQuery Highlight plugin
   *
   * Based on highlight v3 by Johann Burkard
   * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
   *
   * Code a little bit refactored and cleaned (in my humble opinion).
   * Most important changes:
   *  - has an option to highlight only entire words (wordsOnly - false by default),
   *  - has an option to be case sensitive (caseSensitive - false by default)
   *  - highlight element tag and class names can be specified in options
   *
   * Usage:
   *   // wrap every occurrance of text 'lorem' in content
   *   // with <span class='highlight'> (default options)
   *   $('#content').highlight('lorem');
   *
   *   // search for and highlight more terms at once
   *   // so you can save some time on traversing DOM
   *   $('#content').highlight(['lorem', 'ipsum']);
   *   $('#content').highlight('lorem ipsum');
   *
   *   // search only for entire word 'lorem'
   *   $('#content').highlight('lorem', { wordsOnly: true });
   *
   *   // don't ignore case during search of term 'lorem'
   *   $('#content').highlight('lorem', { caseSensitive: true });
   *
   *   // wrap every occurrance of term 'ipsum' in content
   *   // with <em class='important'>
   *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
   *
   *   // remove default highlight
   *   $('#content').unhighlight();
   *
   *   // remove custom highlight
   *   $('#content').unhighlight({ element: 'em', className: 'important' });
   *
   *
   * Copyright (c) 2009 Bartek Szopka
   *
   * Licensed under MIT license.
   *
   */
  jQuery.extend({
    highlight: function(e, n, t, i) {
      if (3 === e.nodeType) {
        var r = e.data.match(n);
        if (r) {
          var a = document.createElement(t || "span");
          a.className = i || "highlight";
          var o = e.splitText(r.index);
          o.splitText(r[0].length);
          var s = o.cloneNode(!0);
          return a.appendChild(s), o.parentNode.replaceChild(a, o), 1
        }
      } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== t.toUpperCase() || e.className !== i))
        for (var c = 0; c < e.childNodes.length; c++) c += jQuery.highlight(e.childNodes[c], n, t, i);
      return 0
    }
  }), jQuery.fn.unhighlight = function(e) {
    var n = {
      className: "highlight",
      element: "span"
    };
    return jQuery.extend(n, e), this.find(n.element + "." + n.className).each(function() {
      var e = this.parentNode;
      e.replaceChild(this.firstChild, this), e.normalize()
    }).end()
  }, jQuery.fn.highlight = function(e, n) {
    var t = {
      className: "highlight",
      element: "span",
      caseSensitive: !1,
      wordsOnly: !1
    };
    if (jQuery.extend(t, n), e.constructor === String && (e = [e]), e = jQuery.grep(e, function(e) {
        return "" != e
      }), e = jQuery.map(e, function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
      }), 0 == e.length) return this;
    var i = t.caseSensitive ? "" : "i",
      r = "(" + e.join("|") + ")";
    t.wordsOnly && (r = "\\b" + r + "\\b");
    var a = new RegExp(r, i);
    return this.each(function() {
      jQuery.highlight(this, a, t.element, t.className)
    })
  },
  function() {
    "use strict";

    function e() {
      window.refHash = {}, window.tokens.forEach(function(e) {
        d.add(e), window.refHash[e.id] = e
      }), n()
    }

    function n() {
      d.tokenStore.length > 5e3 && (l = 300)
    }

    function t() {
      o = $(".content"), s = $(".search-results"), $("#input-search").on("keyup", function(e) {
        ! function() {
          return function(e, n) {
            clearTimeout(u), u = setTimeout(e, n)
          }
        }()(function() {
          i(e)
        }, l)
      })
    }

    function i(e) {
      var n = $("#input-search")[0];
      if (a(), s.addClass("visible"), 27 === e.keyCode && (n.value = ""), n.value) {
        var t = d.search(n.value).filter(function(e) {
          return e.score > 1e-4
        });
        if (t.length) {
          s.empty();
          var i = window.location.toString().indexOf("/docs") > -1 ? "" : "/docs.html";
          $.each(t, function(e, n) {
            document.getElementById(n.ref);
            s.append("<li><a href='" + i + "#" + n.ref + "'>" + window.refHash[n.ref].title + "</a></li>")
          }), r.call(n)
        } else s.html("<li></li>"), $(".search-results li").text('No Results Found for "' + n.value + '"')
      } else a(), s.removeClass("visible")
    }

    function r() {
      this.value && o.highlight(this.value, c)
    }

    function a() {
      o.unhighlight(c)
    }
    var o, s, c = {
        element: "span",
        className: "search-highlight"
      },
      l = 0,
      u = 0,
      d = new lunr.Index;
    d.ref("id"), d.field("title", {
      boost: 10
    }), d.field("body"), d.pipeline.add(lunr.trimmer, lunr.stopWordFilter), $(e), $(t)
  }();
