"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewDoctor = exports.GetAllDoctors = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var _querys = require("../database/querys");
var GetAllDoctors = exports.GetAllDoctors = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_querys.querysDoctor.GetAllDoctors);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function GetAllDoctors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addNewDoctor = exports.addNewDoctor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, ID_Medico, Nombre, Apellido, Especialidad, Telefono, Correo_Electronico, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, ID_Medico = _req$body.ID_Medico, Nombre = _req$body.Nombre, Apellido = _req$body.Apellido, Especialidad = _req$body.Especialidad, Telefono = _req$body.Telefono, Correo_Electronico = _req$body.Correo_Electronico;
          if (!(ID_Medico == null || Nombre == null)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Porfavor llena todos los campos'
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input('ID_Medico', _database.sql.Int, ID_Medico).input('Nombre', _database.sql.VarChar, Nombre).input('Apellido', _database.sql.VarChar, Apellido).input('Especialidad', _database.sql.VarChar, Especialidad).input('Telefono', _database.sql.Int, Telefono).input('Correo_Electronico', _database.sql.VarChar, Correo_Electronico).query(_querys.querysDoctor.AddDoctor);
        case 9:
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return function addNewDoctor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();