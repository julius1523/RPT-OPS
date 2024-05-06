"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["yourChunkName12"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
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
      title: "List of Property"
    };
  },
  data: function data() {
    return {
      thumbnails: [],
      registerType: null,
      registerTypeItems: ["With OR", "Without OR"],
      currentattachments: null,
      value: 0,
      pageBreadcrumbs: [{
        text: "Home",
        to: "/index"
      }, {
        text: "Current Page",
        to: "/listofproperty"
      }],
      rules: {
        nickname: [function (v) {
          return !!v || "Alias is required";
        }]
      },
      loadTable0: false,
      loadTable1: false,
      isFormSubmitted: false,
      attachmentsDialog: false,
      prevDialog: false,
      previewImage: null,
      previewName: null,
      nicknameDialog: false,
      search0: null,
      search1: null,
      search2: null,
      search3: null,
      info_tdno: null,
      info_pin: null,
      info_propown: null,
      info_propaddr: null,
      table1Select: [],
      temp_table0: [],
      table0: [],
      table1: [],
      table2: [],
      table3: [],
      totbasic: "0.00",
      totsef: "0.00",
      totdisc: "0.00",
      totpenalty: "0.00",
      tottax: "0.00",
      form1: {
        id: null,
        application_no: null,
        files: [],
        upload: [],
        deleted_files: []
      },
      form2: {
        id: null,
        nickname: null
      },
      currentnickname: {
        id: null,
        nickname: null
      },
      pendingHeaders: [{
        text: "Application No.",
        value: "application_no",
        align: "center"
      }, {
        text: "Status",
        value: "is_approve",
        align: "center"
      }, {
        text: "Registration Type",
        value: "register_type",
        align: "left"
      }, {
        text: "Remarks",
        value: "remarks",
        align: "left"
      }, {
        text: "Date Registered",
        value: "submit_date",
        align: "left"
      }, {
        text: "Action",
        value: "id",
        align: "center",
        sortable: false,
        filterable: false
      }],
      recordsHeaders: [{
        text: "TD No.",
        value: "td_no",
        align: "left"
      }, {
        text: "PIN",
        value: "pin",
        align: "left"
      }, {
        text: "Kind",
        value: "property_type",
        align: "left"
      }, {
        text: "Owner Name",
        value: "owner_name",
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
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('auth', ['isAuthenticated'])), {}, {
    properties: function properties() {
      if (!this.table1 || !this.table1.data) {
        return [];
      }
      return this.table1.data.map(function (x) {
        return _objectSpread(_objectSpread({}, x), {}, {
          isSelectable: x.is_requested === '0'
        });
      });
    },
    isComputeButtonDisabled: function isComputeButtonDisabled() {
      return this.table1Select.length === 0;
    },
    computedCols: function computedCols() {
      return this.$vuetify.breakpoint.xsOnly ? 6 : "";
    }
  }),
  created: function created() {
    if (this.isAuthenticated) {
      this.getPendingProp();
      this.getRegisteredProperty();
    }
  },
  methods: {
    resetDialog: function resetDialog() {
      this.previewImage = null;
    },
    previewFile: function previewFile(index, type) {
      var file = null;
      var appno = null;
      switch (type) {
        case "file":
          file = this.form1.files[index];
          appno = this.form1.application_no;
          var checkExtensions = /\.(png|jpg|jpeg|pdf|doc|docx)$/i;
          if (checkExtensions.test(file)) {
            this.previewImage = "storage/uploads/" + appno + "/" + file;
          } else {
            this.previewImage = null;
          }
          this.previewName = this.baseName(file);
          break;
        case "upload":
          file = this.form1.upload[index];
          if (file && file.type.startsWith('image/')) {
            this.previewImage = URL.createObjectURL(file);
          } else {
            this.previewImage = '/img/blank.svg';
          }
          this.previewName = file.name;
          break;
        default:
          break;
      }
      this.prevDialog = true;
    },
    closePrevDialog: function closePrevDialog() {
      this.prevDialog = false;
      this.resetDialog();
    },
    deleteFile: function deleteFile(index, type) {
      var _this = this;
      var deletedFile = null;
      switch (type) {
        case "file":
          deletedFile = this.form1.files[index];
          this.$swal({
            icon: 'warning',
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete ' + this.baseName(deletedFile) + '?',
            showCancelButton: true,
            timer: 3000,
            confirmButtonText: 'Continue',
            cancelButtonText: 'Cancel',
            scrollbarPadding: false
          }).then(function (result) {
            if (result.value) {
              _this.form1.files.splice(index, 1);
              _this.form1.deleted_files.push(deletedFile);
            }
          });
          break;
        case "upload":
          deletedFile = this.form1.upload[index];
          this.form1.upload.splice(index, 1);
          this.thumbnails.splice(index, 1);
          this.resetFile();
          break;
        default:
          break;
      }
    },
    deleteAllFiles: function deleteAllFiles() {
      this.form1.upload = [];
      this.thumbnails = [];
      this.resetFile();
    },
    resetFile: function resetFile() {
      var fileInput = this.$refs.fileRef;
      if (fileInput) {
        fileInput.value = '';
      }
    },
    fileInput: function fileInput() {
      this.$refs.fileRef.click();
    },
    fileUpload: function fileUpload(event) {
      var _this2 = this;
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
          var _this$form1$upload;
          if (!this.form1.upload) {
            this.form1.upload = [];
          }
          (_this$form1$upload = this.form1.upload).push.apply(_this$form1$upload, selectedFiles);
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
      var _this3 = this;
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
          var _this$form1$upload2;
          if (!this.form1.upload) {
            this.form1.upload = [];
          }
          (_this$form1$upload2 = this.form1.upload).push.apply(_this$form1$upload2, selectedFiles);
          selectedFiles.forEach(function (file) {
            if (file && file.type.startsWith('image/')) {
              var thumbnailUrl = URL.createObjectURL(file);
              _this3.thumbnails.push(thumbnailUrl);
            } else if (file && file.type.startsWith('application/pdf')) {
              _this3.thumbnails.push('/img/pdf.svg');
            } else {
              _this3.thumbnails.push('/img/doc.svg');
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
    sumField: function sumField(key) {
      if (!this.table2 || !this.table2.data) {
        var val = 0;
        return val.toFixed(2);
      }
      return this.table2.data.reduce(function (total, item) {
        return total + (parseFloat(item[key]) || 0);
      }, 0).toFixed(2);
    },
    updateAttachment: function updateAttachment() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData, i, _i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this4.form1.upload.length !== 0 || _this4.form1.deleted_files.length !== 0)) {
                _context.next = 10;
                break;
              }
              formData = new FormData();
              formData.append("id", _this4.form1.id);
              formData.append("application_no", _this4.form1.application_no);
              for (i = 0; i < _this4.form1.upload.length; i++) {
                formData.append("upload[]", _this4.form1.upload[i]);
              }
              for (_i = 0; _i < _this4.form1.deleted_files.length; _i++) {
                formData.append("deleted_files[]", _this4.form1.deleted_files[_i]);
              }
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/records/updateAttachment", formData).then(function (response) {
                _this4.$swal({
                  icon: response.data.icon,
                  title: response.data.title,
                  text: response.data.text,
                  timer: 3000,
                  confirmButtonText: "Ok",
                  scrollbarPadding: false
                });
                _this4.getPendingProp();
                _this4.closeAttachmentsDialog();
              })["catch"](function (error) {});
            case 8:
              _context.next = 12;
              break;
            case 10:
              _this4.closeAttachmentsDialog();
              _this4.$root.$emit('show-global-snackbar', {
                message: 'No changes made!',
                icon: 'mdi-information'
              });
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    cancelRegister: function cancelRegister(item) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this5.$swal({
                icon: 'warning',
                title: 'Confirm Cancel',
                html: "Are you sure you want to cancel your registration for this property? <br/><br/> Application No.: ".concat(item.application_no),
                showCancelButton: true,
                confirmButtonText: 'Yes, cancel it',
                cancelButtonText: 'No',
                scrollbarPadding: false
              });
            case 2:
              result = _context2.sent;
              if (result.value) {
                axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/records/cancelRegister", {
                  id: item.id
                }).then(function (response) {
                  _this5.$swal({
                    icon: response.data.icon,
                    title: response.data.title,
                    text: response.data.text,
                    timer: 3000,
                    confirmButtonText: "Ok",
                    scrollbarPadding: false
                  });
                  _this5.getPendingProp();
                })["catch"](function (error) {});
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    updateNick: function updateNick() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this6.compare()) {
                _context3.next = 4;
                break;
              }
              _this6.$root.$emit("show-global-snackbar", {
                message: "No changes have been made.",
                icon: "mdi-information"
              });
              _this6.closeNicknameDialog();
              return _context3.abrupt("return");
            case 4:
              if (!_this6.$refs.form2.validate()) {
                _context3.next = 10;
                break;
              }
              _this6.loadTable1 = true;
              _context3.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/records/updatenick", _this6.form2).then(function (response) {
                _this6.$swal({
                  icon: response.data.icon,
                  title: response.data.title,
                  text: response.data.text,
                  timer: 3000,
                  confirmButtonText: "Ok",
                  scrollbarPadding: false
                });
                _this6.loadTable1 = false;
                _this6.getRegisteredProperty();
                _this6.closeNicknameDialog();
              })["catch"](function (error) {});
            case 8:
              _context3.next = 12;
              break;
            case 10:
              if (_this6.validationResetTimeout) {
                clearTimeout(_this6.validationResetTimeout);
              }
              _this6.validationResetTimeout = setTimeout(function () {
                _this6.resetValidationRules();
                _this6.validationResetTimeout = null;
              }, 3000);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getPendingProp: function getPendingProp() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this7.loadTable0 = true;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/records/getRegisterPending", {
                params: {
                  registerType: _this7.registerType
                }
              }).then(function (result) {
                if (_this7.temp_table0.length === 0 || _this7.temp_table0.data.length === 0) {
                  _this7.temp_table0 = result.data;
                }
                _this7.table0 = result.data;
                _this7.loadTable0 = false;
              })["catch"](function (result) {});
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getRegisteredProperty: function getRegisteredProperty() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this8.loadTable1 = true;
              _context5.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/records/getRegisteredProperty").then(function (result) {
                _this8.table1 = result.data;
                _this8.loadTable1 = false;
              })["catch"](function (result) {});
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    requestSOA: function requestSOA() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/soa/requestSOA", _this9.table1Select).then(function (result) {
                _this9.$swal({
                  icon: result.data.icon,
                  title: result.data.title,
                  text: result.data.text,
                  timer: 3000,
                  confirmButtonText: 'Ok',
                  scrollbarPadding: false
                });
                _this9.getRegisteredProperty();
                _this9.table1Select = [];
              })["catch"](function (result) {});
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    editAttachment: function editAttachment(row) {
      this.form1.upload = [];
      this.form1.deleted_files = [];
      this.currentattachments = JSON.parse(JSON.stringify(row));
      this.form1.id = row.id;
      this.form1.application_no = row.application_no;
      this.form1.files = JSON.parse(row.files);
      this.attachmentsDialog = true;
    },
    baseName: function baseName(str) {
      var base = new String(str).substring(str.lastIndexOf("/") + 1);
      return base;
    },
    editNickname: function editNickname(row) {
      this.currentnickname = JSON.parse(JSON.stringify(row));
      this.form2.id = row.id;
      this.form2.nickname = row.nickname;
      this.currentnickname.nickname = this.form2.nickname;
      this.nicknameDialog = true;
    },
    compare: function compare() {
      return this.form2.nickname !== this.currentnickname.nickname;
    },
    computeTotals: function computeTotals() {
      this.totbasic = Number(this.sumField("bsc_tax")).toLocaleString("en", {
        minimumFractionDigits: 2
      });
      this.totsef = Number(this.sumField("sef_tax")).toLocaleString("en", {
        minimumFractionDigits: 2
      });
      this.totdisc = Number(this.sumField("discount")).toLocaleString("en", {
        minimumFractionDigits: 2
      });
    },
    closeAttachmentsDialog: function closeAttachmentsDialog() {
      this.attachmentsDialog = false;
    },
    closeNicknameDialog: function closeNicknameDialog() {
      this.nicknameDialog = false;
    },
    statusColor: function statusColor(status) {
      return status === "For Approval" ? "orange lighten-4" : "";
    },
    resetValidationRules: function resetValidationRules() {
      this.isFormSubmitted = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.thumbnails.forEach(function (url) {
      return URL.revokeObjectURL(url);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
      "max-width": "550px",
      scrollable: ""
    },
    model: {
      value: _vm.attachmentsDialog,
      callback: function callback($$v) {
        _vm.attachmentsDialog = $$v;
      },
      expression: "attachmentsDialog"
    }
  }, [_c("v-form", {
    ref: "form1",
    attrs: {
      "fast-fail": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateAttachment.apply(null, arguments);
      }
    }
  }, [_c("v-card", [_c("v-toolbar", {
    attrs: {
      flat: ""
    }
  }, [_c("span", {
    staticClass: "grey--text text--darken-3 text-h6 font-weight-bold"
  }, [_vm._v("My Attachments")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      fab: "",
      depressed: "",
      small: "",
      color: "blue-grey lighten-5"
    },
    on: {
      click: _vm.closeAttachmentsDialog
    }
  }, [_c("v-icon", {
    attrs: {
      size: "27",
      color: "grey darken-2"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5",
    staticStyle: {
      height: "auto"
    }
  }, [_c("v-card", {
    staticClass: "pa-3 rounded-lg",
    attrs: {
      outlined: ""
    }
  }, [_c("h6", {
    staticClass: "font-weight-bold mb-3"
  }, [_vm._v("Files (" + _vm._s(_vm.form1.files.length) + "):")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-0"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column"
  }, _vm._l(_vm.form1.files, function (file, index) {
    return _c("div", {
      key: index,
      staticClass: "px-0",
      attrs: {
        cols: "12"
      }
    }, [_c("div", {
      staticClass: "d-flex flex-row mb-2 align-center"
    }, [_c("div", {
      staticClass: "flex-grow-1 text-truncate"
    }, [_c("a", {
      staticClass: "text-decoration-none",
      on: {
        click: function click($event) {
          return _vm.previewFile(index, "file");
        }
      }
    }, [_vm._v(_vm._s(_vm.baseName(file)))])]), _vm._v(" "), _c("div", {
      staticClass: "flex-grow-0 ml-2"
    }, [_c("v-btn", {
      staticClass: "text-capitalize text-white rounded-lg",
      attrs: {
        depressed: "",
        color: "red",
        outlined: "",
        small: "",
        disabled: _vm.form1.files.length === 1
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile(index, "file");
        }
      }
    }, [_c("v-icon", {
      attrs: {
        left: "",
        small: ""
      }
    }, [_vm._v("mdi-delete-forever")]), _vm._v("\n                      Delete\n                    ")], 1)], 1)])]);
  }), 0)], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
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
    staticClass: "text-capitalize rounded-lg",
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
  }, [_vm._v("Drag Files or Browse")])], 1), _vm._v(" "), _vm.form1.upload && _vm.form1.upload.length > 0 ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-card-subtitle", {
    staticClass: "font-weight-bold px-0 py-2 grey--text text--darken-3"
  }, [_vm._v("Additional files (" + _vm._s(_vm.form1.upload.length) + "):")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _vm.form1.upload && _vm.form1.upload.length > 1 ? _c("a", {
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
    staticClass: "my-2",
    attrs: {
      multiple: "",
      "show-arrows": false,
      "prev-icon": "mdi-chevron-left-circle",
      "next-icon": "mdi-chevron-right-circle"
    }
  }, _vm._l(_vm.form1.upload, function (upload, index) {
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
          return _vm.previewFile(index, "upload");
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
          return _vm.deleteFile(index, "upload");
        }
      }
    }, [_c("v-icon", {
      attrs: {
        size: "25"
      }
    }, [_vm._v("mdi-minus")])], 1)], 1)]);
  }), 1)], 1)]) : _vm._e()], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-end pa-5",
    "class": {
      "flex-column": _vm.$vuetify.breakpoint.smAndDown
    },
    staticStyle: {
      gap: "8px"
    }
  }, [_c("v-btn", {
    staticClass: "text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      color: "blue-grey lighten-5",
      depressed: "",
      large: ""
    },
    on: {
      click: _vm.closeAttachmentsDialog
    }
  }, [_vm._v("\n            Cancel\n          ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize text-subtitle-2 font-weight-bold rounded-lg order-first order-md-last",
    attrs: {
      type: "submit",
      color: "primary",
      depressed: "",
      large: ""
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("\n            Save Changes\n          ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
  }, [_vm._v(_vm._s(this.previewName))]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-3",
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
  }) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _vm.isAuthenticated && _vm.temp_table0 && _vm.temp_table0.data && _vm.temp_table0.data.length !== 0 ? _c("v-card", {
    staticClass: "pa-4 mb-4 rounded-xl shadow"
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Pending Property\n      Registration")]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "3",
      lg: "2"
    }
  }, [_c("v-select", {
    attrs: {
      items: _vm.registerTypeItems,
      label: "Registration Type",
      "single-line": "",
      "hide-details": "",
      rounded: "",
      filled: "",
      dense: "",
      clearable: ""
    },
    on: {
      change: _vm.getPendingProp
    },
    model: {
      value: _vm.registerType,
      callback: function callback($$v) {
        _vm.registerType = $$v;
      },
      expression: "registerType"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "4",
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
      headers: _vm.pendingHeaders,
      items: _vm.table0.data,
      "mobile-breakpoint": "0",
      search: _vm.search0
    },
    scopedSlots: _vm._u([{
      key: "item.is_approve",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-chip", {
          attrs: {
            color: _vm.statusColor(item.is_approve),
            pill: "",
            dark: "",
            small: _vm.$vuetify.breakpoint.smAndDown,
            "text-color": "orange"
          }
        }, [_vm._v("\n          " + _vm._s(item.is_approve) + "\n        ")])];
      }
    }, {
      key: "item.id",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("v-btn", {
          staticClass: "text-capitalize rounded-lg",
          attrs: {
            depressed: "",
            outlined: "",
            small: _vm.$vuetify.breakpoint.smAndDown,
            color: "blue darken-2"
          },
          on: {
            click: function click($event) {
              return _vm.editAttachment(item);
            }
          }
        }, [_c("v-icon", {
          attrs: {
            left: "",
            small: ""
          }
        }, [_vm._v(" mdi-file ")]), _vm._v("\n          Attachments\n        ")], 1), _vm._v(" "), _c("v-btn", {
          staticClass: "text-capitalize rounded-lg",
          attrs: {
            depressed: "",
            outlined: "",
            small: _vm.$vuetify.breakpoint.smAndDown,
            color: "red darken-2"
          },
          on: {
            click: function click($event) {
              return _vm.cancelRegister(item);
            }
          }
        }, [_c("v-icon", {
          attrs: {
            left: "",
            small: ""
          }
        }, [_vm._v("mdi-cancel")]), _vm._v("\n          Cancel\n        ")], 1)];
      }
    }], null, true)
  })], 1) : _vm._e(), _vm._v(" "), _vm.isAuthenticated ? _c("v-card", {
    staticClass: "pa-4 mb-4 rounded-xl shadow"
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Registered Property")]), _vm._v(" "), _vm.table1 && _vm.table1.data && _vm.table1.data.length > 0 ? [_c("v-row", {
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-col", {
    staticClass: "pa-0",
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
      value: _vm.search1,
      callback: function callback($$v) {
        _vm.search1 = $$v;
      },
      expression: "search1"
    }
  })], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "450px",
      scrollable: ""
    },
    model: {
      value: _vm.nicknameDialog,
      callback: function callback($$v) {
        _vm.nicknameDialog = $$v;
      },
      expression: "nicknameDialog"
    }
  }, [_c("v-form", {
    ref: "form2",
    attrs: {
      "fast-fail": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateNick.apply(null, arguments);
      }
    }
  }, [_c("v-card", [_c("v-toolbar", {
    attrs: {
      flat: ""
    }
  }, [_c("span", {
    staticClass: "grey--text text--darken-3 text-h6 font-weight-bold"
  }, [_vm._v("Edit Alias")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      fab: "",
      depressed: "",
      small: "",
      color: "blue-grey lighten-5"
    },
    on: {
      click: _vm.closeNicknameDialog
    }
  }, [_c("v-icon", {
    attrs: {
      size: "27",
      color: "grey darken-2"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-3",
    staticStyle: {
      height: "auto"
    }
  }, [_c("v-container", [_c("v-row", [_c("v-col", {
    staticClass: "pb-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-text-field", {
    staticClass: "mt-2",
    attrs: {
      rules: _vm.isFormSubmitted ? _vm.rules.nickname : [],
      dense: _vm.$vuetify.breakpoint.smAndDown,
      required: "",
      filled: "",
      clearable: "",
      label: "Alias"
    },
    model: {
      value: _vm.form2.nickname,
      callback: function callback($$v) {
        _vm.$set(_vm.form2, "nickname", $$v);
      },
      expression: "form2.nickname"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-end pa-5",
    "class": {
      "flex-column": _vm.$vuetify.breakpoint.smAndDown
    },
    staticStyle: {
      gap: "8px"
    }
  }, [_c("v-btn", {
    staticClass: "text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      color: "blue-grey lighten-5",
      depressed: "",
      large: ""
    },
    on: {
      click: _vm.closeNicknameDialog
    }
  }, [_vm._v("\n                Cancel\n              ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize text-subtitle-2 font-weight-bold rounded-lg order-first order-md-last",
    attrs: {
      type: "submit",
      color: "primary",
      depressed: "",
      large: ""
    },
    on: {
      click: function click($event) {
        _vm.isFormSubmitted = true;
      }
    }
  }, [_vm._v("\n                Save Changes\n              ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-data-table", {
    staticClass: "my-4",
    attrs: {
      loading: _vm.loadTable1,
      headers: _vm.recordsHeaders,
      items: _vm.properties,
      "show-select": "",
      "checkbox-color": "primary",
      "mobile-breakpoint": "0",
      search: _vm.search1
    },
    scopedSlots: _vm._u([{
      key: "item.data-table-select",
      fn: function fn(_ref3) {
        var item = _ref3.item,
          isSelected = _ref3.isSelected,
          select = _ref3.select;
        return [_c("v-simple-checkbox", {
          attrs: {
            value: isSelected,
            disabled: item.is_requested === "1",
            color: "primary"
          },
          on: {
            input: function input($event) {
              return select($event);
            }
          }
        })];
      }
    }, {
      key: "item.id",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("v-btn", {
          staticClass: "text-capitalize rounded-lg",
          attrs: {
            depressed: "",
            outlined: "",
            small: _vm.$vuetify.breakpoint.smAndDown,
            color: "green darken-2",
            disabled: item.is_requested !== "0"
          },
          on: {
            click: function click($event) {
              return _vm.editNickname(item);
            }
          }
        }, [_c("v-icon", {
          attrs: {
            left: "",
            small: ""
          }
        }, [_vm._v("mdi-rename-box")]), _vm._v("\n            Edit Alias\n          ")], 1)];
      }
    }], null, true),
    model: {
      value: _vm.table1Select,
      callback: function callback($$v) {
        _vm.table1Select = $$v;
      },
      expression: "table1Select"
    }
  }), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: "",
      "no-gutters": ""
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize text-subtitle-2 font-weight-bold rounded-lg",
    attrs: {
      color: "primary",
      large: "",
      depressed: "",
      disabled: _vm.isComputeButtonDisabled,
      block: _vm.$vuetify.breakpoint.xsOnly
    },
    on: {
      click: _vm.requestSOA
    }
  }, [_vm._v("\n          Request SOA\n        ")])], 1)] : _vm._e(), _vm._v(" "), _vm.table1 && _vm.table1.data && _vm.table1.data.length === 0 ? [_c("v-img", {
    staticStyle: {
      height: "clamp(150px, 30vw, 250px)"
    },
    attrs: {
      contain: "",
      width: "100%",
      src: "/img/no_data.svg",
      eager: ""
    }
  }), _vm._v(" "), _c("v-card-title", {
    staticClass: "d-flex align-center justify-center text-subtitle-1"
  }, [_vm._v("It looks clean here")])] : _vm._e()], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/records/ListOfProperty.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/records/ListOfProperty.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListOfProperty.vue?vue&type=template&id=b18ac680 */ "./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680");
/* harmony import */ var _ListOfProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListOfProperty.vue?vue&type=script&lang=js */ "./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListOfProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__.render,
  _ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/records/ListOfProperty.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListOfProperty.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfProperty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfProperty_vue_vue_type_template_id_b18ac680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListOfProperty.vue?vue&type=template&id=b18ac680 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/records/ListOfProperty.vue?vue&type=template&id=b18ac680");


/***/ })

}]);