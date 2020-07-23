const User = require('./User.model');

class UserCrud {
    getAllUsers(res) {
        User.find({}, (err, arr) => {
            if (err) {
                res.send({msg: err});
            } else {
                res.send(arr);
            }
        });
    }

    getUser(username, res) {
        User.findOne({username}, (err, user) => {
            if (err) {
                res.send(err)
            } else {
                res.send(user);
            }
        });
    }

    addUser(username, password, res) {
        const newUser = new User({
            username,
            password
        });

        return newUser.save((err) => {
            if (err) {
                res.send({msg: err})
            } else {
                res.send({msg: 'User Saved'});
            }
        });
    }

    deleteUser(id, res) {
        User.deleteOne({_id: id}, (err) => {
            if (err) {
                res.send({msg: err});
            } else {
                res.send({msg: `User with ${id} has been successfully deleted`});
            }
        });
    }

    editUser(params, res) {
        User.findByIdAndUpdate(params.id, {
            username: params.username,
            password: params.password
        }, {useFindAndModify: false}, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.send('Successful update');
            }
        })
    }
}

module.exports = new UserCrud();
