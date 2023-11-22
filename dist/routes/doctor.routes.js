"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _doctor = require("../controllers/doctor.controller");
var router = (0, _express.Router)();
router.get('/Medico', _doctor.GetAllDoctors);
router.get('/Medico');
router.get('/Medico');
router.post('/Medico');
router.put('/Medico');
router["delete"]('/Medico');
var _default = exports["default"] = router;