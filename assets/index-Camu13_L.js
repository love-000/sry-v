(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
var Wd = {
    exports: {}
}
  , Mo = {}
  , Kd = {
    exports: {}
}
  , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti = Symbol.for("react.element")
  , Vm = Symbol.for("react.portal")
  , _m = Symbol.for("react.fragment")
  , Im = Symbol.for("react.strict_mode")
  , Om = Symbol.for("react.profiler")
  , Fm = Symbol.for("react.provider")
  , zm = Symbol.for("react.context")
  , Bm = Symbol.for("react.forward_ref")
  , Um = Symbol.for("react.suspense")
  , bm = Symbol.for("react.memo")
  , $m = Symbol.for("react.lazy")
  , wu = Symbol.iterator;
function Hm(e) {
    return e === null || typeof e != "object" ? null : (e = wu && e[wu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Gd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Qd = Object.assign
  , Yd = {};
function qn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yd,
    this.updater = n || Gd
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
qn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Xd() {}
Xd.prototype = qn.prototype;
function Hl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yd,
    this.updater = n || Gd
}
var Wl = Hl.prototype = new Xd;
Wl.constructor = Hl;
Qd(Wl, qn.prototype);
Wl.isPureReactComponent = !0;
var Su = Array.isArray
  , Zd = Object.prototype.hasOwnProperty
  , Kl = {
    current: null
}
  , qd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jd(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Zd.call(t, r) && !qd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ti,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Kl.current
    }
}
function Wm(e, t) {
    return {
        $$typeof: ti,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Gl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ti
}
function Km(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ku = /\/+/g;
function Zo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Km("" + e.key) : t.toString(36)
}
function _i(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ti:
            case Vm:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Zo(s, 0) : r,
        Su(i) ? (n = "",
        e != null && (n = e.replace(ku, "$&/") + "/"),
        _i(i, t, n, "", function(u) {
            return u
        })) : i != null && (Gl(i) && (i = Wm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ku, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Su(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Zo(o, l);
            s += _i(o, t, n, a, i)
        }
    else if (a = Hm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + Zo(o, l++),
            s += _i(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function hi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return _i(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Gm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ce = {
    current: null
}
  , Ii = {
    transition: null
}
  , Qm = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Ii,
    ReactCurrentOwner: Kl
};
function ef() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: hi,
    forEach: function(e, t, n) {
        hi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return hi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return hi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Gl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = qn;
I.Fragment = _m;
I.Profiler = Om;
I.PureComponent = Hl;
I.StrictMode = Im;
I.Suspense = Um;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
I.act = ef;
I.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Qd({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Kl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Zd.call(t, a) && !qd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ti,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
I.createContext = function(e) {
    return e = {
        $$typeof: zm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Fm,
        _context: e
    },
    e.Consumer = e
}
;
I.createElement = Jd;
I.createFactory = function(e) {
    var t = Jd.bind(null, e);
    return t.type = e,
    t
}
;
I.createRef = function() {
    return {
        current: null
    }
}
;
I.forwardRef = function(e) {
    return {
        $$typeof: Bm,
        render: e
    }
}
;
I.isValidElement = Gl;
I.lazy = function(e) {
    return {
        $$typeof: $m,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gm
    }
}
;
I.memo = function(e, t) {
    return {
        $$typeof: bm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
I.startTransition = function(e) {
    var t = Ii.transition;
    Ii.transition = {};
    try {
        e()
    } finally {
        Ii.transition = t
    }
}
;
I.unstable_act = ef;
I.useCallback = function(e, t) {
    return Ce.current.useCallback(e, t)
}
;
I.useContext = function(e) {
    return Ce.current.useContext(e)
}
;
I.useDebugValue = function() {}
;
I.useDeferredValue = function(e) {
    return Ce.current.useDeferredValue(e)
}
;
I.useEffect = function(e, t) {
    return Ce.current.useEffect(e, t)
}
;
I.useId = function() {
    return Ce.current.useId()
}
;
I.useImperativeHandle = function(e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n)
}
;
I.useInsertionEffect = function(e, t) {
    return Ce.current.useInsertionEffect(e, t)
}
;
I.useLayoutEffect = function(e, t) {
    return Ce.current.useLayoutEffect(e, t)
}
;
I.useMemo = function(e, t) {
    return Ce.current.useMemo(e, t)
}
;
I.useReducer = function(e, t, n) {
    return Ce.current.useReducer(e, t, n)
}
;
I.useRef = function(e) {
    return Ce.current.useRef(e)
}
;
I.useState = function(e) {
    return Ce.current.useState(e)
}
;
I.useSyncExternalStore = function(e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n)
}
;
I.useTransition = function() {
    return Ce.current.useTransition()
}
;
I.version = "18.3.1";
Kd.exports = I;
var T = Kd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ym = T
  , Xm = Symbol.for("react.element")
  , Zm = Symbol.for("react.fragment")
  , qm = Object.prototype.hasOwnProperty
  , Jm = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , e0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tf(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        qm.call(t, r) && !e0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Xm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Jm.current
    }
}
Mo.Fragment = Zm;
Mo.jsx = tf;
Mo.jsxs = tf;
Wd.exports = Mo;
var y = Wd.exports
  , nf = {
    exports: {}
}
  , Oe = {}
  , rf = {
    exports: {}
}
  , of = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, V) {
        var _ = A.length;
        A.push(V);
        e: for (; 0 < _; ) {
            var J = _ - 1 >>> 1
              , ae = A[J];
            if (0 < i(ae, V))
                A[J] = V,
                A[_] = ae,
                _ = J;
            else
                break e
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0]
    }
    function r(A) {
        if (A.length === 0)
            return null;
        var V = A[0]
          , _ = A.pop();
        if (_ !== V) {
            A[0] = _;
            e: for (var J = 0, ae = A.length, fi = ae >>> 1; J < fi; ) {
                var Kt = 2 * (J + 1) - 1
                  , Xo = A[Kt]
                  , Gt = Kt + 1
                  , pi = A[Gt];
                if (0 > i(Xo, _))
                    Gt < ae && 0 > i(pi, Xo) ? (A[J] = pi,
                    A[Gt] = _,
                    J = Gt) : (A[J] = Xo,
                    A[Kt] = _,
                    J = Kt);
                else if (Gt < ae && 0 > i(pi, _))
                    A[J] = pi,
                    A[Gt] = _,
                    J = Gt;
                else
                    break e
            }
        }
        return V
    }
    function i(A, V) {
        var _ = A.sortIndex - V.sortIndex;
        return _ !== 0 ? _ : A.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , g = !1
      , v = !1
      , x = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(A) {
        for (var V = n(u); V !== null; ) {
            if (V.callback === null)
                r(u);
            else if (V.startTime <= A)
                r(u),
                V.sortIndex = V.expirationTime,
                t(a, V);
            else
                break;
            V = n(u)
        }
    }
    function S(A) {
        if (x = !1,
        m(A),
        !v)
            if (n(a) !== null)
                v = !0,
                di(k);
            else {
                var V = n(u);
                V !== null && ie(S, V.startTime - A)
            }
    }
    function k(A, V) {
        v = !1,
        x && (x = !1,
        h(w),
        w = -1),
        g = !0;
        var _ = f;
        try {
            for (m(V),
            d = n(a); d !== null && (!(d.expirationTime > V) || A && !F()); ) {
                var J = d.callback;
                if (typeof J == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var ae = J(d.expirationTime <= V);
                    V = e.unstable_now(),
                    typeof ae == "function" ? d.callback = ae : d === n(a) && r(a),
                    m(V)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var fi = !0;
            else {
                var Kt = n(u);
                Kt !== null && ie(S, Kt.startTime - V),
                fi = !1
            }
            return fi
        } finally {
            d = null,
            f = _,
            g = !1
        }
    }
    var C = !1
      , j = null
      , w = -1
      , P = 5
      , M = -1;
    function F() {
        return !(e.unstable_now() - M < P)
    }
    function B() {
        if (j !== null) {
            var A = e.unstable_now();
            M = A;
            var V = !0;
            try {
                V = j(!0, A)
            } finally {
                V ? le() : (C = !1,
                j = null)
            }
        } else
            C = !1
    }
    var le;
    if (typeof p == "function")
        le = function() {
            p(B)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var $ = new MessageChannel
          , mn = $.port2;
        $.port1.onmessage = B,
        le = function() {
            mn.postMessage(null)
        }
    } else
        le = function() {
            E(B, 0)
        }
        ;
    function di(A) {
        j = A,
        C || (C = !0,
        le())
    }
    function ie(A, V) {
        w = E(function() {
            A(e.unstable_now())
        }, V)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(A) {
        A.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || g || (v = !0,
        di(k))
    }
    ,
    e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < A ? Math.floor(1e3 / A) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(A) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = f
        }
        var _ = f;
        f = V;
        try {
            return A()
        } finally {
            f = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(A, V) {
        switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            A = 3
        }
        var _ = f;
        f = A;
        try {
            return V()
        } finally {
            f = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(A, V, _) {
        var J = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? J + _ : J) : _ = J,
        A) {
        case 1:
            var ae = -1;
            break;
        case 2:
            ae = 250;
            break;
        case 5:
            ae = 1073741823;
            break;
        case 4:
            ae = 1e4;
            break;
        default:
            ae = 5e3
        }
        return ae = _ + ae,
        A = {
            id: c++,
            callback: V,
            priorityLevel: A,
            startTime: _,
            expirationTime: ae,
            sortIndex: -1
        },
        _ > J ? (A.sortIndex = _,
        t(u, A),
        n(a) === null && A === n(u) && (x ? (h(w),
        w = -1) : x = !0,
        ie(S, _ - J))) : (A.sortIndex = ae,
        t(a, A),
        v || g || (v = !0,
        di(k))),
        A
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(A) {
        var V = f;
        return function() {
            var _ = f;
            f = V;
            try {
                return A.apply(this, arguments)
            } finally {
                f = _
            }
        }
    }
}
)(of);
rf.exports = of;
var t0 = rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n0 = T
  , Ie = t0;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sf = new Set
  , Rr = {};
function fn(e, t) {
    bn(e, t),
    bn(e + "Capture", t)
}
function bn(e, t) {
    for (Rr[e] = t,
    e = 0; e < t.length; e++)
        sf.add(t[e])
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Is = Object.prototype.hasOwnProperty
  , r0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Tu = {}
  , Pu = {};
function i0(e) {
    return Is.call(Pu, e) ? !0 : Is.call(Tu, e) ? !1 : r0.test(e) ? Pu[e] = !0 : (Tu[e] = !0,
    !1)
}
function o0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function s0(e, t, n, r) {
    if (t === null || typeof t > "u" || o0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ee(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    me[e] = new Ee(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    me[t] = new Ee(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    me[e] = new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    me[e] = new Ee(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    me[e] = new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    me[e] = new Ee(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    me[e] = new Ee(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    me[e] = new Ee(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    me[e] = new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ql = /[\-:]([a-z])/g;
function Yl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Yl);
    me[t] = new Ee(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Yl);
    me[t] = new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ql, Yl);
    me[t] = new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    me[e] = new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)
});
me.xlinkHref = new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    me[e] = new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Xl(e, t, n, r) {
    var i = me.hasOwnProperty(t) ? me[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (s0(t, n, i, r) && (n = null),
    r || i === null ? i0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wt = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , mi = Symbol.for("react.element")
  , gn = Symbol.for("react.portal")
  , vn = Symbol.for("react.fragment")
  , Zl = Symbol.for("react.strict_mode")
  , Os = Symbol.for("react.profiler")
  , lf = Symbol.for("react.provider")
  , af = Symbol.for("react.context")
  , ql = Symbol.for("react.forward_ref")
  , Fs = Symbol.for("react.suspense")
  , zs = Symbol.for("react.suspense_list")
  , Jl = Symbol.for("react.memo")
  , Tt = Symbol.for("react.lazy")
  , uf = Symbol.for("react.offscreen")
  , Cu = Symbol.iterator;
function ir(e) {
    return e === null || typeof e != "object" ? null : (e = Cu && e[Cu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var X = Object.assign, qo;
function pr(e) {
    if (qo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            qo = t && t[1] || ""
        }
    return `
` + qo + e
}
var Jo = !1;
function es(e, t) {
    if (!e || Jo)
        return "";
    Jo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Jo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? pr(e) : ""
}
function l0(e) {
    switch (e.tag) {
    case 5:
        return pr(e.type);
    case 16:
        return pr("Lazy");
    case 13:
        return pr("Suspense");
    case 19:
        return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = es(e.type, !1),
        e;
    case 11:
        return e = es(e.type.render, !1),
        e;
    case 1:
        return e = es(e.type, !0),
        e;
    default:
        return ""
    }
}
function Bs(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case vn:
        return "Fragment";
    case gn:
        return "Portal";
    case Os:
        return "Profiler";
    case Zl:
        return "StrictMode";
    case Fs:
        return "Suspense";
    case zs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case af:
            return (e.displayName || "Context") + ".Consumer";
        case lf:
            return (e._context.displayName || "Context") + ".Provider";
        case ql:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Jl:
            return t = e.displayName || null,
            t !== null ? t : Bs(e.type) || "Memo";
        case Tt:
            t = e._payload,
            e = e._init;
            try {
                return Bs(e(t))
            } catch {}
        }
    return null
}
function a0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Bs(t);
    case 8:
        return t === Zl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function cf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function u0(e) {
    var t = cf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function yi(e) {
    e._valueTracker || (e._valueTracker = u0(e))
}
function df(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = cf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Xi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Us(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Eu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ff(e, t) {
    t = t.checked,
    t != null && Xl(e, "checked", t, !1)
}
function bs(e, t) {
    ff(e, t);
    var n = Ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $s(e, t.type, n) : t.hasOwnProperty("defaultValue") && $s(e, t.type, Ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Nu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $s(e, t, n) {
    (t !== "number" || Xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hr = Array.isArray;
function _n(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ft(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Hs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ju(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (hr(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ft(n)
    }
}
function pf(e, t) {
    var n = Ft(t.value)
      , r = Ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Mu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function hf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ws(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var gi, mf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (gi = gi || document.createElement("div"),
        gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = gi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Dr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , c0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function(e) {
    c0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        xr[t] = xr[e]
    })
});
function yf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px"
}
function gf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = yf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var d0 = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ks(e, t) {
    if (t) {
        if (d0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Gs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Qs = null;
function ea(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ys = null
  , In = null
  , On = null;
function Au(e) {
    if (e = ii(e)) {
        if (typeof Ys != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = Vo(t),
        Ys(e.stateNode, e.type, t))
    }
}
function vf(e) {
    In ? On ? On.push(e) : On = [e] : In = e
}
function xf() {
    if (In) {
        var e = In
          , t = On;
        if (On = In = null,
        Au(e),
        t)
            for (e = 0; e < t.length; e++)
                Au(t[e])
    }
}
function wf(e, t) {
    return e(t)
}
function Sf() {}
var ts = !1;
function kf(e, t, n) {
    if (ts)
        return e(t, n);
    ts = !0;
    try {
        return wf(e, t, n)
    } finally {
        ts = !1,
        (In !== null || On !== null) && (Sf(),
        xf())
    }
}
function Lr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Vo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Xs = !1;
if (mt)
    try {
        var or = {};
        Object.defineProperty(or, "passive", {
            get: function() {
                Xs = !0
            }
        }),
        window.addEventListener("test", or, or),
        window.removeEventListener("test", or, or)
    } catch {
        Xs = !1
    }
function f0(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var wr = !1
  , Zi = null
  , qi = !1
  , Zs = null
  , p0 = {
    onError: function(e) {
        wr = !0,
        Zi = e
    }
};
function h0(e, t, n, r, i, o, s, l, a) {
    wr = !1,
    Zi = null,
    f0.apply(p0, arguments)
}
function m0(e, t, n, r, i, o, s, l, a) {
    if (h0.apply(this, arguments),
    wr) {
        if (wr) {
            var u = Zi;
            wr = !1,
            Zi = null
        } else
            throw Error(N(198));
        qi || (qi = !0,
        Zs = u)
    }
}
function pn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Tf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ru(e) {
    if (pn(e) !== e)
        throw Error(N(188))
}
function y0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Ru(i),
                    e;
                if (o === r)
                    return Ru(i),
                    t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function Pf(e) {
    return e = y0(e),
    e !== null ? Cf(e) : null
}
function Cf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Cf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ef = Ie.unstable_scheduleCallback
  , Du = Ie.unstable_cancelCallback
  , g0 = Ie.unstable_shouldYield
  , v0 = Ie.unstable_requestPaint
  , te = Ie.unstable_now
  , x0 = Ie.unstable_getCurrentPriorityLevel
  , ta = Ie.unstable_ImmediatePriority
  , Nf = Ie.unstable_UserBlockingPriority
  , Ji = Ie.unstable_NormalPriority
  , w0 = Ie.unstable_LowPriority
  , jf = Ie.unstable_IdlePriority
  , Ao = null
  , it = null;
function S0(e) {
    if (it && typeof it.onCommitFiberRoot == "function")
        try {
            it.onCommitFiberRoot(Ao, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var qe = Math.clz32 ? Math.clz32 : P0
  , k0 = Math.log
  , T0 = Math.LN2;
function P0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (k0(e) / T0 | 0) | 0
}
var vi = 64
  , xi = 4194304;
function mr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function eo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = mr(l) : (o &= s,
        o !== 0 && (r = mr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = mr(s) : o !== 0 && (r = mr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - qe(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function C0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function E0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - qe(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = C0(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function qs(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Mf() {
    var e = vi;
    return vi <<= 1,
    !(vi & 4194240) && (vi = 64),
    e
}
function ns(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ni(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - qe(t),
    e[t] = n
}
function N0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - qe(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function na(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - qe(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var z = 0;
function Af(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Rf, ra, Df, Lf, Vf, Js = !1, wi = [], At = null, Rt = null, Dt = null, Vr = new Map, _r = new Map, Ct = [], j0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        At = null;
        break;
    case "dragenter":
    case "dragleave":
        Rt = null;
        break;
    case "mouseover":
    case "mouseout":
        Dt = null;
        break;
    case "pointerover":
    case "pointerout":
        Vr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        _r.delete(t.pointerId)
    }
}
function sr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ii(t),
    t !== null && ra(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function M0(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return At = sr(At, e, t, n, r, i),
        !0;
    case "dragenter":
        return Rt = sr(Rt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Dt = sr(Dt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Vr.set(o, sr(Vr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        _r.set(o, sr(_r.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function _f(e) {
    var t = Jt(e.target);
    if (t !== null) {
        var n = pn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Tf(n),
                t !== null) {
                    e.blockedOn = t,
                    Vf(e.priority, function() {
                        Df(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Oi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Qs = r,
            n.target.dispatchEvent(r),
            Qs = null
        } else
            return t = ii(n),
            t !== null && ra(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Vu(e, t, n) {
    Oi(e) && n.delete(t)
}
function A0() {
    Js = !1,
    At !== null && Oi(At) && (At = null),
    Rt !== null && Oi(Rt) && (Rt = null),
    Dt !== null && Oi(Dt) && (Dt = null),
    Vr.forEach(Vu),
    _r.forEach(Vu)
}
function lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Js || (Js = !0,
    Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, A0)))
}
function Ir(e) {
    function t(i) {
        return lr(i, e)
    }
    if (0 < wi.length) {
        lr(wi[0], e);
        for (var n = 1; n < wi.length; n++) {
            var r = wi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (At !== null && lr(At, e),
    Rt !== null && lr(Rt, e),
    Dt !== null && lr(Dt, e),
    Vr.forEach(t),
    _r.forEach(t),
    n = 0; n < Ct.length; n++)
        r = Ct[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && (n = Ct[0],
    n.blockedOn === null); )
        _f(n),
        n.blockedOn === null && Ct.shift()
}
var Fn = wt.ReactCurrentBatchConfig
  , to = !0;
function R0(e, t, n, r) {
    var i = z
      , o = Fn.transition;
    Fn.transition = null;
    try {
        z = 1,
        ia(e, t, n, r)
    } finally {
        z = i,
        Fn.transition = o
    }
}
function D0(e, t, n, r) {
    var i = z
      , o = Fn.transition;
    Fn.transition = null;
    try {
        z = 4,
        ia(e, t, n, r)
    } finally {
        z = i,
        Fn.transition = o
    }
}
function ia(e, t, n, r) {
    if (to) {
        var i = el(e, t, n, r);
        if (i === null)
            fs(e, t, r, no, n),
            Lu(e, r);
        else if (M0(i, e, t, n, r))
            r.stopPropagation();
        else if (Lu(e, r),
        t & 4 && -1 < j0.indexOf(e)) {
            for (; i !== null; ) {
                var o = ii(i);
                if (o !== null && Rf(o),
                o = el(e, t, n, r),
                o === null && fs(e, t, r, no, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            fs(e, t, r, null, n)
    }
}
var no = null;
function el(e, t, n, r) {
    if (no = null,
    e = ea(r),
    e = Jt(e),
    e !== null)
        if (t = pn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Tf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return no = e,
    null
}
function If(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (x0()) {
        case ta:
            return 1;
        case Nf:
            return 4;
        case Ji:
        case w0:
            return 16;
        case jf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var jt = null
  , oa = null
  , Fi = null;
function Of() {
    if (Fi)
        return Fi;
    var e, t = oa, n = t.length, r, i = "value"in jt ? jt.value : jt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Fi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function zi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Si() {
    return !0
}
function _u() {
    return !1
}
function Fe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Si : _u,
        this.isPropagationStopped = _u,
        this
    }
    return X(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Si)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Si)
        },
        persist: function() {},
        isPersistent: Si
    }),
    t
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, sa = Fe(Jn), ri = X({}, Jn, {
    view: 0,
    detail: 0
}), L0 = Fe(ri), rs, is, ar, Ro = X({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: la,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (rs = e.screenX - ar.screenX,
        is = e.screenY - ar.screenY) : is = rs = 0,
        ar = e),
        rs)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : is
    }
}), Iu = Fe(Ro), V0 = X({}, Ro, {
    dataTransfer: 0
}), _0 = Fe(V0), I0 = X({}, ri, {
    relatedTarget: 0
}), os = Fe(I0), O0 = X({}, Jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), F0 = Fe(O0), z0 = X({}, Jn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), B0 = Fe(z0), U0 = X({}, Jn, {
    data: 0
}), Ou = Fe(U0), b0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, $0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, H0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function W0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1
}
function la() {
    return W0
}
var K0 = X({}, ri, {
    key: function(e) {
        if (e.key) {
            var t = b0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = zi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: la,
    charCode: function(e) {
        return e.type === "keypress" ? zi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , G0 = Fe(K0)
  , Q0 = X({}, Ro, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fu = Fe(Q0)
  , Y0 = X({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: la
})
  , X0 = Fe(Y0)
  , Z0 = X({}, Jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , q0 = Fe(Z0)
  , J0 = X({}, Ro, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ey = Fe(J0)
  , ty = [9, 13, 27, 32]
  , aa = mt && "CompositionEvent"in window
  , Sr = null;
mt && "documentMode"in document && (Sr = document.documentMode);
var ny = mt && "TextEvent"in window && !Sr
  , Ff = mt && (!aa || Sr && 8 < Sr && 11 >= Sr)
  , zu = " "
  , Bu = !1;
function zf(e, t) {
    switch (e) {
    case "keyup":
        return ty.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Bf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var xn = !1;
function ry(e, t) {
    switch (e) {
    case "compositionend":
        return Bf(t);
    case "keypress":
        return t.which !== 32 ? null : (Bu = !0,
        zu);
    case "textInput":
        return e = t.data,
        e === zu && Bu ? null : e;
    default:
        return null
    }
}
function iy(e, t) {
    if (xn)
        return e === "compositionend" || !aa && zf(e, t) ? (e = Of(),
        Fi = oa = jt = null,
        xn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ff && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var oy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!oy[e.type] : t === "textarea"
}
function Uf(e, t, n, r) {
    vf(r),
    t = ro(t, "onChange"),
    0 < t.length && (n = new sa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var kr = null
  , Or = null;
function sy(e) {
    qf(e, 0)
}
function Do(e) {
    var t = kn(e);
    if (df(t))
        return e
}
function ly(e, t) {
    if (e === "change")
        return t
}
var bf = !1;
if (mt) {
    var ss;
    if (mt) {
        var ls = "oninput"in document;
        if (!ls) {
            var bu = document.createElement("div");
            bu.setAttribute("oninput", "return;"),
            ls = typeof bu.oninput == "function"
        }
        ss = ls
    } else
        ss = !1;
    bf = ss && (!document.documentMode || 9 < document.documentMode)
}
function $u() {
    kr && (kr.detachEvent("onpropertychange", $f),
    Or = kr = null)
}
function $f(e) {
    if (e.propertyName === "value" && Do(Or)) {
        var t = [];
        Uf(t, Or, e, ea(e)),
        kf(sy, t)
    }
}
function ay(e, t, n) {
    e === "focusin" ? ($u(),
    kr = t,
    Or = n,
    kr.attachEvent("onpropertychange", $f)) : e === "focusout" && $u()
}
function uy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Do(Or)
}
function cy(e, t) {
    if (e === "click")
        return Do(t)
}
function dy(e, t) {
    if (e === "input" || e === "change")
        return Do(t)
}
function fy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var et = typeof Object.is == "function" ? Object.is : fy;
function Fr(e, t) {
    if (et(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Is.call(t, i) || !et(e[i], t[i]))
            return !1
    }
    return !0
}
function Hu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Wu(e, t) {
    var n = Hu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hu(n)
    }
}
function Hf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Wf() {
    for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Xi(e.document)
    }
    return t
}
function ua(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function py(e) {
    var t = Wf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Hf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ua(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Wu(n, o);
                var s = Wu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var hy = mt && "documentMode"in document && 11 >= document.documentMode
  , wn = null
  , tl = null
  , Tr = null
  , nl = !1;
function Ku(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nl || wn == null || wn !== Xi(r) || (r = wn,
    "selectionStart"in r && ua(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Tr && Fr(Tr, r) || (Tr = r,
    r = ro(tl, "onSelect"),
    0 < r.length && (t = new sa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = wn)))
}
function ki(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Sn = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd")
}
  , as = {}
  , Kf = {};
mt && (Kf = document.createElement("div").style,
"AnimationEvent"in window || (delete Sn.animationend.animation,
delete Sn.animationiteration.animation,
delete Sn.animationstart.animation),
"TransitionEvent"in window || delete Sn.transitionend.transition);
function Lo(e) {
    if (as[e])
        return as[e];
    if (!Sn[e])
        return e;
    var t = Sn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Kf)
            return as[e] = t[n];
    return e
}
var Gf = Lo("animationend")
  , Qf = Lo("animationiteration")
  , Yf = Lo("animationstart")
  , Xf = Lo("transitionend")
  , Zf = new Map
  , Gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bt(e, t) {
    Zf.set(e, t),
    fn(t, [e])
}
for (var us = 0; us < Gu.length; us++) {
    var cs = Gu[us]
      , my = cs.toLowerCase()
      , yy = cs[0].toUpperCase() + cs.slice(1);
    bt(my, "on" + yy)
}
bt(Gf, "onAnimationEnd");
bt(Qf, "onAnimationIteration");
bt(Yf, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(Xf, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function Qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    m0(r, t, void 0, e),
    e.currentTarget = null
}
function qf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, u),
                    o = a
                }
        }
    }
    if (qi)
        throw e = Zs,
        qi = !1,
        Zs = null,
        e
}
function H(e, t) {
    var n = t[ll];
    n === void 0 && (n = t[ll] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Jf(t, e, 2, !1),
    n.add(r))
}
function ds(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Jf(n, e, r, t)
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
    if (!e[Ti]) {
        e[Ti] = !0,
        sf.forEach(function(n) {
            n !== "selectionchange" && (gy.has(n) || ds(n, !1, e),
            ds(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ti] || (t[Ti] = !0,
        ds("selectionchange", !1, t))
    }
}
function Jf(e, t, n, r) {
    switch (If(t)) {
    case 1:
        var i = R0;
        break;
    case 4:
        i = D0;
        break;
    default:
        i = ia
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function fs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Jt(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    kf(function() {
        var u = o
          , c = ea(n)
          , d = [];
        e: {
            var f = Zf.get(e);
            if (f !== void 0) {
                var g = sa
                  , v = e;
                switch (e) {
                case "keypress":
                    if (zi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = G0;
                    break;
                case "focusin":
                    v = "focus",
                    g = os;
                    break;
                case "focusout":
                    v = "blur",
                    g = os;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = os;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Iu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = _0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = X0;
                    break;
                case Gf:
                case Qf:
                case Yf:
                    g = F0;
                    break;
                case Xf:
                    g = q0;
                    break;
                case "scroll":
                    g = L0;
                    break;
                case "wheel":
                    g = ey;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = B0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Fu
                }
                var x = (t & 4) !== 0
                  , E = !x && e === "scroll"
                  , h = x ? f !== null ? f + "Capture" : null : f;
                x = [];
                for (var p = u, m; p !== null; ) {
                    m = p;
                    var S = m.stateNode;
                    if (m.tag === 5 && S !== null && (m = S,
                    h !== null && (S = Lr(p, h),
                    S != null && x.push(Br(p, S, m)))),
                    E)
                        break;
                    p = p.return
                }
                0 < x.length && (f = new g(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                f && n !== Qs && (v = n.relatedTarget || n.fromElement) && (Jt(v) || v[yt]))
                    break e;
                if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                g ? (v = n.relatedTarget || n.toElement,
                g = u,
                v = v ? Jt(v) : null,
                v !== null && (E = pn(v),
                v !== E || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null,
                v = u),
                g !== v)) {
                    if (x = Iu,
                    S = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = Fu,
                    S = "onPointerLeave",
                    h = "onPointerEnter",
                    p = "pointer"),
                    E = g == null ? f : kn(g),
                    m = v == null ? f : kn(v),
                    f = new x(S,p + "leave",g,n,c),
                    f.target = E,
                    f.relatedTarget = m,
                    S = null,
                    Jt(c) === u && (x = new x(h,p + "enter",v,n,c),
                    x.target = m,
                    x.relatedTarget = E,
                    S = x),
                    E = S,
                    g && v)
                        t: {
                            for (x = g,
                            h = v,
                            p = 0,
                            m = x; m; m = yn(m))
                                p++;
                            for (m = 0,
                            S = h; S; S = yn(S))
                                m++;
                            for (; 0 < p - m; )
                                x = yn(x),
                                p--;
                            for (; 0 < m - p; )
                                h = yn(h),
                                m--;
                            for (; p--; ) {
                                if (x === h || h !== null && x === h.alternate)
                                    break t;
                                x = yn(x),
                                h = yn(h)
                            }
                            x = null
                        }
                    else
                        x = null;
                    g !== null && Yu(d, f, g, x, !1),
                    v !== null && E !== null && Yu(d, E, v, x, !0)
                }
            }
            e: {
                if (f = u ? kn(u) : window,
                g = f.nodeName && f.nodeName.toLowerCase(),
                g === "select" || g === "input" && f.type === "file")
                    var k = ly;
                else if (Uu(f))
                    if (bf)
                        k = dy;
                    else {
                        k = uy;
                        var C = ay
                    }
                else
                    (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = cy);
                if (k && (k = k(e, u))) {
                    Uf(d, k, n, c);
                    break e
                }
                C && C(e, f, u),
                e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && $s(f, "number", f.value)
            }
            switch (C = u ? kn(u) : window,
            e) {
            case "focusin":
                (Uu(C) || C.contentEditable === "true") && (wn = C,
                tl = u,
                Tr = null);
                break;
            case "focusout":
                Tr = tl = wn = null;
                break;
            case "mousedown":
                nl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                nl = !1,
                Ku(d, n, c);
                break;
            case "selectionchange":
                if (hy)
                    break;
            case "keydown":
            case "keyup":
                Ku(d, n, c)
            }
            var j;
            if (aa)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var w = "onCompositionStart";
                        break e;
                    case "compositionend":
                        w = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        w = "onCompositionUpdate";
                        break e
                    }
                    w = void 0
                }
            else
                xn ? zf(e, n) && (w = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
            w && (Ff && n.locale !== "ko" && (xn || w !== "onCompositionStart" ? w === "onCompositionEnd" && xn && (j = Of()) : (jt = c,
            oa = "value"in jt ? jt.value : jt.textContent,
            xn = !0)),
            C = ro(u, w),
            0 < C.length && (w = new Ou(w,e,null,n,c),
            d.push({
                event: w,
                listeners: C
            }),
            j ? w.data = j : (j = Bf(n),
            j !== null && (w.data = j)))),
            (j = ny ? ry(e, n) : iy(e, n)) && (u = ro(u, "onBeforeInput"),
            0 < u.length && (c = new Ou("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = j))
        }
        qf(d, t)
    })
}
function Br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ro(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Lr(e, n),
        o != null && r.unshift(Br(e, o, i)),
        o = Lr(e, t),
        o != null && r.push(Br(e, o, i))),
        e = e.return
    }
    return r
}
function yn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Yu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Lr(n, o),
        a != null && s.unshift(Br(n, a, l))) : i || (a = Lr(n, o),
        a != null && s.push(Br(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var vy = /\r\n?/g
  , xy = /\u0000|\uFFFD/g;
function Xu(e) {
    return (typeof e == "string" ? e : "" + e).replace(vy, `
`).replace(xy, "")
}
function Pi(e, t, n) {
    if (t = Xu(t),
    Xu(e) !== t && n)
        throw Error(N(425))
}
function io() {}
var rl = null
  , il = null;
function ol(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sl = typeof setTimeout == "function" ? setTimeout : void 0
  , wy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zu = typeof Promise == "function" ? Promise : void 0
  , Sy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
    return Zu.resolve(null).then(e).catch(ky)
}
: sl;
function ky(e) {
    setTimeout(function() {
        throw e
    })
}
function ps(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Ir(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Ir(t)
}
function Lt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function qu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var er = Math.random().toString(36).slice(2)
  , rt = "__reactFiber$" + er
  , Ur = "__reactProps$" + er
  , yt = "__reactContainer$" + er
  , ll = "__reactEvents$" + er
  , Ty = "__reactListeners$" + er
  , Py = "__reactHandles$" + er;
function Jt(e) {
    var t = e[rt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[yt] || n[rt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = qu(e); e !== null; ) {
                    if (n = e[rt])
                        return n;
                    e = qu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ii(e) {
    return e = e[rt] || e[yt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function kn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function Vo(e) {
    return e[Ur] || null
}
var al = []
  , Tn = -1;
function $t(e) {
    return {
        current: e
    }
}
function W(e) {
    0 > Tn || (e.current = al[Tn],
    al[Tn] = null,
    Tn--)
}
function U(e, t) {
    Tn++,
    al[Tn] = e.current,
    e.current = t
}
var zt = {}
  , Se = $t(zt)
  , Me = $t(!1)
  , ln = zt;
function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ae(e) {
    return e = e.childContextTypes,
    e != null
}
function oo() {
    W(Me),
    W(Se)
}
function Ju(e, t, n) {
    if (Se.current !== zt)
        throw Error(N(168));
    U(Se, t),
    U(Me, n)
}
function ep(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(N(108, a0(e) || "Unknown", i));
    return X({}, n, r)
}
function so(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zt,
    ln = Se.current,
    U(Se, e),
    U(Me, Me.current),
    !0
}
function ec(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = ep(e, t, ln),
    r.__reactInternalMemoizedMergedChildContext = e,
    W(Me),
    W(Se),
    U(Se, e)) : W(Me),
    U(Me, n)
}
var ut = null
  , _o = !1
  , hs = !1;
function tp(e) {
    ut === null ? ut = [e] : ut.push(e)
}
function Cy(e) {
    _o = !0,
    tp(e)
}
function Ht() {
    if (!hs && ut !== null) {
        hs = !0;
        var e = 0
          , t = z;
        try {
            var n = ut;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ut = null,
            _o = !1
        } catch (i) {
            throw ut !== null && (ut = ut.slice(e + 1)),
            Ef(ta, Ht),
            i
        } finally {
            z = t,
            hs = !1
        }
    }
    return null
}
var Pn = []
  , Cn = 0
  , lo = null
  , ao = 0
  , Ue = []
  , be = 0
  , an = null
  , ct = 1
  , dt = "";
function Xt(e, t) {
    Pn[Cn++] = ao,
    Pn[Cn++] = lo,
    lo = e,
    ao = t
}
function np(e, t, n) {
    Ue[be++] = ct,
    Ue[be++] = dt,
    Ue[be++] = an,
    an = e;
    var r = ct;
    e = dt;
    var i = 32 - qe(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - qe(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        ct = 1 << 32 - qe(t) + i | n << i | r,
        dt = o + e
    } else
        ct = 1 << o | n << i | r,
        dt = e
}
function ca(e) {
    e.return !== null && (Xt(e, 1),
    np(e, 1, 0))
}
function da(e) {
    for (; e === lo; )
        lo = Pn[--Cn],
        Pn[Cn] = null,
        ao = Pn[--Cn],
        Pn[Cn] = null;
    for (; e === an; )
        an = Ue[--be],
        Ue[be] = null,
        dt = Ue[--be],
        Ue[be] = null,
        ct = Ue[--be],
        Ue[be] = null
}
var Ve = null
  , Le = null
  , K = !1
  , Ze = null;
function rp(e, t) {
    var n = $e(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function tc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Le = Lt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Le = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = an !== null ? {
            id: ct,
            overflow: dt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = $e(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ve = e,
        Le = null,
        !0) : !1;
    default:
        return !1
    }
}
function ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function cl(e) {
    if (K) {
        var t = Le;
        if (t) {
            var n = t;
            if (!tc(e, t)) {
                if (ul(e))
                    throw Error(N(418));
                t = Lt(n.nextSibling);
                var r = Ve;
                t && tc(e, t) ? rp(r, n) : (e.flags = e.flags & -4097 | 2,
                K = !1,
                Ve = e)
            }
        } else {
            if (ul(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            K = !1,
            Ve = e
        }
    }
}
function nc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ve = e
}
function Ci(e) {
    if (e !== Ve)
        return !1;
    if (!K)
        return nc(e),
        K = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps)),
    t && (t = Le)) {
        if (ul(e))
            throw ip(),
            Error(N(418));
        for (; t; )
            rp(e, t),
            t = Lt(t.nextSibling)
    }
    if (nc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Lt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else
        Le = Ve ? Lt(e.stateNode.nextSibling) : null;
    return !0
}
function ip() {
    for (var e = Le; e; )
        e = Lt(e.nextSibling)
}
function Hn() {
    Le = Ve = null,
    K = !1
}
function fa(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
var Ey = wt.ReactCurrentBatchConfig;
function ur(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Ei(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function rc(e) {
    var t = e._init;
    return t(e._payload)
}
function op(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [p],
            h.flags |= 16) : m.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function r(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function i(h, p) {
        return h = Ot(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function o(h, p, m) {
        return h.index = m,
        e ? (m = h.alternate,
        m !== null ? (m = m.index,
        m < p ? (h.flags |= 2,
        p) : m) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, p, m, S) {
        return p === null || p.tag !== 6 ? (p = Ss(m, h.mode, S),
        p.return = h,
        p) : (p = i(p, m),
        p.return = h,
        p)
    }
    function a(h, p, m, S) {
        var k = m.type;
        return k === vn ? c(h, p, m.props.children, S, m.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Tt && rc(k) === p.type) ? (S = i(p, m.props),
        S.ref = ur(h, p, m),
        S.return = h,
        S) : (S = Ki(m.type, m.key, m.props, null, h.mode, S),
        S.ref = ur(h, p, m),
        S.return = h,
        S)
    }
    function u(h, p, m, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = ks(m, h.mode, S),
        p.return = h,
        p) : (p = i(p, m.children || []),
        p.return = h,
        p)
    }
    function c(h, p, m, S, k) {
        return p === null || p.tag !== 7 ? (p = on(m, h.mode, S, k),
        p.return = h,
        p) : (p = i(p, m),
        p.return = h,
        p)
    }
    function d(h, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Ss("" + p, h.mode, m),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case mi:
                return m = Ki(p.type, p.key, p.props, null, h.mode, m),
                m.ref = ur(h, null, p),
                m.return = h,
                m;
            case gn:
                return p = ks(p, h.mode, m),
                p.return = h,
                p;
            case Tt:
                var S = p._init;
                return d(h, S(p._payload), m)
            }
            if (hr(p) || ir(p))
                return p = on(p, h.mode, m, null),
                p.return = h,
                p;
            Ei(h, p)
        }
        return null
    }
    function f(h, p, m, S) {
        var k = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : l(h, p, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                return m.key === k ? a(h, p, m, S) : null;
            case gn:
                return m.key === k ? u(h, p, m, S) : null;
            case Tt:
                return k = m._init,
                f(h, p, k(m._payload), S)
            }
            if (hr(m) || ir(m))
                return k !== null ? null : c(h, p, m, S, null);
            Ei(h, m)
        }
        return null
    }
    function g(h, p, m, S, k) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return h = h.get(m) || null,
            l(p, h, "" + S, k);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case mi:
                return h = h.get(S.key === null ? m : S.key) || null,
                a(p, h, S, k);
            case gn:
                return h = h.get(S.key === null ? m : S.key) || null,
                u(p, h, S, k);
            case Tt:
                var C = S._init;
                return g(h, p, m, C(S._payload), k)
            }
            if (hr(S) || ir(S))
                return h = h.get(m) || null,
                c(p, h, S, k, null);
            Ei(p, S)
        }
        return null
    }
    function v(h, p, m, S) {
        for (var k = null, C = null, j = p, w = p = 0, P = null; j !== null && w < m.length; w++) {
            j.index > w ? (P = j,
            j = null) : P = j.sibling;
            var M = f(h, j, m[w], S);
            if (M === null) {
                j === null && (j = P);
                break
            }
            e && j && M.alternate === null && t(h, j),
            p = o(M, p, w),
            C === null ? k = M : C.sibling = M,
            C = M,
            j = P
        }
        if (w === m.length)
            return n(h, j),
            K && Xt(h, w),
            k;
        if (j === null) {
            for (; w < m.length; w++)
                j = d(h, m[w], S),
                j !== null && (p = o(j, p, w),
                C === null ? k = j : C.sibling = j,
                C = j);
            return K && Xt(h, w),
            k
        }
        for (j = r(h, j); w < m.length; w++)
            P = g(j, h, w, m[w], S),
            P !== null && (e && P.alternate !== null && j.delete(P.key === null ? w : P.key),
            p = o(P, p, w),
            C === null ? k = P : C.sibling = P,
            C = P);
        return e && j.forEach(function(F) {
            return t(h, F)
        }),
        K && Xt(h, w),
        k
    }
    function x(h, p, m, S) {
        var k = ir(m);
        if (typeof k != "function")
            throw Error(N(150));
        if (m = k.call(m),
        m == null)
            throw Error(N(151));
        for (var C = k = null, j = p, w = p = 0, P = null, M = m.next(); j !== null && !M.done; w++,
        M = m.next()) {
            j.index > w ? (P = j,
            j = null) : P = j.sibling;
            var F = f(h, j, M.value, S);
            if (F === null) {
                j === null && (j = P);
                break
            }
            e && j && F.alternate === null && t(h, j),
            p = o(F, p, w),
            C === null ? k = F : C.sibling = F,
            C = F,
            j = P
        }
        if (M.done)
            return n(h, j),
            K && Xt(h, w),
            k;
        if (j === null) {
            for (; !M.done; w++,
            M = m.next())
                M = d(h, M.value, S),
                M !== null && (p = o(M, p, w),
                C === null ? k = M : C.sibling = M,
                C = M);
            return K && Xt(h, w),
            k
        }
        for (j = r(h, j); !M.done; w++,
        M = m.next())
            M = g(j, h, w, M.value, S),
            M !== null && (e && M.alternate !== null && j.delete(M.key === null ? w : M.key),
            p = o(M, p, w),
            C === null ? k = M : C.sibling = M,
            C = M);
        return e && j.forEach(function(B) {
            return t(h, B)
        }),
        K && Xt(h, w),
        k
    }
    function E(h, p, m, S) {
        if (typeof m == "object" && m !== null && m.type === vn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                e: {
                    for (var k = m.key, C = p; C !== null; ) {
                        if (C.key === k) {
                            if (k = m.type,
                            k === vn) {
                                if (C.tag === 7) {
                                    n(h, C.sibling),
                                    p = i(C, m.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Tt && rc(k) === C.type) {
                                n(h, C.sibling),
                                p = i(C, m.props),
                                p.ref = ur(h, C, m),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, C);
                            break
                        } else
                            t(h, C);
                        C = C.sibling
                    }
                    m.type === vn ? (p = on(m.props.children, h.mode, S, m.key),
                    p.return = h,
                    h = p) : (S = Ki(m.type, m.key, m.props, null, h.mode, S),
                    S.ref = ur(h, p, m),
                    S.return = h,
                    h = S)
                }
                return s(h);
            case gn:
                e: {
                    for (C = m.key; p !== null; ) {
                        if (p.key === C)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(h, p.sibling),
                                p = i(p, m.children || []),
                                p.return = h,
                                h = p;
                                break e
                            } else {
                                n(h, p);
                                break
                            }
                        else
                            t(h, p);
                        p = p.sibling
                    }
                    p = ks(m, h.mode, S),
                    p.return = h,
                    h = p
                }
                return s(h);
            case Tt:
                return C = m._init,
                E(h, p, C(m._payload), S)
            }
            if (hr(m))
                return v(h, p, m, S);
            if (ir(m))
                return x(h, p, m, S);
            Ei(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = i(p, m),
        p.return = h,
        h = p) : (n(h, p),
        p = Ss(m, h.mode, S),
        p.return = h,
        h = p),
        s(h)) : n(h, p)
    }
    return E
}
var Wn = op(!0)
  , sp = op(!1)
  , uo = $t(null)
  , co = null
  , En = null
  , pa = null;
function ha() {
    pa = En = co = null
}
function ma(e) {
    var t = uo.current;
    W(uo),
    e._currentValue = t
}
function dl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function zn(e, t) {
    co = e,
    pa = En = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (je = !0),
    e.firstContext = null)
}
function We(e) {
    var t = e._currentValue;
    if (pa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        En === null) {
            if (co === null)
                throw Error(N(308));
            En = e,
            co.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            En = En.next = e;
    return t
}
var en = null;
function ya(e) {
    en === null ? en = [e] : en.push(e)
}
function lp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ya(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    gt(e, r)
}
function gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Pt = !1;
function ga(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ap(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    O & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        gt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ya(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    gt(e, n)
}
function Bi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        na(e, n)
    }
}
function ic(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function fo(e, t, n, r) {
    var i = e.updateQueue;
    Pt = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var f = l.lane
              , g = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , x = l;
                    switch (f = t,
                    g = n,
                    x.tag) {
                    case 1:
                        if (v = x.payload,
                        typeof v == "function") {
                            d = v.call(g, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = x.payload,
                        f = typeof v == "function" ? v.call(g, d, f) : v,
                        f == null)
                            break e;
                        d = X({}, d, f);
                        break e;
                    case 2:
                        Pt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [l] : f.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = g,
                a = d) : c = c.next = g,
                s |= f;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        cn |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function oc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(N(191, i));
                i.call(r)
            }
        }
}
var oi = {}
  , ot = $t(oi)
  , br = $t(oi)
  , $r = $t(oi);
function tn(e) {
    if (e === oi)
        throw Error(N(174));
    return e
}
function va(e, t) {
    switch (U($r, t),
    U(br, e),
    U(ot, oi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ws(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ws(t, e)
    }
    W(ot),
    U(ot, t)
}
function Kn() {
    W(ot),
    W(br),
    W($r)
}
function up(e) {
    tn($r.current);
    var t = tn(ot.current)
      , n = Ws(t, e.type);
    t !== n && (U(br, e),
    U(ot, n))
}
function xa(e) {
    br.current === e && (W(ot),
    W(br))
}
var G = $t(0);
function po(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ms = [];
function wa() {
    for (var e = 0; e < ms.length; e++)
        ms[e]._workInProgressVersionPrimary = null;
    ms.length = 0
}
var Ui = wt.ReactCurrentDispatcher
  , ys = wt.ReactCurrentBatchConfig
  , un = 0
  , Y = null
  , oe = null
  , ue = null
  , ho = !1
  , Pr = !1
  , Hr = 0
  , Ny = 0;
function ye() {
    throw Error(N(321))
}
function Sa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!et(e[n], t[n]))
            return !1;
    return !0
}
function ka(e, t, n, r, i, o) {
    if (un = o,
    Y = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ui.current = e === null || e.memoizedState === null ? Ry : Dy,
    e = n(r, i),
    Pr) {
        o = 0;
        do {
            if (Pr = !1,
            Hr = 0,
            25 <= o)
                throw Error(N(301));
            o += 1,
            ue = oe = null,
            t.updateQueue = null,
            Ui.current = Ly,
            e = n(r, i)
        } while (Pr)
    }
    if (Ui.current = mo,
    t = oe !== null && oe.next !== null,
    un = 0,
    ue = oe = Y = null,
    ho = !1,
    t)
        throw Error(N(300));
    return e
}
function Ta() {
    var e = Hr !== 0;
    return Hr = 0,
    e
}
function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? Y.memoizedState = ue = e : ue = ue.next = e,
    ue
}
function Ke() {
    if (oe === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = oe.next;
    var t = ue === null ? Y.memoizedState : ue.next;
    if (t !== null)
        ue = t,
        oe = e;
    else {
        if (e === null)
            throw Error(N(310));
        oe = e,
        e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        },
        ue === null ? Y.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}
function Wr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function gs(e) {
    var t = Ke()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = oe
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((un & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                Y.lanes |= c,
                cn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        et(r, t.memoizedState) || (je = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            Y.lanes |= o,
            cn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function vs(e) {
    var t = Ke()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        et(o, t.memoizedState) || (je = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function cp() {}
function dp(e, t) {
    var n = Y
      , r = Ke()
      , i = t()
      , o = !et(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    je = !0),
    r = r.queue,
    Pa(hp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Kr(9, pp.bind(null, n, r, i, t), void 0, null),
        ce === null)
            throw Error(N(349));
        un & 30 || fp(n, t, i)
    }
    return i
}
function fp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Y.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function pp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    mp(t) && yp(e)
}
function hp(e, t, n) {
    return n(function() {
        mp(t) && yp(e)
    })
}
function mp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !et(e, n)
    } catch {
        return !0
    }
}
function yp(e) {
    var t = gt(e, 1);
    t !== null && Je(t, e, 1, -1)
}
function sc(e) {
    var t = nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ay.bind(null, Y, e),
    [t.memoizedState, e]
}
function Kr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Y.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function gp() {
    return Ke().memoizedState
}
function bi(e, t, n, r) {
    var i = nt();
    Y.flags |= e,
    i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Io(e, t, n, r) {
    var i = Ke();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (oe !== null) {
        var s = oe.memoizedState;
        if (o = s.destroy,
        r !== null && Sa(r, s.deps)) {
            i.memoizedState = Kr(t, n, o, r);
            return
        }
    }
    Y.flags |= e,
    i.memoizedState = Kr(1 | t, n, o, r)
}
function lc(e, t) {
    return bi(8390656, 8, e, t)
}
function Pa(e, t) {
    return Io(2048, 8, e, t)
}
function vp(e, t) {
    return Io(4, 2, e, t)
}
function xp(e, t) {
    return Io(4, 4, e, t)
}
function wp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Sp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Io(4, 4, wp.bind(null, t, e), n)
}
function Ca() {}
function kp(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Tp(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Pp(e, t, n) {
    return un & 21 ? (et(n, t) || (n = Mf(),
    Y.lanes |= n,
    cn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    je = !0),
    e.memoizedState = n)
}
function jy(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ys.transition;
    ys.transition = {};
    try {
        e(!1),
        t()
    } finally {
        z = n,
        ys.transition = r
    }
}
function Cp() {
    return Ke().memoizedState
}
function My(e, t, n) {
    var r = It(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ep(e))
        Np(t, n);
    else if (n = lp(e, t, n, r),
    n !== null) {
        var i = Pe();
        Je(n, e, r, i),
        jp(n, t, r)
    }
}
function Ay(e, t, n) {
    var r = It(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ep(e))
        Np(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                et(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ya(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = lp(e, t, i, r),
        n !== null && (i = Pe(),
        Je(n, e, r, i),
        jp(n, t, r))
    }
}
function Ep(e) {
    var t = e.alternate;
    return e === Y || t !== null && t === Y
}
function Np(e, t) {
    Pr = ho = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function jp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        na(e, n)
    }
}
var mo = {
    readContext: We,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1
}
  , Ry = {
    readContext: We,
    useCallback: function(e, t) {
        return nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: We,
    useEffect: lc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        bi(4194308, 4, wp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return bi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return bi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = nt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = nt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = My.bind(null, Y, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: sc,
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        return nt().memoizedState = e
    },
    useTransition: function() {
        var e = sc(!1)
          , t = e[0];
        return e = jy.bind(null, e[1]),
        nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Y
          , i = nt();
        if (K) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            ce === null)
                throw Error(N(349));
            un & 30 || fp(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        lc(hp.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Kr(9, pp.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = nt()
          , t = ce.identifierPrefix;
        if (K) {
            var n = dt
              , r = ct;
            n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Hr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Ny++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Dy = {
    readContext: We,
    useCallback: kp,
    useContext: We,
    useEffect: Pa,
    useImperativeHandle: Sp,
    useInsertionEffect: vp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: gs,
    useRef: gp,
    useState: function() {
        return gs(Wr)
    },
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        var t = Ke();
        return Pp(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = gs(Wr)[0]
          , t = Ke().memoizedState;
        return [e, t]
    },
    useMutableSource: cp,
    useSyncExternalStore: dp,
    useId: Cp,
    unstable_isNewReconciler: !1
}
  , Ly = {
    readContext: We,
    useCallback: kp,
    useContext: We,
    useEffect: Pa,
    useImperativeHandle: Sp,
    useInsertionEffect: vp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: vs,
    useRef: gp,
    useState: function() {
        return vs(Wr)
    },
    useDebugValue: Ca,
    useDeferredValue: function(e) {
        var t = Ke();
        return oe === null ? t.memoizedState = e : Pp(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = vs(Wr)[0]
          , t = Ke().memoizedState;
        return [e, t]
    },
    useMutableSource: cp,
    useSyncExternalStore: dp,
    useId: Cp,
    unstable_isNewReconciler: !1
};
function Ye(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function fl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : X({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Oo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? pn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , i = It(e)
          , o = ft(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Vt(e, o, i),
        t !== null && (Je(t, e, i, r),
        Bi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , i = It(e)
          , o = ft(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Vt(e, o, i),
        t !== null && (Je(t, e, i, r),
        Bi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Pe()
          , r = It(e)
          , i = ft(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Vt(e, i, r),
        t !== null && (Je(t, e, r, n),
        Bi(t, e, r))
    }
};
function ac(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, o) : !0
}
function Mp(e, t, n) {
    var r = !1
      , i = zt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = We(o) : (i = Ae(t) ? ln : Se.current,
    r = t.contextTypes,
    o = (r = r != null) ? $n(e, i) : zt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Oo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function uc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oo.enqueueReplaceState(t, t.state, null)
}
function pl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ga(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = We(o) : (o = Ae(t) ? ln : Se.current,
    i.context = $n(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (fl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Oo.enqueueReplaceState(i, i.state, null),
    fo(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Gn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += l0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function xs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function hl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Vy = typeof WeakMap == "function" ? WeakMap : Map;
function Ap(e, t, n) {
    n = ft(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        go || (go = !0,
        Pl = r),
        hl(e, t)
    }
    ,
    n
}
function Rp(e, t, n) {
    n = ft(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            hl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        hl(e, t),
        typeof r != "function" && (_t === null ? _t = new Set([this]) : _t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function cc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vy;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Qy.bind(null, e, t, n),
    t.then(e, e))
}
function dc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function fc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1),
    t.tag = 2,
    Vt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var _y = wt.ReactCurrentOwner
  , je = !1;
function ke(e, t, n, r) {
    t.child = e === null ? sp(t, null, n, r) : Wn(t, e.child, n, r)
}
function pc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return zn(t, i),
    r = ka(e, t, n, r, o, i),
    n = Ta(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    vt(e, t, i)) : (K && n && ca(t),
    t.flags |= 1,
    ke(e, t, r, i),
    t.child)
}
function hc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !La(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Dp(e, t, o, r, i)) : (e = Ki(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Fr,
        n(s, r) && e.ref === t.ref)
            return vt(e, t, i)
    }
    return t.flags |= 1,
    e = Ot(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Dp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Fr(o, r) && e.ref === t.ref)
            if (je = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (je = !0);
            else
                return t.lanes = e.lanes,
                vt(e, t, i)
    }
    return ml(e, t, n, r, i)
}
function Lp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            U(jn, De),
            De |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                U(jn, De),
                De |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            U(jn, De),
            De |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        U(jn, De),
        De |= r;
    return ke(e, t, i, n),
    t.child
}
function Vp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ml(e, t, n, r, i) {
    var o = Ae(n) ? ln : Se.current;
    return o = $n(t, o),
    zn(t, i),
    n = ka(e, t, n, r, o, i),
    r = Ta(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    vt(e, t, i)) : (K && r && ca(t),
    t.flags |= 1,
    ke(e, t, n, i),
    t.child)
}
function mc(e, t, n, r, i) {
    if (Ae(n)) {
        var o = !0;
        so(t)
    } else
        o = !1;
    if (zn(t, i),
    t.stateNode === null)
        $i(e, t),
        Mp(t, n, r),
        pl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = We(u) : (u = Ae(n) ? ln : Se.current,
        u = $n(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && uc(t, s, r, u),
        Pt = !1;
        var f = t.memoizedState;
        s.state = f,
        fo(t, r, s, i),
        a = t.memoizedState,
        l !== r || f !== a || Me.current || Pt ? (typeof c == "function" && (fl(t, n, c, r),
        a = t.memoizedState),
        (l = Pt || ac(t, n, l, r, f, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ap(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Ye(t.type, l),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = We(a) : (a = Ae(n) ? ln : Se.current,
        a = $n(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || f !== a) && uc(t, s, r, a),
        Pt = !1,
        f = t.memoizedState,
        s.state = f,
        fo(t, r, s, i);
        var v = t.memoizedState;
        l !== d || f !== v || Me.current || Pt ? (typeof g == "function" && (fl(t, n, g, r),
        v = t.memoizedState),
        (u = Pt || ac(t, n, u, r, f, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        s.props = r,
        s.state = v,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return yl(e, t, n, r, o, i)
}
function yl(e, t, n, r, i, o) {
    Vp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && ec(t, n, !1),
        vt(e, t, o);
    r = t.stateNode,
    _y.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Wn(t, e.child, null, o),
    t.child = Wn(t, null, l, o)) : ke(e, t, l, o),
    t.memoizedState = r.state,
    i && ec(t, n, !0),
    t.child
}
function _p(e) {
    var t = e.stateNode;
    t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1),
    va(e, t.containerInfo)
}
function yc(e, t, n, r, i) {
    return Hn(),
    fa(i),
    t.flags |= 256,
    ke(e, t, n, r),
    t.child
}
var gl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function vl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ip(e, t, n) {
    var r = t.pendingProps, i = G.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    U(G, i & 1),
    e === null)
        return cl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Bo(s, r, 0, null),
        e = on(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = vl(n),
        t.memoizedState = gl,
        e) : Ea(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Iy(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Ot(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = Ot(l, o) : (o = on(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? vl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = gl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Ot(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ea(e, t) {
    return t = Bo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ni(e, t, n, r) {
    return r !== null && fa(r),
    Wn(t, e.child, null, n),
    e = Ea(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Iy(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xs(Error(N(422))),
        Ni(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Bo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = on(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Wn(t, e.child, null, s),
        t.child.memoizedState = vl(s),
        t.memoizedState = gl,
        o);
    if (!(t.mode & 1))
        return Ni(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(N(419)),
        r = xs(o, r, void 0),
        Ni(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    je || l) {
        if (r = ce,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            gt(e, i),
            Je(r, e, i, -1))
        }
        return Da(),
        r = xs(Error(N(421))),
        Ni(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Yy.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Le = Lt(i.nextSibling),
    Ve = t,
    K = !0,
    Ze = null,
    e !== null && (Ue[be++] = ct,
    Ue[be++] = dt,
    Ue[be++] = an,
    ct = e.id,
    dt = e.overflow,
    an = t),
    t = Ea(t, r.children),
    t.flags |= 4096,
    t)
}
function gc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    dl(e.return, t, n)
}
function ws(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Op(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ke(e, t, r.children, n),
    r = G.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && gc(e, n, t);
                else if (e.tag === 19)
                    gc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (U(G, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && po(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ws(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && po(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ws(t, !0, n, null, o);
            break;
        case "together":
            ws(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function $i(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    cn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Ot(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Ot(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Oy(e, t, n) {
    switch (t.tag) {
    case 3:
        _p(t),
        Hn();
        break;
    case 5:
        up(t);
        break;
    case 1:
        Ae(t.type) && so(t);
        break;
    case 4:
        va(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        U(uo, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (U(G, G.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ip(e, t, n) : (U(G, G.current & 1),
            e = vt(e, t, n),
            e !== null ? e.sibling : null);
        U(G, G.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Op(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        U(G, G.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Lp(e, t, n)
    }
    return vt(e, t, n)
}
var Fp, xl, zp, Bp;
Fp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
xl = function() {}
;
zp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        tn(ot.current);
        var o = null;
        switch (n) {
        case "input":
            i = Us(e, i),
            r = Us(e, r),
            o = [];
            break;
        case "select":
            i = X({}, i, {
                value: void 0
            }),
            r = X({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Hs(e, i),
            r = Hs(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = io)
        }
        Ks(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Rr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Rr.hasOwnProperty(u) ? (a != null && u === "onScroll" && H("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Bp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function cr(e, t) {
    if (!K)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Fy(e, t, n) {
    var r = t.pendingProps;
    switch (da(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ge(t),
        null;
    case 1:
        return Ae(t.type) && oo(),
        ge(t),
        null;
    case 3:
        return r = t.stateNode,
        Kn(),
        W(Me),
        W(Se),
        wa(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ze !== null && (Nl(Ze),
        Ze = null))),
        xl(e, t),
        ge(t),
        null;
    case 5:
        xa(t);
        var i = tn($r.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            zp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return ge(t),
                null
            }
            if (e = tn(ot.current),
            Ci(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[rt] = t,
                r[Ur] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    H("cancel", r),
                    H("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    H("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < yr.length; i++)
                        H(yr[i], r);
                    break;
                case "source":
                    H("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    H("error", r),
                    H("load", r);
                    break;
                case "details":
                    H("toggle", r);
                    break;
                case "input":
                    Eu(r, o),
                    H("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    H("invalid", r);
                    break;
                case "textarea":
                    ju(r, o),
                    H("invalid", r)
                }
                Ks(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e),
                        i = ["children", "" + l]) : Rr.hasOwnProperty(s) && l != null && s === "onScroll" && H("scroll", r)
                    }
                switch (n) {
                case "input":
                    yi(r),
                    Nu(r, o, !0);
                    break;
                case "textarea":
                    yi(r),
                    Mu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = io)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = hf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[rt] = t,
                e[Ur] = r,
                Fp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Gs(n, r),
                    n) {
                    case "dialog":
                        H("cancel", e),
                        H("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        H("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < yr.length; i++)
                            H(yr[i], e);
                        i = r;
                        break;
                    case "source":
                        H("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        H("error", e),
                        H("load", e),
                        i = r;
                        break;
                    case "details":
                        H("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Eu(e, r),
                        i = Us(e, r),
                        H("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = X({}, r, {
                            value: void 0
                        }),
                        H("invalid", e);
                        break;
                    case "textarea":
                        ju(e, r),
                        i = Hs(e, r),
                        H("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Ks(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? gf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && mf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Dr(e, a) : typeof a == "number" && Dr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Rr.hasOwnProperty(o) ? a != null && o === "onScroll" && H("scroll", e) : a != null && Xl(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        yi(e),
                        Nu(e, r, !1);
                        break;
                    case "textarea":
                        yi(e),
                        Mu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? _n(e, !!r.multiple, o, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = io)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ge(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Bp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = tn($r.current),
            tn(ot.current),
            Ci(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[rt] = t,
                (o = r.nodeValue !== n) && (e = Ve,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Pi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Pi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[rt] = t,
                t.stateNode = r
        }
        return ge(t),
        null;
    case 13:
        if (W(G),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (K && Le !== null && t.mode & 1 && !(t.flags & 128))
                ip(),
                Hn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ci(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(N(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(N(317));
                    o[rt] = t
                } else
                    Hn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ge(t),
                o = !1
            } else
                Ze !== null && (Nl(Ze),
                Ze = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || G.current & 1 ? se === 0 && (se = 3) : Da())),
        t.updateQueue !== null && (t.flags |= 4),
        ge(t),
        null);
    case 4:
        return Kn(),
        xl(e, t),
        e === null && zr(t.stateNode.containerInfo),
        ge(t),
        null;
    case 10:
        return ma(t.type._context),
        ge(t),
        null;
    case 17:
        return Ae(t.type) && oo(),
        ge(t),
        null;
    case 19:
        if (W(G),
        o = t.memoizedState,
        o === null)
            return ge(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                cr(o, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = po(e),
                        s !== null) {
                            for (t.flags |= 128,
                            cr(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return U(G, G.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && te() > Qn && (t.flags |= 128,
                r = !0,
                cr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = po(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    cr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !K)
                        return ge(t),
                        null
                } else
                    2 * te() - o.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    cr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = te(),
        t.sibling = null,
        n = G.current,
        U(G, r ? n & 1 | 2 : n & 1),
        t) : (ge(t),
        null);
    case 22:
    case 23:
        return Ra(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (ge(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function zy(e, t) {
    switch (da(t),
    t.tag) {
    case 1:
        return Ae(t.type) && oo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Kn(),
        W(Me),
        W(Se),
        wa(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return xa(t),
        null;
    case 13:
        if (W(G),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            Hn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return W(G),
        null;
    case 4:
        return Kn(),
        null;
    case 10:
        return ma(t.type._context),
        null;
    case 22:
    case 23:
        return Ra(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ji = !1
  , xe = !1
  , By = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                q(e, t, r)
            }
        else
            n.current = null
}
function wl(e, t, n) {
    try {
        n()
    } catch (r) {
        q(e, t, r)
    }
}
var vc = !1;
function Uy(e, t) {
    if (rl = to,
    e = Wf(),
    ua(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (l = s + i),
                        d !== o || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (g = d.firstChild) !== null; )
                            f = d,
                            d = g;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (l = s),
                            f === o && ++c === r && (a = s),
                            (g = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (il = {
        focusedElem: e,
        selectionRange: n
    },
    to = !1,
    R = t; R !== null; )
        if (t = R,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            R = e;
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps
                                  , E = v.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ye(t.type, x), E);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (S) {
                    q(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    R = e;
                    break
                }
                R = t.return
            }
    return v = vc,
    vc = !1,
    v
}
function Cr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && wl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Fo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Sl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Up(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Up(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[rt],
    delete t[Ur],
    delete t[ll],
    delete t[Ty],
    delete t[Py])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function bp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function xc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || bp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function kl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = io));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (kl(e, t, n),
        e = e.sibling; e !== null; )
            kl(e, t, n),
            e = e.sibling
}
function Tl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Tl(e, t, n),
        e = e.sibling; e !== null; )
            Tl(e, t, n),
            e = e.sibling
}
var de = null
  , Xe = !1;
function St(e, t, n) {
    for (n = n.child; n !== null; )
        $p(e, t, n),
        n = n.sibling
}
function $p(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function")
        try {
            it.onCommitFiberUnmount(Ao, n)
        } catch {}
    switch (n.tag) {
    case 5:
        xe || Nn(n, t);
    case 6:
        var r = de
          , i = Xe;
        de = null,
        St(e, t, n),
        de = r,
        Xe = i,
        de !== null && (Xe ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
        break;
    case 18:
        de !== null && (Xe ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? ps(e.parentNode, n) : e.nodeType === 1 && ps(e, n),
        Ir(e)) : ps(de, n.stateNode));
        break;
    case 4:
        r = de,
        i = Xe,
        de = n.stateNode.containerInfo,
        Xe = !0,
        St(e, t, n),
        de = r,
        Xe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!xe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && wl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        St(e, t, n);
        break;
    case 1:
        if (!xe && (Nn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                q(n, t, l)
            }
        St(e, t, n);
        break;
    case 21:
        St(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null,
        St(e, t, n),
        xe = r) : St(e, t, n);
        break;
    default:
        St(e, t, n)
    }
}
function wc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new By),
        t.forEach(function(r) {
            var i = Xy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Ge(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        de = l.stateNode,
                        Xe = !1;
                        break e;
                    case 3:
                        de = l.stateNode.containerInfo,
                        Xe = !0;
                        break e;
                    case 4:
                        de = l.stateNode.containerInfo,
                        Xe = !0;
                        break e
                    }
                    l = l.return
                }
                if (de === null)
                    throw Error(N(160));
                $p(o, s, i),
                de = null,
                Xe = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                q(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Hp(t, e),
            t = t.sibling
}
function Hp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ge(t, e),
        tt(e),
        r & 4) {
            try {
                Cr(3, e, e.return),
                Fo(3, e)
            } catch (x) {
                q(e, e.return, x)
            }
            try {
                Cr(5, e, e.return)
            } catch (x) {
                q(e, e.return, x)
            }
        }
        break;
    case 1:
        Ge(t, e),
        tt(e),
        r & 512 && n !== null && Nn(n, n.return);
        break;
    case 5:
        if (Ge(t, e),
        tt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Dr(i, "")
            } catch (x) {
                q(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && ff(i, o),
                    Gs(l, s);
                    var u = Gs(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , d = a[s + 1];
                        c === "style" ? gf(i, d) : c === "dangerouslySetInnerHTML" ? mf(i, d) : c === "children" ? Dr(i, d) : Xl(i, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        bs(i, o);
                        break;
                    case "textarea":
                        pf(i, o);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? _n(i, !!o.multiple, g, !1) : f !== !!o.multiple && (o.defaultValue != null ? _n(i, !!o.multiple, o.defaultValue, !0) : _n(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ur] = o
                } catch (x) {
                    q(e, e.return, x)
                }
        }
        break;
    case 6:
        if (Ge(t, e),
        tt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (x) {
                q(e, e.return, x)
            }
        }
        break;
    case 3:
        if (Ge(t, e),
        tt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ir(t.containerInfo)
            } catch (x) {
                q(e, e.return, x)
            }
        break;
    case 4:
        Ge(t, e),
        tt(e);
        break;
    case 13:
        Ge(t, e),
        tt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ma = te())),
        r & 4 && wc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (xe = (u = xe) || c,
        Ge(t, e),
        xe = u) : Ge(t, e),
        tt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (R = e,
                c = e.child; c !== null; ) {
                    for (d = R = c; R !== null; ) {
                        switch (f = R,
                        g = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Cr(4, f, f.return);
                            break;
                        case 1:
                            Nn(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (x) {
                                    q(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            Nn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                kc(d);
                                continue
                            }
                        }
                        g !== null ? (g.return = f,
                        R = g) : kc(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = yf("display", s))
                        } catch (x) {
                            q(e, e.return, x)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (x) {
                            q(e, e.return, x)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Ge(t, e),
        tt(e),
        r & 4 && wc(e);
        break;
    case 21:
        break;
    default:
        Ge(t, e),
        tt(e)
    }
}
function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (bp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Dr(i, ""),
                r.flags &= -33);
                var o = xc(e);
                Tl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = xc(e);
                kl(e, l, s);
                break;
            default:
                throw Error(N(161))
            }
        } catch (a) {
            q(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function by(e, t, n) {
    R = e,
    Wp(e)
}
function Wp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var i = R
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ji;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || xe;
                l = ji;
                var u = xe;
                if (ji = s,
                (xe = a) && !u)
                    for (R = i; R !== null; )
                        s = R,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Tc(i) : a !== null ? (a.return = s,
                        R = a) : Tc(i);
                for (; o !== null; )
                    R = o,
                    Wp(o),
                    o = o.sibling;
                R = i,
                ji = l,
                xe = u
            }
            Sc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            R = o) : Sc(e)
    }
}
function Sc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xe || Fo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !xe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && oc(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            oc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Ir(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                xe || t.flags & 512 && Sl(t)
            } catch (f) {
                q(t, t.return, f)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function kc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function Tc(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Fo(4, t)
                } catch (a) {
                    q(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        q(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    Sl(t)
                } catch (a) {
                    q(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Sl(t)
                } catch (a) {
                    q(t, s, a)
                }
            }
        } catch (a) {
            q(t, t.return, a)
        }
        if (t === e) {
            R = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            R = l;
            break
        }
        R = t.return
    }
}
var $y = Math.ceil
  , yo = wt.ReactCurrentDispatcher
  , Na = wt.ReactCurrentOwner
  , He = wt.ReactCurrentBatchConfig
  , O = 0
  , ce = null
  , re = null
  , he = 0
  , De = 0
  , jn = $t(0)
  , se = 0
  , Gr = null
  , cn = 0
  , zo = 0
  , ja = 0
  , Er = null
  , Ne = null
  , Ma = 0
  , Qn = 1 / 0
  , at = null
  , go = !1
  , Pl = null
  , _t = null
  , Mi = !1
  , Mt = null
  , vo = 0
  , Nr = 0
  , Cl = null
  , Hi = -1
  , Wi = 0;
function Pe() {
    return O & 6 ? te() : Hi !== -1 ? Hi : Hi = te()
}
function It(e) {
    return e.mode & 1 ? O & 2 && he !== 0 ? he & -he : Ey.transition !== null ? (Wi === 0 && (Wi = Mf()),
    Wi) : (e = z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : If(e.type)),
    e) : 1
}
function Je(e, t, n, r) {
    if (50 < Nr)
        throw Nr = 0,
        Cl = null,
        Error(N(185));
    ni(e, n, r),
    (!(O & 2) || e !== ce) && (e === ce && (!(O & 2) && (zo |= n),
    se === 4 && Et(e, he)),
    Re(e, r),
    n === 1 && O === 0 && !(t.mode & 1) && (Qn = te() + 500,
    _o && Ht()))
}
function Re(e, t) {
    var n = e.callbackNode;
    E0(e, t);
    var r = eo(e, e === ce ? he : 0);
    if (r === 0)
        n !== null && Du(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Du(n),
        t === 1)
            e.tag === 0 ? Cy(Pc.bind(null, e)) : tp(Pc.bind(null, e)),
            Sy(function() {
                !(O & 6) && Ht()
            }),
            n = null;
        else {
            switch (Af(r)) {
            case 1:
                n = ta;
                break;
            case 4:
                n = Nf;
                break;
            case 16:
                n = Ji;
                break;
            case 536870912:
                n = jf;
                break;
            default:
                n = Ji
            }
            n = Jp(n, Kp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Kp(e, t) {
    if (Hi = -1,
    Wi = 0,
    O & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n)
        return null;
    var r = eo(e, e === ce ? he : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = xo(e, r);
    else {
        t = r;
        var i = O;
        O |= 2;
        var o = Qp();
        (ce !== e || he !== t) && (at = null,
        Qn = te() + 500,
        rn(e, t));
        do
            try {
                Ky();
                break
            } catch (l) {
                Gp(e, l)
            }
        while (!0);
        ha(),
        yo.current = o,
        O = i,
        re !== null ? t = 0 : (ce = null,
        he = 0,
        t = se)
    }
    if (t !== 0) {
        if (t === 2 && (i = qs(e),
        i !== 0 && (r = i,
        t = El(e, i))),
        t === 1)
            throw n = Gr,
            rn(e, 0),
            Et(e, r),
            Re(e, te()),
            n;
        if (t === 6)
            Et(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Hy(i) && (t = xo(e, r),
            t === 2 && (o = qs(e),
            o !== 0 && (r = o,
            t = El(e, o))),
            t === 1))
                throw n = Gr,
                rn(e, 0),
                Et(e, r),
                Re(e, te()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                Zt(e, Ne, at);
                break;
            case 3:
                if (Et(e, r),
                (r & 130023424) === r && (t = Ma + 500 - te(),
                10 < t)) {
                    if (eo(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Pe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = sl(Zt.bind(null, e, Ne, at), t);
                    break
                }
                Zt(e, Ne, at);
                break;
            case 4:
                if (Et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - qe(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = te() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $y(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = sl(Zt.bind(null, e, Ne, at), r);
                    break
                }
                Zt(e, Ne, at);
                break;
            case 5:
                Zt(e, Ne, at);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Re(e, te()),
    e.callbackNode === n ? Kp.bind(null, e) : null
}
function El(e, t) {
    var n = Er;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    e = xo(e, t),
    e !== 2 && (t = Ne,
    Ne = n,
    t !== null && Nl(t)),
    e
}
function Nl(e) {
    Ne === null ? Ne = e : Ne.push.apply(Ne, e)
}
function Hy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!et(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Et(e, t) {
    for (t &= ~ja,
    t &= ~zo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - qe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Pc(e) {
    if (O & 6)
        throw Error(N(327));
    Bn();
    var t = eo(e, 0);
    if (!(t & 1))
        return Re(e, te()),
        null;
    var n = xo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = qs(e);
        r !== 0 && (t = r,
        n = El(e, r))
    }
    if (n === 1)
        throw n = Gr,
        rn(e, 0),
        Et(e, t),
        Re(e, te()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Zt(e, Ne, at),
    Re(e, te()),
    null
}
function Aa(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
        O === 0 && (Qn = te() + 500,
        _o && Ht())
    }
}
function dn(e) {
    Mt !== null && Mt.tag === 0 && !(O & 6) && Bn();
    var t = O;
    O |= 1;
    var n = He.transition
      , r = z;
    try {
        if (He.transition = null,
        z = 1,
        e)
            return e()
    } finally {
        z = r,
        He.transition = n,
        O = t,
        !(O & 6) && Ht()
    }
}
function Ra() {
    De = jn.current,
    W(jn)
}
function rn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    wy(n)),
    re !== null)
        for (n = re.return; n !== null; ) {
            var r = n;
            switch (da(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && oo();
                break;
            case 3:
                Kn(),
                W(Me),
                W(Se),
                wa();
                break;
            case 5:
                xa(r);
                break;
            case 4:
                Kn();
                break;
            case 13:
                W(G);
                break;
            case 19:
                W(G);
                break;
            case 10:
                ma(r.type._context);
                break;
            case 22:
            case 23:
                Ra()
            }
            n = n.return
        }
    if (ce = e,
    re = e = Ot(e.current, null),
    he = De = t,
    se = 0,
    Gr = null,
    ja = zo = cn = 0,
    Ne = Er = null,
    en !== null) {
        for (t = 0; t < en.length; t++)
            if (n = en[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        en = null
    }
    return e
}
function Gp(e, t) {
    do {
        var n = re;
        try {
            if (ha(),
            Ui.current = mo,
            ho) {
                for (var r = Y.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ho = !1
            }
            if (un = 0,
            ue = oe = Y = null,
            Pr = !1,
            Hr = 0,
            Na.current = null,
            n === null || n.return === null) {
                se = 1,
                Gr = t,
                re = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = he,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var g = dc(s);
                    if (g !== null) {
                        g.flags &= -257,
                        fc(g, s, l, o, t),
                        g.mode & 1 && cc(o, u, t),
                        t = g,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            cc(o, u, t),
                            Da();
                            break e
                        }
                        a = Error(N(426))
                    }
                } else if (K && l.mode & 1) {
                    var E = dc(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        fc(E, s, l, o, t),
                        fa(Gn(a, l));
                        break e
                    }
                }
                o = a = Gn(a, l),
                se !== 4 && (se = 2),
                Er === null ? Er = [o] : Er.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var h = Ap(o, a, t);
                        ic(o, h);
                        break e;
                    case 1:
                        l = a;
                        var p = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (_t === null || !_t.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var S = Rp(o, l, t);
                            ic(o, S);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Xp(n)
        } catch (k) {
            t = k,
            re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Qp() {
    var e = yo.current;
    return yo.current = mo,
    e === null ? mo : e
}
function Da() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    ce === null || !(cn & 268435455) && !(zo & 268435455) || Et(ce, he)
}
function xo(e, t) {
    var n = O;
    O |= 2;
    var r = Qp();
    (ce !== e || he !== t) && (at = null,
    rn(e, t));
    do
        try {
            Wy();
            break
        } catch (i) {
            Gp(e, i)
        }
    while (!0);
    if (ha(),
    O = n,
    yo.current = r,
    re !== null)
        throw Error(N(261));
    return ce = null,
    he = 0,
    se
}
function Wy() {
    for (; re !== null; )
        Yp(re)
}
function Ky() {
    for (; re !== null && !g0(); )
        Yp(re)
}
function Yp(e) {
    var t = qp(e.alternate, e, De);
    e.memoizedProps = e.pendingProps,
    t === null ? Xp(e) : re = t,
    Na.current = null
}
function Xp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = zy(n, t),
            n !== null) {
                n.flags &= 32767,
                re = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                se = 6,
                re = null;
                return
            }
        } else if (n = Fy(n, t, De),
        n !== null) {
            re = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            re = t;
            return
        }
        re = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function Zt(e, t, n) {
    var r = z
      , i = He.transition;
    try {
        He.transition = null,
        z = 1,
        Gy(e, t, n, r)
    } finally {
        He.transition = i,
        z = r
    }
    return null
}
function Gy(e, t, n, r) {
    do
        Bn();
    while (Mt !== null);
    if (O & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (N0(e, o),
    e === ce && (re = ce = null,
    he = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mi || (Mi = !0,
    Jp(Ji, function() {
        return Bn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = He.transition,
        He.transition = null;
        var s = z;
        z = 1;
        var l = O;
        O |= 4,
        Na.current = null,
        Uy(e, n),
        Hp(n, e),
        py(il),
        to = !!rl,
        il = rl = null,
        e.current = n,
        by(n),
        v0(),
        O = l,
        z = s,
        He.transition = o
    } else
        e.current = n;
    if (Mi && (Mi = !1,
    Mt = e,
    vo = i),
    o = e.pendingLanes,
    o === 0 && (_t = null),
    S0(n.stateNode),
    Re(e, te()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (go)
        throw go = !1,
        e = Pl,
        Pl = null,
        e;
    return vo & 1 && e.tag !== 0 && Bn(),
    o = e.pendingLanes,
    o & 1 ? e === Cl ? Nr++ : (Nr = 0,
    Cl = e) : Nr = 0,
    Ht(),
    null
}
function Bn() {
    if (Mt !== null) {
        var e = Af(vo)
          , t = He.transition
          , n = z;
        try {
            if (He.transition = null,
            z = 16 > e ? 16 : e,
            Mt === null)
                var r = !1;
            else {
                if (e = Mt,
                Mt = null,
                vo = 0,
                O & 6)
                    throw Error(N(331));
                var i = O;
                for (O |= 4,
                R = e.current; R !== null; ) {
                    var o = R
                      , s = o.child;
                    if (R.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (R = u; R !== null; ) {
                                    var c = R;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cr(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        R = d;
                                    else
                                        for (; R !== null; ) {
                                            c = R;
                                            var f = c.sibling
                                              , g = c.return;
                                            if (Up(c),
                                            c === u) {
                                                R = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = g,
                                                R = f;
                                                break
                                            }
                                            R = g
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var E = x.sibling;
                                        x.sibling = null,
                                        x = E
                                    } while (x !== null)
                                }
                            }
                            R = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        R = s;
                    else
                        e: for (; R !== null; ) {
                            if (o = R,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cr(9, o, o.return)
                                }
                            var h = o.sibling;
                            if (h !== null) {
                                h.return = o.return,
                                R = h;
                                break e
                            }
                            R = o.return
                        }
                }
                var p = e.current;
                for (R = p; R !== null; ) {
                    s = R;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        R = m;
                    else
                        e: for (s = p; R !== null; ) {
                            if (l = R,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fo(9, l)
                                    }
                                } catch (k) {
                                    q(l, l.return, k)
                                }
                            if (l === s) {
                                R = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                R = S;
                                break e
                            }
                            R = l.return
                        }
                }
                if (O = i,
                Ht(),
                it && typeof it.onPostCommitFiberRoot == "function")
                    try {
                        it.onPostCommitFiberRoot(Ao, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            z = n,
            He.transition = t
        }
    }
    return !1
}
function Cc(e, t, n) {
    t = Gn(n, t),
    t = Ap(e, t, 1),
    e = Vt(e, t, 1),
    t = Pe(),
    e !== null && (ni(e, 1, t),
    Re(e, t))
}
function q(e, t, n) {
    if (e.tag === 3)
        Cc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Cc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
                    e = Gn(n, e),
                    e = Rp(t, e, 1),
                    t = Vt(t, e, 1),
                    e = Pe(),
                    t !== null && (ni(t, 1, e),
                    Re(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Qy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Pe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ce === e && (he & n) === n && (se === 4 || se === 3 && (he & 130023424) === he && 500 > te() - Ma ? rn(e, 0) : ja |= n),
    Re(e, t)
}
function Zp(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi,
    xi <<= 1,
    !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = Pe();
    e = gt(e, t),
    e !== null && (ni(e, t, n),
    Re(e, n))
}
function Yy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Zp(e, n)
}
function Xy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Zp(e, n)
}
var qp;
qp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Me.current)
            je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return je = !1,
                Oy(e, t, n);
            je = !!(e.flags & 131072)
        }
    else
        je = !1,
        K && t.flags & 1048576 && np(t, ao, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        $i(e, t),
        e = t.pendingProps;
        var i = $n(t, Se.current);
        zn(t, n),
        i = ka(null, t, r, e, i, n);
        var o = Ta();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ae(r) ? (o = !0,
        so(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ga(t),
        i.updater = Oo,
        t.stateNode = i,
        i._reactInternals = t,
        pl(t, r, e, n),
        t = yl(null, t, r, !0, o, n)) : (t.tag = 0,
        K && o && ca(t),
        ke(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch ($i(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = qy(r),
            e = Ye(r, e),
            i) {
            case 0:
                t = ml(null, t, r, e, n);
                break e;
            case 1:
                t = mc(null, t, r, e, n);
                break e;
            case 11:
                t = pc(null, t, r, e, n);
                break e;
            case 14:
                t = hc(null, t, r, Ye(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ye(r, i),
        ml(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ye(r, i),
        mc(e, t, r, i, n);
    case 3:
        e: {
            if (_p(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ap(e, t),
            fo(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Gn(Error(N(423)), t),
                    t = yc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Gn(Error(N(424)), t),
                    t = yc(e, t, r, n, i);
                    break e
                } else
                    for (Le = Lt(t.stateNode.containerInfo.firstChild),
                    Ve = t,
                    K = !0,
                    Ze = null,
                    n = sp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Hn(),
                r === i) {
                    t = vt(e, t, n);
                    break e
                }
                ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return up(t),
        e === null && cl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        ol(r, i) ? s = null : o !== null && ol(r, o) && (t.flags |= 32),
        Vp(e, t),
        ke(e, t, s, n),
        t.child;
    case 6:
        return e === null && cl(t),
        null;
    case 13:
        return Ip(e, t, n);
    case 4:
        return va(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Wn(t, null, r, n) : ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ye(r, i),
        pc(e, t, r, i, n);
    case 7:
        return ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            U(uo, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (et(o.value, s)) {
                    if (o.children === i.children && !Me.current) {
                        t = vt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = ft(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    dl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(N(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            dl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ke(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        zn(t, n),
        i = We(i),
        r = r(i),
        t.flags |= 1,
        ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ye(r, t.pendingProps),
        i = Ye(r.type, i),
        hc(e, t, r, i, n);
    case 15:
        return Dp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ye(r, i),
        $i(e, t),
        t.tag = 1,
        Ae(r) ? (e = !0,
        so(t)) : e = !1,
        zn(t, n),
        Mp(t, r, i),
        pl(t, r, i, n),
        yl(null, t, r, !0, e, n);
    case 19:
        return Op(e, t, n);
    case 22:
        return Lp(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function Jp(e, t) {
    return Ef(e, t)
}
function Zy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function $e(e, t, n, r) {
    return new Zy(e,t,n,r)
}
function La(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function qy(e) {
    if (typeof e == "function")
        return La(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ql)
            return 11;
        if (e === Jl)
            return 14
    }
    return 2
}
function Ot(e, t) {
    var n = e.alternate;
    return n === null ? (n = $e(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ki(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        La(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case vn:
            return on(n.children, i, o, t);
        case Zl:
            s = 8,
            i |= 8;
            break;
        case Os:
            return e = $e(12, n, t, i | 2),
            e.elementType = Os,
            e.lanes = o,
            e;
        case Fs:
            return e = $e(13, n, t, i),
            e.elementType = Fs,
            e.lanes = o,
            e;
        case zs:
            return e = $e(19, n, t, i),
            e.elementType = zs,
            e.lanes = o,
            e;
        case uf:
            return Bo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case lf:
                    s = 10;
                    break e;
                case af:
                    s = 9;
                    break e;
                case ql:
                    s = 11;
                    break e;
                case Jl:
                    s = 14;
                    break e;
                case Tt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = $e(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function on(e, t, n, r) {
    return e = $e(7, e, r, t),
    e.lanes = n,
    e
}
function Bo(e, t, n, r) {
    return e = $e(22, e, r, t),
    e.elementType = uf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ss(e, t, n) {
    return e = $e(6, e, null, t),
    e.lanes = n,
    e
}
function ks(e, t, n) {
    return t = $e(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Jy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ns(0),
    this.expirationTimes = ns(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ns(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Va(e, t, n, r, i, o, s, l, a) {
    return e = new Jy(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = $e(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ga(o),
    e
}
function eg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function eh(e) {
    if (!e)
        return zt;
    e = e._reactInternals;
    e: {
        if (pn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ae(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ae(n))
            return ep(e, n, t)
    }
    return t
}
function th(e, t, n, r, i, o, s, l, a) {
    return e = Va(n, r, !0, e, i, o, s, l, a),
    e.context = eh(null),
    n = e.current,
    r = Pe(),
    i = It(n),
    o = ft(r, i),
    o.callback = t ?? null,
    Vt(n, o, i),
    e.current.lanes = i,
    ni(e, i, r),
    Re(e, r),
    e
}
function Uo(e, t, n, r) {
    var i = t.current
      , o = Pe()
      , s = It(i);
    return n = eh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ft(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Vt(i, t, s),
    e !== null && (Je(e, i, s, o),
    Bi(e, i, s)),
    s
}
function wo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ec(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function _a(e, t) {
    Ec(e, t),
    (e = e.alternate) && Ec(e, t)
}
function tg() {
    return null
}
var nh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ia(e) {
    this._internalRoot = e
}
bo.prototype.render = Ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Uo(e, t, null, null)
}
;
bo.prototype.unmount = Ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dn(function() {
            Uo(null, e, null, null)
        }),
        t[yt] = null
    }
}
;
function bo(e) {
    this._internalRoot = e
}
bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Lf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
            ;
        Ct.splice(n, 0, e),
        n === 0 && _f(e)
    }
}
;
function Oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function $o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Nc() {}
function ng(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = wo(s);
                o.call(u)
            }
        }
        var s = th(t, r, e, 0, null, !1, !1, "", Nc);
        return e._reactRootContainer = s,
        e[yt] = s.current,
        zr(e.nodeType === 8 ? e.parentNode : e),
        dn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = wo(a);
            l.call(u)
        }
    }
    var a = Va(e, 0, !1, null, null, !1, !1, "", Nc);
    return e._reactRootContainer = a,
    e[yt] = a.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    dn(function() {
        Uo(t, a, n, r)
    }),
    a
}
function Ho(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = wo(s);
                l.call(a)
            }
        }
        Uo(t, s, e, i)
    } else
        s = ng(n, t, e, i, r);
    return wo(s)
}
Rf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = mr(t.pendingLanes);
            n !== 0 && (na(t, n | 1),
            Re(t, te()),
            !(O & 6) && (Qn = te() + 500,
            Ht()))
        }
        break;
    case 13:
        dn(function() {
            var r = gt(e, 1);
            if (r !== null) {
                var i = Pe();
                Je(r, e, 1, i)
            }
        }),
        _a(e, 1)
    }
}
;
ra = function(e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            Je(t, e, 134217728, n)
        }
        _a(e, 134217728)
    }
}
;
Df = function(e) {
    if (e.tag === 13) {
        var t = It(e)
          , n = gt(e, t);
        if (n !== null) {
            var r = Pe();
            Je(n, e, t, r)
        }
        _a(e, t)
    }
}
;
Lf = function() {
    return z
}
;
Vf = function(e, t) {
    var n = z;
    try {
        return z = e,
        t()
    } finally {
        z = n
    }
}
;
Ys = function(e, t, n) {
    switch (t) {
    case "input":
        if (bs(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Vo(r);
                    if (!i)
                        throw Error(N(90));
                    df(r),
                    bs(r, i)
                }
            }
        }
        break;
    case "textarea":
        pf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _n(e, !!n.multiple, t, !1)
    }
}
;
wf = Aa;
Sf = dn;
var rg = {
    usingClientEntryPoint: !1,
    Events: [ii, kn, Vo, vf, xf, Aa]
}
  , dr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , ig = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Pf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || tg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber)
        try {
            Ao = Ai.inject(ig),
            it = Ai
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
Oe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oa(t))
        throw Error(N(200));
    return eg(e, t, null, n)
}
;
Oe.createRoot = function(e, t) {
    if (!Oa(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , i = nh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Va(e, 1, !1, null, null, n, !1, r, i),
    e[yt] = t.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Ia(t)
}
;
Oe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = Pf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Oe.flushSync = function(e) {
    return dn(e)
}
;
Oe.hydrate = function(e, t, n) {
    if (!$o(t))
        throw Error(N(200));
    return Ho(null, e, t, !0, n)
}
;
Oe.hydrateRoot = function(e, t, n) {
    if (!Oa(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = nh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = th(t, null, e, 1, n ?? null, i, !1, o, s),
    e[yt] = t.current,
    zr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new bo(t)
}
;
Oe.render = function(e, t, n) {
    if (!$o(t))
        throw Error(N(200));
    return Ho(null, e, t, !1, n)
}
;
Oe.unmountComponentAtNode = function(e) {
    if (!$o(e))
        throw Error(N(40));
    return e._reactRootContainer ? (dn(function() {
        Ho(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[yt] = null
        })
    }),
    !0) : !1
}
;
Oe.unstable_batchedUpdates = Aa;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!$o(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return Ho(e, t, n, !1, r)
}
;
Oe.version = "18.3.1-next-f1338f8080-20240426";
function rh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rh)
        } catch (e) {
            console.error(e)
        }
}
rh(),
nf.exports = Oe;
var og = nf.exports, ih, jc = og;
ih = jc.createRoot,
jc.hydrateRoot;
const Fa = T.createContext({});
function za(e) {
    const t = T.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Wo = T.createContext(null)
  , Ba = T.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class sg extends T.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent
              , i = r instanceof HTMLElement && r.offsetWidth || 0
              , o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0,
            o.width = n.offsetWidth || 0,
            o.top = n.offsetTop,
            o.left = n.offsetLeft,
            o.right = i - o.width - o.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function lg({children: e, isPresent: t, anchorX: n}) {
    const r = T.useId()
      , i = T.useRef(null)
      , o = T.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: s} = T.useContext(Ba);
    return T.useInsertionEffect( () => {
        const {width: l, height: a, top: u, left: c, right: d} = o.current;
        if (t || !i.current || !l || !a)
            return;
        const f = n === "left" ? `left: ${c}` : `right: ${d}`;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return s && (g.nonce = s),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${a}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [t]),
    y.jsx(sg, {
        isPresent: t,
        childRef: i,
        sizeRef: o,
        children: T.cloneElement(e, {
            ref: i
        })
    })
}
const ag = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s, anchorX: l}) => {
    const a = za(ug)
      , u = T.useId()
      , c = T.useCallback(f => {
        a.set(f, !0);
        for (const g of a.values())
            if (!g)
                return;
        r && r()
    }
    , [a, r])
      , d = T.useMemo( () => ({
        id: u,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: f => (a.set(f, !1),
        () => a.delete(f))
    }), o ? [Math.random(), c] : [n, c]);
    return T.useMemo( () => {
        a.forEach( (f, g) => a.set(g, !1))
    }
    , [n]),
    T.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = y.jsx(lg, {
        isPresent: n,
        anchorX: l,
        children: e
    })),
    y.jsx(Wo.Provider, {
        value: d,
        children: e
    })
}
;
function ug() {
    return new Map
}
function oh(e=!0) {
    const t = T.useContext(Wo);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , o = T.useId();
    T.useEffect( () => {
        if (e)
            return i(o)
    }
    , [e]);
    const s = T.useCallback( () => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const Ri = e => e.key || "";
function Mc(e) {
    const t = [];
    return T.Children.forEach(e, n => {
        T.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Ua = typeof window < "u"
  , sh = Ua ? T.useLayoutEffect : T.useEffect
  , Un = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: o="sync", propagate: s=!1, anchorX: l="left"}) => {
    const [a,u] = oh(s)
      , c = T.useMemo( () => Mc(e), [e])
      , d = s && !a ? [] : c.map(Ri)
      , f = T.useRef(!0)
      , g = T.useRef(c)
      , v = za( () => new Map)
      , [x,E] = T.useState(c)
      , [h,p] = T.useState(c);
    sh( () => {
        f.current = !1,
        g.current = c;
        for (let k = 0; k < h.length; k++) {
            const C = Ri(h[k]);
            d.includes(C) ? v.delete(C) : v.get(C) !== !0 && v.set(C, !1)
        }
    }
    , [h, d.length, d.join("-")]);
    const m = [];
    if (c !== x) {
        let k = [...c];
        for (let C = 0; C < h.length; C++) {
            const j = h[C]
              , w = Ri(j);
            d.includes(w) || (k.splice(C, 0, j),
            m.push(j))
        }
        return o === "wait" && m.length && (k = m),
        p(Mc(k)),
        E(c),
        null
    }
    const {forceRender: S} = T.useContext(Fa);
    return y.jsx(y.Fragment, {
        children: h.map(k => {
            const C = Ri(k)
              , j = s && !a ? !1 : c === h || d.includes(C)
              , w = () => {
                if (v.has(C))
                    v.set(C, !0);
                else
                    return;
                let P = !0;
                v.forEach(M => {
                    M || (P = !1)
                }
                ),
                P && (S == null || S(),
                p(g.current),
                s && (u == null || u()),
                r && r())
            }
            ;
            return y.jsx(ag, {
                isPresent: j,
                initial: !f.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: o,
                onExitComplete: j ? void 0 : w,
                anchorX: l,
                children: k
            }, C)
        }
        )
    })
}
  , _e = e => e;
let jl = _e;
function ba(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Yn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , pt = e => e * 1e3
  , ht = e => e / 1e3
  , cg = {
    skipAnimations: !1,
    useManualTiming: !1
}
  , Di = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Ac = {
    value: null,
    addProjectionMetrics: null
};
function dg(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , o = !1;
    const s = new WeakSet;
    let l = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , a = 0;
    function u(d) {
        s.has(d) && (c.schedule(d),
        e()),
        a++,
        d(l)
    }
    const c = {
        schedule: (d, f=!1, g=!1) => {
            const x = g && i ? n : r;
            return f && s.add(d),
            x.has(d) || x.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            s.delete(d)
        }
        ,
        process: d => {
            if (l = d,
            i) {
                o = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && Ac.value && Ac.value.frameloop[t].push(a),
            a = 0,
            n.clear(),
            i = !1,
            o && (o = !1,
            c.process(d))
        }
    };
    return c
}
const fg = 40;
function lh(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , s = Di.reduce( (h, p) => (h[p] = dg(o, t ? p : void 0),
    h), {})
      , {read: l, resolveKeyframes: a, update: u, preRender: c, render: d, postRender: f} = s
      , g = () => {
        const h = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, fg), 1),
        i.timestamp = h,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , v = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Di.reduce( (h, p) => {
            const m = s[p];
            return h[p] = (S, k=!1, C=!1) => (n || v(),
            m.schedule(S, k, C)),
            h
        }
        , {}),
        cancel: h => {
            for (let p = 0; p < Di.length; p++)
                s[Di[p]].cancel(h)
        }
        ,
        state: i,
        steps: s
    }
}
const {schedule: b, cancel: Bt, state: fe, steps: Ts} = lh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _e, !0)
  , ah = T.createContext({
    strict: !1
})
  , Rc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Xn = {};
for (const e in Rc)
    Xn[e] = {
        isEnabled: t => Rc[e].some(n => !!t[n])
    };
function pg(e) {
    for (const t in e)
        Xn[t] = {
            ...Xn[t],
            ...e[t]
        }
}
const hg = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function So(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || hg.has(e)
}
let uh = e => !So(e);
function mg(e) {
    e && (uh = t => t.startsWith("on") ? !So(t) : e(t))
}
try {
    mg(require("@emotion/is-prop-valid").default)
} catch {}
function yg(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (uh(i) || n === !0 && So(i) || !t && !So(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function gg(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const Ko = T.createContext({});
function Go(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Qr(e) {
    return typeof e == "string" || Array.isArray(e)
}
const $a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ha = ["initial", ...$a];
function Qo(e) {
    return Go(e.animate) || Ha.some(t => Qr(e[t]))
}
function ch(e) {
    return !!(Qo(e) || e.variants)
}
function vg(e, t) {
    if (Qo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Qr(n) ? n : void 0,
            animate: Qr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function xg(e) {
    const {initial: t, animate: n} = vg(e, T.useContext(Ko));
    return T.useMemo( () => ({
        initial: t,
        animate: n
    }), [Dc(t), Dc(n)])
}
function Dc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const wg = Symbol.for("motionComponentSymbol");
function Mn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Sg(e, t, n) {
    return T.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r))
    }
    , [t])
}
const Wa = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , kg = "framerAppearId"
  , dh = "data-" + Wa(kg)
  , {schedule: Ka, cancel: Jw} = lh(queueMicrotask, !1)
  , fh = T.createContext({});
function Tg(e, t, n, r, i) {
    var o, s;
    const {visualElement: l} = T.useContext(Ko)
      , a = T.useContext(ah)
      , u = T.useContext(Wo)
      , c = T.useContext(Ba).reducedMotion
      , d = T.useRef(null);
    r = r || a.renderer,
    !d.current && r && (d.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = d.current
      , g = T.useContext(fh);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && Pg(d.current, n, i, g);
    const v = T.useRef(!1);
    T.useInsertionEffect( () => {
        f && v.current && f.update(n, u)
    }
    );
    const x = n[dh]
      , E = T.useRef(!!x && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, x)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, x)));
    return sh( () => {
        f && (v.current = !0,
        window.MotionIsMounted = !0,
        f.updateFeatures(),
        Ka.render(f.render),
        E.current && f.animationState && f.animationState.animateChanges())
    }
    ),
    T.useEffect( () => {
        f && (!E.current && f.animationState && f.animationState.animateChanges(),
        E.current && (queueMicrotask( () => {
            var h;
            (h = window.MotionHandoffMarkAsComplete) === null || h === void 0 || h.call(window, x)
        }
        ),
        E.current = !1))
    }
    ),
    f
}
function Pg(e, t, n, r) {
    const {layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : ph(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || l && Mn(l),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}
function ph(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : ph(e.parent)
}
function Cg({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var o, s;
    e && pg(e);
    function l(u, c) {
        let d;
        const f = {
            ...T.useContext(Ba),
            ...u,
            layoutId: Eg(u)
        }
          , {isStatic: g} = f
          , v = xg(u)
          , x = r(u, g);
        if (!g && Ua) {
            Ng();
            const E = jg(f);
            d = E.MeasureLayout,
            v.visualElement = Tg(i, x, f, t, E.ProjectionNode)
        }
        return y.jsxs(Ko.Provider, {
            value: v,
            children: [d && v.visualElement ? y.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, n(i, u, Sg(x, v.visualElement, c), x, g, v.visualElement)]
        })
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
    const a = T.forwardRef(l);
    return a[wg] = i,
    a
}
function Eg({layoutId: e}) {
    const t = T.useContext(Fa).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Ng(e, t) {
    T.useContext(ah).strict
}
function jg(e) {
    const {drag: t, layout: n} = Xn;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const hh = e => t => typeof t == "string" && t.startsWith(e)
  , Ga = hh("--")
  , Mg = hh("var(--")
  , Qa = e => Mg(e) ? Ag.test(e.split("/*")[0].trim()) : !1
  , Ag = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Yr = {};
function Rg(e) {
    for (const t in e)
        Yr[t] = e[t],
        Ga(t) && (Yr[t].isCSSVariable = !0)
}
const tr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , hn = new Set(tr);
function mh(e, {layout: t, layoutId: n}) {
    return hn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Yr[e] || e === "opacity")
}
const we = e => !!(e && e.getVelocity)
  , yh = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , xt = (e, t, n) => n > t ? t : n < e ? e : n
  , nr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Xr = {
    ...nr,
    transform: e => xt(0, 1, e)
}
  , Li = {
    ...nr,
    default: 1
}
  , si = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , kt = si("deg")
  , st = si("%")
  , L = si("px")
  , Dg = si("vh")
  , Lg = si("vw")
  , Lc = {
    ...st,
    parse: e => st.parse(e) / 100,
    transform: e => st.transform(e * 100)
}
  , Vg = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L
}
  , _g = {
    rotate: kt,
    rotateX: kt,
    rotateY: kt,
    rotateZ: kt,
    scale: Li,
    scaleX: Li,
    scaleY: Li,
    scaleZ: Li,
    skew: kt,
    skewX: kt,
    skewY: kt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Xr,
    originX: Lc,
    originY: Lc,
    originZ: L
}
  , Vc = {
    ...nr,
    transform: Math.round
}
  , Ya = {
    ...Vg,
    ..._g,
    zIndex: Vc,
    size: L,
    fillOpacity: Xr,
    strokeOpacity: Xr,
    numOctaves: Vc
}
  , Ig = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Og = tr.length;
function Fg(e, t, n) {
    let r = ""
      , i = !0;
    for (let o = 0; o < Og; o++) {
        const s = tr[o]
          , l = e[s];
        if (l === void 0)
            continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
        !a || n) {
            const u = yh(l, Ya[s]);
            if (!a) {
                i = !1;
                const c = Ig[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Xa(e, t, n) {
    const {style: r, vars: i, transformOrigin: o} = e;
    let s = !1
      , l = !1;
    for (const a in t) {
        const u = t[a];
        if (hn.has(a)) {
            s = !0;
            continue
        } else if (Ga(a)) {
            i[a] = u;
            continue
        } else {
            const c = yh(u, Ya[a]);
            a.startsWith("origin") ? (l = !0,
            o[a] = c) : r[a] = c
        }
    }
    if (t.transform || (s || n ? r.transform = Fg(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: a="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${a} ${u} ${c}`
    }
}
const Za = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function gh(e, t, n) {
    for (const r in t)
        !we(t[r]) && !mh(r, n) && (e[r] = t[r])
}
function zg({transformTemplate: e}, t) {
    return T.useMemo( () => {
        const n = Za();
        return Xa(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function Bg(e, t) {
    const n = e.style || {}
      , r = {};
    return gh(r, n, e),
    Object.assign(r, zg(e, t)),
    r
}
function Ug(e, t) {
    const n = {}
      , r = Bg(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const bg = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function qa(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(bg.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const $g = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Hg = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Wg(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? $g : Hg;
    e[o.offset] = L.transform(-r);
    const s = L.transform(t)
      , l = L.transform(n);
    e[o.array] = `${s} ${l}`
}
function _c(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e)
}
function Kg(e, t, n) {
    const r = _c(t, e.x, e.width)
      , i = _c(n, e.y, e.height);
    return `${r} ${i}`
}
function Ja(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, c, d) {
    if (Xa(e, u, d),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: g, dimensions: v} = e;
    f.transform && (v && (g.transform = f.transform),
    delete f.transform),
    v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Kg(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && Wg(f, s, l, a, !1)
}
const vh = () => ({
    ...Za(),
    attrs: {}
})
  , eu = e => typeof e == "string" && e.toLowerCase() === "svg";
function Gg(e, t, n, r) {
    const i = T.useMemo( () => {
        const o = vh();
        return Ja(o, t, eu(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        gh(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function Qg(e=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        const a = (qa(n) ? Gg : Ug)(r, o, s, n)
          , u = yg(r, typeof n == "string", e)
          , c = n !== T.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: d} = r
          , f = T.useMemo( () => we(d) ? d.get() : d, [d]);
        return T.createElement(n, {
            ...c,
            children: f
        })
    }
}
function Ic(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function tu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = Ic(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = Ic(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
const Ml = e => Array.isArray(e)
  , Yg = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Xg = e => Ml(e) ? e[e.length - 1] || 0 : e;
function Gi(e) {
    const t = we(e) ? e.get() : e;
    return Yg(t) ? t.toValue() : t
}
function Zg({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, o) {
    const s = {
        latestValues: qg(r, i, o, e),
        renderState: t()
    };
    return n && (s.onMount = l => n({
        props: r,
        current: l,
        ...s
    }),
    s.onUpdate = l => n(l)),
    s
}
const xh = e => (t, n) => {
    const r = T.useContext(Ko)
      , i = T.useContext(Wo)
      , o = () => Zg(e, t, r, i);
    return n ? o() : za(o)
}
;
function qg(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const f in o)
        i[f] = Gi(o[f]);
    let {initial: s, animate: l} = e;
    const a = Qo(e)
      , u = ch(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? l : s;
    if (d && typeof d != "boolean" && !Go(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let g = 0; g < f.length; g++) {
            const v = tu(e, f[g]);
            if (v) {
                const {transitionEnd: x, transition: E, ...h} = v;
                for (const p in h) {
                    let m = h[p];
                    if (Array.isArray(m)) {
                        const S = c ? m.length - 1 : 0;
                        m = m[S]
                    }
                    m !== null && (i[p] = m)
                }
                for (const p in x)
                    i[p] = x[p]
            }
        }
    }
    return i
}
function nu(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const s in i)
        (we(i[s]) || t.style && we(t.style[s]) || mh(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
const Jg = {
    useVisualState: xh({
        scrapeMotionValuesFromProps: nu,
        createRenderState: Za
    })
};
function wh(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
function Sh(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const kh = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Th(e, t, n, r) {
    Sh(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(kh.has(i) ? i : Wa(i), t.attrs[i])
}
function Ph(e, t, n) {
    const r = nu(e, t, n);
    for (const i in e)
        if (we(e[i]) || we(t[i])) {
            const o = tr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
const Oc = ["x", "y", "width", "height", "cx", "cy", "r"]
  , ev = {
    useVisualState: xh({
        scrapeMotionValuesFromProps: Ph,
        createRenderState: vh,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let o = !!e.drag;
            if (!o) {
                for (const l in i)
                    if (hn.has(l)) {
                        o = !0;
                        break
                    }
            }
            if (!o)
                return;
            let s = !t;
            if (t)
                for (let l = 0; l < Oc.length; l++) {
                    const a = Oc[l];
                    e[a] !== t[a] && (s = !0)
                }
            s && b.read( () => {
                wh(n, r),
                b.render( () => {
                    Ja(r, i, eu(n.tagName), e.transformTemplate),
                    Th(n, r)
                }
                )
            }
            )
        }
    })
};
function tv(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const s = {
            ...qa(r) ? ev : Jg,
            preloadedFeatures: e,
            useRender: Qg(i),
            createVisualElement: t,
            Component: r
        };
        return Cg(s)
    }
}
function Zr(e, t, n) {
    const r = e.getProps();
    return tu(r, t, n !== void 0 ? n : r.custom, e)
}
const nv = ba( () => window.ScrollTimeline !== void 0);
class rv {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (nv() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, o) => {
                i && i(),
                this.animations[o].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class iv extends rv {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function ru(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Al = 2e4;
function Ch(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Al; )
        t += n,
        r = e.next(t);
    return t >= Al ? 1 / 0 : t
}
function iu(e) {
    return typeof e == "function"
}
function Fc(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const ou = e => Array.isArray(e) && typeof e[0] == "number"
  , ov = {
    linearEasing: void 0
};
function sv(e, t) {
    const n = ba(e);
    return () => {
        var r;
        return (r = ov[t]) !== null && r !== void 0 ? r : n()
    }
}
const ko = sv( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Eh = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
        r += e(Yn(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function Nh(e) {
    return !!(typeof e == "function" && ko() || !e || typeof e == "string" && (e in Rl || ko()) || ou(e) || Array.isArray(e) && e.every(Nh))
}
const gr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Rl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gr([0, .65, .55, 1]),
    circOut: gr([.55, 0, 1, .45]),
    backIn: gr([.31, .01, .66, -.59]),
    backOut: gr([.33, 1.53, .69, .99])
};
function jh(e, t) {
    if (e)
        return typeof e == "function" && ko() ? Eh(e, t) : ou(e) ? gr(e) : Array.isArray(e) ? e.map(n => jh(n, t) || Rl.easeOut) : Rl[e]
}
const Qe = {
    x: !1,
    y: !1
};
function Mh() {
    return Qe.x || Qe.y
}
function Ah(e, t, n) {
    var r;
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}
function Rh(e, t) {
    const n = Ah(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function zc(e) {
    return !(e.pointerType === "touch" || Mh())
}
function lv(e, t, n={}) {
    const [r,i,o] = Rh(e, n)
      , s = l => {
        if (!zc(l))
            return;
        const {target: a} = l
          , u = t(a, l);
        if (typeof u != "function" || !a)
            return;
        const c = d => {
            zc(d) && (u(d),
            a.removeEventListener("pointerleave", c))
        }
        ;
        a.addEventListener("pointerleave", c, i)
    }
    ;
    return r.forEach(l => {
        l.addEventListener("pointerenter", s, i)
    }
    ),
    o
}
function To(e, t) {
    const n = `${t}PointerCapture`;
    if (e.target instanceof Element && n in e.target && e.pointerId !== void 0)
        try {
            e.target[n](e.pointerId)
        } catch {}
}
const Dh = (e, t) => t ? e === t ? !0 : Dh(e, t.parentElement) : !1
  , su = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , av = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function uv(e) {
    return av.has(e.tagName) || e.tabIndex !== -1
}
const vr = new WeakSet;
function Bc(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ps(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const cv = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Bc( () => {
        if (vr.has(n))
            return;
        Ps(n, "down");
        const i = Bc( () => {
            Ps(n, "up")
        }
        )
          , o = () => Ps(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Uc(e) {
    return su(e) && !Mh()
}
function dv(e, t, n={}) {
    const [r,i,o] = Rh(e, n)
      , s = l => {
        const a = l.currentTarget;
        if (!a || !Uc(l) || vr.has(a))
            return;
        vr.add(a),
        To(l, "set");
        const u = t(a, l)
          , c = (g, v) => {
            a.removeEventListener("pointerup", d),
            a.removeEventListener("pointercancel", f),
            To(g, "release"),
            !(!Uc(g) || !vr.has(a)) && (vr.delete(a),
            typeof u == "function" && u(g, {
                success: v
            }))
        }
          , d = g => {
            (g.isTrusted ? fv(g, a instanceof Element ? a.getBoundingClientRect() : {
                left: 0,
                top: 0,
                right: window.innerWidth,
                bottom: window.innerHeight
            }) : !1) ? c(g, !1) : c(g, !(a instanceof Element) || Dh(a, g.target))
        }
          , f = g => {
            c(g, !1)
        }
        ;
        a.addEventListener("pointerup", d, i),
        a.addEventListener("pointercancel", f, i),
        a.addEventListener("lostpointercapture", f, i)
    }
    ;
    return r.forEach(l => {
        l = n.useGlobalTarget ? window : l;
        let a = !1;
        l instanceof HTMLElement && (a = !0,
        !uv(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0)),
        l.addEventListener("pointerdown", s, i),
        a && l.addEventListener("focus", u => cv(u, i), i)
    }
    ),
    o
}
function fv(e, t) {
    return e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom
}
function pv(e) {
    return e === "x" || e === "y" ? Qe[e] ? null : (Qe[e] = !0,
    () => {
        Qe[e] = !1
    }
    ) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0,
    () => {
        Qe.x = Qe.y = !1
    }
    )
}
const Lh = new Set(["width", "height", "top", "left", "right", "bottom", ...tr]);
let Qi;
function hv() {
    Qi = void 0
}
const lt = {
    now: () => (Qi === void 0 && lt.set(fe.isProcessing || cg.useManualTiming ? fe.timestamp : performance.now()),
    Qi),
    set: e => {
        Qi = e,
        queueMicrotask(hv)
    }
};
function lu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function au(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class uu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return lu(this.subscriptions, t),
        () => au(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Vh(e, t) {
    return t ? e * (1e3 / t) : 0
}
const bc = 30
  , mv = e => !isNaN(parseFloat(e));
class yv {
    constructor(t, n={}) {
        this.version = "12.4.7",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const o = lt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = lt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = mv(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new uu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            b.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = lt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > bc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, bc);
        return Vh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function qr(e, t) {
    return new yv(e,t)
}
function gv(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qr(n))
}
function vv(e, t) {
    const n = Zr(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = Xg(o[s]);
        gv(e, s, l)
    }
}
function xv(e) {
    return !!(we(e) && e.add)
}
function Dl(e, t) {
    const n = e.getValue("willChange");
    if (xv(n))
        return n.add(t)
}
function _h(e) {
    return e.props[dh]
}
const Ih = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , wv = 1e-7
  , Sv = 12;
function kv(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = Ih(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > wv && ++l < Sv);
    return s
}
function li(e, t, n, r) {
    if (e === t && n === r)
        return _e;
    const i = o => kv(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Ih(i(o), t, r)
}
const Oh = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Fh = e => t => 1 - e(1 - t)
  , zh = li(.33, 1.53, .69, .99)
  , cu = Fh(zh)
  , Bh = Oh(cu)
  , Uh = e => (e *= 2) < 1 ? .5 * cu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , du = e => 1 - Math.sin(Math.acos(e))
  , bh = Fh(du)
  , $h = Oh(du)
  , Hh = e => /^0[^.\s]+$/u.test(e);
function Tv(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Hh(e) : !0
}
const jr = e => Math.round(e * 1e5) / 1e5
  , fu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Pv(e) {
    return e == null
}
const Cv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , pu = (e, t) => n => !!(typeof n == "string" && Cv.test(n) && n.startsWith(e) || t && !Pv(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Wh = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,o,s,l] = r.match(fu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , Ev = e => xt(0, 255, e)
  , Cs = {
    ...nr,
    transform: e => Math.round(Ev(e))
}
  , nn = {
    test: pu("rgb", "red"),
    parse: Wh("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Cs.transform(e) + ", " + Cs.transform(t) + ", " + Cs.transform(n) + ", " + jr(Xr.transform(r)) + ")"
};
function Nv(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Ll = {
    test: pu("#"),
    parse: Nv,
    transform: nn.transform
}
  , An = {
    test: pu("hsl", "hue"),
    parse: Wh("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + st.transform(jr(t)) + ", " + st.transform(jr(n)) + ", " + jr(Xr.transform(r)) + ")"
}
  , ve = {
    test: e => nn.test(e) || Ll.test(e) || An.test(e),
    parse: e => nn.test(e) ? nn.parse(e) : An.test(e) ? An.parse(e) : Ll.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? nn.transform(e) : An.transform(e)
}
  , jv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mv(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(fu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(jv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Kh = "number"
  , Gh = "color"
  , Av = "var"
  , Rv = "var("
  , $c = "${}"
  , Dv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jr(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const l = t.replace(Dv, a => (ve.test(a) ? (r.color.push(o),
    i.push(Gh),
    n.push(ve.parse(a))) : a.startsWith(Rv) ? (r.var.push(o),
    i.push(Av),
    n.push(a)) : (r.number.push(o),
    i.push(Kh),
    n.push(parseFloat(a))),
    ++o,
    $c)).split($c);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function Qh(e) {
    return Jr(e).values
}
function Yh(e) {
    const {split: t, types: n} = Jr(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const l = n[s];
                l === Kh ? o += jr(i[s]) : l === Gh ? o += ve.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const Lv = e => typeof e == "number" ? 0 : e;
function Vv(e) {
    const t = Qh(e);
    return Yh(e)(t.map(Lv))
}
const Ut = {
    test: Mv,
    parse: Qh,
    createTransformer: Yh,
    getAnimatableNone: Vv
}
  , _v = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Iv(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(fu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = _v.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const Ov = /\b([a-z-]*)\(.*?\)/gu
  , Vl = {
    ...Ut,
    getAnimatableNone: e => {
        const t = e.match(Ov);
        return t ? t.map(Iv).join(" ") : e
    }
}
  , Fv = {
    ...Ya,
    color: ve,
    backgroundColor: ve,
    outlineColor: ve,
    fill: ve,
    stroke: ve,
    borderColor: ve,
    borderTopColor: ve,
    borderRightColor: ve,
    borderBottomColor: ve,
    borderLeftColor: ve,
    filter: Vl,
    WebkitFilter: Vl
}
  , hu = e => Fv[e];
function Xh(e, t) {
    let n = hu(e);
    return n !== Vl && (n = Ut),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const zv = new Set(["auto", "none", "0"]);
function Bv(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !zv.has(o) && Jr(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = Xh(n, i)
}
const Hc = e => e === nr || e === L
  , Wc = (e, t) => parseFloat(e.split(", ")[t])
  , Kc = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Wc(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Wc(o[1], e) : 0
    }
}
  , Uv = new Set(["x", "y", "z"])
  , bv = tr.filter(e => !Uv.has(e));
function $v(e) {
    const t = [];
    return bv.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Zn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Kc(4, 13),
    y: Kc(5, 14)
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const sn = new Set;
let _l = !1
  , Il = !1;
function Zh() {
    if (Il) {
        const e = Array.from(sn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = $v(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var l;
                (l = r.getValue(o)) === null || l === void 0 || l.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Il = !1,
    _l = !1,
    sn.forEach(e => e.complete()),
    sn.clear()
}
function qh() {
    sn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Il = !0)
    }
    )
}
function Hv() {
    qh(),
    Zh()
}
class mu {
    constructor(t, n, r, i, o, s=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (sn.add(this),
        _l || (_l = !0,
        b.read(qh),
        b.resolveKeyframes(Zh))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (s !== void 0)
                        t[0] = s;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && s === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        sn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        sn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Jh = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Wv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Kv(e) {
    const t = Wv.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function em(e, t, n=1) {
    const [r,i] = Kv(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Jh(s) ? parseFloat(s) : s
    }
    return Qa(i) ? em(i, t, n + 1) : i
}
const tm = e => t => t.test(e)
  , Gv = {
    test: e => e === "auto",
    parse: e => e
}
  , nm = [nr, L, st, kt, Lg, Dg, Gv]
  , Gc = e => nm.find(tm(e));
class rm extends mu {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(),
            Qa(u))) {
                const c = em(u, n.current);
                c !== void 0 && (t[a] = c),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Lh.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = Gc(i)
          , l = Gc(o);
        if (s !== l)
            if (Hc(s) && Hc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            Tv(t[i]) && r.push(i);
        r.length && Bv(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Zn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1
          , l = i[s];
        i[s] = Zn[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([a,u]) => {
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Qc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ut.test(e) || e === "0") && !e.startsWith("url("));
function Qv(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Yv(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , s = Qc(i, t)
      , l = Qc(o, t);
    return !s || !l ? !1 : Qv(e) || (n === "spring" || iu(n)) && r
}
const Xv = e => e !== null;
function Yo(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(Xv)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const Zv = 40;
class im {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = lt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Zv ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Hv(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = lt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !Yv(t, r, i, o))
            if (s)
                this.options.duration = 0;
            else {
                a && a(Yo(t, this.options, n)),
                l && l(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const Q = (e, t, n) => e + (t - e) * n;
function Es(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function qv({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = Es(a, l, e + 1 / 3),
        o = Es(a, l, e),
        s = Es(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function Po(e, t) {
    return n => n > 0 ? t : e
}
const Ns = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Jv = [Ll, nn, An]
  , e1 = e => Jv.find(t => t.test(e));
function Yc(e) {
    const t = e1(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === An && (n = qv(n)),
    n
}
const Xc = (e, t) => {
    const n = Yc(e)
      , r = Yc(t);
    if (!n || !r)
        return Po(e, t);
    const i = {
        ...n
    };
    return o => (i.red = Ns(n.red, r.red, o),
    i.green = Ns(n.green, r.green, o),
    i.blue = Ns(n.blue, r.blue, o),
    i.alpha = Q(n.alpha, r.alpha, o),
    nn.transform(i))
}
  , t1 = (e, t) => n => t(e(n))
  , ai = (...e) => e.reduce(t1)
  , Ol = new Set(["none", "hidden"]);
function n1(e, t) {
    return Ol.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function r1(e, t) {
    return n => Q(e, t, n)
}
function yu(e) {
    return typeof e == "number" ? r1 : typeof e == "string" ? Qa(e) ? Po : ve.test(e) ? Xc : s1 : Array.isArray(e) ? om : typeof e == "object" ? ve.test(e) ? Xc : i1 : Po
}
function om(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (o, s) => yu(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function i1(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = yu(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function o1(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , l = e.indexes[s][i[s]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = a,
        i[s]++
    }
    return r
}
const s1 = (e, t) => {
    const n = Ut.createTransformer(t)
      , r = Jr(e)
      , i = Jr(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ol.has(e) && !i.values.length || Ol.has(t) && !r.values.length ? n1(e, t) : ai(om(o1(r, i), i.values), n) : Po(e, t)
}
;
function sm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Q(e, t, n) : yu(e)(e, t)
}
const l1 = 5;
function lm(e, t, n) {
    const r = Math.max(t - l1, 0);
    return Vh(n - e(r), t - r)
}
const Z = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , js = .001;
function a1({duration: e=Z.duration, bounce: t=Z.bounce, velocity: n=Z.velocity, mass: r=Z.mass}) {
    let i, o, s = 1 - t;
    s = xt(Z.minDamping, Z.maxDamping, s),
    e = xt(Z.minDuration, Z.maxDuration, ht(e)),
    s < 1 ? (i = u => {
        const c = u * s
          , d = c * e
          , f = c - n
          , g = Fl(u, s)
          , v = Math.exp(-d);
        return js - f / g * v
    }
    ,
    o = u => {
        const d = u * s * e
          , f = d * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , x = Fl(Math.pow(u, 2), s);
        return (-i(u) + js > 0 ? -1 : 1) * ((f - g) * v) / x
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -js + c * d
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const l = 5 / e
      , a = c1(i, o, l);
    if (e = pt(e),
    isNaN(a))
        return {
            stiffness: Z.stiffness,
            damping: Z.damping,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const u1 = 12;
function c1(e, t, n) {
    let r = n;
    for (let i = 1; i < u1; i++)
        r = r - e(r) / t(r);
    return r
}
function Fl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const d1 = ["duration", "bounce"]
  , f1 = ["stiffness", "damping", "mass"];
function Zc(e, t) {
    return t.some(n => e[n] !== void 0)
}
function p1(e) {
    let t = {
        velocity: Z.velocity,
        stiffness: Z.stiffness,
        damping: Z.damping,
        mass: Z.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Zc(e, f1) && Zc(e, d1))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , o = 2 * xt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: Z.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = a1(e);
            t = {
                ...t,
                ...n,
                mass: Z.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function am(e=Z.visualDuration, t=Z.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const o = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , l = {
        done: !1,
        value: o
    }
      , {stiffness: a, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: g} = p1({
        ...n,
        velocity: -ht(n.velocity || 0)
    })
      , v = f || 0
      , x = u / (2 * Math.sqrt(a * c))
      , E = s - o
      , h = ht(Math.sqrt(a / c))
      , p = Math.abs(E) < 5;
    r || (r = p ? Z.restSpeed.granular : Z.restSpeed.default),
    i || (i = p ? Z.restDelta.granular : Z.restDelta.default);
    let m;
    if (x < 1) {
        const k = Fl(h, x);
        m = C => {
            const j = Math.exp(-x * h * C);
            return s - j * ((v + x * h * E) / k * Math.sin(k * C) + E * Math.cos(k * C))
        }
    } else if (x === 1)
        m = k => s - Math.exp(-h * k) * (E + (v + h * E) * k);
    else {
        const k = h * Math.sqrt(x * x - 1);
        m = C => {
            const j = Math.exp(-x * h * C)
              , w = Math.min(k * C, 300);
            return s - j * ((v + x * h * E) * Math.sinh(w) + k * E * Math.cosh(w)) / k
        }
    }
    const S = {
        calculatedDuration: g && d || null,
        next: k => {
            const C = m(k);
            if (g)
                l.done = k >= d;
            else {
                let j = 0;
                x < 1 && (j = k === 0 ? pt(v) : lm(m, k, C));
                const w = Math.abs(j) <= r
                  , P = Math.abs(s - C) <= i;
                l.done = w && P
            }
            return l.value = l.done ? s : C,
            l
        }
        ,
        toString: () => {
            const k = Math.min(Ch(S), Al)
              , C = Eh(j => S.next(k * j).value, k, 30);
            return k + "ms " + C
        }
    };
    return S
}
function qc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , g = w => l !== void 0 && w < l || a !== void 0 && w > a
      , v = w => l === void 0 ? a : a === void 0 || Math.abs(l - w) < Math.abs(a - w) ? l : a;
    let x = n * t;
    const E = d + x
      , h = s === void 0 ? E : s(E);
    h !== E && (x = h - d);
    const p = w => -x * Math.exp(-w / r)
      , m = w => h + p(w)
      , S = w => {
        const P = p(w)
          , M = m(w);
        f.done = Math.abs(P) <= u,
        f.value = f.done ? h : M
    }
    ;
    let k, C;
    const j = w => {
        g(f.value) && (k = w,
        C = am({
            keyframes: [f.value, v(f.value)],
            velocity: lm(m, w, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return j(0),
    {
        calculatedDuration: null,
        next: w => {
            let P = !1;
            return !C && k === void 0 && (P = !0,
            S(w),
            j(w)),
            k !== void 0 && w >= k ? C.next(w - k) : (!P && S(w),
            f)
        }
    }
}
const h1 = li(.42, 0, 1, 1)
  , m1 = li(0, 0, .58, 1)
  , um = li(.42, 0, .58, 1)
  , y1 = e => Array.isArray(e) && typeof e[0] != "number"
  , Jc = {
    linear: _e,
    easeIn: h1,
    easeInOut: um,
    easeOut: m1,
    circIn: du,
    circInOut: $h,
    circOut: bh,
    backIn: cu,
    backInOut: Bh,
    backOut: zh,
    anticipate: Uh
}
  , ed = e => {
    if (ou(e)) {
        jl(e.length === 4);
        const [t,n,r,i] = e;
        return li(t, n, r, i)
    } else if (typeof e == "string")
        return jl(Jc[e] !== void 0),
        Jc[e];
    return e
}
;
function g1(e, t, n) {
    const r = []
      , i = n || sm
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || _e : t;
            l = ai(a, l)
        }
        r.push(l)
    }
    return r
}
function v1(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (jl(o === t.length),
    o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const l = g1(t, r, i)
      , a = l.length
      , u = c => {
        if (s && c < e[0])
            return t[0];
        let d = 0;
        if (a > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = Yn(e[d], e[d + 1], c);
        return l[d](f)
    }
    ;
    return n ? c => u(xt(e[0], e[o - 1], c)) : u
}
function x1(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Yn(0, t, r);
        e.push(Q(n, 1, i))
    }
}
function w1(e) {
    const t = [0];
    return x1(t, e.length - 1),
    t
}
function S1(e, t) {
    return e.map(n => n * t)
}
function k1(e, t) {
    return e.map( () => t || um).splice(0, e.length - 1)
}
function Co({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = y1(r) ? r.map(ed) : ed(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = S1(n && n.length === t.length ? n : w1(t), e)
      , l = v1(s, t, {
        ease: Array.isArray(i) ? i : k1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (o.value = l(a),
        o.done = a >= e,
        o)
    }
}
const T1 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => b.update(t, !0),
        stop: () => Bt(t),
        now: () => fe.isProcessing ? fe.timestamp : lt.now()
    }
}
  , P1 = {
    decay: qc,
    inertia: qc,
    tween: Co,
    keyframes: Co,
    spring: am
}
  , C1 = e => e / 100;
class gu extends im {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: a} = this.options;
            a && a()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options
          , s = (i == null ? void 0 : i.KeyframeResolver) || mu
          , l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new s(o,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = this.options
          , l = iu(n) ? n : P1[n] || Co;
        let a, u;
        l !== Co && typeof t[0] != "number" && (a = ai(C1, sm(t[0], t[1])),
        t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Ch(c));
        const {calculatedDuration: d} = c
          , f = d + i
          , g = f * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: g
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: w} = this.options;
            return {
                done: !0,
                value: w[w.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: d} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: f, repeat: g, repeatType: v, repeatDelay: x, onUpdate: E} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const h = this.currentTime - f * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? h < 0 : h > c;
        this.currentTime = Math.max(h, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime
          , S = o;
        if (g) {
            const w = Math.min(this.currentTime, c) / d;
            let P = Math.floor(w)
              , M = w % 1;
            !M && w >= 1 && (M = 1),
            M === 1 && P--,
            P = Math.min(P, g + 1),
            !!(P % 2) && (v === "reverse" ? (M = 1 - M,
            x && (M -= x / d)) : v === "mirror" && (S = s)),
            m = xt(0, 1, M) * d
        }
        const k = p ? {
            done: !1,
            value: a[0]
        } : S.next(m);
        l && (k.value = l(k.value));
        let {done: C} = k;
        !p && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return j && i !== void 0 && (k.value = Yo(a, this.options, i)),
        E && E(k.value),
        j && this.finish(),
        k
    }
    get duration() {
        const {resolved: t} = this;
        return t ? ht(t.calculatedDuration) : 0
    }
    get time() {
        return ht(this.currentTime)
    }
    set time(t) {
        t = pt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = ht(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=T1, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const E1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function N1(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: l="easeInOut", times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = jh(l, i);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const j1 = ba( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Eo = 10
  , M1 = 2e4;
function A1(e) {
    return iu(e.type) || e.type === "spring" || !Nh(e.ease)
}
function R1(e, t) {
    const n = new gu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < M1; )
        r = n.sample(o),
        i.push(r.value),
        o += Eo;
    return {
        times: void 0,
        keyframes: i,
        duration: o - Eo,
        ease: "linear"
    }
}
const cm = {
    anticipate: Uh,
    backInOut: Bh,
    circInOut: $h
};
function D1(e) {
    return e in cm
}
class td extends im {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options;
        this.resolver = new rm(o, (s, l) => this.onKeyframesResolved(s, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: o, type: s, motionValue: l, name: a, startTime: u} = this.options;
        if (!l.owner || !l.owner.current)
            return !1;
        if (typeof o == "string" && ko() && D1(o) && (o = cm[o]),
        A1(this.options)) {
            const {onComplete: d, onUpdate: f, motionValue: g, element: v, ...x} = this.options
              , E = R1(t, x);
            t = E.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = E.duration,
            i = E.times,
            o = E.ease,
            s = "keyframes"
        }
        const c = N1(l.owner.current, a, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: o
        });
        return c.startTime = u ?? this.calcStartTime(),
        this.pendingTimeline ? (Fc(c, this.pendingTimeline),
        this.pendingTimeline = void 0) : c.onfinish = () => {
            const {onComplete: d} = this.options;
            l.set(Yo(t, this.options, n)),
            d && d(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: r,
            times: i,
            type: s,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return ht(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return ht(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = pt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return _e;
            const {animation: r} = n;
            Fc(r, t)
        }
        return _e
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: s, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: c, onComplete: d, element: f, ...g} = this.options
              , v = new gu({
                ...g,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: l,
                isGenerator: !0
            })
              , x = pt(this.time);
            u.setWithVelocity(v.sample(x - Eo).value, v.sample(x).value, Eo)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: a, transformTemplate: u} = n.owner.getProps();
        return j1() && r && E1.has(r) && !a && !u && !i && o !== "mirror" && s !== 0 && l !== "inertia"
    }
}
const L1 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , V1 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , _1 = {
    type: "keyframes",
    duration: .8
}
  , I1 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , O1 = (e, {keyframes: t}) => t.length > 2 ? _1 : hn.has(e) ? e.startsWith("scale") ? V1(t[1]) : L1 : I1;
function F1({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const vu = (e, t, n, r={}, i, o) => s => {
    const l = ru(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - pt(a);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            l.onUpdate && l.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    F1(l) || (c = {
        ...c,
        ...O1(e, c)
    }),
    c.duration && (c.duration = pt(c.duration)),
    c.repeatDelay && (c.repeatDelay = pt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (d = !0)),
    d && !o && t.get() !== void 0) {
        const f = Yo(c.keyframes, l);
        if (f !== void 0)
            return b.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            ),
            new iv([])
    }
    return !o && td.supports(c) ? new td(c) : new gu(c)
}
;
function z1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function dm(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null)
          , g = a[d];
        if (g === void 0 || c && z1(c, d))
            continue;
        const v = {
            delay: n,
            ...ru(s || {}, d)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const h = _h(e);
            if (h) {
                const p = window.MotionHandoffAnimation(h, d, b);
                p !== null && (v.startTime = p,
                x = !0)
            }
        }
        Dl(e, d),
        f.start(vu(d, f, g, e.shouldReduceMotion && Lh.has(d) ? {
            type: !1
        } : v, e, x));
        const E = f.animation;
        E && u.push(E)
    }
    return l && Promise.all(u).then( () => {
        b.update( () => {
            l && vv(e, l)
        }
        )
    }
    ),
    u
}
function zl(e, t, n={}) {
    var r;
    const i = Zr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(dm(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = o;
        return B1(e, t, c + u, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), l(n.delay)])
}
function B1(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(U1).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        s.push(zl(u, t, {
            ...o,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function U1(e, t) {
    return e.sortNodePosition(t)
}
function b1(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => zl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = zl(e, t, n);
    else {
        const i = typeof t == "function" ? Zr(e, t, n.custom) : t;
        r = Promise.all(dm(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
function fm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const $1 = Ha.length;
function pm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? pm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < $1; n++) {
        const r = Ha[n]
          , i = e.props[r];
        (Qr(i) || i === !1) && (t[r] = i)
    }
    return t
}
const H1 = [...$a].reverse()
  , W1 = $a.length;
function K1(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => b1(e, n, r)))
}
function G1(e) {
    let t = K1(e)
      , n = nd()
      , r = !0;
    const i = a => (u, c) => {
        var d;
        const f = Zr(e, c, a === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (f) {
            const {transition: g, transitionEnd: v, ...x} = f;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a) {
        const {props: u} = e
          , c = pm(e.parent) || {}
          , d = []
          , f = new Set;
        let g = {}
          , v = 1 / 0;
        for (let E = 0; E < W1; E++) {
            const h = H1[E]
              , p = n[h]
              , m = u[h] !== void 0 ? u[h] : c[h]
              , S = Qr(m)
              , k = h === a ? p.isActive : null;
            k === !1 && (v = E);
            let C = m === c[h] && m !== u[h] && S;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            p.protectedKeys = {
                ...g
            },
            !p.isActive && k === null || !m && !p.prevProp || Go(m) || typeof m == "boolean")
                continue;
            const j = Q1(p.prevProp, m);
            let w = j || h === a && p.isActive && !C && S || E > v && S
              , P = !1;
            const M = Array.isArray(m) ? m : [m];
            let F = M.reduce(i(h), {});
            k === !1 && (F = {});
            const {prevResolvedValues: B={}} = p
              , le = {
                ...B,
                ...F
            }
              , $ = ie => {
                w = !0,
                f.has(ie) && (P = !0,
                f.delete(ie)),
                p.needsAnimating[ie] = !0;
                const A = e.getValue(ie);
                A && (A.liveStyle = !1)
            }
            ;
            for (const ie in le) {
                const A = F[ie]
                  , V = B[ie];
                if (g.hasOwnProperty(ie))
                    continue;
                let _ = !1;
                Ml(A) && Ml(V) ? _ = !fm(A, V) : _ = A !== V,
                _ ? A != null ? $(ie) : f.add(ie) : A !== void 0 && f.has(ie) ? $(ie) : p.protectedKeys[ie] = !0
            }
            p.prevProp = m,
            p.prevResolvedValues = F,
            p.isActive && (g = {
                ...g,
                ...F
            }),
            r && e.blockInitialAnimation && (w = !1),
            w && (!(C && j) || P) && d.push(...M.map(ie => ({
                animation: ie,
                options: {
                    type: h
                }
            })))
        }
        if (f.size) {
            const E = {};
            if (typeof u.initial != "boolean") {
                const h = Zr(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                h && h.transition && (E.transition = h.transition)
            }
            f.forEach(h => {
                const p = e.getBaseTarget(h)
                  , m = e.getValue(h);
                m && (m.liveStyle = !0),
                E[h] = p ?? null
            }
            ),
            d.push({
                animation: E
            })
        }
        let x = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(d) : Promise.resolve()
    }
    function l(a, u) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(f => {
            var g;
            return (g = f.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const d = s(a);
        for (const f in n)
            n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = nd(),
            r = !0
        }
    }
}
function Q1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !fm(t, e) : !1
}
function Qt(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function nd() {
    return {
        animate: Qt(!0),
        whileInView: Qt(),
        whileHover: Qt(),
        whileTap: Qt(),
        whileDrag: Qt(),
        whileFocus: Qt(),
        exit: Qt()
    }
}
class Wt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class Y1 extends Wt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = G1(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Go(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let X1 = 0;
class Z1 extends Wt {
    constructor() {
        super(...arguments),
        this.id = X1++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const q1 = {
    animation: {
        Feature: Y1
    },
    exit: {
        Feature: Z1
    }
};
function ei(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function ui(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const J1 = e => t => su(t) && e(t, ui(t));
function Rn(e, t, n, r) {
    return ei(e, t, J1(n), r)
}
function hm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function ex({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function tx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
const mm = 1e-4
  , nx = 1 - mm
  , rx = 1 + mm
  , ym = .01
  , ix = 0 - ym
  , ox = 0 + ym;
function Te(e) {
    return e.max - e.min
}
function sx(e, t, n) {
    return Math.abs(e - t) <= n
}
function rd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Q(t.min, t.max, e.origin),
    e.scale = Te(n) / Te(t),
    e.translate = Q(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= nx && e.scale <= rx || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= ix && e.translate <= ox || isNaN(e.translate)) && (e.translate = 0)
}
function Mr(e, t, n, r) {
    rd(e.x, t.x, n.x, r ? r.originX : void 0),
    rd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function id(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Te(t)
}
function lx(e, t, n) {
    id(e.x, t.x, n.x),
    id(e.y, t.y, n.y)
}
function od(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Te(t)
}
function Ar(e, t, n) {
    od(e.x, t.x, n.x),
    od(e.y, t.y, n.y)
}
const sd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Dn = () => ({
    x: sd(),
    y: sd()
})
  , ld = () => ({
    min: 0,
    max: 0
})
  , ee = () => ({
    x: ld(),
    y: ld()
});
function Be(e) {
    return [e("x"), e("y")]
}
function Ms(e) {
    return e === void 0 || e === 1
}
function Bl({scale: e, scaleX: t, scaleY: n}) {
    return !Ms(e) || !Ms(t) || !Ms(n)
}
function qt(e) {
    return Bl(e) || gm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function gm(e) {
    return ad(e.x) || ad(e.y)
}
function ad(e) {
    return e && e !== "0%"
}
function No(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function ud(e, t, n, r, i) {
    return i !== void 0 && (e = No(e, i, r)),
    No(e, n, r) + t
}
function Ul(e, t=0, n=1, r, i) {
    e.min = ud(e.min, t, n, r, i),
    e.max = ud(e.max, t, n, r, i)
}
function vm(e, {x: t, y: n}) {
    Ul(e.x, t.translate, t.scale, t.originPoint),
    Ul(e.y, n.translate, n.scale, n.originPoint)
}
const cd = .999999999999
  , dd = 1.0000000000001;
function ax(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l],
        s = o.projectionDelta;
        const {visualElement: a} = o.options;
        a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Vn(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        vm(e, s)),
        r && qt(o.latestValues) && Vn(e, o.latestValues))
    }
    t.x < dd && t.x > cd && (t.x = 1),
    t.y < dd && t.y > cd && (t.y = 1)
}
function Ln(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function fd(e, t, n, r, i=.5) {
    const o = Q(e.min, e.max, i);
    Ul(e, t, n, o, r)
}
function Vn(e, t) {
    fd(e.x, t.x, t.scaleX, t.scale, t.originX),
    fd(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function xm(e, t) {
    return hm(tx(e.getBoundingClientRect(), t))
}
function ux(e, t, n) {
    const r = xm(e, n)
      , {scroll: i} = t;
    return i && (Ln(r.x, i.offset.x),
    Ln(r.y, i.offset.y)),
    r
}
const pd = (e, t) => Math.abs(e - t);
function cx(e, t) {
    const n = pd(e.x, t.x)
      , r = pd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class wm {
    constructor(t, n, {transformPagePoint: r, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const c = Rs(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , f = cx(c.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !f)
                return;
            const {point: g} = c
              , {timestamp: v} = fe;
            this.history.push({
                ...g,
                timestamp: v
            });
            const {onStart: x, onMove: E} = this.handlers;
            d || (x && x(this.lastMoveEvent, c),
            this.startEvent = this.lastMoveEvent),
            E && E(this.lastMoveEvent, c)
        }
        ,
        this.handlePointerMove = (c, d) => {
            if (c.target instanceof Element && c.target.hasPointerCapture && c.pointerId !== void 0)
                try {
                    if (!c.target.hasPointerCapture(c.pointerId))
                        return
                } catch {}
            this.lastMoveEvent = c,
            this.lastMoveEventInfo = As(d, this.transformPagePoint),
            b.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (c, d) => {
            To(c, "release"),
            this.end();
            const {onEnd: f, onSessionEnd: g, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Rs(c.type === "pointercancel" || c.type === "lostpointercapture" ? this.lastMoveEventInfo : As(d, this.transformPagePoint), this.history);
            this.startEvent && f && f(c, x),
            g && g(c, x)
        }
        ,
        !su(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r;
        const o = ui(t)
          , s = As(o, this.transformPagePoint)
          , {point: l} = s
          , {timestamp: a} = fe;
        this.history = [{
            ...l,
            timestamp: a
        }];
        const {onSessionStart: u} = n;
        u && u(t, Rs(s, this.history)),
        To(t, "set"),
        this.removeListeners = ai(Rn(t.currentTarget, "pointermove", this.handlePointerMove), Rn(t.currentTarget, "pointerup", this.handlePointerUp), Rn(t.currentTarget, "pointercancel", this.handlePointerUp), Rn(t.currentTarget, "lostpointercapture", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Bt(this.updatePoint)
    }
}
function As(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function hd(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Rs({point: e}, t) {
    return {
        point: e,
        delta: hd(e, Sm(t)),
        offset: hd(e, dx(t)),
        velocity: fx(t, .1)
    }
}
function dx(e) {
    return e[0]
}
function Sm(e) {
    return e[e.length - 1]
}
function fx(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Sm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > pt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = ht(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function px(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
}
function md(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function hx(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: md(e.x, n, i),
        y: md(e.y, t, r)
    }
}
function yd(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function mx(e, t) {
    return {
        x: yd(e.x, t.x),
        y: yd(e.y, t.y)
    }
}
function yx(e, t) {
    let n = .5;
    const r = Te(e)
      , i = Te(t);
    return i > r ? n = Yn(t.min, t.max - r, e.min) : r > i && (n = Yn(e.min, e.max - i, t.min)),
    xt(0, 1, n)
}
function gx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const bl = .35;
function vx(e=bl) {
    return e === !1 ? e = 0 : e === !0 && (e = bl),
    {
        x: gd(e, "left", "right"),
        y: gd(e, "top", "bottom")
    }
}
function gd(e, t, n) {
    return {
        min: vd(e, t),
        max: vd(e, n)
    }
}
function vd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const xx = new WeakMap;
class wx {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ee(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ui(c).point)
        }
          , o = (c, d) => {
            const {drag: f, dragPropagation: g, onDragStart: v} = this.getProps();
            if (f && !g && (this.openDragLock && this.openDragLock(),
            this.openDragLock = pv(f),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Be(E => {
                let h = this.getAxisMotionValue(E).get() || 0;
                if (st.test(h)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const m = p.layout.layoutBox[E];
                        m && (h = Te(m) * (parseFloat(h) / 100))
                    }
                }
                this.originPoint[E] = h
            }
            ),
            v && b.postRender( () => v(c, d)),
            Dl(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , s = (c, d) => {
            const {dragPropagation: f, dragDirectionLock: g, onDirectionLock: v, onDrag: x} = this.getProps();
            if (!f && !this.openDragLock)
                return;
            const {offset: E} = d;
            if (g && this.currentDirection === null) {
                this.currentDirection = Sx(E),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, E),
            this.updateAxis("y", d.point, E),
            this.visualElement.render(),
            x && x(c, d)
        }
          , l = (c, d) => this.stop(c, d)
          , a = () => Be(c => {
            var d;
            return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new wm(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && b.postRender( () => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Vi(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = px(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && Mn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = hx(i.layoutBox, n) : this.constraints = !1,
        this.elastic = vx(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Be(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = gx(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Mn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = ux(r, i.root, this.visualElement.getTransformPagePoint());
        let s = mx(i.layout.layoutBox, o);
        if (n) {
            const l = n(ex(s));
            this.hasMutatedConstraints = !!l,
            l && (s = hm(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Be(c => {
            if (!Vi(c, n, this.currentDirection))
                return;
            let d = a && a[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Dl(this.visualElement, t),
        r.start(vu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Be(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Be(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Be(n => {
            const {drag: r} = this.getProps();
            if (!Vi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - Q(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Mn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Be(s => {
            const l = this.getAxisMotionValue(s);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[s] = yx({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Be(s => {
            if (!Vi(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(Q(a, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        xx.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Rn(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Mn(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        b.read(r);
        const s = ei(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Be(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += a[c].translate,
                d.set(d.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            o(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=bl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Vi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Sx(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class kx extends Wt {
    constructor(t) {
        super(t),
        this.removeGroupControls = _e,
        this.removeListeners = _e,
        this.controls = new wx(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || _e
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const xd = e => (t, n) => {
    e && b.postRender( () => e(t, n))
}
;
class Tx extends Wt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = _e
    }
    onPointerDown(t) {
        this.session = new wm(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: xd(t),
            onStart: xd(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                i && b.postRender( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Rn(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Yi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function wd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const fr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (L.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = wd(e, t.target.x)
          , r = wd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Px = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Ut.parse(e);
        if (i.length > 5)
            return r;
        const o = Ut.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + s] /= l,
        i[1 + s] /= a;
        const u = Q(l, a, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
};
class Cx extends T.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        Rg(Ex),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Yi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || b.postRender( () => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Ka.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function km(e) {
    const [t,n] = oh()
      , r = T.useContext(Fa);
    return y.jsx(Cx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: T.useContext(fh),
        isPresent: t,
        safeToRemove: n
    })
}
const Ex = {
    borderRadius: {
        ...fr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: fr,
    borderTopRightRadius: fr,
    borderBottomLeftRadius: fr,
    borderBottomRightRadius: fr,
    boxShadow: Px
};
function Nx(e, t, n) {
    const r = we(e) ? e : qr(e);
    return r.start(vu("", r, t, n)),
    r.animation
}
function jx(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const Mx = (e, t) => e.depth - t.depth;
class Ax {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        lu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        au(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Mx),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Rx(e, t) {
    const n = lt.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (Bt(r),
        e(o - t))
    }
    ;
    return b.read(r, !0),
    () => Bt(r)
}
const Tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Dx = Tm.length
  , Sd = e => typeof e == "string" ? parseFloat(e) : e
  , kd = e => typeof e == "number" || L.test(e);
function Lx(e, t, n, r, i, o) {
    i ? (e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, Vx(r)),
    e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, _x(r))) : o && (e.opacity = Q(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < Dx; s++) {
        const l = `border${Tm[s]}Radius`;
        let a = Td(t, l)
          , u = Td(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || kd(a) === kd(u) ? (e[l] = Math.max(Q(Sd(a), Sd(u), r), 0),
        (st.test(u) || st.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r))
}
function Td(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Vx = Pm(0, .5, bh)
  , _x = Pm(.5, .95, _e);
function Pm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Yn(e, t, r))
}
function Pd(e, t) {
    e.min = t.min,
    e.max = t.max
}
function ze(e, t) {
    Pd(e.x, t.x),
    Pd(e.y, t.y)
}
function Cd(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Ed(e, t, n, r, i) {
    return e -= t,
    e = No(e, 1 / n, r),
    i !== void 0 && (e = No(e, 1 / i, r)),
    e
}
function Ix(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (st.test(t) && (t = parseFloat(t),
    t = Q(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = Q(o.min, o.max, r);
    e === o && (l -= t),
    e.min = Ed(e.min, t, n, l, i),
    e.max = Ed(e.max, t, n, l, i)
}
function Nd(e, t, [n,r,i], o, s) {
    Ix(e, t[n], t[r], t[i], t.scale, o, s)
}
const Ox = ["x", "scaleX", "originX"]
  , Fx = ["y", "scaleY", "originY"];
function jd(e, t, n, r) {
    Nd(e.x, t, Ox, n ? n.x : void 0, r ? r.x : void 0),
    Nd(e.y, t, Fx, n ? n.y : void 0, r ? r.y : void 0)
}
function Md(e) {
    return e.translate === 0 && e.scale === 1
}
function Cm(e) {
    return Md(e.x) && Md(e.y)
}
function Ad(e, t) {
    return e.min === t.min && e.max === t.max
}
function zx(e, t) {
    return Ad(e.x, t.x) && Ad(e.y, t.y)
}
function Rd(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Em(e, t) {
    return Rd(e.x, t.x) && Rd(e.y, t.y)
}
function Dd(e) {
    return Te(e.x) / Te(e.y)
}
function Ld(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Bx {
    constructor() {
        this.members = []
    }
    add(t) {
        lu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (au(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Ux(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: g, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        g && (r += `skewX(${g}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Ds = ["", "X", "Y", "Z"]
  , bx = {
    visibility: "hidden"
}
  , Vd = 1e3;
let $x = 0;
function Ls(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Nm(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = _h(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", b, !(i || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Nm(r)
}
function jm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, l=t == null ? void 0 : t()) {
            this.id = $x++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(Kx),
                this.nodes.forEach(Zx),
                this.nodes.forEach(qx),
                this.nodes.forEach(Gx)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ax)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new uu),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = jx(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = Rx(f, 250),
                    Yi.hasAnimatedSinceResize && (Yi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Id))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: f, hasRelativeLayoutChanged: g, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || rw
                  , {onLayoutAnimationStart: E, onLayoutAnimationComplete: h} = c.getProps()
                  , p = !this.targetLayout || !Em(this.targetLayout, v)
                  , m = !f && g;
                if (this.options.layoutRoot || this.resumeFrom || m || f && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, m);
                    const S = {
                        ...ru(x, "layout"),
                        onPlay: E,
                        onComplete: h
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0,
                    S.type = !1),
                    this.startAnimation(S)
                } else
                    f || Id(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Bt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Jx),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Nm(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(_d);
                return
            }
            this.isUpdating || this.nodes.forEach(Yx),
            this.isUpdating = !1,
            this.nodes.forEach(Xx),
            this.nodes.forEach(Hx),
            this.nodes.forEach(Wx),
            this.clearAllSnapshots();
            const l = lt.now();
            fe.delta = xt(0, 1e3 / 60, l - fe.timestamp),
            fe.timestamp = l,
            fe.isProcessing = !0,
            Ts.update.process(fe),
            Ts.preRender.process(fe),
            Ts.render.process(fe),
            fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ka.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Qx),
            this.sharedNodes.forEach(ew)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            b.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            b.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ee(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !Cm(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (l || qt(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            iw(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {visualElement: l} = this.options;
            if (!l)
                return ee();
            const a = l.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(ow))) {
                const {scroll: c} = this.root;
                c && (Ln(a.x, c.offset.x),
                Ln(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = ee();
            if (ze(a, s),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && ze(a, s),
                Ln(a.x, d.offset.x),
                Ln(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, l=!1) {
            const a = ee();
            ze(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Vn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                qt(c.latestValues) && Vn(a, c.latestValues)
            }
            return qt(this.latestValues) && Vn(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = ee();
            ze(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !qt(u.latestValues))
                    continue;
                Bl(u.latestValues) && u.updateSnapshot();
                const c = ee()
                  , d = u.measurePageBox();
                ze(c, d),
                jd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return qt(this.latestValues) && jd(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: d, layoutId: f} = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = fe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ee(),
                    this.relativeTargetOrigin = ee(),
                    Ar(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ee(),
                this.targetWithTransforms = ee()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                lx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ze(this.target, this.layout.layoutBox),
                vm(this.target, this.targetDelta)) : ze(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const g = this.getClosestProjectingParent();
                    g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ee(),
                    this.relativeTargetOrigin = ee(),
                    Ar(this.relativeTargetOrigin, this.target, g.target),
                    ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Bl(this.parent.latestValues) || gm(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === fe.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || d))
                return;
            ze(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , g = this.treeScale.y;
            ax(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = ee());
            const {target: v} = l;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Cd(this.prevProjectionDelta.x, this.projectionDelta.x),
            Cd(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== f || this.treeScale.y !== g || !Ld(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ld(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Dn(),
            this.projectionDelta = Dn(),
            this.projectionDeltaWithTransform = Dn()
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = Dn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const f = ee()
              , g = a ? a.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , x = g !== v
              , E = this.getStack()
              , h = !E || E.members.length <= 1
              , p = !!(x && !h && this.options.crossfade === !0 && !this.path.some(nw));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = S => {
                const k = S / 1e3;
                Od(d.x, s.x, k),
                Od(d.y, s.y, k),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ar(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                tw(this.relativeTarget, this.relativeTargetOrigin, f, k),
                m && zx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = ee()),
                ze(m, this.relativeTarget)),
                x && (this.animationValues = c,
                Lx(c, u, this.latestValues, k, p, h)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Bt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = b.update( () => {
                Yi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Nx(0, Vd, {
                    ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vd),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && Mm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ee();
                    const d = Te(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + d;
                    const f = Te(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + f
                }
                ze(l, a),
                Vn(l, c),
                Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Bx),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && Ls("z", s, u, this.animationValues);
            for (let c = 0; c < Ds.length; c++)
                Ls(`rotate${Ds[c]}`, s, u, this.animationValues),
                Ls(`skew${Ds[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return bx;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Gi(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                x.pointerEvents = Gi(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !qt(this.latestValues) && (x.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                x
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Ux(this.projectionDeltaWithTransform, this.treeScale, f),
            c && (u.transform = c(f, u.transform));
            const {x: g, y: v} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`,
            d.animationValues ? u.opacity = d === this ? (a = (l = f.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const x in Yr) {
                if (f[x] === void 0)
                    continue;
                const {correct: E, applyTo: h, isCSSVariable: p} = Yr[x]
                  , m = u.transform === "none" ? f[x] : E(f[x], d);
                if (h) {
                    const S = h.length;
                    for (let k = 0; k < S; k++)
                        u[h[k]] = m
                } else
                    p ? this.options.visualElement.renderState.vars[x] = m : u[x] = m
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Gi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(_d),
            this.root.sharedNodes.clear()
        }
    }
}
function Hx(e) {
    e.updateLayout()
}
function Wx(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? Be(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , g = Te(f);
            f.min = r[d].min,
            f.max = f.min + g
        }
        ) : Mm(o, n.layoutBox, r) && Be(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , g = Te(r[d]);
            f.max = f.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + g)
        }
        );
        const l = Dn();
        Mr(l, r, n.layoutBox);
        const a = Dn();
        s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
        const u = !Cm(l);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: g} = d;
                if (f && g) {
                    const v = ee();
                    Ar(v, n.layoutBox, f.layoutBox);
                    const x = ee();
                    Ar(x, r, g.layoutBox),
                    Em(v, x) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Kx(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Gx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Qx(e) {
    e.clearSnapshot()
}
function _d(e) {
    e.clearMeasurements()
}
function Yx(e) {
    e.isLayoutDirty = !1
}
function Xx(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Id(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Zx(e) {
    e.resolveTargetDelta()
}
function qx(e) {
    e.calcProjection()
}
function Jx(e) {
    e.resetSkewAndRotation()
}
function ew(e) {
    e.removeLeadSnapshot()
}
function Od(e, t, n) {
    e.translate = Q(t.translate, 0, n),
    e.scale = Q(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Fd(e, t, n, r) {
    e.min = Q(t.min, n.min, r),
    e.max = Q(t.max, n.max, r)
}
function tw(e, t, n, r) {
    Fd(e.x, t.x, n.x, r),
    Fd(e.y, t.y, n.y, r)
}
function nw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const rw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , zd = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Bd = zd("applewebkit/") && !zd("chrome/") ? Math.round : _e;
function Ud(e) {
    e.min = Bd(e.min),
    e.max = Bd(e.max)
}
function iw(e) {
    Ud(e.x),
    Ud(e.y)
}
function Mm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !sx(Dd(t), Dd(n), .2)
}
function ow(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const sw = jm({
    attachResizeListener: (e, t) => ei(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Vs = {
    current: void 0
}
  , Am = jm({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Vs.current) {
            const e = new sw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Vs.current = e
        }
        return Vs.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , lw = {
    pan: {
        Feature: Tx
    },
    drag: {
        Feature: kx,
        ProjectionNode: Am,
        MeasureLayout: km
    }
};
function bd(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , o = r[i];
    o && b.postRender( () => o(t, ui(t)))
}
class aw extends Wt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = lv(t, (n, r) => (bd(this.node, r, "Start"),
        i => bd(this.node, i, "End"))))
    }
    unmount() {}
}
class uw extends Wt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ai(ei(this.node.current, "focus", () => this.onFocus()), ei(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function $d(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , o = r[i];
    o && b.postRender( () => o(t, ui(t)))
}
class cw extends Wt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = dv(t, (n, r) => ($d(this.node, r, "Start"),
        (i, {success: o}) => $d(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const $l = new WeakMap
  , _s = new WeakMap
  , dw = e => {
    const t = $l.get(e.target);
    t && t(e)
}
  , fw = e => {
    e.forEach(dw)
}
;
function pw({root: e, ...t}) {
    const n = e || document;
    _s.has(n) || _s.set(n, {});
    const r = _s.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(fw,{
        root: e,
        ...t
    })),
    r[i]
}
function hw(e, t, n) {
    const r = pw(t);
    return $l.set(e, n),
    r.observe(e),
    () => {
        $l.delete(e),
        r.unobserve(e)
    }
}
const mw = {
    some: 0,
    all: 1
};
class yw extends Wt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : mw[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(a)
        }
        ;
        return hw(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(gw(t, n)) && this.startObserver()
    }
    unmount() {}
}
function gw({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const vw = {
    inView: {
        Feature: yw
    },
    tap: {
        Feature: cw
    },
    focus: {
        Feature: uw
    },
    hover: {
        Feature: aw
    }
}
  , xw = {
    layout: {
        ProjectionNode: Am,
        MeasureLayout: km
    }
}
  , jo = {
    current: null
}
  , xu = {
    current: !1
};
function Rm() {
    if (xu.current = !0,
    !!Ua)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => jo.current = e.matches;
            e.addListener(t),
            t()
        } else
            jo.current = !1
}
const ww = [...nm, ve, Ut]
  , Sw = e => ww.find(tm(e))
  , kw = new WeakMap;
function Tw(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , o = n[r];
        if (we(i))
            e.addValue(r, i);
        else if (we(o))
            e.addValue(r, qr(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, qr(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Hd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Pw {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = mu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const g = lt.now();
            this.renderScheduledAt < g && (this.renderScheduledAt = g,
            b.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: u, onUpdate: c} = s;
        this.onUpdate = c,
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Qo(n),
        this.isVariantNode = ch(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const g in f) {
            const v = f[g];
            a[g] !== void 0 && we(v) && v.set(a[g], !1)
        }
    }
    mount(t) {
        this.current = t,
        kw.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        xu.current || Rm(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jo.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Bt(this.notifyUpdate),
        Bt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = hn.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && b.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Xn) {
            const n = Xn[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Hd.length; r++) {
            const i = Hd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = Tw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = qr(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Jh(i) || Hh(i)) ? i = parseFloat(i) : !Sw(i) && Ut.test(n) && (i = Xh(t, n)),
        this.setBaseTarget(t, we(i) ? i.get() : i)),
        we(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = tu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !we(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new uu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Dm extends Pw {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = rm
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        we(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function Cw(e) {
    return window.getComputedStyle(e)
}
class Ew extends Dm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Sh
    }
    readValueFromInstance(t, n) {
        if (hn.has(n)) {
            const r = hu(n);
            return r && r.default || 0
        } else {
            const r = Cw(t)
              , i = (Ga(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return xm(t, n)
    }
    build(t, n, r) {
        Xa(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return nu(t, n, r)
    }
}
class Nw extends Dm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ee,
        this.updateDimensions = () => {
            this.current && !this.renderState.dimensions && wh(this.current, this.renderState)
        }
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (hn.has(n)) {
            const r = hu(n);
            return r && r.default || 0
        }
        return n = kh.has(n) ? n : Wa(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Ph(t, n, r)
    }
    onBindTransform() {
        this.current && !this.renderState.dimensions && b.postRender(this.updateDimensions)
    }
    build(t, n, r) {
        Ja(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Th(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = eu(t.tagName),
        super.mount(t)
    }
}
const jw = (e, t) => qa(e) ? new Nw(t) : new Ew(t,{
    allowProjection: e !== T.Fragment
})
  , Mw = tv({
    ...q1,
    ...vw,
    ...lw,
    ...xw
}, jw)
  , D = gg(Mw);
function ci() {
    !xu.current && Rm();
    const [e] = T.useState(jo.current);
    return e
}
const Aw = {
    some: 0,
    all: 1
};
function Rw(e, t, {root: n, margin: r, amount: i="some"}={}) {
    const o = Ah(e)
      , s = new WeakMap
      , l = u => {
        u.forEach(c => {
            const d = s.get(c.target);
            if (c.isIntersecting !== !!d)
                if (c.isIntersecting) {
                    const f = t(c.target, c);
                    typeof f == "function" ? s.set(c.target, f) : a.unobserve(c.target)
                } else
                    typeof d == "function" && (d(c),
                    s.delete(c.target))
        }
        )
    }
      , a = new IntersectionObserver(l,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Aw[i]
    });
    return o.forEach(u => a.observe(u)),
    () => a.disconnect()
}
function Dw(e, {root: t, margin: n, amount: r, once: i=!1, initial: o=!1}={}) {
    const [s,l] = T.useState(o);
    return T.useEffect( () => {
        if (!e.current || i && s)
            return;
        const a = () => (l(!0),
        i ? void 0 : () => l(!1))
          , u = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return Rw(e.current, a, u)
    }
    , [t, e, n, i, r]),
    s
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , rr = (e, t) => {
    const n = T.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: o=2, absoluteStrokeWidth: s, className: l="", children: a, ...u}, c) => T.createElement("svg", {
        ref: c,
        ...Lw,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: ["lucide", `lucide-${Vw(e)}`, l].join(" "),
        ...u
    }, [...t.map( ([d,f]) => T.createElement(d, f)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = rr("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = rr("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = rr("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = rr("Music", [["path", {
    d: "M9 18V5l12-2v13",
    key: "1jmyc2"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["circle", {
    cx: "18",
    cy: "16",
    r: "3",
    key: "1hluhg"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = rr("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = rr("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , zw = "assets/i-miss-you-i-m-sorry.mp3"
  , Bw = "assets/marry-me-vnsu-you'll-never-have-to-br-alone.mp3"
  , Uw = "assets/ghne-dina-te-russi-bethi.mp3"
  , bw = "assets/pic1-DDdxw6b7.gif"
  , $w = "assets/pic2-BrXUnpVB.jpg"
  , Hw = "assets/pic3-CExUpC0S.jpg"
  , Yt = ({children: e, animation: t="fade", delay: n=0, duration: r=.5, threshold: i=.1, once: o=!0}) => {
    const s = T.useRef(null)
      , l = Dw(s, {
        once: o,
        amount: i
    })
      , a = {
        hidden: {
            opacity: 0,
            y: t === "slide" ? 50 : 0,
            scale: t === "zoom" ? .8 : 1,
            rotateX: t === "flip" ? 90 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: r,
                delay: n,
                ease: "easeOut"
            }
        }
    };
    return y.jsx(D.div, {
        ref: s,
        initial: "hidden",
        animate: l ? "visible" : "hidden",
        variants: a,
        children: e
    })
}
  , Lm = "assets/hellokitty-M_AUT0nT.gif"
  , Ww = ({onComplete: e, onClose: t}) => {
    const [n,r] = T.useState([])
      , [i,o] = T.useState([])
      , [s,l] = T.useState(0)
      , [a,u] = T.useState(30)
      , [c,d] = T.useState(!1)
      , [f,g] = T.useState(!1)
      , [v,x] = T.useState("")
      , [E,h] = T.useState(!1)
      , p = T.useRef(null)
      , m = 15
      , S = T.useRef(null)
      , k = T.useRef(null)
      , C = () => {
        d(!0),
        l(0),
        u(30),
        g(!1),
        r([]),
        o([]),
        x(""),
        h(!1)
    }
    ;
    T.useEffect( () => {
        if (!c || f)
            return;
        const P = setInterval( () => {
            u(M => M <= 1 ? (clearInterval(P),
            g(!0),
            0) : M - 1)
        }
        , 1e3);
        return () => clearInterval(P)
    }
    , [c, f]),
    T.useEffect( () => {
        if (!c || f)
            return;
        const P = () => {
            if (!p.current)
                return;
            const M = p.current.offsetWidth
              , F = {
                id: Date.now(),
                x: Math.random() * (M - 50),
                y: -50,
                speed: 1 + Math.random() * 1.5
            };
            r(B => [...B, F])
        }
        ;
        return S.current = setInterval(P, 1e3),
        () => {
            S.current && clearInterval(S.current)
        }
    }
    , [c, f]),
    T.useEffect( () => {
        if (!c || f)
            return;
        const P = () => {
            if (!p.current)
                return;
            const M = p.current.offsetWidth
              , F = {
                id: Date.now(),
                x: Math.random() * (M - 60),
                y: -60,
                speed: 1.2 + Math.random()
            };
            o(B => [...B, F])
        }
        ;
        return k.current = setInterval(P, 3500),
        () => {
            k.current && clearInterval(k.current)
        }
    }
    , [c, f]),
    T.useEffect( () => {
        if (!c || f)
            return;
        const F = setInterval( () => {
            if (!p.current)
                return;
            const B = p.current.offsetHeight;
            r(le => le.map($ => ({
                ...$,
                y: $.y + $.speed
            })).filter($ => $.y < B + 50)),
            o(le => le.map($ => ({
                ...$,
                y: $.y + $.speed
            })).filter($ => $.y < B + 60))
        }
        , 1e3 / 60);
        return () => clearInterval(F)
    }
    , [c, f]),
    T.useEffect( () => {
        s >= m && !f && (g(!0),
        e())
    }
    , [s, f, e]),
    T.useEffect( () => {
        if (E) {
            const P = setTimeout( () => {
                h(!1)
            }
            , 1500);
            return () => clearTimeout(P)
        }
    }
    , [E]);
    const j = (P, M) => {
        M.stopPropagation();
        const F = M.currentTarget;
        F ? (F.classList.add("scale-150", "opacity-0"),
        setTimeout( () => {
            r(B => B.filter(le => le.id !== P)),
            l(B => B + 1)
        }
        , 150)) : (r(B => B.filter(le => le.id !== P)),
        l(B => B + 1))
    }
      , w = (P, M) => {
        M.stopPropagation();
        const F = [{
            text: "Bonus +3 points!",
            action: () => l($ => $ + 3)
        }, {
            text: "Bonus +5 seconds!",
            action: () => u($ => $ + 5)
        }, {
            text: "Double points for next 3 hearts!",
            action: () => {}
        }]
          , B = F[Math.floor(Math.random() * F.length)];
        x(B.text),
        h(!0),
        B.action();
        const le = M.currentTarget;
        le ? (le.classList.add("scale-150", "opacity-0"),
        setTimeout( () => {
            o($ => $.filter(mn => mn.id !== P))
        }
        , 150)) : o($ => $.filter(mn => mn.id !== P))
    }
    ;
    return y.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4",
        onClick: P => P.stopPropagation(),
        children: y.jsxs(D.div, {
            className: "bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl shadow-2xl p-6 max-w-md w-full relative",
            initial: {
                scale: .8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .8,
                opacity: 0
            },
            transition: {
                duration: .4
            },
            onClick: P => P.stopPropagation(),
            children: [y.jsx("button", {
                onClick: P => {
                    P.stopPropagation(),
                    t()
                }
                ,
                className: "absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10",
                children: y.jsx("svg", {
                    className: "w-5 h-5 text-gray-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: y.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })
                })
            }), y.jsx("h2", {
                className: "text-2xl font-bold text-center text-pink-600 mb-3 font-comic",
                children: f ? "Game Complete!" : "Catch Hearts & Hello Kitty!"
            }), !c && !f ? y.jsxs("div", {
                className: "text-center space-y-4",
                children: [y.jsxs("p", {
                    className: "text-gray-700 font-comic",
                    children: ["Catch ", m, " hearts before time runs out! Look out for Hello Kitty for special bonuses!"]
                }), y.jsx(D.button, {
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    className: "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full font-comic shadow-md",
                    onClick: P => {
                        P.stopPropagation(),
                        C()
                    }
                    ,
                    children: "Start Game"
                })]
            }) : f ? y.jsx("div", {
                className: "text-center space-y-4",
                children: s >= m ? y.jsxs("div", {
                    className: "space-y-4",
                    children: [y.jsx("div", {
                        className: "flex justify-center",
                        children: y.jsx(_w, {
                            className: "w-16 h-16 text-yellow-500"
                        })
                    }), y.jsxs("p", {
                        className: "text-lg font-comic text-pink-600 font-bold",
                        children: ["You did it! You caught ", s, " hearts!"]
                    }), y.jsx("div", {
                        className: "bg-white p-4 rounded-lg border-2 border-dashed border-pink-300",
                        children: y.jsx("p", {
                            className: "font-comic text-gray-700",
                            children: '"Thank you for playing! I hope this little game shows how much I care. My heart is yours to catch, always. I promise to do better every day."'
                        })
                    })]
                }) : y.jsxs("div", {
                    className: "space-y-4",
                    children: [y.jsxs("p", {
                        className: "font-comic text-gray-700",
                        children: ["You caught ", s, " hearts! Try again to reach ", m, " hearts!"]
                    }), y.jsx(D.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        className: "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-5 rounded-full font-comic shadow-md",
                        onClick: P => {
                            P.stopPropagation(),
                            C()
                        }
                        ,
                        children: "Try Again"
                    })]
                })
            }) : y.jsxs("div", {
                className: "space-y-4",
                children: [y.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [y.jsx("div", {
                        className: "bg-white px-4 py-2 rounded-full shadow",
                        children: y.jsxs("span", {
                            className: "font-comic font-bold text-pink-600",
                            children: ["Score: ", s, "/", m]
                        })
                    }), y.jsx("div", {
                        className: "bg-white px-4 py-2 rounded-full shadow",
                        children: y.jsxs("span", {
                            className: "font-comic font-bold text-blue-600",
                            children: ["Time: ", a, "s"]
                        })
                    })]
                }), y.jsxs("div", {
                    ref: p,
                    className: "bg-gradient-to-b from-blue-100/50 to-pink-100/50 rounded-lg h-[300px] relative overflow-hidden border-2 border-white",
                    onClick: P => P.stopPropagation(),
                    children: [E && y.jsx(D.div, {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 px-5 py-2 rounded-full shadow-lg z-20",
                        initial: {
                            scale: .5,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 1.5,
                            opacity: 0
                        },
                        children: y.jsx("p", {
                            className: "text-pink-600 font-comic font-bold",
                            children: v
                        })
                    }), n.map(P => y.jsx(D.div, {
                        className: "absolute cursor-pointer transition-all duration-150",
                        style: {
                            left: P.x,
                            top: P.y,
                            padding: "10px"
                        },
                        animate: {
                            rotate: [0, 10, -10, 0]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 2
                        },
                        onClick: M => j(P.id, M),
                        children: y.jsx(pe, {
                            className: "w-10 h-10 text-pink-500 filter drop-shadow-md",
                            fill: "currentColor"
                        })
                    }, P.id)), i.map(P => y.jsx(D.div, {
                        className: "absolute cursor-pointer transition-all duration-150",
                        style: {
                            left: P.x,
                            top: P.y,
                            padding: "10px",
                            width: "100px",
                            height: "100px"
                        },
                        animate: {
                            rotate: [0, 10, -10, 0]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 2
                        },
                        onClick: M => w(P.id, M),
                        children: y.jsx("img", {
                            src: Lm,
                            alt: "Hello Kitty",
                            className: "w-full h-full object-contain"
                        })
                    }, P.id))]
                })]
            })]
        })
    })
}
  , Kw = "assets/intro-BWYhNUbz.gif"
  , Gw = "assets/aeroplane-DV-cHq5m.png"
  , ne = {
    greeting: {
        name: "Hieieieieiie",
        message: "I'm Sollyyyyyy"
    },
    stickyNotes: ["I'm truly sorry!", "Forgive me, please.", "I regret my mistakes.", "Let's start fresh.", "My apology is sincere."],
    letter: {
        title: "Read My Apology Letter 💌",
        subtitle: "Click to hear my sincere apology",
        recipient: "Dear Vnshu Ji",
        paragraphs: ["I want to offer my sincerest apologies for the ways I have let you down...", "Please forgive me for my mistakes."],
        signature: `Yours sincerely,
Loku Ji`
    },
    game: {
        title: "Play a Game!",
        subtitle: "Catch some hearts to unlock a special message",
        completionMessage: "You've completed the game! ✨ But you can play again if you want!",
        winMessage: "You caught my heart! Just like how you've captured my real heart forever..."
    },
    panels: [{
        text: "I know I've been distant, and I'm truly sorry...",
        caption: "I hope you can forgive me."
    }, {
        text: "I regret my careless mistakes and the pain they caused.",
        caption: "I'm truly sorry and promise to do better."
    }, {
        text: "This is us btw",
        caption: "Don't be angyyyyyyy ."
    }],
    poem: {
        title: "My Apology in Verse ✨",
        lines: ["I'm sorry for the silent hours,", "For the moments I let you down,", "Regret fills every passing minute,", "In every lost and lonely sound.", "", "I promise to mend what I have broken,", "To cherish you in every way,", "Please forgive my thoughtless errors,", "And help me find a brighter day."]
    },
    ui: {
        musicHint: "Click to Play music 🎵",
        envelopeHint: "Click to open",
        envelopePreview: "💌 A letter for you..."
    }
}
  , Qw = T.memo( ({delay: e=0, onComplete: t}) => {
    const [n,r] = T.useState([])
      , [i,o] = T.useState(!0)
      , s = ci();
    if (T.useEffect( () => {
        const a = setInterval( () => {
            const d = {
                id: Date.now() + Math.random(),
                delay: Math.random() * .3
            };
            r(f => [...f.slice(-8), d]),
            setTimeout( () => {
                r(f => f.filter(g => g.id !== d.id))
            }
            , 2e3)
        }
        , 250)
          , u = setTimeout( () => {
            clearInterval(a)
        }
        , 5e3)
          , c = setTimeout( () => {
            o(!1),
            t && t()
        }
        , 6e3);
        return () => {
            clearInterval(a),
            clearTimeout(u),
            clearTimeout(c)
        }
    }
    , [t]),
    !i)
        return null;
    const l = s ? {
        initial: {
            x: -150,
            y: 200,
            opacity: 0
        },
        animate: {
            x: 1200,
            y: 200,
            opacity: 1
        }
    } : {
        initial: {
            x: -150,
            y: typeof window < "u" ? window.innerHeight * .2 : 200,
            rotate: 15,
            scale: 1
        },
        animate: {
            x: typeof window < "u" ? window.innerWidth + 150 : 1200,
            y: typeof window < "u" ? [window.innerHeight * .2, window.innerHeight * .15, window.innerHeight * .35] : [200, 150, 350],
            rotate: [15, 5, 25],
            scale: [1, 1.2, 1.1]
        }
    };
    return y.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-30 overflow-hidden",
        children: [y.jsx(D.div, {
            className: "absolute",
            initial: l.initial,
            animate: l.animate,
            transition: {
                duration: s ? 4 : 6,
                ease: "easeInOut"
            },
            children: y.jsxs("div", {
                className: "relative",
                children: [y.jsx(D.img, {
                    src: Gw,
                    alt: "Paper Airplane",
                    className: "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain",
                    style: {
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
                    }
                }), !s && y.jsx(y.Fragment, {
                    children: y.jsx(D.div, {
                        className: "absolute -left-8 top-1/2 transform -translate-y-1/2",
                        animate: {
                            opacity: [0, 1, 0],
                            scale: [.8, 1.2, .8]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: 1 / 0
                        },
                        children: y.jsx(Nt, {
                            className: "w-6 h-6 text-yellow-400"
                        })
                    })
                })]
            })
        }), !s && n.slice(-5).map(a => y.jsx(D.div, {
            className: "absolute",
            initial: {
                x: -100,
                y: typeof window < "u" ? window.innerHeight * .2 + Math.random() * 60 - 30 : 200,
                opacity: 1,
                scale: .4
            },
            animate: {
                x: typeof window < "u" ? window.innerWidth * .5 : 600,
                y: typeof window < "u" ? window.innerHeight * .2 + Math.random() * 150 - 75 : 200,
                opacity: 0,
                scale: [.4, .8, 0]
            },
            transition: {
                duration: 2,
                delay: a.delay,
                ease: "easeOut"
            },
            children: y.jsx(pe, {
                className: "w-4 h-4 text-pink-400",
                fill: "currentColor"
            })
        }, a.id)), !s && y.jsx(D.div, {
            className: "absolute",
            initial: {
                x: -80,
                y: typeof window < "u" ? window.innerHeight * .2 - 40 : 160,
                opacity: 0
            },
            animate: {
                x: typeof window < "u" ? window.innerWidth * .4 : 480,
                y: typeof window < "u" ? window.innerHeight * .2 - 40 : 160,
                opacity: [0, 1, 1, 0]
            },
            transition: {
                duration: 4,
                delay: 1
            },
            children: y.jsx("div", {
                className: "bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-pink-200",
                children: y.jsx("p", {
                    className: "text-xs md:text-sm font-comic text-pink-600 font-semibold whitespace-nowrap",
                    children: "💕 A special message is coming your way..."
                })
            })
        })]
    })
}
)
  , Yw = T.memo( () => ci() ? null : y.jsx(D.div, {
    className: "absolute inset-0",
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 1
    },
    children: [...Array(10)].map( (t, n) => y.jsx(D.div, {
        className: "absolute w-2 h-2 bg-pink-300 rounded-full opacity-20",
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        },
        initial: {
            opacity: 0,
            scale: 0
        },
        animate: {
            scale: [0, 1, 0],
            opacity: [0, .4, 0]
        },
        transition: {
            duration: 6 + Math.random() * 2,
            repeat: 1 / 0,
            delay: Math.random() * 5 + 1
        }
    }, n))
}))
  , Xw = T.memo( ({onOpenComplete: e}) => {
    const [t,n] = T.useState(!1)
      , [r,i] = T.useState(!1)
      , [o,s] = T.useState(!1)
      , [l,a] = T.useState(!1)
      , [u,c] = T.useState(!1)
      , [d,f] = T.useState(!1)
      , g = ci();
    T.useEffect( () => {
        const E = setTimeout( () => {
            s(!0),
            f(!0)
        }
        , 100);
        return () => clearTimeout(E)
    }
    , []);
    const v = T.useCallback( () => {
        a(!0),
        f(!1),
        setTimeout( () => c(!0), 200)
    }
    , [])
      , x = T.useCallback( () => {
        !t && l && (n(!0),
        setTimeout( () => i(!0), 600),
        setTimeout( () => e(), 2e3))
    }
    , [t, l, e]);
    return y.jsxs(D.div, {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden px-4",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: .6
        },
        children: [y.jsx(Yw, {}), y.jsx(Un, {
            children: o && !l && y.jsx(Qw, {
                delay: 0,
                onComplete: v
            })
        }), y.jsx(Un, {
            mode: "wait",
            children: d && y.jsx(D.div, {
                className: "absolute inset-0 flex items-center justify-center z-20 px-4",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20,
                    transition: {
                        duration: .3
                    }
                },
                transition: {
                    duration: .6
                },
                children: y.jsxs("div", {
                    className: "text-center max-w-4xl mx-auto",
                    children: [y.jsx(D.div, {
                        className: "mb-6 sm:mb-8 flex justify-center",
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .8
                        },
                        children: y.jsx("img", {
                            src: Lm,
                            alt: "Special animation",
                            className: "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain",
                            style: {
                                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))"
                            }
                        })
                    }), y.jsx(D.h1, {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 font-comic leading-tight",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        children: "Something Special is Coming..."
                    }), !g && y.jsx(D.div, {
                        className: "flex justify-center mt-4 sm:mt-6",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            rotate: [0, 10, -10, 0]
                        },
                        transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            delay: .5
                        },
                        children: y.jsx(Nt, {
                            className: "w-8 h-8 sm:w-10 sm:h-10 text-yellow-400"
                        })
                    })]
                })
            })
        }), y.jsx(Un, {
            mode: "wait",
            children: u && y.jsxs(D.div, {
                className: "cursor-pointer relative z-20",
                onClick: x,
                initial: {
                    opacity: 0,
                    scale: .8,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .8,
                    y: -50
                },
                transition: {
                    duration: .6,
                    type: "spring",
                    bounce: .2
                },
                whileHover: {
                    scale: g ? 1 : 1.05
                },
                children: [!g && y.jsx(D.div, {
                    className: "absolute -top-24 sm:-top-28 md:-top-32 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 z-30",
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: [-10, 0, -10],
                        opacity: 1
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        repeatType: "reverse"
                    },
                    children: y.jsx("img", {
                        src: Kw,
                        alt: "Animated hearts",
                        className: "w-full h-full object-contain",
                        style: {
                            pointerEvents: "none"
                        }
                    })
                }), y.jsxs(D.div, {
                    className: "w-72 h-48 sm:w-80 sm:h-52 md:w-[360px] md:h-[240px] bg-gradient-to-br from-white to-blue-50 border-2 border-blue-300 rounded-xl shadow-2xl relative overflow-hidden",
                    animate: t ? {
                        scale: .95,
                        opacity: .7
                    } : {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: .8
                    },
                    children: [y.jsx(D.div, {
                        className: "absolute top-0 left-0 right-0 w-0 h-0 border-l-[144px] border-r-[144px] border-t-[96px] sm:border-l-[160px] sm:border-r-[160px] sm:border-t-[104px] md:border-l-[180px] md:border-r-[180px] md:border-t-[120px] border-l-transparent border-r-transparent border-t-blue-300",
                        initial: {
                            rotateX: 0
                        },
                        animate: t ? {
                            rotateX: -180
                        } : {
                            rotateX: 0
                        },
                        transition: {
                            duration: .8,
                            ease: "easeInOut"
                        },
                        style: {
                            transformOrigin: "top"
                        }
                    }), y.jsx(D.div, {
                        className: "absolute top-[40%] left-1/2 -translate-x-1/2 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full p-2 md:p-3 shadow-xl",
                        whileHover: {
                            scale: g ? 1 : 1.1
                        },
                        children: y.jsx(pe, {
                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                            fill: "currentColor"
                        })
                    }), r && y.jsxs(D.div, {
                        className: "absolute inset-x-2 md:inset-x-4 top-2 h-[180px] md:h-[200px] bg-white rounded-xl shadow-2xl p-3 md:p-4 text-center border border-gray-100",
                        initial: {
                            y: 200,
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            y: -20,
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        children: [y.jsxs("div", {
                            className: "flex items-center justify-center mb-2",
                            children: [y.jsx(pe, {
                                className: "w-3 h-3 md:w-4 md:h-4 text-pink-500 mr-1",
                                fill: "currentColor"
                            }), y.jsx("p", {
                                className: "text-sm md:text-base text-gray-700 font-comic font-semibold",
                                children: ne.ui.envelopePreview
                            }), y.jsx(pe, {
                                className: "w-3 h-3 md:w-4 md:h-4 text-pink-500 ml-1",
                                fill: "currentColor"
                            })]
                        }), y.jsx(Nt, {
                            className: "w-5 h-5 md:w-6 md:h-6 text-yellow-400 mx-auto"
                        })]
                    })]
                }), !t && l && y.jsxs(D.div, {
                    className: "text-blue-700 text-sm md:text-lg font-medium text-center mt-4 md:mt-6 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg max-w-xs md:max-w-none",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: g ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: [0, 1, 0],
                        y: [10, 5, 10]
                    },
                    transition: g ? {
                        duration: .5
                    } : {
                        duration: 2.5,
                        repeat: 1 / 0,
                        delay: .5
                    },
                    children: ["✨ ", ne.ui.envelopeHint, " ✨"]
                })]
            })
        })]
    })
}
)
  , Zw = T.memo( ({hearts: e, onRemove: t}) => {
    const n = ci();
    return y.jsx(Un, {
        children: e.slice(-10).map(r => y.jsx(D.div, {
            className: "absolute pointer-events-none z-40",
            initial: {
                scale: 0,
                opacity: 1,
                rotate: 0
            },
            animate: n ? {
                scale: [1, 0],
                y: -50,
                opacity: [1, 0]
            } : {
                scale: [1, 1.5, 0],
                y: -100,
                opacity: [1, .8, 0],
                rotate: [0, 180, 360]
            },
            exit: {
                opacity: 0,
                scale: 0
            },
            transition: {
                duration: n ? 1 : 2,
                ease: "easeOut"
            },
            style: {
                left: r.x - 10,
                top: r.y - 10
            },
            onAnimationComplete: () => t(r.id),
            children: y.jsx(pe, {
                className: `${r.color} w-6 h-6`,
                fill: "currentColor"
            })
        }, r.id))
    })
}
);
function qw() {
    const [e,t] = T.useState(!1)
      , [n,r] = T.useState(!1)
      , [i,o] = T.useState(!1)
      , [s,l] = T.useState(!1)
      , [a,u] = T.useState([])
      , [c,d] = T.useState(!1)
      , [f,g] = T.useState(!1)
      , [v,x] = T.useState(null)
      , [E,h] = T.useState(!1)
      , p = ci()
      , m = T.useMemo( () => [{
        title: "i miss you, i am sorry",
        info: "🤌",
        src: zw
    }, {
        title: "Marry Me Vnsu You'll Never Have To Be Alone",
        info: "😁",
        src: Bw
    }, {
        title: "Ghne Dina Te Russi Bethi",
        info: "🙂",
        src: Uw
    }], []);
    T.useMemo( () => ne.stickyNotes.map( (w, P) => ({
        text: w,
        style: [{
            top: "8%",
            left: "4%",
            zIndex: 30
        }, {
            top: "20%",
            right: "6%",
            zIndex: 30
        }, {
            bottom: "18%",
            left: "5%",
            zIndex: 30
        }, {
            bottom: "12%",
            right: "8%",
            zIndex: 30
        }, {
            top: "50%",
            left: "2%",
            zIndex: 30
        }][P],
        delay: (P + 1) * .3
    })), []),
    T.useEffect( () => {
        if (s && !i) {
            const w = setTimeout( () => o(!0), 800);
            return () => clearTimeout(w)
        }
    }
    , [s, i]),
    T.useCallback( () => {
        const w = document.getElementById("bgMusic");
        e ? w.pause() : w.play(),
        t(!e)
    }
    , [e]);
    const S = T.useCallback(w => {
        const P = {
            id: Date.now(),
            x: w.clientX,
            y: w.clientY,
            color: ["text-pink-500", "text-red-400", "text-purple-500"][Math.floor(Math.random() * 3)]
        };
        u(M => [...M.slice(-8), P])
    }
    , [])
      , k = T.useCallback(w => {
        u(P => P.filter(M => M.id !== w))
    }
    , [])
      , C = T.useCallback( (w, P) => {
        v && v.audio && v.audio.pause();
        const M = new Audio(w.src);
        M.loop = !1,
        M.play().then( () => {
            x({
                ...w,
                audio: M,
                index: P
            }),
            h(!0)
        }
        ).catch(F => {
            console.error("Error playing song:", F)
        }
        ),
        M.addEventListener("ended", () => {
            h(!1),
            x(null)
        }
        )
    }
    , [v])
      , j = T.useCallback( () => {
        v && v.audio && (v.audio.pause(),
        x(null),
        h(!1))
    }
    , [v]);
    return s ? y.jsxs(D.div, {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8 cursor-pointer relative overflow-hidden",
        onClick: S,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: .8
        },
        children: [!p && y.jsx(D.div, {
            className: "fixed inset-0 pointer-events-none",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 1,
                delay: .3
            },
            children: [...Array(10)].map( (w, P) => y.jsx(D.div, {
                className: "absolute w-1 h-1 bg-pink-200 rounded-full",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                },
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    scale: [0, 1, 0],
                    opacity: [0, .4, 0]
                },
                transition: {
                    duration: 6 + Math.random() * 2,
                    repeat: 1 / 0,
                    delay: Math.random() * 5 + 1
                }
            }, P))
        }), y.jsx(Zw, {
            hearts: a,
            onRemove: k
        }), y.jsxs(D.div, {
            className: "max-w-6xl mx-auto space-y-20 relative z-20",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                delay: .3
            },
            children: [y.jsx(Yt, {
                animation: "fade",
                duration: .8,
                delay: .5,
                children: y.jsxs(D.div, {
                    className: "text-center pt-12",
                    whileInView: p ? {} : {
                        scale: [.95, 1]
                    },
                    transition: {
                        duration: .4
                    },
                    children: [y.jsxs(D.h1, {
                        className: "text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 font-comic",
                        children: [ne.greeting.name, ","]
                    }), y.jsx(D.p, {
                        className: "text-xl text-gray-700 font-comic max-w-2xl mx-auto leading-relaxed",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .6,
                            duration: .6
                        },
                        children: ne.greeting.message
                    }), !p && y.jsx(D.div, {
                        className: "mt-6",
                        animate: {
                            y: [0, -10, 0]
                        },
                        transition: {
                            duration: 2,
                            repeat: 1 / 0
                        },
                        children: y.jsx(Nt, {
                            className: "w-8 h-8 text-yellow-400 mx-auto"
                        })
                    })]
                })
            }), y.jsx(Yt, {
                animation: "zoom",
                duration: .6,
                delay: .1,
                children: y.jsxs(D.div, {
                    className: "relative bg-gradient-to-br from-white via-pink-50 to-purple-50 p-8 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-pink-200 overflow-hidden",
                    whileHover: p ? {} : {
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(236, 72, 153, 0.2)"
                    },
                    onClick: w => {
                        w.stopPropagation(),
                        r(!0)
                    }
                    ,
                    children: [y.jsx("div", {
                        className: "absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-transparent rounded-full -translate-x-10 -translate-y-10 opacity-50"
                    }), y.jsx("div", {
                        className: "absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-200 to-transparent rounded-full translate-x-8 translate-y-8 opacity-50"
                    }), !p && y.jsxs(y.Fragment, {
                        children: [y.jsx(D.div, {
                            className: "absolute top-4 right-4",
                            animate: {
                                y: [-2, 2, -2]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0
                            },
                            children: y.jsx(pe, {
                                className: "w-4 h-4 text-pink-300",
                                fill: "currentColor"
                            })
                        }), y.jsx(D.div, {
                            className: "absolute bottom-4 left-4",
                            animate: {
                                y: [2, -2, 2]
                            },
                            transition: {
                                duration: 2.5,
                                repeat: 1 / 0
                            },
                            children: y.jsx(pe, {
                                className: "w-3 h-3 text-purple-300",
                                fill: "currentColor"
                            })
                        })]
                    }), y.jsx("div", {
                        className: "bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white",
                        children: y.jsx(Iw, {
                            className: "w-10 h-10 text-pink-600"
                        })
                    }), y.jsxs("div", {
                        className: "relative z-10",
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-3",
                            children: ne.letter.title
                        }), y.jsx("p", {
                            className: "text-gray-600 font-comic text-xl leading-relaxed",
                            children: ne.letter.subtitle
                        }), y.jsxs("div", {
                            className: "flex justify-center items-center mt-4 space-x-2",
                            children: [y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-300"
                            }), y.jsx(Nt, {
                                className: "w-5 h-5 text-yellow-400"
                            }), y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-300"
                            })]
                        })]
                    })]
                })
            }), y.jsx(Yt, {
                animation: "slide",
                duration: .6,
                delay: .2,
                children: y.jsxs(D.div, {
                    className: "relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-blue-200 overflow-hidden",
                    whileHover: p ? {} : {
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                    },
                    children: [!p && y.jsxs("div", {
                        className: "absolute top-0 left-0 w-full h-full pointer-events-none",
                        children: [y.jsx(D.div, {
                            className: "absolute top-6 left-8 text-blue-200 text-2xl",
                            animate: {
                                rotate: [0, 15, -15, 0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0
                            },
                            children: "♪"
                        }), y.jsx(D.div, {
                            className: "absolute bottom-6 right-8 text-blue-300 text-xl",
                            animate: {
                                rotate: [0, -15, 15, 0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                delay: 2
                            },
                            children: "♬"
                        })]
                    }), y.jsx("div", {
                        className: "bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white",
                        children: y.jsx(Ow, {
                            className: "w-10 h-10 text-blue-600"
                        })
                    }), y.jsxs("div", {
                        className: "relative z-10",
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-comic mb-3",
                            children: "Songs Dedicated To You"
                        }), y.jsx("p", {
                            className: "text-gray-600 font-comic text-xl leading-relaxed mb-4",
                            children: "Songs that remind me of you ✨"
                        }), v && y.jsxs(D.div, {
                            className: "bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 mb-4 border border-blue-200",
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: .3
                            },
                            children: [y.jsx("p", {
                                className: "font-comic text-blue-700 font-semibold",
                                children: "🎵 Now Playing:"
                            }), y.jsxs("p", {
                                className: "font-comic text-gray-700",
                                children: [v.title, " - ", v.info]
                            }), y.jsx("div", {
                                className: "w-full bg-blue-200 rounded-full h-2 mt-2 overflow-hidden",
                                children: y.jsx(D.div, {
                                    className: "bg-blue-500 h-2 rounded-full",
                                    initial: {
                                        width: "0%"
                                    },
                                    animate: {
                                        width: "100%"
                                    },
                                    transition: {
                                        duration: v.audio && v.audio.duration || 30,
                                        ease: "linear"
                                    }
                                })
                            })]
                        }), y.jsxs("div", {
                            className: "bg-white/70 backdrop-blur-sm rounded-2xl p-4 mt-4 border border-blue-100",
                            children: [y.jsx("div", {
                                className: "space-y-2 text-left",
                                children: m.map( (w, P) => y.jsxs(D.div, {
                                    className: `flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${v && v.index === P ? "bg-blue-100 border-2 border-blue-300" : "bg-blue-50/50 hover:bg-blue-100/70"}`,
                                    whileHover: p ? {} : {
                                        scale: 1.02
                                    },
                                    whileTap: p ? {} : {
                                        scale: .98
                                    },
                                    onClick: M => {
                                        M.stopPropagation(),
                                        v && v.index === P ? j() : C(w, P)
                                    }
                                    ,
                                    children: [y.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [y.jsx("div", {
                                            className: `w-3 h-3 rounded-full ${v && v.index === P ? "bg-blue-500" : "bg-blue-400"}`
                                        }), y.jsxs("div", {
                                            children: [y.jsx("span", {
                                                className: "font-comic text-gray-700 text-sm font-semibold",
                                                children: w.title
                                            }), y.jsx("p", {
                                                className: "font-comic text-gray-500 text-xs",
                                                children: w.info
                                            })]
                                        })]
                                    }), y.jsx("div", {
                                        className: "text-blue-500",
                                        children: v && v.index === P ? y.jsx("span", {
                                            className: "text-xl",
                                            children: "⏸"
                                        }) : y.jsx("span", {
                                            className: "text-xl",
                                            children: "▶"
                                        })
                                    })]
                                }, P))
                            }), y.jsx("div", {
                                className: "flex justify-center space-x-4 mt-4 pt-4 border-t border-blue-200",
                                children: y.jsx(D.button, {
                                    onClick: w => {
                                        w.stopPropagation(),
                                        E ? j() : m.length > 0 && C(m[0], 0)
                                    }
                                    ,
                                    className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-comic text-sm transition-all duration-200",
                                    whileHover: p ? {} : {
                                        scale: 1.05
                                    },
                                    whileTap: p ? {} : {
                                        scale: .95
                                    },
                                    children: E ? "Stop" : "Play All"
                                })
                            })]
                        }), y.jsxs("div", {
                            className: "flex justify-center items-center mt-6 space-x-2",
                            children: [y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-300"
                            }), y.jsx(pe, {
                                className: "w-4 h-4 text-pink-400",
                                fill: "currentColor"
                            }), y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-l from-transparent to-indigo-300"
                            })]
                        })]
                    })]
                })
            }), y.jsx(Yt, {
                animation: "slide",
                duration: .6,
                delay: .3,
                children: y.jsxs(D.div, {
                    className: "relative bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-purple-200 overflow-hidden",
                    whileHover: p ? {} : {
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
                    },
                    onClick: w => {
                        w.stopPropagation(),
                        d(!0)
                    }
                    ,
                    children: [y.jsx("div", {
                        className: "absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-transparent rounded-full -translate-x-12 -translate-y-12 opacity-40"
                    }), y.jsx("div", {
                        className: "absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-200 to-transparent rounded-full translate-x-10 translate-y-10 opacity-40"
                    }), !p && y.jsx(D.div, {
                        className: "absolute top-6 right-6",
                        animate: {
                            rotate: [0, 360]
                        },
                        transition: {
                            duration: 8,
                            repeat: 1 / 0
                        },
                        children: y.jsx(Nt, {
                            className: "w-5 h-5 text-yellow-400"
                        })
                    }), y.jsx("div", {
                        className: "relative z-10 bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white",
                        children: y.jsx(pe, {
                            className: "w-10 h-10 text-pink-600",
                            fill: "currentColor"
                        })
                    }), y.jsxs("div", {
                        className: "relative z-10",
                        children: [y.jsx("h2", {
                            className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-comic mb-3",
                            children: ne.game.title
                        }), y.jsx("p", {
                            className: "text-gray-600 font-comic text-xl leading-relaxed",
                            children: ne.game.subtitle
                        }), f && y.jsx(D.div, {
                            className: "mt-6 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-2xl border-2 border-pink-200 shadow-inner",
                            initial: {
                                scale: 0,
                                rotate: -10
                            },
                            animate: {
                                scale: 1,
                                rotate: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .4,
                                bounce: .3
                            },
                            children: y.jsxs("p", {
                                className: "text-pink-600 font-comic font-semibold text-lg",
                                children: ["✨ ", ne.game.completionMessage]
                            })
                        }), y.jsxs("div", {
                            className: "flex justify-center items-center mt-4 space-x-2",
                            children: [y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-300"
                            }), y.jsx(pe, {
                                className: "w-4 h-4 text-pink-400",
                                fill: "currentColor"
                            }), y.jsx("div", {
                                className: "w-8 h-0.5 bg-gradient-to-l from-transparent to-pink-300"
                            })]
                        })]
                    })]
                })
            }), y.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: ne.panels.slice(0, 2).map( (w, P) => y.jsx(Yt, {
                    animation: "slide",
                    delay: P * .2,
                    duration: .6,
                    children: y.jsxs(D.div, {
                        className: "comic-panel bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-blue-100",
                        whileHover: p ? {} : {
                            y: -8,
                            scale: 1.02
                        },
                        transition: {
                            duration: .3
                        },
                        children: [y.jsx("div", {
                            className: "comic-speech-bubble mb-6 bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-xl",
                            children: y.jsxs("p", {
                                className: "font-comic text-xl text-gray-800 leading-relaxed",
                                children: ["💭 ", w.text]
                            })
                        }), y.jsx(D.img, {
                            src: P === 0 ? bw : $w,
                            alt: "panel",
                            className: "rounded-xl mb-6 w-full h-72 object-cover shadow-lg border-2 border-white",
                            whileHover: p ? {} : {
                                scale: 1.05
                            },
                            transition: {
                                duration: .2
                            }
                        }), y.jsx("p", {
                            className: "text-gray-700 font-comic text-center text-lg font-semibold",
                            children: w.caption
                        })]
                    })
                }, P))
            }), y.jsx(Yt, {
                animation: "flip",
                threshold: .3,
                duration: 1,
                children: y.jsxs(D.div, {
                    className: "comic-panel bg-gradient-to-br from-white via-pink-50 to-purple-50 p-10 rounded-3xl shadow-3xl relative overflow-hidden border border-pink-200",
                    transition: {
                        duration: .6
                    },
                    children: [y.jsx("div", {
                        className: "absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                    }), y.jsx("h2", {
                        className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 font-comic text-center",
                        children: ne.poem.title
                    }), y.jsxs("div", {
                        className: "bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl border-2 border-dashed border-pink-300 shadow-inner",
                        children: [y.jsx("p", {
                            className: "text-gray-700 italic leading-loose font-comic text-center text-xl",
                            children: ne.poem.lines.map( (w, P) => y.jsxs(D.span, {
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: P * .1
                                },
                                children: [w, P < ne.poem.lines.length - 1 && y.jsx("br", {})]
                            }, P))
                        }), y.jsxs("div", {
                            className: "mt-6 flex justify-center space-x-2",
                            children: [y.jsx(pe, {
                                className: "w-8 h-8 text-pink-500",
                                fill: "currentColor"
                            }), y.jsx(Nt, {
                                className: "w-8 h-8 text-yellow-400"
                            }), y.jsx(pe, {
                                className: "w-8 h-8 text-purple-500",
                                fill: "currentColor"
                            })]
                        })]
                    })]
                })
            }), y.jsx(Yt, {
                animation: "zoom",
                duration: .8,
                threshold: .4,
                children: y.jsxs(D.div, {
                    className: "comic-panel bg-gradient-to-br from-white to-yellow-50 p-8 rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-300 border border-yellow-200",
                    whileHover: p ? {} : {
                        scale: 1.02
                    },
                    transition: {
                        duration: .3
                    },
                    children: [y.jsx("div", {
                        className: "comic-speech-bubble mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl",
                        children: y.jsxs("p", {
                            className: "font-comic text-xl text-gray-800 leading-relaxed",
                            children: ['💝 "', ne.panels[2].text, '"']
                        })
                    }), y.jsx(D.img, {
                        src: Hw,
                        alt: "Apology doodle",
                        className: "rounded-2xl mb-6 w-full h-80 object-cover shadow-xl border-4 border-white",
                        whileHover: p ? {} : {
                            scale: 1.03
                        },
                        transition: {
                            duration: .2
                        }
                    }), y.jsx("p", {
                        className: "text-gray-700 font-comic text-center text-xl font-semibold",
                        children: ne.panels[2].caption
                    })]
                })
            })]
        }), y.jsx(Un, {
            children: n && y.jsx(D.div, {
                className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-xl flex items-center justify-center p-4 z-50",
                onClick: () => r(!1),
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: y.jsxs(D.div, {
                    className: "relative bg-gradient-to-br from-white via-pink-50 to-purple-50 p-8 md:p-12 max-w-3xl w-full rounded-3xl shadow-3xl overflow-y-auto max-h-[90vh] border-2 border-pink-200",
                    initial: {
                        scale: .8,
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        scale: .8,
                        opacity: 0,
                        y: 50
                    },
                    transition: {
                        duration: .4,
                        type: "spring",
                        bounce: .1
                    },
                    onClick: w => w.stopPropagation(),
                    children: [y.jsxs("div", {
                        className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl",
                        children: [y.jsx("div", {
                            className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200 to-transparent rounded-full -translate-x-16 -translate-y-16 opacity-30"
                        }), y.jsx("div", {
                            className: "absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-200 to-transparent rounded-full translate-x-14 translate-y-14 opacity-30"
                        })]
                    }), y.jsx(D.button, {
                        onClick: () => r(!1),
                        className: "absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border border-pink-200 z-20",
                        whileHover: p ? {} : {
                            scale: 1.1,
                            rotate: 90
                        },
                        whileTap: p ? {} : {
                            scale: .9
                        },
                        transition: {
                            duration: .2
                        },
                        style: {
                            minWidth: "40px",
                            minHeight: "40px"
                        },
                        children: y.jsx(Fw, {
                            className: "w-5 h-5 sm:w-6 sm:h-6"
                        })
                    }), y.jsxs("div", {
                        className: "relative z-10",
                        children: [y.jsx(D.div, {
                            className: "flex items-center justify-center mb-8",
                            initial: {
                                y: -20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: .1
                            },
                            children: y.jsx("div", {
                                className: "bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-2xl border-2 border-dashed border-pink-300",
                                children: y.jsxs("div", {
                                    className: "flex items-center justify-center space-x-3",
                                    children: [y.jsx(pe, {
                                        className: "w-8 h-8 text-pink-500",
                                        fill: "currentColor"
                                    }), y.jsx("h3", {
                                        className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-comic m-0",
                                        children: ne.letter.recipient
                                    }), y.jsx(pe, {
                                        className: "w-8 h-8 text-purple-500",
                                        fill: "currentColor"
                                    })]
                                })
                            })
                        }), y.jsxs(D.div, {
                            className: "bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-inner border-2 border-pink-100 relative",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: .2
                            },
                            style: {
                                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,240,245,0.95) 100%)",
                                backdropFilter: "blur(10px)"
                            },
                            children: [y.jsx("div", {
                                className: "absolute left-8 top-0 bottom-0 w-px bg-pink-200 opacity-30"
                            }), y.jsx("div", {
                                className: "absolute left-12 top-0 bottom-0 w-px bg-pink-200 opacity-20"
                            }), y.jsxs("div", {
                                className: "space-y-6 font-comic text-gray-700 leading-relaxed text-lg relative z-10",
                                children: [ne.letter.paragraphs.map( (w, P) => y.jsxs(D.p, {
                                    className: "relative",
                                    initial: {
                                        x: -20,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3 + P * .1
                                    },
                                    children: [P === 0 && y.jsx("span", {
                                        className: "text-6xl font-bold text-pink-300 absolute -left-4 -top-2 leading-none select-none",
                                        children: '"'
                                    }), y.jsx("span", {
                                        className: "relative z-10",
                                        children: w
                                    })]
                                }, P)), y.jsxs(D.div, {
                                    className: "text-right mt-8 pt-6 border-t border-pink-200 border-dashed",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .8
                                    },
                                    children: [y.jsx("p", {
                                        className: "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2",
                                        children: "With all my love,"
                                    }), y.jsx("p", {
                                        className: "text-xl text-pink-600 font-comic",
                                        style: {
                                            whiteSpace: "pre-line"
                                        },
                                        children: ne.letter.signature
                                    }), y.jsxs("div", {
                                        className: "flex justify-end items-center mt-4 space-x-2",
                                        children: [y.jsx(pe, {
                                            className: "w-5 h-5 text-pink-400",
                                            fill: "currentColor"
                                        }), y.jsx(Nt, {
                                            className: "w-5 h-5 text-yellow-400"
                                        }), y.jsx(pe, {
                                            className: "w-5 h-5 text-purple-400",
                                            fill: "currentColor"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            })
        }), y.jsx(Un, {
            children: c && y.jsx(Ww, {
                onComplete: () => g(!0),
                onClose: () => d(!1),
                winMessage: ne.game.winMessage
            })
        })]
    }) : y.jsx(Xw, {
        onOpenComplete: () => {
            l(!0),
            r(!0)
        }
    })
}
ih(document.getElementById("root")).render(y.jsx(T.StrictMode, {
    children: y.jsx(qw, {})
}));

