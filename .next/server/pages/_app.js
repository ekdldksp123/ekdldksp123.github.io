"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/js/hooks */ \"./public/js/hooks.ts\");\n/* harmony import */ var _public_styles_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/config */ \"./public/styles/config.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/vinchaekim/Documents/workspace/ekdldksp123.github.io/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const parallax = (0,_public_js_hooks__WEBPACK_IMPORTED_MODULE_2__.useScript)(_public_styles_config__WEBPACK_IMPORTED_MODULE_3__.scripts[0]);\n  const swiper = (0,_public_js_hooks__WEBPACK_IMPORTED_MODULE_2__.useScript)(_public_styles_config__WEBPACK_IMPORTED_MODULE_3__.scripts[1]);\n  const gsap = (0,_public_js_hooks__WEBPACK_IMPORTED_MODULE_2__.useScript)(_public_styles_config__WEBPACK_IMPORTED_MODULE_3__.scripts[2]); //useLayoutEffect는 레이아웃 단계에서 동작하기 때문에 페인팅이 일어난 후 동작하지 않는다.\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {\n    if (parallax === \"ready\" && swiper === \"ready\" && gsap === \"ready\") {\n      (0,_public_styles_config__WEBPACK_IMPORTED_MODULE_3__.init)();\n      const script = document.createElement(\"script\");\n      script.src = _public_styles_config__WEBPACK_IMPORTED_MODULE_3__.scripts[3];\n      script.async = true;\n      document.body.appendChild(script);\n    }\n  }, [parallax, swiper, gsap]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Vivid\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/x-icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: _public_styles_config__WEBPACK_IMPORTED_MODULE_3__.swiper\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        charSet: \"UTF-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        httpEquiv: \"Content-Security-Policy\",\n        content: \"upgrade-insecure-requests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        httpEquiv: \"X-UA-Compatible\",\n        content: \"ie=edge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"body\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdEQsUUFBTUMsUUFBUSxHQUFHUiwyREFBUyxDQUFDRSw2REFBRCxDQUExQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0gsMkRBQVMsQ0FBQ0UsNkRBQUQsQ0FBeEI7QUFDQSxRQUFNTyxJQUFJLEdBQUdULDJEQUFTLENBQUNFLDZEQUFELENBQXRCLENBSHNELENBS3REOztBQUNBSCxFQUFBQSxzREFBZSxDQUFDLE1BQU07QUFDcEIsUUFBSVMsUUFBUSxLQUFLLE9BQWIsSUFBd0JMLE1BQU0sS0FBSyxPQUFuQyxJQUE4Q00sSUFBSSxLQUFLLE9BQTNELEVBQW9FO0FBQ2xFUixNQUFBQSwyREFBSTtBQUNKLFlBQU1TLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxHQUFQLEdBQWFYLDZEQUFiO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDQUgsTUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLE1BQTFCO0FBQ0Q7QUFDRixHQVJjLEVBUVosQ0FBQ0YsUUFBRCxFQUFXTCxNQUFYLEVBQW1CTSxJQUFuQixDQVJZLENBQWY7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLGNBQXRCO0FBQXFDLFlBQUksRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBRUwseURBQVNBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFDRSxpQkFBUyxFQUFDLHlCQURaO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBVUU7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFrQyxlQUFPLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQSxrQkFERjtBQW1CRCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpdmlkLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTY3JpcHQgfSBmcm9tIFwiLi4vcHVibGljL2pzL2hvb2tzXCI7XG5pbXBvcnQgeyBpbml0LCBzY3JpcHRzLCBzd2lwZXIgYXMgc3dpcGVyVVJMIH0gZnJvbSBcIi4uL3B1YmxpYy9zdHlsZXMvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBwYXJhbGxheCA9IHVzZVNjcmlwdChzY3JpcHRzWzBdKTtcbiAgY29uc3Qgc3dpcGVyID0gdXNlU2NyaXB0KHNjcmlwdHNbMV0pO1xuICBjb25zdCBnc2FwID0gdXNlU2NyaXB0KHNjcmlwdHNbMl0pO1xuXG4gIC8vdXNlTGF5b3V0RWZmZWN064qUIOugiOydtOyVhOybgyDri6jqs4Tsl5DshJwg64+Z7J6R7ZWY6riwIOuVjOusuOyXkCDtjpjsnbjtjIXsnbQg7J287Ja064KcIO2bhCDrj5nsnpHtlZjsp4Ag7JWK64qU64ukLlxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYXJhbGxheCA9PT0gXCJyZWFkeVwiICYmIHN3aXBlciA9PT0gXCJyZWFkeVwiICYmIGdzYXAgPT09IFwicmVhZHlcIikge1xuICAgICAgaW5pdCgpO1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBzY3JpcHRzWzNdO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH0sIFtwYXJhbGxheCwgc3dpcGVyLCBnc2FwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5WaXZpZDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtzd2lwZXJVUkx9IC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBodHRwRXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiXG4gICAgICAgICAgY29udGVudD1cInVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHNcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTY3JpcHQiLCJpbml0Iiwic2NyaXB0cyIsInN3aXBlciIsInN3aXBlclVSTCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGFyYWxsYXgiLCJnc2FwIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./public/js/hooks.ts":
/*!****************************!*\
  !*** ./public/js/hooks.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useScript\": () => (/* binding */ useScript)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useScript = src => {\n  const {\n    0: status,\n    1: setStatus\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src ? \"loading\" : \"idle\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!src) {\n      setStatus(\"idle\");\n      return;\n    }\n\n    let script = document.querySelector(`script[src=\"${src}\"]`);\n\n    if (!script) {\n      script = document.createElement(\"script\");\n      script.src = src;\n      script.async = true;\n      script.setAttribute(\"data-status\", \"loading\");\n      document.body.appendChild(script);\n\n      const setAttributeFromEvent = event => {\n        script.setAttribute(\"data-status\", event.type === \"load\" ? \"ready\" : \"error\");\n      };\n\n      script.addEventListener(\"load\", setAttributeFromEvent);\n      script.addEventListener(\"error\", setAttributeFromEvent);\n    } else {\n      setStatus(script.getAttribute(\"data-status\"));\n    }\n\n    const setStateFromEvent = event => {\n      setStatus(event.type === \"load\" ? \"ready\" : \"error\");\n    };\n\n    script.addEventListener(\"load\", setStateFromEvent);\n    script.addEventListener(\"error\", setStateFromEvent);\n    return () => {\n      if (script) {\n        script.removeEventListener(\"load\", setStateFromEvent);\n        script.removeEventListener(\"error\", setStateFromEvent);\n      }\n    };\n  }, [src] // Only re-run effect if script src changes\n  );\n  return status;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvaG9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUUsU0FBUyxHQUFJQyxHQUFELElBQWlCO0FBQy9CLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkwsK0NBQVEsQ0FBU0csR0FBRyxHQUFHLFNBQUgsR0FBZSxNQUEzQixDQUFwQztBQUVBRixFQUFBQSxnREFBUyxDQUNMLE1BQU07QUFDRixRQUFJLENBQUNFLEdBQUwsRUFBVTtBQUNORSxNQUFBQSxTQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0E7QUFDSDs7QUFFRCxRQUFJQyxNQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixlQUFjTCxHQUFJLElBQTFDLENBQWxCOztBQUVBLFFBQUksQ0FBQ0csTUFBTCxFQUFhO0FBQ1RBLE1BQUFBLE1BQU0sR0FBR0MsUUFBUSxDQUFDRSxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSCxHQUFQLEdBQWFBLEdBQWI7QUFDQUcsTUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBZjtBQUNBSixNQUFBQSxNQUFNLENBQUNLLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMsU0FBbkM7QUFFQUosTUFBQUEsUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCOztBQUVBLFlBQU1RLHFCQUFxQixHQUFJQyxLQUFELElBQWtCO0FBQzVDVCxRQUFBQSxNQUFNLENBQUNLLFlBQVAsQ0FDSSxhQURKLEVBRUlJLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BQWYsR0FBd0IsT0FBeEIsR0FBa0MsT0FGdEM7QUFJSCxPQUxEOztBQU9BVixNQUFBQSxNQUFNLENBQUNXLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDSCxxQkFBaEM7QUFDQVIsTUFBQUEsTUFBTSxDQUFDVyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gscUJBQWpDO0FBQ0gsS0FqQkQsTUFpQk87QUFDSFQsTUFBQUEsU0FBUyxDQUFDQyxNQUFNLENBQUNZLFlBQVAsQ0FBb0IsYUFBcEIsQ0FBRCxDQUFUO0FBQ0g7O0FBRUQsVUFBTUMsaUJBQWlCLEdBQUlKLEtBQUQsSUFBa0I7QUFDeENWLE1BQUFBLFNBQVMsQ0FBQ1UsS0FBSyxDQUFDQyxJQUFOLEtBQWUsTUFBZixHQUF3QixPQUF4QixHQUFrQyxPQUFuQyxDQUFUO0FBQ0gsS0FGRDs7QUFJQVYsSUFBQUEsTUFBTSxDQUFDVyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ0UsaUJBQWhDO0FBQ0FiLElBQUFBLE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNFLGlCQUFqQztBQUVBLFdBQU8sTUFBTTtBQUNULFVBQUliLE1BQUosRUFBWTtBQUNSQSxRQUFBQSxNQUFNLENBQUNjLG1CQUFQLENBQTJCLE1BQTNCLEVBQW1DRCxpQkFBbkM7QUFDQWIsUUFBQUEsTUFBTSxDQUFDYyxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ0QsaUJBQXBDO0FBQ0g7QUFDSixLQUxEO0FBTUgsR0EzQ0ksRUE0Q0wsQ0FBQ2hCLEdBQUQsQ0E1Q0ssQ0E0Q0M7QUE1Q0QsR0FBVDtBQStDQSxTQUFPQyxNQUFQO0FBQ0gsQ0FuREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXZpZC8uL3B1YmxpYy9qcy9ob29rcy50cz9jZDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU2NyaXB0ID0gKHNyYzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oc3JjID8gXCJsb2FkaW5nXCIgOiBcImlkbGVcIik7XG5cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwiaWRsZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzY3JpcHQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NyY31cIl1gKTtcblxuICAgICAgICAgICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0QXR0cmlidXRlRnJvbUV2ZW50ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9PT0gXCJsb2FkXCIgPyBcInJlYWR5XCIgOiBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNldEF0dHJpYnV0ZUZyb21FdmVudCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBzZXRBdHRyaWJ1dGVGcm9tRXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoc2NyaXB0LmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2V0U3RhdGVGcm9tRXZlbnQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKGV2ZW50LnR5cGUgPT09IFwibG9hZFwiID8gXCJyZWFkeVwiIDogXCJlcnJvclwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzZXRTdGF0ZUZyb21FdmVudCk7XG4gICAgICAgICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHNldFN0YXRlRnJvbUV2ZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzZXRTdGF0ZUZyb21FdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgc2V0U3RhdGVGcm9tRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFtzcmNdIC8vIE9ubHkgcmUtcnVuIGVmZmVjdCBpZiBzY3JpcHQgc3JjIGNoYW5nZXNcbiAgICApO1xuXG4gICAgcmV0dXJuIHN0YXR1cztcbn1cblxuZXhwb3J0IHsgdXNlU2NyaXB0IH07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2NyaXB0Iiwic3JjIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlRnJvbUV2ZW50IiwiZXZlbnQiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEF0dHJpYnV0ZSIsInNldFN0YXRlRnJvbUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/js/hooks.ts\n");

/***/ }),

/***/ "./public/styles/config.ts":
/*!*********************************!*\
  !*** ./public/styles/config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scripts\": () => (/* binding */ scripts),\n/* harmony export */   \"swiper\": () => (/* binding */ swiper),\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"globalCss\": () => (/* binding */ globalCss)\n/* harmony export */ });\nconst scripts = [\"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js\", \"https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js\", \"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js\", \"../js/index.js\"];\nconst swiper = \"https://unpkg.com/swiper/swiper-bundle.min.css\";\nconst init = () => {\n  const link = document.createElement(\"link\");\n  link.setAttribute(\"rel\", \"stylesheet\");\n  link.setAttribute(\"href\", swiper);\n  document.head.appendChild(link);\n};\nconst globalCss = `\n::-webkit-scrollbar {\n    width: 10px;\n}\n::-webkit-scrollbar-track {\n    background: transparent;\n    border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n    height: 5%;\n    background: linear-gradient(#c2e59c, #64b3f4);\n    border-radius: 10px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    font-family: 'Roboto', sans-serif;\n    list-css: none;\n    box-sizing: border-box;\n    background: #000;\n}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3R5bGVzL2NvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHLENBQ3JCLHVFQURxQixFQUVyQixzRUFGcUIsRUFHckIsK0RBSHFCLEVBSXJCLGdCQUpxQixDQUFoQjtBQU9BLE1BQU1DLE1BQU0sR0FBRyxnREFBZjtBQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQUYsRUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLFlBQXpCO0FBQ0FILEVBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixNQUFsQixFQUEwQkwsTUFBMUI7QUFDQUcsRUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLElBQTFCO0FBQ0QsQ0FMTTtBQU9BLE1BQU1NLFNBQVMsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdml2aWQvLi9wdWJsaWMvc3R5bGVzL2NvbmZpZy50cz80ZDVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY3JpcHRzID0gW1xuICBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BhcmFsbGF4LzMuMS4wL3BhcmFsbGF4Lm1pbi5qc1wiLFxuICBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL1N3aXBlci80LjUuMS9qcy9zd2lwZXIubWluLmpzXCIsXG4gIFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZ3NhcC8zLjUuMS9nc2FwLm1pbi5qc1wiLFxuICBcIi4uL2pzL2luZGV4LmpzXCIsXG5dO1xuXG5leHBvcnQgY29uc3Qgc3dpcGVyID0gXCJodHRwczovL3VucGtnLmNvbS9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHN3aXBlcik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsQ3NzID0gYFxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2MyZTU5YywgIzY0YjNmNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBsaXN0LWNzczogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG59XG5gO1xuIl0sIm5hbWVzIjpbInNjcmlwdHMiLCJzd2lwZXIiLCJpbml0IiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImdsb2JhbENzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/styles/config.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();