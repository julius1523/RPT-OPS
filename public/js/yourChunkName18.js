"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["yourChunkName18"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: "SOA and Payment"
    };
  },
  data: function data() {
    return {
      offset: true,
      pageBreadcrumbs: [{
        text: "Home",
        to: "/index"
      }, {
        text: "Current Page",
        to: "/soapayment"
      }],
      search0: null,
      loadTable0: null,
      table0: [],
      soaHeaders: [{
        text: "Transaction No.",
        value: "transno",
        align: "center"
      }, {
        text: "Status",
        value: "trans_status",
        align: "center"
      }, {
        text: "PIN",
        value: "pin",
        align: "left"
      }, {
        text: "Amount Due",
        value: "amount_due",
        align: "right"
      }, {
        text: "Validity Date",
        value: "due_date",
        align: "left"
      }, {
        text: "Comments",
        value: "admin_message",
        align: "left"
      }, {
        text: "Action",
        value: "id",
        align: "center",
        sortable: false,
        filterable: false
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("auth", ["isAuthenticated"])),
  created: function created() {
    this.getSoaRequest();
  },
  methods: {
    getSoaRequest: function getSoaRequest() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loadTable0 = true;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/soa/getSoaRequest").then(function (result) {
                _this.table0 = result.data;
                _this.loadTable0 = false;
              })["catch"](function (result) {});
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    cancelRequest: function cancelRequest(item) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.$swal({
                icon: "warning",
                title: "Confirm Cancel",
                html: "Are you sure you want to cancel your request for SOA for this property? <br/><br/> Transaction No.:  ".concat(item.transno),
                showCancelButton: true,
                confirmButtonText: "Yes, cancel it",
                cancelButtonText: "No",
                scrollbarPadding: false
              });
            case 2:
              result = _context2.sent;
              if (result.value) {
                axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/soa/cancelRequest", {
                  id: item.id
                }).then(function (response) {
                  _this2.$swal({
                    icon: response.data.icon,
                    title: response.data.title,
                    text: response.data.text,
                    timer: 3000,
                    confirmButtonText: "Ok",
                    scrollbarPadding: false
                  });
                  _this2.getSoaRequest();
                })["catch"](function (error) {});
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    bgColor: function bgColor(status) {
      return status === "Awaiting SOA from Treasury" ? "orange lighten-4" : status === "SOA Available" ? "blue lighten-4" : status === "For Upload of Payroll Receipt" ? "yellow lighten-4" : status === "Payment Complete" ? "green lighten-4" : "";
    },
    txtColor: function txtColor(status) {
      return status === "Awaiting SOA from Treasury" ? "orange" : status === "SOA Available" ? "blue" : status === "For Upload of Payroll Receipt" ? "yellow accent-4" : status === "Payment Complete" ? "green" : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("breadcrumbs", {
    attrs: {
      breadcrumbs: _vm.pageBreadcrumbs
    }
  }), _vm._v(" "), _vm.isAuthenticated ? _c("v-card", {
    staticClass: "pa-4 mb-4 rounded-xl shadow"
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Statement of Accounts")]), _vm._v(" "), _vm.table0 && _vm.table0.data && _vm.table0.data.length > 0 ? [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "4",
      lg: "3"
    }
  }, [_c("v-text-field", {
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      label: "Search",
      "single-line": "",
      "hide-details": "",
      rounded: "",
      filled: "",
      dense: "",
      clearable: ""
    },
    model: {
      value: _vm.search0,
      callback: function callback($$v) {
        _vm.search0 = $$v;
      },
      expression: "search0"
    }
  })], 1)], 1), _vm._v(" "), _c("v-data-table", {
    staticClass: "my-4",
    attrs: {
      loading: _vm.loadTable0,
      headers: _vm.soaHeaders,
      items: _vm.table0.data,
      "mobile-breakpoint": "0",
      search: _vm.search0
    },
    scopedSlots: _vm._u([{
      key: "item.trans_status",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-chip", {
          attrs: {
            color: _vm.bgColor(item.trans_status),
            "text-color": _vm.txtColor(item.trans_status),
            pill: "",
            dark: "",
            small: _vm.$vuetify.breakpoint.smAndDown
          }
        }, [_vm._v("\n            " + _vm._s(item.trans_status) + "\n          ")])];
      }
    }, {
      key: "item.pin",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return _vm._l(item.pin, function (pin, index) {
          return _c("div", {
            key: index
          }, [_vm._v(_vm._s(pin))]);
        });
      }
    }, {
      key: "item.id",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [item.trans_status === "Awaiting SOA from Treasury" ? _c("v-btn", {
          staticClass: "text-capitalize rounded-lg",
          attrs: {
            depressed: "",
            outlined: "",
            small: _vm.$vuetify.breakpoint.smAndDown,
            color: "red darken-2"
          },
          on: {
            click: function click($event) {
              return _vm.cancelRequest(item);
            }
          }
        }, [_c("v-icon", {
          attrs: {
            left: "",
            small: ""
          }
        }, [_vm._v("mdi-cancel")]), _vm._v("\n            Cancel\n          ")], 1) : _vm._e(), _vm._v(" "), item.trans_status === "SOA Available" || item.trans_status === "For Upload of Payroll Receipt" || item.trans_status === "Payment Complete" ? _c("v-menu", {
          attrs: {
            top: "",
            "offset-y": _vm.offset
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref4) {
              var on = _ref4.on,
                attrs = _ref4.attrs;
              return [_c("v-btn", _vm._g(_vm._b({
                staticClass: "rounded-lg",
                attrs: {
                  depressed: "",
                  outlined: "",
                  small: _vm.$vuetify.breakpoint.smAndDown,
                  color: "primary"
                }
              }, "v-btn", attrs, false), on), [_c("v-icon", [_vm._v("mdi-dots-horizontal")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c("v-list", {
          staticClass: "pa-2",
          attrs: {
            dense: ""
          }
        }, [_c("v-list-item", [_c("v-list-item-title", [_vm._v("View SOA")])], 1), _vm._v(" "), item.trans_status === "SOA Available" ? _c("v-list-item", [_c("v-list-item-title", [_vm._v("Pay")])], 1) : _vm._e(), _vm._v(" "), item.trans_status === "For Upload of Payroll Receipt" ? _c("v-list-item", [_c("v-list-item-title", [_vm._v("Upload Receipt(s)")])], 1) : _vm._e()], 1)], 1) : _vm._e()];
      }
    }], null, true)
  })] : _vm._e(), _vm._v(" "), _vm.table0 && _vm.table0.data && _vm.table0.data.length === 0 ? [_c("v-img", {
    staticStyle: {
      height: "clamp(150px, 30vw, 250px)"
    },
    attrs: {
      contain: "",
      width: "100%",
      src: "/img/no_data_2.svg",
      eager: ""
    }
  }), _vm._v(" "), _c("v-card-title", {
    staticClass: "d-flex align-center justify-center text-subtitle-1"
  }, [_vm._v("No statement of accounts yet")])] : _vm._e()], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/soa/SoaPayment.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/soa/SoaPayment.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoaPayment.vue?vue&type=template&id=c0610058 */ "./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058");
/* harmony import */ var _SoaPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoaPayment.vue?vue&type=script&lang=js */ "./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoaPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__.render,
  _SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/soa/SoaPayment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SoaPayment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaPayment_vue_vue_type_template_id_c0610058__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SoaPayment.vue?vue&type=template&id=c0610058 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/soa/SoaPayment.vue?vue&type=template&id=c0610058");


/***/ })

}]);