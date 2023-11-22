"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePatientById = exports.getTotalPatient = exports.getPatientById = exports.getGeneral = exports.deletePatientById = exports.addNewPatient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var _querys = require("../database/querys");
var getGeneral = exports.getGeneral = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.querysPatient.GetAllPatients);
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
  return function getGeneral(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addNewPatient = exports.addNewPatient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_Electronico, ID_Aseguradora, ID_Paciente, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, Nombre = _req$body.Nombre, Apellido = _req$body.Apellido, Genero = _req$body.Genero, Fecha_Nacimiento = _req$body.Fecha_Nacimiento, Direccion = _req$body.Direccion, Telefono = _req$body.Telefono, Correo_Electronico = _req$body.Correo_Electronico, ID_Aseguradora = _req$body.ID_Aseguradora;
          ID_Paciente = req.params.ID_Paciente;
          console.log(req.body);
          if (!(ID_Paciente == null || Nombre == null)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Porfavor llena todos los campos'
          }));
        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return (0, _database.getConnection)();
        case 8:
          pool = _context2.sent;
          _context2.next = 11;
          return pool.request().input("ID_Paciente", _database.sql.Int, ID_Paciente).input("Nombre", _database.sql.VarChar, Nombre).input("Apellido", _database.sql.VarChar, Apellido).input("Genero", _database.sql.Char, Genero).input("Fecha_Nacimiento", _database.sql.Date, Fecha_Nacimiento).input("Direccion", _database.sql.VarChar, Direccion).input("Telefono", _database.sql.Int, Telefono).input("Correo_Electronico", _database.sql.VarChar, Correo_Electronico).input("ID_Aseguradora", _database.sql.Int, ID_Aseguradora).query(_database.querys.addNewPatient);
        case 11:
          res.json({
            ID_Paciente: ID_Paciente,
            Nombre: Nombre,
            Apellido: Apellido,
            Genero: Genero,
            Fecha_Nacimiento: Fecha_Nacimiento,
            Direccion: Direccion,
            Telefono: Telefono,
            Correo_Electronico: Correo_Electronico,
            ID_Aseguradora: ID_Aseguradora
          });
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](5);
          res.status(500);
          res.send(_context2.t0.message);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 14]]);
  }));
  return function addNewPatient(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getPatientById = exports.getPatientById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var ID_Paciente, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          ID_Paciente = req.params.ID_Paciente;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("ID_Paciente", ID_Paciente).query(_database.querys.getPatientById);
        case 6:
          result = _context3.sent;
          res.send(result.recordset[0]);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getPatientById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deletePatientById = exports.deletePatientById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var ID_Paciente, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID_Paciente = req.params.ID_Paciente;
          _context4.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("ID_Paciente", ID_Paciente).query(_database.querys.deletePatient);
        case 6:
          result = _context4.sent;
          res.sendStatus(204);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deletePatientById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getTotalPatient = exports.getTotalPatient = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context5.sent;
          _context5.next = 5;
          return pool.request().query(_database.querys.getTotalPatient);
        case 5:
          result = _context5.sent;
          console.log(result);
          res.json(result.recordset[0]['']);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getTotalPatient(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updatePatientById = exports.updatePatientById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_Electronico, ID_Aseguradora, ID_Paciente, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, Nombre = _req$body2.Nombre, Apellido = _req$body2.Apellido, Genero = _req$body2.Genero, Fecha_Nacimiento = _req$body2.Fecha_Nacimiento, Direccion = _req$body2.Direccion, Telefono = _req$body2.Telefono, Correo_Electronico = _req$body2.Correo_Electronico, ID_Aseguradora = _req$body2.ID_Aseguradora;
          ID_Paciente = req.params.ID_Paciente;
          if (!(ID_Paciente == null || Nombre == null)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: 'Bad request, Por favor llene todos los campos'
          }));
        case 4:
          _context6.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input("ID_Paciente", _database.sql.Int, ID_Paciente).input("Nombre", _database.sql.VarChar, Nombre).input("Apellido", _database.sql.VarChar, Apellido).input("Genero", _database.sql.Char, Genero).input("Fecha_Nacimiento", _database.sql.Date, Fecha_Nacimiento).input("Direccion", _database.sql.VarChar, Direccion).input("Telefono", _database.sql.Int, Telefono).input("Correo_Electronico", _database.sql.VarChar, Correo_Electronico).input("ID_Aseguradora", _database.sql.Int, ID_Aseguradora).query(_database.querys.updatePatientById);
        case 9:
          res.json({
            ID_Paciente: ID_Paciente,
            Nombre: Nombre,
            Apellido: Apellido,
            Genero: Genero,
            Fecha_Nacimiento: Fecha_Nacimiento,
            Direccion: Direccion,
            Telefono: Telefono,
            Correo_Electronico: Correo_Electronico,
            ID_Aseguradora: ID_Aseguradora
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updatePatientById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();