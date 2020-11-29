webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeBlock */ \"./components/CodeBlock.tsx\");\n/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collapsible */ \"./components/Collapsible.tsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Result */ \"./components/Result.tsx\");\n/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Separator */ \"./components/Separator.tsx\");\nvar _jsxFileName = \"/home/marcelo/Documents/i18n-language-codes/demo/components/Card.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction Card(_ref) {\n  _s();\n\n  var _this = this;\n\n  var title = _ref.title,\n      sections = _ref.sections;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      displayChain = _useState[0],\n      setDisplayChain = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    id: title,\n    className: \"jsx-218130378\" + \" \" + \"card\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    onMouseEnter: function onMouseEnter() {\n      return setDisplayChain(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setDisplayChain(false);\n    },\n    className: \"jsx-218130378\" + \" \" + \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      position: \"relative\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      left: -24,\n      bottom: 8,\n      width: 24,\n      cursor: displayChain ? \"pointer\" : \"default\"\n    },\n    className: \"jsx-218130378\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, displayChain && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/#\".concat(title),\n    scroll: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    src: \"/chain.png\",\n    alt: title,\n    width: \"18\",\n    height: \"18\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }))), __jsx(\"h3\", {\n    className: \"jsx-218130378\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, title)), sections.map(function (_ref2, index) {\n    var inputs = _ref2.inputs,\n        onClick = _ref2.onClick,\n        code = _ref2.code,\n        results = _ref2.results;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, inputs, __jsx(_Separator__WEBPACK_IMPORTED_MODULE_7__[\"Separator\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }), __jsx(_CodeBlock__WEBPACK_IMPORTED_MODULE_4__[\"CodeBlock\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, code), __jsx(\"button\", {\n      onClick: onClick,\n      className: \"jsx-218130378\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }, \"Run the code above \\u261D\\uFE0F\"), Array.isArray(results === null || results === void 0 ? void 0 : results.data) ? results.data.length > 0 && __jsx(_Collapsible__WEBPACK_IMPORTED_MODULE_5__[\"Collapsible\"], {\n      open: results.display,\n      onClick: results.onToggle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }\n    }, results.data.map(function (locale, index) {\n      return __jsx(_Result__WEBPACK_IMPORTED_MODULE_6__[\"Result\"], {\n        index: index,\n        locale: locale,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 32\n        }\n      });\n    })) : (results === null || results === void 0 ? void 0 : results.data) && __jsx(_Collapsible__WEBPACK_IMPORTED_MODULE_5__[\"Collapsible\"], {\n      open: results.display,\n      onClick: results.onToggle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 21\n      }\n    }, __jsx(_Result__WEBPACK_IMPORTED_MODULE_6__[\"Result\"], {\n      locale: results.data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 23\n      }\n    })), sections.length - 1 > index && __jsx(_Separator__WEBPACK_IMPORTED_MODULE_7__[\"Separator\"], {\n      thick: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 47\n      }\n    }));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"218130378\",\n    __self: this\n  }, \".card.jsx-218130378{margin:1rem;-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;max-width:800px;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-218130378 .row.jsx-218130378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card.jsx-218130378 button.jsx-218130378{padding:0.5rem;border-radius:4px;background-color:#fff;border:0.5px solid hsl(0,0%,80%);color:hsl(0,0%,20%);cursor:pointer;-webkit-transition:all 100ms;transition:all 100ms;}.card.jsx-218130378 button.jsx-218130378:focus,.card.jsx-218130378 button.jsx-218130378:hover{outline:none;border:1px solid var(--blue);box-shadow:0 0 0 1px var(--blue);}.card.jsx-218130378 button.jsx-218130378:active{outline:none;border:1px solid var(--blue);box-shadow:0 0 0 1px var(--blue);background-color:var(--blue);color:#fff;}.card.jsx-218130378 h3.jsx-218130378{margin:0 0 1rem -24px;font-size:1.5rem;}.card.jsx-218130378 p.jsx-218130378{margin:0;font-size:1.25rem;line-height:1.5;}@media (max-width:600px){.card.jsx-218130378{width:calc(100% - 1.5rem);}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNlbG8vRG9jdW1lbnRzL2kxOG4tbGFuZ3VhZ2UtY29kZXMvZGVtby9jb21wb25lbnRzL0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGUyxBQUd5QixBQWFDLEFBT0UsQUFXRixBQU1BLEFBUVMsQUFLYixBQU9tQixTQU5WLEdBbERILENBK0JjLEFBTUEsRUFqQlgsT0F5QkQsSUFZakIsQ0FOZ0IsTUE5Qk0sTUF5QnhCLEdBZG1DLEFBTUEsQ0FjbkMsWUE5QnFDLG1CQVRoQixDQW9CckIsQUFNK0IsR0F0Q2IsVUFzQk0sTUFyQlAsVUFzQ0osSUFoQkksQ0FyQkMsTUFzQ2xCLFFBaEJ1QixFQXJCUCxjQUNPLElBU00sOEJBWTdCLGdCQXBCMkIseUJBQ04sbUJBQ2tDLGVBT2xDLDZGQUNyQixJQVBBIiwiZmlsZSI6Ii9ob21lL21hcmNlbG8vRG9jdW1lbnRzL2kxOG4tbGFuZ3VhZ2UtY29kZXMvZGVtby9jb21wb25lbnRzL0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBSZWFjdE5vZGUsIFN5bnRoZXRpY0V2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tIFwiQG1hcmNlbG92aWNlbnRlZ2MvaTE4bi1pc28tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBDb2RlQmxvY2sgfSBmcm9tIFwiLi9Db2RlQmxvY2tcIjtcbmltcG9ydCB7IENvbGxhcHNpYmxlIH0gZnJvbSBcIi4vQ29sbGFwc2libGVcIjtcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuL1Jlc3VsdFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG5cbmludGVyZmFjZSBDYXJkUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzZWN0aW9uczoge1xuICAgIGlucHV0cz86IFJlYWN0Tm9kZTtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgcmVzdWx0cz86IHtcbiAgICAgIGRhdGE/OiBMb2NhbGUgfCBMb2NhbGVbXTtcbiAgICAgIGRpc3BsYXk6IGJvb2xlYW47XG4gICAgICBvblRvZ2dsZTogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudCwgRXZlbnQ+KSA9PiB2b2lkO1xuICAgIH07XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgfVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7IHRpdGxlLCBzZWN0aW9ucyB9OiBDYXJkUHJvcHMpIHtcbiAgY29uc3QgW2Rpc3BsYXlDaGFpbiwgc2V0RGlzcGxheUNoYWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBpZD17dGl0bGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldERpc3BsYXlDaGFpbih0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldERpc3BsYXlDaGFpbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGxlZnQ6IC0yNCxcbiAgICAgICAgICAgICAgYm90dG9tOiA4LFxuICAgICAgICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgICAgICAgIGN1cnNvcjogZGlzcGxheUNoYWluID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rpc3BsYXlDaGFpbiAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7dGl0bGV9YH0gc2Nyb2xsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jaGFpbi5wbmdcIiBhbHQ9e3RpdGxlfSB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzZWN0aW9ucy5tYXAoKHsgaW5wdXRzLCBvbkNsaWNrLCBjb2RlLCByZXN1bHRzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge2lucHV0c31cbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICA8Q29kZUJsb2NrPntjb2RlfTwvQ29kZUJsb2NrPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlJ1biB0aGUgY29kZSBhYm92ZSDimJ3vuI88L2J1dHRvbj5cbiAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkocmVzdWx0cz8uZGF0YSlcbiAgICAgICAgICAgICAgICA/IHJlc3VsdHMuZGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbj17cmVzdWx0cy5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc3VsdHMub25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0cy5kYXRhLm1hcCgobG9jYWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXN1bHQgaW5kZXg9e2luZGV4fSBsb2NhbGU9e2xvY2FsZX0gLz47XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2libGU+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiByZXN1bHRzPy5kYXRhICYmIChcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbj17cmVzdWx0cy5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc3VsdHMub25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8UmVzdWx0IGxvY2FsZT17cmVzdWx0cy5kYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNpYmxlPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3NlY3Rpb25zLmxlbmd0aCAtIDEgPiBpbmRleCAmJiA8U2VwYXJhdG9yIHRoaWNrIC8+fVxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgaHNsKDAsIDAlLCA4MCUpO1xuICAgICAgICAgICAgY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBidXR0b246Zm9jdXMsXG4gICAgICAgICAgLmNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1ibHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAtMjRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/home/marcelo/Documents/i18n-language-codes/demo/components/Card.tsx */\"));\n}\n\n_s(Card, \"OnwJs0uY+YUE9A2X/NV78RwqM28=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLnRzeD9jOTYwIl0sIm5hbWVzIjpbIkNhcmQiLCJ0aXRsZSIsInNlY3Rpb25zIiwidXNlU3RhdGUiLCJkaXNwbGF5Q2hhaW4iLCJzZXREaXNwbGF5Q2hhaW4iLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJsZWZ0IiwiYm90dG9tIiwid2lkdGgiLCJjdXJzb3IiLCJtYXAiLCJpbmRleCIsImlucHV0cyIsIm9uQ2xpY2siLCJjb2RlIiwicmVzdWx0cyIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJsZW5ndGgiLCJvblRvZ2dsZSIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JPLFNBQVNBLElBQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1Qjs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxLQUFELENBREc7QUFBQSxNQUM1Q0MsWUFENEM7QUFBQSxNQUM5QkMsZUFEOEI7O0FBR25ELFNBQ0UsbUVBQ0U7QUFBc0IsTUFBRSxFQUFFSixLQUExQjtBQUFBLHVDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1JLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsS0FGaEI7QUFHRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxLQUhoQjtBQUFBLHVDQUNZLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FB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eEJsQyxDQURGO0FBNEJELEdBN0JBLENBMUJILENBREY7QUFBQTtBQUFBO0FBQUEsbXlRQURGO0FBOEhEOztHQWpJZWYsSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIFJlYWN0Tm9kZSwgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gXCJAbWFyY2Vsb3ZpY2VudGVnYy9pMThuLWlzby1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IENvZGVCbG9jayB9IGZyb20gXCIuL0NvZGVCbG9ja1wiO1xuaW1wb3J0IHsgQ29sbGFwc2libGUgfSBmcm9tIFwiLi9Db2xsYXBzaWJsZVwiO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4vUmVzdWx0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlY3Rpb25zOiB7XG4gICAgaW5wdXRzPzogUmVhY3ROb2RlO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICByZXN1bHRzPzoge1xuICAgICAgZGF0YT86IExvY2FsZSB8IExvY2FsZVtdO1xuICAgICAgZGlzcGxheTogYm9vbGVhbjtcbiAgICAgIG9uVG9nZ2xlOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50LCBFdmVudD4pID0+IHZvaWQ7XG4gICAgfTtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgdGl0bGUsIHNlY3Rpb25zIH06IENhcmRQcm9wcykge1xuICBjb25zdCBbZGlzcGxheUNoYWluLCBzZXREaXNwbGF5Q2hhaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGlkPXt0aXRsZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RGlzcGxheUNoYWluKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RGlzcGxheUNoYWluKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgbGVmdDogLTI0LFxuICAgICAgICAgICAgICBib3R0b206IDgsXG4gICAgICAgICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgICAgICAgY3Vyc29yOiBkaXNwbGF5Q2hhaW4gPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGlzcGxheUNoYWluICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHt0aXRsZX1gfSBzY3JvbGw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NoYWluLnBuZ1wiIGFsdD17dGl0bGV9IHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoeyBpbnB1dHMsIG9uQ2xpY2ssIGNvZGUsIHJlc3VsdHMgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7aW5wdXRzfVxuICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICAgIDxDb2RlQmxvY2s+e2NvZGV9PC9Db2RlQmxvY2s+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+UnVuIHRoZSBjb2RlIGFib3ZlIOKYne+4jzwvYnV0dG9uPlxuICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShyZXN1bHRzPy5kYXRhKVxuICAgICAgICAgICAgICAgID8gcmVzdWx0cy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtyZXN1bHRzLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzdWx0cy5vblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRzLmRhdGEubWFwKChsb2NhbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlc3VsdCBpbmRleD17aW5kZXh9IGxvY2FsZT17bG9jYWxlfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHJlc3VsdHM/LmRhdGEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtyZXN1bHRzLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzdWx0cy5vblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZXN1bHQgbG9jYWxlPXtyZXN1bHRzLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2libGU+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7c2VjdGlvbnMubGVuZ3RoIC0gMSA+IGluZGV4ICYmIDxTZXBhcmF0b3IgdGhpY2sgLz59XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBoc2woMCwgMCUsIDgwJSk7XG4gICAgICAgICAgICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIGJ1dHRvbjpmb2N1cyxcbiAgICAgICAgICAuY2FyZCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWJsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIC0yNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ })

})