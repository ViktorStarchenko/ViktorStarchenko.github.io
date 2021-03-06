var rrwebRecord = function() {
    "use strict";
    var e, t = function() {
        return (t = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    ! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(e || (e = {}));
    var n = 1;

    function r(e) {
        try {
            var t = e.rules || e.cssRules;
            return t ? Array.from(t).reduce(function(e, t) {
                return e + (function(e) {
                    return "styleSheet" in e
                }(n = t) ? r(n.styleSheet) || "" : n.cssText);
                var n
            }, "") : null
        } catch (e) {
            return null
        }
    }
    var o = /url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/gm,
        a = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/,
        i = /^(data:)([\w\/\+\-]+);(charset=[\w-]+|base64).*,(.*)/i;

    function u(e, t) {
        return e.replace(o, function(e, n, r, o) {
            var u, c = n || r || o;
            if (!c) return e;
            if (!a.test(c)) return "url('" + c + "')";
            if (i.test(c)) return "url(" + c + ")";
            if ("/" === c[0]) return "url('" + (((u = t).indexOf("//") > -1 ? u.split("/").slice(0, 3).join("/") : u.split("/")[0]).split("?")[0] + c) + "')";
            var s = t.split("/"),
                l = c.split("/");
            s.pop();
            for (var d = 0, p = l; d < p.length; d++) {
                var f = p[d];
                "." !== f && (".." === f ? s.pop() : s.push(f))
            }
            return "url('" + s.join("/") + "')"
        })
    }

    function c(e, t) {
        var n = e.createElement("a");
        return n.href = t, n.href
    }

    function s(t, o, a, i, l, d, p) {
        void 0 === l && (l = !1), void 0 === d && (d = !0), void 0 === p && (p = !1);
        var f, h = function(t, n, o, a, i) {
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    return {
                        type: e.Document,
                        childNodes: []
                    };
                case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: e.DocumentType,
                        name: t.name,
                        publicId: t.publicId,
                        systemId: t.systemId
                    };
                case t.ELEMENT_NODE:
                    var s = !1;
                    "string" == typeof o ? s = t.classList.contains(o) : t.classList.forEach(function(e) {
                        o.test(e) && (s = !0)
                    });
                    for (var l = t.tagName.toLowerCase(), d = {}, p = 0, f = Array.from(t.attributes); p < f.length; p++) {
                        var h = f[p],
                            m = h.name,
                            v = h.value;
                        d[m] = "src" === m || "href" === m ? c(n, v) : "style" === m ? u(v, location.href) : v
                    }
                    if ("link" === l && a) {
                        var y, g = Array.from(n.styleSheets).find(function(e) {
                            return e.href === t.href
                        });
                        (y = r(g)) && (delete d.rel, delete d.href, d._cssText = u(y, g.href))
                    }
                    if ("style" === l && t.sheet && !(t.innerText || t.textContent || "").trim().length && (y = r(t.sheet)) && (d._cssText = u(y, location.href)), "input" !== l && "textarea" !== l && "select" !== l || (v = t.value, "radio" !== d.type && "checkbox" !== d.type && v ? d.value = i ? "*".repeat(v.length) : v : t.checked && (d.checked = t.checked)), "option" === l) {
                        var b = t.parentElement;
                        d.value === b.value && (d.selected = t.selected)
                    }
                    if (s) {
                        var E = t.getBoundingClientRect(),
                            C = E.width,
                            w = E.height;
                        d.rr_width = C + "px", d.rr_height = w + "px"
                    }
                    return {
                        type: e.Element,
                        tagName: l,
                        attributes: d,
                        childNodes: [],
                        isSVG: (S = t, "svg" === S.tagName || S instanceof SVGElement || void 0),
                        needBlock: s
                    };
                case t.TEXT_NODE:
                    var N = t.parentNode && t.parentNode.tagName,
                        T = t.textContent,
                        I = "STYLE" === N || void 0;
                    return I && T && (T = u(T, location.href)), "SCRIPT" === N && (T = "SCRIPT_PLACEHOLDER"), {
                        type: e.Text,
                        textContent: T || "",
                        isStyle: I
                    };
                case t.CDATA_SECTION_NODE:
                    return {
                        type: e.CDATA,
                        textContent: ""
                    };
                case t.COMMENT_NODE:
                    return {
                        type: e.Comment,
                        textContent: t.textContent || ""
                    };
                default:
                    return !1
            }
            var S
        }(t, o, i, d, p);
        if (!h) return console.warn(t, "not serialized"), null;
        f = "__sn" in t ? t.__sn.id : n++;
        var m = Object.assign(h, {
            id: f
        });
        t.__sn = m, a[f] = t;
        var v = !l;
        if (m.type === e.Element && (v = v && !m.needBlock, delete m.needBlock), (m.type === e.Document || m.type === e.Element) && v)
            for (var y = 0, g = Array.from(t.childNodes); y < g.length; y++) {
                var b = s(g[y], o, a, i, l, d, p);
                b && m.childNodes.push(b)
            }
        return m
    }

    function l(e, t, n) {
        void 0 === n && (n = document);
        var r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(e, t, r),
            function() {
                return n.removeEventListener(e, t, r)
            }
    }
    var d, p, f, h, m = {
        map: {},
        getId: function(e) {
            return e.__sn ? e.__sn.id : -1
        },
        getNode: function(e) {
            return m.map[e] || null
        },
        removeNodeFromMap: function(e) {
            var t = e.__sn && e.__sn.id;
            delete m.map[t], e.childNodes && e.childNodes.forEach(function(e) {
                return m.removeNodeFromMap(e)
            })
        },
        has: function(e) {
            return m.map.hasOwnProperty(e)
        }
    };

    function v(e, t, n) {
        void 0 === n && (n = {});
        var r = null,
            o = 0;
        return function(a) {
            var i = Date.now();
            o || !1 !== n.leading || (o = i);
            var u = t - (i - o),
                c = this,
                s = arguments;
            u <= 0 || u > t ? (r && (window.clearTimeout(r), r = null), o = i, e.apply(c, s)) : r || !1 === n.trailing || (r = window.setTimeout(function() {
                o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, s)
            }, u))
        }
    }

    function y() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function g() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function b(e, t) {
        if (!e) return !1;
        if (e.nodeType === e.ELEMENT_NODE) {
            var n = !1;
            return "string" == typeof t ? n = e.classList.contains(t) : e.classList.forEach(function(e) {
                t.test(e) && (n = !0)
            }), n || b(e.parentNode, t)
        }
        return b(e.parentNode, t)
    }

    function E(e) {
        return Boolean(e.changedTouches)
    }

    function C(e, t) {
        e.delete(t), t.childNodes.forEach(function(t) {
            return C(e, t)
        })
    }

    function w(e, t) {
        var n = t.parentNode;
        return !!n && (!!e.has(n) || w(e, n))
    }! function(e) {
        e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom"
    }(d || (d = {})),
    function(e) {
        e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove"
    }(p || (p = {})),
    function(e) {
        e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd"
    }(f || (f = {})),
    function(e) {
        e.Start = "start", e.Pause = "pause", e.Resume = "resume", e.Resize = "resize", e.Finish = "finish", e.FullsnapshotRebuilded = "fullsnapshot-rebuilded", e.LoadStylesheetStart = "load-stylesheet-start", e.LoadStylesheetEnd = "load-stylesheet-end", e.SkipStart = "skip-start", e.SkipEnd = "skip-end", e.MouseInteraction = "mouse-interaction"
    }(h || (h = {}));
    var N = function(e, t) {
        return e + "@" + t
    };

    function T(e) {
        return "__sn" in e
    }

    function I(e, t, n, r) {
        var o = new MutationObserver(function(o) {
            var a = [],
                i = [],
                u = [],
                c = [],
                l = new Set,
                d = new Set,
                p = new Set,
                f = {},
                h = function(e, n) {
                    if (!b(e, t)) {
                        if (T(e)) {
                            d.add(e);
                            var r = null;
                            n && T(n) && (r = n.__sn.id), r && (f[N(e.__sn.id, r)] = !0)
                        } else l.add(e), p.delete(e);
                        e.childNodes.forEach(function(e) {
                            return h(e)
                        })
                    }
                };
            o.forEach(function(e) {
                var n = e.type,
                    r = e.target,
                    o = e.oldValue,
                    c = e.addedNodes,
                    s = e.removedNodes,
                    v = e.attributeName;
                switch (n) {
                    case "characterData":
                        var y = r.textContent;
                        b(r, t) || y === o || a.push({
                            value: y,
                            node: r
                        });
                        break;
                    case "attributes":
                        y = r.getAttribute(v);
                        if (b(r, t) || y === o) return;
                        var g = i.find(function(e) {
                            return e.node === r
                        });
                        g || (g = {
                            node: r,
                            attributes: {}
                        }, i.push(g)), g.attributes[v] = y;
                        break;
                    case "childList":
                        c.forEach(function(e) {
                            return h(e, r)
                        }), s.forEach(function(e) {
                            var n = m.getId(e),
                                o = m.getId(r);
                            b(e, t) || (l.has(e) ? (C(l, e), p.add(e)) : l.has(r) && -1 === n || function e(t) {
                                var n = m.getId(t);
                                return !m.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode))
                            }(r) || (d.has(e) && f[N(n, o)] ? C(d, e) : u.push({
                                parentId: o,
                                id: n
                            })), m.removeNodeFromMap(e))
                        })
                }
            });
            var v = [],
                y = function(e) {
                    var o = m.getId(e.parentNode);
                    if (-1 === o) return v.push(e);
                    c.push({
                        parentId: o,
                        previousId: e.previousSibling ? m.getId(e.previousSibling) : e.previousSibling,
                        nextId: e.nextSibling ? m.getId(e.nextSibling) : e.nextSibling,
                        node: s(e, document, m.map, t, !0, n, r)
                    })
                };
            for (Array.from(d).forEach(y), Array.from(l).forEach(function(e) {
                    w(p, e) || function e(t, n) {
                        var r = n.parentNode;
                        if (!r) return !1;
                        var o = m.getId(r);
                        return !!t.some(function(e) {
                            return e.id === o
                        }) || e(t, r)
                    }(u, e) ? w(d, e) ? y(e) : p.add(e) : y(e)
                }); v.length && !v.every(function(e) {
                    return -1 === m.getId(e.parentNode)
                });) y(v.shift());
            var g = {
                texts: a.map(function(e) {
                    return {
                        id: m.getId(e.node),
                        value: e.value
                    }
                }).filter(function(e) {
                    return m.has(e.id)
                }),
                attributes: i.map(function(e) {
                    return {
                        id: m.getId(e.node),
                        attributes: e.attributes
                    }
                }).filter(function(e) {
                    return m.has(e.id)
                }),
                removes: u,
                adds: c
            };
            (g.texts.length || g.attributes.length || g.removes.length || g.adds.length) && e(g)
        });
        return o.observe(document, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), o
    }

    function S(e, t) {
        var n = [];
        return Object.keys(f).filter(function(e) {
                return Number.isNaN(Number(e)) && !e.endsWith("_Departed")
            }).forEach(function(r) {
                var o = r.toLowerCase(),
                    a = function(n) {
                        return function(r) {
                            if (!b(r.target, t)) {
                                var o = m.getId(r.target),
                                    a = E(r) ? r.changedTouches[0] : r,
                                    i = a.clientX,
                                    u = a.clientY;
                                e({
                                    type: f[n],
                                    id: o,
                                    x: i,
                                    y: u
                                })
                            }
                        }
                    }(r);
                n.push(l(o, a))
            }),
            function() {
                n.forEach(function(e) {
                    return e()
                })
            }
    }
    var D, M = ["INPUT", "TEXTAREA", "SELECT"],
        k = ["color", "date", "datetime-local", "email", "month", "number", "range", "search", "tel", "text", "time", "url", "week"],
        x = new WeakMap;

    function _(e, n, r, o) {
        function a(e) {
            var t = e.target;
            if (t && t.tagName && !(M.indexOf(t.tagName) < 0) && !b(t, n)) {
                var a = t.type;
                if ("password" !== a && !t.classList.contains(r)) {
                    var u = t.value,
                        c = !1,
                        s = k.includes(a) || "TEXTAREA" === t.tagName;
                    "radio" === a || "checkbox" === a ? c = t.checked : s && o && (u = "*".repeat(u.length)), i(t, {
                        text: u,
                        isChecked: c
                    });
                    var l = t.name;
                    "radio" === a && l && c && document.querySelectorAll('input[type="radio"][name="' + l + '"]').forEach(function(e) {
                        e !== t && i(e, {
                            text: e.value,
                            isChecked: !c
                        })
                    })
                }
            }
        }

        function i(n, r) {
            var o = x.get(n);
            if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                x.set(n, r);
                var a = m.getId(n);
                e(t({}, r, {
                    id: a
                }))
            }
        }
        var u = ["input", "change"].map(function(e) {
                return l(e, a)
            }),
            c = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
            s = [
                [HTMLInputElement.prototype, "value"],
                [HTMLInputElement.prototype, "checked"],
                [HTMLSelectElement.prototype, "value"],
                [HTMLTextAreaElement.prototype, "value"]
            ];
        return c && c.set && u.push.apply(u, s.map(function(e) {
                return function e(t, n, r, o) {
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    return Object.defineProperty(t, n, o ? r : {
                            set: function(e) {
                                var t = this;
                                setTimeout(function() {
                                    r.set.call(t, e)
                                }, 0), a && a.set && a.set.call(this, e)
                            }
                        }),
                        function() {
                            return e(t, n, a || {}, !0)
                        }
                }(e[0], e[1], {
                    set: function() {
                        a({
                            target: this
                        })
                    }
                })
            })),
            function() {
                u.forEach(function(e) {
                    return e()
                })
            }
    }

    function L(e, t) {
        void 0 === t && (t = {}),
            function(e, t) {
                var n = e.mutationCb,
                    r = e.mousemoveCb,
                    o = e.mouseInteractionCb,
                    a = e.scrollCb,
                    i = e.viewportResizeCb,
                    u = e.inputCb;
                e.mutationCb = function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    t.mutation && t.mutation.apply(t, e), n.apply(void 0, e)
                }, e.mousemoveCb = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    t.mousemove && t.mousemove.apply(t, e), r.apply(void 0, e)
                }, e.mouseInteractionCb = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    t.mouseInteraction && t.mouseInteraction.apply(t, e), o.apply(void 0, e)
                }, e.scrollCb = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    t.scroll && t.scroll.apply(t, e), a.apply(void 0, e)
                }, e.viewportResizeCb = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    t.viewportResize && t.viewportResize.apply(t, e), i.apply(void 0, e)
                }, e.inputCb = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    t.input && t.input.apply(t, e), u.apply(void 0, e)
                }
            }(e, t);
        var n, r, o, a, i, u, c = I(e.mutationCb, e.blockClass, e.inlineStylesheet, e.maskAllInputs),
            s = (n = e.mousemoveCb, o = [], a = v(function(e) {
                var t = Date.now() - r;
                n(o.map(function(e) {
                    return e.timeOffset -= t, e
                }), e ? p.TouchMove : p.MouseMove), o = [], r = null
            }, 500), i = v(function(e) {
                var t = e.target,
                    n = E(e) ? e.changedTouches[0] : e,
                    i = n.clientX,
                    u = n.clientY;
                r || (r = Date.now()), o.push({
                    x: i,
                    y: u,
                    id: m.getId(t),
                    timeOffset: Date.now() - r
                }), a(E(e))
            }, 50, {
                trailing: !1
            }), u = [l("mousemove", i), l("touchmove", i)], function() {
                u.forEach(function(e) {
                    return e()
                })
            }),
            d = S(e.mouseInteractionCb, e.blockClass),
            f = function(e, t) {
                return l("scroll", v(function(n) {
                    if (n.target && !b(n.target, t)) {
                        var r = m.getId(n.target);
                        if (n.target === document) {
                            var o = document.scrollingElement || document.documentElement;
                            e({
                                id: r,
                                x: o.scrollLeft,
                                y: o.scrollTop
                            })
                        } else e({
                            id: r,
                            x: n.target.scrollLeft,
                            y: n.target.scrollTop
                        })
                    }
                }, 100))
            }(e.scrollCb, e.blockClass),
            h = function(e) {
                return l("resize", v(function() {
                    var t = y(),
                        n = g();
                    e({
                        width: Number(n),
                        height: Number(t)
                    })
                }, 200), window)
            }(e.viewportResizeCb),
            C = _(e.inputCb, e.blockClass, e.ignoreClass, e.maskAllInputs);
        return function() {
            c.disconnect(), s(), d(), f(), h(), C()
        }
    }

    function O(e) {
        return t({}, e, {
            timestamp: Date.now()
        })
    }

    function A(e) {
        void 0 === e && (e = {});
        var n, r = e.emit,
            o = e.checkoutEveryNms,
            a = e.checkoutEveryNth,
            i = e.blockClass,
            u = void 0 === i ? "rr-block" : i,
            c = e.ignoreClass,
            f = void 0 === c ? "rr-ignore" : c,
            h = e.inlineStylesheet,
            v = void 0 === h || h,
            b = e.maskAllInputs,
            E = void 0 !== b && b,
            C = e.hooks;
        if (!r) throw new Error("emit function is required");
        "NodeList" in window && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
        var w = 0;

        function N(e) {
            void 0 === e && (e = !1), D(O({
                type: d.Meta,
                data: {
                    href: window.location.href,
                    width: g(),
                    height: y()
                }
            }), e);
            var t = function(e, t, n, r) {
                    void 0 === t && (t = "rr-block"), void 0 === n && (n = !0), void 0 === r && (r = !1);
                    var o = {};
                    return [s(e, e, o, t, !1, n, r), o]
                }(document, u, v, E),
                n = t[0],
                r = t[1];
            if (!n) return console.warn("Failed to snapshot the document");
            m.map = r, D(O({
                type: d.FullSnapshot,
                data: {
                    node: n,
                    initialOffset: {
                        left: document.documentElement.scrollLeft,
                        top: document.documentElement.scrollTop
                    }
                }
            }))
        }
        D = function(e, t) {
            if (r(e, t), e.type === d.FullSnapshot) n = e, w = 0;
            else if (e.type === d.IncrementalSnapshot) {
                w++;
                var i = a && w >= a,
                    u = o && e.timestamp - n.timestamp > o;
                (i || u) && N(!0)
            }
        };
        try {
            var T = [];
            T.push(l("DOMContentLoaded", function() {
                D(O({
                    type: d.DomContentLoaded,
                    data: {}
                }))
            }));
            var I = function() {
                N(), T.push(L({
                    mutationCb: function(e) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: t({
                                source: p.Mutation
                            }, e)
                        }))
                    },
                    mousemoveCb: function(e, t) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: {
                                source: t,
                                positions: e
                            }
                        }))
                    },
                    mouseInteractionCb: function(e) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: t({
                                source: p.MouseInteraction
                            }, e)
                        }))
                    },
                    scrollCb: function(e) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: t({
                                source: p.Scroll
                            }, e)
                        }))
                    },
                    viewportResizeCb: function(e) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: t({
                                source: p.ViewportResize
                            }, e)
                        }))
                    },
                    inputCb: function(e) {
                        return D(O({
                            type: d.IncrementalSnapshot,
                            data: t({
                                source: p.Input
                            }, e)
                        }))
                    },
                    blockClass: u,
                    ignoreClass: f,
                    maskAllInputs: E,
                    inlineStylesheet: v
                }, C))
            };
            return "interactive" === document.readyState || "complete" === document.readyState ? I() : T.push(l("load", function() {
                    D(O({
                        type: d.Load,
                        data: {}
                    })), I()
                }, window)),
                function() {
                    T.forEach(function(e) {
                        return e()
                    })
                }
        } catch (e) {
            console.warn(e)
        }
    }
    return A.addCustomEvent = function(e, t) {
        if (!D) throw new Error("please add custom event after start recording");
        D(O({
            type: d.Custom,
            data: {
                tag: e,
                payload: t
            }
        }))
    }, A
}();
//# sourceMappingURL=rrweb-record.min.js.map