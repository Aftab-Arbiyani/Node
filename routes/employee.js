const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');

router.get('/', employee.getAllEmployees);

router.get('/edit/:employeeId', employee.getEditEmployee);

router.get('/add', employee.getAddEmployee);

router.get('/delete/:employeeId', employee.getDeleteEmployee);

router.post('/add-employee', employee.postAddEmployee);

module.exports = router