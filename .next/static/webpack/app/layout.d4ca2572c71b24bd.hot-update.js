"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eacbbe20f148\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDBhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVhY2JiZTIwZjE0OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/DoubleHeader.js":
/*!****************************************!*\
  !*** ./src/components/DoubleHeader.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DoubleHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\nfunction DoubleHeader(param) {\n    let { preTitle, mainTitle, preTitleLink } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            preTitleLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: preTitleLink,\n                className: \"block text-gray-300 text-lg uppercase\",\n                children: preTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\components\\\\DoubleHeader.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            !preTitleLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-3xl text-muted\",\n                children: preTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\components\\\\DoubleHeader.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\components\\\\DoubleHeader.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = DoubleHeader;\nvar _c;\n$RefreshReg$(_c, \"DoubleHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvdWJsZUhlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZCO0FBRWQsU0FBU0MsYUFBYSxLQUFpQztRQUFqQyxFQUFDQyxRQUFRLEVBQUNDLFNBQVMsRUFBQ0MsWUFBWSxFQUFDLEdBQWpDO0lBQ25DLHFCQUNFLDhEQUFDQzs7WUFDRUQsOEJBQ0MsOERBQUNKLGlEQUFJQTtnQkFDSE0sTUFBTUY7Z0JBQ05HLFdBQVU7MEJBRVRMOzs7Ozs7WUFHSixDQUFDRSw4QkFDQSw4REFBQ0k7Z0JBQUdELFdBQVU7MEJBQWlDTDs7Ozs7Ozs7Ozs7O0FBSXZEO0tBaEJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG91YmxlSGVhZGVyLmpzPzdhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG91YmxlSGVhZGVyKHtwcmVUaXRsZSxtYWluVGl0bGUscHJlVGl0bGVMaW5rfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cHJlVGl0bGVMaW5rICYmIChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17cHJlVGl0bGVMaW5rfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTMwMCB0ZXh0LWxnIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ByZVRpdGxlfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgICAgeyFwcmVUaXRsZUxpbmsgJiYgKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1tdXRlZFwiPntwcmVUaXRsZX08L2gyPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiRG91YmxlSGVhZGVyIiwicHJlVGl0bGUiLCJtYWluVGl0bGUiLCJwcmVUaXRsZUxpbmsiLCJkaXYiLCJocmVmIiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoubleHeader.js\n"));

/***/ })

});