! function() {
    "use strict";
    var objectProto = Object.prototype,
        hasOwnProperty = objectProto.hasOwnProperty;

    function baseHas(e, t) {
        return null != e && hasOwnProperty.call(e, t)
    }
    var _baseHas = baseHas,
        isArray = Array.isArray,
        isArray_1 = isArray,
        commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var freeGlobal = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal,
        _freeGlobal = freeGlobal,
        freeSelf = "object" == typeof self && self && self.Object === Object && self,
        root = _freeGlobal || freeSelf || Function("return this")(),
        _root = root,
        Symbol$1 = _root.Symbol,
        _Symbol = Symbol$1,
        objectProto$1 = Object.prototype,
        hasOwnProperty$1 = objectProto$1.hasOwnProperty,
        nativeObjectToString = objectProto$1.toString,
        symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;

    function getRawTag(e) {
        var t = hasOwnProperty$1.call(e, symToStringTag),
            a = e[symToStringTag];
        try {
            e[symToStringTag] = void 0;
            var n = !0
        } catch (e) {}
        var r = nativeObjectToString.call(e);
        return n && (t ? e[symToStringTag] = a : delete e[symToStringTag]), r
    }
    var _getRawTag = getRawTag,
        objectProto$2 = Object.prototype,
        nativeObjectToString$1 = objectProto$2.toString;

    function objectToString(e) {
        return nativeObjectToString$1.call(e)
    }
    var _objectToString = objectToString,
        nullTag = "[object Null]",
        undefinedTag = "[object Undefined]",
        symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;

    function baseGetTag(e) {
        return null == e ? void 0 === e ? undefinedTag : nullTag : symToStringTag$1 && symToStringTag$1 in Object(e) ? _getRawTag(e) : _objectToString(e)
    }
    var _baseGetTag = baseGetTag;

    function isObjectLike(e) {
        return null != e && "object" == typeof e
    }
    var isObjectLike_1 = isObjectLike,
        symbolTag = "[object Symbol]";

    function isSymbol(e) {
        return "symbol" == typeof e || isObjectLike_1(e) && _baseGetTag(e) == symbolTag
    }
    var isSymbol_1 = isSymbol,
        reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;

    function isKey(e, t) {
        if (isArray_1(e)) return !1;
        var a = typeof e;
        return !("number" != a && "symbol" != a && "boolean" != a && null != e && !isSymbol_1(e)) || (reIsPlainProp.test(e) || !reIsDeepProp.test(e) || null != t && e in Object(t))
    }
    var _isKey = isKey;

    function isObject(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    var isObject_1 = isObject,
        asyncTag = "[object AsyncFunction]",
        funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]",
        proxyTag = "[object Proxy]";

    function isFunction(e) {
        if (!isObject_1(e)) return !1;
        var t = _baseGetTag(e);
        return t == funcTag || t == genTag || t == asyncTag || t == proxyTag
    }
    var isFunction_1 = isFunction,
        coreJsData = _root["__core-js_shared__"],
        _coreJsData = coreJsData,
        maskSrcKey = (uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || ""), uid ? "Symbol(src)_1." + uid : ""),
        uid;

    function isMasked(e) {
        return !!maskSrcKey && maskSrcKey in e
    }
    var _isMasked = isMasked,
        funcProto = Function.prototype,
        funcToString = funcProto.toString;

    function toSource(e) {
        if (null != e) {
            try {
                return funcToString.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    var _toSource = toSource,
        reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
        reIsHostCtor = /^\[object .+?Constructor\]$/,
        funcProto$1 = Function.prototype,
        objectProto$3 = Object.prototype,
        funcToString$1 = funcProto$1.toString,
        hasOwnProperty$2 = objectProto$3.hasOwnProperty,
        reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function baseIsNative(e) {
        return !(!isObject_1(e) || _isMasked(e)) && (isFunction_1(e) ? reIsNative : reIsHostCtor).test(_toSource(e))
    }
    var _baseIsNative = baseIsNative;

    function getValue(e, t) {
        return null == e ? void 0 : e[t]
    }
    var _getValue = getValue;

    function getNative(e, t) {
        var a = _getValue(e, t);
        return _baseIsNative(a) ? a : void 0
    }
    var _getNative = getNative,
        nativeCreate = _getNative(Object, "create"),
        _nativeCreate = nativeCreate;

    function hashClear() {
        this.__data__ = _nativeCreate ? _nativeCreate(null) : {}, this.size = 0
    }
    var _hashClear = hashClear;

    function hashDelete(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var _hashDelete = hashDelete,
        HASH_UNDEFINED = "__lodash_hash_undefined__",
        objectProto$4 = Object.prototype,
        hasOwnProperty$3 = objectProto$4.hasOwnProperty;

    function hashGet(e) {
        var t = this.__data__;
        if (_nativeCreate) {
            var a = t[e];
            return a === HASH_UNDEFINED ? void 0 : a
        }
        return hasOwnProperty$3.call(t, e) ? t[e] : void 0
    }
    var _hashGet = hashGet,
        objectProto$5 = Object.prototype,
        hasOwnProperty$4 = objectProto$5.hasOwnProperty;

    function hashHas(e) {
        var t = this.__data__;
        return _nativeCreate ? void 0 !== t[e] : hasOwnProperty$4.call(t, e)
    }
    var _hashHas = hashHas,
        HASH_UNDEFINED$1 = "__lodash_hash_undefined__";

    function hashSet(e, t) {
        var a = this.__data__;
        return this.size += this.has(e) ? 0 : 1, a[e] = _nativeCreate && void 0 === t ? HASH_UNDEFINED$1 : t, this
    }
    var _hashSet = hashSet;

    function Hash(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Hash.prototype.clear = _hashClear, Hash.prototype.delete = _hashDelete, Hash.prototype.get = _hashGet, Hash.prototype.has = _hashHas, Hash.prototype.set = _hashSet;
    var _Hash = Hash;

    function listCacheClear() {
        this.__data__ = [], this.size = 0
    }
    var _listCacheClear = listCacheClear;

    function eq(e, t) {
        return e === t || e != e && t != t
    }
    var eq_1 = eq;

    function assocIndexOf(e, t) {
        for (var a = e.length; a--;)
            if (eq_1(e[a][0], t)) return a;
        return -1
    }
    var _assocIndexOf = assocIndexOf,
        arrayProto = Array.prototype,
        splice = arrayProto.splice;

    function listCacheDelete(e) {
        var t = this.__data__,
            a = _assocIndexOf(t, e);
        return !(a < 0) && (a == t.length - 1 ? t.pop() : splice.call(t, a, 1), --this.size, !0)
    }
    var _listCacheDelete = listCacheDelete;

    function listCacheGet(e) {
        var t = this.__data__,
            a = _assocIndexOf(t, e);
        return a < 0 ? void 0 : t[a][1]
    }
    var _listCacheGet = listCacheGet;

    function listCacheHas(e) {
        return _assocIndexOf(this.__data__, e) > -1
    }
    var _listCacheHas = listCacheHas;

    function listCacheSet(e, t) {
        var a = this.__data__,
            n = _assocIndexOf(a, e);
        return n < 0 ? (++this.size, a.push([e, t])) : a[n][1] = t, this
    }
    var _listCacheSet = listCacheSet;

    function ListCache(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ListCache.prototype.clear = _listCacheClear, ListCache.prototype.delete = _listCacheDelete, ListCache.prototype.get = _listCacheGet, ListCache.prototype.has = _listCacheHas, ListCache.prototype.set = _listCacheSet;
    var _ListCache = ListCache,
        Map$1 = _getNative(_root, "Map"),
        _Map = Map$1;

    function mapCacheClear() {
        this.size = 0, this.__data__ = {
            hash: new _Hash,
            map: new(_Map || _ListCache),
            string: new _Hash
        }
    }
    var _mapCacheClear = mapCacheClear;

    function isKeyable(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
    var _isKeyable = isKeyable;

    function getMapData(e, t) {
        var a = e.__data__;
        return _isKeyable(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
    }
    var _getMapData = getMapData;

    function mapCacheDelete(e) {
        var t = _getMapData(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var _mapCacheDelete = mapCacheDelete;

    function mapCacheGet(e) {
        return _getMapData(this, e).get(e)
    }
    var _mapCacheGet = mapCacheGet;

    function mapCacheHas(e) {
        return _getMapData(this, e).has(e)
    }
    var _mapCacheHas = mapCacheHas;

    function mapCacheSet(e, t) {
        var a = _getMapData(this, e),
            n = a.size;
        return a.set(e, t), this.size += a.size == n ? 0 : 1, this
    }
    var _mapCacheSet = mapCacheSet;

    function MapCache(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    MapCache.prototype.clear = _mapCacheClear, MapCache.prototype.delete = _mapCacheDelete, MapCache.prototype.get = _mapCacheGet, MapCache.prototype.has = _mapCacheHas, MapCache.prototype.set = _mapCacheSet;
    var _MapCache = MapCache,
        FUNC_ERROR_TEXT = "Expected a function";

    function memoize(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);
        var a = function() {
            var n = arguments,
                r = t ? t.apply(this, n) : n[0],
                o = a.cache;
            if (o.has(r)) return o.get(r);
            var i = e.apply(this, n);
            return a.cache = o.set(r, i) || o, i
        };
        return a.cache = new(memoize.Cache || _MapCache), a
    }
    memoize.Cache = _MapCache;
    var memoize_1 = memoize,
        MAX_MEMOIZE_SIZE = 500;

    function memoizeCapped(e) {
        var t = memoize_1(e, function(e) {
                return a.size === MAX_MEMOIZE_SIZE && a.clear(), e
            }),
            a = t.cache;
        return t
    }
    var _memoizeCapped = memoizeCapped,
        rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        reEscapeChar = /\\(\\)?/g,
        stringToPath = _memoizeCapped(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(rePropName, function(e, a, n, r) {
                t.push(n ? r.replace(reEscapeChar, "$1") : a || e)
            }), t
        }),
        _stringToPath = stringToPath;

    function arrayMap(e, t) {
        for (var a = -1, n = null == e ? 0 : e.length, r = Array(n); ++a < n;) r[a] = t(e[a], a, e);
        return r
    }
    var _arrayMap = arrayMap,
        INFINITY = 1 / 0,
        symbolProto = _Symbol ? _Symbol.prototype : void 0,
        symbolToString = symbolProto ? symbolProto.toString : void 0;

    function baseToString(e) {
        if ("string" == typeof e) return e;
        if (isArray_1(e)) return _arrayMap(e, baseToString) + "";
        if (isSymbol_1(e)) return symbolToString ? symbolToString.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -INFINITY ? "-0" : t
    }
    var _baseToString = baseToString;

    function toString(e) {
        return null == e ? "" : _baseToString(e)
    }
    var toString_1 = toString;

    function castPath(e, t) {
        return isArray_1(e) ? e : _isKey(e, t) ? [e] : _stringToPath(toString_1(e))
    }
    var _castPath = castPath,
        argsTag = "[object Arguments]";

    function baseIsArguments(e) {
        return isObjectLike_1(e) && _baseGetTag(e) == argsTag
    }
    var _baseIsArguments = baseIsArguments,
        objectProto$6 = Object.prototype,
        hasOwnProperty$5 = objectProto$6.hasOwnProperty,
        propertyIsEnumerable = objectProto$6.propertyIsEnumerable,
        isArguments = _baseIsArguments(function() {
            return arguments
        }()) ? _baseIsArguments : function(e) {
            return isObjectLike_1(e) && hasOwnProperty$5.call(e, "callee") && !propertyIsEnumerable.call(e, "callee")
        },
        isArguments_1 = isArguments,
        MAX_SAFE_INTEGER = 9007199254740991,
        reIsUint = /^(?:0|[1-9]\d*)$/;

    function isIndex(e, t) {
        var a = typeof e;
        return !!(t = null == t ? MAX_SAFE_INTEGER : t) && ("number" == a || "symbol" != a && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var _isIndex = isIndex,
        MAX_SAFE_INTEGER$1 = 9007199254740991;

    function isLength(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER$1
    }
    var isLength_1 = isLength,
        INFINITY$1 = 1 / 0;

    function toKey(e) {
        if ("string" == typeof e || isSymbol_1(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -INFINITY$1 ? "-0" : t
    }
    var _toKey = toKey;

    function hasPath(e, t, a) {
        for (var n = -1, r = (t = _castPath(t, e)).length, o = !1; ++n < r;) {
            var i = _toKey(t[n]);
            if (!(o = null != e && a(e, i))) break;
            e = e[i]
        }
        return o || ++n != r ? o : !!(r = null == e ? 0 : e.length) && isLength_1(r) && _isIndex(i, r) && (isArray_1(e) || isArguments_1(e))
    }
    var _hasPath = hasPath;

    function has(e, t) {
        return null != e && _hasPath(e, t, _baseHas)
    }
    var has_1 = has;

    function isUndefined(e) {
        return void 0 === e
    }
    var isUndefined_1 = isUndefined,
        config = {
            "ringostatProjectHash": "24f0b44bdb291cacf9b2ad9eb2a2e2939b5b15ee",
            "uaId": "UA-72527755-1",
            "classified": 0,
            "xpaths": [{
                "xPath": "\/\/a[@href=\"tel:+380996337766\"]|\/\/a[@href=\"tel:+380939917766\"]",
                "onlyForRegion": "",
                "mask": "<span>(###)<\/span> ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "2",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[@href='tel:(044)331-12-15'] | \/\/a[@href=\"tel:+380676337766\"]",
                "onlyForRegion": "",
                "mask": "<span>(###)<\/span> ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[@class=\"phones-list\"][.\/a[@href=\"tel:+380443311215\"]\/span[text()=\"(044)\"]]",
                "onlyForRegion": "",
                "mask": "<a href=\"tel:+<t>\"><span>(###)<\/span> ###-##-##<\/a><br><a class=\"rs_lifecell_num\" href=\"tel:+380939917766\">(093) 991-77-66<\/a>",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[@href=\"tel:0676337766\"][text()=\"\u2706 (067) 633-77-66\"]|\/\/a[text()=\"\u2706 (067) 633-77-66\"]",
                "onlyForRegion": "",
                "mask": "\u2706 (###) ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[.\/strong[contains(.,'\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430\u043c \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:')]]",
                "onlyForRegion": "",
                "mask": "<strong>\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430\u043c \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430\u043c:<\/strong><br> \u041a\u0438\u0435\u0432\u0441\u0442\u0430\u0440&nbsp;<a href=\"tel:+<t>\">(###) ###-##-##<\/a><br> Life&nbsp;<a class=\"rs_lifecell_num\" href=\"tel:+380939917766\">(093) 991-77-66<\/a>",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[.\/strong[contains(.,'\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442\u0443:')]]",
                "onlyForRegion": "",
                "mask": "<strong>\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442\u0443:<\/strong><br>\u041a\u0438\u0435\u0432\u0441\u0442\u0430\u0440&nbsp;<a href=\"tel:+<t>\">(###) ###-##-##<\/a><br>Life&nbsp;<a href=\"tel:+380939917766\" class=\"rs_lifecell_num\">(093) 991-77-66<\/a>",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/*[contains(concat(\" \", normalize-space(@class), \" \"), \"rs_lifecell_num\")]",
                "onlyForRegion": "",
                "mask": "<span>(###)<\/span> ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "2",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/p\/a[@href=\"tel: 0676337766\"][text()=\"(067) 633-77-66\"]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/p\/a[@href=\"tel: 0939917766\"][text()=\"(093) 991-77-66\"]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "2",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[@class='flex-item']\/p\/a[contains(.,'(067) 633-77-66')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "1",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[@class='flex-item']\/p\/a[contains(.,'(093) 991-77-66')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "0",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "2",
                "callMeHTML": ""
            }],
            "isAdvanced": 1,
            "userSettings": {
                "observeDOM": true,
                "browserGeolocation": false,
                "callbackSettings": {
                    "delay": false,
                    "CallbackOff": false,
                    "autoFormOff": false,
                    "hideCallbackButton": false
                },
                "customFormDataTracking": {
                    "isActive": false,
                    "startCallbackOnSubmitForm": false,
                    "callbackDuringBusinessHours": true,
                    "phoneInputName": ["phone", "tel", "telephone"],
                    "pagesWhiteList": [],
                    "pagesBlackList": [],
                    "fieldsBlackList": []
                },
                "callback": "function (data) {}"
            },
            "substitutionStatus": 1,
            "crossDomainTracking": 0,
            "trackedEntities": []
        },
        urls = {
            changedNumber: "https://analytics.ringostat.net/changed_number/",
            collect: "https://analytics.ringostat.net/collect/",
            ping: "https://analytics.ringostat.net/ping/",
            backend: "https://app.ringostat.com/",
            api: "https://api.ringostat.com/",
            analytics: "https://analytics.ringostat.net/",
            apiV2: "https://analytics.ringostat.net/api_v2?token=27a69aed645097ff7b46aead77ef0ad8",
            substitution: "https://substitution.ringostat.net/"
        },
        createFunction = function(e, t) {
            return "string" == typeof e && 0 === e.indexOf("function") ? new Function("return ".concat(e))() : t
        };
    config.urls = urls, config.userSettings = config.userSettings || {}, config.manualMode = config.userSettings.manualMode || !1, config.browserGeolocation = void 0 === config.userSettings.browserGeolocation || config.userSettings.browserGeolocation, config.callbackSettings = config.userSettings.callbackSettings || {}, config.changedNumberCallback = createFunction(config.userSettings.callback, function() {}), config.cookieDomain = config.userSettings.cookieDomain || "", config.cookies = {
        rngst1: "rngst1",
        rngst2: "rngst2"
    }, config.ga = config.userSettings.GoogleAnalyticsObject ? config.userSettings.GoogleAnalyticsObject : window.GoogleAnalyticsObject, config.interactionEvents = ["mousedown", "mouseup", "mousemove", "onscroll", "touchstart", "touchmove", "touchend", "keydown", "keyup"], config.isAdvanced = config.isAdvanced || !1, config.numbersData = [], config.observeDOM = config.userSettings.observeDOM || !1, config.pingInterval = 15e3, config.phoneNumber = config.phoneNumber || null, config.roistatTracking = config.userSettings.roistatTracking || !1, config.sessionLength = config.userSettings.sessionLength || 300, config.sessionLengthMS = 1e3 * config.sessionLength, 0 !== config.substitutionStatus ? config.substitutionEnabled = createFunction(config.userSettings.initChangeNumber, function() {
        return !0
    })() : config.substitutionEnabled = 0, config.trackedEntities = config.trackedEntities || {};
    var findGaTracker = function(e, t) {
            if (void 0 === e[t]) return null;
            if ("function" != typeof e[t].getAll) return null;
            var a = e[t].getAll();
            if (!1 === Array.isArray(a) || 0 === a.length) return null;
            for (var n = a.length, r = 0; r < n; r += 1) {
                var o = a[r];
                if (o.get("ringostatTracker")) return o
            }
            return null
        },
        computeChangeNumberParams = function(e) {
            var t = e.clientId,
                a = e.cookie,
                n = e.firstRequest,
                r = e.forceNumber,
                o = e.geoLocation,
                i = e.pageViewId,
                s = e.projectHash,
                c = e.adId,
                l = e.xPathId,
                u = "";
            return u += "r_h=".concat(encodeURIComponent(s)), u += "&r_cl=".concat(encodeURIComponent(t)), u += "&r_cu=".concat(encodeURIComponent(window.location.href)), u += "&r_re=".concat(encodeURIComponent(document.referrer)), u += "&r_ce=".concat(encodeURIComponent(a)), u += "&r_ur=".concat(n), u += "&r_us=".concat(encodeURIComponent(window.navigator.userAgent)), u += "&r_fs=".concat(null), u += "&r_fn=".concat(r ? "forceNumber" : null), u += "&dt=".concat(encodeURIComponent(document.title)), u += "&hid=".concat(i), u += "&vid=".concat(i), o.latitude && (u += "&r_la=".concat(encodeURIComponent(o.latitude))), o.longitude && (u += "&r_lo=".concat(encodeURIComponent(o.longitude))), o.accuracy && (u += "&r_a=".concat(encodeURIComponent(o.accuracy))), o.city && (u += "&r_ci=".concat(encodeURIComponent(o.city))), o.country && (u += "&r_cy=".concat(encodeURIComponent(o.country))), c && (u += "&r_ai=".concat(encodeURIComponent(c))), l && (u += "&r_x=".concat(encodeURIComponent(l))), u
        },
        nativeFloor = Math.floor,
        nativeRandom = Math.random;

    function baseRandom(e, t) {
        return e + nativeFloor(nativeRandom() * (t - e + 1))
    }
    var _baseRandom = baseRandom;

    function isArrayLike(e) {
        return null != e && isLength_1(e.length) && !isFunction_1(e)
    }
    var isArrayLike_1 = isArrayLike;

    function isIterateeCall(e, t, a) {
        if (!isObject_1(a)) return !1;
        var n = typeof t;
        return !!("number" == n ? isArrayLike_1(a) && _isIndex(t, a.length) : "string" == n && t in a) && eq_1(a[t], e)
    }
    var _isIterateeCall = isIterateeCall,
        NAN = NaN,
        reTrim = /^\s+|\s+$/g,
        reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
        reIsBinary = /^0b[01]+$/i,
        reIsOctal = /^0o[0-7]+$/i,
        freeParseInt = parseInt;

    function toNumber(e) {
        if ("number" == typeof e) return e;
        if (isSymbol_1(e)) return NAN;
        if (isObject_1(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = isObject_1(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(reTrim, "");
        var a = reIsBinary.test(e);
        return a || reIsOctal.test(e) ? freeParseInt(e.slice(2), a ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e
    }
    var toNumber_1 = toNumber,
        INFINITY$2 = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e308;

    function toFinite(e) {
        return e ? (e = toNumber_1(e)) === INFINITY$2 || e === -INFINITY$2 ? (e < 0 ? -1 : 1) * MAX_INTEGER : e == e ? e : 0 : 0 === e ? e : 0
    }
    var toFinite_1 = toFinite,
        freeParseFloat = parseFloat,
        nativeMin = Math.min,
        nativeRandom$1 = Math.random;

    function random(e, t, a) {
        if (a && "boolean" != typeof a && _isIterateeCall(e, t, a) && (t = a = void 0), void 0 === a && ("boolean" == typeof t ? (a = t, t = void 0) : "boolean" == typeof e && (a = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = toFinite_1(e), void 0 === t ? (t = e, e = 0) : t = toFinite_1(t)), e > t) {
            var n = e;
            e = t, t = n
        }
        if (a || e % 1 || t % 1) {
            var r = nativeRandom$1();
            return nativeMin(e + r * (t - e + freeParseFloat("1e-" + ((r + "").length - 1))), t)
        }
        return _baseRandom(e, t)
    }
    for (var random_1 = random, computePayload = function(e, t, a) {
            return a.jsonRpc && a.method ? {
                method: "POST",
                type: "application/json",
                url: e,
                query: JSON.stringify({
                    jsonrpc: "2.0",
                    method: a.method,
                    params: t,
                    id: random_1(9999)
                })
            } : t.length <= 2e3 || a.forceGet ? {
                method: "GET",
                type: "text/plain",
                url: "".concat(e, "?").concat(t),
                query: void 0
            } : {
                method: "POST",
                type: "application/x-www-form-urlencoded",
                url: e,
                query: t
            }
        }, rngBrowser = createCommonjsModule(function(e) {
            var t = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var a = new Uint8Array(16);
                e.exports = function() {
                    return t(a), a
                }
            } else {
                var n = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), n[t] = e >>> ((3 & t) << 3) & 255;
                    return n
                }
            }
        }), byteToHex = [], i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).substr(1);

    function bytesToUuid(e, t) {
        var a = t || 0,
            n = byteToHex;
        return n[e[a++]] + n[e[a++]] + n[e[a++]] + n[e[a++]] + "-" + n[e[a++]] + n[e[a++]] + "-" + n[e[a++]] + n[e[a++]] + "-" + n[e[a++]] + n[e[a++]] + "-" + n[e[a++]] + n[e[a++]] + n[e[a++]] + n[e[a++]] + n[e[a++]] + n[e[a++]]
    }
    var bytesToUuid_1 = bytesToUuid;

    function v4(e, t, a) {
        var n = t && a || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var r = (e = e || {}).random || (e.rng || rngBrowser)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
            for (var o = 0; o < 16; ++o) t[n + o] = r[o];
        return t || bytesToUuid_1(r)
    }
    var v4_1 = v4,
        createCookie = function(e, t, a, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(JSON.stringify(t)), "; expires=").concat(new Date((new Date).getTime() + 1e3 * a).toUTCString(), "; path=/").concat(n ? "; domain=".concat(n) : "")
        },
        eraseCookie = function(e, t) {
            createCookie(e, "", -1, t)
        },
        readCookie = function(e, t) {
            var a = document.cookie.match(new RegExp("(^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")));
            return a = a ? decodeURIComponent(a.pop()) : null, t ? JSON.parse(a) : a
        },
        refreshCookie = function(e, t, a) {
            createCookie(e, readCookie(e, !0), t, a)
        },
        state = {
            adId: null,
            clientId: "",
            firstRequest: !0,
            geoLocation: {},
            lastInteractionTime: Date.now(),
            lastPayload: "",
            needsRegenerate: !1,
            pageViewId: v4_1(),
            trackingId: "",
            customAdNumber: null
        },
        LEVEL_PAGEVIEW = "pageview",
        LEVEL_SESSION = "session";

    function isNil(e) {
        return null == e
    }
    var isNil_1 = isNil,
        log = function(e) {
            if ("#debug_ringostat_script" === window.location.hash) return console.log("Ringostat: ".concat(e))
        },
        computeAdditionalValue = function computeAdditionalValue(content, type) {
            var manual = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (manual) return "simple" === type ? content : eval(content);
            try {
                return "simple" === type ? window[content] : eval(content)
            } catch (e) {
                log(e)
            }
            return null
        },
        getAdditionalData = function(e, t) {
            var a = {};
            if (void 0 !== window.ringostat_additional_data && t === LEVEL_SESSION) {
                if ("string" == typeof window.ringostat_additional_data) try {
                    a = JSON.parse(window.ringostat_additional_data)
                } catch (e) {
                    log(e)
                } else "[object Object]" === Object.prototype.toString.call(window.ringostat_additional_data) && (a = window.ringostat_additional_data);
                a.ringostatOldData = 1
            }
            return Object.keys(e).forEach(function(n) {
                var r = e[n],
                    o = r.level,
                    i = r.type,
                    s = r.value;
                if (t === o) {
                    var c = computeAdditionalValue(s, i);
                    !1 === isNil_1(c) && (a[n] = c)
                }
            }), Object.keys(a).length > 0 ? JSON.stringify(a) : null
        },
        computeCollectParams = function(e, t, a) {
            var n = t.clientId,
                r = t.cookie,
                o = t.hitId,
                i = t.firstRequest,
                s = t.geoLocation,
                c = t.pageViewId,
                l = t.trackingId,
                u = '{"adId": "'.concat(a, '"}');
            return ["hid=" + o, "vid=" + c, "r_ad=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_SESSION)), "r_ce=" + encodeURIComponent(r), "r_cl=" + encodeURIComponent(n), "r_cu=" + encodeURIComponent(window.location.href), "r_d=" + encodeURIComponent(Date.now()), "r_h=" + encodeURIComponent(e.ringostatProjectHash), "r_pd=" + (!1 === a ? encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_PAGEVIEW)) : encodeURIComponent(u)), "r_re=" + encodeURIComponent(document.referrer), "r_ur=" + i, "r_ua=" + encodeURIComponent(l), "r_us=" + encodeURIComponent(window.navigator.userAgent), s.accuracy && "&r_a=" + encodeURIComponent(s.accuracy), s.city && "r_ci=" + encodeURIComponent(s.city), s.country && "r_cy=" + encodeURIComponent(s.country), s.latitude && "r_la=" + encodeURIComponent(s.latitude), s.longitude && "r_lo=" + encodeURIComponent(s.longitude)].filter(Boolean).join("&")
        };

    function noop() {}
    var noop_1 = noop,
        sendPayload = function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = computePayload(e, t, a),
                r = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
            r.open(n.method, n.url, !0), r.setRequestHeader("Content-Type", n.type), r.onerror = a.onError || noop_1, r.onload = function() {
                a.onSuccess && a.onSuccess(this)
            }, a.withCredentials && (r.withCredentials = !0, r.crossDomain = !0), r.send(n.query), r.onreadystatechange = function() {
                4 === r.readyState && e.indexOf("changed_number") + 1 && ("blackList" === JSON.parse(r.response).msg && console.log("Current IP in block-list: insertion is OFF"))
            }
        },
        sendCollect = function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = a.recollect,
                o = void 0 !== r && r,
                i = "pageview" === e;
            i && (state.needsRegenerate && !1 === o && (state.pageViewId = v4_1()), state.needsRegenerate = !0);
            var s = !1 === i ? v4_1() : state.pageViewId;
            i && (state.lastPayload = t);
            var c = computeCollectParams(config, {
                clientId: state.clientId,
                cookie: readCookie(config.cookies.rngst2, !1),
                firstRequest: state.firstRequest,
                geoLocation: state.geoLocation,
                pageViewId: state.pageViewId,
                trackingId: state.trackingId,
                hitId: s
            }, n);
            state.firstRequest = !1, sendPayload(config.urls.collect, "".concat(t, "&").concat(c))
        },
        computePingParams = function(e, t) {
            var a = t.clientId,
                n = t.pageViewId,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = '{"adId": "'.concat(r, '"}');
            return ["hid=" + n, "vid=" + n, "r_ad=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_SESSION)), "r_cl=" + encodeURIComponent(a), "r_pd=" + (!1 === r ? encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_PAGEVIEW)) : encodeURIComponent(o)), "r_h=" + encodeURIComponent(e.ringostatProjectHash)].join("&")
        },
        handleSuccess = function handleSuccess(_ref) {
            var responseText = _ref.responseText,
                data = JSON.parse(responseText);
            if (void 0 === data.pong) {
                var pingEvents = config.userSettings.dataForPingEvents;
                data.forEach(function(event) {
                    var pingEventFn;
                    null != event.data && (void 0 !== pingEvents[event.event] && (eval("pingEventFn = " + pingEvents[event.event].cb), pingEventFn(event.data)))
                })
            }
            data.recollect && sendCollect("pageview", state.lastPayload, {
                recollect: !0
            })
        },
        sendPing = function(e) {
            var t = computePingParams(config, state, e);
            sendPayload(config.urls.ping, t, {
                forceGet: !0,
                onSuccess: handleSuccess,
                withCredentials: !0
            })
        },
        addEvents = function(e, t, a) {
            for (var n = t.length; n--;) e.addEventListener(t[n], a, !1)
        },
        maskNumber = function(e, t) {
            if (-1 === e.indexOf("#")) return t;
            for (var a = t.toString().split(""), n = e.toString().split(""), r = a.length; r--;) - 1 !== n.lastIndexOf("#") && (n[n.lastIndexOf("#")] = a[+r]);
            return n.join("").replace(/#/g, "")
        },
        callMeCode = function(e, t, a, n, r, o) {
            for (var i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], s = arguments.length > 7 ? arguments[7] : void 0, c = e.length; c--;) ! function(o) {
                var l = e[c];
                if (!0 === i) {
                    l.innerHTML = t;
                    var u = l.firstChild;
                    l.parentNode.replaceChild(u, l), u.addEventListener("click", function(e) {
                        n(a, null, function(e, t) {
                            u.innerHTML = e;
                            var a = -1 !== t.indexOf("+380800") ? t.replace("+380", "0") : -1 !== t.indexOf("380800") ? t.replace("380", "0") : "+".concat(t);
                            u.parentNode.replaceChild(u.firstChild, u), "A" === u.nodeName && u.setAttribute("href", "tel:" + a), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + t)
                        })
                    })
                } else {
                    l.innerHTML = t;
                    for (var d = l.firstChild, g = 0; g < s.length; g++) s[g].geoGroup === r.xpaths[a].geoGroup && (l.setAttribute("rngst-geoGroup", r.xpaths[a].geoGroup), l.setAttribute("rngst-id", a));
                    d.addEventListener("click", function(e) {
                        n(a, s, function(e, t) {
                            for (var n = document.querySelectorAll('[rngst-geoGroup="'.concat(r.xpaths[a].geoGroup, '"]')), o = 0; o < n.length; o++) {
                                n[o].innerHTML = maskNumber(r.xpaths[n[o].getAttribute("rngst-id")].mask.replace("<t>", t), t);
                                var i = -1 !== t.indexOf("+380800") ? t.replace("+380", "0") : -1 !== t.indexOf("380800") ? t.replace("380", "0") : "+".concat(t);
                                "A" === n[o].nodeName && n[o].setAttribute("href", "tel:" + i), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + i)
                            }
                        })
                    })
                }
            }()
        },
        buttonCode = function(e, t, a, n) {
            for (var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = e.length; o--;) ! function(i) {
                var s = e[o],
                    c = s;
                if ("true" !== c.getAttribute("rngstbtn"))
                    if (!0 === r) {
                        c.innerHTML = t;
                        var l = c.firstChild;
                        l.setAttribute("rngstbtn", "true"), s.parentNode.replaceChild(l, s), l.addEventListener("click", function(e) {
                            n(a, function(e, t) {
                                l.innerHTML = e, l.parentNode.replaceChild(l.firstChild, l), "A" === l.nodeName && l.setAttribute("href", "tel:" + t), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + t)
                            })
                        })
                    } else(c = s).innerHTML = t, c.setAttribute("rngstbtn", "true"), s.parentNode.replaceChild(c, s), c.firstChild.addEventListener("click", function(e) {
                        n(a, function(e, t) {
                            c.innerHTML = e, "A" === c.nodeName && c.setAttribute("href", "tel:" + t), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + t)
                        })
                    })
            }()
        },
        findElementsByXPath = function(e) {
            for (var t = [], a = document.evaluate(e.xPath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), n = 0, r = a.snapshotLength; n < r; n++) t.push(a.snapshotItem(n));
            return t
        },
        getUrlParameter = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]".concat(e, "=([^&#]*)")).exec(location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        },
        handleIeLoad = function e(t, a) {
            "loaded" !== t.readyState && "completed" !== t.readyState ? setTimeout(function() {
                e(t, a)
            }, 100) : a()
        },
        insertScriptElement = function(e, t) {
            var a = document.getElementsByTagName("script")[0],
                n = document.createElement("script");
            n.async = !0, n.src = e, n.type = "text/javascript", n.onload = t, handleIeLoad(n, t), a.parentNode.insertBefore(n, a)
        },
        parseLocation = function(e, t) {
            navigator.geolocation && e.browserGeolocation && navigator.geolocation.getCurrentPosition(function(e) {
                state.geoLocation.latitude = e.coords.latitude, state.geoLocation.longitude = e.coords.longitude, state.geoLocation.accuracy = e.coords.accuracy;
                var a = "language=en&latlng=".concat(e.coords.latitude, ",").concat(e.coords.longitude);
                sendPayload("//maps.googleapis.com/maps/api/geocode/json", a, {
                    forceGet: !0,
                    onSuccess: function(e) {
                        var a = e.responseText,
                            n = JSON.parse(a);
                        if ("OK" === n.status)
                            for (var r = n.results[0].address_components, o = 0; o < r.length; ++o) "country" === r[o].types[0] && (state.geoLocation.country = r[o].long_name), "locality" === r[o].types[0] && (state.geoLocation.city = r[o].long_name);
                        t()
                    }
                })
            }, noop_1)
        },
        textNodesUnder = function(e) {
            for (var t, a = [], n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode();) a.push(t);
            return a
        },
        onlyInteger = function(e) {
            return e ? parseInt(e.replace(/[^0-9]+/g, ""), 10) : NaN
        },
        customTask = function(e, t) {
            log("Ringostat is connected through CustomTask"), state.clientId = e.get("clientId"), state.trackingId = e.get("trackingId"), t()
        },
        plugin = function(e) {
            return function(t) {
                var a = t.get("sendHitTask");
                log("Ringostat is connected as a plugin"), state.clientId = t.get("clientId"), state.trackingId = t.get("trackingId"), e(), t.set("sendHitTask", function(e) {
                    a(e), sendCollect(e.get("hitType"), e.get("hitPayload"))
                })
            }
        },
        initGa = function(e) {
            var t = findGaTracker(window, config.ga);
            t ? customTask(t, e) : window[config.ga]("provide", "ringostat", plugin(e))
        },
        mockGa = function() {
            window[config.ga] = function() {
                window[config.ga].q = window[config.ga].q || [], window[config.ga].q.push(arguments)
            }
        };
    Array.prototype.forEach || (Array.prototype.forEach = function(e) {
        var t, a;
        if (null == this) throw new TypeError("this is null or not defined");
        var n = Object(this),
            r = n.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), a = 0; a < r;) {
            var o;
            a in n && (o = n[a], e.call(t, o, a, n)), a++
        }
    }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var a = Object(this),
                n = a.length >>> 0;
            if (0 === n) return !1;
            var r, o, i = 0 | t,
                s = Math.max(i >= 0 ? i : n - Math.abs(i), 0);
            for (; s < n;) {
                if ((r = a[s]) === (o = e) || "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o)) return !0;
                s++
            }
            return !1
        }
    }), window.MutationObserver = window.MutationObserver || function(e) {
        function t(e) {
            this.i = [], this.m = e
        }

        function a(t) {
            var a, n = {
                type: null,
                target: null,
                addedNodes: [],
                removedNodes: [],
                previousSibling: null,
                nextSibling: null,
                attributeName: null,
                attributeNamespace: null,
                oldValue: null
            };
            for (a in t) n[a] !== e && t[a] !== e && (n[a] = t[a]);
            return n
        }

        function n(t, n) {
            var s = o(t, n);
            return function(l) {
                var u, d = l.length;
                n.a && 3 === t.nodeType && t.nodeValue !== s.a && l.push(new a({
                    type: "characterData",
                    target: t,
                    oldValue: s.a
                })), n.b && s.b && r(l, t, s.b, n.f), (n.c || n.g) && (u = function(t, n, o, s) {
                    function l(e, n, o, i, c) {
                        var l, d, g, f = e.length - 1;
                        for (c = -~((f - c) / 2); g = e.pop();) l = o[g.j], d = i[g.l], s.c && c && Math.abs(g.j - g.l) >= f && (t.push(a({
                            type: "childList",
                            target: n,
                            addedNodes: [l],
                            removedNodes: [l],
                            nextSibling: l.nextSibling,
                            previousSibling: l.previousSibling
                        })), c--), s.b && d.b && r(t, l, d.b, s.f), s.a && 3 === l.nodeType && l.nodeValue !== d.a && t.push(a({
                            type: "characterData",
                            target: l,
                            oldValue: d.a
                        })), s.g && u(l, d)
                    }

                    function u(n, o) {
                        for (var g, f, p, m, b, h = n.childNodes, _ = o.c, y = h.length, v = _ ? _.length : 0, k = 0, T = 0, C = 0; T < y || C < v;) m = h[T], b = (p = _[C]) && p.node, m === b ? (s.b && p.b && r(t, m, p.b, s.f), s.a && p.a !== e && m.nodeValue !== p.a && t.push(a({
                            type: "characterData",
                            target: m,
                            oldValue: p.a
                        })), f && l(f, n, h, _, k), s.g && (m.childNodes.length || p.c && p.c.length) && u(m, p), T++, C++) : (d = !0, g || (g = {}, f = []), m && (g[p = i(m)] || (g[p] = !0, -1 === (p = c(_, m, C, "node")) ? s.c && (t.push(a({
                            type: "childList",
                            target: n,
                            addedNodes: [m],
                            nextSibling: m.nextSibling,
                            previousSibling: m.previousSibling
                        })), k++) : f.push({
                            j: T,
                            l: p
                        })), T++), b && b !== h[T] && (g[p = i(b)] || (g[p] = !0, -1 === (p = c(h, b, T)) ? s.c && (t.push(a({
                            type: "childList",
                            target: o.node,
                            removedNodes: [b],
                            nextSibling: _[C + 1],
                            previousSibling: _[C - 1]
                        })), k--) : f.push({
                            j: p,
                            l: C
                        })), C++));
                        f && l(f, n, h, _, k)
                    }
                    var d;
                    return u(n, o), d
                }(l, t, s, n)), (u || l.length !== d) && (s = o(t, n))
            }
        }

        function r(t, n, r, o) {
            for (var i, s, c = {}, l = n.attributes, d = l.length; d--;) s = (i = l[d]).name, o && o[s] === e || (u(n, i) !== r[s] && t.push(a({
                type: "attributes",
                target: n,
                attributeName: s,
                oldValue: r[s],
                attributeNamespace: i.namespaceURI
            })), c[s] = !0);
            for (s in r) c[s] || t.push(a({
                target: n,
                type: "attributes",
                attributeName: s,
                oldValue: r[s]
            }))
        }

        function o(e, t) {
            var a = !0;
            return function e(n) {
                var r = {
                    node: n
                };
                return !t.a || 3 !== n.nodeType && 8 !== n.nodeType ? (t.b && a && 1 === n.nodeType && (r.b = s(n.attributes, function(e, a) {
                    return t.f && !t.f[a.name] || (e[a.name] = u(n, a)), e
                })), a && (t.c || t.a || t.b && t.g) && (r.c = function(e, t) {
                    for (var a = [], n = 0; n < e.length; n++) a[n] = t(e[n], n, e);
                    return a
                }(n.childNodes, e)), a = t.g) : r.a = n.nodeValue, r
            }(e)
        }

        function i(e) {
            try {
                return e.id || (e.mo_id = e.mo_id || d++)
            } catch (t) {
                try {
                    return e.nodeValue
                } catch (e) {
                    return d++
                }
            }
        }

        function s(e, t) {
            for (var a = {}, n = 0; n < e.length; n++) a = t(a, e[n], n, e);
            return a
        }

        function c(e, t, a, n) {
            for (; a < e.length; a++)
                if ((n ? e[a][n] : e[a]) === t) return a;
            return -1
        }
        t._period = 30, t.prototype = {
            observe: function(e, a) {
                for (var r = {
                        b: !!(a.attributes || a.attributeFilter || a.attributeOldValue),
                        c: !!a.childList,
                        g: !!a.subtree,
                        a: !(!a.characterData && !a.characterDataOldValue)
                    }, o = this.i, i = 0; i < o.length; i++) o[i].s === e && o.splice(i, 1);
                a.attributeFilter && (r.f = s(a.attributeFilter, function(e, t) {
                    return e[t] = !0, e
                })), o.push({
                    s: e,
                    o: n(e, r)
                }), this.h || function(e) {
                    ! function a() {
                        var n = e.takeRecords();
                        n.length && e.m(n, e), e.h = setTimeout(a, t._period)
                    }()
                }(this)
            },
            takeRecords: function() {
                for (var e = [], t = this.i, a = 0; a < t.length; a++) t[a].o(e);
                return e
            },
            disconnect: function() {
                this.i = [], clearTimeout(this.h), this.h = null
            }
        };
        var l = document.createElement("i");
        l.style.top = 0;
        var u = (l = "null" != l.attributes.style.value) ? function(e, t) {
                return t.value
            } : function(e, t) {
                return "style" !== t.name ? t.value : e.style.cssText
            },
            d = 1;
        return t
    }(void 0);
    var getNumbers = function(e) {
            var t = computeChangeNumberParams({
                clientId: state.clientId,
                cookie: readCookie(config.cookies.rngst2, !1),
                firstRequest: state.firstRequest,
                forceNumber: !1,
                geoLocation: state.geoLocation,
                pageViewId: state.pageViewId,
                projectHash: config.ringostatProjectHash
            });
            state.firstRequest = !1, sendPayload(config.urls.changedNumber, t, {
                onError: function(e) {
                    log(e), config.changedNumberCallback({
                        cnr: !1
                    })
                },
                onSuccess: e
            })
        },
        setSimpleNumbers = function(e, t) {
            var a, n, r;
            "observeDOM" !== t && e.notifyAllObservers("numbers.beforeSetWithoutObserve", state.numbersData);
            var o = function(e) {
                if (!state.numbersData.numbers) return "break";
                var t, o, i, s = "",
                    c = 0,
                    l = 1,
                    u = 1,
                    d = 1,
                    g = void 0,
                    f = "",
                    p = "",
                    m = "",
                    b = "",
                    h = "",
                    _ = void 0;
                if (!state.numbersData.hasOwnProperty(e)) return "continue";
                if (r = e, n = config.phoneNumber, log("Number: ".concat(r, " for phoneNumber[").concat(n, "]")), !n || !r) return "continue";
                for (; 10 !== c;) s = (g = n[n.length - l]) + s, isNaN(g) || " " === g || c++, n.length === l && (c = 10), l++;
                i = s.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)"), t = new RegExp(i, "gi"), o = s.replace(/\d/g, "Y"), _ = s.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)").split(")");
                try {
                    f = new RegExp(_[0] + ")", "gi")
                } catch (e) {
                    f = new RegExp(_[0], "gi")
                }
                _.slice(1).forEach(function(e) {
                    p = "".concat(p + e, ")")
                }), p = new RegExp(p.substring(0, p.length - 1), "gi"), l = 0;
                for (var y = r.substr(r.length - 10), v = 0, k = o.length; v < k; v++) "Y" === o[v] ? (m += y.toString()[l], u > 1 && (h += y.toString()[l]), l++) : "Y" === o[v - 1] && (m = "".concat(m, "$").concat(u), 1 === u && (b = m), u > 1 && (h = "".concat(h, "$").concat(d), d++), u++);
                document.querySelectorAll("*:not(body)").forEach(function(e) {
                    void 0 !== e.innerText && e.innerText.match(f) && (e.normalize(), textNodesUnder(e).forEach(function(e) {
                        void 0 !== e.nodeValue && "none" !== e && e.nodeValue.match(t) ? (e.nodeValue = e.nodeValue.replace(t, m), e.parentNode.hasAttribute("href") && (e.parentNode.href = "tel:+".concat(r))) : void 0 !== e.nodeValue && e.nodeValue.match(f) && e.parentNode.nextSibling && e.parentNode.nextSibling.nodeValue && e.parentNode.nextSibling.nodeValue.match(p) && (e.nodeValue = e.nodeValue.replace(f, b), e.parentNode.nextSibling.nodeValue = e.parentNode.nextSibling.nodeValue.replace(p, h), e.parentNode.parentNode.hasAttribute("href") && (e.parentNode.parentNode.href = "tel:+".concat(r)))
                    }))
                }), a = !0
            };
            e: for (var i in state.numbersData) {
                switch (o(i)) {
                    case "break":
                        break e;
                    case "continue":
                        continue
                }
            }
            config.callbackFunctionBehavior && !a || "function" == typeof config.userSettings.callbackFunction && config.userSettings.callbackFunction()
        },
        forceNumberCheck = function(e) {
            state.numbersData.checkOnClient && state.numbersData.checkOnClient.includes(e) && (state.numbersData.checkOnClient.splice(state.numbersData.checkOnClient.indexOf(e), 1), 0 === state.numbersData.checkOnClient.length && delete state.numbersData.checkOnClient), state.numbersData.callMe && state.numbersData.callMe.includes(e) && (state.numbersData.callMe.splice(state.numbersData.callMe.indexOf(e), 1), 0 === state.numbersData.callMe.length && delete state.numbersData.callMe)
        },
        forceNumberFunction = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                a = arguments.length > 2 ? arguments[2] : void 0,
                n = computeChangeNumberParams({
                    clientId: state.clientId,
                    cookie: readCookie(config.cookies.rngst2, !1),
                    firstRequest: state.firstRequest,
                    forceNumber: !0,
                    geoLocation: state.geoLocation,
                    pageViewId: state.pageViewId,
                    projectHash: config.ringostatProjectHash
                }),
                r = "".concat(n, "&r_x=").concat(e);
            state.firstRequest = !1, sendPayload(config.urls.changedNumber, r, {
                onError: function(e) {
                    log(e)
                },
                onSuccess: function(n) {
                    var r = n.responseText,
                        o = JSON.parse(r),
                        i = Object.keys(o)[0];
                    for (var s in void 0 === state.numbersData[i] && (state.numbersData[i] = []), state.numbersData)
                        if (Array.isArray(state.numbersData[s]) && state.numbersData[s].includes(e)) {
                            if (!(i in state.numbersData))
                                if (null === t) state.numbersData[i] = [e];
                                else
                                    for (var c in t) state.numbersData[i].push(parseInt(t[c].xpathId, 10)), forceNumberCheck(parseInt(t[c].xpathId, 10));
                            if (state.numbersData[i].includes(e))
                                if (null === t) forceNumberCheck(e);
                                else
                                    for (var l in t) forceNumberCheck(parseInt(t[l].xpathId, 10));
                            else if (null === t) state.numbersData[i] = [e], forceNumberCheck(e);
                            else
                                for (var u in t) state.numbersData[i].push(parseInt(t[u].xpathId, 10)), forceNumberCheck(parseInt(t[u].xpathId, 10))
                        }
                    createCookie(config.cookies.rngst1, state.numbersData, config.sessionLength, config.cookieDomain), "function" == typeof a && a(maskNumber(config.xpaths[e].mask.replace("<t>", i), i), i)
                }
            })
        },
        isNumber = function(e) {
            return e && /^\d+$/.test(e)
        },
        isCallMe = function(e) {
            return e && "callMe" === e
        },
        isCheckOnClient = function(e) {
            return e && "checkOnClient" === e
        },
        xPathsInOneGeoGroup = function(e) {
            if (void 0 === e) return [];
            for (var t = [], a = {}, n = 0; n < e.length; n++) e[n].xpathId = n, t.push(e[n].geoGroup);
            for (var r = t.filter(function(e, a) {
                    return t.indexOf(e) === a
                }), o = 0; o < r.length; o++) a[r[o]] = e.filter(function(e) {
                return e.geoGroup === r[o]
            });
            return a
        },
        setNumbers = function(e, t, a) {
            var n, r, o, i;
            for (var s in "observeDOM" !== a && e.notifyAllObservers("numbers.beforeSetWithoutObserve", state.numbersData), state.numbersData) {
                if (!state.numbersData.hasOwnProperty(s) || !state.numbersData.numbers) break;
                i = s;
                var c = function(a) {
                    if (!state.numbersData[s].hasOwnProperty(a)) return "continue";
                    if (r = state.numbersData[s][a], o = config.xpaths[r], log("Number: " + i + " for Xpath[" + r + "]: " + JSON.stringify(o, null, 2)), !o || !i) return "continue";
                    var c = findElementsByXPath(o);
                    if (isNumber(i))
                        for (var l in c)
                            if (c.hasOwnProperty(l))
                                if (!0 === config.userSettings.replaceXpaths) {
                                    c[l].innerHTML = maskNumber(o.mask.replace("<t>", i), i);
                                    var u = c[l].firstChild;
                                    c[l].parentNode.replaceChild(u, c[l])
                                } else c[l].innerHTML = a, c[l].innerHTML = maskNumber(o.mask.replace("<t>", i), i), c[l].hasAttribute("href") && (c[l].href = "tel:+" + i);
                    if (isCallMe(i) && "" !== o.callMeHTML) {
                        var d = c,
                            g = d.length;
                        if (c.length > 0)
                            for (callMeCode(c, o.callMeHTML, r, forceNumberFunction, config, findElementsByXPath, config.userSettings.replaceXpaths, t[o.geoGroup]); g--;) "A" === d[g].nodeName && d[g].removeAttribute("href")
                    }
                    isCheckOnClient(i) && "1" === o.checkOnClient && c.length > 0 && function() {
                        var t = c,
                            a = t.length;
                        forceNumberFunction(r, null, function(n, r) {
                            for (e.notifyAllObservers("numbers.beforeSetWithoutObserve", state.numbersData); a--;) t[a].innerHTML = n, t[a].hasAttribute("href") && (t[a].href = "tel:+" + r)
                        })
                    }(), n = !0
                };
                for (var l in state.numbersData[s]) c(l)
            }
            config.callbackFunctionBehavior && !n || "function" == typeof config.userSettings.callbackFunction && config.userSettings.callbackFunction()
        },
        unique = function(e, t) {
            for (var a = {}, n = e.length - 1; n >= 0; --n) a[e[n]] = e[n];
            for (var r = t.length - 1; r >= 0; --r) a[t[r]] = t[r];
            var o = [];
            for (var i in a) a.hasOwnProperty(i) && o.push(a[i]);
            return o
        },
        diff = function(e, t) {
            for (var a = 0; a < t.length; a++)
                for (var n = 0; n < e.length; n++) t[a] === e[n] && t.splice(a, 1);
            return t
        },
        xPathsInOneGroup = xPathsInOneGeoGroup(config.xpaths),
        observeDOM = function() {
            var e;
            return {
                getInstance: function(t) {
                    return e || (e = function(e) {
                        var t = null,
                            a = null,
                            n = {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            },
                            r = new MutationObserver(function() {
                                var r = this;
                                r.disconnect(), clearTimeout(t), clearTimeout(a), t = setTimeout(function() {
                                    config.isAdvanced ? setNumbers(e, xPathsInOneGroup, "observeDOM") : setSimpleNumbers(e, "observeDOM"), log("MutationObserver complete after 100 ms")
                                }, 100), a = setTimeout(function() {
                                    config.isAdvanced ? setNumbers(e, xPathsInOneGroup, "observeDOM") : setSimpleNumbers(e, "observeDOM"), r.observe(document.body, n), log("MutationObserver complete after 2500 ms")
                                }, 2500)
                            });
                        return r.observe(document.body, n), {
                            disconnect: function() {
                                r.disconnect()
                            }
                        }
                    }(t)), e
                }
            }
        }(),
        changeNumbers = function(e) {
            if (0 !== config.substitutionStatus) {
                if (!1 !== config.substitutionEnabled) return readCookie(config.cookies.rngst1, !1) ? (state.numbersData = readCookie(config.cookies.rngst1, !0), refreshCookie(config.cookies.rngst1, config.sessionLength, config.cookieDomain), config.isAdvanced && state.numbersData && state.numbersData.numbers ? setNumbers(e, xPathsInOneGroup) : setSimpleNumbers(e), void(config.observeDOM && observeDOM.getInstance(e))) : void getNumbers(function(t) {
                    var a = t.responseText,
                        n = t.status,
                        r = t.statusText,
                        o = JSON.parse(a);
                    if (o && "inactiveProject" === o.msg && console.log("Ringostat: Inactive project"), state.numbersData = o && o.numbers ? o.numbers : null, void 0 !== state.numbersData.callMe && state.numbersData.callMe.length > 0) {
                        var i = null,
                            s = [];
                        for (var c in o.numbers)
                            if (isNumber(c)) {
                                for (var l = 0; l < o.numbers[c].length; l++)
                                    if ("1" === config.xpaths[o.numbers[c][l]].callMeAll)
                                        for (var u in i = xPathsInOneGeoGroup(config.xpaths)) s.push(parseInt(i[u].xpathId, 10));
                                state.numbersData[c] = unique(state.numbersData[c], s), state.numbersData.callMe = diff(state.numbersData[c], state.numbersData.callMe)
                            }
                    }
                    var d = state.numbersData,
                        g = {
                            utmz: o && o.utmz ? o.utmz : null
                        };
                    createCookie(config.cookies.rngst1, d, config.sessionLength, config.cookieDomain), readCookie(config.cookies.rngst2, !1) || createCookie(config.cookies.rngst2, g, 31536e3, config.cookieDomain), log("getChangedNumber Success : ".concat(n, " - ").concat(r)), config.isAdvanced && state.numbersData && state.numbersData.numbers ? setNumbers(e, xPathsInOneGroup) : setSimpleNumbers(e), config.observeDOM && observeDOM.getInstance(e)
                });
                console.log("Ringostat: Substitution is disabled by initChangeNumber() on changeNumbers()")
            } else console.log("Ringostat: Insertion status is OFF")
        },
        Observer = function() {};
    Observer.prototype.notify = function() {
        console.error("Observer.notify() must be implemented")
    };
    var AtLeastOneNumberObserver = function() {};
    AtLeastOneNumberObserver.prototype = Object.create(Observer.prototype), AtLeastOneNumberObserver.prototype.constructor = AtLeastOneNumberObserver, AtLeastOneNumberObserver.prototype.notify = function(e) {
        var t = !1;
        if (e)
            for (var a in e)
                if (e.hasOwnProperty(a) && isNumber(a)) {
                    t = !0;
                    break
                }
        config.changedNumberCallback({
            cnr: t
        })
    };
    var Observable = function() {
            var e = [];
            return {
                subscribeObserver: function(t, a) {
                    e[t] || (e[t] = []), e[t].push(a)
                },
                unsubscribeObserver: function(t, a) {
                    if (e[t]) {
                        var n = e[t].indexOf(a);
                        n > -1 && e[t].splice(n, 1)
                    }
                },
                notifyAllObservers: function(t, a) {
                    if (e[t])
                        for (var n = 0; n < e[t].length; n += 1) e[t][n].notify(a)
                }
            }
        },
        createObservable = function() {
            var e = new Observable;
            return e.subscribeObserver("numbers.beforeSetWithoutObserve", new AtLeastOneNumberObserver), e
        },
        basic = function() {
            var e = createObservable(),
                t = function() {
                    Date.now() - state.lastInteractionTime < config.pingInterval && (sendPing(), config.substitutionEnabled && refreshCookie(config.cookies.rngst1, config.sessionLength, config.cookieDomain))
                };
            initGa(function() {
                if (state.lastInteractionTime = Date.now(), addEvents(document, config.interactionEvents, function() {
                        var t = Date.now();
                        t - state.lastInteractionTime > config.sessionLengthMS && changeNumbers(e), state.lastInteractionTime = t
                    }), setInterval(t, config.pingInterval), config.crossDomainTracking && getUrlParameter("_ga").length > 0 && (log('Found GET parameter "_ga". Remove '.concat(config.cookies.rngst1, " & ").concat(config.cookies.rngst2, " cookies")), eraseCookie(config.cookies.rngst1, config.cookieDomain), eraseCookie(config.cookies.rngst2, config.cookieDomain)), !1 !== config.substitutionEnabled) {
                    var a = config.disableChangingNumber;
                    !0 !== navigator.cookieEnabled || a && readCookie(a, !1) || (readCookie(config.cookies.rngst1, !1) || parseLocation(config, function() {
                        eraseCookie(config.cookies.rngst1, config.cookieDomain), changeNumbers(e)
                    }), changeNumbers(e))
                } else log("Substitution is disabled by initChangeNumber() on initGaPlugin()")
            }), window.ringostatAnalytics = {
                sendPayload: sendCollect
            }, window.ringostatRestartSubstitution = function() {
                config.isAdvanced ? setNumbers(e, "client") : setSimpleNumbers(e, "client")
            }
        },
        numberTag = "[object Number]";

    function isNumber$1(e) {
        return "number" == typeof e || isObjectLike_1(e) && _baseGetTag(e) == numberTag
    }
    var isNumber_1 = isNumber$1;

    function isNaN$1(e) {
        return isNumber_1(e) && e != +e
    }
    var _isNaN = isNaN$1;

    function arrayEach(e, t) {
        for (var a = -1, n = null == e ? 0 : e.length; ++a < n && !1 !== t(e[a], a, e););
        return e
    }
    var _arrayEach = arrayEach;

    function createBaseFor(e) {
        return function(t, a, n) {
            for (var r = -1, o = Object(t), i = n(t), s = i.length; s--;) {
                var c = i[e ? s : ++r];
                if (!1 === a(o[c], c, o)) break
            }
            return t
        }
    }
    var _createBaseFor = createBaseFor,
        baseFor = _createBaseFor(),
        _baseFor = baseFor;

    function baseTimes(e, t) {
        for (var a = -1, n = Array(e); ++a < e;) n[a] = t(a);
        return n
    }
    var _baseTimes = baseTimes;

    function stubFalse() {
        return !1
    }
    var stubFalse_1 = stubFalse,
        isBuffer_1 = createCommonjsModule(function(e, t) {
            var a = t && !t.nodeType && t,
                n = a && e && !e.nodeType && e,
                r = n && n.exports === a ? _root.Buffer : void 0,
                o = (r ? r.isBuffer : void 0) || stubFalse_1;
            e.exports = o
        }),
        argsTag$1 = "[object Arguments]",
        arrayTag = "[object Array]",
        boolTag = "[object Boolean]",
        dateTag = "[object Date]",
        errorTag = "[object Error]",
        funcTag$1 = "[object Function]",
        mapTag = "[object Map]",
        numberTag$1 = "[object Number]",
        objectTag = "[object Object]",
        regexpTag = "[object RegExp]",
        setTag = "[object Set]",
        stringTag = "[object String]",
        weakMapTag = "[object WeakMap]",
        arrayBufferTag = "[object ArrayBuffer]",
        dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]",
        float64Tag = "[object Float64Array]",
        int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]",
        int32Tag = "[object Int32Array]",
        uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]",
        uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]",
        typedArrayTags = {};

    function baseIsTypedArray(e) {
        return isObjectLike_1(e) && isLength_1(e.length) && !!typedArrayTags[_baseGetTag(e)]
    }
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
    var _baseIsTypedArray = baseIsTypedArray;

    function baseUnary(e) {
        return function(t) {
            return e(t)
        }
    }
    var _baseUnary = baseUnary,
        _nodeUtil = createCommonjsModule(function(e, t) {
            var a = t && !t.nodeType && t,
                n = a && e && !e.nodeType && e,
                r = n && n.exports === a && _freeGlobal.process,
                o = function() {
                    try {
                        return r && r.binding && r.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        }),
        nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray,
        isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray,
        isTypedArray_1 = isTypedArray,
        objectProto$7 = Object.prototype,
        hasOwnProperty$6 = objectProto$7.hasOwnProperty;

    function arrayLikeKeys(e, t) {
        var a = isArray_1(e),
            n = !a && isArguments_1(e),
            r = !a && !n && isBuffer_1(e),
            o = !a && !n && !r && isTypedArray_1(e),
            i = a || n || r || o,
            s = i ? _baseTimes(e.length, String) : [],
            c = s.length;
        for (var l in e) !t && !hasOwnProperty$6.call(e, l) || i && ("length" == l || r && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || _isIndex(l, c)) || s.push(l);
        return s
    }
    var _arrayLikeKeys = arrayLikeKeys,
        objectProto$8 = Object.prototype;

    function isPrototype(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || objectProto$8)
    }
    var _isPrototype = isPrototype;

    function overArg(e, t) {
        return function(a) {
            return e(t(a))
        }
    }
    var _overArg = overArg,
        nativeKeys = _overArg(Object.keys, Object),
        _nativeKeys = nativeKeys,
        objectProto$9 = Object.prototype,
        hasOwnProperty$7 = objectProto$9.hasOwnProperty;

    function baseKeys(e) {
        if (!_isPrototype(e)) return _nativeKeys(e);
        var t = [];
        for (var a in Object(e)) hasOwnProperty$7.call(e, a) && "constructor" != a && t.push(a);
        return t
    }
    var _baseKeys = baseKeys;

    function keys(e) {
        return isArrayLike_1(e) ? _arrayLikeKeys(e) : _baseKeys(e)
    }
    var keys_1 = keys;

    function baseForOwn(e, t) {
        return e && _baseFor(e, t, keys_1)
    }
    var _baseForOwn = baseForOwn;

    function createBaseEach(e, t) {
        return function(a, n) {
            if (null == a) return a;
            if (!isArrayLike_1(a)) return e(a, n);
            for (var r = a.length, o = t ? r : -1, i = Object(a);
                (t ? o-- : ++o < r) && !1 !== n(i[o], o, i););
            return a
        }
    }
    var _createBaseEach = createBaseEach,
        baseEach = _createBaseEach(_baseForOwn),
        _baseEach = baseEach;

    function identity(e) {
        return e
    }
    var identity_1 = identity;

    function castFunction(e) {
        return "function" == typeof e ? e : identity_1
    }
    var _castFunction = castFunction;

    function forEach(e, t) {
        return (isArray_1(e) ? _arrayEach : _baseEach)(e, _castFunction(t))
    }
    var forEach_1 = forEach;

    function baseClamp(e, t, a) {
        return e == e && (void 0 !== a && (e = e <= a ? e : a), void 0 !== t && (e = e >= t ? e : t)), e
    }
    var _baseClamp = baseClamp;

    function toInteger(e) {
        var t = toFinite_1(e),
            a = t % 1;
        return t == t ? a ? t - a : t : 0
    }
    var toInteger_1 = toInteger;

    function startsWith(e, t, a) {
        return e = toString_1(e), a = null == a ? 0 : _baseClamp(toInteger_1(a), 0, e.length), t = _baseToString(t), e.slice(a, a + t.length) == t
    }
    var startsWith_1 = startsWith;

    function head(e) {
        return e && e.length ? e[0] : void 0
    }
    var head_1 = head;

    function isNull(e) {
        return null === e
    }
    var isNull_1 = isNull,
        getNumber = function(e, t) {
            var a = computeChangeNumberParams({
                clientId: state.clientId,
                cookie: readCookie(config.cookies.rngst2, !1),
                firstRequest: state.firstRequest,
                forceNumber: null,
                geoLocation: state.geoLocation,
                pageViewId: state.pageViewId,
                projectHash: config.ringostatProjectHash,
                adId: state.adId,
                xPathId: e
            });
            state.firstRequest = !1, state.customAdNumber && (a += "&r_can=".concat(state.customAdNumber)), sendPayload(config.urls.changedNumber, a, {
                onSuccess: t
            })
        },
        clickHandler = function(e, t) {
            getNumber(e, function(a) {
                var n = a.status,
                    r = a.readyState,
                    o = a.responseText;
                if (200 === n || 4 === r) try {
                    var i = JSON.parse(o);
                    i && "inactiveProject" === i.msg && console.log("Ringostat: Inactive project"), state.numbersData = i && i.numbers ? i.numbers : null;
                    var s = {
                        utmz: i && i.utmz ? i.utmz : null
                    };
                    if (readCookie(config.cookies.rngst2, !1) || createCookie(config.cookies.rngst2, s, 31536e3, config.cookieDomain), isNull_1(state.numbersData)) return log("Numbers not found");
                    var c = head_1(Object.keys(state.numbersData));
                    c = startsWith_1(c, "+") ? c : "+" + c, t(maskNumber(config.xpaths[e].mask.replace("<t>", c), c), c)
                } catch (e) {}
            })
        },
        observeDOM$1 = function() {
            var e;
            return {
                getInstance: function(t) {
                    return e || (e = function(e) {
                        var t = new MutationObserver(function(t, a) {
                            forEach_1(t, function(t) {
                                "childList" === t.type && (null !== t.target.getAttribute("rngstbtn") && !1 !== t.target.getAttribute("rngstbtn") || replaceWithButton(e, "observeDOM"))
                            })
                        });
                        return t.observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        }), {
                            disconnect: function() {
                                t.disconnect()
                            }
                        }
                    }(t)), e
                }
            }
        }(),
        processXPaths = function(e) {
            replaceWithButton(e), config.observeDOM && observeDOM$1.getInstance(e)
        },
        replaceWithButton = function(e, t) {
            "observeDOM" !== t && e.notifyAllObservers("xpath.beforeSetWithoutObserve", "beforeSetWithoutObserve"), config.xpaths.forEach(function(e, t) {
                return buttonCode(findElementsByXPath(e), e.callMeHTML, t, clickHandler, config.userSettings.replaceXpaths)
            })
        },
        AtLeastOneXpathObserver = function() {};
    AtLeastOneXpathObserver.prototype = Object.create(Observer.prototype), AtLeastOneXpathObserver.prototype.constructor = AtLeastOneXpathObserver, AtLeastOneXpathObserver.prototype.notify = function(e) {
        console.log(e)
    };
    var createObservableClassified = function() {
            var e = new Observable;
            return e.subscribeObserver("xpath.beforeSetWithoutObserve", new AtLeastOneXpathObserver), e
        },
        classified = function() {
            var e = createObservableClassified(),
                t = function(e) {
                    Date.now() - state.lastInteractionTime < config.pingInterval && sendPing(e)
                },
                a = null;
            initGa(function() {
                var n = config.trackedEntities,
                    r = n.adId,
                    o = n.adNumber;
                if (isUndefined_1(r)) console.log('Project is not configured correctly, missing "adId"');
                else {
                    if (!1 !== config.userSettings.manualMode && void 0 !== config.userSettings.manualMode || (state.adId = computeAdditionalValue(r.value, r.type)), state.lastInteractionTime = Date.now(), o) {
                        var i = computeAdditionalValue(o.value, o.type);
                        if (i) {
                            var s = onlyInteger(i.toString().split(",", 1)[0]);
                            _isNaN(s) || (state.customAdNumber = s)
                        }
                    }
                    if (addEvents(document, config.interactionEvents, function() {
                            state.lastInteractionTime = Date.now()
                        }), a = setInterval(t, config.pingInterval), config.crossDomainTracking && getUrlParameter("_ga").length > 0 && (console.log('Ringostat: Found GET parameter "_ga". Remove '.concat(config.cookies.rngst2, " cookies")), eraseCookie(config.cookies.rngst2, config.cookieDomain)), 0 !== config.substitutionStatus) {
                        if (!1 !== config.substitutionEnabled) return isNil_1(state.adId) ? config.userSettings.manualMode ? log('Not found "adId"') : console.log('Not found "adId"') : void(!1 !== config.userSettings.manualMode && void 0 !== config.userSettings.manualMode || processXPaths(e));
                        console.log("Ringostat: Substitution is disabled by initChangeNumber() on initGa()")
                    } else console.log("Ringostat: Insertion status is OFF")
                }
            }), window.ringostatAnalytics = {
                sendPayload: sendCollect
            }, window.getManualClassifiedNumber = function(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                null !== a && (clearInterval(a), a = setInterval(function() {
                    return t(e)
                }, config.pingInterval));
                config.trackedEntities.adId;
                state.adId = computeAdditionalValue(e, "simple", !0), window.ringostatAnalytics.sendPayload("pageview", "", {}, e), clickHandler(r, function(e, t) {
                    log("Returned numbers from getManualClassifiedNumber: number: ".concat(e, ", numberWithoutMask: ").concat(t)), n({
                        number: e,
                        numberWithoutMask: t
                    })
                })
            }
        },
        substitution = Object.freeze({
            basic: basic,
            classified: classified
        }),
        bootstrap = function(e) {
            if (window[config.ga] || mockGa(), !1 === isUndefined_1(document.evaluate)) return substitution[e]();
            insertScriptElement("".concat(config.urls.backend, "static/js/vendors/wgxpath.install.js"), function() {
                wgxpath.install(), substitution[e]()
            })
        };

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function stackClear() {
        this.__data__ = new _ListCache, this.size = 0
    }
    var _stackClear = stackClear;

    function stackDelete(e) {
        var t = this.__data__,
            a = t.delete(e);
        return this.size = t.size, a
    }
    var _stackDelete = stackDelete;

    function stackGet(e) {
        return this.__data__.get(e)
    }
    var _stackGet = stackGet;

    function stackHas(e) {
        return this.__data__.has(e)
    }
    var _stackHas = stackHas,
        LARGE_ARRAY_SIZE = 200;

    function stackSet(e, t) {
        var a = this.__data__;
        if (a instanceof _ListCache) {
            var n = a.__data__;
            if (!_Map || n.length < LARGE_ARRAY_SIZE - 1) return n.push([e, t]), this.size = ++a.size, this;
            a = this.__data__ = new _MapCache(n)
        }
        return a.set(e, t), this.size = a.size, this
    }
    var _stackSet = stackSet;

    function Stack(e) {
        var t = this.__data__ = new _ListCache(e);
        this.size = t.size
    }
    Stack.prototype.clear = _stackClear, Stack.prototype.delete = _stackDelete, Stack.prototype.get = _stackGet, Stack.prototype.has = _stackHas, Stack.prototype.set = _stackSet;
    var _Stack = Stack,
        HASH_UNDEFINED$2 = "__lodash_hash_undefined__";

    function setCacheAdd(e) {
        return this.__data__.set(e, HASH_UNDEFINED$2), this
    }
    var _setCacheAdd = setCacheAdd;

    function setCacheHas(e) {
        return this.__data__.has(e)
    }
    var _setCacheHas = setCacheHas;

    function SetCache(e) {
        var t = -1,
            a = null == e ? 0 : e.length;
        for (this.__data__ = new _MapCache; ++t < a;) this.add(e[t])
    }
    SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd, SetCache.prototype.has = _setCacheHas;
    var _SetCache = SetCache;

    function arraySome(e, t) {
        for (var a = -1, n = null == e ? 0 : e.length; ++a < n;)
            if (t(e[a], a, e)) return !0;
        return !1
    }
    var _arraySome = arraySome;

    function cacheHas(e, t) {
        return e.has(t)
    }
    var _cacheHas = cacheHas,
        COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;

    function equalArrays(e, t, a, n, r, o) {
        var i = a & COMPARE_PARTIAL_FLAG,
            s = e.length,
            c = t.length;
        if (s != c && !(i && c > s)) return !1;
        var l = o.get(e);
        if (l && o.get(t)) return l == t;
        var u = -1,
            d = !0,
            g = a & COMPARE_UNORDERED_FLAG ? new _SetCache : void 0;
        for (o.set(e, t), o.set(t, e); ++u < s;) {
            var f = e[u],
                p = t[u];
            if (n) var m = i ? n(p, f, u, t, e, o) : n(f, p, u, e, t, o);
            if (void 0 !== m) {
                if (m) continue;
                d = !1;
                break
            }
            if (g) {
                if (!_arraySome(t, function(e, t) {
                        if (!_cacheHas(g, t) && (f === e || r(f, e, a, n, o))) return g.push(t)
                    })) {
                    d = !1;
                    break
                }
            } else if (f !== p && !r(f, p, a, n, o)) {
                d = !1;
                break
            }
        }
        return o.delete(e), o.delete(t), d
    }
    var _equalArrays = equalArrays,
        Uint8Array$1 = _root.Uint8Array,
        _Uint8Array = Uint8Array$1;

    function mapToArray(e) {
        var t = -1,
            a = Array(e.size);
        return e.forEach(function(e, n) {
            a[++t] = [n, e]
        }), a
    }
    var _mapToArray = mapToArray;

    function setToArray(e) {
        var t = -1,
            a = Array(e.size);
        return e.forEach(function(e) {
            a[++t] = e
        }), a
    }
    var _setToArray = setToArray,
        COMPARE_PARTIAL_FLAG$1 = 1,
        COMPARE_UNORDERED_FLAG$1 = 2,
        boolTag$1 = "[object Boolean]",
        dateTag$1 = "[object Date]",
        errorTag$1 = "[object Error]",
        mapTag$1 = "[object Map]",
        numberTag$2 = "[object Number]",
        regexpTag$1 = "[object RegExp]",
        setTag$1 = "[object Set]",
        stringTag$1 = "[object String]",
        symbolTag$1 = "[object Symbol]",
        arrayBufferTag$1 = "[object ArrayBuffer]",
        dataViewTag$1 = "[object DataView]",
        symbolProto$1 = _Symbol ? _Symbol.prototype : void 0,
        symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;

    function equalByTag(e, t, a, n, r, o, i) {
        switch (a) {
            case dataViewTag$1:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case arrayBufferTag$1:
                return !(e.byteLength != t.byteLength || !o(new _Uint8Array(e), new _Uint8Array(t)));
            case boolTag$1:
            case dateTag$1:
            case numberTag$2:
                return eq_1(+e, +t);
            case errorTag$1:
                return e.name == t.name && e.message == t.message;
            case regexpTag$1:
            case stringTag$1:
                return e == t + "";
            case mapTag$1:
                var s = _mapToArray;
            case setTag$1:
                var c = n & COMPARE_PARTIAL_FLAG$1;
                if (s || (s = _setToArray), e.size != t.size && !c) return !1;
                var l = i.get(e);
                if (l) return l == t;
                n |= COMPARE_UNORDERED_FLAG$1, i.set(e, t);
                var u = _equalArrays(s(e), s(t), n, r, o, i);
                return i.delete(e), u;
            case symbolTag$1:
                if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(t)
        }
        return !1
    }
    var _equalByTag = equalByTag;

    function arrayPush(e, t) {
        for (var a = -1, n = t.length, r = e.length; ++a < n;) e[r + a] = t[a];
        return e
    }
    var _arrayPush = arrayPush;

    function baseGetAllKeys(e, t, a) {
        var n = t(e);
        return isArray_1(e) ? n : _arrayPush(n, a(e))
    }
    var _baseGetAllKeys = baseGetAllKeys;

    function arrayFilter(e, t) {
        for (var a = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++a < n;) {
            var i = e[a];
            t(i, a, e) && (o[r++] = i)
        }
        return o
    }
    var _arrayFilter = arrayFilter;

    function stubArray() {
        return []
    }
    var stubArray_1 = stubArray,
        objectProto$10 = Object.prototype,
        propertyIsEnumerable$1 = objectProto$10.propertyIsEnumerable,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        getSymbols = nativeGetSymbols ? function(e) {
            return null == e ? [] : (e = Object(e), _arrayFilter(nativeGetSymbols(e), function(t) {
                return propertyIsEnumerable$1.call(e, t)
            }))
        } : stubArray_1,
        _getSymbols = getSymbols;

    function getAllKeys(e) {
        return _baseGetAllKeys(e, keys_1, _getSymbols)
    }
    var _getAllKeys = getAllKeys,
        COMPARE_PARTIAL_FLAG$2 = 1,
        objectProto$11 = Object.prototype,
        hasOwnProperty$8 = objectProto$11.hasOwnProperty;

    function equalObjects(e, t, a, n, r, o) {
        var i = a & COMPARE_PARTIAL_FLAG$2,
            s = _getAllKeys(e),
            c = s.length;
        if (c != _getAllKeys(t).length && !i) return !1;
        for (var l = c; l--;) {
            var u = s[l];
            if (!(i ? u in t : hasOwnProperty$8.call(t, u))) return !1
        }
        var d = o.get(e);
        if (d && o.get(t)) return d == t;
        var g = !0;
        o.set(e, t), o.set(t, e);
        for (var f = i; ++l < c;) {
            var p = e[u = s[l]],
                m = t[u];
            if (n) var b = i ? n(m, p, u, t, e, o) : n(p, m, u, e, t, o);
            if (!(void 0 === b ? p === m || r(p, m, a, n, o) : b)) {
                g = !1;
                break
            }
            f || (f = "constructor" == u)
        }
        if (g && !f) {
            var h = e.constructor,
                _ = t.constructor;
            h != _ && "constructor" in e && "constructor" in t && !("function" == typeof h && h instanceof h && "function" == typeof _ && _ instanceof _) && (g = !1)
        }
        return o.delete(e), o.delete(t), g
    }
    var _equalObjects = equalObjects,
        DataView = _getNative(_root, "DataView"),
        _DataView = DataView,
        Promise$1 = _getNative(_root, "Promise"),
        _Promise = Promise$1,
        Set = _getNative(_root, "Set"),
        _Set = Set,
        WeakMap = _getNative(_root, "WeakMap"),
        _WeakMap = WeakMap,
        mapTag$2 = "[object Map]",
        objectTag$1 = "[object Object]",
        promiseTag = "[object Promise]",
        setTag$2 = "[object Set]",
        weakMapTag$1 = "[object WeakMap]",
        dataViewTag$2 = "[object DataView]",
        dataViewCtorString = _toSource(_DataView),
        mapCtorString = _toSource(_Map),
        promiseCtorString = _toSource(_Promise),
        setCtorString = _toSource(_Set),
        weakMapCtorString = _toSource(_WeakMap),
        getTag = _baseGetTag;
    (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set) != setTag$2 || _WeakMap && getTag(new _WeakMap) != weakMapTag$1) && (getTag = function(e) {
        var t = _baseGetTag(e),
            a = t == objectTag$1 ? e.constructor : void 0,
            n = a ? _toSource(a) : "";
        if (n) switch (n) {
            case dataViewCtorString:
                return dataViewTag$2;
            case mapCtorString:
                return mapTag$2;
            case promiseCtorString:
                return promiseTag;
            case setCtorString:
                return setTag$2;
            case weakMapCtorString:
                return weakMapTag$1
        }
        return t
    });
    var _getTag = getTag,
        COMPARE_PARTIAL_FLAG$3 = 1,
        argsTag$2 = "[object Arguments]",
        arrayTag$1 = "[object Array]",
        objectTag$2 = "[object Object]",
        objectProto$12 = Object.prototype,
        hasOwnProperty$9 = objectProto$12.hasOwnProperty;

    function baseIsEqualDeep(e, t, a, n, r, o) {
        var i = isArray_1(e),
            s = isArray_1(t),
            c = i ? arrayTag$1 : _getTag(e),
            l = s ? arrayTag$1 : _getTag(t),
            u = (c = c == argsTag$2 ? objectTag$2 : c) == objectTag$2,
            d = (l = l == argsTag$2 ? objectTag$2 : l) == objectTag$2,
            g = c == l;
        if (g && isBuffer_1(e)) {
            if (!isBuffer_1(t)) return !1;
            i = !0, u = !1
        }
        if (g && !u) return o || (o = new _Stack), i || isTypedArray_1(e) ? _equalArrays(e, t, a, n, r, o) : _equalByTag(e, t, c, a, n, r, o);
        if (!(a & COMPARE_PARTIAL_FLAG$3)) {
            var f = u && hasOwnProperty$9.call(e, "__wrapped__"),
                p = d && hasOwnProperty$9.call(t, "__wrapped__");
            if (f || p) {
                var m = f ? e.value() : e,
                    b = p ? t.value() : t;
                return o || (o = new _Stack), r(m, b, a, n, o)
            }
        }
        return !!g && (o || (o = new _Stack), _equalObjects(e, t, a, n, r, o))
    }
    var _baseIsEqualDeep = baseIsEqualDeep;

    function baseIsEqual(e, t, a, n, r) {
        return e === t || (null == e || null == t || !isObjectLike_1(e) && !isObjectLike_1(t) ? e != e && t != t : _baseIsEqualDeep(e, t, a, n, baseIsEqual, r))
    }
    var _baseIsEqual = baseIsEqual,
        COMPARE_PARTIAL_FLAG$4 = 1,
        COMPARE_UNORDERED_FLAG$2 = 2;

    function baseIsMatch(e, t, a, n) {
        var r = a.length,
            o = r,
            i = !n;
        if (null == e) return !o;
        for (e = Object(e); r--;) {
            var s = a[r];
            if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
        }
        for (; ++r < o;) {
            var c = (s = a[r])[0],
                l = e[c],
                u = s[1];
            if (i && s[2]) {
                if (void 0 === l && !(c in e)) return !1
            } else {
                var d = new _Stack;
                if (n) var g = n(l, u, c, e, t, d);
                if (!(void 0 === g ? _baseIsEqual(u, l, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, n, d) : g)) return !1
            }
        }
        return !0
    }
    var _baseIsMatch = baseIsMatch;

    function isStrictComparable(e) {
        return e == e && !isObject_1(e)
    }
    var _isStrictComparable = isStrictComparable;

    function getMatchData(e) {
        for (var t = keys_1(e), a = t.length; a--;) {
            var n = t[a],
                r = e[n];
            t[a] = [n, r, _isStrictComparable(r)]
        }
        return t
    }
    var _getMatchData = getMatchData;

    function matchesStrictComparable(e, t) {
        return function(a) {
            return null != a && (a[e] === t && (void 0 !== t || e in Object(a)))
        }
    }
    var _matchesStrictComparable = matchesStrictComparable;

    function baseMatches(e) {
        var t = _getMatchData(e);
        return 1 == t.length && t[0][2] ? _matchesStrictComparable(t[0][0], t[0][1]) : function(a) {
            return a === e || _baseIsMatch(a, e, t)
        }
    }
    var _baseMatches = baseMatches;

    function baseGet(e, t) {
        for (var a = 0, n = (t = _castPath(t, e)).length; null != e && a < n;) e = e[_toKey(t[a++])];
        return a && a == n ? e : void 0
    }
    var _baseGet = baseGet;

    function get(e, t, a) {
        var n = null == e ? void 0 : _baseGet(e, t);
        return void 0 === n ? a : n
    }
    var get_1 = get;

    function baseHasIn(e, t) {
        return null != e && t in Object(e)
    }
    var _baseHasIn = baseHasIn;

    function hasIn(e, t) {
        return null != e && _hasPath(e, t, _baseHasIn)
    }
    var hasIn_1 = hasIn,
        COMPARE_PARTIAL_FLAG$5 = 1,
        COMPARE_UNORDERED_FLAG$3 = 2;

    function baseMatchesProperty(e, t) {
        return _isKey(e) && _isStrictComparable(t) ? _matchesStrictComparable(_toKey(e), t) : function(a) {
            var n = get_1(a, e);
            return void 0 === n && n === t ? hasIn_1(a, e) : _baseIsEqual(t, n, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3)
        }
    }
    var _baseMatchesProperty = baseMatchesProperty;

    function baseProperty(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    var _baseProperty = baseProperty;

    function basePropertyDeep(e) {
        return function(t) {
            return _baseGet(t, e)
        }
    }
    var _basePropertyDeep = basePropertyDeep;

    function property(e) {
        return _isKey(e) ? _baseProperty(_toKey(e)) : _basePropertyDeep(e)
    }
    var property_1 = property;

    function baseIteratee(e) {
        return "function" == typeof e ? e : null == e ? identity_1 : "object" == typeof e ? isArray_1(e) ? _baseMatchesProperty(e[0], e[1]) : _baseMatches(e) : property_1(e)
    }
    var _baseIteratee = baseIteratee;

    function baseMap(e, t) {
        var a = -1,
            n = isArrayLike_1(e) ? Array(e.length) : [];
        return _baseEach(e, function(e, r, o) {
            n[++a] = t(e, r, o)
        }), n
    }
    var _baseMap = baseMap;

    function map(e, t) {
        return (isArray_1(e) ? _arrayMap : _baseMap)(e, _baseIteratee(t, 3))
    }
    var map_1 = map,
        checkPathname = function(e) {
            if (e.pagesWhiteList.length) {
                for (var t = 0; t < e.pagesWhiteList.length; t++) {
                    var a = e.pagesWhiteList[t];
                    if (-1 != window.location.pathname.search(a)) return !0
                }
                return console.log("The pagesWhiteList is not empty and doesn't contain this page"), !1
            }
            if (e.pagesBlackList.length)
                for (var n = 0; n < e.pagesBlackList.length; n++) {
                    var r = e.pagesBlackList[n];
                    if (-1 != window.location.pathname.search(r)) return console.log("The pagesBlackList is not empty and contains this page"), !1
                }
            return !0
        },
        trackForms = function(e, t) {
            var a = e.customFormDataTracking;
            if (checkPathname(a)) {
                for (var n = [], r = 0; r < a.phoneInputName.length; r++) n.push("input[name=" + a.phoneInputName[r] + "]");
                var o = n.join(", "),
                    i = !1;
                if (a.isActive)
                    for (var s = 0; s < document.forms.length; s++) {
                        var c = document.forms[s];
                        c.attachEvent ? c.attachEvent("submit", l) : c.onsubmit = l, log("Tracked form: #" + c.id)
                    }
            }

            function l(e) {
                setTimeout(function() {
                    e.defaultPrevented || (e.preventDefault(), i = !0);
                    for (var n = e.target, r = {}, s = 0; s < n.elements.length; s++)
                        if ("BUTTON" !== n.elements[s].tagName && "submit" !== n.elements[s].type && -1 === a.fieldsBlackList.indexOf(n.elements[s].name))
                            if ("SELECT" === n.elements[s].tagName && n.elements[s].multiple) r[n.elements[s].name] = [], map_1(n.elements[s].options, function(e, t) {
                                e.selected && r[n.elements[s].name].push(e.value)
                            });
                            else {
                                if ("INPUT" === n.elements[s].tagName && "file" === n.elements[s].type) continue;
                                if ("INPUT" === n.elements[s].tagName && "radio" === n.elements[s].type && !n.elements[s].checked) continue;
                                r[n.elements[s].name] = n.elements[s].value
                            }
                    log("Stored data:" + JSON.stringify(r));
                    var c = {
                        hid: v4_1(),
                        vid: state.pageViewId,
                        r_cl: state.clientId,
                        r_cu: window.location.href,
                        r_pd: getAdditionalData(config.trackedEntities, LEVEL_PAGEVIEW),
                        dt: document.title,
                        formData: r,
                        formId: n.id.length ? n.id : "",
                        formName: n.name.length ? n.name : ""
                    };
                    sendPayload(config.urls.apiV2, c, {
                        jsonRpc: !0,
                        method: "saveFormData",
                        onSuccess: function(n) {
                            log(n), !0 === a.startCallbackOnSubmitForm && null !== e.target.querySelector(o) && function(e) {
                                var n = e.target.querySelector(o).value.replace(/^(380|\+380)0/, "$1");
                                n = n.replace(/^(7|\+7)8/, "$1");
                                try {
                                    void 0 !== a.callbackDuringBusinessHours && a.callbackDuringBusinessHours ? void 0 !== t.old_data && void 0 !== t.old_data.is_working_time && t.old_data.is_working_time && t.requestCallback({
                                        num_to_call: n
                                    }, null) : t.requestCallback({
                                        num_to_call: n
                                    }, null)
                                } catch (e) {
                                    log(e)
                                }
                            }(e), i && e.target.submit()
                        }
                    })
                }, 3)
            }
        },
        ringostatCookieTLD = function() {
            for (var e, t = document.cookie, a = document.location.hostname.split("."), n = a.length; n--;)
                if (e = ".".concat(a.slice(n).join(".")), createCookie("CookieTLD", e, 30, e), t !== document.cookie) return eraseCookie("CookieTLD", e), e;
            return null
        }(),
        callback = function(e) {
            var t = {
                    isMobile: /iphone|ipod|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()),
                    sendPost: function(e, a, n, r) {
                        var o = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
                        o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = n, o.onerror = r, o.send(t.objectToQueryString(a))
                    },
                    maskString: function(e, t) {
                        for (var a = t.toString().split(""), n = e.toString().split(""), r = a.length; r--;) - 1 !== n.lastIndexOf("#") && (n[n.lastIndexOf("#")] = a[+r]);
                        return n.join("").replace(/#/g, "")
                    },
                    getLocale: function() {
                        return (document.documentElement.lang ? document.documentElement.lang : navigator ? navigator.language || navigator.userLanguage : "ru").split("-")[0]
                    },
                    deepExtend: function(e, a) {
                        for (var n in a) a.hasOwnProperty(n) && (e || (e = {}), e[n] && "object" === _typeof(a[n]) ? t.deepExtend(e[n], a[n]) : e[n] = a[n]);
                        return e
                    },
                    objectToQueryString: function(e) {
                        function t(e, a, n) {
                            var r, o, i, s;
                            if (s = /\[\]$/, a instanceof Array)
                                for (o = 0, i = a.length; o < i; o++) s.test(e) ? n(e, a[o]) : t("".concat(e, "[").concat("object" === _typeof(a[o]) ? o : "", "]"), a[o], n);
                            else if ("object" === _typeof(a))
                                for (r in a) t("".concat(e, "[").concat(r, "]"), a[r], n);
                            else n(e, a)
                        }
                        var a, n, r, o, i;
                        if (n = [], i = /%20/g, r = function(e, t) {
                                t = "function" == typeof t ? t() : null == t ? "" : t, n[n.length] = "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t))
                            }, e instanceof Array)
                            for (o in e) r(o, e[o]);
                        else
                            for (a in e) t(a, e[a], r);
                        return n.join("&").replace(i, "+")
                    },
                    fadeIn: function(e) {
                        e.style.opacity = 0, e.style.display = "flex",
                            function t() {
                                var a = parseFloat(e.style.opacity);
                                (a += .1) > 1 || (e.style.opacity = a, requestAnimationFrame(t))
                            }()
                    },
                    fadeOut: function(e, t) {
                        var a = 1,
                            n = setInterval(function() {
                                (a -= 10 / 300) <= 0 && (clearInterval(n), a = 0, e.style.display = "none", e.style.visibility = "hidden", "function" == typeof t && t()), e.style.opacity = a, e.style.filter = "alpha(opacity=".concat(100 * a, ")")
                            }, 10)
                    },
                    addClass: function(e, t) {
                        e.className += " ".concat(t)
                    },
                    removeClass: function(e, t) {
                        e.className = e.className.replace(new RegExp("(^|\\b)".concat(t.split(" ").join("|"), "(\\b|$)"), "gi"), " ")
                    },
                    parseUrl: function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t
                    },
                    throttle: function(e, t) {
                        var a, n, r = !1;
                        return function o() {
                            if (r) return a = arguments, void(n = this);
                            e.apply(this, arguments), r = !0, setTimeout(function() {
                                r = !1, a && (o.apply(n, a), a = n = null)
                            }, t)
                        }
                    }
                },
                a = {
                    currentUrl: window.location.href,
                    referrer: document.referrer,
                    referrerHost: t.parseUrl(document.referrer).hostname,
                    currentHost: t.parseUrl(window.location.href).host
                },
                n = {
                    callback: null,
                    interval: null,
                    achieveTime: 0,
                    guid: function() {
                        function e() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        }
                        return "".concat(e() + e(), "-").concat(e(), "-").concat(e(), "-").concat(e(), "-").concat(e()).concat(e()).concat(e())
                    }(),
                    isLocalStorageNameSupported: function() {
                        var e = window.sessionStorage;
                        try {
                            return e.setItem("test", "1"), e.removeItem("test"), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    init: function(e, r) {
                        n.callback = r, n.achieveTime = e;
                        var o = {
                                guid: "",
                                achiev: 0
                            },
                            i = n.readFromStorage();
                        if (i && i.achiev) {
                            if (-1 === i.achiev) {
                                if (!a.isLanding) return;
                                i.achiev = 0
                            }
                            o.achiev = i.achiev
                        }
                        n.writeToStorage(o);
                        addEvents(document, ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend", "keydown", "keyup"], t.throttle(n.eventFired, 500)), null === n.interval && (n.interval = setInterval(function() {
                            (i = n.readFromStorage()) && i.guid === n.guid && (i.achiev >= n.achieveTime || -1 === i.achiev ? (clearInterval(n.interval), n.writeToStorage({
                                guid: "",
                                achiev: -1
                            }), n.callback()) : n.writeToStorage({
                                guid: "",
                                achiev: i.achiev + 10
                            }))
                        }, 1e4))
                    },
                    eventFired: function() {
                        var e = n.readFromStorage();
                        e && (e.guid = n.guid, n.writeToStorage(e))
                    },
                    writeToStorage: function(e) {
                        var t = {
                            value: e,
                            expires_at: (new Date).getTime() + 18e5
                        };
                        n.isLocalStorageNameSupported() ? localStorage.setItem("rngst_action", JSON.stringify(t)) : createCookie("rngst_action", JSON.stringify(t))
                    },
                    readFromStorage: function() {
                        if (n.isLocalStorageNameSupported()) var e = JSON.parse(localStorage.getItem("rngst_action"));
                        else readCookie("rngst_action", !0);
                        if (null !== e) {
                            if (!(null !== e.expires_at && e.expires_at < (new Date).getTime())) return e.value;
                            localStorage.removeItem("rngst_action")
                        }
                        return null
                    }
                },
                r = {
                    old_data: null,
                    language: t.getLocale(),
                    formType: null,
                    form: null,
                    button: null,
                    icon: null,
                    overlay: null,
                    formStatus: "hidden",
                    buttonStatus: "hidden",
                    iframeDocument: null,
                    setCallbackSettings: function(a) {
                        e.callbackSettings = t.deepExtend({
                            CallbackOffOnPage: !1,
                            autoFormOffOnPage: !1,
                            CallbackOff: !1,
                            autoFormOff: !1,
                            delay: 0
                        }, a), r.check()
                    },
                    hideButton: function() {
                        var e = document.getElementsByClassName("rngst_phone_button")[0];
                        e && document.body.removeChild(e)
                    },
                    stopTimer: function() {
                        n.callback = function() {}, n.writeToStorage({
                            achiev: -1
                        })
                    },
                    freezeTimer: function() {
                        clearTimeout(n.interval)
                    },
                    check: function() {
                        return e.callbackSettings.CallbackOff ? (r.hideButton(), r.stopTimer(), void createCookie("rngst_callback", {
                            callbackNumber: !1
                        }, 1800, e.cookieDomain)) : e.callbackSettings.CallbackOffOnPage ? (r.hideButton(), void r.freezeTimer()) : (readCookie("rngst_callback", !1) ? (r.old_data = readCookie("rngst_callback", !0), r.old_data.callbackNumber ? r.init() : log("No callback number")) : t.sendPost("".concat(e.urls.substitution, "api/checkCallback/"), {
                            "data[current_url]": a.currentUrl,
                            "data[language]": t.getLocale(),
                            "data[referrer]": a.referrer,
                            "data[ua_id]": a.uaId,
                            "data[utmz]": readCookie(e.cookies.rngst2, !1) && readCookie(e.cookies.rngst2, !0).utmz || ""
                        }, function() {
                            r.old_data = JSON.parse(this.responseText), createCookie("rngst_callback", r.old_data, 1800, e.cookieDomain), r.old_data.callbackNumber ? r.init() : log("No callback number"), log("checkCallback  Success : ".concat(this.status, " - ").concat(this.statusText))
                        }, function() {
                            log("checkCallback  Error : ".concat(this.status, " - ").concat(this.statusText))
                        }), void(e.callbackSettings.hideCallbackButton && r.hideButton()))
                    },
                    init: function() {
                        if (!r.old_data.is_working_time) return eraseCookie("rngst_callback", e.cookieDomain), void log("Out of working hours");
                        if (e.callbackSettings.delay && (r.old_data.avg_time_to_call = +r.old_data.avg_time_to_call + e.callbackSettings.delay, createCookie("rngst_callback", r.old_data, 1800, e.cookieDomain)), r.old_data.language = r.language, 0 === document.getElementsByClassName("rngst_phone_button").length && !0 === r.old_data.is_callback_by_click && !e.callbackSettings.hideCallbackButton) {
                            var t = document.getElementsByTagName("head")[0],
                                o = document.createElement("link");
                            o.rel = "stylesheet", o.type = "text/css", o.href = "".concat(e.urls.substitution, "api/getCallbackButtonCSS/?ua_id=").concat(a.uaId), t.appendChild(o), document.body.insertAdjacentHTML("beforeend", '<div class="rngst_phone_button"><div class="rngst_phone_icon"></div><div class="rngst_phone_circle"></div><div class="rngst_phone_circle2"></div><div class="rngst_phone_fill"></div><div class="rngst_phone_body"></div></div>'), r.button = document.getElementsByClassName("rngst_phone_button")[0], r.icon = document.getElementsByClassName("rngst_phone_icon")[0], addEvents(r.icon, ["mousedown", "click"], function(e) {
                                ("click" === e.type || "mousedown" === e.type && !e.isTrusted) && (r.old_data.form_type = "forced", r.button.style.display = "none", r.stopTimer(), r.callbackForm())
                            }), addEvents(r.button, ["mousedown", "mouseup", "touchstart", "touchend", "keydown", "keyup", "click", "contextmenu", "dblclick"], function(e) {
                                e.stopPropagation()
                            })
                        }
                        e.callbackSettings.autoFormOffOnPage ? r.freezeTimer() : e.callbackSettings.autoFormOffOnPage ? r.stopTimer() : (!0 === r.old_data.is_callback_by_duration && n.init(r.old_data.avg_time_to_call, function() {
                            r.old_data.form_type = "default", null != r.button && (r.button.style.display = "none"), r.callbackForm()
                        }), e.callbackSettings.autoFormOff && r.stopTimer())
                    },
                    callbackForm: function() {
                        t.sendPost("".concat(e.urls.substitution, "api/getCallbackForm/"), {
                            "data[ua_id]": a.uaId,
                            "data[form_type]": r.old_data.form_type,
                            "data[language]": r.old_data.language
                        }, function() {
                            if (this.responseText) {
                                var a = document.createElement("iframe"),
                                    n = document.createElement("div"),
                                    o = t.isMobile ? "allowDropdown: false," : "";
                                a.src = "", a.title = "title", a.setAttribute("name", "name"), a.setAttribute("id", "id"), a.setAttribute("frameborder", "no"), (a.frameElement || a).style.cssText = "width: 100%; height: 100%; border: 0; display: block;", n.style.cssText = "width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 2147483646;", n.setAttribute("id", "wrapper_id"), n.appendChild(a);
                                var i = document.body.lastChild;
                                i.parentNode.insertBefore(n, i.nextSibling), r.iframeDocument = a.contentWindow.document, r.iframeDocument.write(this.responseText), r.iframeDocument.close();
                                var s = this.responseText.match(new RegExp('<span class="hide" id="rngst_form_design">(.*)</span>'))[1],
                                    c = document.createElement("link");
                                c.rel = "stylesheet", c.type = "text/css", -1 === ["light", "kyivstar", "classic", "modern", "standard"].indexOf(s) ? c.href = "".concat(e.urls.backend, "callback/css/callback.css") : c.href = "".concat(e.urls.backend, "callback/css/callback_").concat(s, ".css?v.15012018");
                                var l = document.createElement("link");
                                l.id = "intlLink", l.rel = "stylesheet", l.type = "text/css", l.href = "".concat(e.urls.backend, "static/js/vendors/phone_input/v12/css/intlTelInput.css");
                                var u = document.createElement("script");
                                u.type = "text/javascript", u.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", u.async = !1;
                                var d = document.createElement("script");
                                d.type = "text/javascript", d.src = "".concat(e.urls.backend, "static/js/vendors/phone_input/v12/js/intlTelInput.min.js"), d.async = !1;
                                var g = document.createElement("script");
                                g.type = "text/javascript", g.text = "".concat('$("#rngst_phone_input").intlTelInput({    utilsScript: "').concat(e.urls.backend, 'static/js/vendors/phone_input/v12/js/utils.js",') + '    defaultCountry: "auto",    initialCountry: "auto",' + "    autoPlaceholder: true,".concat(o, "    nationalMode: true,") + '    autoHideDialCode: true,    formatOnDisplay: false,    preferredCountries: ["ua", "ru"],    geoIpLookup: function(callback) {' + '    $.get("'.concat(e.urls.api, 'ipinfo", function() {}, "json").always(function(resp) {') + '        var countryCode = (resp && resp.country) ? resp.country : "ua";        callback(countryCode);    });}});$(window).trigger("load");$("#rngst_phone_input").keydown(function() {    $(".rngst_error_text").addClass("hide");});$("#rngst_send_callback").on("keypress click touchstart", function (e) {        e.preventDefault();        if (!(e.type === "keypress" && e.which !== 13)) {            if ($.trim($("#rngst_phone_input").val())) {                if ($("#rngst_phone_input").intlTelInput("isValidNumber") && $("#rngst_phone_input").val().search(/[a-zA-Zа-яА-Я]/) === -1) {                    var message = {                        num_to_call: $("#rngst_phone_input").intlTelInput("getNumber"),                       messageType: "transmitNumToCall"                    };                    $(".rngst__text--bottom").addClass("hide");                    parent.postMessage(message, "*");                } else {                    $(".rngst_error_text").removeClass("hide");                }            }        }    });const isMobile = (/iphone|ipod|android|ie|blackberry|fennec|nokia|opera mini|windows mobile|windows phone|iemobile/).test(navigator.userAgent.toLowerCase()) ? true : false;var callbackNumState = "";if(isMobile){   $("#rngst_modalDialog").addClass("rngst_modal--mobile");}if(document.getElementById("rngst_form_design").innerHTML === "modern" && isMobile){   $("body").css("overflow-y", "auto");$("body").css("display", "block");   $("#rngst_phone_input").prop("readonly", true);   $(".rngst_dialpad__item").click(function(){   $(this).addClass("animation-rngst");   setTimeout(function(){$(".rngst_dialpad__item").removeClass("animation-rngst");},100);       if($(this).hasClass("rngst_dialpad__delete")){         callbackNumState = callbackNumState.slice(0, -1);         $("#rngst_phone_input").intlTelInput("setNumber", callbackNumState);       }else{           var btnNumber = this.innerHTML;           var btnNumberString = btnNumber.toString();           callbackNumState = callbackNumState + btnNumberString;           $("#rngst_phone_input").intlTelInput("setNumber", callbackNumState);     }   })}', g.async = !1, r.iframeDocument.head.appendChild(c), r.overlay = r.iframeDocument.body.firstElementChild, r.form = r.iframeDocument.body.lastElementChild, r.overlay.style.display = "none", r.form.style.display = "none", c.onload = function() {
                                    r.overlay.style.display = "flex", r.form.style.display = "flex", t.fadeIn(r.overlay), t.fadeIn(r.form), r.callbackLog(1), r.iframeDocument.head.appendChild(l), r.iframeDocument.head.appendChild(u), u.onload = function() {
                                        r.iframeDocument.head.appendChild(d)
                                    }, d.onload = function() {
                                        r.iframeDocument.head.appendChild(g)
                                    }
                                }, addEvents(r.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], f), addEvents(r.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], f), addEvents(window, ["message"], r.initiateCall), log("getCallbackForm  Success : ".concat(this.status, " - ").concat(this.statusText))
                            }

                            function f() {
                                t.fadeOut(r.overlay), t.fadeOut(r.form, function() {
                                    n.parentNode.removeChild(n), r.button.style.display = "block"
                                }), r.callbackLog(0)
                            }
                        }, function() {
                            log("getCallbackForm  Error : ".concat(this.status, " - ").concat(this.statusText))
                        })
                    },
                    callbackLog: function(n) {
                        t.sendPost("".concat(e.urls.analytics, "callback_form/v1"), {
                            "data[ua_id]": a.uaId,
                            "data[client_id]": a.clientId,
                            "data[avg_time_to_call]": r.old_data.avg_time_to_call,
                            "data[flag]": n,
                            "data[hid]": v4_1(),
                            "data[vid]": state.pageViewId
                        }, function() {
                            log("callbackLog  Success : ".concat(this.status, " - ").concat(this.statusText))
                        }, function() {
                            log("callbackLog  Error : ".concat(this.status, " - ").concat(this.statusText))
                        })
                    },
                    requestCallback: function(n, o) {
                        t.sendPost("".concat(e.urls.substitution, "api/initiateCallback/"), {
                            "data[num_to_call]": n.num_to_call,
                            "data[ua_id]": a.uaId,
                            "data[client_id]": a.clientId,
                            "data[utmz]": readCookie(e.cookies.rngst2, !1) && readCookie(e.cookies.rngst2, !0).utmz || "",
                            "data[avg_time_to_call]": r.old_data.avg_time_to_call,
                            "data[page_url]": a.currentUrl
                        }, function() {
                            null !== o && o.e.target.submit(), log("initiateCallback  Success : ".concat(this.status, " - ").concat(this.statusText))
                        }, function() {
                            log("initiateCallback  Error : ".concat(this.status, " - ").concat(this.statusText))
                        })
                    },
                    initiateCall: function(e) {
                        var a = e.data;
                        if ("transmitNumToCall" === a.messageType) {
                            a.num_to_call = a.num_to_call.replace(/^(380|\+380)0/, "$1"), a.num_to_call = a.num_to_call.replace(/^(7|\+7)8/, "$1"), r.requestCallback(a, null), r.form.removeChild(r.iframeDocument.getElementById("rngst_callback_form")), t.addClass(r.iframeDocument.getElementsByClassName("rngst_before_text")[0], "hide"), t.addClass(r.iframeDocument.getElementsByClassName("rngst__header")[0], "hide"), t.removeClass(r.iframeDocument.getElementsByClassName("rngst_counter_text")[0], "hide"), t.removeClass(r.iframeDocument.getElementsByClassName("rngst_timer__wrapper")[0], "hide");
                            var n = 30,
                                o = window.setInterval(function() {
                                    r.iframeDocument.getElementById("rngst_timer").innerHTML = n.toFixed(2), n <= 0 && (r.iframeDocument.getElementById("rngst_timer").innerHTML = "", t.addClass(r.iframeDocument.getElementsByClassName("rngst_timer__wrapper")[0], "hide"), t.addClass(r.iframeDocument.getElementsByClassName("rngst_counter_text")[0], "hide"), t.removeClass(r.iframeDocument.getElementsByClassName("rngst_after_text")[0], "hide"), clearInterval(o)), n -= .01
                                }, 10);
                            addEvents(r.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], function() {
                                clearInterval(o)
                            }), addEvents(r.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], function() {
                                clearInterval(o)
                            })
                        }
                    }
                },
                o = {
                    cookieLifeTime: 300,
                    crossDomain: !1,
                    linkedDomains: [""],
                    numbers: {},
                    callbackFunction: function() {
                        log("default callbackFunction")
                    },
                    subDomain: !1,
                    callbackSettings: {
                        CallbackOffOnPage: !1,
                        autoFormOffOnPage: !1,
                        CallbackOff: !1,
                        autoFormOff: !1,
                        delay: 0
                    },
                    roistatTracking: !1,
                    callbackFunctionBehavior: !1
                },
                i = JSON.parse(JSON.stringify(o));
            e = t.deepExtend(i, e), log("config: ".concat(JSON.stringify(e, null, 2))), window[e.ga](function() {
                a.uaId = e.uaId || window[e.ga].getAll()[0].get("trackingId"), a.clientId = window[e.ga].getAll()[0].get("clientId"), r.check()
            }), window.ringostatAPI = {}, window.ringostatAPI.setCallbackSettings = function(e) {
                r.setCallbackSettings(e)
            }, window.ringostatAPI.openCallbackForm = function() {
                r.old_data.form_type = "forced", r.stopTimer(), r.callbackForm()
            }, e.userSettings.customFormDataTracking.isActive && trackForms(e.userSettings, r)
        };
    bootstrap(has_1(config, "classified") && 1 === config.classified ? "classified" : "basic"), callback(config)
}();