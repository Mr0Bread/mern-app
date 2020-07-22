const OriginCrud = require('../Origin/origin.crud');
const Task = require('./Task.model');

class TaskCrud extends OriginCrud {
    constructor(Task) {
        super(Task);
    }
}

module.exports = new TaskCrud(Task)