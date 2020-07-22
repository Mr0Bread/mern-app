const express = require('express');
const TaskCrud = require('../MongoDB/Models/Task/Task.crud');

const router = express.Router();

router.get('/', (req, res) => {
    TaskCrud.getAll(res);
});

router.post('/add', (req, res) => {
    TaskCrud.addOne(req.body, res);
})

module.exports = router;