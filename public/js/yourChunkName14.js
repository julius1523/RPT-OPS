"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["yourChunkName14"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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
      title: "Register Property"
    };
  },
  data: function data() {
    return {
      pageBreadcrumbs: [{
        text: 'Home',
        to: '/index'
      }, {
        text: 'Current Page',
        to: '/registerproperty'
      }],
      prevDialog: false,
      thumbnails: [],
      previewImage: null,
      previewName: null,
      form: {
        td_no: null,
        pin: null,
        last_orno: null,
        last_amt_paid: null,
        relationship: null,
        email: null,
        mobileno: null,
        property_type: null,
        files: []
      },
      optionType: undefined,
      rules: {
        td_no: [function (v) {
          return !!v || 'This is required';
        }, function (v) {
          return /^[0-9]{2}-[0-9]{4}-[0-9]{5}$/.test(v) || 'This must be valid';
        }],
        pin: [function (v) {
          return !!v || 'This is required';
        }, function (v) {
          return /^[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2}(-[0-9]{4})?$/.test(v) || 'This must be valid';
        }],
        last_orno: [function (v) {
          return !!v || 'This is required';
        }, function (v) {
          return /^[0-9]+$/.test(v) || 'This must be valid';
        }],
        last_amt_paid: [function (v) {
          return !!v || 'This is required';
        }],
        relationship: [function (v) {
          return !!v || 'This is required';
        }],
        email: [function (v) {
          return !!v || "This is required";
        }, function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v) || "This must be valid";
        }],
        mobileno: [function (v) {
          return !!v || 'This is required';
        }, function (v) {
          return /^\d{11}$/i.test(v) || 'This must be valid';
        }],
        property_type: [function (v) {
          return !!v || 'This is required';
        }]
      },
      isFormSubmitted: false,
      isTextFieldFocused: false
    };
  },
  computed: {
    selectOption: function selectOption() {
      this.form = Object.fromEntries(Object.keys(this.form).map(function (key) {
        return [key, null];
      }));
      return this.optionType !== undefined;
    },
    withOption: function withOption() {
      this.resetValidationRules();
      return this.optionType !== 'with';
    },
    withoutOption: function withoutOption() {
      this.resetValidationRules();
      return this.optionType !== 'without';
    }
  },
  methods: {
    resetDialog: function resetDialog() {
      this.previewImage = null;
    },
    closePrevDialog: function closePrevDialog() {
      this.prevDialog = false;
      this.resetDialog();
    },
    previewFile: function previewFile(index) {
      var file = null;
      file = this.form.files[index];
      if (file && file.type.startsWith('image/')) {
        this.previewImage = URL.createObjectURL(file);
      } else {
        this.previewImage = '/img/blank.svg';
      }
      this.previewName = file.name;
      this.prevDialog = true;
    },
    fileInput: function fileInput() {
      this.$refs.fileRef.click();
    },
    fileUpload: function fileUpload(event) {
      var _this = this;
      if (event.target.files && event.target.files.length > 0) {
        var selectedFiles = Array.from(event.target.files);
        var allowedExtensions = /\.(png|jpg|jpeg|pdf|doc|docx)$/i;
        var maxFileSize = 2 * 1024 * 1024;
        var isFileExtension = selectedFiles.every(function (file) {
          return allowedExtensions.test(file.name);
        });
        var isMaximumSize = selectedFiles.every(function (file) {
          return file.size <= maxFileSize;
        });
        if (isFileExtension && isMaximumSize) {
          var _this$form$files;
          if (!this.form.files) {
            this.form.files = [];
          }
          (_this$form$files = this.form.files).push.apply(_this$form$files, selectedFiles);
          selectedFiles.forEach(function (file) {
            if (file && file.type.startsWith('image/')) {
              var thumbnailUrl = URL.createObjectURL(file);
              _this.thumbnails.push(thumbnailUrl);
            } else if (file && file.type.startsWith('application/pdf')) {
              _this.thumbnails.push('/img/pdf.svg');
            } else {
              _this.thumbnails.push('/img/doc.svg');
            }
          });
          event.target.value = '';
        } else if (!isFileExtension) {
          this.$root.$emit('show-global-snackbar', {
            message: 'Only png/jpg/jpeg/pdf/doc/docx file extensions are allowed!',
            icon: 'mdi-information'
          });
          event.target.value = '';
        } else if (!isMaximumSize) {
          this.$root.$emit('show-global-snackbar', {
            message: 'Please upload a file with maximum size of 2MB!',
            icon: 'mdi-information'
          });
          event.target.value = '';
        }
      }
    },
    handleDrop: function handleDrop(event) {
      var _this2 = this;
      event.preventDefault();
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        var selectedFiles = Array.from(event.dataTransfer.files);
        var allowedExtensions = /\.(png|jpg|jpeg|pdf|doc)$/i;
        var maxFileSize = 2 * 1024 * 1024;
        var isFileExtension = selectedFiles.every(function (file) {
          return allowedExtensions.test(file.name);
        });
        var isMaximumSize = selectedFiles.every(function (file) {
          return file.size <= maxFileSize;
        });
        if (isFileExtension && isMaximumSize) {
          var _this$form$files2;
          if (!this.form.files) {
            this.form.files = [];
          }
          (_this$form$files2 = this.form.files).push.apply(_this$form$files2, selectedFiles);
          selectedFiles.forEach(function (file) {
            if (file && file.type.startsWith('image/')) {
              var thumbnailUrl = URL.createObjectURL(file);
              _this2.thumbnails.push(thumbnailUrl);
            } else if (file && file.type.startsWith('application/pdf')) {
              _this2.thumbnails.push('/img/pdf.svg');
            } else {
              _this2.thumbnails.push('/img/doc.svg');
            }
          });
          event.dataTransfer.value = '';
        } else if (!isFileExtension) {
          this.$root.$emit('show-global-snackbar', {
            message: 'Only png/jpg/jpeg/pdf/doc/docx file extensions are allowed!',
            icon: 'mdi-information'
          });
          event.dataTransfer.value = '';
        } else if (!isMaximumSize) {
          this.$root.$emit('show-global-snackbar', {
            message: 'Please upload a file with maximum size of 2MB!',
            icon: 'mdi-information'
          });
          event.dataTransfer.value = '';
        }
      }
    },
    deleteFile: function deleteFile(index) {
      this.form.files.splice(index, 1);
      this.thumbnails.splice(index, 1);
      this.resetFile();
    },
    deleteAllFiles: function deleteAllFiles() {
      this.form.files = [];
      this.thumbnails = [];
      this.resetFile();
    },
    resetFile: function resetFile() {
      var fileInput = this.$refs.fileRef;
      if (fileInput) {
        fileInput.value = '';
      }
    },
    save: function save() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this3.$refs.form.validate()) {
                _context.next = 19;
                break;
              }
              if (!(_this3.form.files != null)) {
                _context.next = 16;
                break;
              }
              formData = new FormData();
              formData.append('td_no', _this3.form.td_no);
              formData.append('pin', _this3.form.pin);
              formData.append('last_orno', _this3.form.last_orno);
              formData.append('last_amt_paid', _this3.form.last_amt_paid);
              formData.append('relationship', _this3.form.relationship);
              formData.append('email', _this3.form.email);
              formData.append('mobileno', _this3.form.mobileno);
              formData.append('property_type', _this3.form.property_type);
              if (_this3.form.files !== null) {
                _this3.form.files.forEach(function (file) {
                  formData.append('files[]', file);
                });
              }
              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/records/registerProperty", formData).then(function (result) {
                switch (result.data.val) {
                  case 0:
                    _this3.$swal({
                      icon: result.data.icon,
                      title: result.data.title,
                      text: result.data.text,
                      timer: 6000,
                      confirmButtonText: 'Ok',
                      scrollbarPadding: false
                    });
                    _this3.$refs.form.reset();
                    _this3.deleteAllFiles();
                    break;
                  default:
                    break;
                }
              })["catch"](function (result) {});
            case 14:
              _context.next = 17;
              break;
            case 16:
              _this3.$root.$emit('show-global-snackbar', {
                message: 'Please upload at least one file!',
                icon: 'mdi-alert-circle'
              });
            case 17:
              _context.next = 22;
              break;
            case 19:
              _this3.scrollToError();
              if (_this3.validationResetTimeout) {
                clearTimeout(_this3.validationResetTimeout);
              }
              _this3.validationResetTimeout = setTimeout(function () {
                _this3.resetValidationRules();
                _this3.validationResetTimeout = null;
              }, 3000);
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    scrollToError: function scrollToError() {
      var _this4 = this;
      this.$nextTick(function () {
        _this4.$refs.form.$el.querySelector('.v-input--has-state .error--text').scrollIntoView({
          block: "center",
          behavior: "smooth"
        });
      });
    },
    resetValidationRules: function resetValidationRules() {
      this.isFormSubmitted = false;
    },
    setTextFieldFocused: function setTextFieldFocused(value) {
      this.isTextFieldFocused = value;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.thumbnails.forEach(function (url) {
      return URL.revokeObjectURL(url);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "1050px",
      scrollable: ""
    },
    on: {
      input: _vm.resetDialog
    },
    model: {
      value: _vm.prevDialog,
      callback: function callback($$v) {
        _vm.prevDialog = $$v;
      },
      expression: "prevDialog"
    }
  }, [_c("v-card", {
    staticClass: "rounded-lg"
  }, [_c("v-toolbar", {
    staticClass: "p-0",
    attrs: {
      dense: "",
      flat: ""
    }
  }, [_c("span", {
    staticClass: "grey--text text--darken-3 text-subtitle-2 font-weight-bold text-truncate"
  }, [_vm._v("\n                    " + _vm._s(this.previewName))]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      fab: "",
      depressed: "",
      "x-small": "",
      color: "blue-grey lighten-5"
    },
    on: {
      click: _vm.closePrevDialog
    }
  }, [_c("v-icon", {
    attrs: {
      size: "20",
      color: "grey darken-2"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("v-card-text", {
    staticClass: "p-0"
  }, [this.previewImage ? _c("v-img", {
    staticClass: "border",
    attrs: {
      src: _vm.previewImage,
      contain: "",
      height: "100%",
      width: "100%"
    }
  }) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "pa-4 rounded-xl shadow"
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Select\n            Option")]), _vm._v(" "), _c("v-card-subtitle", {
    staticClass: "pt-0 pl-0 text-sm-caption text-md-body-2 text-left"
  }, [_vm._v("Do you have your previous\n            official\n            receipt (OR)?")]), _vm._v(" "), _c("v-item-group", {
    staticClass: "mx-auto",
    model: {
      value: _vm.optionType,
      callback: function callback($$v) {
        _vm.optionType = $$v;
      },
      expression: "optionType"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("v-item", {
    attrs: {
      value: "with"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var active = _ref.active,
          toggle = _ref.toggle;
        return [_c("v-card", {
          staticClass: "rounded-xl pa-1",
          staticStyle: {
            border: "0.20rem solid #1976d2",
            "margin-right": "8px"
          },
          attrs: {
            flat: "",
            dark: active ? true : false,
            color: active ? "primary" : "",
            width: "100%"
          },
          on: {
            click: toggle
          }
        }, [_c("v-row", {
          attrs: {
            "no-gutters": ""
          }
        }, [_c("v-col", {
          staticClass: "my-auto text-center pt-2 py-sm-2",
          attrs: {
            cols: "12",
            sm: "3",
            md: "4"
          }
        }, [_c("v-icon", {
          staticStyle: {
            "font-size": "clamp(30px, 8vw, 110px)"
          },
          attrs: {
            color: active ? "" : "primary",
            right: _vm.$vuetify.breakpoint.smAndUp
          }
        }, [_vm._v("mdi-receipt-text-check-outline")])], 1), _vm._v(" "), _c("v-col", {
          staticClass: "my-auto",
          attrs: {
            cols: "12",
            sm: "9",
            md: "8"
          }
        }, [_c("v-card-title", {
          staticClass: "text-break text-md-subtitle-1 text-body-2 font-weight-bold px-0",
          "class": {
            "text-center justify-center": _vm.$vuetify.breakpoint.xsOnly
          }
        }, [_vm._v("\n                                    Yes, I do\n                                ")]), _vm._v(" "), _c("v-card-subtitle", {
          staticClass: "text-break px-0",
          "class": {
            "text-center": _vm.$vuetify.breakpoint.xsOnly
          }
        }, [_vm._v("\n                                    (With Previous OR)\n                                ")])], 1)], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _c("v-item", {
    attrs: {
      value: "without"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var active = _ref2.active,
          toggle = _ref2.toggle;
        return [_c("v-card", {
          staticClass: "rounded-xl pa-1",
          staticStyle: {
            border: "0.20rem solid #1976d2",
            "margin-left": "8px"
          },
          attrs: {
            flat: "",
            dark: active ? true : false,
            color: active ? "primary" : "",
            width: "100%"
          },
          on: {
            click: toggle
          }
        }, [_c("v-row", {
          attrs: {
            "no-gutters": ""
          }
        }, [_c("v-col", {
          staticClass: "my-auto text-center pt-2 py-sm-2",
          attrs: {
            cols: "12",
            sm: "3",
            md: "4"
          }
        }, [_c("v-icon", {
          staticStyle: {
            "font-size": "clamp(30px, 8vw, 110px)"
          },
          attrs: {
            color: active ? "" : "primary",
            right: _vm.$vuetify.breakpoint.smAndUp
          }
        }, [_vm._v("mdi-receipt-text-remove-outline")])], 1), _vm._v(" "), _c("v-col", {
          staticClass: "my-auto",
          attrs: {
            cols: "12",
            sm: "9",
            md: "8"
          }
        }, [_c("v-card-title", {
          staticClass: "text-break text-md-subtitle-1 text-body-2 font-weight-bold px-0",
          "class": {
            "text-center justify-center": _vm.$vuetify.breakpoint.xsOnly
          }
        }, [_vm._v("\n                                    No, I don't\n                                ")]), _vm._v(" "), _c("v-card-subtitle", {
          staticClass: "text-break px-0",
          "class": {
            "text-center": _vm.$vuetify.breakpoint.xsOnly
          }
        }, [_vm._v("\n                                    (Without Previous OR)\n                                ")])], 1)], 1)], 1)];
      }
    }])
  })], 1)])], 1), _vm._v(" "), _vm.selectOption ? _c("v-card", {
    staticClass: "pa-4 rounded-xl shadow mt-3"
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Register\n            Property")]), _vm._v(" "), _c("v-card-subtitle", {
    staticClass: "pt-0 pl-0 text-sm-caption text-md-body-2 text-left"
  }, [_vm._v("Fill out the\n            fields to\n            register a property")]), _vm._v(" "), _c("v-form", {
    ref: "form",
    attrs: {
      "fast-fail": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "6" : "12",
      md: _vm.withOption ? "8" : "12"
    }
  }, [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "6" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      rules: _vm.isFormSubmitted && _vm.withoutOption ? _vm.rules.td_no : [],
      dense: "",
      label: _vm.withOption ? "Tax Dec. Number (Optional)" : "Tax Dec. Number",
      prefix: _vm.isTextFieldFocused ? "AA-" : "",
      clearable: ""
    },
    on: {
      focus: function focus($event) {
        return _vm.setTextFieldFocused(true);
      },
      blur: function blur($event) {
        return _vm.setTextFieldFocused(false);
      }
    },
    model: {
      value: _vm.form.td_no,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "td_no", $$v);
      },
      expression: "form.td_no"
    }
  })], 1), _vm._v(" "), _vm.withoutOption ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "12" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      rules: _vm.isFormSubmitted ? _vm.rules.pin : [],
      dense: "",
      label: "PIN",
      clearable: ""
    },
    model: {
      value: _vm.form.pin,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "pin", $$v);
      },
      expression: "form.pin"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.withoutOption ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "12" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      rules: _vm.isFormSubmitted ? _vm.rules.last_orno : [],
      dense: "",
      label: "Last Official Receipt Number",
      clearable: ""
    },
    model: {
      value: _vm.form.last_orno,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "last_orno", $$v);
      },
      expression: "form.last_orno"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.withoutOption ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "12" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      rules: _vm.isFormSubmitted ? _vm.rules.last_amt_paid : [],
      dense: _vm.$vuetify.breakpoint.smAndDown,
      label: "Amount Paid",
      clearable: "",
      type: "number"
    },
    model: {
      value: _vm.form.last_amt_paid,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "last_amt_paid", $$v);
      },
      expression: "form.last_amt_paid"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "6" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      dense: "",
      rules: _vm.isFormSubmitted && _vm.withoutOption ? _vm.rules.relationship : [],
      label: _vm.withOption ? "Relationship to Owner (Optional)" : "Relationship to Owner",
      clearable: ""
    },
    model: {
      value: _vm.form.relationship,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "relationship", $$v);
      },
      expression: "form.relationship"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "6" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      dense: "",
      rules: _vm.isFormSubmitted ? _vm.rules.email : [],
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
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "6" : "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: "",
      dense: "",
      rules: _vm.isFormSubmitted ? _vm.rules.mobileno : [],
      label: "Mobile No.",
      clearable: ""
    },
    model: {
      value: _vm.form.mobileno,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "mobileno", $$v);
      },
      expression: "form.mobileno"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: _vm.withOption ? "12" : "6",
      md: _vm.withOption ? "6" : "4"
    }
  }, [_c("v-select", {
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.property_type : [],
      label: "SOA (Property Type)",
      dense: "",
      filled: "",
      items: ["Land", "Building", "Machinery", "Land & Building"]
    },
    model: {
      value: _vm.form.property_type,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "property_type", $$v);
      },
      expression: "form.property_type"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), !_vm.withoutOption ? [_c("v-col", {
    staticClass: "order-sm-last order-first mb-4",
    attrs: {
      cols: "12",
      sm: "6",
      md: "4",
      align: "center"
    }
  }, [_c("v-card", {
    staticClass: "rounded-lg text-muted",
    staticStyle: {
      border: "0.1rem solid #42b883",
      "background-color": "#f9f9f9"
    },
    attrs: {
      flat: ""
    }
  }, [_c("v-card-title", {
    staticClass: "text-subtitle-1 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Required\n                                Documents")]), _vm._v(" "), _c("v-card-subtitle", {
    staticClass: "text-left"
  }, [_vm._v("Please upload any of the following\n                                documents:")]), _vm._v(" "), _c("ul", {
    staticClass: "text-left ml-5 pb-4"
  }, [_c("li", [_vm._v("Tax Declaration")]), _vm._v(" "), _c("li", [_vm._v("Transfer Certificate of Title")]), _vm._v(" "), _c("li", [_vm._v("Statement of Account")]), _vm._v(" "), _c("li", {
    staticClass: "mt-3"
  }, [_vm._v("Contract to Sell")]), _vm._v(" "), _c("li", [_vm._v("Deed of Sale")]), _vm._v(" "), _c("li", [_vm._v("Deed of Conditional Sale")]), _vm._v(" "), _c("li", {
    staticClass: "mt-3"
  }, [_vm._v("Tax Clearance")]), _vm._v(" "), _c("li", [_vm._v("Notice of Delinquency")]), _vm._v(" "), _c("li", [_vm._v("Notice of Assessment")])])], 1)], 1)] : _vm._e()], 2), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("input", {
    ref: "fileRef",
    staticClass: "d-none",
    attrs: {
      type: "file",
      id: "fileInput",
      multiple: "",
      required: ""
    },
    on: {
      change: _vm.fileUpload
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize mb-5 rounded-lg",
    staticStyle: {
      border: "3px dashed #E0E0E0",
      "background-color": "white"
    },
    attrs: {
      block: "",
      depressed: "",
      height: "80px"
    },
    on: {
      click: _vm.fileInput,
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.handleDrop.apply(null, arguments);
      },
      dragover: function dragover($event) {
        $event.preventDefault();
      }
    }
  }, [_c("v-icon", {
    attrs: {
      size: "26",
      left: "",
      color: "grey darken-2"
    }
  }, [_vm._v("mdi-upload")]), _vm._v(" "), _c("span", {
    staticClass: "h6 mb-0 grey--text text--darken-2"
  }, [_vm._v("Drag Files or Browse")])], 1), _vm._v(" "), _vm.form.files && _vm.form.files.length > 0 ? _c("div", [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-card-subtitle", {
    staticClass: "font-weight-bold px-0 py-2"
  }, [_vm._v("Uploaded\n                                files (" + _vm._s(_vm.form.files.length) + "):")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _vm.form.files && _vm.form.files.length > 1 ? _c("a", {
    staticClass: "font-weight-bold text-subtitle-2 text-decoration-none",
    staticStyle: {
      color: "#D32F2F"
    },
    on: {
      click: _vm.deleteAllFiles
    }
  }, [_c("span", [_vm._v("Clear All")])]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "custom-slide-group"
  }, [_c("v-slide-group", {
    staticClass: "my-3",
    attrs: {
      multiple: "",
      "show-arrows": false,
      "prev-icon": "mdi-chevron-left-circle",
      "next-icon": "mdi-chevron-right-circle"
    }
  }, _vm._l(_vm.form.files, function (file, index) {
    return _c("v-slide-item", {
      key: index
    }, [_c("div", {
      staticClass: "mt-4 mr-4 mb-4",
      staticStyle: {
        position: "relative",
        width: "clamp(90px, 8vw, 140px)"
      }
    }, [_c("v-img", {
      staticClass: "border rounded-lg",
      staticStyle: {
        height: "clamp(90px, 8vw, 140px)",
        cursor: "pointer"
      },
      attrs: {
        src: _vm.thumbnails[index],
        contain: ""
      },
      on: {
        click: function click($event) {
          return _vm.previewFile(index);
        }
      }
    }), _vm._v(" "), _c("v-btn", {
      staticStyle: {
        top: "-10px",
        right: "-10px"
      },
      attrs: {
        depressed: "",
        fab: "",
        dark: "",
        height: "25px",
        width: "25px",
        absolute: "",
        color: "red darken-2"
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c("v-icon", {
      attrs: {
        size: "25"
      }
    }, [_vm._v("mdi-minus")])], 1)], 1)]);
  }), 1)], 1)]) : _vm._e(), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize font-weight-bold text-subtitle-1 rounded-lg",
    attrs: {
      type: "submit",
      depressed: "",
      color: "primary",
      large: "",
      "x-large": _vm.$vuetify.breakpoint.mdAndUp,
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/records/RegisterProperty.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/records/RegisterProperty.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterProperty.vue?vue&type=template&id=02558bce */ "./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce");
/* harmony import */ var _RegisterProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterProperty.vue?vue&type=script&lang=js */ "./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/records/RegisterProperty.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterProperty.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterProperty_vue_vue_type_template_id_02558bce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterProperty.vue?vue&type=template&id=02558bce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/RegisterProperty.vue?vue&type=template&id=02558bce");


/***/ })

}]);