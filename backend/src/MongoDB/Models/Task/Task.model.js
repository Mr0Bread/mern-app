const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = mongoose.createConnection('mongodb+srv://Mr0Bread:Elishka1Love@cluster0.ruxkg.mongodb.net/Test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const taskSchema = new Schema({
    todo: String,
    assignee: String
});

module.exports = connection.model('Task', taskSchema);