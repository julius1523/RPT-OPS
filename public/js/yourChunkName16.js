"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["yourChunkName16"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: "Sign Up"
    };
  },
  data: function data() {
    return {
      e1: 1,
      form: {
        first_name: null,
        last_name: null,
        address: null,
        mobileno: null,
        email: null,
        username: null,
        password: null,
        confirmpass: null
      },
      value1: false,
      value2: false,
      rules: {
        first_name: [function (v) {
          return !!v || "First Name is required";
        }, function (v) {
          return /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "First Name must be valid";
        }],
        last_name: [function (v) {
          return !!v || "Last Name is required";
        }, function (v) {
          return /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "Last Name must be valid";
        }],
        address: [function (v) {
          return !!v || "Address is required";
        }, function (v) {
          return /^[a-zA-Z0-9,'.\-][a-zA-Z0-9\s,'.\-]*[a-zA-Z0-9]$/i.test(v) || "Address must be valid";
        }],
        mobileno: [function (v) {
          return !!v || 'Mobile No. is required';
        }, function (v) {
          return /^\d{11}$/i.test(v) || 'Mobile No. must be valid and contain only numeric characters';
        }],
        email: [function (v) {
          return !!v || "Email Address is required";
        }, function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v) || "Email Address must be valid";
        }],
        username: [function (v) {
          return !!v || "Username is required";
        }, function (v) {
          return /^[a-zA-Z0-9_.]{3,16}$/i.test(v) || "Username must be between 3 and 16 characters in length and can only contain letters, numbers, underscores, and periods.";
        }],
        password: [function (v) {
          return !!v || "Password is required";
        }, function (v) {
          return /^.{6,15}$/.test(v) || 'Password must be between 6 and 15 characters in length';
        }, function (v) {
          return /^(?=.*[0-9])/.test(v) || 'Password must contain at least 1 numeric digit';
        }, function (v) {
          return /^(?=.*[a-zA-Z])/.test(v) || 'Password must contain at least 1 letter';
        }]
      },
      isFormSubmitted: false
    };
  },
  computed: {
    stepWidth: function stepWidth() {
      return this.$vuetify.breakpoint.xsOnly ? 400 : 500;
    }
  },
  methods: {
    nextStep: function nextStep(step, formRef) {
      var _this = this;
      if (this.$refs[formRef].validate()) {
        this.e1 = step;
        this.isFormSubmitted = false;
      } else {
        if (this.validationResetTimeout) {
          clearTimeout(this.validationResetTimeout);
        }
        this.validationResetTimeout = setTimeout(function () {
          _this.resetValidationRules();
          _this.validationResetTimeout = null;
        }, 3000);
      }
    },
    prevStep: function prevStep() {
      this.e1 -= 1;
    },
    submitForm: function submitForm(formRef) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.$refs[formRef].validate()) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/signup/save", _this2.form).then(function (result) {
                switch (result.data) {
                  case 0:
                    _this2.$swal({
                      icon: 'success',
                      title: 'Sign Up Successful',
                      text: 'You have successfully created an account!',
                      timer: 3000,
                      confirmButtonText: 'Ok',
                      scrollbarPadding: false
                    });
                    _this2.$router.push("/login");
                    _this2.resetValidationRules();
                    break;
                  case 1:
                    _this2.$swal({
                      icon: 'error',
                      title: 'Sign Up Failed',
                      text: 'The email you are trying to use is already taken!',
                      timer: 3000,
                      confirmButtonText: 'Ok',
                      scrollbarPadding: false
                    });
                    _this2.resetValidationRules();
                    break;
                  case 2:
                    _this2.$swal({
                      icon: 'error',
                      title: 'Sign Up Failed',
                      text: 'The mobile number you are trying to use is already taken!',
                      timer: 3000,
                      confirmButtonText: 'Ok',
                      scrollbarPadding: false
                    });
                    _this2.resetValidationRules();
                    break;
                  case 3:
                    _this2.$swal({
                      icon: 'error',
                      title: 'Sign Up Failed',
                      text: 'The username you are trying to use is already taken!',
                      timer: 3000,
                      confirmButtonText: 'Ok',
                      scrollbarPadding: false
                    });
                    _this2.resetValidationRules();
                    break;
                  default:
                    break;
                }
              })["catch"](function (result) {});
            case 3:
              _context.next = 7;
              break;
            case 5:
              if (_this2.validationResetTimeout) {
                clearTimeout(_this2.validationResetTimeout);
              }
              _this2.validationResetTimeout = setTimeout(function () {
                _this2.resetValidationRules();
                _this2.validationResetTimeout = null;
              }, 3000);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    resetValidationRules: function resetValidationRules() {
      this.isFormSubmitted = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-layout", {
    attrs: {
      row: "",
      wrap: "",
      "justify-center": "",
      "align-center": ""
    }
  }, [_c("v-card", {
    staticClass: "mb-3 d-flex align-center",
    "class": {
      "px-5": _vm.$vuetify.breakpoint.smAndUp
    },
    attrs: {
      flat: "",
      color: "transparent",
      height: "50",
      width: "100%"
    }
  }, [_c("v-row", [_c("v-card-subtitle", {
    staticClass: "text-subtitle-1 ml-auto"
  }, [_vm._v("\n                    Already have an account?\n                    "), _c("router-link", {
    staticClass: "text-subtitle-1 text-decoration-none",
    attrs: {
      to: {
        name: "login"
      }
    }
  }, [_vm._v("Sign\n                        in "), _c("v-icon", {
    staticClass: "pb-1",
    attrs: {
      size: "15",
      color: "primary"
    }
  }, [_vm._v("mdi-arrow-right")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-stepper", {
    staticClass: "rounded-xl shadow",
    attrs: {
      width: _vm.stepWidth
    },
    model: {
      value: _vm.e1,
      callback: function callback($$v) {
        _vm.e1 = $$v;
      },
      expression: "e1"
    }
  }, [_c("v-card", {
    staticClass: "pt-6 pl-6 pr-6 pb-2 mb-1",
    attrs: {
      flat: ""
    }
  }, [_c("v-card-title", {
    staticClass: "pt-0 pl-0 grey--text text--darken-3 font-weight-bold text-sm-h6 text-md-h5"
  }, [_vm._v("Sign\n                    Up")]), _vm._v(" "), _c("v-card-subtitle", {
    staticClass: "pt-0 pl-0 text-sm-caption text-md-body-2"
  }, [_vm._v("Please fill out the fields to\n                    create\n                    your\n                    account.")])], 1), _vm._v(" "), _c("v-stepper-header", {
    attrs: {
      elevation: "0"
    }
  }, [_c("v-stepper-step", {
    attrs: {
      complete: _vm.e1 > 1,
      step: "1"
    }
  }, [_vm._v("\n                    Personal Details\n                ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      complete: _vm.e1 > 2,
      step: "2"
    }
  }, [_vm._v("\n                    Account Details\n                ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      step: "3"
    }
  }, [_vm._v("\n                    Confirm Password\n                ")])], 1), _vm._v(" "), _c("v-stepper-items", [_c("v-stepper-content", {
    attrs: {
      step: "1"
    }
  }, [_c("v-form", {
    ref: "form1",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.nextStep(2, "form1");
      }
    }
  }, [_c("v-card", {
    staticClass: "mt-2 pa-0",
    "class": {
      "mb-12": _vm.$vuetify.breakpoint.mdAndUp
    },
    attrs: {
      elevation: "0",
      height: "290"
    }
  }, [_c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.first_name : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "First Name",
      clearable: ""
    },
    model: {
      value: _vm.form.first_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "first_name", $$v);
      },
      expression: "form.first_name"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.last_name : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Last Name",
      clearable: ""
    },
    model: {
      value: _vm.form.last_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "last_name", $$v);
      },
      expression: "form.last_name"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.address : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Address",
      clearable: ""
    },
    model: {
      value: _vm.form.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.mobileno : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Mobile Number",
      clearable: ""
    },
    model: {
      value: _vm.form.mobileno,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "mobileno", $$v);
      },
      expression: "form.mobileno"
    }
  })], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      "no-gutters": ""
    }
  }, [_c("v-btn", {
    staticClass: "ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      depressed: "",
      color: "primary",
      large: _vm.$vuetify.breakpoint.mdAndUp,
      type: "submit"
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("\n                                Continue\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "2"
    }
  }, [_c("v-form", {
    ref: "form2",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.nextStep(3, "form2");
      }
    }
  }, [_c("v-card", {
    staticClass: "mt-2 pa-0",
    "class": {
      "mb-12": _vm.$vuetify.breakpoint.mdAndUp
    },
    attrs: {
      elevation: "0",
      height: "220"
    }
  }, [_c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.email : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Email Address",
      clearable: ""
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.username : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Username",
      clearable: ""
    },
    model: {
      value: _vm.form.username,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "username", $$v);
      },
      expression: "form.username"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: _defineProperty(_defineProperty({
      rules: _vm.isFormSubmitted ? _vm.rules.password : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Password",
      type: "password",
      "append-icon": !_vm.value1 ? "mdi-eye-off" : "mdi-eye"
    }, "type", !_vm.value1 ? "password" : "text"), "clearable", ""),
    on: {
      "click:append": function clickAppend() {
        return _vm.value1 = !_vm.value1;
      }
    },
    model: {
      value: _vm.form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  })], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      "no-gutters": ""
    }
  }, [_c("v-btn", {
    staticClass: "text-capitalize text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      text: "",
      color: "primary",
      large: _vm.$vuetify.breakpoint.mdAndUp
    },
    on: {
      click: _vm.prevStep
    }
  }, [_vm._v("\n                                Previous\n                            ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      depressed: "",
      color: "primary",
      large: _vm.$vuetify.breakpoint.mdAndUp,
      type: "submit"
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("\n                                Continue\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "3"
    }
  }, [_c("v-form", {
    ref: "form3",
    attrs: {
      "fast-fail": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm("form3");
      }
    }
  }, [_c("v-card", {
    staticClass: "mt-2 pa-0",
    "class": {
      "mb-12": _vm.$vuetify.breakpoint.mdAndUp
    },
    attrs: {
      elevation: "0",
      height: "220"
    }
  }, [_c("v-text-field", {
    attrs: _defineProperty(_defineProperty({
      rules: _vm.isFormSubmitted ? _vm.form.password === _vm.form.confirmpass ? [] : ["Password does not match"] : [],
      required: "",
      dense: _vm.$vuetify.breakpoint.smAndDown,
      filled: "",
      label: "Confirm Password",
      type: "password",
      "append-icon": !_vm.value2 ? "mdi-eye-off" : "mdi-eye"
    }, "type", !_vm.value2 ? "password" : "text"), "clearable", ""),
    on: {
      "click:append": function clickAppend() {
        return _vm.value2 = !_vm.value2;
      }
    },
    model: {
      value: _vm.form.confirmpass,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "confirmpass", $$v);
      },
      expression: "form.confirmpass"
    }
  })], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      "no-gutters": ""
    }
  }, [_c("v-btn", {
    staticClass: "text-capitalize text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      text: "",
      color: "primary",
      large: _vm.$vuetify.breakpoint.mdAndUp
    },
    on: {
      click: _vm.prevStep
    }
  }, [_vm._v("\n                                Previous\n                            ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto text-capitalize ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      depressed: "",
      color: "primary",
      large: _vm.$vuetify.breakpoint.mdAndUp,
      type: "submit"
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("\n                                Create Account\n                            ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-stepper__header[data-v-26179816] {\r\n    box-shadow: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_26179816_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_26179816_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_26179816_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/signup/SignUp.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/signup/SignUp.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=26179816&scoped=true */ "./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js */ "./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js");
/* harmony import */ var _SignUp_vue_vue_type_style_index_0_id_26179816_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css */ "./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "26179816",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/signup/SignUp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_26179816_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=template&id=26179816&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=template&id=26179816&scoped=true");


/***/ }),

/***/ "./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_26179816_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/signup/SignUp.vue?vue&type=style&index=0&id=26179816&scoped=true&lang=css");


/***/ })

}]);