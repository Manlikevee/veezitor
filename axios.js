









!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).axios =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function t(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? e(Object(n), !0).forEach(function (e) {
            c(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : e(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function r() {
    r = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      o = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      s = a.iterator || "@@iterator",
      u = a.asyncIterator || "@@asyncIterator",
      c = a.toStringTag || "@@toStringTag";
    function f(e, t, r) {
      return (
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      f({}, "");
    } catch (e) {
      f = function (e, t, r) {
        return (e[t] = r);
      };
    }
    function l(e, t, r, n) {
      var o = t && t.prototype instanceof m ? t : m,
        a = Object.create(o.prototype),
        s = new N(n || []);
      return i(a, "_invoke", { value: A(e, r, s) }), a;
    }
    function h(e, t, r) {
      try {
        return { type: "normal", arg: e.call(t, r) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = l;
    var p = "suspendedStart",
      d = "executing",
      y = "completed",
      v = {};
    function m() {}
    function g() {}
    function b() {}
    var w = {};
    f(w, s, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      O = E && E(E(k([])));
    O && O !== n && o.call(O, s) && (w = O);
    var S = (b.prototype = m.prototype = Object.create(w));
    function j(e) {
      ["next", "throw", "return"].forEach(function (t) {
        f(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function R(e, t) {
      function r(n, i, a, s) {
        var u = h(e[n], e, i);
        if ("throw" !== u.type) {
          var c = u.arg,
            f = c.value;
          return f && "object" == typeof f && o.call(f, "__await")
            ? t.resolve(f.__await).then(
                function (e) {
                  r("next", e, a, s);
                },
                function (e) {
                  r("throw", e, a, s);
                }
              )
            : t.resolve(f).then(
                function (e) {
                  (c.value = e), a(c);
                },
                function (e) {
                  return r("throw", e, a, s);
                }
              );
        }
        s(u.arg);
      }
      var n;
      i(this, "_invoke", {
        value: function (e, o) {
          function i() {
            return new t(function (t, n) {
              r(e, o, t, n);
            });
          }
          return (n = n ? n.then(i, i) : i());
        },
      });
    }
    function A(t, r, n) {
      var o = p;
      return function (i, a) {
        if (o === d) throw new Error("Generator is already running");
        if (o === y) {
          if ("throw" === i) throw a;
          return { value: e, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var s = n.delegate;
          if (s) {
            var u = T(s, n);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === p) throw ((o = y), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = d;
          var c = h(t, r, n);
          if ("normal" === c.type) {
            if (((o = n.done ? y : "suspendedYield"), c.arg === v)) continue;
            return { value: c.arg, done: n.done };
          }
          "throw" === c.type &&
            ((o = y), (n.method = "throw"), (n.arg = c.arg));
        }
      };
    }
    function T(t, r) {
      var n = r.method,
        o = t.iterator[n];
      if (o === e)
        return (
          (r.delegate = null),
          ("throw" === n &&
            t.iterator.return &&
            ((r.method = "return"),
            (r.arg = e),
            T(t, r),
            "throw" === r.method)) ||
            ("return" !== n &&
              ((r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          v
        );
      var i = h(o, t.iterator, r.arg);
      if ("throw" === i.type)
        return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[t.resultName] = a.value),
            (r.next = t.nextLoc),
            "return" !== r.method && ((r.method = "next"), (r.arg = e)),
            (r.delegate = null),
            v)
          : a
        : ((r.method = "throw"),
          (r.arg = new TypeError("iterator result is not an object")),
          (r.delegate = null),
          v);
    }
    function x(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function P(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function N(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(x, this),
        this.reset(!0);
    }
    function k(t) {
      if (t || "" === t) {
        var r = t[s];
        if (r) return r.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var n = -1,
            i = function r() {
              for (; ++n < t.length; )
                if (o.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
              return (r.value = e), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(typeof t + " is not iterable");
    }
    return (
      (g.prototype = b),
      i(S, "constructor", { value: b, configurable: !0 }),
      i(b, "constructor", { value: g, configurable: !0 }),
      (g.displayName = f(b, c, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, b)
            : ((e.__proto__ = b), f(e, c, "GeneratorFunction")),
          (e.prototype = Object.create(S)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      j(R.prototype),
      f(R.prototype, u, function () {
        return this;
      }),
      (t.AsyncIterator = R),
      (t.async = function (e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new R(l(e, r, n, o), i);
        return t.isGeneratorFunction(r)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      j(S),
      f(S, c, "Generator"),
      f(S, s, function () {
        return this;
      }),
      f(S, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          r = [];
        for (var n in t) r.push(n);
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in t) return (e.value = n), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = k),
      (N.prototype = {
        constructor: N,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(P),
            !t)
          )
            for (var r in this)
              "t" === r.charAt(0) &&
                o.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;
          function n(n, o) {
            return (
              (s.type = "throw"),
              (s.arg = t),
              (r.next = n),
              o && ((r.method = "next"), (r.arg = e)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              s = a.completion;
            if ("root" === a.tryLoc) return n("end");
            if (a.tryLoc <= this.prev) {
              var u = o.call(a, "catchLoc"),
                c = o.call(a, "finallyLoc");
              if (u && c) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              } else {
                if (!c)
                  throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (
              n.tryLoc <= this.prev &&
              o.call(n, "finallyLoc") &&
              this.prev < n.finallyLoc
            ) {
              var i = n;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e),
            (a.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), v)
              : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            v
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e)
              return this.complete(r.completion, r.afterLoc), P(r), v;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, r, n) {
          return (
            (this.delegate = { iterator: k(t), resultName: r, nextLoc: n }),
            "next" === this.method && (this.arg = e),
            v
          );
        },
      }),
      t
    );
  }
  function n(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != typeof n) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  function o(e) {
    return (
      (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      o(e)
    );
  }
  function i(e, t, r, n, o, i, a) {
    try {
      var s = e[i](a),
        u = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, o);
  }
  function a(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, n(o.key), o);
    }
  }
  function u(e, t, r) {
    return (
      t && s(e.prototype, t),
      r && s(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function c(e, t, r) {
    return (
      (t = n(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function f(e, t) {
    return (
      h(e) ||
      (function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            s = [],
            u = !0,
            c = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              u = !1;
            } else
              for (
                ;
                !(u = (n = i.call(r)).done) &&
                (s.push(n.value), s.length !== t);
                u = !0
              );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
                return;
            } finally {
              if (c) throw o;
            }
          }
          return s;
        }
      })(e, t) ||
      d(e, t) ||
      v()
    );
  }
  function l(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return y(e);
      })(e) ||
      p(e) ||
      d(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function h(e) {
    if (Array.isArray(e)) return e;
  }
  function p(e) {
    if (
      ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e["@@iterator"]
    )
      return Array.from(e);
  }
  function d(e, t) {
    if (e) {
      if ("string" == typeof e) return y(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(e)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? y(e, t)
          : void 0
      );
    }
  }
  function y(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function v() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function m(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var g,
    b = Object.prototype.toString,
    w = Object.getPrototypeOf,
    E =
      ((g = Object.create(null)),
      function (e) {
        var t = b.call(e);
        return g[t] || (g[t] = t.slice(8, -1).toLowerCase());
      }),
    O = function (e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return E(t) === e;
        }
      );
    },
    S = function (e) {
      return function (t) {
        return o(t) === e;
      };
    },
    j = Array.isArray,
    R = S("undefined");
  var A = O("ArrayBuffer");
  var T = S("string"),
    x = S("function"),
    P = S("number"),
    N = function (e) {
      return null !== e && "object" === o(e);
    },
    k = function (e) {
      if ("object" !== E(e)) return !1;
      var t = w(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    _ = O("Date"),
    L = O("File"),
    C = O("Blob"),
    F = O("FileList"),
    U = O("URLSearchParams");
  function D(e, t) {
    var r,
      n,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      a = i.allOwnKeys,
      s = void 0 !== a && a;
    if (null != e)
      if (("object" !== o(e) && (e = [e]), j(e)))
        for (r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
      else {
        var u,
          c = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
          f = c.length;
        for (r = 0; r < f; r++) (u = c[r]), t.call(null, e[u], u, e);
      }
  }
  function B(e, t) {
    t = t.toLowerCase();
    for (var r, n = Object.keys(e), o = n.length; o-- > 0; )
      if (t === (r = n[o]).toLowerCase()) return r;
    return null;
  }
  var I =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    q = function (e) {
      return !R(e) && e !== I;
    };
  var z,
    M =
      ((z = "undefined" != typeof Uint8Array && w(Uint8Array)),
      function (e) {
        return z && e instanceof z;
      }),
    H = O("HTMLFormElement"),
    J = (function (e) {
      var t = Object.prototype.hasOwnProperty;
      return function (e, r) {
        return t.call(e, r);
      };
    })(),
    G = O("RegExp"),
    W = function (e, t) {
      var r = Object.getOwnPropertyDescriptors(e),
        n = {};
      D(r, function (r, o) {
        var i;
        !1 !== (i = t(r, o, e)) && (n[o] = i || r);
      }),
        Object.defineProperties(e, n);
    },
    K = "abcdefghijklmnopqrstuvwxyz",
    V = "0123456789",
    X = { DIGIT: V, ALPHA: K, ALPHA_DIGIT: K + K.toUpperCase() + V };
  var $ = O("AsyncFunction"),
    Q = {
      isArray: j,
      isArrayBuffer: A,
      isBuffer: function (e) {
        return (
          null !== e &&
          !R(e) &&
          null !== e.constructor &&
          !R(e.constructor) &&
          x(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        var t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (x(e.append) &&
              ("formdata" === (t = E(e)) ||
                ("object" === t &&
                  x(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && A(e.buffer);
      },
      isString: T,
      isNumber: P,
      isBoolean: function (e) {
        return !0 === e || !1 === e;
      },
      isObject: N,
      isPlainObject: k,
      isUndefined: R,
      isDate: _,
      isFile: L,
      isBlob: C,
      isRegExp: G,
      isFunction: x,
      isStream: function (e) {
        return N(e) && x(e.pipe);
      },
      isURLSearchParams: U,
      isTypedArray: M,
      isFileList: F,
      forEach: D,
      merge: function e() {
        for (
          var t = (q(this) && this) || {},
            r = t.caseless,
            n = {},
            o = function (t, o) {
              var i = (r && B(n, o)) || o;
              k(n[i]) && k(t)
                ? (n[i] = e(n[i], t))
                : k(t)
                ? (n[i] = e({}, t))
                : j(t)
                ? (n[i] = t.slice())
                : (n[i] = t);
            },
            i = 0,
            a = arguments.length;
          i < a;
          i++
        )
          arguments[i] && D(arguments[i], o);
        return n;
      },
      extend: function (e, t, r) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = n.allOwnKeys;
        return (
          D(
            t,
            function (t, n) {
              r && x(t) ? (e[n] = m(t, r)) : (e[n] = t);
            },
            { allOwnKeys: o }
          ),
          e
        );
      },
      trim: function (e) {
        return e.trim
          ? e.trim()
          : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
      inherits: function (e, t, r, n) {
        (e.prototype = Object.create(t.prototype, n)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          r && Object.assign(e.prototype, r);
      },
      toFlatObject: function (e, t, r, n) {
        var o,
          i,
          a,
          s = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
            (a = o[i]),
              (n && !n(a, e, t)) || s[a] || ((t[a] = e[a]), (s[a] = !0));
          e = !1 !== r && w(e);
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: E,
      kindOfTest: O,
      endsWith: function (e, t, r) {
        (e = String(e)),
          (void 0 === r || r > e.length) && (r = e.length),
          (r -= t.length);
        var n = e.indexOf(t, r);
        return -1 !== n && n === r;
      },
      toArray: function (e) {
        if (!e) return null;
        if (j(e)) return e;
        var t = e.length;
        if (!P(t)) return null;
        for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
        return r;
      },
      forEachEntry: function (e, t) {
        for (
          var r, n = (e && e[Symbol.iterator]).call(e);
          (r = n.next()) && !r.done;

        ) {
          var o = r.value;
          t.call(e, o[0], o[1]);
        }
      },
      matchAll: function (e, t) {
        for (var r, n = []; null !== (r = e.exec(t)); ) n.push(r);
        return n;
      },
      isHTMLForm: H,
      hasOwnProperty: J,
      hasOwnProp: J,
      reduceDescriptors: W,
      freezeMethods: function (e) {
        W(e, function (t, r) {
          if (x(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
            return !1;
          var n = e[r];
          x(n) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = function () {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                }));
        });
      },
      toObjectSet: function (e, t) {
        var r = {},
          n = function (e) {
            e.forEach(function (e) {
              r[e] = !0;
            });
          };
        return j(e) ? n(e) : n(String(e).split(t)), r;
      },
      toCamelCase: function (e) {
        return e
          .toLowerCase()
          .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
            return t.toUpperCase() + r;
          });
      },
      noop: function () {},
      toFiniteNumber: function (e, t) {
        return (e = +e), Number.isFinite(e) ? e : t;
      },
      findKey: B,
      global: I,
      isContextDefined: q,
      ALPHABET: X,
      generateString: function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 16,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : X.ALPHA_DIGIT,
            r = "",
            n = t.length;
          e--;

        )
          r += t[(Math.random() * n) | 0];
        return r;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          x(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: function (e) {
        var t = new Array(10);
        return (function e(r, n) {
          if (N(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[n] = r;
              var o = j(r) ? [] : {};
              return (
                D(r, function (t, r) {
                  var i = e(t, n + 1);
                  !R(i) && (o[r] = i);
                }),
                (t[n] = void 0),
                o
              );
            }
          }
          return r;
        })(e, 0);
      },
      isAsyncFn: $,
      isThenable: function (e) {
        return e && (N(e) || x(e)) && x(e.then) && x(e.catch);
      },
    };
  function Y(e, t, r, n, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      o && (this.response = o);
  }
  Q.inherits(Y, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Q.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var Z = Y.prototype,
    ee = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach(function (e) {
    ee[e] = { value: e };
  }),
    Object.defineProperties(Y, ee),
    Object.defineProperty(Z, "isAxiosError", { value: !0 }),
    (Y.from = function (e, t, r, n, o, i) {
      var a = Object.create(Z);
      return (
        Q.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype;
          },
          function (e) {
            return "isAxiosError" !== e;
          }
        ),
        Y.call(a, e.message, t, r, n, o),
        (a.cause = e),
        (a.name = e.name),
        i && Object.assign(a, i),
        a
      );
    });
  function te(e) {
    return Q.isPlainObject(e) || Q.isArray(e);
  }
  function re(e) {
    return Q.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function ne(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = re(e)), !r && t ? "[" + e + "]" : e;
          })
          .join(r ? "." : "")
      : t;
  }
  var oe = Q.toFlatObject(Q, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function ie(e, t, r) {
    if (!Q.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    var n = (r = Q.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Q.isUndefined(t[e]);
        }
      )).metaTokens,
      i = r.visitor || f,
      a = r.dots,
      s = r.indexes,
      u =
        (r.Blob || ("undefined" != typeof Blob && Blob)) &&
        Q.isSpecCompliantForm(t);
    if (!Q.isFunction(i)) throw new TypeError("visitor must be a function");
    function c(e) {
      if (null === e) return "";
      if (Q.isDate(e)) return e.toISOString();
      if (!u && Q.isBlob(e))
        throw new Y("Blob is not supported. Use a Buffer instead.");
      return Q.isArrayBuffer(e) || Q.isTypedArray(e)
        ? u && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function f(e, r, i) {
      var u = e;
      if (e && !i && "object" === o(e))
        if (Q.endsWith(r, "{}"))
          (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (Q.isArray(e) &&
            (function (e) {
              return Q.isArray(e) && !e.some(te);
            })(e)) ||
          ((Q.isFileList(e) || Q.endsWith(r, "[]")) && (u = Q.toArray(e)))
        )
          return (
            (r = re(r)),
            u.forEach(function (e, n) {
              !Q.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === s ? ne([r], n, a) : null === s ? r : r + "[]",
                  c(e)
                );
            }),
            !1
          );
      return !!te(e) || (t.append(ne(i, r, a), c(e)), !1);
    }
    var l = [],
      h = Object.assign(oe, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: te,
      });
    if (!Q.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(r, n) {
        if (!Q.isUndefined(r)) {
          if (-1 !== l.indexOf(r))
            throw Error("Circular reference detected in " + n.join("."));
          l.push(r),
            Q.forEach(r, function (r, o) {
              !0 ===
                (!(Q.isUndefined(r) || null === r) &&
                  i.call(t, r, Q.isString(o) ? o.trim() : o, n, h)) &&
                e(r, n ? n.concat(o) : [o]);
            }),
            l.pop();
        }
      })(e),
      t
    );
  }
  function ae(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function se(e, t) {
    (this._pairs = []), e && ie(e, this, t);
  }
  var ue = se.prototype;
  function ce(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function fe(e, t, r) {
    if (!t) return e;
    var n,
      o = (r && r.encode) || ce,
      i = r && r.serialize;
    if (
      (n = i
        ? i(t, r)
        : Q.isURLSearchParams(t)
        ? t.toString()
        : new se(t, r).toString(o))
    ) {
      var a = e.indexOf("#");
      -1 !== a && (e = e.slice(0, a)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
    }
    return e;
  }
  (ue.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (ue.toString = function (e) {
      var t = e
        ? function (t) {
            return e.call(this, t, ae);
          }
        : ae;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  var le,
    he = (function () {
      function e() {
        a(this, e), (this.handlers = []);
      }
      return (
        u(e, [
          {
            key: "use",
            value: function (e, t, r) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!r && r.synchronous,
                  runWhen: r ? r.runWhen : null,
                }),
                this.handlers.length - 1
              );
            },
          },
          {
            key: "eject",
            value: function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            },
          },
          {
            key: "clear",
            value: function () {
              this.handlers && (this.handlers = []);
            },
          },
          {
            key: "forEach",
            value: function (e) {
              Q.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            },
          },
        ]),
        e
      );
    })(),
    pe = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    de = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : se,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    ye = "undefined" != typeof window && "undefined" != typeof document,
    ve =
      ((le = "undefined" != typeof navigator && navigator.product),
      ye && ["ReactNative", "NativeScript", "NS"].indexOf(le) < 0),
    me =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    ge = t(
      t(
        {},
        Object.freeze({
          __proto__: null,
          hasBrowserEnv: ye,
          hasStandardBrowserWebWorkerEnv: me,
          hasStandardBrowserEnv: ve,
        })
      ),
      de
    );
  function be(e) {
    function t(e, r, n, o) {
      var i = e[o++];
      if ("__proto__" === i) return !0;
      var a = Number.isFinite(+i),
        s = o >= e.length;
      return (
        (i = !i && Q.isArray(n) ? n.length : i),
        s
          ? (Q.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !a)
          : ((n[i] && Q.isObject(n[i])) || (n[i] = []),
            t(e, r, n[i], o) &&
              Q.isArray(n[i]) &&
              (n[i] = (function (e) {
                var t,
                  r,
                  n = {},
                  o = Object.keys(e),
                  i = o.length;
                for (t = 0; t < i; t++) n[(r = o[t])] = e[r];
                return n;
              })(n[i])),
            !a)
      );
    }
    if (Q.isFormData(e) && Q.isFunction(e.entries)) {
      var r = {};
      return (
        Q.forEachEntry(e, function (e, n) {
          t(
            (function (e) {
              return Q.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                return "[]" === e[0] ? "" : e[1] || e[0];
              });
            })(e),
            n,
            r,
            0
          );
        }),
        r
      );
    }
    return null;
  }
  var we = {
    transitional: pe,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (e, t) {
        var r,
          n = t.getContentType() || "",
          o = n.indexOf("application/json") > -1,
          i = Q.isObject(e);
        if ((i && Q.isHTMLForm(e) && (e = new FormData(e)), Q.isFormData(e)))
          return o ? JSON.stringify(be(e)) : e;
        if (
          Q.isArrayBuffer(e) ||
          Q.isBuffer(e) ||
          Q.isStream(e) ||
          Q.isFile(e) ||
          Q.isBlob(e)
        )
          return e;
        if (Q.isArrayBufferView(e)) return e.buffer;
        if (Q.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return ie(
                e,
                new ge.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, r, n) {
                      return ge.isNode && Q.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : n.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((r = Q.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            var a = this.env && this.env.FormData;
            return ie(
              r ? { "files[]": e } : e,
              a && new a(),
              this.formSerializer
            );
          }
        }
        return i || o
          ? (t.setContentType("application/json", !1),
            (function (e, t, r) {
              if (Q.isString(e))
                try {
                  return (t || JSON.parse)(e), Q.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (r || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || we.transitional,
          r = t && t.forcedJSONParsing,
          n = "json" === this.responseType;
        if (e && Q.isString(e) && ((r && !this.responseType) || n)) {
          var o = !(t && t.silentJSONParsing) && n;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (o) {
              if ("SyntaxError" === e.name)
                throw Y.from(e, Y.ERR_BAD_RESPONSE, this, null, this.response);
              throw e;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ge.classes.FormData, Blob: ge.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  Q.forEach(["delete", "get", "head", "post", "put", "patch"], function (e) {
    we.headers[e] = {};
  });
  var Ee = we,
    Oe = Q.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    Se = Symbol("internals");
  function je(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Re(e) {
    return !1 === e || null == e ? e : Q.isArray(e) ? e.map(Re) : String(e);
  }
  function Ae(e, t, r, n, o) {
    return Q.isFunction(n)
      ? n.call(this, t, r)
      : (o && (t = r),
        Q.isString(t)
          ? Q.isString(n)
            ? -1 !== t.indexOf(n)
            : Q.isRegExp(n)
            ? n.test(t)
            : void 0
          : void 0);
  }
  var Te = (function (e, t) {
    function r(e) {
      a(this, r), e && this.set(e);
    }
    return (
      u(
        r,
        [
          {
            key: "set",
            value: function (e, t, r) {
              var n = this;
              function o(e, t, r) {
                var o = je(t);
                if (!o)
                  throw new Error("header name must be a non-empty string");
                var i = Q.findKey(n, o);
                (!i ||
                  void 0 === n[i] ||
                  !0 === r ||
                  (void 0 === r && !1 !== n[i])) &&
                  (n[i || t] = Re(e));
              }
              var i,
                a,
                s,
                u,
                c,
                f = function (e, t) {
                  return Q.forEach(e, function (e, r) {
                    return o(e, r, t);
                  });
                };
              return (
                Q.isPlainObject(e) || e instanceof this.constructor
                  ? f(e, t)
                  : Q.isString(e) &&
                    (e = e.trim()) &&
                    !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                  ? f(
                      ((c = {}),
                      (i = e) &&
                        i.split("\n").forEach(function (e) {
                          (u = e.indexOf(":")),
                            (a = e.substring(0, u).trim().toLowerCase()),
                            (s = e.substring(u + 1).trim()),
                            !a ||
                              (c[a] && Oe[a]) ||
                              ("set-cookie" === a
                                ? c[a]
                                  ? c[a].push(s)
                                  : (c[a] = [s])
                                : (c[a] = c[a] ? c[a] + ", " + s : s));
                        }),
                      c),
                      t
                    )
                  : null != e && o(t, e, r),
                this
              );
            },
          },
          {
            key: "get",
            value: function (e, t) {
              if ((e = je(e))) {
                var r = Q.findKey(this, e);
                if (r) {
                  var n = this[r];
                  if (!t) return n;
                  if (!0 === t)
                    return (function (e) {
                      for (
                        var t,
                          r = Object.create(null),
                          n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        (t = n.exec(e));

                      )
                        r[t[1]] = t[2];
                      return r;
                    })(n);
                  if (Q.isFunction(t)) return t.call(this, n, r);
                  if (Q.isRegExp(t)) return t.exec(n);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            },
          },
          {
            key: "has",
            value: function (e, t) {
              if ((e = je(e))) {
                var r = Q.findKey(this, e);
                return !(
                  !r ||
                  void 0 === this[r] ||
                  (t && !Ae(0, this[r], r, t))
                );
              }
              return !1;
            },
          },
          {
            key: "delete",
            value: function (e, t) {
              var r = this,
                n = !1;
              function o(e) {
                if ((e = je(e))) {
                  var o = Q.findKey(r, e);
                  !o || (t && !Ae(0, r[o], o, t)) || (delete r[o], (n = !0));
                }
              }
              return Q.isArray(e) ? e.forEach(o) : o(e), n;
            },
          },
          {
            key: "clear",
            value: function (e) {
              for (var t = Object.keys(this), r = t.length, n = !1; r--; ) {
                var o = t[r];
                (e && !Ae(0, this[o], o, e, !0)) || (delete this[o], (n = !0));
              }
              return n;
            },
          },
          {
            key: "normalize",
            value: function (e) {
              var t = this,
                r = {};
              return (
                Q.forEach(this, function (n, o) {
                  var i = Q.findKey(r, o);
                  if (i) return (t[i] = Re(n)), void delete t[o];
                  var a = e
                    ? (function (e) {
                        return e
                          .trim()
                          .toLowerCase()
                          .replace(/([a-z\d])(\w*)/g, function (e, t, r) {
                            return t.toUpperCase() + r;
                          });
                      })(o)
                    : String(o).trim();
                  a !== o && delete t[o], (t[a] = Re(n)), (r[a] = !0);
                }),
                this
              );
            },
          },
          {
            key: "concat",
            value: function () {
              for (
                var e, t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return (e = this.constructor).concat.apply(e, [this].concat(r));
            },
          },
          {
            key: "toJSON",
            value: function (e) {
              var t = Object.create(null);
              return (
                Q.forEach(this, function (r, n) {
                  null != r &&
                    !1 !== r &&
                    (t[n] = e && Q.isArray(r) ? r.join(", ") : r);
                }),
                t
              );
            },
          },
          {
            key: Symbol.iterator,
            value: function () {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            },
          },
          {
            key: "toString",
            value: function () {
              return Object.entries(this.toJSON())
                .map(function (e) {
                  var t = f(e, 2);
                  return t[0] + ": " + t[1];
                })
                .join("\n");
            },
          },
          {
            key: Symbol.toStringTag,
            get: function () {
              return "AxiosHeaders";
            },
          },
        ],
        [
          {
            key: "from",
            value: function (e) {
              return e instanceof this ? e : new this(e);
            },
          },
          {
            key: "concat",
            value: function (e) {
              for (
                var t = new this(e),
                  r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              return (
                n.forEach(function (e) {
                  return t.set(e);
                }),
                t
              );
            },
          },
          {
            key: "accessor",
            value: function (e) {
              var t = (this[Se] = this[Se] = { accessors: {} }).accessors,
                r = this.prototype;
              function n(e) {
                var n = je(e);
                t[n] ||
                  (!(function (e, t) {
                    var r = Q.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach(function (n) {
                      Object.defineProperty(e, n + r, {
                        value: function (e, r, o) {
                          return this[n].call(this, t, e, r, o);
                        },
                        configurable: !0,
                      });
                    });
                  })(r, e),
                  (t[n] = !0));
              }
              return Q.isArray(e) ? e.forEach(n) : n(e), this;
            },
          },
        ]
      ),
      r
    );
  })();
  Te.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Q.reduceDescriptors(Te.prototype, function (e, t) {
      var r = e.value,
        n = t[0].toUpperCase() + t.slice(1);
      return {
        get: function () {
          return r;
        },
        set: function (e) {
          this[n] = e;
        },
      };
    }),
    Q.freezeMethods(Te);
  var xe = Te;
  function Pe(e, t) {
    var r = this || Ee,
      n = t || r,
      o = xe.from(n.headers),
      i = n.data;
    return (
      Q.forEach(e, function (e) {
        i = e.call(r, i, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      i
    );
  }
  function Ne(e) {
    return !(!e || !e.__CANCEL__);
  }
  function ke(e, t, r) {
    Y.call(this, null == e ? "canceled" : e, Y.ERR_CANCELED, t, r),
      (this.name = "CanceledError");
  }
  Q.inherits(ke, Y, { __CANCEL__: !0 });
  var _e = ge.hasStandardBrowserEnv
    ? {
        write: function (e, t, r, n, o, i) {
          var a = [e + "=" + encodeURIComponent(t)];
          Q.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
            Q.isString(n) && a.push("path=" + n),
            Q.isString(o) && a.push("domain=" + o),
            !0 === i && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (e) {
          var t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function Le(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  var Ce = ge.hasStandardBrowserEnv
    ? (function () {
        var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");
        function n(e) {
          var n = e;
          return (
            t && (r.setAttribute("href", n), (n = r.href)),
            r.setAttribute("href", n),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname:
                "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
            }
          );
        }
        return (
          (e = n(window.location.href)),
          function (t) {
            var r = Q.isString(t) ? n(t) : t;
            return r.protocol === e.protocol && r.host === e.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  function Fe(e, t) {
    var r = 0,
      n = (function (e, t) {
        e = e || 10;
        var r,
          n = new Array(e),
          o = new Array(e),
          i = 0,
          a = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            var u = Date.now(),
              c = o[a];
            r || (r = u), (n[i] = s), (o[i] = u);
            for (var f = a, l = 0; f !== i; ) (l += n[f++]), (f %= e);
            if (((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - r < t))) {
              var h = c && u - c;
              return h ? Math.round((1e3 * l) / h) : void 0;
            }
          }
        );
      })(50, 250);
    return function (o) {
      var i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        s = i - r,
        u = n(s);
      r = i;
      var c = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && a && i <= a ? (a - i) / u : void 0,
        event: o,
      };
      (c[t ? "download" : "upload"] = !0), e(c);
    };
  }
  var Ue = {
    http: null,
    xhr:
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, r) {
          var n,
            o,
            i,
            a = e.data,
            s = xe.from(e.headers).normalize(),
            u = e.responseType,
            c = e.withXSRFToken;
          function f() {
            e.cancelToken && e.cancelToken.unsubscribe(n),
              e.signal && e.signal.removeEventListener("abort", n);
          }
          if (Q.isFormData(a))
            if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
              s.setContentType(!1);
            else if (!1 !== (o = s.getContentType())) {
              var y = o
                  ? o
                      .split(";")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(Boolean)
                  : [],
                m = h((i = y)) || p(i) || d(i) || v(),
                g = m[0],
                b = m.slice(1);
              s.setContentType(
                [g || "multipart/form-data"].concat(l(b)).join("; ")
              );
            }
          var w = new XMLHttpRequest();
          if (e.auth) {
            var E = e.auth.username || "",
              O = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            s.set("Authorization", "Basic " + btoa(E + ":" + O));
          }
          var S = Le(e.baseURL, e.url);
          function j() {
            if (w) {
              var n = xe.from(
                "getAllResponseHeaders" in w && w.getAllResponseHeaders()
              );
              !(function (e, t, r) {
                var n = r.config.validateStatus;
                r.status && n && !n(r.status)
                  ? t(
                      new Y(
                        "Request failed with status code " + r.status,
                        [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
                          Math.floor(r.status / 100) - 4
                        ],
                        r.config,
                        r.request,
                        r
                      )
                    )
                  : e(r);
              })(
                function (e) {
                  t(e), f();
                },
                function (e) {
                  r(e), f();
                },
                {
                  data:
                    u && "text" !== u && "json" !== u
                      ? w.response
                      : w.responseText,
                  status: w.status,
                  statusText: w.statusText,
                  headers: n,
                  config: e,
                  request: w,
                }
              ),
                (w = null);
            }
          }
          if (
            (w.open(
              e.method.toUpperCase(),
              fe(S, e.params, e.paramsSerializer),
              !0
            ),
            (w.timeout = e.timeout),
            "onloadend" in w
              ? (w.onloadend = j)
              : (w.onreadystatechange = function () {
                  w &&
                    4 === w.readyState &&
                    (0 !== w.status ||
                      (w.responseURL &&
                        0 === w.responseURL.indexOf("file:"))) &&
                    setTimeout(j);
                }),
            (w.onabort = function () {
              w &&
                (r(new Y("Request aborted", Y.ECONNABORTED, e, w)), (w = null));
            }),
            (w.onerror = function () {
              r(new Y("Network Error", Y.ERR_NETWORK, e, w)), (w = null);
            }),
            (w.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || pe;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  new Y(
                    t,
                    n.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
                    e,
                    w
                  )
                ),
                (w = null);
            }),
            ge.hasStandardBrowserEnv &&
              (c && Q.isFunction(c) && (c = c(e)), c || (!1 !== c && Ce(S))))
          ) {
            var R =
              e.xsrfHeaderName && e.xsrfCookieName && _e.read(e.xsrfCookieName);
            R && s.set(e.xsrfHeaderName, R);
          }
          void 0 === a && s.setContentType(null),
            "setRequestHeader" in w &&
              Q.forEach(s.toJSON(), function (e, t) {
                w.setRequestHeader(t, e);
              }),
            Q.isUndefined(e.withCredentials) ||
              (w.withCredentials = !!e.withCredentials),
            u && "json" !== u && (w.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              w.addEventListener("progress", Fe(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
              w.upload &&
              w.upload.addEventListener("progress", Fe(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((n = function (t) {
                w &&
                  (r(!t || t.type ? new ke(null, e, w) : t),
                  w.abort(),
                  (w = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(n),
              e.signal &&
                (e.signal.aborted
                  ? n()
                  : e.signal.addEventListener("abort", n)));
          var A,
            T = ((A = /^([-+\w]{1,25})(:?\/\/|:)/.exec(S)) && A[1]) || "";
          T && -1 === ge.protocols.indexOf(T)
            ? r(new Y("Unsupported protocol " + T + ":", Y.ERR_BAD_REQUEST, e))
            : w.send(a || null);
        });
      },
  };
  Q.forEach(Ue, function (e, t) {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  var De = function (e) {
      return "- ".concat(e);
    },
    Be = function (e) {
      return Q.isFunction(e) || null === e || !1 === e;
    },
    Ie = function (e) {
      for (
        var t, r, n = (e = Q.isArray(e) ? e : [e]).length, o = {}, i = 0;
        i < n;
        i++
      ) {
        var a = void 0;
        if (
          ((r = t = e[i]),
          !Be(t) && void 0 === (r = Ue[(a = String(t)).toLowerCase()]))
        )
          throw new Y("Unknown adapter '".concat(a, "'"));
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        var s = Object.entries(o).map(function (e) {
          var t = f(e, 2),
            r = t[0],
            n = t[1];
          return (
            "adapter ".concat(r, " ") +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        throw new Y(
          "There is no suitable adapter to dispatch the request " +
            (n
              ? s.length > 1
                ? "since :\n" + s.map(De).join("\n")
                : " " + De(s[0])
              : "as no adapter specified"),
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function qe(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new ke(null, e);
  }
  function ze(e) {
    return (
      qe(e),
      (e.headers = xe.from(e.headers)),
      (e.data = Pe.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Ie(e.adapter || Ee.adapter)(e).then(
        function (t) {
          return (
            qe(e),
            (t.data = Pe.call(e, e.transformResponse, t)),
            (t.headers = xe.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            Ne(t) ||
              (qe(e),
              t &&
                t.response &&
                ((t.response.data = Pe.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = xe.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  var Me = function (e) {
    return e instanceof xe ? t({}, e) : e;
  };
  function He(e, t) {
    t = t || {};
    var r = {};
    function n(e, t, r) {
      return Q.isPlainObject(e) && Q.isPlainObject(t)
        ? Q.merge.call({ caseless: r }, e, t)
        : Q.isPlainObject(t)
        ? Q.merge({}, t)
        : Q.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, r) {
      return Q.isUndefined(t)
        ? Q.isUndefined(e)
          ? void 0
          : n(void 0, e, r)
        : n(e, t, r);
    }
    function i(e, t) {
      if (!Q.isUndefined(t)) return n(void 0, t);
    }
    function a(e, t) {
      return Q.isUndefined(t)
        ? Q.isUndefined(e)
          ? void 0
          : n(void 0, e)
        : n(void 0, t);
    }
    function s(r, o, i) {
      return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
    }
    var u = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: function (e, t) {
        return o(Me(e), Me(t), !0);
      },
    };
    return (
      Q.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
        var i = u[n] || o,
          a = i(e[n], t[n], n);
        (Q.isUndefined(a) && i !== s) || (r[n] = a);
      }),
      r
    );
  }
  var Je = "1.6.8",
    Ge = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (e, t) {
      Ge[e] = function (r) {
        return o(r) === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  var We = {};
  Ge.transitional = function (e, t, r) {
    function n(e, t) {
      return (
        "[Axios v1.6.8] Transitional option '" +
        e +
        "'" +
        t +
        (r ? ". " + r : "")
      );
    }
    return function (r, o, i) {
      if (!1 === e)
        throw new Y(
          n(o, " has been removed" + (t ? " in " + t : "")),
          Y.ERR_DEPRECATED
        );
      return (
        t &&
          !We[o] &&
          ((We[o] = !0),
          console.warn(
            n(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(r, o, i)
      );
    };
  };
  var Ke = {
      assertOptions: function (e, t, r) {
        if ("object" !== o(e))
          throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
        for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
          var a = n[i],
            s = t[a];
          if (s) {
            var u = e[a],
              c = void 0 === u || s(u, a, e);
            if (!0 !== c)
              throw new Y(
                "option " + a + " must be " + c,
                Y.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== r)
            throw new Y("Unknown option " + a, Y.ERR_BAD_OPTION);
        }
      },
      validators: Ge,
    },
    Ve = Ke.validators,
    Xe = (function () {
      function e(t) {
        a(this, e),
          (this.defaults = t),
          (this.interceptors = { request: new he(), response: new he() });
      }
      var t, n;
      return (
        u(e, [
          {
            key: "request",
            value:
              ((t = r().mark(function e(t, n) {
                var o, i;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), this._request(t, n)
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 6:
                          throw (
                            ((e.prev = 6),
                            (e.t0 = e.catch(0)),
                            e.t0 instanceof Error &&
                              (Error.captureStackTrace
                                ? Error.captureStackTrace((o = {}))
                                : (o = new Error()),
                              (i = o.stack ? o.stack.replace(/^.+\n/, "") : ""),
                              e.t0.stack
                                ? i &&
                                  !String(e.t0.stack).endsWith(
                                    i.replace(/^.+\n.+\n/, "")
                                  ) &&
                                  (e.t0.stack += "\n" + i)
                                : (e.t0.stack = i)),
                            e.t0)
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 6]]
                );
              })),
              (n = function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, o) {
                  var a = t.apply(e, r);
                  function s(e) {
                    i(a, n, o, s, u, "next", e);
                  }
                  function u(e) {
                    i(a, n, o, s, u, "throw", e);
                  }
                  s(void 0);
                });
              }),
              function (e, t) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "_request",
            value: function (e, t) {
              "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
              var r = (t = He(this.defaults, t)),
                n = r.transitional,
                o = r.paramsSerializer,
                i = r.headers;
              void 0 !== n &&
                Ke.assertOptions(
                  n,
                  {
                    silentJSONParsing: Ve.transitional(Ve.boolean),
                    forcedJSONParsing: Ve.transitional(Ve.boolean),
                    clarifyTimeoutError: Ve.transitional(Ve.boolean),
                  },
                  !1
                ),
                null != o &&
                  (Q.isFunction(o)
                    ? (t.paramsSerializer = { serialize: o })
                    : Ke.assertOptions(
                        o,
                        { encode: Ve.function, serialize: Ve.function },
                        !0
                      )),
                (t.method = (
                  t.method ||
                  this.defaults.method ||
                  "get"
                ).toLowerCase());
              var a = i && Q.merge(i.common, i[t.method]);
              i &&
                Q.forEach(
                  ["delete", "get", "head", "post", "put", "patch", "common"],
                  function (e) {
                    delete i[e];
                  }
                ),
                (t.headers = xe.concat(a, i));
              var s = [],
                u = !0;
              this.interceptors.request.forEach(function (e) {
                ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                  ((u = u && e.synchronous),
                  s.unshift(e.fulfilled, e.rejected));
              });
              var c,
                f = [];
              this.interceptors.response.forEach(function (e) {
                f.push(e.fulfilled, e.rejected);
              });
              var l,
                h = 0;
              if (!u) {
                var p = [ze.bind(this), void 0];
                for (
                  p.unshift.apply(p, s),
                    p.push.apply(p, f),
                    l = p.length,
                    c = Promise.resolve(t);
                  h < l;

                )
                  c = c.then(p[h++], p[h++]);
                return c;
              }
              l = s.length;
              var d = t;
              for (h = 0; h < l; ) {
                var y = s[h++],
                  v = s[h++];
                try {
                  d = y(d);
                } catch (e) {
                  v.call(this, e);
                  break;
                }
              }
              try {
                c = ze.call(this, d);
              } catch (e) {
                return Promise.reject(e);
              }
              for (h = 0, l = f.length; h < l; ) c = c.then(f[h++], f[h++]);
              return c;
            },
          },
          {
            key: "getUri",
            value: function (e) {
              return fe(
                Le((e = He(this.defaults, e)).baseURL, e.url),
                e.params,
                e.paramsSerializer
              );
            },
          },
        ]),
        e
      );
    })();
  Q.forEach(["delete", "get", "head", "options"], function (e) {
    Xe.prototype[e] = function (t, r) {
      return this.request(
        He(r || {}, { method: e, url: t, data: (r || {}).data })
      );
    };
  }),
    Q.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (r, n, o) {
          return this.request(
            He(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: r,
              data: n,
            })
          );
        };
      }
      (Xe.prototype[e] = t()), (Xe.prototype[e + "Form"] = t(!0));
    });
  var $e = Xe,
    Qe = (function () {
      function e(t) {
        if ((a(this, e), "function" != typeof t))
          throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function (e) {
          r = e;
        });
        var n = this;
        this.promise.then(function (e) {
          if (n._listeners) {
            for (var t = n._listeners.length; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              r = new Promise(function (e) {
                n.subscribe(e), (t = e);
              }).then(e);
            return (
              (r.cancel = function () {
                n.unsubscribe(t);
              }),
              r
            );
          }),
          t(function (e, t, o) {
            n.reason || ((n.reason = new ke(e, t, o)), r(n.reason));
          });
      }
      return (
        u(
          e,
          [
            {
              key: "throwIfRequested",
              value: function () {
                if (this.reason) throw this.reason;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.reason
                  ? e(this.reason)
                  : this._listeners
                  ? this._listeners.push(e)
                  : (this._listeners = [e]);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                if (this._listeners) {
                  var t = this._listeners.indexOf(e);
                  -1 !== t && this._listeners.splice(t, 1);
                }
              },
            },
          ],
          [
            {
              key: "source",
              value: function () {
                var t;
                return {
                  token: new e(function (e) {
                    t = e;
                  }),
                  cancel: t,
                };
              },
            },
          ]
        ),
        e
      );
    })();
  var Ye = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Ye).forEach(function (e) {
    var t = f(e, 2),
      r = t[0],
      n = t[1];
    Ye[n] = r;
  });
  var Ze = Ye;
  var et = (function e(t) {
    var r = new $e(t),
      n = m($e.prototype.request, r);
    return (
      Q.extend(n, $e.prototype, r, { allOwnKeys: !0 }),
      Q.extend(n, r, null, { allOwnKeys: !0 }),
      (n.create = function (r) {
        return e(He(t, r));
      }),
      n
    );
  })(Ee);
  return (
    (et.Axios = $e),
    (et.CanceledError = ke),
    (et.CancelToken = Qe),
    (et.isCancel = Ne),
    (et.VERSION = Je),
    (et.toFormData = ie),
    (et.AxiosError = Y),
    (et.Cancel = et.CanceledError),
    (et.all = function (e) {
      return Promise.all(e);
    }),
    (et.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (et.isAxiosError = function (e) {
      return Q.isObject(e) && !0 === e.isAxiosError;
    }),
    (et.mergeConfig = He),
    (et.AxiosHeaders = xe),
    (et.formToJSON = function (e) {
      return be(Q.isHTMLForm(e) ? new FormData(e) : e);
    }),
    (et.getAdapter = Ie),
    (et.HttpStatusCode = Ze),
    (et.default = et),
    et
  );
});
//# sourceMappingURL=axios.min.js.map
