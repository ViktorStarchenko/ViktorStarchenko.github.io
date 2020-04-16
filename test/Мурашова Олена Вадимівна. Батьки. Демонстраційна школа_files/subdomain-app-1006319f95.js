function genFx(t, e) {
    var i = {};
    return FN.each(Fx.Attrs.concat.apply([], Fx.Attrs.slice(0, e)), function() {
        i[this] = t
    }), i
}

function getRGB(t) {
    var e;
    return t && FN.isArray(t) && 3 == t.length ? t : (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)\s*/.exec(t)) ? [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])] : (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(e[1]), 2.55 * parseFloat(e[2]), 2.55 * parseFloat(e[3])] : (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] : void 0
}

function getColor(t, e) {
    var i;
    do {
        if (i = FN.getStyle(t, e), i.indexOf("rgba") || (i = ""), "" != i && "transparent" != i || "body" == t.nodeName.toLowerCase()) break;
        e = "backgroundColor"
    } while (t = t.parentNode);
    return getRGB(i)
}

function scrollToY(t, e, i, n) {}

function scrollToTop(t) {
    return scrollToY(0, t)
}

function scrollGetY() {
    return window.pageYOffset || scrollNode.scrollTop || document.documentElement.scrollTop
}

function addEvent(t, e, i) {
    if (t = FN.ge(t), t && 3 !== t.nodeType && 8 !== t.nodeType) {
        i.$$guid || (i.$$guid = addEvent.guid++), t.events || (t.events = {});
        var n;
        FN.each(e.split(/\s+/), function(e, o) {
            var s = o.split(".")[1] || i.$$guid;
            o = o.split(".")[0], n = t.events[o], n || (n = t.events[o] = {}, t["on" + o] && (n[0] = t["on" + o])), n[s] = i, t["on" + o] = handleEvent.bind(t)
        })
    }
}

function removeEvent(t, e) {
    if (t = FN.ge(t)) {
        var i = e.split(".")[1];
        e = e.split(".")[0], t.events && t.events[e] && (i ? delete t.events[e][i] : (delete t.events[e], t["on" + e] = function() {}))
    }
}

function handleEvent(t) {
    var e = !0;
    t = t || fixEvent(window.event);
    var i = this.events[t.type];
    for (var n in i) this.$$handleEvent = i[n], this.$$handleEvent(t) === !1 && (e = !1);
    return e
}

function fixEvent(t) {
    return t.preventDefault = function() {
        return this.returnValue = !1
    }, t.stopPropagation = function() {
        return this.cancelBubble = !1
    }, t
}

function cancelEvent(t) {
    if (t = t || window.event, !t) return !1;
    for (; t.originalEvent;) t = t.originalEvent;
    return t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !1
}

function checkEvent(t) {
    return (t = t || window.event) && ("click" === t.type || "mousedown" === t.type || "mouseup" === t.type) && (t.which > 1 || t.button > 1 || t.ctrlKey || t.shiftKey || BROWSER.mac && t.metaKey)
}

function addDocumentOutsideClick(t, e, i) {
    addEvent(document, "click", function(n) {
        n = n || window.event;
        var o = n.target || n.srcElement;
        isInsideByAttr(o, t, e) || i()
    })
}

function isInsideByAttr(t, e, i) {
    return !!FN.hasAttr(t, e, i) || !!t.parentNode && isInsideByAttr(t.parentNode, e, i)
}

function doMouseEvent(t, e) {
    if (t = FN.ge(t)) {
        var i = document.createEvent("MouseEvents");
        i.initMouseEvent(e, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !0, !1, 0, null), t.dispatchEvent(i)
    }
}

function boxRefreshCoords(t) {
    var e = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : boxLayerBG.offsetHeight,
        i = BROWSER.mobile ? FN.intval(window.pageYOffset) : 0,
        n = FN.getSize(t)[1];
    t.style.marginTop = Math.max(10, i + (e - n) / 3) + "px"
}

function curBox() {
    var t = _message_boxes[__bq.curBox];
    return t && t.isVisible() ? t : null
}

function MessageBox(t, e) {
    function i() {
        t.title ? (c.innerHTML = t.title, FN.removeClass(d, "box_no_title"), FN.show(l)) : (FN.addClass(d, "box_no_title"), FN.hide(l)), a.style.width = "string" == typeof t.width ? t.width : t.width + "px", a.style.height = "string" == typeof t.height ? t.height : t.height + "px"
    }

    function n(t, e, i) {
        m++, "no" == i && (i = "gray"), "yes" == i && (i = "blue");
        var n = FN.ce("input", {
                className: "button_" + (i ? i : "blue"),
                type: "button",
                value: t
            }),
            o = f.rows[0],
            s = o.insertCell(0);
        return s.appendChild(n), createButton(n, e), n
    }

    function o() {
        for (var t = f.rows[0]; t.cells.length;) FN.cleanElems(t.cells[0]), t.deleteCell(0)
    }
    var s = {
        title: !1,
        width: 410,
        height: "auto",
        animSpeed: 0,
        bodyStyle: "",
        dark: !1,
        selfDestruct: !0,
        progress: !1,
        noCloseButton: !1,
        hideOnBGClick: !0,
        hideButtons: !1,
        onShow: !1,
        onHideAttempt: !1,
        onBeforeHide: !1,
        onHide: !1,
        onClean: !1,
        onDestroy: !1
    };
    t = FN.extend(s, t), e && (t.dark = e);
    var a, r, l, c, u, d, h, p, f, v, g, _ = _message_box_guid++,
        b = !1,
        m = 0;
    t.progress || (t.progress = "box_progress" + _);
    var N = t.hideButtons ? ' style="display: none"' : "";
    a = FN.ce("div", {
        className: "popup_box_container" + (t.dark ? " box_dark" : ""),
        innerHTML: '<div class="box_layout" onclick="__bq.skip=true;"><div class="box_title_wrap"><div class="box_x_button"></div><div class="box_title"></div></div><div class="box_body" style="' + t.bodyStyle + '"></div><div class="box_controls_wrap"' + N + '><div class="box_controls"><table class="fl_r"><tr></tr></table><div clss="progress" id="' + t.progress + '"></div><div class="box_controls_text"></div></div></div></div>'
    }, {
        display: "none"
    }), FN.hide(a), r = FN.domFC(a), l = FN.domFC(r), u = FN.domFC(l), t.noCloseButton && FN.hide(u), c = FN.domNS(u), d = FN.domNS(l), h = FN.domNS(d), p = FN.domFC(h), f = FN.domFC(p), v = FN.domNS(f), g = FN.domNS(v), boxLayer.appendChild(a), i(), boxRefreshCoords(a);
    var y = function() {
            FN.isFunction(t.onClean) && t.onClean(), FN.isFunction(t.onDestroy) && t.onDestroy(), o(), FN.cleanElems(a, u, l, h), boxLayer.removeChild(a), delete _message_boxes[_]
        },
        F = function(e, i) {
            function n() {
                __bq.currHiding == _message_boxes[_] && (__bq.currHiding = !1), _layerAnim || _message_boxes[_].shOther || e || layers.boxhide(), !i && t.selfDestruct ? y() : FN.hide(a), FN.isFunction(t.onHide) && t.onHide()
            }
            if (b) {
                b = !1;
                var o = e === !0 ? 0 : t.animSpeed;
                t.hideOnBGClick && removeEvent(document, "click", __bq.hideBGClick), FN.isFunction(t.onBeforeHide) && t.onBeforeHide(), _layerAnim && !e && layers.boxhide(), o > 0 ? (__bq.currHiding = _message_boxes[_], FN.hide(a), n()) : n()
            }
        },
        k = function(e, i, n) {
            if (!b && _message_boxes[_]) {
                b = !0;
                var o = e === !0 || i ? 0 : t.animSpeed;
                if (t.hideOnBGClick && addEvent(document, "click", __bq.hideBGClick), i || layers.boxshow(), __bq.currHiding) {
                    __bq.currHiding.shOther = !0;
                    __bq.currHiding.bodyNode.parentNode.parentNode
                }
                o > 0 ? FN.show(a) : FN.show(a), boxRefreshCoords(a), FN.isFunction(t.onShow) && t.onShow(n), _message_box_shown = !0
            }
        };
    t.dark && FN.addClass(boxLayerBG, "bg_dark"), addEvent(u, "click", __bq.hideLast);
    var w = _message_boxes[_] = {
        guid: _,
        _show: k,
        _hide: F,
        bodyNode: d,
        boxContainer: a,
        show: function() {
            return __bq._show(_), this
        },
        progress: v,
        showProgress: function() {
            FN.hide(g), FN.show(v)
        },
        hideProgress: function() {
            FN.hide(v), FN.show(g)
        },
        hide: function(e) {
            return !(FN.isFunction(t.onHideAttempt) && !t.onHideAttempt(e)) && (__bq._hide(_), t.dark && FN.removeClass(boxLayerBG, "bg_dark"), !0)
        },
        isVisible: function() {
            return b
        },
        bodyHeight: function() {
            return FN.getStyle(d, "height")
        },
        content: function(e) {
            return FN.isFunction(t.onClean) && t.onClean(), $(d).html(e), boxRefreshCoords(a), i(), this
        },
        addButton: function(t, e, i, o) {
            var s = n(t, e ? e : this.hide, i);
            return o ? s : this
        },
        setButtons: function(t, e, i, n) {
            var o = this.removeButtons();
            return t ? (i && o.addButton(i, n, "no"), o.addButton(t, e)) : o.addButton("Закрити")
        },
        removeButtons: function() {
            return o(), this
        },
        destroy: y,
        setOptions: function(e) {
            if (t.hideOnBGClick && removeEvent(document, "click", __bq.hideBGClick), t = FN.extend(t, e), "bodyStyle" in e)
                for (var n = t.bodyStyle.split(";"), o = 0, s = n.length; o < s; ++o) {
                    var r = n[o].split(":");
                    r.length > 1 && r[0].length && (d.style[FN.trim(r[0])] = FN.trim(r[1]), d.style.setProperty && d.style.setProperty(FN.trim(r[0]), FN.trim(r[1]), ""))
                }
            return t.hideOnBGClick && addEvent(document, "click", __bq.hideBGClick), FN.toggle(h, !t.hideButtons), i(), boxRefreshCoords(a), this
        }
    };
    return w
}

function showBox(t, e, i, n) {
    if (checkEvent(n)) return !1;
    e = e || {}, i = i || {};
    var o = new MessageBox(i, i.dark),
        s = {
            onDone: function(t) {
                try {
                    FN.show(boxLayerBG), FN.show(boxLayerWrap), o.setOptions({
                        hideButton: e.hideButtons || !1
                    }), i.showProgress ? o.show() : FN.show(o.bodyNode), o.content(t), FN.isFunction(i.onDone) && i.onDone()
                } catch (n) {
                    FN.showTopMessage("Error (showBox.onDone)", 5)
                }
            },
            onFail: function(t) {
                if (o.failed = !0, o.hide(), FN.isFunction(i.onFail)) return i.onFail(t)
            }
        };
    return i.showProgress ? FN.extend(s, {
        showProgress: i.showProgress,
        hideProgress: i.hideProgress
    }) : (o.setOptions({}).show(), __bq.count() < 2 && FN.hide(boxLayerBG), s.showProgress = function() {
        FN.hide(o.boxContainer), FN.show(boxLoader), boxRefreshCoords(boxLoader)
    }, s.hideProgress = function() {
        FN.hide(boxLoader), FN.show(o.boxContainer)
    }), $.ajax({
        url: t,
        type: "get",
        dataType: "html",
        beforeSend: function(t, e) {
            SETTINGS.ajaxParams.beforeSend(t, e), s.showProgress()
        },
        complete: function() {
            s.hideProgress()
        },
        success: function(t) {
            s.onDone(t)
        },
        error: function(t, e) {
            SETTINGS.ajaxParams.error(t, e), s.onFail()
        }
    }), o
}

function showWriteMessageBox(t, e) {
    var i = showBox(e, {}, {
        title: "Нове повідомлення",
        width: 500,
        hideButtons: !0
    }, t);
    return i && cancelEvent(t), !i
}

function sendMessage(t) {
    var e = FN.trim(val(FN.ge("msg_wb_text"))),
        i = FN.ge("message-form"),
        n = FN.geByAttr("name", "saved_attachments", "input", i);
    if (files_exists = n && n.length, e.length || files_exists) {
        if (e.length > 7e3) {
            var o = '<span class="clr-red">Повідомлення занадто довге (до 7000 символів)</span>';
            return void showAlertBox(o, "Повідомлення")
        }
        $.ajax({
            url: t,
            dataType: "html",
            data: $(i).serialize(),
            beforeSend: function(t, e) {
                SETTINGS.ajaxParams.beforeSend(t, e), lockButton("msg_wb_btn")
            },
            complete: function() {
                unlockButton("msg_wb_btn")
            },
            success: function(t) {
                curBox().hide(), showTemporary("<b>Повідомлення відправлено</b>")
            },
            error: function(t, e) {
                SETTINGS.ajaxParams.error(t, e);
                var i = '<span class="clr-red">Помилка при відправці повідомлення</span>';
                showAlertBox(i, "Повідомлення")
            }
        })
    }
}

function showSupportBox(t, e) {
    var i = showBox(e, {}, {
        title: "Повідомлення розробникам платформи E-schools.info",
        width: 440,
        hideButtons: !0
    }, t);
    return i && cancelEvent(t), !i
}

function sendSupportMessage(t) {
    var e = FN.trim(val(FN.ge("support_wb_text")));
    if (e.length) {
        if (e.length > 2e3) {
            var i = '<span class="clr-red">Повідомлення занадто довге (до 2000 символів)</span>';
            return void showAlertBox(i, "Повідомлення")
        }
        $.ajax({
            url: t,
            data: {
                text: e
            },
            dataType: "html",
            beforeSend: function(t, e) {
                SETTINGS.ajaxParams.beforeSend(t, e), lockButton("support_wb_btn")
            },
            complete: function() {
                unlockButton("support_wb_btn")
            },
            success: function(t) {
                curBox().hide(), showTemporary("<b>Повідомлення відправлено</b>")
            },
            error: function(t, e) {
                SETTINGS.ajaxParams.error(t, e);
                var i = '<span class="clr-red">Помилка при відправці повідомлення</span>';
                showAlertBox(i, "Повідомлення")
            }
        })
    }
}

function showTemporary(t, e) {
    if (void 0 !== t) {
        e = e ? e : 1600;
        var i = FN.ce("div", {
            className: "temporary_box",
            innerHTML: t
        });
        bodyNode.appendChild(i), FN.show(i), boxRefreshCoords(i), i.style.marginLeft = -1 * (FN.getSize(i)[0] / 2) + "px", setTimeout(function() {
            FN.hide(i), bodyNode.removeChild(i)
        }, e)
    }
}

function showFastBox(t, e, i, n, o, s) {
    return new MessageBox("string" == typeof t ? {
        title: t
    } : t).content(e).setButtons(i, n, o, s).show()
}

function showAlertBox(t, e, i, n, o, s) {
    t = void 0 === t ? "" : t;
    var a = '<div class="alert_box_cont">' + t + "</div>";
    showFastBox({
        title: !!e && e,
        noCloseButton: !0
    }, a, i, n, o, s)
}

function showPhoto(t, e, i, n) {
    if (!checkEvent(n)) {
        var o = window.Photoview;
        if (o && o.showPhoto(t, e, i) === !1) return !1;
        return !1
    }
}

function createButton(t, e) {
    if (t = FN.ge(t), t && !t.btnevents) return FN.hasClass(t, "button_blue") || FN.hasClass(t, "button_gray") ? void(FN.isFunction(e) && (t.onclick = e)) : void(t.btnevents = !0)
}

function lockButton(t) {
    if (t = FN.ge(t), t && FN.hasClass(t.parentNode, "button_wrap") && !isButtonLocked(t)) {
        var e = t.tagName.toLowerCase(),
            i = FN.ce("span", {
                className: "button_lock"
            });
        t.parentNode.insertBefore(i, t);
        var n = "input" === e || "button" === e ? FN.getSize(t, !1) : FN.getSize(t, !0);
        FN.setStyle(t, {
            width: n[0],
            height: n[1]
        });
        var o = t.tagName.toLowerCase();
        "input" === o ? (t.oldHtml = t.value, t.value = "") : (t.oldHtml = t.innerHTML, t.innerHTML = "")
    }
}

function unlockButton(t) {
    if (t = FN.ge(t), t && FN.hasClass(t.parentNode, "button_wrap")) {
        var e = FN.geByClass1("button_lock", t.parentNode);
        if (e) {
            t.parentNode.removeChild(e), FN.setStyle(t, {
                width: "auto",
                height: "auto"
            });
            var i = t.tagName.toLowerCase();
            "input" === i ? t.value = t.oldHtml : t.innerHTML = t.oldHtml
        }
    }
}

function isButtonLocked(t) {
    if (t = FN.ge(t)) {
        var e = FN.geByClass1("button_lock", t.parentNode);
        return !!e
    }
}

function val(t, e, i) {
    if (t = FN.ge(t)) return void 0 !== e && (t.setValue ? (t.setValue(e), !i && t.phonblur && t.phonblur()) : "INPUT" == t.tagName || "TEXTAREA" == t.tagName ? t.value = e : t.innerHTML = e), t.getValue ? t.getValue() : ("INPUT" == t.tagName || "TEXTAREA" == t.tagName ? t.value : t.innerHTML) || ""
}

function inherits(t, e) {
    var i = function() {};
    i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t, t.superclass = e.prototype
}

function doFullVersion() {
    return $.cookie("force_full_version", "1", {
        domain: LOC.domain,
        path: "/",
        expires: 30
    }), !1
}

function doMobileVersion() {
    return $.cookie("force_full_version", "", {
        domain: LOC.domain,
        path: "/",
        expires: 30
    }), !1
}

function onBodyResize(t) {
    var e = window,
        i = document.documentElement;
    e.lastWindowHeight = 0
    e.lastWindowWidth = 0
    // Comment 06.05.2019
    // if (e.pageNode) {
    //     var n = Math.max(FN.intval(e.innerWidth), FN.intval(i.clientWidth)),
    //         o = Math.max(FN.intval(e.innerHeight), FN.intval(i.clientHeight)),
    //         s = FN.sbWidth(),
    //         a = !1;
    //     if (BROWSER.mobile || (BROWSER.msie7 ? htmlNode.scrollHeight > htmlNode.offsetHeight && !layers.visible && (n += s + 1) : BROWSER.msie8 && htmlNode.scrollHeight + 3 > htmlNode.offsetHeight && !layers.visible && (n += s + 1)), !e.lastWindowWidth || e.lastWindowWidth !== n || t === !0) {
    //         a = !0, e.lastInnerWidth = e.lastWindowWidth = n, layerWrap.style.width = boxLayerWrap.style.width = n + "px";
    //         layer.style.width = boxLayer.style.width = n - s - 2 + "px";
    //         if (!BROWSER.mobile && n)
    //             for (var r = pageNode.firstChild; r; r = r.nextSibling)
    //                 if (r.tagName)
    //                     for (var l = r.firstChild; l; l = l.nextSibling) FN.hasClass(l, "scroll_fix") && (l.style.width = (e.lastInnerWidth = n - s * (BROWSER.msie7 ? 2 : 1) - 1) - 1 + "px")
    //     }
    //     e.lastWindowHeight && e.lastWindowHeight === o && t !== !0 || (a = !0, e.lastWindowHeight = o, layerBG.style.height = boxLayerBG.style.height = layerWrap.style.height = boxLayerWrap.style.height = o + "px", BROWSER.mobile || BROWSER.mozilla && layers.visible && (pageNode.style.height = _oldScroll + o + "px"))
    // }
}

function domStarted() {
    window.headNode = FN.geByTag1("head"), window.htmlNode = FN.geByTag1("html"), window.bodyNode = document.body, window.loader = '<div class="loader"></div>', window.overlay = FN.ge("overlay"), FN.extend(window, {
        layerBG: FN.ge("layer_bg"),
        layerWrap: FN.ge("layer_wrap"),
        layer: FN.ge("layer"),
        boxLayerBG: FN.ge("box_layer_bg"),
        boxLayerWrap: FN.ge("box_layer_wrap"),
        boxLayer: FN.ge("box_layer"),
        boxLoader: FN.ge("box_loader")
    }), addEvent(boxLayerWrap, "click", __bq.hideLastCheck), FN.extend(layers, {
        show: layers._show.pbind(layerBG, layerWrap),
        boxshow: layers._show.pbind(boxLayerBG, boxLayerWrap),
        wrapshow: layers._show.pbind(layerBG),
        hide: layers._hide.pbind(layerBG, layerWrap),
        boxhide: layers._hide.pbind(boxLayerBG, boxLayerWrap),
        wraphide: layers._hide.pbind(layerBG)
    }), BROWSER.mobile && BROWSER.chrome && FN.addClass(bodyNode, "chrome")
}

function domReady() {
    window.pageNode = FN.ge("page_wrap")
    window.scrollNode = BROWSER.chrome || BROWSER.safari ? bodyNode : htmlNode
    window.footerNode = FN.ge("footer")
    onBodyResize()
    // setInterval(function() {
    //     bodyNode.onresize || (bodyNode.onresize = onBodyResize.pbind(!1))
    // }, 1e3)
    BROWSER.msie && BROWSER.version < 9 && bodyNode.insertBefore(FN.ce("div", {
        className: "old_browser_message",
        innerHTML: 'Ви використовуєте застарілий браузер. Будь ласка, <a href="http://browsehappy.com/">поновіть ваш браузер</a>.<br>Користуватися Інтернетом вам стане набагато приємніше :)'
    }), pageNode)
}

function insert_objects_data_in_form(t, e) {
    for (var i in e) {
        var n = e[i];
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", i.toString() + "." + o), s.setAttribute("value", n[o] || ""), t.appendChild(s)
            }
    }
}

function SupervisorGraph(t, e) {
    var i = this;
    e = e || {}, this.containerId = t || "", this.pupilId = e.pupilId || "", this.subjectsIds = e.subjectsIds || [], this.activeSubjectId = ko.observable(void 0), this.isDataEmpty = ko.observable(!1), this.isSelectVisible = ko.observable(!1), this.isSelectMode = ko.observable(!1), this.isSelectMode.subscribe(function(t) {
        t ? i.isSelectVisible(!0) : (i.isSelectVisible(!1), i.plotAll())
    }), this.plotAll()
}

function changeCheckboxes(t, e) {
    var i = FN.ge(t);
    if (i) {
        var n = FN.geByAttr("type", "checkbox", "input", i);
        n && n.length && FN.each(n, function(t, i) {
            i.checked = e
        })
    }
}

function afterNumeral(t, e, i, n, o) {
    var s = e;
    return t % 100 > 10 && t % 100 < 20 ? s + o : (t %= 10, s += 1 === t ? i : t >= 2 && t <= 4 ? n : o)
}

function clickActiveAnchor(t) {
    var t = t || LOC.hash;
    if (t && "photo" == t.substr(0, 5)) {
        var e = 1 * t.substr(5);
        $('a[href$="/photo/' + e + '"]').click()
    }
}

function gridStatsIntoView() {
    $(".grid-stats-1").get(0).scrollIntoView(!1)
}

function loadScript(t, e) {
    var i = document.createElement("script");
    i.type = "text/javascript", i.src = t, i.readyState ? i.onreadystatechange = function() {
        "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, e())
    } : (i.onload = function() {
        e()
    }, i.onerror = function() {}), document.getElementsByTagName("head")[0].appendChild(i)
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "uk",
        includedLanguages: "uk,ru",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, "google_translate_element")
}
var LOC = window.LOC = {
    host: location.host,
    domain: location.host.split(".").slice(-2).join(".").split(":")[0],
    href: location.href,
    path: location.pathname,
    hash: location.hash.replace("#", ""),
    protocol: location.protocol,
    base: location.toString().replace(/#.+$/, ""),
    search: location.search
};
LOC.hash = LOC.hash ? LOC.hash.split("-open")[0] : "";
var isMobile = window.isMobile = /^\/m(\/.*)?$/.test(window.location.pathname);
if (!window._ua) var _ua = navigator.userAgent.toLowerCase();
var BROWSER = {
        version: (_ua.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        opera: /opera/i.test(_ua),
        msie: /msie/i.test(_ua) && !/opera/i.test(_ua),
        msie6: /msie 6/i.test(_ua) && !/opera/i.test(_ua),
        msie7: /msie 7/i.test(_ua) && !/opera/i.test(_ua),
        msie8: /msie 8/i.test(_ua) && !/opera/i.test(_ua),
        msie9: /msie 9/i.test(_ua) && !/opera/i.test(_ua),
        mozilla: /firefox/i.test(_ua),
        chrome: /chrome/i.test(_ua),
        safari: !/chrome/i.test(_ua) && /webkit|safari|khtml/i.test(_ua),
        iphone: /iphone/i.test(_ua),
        iphone4: /iphone.*OS 4/i.test(_ua),
        ipod: /ipod/i.test(_ua),
        ipod4: /ipod.*OS 4/i.test(_ua),
        ipad: /ipad/i.test(_ua),
        android: /android/i.test(_ua),
        bada: /bada/i.test(_ua),
        mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(_ua),
        msie_mobile: /iemobile/i.test(_ua),
        safari_mobile: /iphone|ipod|ipad/i.test(_ua),
        opera_mobile: /opera mini|opera mobi/i.test(_ua),
        opera_mini: /opera mini/i.test(_ua),
        mac: /mac/i.test(_ua)
    },
    CURRENT = {},
    TIME = {
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5
    },
    KEY = window.KEY = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        PAGEUP: 33,
        PAGEDOWN: 34,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SPACE: 32,
        NUM0: 48,
        NUM1: 49,
        NUM2: 50,
        NUM3: 51,
        NUM4: 52,
        NUM5: 53,
        NUM6: 54,
        NUM7: 55,
        NUM8: 56,
        NUM9: 57,
        D: 68,
        R: 82,
        Y: 89,
        NUM0_: 96,
        NUM1_: 97,
        NUM2_: 98,
        NUM3_: 99,
        NUM4_: 100,
        NUM5_: 101,
        NUM6_: 102,
        NUM7_: 103,
        NUM8_: 104,
        NUM9_: 105
    },
    SETTINGS = window.SETTINGS = {};
SETTINGS.ajaxParams = {
    type: "post",
    dataType: "json",
    beforeSend: function(t, e) {
        /^http:.*/.test(e.url) || /^https:.*/.test(e.url) || t.setRequestHeader("X-CSRFToken", FN.getCookie("csrftoken"))
    },
    error: function(t, e) {
        var i = "";
        if (!t.getAllResponseHeaders()) return void(i = "Ajax-запит перерваний.");
        switch (t.status) {
            case 0:
                i = "Немає з'єднання.";
                break;
            case 404:
                i = "Запитувана сторінка не знайдена [404].";
                break;
            case 403:
                i = t.responseText || "Доступ заборонено [403].";
                break;
            case 500:
                i = "Внутрішня помилка сервера [500]. Це погано.<br/>Але розробникам вже відправлені дані про помилку,<br/>і скоро все налагодиться.";
                break;
            default:
                switch (e) {
                    case "parsererror":
                        i = "Запитуваний JSON-парсинг не вдався.";
                        break;
                    case "timeout":
                        i = "Помилка часу очікування.";
                        break;
                    case "abort":
                        i = "Ajax-запит перерваний.";
                        break;
                    default:
                        i = t.responseText || "Інша помилка"
                }
        }
        var n = 'Помилка ajax-запиту:  <div class="response"><b>' + i + "</b></div>";
        FN.showTopMessage(n, 7)
    }
}, $.ajaxSetup(SETTINGS.ajaxParams), SETTINGS.validationMessages = {
    required: "Поле має бути заповнене.",
    email: "Невірний формат e-mail.",
    url: "Невірний формат URL.",
    date: "Невірний формат дати.",
    dateISO: "Невірний формат дати (ISO).",
    number: "Введіть число.",
    digits: "Допускаються тільки цифри.",
    ruDate: 'Введіть коректну дату (у форматі "dd.mm.yyyy")'
}, $.validator && ($.extend($.validator.messages, SETTINGS.validationMessages), $.validator.addMethod("ruDate", function(t, e) {
    return FN.validate.ruDate(t)
}, SETTINGS.validationMessages.ruDate));
var TABLE = {};
TABLE.getRows = function(t) {
    if (t) {
        var e = FN.geByTag1("tbody", t) || t;
        return FN.geByTag("tr", e)
    }
}, TABLE.getCells = function(t) {
    if (t) {
        var e = FN.geByTag1("tbody", t) || t;
        return FN.geByTag("td", e)
    }
}, TABLE.getVisibleRows = function(t) {
    if (t) {
        var e = [],
            i = FN.geByTag1("tbody", t) || t,
            n = FN.geByTag("tr", i);
        return FN.each(n, function(t, i) {
            FN.isVisible(i) && e.push(n[t])
        }), e
    }
}, TABLE.getOddRows = function(t) {
    return this._getRowsByParams(t, !0, !1)
}, TABLE.getVisibleOddRows = function(t) {
    return this._getRowsByParams(t, !0, !0)
}, TABLE.getEvenRows = function(t) {
    return this._getRowsByParams(t, !1, !1)
}, TABLE.getVisibleEvenRows = function(t) {
    return this._getRowsByParams(t, !1, !0)
}, TABLE.doEvenRows = function(t) {
    var e = this.getRows(t);
    FN.each(e, function(t, e) {
        FN.removeClass(e, "even")
    }), e = this.getVisibleEvenRows(t), FN.each(e, function(t, e) {
        FN.addClass(e, "even")
    })
}, TABLE.doOddRows = function(t) {
    var e = this.getRows(t);
    FN.each(e, function(t, e) {
        FN.removeClass(e, "odd")
    }), e = this.getVisibleOddRows(t), FN.each(e, function(t, e) {
        FN.addClass(e, "odd")
    })
}, TABLE._getRowsByParams = function(t, e, i) {
    var n = [],
        o = e ? 0 : 1,
        s = i ? TABLE.getVisibleRows(t) : TABLE.getRows(t);
    return FN.each(s, function(t, e) {
        t % 2 === o && n.push(e)
    }), n
};
var TABLE_SORTER = {};
TABLE_SORTER.textExtraction = function(t) {
    var e = t.getAttribute("data-sorter");
    if (null !== e) return 1 * e;
    var i = FN.geByClass1("sorting_text", t);
    return (i || t).innerHTML
};
var CHARTS = {
    processData: function(t) {
        t && FN.each(t, function(t, e) {
            FN.each(e, function(t, i) {
                null === i && (e[t] = void 0)
            })
        })
    },
    toggleLabels: function(t, e, i) {
        t && e && i && (!e.hidden && i.hidden ? (e.labelText = "[[value]]", t.validateNow()) : (e.labelText = "", t.validateNow()))
    },
    toggleBullets: function(t, e, i) {
        t && e && i && (!e.hidden && i.hidden ? (e.bullet = "round", e.showBalloon = !0, t.validateNow()) : (e.bullet = "none", e.showBalloon = !1, t.validateNow()))
    },
    labelFunction: function(t, e) {
        return function(i, n, o) {
            return t <= i && i <= e ? i : ""
        }
    }
};
Function.prototype.pbind = function() {
    var t = Array.prototype.slice.call(arguments);
    return t.unshift(window), this.bind.apply(this, t)
}, Function.prototype.bind = function() {
    var t = this,
        e = Array.prototype.slice.call(arguments),
        i = e.shift();
    return function() {
        var n = Array.prototype.slice.call(arguments);
        return t.apply(i, e.concat(n))
    }
};
var FN = {};
FN.getCookie = function(t) {
    var e = null;
    if (document.cookie && "" != document.cookie) {
        var i, n, o = document.cookie.split(";"),
            s = o.length;
        for (i = 0; i < s; i += 1)
            if (n = FN.trim(o[i]), n.substring(0, t.length + 1) == t + "=") {
                e = decodeURIComponent(n.substring(t.length + 1));
                break
            }
    }
    return e
}, FN.validate = {}, FN.validate.ruDate = function(t) {
    if (!t.match(/^\d\d?\.\d\d?\.\d\d\d\d$/)) return !1;
    var e = t.split(".");
    if (3 !== e.length) return !1;
    var i = e[1] + "/" + e[0] + "/" + e[2],
        n = new Date(Date.parse(i)),
        o = {
            date: n.getDate(),
            month: n.getMonth() + 1,
            year: n.getFullYear()
        };
    o.date = o.date < 10 ? "0" + o.date : o.date, o.month = o.month < 10 ? "0" + o.month : o.month;
    var s = o.date + "." + o.month + "." + o.year;
    return t === s
}, FN.showTopMessage = function(t, e, i) {
    var n = FN.showTopMessage,
        o = FN.ge("system_msg");
    t ? (clearTimeout(n.timer), o.style.backgroundColor = i || "pink", o.innerHTML = t, FN.show(o), e && (n.timer = setTimeout(function() {
        o.innerHTML = "", FN.hide(o), n.pbind(!1)
    }, 1e3 * e))) : FN.hide(o)
}, FN.log = function(t, e) {
    console.log(t)
}, FN.toFixed = function(t, e) {
    return void 0 === e && (e = 5), t.toFixed(e).replace(/\.(\d*?)(0+)$/g, function(t, e, i) {
        return t.substring(0, t.length - (e.length ? 0 : 1) - i.length)
    })
}, FN.rand = function(t, e) {
    return Math.random() * (e - t) + t
}, FN.irand = function(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t)
}, FN.isFunction = function(t) {
    return "[object Function]" === Object.prototype.toString.call(t)
}, FN.isArray = function(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
}, FN.isObject = function(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
}, FN.isEmpty = function(t) {
    if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
    for (var e in t)
        if (t.hasOwnProperty(e)) return !1;
    return !0
}, FN.trim = function(t) {
    return (t || "").replace(/^\s+|\s+$/g, "")
}, FN.stripHTML = function(t) {
    return t ? t.replace(/<(?:.|\s)*?>/g, "") : ""
}, FN.intval = function(t) {
    return t === !0 ? 1 : parseInt(t) || 0
}, FN.floatval = function(t) {
    return t === !0 ? 1 : parseFloat(t) || 0
}, FN.positive = function(t) {
    return t = FN.intval(t), t < 0 ? 0 : t
}, FN.parseJSON = function(str) {
    var obj;
    return eval("obj = " + str), obj || {}
}, FN.insertAtCaret = function(t, e) {
    if (document.selection) {
        t.focus();
        var i = document.selection.createRange();
        i.text = e, t.focus()
    } else if (t.selectionStart || "0" == t.selectionStart) {
        var n = t.selectionStart,
            o = t.selectionEnd,
            s = t.scrollTop;
        t.value = t.value.substring(0, n) + e + t.value.substring(o, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = s
    } else t.value += e, t.focus()
}, FN.each = function(t, e) {
    var i, n = t.length;
    if (void 0 === n) {
        for (var o in t)
            if (t.hasOwnProperty(o) && (i = t[o], e.call(i, o, i) === !1)) break
    } else
        for (var s = 0; s < n && (i = t[s], e.call(i, s, i) !== !1); s += 1);
}, FN.indexOf = function(t, e, i) {
    for (var n = i || 0, o = (t || []).length; n < o; n += 1)
        if (e === t[n]) return n;
    return -1
}, FN.inArray = function(t, e) {
    return FN.indexOf(e, t) !== -1
}, FN.clone = function(t, e) {
    var i = FN.isArray(t) ? [] : {};
    for (var n in t) {
        var o = t[n];
        e && "object" == typeof o && "prototype" !== n ? i[n] = FN.clone(o) : i[n] = o
    }
    return i
}, FN.arrayKeyDiff = function(t) {
    var e, i = {},
        n = arguments,
        o = arguments.length;
    for (var s in t) {
        e = !1;
        for (var a = 1; a < o; a++) n[a][s] && n[a][s] == t[s] && (e = !0);
        e || (i[s] = t[s])
    }
    return i
}, FN.extend = function() {
    var t, e = arguments,
        i = e[0] || {},
        n = !1,
        o = 1,
        s = e.length;
    for ("boolean" == typeof i && (n = i, i = e[1] || {}, o = 2); o < s; o++)
        if (null != (t = e[o]))
            for (var a in t) {
                var r = i[a],
                    l = t[a];
                r !== l && (n && l && "object" == typeof l && !l.nodeType ? i[a] = FN.extend(n, r || {}, l) : void 0 !== l && (i[a] = l))
            }
        return i
}, FN.hasClass = function(t, e) {
    t = FN.ge(t);
    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
    return t && i.test(t.className)
}, FN.addClass = function(t, e) {
    (t = FN.ge(t)) && !FN.hasClass(t, e) && (t.className = (t.className ? t.className + " " : "") + e)
}, FN.removeClass = function(t, e) {
    if (t = FN.ge(t)) {
        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
        t.className = FN.trim((t.className || "").replace(i, " "))
    }
}, FN.toggleClass = function(t, e, i) {
    void 0 === i && (i = !FN.hasClass(t, e)), (i ? FN.addClass : FN.removeClass)(t, e)
}, FN.replaceClass = function(t, e, i) {
    FN.removeClass(t, e), FN.addClass(t, i)
}, FN.getStyle = function(t, e, i) {
    if (t = FN.ge(t), FN.isArray(e)) {
        var n = {};
        return FN.each(e, function(e, i) {
            n[i] = FN.getStyle(t, i)
        }), n
    }
    if (void 0 === i && (i = !0), !i && "opacity" === e && BROWSER.msie) {
        var o = t.style.filter;
        return o ? o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : ""
    }
    if (!i && t.style && (t.style[e] || "height" === e)) return t.style[e];
    var s, a = document.defaultView || window;
    if (a.getComputedStyle) {
        e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        var r = a.getComputedStyle(t, null);
        r && (s = r.getPropertyValue(e))
    } else if (t.currentStyle) {
        if ("opacity" == e && BROWSER.msie) {
            var o = t.currentStyle.filter;
            return o && o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
        }
        var l = e.replace(/\-(\w)/g, function(t, e) {
            return e.toUpperCase()
        });
        if (s = t.currentStyle[e] || t.currentStyle[l], "auto" == s && (s = 0), !/^\d+(px)?$/i.test(s) && /^\d/.test(s)) {
            var c = t.style,
                u = c.left,
                d = t.runtimeStyle.left;
            t.runtimeStyle.left = t.currentStyle.left, c.left = s || 0, s = c.pixelLeft + "px", c.left = u, t.runtimeStyle.left = d
        }
    }
    if (i && ("width" === e || "height" === e)) {
        var h = FN.getSize(t, !0)[{
            width: 0,
            height: 1
        }[e]];
        s = (FN.intval(s) ? Math.max(FN.floatval(s), h) : h) + "px"
    }
    return s
}, FN.setStyle = function(t, e, i) {
    if (t = FN.ge(t)) {
        if ("object" == typeof e) return void FN.each(e, function(e, i) {
            FN.setStyle(t, e, i)
        });
        if ("opacity" == e) BROWSER.msie && ((i + "").length ? 1 !== i ? t.style.filter = "alpha(opacity=" + 100 * i + ")" : t.style.filter = "" : t.style.cssText = t.style.cssText.replace(/filter\s*:[^;]*/gi, ""), t.style.zoom = 1), t.style.opacity = i;
        else try {
            var n = "number" == typeof i;
            n && /width|height/i.test(e) && (i = Math.abs(i)), t.style[e] = n && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(e) ? i + "px" : i
        } catch (o) {}
    }
}, FN.getXY = function(t, e) {
    if (t = FN.ge(t), !t) return [0, 0];
    var i, n, o = 0,
        s = 0;
    if (t.offsetParent)
        do o += i = t.offsetLeft, s += t.offsetTop, n = FN.getStyle(t, "position"), "absolute" !== n && "relative" !== n && "fixed" !== n || (o -= t.scrollLeft, s -= t.scrollTop), "fixed" !== n || e || (o += (t.offsetParent || {}).scrollLeft || bodyNode.scrollLeft || htmlNode.scrollLeft, s += (t.offsetParent || {}).scrollTop || bodyNode.scrollTop || htmlNode.scrollTop); while (t = t.offsetParent);
    return e && BROWSER.msie && BROWSER.version < 9 && i && (o += FN.ge("page_layout").offsetLeft), [o, s]
}, FN.getZoom = function() {
    var t = FN.ge("test_zoom_r1") || document.body.appendChild(FN.ce("div", {
            id: "test_zoom_r1"
        }, {
            left: "10%",
            position: "absolute",
            visibility: "hidden"
        })),
        e = FN.ge("test_zoom_r2") || document.body.appendChild(FN.ce("div", {
            id: "test_zoom_r2"
        }, {
            left: t.offsetLeft + "px",
            position: "absolute",
            visibility: "hidden"
        }));
    return e.offsetLeft / t.offsetLeft
}, FN.ge = function(t) {
    return "string" == typeof t || "number" == typeof t ? document.getElementById(t) : t
}, FN.geByTag = function(t, e) {
    return (e || document).getElementsByTagName(t)
}, FN.geByTag1 = function(t, e) {
    return e = e || document, e.querySelector && e.querySelector(t) || FN.geByTag(t, e)[0]
}, FN.geByAttr = function(t, e, i, n) {
    var o = [],
        s = FN.geByTag(i || "*", n);
    return t ? (FN.each(s, function(i, n) {
        null !== e ? n.getAttribute(t) === e && o.push(n) : null !== n.getAttribute(t) && o.push(n)
    }), o) : s
}, FN.geByAttr1 = function(t, e, i, n) {
    return n = n || document, i = i || "*", FN.geByAttr(t, e, i, n)[0]
}, FN.hasAttr = function(t, e, i) {
    if (!t || !t.getAttribute) return !1;
    if (void 0 === i) {
        if (null !== t.getAttribute(e)) return !0
    } else if (t.getAttribute(e) === i) return !0;
    return !1
}, FN.geByClass = function(t, e, i) {
    e = e || document, i = i || "*";
    var n = [];
    if (!BROWSER.msie8 && e.querySelectorAll && "*" !== i) {
        var o = e.querySelectorAll(i + "." + t);
        return o = Array.prototype.slice.call(o, 0)
    }
    if (e.getElementsByClassName) {
        var o = e.getElementsByClassName(t);
        if ("*" !== i) {
            i = i.toUpperCase();
            for (var s = 0, a = o.length; s < a; s++) o[s].tagName.toUpperCase() === i && n.push(o[s])
        } else n = Array.prototype.slice.call(o, 0);
        return n
    }
    for (var r = FN.geByTag(i, e), l = new RegExp("(^|\\s)" + t + "(\\s|$)"), s = 0, a = r.length; s < a; s++) l.test(r[s].className) && n.push(r[s]);
    return n
}, FN.geByClass1 = function(t, e, i) {
    return e = e || document, i = i || "*", !BROWSER.msie8 && e.querySelector && e.querySelector(i + "." + t) || FN.geByClass(t, e, i)[0]
}, FN.ce = function(t, e, i) {
    var n = document.createElement(t);
    return e && FN.extend(n, e), i && FN.setStyle(n, i), n
}, FN.re = function(t) {
    return t = FN.ge(t), t && t.parentNode && t.parentNode.removeChild(t), t
}, FN.domEL = function(t, e) {
    for (e = e ? "previousSibling" : "nextSibling"; t && !t.tagName;) t = t[e];
    return t
}, FN.domNS = function(t) {
    return FN.domEL((t || {}).nextSibling)
}, FN.domVNS = function(t) {
    t = t || {};
    do t = FN.domEL(t.nextSibling); while (t && !FN.isVisible(t));
    return t
}, FN.domPS = function(t) {
    return FN.domEL((t || {}).previousSibling, !0)
}, FN.domVPS = function(t) {
    t = t || {};
    do t = FN.domEL(t.previousSibling, !0); while (t && !FN.isVisible(t));
    return t
}, FN.domFC = function(t) {
    return FN.domEL((t || {}).firstChild)
}, FN.domLC = function(t) {
    return FN.domEL((t || {}).lastChild, !0)
}, FN.domPN = function(t) {
    return (t || {}).parentNode
}, FN.domPNs = function(t) {
    if (t.parentNode)
        do t = t.parentNode; while (t);
    return t
}, FN.getIndex = function(t, e) {
    if (t && (e || t.tagName)) {
        for (var i = t.tagName, e = e || t.parentNode.getElementsByTagName(i), n = 0, o = e.length; n < o; n += 1)
            if (t === e[n]) return n;
        return -1
    }
}, FN.isAncestor = function(t, e) {
    var i = FN.ge(t);
    if (e = FN.ge(e), !t || !e) return !1;
    for (; i = i.parentNode;)
        if (i === e) return !0;
    return !1
}, FN.isChildNode = function(t, e) {
    for (var i in t.childNodes)
        if (1 === t.childNodes[i].nodeType) {
            if (t.childNodes[i] === e) return !0;
            if (FN.isChildNode(t.childNodes[i], e)) return !0
        }
    return !1
}, FN.getVisibleNodes = function(t) {
    var e = [];
    return FN.each(t, function(t, i) {
        FN.isVisible(i) && e.push(i[t])
    }), e
}, FN.show = function(t) {
    var e = arguments.length;
    if (e > 1)
        for (var i = 0; i < e; i++) FN.show(arguments[i]);
    else if (t = FN.ge(t), t && t.style) {
        var n = t.olddisplay || FN.getStyle(t, "display") || "",
            o = "block",
            s = t.tagName.toLowerCase();
        t.style.display = n, "none" == n && (FN.hasClass(t, "inline") ? o = "inline" : "tr" != s || BROWSER.msie ? "table" != s || BROWSER.msie || (o = "table") : o = "table-row", t.style.display = t.olddisplay = o)
    }
}, FN.hide = function(t) {
    var e = arguments.length;
    if (e > 1)
        for (var i = 0; i < e; i++) FN.hide(arguments[i]);
    else if (t = FN.ge(t), t && t.style) {
        var n = FN.getStyle(t, "display");
        t.olddisplay = "none" !== n ? n : "", t.style.display = "none"
    }
}, FN.toggle = function(t, e) {
    void 0 === e && (e = !FN.isVisible(t)), e ? FN.show(t) : FN.hide(t)
}, FN.isVisible = function(t) {
    return t = FN.ge(t), !(!t || !t.style) && "none" != FN.getStyle(t, "display")
}, FN.getSize = function(t, e) {
    function i() {
        n = [t.offsetWidth, t.offsetHeight], e && (FN.each(n, function(e, i) {
            var o = e ? ["Top", "Bottom"] : ["Left", "Right"];
            FN.each(o, function() {
                n[e] -= parseFloat(FN.getStyle(t, "padding" + this)) || 0, n[e] -= parseFloat(FN.getStyle(t, "border" + this + "Width")) || 0;
            })
        }), n = [Math.round(n[0]), Math.round(n[1])])
    }
    t = FN.ge(t);
    var n = [0, 0],
        o = document.documentElement;
    if (t === document) return [Math.max(o.clientWidth, bodyNode.scrollWidth, o.scrollWidth, bodyNode.offsetWidth, o.offsetWidth), Math.max(o.clientHeight, bodyNode.scrollHeight, o.scrollHeight, bodyNode.offsetHeight, o.offsetHeight)];
    if (t)
        if (FN.isVisible(t)) i();
        else {
            var s = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                a = {};
            FN.each(s, function(e, i) {
                a[e] = t.style[e], t.style[e] = i
            }), i(), FN.each(s, function(e, i) {
                t.style[e] = a[e]
            })
        }
    return n
}, FN.sbWidth = function() {
    if (void 0 === window._sbWidth) {
        var t = FN.ce("div", {
            innerHTML: '<div style="height: 75px;">t</div>'
        }, {
            overflowY: "scroll",
            position: "absolute",
            width: "50px",
            height: "50px"
        });
        bodyNode.appendChild(t), window._sbWidth = Math.max(0, t.offsetWidth - FN.domFC(t).offsetWidth - 1), bodyNode.removeChild(t)
    }
    return window._sbWidth
}, FN.removeAttr = function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        if (void 0 !== t[i]) try {
            delete t[i]
        } catch (n) {
            try {
                t.removeAttribute(i)
            } catch (n) {}
        }
    }
}, FN.cleanElems = function() {
    for (var t = arguments, e = 0; e < t.length; e++) {
        var i = FN.ge(t[e]);
        i && FN.removeAttr(i, "btnevents")
    }
}, FN.animate = function(t, e, i, n) {}, FN.fadeTo = function(t, e, i, n) {};
var Fx = {
        Transitions: {
            linear: function(t, e, i, n) {
                return i * t / n + e
            },
            sineInOut: function(t, e, i, n) {
                return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
            },
            halfSine: function(t, e, i, n) {
                return i * Math.sin(Math.PI * (t / n) / 2) + e
            },
            easeOutBack: function(t, e, i, n) {
                var o = 1.70158;
                return i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
            },
            easeInCirc: function(t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
            },
            easeOutCirc: function(t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
            },
            easeInQuint: function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e
            },
            easeOutQuint: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e
            },
            easeOutCubic: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e
            }
        },
        Attrs: [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity", "left", "top"]
        ],
        Timers: [],
        TimerId: null
    },
    fx = Fx;
Fx.Base = function(t, e, i) {
    this.el = FN.ge(t), this.name = i, this.options = FN.extend({
        onComplete: function() {},
        transition: e.transition || Fx.Transitions.sineInOut,
        duration: 500
    }, e || {})
}, FN.each({
    slideDown: genFx("show", 1),
    slideUp: genFx("hide", 1),
    slideToggle: genFx("toggle", 1),
    fadeIn: {
        opacity: "show"
    },
    fadeOut: {
        opacity: "hide"
    },
    fadeToggle: {
        opacity: "toggle"
    }
}, function(t, e) {
    window[t] = function(t, i, n) {
        return animate(t, e, i, n)
    }
}), Fx.Base.prototype = {
    start: function() {},
    stop: function() {},
    step: function() {},
    compute: function() {},
    update: function() {},
    cur: function() {}
}, addEvent.guid = 1;
var _layerAnim = !1,
    layers = {
        visible: !1,
        sh: !_layerAnim || BROWSER.msie || BROWSER.iphone ? function(t, e) {
            FN.show(t), e && e()
        } : function(t, e) {
            FN.show(t), e && e()
        },
        hd: !_layerAnim || BROWSER.msie || BROWSER.iphone ? function(t, e) {
            FN.hide(t), e && e()
        } : function(t, e) {
            FN.hide(t), e && e()
        },
        _show: function(t, e, i, n) {
            FN.setStyle(t, {
                opacity: i || "",
                backgroundColor: n || ""
            }), layers.visible || (BROWSER.mozilla ? (window._oldScroll = htmlNode.scrollTop, pageNode.style.height = _oldScroll + lastWindowHeight + "px", pageNode.style.marginTop = -_oldScroll + "px") : (BROWSER.msie7 ? htmlNode : bodyNode).style.overflow = "hidden", layers.visible = !0), e.visibilityHide ? FN.removeClass(e, "box_layer_hidden") : FN.show(e), layers.sh(t)
        },
        _hide: function(t, e) {
            var i = function() {
                e && e.visibilityHide ? FN.addClass(e, "box_layer_hidden") : FN.hide(e), FN.isVisible(layerWrap) || CURRENT._inLayer || FN.isVisible(boxLayerWrap) && !boxLayerWrap.visibilityHide || (layers.visible = !1, BROWSER.mozilla ? (pageNode.style.height = "auto", pageNode.style.marginTop = "0px", window._oldScroll && (htmlNode.scrollTop = _oldScroll)) : (BROWSER.msie7 ? htmlNode : bodyNode).style.overflow = "auto")
            };
            layers.hd(t, i)
        }
    },
    _message_box_guid = 0,
    _message_boxes = [],
    _message_box_shown = !1,
    __bq = boxQueue = {
        _boxes: [],
        curBox: 0,
        hideAll: function() {
            if (__bq.count()) {
                var t = _message_boxes[__bq._boxes.pop()];
                t._in_queue = !1, t.hide()
            }
            for (; __bq.count();) {
                var t = _message_boxes[__bq._boxes.pop()];
                t._in_queue = !1
            }
        },
        hideLast: function(t, e) {
            if (__bq.count()) {
                var i = _message_boxes[__bq._boxes[__bq.count() - 1]];
                if (t === !0 && (i.changed || __bq.skip)) return void(__bq.skip = !1);
                i.hide()
            }
            if (e && "click" === e.type) return cancelEvent(e)
        },
        hideBGClick: function(t) {
            t && t.target && /^box_layer/.test(t.target.id) && __bq.hideLast()
        },
        count: function() {
            return __bq._boxes.length
        },
        _show: function(t) {
            var e = _message_boxes[t];
            if (e && !e._in_queue) {
                __bq.count() ? _message_boxes[__bq._boxes[__bq.count() - 1]]._hide(!0, !0) : window.tooltips, e._in_queue = !0;
                var i = !!__bq.count();
                __bq.curBox = t, e._show(i || __bq.currHiding, i), __bq._boxes.push(t)
            }
        },
        _hide: function(t) {
            var e = _message_boxes[t];
            if (e && e._in_queue && __bq._boxes[__bq.count() - 1] == t && e.isVisible() && (e._in_queue = !1, __bq._boxes.pop(), e._hide(!!__bq.count()), __bq.count())) {
                var i = __bq._boxes[__bq.count() - 1];
                __bq.curBox = i, _message_boxes[i]._show(!0, !0, !0)
            }
        }
    };
__bq.hideLastCheck = __bq.hideLast.pbind(!0), BROWSER.mobile || addEvent(document, "keydown", function(t) {
    if (t.keyCode === KEY.ESC && __bq.count()) return __bq.hideLast(), -1
}), addEvent(window, "orientationchange", onBodyResize), FN.convertMark = function(t) {
    var e = window.CURRENT && window.CURRENT.isClubJournal;
    return e && (t = "0" === t ? "—" : t), (t || "").replace(/-1/i, "н").replace(/-2/i, "зачет").replace(/-3/i, "незачет").replace(/-4/i, "н/а").replace(/-5/i, "осв.")
}, FN.reconvertMark = function(t) {
    var e = window.CURRENT && window.CURRENT.isClubJournal;
    return e && (t = (t || "").replace(/—/i, "0")), (t || "").replace(/н\/а/i, "-4").replace(/зачет/i, "-2").replace(/незачет/i, "-3").replace(/осв./i, "-5")
};
var Photoview = {
        $phList: $("#photos_container a"),
        onResize: function() {
            CURRENT.pvCont && Photoview.updateArrows()
        },
        updateArrows: function() {
            var t = $(CURRENT.pvCont).offset().left,
                e = $(CURRENT.pvCont).width() + t,
                i = $(layer).width() - e;
            $(CURRENT.pvBox).height();
            $(CURRENT.pvLeftNav).show().width(t - 1), $(CURRENT.pvRightNav).show().width(i).css("left", e + 1 + "px").css("right", "auto"), Photoview.$phList.length < 2 && $(CURRENT.pvLeftNav).find("span").hide()
        },
        doShow: function(t, e) {
            Photoview.$phList = e, Photoview.checkLayerVisibility() !== !0 && Photoview.createLayer(), CURRENT.pvIndex = t, Photoview.showPhoto(t), Photoview.updateArrows()
        },
        showPhoto: function(t) {
            t < 0 ? CURRENT.pvIndex = Photoview.$phList.length - 1 : t > Photoview.$phList.length - 1 ? CURRENT.pvIndex = 0 : CURRENT.pvIndex = t;
            var e = Photoview.$phList.eq(CURRENT.pvIndex).attr("href"),
                i = Photoview.getPhotoID(Photoview.$phList.eq(CURRENT.pvIndex));
            CURRENT.pvBox.innerHTML = loader, Photoview.updateArrows(), $.ajax({
                type: "get",
                dataType: "text",
                url: e,
                success: function(t) {
                    $(CURRENT.pvBox).html(t), Photoview.updateArrows(), FN.show(layer), $("#curPvIndex").html(CURRENT.pvIndex + 1), $("#pvLength").html(Photoview.$phList.length)
                }
            }), window.location.href = window.location.href.split("#")[0] + "#photo" + i
        },
        hide: function() {
            return CURRENT.pvShown = !1, window.location.href = window.location.href.split("#")[0] + "#", layers.hide(), !1
        },
        getPhotoID: function(t) {
            var e = t.attr("href").split("#")[0].split("?")[0].split("/").pop();
            return e
        },
        getListByRel: function(t) {
            var e = $('a[href*="/photo/"][rel="' + t + '"]');
            return e
        },
        createLayer: function() {
            layer.innerHTML = '<div class="pv_cont"><div id="pv_box">\n\n</div></div><div id="pv_left_nav" class="pv_prev_nav"><span></span></div><div id="pv_right_nav" class="pv_close_nav" onclick="Photoview.hide();"><span></span></div>', FN.extend(CURRENT, {
                pvIndex: 1,
                pvCont: FN.domFC(layer),
                pvBox: FN.ge("pv_box"),
                pvLeftNav: FN.ge("pv_left_nav"),
                pvRightNav: FN.ge("pv_right_nav"),
                pvSummary: FN.domFC(FN.ge("pv_summary")),
                pvPhoto: FN.ge("pv_photo")
            })
        },
        checkLayerVisibility: function() {
            var t = FN.isVisible(layerWrap);
            return t && !CURRENT.pvShown && (layers.fullhide && layers.fullhide(!1, !0), t = !1), !!t || (addEvent(window, "resize", Photoview.onResize), boxQueue.hideAll(), void layers.show())
        },
        init: function() {
            $('a[href*="/photo/"]:not([href*="/delete"])').on("click", function() {
                var t = $(this),
                    e = Photoview.getPhotoID(t);
                if (1 == e) return !0;
                var i;
                if (i = Photoview.getListByRel(t), t.is("[rel]") && t.attr("rel")) {
                    var n = t.attr("rel");
                    i = $('a[href*="/photo/"][rel="' + n + '"]')
                }
                var o = 0,
                    s = 0;
                for (s = 0; s < i.length; s++) {
                    var a = i.eq(s);
                    Photoview.getPhotoID(a) == e && (o = s)
                }
                return Photoview.doShow(o, i), !1
            }), $('a[href*="#photo"]').on("click", function() {
                var t = $(this).attr("href").split("#")[1];
                return clickActiveAnchor(t), !1
            }), $("body").on("click", 'a[href*="/photo/"][href*="/delete"]', function(t) {
                if (confirm("Вы уверены?")) {
                    var e = $(this),
                        i = e.attr("href");
                    i ? $.ajax({
                        type: "get",
                        dataType: "text",
                        url: i,
                        success: function(t) {
                            var i = e.attr("href").split("/delete")[0],
                                n = Photoview.$phList.filter('[href="' + i + '"]'),
                                o = n.attr("rel");
                            if (n.hasClass("profile-photo")) {
                                var s = n.next().filter('[rel="' + o + '"]');
                                s.length ? (n.attr("href", s.attr("href")), s.remove()) : n.removeAttr("rel").removeAttr("href"), n.find("img").attr("src", "/data/nopicture.w150.jpg")
                            } else n.remove();
                            Photoview.$phList = Photoview.getListByRel(o), Photoview.$phList.length < 1 ? Photoview.hide() : Photoview.showPhoto(CURRENT.pvIndex)
                        }
                    }) : FN.showTopMessage("Помилка", 4)
                }
                t.preventDefault()
            }), $("body").on("click", ".pv_prev_nav", function() {
                Photoview.$phList.length < 2 && Photoview.hide();
                var t = parseInt(CURRENT.pvIndex) - 1;
                return Photoview.showPhoto(t), !1
            }), $("body").on("click", ".pv_next_nav", function() {
                Photoview.$phList.length < 2 && Photoview.hide();
                var t = parseInt(CURRENT.pvIndex) + 1;
                return Photoview.showPhoto(t), !1
            })
        }
    },
    AttachmentsDropdown = function(t) {
        return this.container = FN.ge(t.container), this.container ? (this.toggle_link = FN.ge(t.toggle_link), this.toggle_link ? (this.menu_container = FN.ge(t.menu_container), this.menu_container ? (this.isAjax = "false" !== this.toggle_link.getAttribute("data-ajax"), this.isLoaded = !1, this.isOpen = !1, this.attachEvent(), this.container.initialized = !0, void AttachmentsDropdown.objects_list.push(this)) : void FN.log("AttachmentsDropdown: не задан выпадающий элемент")) : void FN.log("AttachmentsDropdown: не задан toggle-элемент")) : void FN.log("AttachmentsDropdown: не задан контейнер")
    };
AttachmentsDropdown.objects_list = [], AttachmentsDropdown.prototype.classNames = {
    container: "attachments_dropdown",
    toggle_link: "attachments_dropdown_toggle",
    menu_container: "attachments_dropdown_menu"
}, AttachmentsDropdown.prototype.toggle = function() {
    this.isOpen ? this.hide() : this.isAjax && !this.isLoaded ? (this.show(), this.load()) : this.show()
}, AttachmentsDropdown.prototype.show = function() {
    var t = AttachmentsDropdown;
    t.hideAll(), FN.addClass(this.container, "open"), this.isOpen = !0
}, AttachmentsDropdown.prototype.hide = function() {
    FN.removeClass(this.container, "open"), this.isOpen = !1
}, AttachmentsDropdown.prototype.load = function() {
    var t = this,
        e = this.toggle_link.getAttribute("href");
    return e ? (this.menu_container.innerHTML = loader, void $.ajax({
        type: "get",
        dataType: "html",
        url: e,
        success: function(e) {
            t.menu_container.innerHTML = e, t.isLoaded = !0
        },
        complete: function() {}
    })) : void FN.log("AttachmentsDropdown: url не задан")
}, AttachmentsDropdown.prototype.attachEvent = function() {
    var t = this,
        e = AttachmentsDropdown;
    addEvent(this.toggle_link, "click", function(e, i) {
        return t.toggle(), !1
    }), addDocumentOutsideClick("attachments", "dropdown", function() {
        e.hideAll()
    })
}, AttachmentsDropdown.initAll = function(t) {
    var e = AttachmentsDropdown.prototype.classNames,
        i = t ? FN.ge(t) || document : document,
        n = FN.geByClass(e.container, i, "div");
    FN.each(n, function(t, i) {
        i.initialized || new AttachmentsDropdown({
            container: i,
            toggle_link: FN.geByClass1(e.toggle_link, i, "a"),
            menu_container: FN.geByClass1(e.menu_container, i, "div")
        })
    })
}, AttachmentsDropdown.hideAll = function() {
    var t = AttachmentsDropdown.objects_list;
    FN.each(t, function(t, e) {
        e.hide()
    })
};
var Comments = function(t) {
    return this.container_list = FN.ge(t.container_list), this.container_list ? (this.form = FN.ge(t.form), this.form && (this.textarea = FN.geByTag1("textarea", this.form)), this.type = t.type, this.url_last = t.url_last, this.url_all = t.url_all, void this.attachEvents()) : void FN.log("Comments: не задан контейнер для загрузки последних комментариев")
};
Comments.deleteItem = function(t, e) {}, Comments.prototype.loadLast = function() {
    var t = this,
        e = this.container_list,
        i = this.url_last;
    e.innerHTML = loader, $.ajax({
        url: i,
        type: "get",
        dataType: "text",
        success: function(i) {
            if (i) {
                e.innerHTML = i;
                var n = FN.geByAttr1("data-link", "show-all", "a", t.container_list);
                t.link_show_all = n, addEvent(n, "click", function() {
                    t.loadAll()
                })
            } else e.innerHTML = '<div class="clr-red">Помилка</div>'
        }
    })
}, Comments.prototype.loadAll = function() {
    var t = this.container_list,
        e = this.link_show_all,
        i = this.url_all;
    e && (e.parentNode.innerHTML = loader), $.ajax({
        url: i,
        type: "get",
        dataType: "text",
        success: function(e) {
            e ? t.innerHTML = e : t.innerHTML = '<div class="clr-red">Помилка</div>'
        }
    })
}, Comments.prototype.attachEvents = function() {
    var t = this,
        e = this.form,
        i = this.textarea;
    e && addEvent(e, "submit", function() {
        return t.saveItem(), !1
    }), i && addEvent(i, "keydown", function(e) {
        e.ctrlKey && e.keyCode === KEY.ENTER && (t.saveItem(), i.focus())
    })
}, Comments.prototype.saveItem = function() {
    var t = this,
        e = this.container_list,
        i = this.form,
        n = this.textarea;
    if (!i) return void FN.log("Comments.prototype.saveItem: не задана форма для відправки коментаря");
    if (!n) return void FN.log("Comments.prototype.saveItem: не заданий textarea для відправки коментаря");
    var o = i.getAttribute("action"),
        s = FN.trim(n.value);
    return !(!s || "" === s) && void $.ajax({
        url: o,
        dataType: "text",
        data: $(i).serialize(),
        success: function(i) {
            i ? (t.appendItem(i), n.value = "") : e.innerHTML = '<div class="clr-red">Помилка</div>'
        }
    })
}, Comments.prototype.appendItem = function(t) {
    var e = this.container_list,
        i = this.type,
        n = $(t);
    switch (i) {
        case "comments":
            $(e).append(n);
            break;
        case "wall":
            $(e).prepend(n);
            break;
        default:
            $(e).prepend(n)
    }
    n.filter("div:first").hide().slideDown(300);
    var o = FN.geByAttr1("data-element", "empty", "div", e);
    o && e.removeChild(o)
};
var Filter = function(t) {
    var e = {
            menu_id: "",
            container_id: "",
            display: "block",
            items_tag: "div"
        },
        i = FN.extend(e, t);
    return this.options = i, this.menu = FN.ge(i.menu_id), this.menu ? (this.menu.items = FN.geByTag("li", this.menu), this.menu.items && this.menu.items.length ? (this.menu.links = FN.geByTag("a", this.menu), this.menu.links && this.menu.links.length ? (this.container = FN.ge(i.container_id), this.container ? (this.items = FN.geByAttr("data-filter", null, i.items_tag, this.container), this.items && this.items.length ? (this._prepare(), void this.attachEvents()) : void FN.log("Помилка при ініціалізації фільтра: не задані елементи для фільтрації :(")) : void FN.log("Помилка при ініціалізації фільтра: не заданий контейнер :(")) : void FN.log("Помилка при ініціалізації фільтра: немає s-елементів в меню :(")) : void FN.log("Помилка при ініціалізації фільтра: немає li-елементів в меню :(")) : void FN.log("Помилка при ініціалізації фільтра: меню не задано :(")
};
Filter.prototype._prepare = function() {
    FN.each(this.menu.links, function(t, e) {
        e.data_filter = e.getAttribute("data-filter")
    }), FN.each(this.items, function(t, e) {
        e.data_filter = e.getAttribute("data-filter")
    })
}, Filter.prototype.switchMenu = function(t) {
    FN.each(this.menu.items, function(t, e) {
        FN.removeClass(e, "active")
    }), FN.addClass(t.parentNode, "active")
}, Filter.prototype.toggle = function(t) {
    var e = this.options.display;
    "all" === t.data_filter ? FN.each(this.items, function(t, i) {
        i.style.display = e
    }) : FN.each(this.items, function(i, n) {
        n.data_filter === t.data_filter ? n.style.display = e : n.style.display = "none"
    })
}, Filter.prototype.attachEvents = function() {
    var t = this;
    FN.each(this.menu.links, function(e, i) {
        addEvent(i, "click", function() {
            t.switchMenu(i), t.toggle(i)
        })
    })
};
var Poll = function(t) {
    return this.container = FN.ge(t.container), this.container ? (this.form = FN.ge(t.form) || null, this.result_container = FN.ge(t.result_container) || null, this.total_container = FN.ge(t.total_container) || null, void this.attachEvents()) : void FN.log("Poll: контейнер не задан")
};
Poll.prototype.vote = function() {
    var t = this,
        e = (this.container, this.form),
        i = this.result_container;
    if (!e) return void FN.log("Poll.prototype.vote: форма не задана");
    var n = e.getAttribute("action");
    return n && "" !== n ? void $.ajax({
        url: n,
        data: $(e).serialize(),
        success: function(n) {
            return i ? (i.innerHTML = t.getResultHtml(n), i.style.display = "block", void e.parentNode.removeChild(e)) : void FN.log("Poll.prototype.vote: контейнер для результатов не задан")
        }
    }) : void FN.log("Poll.prototype.vote: url отправки формы не задан")
}, Poll.prototype.getResultHtml = function(t) {
    var e = "",
        i = t.total;
    FN.each(t.options, function(t, n) {
        var o = n.fields.count,
            s = FN.toFixed(o / i * 100, 2),
            a = n.fields.name;
        e += "<dl><dt><b>" + s + "%</b><small>(" + o + ")</small></dt><dd>" + a + '<div class="percent"><i style="width:' + s + '%"></i></div></dd></dl>'
    }), e += '<div class="success">Дякуємо за вашу думку!</div>';
    var n = this.total_container;
    if (n) {
        var o = FN.geByAttr1("data-total", "count", "b", n);
        o && (o.innerHTML = i), e += n.outerHTML
    }
    return e
}, Poll.prototype.attachEvents = function() {
    var t = this,
        e = this.form;
    e && addEvent(e, "submit", function() {
        return t.vote(), !1
    })
};
var Tabs = function(t) {
    var e = {
        menu_id: "",
        content_id: "",
        content_class_name: "",
        speed: 500,
        scroll_container_id: "",
        scroll_position: "top"
    };
    t = FN.extend(e, t);
    var i = this;
    return FN.each(["onCreate", "onBefore", "onAfter"], function(e, n) {
        var o = t[n];
        FN.isFunction(o) && (i[n] = o)
    }), this.menu = FN.ge(t.menu_id), this.menu ? (this.menu.items = FN.geByTag("li", this.menu), this.menu.items && this.menu.items.length ? (this.menu.links = FN.geByTag("a", this.menu), this.menu.links && this.menu.links.length ? (this.content = FN.ge(t.content_id), this.content ? (this.content.items = FN.geByClass(t.content_class_name, this.content), this.content.items && this.content.items.length ? (this.speed = t.speed, this.scroll_container = FN.ge(t.scroll_container_id), this.scroll_position = t.scroll_position, this.attachEvents(), void this.openByHash()) : void FN.log("Помилка при ініціалізації табів: немає елементів з вмістом табів :(")) : void FN.log("Помилка при ініціалізації табів: блок з контентом для табів не заданий :(")) : void FN.log("Помилка при ініціалізації табів: немає a-елементів в меню табів :(")) : void FN.log("Помилка при ініціалізації табів: немає li-елементів в меню табів :(")) : void FN.log("Помилка при ініціалізації тамбов: меню для табів не задано :(")
};
Tabs.prototype.onCreate = function() {}, Tabs.prototype.onBefore = function() {}, Tabs.prototype.onAfter = function() {}, Tabs.prototype.toggle = function(t) {
    return t ? void(FN.hasClass(t.parentNode, "active") ? this.hide(t) : this.show(t)) : void FN.log("Помилка при toggle таба: посилання не передана")
}, Tabs.prototype.show = function(t) {
    this._show_or_hide(t, "show")
}, Tabs.prototype.hide = function(t) {
    this._show_or_hide(t, "hide")
}, Tabs.prototype._show_or_hide = function(t, e) {
    if (!t) return void FN.log("Помилка при відкритті таба: посилання не передана");
    var i = t.getAttribute("for");
    if (!i) return void FN.log("Помилка при відкритті таба: id одиниці контенту не заданий");
    var n = FN.ge(i);
    if (!n) return void FN.log("Помилка при відкритті таба: dom-елемент одиниці контенту не заданий");
    switch (e) {
        case "show":
            this._show(t, n);
            break;
        case "hide":
            this._hide(t, n)
    }
}, Tabs.prototype._hide = function(t, e) {
    var i = this;
    $(e).stop().slideUp(this.speed, function() {
        i._changeActiveMenuItem()
    })
}, Tabs.prototype._show = function(t, e) {
    this.onBefore(), this._changeActiveMenuItem(t), FN.each(this.content.items, function(t, e) {
        FN.hide(e)
    });
    var i = t.getAttribute("src");
    i && "" !== i ? this._load_and_show(t, e) : this._openContainer(e)
}, Tabs.prototype._scrollToVisible = function() {
    var t = this.scroll_container,
        e = this.scroll_position;
    this.scroll_container ? this._scrollToVisible = function() {
        var i = FN.getSize(t)[1],
            n = window.lastWindowHeight,
            o = !0;
        o = i && n ? i > n : "top" === e, t.scrollIntoView(o)
    } : this._scrollToVisible = function() {
        return !1
    }, this._scrollToVisible()
}, Tabs.prototype._load_and_show = function(t, e) {
    var i = this,
        n = $(e);
    e.innerHTML = loader, FN.show(e), $.ajax({
        type: "get",
        dataType: "text",
        url: t.getAttribute("src"),
        success: function(o) {
            FN.hide(e), n.html(o), i._openContainer(n), t.setAttribute("src", "")
        }
    })
}, Tabs.prototype._openContainer = function(t) {
    var e = this,
        i = this.speed;
    i ? $(t).stop().slideDown(i, function() {
        e._scrollToVisible(), e.onAfter()
    }) : ($(t).show(), e._scrollToVisible(), e.onAfter())
}, Tabs.prototype._changeActiveMenuItem = function(t) {
    FN.each(this.menu.items, function(t, e) {
        FN.removeClass(e, "active")
    }), t && FN.addClass(t.parentNode, "active")
}, Tabs.prototype.attachEvents = function() {
    var t = this;
    FN.each(this.menu.links, function(e, i) {
        addEvent(i, "click", function() {
            t.toggle(i)
        })
    })
}, Tabs.prototype.openByHash = function() {
    if (LOC.hash) {
        var t = FN.geByAttr1("href", "#" + LOC.hash, "a", this.menu);
        t && this.show(t)
    }
};
var classSubjectsEditor = {
        last_active_subject: {},
        init: function() {
            this.container = FN.ge("edit_class_subjects"), this.popup = FN.ge("popup_teachers"), this.popup.height = FN.getSize(this.popup)[1], FN.setStyle(this.container, "min-height", this.popup.height + "px"), this.clear_last_subject()
        },
        clear_last_subject: function() {
            this.set_last_subject(void 0, void 0)
        },
        set_last_subject: function(t, e) {
            this.last_active_subject = {
                id: t,
                subgroup_index: e
            }
        },
        clear: function() {
            var t = $("#edit_class_subjects");
            t.find("input[name*=teacher_id]").val(""), t.find("input[name*=ClassSubjectSubgroupTeacher]").val(""), t.find("select[name*=ClassSubjectSubgroupTeacher]").val(""), t.find(".teacher a").text("Не вибрано"), t.find(".teachers_group__no_subgroups").removeClass("hidden"), t.find(".teachers_group__by_subgroups").addClass("hidden")
        },
        addSubgroups: function(t) {
            var e = FN.ge("subgroups_teachers_group_" + t),
                i = FN.ge("class_subject_subgroup_add_link_" + t);
            return FN.removeClass(e, "hidden"), FN.hide(i), !1
        },
        openTeachersPopup: function(t, e, i) {
            this.showPopup(t, this.popup), this.set_last_subject(e, i)
        },
        showPopup: function(t, e) {
            var i = this.container;
            i.height = FN.getSize(i)[1];
            var n = FN.getXY(t)[1] - FN.getXY(i)[1];
            n = e.height + n > i.height ? n - e.height - 7 : n + 20, n = n < 20 ? 20 : n;
            var o = 50;
            FN.setStyle(e, {
                top: n + "px",
                left: o + "px"
            }), this.hidePopup(), $(e).show(250)
        },
        hidePopup: function() {
            this.clear_last_subject(), this.popup.style.display = "none"
        },
        changeTeacher: function(t, e) {
            var i = this.last_active_subject.id,
                n = this.last_active_subject.subgroup_index,
                o = "class_subject_teacher_link_" + i,
                s = "class_subject_teacher_input_" + i;
            void 0 !== n && (o += "-" + n, s += "-" + n);
            var a = FN.ge(o),
                r = FN.ge(s);
            a.innerHTML = e, a.innerText = e, r.value = t ? t : "", this.justChanged(i, n), this.hidePopup()
        },
        justChanged: function(t, e) {
            var i = void 0 !== e ? t + "-" + e : t,
                n = FN.ge("class_subject_teacher_link_" + i);
            FN.removeClass(n, "not_assigned"), FN.addClass(n, "just_changed")
        }
    },
    classTimetableEditor = {
        last_active_lesson: {},
        init: function() {
            this.container = FN.ge("edit_class_timetable"), this.popup_class_subjects = FN.ge("popup_class_subjects"), this.popup_subgroups_subjects = FN.ge("popup_subgroups_subjects"), this.popup_class_subjects.height = 1 * FN.getSize(this.popup_class_subjects)[1], this.popup_class_subjects.width = 1 * FN.getSize(this.popup_class_subjects)[0], this.popup_subgroups_subjects.height = 1 * FN.getSize(this.popup_subgroups_subjects)[1], this.popup_subgroups_subjects.width = 1 * FN.getSize(this.popup_subgroups_subjects)[0], this.popups_max_height = Math.max(this.popup_cs_height, this.popup_ss_height), FN.setStyle(this.container, "min-height", this.popups_max_height + "px"), this.clear_last_lesson()
        },
        clear_last_lesson: function() {
            this.set_last_lesson()
        },
        set_last_lesson: function(t, e, i) {
            this.last_active_lesson = {
                day_number: t,
                lesson_number: e,
                loop_count: i
            }
        },
        doBySubgroups: function(t, e) {
            if (confirm("Ви впевнені, що хочете зробити предмет по підгрупах?")) {
                var i = FN.ge("edit_ctt_lesson_subjects_" + t + "-" + e);
                i.innerHTML = "", this.addSubgroup(t, e), this.justChanged(t, e, 1);
                var n = this.getIndex(t, e);
                FN.show("edit_ctt_add_subgroup_link_" + n), FN.show("edit_ctt_undo_by_subgroups_link_" + n), FN.hide("edit_ctt_do_by_subgroups_link_" + n)
            }
        },
        undoBySubgroups: function(t, e) {
            if (confirm("Ви впевнені, що хочете зробити предмет НЕ по підгрупах?")) {
                var i = this.getIndex(t, e),
                    n = FN.ce("div", {
                        className: "lesson_subject",
                        innerHTML: this._getSubjectHtml(t, e)
                    }),
                    o = FN.ge("edit_ctt_lesson_subjects_" + i);
                o.innerHTML = "", o.appendChild(n), this.justChanged(t, e);
                var s = this.getIndex(t, e);
                FN.hide("edit_ctt_add_subgroup_link_" + s), FN.hide("edit_ctt_undo_by_subgroups_link_" + s), FN.show("edit_ctt_do_by_subgroups_link_" + s)
            }
        },
        addSubgroup: function(t, e) {
            var i = this.getIndex(t, e),
                n = FN.ge("edit_ctt_lesson_subjects_" + i),
                o = FN.geByClass("lesson_subject", n, "div"),
                s = o.length + 1,
                a = FN.ce("div", {
                    className: "lesson_subject",
                    innerHTML: this._getSubjectHtml(t, e, s)
                });
            n.appendChild(a), this.justChanged(t, e, s)
        },
        _getSubjectHtml: function(t, e, i) {
            var n = void 0 !== i,
                o = t + "-" + e;
            n && (o += "-" + i);
            var s = "";
            s += '<input type="hidden" name="' + o + '.day" value="' + t + '"/>', s += '<input type="hidden" name="' + o + '.number" value="' + e + '"/>', s += '<input type="hidden" name="' + o + '.class_subject_id" value=""/>', s += n ? '<input type="hidden" name="' + o + '.subgroup_id" value=""/>' : "", s += '<span class="edit_ctt_cabinet">каб.<input class="text" type="text" name="' + o + '.cabinet" value="" /></span>';
            var a = n ? "classTimetableEditor.openSubgroupsSubjectsPopup(this, " + t + ", " + e + ", " + i + ")" : "classTimetableEditor.openClassSubjectsPopup(this, " + t + ", " + e + ")";
            return s += '<span class="edit_ctt_subject"><a id="edit_ctt_subject_' + o + '" not-hide="subjects_popup" class="not_assigned"onclick="' + a + '">Не вибрано</a></span>'
        },
        openClassSubjectsPopup: function(t, e, i) {
            this.showPopup(t, this.popup_class_subjects), this.set_last_lesson(e, i)
        },
        openSubgroupsSubjectsPopup: function(t, e, i, n) {
            this.showPopup(t, this.popup_subgroups_subjects), this.set_last_lesson(e, i, n)
        },
        showPopup: function(t, e) {
            var i = this.container;
            i.height = FN.getSize(i)[1], i.width = FN.getSize(i)[0];
            var n = FN.getXY(t)[1] - FN.getXY(i)[1];
            n = e.height + n > i.height ? n - e.height - 7 : n + 20, n = n < 20 ? 20 : n;
            var o = FN.getXY(t)[0] - FN.getXY(i)[0];
            o = e.width + o > i.width ? i.width - e.width - 10 : o, o = o < 0 ? 0 : o, FN.setStyle(e, {
                top: n + "px",
                left: o + "px"
            }), this.hidePopups(), $(e).show(250)
        },
        hidePopups: function() {
            this.clear_last_lesson(), this.popup_class_subjects.style.display = "none", this.popup_subgroups_subjects.style.display = "none"
        },
        changeSubject: function(t, e) {
            var i = this.last_active_lesson.day_number,
                n = this.last_active_lesson.lesson_number,
                o = this.last_active_lesson.loop_count,
                s = this.getIndex(i, n, o),
                a = FN.geByAttr1("name", s + ".class_subject_id", "input", this.container);
            a.value = t.id;
            var r = FN.ge("edit_ctt_subject_" + s);
            r.innerHTML = t.name, this.justChanged(i, n, o);
            var l = void 0 !== o;
            if (l) {
                var c = FN.geByAttr1("name", s + ".subgroup_id", "input", this.container);
                c.value = e.id;
                var u = FN.ce("span", {
                    innerHTML: e.name ? "(" + e.name + ")" : ""
                });
                r.appendChild(u)
            }
            this.hidePopups()
        },
        clear: function() {
            var t = $("#edit_class_timetable");
            t.find("input[name*='class_subject_id']").val(""), t.find("input[name*='subgroup_id']").val(""), t.find("input[name*='cabinet']").val(""), t.find(".edit_ctt_subject a").each(function() {
                var t = $(this),
                    e = $.trim(t.text());
                "Не вибрано" !== e && (t.text("Не вибрано"), t.addClass("just_changed"))
            })
        },
        justChanged: function(t, e, i) {
            var n = this.getIndex(t, e, i),
                o = FN.ge("edit_ctt_subject_" + n);
            FN.removeClass(o, "not_assigned"), FN.addClass(o, "just_changed")
        },
        getIndex: function(t, e, i) {
            var n = t + "-" + e;
            return void 0 !== i && (n += "-" + i), n
        }
    };
$(document).ready(function() {
    $("#mess_tabs2 a").click(function() {
        var t = this.className;
        $("#mess_tabs2 li").removeClass("act"), $(this).parent().addClass("act"), $("#messages_list .messages_group").hide(), $("#messages_list #" + t).show()
    }), $("#messages_list .messages_group").each(function() {
        var t = $(this),
            e = $(".message_row.no_viewed", t).length;
        if (e) {
            var i = $("#mess_tabs2 a." + t.attr("id"));
            i.html(i.html() + " (<b>" + e + "</b>)")
        }
    }), 0 == $("#fromGlobalAdmin .one-message").length && $(".messages-tabs li:last").hide(), $("a.more_mess_link").on("click", function() {
        var t = $(this),
            e = t.attr("currCount");
        return $.ajax({
            url: t.attr("href") + "?already_loaded_count=" + e,
            type: "get",
            dataType: "text",
            success: function(i) {
                var n = t.parent();
                n.before(i);
                var o = n.parent(),
                    s = o.find("input[name=count]").attr("value");
                e = o.find("div.message_row").length, e == s ? n.remove() : t.attr("currCount", e)
            }
        }), !1
    }), $("a#mess_history_link").click(function() {
        var t = $(this),
            e = $("#mess_history");
        return t.parent().html('<img src="/images/upload.gif" alt="Загрузка..."/>'), $.ajax({
            type: "get",
            dataType: "html",
            url: t.attr("href"),
            success: function(t) {
                e.html(t)
            }
        }), !1
    })
});
var Attachments = function(t) {
    return this.filename = {
        no_name: "no name",
        maxStartLength: 14,
        maxEndLength: 8
    }, this.autostartOn = !0, this.maxFilesCount = !1, this.dataType = "text", this.fieldName = "attachments", this.url = t.url, this.url ? (this.file_input = FN.ge(t.file_input), this.container = FN.ge(t.container), this.list_container = FN.ge(t.list_container), this.initUploader(), void this.attachUploaderEvents()) : void FN.log("Attachments: URL не заданий")
};
Attachments.prototype.initUploader = function() {
    $(this.file_input).damnUploader({
        url: this.url,
        limit: this.maxFilesCount,
        dataType: this.dataType,
        fieldName: this.fieldName
    })
}, Attachments.prototype.attachUploaderEvents = function() {
    var t = this;
    $(this.file_input).on({
        "du.add": function(e) {
            t.fileAddHandler(e)
        },
        "du.limit": function() {
            FN.log("Перевищено максимально допустиму кількість файлів!")
        },
        "du.completed": function() {
            FN.log("Все завантаження завершені!")
        }
    })
}, Attachments.prototype.isTextFile = function(t) {
    return "text/plain" == t.type
}, Attachments.prototype.isImgFile = function(t) {
    return t.type.match(/image.*/)
}, Attachments.prototype.nomalizeFileName = function(t) {
    var e = t;
    if (!e || !e.length) return this.filename.no_name;
    var i = this.filename.maxStartLength,
        n = this.filename.maxEndLength;
    return e.length > i + n + 3 ? e.substring(0, i) + "<small>...</small>" + e.substring(e.length - n) : e
}, Attachments.prototype.fileAddHandler = function(t) {
    var e = t.uploadItem;
    e.file.name || this.filename.no_name;
    this.createRowFromUploadItem(e), e.completeCallback = function(t, i, n) {
        if (t) e.row.innerHTML = i, e.row.deleteLink = FN.geByClass1("file_delete", e.row, "a"), addEvent(e.row.deleteLink, "click", function() {
            return confirm("Видалити файл?") && (e.row.deleteLink.isInnerElement = !0, this.file_input.value = ""), !1
        });
        else if (!e.cancelled)
            if (400 === n) e.row.innerHTML = '<div class="file_error">' + i + "</div>";
            else {
                var o = "Помилка при завантаженні файлу" + (i ? ": " + i : "");
                e.row.innerHTML = '<div class="file_error">' + o + "</div>"
            }
    }, e.progressCallback = function(t) {
        e.row.progressBar.style.width = Math.round(t) + "%"
    }, this.autostartOn && e.upload()
}, Attachments.prototype.createRowFromUploadItem = function(t) {
    var e = this;
    t.row = FN.ce("li"), t.row.innerHTML = '<div class="attachments_file downloading"><div class="file_info"><span class="file_size">' + FN.toFixed(t.file.size / 1024 / 1e3, 2) + ' Мб</span><span class="divide">|</span><a class="file_cancel">скасувати</a></div><div class="file_name">' + (t.replaceName || t.file.name) + '</div><div class="progress"><div class="progress_bar" style="width: 0%; "></div></div></div>', t.row.progressBar = FN.geByClass1("progress_bar", t.row, "div"), t.row.cancelLink = FN.geByClass1("file_cancel", t.row, "a"), addEvent(t.row.cancelLink, "click", function() {
        confirm("Перервати завантаження файлу?") && setTimeout(function() {
            t.completed || (FN.re(t.row), e.file_input.value = "", t.cancel())
        }, 5)
    }), this.list_container.appendChild(t.row)
}, Attachments.supportInfo = function() {
    $.support.fileSelecting ? (FN.log("Attachments: [+] Your browser supports multiple file selecting" + ($.support.fileSending ? " and sending" : "")), $.support.fileReading || FN.log("Attachments: [-] Your browser doesn't support file reading on client side"), $.support.uploadControl || FN.log("Attachments: [-] Your browser can't retrieve upload progress information (progress bars will be disabled)"), $.support.fileSending || FN.log("Attachments: [-] Your browser doesn't support FormData object (files will be send by default form submitting)"), FN.log("Attachments: [>] Now select some files to see what happen ...")) : FN.log("Attachments: [-] Your browser doesn't support File API (uploads may be performed only by default form submitting)")
}, SupervisorGraph.prototype.toggleMode = function(t) {
    if (void 0 !== t) return void this.isSelectMode(t);
    var t = this.isSelectMode(),
        e = this.isSelectVisible(),
        i = this.activeSubjectId();
    return t ? e && !i ? void this.isSelectMode(!1) : void this.isSelectVisible(!e) : void this.isSelectMode(!0)
}, SupervisorGraph.prototype.plotAll = function() {
    this.plot(this.subjectsIds)
}, SupervisorGraph.prototype.plot = function(t) {
    var e, i = this,
        n = this.activeSubjectId();
    if (t && t.length) {
        if (1 === t.length) {
            if (n === t[0]) return !0;
            this.isSelectMode(!0), this.activeSubjectId(t[0])
        } else {
            if (null === n) return;
            this.activeSubjectId(null)
        }
        return this.isSelectVisible(!1), e = $.ajax({
            type: "GET",
            url: "/pupil/" + this.pupilId + "/education/supervisor/chart/" + t.join(",")
        }), e.done(function(t) {
            i.writeChart(t)
        }), !0
    }
}, SupervisorGraph.prototype.writeChart = function(t) {
    var e, i = this,
        n = ["#cc0000", "#e00035", "#e50066", "#cc0099", "#990099", "#660099", "#330099", "#1919b2", "#0033cc", "#0066b2", "#0099ee", "#00ccee"];
    t = t || [], CHARTS.processData(t), this.isDataEmpty(!0), FN.each(t, function(t, e) {
        e.color = n[t], e.count && i.isDataEmpty(!1);
    }), e = this.initChart(), e.dataProvider = t, e.write(this.containerId)
}, SupervisorGraph.prototype.initChart = function() {
    var t, e, i, n, o;
    return t = new AmCharts.AmSerialChart, t.categoryField = "mark", t.startEffect = "<", t.startDuration = 1, e = t.categoryAxis, e.title = "Відмітки", e.gridPosition = "start", i = new AmCharts.ValueAxis, i.title = "Кількість", i.integersOnly = !0, i.minimum = 0, t.addValueAxis(i), n = new AmCharts.AmGraph, n.valueField = "count", n.colorField = "color", n.type = "column", n.columnWidth = .5, n.balloonText = "Відмітка [[category]]<br/>Кількість: <b>[[value]]</b>", n.showAllValueLabels = !0, n.lineAlpha = 0, n.fillAlphas = 1, n.fillColors = "#0D8ECF", n.lineColor = "#0D8ECF", t.addGraph(n), o = new AmCharts.ChartCursor, o.cursorAlpha = 0, t.addChartCursor(o), t
};
var SupervisorModel;
! function() {
    function t(t) {
        return o[t] || null
    }

    function e(t) {
        var e = s[t];
        return o[e] || null
    }

    function i(t) {
        var e = 0,
            i = 0;
        return ko.utils.arrayForEach(t || [], function(t) {
            t = parseFloat(t), isNaN(t) || (e += t, i += 1)
        }), i && Math.round(e / i * 100) / 100 || null
    }

    function n(t, e) {
        var i = this;
        this.quarterPhase = e || "end", this.teacherMessageLink = t.teacher_message_link || "", this.subject = t.subject || {}, this.initialGO = t.GO || null, this.GO = ko.observable(t.GO || null), this.SK = {
            result: t.SK.result,
            count: t.SK.count
        }, this.PB = {
            result: t.PB.result,
            count: t.PB.count
        }, this.Q = function() {
            var e = t.Q || [];
            return {
                current: FN.convertMark(e.pop()) || null,
                past: ko.utils.arrayMap(e, function(t) {
                    return FN.convertMark(t)
                })
            }
        }(), this.isQuarterSuccess = ko.computed(function() {
            var t = this.Q.current,
                e = this.GO();
            return t && e && t >= e
        }, this), this.isQuarterFail = ko.computed(function() {
            var t = this.Q.current,
                e = this.GO();
            return t && e && t < e
        }, this), this.status = ko.computed(function() {
            return i.getStatus()
        }), this.rating = function() {
            var t, e, n;
            for (t = 12; t > 0; t--) {
                if (n = i.getStatus(t), "warning" === n.title) {
                    e = t;
                    break
                }
                if (n.measure > 3) {
                    e = t;
                    break
                }
            }
            return e = Math.min(e, 12), e = Math.max(e, 0), e || null
        }(), this.slider = null, this.GO.subscribe(function(t) {
            i.slider.slider("value", t)
        })
    }
    var o = {
            success: {
                measure: 5,
                title: "success",
                name: "Висока"
            },
            luck: {
                measure: 4,
                title: "luck",
                name: "Вищою за очікувану"
            },
            warning: {
                measure: 3,
                title: "warning",
                name: "Відповідає"
            },
            danger: {
                measure: 2,
                title: "danger",
                name: "Нижчою за очікувану"
            },
            critical: {
                measure: 1,
                title: "critical",
                name: "Низька"
            },
            unknown: {
                measure: 0,
                title: "unknown",
                name: "Не встановлена"
            },
            insufficient: {
                measure: -1,
                title: "insufficient",
                name: "Мало даних"
            }
        },
        s = {
            5: "success",
            4: "luck",
            3: "warning",
            2: "danger",
            1: "critical",
            0: "unknown",
            "-1": "insufficient"
        },
        a = {
            start: [
                ["success", "success", "success", "danger", "critical"],
                ["success", "luck", "luck", "danger", "critical"],
                ["luck", "luck", "warning", "danger", "critical"],
                ["warning", "warning", "danger", "danger", "critical"],
                ["warning", "warning", "critical", "critical", "critical"]
            ],
            middle: [
                ["success", "success", "success", "danger", "critical"],
                ["success", "luck", "luck", "danger", "critical"],
                ["luck", "luck", "warning", "danger", "critical"],
                ["warning", "warning", "danger", "danger", "critical"],
                ["warning", "warning", "critical", "critical", "critical"]
            ],
            end: [
                ["success", "success", "success", "danger", "critical"],
                ["success", "luck", "luck", "danger", "critical"],
                ["luck", "luck", "warning", "danger", "critical"],
                ["warning", "warning", "danger", "critical", "critical"],
                ["warning", "warning", "critical", "critical", "critical"]
            ]
        },
        r = {
            start: ["success", "luck", "warning", "danger", "critical"],
            middle: ["success", "luck", "warning", "danger", "critical"],
            end: ["success", "luck", "warning", "danger", "critical"]
        };
    n.prototype.getStatus = function(e) {
        var i, n, o, s = this.SK.result,
            l = this.PB.result,
            e = e || this.GO(),
            c = this.Q.current,
            u = a[this.quarterPhase],
            d = r[this.quarterPhase];
        return u && d ? c ? t("unknown") : e ? null === s && null === l ? t("insufficient") : null === s && this.PB.count < 3 ? t("insufficient") : null !== s && s < 2.5 ? t("critical") : null !== l && l < 2.5 ? t("critical") : (null !== s && (n = s > e + 2 ? 0 : s > e + .5 ? 1 : s >= e - .5 ? 2 : s > e - 2 ? 3 : 4), null !== l && (o = l > e + 2 ? 0 : l > e + .5 ? 1 : l >= e - .45 ? 2 : l > e - 2 ? 3 : 4), void 0 !== n && void 0 !== o && (i = u[o][n]), void 0 !== n && void 0 === o && (i = d[n]), void 0 === n && void 0 !== o && (i = d[o]), t(i)) : t("unknown") : t("unknown")
    }, n.prototype.initSlider = function(t, e) {
        var i, n = this,
            o = $(t),
            s = o.find(".supervisor__slider_warning");
        i = o.find(e).slider({
            value: this.GO(),
            range: "min",
            min: 0,
            max: 12,
            step: 1,
            disabled: !0,
            create: function(t, e) {
                var i = n.GO();
                i && i < 4 && s.show()
            },
            slide: function(t, e) {
                var i = e.value;
                n.GO(i || null), (!i || i >= 4) && s.fadeOut(300)
            },
            change: function(t, e) {
                var i = e.value;
                i && i < 4 ? s.fadeIn(600) : s.fadeOut(300)
            }
        }), this.slider = i
    }, n.prototype.enable = function() {
        this.slider.slider("enable")
    }, n.prototype.disable = function() {
        this.slider.slider("disable")
    }, SupervisorModel = function(t) {
        var e = this;
        t = t || {}, this.groups = [], this.subjects = {}, this.subjectsIds = [], ko.utils.arrayForEach(t.subjectsGroups || [], function(t) {
            t.subjects.length && e.groups.push(t)
        }), ko.utils.objectForEach(t.subjectsData || {}, function(i, o) {
            e.subjects[i] = new n(o, t.quarterPhase), e.subjectsIds.push(i)
        }), this.Q = function() {
            var t = [],
                n = [];
            return ko.utils.objectForEach(e.subjects, function(e, i) {
                t.push(i.Q.current), ko.utils.arrayForEach(i.Q.past || [], function(t, e) {
                    n[e] || (n[e] = []), n[e].push(t)
                })
            }), {
                current: i(t),
                past: ko.utils.arrayMap(n, function(t) {
                    return i(t)
                })
            }
        }(), this.GO = ko.computed(function() {
            var t = [];
            return ko.utils.objectForEach(e.subjects, function(e, i) {
                t.push(i.GO())
            }), i(t)
        }), this.status = ko.computed(function() {
            return e.getStatus()
        }), this.isEnabled = ko.observable(!1), this.isRatingVisible = ko.observable(!1)
    }, SupervisorModel.prototype.enable = function() {
        ko.utils.objectForEach(this.subjects, function(t, e) {
            e.enable()
        }), this.isEnabled(!0), $(window).on("beforeunload", function(t) {
            var e = "Не всі позначки збережені.";
            return t = t || window.event, t.returnValue = e, e
        })
    }, SupervisorModel.prototype.save = function() {
        return $(window).off("beforeunload"), !0
    }, SupervisorModel.prototype.cancel = function() {
        confirm("Ви впевнені, що хочете скасувати зміни?") && (ko.utils.objectForEach(this.subjects, function(t, e) {
            e.GO(e.initialGO), e.disable()
        }), this.isEnabled(!1), $(window).off("beforeunload"))
    }, SupervisorModel.prototype.getStatus = function() {
        var t, i = [];
        return ko.utils.objectForEach(this.subjects, function(t, e) {
            var n = e.status().measure;
            n > 0 && i.push(n)
        }), t = i.length ? Math.min.apply(null, i) : 0, e(t)
    }
}();
var SplittedTablesController = function(t) {
    var e = {
        menu_id: "",
        container_id: "",
        containers_class_name: "",
        normal_view_link_id: "",
        full_screen_link_id: "",
        full_screen_container_id: ""
    };
    return t = FN.extend(e, t), this.loaded_quarters = [], this.container = FN.ge(t.container_id), this.container ? (this.menu = FN.ge(t.menu_id), this.menu ? (this.menu_current_link = FN.geByClass1("current", this.menu, "a"), this.menu_links = FN.geByClass("past", this.menu, "a").concat(this.menu_current_link || []), this.menu_links && this.menu_links.length ? (this.normal_view_link = FN.ge(t.normal_view_link_id), this.full_screen_link = FN.ge(t.full_screen_link_id), this.full_screen_container = FN.ge(t.full_screen_container_id), this.containers_class_name = t.containers_class_name, void this.qAttachEvents()) : (FN.log("SplittedTablesController: не заданы a-элементы меню"), void(this.container.innerHTML = '<div class="sbp clr-red">Четверти не заполнены или еще не началась ни одна четверть</div>'))) : void FN.log("SplittedTablesController: не задано меню")) : void FN.log("SplittedTablesController: не задан контейнер")
};
SplittedTablesController.prototype.firstLoad = function() {
    if ("quarters" === LOC.hash && this.quarters_mark_link && this.loadQ) return this.loaded_quarters.length || (this.container.innerHTML = ""), this.loaded_quarters.push("quarters"), void this.loadQ();
    var t = FN.geByAttr1("href", "#" + LOC.hash, "a", this.menu);
    if (t) return void this.load(t);
    var e = this.menu_current_link || this.menu_links.slice(-1)[0];
    this.load(e)
}, SplittedTablesController.prototype.load = function(t) {
    if (t) {
        var e = this.containers_class_name,
            i = t.getAttribute("quarter_id"),
            n = t.getAttribute("src") || "";
        if (FN.each(this.menu_links, function(t, e) {
                FN.removeClass(e.parentNode, "active")
            }), FN.addClass(t.parentNode, "active"), this.hideAllContainers(), FN.inArray(i, this.loaded_quarters) || FN.ge(e + "_" + i)) FN.show(FN.ge(e + "_" + i));
        else {
            this.loaded_quarters.length || (this.container.innerHTML = ""), this.loaded_quarters.push(i);
            var o = FN.ce("div", {
                id: e + "_" + i,
                className: e
            });
            this.container.appendChild(o), this._load(n, o)
        }
    }
}, SplittedTablesController.prototype.hideAllContainers = function() {
    FN.each(FN.geByClass(this.containers_class_name, this.container, "div"), function(t, e) {
        FN.hide(e)
    })
}, SplittedTablesController.prototype._load = function(t, e) {
    e.innerHTML = loader, $.ajax({
        type: "get",
        dataType: "html",
        url: t,
        success: function(t) {
            $(e).html(t)
        }
    })
}, SplittedTablesController.prototype.qAttachEvents = function() {
    var t = this;
    isMobile || FN.each(this.menu_links, function(e, i) {
        addEvent(i, "click", function() {
            FN.hasClass(i.parentNode, "active") || t.load(i)
        })
    }), this.normal_view_link && this.full_screen_link && this.full_screen_container ? (addEvent(this.full_screen_link, "click", function() {
        FN.addClass(bodyNode, "j_fullscreen_view")
    }), addEvent(this.normal_view_link, "click", function() {
        FN.removeClass(bodyNode, "j_fullscreen_view")
    })) : FN.hide(this.full_screen_link, this.normal_view_link), this.qAttachEvents = function() {}
};
var JournalsController = function(t, e) {
    if ("object" == typeof JournalsController._instance) return JournalsController._instance;
    JournalsController._instance = this;
    var i = {
        menu_id: "",
        container_id: "",
        containers_class_name: "",
        quarters_mark_link_id: "",
        quarters_container_class_name: "",
        normal_view_link_id: "",
        full_screen_link_id: "",
        full_screen_container_id: "",
        lesson_start_time: 0,
        lesson_end_time: 0
    };
    t = FN.extend(i, t), SplittedTablesController.call(this, t), this.subjectID = e, this.quarters_mark_link = FN.ge(t.quarters_mark_link_id), this.quarters_container_class_name = t.quarters_container_class_name, this.lesson_start_time = t.lesson_start_time, this.lesson_end_time = t.lesson_end_time, isMobile && this.lesson_start_time && this.lesson_start_time && (this.timer = {
        box: FN.ge("journal_timer"),
        now: (new Date).getTime(),
        startTime: this.lesson_start_time,
        endTime: this.lesson_start_time
    }, Math.abs(this.timer.now - this.lesson_start_time) < TIME.day && Math.abs(this.timer.now - this.lesson_start_time) < TIME.day && this.setTimer()), JournalPopups.initAll(), this.attachEvents(), isMobile || this.firstLoad()
};
inherits(JournalsController, SplittedTablesController), JournalsController.prototype.loadQ = function() {
    var t = this.quarters_container_class_name,
        e = FN.ge(t + "_" + this.subjectID);
    FN.each(this.menu_links, function(t, e) {
        FN.removeClass(e.parentNode, "active")
    }), this.quarters_mark_link && FN.addClass(this.quarters_mark_link.parentNode, "active"), this.hideAllContainers(), e ? FN.show(e) : (e = FN.ce("div", {
        id: t + "_" + this.subjectID,
        className: t
    }), this.container.appendChild(e), $.ajax({
        type: "get",
        dataType: "html",
        url: this.quarters_mark_link ? this.quarters_mark_link.getAttribute("src") : "",
        beforeSend: function(t, i) {
            SETTINGS.ajaxParams.beforeSend(t, i), e.innerHTML = loader
        },
        success: function(t) {
            $(e).html(t)
        },
        error: function(t, i) {
            SETTINGS.ajaxParams.error(t, i), e.innerHTML = '<div class="sbp clr-red">Помилка при завантаженні</div>'
        },
        complete: function(t) {
            FN.hide(loader)
        }
    }))
}, JournalsController.prototype.setTimer = function() {
    var t = this;
    this.updateTimer(), this.timer.setInterval = setInterval(function() {
        t.updateTimer()
    }, 1e3)
}, JournalsController.prototype.updateTimer = function() {
    var t = (new Date).getTime(),
        e = this.timer.startTime,
        i = this.timer.endTime,
        n = this.timer.box;
    e - t > 999 ? n.innerHTML = "До початку уроку <b>" + this.getTime(e - t) + "</b>" : i - t > 0 ? n.innerHTML = "До кінця уроку <b>" + this.getTime(i - t) + "</b>" : (n.innerHTML = "Урок закінчився", clearInterval(this.timer.setInterval))
}, JournalsController.prototype.getTime = function(t) {
    var e, i, n, o = new Date;
    return o.setTime(t), t > 0 ? (e = o.getUTCHours(), i = o.getUTCMinutes(), n = o.getUTCSeconds(), e < 1 && i < 1 ? n + " с." : (i = n > 0 ? i += 1 : i, e < 1 ? i + " хв." : e + " г. " + (i ? i + " хв." : ""))) : 0
}, JournalsController.prototype.attachEvents = function() {
    var t = this;
    isMobile || (addEvent(this.quarters_mark_link, "click", function(e) {
        FN.hasClass(this.parentNode, "active") || t.loadQ()
    }), FN.each(this.menu_links, function(e, i) {
        addEvent(i, "click", function() {
            t.quarters_mark_link && FN.removeClass(t.quarters_mark_link.parentNode, "active"), FN.hide(FN.ge(t.quarters_container_class_name + "_" + t.subjectID))
        })
    })), addEvent(document, "click", function(t) {
        var e = t.target || t.srcElement,
            i = !1;
        CURRENT.journal && e !== window.overlay && !FN.isAncestor(e, CURRENT.journal.table) || (i = !0), e.isInnerElement && (i = !0), JournalPopups.isInside(e) && (i = !0), i || (JournalPopups.hideAll(), CURRENT.journal.toggleActiveMarkTd())
    }), addEvent(document, "keydown.journal", function(t) {
        var e = t.keyCode;
        if (CURRENT.journal && (e === KEY.ENTER && CURRENT.journalPop, CURRENT.journalMarkTd)) {
            if (e === KEY.LEFT) {
                var i = AbstractJournal.prototype.getPrevTd();
                return $(i).click(), !1
            }
            if (e === KEY.RIGHT) {
                var i = AbstractJournal.prototype.getNextTd();
                return $(i).click(), !1
            }
            if (e === KEY.UP) {
                var i = AbstractJournal.prototype.getPrevTd2();
                return $(i).click(), !1
            }
            if (e === KEY.DOWN) {
                var i = AbstractJournal.prototype.getNextTd2();
                return $(i).click(), !1
            }
            if (e === KEY.ENTER) return CURRENT.journalPop ? CURRENT.journalPop.noteIsFocused || $(CURRENT.journalPop.buttonOK).click() : $(CURRENT.journalMarkTd).click(), t.preventDefault(), t.stopPropagation(), !1;
            if (CURRENT.journalPop && !CURRENT.journalPop.noteIsFocused) {
                if (e === KEY.ESC) return CURRENT.journalPop.hide(), !1;
                if (console.log("keyCode = ", e, t.shiftKey), t.shiftKey && e >= KEY.NUM1 && e <= KEY.NUM2) {
                    var n = 10 + e - KEY.NUM0,
                        o = FN.geByAttr("data-mark", n + "", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (t.shiftKey && e >= KEY.NUM1_ && e <= KEY.NUM2_) {
                    var n = 10 + e - KEY.NUM0_,
                        o = FN.geByAttr("data-mark", n + "", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (!t.shiftKey && e >= KEY.NUM0 && e <= KEY.NUM9) {
                    var n = e - KEY.NUM0;
                    0 === n && (n = 10);
                    var o = FN.geByAttr("data-mark", n + "", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (!t.shiftKey && e >= KEY.NUM0_ && e <= KEY.NUM9_) {
                    var n = e - KEY.NUM0_;
                    0 === n && (n = 10);
                    var o = FN.geByAttr("data-mark", n + "", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (e === KEY.Y) {
                    var o = FN.geByAttr("data-mark", "н", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (e === KEY.BACKSPACE) {
                    var o = FN.geByAttr("data-mark", "", "a", CURRENT.journalPop.box);
                    return $(o).click(), !1
                }
                if (e === KEY.D) {
                    var o = CURRENT.journalPop.typeLink;
                    return $(o).click(), !1
                }
                if (e === KEY.R) {
                    var o = CURRENT.journalPop.noteLink;
                    return $(o).click(), !1
                }
            }
        }
    })
};
var ProgressController = function(t) {
    if ("object" == typeof ProgressController._instance) return ProgressController._instance;
    ProgressController._instance = this;
    var e = {
        menu_id: "",
        container_id: "",
        containers_class_name: "",
        normal_view_link_id: "",
        full_screen_link_id: "",
        full_screen_container_id: ""
    };
    t = FN.extend(e, t), SplittedTablesController.call(this, t), isMobile || this.firstLoad()
};
inherits(ProgressController, SplittedTablesController);
var SplittedTable = function(t, e) {
    var i = {
        table_id: "",
        left_table_id: "",
        scroll: {
            box_id: "",
            link_left_id: "",
            link_right_id: ""
        },
        marks_class_name: ""
    };
    return e = FN.extend(i, e), this.table = FN.ge(e.table_id), this.table ? (this.left_table = FN.ge(e.left_table_id), this.left_table ? (this.table.thead = FN.geByTag1("thead", this.table), this.table.tbody = FN.geByTag1("tbody", this.table), this.table.tbody.trs = FN.geByTag("tr", this.table.tbody), this.table.tfoot = FN.geByTag1("tfoot", this.table), this.left_table.thead = FN.geByTag1("thead", this.left_table), this.left_table.tbody = FN.geByTag1("tbody", this.left_table), this.left_table.tbody.trs = FN.geByTag("tr", this.left_table.tbody), this.class_names = {
        mark: e.marks_class_name
    }, e.scroll ? (this.scroll = {
        box: FN.ge(e.scroll.box_id),
        left_link: FN.ge(e.scroll.link_left_id),
        right_link: FN.ge(e.scroll.link_right_id),
        interval: 0
    }, this.scroll.box && this.scroll.left_link && this.scroll.right_link || (this.scroll = !1)) : this.scroll = !1, "JTable" === t ? (this.table.thead.tr_lesson_dates = FN.geByClass1("lesson_dates", this.table.thead, "tr"), this.table.thead.tds_lesson_date = FN.geByClass("lesson_date", this.table.thead.tr_lesson_dates, "td"), this.table.tfoot && (this.table.tfoot.tr_lesson_dates = FN.geByClass1("lesson_dates", this.table.tfoot, "tr"), this.table.tfoot.tds_lesson_date = FN.geByClass("lesson_date", this.table.tfoot.tr_lesson_dates, "td")), SplittedTable.prototype.sAttachEvents.apply(this), this.addBoundary(), this.sProcessTable()) : "QTable" === t && SplittedTable.prototype.qProcessTable.apply(this), this.paintEvenTrs(), void this.sqAttachEvents()) : void FN.log("SplittedTable: не задана левая таблица")) : void FN.log("SplittedTable: не задана основная таблица")
};
SplittedTable.prototype.paintEvenTrs = function() {
    FN.each([this.table, this.left_table], function(t, e) {
        TABLE.doEvenRows(e)
    })
}, SplittedTable.prototype.processTr = function(t) {
    var e = FN.geByClass(this.class_names.mark, t, "td"),
        i = this.getMarksInfo(e);
    t.avgTd && (t.avgTd.innerHTML = void 0 !== i.avg ? i.avg : "&mdash;"), t.skipsTd && (t.skipsTd.innerHTML = i.skips), t.avgSpan && (t.avgSpan.innerHTML = void 0 !== i.avg ? i.avg : "&mdash;"), t.countSpan && (t.countSpan.innerHTML = i.count)
}, SplittedTable.prototype.processTd = function(t) {}, SplittedTable.prototype.getMarksInfo = function(t) {
    var e, i, n = 0,
        o = 0,
        s = 0;
    return FN.each(t, function(t, i) {
        e = FN.trim(FN.stripHTML(i.innerHTML)).split("/"), FN.each(e, function(t, e) {
            "н" === e && s++, e = parseInt(e, 10), (e || 0 === e) && (n += e, o++)
        })
    }), o && (i = Math.round(n / o * 100) / 100), {
        count: o,
        avg: i,
        skips: s
    }
}, SplittedTable.prototype.addBoundary = function() {
    var t = this.table.thead.tds_lesson_date,
        e = this.table.tfoot ? this.table.tfoot.tds_lesson_date : null,
        i = this.table.thead.tdsTheme,
        n = this.table.tdsHometask;
    if (t && t.length) {
        var o = -1,
            s = 0,
            a = -1,
            r = {},
            l = {},
            c = [];
        if (r.td = t[0], r.num = r.td.getAttribute("week"), FN.each(FN.geByClass("boundary", this.table, "td"), function(t, e) {
                FN.removeClass(e, "boundary")
            }), FN.each(FN.geByClass("week_boundary", this.table, "td"), function(t, e) {
                FN.removeClass(e, "week_boundary")
            }), n && FN.each(n, function(t, e) {
                FN.removeClass(e, "boundary"), FN.removeClass(e, "week_boundary")
            }), i && FN.each(i, function(t, e) {
                FN.removeClass(e, "boundary"), FN.removeClass(e, "week_boundary")
            }), FN.each(t, function(t, e) {
                FN.hasClass(e, "past") && (o += 1, FN.hasClass(e, "hidden") || (s += 1, a = o)), l.td = FN.domNS(e), l.td && (l.num = l.td.getAttribute("week"), FN.hasClass(r.td, "hidden") ? (r.td = l.td, r.num = l.num) : FN.hasClass(l.td, "hidden") || (r.num !== l.num && (c.push(r.td.getAttribute("h")), FN.addClass(r.td, "week_boundary")), r.td = l.td, r.num = l.num))
            }), FN.each(this.table.tbody.trs, function(t, o) {
                var s = FN.geByTag("td", o);
                FN.addClass(s[a], "boundary"), FN.each(c, function(t, o) {
                    FN.addClass(s[o], "week_boundary"), e && FN.addClass(e[o], "week_boundary"), n && FN.addClass(n[o], "week_boundary"), i && FN.addClass(i[o], "week_boundary")
                })
            }), FN.addClass(t[a], "boundary"), e && FN.addClass(e[a], "boundary"), n && FN.addClass(n[a], "boundary"), i && FN.addClass(i[a], "boundary"), this.scroll) {
            var u, d = this.scroll.box,
                h = FN.getSize(d)[0],
                p = FN.getSize(t[0])[0] + 1;
            u = o === t.length - 1 ? s * p : s * p - h / 1.25, d.scrollLeft = u
        }
    }
}, SplittedTable.prototype.scrolling = function(t) {
    var e = this.scroll.box.scrollLeft;
    this.scroll.box.scrollLeft = e + t, this.scroll.box.scrollLeft === e && clearInterval(this.scroll.interval)
}, SplittedTable.prototype.scrollLeft = function() {
    this.scrolling(-3)
}, SplittedTable.prototype.scrollRight = function() {
    this.scrolling(3)
}, SplittedTable.prototype.sqAttachEvents = function() {
    var t = this;
    FN.each(this.table.tbody.trs, function(e, i) {
        addEvent(i, "mouseover", function() {
            FN.addClass(i, "hover"), FN.addClass(t.left_table.tbody.trs[e], "hover")
        }), addEvent(i, "mouseout", function() {
            FN.removeClass(i, "hover"), FN.removeClass(t.left_table.tbody.trs[e], "hover")
        })
    }), FN.each(this.left_table.tbody.trs, function(e, i) {
        addEvent(i, "mouseover", function() {
            FN.addClass(i, "hover"), FN.addClass(t.table.tbody.trs[e], "hover")
        }), addEvent(i, "mouseout", function() {
            FN.removeClass(i, "hover"), FN.removeClass(t.table.tbody.trs[e], "hover")
        }), addEvent(i, "click", function() {
            FN.toggleClass(i, "selected"), FN.toggleClass(t.table.tbody.trs[e], "selected")
        })
    }), this.scroll && (addEvent(this.scroll.left_link, "mouseover", function() {
        t.scroll.interval = setInterval(function() {
            t.scrollLeft()
        }, 25)
    }), addEvent(this.scroll.right_link, "mouseover", function() {
        t.scroll.interval = setInterval(function() {
            t.scrollRight()
        }, 25)
    }), addEvent(this.scroll.left_link, "mouseout", function() {
        clearInterval(t.scroll.interval)
    }), addEvent(this.scroll.right_link, "mouseout", function() {
        clearInterval(t.scroll.interval)
    }), addEvent(this.scroll.left_link, "click", function() {
        t.scroll.box.scrollLeft = 0, clearInterval(t.scroll.interval)
    }), addEvent(this.scroll.right_link, "click", function() {
        t.scroll.box.scrollLeft = FN.getSize(t.table)[0], clearInterval(t.scroll.interval)
    })), this.sqAttachEvents = function() {}
}, SplittedTable.prototype.sAttachEvents = function() {
    this.sAttachEvents = function() {}
}, SplittedTable.prototype.qProcessTable = function() {
    var t = this;
    FN.each(this.table.tbody.trs, function(e, i) {
        i.tds = FN.geByTag("td", i), i.avgTd = FN.geByClass1("avg", i, "td"), FN.each(i.tds, function(i, n) {
            n.setAttribute("h", i), n.setAttribute("v", e), t.processTd(n)
        }), i.setAttribute("v", e), t.processTr(i)
    }), FN.each(this.left_table.tbody.trs, function(t, e) {
        e.setAttribute("v", t)
    })
}, SplittedTable.prototype.sProcessTable = function() {
    var t = this,
        e = this.table.thead.tds_lesson_date;
    FN.each(e, function(t, e) {
        e.setAttribute("h", t), e.date = e.getAttribute("date")
    }), FN.each(this.table.tbody.trs, function(i, n) {
        n.tds = FN.geByTag("td", n), n.avgTd = FN.geByClass1("avg", n, "td"), n.skipsTd = FN.geByClass1("skips", n, "td"), n.avgSpan = FN.geByClass1("avg", t.left_table.tbody.trs[i], "span"), n.countSpan = FN.geByClass1("count", t.left_table.tbody.trs[i], "span"), FN.each(n.tds, function(n, o) {
            o.setAttribute("h", n), o.setAttribute("v", i), e[n] && o.setAttribute("title", e[n].date), t.processTd(o)
        }), n.setAttribute("v", i), t.processTr(n)
    }), FN.each(this.left_table.tbody.trs, function(t, e) {
        e.setAttribute("v", t)
    })
};
var AbstractProgress = function(t, e) {
    var i = {
        table_id: "",
        left_table_id: "",
        scroll: {
            box_id: "",
            link_left_id: "",
            link_right_id: ""
        },
        marks_class_name: ""
    };
    e = FN.extend(i, e), SplittedTable.call(this, t, e), this.gAttachEvents()
};
inherits(AbstractProgress, SplittedTable), AbstractProgress.prototype.gAttachEvents = function() {
    this.gAttachEvents = function() {}
};
var StandardProgress = function(t) {
    var e = {
        table_id: "",
        left_table_id: "",
        scroll: {
            box_id: "",
            link_left_id: "",
            link_right_id: ""
        },
        marks_class_name: ""
    };
    t = FN.extend(e, t), AbstractProgress.call(this, "JTable", t), this.loaded_marks_info = [], this.table.tbody.marks_info_tds = FN.geByAttr("marks-ids", null, "td", this.table.tbody), this.addBoundary(), this.attachEvents()
};
inherits(StandardProgress, AbstractProgress), StandardProgress.prototype.showMarkInfo = function(t) {
    var e = this,
        i = t.getAttribute("marks-ids").split(",");
    if (i && i.length)
        if (FN.inArray(i[0], this.loaded_marks_info)) {
            var n = FN.ge("jpop_mark_info_" + i[0]);
            this.setPopPosition(n, t), FN.show(n)
        } else {
            this.loaded_marks_info.push(i[0]);
            var n = FN.ce("div", {
                className: "jpop_mark_info",
                id: "jpop_mark_info_" + i[0],
                innerHTML: loader
            });
            bodyNode.appendChild(n), this.setPopPosition(n, t);
            var o = "";
            $.ajax({
                type: "get",
                url: "/marks/" + i + "/info",
                success: function(i) {
                    FN.each(i, function(t, e) {
                        o += "<ul>", e.lesson_note_type && (o += "<li><b>" + e.lesson_note_type + "</b></li>"), e.lesson_note_text && (o += "<li><small>" + e.lesson_note_text + "</small></li>"), o += "<li>Відмітка: <b>" + e.m + "</b></li>", e.note && (o += "<li>Коментар: <b>" + e.note + "</b></li>"), o += "<li>Поставив(ла): " + e.user + "</li>", e.created && (o += "<li><small>Дата: " + e.created + "</small></li>"), e.updated && (o += "<li><small>Оновлена: " + e.updated + "</small></li>"), e.lesson_without_date && (o += "<li>(урок без дати)</li>"), o += "</ul>"
                    }), n.innerHTML = o, e.setPopPosition(n, t)
                },
                error: function(i, o) {
                    SETTINGS.ajaxParams.error(i, o), n.innerHTML = '<ul><li class="clr-red">Помилка при завантаженні</li></ul>', e.setPopPosition(n, t)
                }
            }), addEvent(n, "mouseover", function() {
                FN.show(this)
            }), addEvent(n, "mouseout", function() {
                FN.hide(this)
            })
        }
}, StandardProgress.prototype.hideAllMarkInfoPopups = function() {
    var t = FN.geByClass("jpop_mark_info", bodyNode, "div");
    FN.each(t, function(t, e) {
        FN.hide(e)
    })
}, StandardProgress.prototype.setPopPosition = function(t, e) {
    FN.setStyle(t, {
        left: 0,
        top: 0
    });
    var i = FN.getXY(e),
        n = FN.getSize(e),
        o = FN.getSize(t),
        s = i[0],
        a = i[1];
    BROWSER.msie7 && (s -= 188), lastWindowWidth - i[0] < o[0] + 50 && (s = s - o[0] + n[0]), a += n[1], FN.setStyle(t, {
        left: s,
        top: a
    })
}, StandardProgress.prototype.attachEvents = function() {
    var t = this;
    FN.each(this.table.tbody.marks_info_tds, function(e, i) {
        i.removeAttribute("title"), addEvent(i, "mouseover", function() {
            t.showMarkInfo(i)
        }), addEvent(i, "mouseout", function() {
            t.hideAllMarkInfoPopups()
        })
    }), this.attachEvents = function() {}
};
var QuartersProgress = function(t, e) {
    var i = {
        table_id: "",
        left_table_id: "",
        scroll: {
            box_id: "",
            link_left_id: "",
            link_right_id: ""
        },
        marks_class_name: ""
    };
    t = FN.extend(i, t), AbstractProgress.call(this, "QTable", t, e), this.attachEvents()
};
inherits(QuartersProgress, AbstractProgress), QuartersProgress.prototype.attachEvents = function() {
    this.attachEvents = function() {}
}, CURRENT = CURRENT || {}, CURRENT.journal = null, CURRENT.journalPop = null, CURRENT.journalMarkTd = null;
var JournalPopups = {
        list: ["standard_mark", "quarter_mark", "year_mark", "limited_mark", "hometask", "lesson_note", "limited_lesson_note", "theme", "switcher", "help"],
        hideAll: function() {
            var t = null;
            FN.each(this.list, function(e, i) {
                t = JournalPopup[i], t && t.hide && t.hide()
            })
        },
        isInside: function(t) {
            var e = null,
                i = !1;
            return FN.each(this.list, function(n, o) {
                e = JournalPopup[o], e && (t === e.box || FN.isAncestor(t, e.box)) && (i = !0)
            }), i
        },
        initAll: function() {
            var t = null;
            FN.each(this.list, function(e, i) {
                t = JournalPopup[i], t && t.init && t.init(), t && t.attachEvents && t.attachEvents()
            })
        }
    },
    JournalPopup = {
        show: function() {
            this.box.style.display = "block", CURRENT.journalPop = this
        },
        hide: function() {
            window.overlay && (window.overlay.style.display = "none"), this.box && (this.box.style.display = "none"), CURRENT.journalPop = null
        }
    };
JournalPopup.standard_mark = {
    init: function() {
        this.box = FN.ge("jpop_mark"), this.pupil = FN.ge("jpop_mark_pupil"), this.date = FN.ge("jpop_mark_date"), this.links = FN.geByAttr("data-mark", null, "a", this.box), this.vis = FN.ge("jpop_mark_vis"), this.buttonOK = FN.ge("jpop_mark_button_ok"), this.buttonCancel = FN.ge("jpop_mark_button_cancel"), this.noteLink = FN.ge("jpop_mark_note_link"), this.noteBox = FN.ge("jpop_mark_note"), this.noteTextarea = FN.ge("jpop_mark_note_text"), this.noteIsFocused = !1, this.typeLink = FN.ge("jpop_mark_type_link"), this.typeSpan = FN.geByTag1("span", this.typeLink)
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.noteLink, "click", function() {
            FN.toggle(t.noteBox), isMobile || t.noteTextarea.focus()
        }), addEvent(this.typeLink, "click", function() {
            CURRENT.journal && CURRENT.journal.toggleMarkType()
        }), FN.each(this.links, function(t, e) {
            addEvent(e, "click", function() {
                CURRENT.journal && CURRENT.journal.changeCurMark(e)
            })
        }), addEvent(this.buttonOK, "click", function() {
            CURRENT.journal && CURRENT.journal.saveMark()
        }), addEvent(this.buttonCancel, "click", function() {
            t.hide()
        }), addEvent(this.noteTextarea, "focus", function() {
            t.noteIsFocused = !0
        }), addEvent(this.noteTextarea, "blur", function() {
            t.noteIsFocused = !1
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.quarter_mark = {
    init: function() {
        this.box = FN.ge("jpop_qmark"), this.pupil = FN.ge("jpop_qmark_pupil"), this.links = FN.geByAttr("data-mark", null, "a", this.box), this.buttonCancel = FN.ge("jpop_qmark_button_cancel")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.buttonCancel, "click", function() {
            t.hide()
        }), FN.each(this.links, function(t, e) {
            addEvent(e, "click", function() {
                CURRENT.journal && CURRENT.journal.changeCurQMark(e)
            })
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.year_mark = {
    init: function() {
        this.box = FN.ge("jpop_ymark"), this.pupil = FN.ge("jpop_ymark_pupil"), this.links = FN.geByAttr("data-mark", null, "a", this.box), this.buttonCancel = FN.ge("jpop_ymark_button_cancel")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.buttonCancel, "click", function() {
            t.hide()
        }), FN.each(this.links, function(t, e) {
            addEvent(e, "click", function() {
                CURRENT.journal && CURRENT.journal.changeCurYMark(e)
            })
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.limited_mark = {
    init: function() {
        this.box = FN.ge("jpop_limited_mark"), this.date = FN.ge("jpop_limited_mark_date"), this.close = FN.ge("jpop_limited_mark_close")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.close, "click", function() {
            t.hide()
        })
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.hometask = {
    init: function() {
        this.box = FN.ge("jpop_hometask"), this.form = FN.ge("jpop_hometask_form"), this.date = FN.ge("jpop_hometask_date"), this.textarea = FN.ge("jpop_hometask_text"), this.attachments_container = FN.ge("jpop_hometask_saved_attachments"), this.attachments_list = FN.ge("attachments_list_1"), this.saved_attachments_list = FN.ge("saved_attachments_list"), this.attachments_input = FN.geByAttr1("name", "attachments", "input", this.box), this.buttonOK = FN.ge("jpop_hometask_button"), this.cancel = FN.ge("jpop_hometask_cancel"), isMobile || (this.toolbar = FN.ge("jpop_hometask_toolbar"))
    },
    attachEvents: function() {
        var t = this;
        isMobile || FN.each(FN.geByTag("a", t.toolbar), function(e, i) {
            addEvent(i, "click", function() {
                var e = i.innerHTML;
                FN.insertAtCaret(t.textarea, e)
            })
        }), addEvent(this.buttonOK, "click", function() {
            CURRENT.journal && CURRENT.journal.saveHometask()
        }), addEvent(this.cancel, "click", function() {
            t.hide()
        }), this.attachEvents = function() {}
    },
    show: function() {
        var t = this;
        JournalPopup.show.call(this);
        var e = this.attachments_container.getAttribute("fetch_from"),
            i = CURRENT.journal.cur.hometask.td.getAttribute("attribute_id");
        e && i && $.ajax({
            url: e,
            data: {
                item_id: i,
                can_delete: 1
            },
            type: "get",
            dataType: "text",
            success: function(e) {
                t.attachments_container.innerHTML = e
            }
        })
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.lesson_note = {
    init: function() {
        this.box = FN.ge("jpop_lesson_note"), this.date = FN.ge("jpop_lesson_note_date"), this.subtypes = FN.geByAttr("name", "lesson-note", "input", this.box), this.textarea = FN.ge("jpop_lesson_note_text"), this.buttonOK = FN.ge("jpop_lesson_note_button"), this.cancel = FN.ge("jpop_lesson_note_cancel")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.buttonOK, "click", function() {
            CURRENT.journal && CURRENT.journal.saveLessonNote()
        }), addEvent(this.cancel, "click", function() {
            t.hide()
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.limited_lesson_note = {
    init: function() {
        this.box = FN.ge("jpop_limited_lesson_note"), this.date = FN.ge("jpop_limited_lesson_note_date"), this.subtypes = FN.geByAttr("data-subtype", null, "li", this.box), this.text = FN.ge("jpop_limited_lesson_note_text"), this.close = FN.ge("jpop_limited_lesson_note_close")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.close, "click", function() {
            t.hide()
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.theme = {
    init: function() {
        this.box = FN.ge("jpop_theme"), this.date = FN.ge("jpop_theme_date"), this.textarea = FN.ge("jpop_theme_text"), this.buttonOK = FN.ge("jpop_theme_button"), this.cancel = FN.ge("jpop_theme_cancel")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.buttonOK, "click", function() {
            CURRENT.journal && CURRENT.journal.saveTheme()
        }), addEvent(this.cancel, "click", function() {
            t.hide()
        }), this.attachEvents = function() {}
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this)
    }
}, JournalPopup.help = {
    init: function() {
        this.link = FN.ge("journal_help_link")
    },
    attachEvents: function() {
        var t = this;
        isMobile && addEvent(this.link, "click", function() {
            t.loaded ? (t.setPosition(), FN.show(window.overlay), FN.show(t.container)) : (t.container = FN.ce("div", {
                id: "journal_help"
            }), bodyNode.appendChild(t.container), t.container.innerHTML = loader, t.setPosition(), $.ajax({
                type: "get",
                dataType: "html",
                url: $(t.link).attr("url"),
                beforeSend: function(e, i) {
                    SETTINGS.ajaxParams.beforeSend(e, i), FN.show(window.overlay), FN.show(t.container)
                },
                success: function(e) {
                    t.loaded = !0, $(t.container).html(e), addEvent(FN.ge("journal_help_cancel"), "click", function() {
                        FN.hide(window.overlay), FN.hide(t.container)
                    }), t.setPosition()
                },
                error: function(e, i) {
                    SETTINGS.ajaxParams.error(e, i), FN.hide(window.overlay), FN.hide(t.container)
                },
                complete: function(t) {
                    FN.hide(loader)
                }
            }))
        }), this.attachEvents = function() {}
    },
    setPosition: function() {
        if (this.container) {
            var t = FN.getSize(this.container),
                e = scrollGetY(),
                i = e + window.lastWindowHeight / 2 - t[1] / 1.8;
            i < e + 10 && (i = e + 10), FN.setStyle(this.container, {
                top: i + "px",
                left: "50%",
                marginLeft: t[0] / -2
            })
        }
    },
    show: function() {
        JournalPopup.show.call(this)
    },
    hide: function() {
        JournalPopup.hide.call(this);
    }
}, JournalPopup.switcher = {
    type: "single",
    notSavedMarks: {},
    notSavedMarksLength: 0,
    init: function() {
        this.box = FN.ge("jswitch"), this.message = FN.ge("jswitch_mess"), this.typeLink = FN.ge("jswitch_type_link"), this.typeSpan = FN.geByTag1("u", this.typeLink), this.form = FN.ge("jswitch_form"), this.button = FN.ge("jswitch_button")
    },
    attachEvents: function() {
        var t = this;
        addEvent(this.typeLink, "click", function() {
            t.toggleType()
        }), addEvent(this.button, "click", function() {
            if (!t.notSavedMarksLength) return !1;
            $(window).off("beforeunload");
            var e, i, n = [];
            for (e in t.notSavedMarks) i = t.notSavedMarks[e], i.id = "null" === i.id ? null : i.id, n.push(i);
            return insert_objects_data_in_form(t.form, n), lockButton(t.button), !0
        }), this.attachEvents = function() {}
    },
    toggleType: function(t) {
        var t = t || ("single" === this.type ? "mass" : "single");
        "mass" === t ? (this.type = "mass", this.typeSpan.innerHTML = "Масова", FN.show(this.button)) : (this.type = "single", this.typeSpan.innerHTML = "По одній", this.notSavedMarksLength || FN.hide(this.button))
    },
    show: function() {},
    hide: function() {}
};
var AbstractJournal = function(t, e, i, n, o) {
    var s = {
        table: "",
        left_table: "",
        subgroups_menu_id: ""
    };
    i = FN.extend(s, i), SplittedTable.call(this, t, i), this.save_mark_url = e.save_mark, this.save_qmark_url = e.save_qmark, this.save_ymark_url = e.save_ymark, this.subjectID = parseInt(n, 10), this.classID = parseInt(o, 10), this.table.tbody.tdsMark = FN.geByClass("mark", this.table.tbody, "td"), this.table.tbody.tdsQMark = FN.geByClass("qmark", this.table.tbody, "td"), this.subgroups = {}, this.subgroups.menu = FN.ge(i.subgroups_menu_id), this.subgroups.links = FN.geByTag("a", this.subgroups.menu), this.cur = {
        subgroupID: 0,
        hometask: {},
        lessonnote: {},
        theme: {},
        mark: {},
        qmark: {},
        ymark: {}
    }, this.doHidePops = !0, this.gAttachEvents()
};
inherits(AbstractJournal, SplittedTable), AbstractJournal.prototype.setSubgroupId = function(t) {
    t = parseInt(t, 10), this.cur.subgroupID = t
}, AbstractJournal.prototype.getSubgroupId = function() {
    return this.cur.subgroupID
}, AbstractJournal.prototype.toggleActiveMarkTd = function(t) {
    CURRENT.journalMarkTd && (FN.removeClass(CURRENT.journalMarkTd, "mark_active"), CURRENT.journalMarkTd = null), t && (FN.addClass(t, "mark_active"), CURRENT.journalMarkTd = t)
}, AbstractJournal.prototype.checkMarkTd = function(t) {
    return t && FN.isVisible(t) && (FN.hasClass(t, "mark") || FN.hasClass(t, "qmark") || FN.hasClass(t, "ymark"))
}, AbstractJournal.prototype._getSomeTd = function(t) {
    var e = CURRENT.journalMarkTd || {};
    do
        if (e = t ? FN.domEL(e.previousSibling, !0) : FN.domEL(e.nextSibling), this.checkMarkTd(e)) return e;
    while (e)
}, AbstractJournal.prototype.getPrevTd = function() {
    return this._getSomeTd(!0)
}, AbstractJournal.prototype.getNextTd = function() {
    return this._getSomeTd(!1)
}, AbstractJournal.prototype._getSomeTd2 = function(t) {
    var e = CURRENT.journalMarkTd || {},
        i = e.parentNode,
        n = e.getAttribute("h");
    do
        if (i = t ? FN.domVPS(i) : FN.domVNS(i), e = FN.geByTag("td", i)[n], this.checkMarkTd(e)) return e;
    while (i)
}, AbstractJournal.prototype.getPrevTd2 = function() {
    return this._getSomeTd2(!0)
}, AbstractJournal.prototype.getNextTd2 = function() {
    return this._getSomeTd2()
}, AbstractJournal.prototype.showPopMark = function(t) {
    var e = JournalPopup.standard_mark,
        i = this.cur.mark,
        n = t.parentNode,
        o = t.getAttribute("h"),
        s = t.getAttribute("v"),
        a = this.table.thead.tds_lesson_date[o];
    FN.extend(i, {
        td: t,
        id: t.getAttribute("m_id") || "",
        mark: FN.stripHTML(t.innerHTML),
        note: t.getAttribute("note") || "",
        type: "single",
        lessonID: a.getAttribute("lesson_id"),
        lessonDay: a.getAttribute("day"),
        pupilID: n.getAttribute("pupil_id")
    }), i.mark.split("/").length >= 2 && (i.type = "double"), i.newMark = i.mark = FN.reconvertMark(i.mark), i.newNote = i.note, CURRENT.journal = this, this.toggleActiveMarkTd(t), e.noteTextarea.value = i.note, "" !== i.note ? FN.show(e.noteBox) : FN.hide(e.noteBox), this.toggleMarkType(i.type), isMobile && (e.pupil.innerHTML = FN.geByTag1("td", this.left_table.tbody.trs[s]).innerHTML, "qmarks" !== this.type && (e.date.innerHTML = this.table.thead.tds_lesson_date[o].getAttribute("date"))), JournalPopups.hideAll(), this.setPopPosition(e.box, t), e.show(), this.doHidePops = !1
}, AbstractJournal.prototype.showPopLimitedMark = function(t) {
    var e = JournalPopup.limited_mark,
        i = t.getAttribute("h");
    CURRENT.journal = this, this.toggleActiveMarkTd(t), isMobile && (e.date.innerHTML = this.table.thead.tds_lesson_date[i].getAttribute("date")), JournalPopups.hideAll(), this.setPopPosition(e.box, t), e.show(), this.doHidePops = !1
}, AbstractJournal.prototype.showPopQMark = function(t) {
    var e = JournalPopup.quarter_mark,
        i = this.cur.qmark,
        n = t.parentNode,
        o = t.getAttribute("v");
    FN.extend(i, {
        td: t,
        id: t.getAttribute("m_id") || "",
        mark: FN.stripHTML(t.innerHTML),
        pupilID: n.getAttribute("pupil_id"),
        quarterID: t.getAttribute("quarter_id")
    }), i.newMark = i.mark = FN.reconvertMark(i.mark), CURRENT.journal = this, this.toggleActiveMarkTd(t), "qmark" === this.class_names.mark || isMobile || (FN.domNS(n) ? FN.removeClass(e.box, "last") : FN.addClass(e.box, "last")), isMobile && (e.pupil.innerHTML = FN.geByTag1("td", this.left_table.tbody.trs[o]).innerHTML), JournalPopups.hideAll(), "qmark" === this.class_names.mark ? this.setPopPosition(e.box, t, "bottom", "center") : this.setPopPosition(e.box, t, "bottom", "left"), e.show(), this.doHidePops = !1
}, AbstractJournal.prototype.showPopYMark = function(t) {
    var e = JournalPopup.year_mark,
        i = this.cur.ymark,
        n = t.parentNode,
        o = t.getAttribute("v");
    FN.extend(i, {
        td: t,
        id: t.getAttribute("m_id") || "",
        mark: FN.stripHTML(t.innerHTML),
        pupilID: n.getAttribute("pupil_id")
    }), i.newMark = i.mark = FN.reconvertMark(i.mark), CURRENT.journal = this, this.toggleActiveMarkTd(t), isMobile && (e.pupil.innerHTML = FN.geByTag1("td", this.left_table.tbody.trs[o]).innerHTML), JournalPopups.hideAll(), this.setPopPosition(e.box, t, "bottom", "left"), e.show(), this.doHidePops = !1
}, AbstractJournal.prototype.toggleMarkType = function(t) {
    var e = JournalPopup.standard_mark,
        i = this.cur.mark;
    t = t || ("single" === i.type ? "double" : "single"), "double" === t ? (i.newMark = "н" === i.newMark ? "/" : i.newMark.indexOf("/") > -1 ? i.newMark : i.newMark + "/", this.updatePopMarkVis(), e.typeSpan.innerHTML = "m/m", i.type = "double") : (i.newMark = i.newMark.split("/")[0], this.updatePopMarkVis(), e.typeSpan.innerHTML = "m", i.type = "single")
}, AbstractJournal.prototype.updatePopMarkVis = function() {
    var t = JournalPopup.standard_mark,
        e = this.cur.mark;
    e.newPic || "" === e.newPic ? t.vis.innerHTML = e.newPic : t.vis.innerHTML = FN.convertMark(e.newMark)
}, AbstractJournal.prototype.updateTdMark = function(t) {
    var e = t.td,
        i = e.parentNode;
    e.setAttribute("m_id", t.id), e.setAttribute("note", t.note), t.pic || "" === t.pic ? e.innerHTML = t.pic : e.innerHTML = FN.convertMark(t.mark), FN.addClass(e, "mark_today"), this.processTd(e), this.processTr(i)
}, AbstractJournal.prototype.updateTdQMark = function() {
    var t = this.cur.qmark,
        e = t.td;
    e.setAttribute("m_id", t.id), e.innerHTML = FN.convertMark(t.mark), FN.addClass(e, "mark_today"), this.processTd(e)
}, AbstractJournal.prototype.updateTdYMark = function() {
    var t = this.cur.ymark,
        e = t.td;
    e.setAttribute("m_id", t.id), e.innerHTML = FN.convertMark(t.mark), FN.addClass(e, "mark_today"), this.processTd(e)
}, AbstractJournal.prototype.changeCurMark = function(t) {
    var e = this.cur.mark,
        i = t.getAttribute("data-mark"),
        n = t.getAttribute("data-pic");
    if ("н" !== i && "" !== i || this.toggleMarkType("single"), "double" === e.type) {
        var o = e.newMark.split("/");
        if ("" === o[0] || "" !== o[0] && "" !== o[1]) return e.newMark = i + "/", n && (e.newPic = n + "/"), void this.updatePopMarkVis();
        e.newMark = o[0] + "/" + i, n && (e.newPic = e.newPic.replace(/\/$/, "") + "/" + n)
    } else e.newMark = i, (n || "" === n) && (e.newPic = n);
    this.updatePopMarkVis(), this.saveMark()
}, AbstractJournal.prototype.changeCurQMark = function(t) {
    var e = this.cur.qmark,
        i = t.getAttribute("data-mark");
    e.newMark = i, this.saveQMark()
}, AbstractJournal.prototype.changeCurYMark = function(t) {
    var e = this.cur.ymark,
        i = t.getAttribute("data-mark");
    e.newMark = i, this.saveYMark()
}, AbstractJournal.prototype.saveMark = function() {
    var t, e = this,
        i = JournalPopup.standard_mark,
        n = this.cur.mark,
        o = n.newMark.split("/");
    n.newNote = FN.trim(i.noteTextarea.value), n.newMark = o[1] ? n.newMark : o[0], n.newPic && (n.newPic = n.newPic.replace(/\/$/, ""));
    var s = n.td,
        a = n.id,
        r = n.newMark,
        l = n.newPic,
        c = n.newNote;
    if ("..." !== s.innerHTML)
        if (t = {
                id: n.id,
                m: n.newMark,
                note: n.newNote,
                lesson_id: n.lessonID,
                lesson_date: n.lessonDay,
                pupil_id: n.pupilID
            }, "mass" === JournalPopup.switcher.type) {
            var u = t.lesson_id + "-" + t.pupil_id;
            JournalPopup.switcher.notSavedMarks[u] = t, JournalPopup.switcher.notSavedMarksLength += 1, e.updateTdMark({
                td: s,
                id: a,
                mark: r,
                pic: l,
                note: c
            }), FN.addClass(s, "mark_not_saved"), i.hide(), 1 === JournalPopup.switcher.notSavedMarksLength && (FN.show(JournalPopup.switcher.message), $(window).on("beforeunload", function(t) {
                var e = "Не все отметки сохранены!";
                return t = t || window.event, t.returnValue = e, e
            }))
        } else {
            s.innerHTML = "...", i.hide();
            var d = s.getAttribute("m_id") || "";
            "waiting" !== d && (s.setAttribute("m_id", "waiting"), $.ajax({
                url: this.save_mark_url,
                data: t,
                complete: function(t) {
                    unlockButton(i.buttonOK)
                },
                success: function(t) {
                    e.updateTdMark({
                        id: t.id,
                        td: s,
                        mark: r,
                        pic: l,
                        note: c
                    })
                }
            }))
        }
}, AbstractJournal.prototype.saveQMark = function() {
    var t, e = this,
        i = JournalPopup.quarter_mark,
        n = this.cur.qmark;
    return n.mark === n.newMark ? void i.hide() : (t = {
        id: n.id,
        m: n.newMark,
        quarter_id: n.quarterID,
        pupil_id: n.pupilID
    }, lockButton(i.buttonOK), void $.ajax({
        url: this.save_qmark_url,
        data: t,
        complete: function(t) {
            unlockButton(i.buttonOK)
        },
        success: function(t) {
            n.id = t.id, n.mark = n.newMark, e.updateTdQMark(), i.hide()
        }
    }))
}, AbstractJournal.prototype.saveYMark = function() {
    var t, e = this,
        i = JournalPopup.year_mark,
        n = this.cur.ymark;
    return n.mark === n.newMark ? void i.hide() : (t = {
        id: n.id,
        m: n.newMark,
        pupil_id: n.pupilID,
        year: this.year
    }, console.log("Данные для сохранения годовой отметки:"), console.dir(t), lockButton(i.buttonOK), void $.ajax({
        url: this.save_ymark_url,
        data: t,
        complete: function(t) {
            unlockButton(i.buttonOK)
        },
        success: function(t) {
            n.id = t.id, n.mark = n.newMark, e.updateTdYMark(), i.hide()
        }
    }))
}, AbstractJournal.prototype.setPopPosition = function(t, e, i, n) {
    if (isMobile) {
        var o = FN.getSize(t),
            s = scrollGetY() + window.lastWindowHeight / 2 - o[1] / 1.8;
        s < 10 && (s = 10), FN.show(window.overlay), FN.setStyle(t, {
            top: s + "px",
            left: "50%",
            marginLeft: o[0] / -2
        })
    } else {
        var a = FN.getXY(t.parentNode),
            o = FN.getSize(t),
            r = FN.getXY(e),
            l = FN.getSize(e),
            c = r[0] - a[0],
            s = r[1] - a[1],
            u = null;
        switch (FN.removeClass(t, "left"), FN.removeClass(t, "center"), n) {
            case "left":
                FN.addClass(t, "left"), c = c - o[0] + l[0];
                break;
            default:
                FN.addClass(t, "center"), c = c - o[0] / 2 + l[0] / 2 - 1
        }
        switch (BROWSER.msie7 && (c -= 188), i) {
            case "top":
                s = s - o[1] + 3;
                break;
            case "top_by_bottom_position":
                u = -1 * s;
                break;
            default:
                s = s + l[1] - 3
        }
        u ? FN.setStyle(t, {
            left: c,
            bottom: u
        }) : FN.setStyle(t, {
            left: c,
            top: s
        })
    }
}, AbstractJournal.prototype.showSubgroupTable = function(t) {
    var e = [this.table, this.left_table];
    FN.each(this.subgroups.links, function(t, e) {
        FN.removeClass(e, "active")
    }), FN.addClass(t, "active"), this.setSubgroupId(t.getAttribute("subgroup_id"));
    var i = this.getSubgroupId();
    FN.each(e, function(t, e) {
        FN.each(e.tbody.trs, function(t, e) {
            FN.removeClass(e, "hidden")
        })
    }), 0 !== i && FN.each(e, function(t, e) {
        FN.each(e.tbody.trs, function(t, e) {
            var n = e.getAttribute("subgroup_id"),
                o = new RegExp("(\\s|,|^)" + i + "(\\s|,|$)");
            n.match(o) || FN.addClass(e, "hidden")
        })
    }), this.paintEvenTrs(), JournalPopups.hideAll()
}, AbstractJournal.prototype.gAttachEvents = function() {
    var t = this;
    FN.each(this.table.tbody.tdsQMark, function(e, i) {
        addEvent(i, "click", function() {
            t.showPopQMark(i)
        })
    }), FN.each(this.subgroups.links, function(e, i) {
        addEvent(i, "click", function() {
            FN.hasClass(i, "active") || t.showSubgroupTable(i)
        })
    }), this.gAttachEvents = function() {}
};
var StandardJournal = function(t, e, i, n) {
    var o = {
        table_id: "",
        left_table_id: "",
        scroll: {
            box_id: "",
            link_left_id: "",
            link_right_id: ""
        },
        lessons_count_id: "",
        subgroups_menu_id: "",
        mark_class_name: ""
    };
    t = FN.extend(o, t), AbstractJournal.call(this, "JTable", e, t, i, n), this.table.thead.trMonth = FN.geByClass1("months", this.table.thead, "tr"), this.table.thead.tdsMonth = FN.geByAttr("month", null, "td", this.table.thead.trMonth), this.table.tfoot.trMonth = FN.geByClass1("months", this.table.tfoot, "tr"), this.table.tfoot.tdsMonth = FN.geByAttr("month", null, "td", this.table.tfoot.trMonth), this.table.trHometasks = FN.geByClass1("hometasks", this.table, "tr"), this.table.tdsHometask = FN.geByClass("hometask", this.table.trHometasks, "td"), this.table.thead.trThemes = FN.geByClass1("themes", this.table.thead, "tr"), this.table.thead.tdsTheme = FN.geByClass("theme", this.table.thead.trThemes, "td"), this.lessons_count = FN.ge(t.lessons_count_id), this.processTrHometasks(), this.processTrThemes(), this.processTrLessonDates(), this.processLimitations(), this.addBoundary(), this.attachEvents()
};
inherits(StandardJournal, AbstractJournal), StandardJournal.prototype.toggleActiveMarkTd = function(t) {
    if (AbstractJournal.prototype.toggleActiveMarkTd.call(this, t), t && !isMobile) {
        var e = FN.getXY(t),
            i = FN.getSize(t),
            n = FN.getXY(this.scroll.box.parentNode),
            o = FN.getSize(this.scroll.box.parentNode);
        BROWSER.msie7 && (e[0] -= 188);
        var s = e[0] - n[0],
            a = s + i[0] - o[0];
        s < 0 && (this.doHidePops = !1, this.scrolling(s)), a + 180 > 0 && (this.doHidePops = !1, this.scrolling(a + 180))
    }
}, StandardJournal.prototype.processTd = function(t) {
    SplittedTable.prototype.processTd.call(this, t), t.getAttribute("note") ? FN.addClass(t, "noted_mark") : FN.removeClass(t, "noted_mark")
}, StandardJournal.prototype.calcMonthsColspans = function() {
    var t = this;
    FN.each(this.table.thead.tdsMonth, function(e, i) {
        var n = i.getAttribute("month"),
            o = FN.geByAttr("month", n, "td", t.table.thead.tr_lesson_dates),
            s = 0,
            a = t.table.tfoot.tdsMonth[e];
        FN.each(o, function(t, e) {
            FN.hasClass(e, "hidden") || (s += 1)
        }), i.setAttribute("colSpan", s), a.setAttribute("colSpan", s);
        var r = isMobile ? Math.ceil(s / 5) : Math.ceil(s / 8);
        r = r > 8 ? 8 : r < 1 ? 1 : r;
        for (var l = '<p class="fl_l" style="width: ' + 100 / r + '%">' + FN.geByTag1("p", i).innerHTML + "</p>", c = ""; r > 0; r -= 1) c += l;
        i.innerHTML = c, a.innerHTML = c
    })
}, StandardJournal.prototype.processTdHometask = function(t) {
    var e = t.getAttribute("text") || "",
        i = t.getAttribute("exists");
    e || "1" == i || "true" == i ? FN.addClass(t, "set") : FN.removeClass(t, "set")
}, StandardJournal.prototype.processTrHometasks = function() {
    var t = this;
    FN.each(this.table.tdsHometask, function(e, i) {
        t.processTdHometask(i)
    })
}, StandardJournal.prototype.processTdTheme = function(t) {
    var e = t.getAttribute("text") || "";
    e ? FN.addClass(t, "set") : FN.removeClass(t, "set")
}, StandardJournal.prototype.processTrThemes = function() {
    var t = this;
    FN.each(this.table.thead.tdsTheme, function(e, i) {
        t.processTdTheme(i)
    })
}, StandardJournal.prototype.processTdLessonDate = function(t) {
    var e, i = t.getAttribute("text") || "",
        n = t.getAttribute("subtype") || "",
        o = FN.geByTag1("p", t),
        s = t.getAttribute("h");
    o.setAttribute("title", i), o.innerHTML = i, FN.removeClass(t, "lesson_control"), FN.removeClass(t, "theme_control"), FN.each(this.table.tbody.trs, function(t, e) {
        e.tds && FN.removeClass(e.tds[s], "lesson_control"), e.tds && FN.removeClass(e.tds[s], "theme_control")
    }), i && "0" === n || "1" === n ? e = "lesson_control" : "2" === n && (e = "theme_control"), e && (FN.addClass(t, e), FN.each(this.table.tbody.trs, function(t, i) {
        i.tds && FN.addClass(i.tds[s], e)
    }))
}, StandardJournal.prototype.processTrLessonDates = function() {
    var t = this;
    FN.each(this.table.thead.tds_lesson_date, function(e, i) {
        t.processTdLessonDate(i)
    })
}, StandardJournal.prototype.processLimitations = function() {
    var t = this,
        e = this.table.thead.tds_lesson_date,
        i = this.table.tfoot && this.table.tfoot.tds_lesson_date || [],
        n = [],
        o = [];
    e && e.length && (FN.each(e, function(t, e) {
        e.getAttribute("note-limitations") && n.push(t), e.getAttribute("mark-limitations") && o.push(t)
    }), FN.each(n, function(t, e) {
        i[e].setAttribute("note-limitations", "true")
    }), FN.each(o, function(e, n) {
        FN.each(t.table.tbody.trs, function(t, e) {
            var i = FN.geByTag("td", e);
            i[n].setAttribute("mark-limitations", "true")
        }), i[n].setAttribute("mark-limitations", "true")
    }))
}, StandardJournal.prototype.showPopHometask = function(t) {
    var e = JournalPopup.hometask,
        i = this.cur.hometask;
    FN.extend(i, {
        td: t,
        text: t.getAttribute("text") || "",
        file_exists: t.getAttribute("exists") || "0",
        attribute_id: t.getAttribute("attribute_id") || "",
        lesson_id: t.getAttribute("lesson_id") || ""
    }), CURRENT.journal = this, this.toggleActiveMarkTd(), e.date.innerHTML = t.getAttribute("title") || "", e.textarea.value = i.text, e.attachments_list && (e.attachments_list.innerHTML = ""), e.attachments_container && (e.attachments_container.innerHTML = ""), e.attachments_input.value = "", JournalPopups.hideAll(), this.setPopPosition(e.box, t, "top_by_bottom_position"), e.show(), isMobile || e.textarea.focus()
}, StandardJournal.prototype.showPopLessonNote = function(t) {
    var e = JournalPopup.lesson_note,
        i = this.cur.lessonnote;
    FN.extend(i, {
        td: t,
        text: t.getAttribute("text") || "",
        subtype: t.getAttribute("subtype") || "",
        lesson_id: t.getAttribute("lesson_id") || ""
    }), CURRENT.journal = this, this.toggleActiveMarkTd(), e.date.innerHTML = t.getAttribute("date"), e.textarea.value = i.text, $(e.subtypes).filter("[value=" + i.subtype + "]").prop("checked", !0), JournalPopups.hideAll(), this.setPopPosition(e.box, t), e.show(), isMobile || e.textarea.focus()
}, StandardJournal.prototype.showPopLimitedLessonNote = function(t) {
    var e = JournalPopup.limited_lesson_note,
        i = this.cur.lessonnote;
    FN.extend(i, {
        td: t,
        text: t.getAttribute("text") || "",
        subtype: t.getAttribute("subtype") || "",
        lesson_id: t.getAttribute("lesson_id") || ""
    }), CURRENT.journal = this, this.toggleActiveMarkTd(), e.text.innerHTML = i.text, e.date.innerHTML = t.getAttribute("date"), $(e.subtypes).hide(), "0" !== i.subtype && $(e.subtypes).filter("[data-subtype=" + i.subtype + "]").show(), JournalPopups.hideAll(), this.setPopPosition(e.box, t), e.show()
}, StandardJournal.prototype.showPopTheme = function(t) {
    var e = JournalPopup.theme,
        i = this.cur.theme;
    FN.extend(i, {
        td: t,
        text: t.getAttribute("text") || "",
        lesson_id: t.getAttribute("lesson_id") || ""
    }), CURRENT.journal = this, this.toggleActiveMarkTd(), e.date.innerHTML = t.getAttribute("date"), e.textarea.value = i.text, JournalPopups.hideAll(), this.setPopPosition(e.box, t), e.show(), isMobile || e.textarea.focus()
}, StandardJournal.prototype.saveHometask = function() {
    var t, e = this,
        i = JournalPopup.hometask,
        n = this.cur.hometask,
        o = FN.trim(i.textarea.value);
    t = {
        text: encodeURIComponent(o),
        lesson_id: n.lesson_id
    };
    var s = "",
        a = [];
    FN.each(t, function(t, e) {
        a.push(t + "=" + e)
    }), s = a.join("&"), s += "&" + $(i.form).serialize(), lockButton(i.buttonOK);
    var r = this.table.trHometasks.getAttribute("send_to");
    r ? $.ajax({
        url: r,
        data: s,
        complete: function(t) {
            unlockButton(i.buttonOK), isMobile || i.textarea.focus()
        },
        success: function(t) {
            n.text = o, n.file_exists = t.exists || "0", n.attribute_id = t.id, n.td.setAttribute("text", o), n.td.setAttribute("exists", t.exists || "0"), n.td.setAttribute("attribute_id", t.id), e.processTdHometask(n.td), i.hide()
        }
    }) : FN.showTopMessage("Помилка при збереженні домашнього завдання", 10)
}, StandardJournal.prototype.saveLessonNote = function() {
    var t, e = this,
        i = JournalPopup.lesson_note,
        n = this.cur.lessonnote,
        o = $(i.subtypes).filter(":checked").val(),
        s = FN.trim(i.textarea.value);
    if (n.text === s && n.subtype === o) return void i.hide();
    t = {
        subtype: o,
        text: s,
        lesson_id: n.lesson_id
    }, lockButton(i.buttonOK);
    var a = this.table.thead.tr_lesson_dates.getAttribute("send_to");
    a ? $.ajax({
        url: a,
        data: t,
        complete: function(t) {
            unlockButton(i.buttonOK), isMobile || i.textarea.focus()
        },
        success: function(t) {
            n.text = s, n.subtype = o, n.td.setAttribute("text", s), n.td.setAttribute("subtype", o), e.processTdLessonDate(n.td), i.hide()
        }
    }) : FN.showTopMessage("Помилка при збереженні позначки до уроку", 10)
}, StandardJournal.prototype.saveTheme = function() {
    var t, e = this,
        i = JournalPopup.theme,
        n = this.cur.theme,
        o = FN.trim(i.textarea.value);
    if (n.text === o) return void i.hide();
    t = {
        text: o,
        lesson_id: n.lesson_id
    }, lockButton(i.buttonOK);
    var s = this.table.thead.trThemes.getAttribute("send_to");
    s ? $.ajax({
        url: s,
        data: t,
        complete: function(t) {
            unlockButton(i.buttonOK), isMobile || i.textarea.focus()
        },
        success: function(t) {
            n.text = o, n.td.setAttribute("text", o), e.processTdTheme(n.td), i.hide()
        }
    }) : FN.showTopMessage("Помилка при збереженні теми уроку", 10)
}, StandardJournal.prototype.showSubgroupTable = function(t) {
    AbstractJournal.prototype.showSubgroupTable.call(this, t);
    var e = this.getSubgroupId(),
        i = this.table.thead.tds_lesson_date,
        n = this.table.tfoot.tds_lesson_date,
        o = this.table.tdsHometask,
        s = this.table.thead.tdsTheme;
    if (FN.each(i, function(t, e) {
            FN.removeClass(e, "hidden")
        }), FN.each(n, function(t, e) {
            FN.removeClass(e, "hidden")
        }), FN.each(s, function(t, e) {
            FN.removeClass(e, "hidden")
        }), FN.each(FN.geByTag("td", this.table.tbody), function(t, e) {
            FN.removeClass(e, "hidden")
        }), FN.each(o, function(t, e) {
            FN.removeClass(e, "hidden")
        }), 0 !== e) {
        var a = [];
        FN.each(i, function(t, i) {
            var n = parseInt(i.getAttribute("subgroup_id"), 10);
            n !== e && n > 0 && (a.push(t), FN.addClass(i, "hidden"))
        }), FN.each(this.table.tbody.trs, function(t, e) {
            if (!FN.hasClass(e, "hidden")) {
                var i = FN.geByTag("td", e);
                FN.each(a, function(t, e) {
                    FN.addClass(i[e], "hidden")
                })
            }
        }), FN.each(a, function(t, e) {
            FN.addClass(o[e], "hidden"), FN.addClass(s[e], "hidden"), FN.addClass(n[e], "hidden")
        })
    }
    if (this.lessons_count) {
        var r = FN.geByClass("future", this.table.thead.tr_lesson_dates, "td"),
            l = FN.getVisibleNodes(r).length;
        this.lessons_count.innerHTML = l + " " + afterNumeral(l, "урок", "", "у", "ів")
    }
    this.calcMonthsColspans(), this.addBoundary()
}, StandardJournal.prototype.attachEvents = function() {
    var t = this;
    isMobile || addEvent(this.scroll.box, "scroll", function() {
        t.doHidePops ? JournalPopups.hideAll() : t.doHidePops = !0
    }), FN.each(this.table.tdsHometask, function(e, i) {
        addEvent(i, "click", function() {
            t.showPopHometask(i)
        })
    }), FN.each(this.table.thead.tds_lesson_date, function(e, i) {
        addEvent(i, "click", function() {
            var e = !!i.getAttribute("note-limitations");
            e ? t.showPopLimitedLessonNote(i) : t.showPopLessonNote(i)
        })
    }), FN.each(this.table.thead.tdsTheme, function(e, i) {
        addEvent(i, "click", function() {
            t.showPopTheme(i)
        })
    }), FN.each(this.table.tbody.tdsMark, function(e, i) {
        addEvent(i, "click", function() {
            if ("..." !== i.innerHTML) {
                var e = !!i.getAttribute("mark-limitations");
                e ? t.showPopLimitedMark(i) : t.showPopMark(i)
            }
        })
    }), this.attachEvents = function() {}
};
var QuartersJournal = function(t, e, i, n, o) {
    var s = {
        table_id: "",
        left_table_id: "",
        scroll: !1,
        subgroups_menu_id: "",
        mark_class_name: ""
    };
    t = FN.extend(s, t), AbstractJournal.call(this, "QTable", e, t, i, n), this.year = o, this.table.tbody.tdsYMark = FN.geByClass("ymark", this.table.tbody, "td"), this.attachEvents()
};
inherits(QuartersJournal, AbstractJournal), QuartersJournal.prototype.updateTdQMark = function() {
    var t = this.cur.qmark,
        e = t.td;
    AbstractJournal.prototype.updateTdQMark.call(this), this.processTr(e.parentNode)
}, QuartersJournal.prototype.attachEvents = function() {
    var t = this;
    FN.each(this.table.tbody.tdsYMark, function(e, i) {
        addEvent(i, "click", function() {
            t.showPopYMark(i)
        })
    }), this.attachEvents = function() {}
};
var BehaviorJournal = function(t, e, i) {
    var n = {
        table_id: "",
        left_table_id: "",
        scroll: !1
    };
    t = FN.extend(n, t), SplittedTable.call(this, null, t), this.year = i, this.urls = e || {}, this.selects = FN.geByTag("select", this.table), this.behaviorAttachEvents()
};
inherits(BehaviorJournal, SplittedTable), BehaviorJournal.prototype.saveBehavior = function(t) {
    var e = {
        pupil_id: t.getAttribute("pupil_id"),
        quarter_id: t.getAttribute("quarter_id"),
        year: this.year,
        note: t.value
    };
    t.disabled = !0, $.ajax({
        url: this.urls.save,
        data: e,
        success: function(e) {
            FN.removeClass(t, "error")
        },
        error: function(e, i) {
            SETTINGS.ajaxParams.error(e, i), FN.addClass(t, "error")
        },
        complete: function() {
            t.disabled = !1
        }
    })
}, BehaviorJournal.prototype.behaviorAttachEvents = function() {
    var t = this;
    FN.each(this.selects, function(e, i) {
        addEvent(i, "change", function(e) {
            t.saveBehavior(i)
        })
    }), this.behaviorAttachEvents = function() {}
};
var AbsencesJournal = function(t, e, i) {
    var n = {
        table_id: "",
        left_table_id: "",
        scroll: !1
    };
    t = FN.extend(n, t), SplittedTable.call(this, null, t), this.urls = e || {}, this.inputs = FN.geByTag("input", this.table), this.processTable(), this.absencesAttachEvents()
};
inherits(AbsencesJournal, SplittedTable), AbsencesJournal.prototype.saveCounter = _.debounce(function(t) {
    var e = t.getAttribute("saved-count"),
        i = {
            pupil_id: t.getAttribute("pupil_id"),
            monday: t.getAttribute("monday"),
            type: t.getAttribute("record_type"),
            count: t.value || null
        };
    e !== i.count && $.ajax({
        url: this.urls.save,
        data: i,
        success: function() {
            FN.removeClass(t, "error"), t.setAttribute("saved-count", i.count)
        },
        error: function(e, i) {
            SETTINGS.ajaxParams.error(e, i), FN.addClass(t, "error")
        },
        complete: function() {}
    })
}, 50), AbsencesJournal.prototype.processTable = function() {
    var t = this.table.tbody.trs.length;
    FN.each(this.table.tbody.trs, function(e, i) {
        var n = FN.geByTag("input", i);
        FN.each(n, function(i, n) {
            var o = Math.floor(i / 2),
                s = t * o * 2 + 2 * e + i % 2 + 1;
            n.setAttribute("tabindex", s)
        })
    })
}, AbsencesJournal.prototype.absencesAttachEvents = function() {
    var t = this;
    FN.each(this.inputs, function(e, i) {
        addEvent(i, "focus", function(t) {
            i.select()
        }), addEvent(i, "change", function(e) {
            t.saveCounter(i)
        }), addEvent(i, "keyup", function(e) {
            t.saveCounter(i)
        })
    }), $(this.table).find(".js-absences-copy").on("click", function() {
        var t = $(this),
            e = t.closest("td"),
            i = e.find(".js-absences-counter"),
            n = e.next().find("input"),
            o = i.data("counter");
        n.val(o), n.trigger("change")
    }), this.absencesAttachEvents = function() {}
};
var daybookController = function(t, e) {
    var i = {
        quartersMenu: "",
        quartersContainer: "",
        lastPageLink: "",
        lastPageContainer: ""
    };
    if (t = FN.extend(i, t), this.loadedQuarters = [], this.qMenu = FN.ge(t.quartersMenu), this.qContainer = FN.ge(t.quartersContainer), this.lastPageLink = FN.ge(t.lastPageLink), this.lastPageContainer = FN.ge(t.lastPageContainer), this.lastPageLoaded = !1, this.qContainer && this.qMenu) {
        if (this.qMenuCurrentLink = FN.geByClass1("current", this.qMenu, "a"), this.qMenuLinks = FN.geByClass("past", this.qMenu, "a").concat(this.qMenuCurrentLink || []), !this.qMenuLinks || !this.qMenuLinks.length) return void(this.qContainer.innerHTML = '<div class="sbp clr-red">Чверті незаповнені або ще не почалася жодна чверть</div>');
        this.className = {
            daybook: "db_quarter"
        }, isMobile || this.showQuarterDaybook(this.qMenuCurrentLink || this.qMenuLinks.slice(-1)[0]), this.qAttachEvents()
    }
};
daybookController.prototype.showQuarterDaybook = function(t) {
    if (t) {
        var e = this.className.daybook,
            i = t.getAttribute("quarter_id"),
            n = t.getAttribute("src") || "";
        if (FN.each(this.qMenuLinks, function(t, e) {
                FN.removeClass(e.parentNode, "active")
            }), FN.removeClass(this.lastPageLink.parentNode, "active"), FN.addClass(t.parentNode, "active"), FN.each(FN.geByClass(e, this.qContainer, "div"), function(t, e) {
                FN.hide(e)
            }), FN.hide(this.lastPageContainer), FN.show(this.qContainer), FN.inArray(i, this.loadedQuarters) || FN.ge(e + "_" + i)) FN.show(FN.ge(e + "_" + i));
        else {
            this.loadedQuarters.length || (this.qContainer.innerHTML = ""), this.loadedQuarters.push(i);
            var o = FN.ce("div", {
                id: e + "_" + i,
                className: e
            });
            this.qContainer.appendChild(o), this._load(n, o)
        }
    }
}, daybookController.prototype._load = function(t, e) {
    $.ajax({
        type: "get",
        dataType: "html",
        url: t,
        beforeSend: function(t, i) {
            SETTINGS.ajaxParams.beforeSend(t, i), e.innerHTML = loader
        },
        success: function(t) {
            $(e).html(t)
        },
        error: function(t, i) {
            SETTINGS.ajaxParams.error(t, i), e.innerHTML = '<div class="sbp clr-red">Помилка при завантаженні</div>'
        }
    })
}, daybookController.prototype.showLastPage = function() {
    function t() {
        FN.hide(e.qContainer), FN.show(e.lastPageContainer), FN.each(e.qMenuLinks, function(t, e) {
            FN.removeClass(e.parentNode, "active")
        }), FN.addClass(e.lastPageLink.parentNode, "active")
    }
    var e = this;
    e.lastPageLoaded ? t() : $.ajax({
        type: "get",
        dataType: "html",
        url: e.lastPageLink.getAttribute("src"),
        success: function(i) {
            $(e.lastPageContainer).html(i), e.lastPageLoaded = !0, t()
        },
        error: function(t, i) {
            SETTINGS.ajaxParams.error(t, i), e.lastPageContainer.innerHTML = '<div class="sbp clr-red">Помилка при завантаженні</div>'
        }
    })
}, daybookController.prototype.qAttachEvents = function() {
    var t = this;
    isMobile || FN.each(this.qMenuLinks, function(e, i) {
        addEvent(i, "click", function() {
            FN.hasClass(i.parentNode, "active") || t.showQuarterDaybook(i)
        })
    }), isMobile || addEvent(this.lastPageLink, "click", function() {
        if (!FN.hasClass(this.parentNode, "active")) return t.showLastPage(), !1
    }), this.qAttachEvents = function() {}
};
var Daybook = function(t, e, i, n) {
    var o = {
        currentWeekLink: "",
        weeksContainer: "",
        weekClassName: ""
    };
    t = FN.extend(o, t), this.quarterID = e, this.pupilID = i, this.currentWeekID = n, this.currentWeekLink = FN.ge(t.currentWeekLink), this.weeksContainer = FN.ge(t.weeksContainer), this.className = {
        week: t.weekClassName
    }, this.loadedWeeks = [], this.attachEvents()
};
Daybook.prototype.showWeek = function(t, e, i) {
    var n = this,
        o = t.prevLink,
        s = t.nextLink,
        a = FN.domNS((o || s).parentNode),
        r = this.className.week,
        l = r + "_" + this.quarterID + "_" + t.weekID,
        c = r + "_" + this.quarterID + "_" + e;
    FN.inArray(e, this.loadedWeeks) ? (FN.hide(l), FN.show(c)) : $.ajax({
        type: "get",
        dataType: "html",
        url: i,
        beforeSend: function(t, e) {
            SETTINGS.ajaxParams.beforeSend(t, e), FN.show(a), FN.hide(o, s)
        },
        success: function(t) {
            var i = FN.ce("div", {
                className: r,
                id: c,
                week: e
            });
            FN.hide(l), n.weeksContainer.appendChild(i), $(i).html(t)
        },
        complete: function(t) {
            FN.hide(a), FN.show(o, s)
        }
    })
}, Daybook.prototype.showCurrentWeek = function() {
    var t = this,
        e = this.className.week,
        i = e + "_" + this.quarterID + "_" + this.currentWeekID;
    FN.each(this.loadedWeeks, function(i, n) {
        var o = e + "_" + t.quarterID + "_" + n;
        FN.hide(o)
    }), FN.show(i)
}, Daybook.prototype.attachEvents = function() {
    var t = this;
    addEvent(this.currentWeekLink, "click", function() {
        t.showCurrentWeek()
    }), this.attachEvents = function() {}
};
var DaybookWeek = function(t, e, i) {
    var n = {
        daybook: {},
        prevLink: "",
        nextLink: "",
        boxSign: "",
        formSign: "",
        formSignCancel: "",
        behaviorBox: "",
        behaviorSelect: "",
        behaviorInput: "",
        behaviorOK: "",
        noteWriteBox: "",
        noteWriteText: "",
        noteWriteButton: "",
        notesList: "",
        noteRowClassName: ""
    };
    t = FN.extend(n, t), this.daybook = t.daybook, this.weekID = e, this.pupilID = i, this.prevLink = FN.ge(t.prevLink), this.nextLink = FN.ge(t.nextLink), this.boxSign = FN.ge(t.boxSign), this.formSign = FN.ge(t.formSign), this.formSignCancel = FN.ge(t.formSignCancel), this.behaviorBox = FN.ge(t.behaviorBox), this.behaviorSelect = FN.ge(t.behaviorSelect), this.behaviorInput = FN.ge(t.behaviorInput), this.behaviorOK = FN.ge(t.behaviorOK), this.noteWriteBox = FN.ge(t.noteWriteBox), this.noteWriteText = FN.ge(t.noteWriteText), this.noteWriteButton = FN.ge(t.noteWriteButton), this.notesList = FN.ge(t.notesList), this.classNames = {
        noteRow: t.noteRowClassName
    }, this.daybook.loadedWeeks.push(e), this.attachEvents()
};
DaybookWeek.prototype.showWeek = function(t, e, i) {
    Daybook.prototype.showWeek.apply(this.daybook, arguments)
}, DaybookWeek.prototype.alignHeight = function() {}, DaybookWeek.prototype.deleteNote = function(t) {
    if (!confirm("Впевнені?")) return !1;
    var e = t.getAttribute("src"),
        i = FN.ge(t.getAttribute("rowID")),
        n = i.parentNode,
        o = FN.geByClass("message_row", n, "div");
    $.ajax({
        url: e,
        type: "get",
        dataType: "text",
        success: function(t) {
            o && 1 === o.length ? n.innerHTML = '<div class="mess_empty">Нет</div>' : n.removeChild(i)
        }
    })
}, DaybookWeek.prototype.attachEvents = function() {
    var t = this;
    addEvent(this.prevLink, "click", function() {
        var e = t.prevLink.getAttribute("send_to"),
            i = t.prevLink.getAttribute("prev_week_id");
        t.showWeek(t, i, e)
    }), addEvent(this.nextLink, "click", function() {
        var e = t.nextLink.getAttribute("send_to"),
            i = t.nextLink.getAttribute("next_week_id");
        t.showWeek(t, i, e)
    }), FN.each([this.formSign, this.formSignCancel], function(e, i) {
        i && addEvent(i, "submit", function(e) {
            var n = $(i).serialize(),
                o = i.getAttribute("action");
            return t.boxSign.innerHTML = loader, $.ajax({
                url: o,
                data: n,
                dataType: "html",
                success: function(e) {
                    t.boxSign.innerHTML = '<div class="signed_result">' + i.getAttribute("phrase") + "</div>", location.reload()
                },
                complete: function() {}
            }), !1
        })
    }), addEvent(this.behaviorSelect, "change", function() {
        t.behaviorOK.innerHTML = "", $.ajax({
            url: $(t.behaviorSelect).attr("send_to"),
            dataType: "text",
            data: {
                id: t.behaviorInput.value,
                pupil_id: t.pupilID,
                note: t.behaviorSelect.value,
                monday: t.behaviorSelect.getAttribute("monday")
            },
            success: function(e) {
                t.behaviorInput.value = e.id, t.behaviorOK.innerHTML = "ok"
            }
        })
    }), this.noteWriteBox && addEvent(this.noteWriteButton, "click", function() {
        var e = this,
            i = FN.trim(t.noteWriteText.value);
        i && (lockButton(e), $.ajax({
            url: $(this).attr("send_to"),
            data: {
                text: i
            },
            dataType: "text",
            success: function(e) {
                $(t.notesList).html(e), t.noteWriteText.value = ""
            },
            complete: function() {
                unlockButton(e)
            }
        }))
    }), this.attachEvents = function() {}
}, $(document).ready(function() {
    "Photoview" in window && Photoview.init(), $(".hidden_text").each(function(t, e) {
        var i = $(e);
        $(".link", e).click(function() {
            i.addClass("vis")
        }), $(".text", e).click(function() {
            i.removeClass("vis")
        })
    }), $(".sch_menu_box li.f1 .d1").each(function() {
        var t = $(this),
            e = $(".with_num", t);
        e.length > 1 && (e.eq(0).css({
            "margin-top": "-12px",
            "font-size": "11px"
        }), e.eq(1).css({
            "margin-top": "-1px",
            "font-size": "11px"
        }))
    }), $("#google_translate_element .link").click(function(t) {
        return $.ajax({
            type: "get",
            dataType: "script",
            url: "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
            success: function(t) {
                $("#google_translate_element").html("")
            }
        }), t.preventDefault(), !1
    }), $("#google-search-form").submit(function() {
        var t = $(this),
            e = t.find('input[name="q"]'),
            i = document.location.href;
        return i = i.replace("http://", "").replace("https://", ""),
            i = i.split("?")[0].split("#")[0].split("/")[0], window.location.href = t.attr("action") + "?q=site:" + i + " " + e.val(), !1
    });
    var t = $("#sch_login_box"),
        e = $("#sch_login_lnk");
    e.on("click", function() {
        var i = $(this);
        return e.hasClass("act") ? (i.removeClass("act"), t.hide()) : (i.addClass("act"), t.show()), !1
    }), $("body").click(function(t) {
        $(t.target).parents("#sch_login_box").length || $(t.target).filter("#sch_login_box").length || $(t.target).parents("#sch_login_lnk").length || $(t.target).filter("#sch_login_lnk").length || ($("#sch_login_box").hide(), $("#sch_login_lnk").removeClass("act"))
    });
    var i = $("#u_navigation_lnk"),
        n = $("#u_navigation_box");
    i.on("click", function() {
        return i.hasClass("act") ? (n.hide(), i.removeClass("act")) : (n.show(), i.addClass("act")), !1
    }), $("body").click(function(t) {
        $(t.target).parents("#u_navigation_box").length || $(t.target).filter("#u_navigation_box").length || $(t.target).parents("#u_navigation_lnk").length || $(t.target).filter("#u_navigation_lnk").length || (n.hide(), i.removeClass("act"))
    });
    var o = $(".u-messages.new"),
        s = o.parent().width(),
        a = !0;
    o.parent().width(s), setInterval(function() {
        a && o.animate({
            opacity: .1
        }, 50, function() {
            setTimeout(function() {
                o.animate({
                    opacity: 1
                }, 250)
            }, 100)
        })
    }, 2600), o.hover(function() {
        a = !1
    }, function() {
        a = !0
    }), $(".sch_menu_box li.f1, .sch_menu_box2 li.f1").each(function() {
        var t = $(this);
        t.find("li.act2").length && t.addClass("act3").removeClass("closed"), t.find("li").length && t.addClass("yes")
    });
    var r = $.cookie("slc_cookie");
    r || $.cookie("slc_cookie", "{slcMakeBetter}", {
        domain: LOC.domain,
        path: "/",
        expires: 30
    }), $(".slc_box").each(function() {
        var t = $(this),
            e = $.cookie("slc_cookie"),
            i = "{" + t.attr("cookie") + "}";
        e && e.indexOf(i) > -1 && (t.removeClass("open"), t.find(".slc_for_hide").slideUp(0))
    }), $(".slc_title").each(function() {
        var t, e = $(this),
            i = $(".slc_arrow", e),
            n = e.parents(".slc_box").eq(0),
            o = $(".slc_for_hide", n),
            s = $.cookie("slc_cookie"),
            a = "{" + n.attr("cookie") + "}";
        t = e.hasClass("not_clickable") ? i : e, t.click(function() {
            return n.hasClass("open") ? (o.slideUp(400, function() {
                n.removeClass("open")
            }), s += a) : (o.slideDown(400, function() {}), n.addClass("open"), s = s.replace(new RegExp(a + "", "g"), "")), $.cookie("slc_cookie", s, {
                domain: LOC.domain,
                path: "/",
                expires: 30
            }), !1
        })
    }), $(".sch_header_pop .close").click(function(t) {
        var e = $(this).parents(".sch_header_pop:first");
        $(".hint_text", e).hide(200, function() {
            $(".hint_lnk_wrap", e).show()
        });
        var i = $.cookie("slc_cookie");
        i && i.indexOf("{headerPopupsIsClosed}") <= -1 && (i += "{headerPopupsIsClosed}", $.cookie("slc_cookie", i, {
            domain: LOC.domain,
            path: "/",
            expires: 30
        })), t.preventDefault()
    }), $(".sch_header_pop .hint_lnk").click(function(t) {
        var e = $(this).parents(".sch_header_pop:first");
        $(".hint_lnk_wrap", e).hide(), $(".hint_text", e).show(200);
        var i = $.cookie("slc_cookie");
        i && (i = i.replace("{headerPopupsIsClosed}", ""), $.cookie("slc_cookie", i, {
            domain: LOC.domain,
            path: "/",
            expires: 30
        })), t.preventDefault()
    }), $(".lim_sliding").each(function() {
        var t = $(this);
        t.height() > 330 && (t.css("height", "280px"), t.append('<div class="lim_sh"></div>'), t.after('<div class="lim_alink_wrap"><a class="lim_alink">Показати текст повністю</a></div>'))
    }), $(".lim_alink").on("click", function() {
        var t = $(this),
            e = t.parents(".lim_height").eq(0);
        t.hasClass("hide") ? ($(".lim_sh", e).show(), t.removeClass("hide").html("Показати текст повністю"), $(".lim_sliding", e).css("height", "280px")) : ($(".lim_sh", e).hide(), t.addClass("hide").html("Скрыть текст"), $(".lim_sliding", e).css("height", "auto"))
    }), "fancybox" in $ && ($(".fancy-full").fancybox({
        maxWidth: "98%",
        fitToView: !1,
        autoSize: !1,
        closeClick: !1
    }), $('a[rel="fancy-pics"], .fancy-photo').fancybox());
    var l;
    $(".with-flow-pop").on("mouseenter", function() {
        var t = $(".flow-pop", $(this));
        clearTimeout(l), $(".flow-pop").hide(), t.show(), t.css("bottom", "7px")
    }), $(".with-flow-pop").on("mouseleave", function() {
        var t = $(".flow-pop", $(this));
        l = setTimeout(function() {
            t.hide()
        }, 500)
    });
    var c, u = $("#sch_event_pop"),
        d = parseInt(u.css("left"));
    $("#slc_events_list").on("mouseenter", ".site_event_box", function() {
            var t = $(this),
                e = t.find(".for-pop-info").html();
            clearTimeout(l), c = setTimeout(function() {
                $(".flow-pop-cnt", u).html(e);
                var i = t.position().top + (t.outerHeight() - u.outerHeight()) / 2;
                u.css("top", i + "px"), u.css("left", d + 7 + "px"), u.show().animate({
                    left: d + "px"
                }, 140)
            }, 200)
        }), $("#slc_events_list").on("mouseleave", ".site_event_box", function() {
            clearTimeout(c), l = setTimeout(function() {
                $("#sch_event_pop").fadeOut(150)
            }, 300)
        }), u.hover(function() {
            clearTimeout(l), $(this).stop(!0, !0).fadeIn(200)
        }, function() {
            clearTimeout(c), l = setTimeout(function() {
                $("#sch_event_pop").fadeOut(150)
            }, 300)
        }),
        function() {
            var t = $("#index_ph_list");
            "function" == typeof $.prototype.carouFredSel && t.length && t.carouFredSel({
                width: "100%",
                circular: !1,
                infinite: !1,
                auto: !1,
                onCreate: function() {
                    $(".index_ph_arrs").show()
                },
                scroll: {
                    items: 1,
                    duration: 300
                },
                prev: "#index_ph_prev",
                next: "#index_ph_next"
            })
        }(), $(function() {
            function t(t, e) {
                if (t) {
                    e = e || 0;
                    var i = t.data("boxid"),
                        n = $("#" + i);
                    t.is(":checked") ? e ? n.stop().slideDown(e) : n.show() : e ? n.stop().slideUp(e) : n.hide()
                }
            }
            var e = $('input[type="checkbox"].chb-change');
            e.each(function() {
                t($(this), 0)
            }), e.change(function() {
                t($(this), 200)
            })
        }()), $(".class_lns_list li").click(function() {
            var t = $(this).find("span").html();
            $(this).parents("ul").eq(0).prev().filter("input").val(t)
        }), $(".sch_pop2 .close_link").on("click", function() {
            return $(this).parents(".sch_pop2").eq(0).hide(400), !1
        }), $("a.confirm").on("click", function() {
            var t = $(this).data("confirm") || "Ви впевнені?";
            return confirm(t)
        }), $("form.confirm").on("submit", function() {
            var t = $(this).data("confirm") || "Ви впевнені?";
            return confirm(t)
        }), $("img:not(img[alt])").attr("alt", "Зображення"), $(".sliding-all").click(function(t) {
            var e = $(this),
                i = e.data("id"),
                n = $("#" + i),
                o = $(".sliding", n),
                s = $(".sliding-b", n),
                a = o.filter(".open").length,
                r = o.filter(':not(".open")').length;
            return !a || r && !e.hasClass("open") ? (e.addClass("open"), o.addClass("open"), s.slideDown(), !1) : !r || a && e.hasClass("open") ? (e.removeClass("open"), o.removeClass("open"), s.slideUp(), !1) : void 0
        }), $('.sliding:not(".open") > .sliding-b').slideUp(0), $("body").on("click", ".sliding-link", function(t) {
            var e = $(this),
                i = e.parents(".sliding:first"),
                n = i.find("> .sliding-b");
            $(".sliding-b:animated").length || (i.hasClass("open") ? n.slideUp(500, function() {
                i.removeClass("open")
            }) : (i.addClass("open"), n.slideDown(500))), e.attr("rel") && (i.hasClass("open") ? window.location.href = window.location.href.split("#")[0] + "#" + e.attr("rel") : window.location.href = window.location.href.split("#")[0] + "#"), t.preventDefault()
        }), $(".sliding").each(function() {
            var t = $(this),
                e = window.location.href.split("#")[1];
            $(".sliding-link:first", t).attr("rel") && $(".sliding-link:first", t).attr("rel") == e && ($(".sliding-b:first", t).slideDown(0), t.addClass("open"))
        }), $("body").on("click", "a.delete-and-hide", function() {
            var t = $(this),
                e = t.data("confirm") || "Ви впевнені?";
            if (!confirm(e)) return !1;
            var i = t.attr("href"),
                n = t.parents(t.attr("hide_element")).first();
            return i ? $.ajax({
                type: "get",
                dataType: "text",
                url: i,
                success: function(e) {
                    if (n.slideUp(300, function() {
                            n.remove()
                        }), t.hasClass("tr-del")) {
                        var i = t.parents("table:first");
                        1 == i.find("tbody tr").length && (i.after('<div class="sbp">Пусто.</div>'), i.remove())
                    }
                }
            }) : n.slideUp(300, function() {
                n.remove()
            }), !1
        }), $(".print_logins .item .delete").click(function() {
            var t = $(this).parents(".item:first");
            t.slideUp(600)
        }), $(".drdown_link").click(function() {
            var t = $(this).parents(".drdown:first");
            t.toggleClass("open"), $("textarea", t).focus()
        }), $("body").click(function(t) {
            $(t.target).parents(".drdown").length || $(".drdown").removeClass("open")
        }), $(".news_subscribe_link").click(function() {
            var t = $(this).parents(".news_subscribe:first"),
                e = $(".news_subscribe_sbscr", t),
                i = $(".news_subscribe_result", t);
            $.ajax({
                url: $(this).attr("send_to"),
                dataType: "html",
                dataFilter: function(t) {
                    return e.remove(), i.show(), t
                },
                success: function(t) {
                    i.html('<div class=" success"><b>Ви підписалися на новини</b>.<br/>\n\t\t\t\t\tВідмовитися від новин ви можете в настройках особистої інформації.</div>')
                },
                error: function(t, e) {
                    SETTINGS.ajaxParams.error(t, e), i.html('<div class=" failure">Помилка.</div>')
                }
            })
        });
    var h = window.location.href;
    if (h.match("/help/[0-9]+")) {
        var p = $(".left_content");
        if (p) {
            var f = $("h1").text();
            p.find("a").each(function() {
                var t = $(this);
                t.text() == f && t.css("font-weight", "bold")
            })
        }
    }
    clickActiveAnchor()
});
var GoogleChart = {
    isScriptLoaded: !1,
    general: function(t, e, i, n, o) {
        google.load("visualization", "1", {
            packages: ["corechart"]
        }), google.setOnLoadCallback(function() {
            GoogleChart._general(t, e, i, n, o)
        })
    },
    _general: function(t, e, i, n, o) {
        for (var s in e)
            if ("date" == e[s][0])
                for (var a in t) {
                    var r = new Date;
                    r.setTime(t[a][0]), t[a][0] = r
                }
            var l = new google.visualization.DataTable;
        for (var s in e) void 0 == e[s].length ? l.addColumn(e[s]) : l.addColumn(e[s][0], e[s][1]);
        l.addRows(t);
        var c = new google.visualization.DateFormat({
            pattern: "EEEE, d MMMM yyyy г."
        });
        for (var s in e) "date" == e[s][0] && c.format(l, parseInt(s));
        var u = {
            hAxis: {
                format: "dd MMM yyyy"
            },
            interpolateNulls: !0,
            chartArea: {
                left: 50,
                top: 30,
                width: "90%",
                height: "70%"
            },
            title: i,
            backgroundColor: "#f1f9fd",
            areaOpacity: .15,
            legend: "bottom",
            pointSize: 2,
            seriesType: "area",
            focusTarget: "category",
            lineWidth: 1,
            vAxis: {
                format: "#"
            }
        };
        o = $.extend(!0, u, o), "string" == e[0][0] && t.length > 15 && (o = $.extend(!0, o, {
            hAxis: {
                slantedTextAngle: 90
            }
        }));
        var d = new google.visualization.ComboChart(document.getElementById(n));
        d.draw(l, o)
    }
};
! function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        show: function() {
            var e, i, n, o = this.element,
                s = o.closest("ul"),
                a = o.attr("data-target");
            a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), o.parent("li").hasClass("active") || (e = s.find(".active a").last()[0], n = t.Event("show", {
                relatedTarget: e
            }), o.trigger(n), n.isDefaultPrevented() || (i = t(a), this.activate(o.parent("li"), s), this.activate(i, i.parent(), function() {
                o.trigger({
                    type: "shown",
                    relatedTarget: e
                })
            }), s.data("savehash") && (window.location.href = window.location.href.split("#")[0] + a + "-open")))
        },
        activate: function(e, i, n) {
            function o() {
                s.removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), n && n()
            }
            var s = i.find("> .active"),
                a = n && t.support.transition && s.hasClass("fade");
            a ? s.one(t.support.transition.end, o) : o(), s.removeClass("in")
        }
    }, t.fn.tab = function(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("tab");
            o || n.data("tab", o = new e(this)), "string" == typeof i && o[i]()
        })
    }, t.fn.tab.Constructor = e, t(function() {
        t("body").on("click.tab.data-api", '[data-toggle="tab"]', function(e) {
            t(this).tab("show"), e.preventDefault()
        }), t('[data-toggle="tab"][href="#' + LOC.hash + '"]').click()
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        filtrate: function() {
            var e, i, n = this.element,
                o = n.closest("ul"),
                s = n.data("target"),
                a = n.data("params");
            if (!n.parent("li").hasClass("active") && (s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), s && (i = t.Event("filtrate", {}), n.trigger(i), !i.isDefaultPrevented()))) {
                e = t(s);
                var r = o.find("> .active");
                r.removeClass("active"), n.parent("li").addClass("active");
                var l, c = 0;
                if ("all" == a) l = t('[data-filter][data-filter!="no_items"]', e), l.show(), c += l.length;
                else {
                    a = a.split(","), t("[data-filter]", e).hide();
                    for (var u in a) l = t('[data-filter="' + a[u] + '"]', e), l.show(), c += l.length
                }
                0 === c && t('[data-filter="no_items"]', e).show()
            }
        }
    }, t.fn.filter2 = function() {
        return this.each(function() {
            var i = t(this),
                n = i.data("filter");
            n || i.data("filter", n = new e(this)), n.filtrate()
        })
    }, t.fn.filter2.Constructor = e, t(function() {
        t("body").on("click.filter2", '[data-toggle="filter"]', function(e) {
            e.preventDefault(), t(this).filter2();
            var i = t(this).parents(".drdown:first");
            i.removeClass("open")
        })
    })
}(window.jQuery), ! function(t) {
    "use strict";

    function e() {
        i(t(n)).removeClass("open")
    }

    function i(e) {
        var i, n = e.attr("data-target");
        return n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), i = t(n), i.length || (i = e.parent()), i
    }
    var n = "[data-toggle=dropdown]",
        o = function(e) {
            var i = t(e).on("click.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function() {
                i.parent().removeClass("open")
            })
        };
    o.prototype = {
        constructor: o,
        toggle: function(n) {
            var o, s, a = t(this);
            if (!a.is(".disabled, :disabled")) return o = i(a), s = o.hasClass("open"), e(), s || (o.toggleClass("open"), a.focus()), !1
        },
        keydown: function(e) {
            var n, o, s, a, r;
            if (/(38|40|27)/.test(e.keyCode) && (n = t(this), e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled"))) {
                if (s = i(n), a = s.hasClass("open"), !a || a && 27 == e.keyCode) return n.click();
                o = t("[role=menu] li:not(.divider) a", s), o.length && (r = o.index(o.filter(":focus")), 38 == e.keyCode && r > 0 && r--, 40 == e.keyCode && r < o.length - 1 && r++, ~r || (r = 0), o.eq(r).focus())
            }
        }
    }, t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("dropdown");
            n || i.data("dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = o, t(function() {
        t("html").on("click.dropdown.data-api touchstart.dropdown.data-api", e), t("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", n, o.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", n + ", [role=menu]", o.prototype.keydown)
    })
}(window.jQuery);