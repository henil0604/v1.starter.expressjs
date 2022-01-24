'use strict';var require$$0=require('@helper-modules/log'),require$$1=require('@helper-modules/env'),require$$2=require('@helper-modules/random'),require$$3=require('@helper-modules/sleep'),require$$0$1=require('express');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var require$$0__default=/*#__PURE__*/_interopDefaultLegacy(require$$0);var require$$1__default=/*#__PURE__*/_interopDefaultLegacy(require$$1);var require$$2__default=/*#__PURE__*/_interopDefaultLegacy(require$$2);var require$$3__default=/*#__PURE__*/_interopDefaultLegacy(require$$3);var require$$0__default$1=/*#__PURE__*/_interopDefaultLegacy(require$$0$1);var server = {};var app_config = {
    name: "v1.starter.expressjs",
    PORT: 4001
};globalThis.log = require$$0__default["default"];
globalThis.env = require$$1__default["default"];
globalThis.random = require$$2__default["default"];
globalThis.sleep = require$$3__default["default"];

globalThis.Config = {};
globalThis.Config.App = app_config;const Express = require$$0__default$1["default"];

const App$1 = Express();

var Index = App$1;log(`--{${Config.App.name}}--`);

log("Importing App");
const App = Index;



App.listen(Config.App.PORT || 4001, () => {
    log(`Listening on {${Config.App.PORT}}`);
});module.exports=server;//# sourceMappingURL=server.js.map
