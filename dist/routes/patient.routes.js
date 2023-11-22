"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _patient = require("../controllers/patient.controller");
var router = (0, _express.Router)();
router.get('/Paciente', _patient.getGeneral);
router.post('/Paciente', _patient.addNewPatient);
router.get('/Paciente/count', _patient.getTotalPatient);
router.get('/Paciente/:ID_Paciente', _patient.getPatientById);
router["delete"]('/Paciente/:ID_Paciente', _patient.deletePatientById);
router.put('/Paciente/:ID_Paciente', _patient.updatePatientById);
var _default = exports["default"] = router;