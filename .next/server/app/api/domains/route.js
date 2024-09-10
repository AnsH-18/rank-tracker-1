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
exports.id = "app/api/domains/route";
exports.ids = ["app/api/domains/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Ansh_Desktop_rank_tracker_src_app_api_domains_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/domains/route.js */ \"(rsc)/./src/app/api/domains/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/domains/route\",\n        pathname: \"/api/domains\",\n        filename: \"route\",\n        bundlePath: \"app/api/domains/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\app\\\\api\\\\domains\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Ansh_Desktop_rank_tracker_src_app_api_domains_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/domains/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkb21haW5zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkb21haW5zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZG9tYWlucyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbnNoJTVDRGVza3RvcCU1Q3JhbmstdHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQW5zaCU1Q0Rlc2t0b3AlNUNyYW5rLXRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDc0M7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLz9kMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBbnNoXFxcXERlc2t0b3BcXFxccmFuay10cmFja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGRvbWFpbnNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RvbWFpbnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kb21haW5zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kb21haW5zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQW5zaFxcXFxEZXNrdG9wXFxcXHJhbmstdHJhY2tlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkb21haW5zXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2RvbWFpbnMvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoClient */ \"(rsc)/./src/libs/mongoClient.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    secret: process.env.SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZjtBQUN3QjtBQUNGO0FBRS9DLE1BQU1JLGNBQWM7SUFDekJDLFdBQVc7UUFDVEgsc0VBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBU1QscUVBQWNBLENBQUNILHlEQUFhQTtJQUNyQ2EsUUFBUU4sUUFBUUMsR0FBRyxDQUFDTSxNQUFNO0FBQzVCLEVBQUU7QUFFRixNQUFNQyxVQUFVZCxnREFBUUEsQ0FBQ0c7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ2xpZW50XCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/domains/route.js":
/*!**************************************!*\
  !*** ./src/app/api/domains/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _models_Domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Domain */ \"(rsc)/./src/models/Domain.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dom_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-parser */ \"(rsc)/./node_modules/dom-parser/index.js\");\n/* harmony import */ var dom_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_Keyword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Keyword */ \"(rsc)/./src/models/Keyword.js\");\n/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/Result */ \"(rsc)/./src/models/Result.js\");\n\n\n\n\n\n\n\n\n\nasync function getIconUrl(domain) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(`https://` + domain);\n    const parser = new (dom_parser__WEBPACK_IMPORTED_MODULE_4___default())();\n    const parsedHTML = parser.parseFromString(response.data, \"text/html\");\n    const links = parsedHTML.getElementsByTagName(\"link\");\n    let href = \"\";\n    for (const link of links){\n        const rel = link.attributes?.find((a)=>a.name === \"rel\")?.value || \"\";\n        if (rel.includes(\"icon\")) {\n            href = link.attributes?.find((a)=>a.name === \"href\")?.value;\n        }\n    }\n    if (href.includes(\"://\")) {\n        return href;\n    } else {\n        return `https://` + domain + href;\n    }\n}\nasync function POST(req) {\n    const data = await req.json();\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    let icon = null;\n    try {\n        icon = await getIconUrl(data?.domain);\n    } catch (e) {\n        console.error(e);\n    }\n    const doc = await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.create({\n        domain: data?.domain,\n        owner: session?.user?.email,\n        icon\n    });\n    return Response.json(doc);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    const email = session.user?.email;\n    const domains = await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.find({\n        owner: email\n    });\n    const keywords = await _models_Keyword__WEBPACK_IMPORTED_MODULE_6__.Keyword.find({\n        owner: email,\n        domain: domains.map((doc)=>doc.domain)\n    });\n    const results = await _models_Result__WEBPACK_IMPORTED_MODULE_7__.Result.find({\n        domain: domains.map((doc)=>doc.domain),\n        keyword: keywords.map((doc)=>doc.keyword)\n    });\n    return Response.json({\n        domains,\n        keywords,\n        results\n    });\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const url = new url__WEBPACK_IMPORTED_MODULE_5__.URL(req.url);\n    const domain = url.searchParams.get(\"domain\");\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.deleteOne({\n        owner: session.user?.email,\n        domain\n    });\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTS9CLDJEQUFnQkEsQ0FBQ0oscUVBQVdBO0lBQ2xELE1BQU1DLGtEQUFNQSxDQUFDc0QsU0FBUyxDQUFDO1FBQUNiLE9BQU1QLFFBQVFRLElBQUksRUFBRUM7UUFBTWxDO0lBQU07SUFDeEQsT0FBT21DLFNBQVNmLElBQUksQ0FBQztBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmstdHJhY2tlci8uL3NyYy9hcHAvYXBpL2RvbWFpbnMvcm91dGUuanM/MGMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dGhPcHRpb25zfSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5pbXBvcnQge0RvbWFpbn0gZnJvbSBcIkAvbW9kZWxzL0RvbWFpblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtnZXRTZXJ2ZXJTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBEb21QYXJzZXIgZnJvbSAnZG9tLXBhcnNlcic7XHJcbmltcG9ydCB7VVJMfSBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCB7S2V5d29yZH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9LZXl3b3JkXCI7XHJcbmltcG9ydCB7UmVzdWx0fSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Jlc3VsdFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SWNvblVybChkb21haW4pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9gK2RvbWFpbik7XHJcbiAgY29uc3QgcGFyc2VyID0gbmV3IERvbVBhcnNlcigpO1xyXG4gIGNvbnN0IHBhcnNlZEhUTUwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHJlc3BvbnNlLmRhdGEsICd0ZXh0L2h0bWwnKTtcclxuICBjb25zdCBsaW5rcyA9IHBhcnNlZEhUTUwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcclxuICBsZXQgaHJlZiA9ICcnO1xyXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgY29uc3QgcmVsID0gbGluay5hdHRyaWJ1dGVzPy5maW5kKGEgPT4gYS5uYW1lID09PSAncmVsJyk/LnZhbHVlIHx8ICcnO1xyXG4gICAgaWYgKHJlbC5pbmNsdWRlcygnaWNvbicpKSB7XHJcbiAgICAgIGhyZWYgPSBsaW5rLmF0dHJpYnV0ZXM/LmZpbmQoYSA9PiBhLm5hbWUgPT09ICdocmVmJyk/LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoaHJlZi5pbmNsdWRlcygnOi8vJykpIHtcclxuICAgIHJldHVybiBocmVmO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vYCArIGRvbWFpbiArIGhyZWY7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgbGV0IGljb24gPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBpY29uID0gYXdhaXQgZ2V0SWNvblVybChkYXRhPy5kb21haW4pO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICB9XHJcbiAgY29uc3QgZG9jID0gYXdhaXQgRG9tYWluLmNyZWF0ZSh7XHJcbiAgICBkb21haW46IGRhdGE/LmRvbWFpbixcclxuICAgIG93bmVyOiBzZXNzaW9uPy51c2VyPy5lbWFpbCxcclxuICAgIGljb24sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oZG9jKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgY29uc3QgZW1haWwgPSBzZXNzaW9uLnVzZXI/LmVtYWlsO1xyXG4gIGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBEb21haW4uZmluZCh7b3duZXI6ZW1haWx9KTtcclxuICBjb25zdCBrZXl3b3JkcyA9IGF3YWl0IEtleXdvcmQuZmluZCh7XHJcbiAgICBvd25lcjplbWFpbCxcclxuICAgIGRvbWFpbjpkb21haW5zLm1hcChkb2MgPT4gZG9jLmRvbWFpbiksXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFJlc3VsdC5maW5kKHtcclxuICAgIGRvbWFpbjpkb21haW5zLm1hcChkb2MgPT4gZG9jLmRvbWFpbiksXHJcbiAgICBrZXl3b3JkOmtleXdvcmRzLm1hcChkb2MgPT4gZG9jLmtleXdvcmQpXHJcbiAgfSk7XHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe2RvbWFpbnMsa2V5d29yZHMscmVzdWx0c30pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgZG9tYWluID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2RvbWFpbicpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBhd2FpdCBEb21haW4uZGVsZXRlT25lKHtvd25lcjpzZXNzaW9uLnVzZXI/LmVtYWlsLGRvbWFpbn0pO1xyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xyXG59Il0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiRG9tYWluIiwiYXhpb3MiLCJtb25nb29zZSIsImdldFNlcnZlclNlc3Npb24iLCJEb21QYXJzZXIiLCJVUkwiLCJLZXl3b3JkIiwiUmVzdWx0IiwiZ2V0SWNvblVybCIsImRvbWFpbiIsInJlc3BvbnNlIiwiZ2V0IiwicGFyc2VyIiwicGFyc2VkSFRNTCIsInBhcnNlRnJvbVN0cmluZyIsImRhdGEiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaHJlZiIsImxpbmsiLCJyZWwiLCJhdHRyaWJ1dGVzIiwiZmluZCIsImEiLCJuYW1lIiwidmFsdWUiLCJpbmNsdWRlcyIsIlBPU1QiLCJyZXEiLCJqc29uIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInNlc3Npb24iLCJpY29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRvYyIsImNyZWF0ZSIsIm93bmVyIiwidXNlciIsImVtYWlsIiwiUmVzcG9uc2UiLCJHRVQiLCJkb21haW5zIiwia2V5d29yZHMiLCJtYXAiLCJyZXN1bHRzIiwia2V5d29yZCIsIkRFTEVURSIsInVybCIsInNlYXJjaFBhcmFtcyIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/domains/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoClient.js":
/*!*********************************!*\
  !*** ./src/libs/mongoClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDO0lBQ0FILGdCQUFnQkMsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvbGlicy9tb25nb0NsaWVudC5qcz9hOTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoClient.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Domain.js":
/*!******************************!*\
  !*** ./src/models/Domain.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Domain: () => (/* binding */ Domain)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst domainRegex = /[a-z0-9]+\\.[a-z0-9\\.]+/;\nconst DomainSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    domain: {\n        type: String,\n        required: true,\n        validate: (val)=>domainRegex.test(val)\n    },\n    owner: {\n        type: String,\n        required: true\n    },\n    icon: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Domain = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Domain || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Domain\", DomainSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0RvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsY0FBYztBQUVwQixNQUFNQyxlQUFlLElBQUlGLDRDQUFNQSxDQUFDO0lBQzlCRyxRQUFRO1FBQUNDLE1BQUtDO1FBQVFDLFVBQVU7UUFBTUMsVUFBVUMsQ0FBQUEsTUFBT1AsWUFBWVEsSUFBSSxDQUFDRDtJQUFJO0lBQzVFRSxPQUFPO1FBQUNOLE1BQUtDO1FBQVFDLFVBQVU7SUFBSTtJQUNuQ0ssTUFBTTtRQUFDUCxNQUFLQztJQUFNO0FBQ3BCLEdBQUc7SUFBQ08sWUFBWTtBQUFJO0FBRWIsTUFBTUMsU0FBU2QsNENBQU1BLEVBQUVjLFVBQVVmLCtDQUFLQSxDQUFDLFVBQVVJLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5rLXRyYWNrZXIvLi9zcmMvbW9kZWxzL0RvbWFpbi5qcz80YWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW9kZWwsIG1vZGVscywgU2NoZW1hfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGRvbWFpblJlZ2V4ID0gL1thLXowLTldK1xcLlthLXowLTlcXC5dKy87XHJcblxyXG5jb25zdCBEb21haW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBkb21haW46IHt0eXBlOlN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHZhbGlkYXRlOiB2YWwgPT4gZG9tYWluUmVnZXgudGVzdCh2YWwpfSxcclxuICBvd25lcjoge3R5cGU6U3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgaWNvbjoge3R5cGU6U3RyaW5nfSxcclxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBEb21haW4gPSBtb2RlbHM/LkRvbWFpbiB8fCBtb2RlbCgnRG9tYWluJywgRG9tYWluU2NoZW1hKTsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJkb21haW5SZWdleCIsIkRvbWFpblNjaGVtYSIsImRvbWFpbiIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwidmFsIiwidGVzdCIsIm93bmVyIiwiaWNvbiIsInRpbWVzdGFtcHMiLCJEb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Domain.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/mime-db","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/follow-redirects","vendor-chunks/oauth","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/object-hash","vendor-chunks/asynckit","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/combined-stream","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/cookie","vendor-chunks/delayed-stream","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/has-flag","vendor-chunks/dom-parser"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();