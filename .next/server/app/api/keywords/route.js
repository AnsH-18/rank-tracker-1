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
exports.id = "app/api/keywords/route";
exports.ids = ["app/api/keywords/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkeywords%2Froute&page=%2Fapi%2Fkeywords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkeywords%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkeywords%2Froute&page=%2Fapi%2Fkeywords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkeywords%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Ansh_Desktop_rank_tracker_src_app_api_keywords_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/keywords/route.js */ \"(rsc)/./src/app/api/keywords/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/keywords/route\",\n        pathname: \"/api/keywords\",\n        filename: \"route\",\n        bundlePath: \"app/api/keywords/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\app\\\\api\\\\keywords\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Ansh_Desktop_rank_tracker_src_app_api_keywords_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/keywords/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZrZXl3b3JkcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGa2V5d29yZHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZrZXl3b3JkcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbnNoJTVDRGVza3RvcCU1Q3JhbmstdHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQW5zaCU1Q0Rlc2t0b3AlNUNyYW5rLXRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDdUM7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLz8wN2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBbnNoXFxcXERlc2t0b3BcXFxccmFuay10cmFja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGtleXdvcmRzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9rZXl3b3Jkcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2tleXdvcmRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9rZXl3b3Jkcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEFuc2hcXFxcRGVza3RvcFxcXFxyYW5rLXRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxca2V5d29yZHNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkva2V5d29yZHMvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkeywords%2Froute&page=%2Fapi%2Fkeywords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkeywords%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoClient */ \"(rsc)/./src/libs/mongoClient.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    secret: process.env.SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZjtBQUN3QjtBQUNGO0FBRS9DLE1BQU1JLGNBQWM7SUFDekJDLFdBQVc7UUFDVEgsc0VBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBU1QscUVBQWNBLENBQUNILHlEQUFhQTtJQUNyQ2EsUUFBUU4sUUFBUUMsR0FBRyxDQUFDTSxNQUFNO0FBQzVCLEVBQUU7QUFFRixNQUFNQyxVQUFVZCxnREFBUUEsQ0FBQ0c7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ2xpZW50XCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/keywords/route.js":
/*!***************************************!*\
  !*** ./src/app/api/keywords/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _libs_rankingFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/rankingFunctions */ \"(rsc)/./src/libs/rankingFunctions.js\");\n/* harmony import */ var _models_Keyword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Keyword */ \"(rsc)/./src/models/Keyword.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Result */ \"(rsc)/./src/models/Result.js\");\n\n\n\n\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGODB_URI);\n    const data = await req.json();\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    const keywordDoc = await _models_Keyword__WEBPACK_IMPORTED_MODULE_2__.Keyword.create({\n        domain: data.domain,\n        keyword: data.keyword,\n        owner: session.user.email\n    });\n    const responseId = await (0,_libs_rankingFunctions__WEBPACK_IMPORTED_MODULE_1__.doGoogleSearch)(data.keyword);\n    await _models_Result__WEBPACK_IMPORTED_MODULE_6__.Result.create({\n        domain: data.domain,\n        keyword: data.keyword,\n        brightDataResponseId: responseId\n    });\n    return Response.json(keywordDoc);\n}\nasync function GET(req) {\n    const url = new url__WEBPACK_IMPORTED_MODULE_5__.URL(req.url);\n    const domain = url.searchParams.get(\"domain\");\n    const keyword = url.searchParams.get(\"keyword\");\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    const keywordsDocs = await _models_Keyword__WEBPACK_IMPORTED_MODULE_2__.Keyword.find(keyword ? {\n        domain,\n        keyword,\n        owner: session.user.email\n    } : {\n        domain,\n        owner: session.user.email\n    });\n    const resultsDocs = await _models_Result__WEBPACK_IMPORTED_MODULE_6__.Result.find({\n        domain,\n        keyword: keywordsDocs.map((doc)=>doc.keyword)\n    });\n    return Response.json({\n        keywords: keywordsDocs,\n        results: resultsDocs\n    });\n}\nasync function DELETE(req) {\n    const url = new url__WEBPACK_IMPORTED_MODULE_5__.URL(req.url);\n    const domain = url.searchParams.get(\"domain\");\n    const keyword = url.searchParams.get(\"keyword\");\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    await _models_Keyword__WEBPACK_IMPORTED_MODULE_2__.Keyword.deleteOne({\n        domain,\n        keyword,\n        owner: session.user.email\n    });\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9rZXl3b3Jkcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ1I7QUFDZDtBQUNUO0FBQ1c7QUFDbkI7QUFDc0I7QUFFdkMsZUFBZU8sS0FBS0MsR0FBRztJQUM1QkwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN4QyxNQUFNQyxPQUFPLE1BQU1MLElBQUlNLElBQUk7SUFDM0IsTUFBTUMsVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNKLHFFQUFXQTtJQUNsRCxNQUFNZ0IsYUFBYSxNQUFNZCxvREFBT0EsQ0FBQ2UsTUFBTSxDQUFDO1FBQ3RDQyxRQUFRTCxLQUFLSyxNQUFNO1FBQ25CQyxTQUFTTixLQUFLTSxPQUFPO1FBQ3JCQyxPQUFPTCxRQUFRTSxJQUFJLENBQUNDLEtBQUs7SUFDM0I7SUFDQSxNQUFNQyxhQUFhLE1BQU10QixzRUFBY0EsQ0FBQ1ksS0FBS00sT0FBTztJQUNwRCxNQUFNYixrREFBTUEsQ0FBQ1csTUFBTSxDQUFDO1FBQ2xCQyxRQUFRTCxLQUFLSyxNQUFNO1FBQ25CQyxTQUFTTixLQUFLTSxPQUFPO1FBQ3JCSyxzQkFBc0JEO0lBQ3hCO0lBQ0EsT0FBT0UsU0FBU1gsSUFBSSxDQUFDRTtBQUN2QjtBQUVPLGVBQWVVLElBQUlsQixHQUFHO0lBQzNCLE1BQU1tQixNQUFNLElBQUl0QixvQ0FBR0EsQ0FBQ0csSUFBSW1CLEdBQUc7SUFDM0IsTUFBTVQsU0FBU1MsSUFBSUMsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDcEMsTUFBTVYsVUFBVVEsSUFBSUMsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDckMxQix1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ3hDLE1BQU1HLFVBQVUsTUFBTVgsMkRBQWdCQSxDQUFDSixxRUFBV0E7SUFDbEQsTUFBTThCLGVBQWUsTUFBTTVCLG9EQUFPQSxDQUFDNkIsSUFBSSxDQUNyQ1osVUFDSTtRQUFDRDtRQUFPQztRQUFRQyxPQUFNTCxRQUFRTSxJQUFJLENBQUNDLEtBQUs7SUFBQSxJQUN4QztRQUFDSjtRQUFPRSxPQUFNTCxRQUFRTSxJQUFJLENBQUNDLEtBQUs7SUFBQTtJQUV0QyxNQUFNVSxjQUFjLE1BQU0xQixrREFBTUEsQ0FBQ3lCLElBQUksQ0FBQztRQUNwQ2I7UUFDQUMsU0FBUVcsYUFBYUcsR0FBRyxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJZixPQUFPO0lBQzdDO0lBQ0EsT0FBT00sU0FBU1gsSUFBSSxDQUFDO1FBQ25CcUIsVUFBVUw7UUFDVk0sU0FBU0o7SUFDWDtBQUNGO0FBRU8sZUFBZUssT0FBTzdCLEdBQUc7SUFDOUIsTUFBTW1CLE1BQU0sSUFBSXRCLG9DQUFHQSxDQUFDRyxJQUFJbUIsR0FBRztJQUMzQixNQUFNVCxTQUFTUyxJQUFJQyxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUNwQyxNQUFNVixVQUFVUSxJQUFJQyxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUNyQzFCLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDeEMsTUFBTUcsVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNKLHFFQUFXQTtJQUNsRCxNQUFNRSxvREFBT0EsQ0FBQ29DLFNBQVMsQ0FBQztRQUFDcEI7UUFBT0M7UUFBUUMsT0FBTUwsUUFBUU0sSUFBSSxDQUFDQyxLQUFLO0lBQUE7SUFDaEUsT0FBT0csU0FBU1gsSUFBSSxDQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLy4vc3JjL2FwcC9hcGkva2V5d29yZHMvcm91dGUuanM/ZTY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dGhPcHRpb25zfSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5pbXBvcnQge2RvR29vZ2xlU2VhcmNofSBmcm9tIFwiQC9saWJzL3JhbmtpbmdGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtLZXl3b3JkfSBmcm9tIFwiQC9tb2RlbHMvS2V5d29yZFwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7Z2V0U2VydmVyU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQge1VSTH0gZnJvbSAndXJsJztcclxuaW1wb3J0IHtSZXN1bHR9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgY29uc3Qga2V5d29yZERvYyA9IGF3YWl0IEtleXdvcmQuY3JlYXRlKHtcclxuICAgIGRvbWFpbjogZGF0YS5kb21haW4sXHJcbiAgICBrZXl3b3JkOiBkYXRhLmtleXdvcmQsXHJcbiAgICBvd25lcjogc2Vzc2lvbi51c2VyLmVtYWlsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3BvbnNlSWQgPSBhd2FpdCBkb0dvb2dsZVNlYXJjaChkYXRhLmtleXdvcmQpO1xyXG4gIGF3YWl0IFJlc3VsdC5jcmVhdGUoe1xyXG4gICAgZG9tYWluOiBkYXRhLmRvbWFpbixcclxuICAgIGtleXdvcmQ6IGRhdGEua2V5d29yZCxcclxuICAgIGJyaWdodERhdGFSZXNwb25zZUlkOiByZXNwb25zZUlkLFxyXG4gIH0pO1xyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKGtleXdvcmREb2MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgZG9tYWluID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2RvbWFpbicpO1xyXG4gIGNvbnN0IGtleXdvcmQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgna2V5d29yZCcpO1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBjb25zdCBrZXl3b3Jkc0RvY3MgPSBhd2FpdCBLZXl3b3JkLmZpbmQoXHJcbiAgICBrZXl3b3JkXHJcbiAgICAgID8ge2RvbWFpbixrZXl3b3JkLG93bmVyOnNlc3Npb24udXNlci5lbWFpbH1cclxuICAgICAgOiB7ZG9tYWluLG93bmVyOnNlc3Npb24udXNlci5lbWFpbH1cclxuICApO1xyXG4gIGNvbnN0IHJlc3VsdHNEb2NzID0gYXdhaXQgUmVzdWx0LmZpbmQoe1xyXG4gICAgZG9tYWluLFxyXG4gICAga2V5d29yZDprZXl3b3Jkc0RvY3MubWFwKGRvYyA9PiBkb2Mua2V5d29yZClcclxuICB9KTtcclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICBrZXl3b3Jkczoga2V5d29yZHNEb2NzLFxyXG4gICAgcmVzdWx0czogcmVzdWx0c0RvY3MsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxKSB7XHJcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBkb21haW4gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnZG9tYWluJyk7XHJcbiAgY29uc3Qga2V5d29yZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdrZXl3b3JkJyk7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGF3YWl0IEtleXdvcmQuZGVsZXRlT25lKHtkb21haW4sa2V5d29yZCxvd25lcjpzZXNzaW9uLnVzZXIuZW1haWx9KTtcclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcclxufSJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsImRvR29vZ2xlU2VhcmNoIiwiS2V5d29yZCIsIm1vbmdvb3NlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIlVSTCIsIlJlc3VsdCIsIlBPU1QiLCJyZXEiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZGF0YSIsImpzb24iLCJzZXNzaW9uIiwia2V5d29yZERvYyIsImNyZWF0ZSIsImRvbWFpbiIsImtleXdvcmQiLCJvd25lciIsInVzZXIiLCJlbWFpbCIsInJlc3BvbnNlSWQiLCJicmlnaHREYXRhUmVzcG9uc2VJZCIsIlJlc3BvbnNlIiwiR0VUIiwidXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwia2V5d29yZHNEb2NzIiwiZmluZCIsInJlc3VsdHNEb2NzIiwibWFwIiwiZG9jIiwia2V5d29yZHMiLCJyZXN1bHRzIiwiREVMRVRFIiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/keywords/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoClient.js":
/*!*********************************!*\
  !*** ./src/libs/mongoClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDO0lBQ0FILGdCQUFnQkMsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvbGlicy9tb25nb0NsaWVudC5qcz9hOTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoClient.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/rankingFunctions.js":
/*!**************************************!*\
  !*** ./src/libs/rankingFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doGoogleSearch: () => (/* binding */ doGoogleSearch)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/dist/node/axios.cjs\");\nasync function doGoogleSearch(keyword) {\n    const data = {\n        \"country\": \"us\",\n        \"query\": {\n            \"q\": keyword,\n            num: 100\n        },\n        num: 100\n    };\n    const url = \"https://api.brightdata.com/serp/req?customer=hl_57784e4b&zone=ranktracker\";\n    const headers = {\n        \"Authorization\": \"Bearer da2a6a39-da1c-4a24-8640-809f1cf26844\"\n    };\n    const response = await axios.post(url, data, {\n        headers\n    });\n    console.log(keyword);\n    if (!response?.headers) {\n        console.error(\"no header in response \" + url);\n        console.error(data);\n        return null;\n    } else {\n        console.log(\"responseId:\" + response?.headers.get(\"x-response-id\"));\n        return response?.headers.get(\"x-response-id\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9yYW5raW5nRnVuY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRQyxtQkFBT0EsQ0FBQztBQUVmLGVBQWVDLGVBQWVDLE9BQU87SUFDMUMsTUFBTUMsT0FBTztRQUFDLFdBQVc7UUFBSyxTQUFRO1lBQUMsS0FBSUQ7WUFBUUUsS0FBSTtRQUFHO1FBQUVBLEtBQUk7SUFBRztJQUNuRSxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsVUFBVTtRQUFDLGlCQUFpQjtJQUE2QztJQUMvRSxNQUFNQyxXQUFXLE1BQU1SLE1BQU1TLElBQUksQ0FBQ0gsS0FBS0YsTUFBTTtRQUFDRztJQUFPO0lBQ3JERyxRQUFRQyxHQUFHLENBQUNSO0lBQ1osSUFBSSxDQUFDSyxVQUFVRCxTQUFTO1FBQ3RCRyxRQUFRRSxLQUFLLENBQUMsMkJBQXlCTjtRQUN2Q0ksUUFBUUUsS0FBSyxDQUFDUjtRQUNkLE9BQU87SUFDVCxPQUFPO1FBQ0xNLFFBQVFDLEdBQUcsQ0FBQyxnQkFBY0gsVUFBVUQsUUFBUU0sSUFBSTtRQUNoRCxPQUFPTCxVQUFVRCxRQUFRTSxJQUFJO0lBQy9CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvbGlicy9yYW5raW5nRnVuY3Rpb25zLmpzPzI4ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvR29vZ2xlU2VhcmNoKGtleXdvcmQpIHtcclxuICBjb25zdCBkYXRhID0geydjb3VudHJ5JzogJ3VzJywncXVlcnknOnsncSc6a2V5d29yZCxudW06MTAwfSxudW06MTAwfTtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuYnJpZ2h0ZGF0YS5jb20vc2VycC9yZXE/Y3VzdG9tZXI9aGxfNTc3ODRlNGImem9uZT1yYW5rdHJhY2tlcic7XHJcbiAgY29uc3QgaGVhZGVycyA9IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZGEyYTZhMzktZGExYy00YTI0LTg2NDAtODA5ZjFjZjI2ODQ0J307XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KTtcclxuICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuICBpZiAoIXJlc3BvbnNlPy5oZWFkZXJzKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdubyBoZWFkZXIgaW4gcmVzcG9uc2UgJyt1cmwpO1xyXG4gICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2VJZDonK3Jlc3BvbnNlPy5oZWFkZXJzLmdldCgneC1yZXNwb25zZS1pZCcpKTtcclxuICAgIHJldHVybiByZXNwb25zZT8uaGVhZGVycy5nZXQoJ3gtcmVzcG9uc2UtaWQnKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRvR29vZ2xlU2VhcmNoIiwia2V5d29yZCIsImRhdGEiLCJudW0iLCJ1cmwiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/rankingFunctions.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Keyword.js":
/*!*******************************!*\
  !*** ./src/models/Keyword.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Keyword: () => (/* binding */ Keyword)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KeywordSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    domain: {\n        type: String,\n        required: true\n    },\n    keyword: {\n        type: String,\n        required: true,\n        validate: (val)=>val.length > 0\n    },\n    owner: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Keyword = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Keyword || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Keyword\", KeywordSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0tleXdvcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGdCQUFnQixJQUFJRCw0Q0FBTUEsQ0FBQztJQUMvQkUsUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFNBQVM7UUFDUEgsTUFBTUM7UUFDTkMsVUFBVTtRQUNWRSxVQUFVQyxDQUFBQSxNQUFPQSxJQUFJQyxNQUFNLEdBQUc7SUFDaEM7SUFDQUMsT0FBTztRQUFDUCxNQUFNQztRQUFRQyxVQUFVO0lBQUk7QUFDdEMsR0FBRztJQUFDTSxZQUFXO0FBQUk7QUFFWixNQUFNQyxVQUFVYiw0Q0FBTUEsRUFBRWEsV0FBV2QsK0NBQUtBLENBQUMsV0FBV0csZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmstdHJhY2tlci8uL3NyYy9tb2RlbHMvS2V5d29yZC5qcz9lMzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEtleXdvcmRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBkb21haW46IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICBrZXl3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHZhbGlkYXRlOiB2YWwgPT4gdmFsLmxlbmd0aCA+IDAsXHJcbiAgfSxcclxuICBvd25lcjoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG59LCB7dGltZXN0YW1wczp0cnVlfSk7XHJcblxyXG5leHBvcnQgY29uc3QgS2V5d29yZCA9IG1vZGVscz8uS2V5d29yZCB8fCBtb2RlbCgnS2V5d29yZCcsIEtleXdvcmRTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIktleXdvcmRTY2hlbWEiLCJkb21haW4iLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJrZXl3b3JkIiwidmFsaWRhdGUiLCJ2YWwiLCJsZW5ndGgiLCJvd25lciIsInRpbWVzdGFtcHMiLCJLZXl3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Keyword.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Result.js":
/*!******************************!*\
  !*** ./src/models/Result.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Result: () => (/* binding */ Result)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ResultSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    domain: {\n        type: String,\n        required: true\n    },\n    keyword: {\n        type: String,\n        required: true\n    },\n    brightDataResponseId: {\n        type: String,\n        required: true\n    },\n    rank: {\n        type: Number\n    },\n    complete: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst Result = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Result || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Result\", ResultSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Jlc3VsdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsZUFBZSxJQUFJRCw0Q0FBTUEsQ0FBQztJQUM5QkUsUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFNBQVM7UUFBQ0gsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3RDRSxzQkFBc0I7UUFBQ0osTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ25ERyxNQUFNO1FBQUNMLE1BQU1NO0lBQU07SUFDbkJDLFVBQVU7UUFBQ1AsTUFBTVE7UUFBU0MsU0FBUztJQUFLO0FBQzFDLEdBQUc7SUFBQ0MsWUFBVztBQUFJO0FBRVosTUFBTUMsU0FBU2YsNENBQU1BLEVBQUVlLFVBQVVoQiwrQ0FBS0EsQ0FBQyxVQUFVRyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLy4vc3JjL21vZGVscy9SZXN1bHQuanM/NjI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBSZXN1bHRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBkb21haW46IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICBrZXl3b3JkOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgYnJpZ2h0RGF0YVJlc3BvbnNlSWQ6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICByYW5rOiB7dHlwZTogTnVtYmVyfSxcclxuICBjb21wbGV0ZToge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxufSwge3RpbWVzdGFtcHM6dHJ1ZX0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdCA9IG1vZGVscz8uUmVzdWx0IHx8IG1vZGVsKCdSZXN1bHQnLCBSZXN1bHRTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlJlc3VsdFNjaGVtYSIsImRvbWFpbiIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImtleXdvcmQiLCJicmlnaHREYXRhUmVzcG9uc2VJZCIsInJhbmsiLCJOdW1iZXIiLCJjb21wbGV0ZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Result.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/mime-db","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/follow-redirects","vendor-chunks/oauth","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/object-hash","vendor-chunks/asynckit","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/combined-stream","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/cookie","vendor-chunks/delayed-stream","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fkeywords%2Froute&page=%2Fapi%2Fkeywords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkeywords%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();