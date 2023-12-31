"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  querys: true
};
Object.defineProperty(exports, "querys", {
  enumerable: true,
  get: function get() {
    return _querys.querys;
  }
});
var _conection = require("./conection");
Object.keys(_conection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _conection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conection[key];
    }
  });
});
var _querys = require("./querys");