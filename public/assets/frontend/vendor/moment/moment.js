(function(e) {
    function t(e, t, n) {
        switch (arguments.length) {
            case 2:
                return null != e ? e : t;
            case 3:
                return null != e ? e : null != t ? t : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(e, t) {
        return Tt.call(e, t)
    }

    function s() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function a(e) {
        wt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function i(e, t) {
        var n = !0;
        return _(function() {
            return n && (a(e), n = !1), t.apply(this, arguments)
        }, t)
    }

    function r(e, t) {
        Mn[e] || (a(t), Mn[e] = !0)
    }

    function o(e, t) {
        return function(n) {
            return p(e.call(this, n), t)
        }
    }

    function u(e, t) {
        return function(n) {
            return this.localeData().ordinal(e.call(this, n), t)
        }
    }

    function c(e, t) {
        var n, s, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(a, "months");
        return 0 > t - i ? (n = e.clone().add(a - 1, "months"), s = (t - i) / (i - n)) : (n = e.clone().add(a + 1, "months"), s = (t - i) / (n - i)), -(a + s)
    }

    function l(e, t, n) {
        var s;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (s = e.isPM(n), s && 12 > t && (t += 12), s || 12 !== t || (t = 0), t) : t
    }

    function d() {}

    function f(e, t) {
        t !== !1 && F(e), m(this, e), this._d = new Date(+e._d), wn === !1 && (wn = !0, wt.updateOffset(this), wn = !1)
    }

    function h(e) {
        var t = S(e),
            n = t.year || 0,
            s = t.quarter || 0,
            a = t.month || 0,
            i = t.week || 0,
            r = t.day || 0,
            o = t.hour || 0,
            u = t.minute || 0,
            c = t.second || 0,
            l = t.millisecond || 0;
        this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * o, this._days = +r + 7 * i, this._months = +a + 3 * s + 12 * n, this._data = {}, this._locale = wt.localeData(), this._bubble()
    }

    function _(e, t) {
        for (var s in t) n(t, s) && (e[s] = t[s]);
        return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function m(e, t) {
        var n, s, a;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), It.length > 0)
            for (n in It) s = It[n], a = t[s], "undefined" != typeof a && (e[s] = a);
        return e
    }

    function y(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function p(e, t, n) {
        for (var s = "" + Math.abs(e), a = e >= 0; s.length < t;) s = "0" + s;
        return (a ? n ? "+" : "" : "-") + s
    }

    function g(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function M(e, t) {
        var n;
        return t = H(t, e), e.isBefore(t) ? n = g(e, t) : (n = g(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function D(e, t) {
        return function(n, s) {
            var a, i;
            return null === s || isNaN(+s) || (r(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), i = n, n = s, s = i), n = "string" == typeof n ? +n : n, a = wt.duration(n, s), w(this, a, e), this
        }
    }

    function w(e, t, n, s) {
        var a = t._milliseconds,
            i = t._days,
            r = t._months;
        s = null == s ? !0 : s, a && e._d.setTime(+e._d + a * n), i && mt(e, "Date", _t(e, "Date") + i * n), r && ht(e, _t(e, "Month") + r * n), s && wt.updateOffset(e, i || r)
    }

    function Y(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function v(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function k(e, t, n) {
        var s, a = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            r = 0;
        for (s = 0; a > s; s++)(n && e[s] !== t[s] || !n && O(e[s]) !== O(t[s])) && r++;
        return r + i
    }

    function b(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = fn[e] || hn[t] || t
        }
        return e
    }

    function S(e) {
        var t, s, a = {};
        for (s in e) n(e, s) && (t = b(s), t && (a[t] = e[s]));
        return a
    }

    function T(t) {
        var n, s;
        if (0 === t.indexOf("week")) n = 7, s = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, s = "month"
        }
        wt[t] = function(a, i) {
            var r, o, u = wt._locale[t],
                c = [];
            if ("number" == typeof a && (i = a, a = e), o = function(e) {
                var t = wt().utc().set(s, e);
                return u.call(wt._locale, t, a || "")
            }, null != i) return o(i);
            for (r = 0; n > r; r++) c.push(o(r));
            return c
        }
    }

    function O(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function U(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function W(e, t, n) {
        return ct(wt([e, 11, 31 + t - n]), t, n).week
    }

    function C(e) {
        return G(e) ? 366 : 365
    }

    function G(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function F(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[Ut] < 0 || e._a[Ut] > 11 ? Ut : e._a[Wt] < 1 || e._a[Wt] > U(e._a[Ot], e._a[Ut]) ? Wt : e._a[Ct] < 0 || e._a[Ct] > 24 || 24 === e._a[Ct] && (0 !== e._a[Gt] || 0 !== e._a[Ft] || 0 !== e._a[Pt]) ? Ct : e._a[Gt] < 0 || e._a[Gt] > 59 ? Gt : e._a[Ft] < 0 || e._a[Ft] > 59 ? Ft : e._a[Pt] < 0 || e._a[Pt] > 999 ? Pt : -1, e._pf._overflowDayOfYear && (Ot > t || t > Wt) && (t = Wt), e._pf.overflow = t)
    }

    function P(t) {
        return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)), t._isValid
    }

    function L(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function I(e) {
        for (var t, n, s, a, i = 0; i < e.length;) {
            for (a = L(e[i]).split("-"), t = a.length, n = L(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (s = x(a.slice(0, t).join("-"))) return s;
                if (n && n.length >= t && k(a, n, !0) >= t - 1) break;
                t--
            }
            i++
        }
        return null
    }

    function x(e) {
        var t = null;
        if (!Lt[e] && xt) try {
            t = wt.locale(), require("./locale/" + e), wt.locale(t)
        } catch (n) {}
        return Lt[e]
    }

    function H(e, t) {
        var n, s;
        return t._isUTC ? (n = t.clone(), s = (wt.isMoment(e) || v(e) ? +e : +wt(e)) - +n, n._d.setTime(+n._d + s), wt.updateOffset(n, !1), n) : wt(e).local()
    }

    function A(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function z(e) {
        var t, n, s = e.match(Zt);
        for (t = 0, n = s.length; n > t; t++) s[t] = gn[s[t]] ? gn[s[t]] : A(s[t]);
        return function(a) {
            var i = "";
            for (t = 0; n > t; t++) i += s[t] instanceof Function ? s[t].call(a, e) : s[t];
            return i
        }
    }

    function Z(e, t) {
        return e.isValid() ? (t = E(t, e.localeData()), _n[t] || (_n[t] = z(t)), _n[t](e)) : e.localeData().invalidDate()
    }

    function E(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var s = 5;
        for (Et.lastIndex = 0; s >= 0 && Et.test(e);) e = e.replace(Et, n), Et.lastIndex = 0, s -= 1;
        return e
    }

    function j(e, t) {
        var n, s = t._strict;
        switch (e) {
            case "Q":
                return Kt;
            case "DDDD":
                return tn;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return s ? nn : qt;
            case "Y":
            case "G":
            case "g":
                return an;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return s ? sn : Vt;
            case "S":
                if (s) return Kt;
            case "SS":
                if (s) return en;
            case "SSS":
                if (s) return tn;
            case "DDD":
                return Nt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Jt;
            case "a":
            case "A":
                return t._locale._meridiemParse;
            case "x":
                return Qt;
            case "X":
                return Xt;
            case "Z":
            case "ZZ":
                return Rt;
            case "T":
                return Bt;
            case "SSSS":
                return $t;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return s ? en : jt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return jt;
            case "Do":
                return s ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
            default:
                return n = new RegExp(X(Q(e.replace("\\", "")), "i"))
        }
    }

    function N(e) {
        e = e || "";
        var t = e.match(Rt) || [],
            n = t[t.length - 1] || [],
            s = (n + "").match(ln) || ["-", 0, 0],
            a = +(60 * s[1]) + O(s[2]);
        return "+" === s[0] ? a : -a
    }

    function q(e, t, n) {
        var s, a = n._a;
        switch (e) {
            case "Q":
                null != t && (a[Ut] = 3 * (O(t) - 1));
                break;
            case "M":
            case "MM":
                null != t && (a[Ut] = O(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                s = n._locale.monthsParse(t, e, n._strict), null != s ? a[Ut] = s : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                null != t && (a[Wt] = O(t));
                break;
            case "Do":
                null != t && (a[Wt] = O(parseInt(t.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != t && (n._dayOfYear = O(t));
                break;
            case "YY":
                a[Ot] = wt.parseTwoDigitYear(t);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                a[Ot] = O(t);
                break;
            case "a":
            case "A":
                n._meridiem = t;
                break;
            case "h":
            case "hh":
                n._pf.bigHour = !0;
            case "H":
            case "HH":
                a[Ct] = O(t);
                break;
            case "m":
            case "mm":
                a[Gt] = O(t);
                break;
            case "s":
            case "ss":
                a[Ft] = O(t);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                a[Pt] = O(1e3 * ("0." + t));
                break;
            case "x":
                n._d = new Date(O(t));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = N(t);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                s = n._locale.weekdaysParse(t), null != s ? (n._w = n._w || {}, n._w.d = s) : n._pf.invalidWeekday = t;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = O(t));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[e] = wt.parseTwoDigitYear(t)
        }
    }

    function V(e) {
        var n, s, a, i, r, o, u;
        n = e._w, null != n.GG || null != n.W || null != n.E ? (r = 1, o = 4, s = t(n.GG, e._a[Ot], ct(wt(), 1, 4).year), a = t(n.W, 1), i = t(n.E, 1)) : (r = e._locale._week.dow, o = e._locale._week.doy, s = t(n.gg, e._a[Ot], ct(wt(), r, o).year), a = t(n.w, 1), null != n.d ? (i = n.d, r > i && ++a) : i = null != n.e ? n.e + r : r), u = lt(s, a, i, o, r), e._a[Ot] = u.year, e._dayOfYear = u.dayOfYear
    }

    function $(e) {
        var n, s, a, i, r = [];
        if (!e._d) {
            for (a = R(e), e._w && null == e._a[Wt] && null == e._a[Ut] && V(e), e._dayOfYear && (i = t(e._a[Ot], a[Ot]), e._dayOfYear > C(i) && (e._pf._overflowDayOfYear = !0), s = it(i, 0, e._dayOfYear), e._a[Ut] = s.getUTCMonth(), e._a[Wt] = s.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = r[n] = a[n];
            for (; 7 > n; n++) e._a[n] = r[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            24 === e._a[Ct] && 0 === e._a[Gt] && 0 === e._a[Ft] && 0 === e._a[Pt] && (e._nextDay = !0, e._a[Ct] = 0), e._d = (e._useUTC ? it : at).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ct] = 24)
        }
    }

    function J(e) {
        var t;
        e._d || (t = S(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], $(e))
    }

    function R(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function B(t) {
        if (t._f === wt.ISO_8601) return void et(t);
        t._a = [], t._pf.empty = !0;
        var n, s, a, i, r, o = "" + t._i,
            u = o.length,
            c = 0;
        for (a = E(t._f, t._locale).match(Zt) || [], n = 0; n < a.length; n++) i = a[n], s = (o.match(j(i, t)) || [])[0], s && (r = o.substr(0, o.indexOf(s)), r.length > 0 && t._pf.unusedInput.push(r), o = o.slice(o.indexOf(s) + s.length), c += s.length), gn[i] ? (s ? t._pf.empty = !1 : t._pf.unusedTokens.push(i), q(i, s, t)) : t._strict && !s && t._pf.unusedTokens.push(i);
        t._pf.charsLeftOver = u - c, o.length > 0 && t._pf.unusedInput.push(o), t._pf.bigHour === !0 && t._a[Ct] <= 12 && (t._pf.bigHour = e), t._a[Ct] = l(t._locale, t._a[Ct], t._meridiem), $(t), F(t)
    }

    function Q(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, a) {
            return t || n || s || a
        })
    }

    function X(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function K(e) {
        var t, n, a, i, r;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (i = 0; i < e._f.length; i++) r = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = s(), t._f = e._f[i], B(t), P(t) && (r += t._pf.charsLeftOver, r += 10 * t._pf.unusedTokens.length, t._pf.score = r, (null == a || a > r) && (a = r, n = t));
        _(e, n || t)
    }

    function et(e) {
        var t, n, s = e._i,
            a = rn.exec(s);
        if (a) {
            for (e._pf.iso = !0, t = 0, n = un.length; n > t; t++)
                if (un[t][1].exec(s)) {
                    e._f = un[t][0] + (a[6] || " ");
                    break
                } for (t = 0, n = cn.length; n > t; t++)
                if (cn[t][1].exec(s)) {
                    e._f += cn[t][0];
                    break
                } s.match(Rt) && (e._f += "Z"), B(e)
        } else e._isValid = !1
    }

    function tt(e) {
        et(e), e._isValid === !1 && (delete e._isValid, wt.createFromInputFallback(e))
    }

    function nt(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }

    function st(t) {
        var n, s = t._i;
        s === e ? t._d = new Date : v(s) ? t._d = new Date(+s) : null !== (n = Ht.exec(s)) ? t._d = new Date(+n[1]) : "string" == typeof s ? tt(t) : Y(s) ? (t._a = nt(s.slice(0), function(e) {
            return parseInt(e, 10)
        }), $(t)) : "object" == typeof s ? J(t) : "number" == typeof s ? t._d = new Date(s) : wt.createFromInputFallback(t)
    }

    function at(e, t, n, s, a, i, r) {
        var o = new Date(e, t, n, s, a, i, r);
        return 1970 > e && o.setFullYear(e), o
    }

    function it(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function rt(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e) return null
            } else e = parseInt(e, 10);
        return e
    }

    function ot(e, t, n, s, a) {
        return a.relativeTime(t || 1, !!n, e, s)
    }

    function ut(e, t, n) {
        var s = wt.duration(e).abs(),
            a = St(s.as("s")),
            i = St(s.as("m")),
            r = St(s.as("h")),
            o = St(s.as("d")),
            u = St(s.as("M")),
            c = St(s.as("y")),
            l = a < mn.s && ["s", a] || 1 === i && ["m"] || i < mn.m && ["mm", i] || 1 === r && ["h"] || r < mn.h && ["hh", r] || 1 === o && ["d"] || o < mn.d && ["dd", o] || 1 === u && ["M"] || u < mn.M && ["MM", u] || 1 === c && ["y"] || ["yy", c];
        return l[2] = t, l[3] = +e > 0, l[4] = n, ot.apply({}, l)
    }

    function ct(e, t, n) {
        var s, a = n - t,
            i = n - e.day();
        return i > a && (i -= 7), a - 7 > i && (i += 7), s = wt(e).add(i, "d"), {
            week: Math.ceil(s.dayOfYear() / 7),
            year: s.year()
        }
    }

    function lt(e, t, n, s, a) {
        var i, r, o = it(e, 0, 1).getUTCDay();
        return o = 0 === o ? 7 : o, n = null != n ? n : a, i = a - o + (o > s ? 7 : 0) - (a > o ? 7 : 0), r = 7 * (t - 1) + (n - a) + i + 1, {
            year: r > 0 ? e : e - 1,
            dayOfYear: r > 0 ? r : C(e - 1) + r
        }
    }

    function dt(t) {
        var n, s = t._i,
            a = t._f;
        return t._locale = t._locale || wt.localeData(t._l), null === s || a === e && "" === s ? wt.invalid({
            nullInput: !0
        }) : ("string" == typeof s && (t._i = s = t._locale.preparse(s)), wt.isMoment(s) ? new f(s, !0) : (a ? Y(a) ? K(t) : B(t) : st(t), n = new f(t), n._nextDay && (n.add(1, "d"), n._nextDay = e), n))
    }

    function ft(e, t) {
        var n, s;
        if (1 === t.length && Y(t[0]) && (t = t[0]), !t.length) return wt();
        for (n = t[0], s = 1; s < t.length; ++s) t[s][e](n) && (n = t[s]);
        return n
    }

    function ht(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), U(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function _t(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function mt(e, t, n) {
        return "Month" === t ? ht(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function yt(e, t) {
        return function(n) {
            return null != n ? (mt(this, e, n), wt.updateOffset(this, t), this) : _t(this, e)
        }
    }

    function pt(e) {
        return 400 * e / 146097
    }

    function gt(e) {
        return 146097 * e / 400
    }

    function Mt(e) {
        wt.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function Dt(e) {
        "undefined" == typeof ender && (Yt = bt.moment, bt.moment = e ? i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", wt) : wt)
    }
    for (var wt, Yt, vt, kt = "2.9.0", bt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, St = Math.round, Tt = Object.prototype.hasOwnProperty, Ot = 0, Ut = 1, Wt = 2, Ct = 3, Gt = 4, Ft = 5, Pt = 6, Lt = {}, It = [], xt = "undefined" != typeof module && module && module.exports, Ht = /^\/?Date\((\-?\d+)/i, At = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, zt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Zt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Et = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, jt = /\d\d?/, Nt = /\d{1,3}/, qt = /\d{1,4}/, Vt = /[+\-]?\d{1,6}/, $t = /\d+/, Jt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Rt = /Z|[\+\-]\d\d:?\d\d/gi, Bt = /T/i, Qt = /[\+\-]?\d+/, Xt = /[\+\-]?\d+(\.\d{1,3})?/, Kt = /\d/, en = /\d\d/, tn = /\d{3}/, nn = /\d{4}/, sn = /[+-]?\d{6}/, an = /[+-]?\d+/, rn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", un = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], cn = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], ln = /([\+\-]|\d\d)/gi, dn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), fn = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, hn = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, _n = {}, mn = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, yn = "DDD w W M D d".split(" "), pn = "M D H h m s w W".split(" "), gn = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return this.localeData().monthsShort(this, e)
        },
        MMMM: function(e) {
            return this.localeData().months(this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return this.localeData().weekdaysMin(this, e)
        },
        ddd: function(e) {
            return this.localeData().weekdaysShort(this, e)
        },
        dddd: function(e) {
            return this.localeData().weekdays(this, e)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return p(this.year() % 100, 2)
        },
        YYYY: function() {
            return p(this.year(), 4)
        },
        YYYYY: function() {
            return p(this.year(), 5)
        },
        YYYYYY: function() {
            var e = this.year(),
                t = e >= 0 ? "+" : "-";
            return t + p(Math.abs(e), 6)
        },
        gg: function() {
            return p(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return p(this.weekYear(), 4)
        },
        ggggg: function() {
            return p(this.weekYear(), 5)
        },
        GG: function() {
            return p(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return p(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return p(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return O(this.milliseconds() / 100)
        },
        SS: function() {
            return p(O(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return p(this.milliseconds(), 3)
        },
        SSSS: function() {
            return p(this.milliseconds(), 3)
        },
        Z: function() {
            var e = this.utcOffset(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + p(O(e / 60), 2) + ":" + p(O(e) % 60, 2)
        },
        ZZ: function() {
            var e = this.utcOffset(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + p(O(e / 60), 2) + p(O(e) % 60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        x: function() {
            return this.valueOf()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, Mn = {}, Dn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], wn = !1; yn.length;) vt = yn.pop(), gn[vt + "o"] = u(gn[vt], vt);
    for (; pn.length;) vt = pn.pop(), gn[vt + vt] = o(gn[vt], 2);
    gn.DDDD = o(gn.DDD, 3), _(d.prototype, {
        set: function(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e, t, n) {
            var s, a, i;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; 12 > s; s++) {
                if (a = wt.utc([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
                if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
                if (!n && this._monthsParse[s].test(e)) return s
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, s;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = wt([2e3, 1]).day(t), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t, n) {
            var s = this._calendar[e];
            return "function" == typeof s ? s.apply(t, [n]) : s
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, s) {
            var a = this._relativeTime[n];
            return "function" == typeof a ? a(e, t, n, s) : a.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return ct(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function() {
            return this._week.dow
        },
        firstDayOfYear: function() {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), wt = function(t, n, a, i) {
        var r;
        return "boolean" == typeof a && (i = a, a = e), r = {}, r._isAMomentObject = !0, r._i = t, r._f = n, r._l = a, r._strict = i, r._isUTC = !1, r._pf = s(), dt(r)
    }, wt.suppressDeprecationWarnings = !1, wt.createFromInputFallback = i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), wt.min = function() {
        var e = [].slice.call(arguments, 0);
        return ft("isBefore", e)
    }, wt.max = function() {
        var e = [].slice.call(arguments, 0);
        return ft("isAfter", e)
    }, wt.utc = function(t, n, a, i) {
        var r;
        return "boolean" == typeof a && (i = a, a = e), r = {}, r._isAMomentObject = !0, r._useUTC = !0, r._isUTC = !0, r._l = a, r._i = t, r._f = n, r._strict = i, r._pf = s(), dt(r).utc()
    }, wt.unix = function(e) {
        return wt(1e3 * e)
    }, wt.duration = function(e, t) {
        var s, a, i, r, o = e,
            u = null;
        return wt.isDuration(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (u = At.exec(e)) ? (s = "-" === u[1] ? -1 : 1, o = {
            y: 0,
            d: O(u[Wt]) * s,
            h: O(u[Ct]) * s,
            m: O(u[Gt]) * s,
            s: O(u[Ft]) * s,
            ms: O(u[Pt]) * s
        }) : (u = zt.exec(e)) ? (s = "-" === u[1] ? -1 : 1, i = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * s
        }, o = {
            y: i(u[2]),
            M: i(u[3]),
            d: i(u[4]),
            h: i(u[5]),
            m: i(u[6]),
            s: i(u[7]),
            w: i(u[8])
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = M(wt(o.from), wt(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), a = new h(o), wt.isDuration(e) && n(e, "_locale") && (a._locale = e._locale), a
    }, wt.version = kt, wt.defaultFormat = on, wt.ISO_8601 = function() {}, wt.momentProperties = It, wt.updateOffset = function() {}, wt.relativeTimeThreshold = function(t, n) {
        return mn[t] === e ? !1 : n === e ? mn[t] : (mn[t] = n, !0)
    }, wt.lang = i("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
        return wt.locale(e, t)
    }), wt.locale = function(e, t) {
        var n;
        return e && (n = "undefined" != typeof t ? wt.defineLocale(e, t) : wt.localeData(e), n && (wt.duration._locale = wt._locale = n)), wt._locale._abbr
    }, wt.defineLocale = function(e, t) {
        return null !== t ? (t.abbr = e, Lt[e] || (Lt[e] = new d), Lt[e].set(t), wt.locale(e), Lt[e]) : (delete Lt[e], null)
    }, wt.langData = i("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
        return wt.localeData(e)
    }), wt.localeData = function(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return wt._locale;
        if (!Y(e)) {
            if (t = x(e)) return t;
            e = [e]
        }
        return I(e)
    }, wt.isMoment = function(e) {
        return e instanceof f || null != e && n(e, "_isAMomentObject")
    }, wt.isDuration = function(e) {
        return e instanceof h
    };
    for (vt = Dn.length - 1; vt >= 0; --vt) T(Dn[vt]);
    wt.normalizeUnits = function(e) {
        return b(e)
    }, wt.invalid = function(e) {
        var t = wt.utc(0 / 0);
        return null != e ? _(t._pf, e) : t._pf.userInvalidated = !0, t
    }, wt.parseZone = function() {
        return wt.apply(null, arguments).parseZone()
    }, wt.parseTwoDigitYear = function(e) {
        return O(e) + (O(e) > 68 ? 1900 : 2e3)
    }, wt.isDate = v, _(wt.fn = f.prototype, {
        clone: function() {
            return wt(this)
        },
        valueOf: function() {
            return +this._d - 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = wt(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : Z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return P(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && k(this._a, (this._isUTC ? wt.utc(this._a) : wt(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return _({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(e) {
            return this.utcOffset(0, e)
        },
        local: function(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function(e) {
            var t = Z(this, e || wt.defaultFormat);
            return this.localeData().postformat(t)
        },
        add: D(1, "add"),
        subtract: D(-1, "subtract"),
        diff: function(e, t, n) {
            var s, a, i = H(e, this),
                r = 6e4 * (i.utcOffset() - this.utcOffset());
            return t = b(t), "year" === t || "month" === t || "quarter" === t ? (a = c(this, i), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (s = this - i, a = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - r) / 864e5 : "week" === t ? (s - r) / 6048e5 : s), n ? a : y(a)
        },
        from: function(e, t) {
            return wt.duration({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(wt(), e)
        },
        calendar: function(e) {
            var t = e || wt(),
                n = H(t, this).startOf("day"),
                s = this.diff(n, "days", !0),
                a = -6 > s ? "sameElse" : -1 > s ? "lastWeek" : 0 > s ? "lastDay" : 1 > s ? "sameDay" : 2 > s ? "nextDay" : 7 > s ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(a, this, wt(t)))
        },
        isLeapYear: function() {
            return G(this.year())
        },
        isDST: function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = rt(e, this.localeData()), this.add(e - t, "d")) : t
        },
        month: yt("Month", !0),
        startOf: function(e) {
            switch (e = b(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(t) {
            return t = b(t), t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
        },
        isAfter: function(e, t) {
            var n;
            return t = b("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +this > +e) : (n = wt.isMoment(e) ? +e : +wt(e), n < +this.clone().startOf(t))
        },
        isBefore: function(e, t) {
            var n;
            return t = b("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +e > +this) : (n = wt.isMoment(e) ? +e : +wt(e), +this.clone().endOf(t) < n)
        },
        isBetween: function(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        },
        isSame: function(e, t) {
            var n;
            return t = b(t || "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +this === +e) : (n = +wt(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        },
        min: i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = wt.apply(null, arguments), this > e ? this : e
        }),
        max: i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = wt.apply(null, arguments), e > this ? this : e
        }),
        zone: i("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }),
        utcOffset: function(e, t) {
            var n, s = this._offset || 0;
            return null != e ? ("string" == typeof e && (e = N(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateUtcOffset()), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? w(this, wt.duration(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, wt.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : this._dateUtcOffset()
        },
        isLocal: function() {
            return !this._isUTC
        },
        isUtcOffset: function() {
            return this._isUTC
        },
        isUtc: function() {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(N(this._i)), this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
        },
        daysInMonth: function() {
            return U(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = St((wt(this).startOf("day") - wt(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        },
        quarter: function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        },
        weekYear: function(e) {
            var t = ct(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        },
        isoWeekYear: function(e) {
            var t = ct(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        },
        week: function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        isoWeek: function(e) {
            var t = ct(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return W(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this.localeData()._week;
            return W(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = b(e), this[e]()
        },
        set: function(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else e = b(e), "function" == typeof this[e] && this[e](t);
            return this
        },
        locale: function(t) {
            var n;
            return t === e ? this._locale._abbr : (n = wt.localeData(t), null != n && (this._locale = n), this)
        },
        lang: i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return t === e ? this.localeData() : this.locale(t)
        }),
        localeData: function() {
            return this._locale
        },
        _dateUtcOffset: function() {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), wt.fn.millisecond = wt.fn.milliseconds = yt("Milliseconds", !1), wt.fn.second = wt.fn.seconds = yt("Seconds", !1), wt.fn.minute = wt.fn.minutes = yt("Minutes", !1), wt.fn.hour = wt.fn.hours = yt("Hours", !0), wt.fn.date = yt("Date", !0), wt.fn.dates = i("dates accessor is deprecated. Use date instead.", yt("Date", !0)), wt.fn.year = yt("FullYear", !0), wt.fn.years = i("years accessor is deprecated. Use year instead.", yt("FullYear", !0)), wt.fn.days = wt.fn.day, wt.fn.months = wt.fn.month, wt.fn.weeks = wt.fn.week, wt.fn.isoWeeks = wt.fn.isoWeek, wt.fn.quarters = wt.fn.quarter, wt.fn.toJSON = wt.fn.toISOString, wt.fn.isUTC = wt.fn.isUtc, _(wt.duration.fn = h.prototype, {
        _bubble: function() {
            var e, t, n, s = this._milliseconds,
                a = this._days,
                i = this._months,
                r = this._data,
                o = 0;
            r.milliseconds = s % 1e3, e = y(s / 1e3), r.seconds = e % 60, t = y(e / 60), r.minutes = t % 60, n = y(t / 60), r.hours = n % 24, a += y(n / 24), o = y(pt(a)), a -= y(gt(o)), i += y(a / 30), a %= 30, o += y(i / 12), i %= 12, r.days = a, r.months = i, r.years = o
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return y(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * O(this._months / 12)
        },
        humanize: function(e) {
            var t = ut(this, !e, this.localeData());
            return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
        },
        add: function(e, t) {
            var n = wt.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = wt.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = b(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            var t, n;
            if (e = b(e), "month" === e || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * pt(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(gt(this._months / 12)), e) {
                case "week":
                    return t / 7 + this._milliseconds / 6048e5;
                case "day":
                    return t + this._milliseconds / 864e5;
                case "hour":
                    return 24 * t + this._milliseconds / 36e5;
                case "minute":
                    return 24 * t * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + e)
            }
        },
        lang: wt.fn.lang,
        locale: wt.fn.locale,
        toIsoString: i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                s = Math.abs(this.hours()),
                a = Math.abs(this.minutes()),
                i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (s || a || i ? "T" : "") + (s ? s + "H" : "") + (a ? a + "M" : "") + (i ? i + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        },
        toJSON: function() {
            return this.toISOString()
        }
    }), wt.duration.fn.toString = wt.duration.fn.toISOString;
    for (vt in dn) n(dn, vt) && Mt(vt.toLowerCase());
    wt.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, wt.duration.fn.asSeconds = function() {
        return this.as("s")
    }, wt.duration.fn.asMinutes = function() {
        return this.as("m")
    }, wt.duration.fn.asHours = function() {
        return this.as("h")
    }, wt.duration.fn.asDays = function() {
        return this.as("d")
    }, wt.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, wt.duration.fn.asMonths = function() {
        return this.as("M")
    }, wt.duration.fn.asYears = function() {
        return this.as("y")
    }, wt.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10,
                n = 1 === O(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), xt ? module.exports = wt : "function" == typeof define && define.amd ? (define(function(e, t, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (bt.moment = Yt), wt
    }), Dt(!0)) : Dt()
}).call(this);
1