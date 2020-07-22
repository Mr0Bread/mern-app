const express = require('express');
const UserCrud = require('../MongoDB/Models/User/User.crud');

const router = express.Router();

router.get('/', (req, res) => {
    UserCrud.getAllUsers(res);
})

router.get('/:username', (req, res) => {
    const { username } = req.params;
    UserCrud.getUser(username, res);
})

router.post('/add', (req, res) => {
    const { username, password } = req.body;
    UserCrud.addUser(username, password, res);
});

router.post('/delete', (req, res) => {
    const { id } = req.body;
    UserCrud.deleteUser(id, res);
})

router.post('/edit', (req, res) => {
    UserCrud.editUser(req.body, res);
})

module.exports = router;