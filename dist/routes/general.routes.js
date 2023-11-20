"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _general = require("../controllers/general.controller");
var router = (0, _express.Router)();
router.get('/Paciente', _general.getGeneral);
router.post('/Paciente', _general.addNewPatient);
router.get('/Paciente/count', _general.getTotalPatient);
router.get('/Paciente/:ID_Paciente', _general.getPatientById);
router["delete"]('/Paciente/:ID_Paciente', _general.deletePatientById);
router.put('/Paciente/:ID_Paciente', _general.updatePatientById);
var _default = exports["default"] = router;