const Employee = require('../models/employee');

exports.getAllEmployees = (req,res) => {
    Employee.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('grid', {
                employees: rows
            });
        })
        .catch(err => console.log(err));
};

exports.getEditEmployee = (req,res) => {
    const employeeId = req.params.employeeId;
    Employee.load(employeeId)
        .then(([row]) => {
            res.render('edit', {
                employee: row[0],
                addMode: false
            });
        })
        .catch(err => console.log(err));
};

exports.getAddEmployee = (req,res) => {
    res.render('edit', {
        addMode: true
    });
};

exports.postAddEmployee = (req,res) => {
    const employeeId = req.body.employeeId;
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const employee = new Employee(employeeId, name, email, designation);
    employee.save()
    .then(() => {
        res.redirect('/')
    })
    .catch(err => console.log(err));
};

exports.getDeleteEmployee = (req, res) => {
  const employeeId = req.params.employeeId;
  Employee.delete(employeeId)
  .then(() => {
      res.redirect('/')
    })
   .catch(err => console.log(err));
};