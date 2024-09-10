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

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ansh_Desktop_rank_tracker_src_app_api_domains_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/domains/route.js */ \"(rsc)/./src/app/api/domains/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/domains/route\",\n        pathname: \"/api/domains\",\n        filename: \"route\",\n        bundlePath: \"app/api/domains/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\app\\\\api\\\\domains\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Ansh_Desktop_rank_tracker_src_app_api_domains_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/domains/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkb21haW5zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkb21haW5zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZG9tYWlucyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbnNoJTVDRGVza3RvcCU1Q3JhbmstdHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQW5zaCU1Q0Rlc2t0b3AlNUNyYW5rLXRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLz9kMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFuc2hcXFxcRGVza3RvcFxcXFxyYW5rLXRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZG9tYWluc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZG9tYWlucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2RvbWFpbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2RvbWFpbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBbnNoXFxcXERlc2t0b3BcXFxccmFuay10cmFja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGRvbWFpbnNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2RvbWFpbnMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/domains/route.js":
/*!**************************************!*\
  !*** ./src/app/api/domains/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/authOptions */ \"(rsc)/./src/libs/authOptions.js\");\n/* harmony import */ var _models_Domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Domain */ \"(rsc)/./src/models/Domain.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dom_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-parser */ \"(rsc)/./node_modules/dom-parser/index.js\");\n/* harmony import */ var dom_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_Keyword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Keyword */ \"(rsc)/./src/models/Keyword.js\");\n/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/Result */ \"(rsc)/./src/models/Result.js\");\n\n\n\n\n\n\n\n\n\nasync function getIconUrl(domain) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(`https://` + domain);\n    const parser = new (dom_parser__WEBPACK_IMPORTED_MODULE_4___default())();\n    const parsedHTML = parser.parseFromString(response.data, \"text/html\");\n    const links = parsedHTML.getElementsByTagName(\"link\");\n    let href = \"\";\n    for (const link of links){\n        const rel = link.attributes?.find((a)=>a.name === \"rel\")?.value || \"\";\n        if (rel.includes(\"icon\")) {\n            href = link.attributes?.find((a)=>a.name === \"href\")?.value;\n        }\n    }\n    if (href.includes(\"://\")) {\n        return href;\n    } else {\n        return `https://` + domain + href;\n    }\n}\nasync function POST(req) {\n    const data = await req.json();\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    let icon = null;\n    try {\n        icon = await getIconUrl(data?.domain);\n    } catch (e) {\n        console.error(e);\n    }\n    const doc = await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.create({\n        domain: data?.domain,\n        owner: session?.user?.email,\n        icon\n    });\n    return Response.json(doc);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    const email = session.user?.email;\n    const domains = await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.find({\n        owner: email\n    });\n    const keywords = await _models_Keyword__WEBPACK_IMPORTED_MODULE_6__.Keyword.find({\n        owner: email,\n        domain: domains.map((doc)=>doc.domain)\n    });\n    const results = await _models_Result__WEBPACK_IMPORTED_MODULE_7__.Result.find({\n        domain: domains.map((doc)=>doc.domain),\n        keyword: keywords.map((doc)=>doc.keyword)\n    });\n    return Response.json({\n        domains,\n        keywords,\n        results\n    });\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI);\n    const url = new url__WEBPACK_IMPORTED_MODULE_5__.URL(req.url);\n    const domain = url.searchParams.get(\"domain\");\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    await _models_Domain__WEBPACK_IMPORTED_MODULE_1__.Domain.deleteOne({\n        owner: session.user?.email,\n        domain\n    });\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxNQUFNL0IsMkRBQWdCQSxDQUFDSiwwREFBV0E7SUFDbEQsTUFBTUMsa0RBQU1BLENBQUNzRCxTQUFTLENBQUM7UUFBQ2IsT0FBTVAsUUFBUVEsSUFBSSxFQUFFQztRQUFNbEM7SUFBTTtJQUN4RCxPQUFPbUMsU0FBU2YsSUFBSSxDQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLy4vc3JjL2FwcC9hcGkvZG9tYWlucy9yb3V0ZS5qcz8wYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0aE9wdGlvbnN9IGZyb20gXCJAL2xpYnMvYXV0aE9wdGlvbnNcIjtcclxuaW1wb3J0IHtEb21haW59IGZyb20gXCJAL21vZGVscy9Eb21haW5cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7Z2V0U2VydmVyU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgRG9tUGFyc2VyIGZyb20gJ2RvbS1wYXJzZXInO1xyXG5pbXBvcnQge1VSTH0gZnJvbSBcInVybFwiO1xyXG5pbXBvcnQge0tleXdvcmR9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvS2V5d29yZFwiO1xyXG5pbXBvcnQge1Jlc3VsdH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9SZXN1bHRcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEljb25VcmwoZG9tYWluKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYCtkb21haW4pO1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBEb21QYXJzZXIoKTtcclxuICBjb25zdCBwYXJzZWRIVE1MID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZS5kYXRhLCAndGV4dC9odG1sJyk7XHJcbiAgY29uc3QgbGlua3MgPSBwYXJzZWRIVE1MLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XHJcbiAgbGV0IGhyZWYgPSAnJztcclxuICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgIGNvbnN0IHJlbCA9IGxpbmsuYXR0cmlidXRlcz8uZmluZChhID0+IGEubmFtZSA9PT0gJ3JlbCcpPy52YWx1ZSB8fCAnJztcclxuICAgIGlmIChyZWwuaW5jbHVkZXMoJ2ljb24nKSkge1xyXG4gICAgICBocmVmID0gbGluay5hdHRyaWJ1dGVzPy5maW5kKGEgPT4gYS5uYW1lID09PSAnaHJlZicpPy52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGhyZWYuaW5jbHVkZXMoJzovLycpKSB7XHJcbiAgICByZXR1cm4gaHJlZjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwczovL2AgKyBkb21haW4gKyBocmVmO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGxldCBpY29uID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgaWNvbiA9IGF3YWl0IGdldEljb25VcmwoZGF0YT8uZG9tYWluKTtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvYyA9IGF3YWl0IERvbWFpbi5jcmVhdGUoe1xyXG4gICAgZG9tYWluOiBkYXRhPy5kb21haW4sXHJcbiAgICBvd25lcjogc2Vzc2lvbj8udXNlcj8uZW1haWwsXHJcbiAgICBpY29uLFxyXG4gIH0pO1xyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKGRvYyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGNvbnN0IGVtYWlsID0gc2Vzc2lvbi51c2VyPy5lbWFpbDtcclxuICBjb25zdCBkb21haW5zID0gYXdhaXQgRG9tYWluLmZpbmQoe293bmVyOmVtYWlsfSk7XHJcbiAgY29uc3Qga2V5d29yZHMgPSBhd2FpdCBLZXl3b3JkLmZpbmQoe1xyXG4gICAgb3duZXI6ZW1haWwsXHJcbiAgICBkb21haW46ZG9tYWlucy5tYXAoZG9jID0+IGRvYy5kb21haW4pLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBSZXN1bHQuZmluZCh7XHJcbiAgICBkb21haW46ZG9tYWlucy5tYXAoZG9jID0+IGRvYy5kb21haW4pLFxyXG4gICAga2V5d29yZDprZXl3b3Jkcy5tYXAoZG9jID0+IGRvYy5rZXl3b3JkKVxyXG4gIH0pO1xyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHtkb21haW5zLGtleXdvcmRzLHJlc3VsdHN9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gIGNvbnN0IGRvbWFpbiA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdkb21haW4nKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgYXdhaXQgRG9tYWluLmRlbGV0ZU9uZSh7b3duZXI6c2Vzc2lvbi51c2VyPy5lbWFpbCxkb21haW59KTtcclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcclxufSJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsIkRvbWFpbiIsImF4aW9zIiwibW9uZ29vc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiRG9tUGFyc2VyIiwiVVJMIiwiS2V5d29yZCIsIlJlc3VsdCIsImdldEljb25VcmwiLCJkb21haW4iLCJyZXNwb25zZSIsImdldCIsInBhcnNlciIsInBhcnNlZEhUTUwiLCJwYXJzZUZyb21TdHJpbmciLCJkYXRhIiwibGlua3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhyZWYiLCJsaW5rIiwicmVsIiwiYXR0cmlidXRlcyIsImZpbmQiLCJhIiwibmFtZSIsInZhbHVlIiwiaW5jbHVkZXMiLCJQT1NUIiwicmVxIiwianNvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJzZXNzaW9uIiwiaWNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkb2MiLCJjcmVhdGUiLCJvd25lciIsInVzZXIiLCJlbWFpbCIsIlJlc3BvbnNlIiwiR0VUIiwiZG9tYWlucyIsImtleXdvcmRzIiwibWFwIiwicmVzdWx0cyIsImtleXdvcmQiLCJERUxFVEUiLCJ1cmwiLCJzZWFyY2hQYXJhbXMiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/domains/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/authOptions.js":
/*!*********************************!*\
  !*** ./src/libs/authOptions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoClient */ \"(rsc)/./src/libs/mongoClient.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_libs_mongoClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    secret: process.env.SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9hdXRoT3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBQ1M7QUFDRjtBQUUvQyxNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RILHNFQUFjQSxDQUFDO1lBQ2JJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLFNBQVNULHFFQUFjQSxDQUFDRix5REFBYUE7SUFDckNZLFFBQVFOLFFBQVFDLEdBQUcsQ0FBQ00sTUFBTTtBQUM1QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLy4vc3JjL2xpYnMvYXV0aE9wdGlvbnMuanM/ZGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ2xpZW50XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVRcclxuICAgIH0pXHJcbiAgXSxcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxufTtcclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhZGFwdGVyIiwic2VjcmV0IiwiU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/authOptions.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/mime-db","vendor-chunks/openid-client","vendor-chunks/axios","vendor-chunks/@babel","vendor-chunks/follow-redirects","vendor-chunks/oauth","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/combined-stream","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/@auth","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/has-flag","vendor-chunks/dom-parser"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdomains%2Froute&page=%2Fapi%2Fdomains%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdomains%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();