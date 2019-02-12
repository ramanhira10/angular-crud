const express = require('express');

let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;
let { Employee } = require('../models/employee.js');

// localhost:3000/emplyees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(`Error in Retrieving Employees: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(`Error in retrieving employee: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(`Error in saving employee: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with give id: ${req.params.id}`);
    }

    Employee.findByIdAndUpdate(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(`Error in updating employee: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with give id: ${req.params.id}`);
    }

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(`Error in deleting employee: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

module.exports = router;
