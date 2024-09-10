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
exports.id = "app/api/results/route";
exports.ids = ["app/api/results/route"];
exports.modules = {

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fresults%2Froute&page=%2Fapi%2Fresults%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fresults%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fresults%2Froute&page=%2Fapi%2Fresults%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fresults%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Ansh_Desktop_rank_tracker_src_app_api_results_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/results/route.js */ \"(rsc)/./src/app/api/results/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/results/route\",\n        pathname: \"/api/results\",\n        filename: \"route\",\n        bundlePath: \"app/api/results/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ansh\\\\Desktop\\\\rank-tracker\\\\src\\\\app\\\\api\\\\results\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Ansh_Desktop_rank_tracker_src_app_api_results_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/results/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZXN1bHRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXN1bHRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVzdWx0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbnNoJTVDRGVza3RvcCU1Q3JhbmstdHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQW5zaCU1Q0Rlc2t0b3AlNUNyYW5rLXRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDc0M7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuay10cmFja2VyLz8xNzcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBbnNoXFxcXERlc2t0b3BcXFxccmFuay10cmFja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJlc3VsdHNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jlc3VsdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZXN1bHRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZXN1bHRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQW5zaFxcXFxEZXNrdG9wXFxcXHJhbmstdHJhY2tlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZXN1bHRzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Jlc3VsdHMvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fresults%2Froute&page=%2Fapi%2Fresults%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fresults%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/results/route.js":
/*!**************************************!*\
  !*** ./src/app/api/results/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Result */ \"(rsc)/./src/models/Result.js\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    const data = await req.json();\n    const response_id = data.response_id;\n    const url = \"https://api.brightdata.com/serp/get_result?output=json&customer=hl_57784e4b&zone=ranktracker&response_id=\" + response_id;\n    const headers = {\n        \"Authorization\": \"Bearer \" + process.env.BRIGHTDATA_API_KEY\n    };\n    console.log(\"Fetching result for:\" + response_id);\n    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url, {\n        headers\n    });\n    const ourResultDoc = await _models_Result__WEBPACK_IMPORTED_MODULE_1__.Result.findOne({\n        brightDataResponseId: response_id\n    });\n    if (ourResultDoc) {\n        console.log(\"our result found\");\n        const domain = ourResultDoc.domain;\n        const keyword = ourResultDoc.keyword;\n        const rank = response?.data?.organic?.find((result)=>result.link.includes(domain))?.rank;\n        ourResultDoc.complete = true;\n        if (rank) {\n            ourResultDoc.rank = rank;\n            console.log(`Rank ${rank} saved for keyword ${keyword} and domain ${domain}`);\n        }\n        await ourResultDoc.save();\n    } else {\n        console.log(\"our result NOT found\");\n    }\n    return Response.json(true);\n}\nasync function GET(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    const url = new url__WEBPACK_IMPORTED_MODULE_2__.URL(req.url);\n    const id = url.searchParams.get(\"id\");\n    const domain = url.searchParams.get(\"domain\");\n    const keyword = url.searchParams.get(\"keyword\");\n    if (id) {\n        return Response.json(await _models_Result__WEBPACK_IMPORTED_MODULE_1__.Result.findOne({\n            brightDataResponseId: id\n        }));\n    }\n    if (domain && keyword) {\n        return Response.json(await _models_Result__WEBPACK_IMPORTED_MODULE_1__.Result.find({\n            domain,\n            keyword\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXN1bHRzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ007QUFDYztBQUN0QjtBQUVqQixlQUFlSSxLQUFLQyxHQUFHO0lBQzVCSix1REFBZ0IsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ3hDLE1BQU1DLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtJQUMzQixNQUFNQyxjQUFjRixLQUFLRSxXQUFXO0lBQ3BDLE1BQU1DLE1BQU0sOEdBQThHRDtJQUMxSCxNQUFNRSxVQUFVO1FBQUMsaUJBQWlCLFlBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sa0JBQWtCO0lBQUE7SUFDMUVDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBdUJMO0lBQ25DLE1BQU1NLFdBQVcsTUFBTWxCLDZDQUFLQSxDQUFDbUIsR0FBRyxDQUFDTixLQUFLO1FBQUNDO0lBQU87SUFDOUMsTUFBTU0sZUFBZSxNQUFNbEIsa0RBQU1BLENBQUNtQixPQUFPLENBQUM7UUFDeENDLHNCQUFzQlY7SUFDeEI7SUFDQSxJQUFJUSxjQUFjO1FBQ2hCSixRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNTSxTQUFTSCxhQUFhRyxNQUFNO1FBQ2xDLE1BQU1DLFVBQVVKLGFBQWFJLE9BQU87UUFDcEMsTUFBTUMsT0FBT1AsVUFBVVIsTUFBTWdCLFNBQ3pCQyxLQUFLQyxDQUFBQSxTQUFVQSxPQUFPQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1AsVUFBVUU7UUFDbERMLGFBQWFXLFFBQVEsR0FBRztRQUN4QixJQUFJTixNQUFNO1lBQ1JMLGFBQWFLLElBQUksR0FBR0E7WUFDcEJULFFBQVFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRVEsS0FBSyxtQkFBbUIsRUFBRUQsUUFBUSxZQUFZLEVBQUVELE9BQU8sQ0FBQztRQUM5RTtRQUNBLE1BQU1ILGFBQWFZLElBQUk7SUFDekIsT0FBTztRQUNMaEIsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFDQSxPQUFPZ0IsU0FBU3RCLElBQUksQ0FBQztBQUN2QjtBQUVPLGVBQWV1QixJQUFJN0IsR0FBRztJQUMzQkosdURBQWdCLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN4QyxNQUFNSSxNQUFNLElBQUlWLG9DQUFHQSxDQUFDRSxJQUFJUSxHQUFHO0lBQzNCLE1BQU1zQixLQUFLdEIsSUFBSXVCLFlBQVksQ0FBQ2pCLEdBQUcsQ0FBQztJQUNoQyxNQUFNSSxTQUFTVixJQUFJdUIsWUFBWSxDQUFDakIsR0FBRyxDQUFDO0lBQ3BDLE1BQU1LLFVBQVVYLElBQUl1QixZQUFZLENBQUNqQixHQUFHLENBQUM7SUFDckMsSUFBSWdCLElBQUk7UUFDTixPQUFPRixTQUFTdEIsSUFBSSxDQUNsQixNQUFNVCxrREFBTUEsQ0FBQ21CLE9BQU8sQ0FBQztZQUFDQyxzQkFBcUJhO1FBQUU7SUFFakQ7SUFDQSxJQUFJWixVQUFVQyxTQUFTO1FBQ3JCLE9BQU9TLFNBQVN0QixJQUFJLENBQ2xCLE1BQU1ULGtEQUFNQSxDQUFDeUIsSUFBSSxDQUFDO1lBQUNKO1lBQU9DO1FBQU87SUFFckM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmstdHJhY2tlci8uL3NyYy9hcHAvYXBpL3Jlc3VsdHMvcm91dGUuanM/YzNmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtSZXN1bHR9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvUmVzdWx0XCI7XHJcbmltcG9ydCB7VVJMfSBmcm9tICd1cmwnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgY29uc3QgcmVzcG9uc2VfaWQgPSBkYXRhLnJlc3BvbnNlX2lkO1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5icmlnaHRkYXRhLmNvbS9zZXJwL2dldF9yZXN1bHQ/b3V0cHV0PWpzb24mY3VzdG9tZXI9aGxfNTc3ODRlNGImem9uZT1yYW5rdHJhY2tlciZyZXNwb25zZV9pZD0nICsgcmVzcG9uc2VfaWQ7XHJcbiAgY29uc3QgaGVhZGVycyA9IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJytwcm9jZXNzLmVudi5CUklHSFREQVRBX0FQSV9LRVl9O1xyXG4gIGNvbnNvbGUubG9nKCdGZXRjaGluZyByZXN1bHQgZm9yOicrcmVzcG9uc2VfaWQpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge2hlYWRlcnN9KTtcclxuICBjb25zdCBvdXJSZXN1bHREb2MgPSBhd2FpdCBSZXN1bHQuZmluZE9uZSh7XHJcbiAgICBicmlnaHREYXRhUmVzcG9uc2VJZDogcmVzcG9uc2VfaWQsXHJcbiAgfSk7XHJcbiAgaWYgKG91clJlc3VsdERvYykge1xyXG4gICAgY29uc29sZS5sb2coJ291ciByZXN1bHQgZm91bmQnKTtcclxuICAgIGNvbnN0IGRvbWFpbiA9IG91clJlc3VsdERvYy5kb21haW47XHJcbiAgICBjb25zdCBrZXl3b3JkID0gb3VyUmVzdWx0RG9jLmtleXdvcmQ7XHJcbiAgICBjb25zdCByYW5rID0gcmVzcG9uc2U/LmRhdGE/Lm9yZ2FuaWNcclxuICAgICAgPy5maW5kKHJlc3VsdCA9PiByZXN1bHQubGluay5pbmNsdWRlcyhkb21haW4pKT8ucmFuaztcclxuICAgIG91clJlc3VsdERvYy5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICBpZiAocmFuaykge1xyXG4gICAgICBvdXJSZXN1bHREb2MucmFuayA9IHJhbms7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBSYW5rICR7cmFua30gc2F2ZWQgZm9yIGtleXdvcmQgJHtrZXl3b3JkfSBhbmQgZG9tYWluICR7ZG9tYWlufWApO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgb3VyUmVzdWx0RG9jLnNhdmUoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ291ciByZXN1bHQgTk9UIGZvdW5kJyk7XHJcbiAgfVxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcclxuICBjb25zdCBkb21haW4gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnZG9tYWluJyk7XHJcbiAgY29uc3Qga2V5d29yZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdrZXl3b3JkJyk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAgYXdhaXQgUmVzdWx0LmZpbmRPbmUoe2JyaWdodERhdGFSZXNwb25zZUlkOmlkfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChkb21haW4gJiYga2V5d29yZCkge1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIGF3YWl0IFJlc3VsdC5maW5kKHtkb21haW4sa2V5d29yZH0pXHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIm1vbmdvb3NlIiwiUmVzdWx0IiwiVVJMIiwiUE9TVCIsInJlcSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYXRhIiwianNvbiIsInJlc3BvbnNlX2lkIiwidXJsIiwiaGVhZGVycyIsIkJSSUdIVERBVEFfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImdldCIsIm91clJlc3VsdERvYyIsImZpbmRPbmUiLCJicmlnaHREYXRhUmVzcG9uc2VJZCIsImRvbWFpbiIsImtleXdvcmQiLCJyYW5rIiwib3JnYW5pYyIsImZpbmQiLCJyZXN1bHQiLCJsaW5rIiwiaW5jbHVkZXMiLCJjb21wbGV0ZSIsInNhdmUiLCJSZXNwb25zZSIsIkdFVCIsImlkIiwic2VhcmNoUGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/results/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/mime-db","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fresults%2Froute&page=%2Fapi%2Fresults%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fresults%2Froute.js&appDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnsh%5CDesktop%5Crank-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();