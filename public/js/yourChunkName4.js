"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["yourChunkName4"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: "Dashboard"
    };
  },
  data: function data() {
    return {
      //Date From
      date1: new Date(new Date().setDate(1)).toISOString().substr(0, 10),
      menu1: false,
      modal1: false,
      //Date To
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      menu2: false,
      modal2: false,
      search: null,
      total_payment: 0,
      total_property: 0,
      total_delinquent: 0,
      table: [],
      paymentHeaders: [{
        text: "Date Paid",
        value: "",
        align: "center",
        width: ""
      }, {
        text: "Reference No.",
        value: "",
        align: "left",
        width: ""
      }, {
        text: "SOA No.",
        value: "",
        align: "left",
        width: ""
      }, {
        text: "Status",
        value: "",
        align: "center",
        width: "",
        sortable: false
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("v-card-title", {
    staticClass: "px-0 pt-0 font-weight-bold grey--text text--darken-3"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "rounded-xl shadow"
  }, [_c("v-row", {
    staticClass: "p-2",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    staticClass: "my-auto text-center",
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-icon", {
    staticStyle: {
      "font-size": "clamp(35px, 6vw, 80px)"
    },
    attrs: {
      color: "success",
      right: ""
    }
  }, [_vm._v("\n              mdi-cash-multiple\n            ")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "my-auto text-nowrap text-truncate",
    "class": {
      "text-center": _vm.$vuetify.breakpoint.smAndDown
    },
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("span", {
    staticClass: "text-caption text-sm-subtitle-1 text-muted"
  }, [_vm._v("Total Payment")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-body-2 text-sm-h6 text-success"
  }, [_vm._v("\n              ₱" + _vm._s(_vm.total_payment.toFixed(2)) + "\n            ")])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "rounded-xl shadow"
  }, [_c("v-row", {
    staticClass: "p-2",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    staticClass: "my-auto text-center",
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-icon", {
    staticStyle: {
      "font-size": "clamp(35px, 6vw, 80px)"
    },
    attrs: {
      color: "primary",
      right: ""
    }
  }, [_vm._v("\n              mdi-home-city\n            ")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "my-auto text-nowrap text-truncate",
    "class": {
      "text-center": _vm.$vuetify.breakpoint.smAndDown
    },
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("span", {
    staticClass: "text-caption text-sm-subtitle-1 text-muted"
  }, [_vm._v("Total Properties")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-body-2 text-sm-h6 text-primary"
  }, [_vm._v("\n              " + _vm._s(_vm.total_property) + "\n            ")])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "rounded-xl shadow"
  }, [_c("v-row", {
    staticClass: "p-2",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    staticClass: "my-auto text-center",
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-icon", {
    staticStyle: {
      "font-size": "clamp(35px, 6vw, 80px)"
    },
    attrs: {
      color: "danger",
      right: ""
    }
  }, [_vm._v("\n              mdi-home-group-remove\n            ")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "my-auto text-nowrap text-truncate",
    "class": {
      "text-center": _vm.$vuetify.breakpoint.smAndDown
    },
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("span", {
    staticClass: "text-caption text-sm-subtitle-1 text-muted"
  }, [_vm._v("Total Delinquent Properties")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold text-body-2 text-sm-h6 text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.total_delinquent) + "\n            ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "pa-4 mt-4 rounded-xl shadow"
  }, [_c("v-card-title", {
    staticClass: "p-0 font-weight-bold grey--text text--darken-3 text-subtitle-1"
  }, [_vm._v("\n      Payment Transactions\n    ")]), _vm._v(" "), _vm.table && _vm.table.data && _vm.table.data.length > 0 ? [_c("v-row", {
    staticClass: "mt-4",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "6",
      sm: "3",
      md: "3",
      lg: "2"
    }
  }, [_c("v-dialog", {
    ref: "dialog1",
    attrs: {
      "return-value": _vm.date1,
      width: "290px"
    },
    on: {
      "update:returnValue": function updateReturnValue($event) {
        _vm.date1 = $event;
      },
      "update:return-value": function updateReturnValue($event) {
        _vm.date1 = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          staticClass: "customFS dt rounded-lg",
          attrs: {
            label: "From",
            dense: "",
            "prepend-inner-icon": "mdi-calendar",
            readonly: "",
            "hide-details": "",
            rounded: "",
            filled: "",
            "single-line": "",
            prefix: "From:"
          },
          model: {
            value: _vm.date1,
            callback: function callback($$v) {
              _vm.date1 = $$v;
            },
            expression: "date1"
          }
        }, "v-text-field", attrs, false), on))];
      }
    }], null, false, 1198122875),
    model: {
      value: _vm.modal1,
      callback: function callback($$v) {
        _vm.modal1 = $$v;
      },
      expression: "modal1"
    }
  }, [_vm._v(" "), _c("v-date-picker", {
    attrs: {
      scrollable: ""
    },
    model: {
      value: _vm.date1,
      callback: function callback($$v) {
        _vm.date1 = $$v;
      },
      expression: "date1"
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.modal1 = false;
      }
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.dialog1.save(_vm.date1);
      }
    }
  }, [_vm._v("\n                OK\n              ")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "3",
      md: "3",
      lg: "2"
    }
  }, [_c("v-dialog", {
    ref: "dialog2",
    attrs: {
      "return-value": _vm.date2,
      width: "290px"
    },
    on: {
      "update:returnValue": function updateReturnValue($event) {
        _vm.date2 = $event;
      },
      "update:return-value": function updateReturnValue($event) {
        _vm.date2 = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on,
          attrs = _ref2.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          staticClass: "customFS dt rounded-lg",
          attrs: {
            label: "Date To",
            dense: "",
            "prepend-inner-icon": "mdi-calendar",
            readonly: "",
            "hide-details": "",
            rounded: "",
            filled: "",
            "single-line": "",
            prefix: "To:"
          },
          model: {
            value: _vm.date2,
            callback: function callback($$v) {
              _vm.date2 = $$v;
            },
            expression: "date2"
          }
        }, "v-text-field", attrs, false), on))];
      }
    }], null, false, 898322316),
    model: {
      value: _vm.modal2,
      callback: function callback($$v) {
        _vm.modal2 = $$v;
      },
      expression: "modal2"
    }
  }, [_vm._v(" "), _c("v-date-picker", {
    attrs: {
      scrollable: ""
    },
    model: {
      value: _vm.date2,
      callback: function callback($$v) {
        _vm.date2 = $$v;
      },
      expression: "date2"
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.modal2 = false;
      }
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.dialog2.save(_vm.date2);
      }
    }
  }, [_vm._v("\n                OK\n              ")])], 1)], 1)], 1), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "4"
    }
  }, [_c("v-text-field", {
    staticClass: "customFS",
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
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1)], 1), _vm._v(" "), _c("v-data-table", {
    staticClass: "my-4",
    attrs: {
      id: "paymenttransact",
      headers: _vm.paymentHeaders,
      items: _vm.table.data
    }
  })] : [_c("v-img", {
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
  }, [_vm._v("No payment transactions yet")])]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/dashboard/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/dashboard/Dashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=140b4340 */ "./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_140b4340__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=140b4340 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Dashboard.vue?vue&type=template&id=140b4340");


/***/ })

}]);