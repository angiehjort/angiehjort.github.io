var gapi = window.gapi = window.gapi || {};

gapi._bs = new Date().getTime();

(function () {
    var e = null,
        f = window,
        h = "push",
        l = "replace",
        m = "length";
    var n = f,
        s = document,
        w = n.location,
        A = function () {}, B = /\[native code\]/,
        C = function (a, b, c) {
            return a[b] = a[b] || c
        }, E = function (a) {
            for (var b = 0; b < this[m]; b++) if (this[b] === a) return b;
            return -1
        }, F = function (a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a[m]; d++) {
                var g = a[d];
                g != c && b[h](g);
                c = g
            }
            return b
        }, G = function () {
            var a;
            if ((a = Object.create) && B.test(a)) a = a(e);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        }, H = C(n, "gapi", {});
    var I;
    I = C(n, "___jsl", G());
    C(I, "I", 0);
    C(I, "hel", 10);
    var J = function () {
        var a = w.href,
            b;
        if (I.dpo) b = I.h;
        else {
            b = I.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a))) try {
                    b = decodeURIComponent(a[2])
            } catch (g) {}
        }
        return b
    }, aa = function (a) {
            var b = C(I, "PQ", []);
            I.PQ = [];
            var c = b[m];
            if (0 === c) a();
            else for (var d = 0, g = function () {
                        ++d === c && a()
                    }, k = 0; k < c; k++) b[k](g)
        }, K = function (a) {
            return C(C(I, "H", G()), a, G())
        };
    var M = C(I, "perf", G()),
        N = C(M, "g", G()),
        ba = C(M, "i", G());
    C(M, "r", []);
    G();
    G();
    var O = function (a, b, c) {
        var d = M.r;
        "function" === typeof d ? d(a, b, c) : d[h]([a, b, c])
    }, Q = function (a, b, c) {
            b && 0 < b[m] && (b = P(b), c && 0 < c[m] && (b += "___" + P(c)), 28 < b[m] && (b = b.substr(0, 28) + (b[m] - 28)), c = b, b = C(ba, "_p", G()), C(b, c, G())[a] = (new Date)
                .getTime(), O(a, "_p", c))
        }, P = function (a) {
            return a.join("__")[l](/\./g, "_")[l](/\-/g, "_")[l](/\,/g, "_")
        };
    var R = G(),
        S = [],
        T;
    T = {
        a: "callback",
        e: "sync",
        c: "config",
        g: "_c",
        f: "h",
        l: "platform",
        i: "jsl",
        TIMEOUT: "timeout",
        d: "ontimeout",
        k: "mh",
        j: "u"
    };
    S[h]([T.i, function (a) {
            for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) {
                    var c = a[b];
                    "object" == typeof c ? I[b] = C(I, b, [])
                        .concat(c) : C(I, b, c)
                }
            if (b = a[T.j]) a = C(I, "us", []), a[h](b), (b = /^https:(.*)$/.exec(b)) && a[h]("http:" + b[1])
        }
    ]);
    var U = decodeURI("%73cript");
    R.m = function (a) {
        var b = I.ms || "https://apis.google.com";
        a = a[0];
        var c;
        if (!(c = !a)) c = 0 <= a.indexOf("..");
        if (c) throw "Bad hint";
        return b + "/" + a[l](/^\//, "")
    };
    var V = function (a) {
        return a.join(",")[l](/\./g, "_")[l](/-/g, "_")
    }, W = function (a, b) {
            for (var c = [], d = 0; d < a[m]; ++d) {
                var g = a[d];
                g && 0 > E.call(b, g) && c[h](g)
            }
            return c
        }, ca = function () {
            var a = J();
            if (!a) throw "Bad hint";
            return a
        }, da = function (a) {
            var b = a.split(";"),
                c = R[b.shift()],
                b = c && c(b);
            if (!b) throw "Bad hint:" + a;
            return b
        }, ea = /^[\/_a-zA-Z0-9,.\-!:=]+$/,
        fa = /^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,
        ga = /\/cb=/g,
        ha = /\/\//g,
        ia = function (a) {
            var b = a.match(ha),
                c = a.match(ga);
            return !!c && 1 === c[m] && fa.test(a) && ea.test(a) && !! b && 1 === b[m]
        }, ja = function (a) {
            "loading" != s.readyState ? X(a) : s.write("<" + U + ' src="' + encodeURI(a) + '"></' + U + ">")
        }, X = function (a) {
            var b = s.createElement(U);
            b.setAttribute("src", a);
            b.async = "true";
            (a = s.getElementsByTagName(U)[0]) ? a.parentNode.insertBefore(b, a) : (s.head || s.body || s.documentElement)
                .appendChild(b)
        }, ka = function (a, b) {
            var c = b && b[T.g];
            if (c) for (var d = 0; d < S[m]; d++) {
                    var g = S[d][0],
                        k = S[d][1];
                    k && Object.prototype.hasOwnProperty.call(c, g) && k(c[g], a, b)
            }
        }, la = function (a, b) {
            Y(function () {
                var c;
                c = b === J() ? C(H, "_",
                    G()) : G();
                c = C(K(b), "_", c);
                a(c)
            })
        }, $ = function (a, b) {
            var c = b || {};
            "function" == typeof b && (c = {}, c[T.a] = b);
            ka(a, c);
            var d = a ? a.split(":") : [],
                g = c[T.f] || ca(),
                k = C(I, "ah", G());
            if (!k["::"] || !d[m]) Z(d || [], c, g);
            else {
                for (var p = [], x = e; x = d.shift();) {
                    var t = x.split("."),
                        t = k[x] || k[t[1] && "ns:" + t[0] || ""] || g,
                        q = p[m] && p[p[m] - 1] || e,
                        y = q;
                    if (!q || q.hint != t) y = {
                            hint: t,
                            b: []
                    }, p[h](y);
                    y.b[h](x)
                }
                var z = p[m];
                if (1 < z) {
                    var D = c[T.a];
                    D && (c[T.a] = function () {
                        0 == --z && D()
                    })
                }
                for (; d = p.shift();) Z(d.b, c, d.hint)
            }
        }, Z = function (a, b, c) {
            a = F(a) || [];
            var d = b[T.a],
                g = b[T.c],
                k = b[T.TIMEOUT],
                p = b[T.d],
                x = e,
                t = !1;
            if (k && !p || !k && p) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            var q = C(K(c), "r", [])
                .sort(),
                y = C(K(c), "L", [])
                    .sort(),
                z = [].concat(q),
                D = function (a, b) {
                    if (t) return 0;
                    n.clearTimeout(x);
                    y[h].apply(y, r);
                    var d = ((H || {})
                        .config || {})
                        .update;
                    d ? d(g) : g && C(I, "cu", [])[h](g);
                    if (b) {
                        Q("me0", a, z);
                        try {
                            la(b, c)
                        } finally {
                            Q("me1", a, z)
                        }
                    }
                    return 1
                };
            0 < k && (x = n.setTimeout(function () {
                t = !0;
                p()
            }, k));
            var r = W(a, y);
            if (r[m]) {
                var r = W(a, q),
                    u = C(I, "CP", []),
                    v = u[m];
                u[v] = function (a) {
                    if (!a) return 0;
                    Q("ml1", r, z);
                    var b = function (b) {
                        u[v] = e;
                        D(r, a) && aa(function () {
                            d && d();
                            b()
                        })
                    }, c = function () {
                            var a = u[v + 1];
                            a && a()
                        };
                    0 < v && u[v - 1] ? u[v] = function () {
                        b(c)
                    } : b(c)
                };
                if (r[m]) {
                    var L = "loaded_" + I.I++;
                    H[L] = function (a) {
                        u[v](a);
                        H[L] = e
                    };
                    a = da(c);
                    a = a[l]("__features__", V(r))[l](/\/$/, "") + (q[m] ? "/ed=1/exm=" + V(q) : "") + ("/cb=gapi." + L);
                    if (!ia(a)) throw "Bad URL " + a;
                    q[h].apply(q, r);
                    Q("ml0", r, z);
                    b[T.e] || n.___gapisync ? ja(a) : X(a)
                } else u[v](A)
            } else D(r) && d && d()
        };
    var Y = function (a) {
        if (I.hee && 0 < I.hel) try {
                return a()
        } catch (b) {
            I.hel--, $("debug_error", function () {
                f.___jsl.hefn(b)
            })
        } else return a()
    };
    H.load = function (a, b) {
        return Y(function () {
            return $(a, b)
        })
    };
    N.bs0 = f.gapi._bs || (new Date)
        .getTime();
    O("bs0");
    N.bs1 = (new Date)
        .getTime();
    O("bs1");
    delete f.gapi._bs;
})();

gapi.load("client", {
    callback: window["gapi_onload"],
    _c: {
        "jsl": {
            "ci": {
                "services": {},
                "deviceType": "desktop",
                "lexps": [102, 103, 100, 71, 98, 96, 79, 45, 17, 86, 81, 93, 61, 91, 30, 90],
                "inline": {
                    "css": 1
                },
                "report": {},
                "oauth-flow": {
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
                    "persist": true
                },
                "isLoggedIn": true,
                "isPlusUser": true,
                "iframes": {
                    "additnow": {
                        "methods": ["launchurl"],
                        "url": "https://apis.google.com/additnow/additnow.html?bsv"
                    },
                    "shortlists": {
                        "url": "?bsv"
                    },
                    "plus": {
                        "methods": ["onauth"],
                        "url": ":socialhost:/u/:session_index:/_/pages/badge?bsv"
                    },
                    ":socialhost:": "https://plusone.google.com",
                    "recobox": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/recobox?bsv"
                    },
                    "plus_followers": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?bsv"
                    },
                    "autocomplete": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"
                    },
                    "plus_share": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"
                    },
                    "savetowallet": {
                        "url": "https://clients5.google.com/s2w/o/savetowallet?bsv"
                    },
                    "panoembed": {
                        "url": "https://ssl.gstatic.com/pano/embed/?bsv"
                    },
                    "signin": {
                        "methods": ["onauth"],
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?bsv"
                    },
                    "appcirclepicker": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv"
                    },
                    "hangout": {
                        "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv"
                    },
                    "plus_circle": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/plus/circle?bsv"
                    },
                    "savetodrive": {
                        "methods": ["save"],
                        "url": "https://drive.google.com/savetodrivebutton?bsv"
                    },
                    "card": {
                        "url": ":socialhost:/:session_prefix:_/hovercard/card?bsv"
                    },
                    "evwidget": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/events/widget?bsv"
                    },
                    ":signuphost:": "https://plus.google.com",
                    "plusone": {
                        "preloadUrl": ["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],
                        "params": {
                            "count": "",
                            "size": "",
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/+1/fastbutton?bsv"
                    }
                },
                "debug": {
                    "host": "https://plusone.google.com",
                    "reportExceptionRate": 0.05,
                    "rethrowException": true
                },
                "csi": {
                    "rate": 0.0
                },
                "googleapis.config": {
                    "mobilesignupurl": "https://m.google.com/app/plus/oob?"
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.Rgj1UDMEWsA.O/m\u003d__features__/am\u003dQQ/rt\u003dj/d\u003d1/rs\u003dAItRSTOBGIO78ke1nPq-lUpNLXIVFuLQXA",
            "u": "https://apis.google.com/js/client.js",
            "hee": true,
            "fp": "ffff6ebccb5263caca4b12aec565f8c0f5c36701",
            "dpo": false
        },
        "fp": "ffff6ebccb5263caca4b12aec565f8c0f5c36701",
        "annotation": ["autocomplete", "profile", "interactivepost"],
        "bimodal": ["signin"]
    }
});