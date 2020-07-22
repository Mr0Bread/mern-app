const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = mongoose.createConnection('mongodb+srv://Mr0Bread:Elishka1Love@cluster0.ruxkg.mongodb.net/Test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const userSchema = new Schema({
    username: String,
    password: String
});

module.exports = connection.model('User', userSchema);