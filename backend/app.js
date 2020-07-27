const express = require('express');
const cors = require('cors');

// Routers
const users = require('./src/Routes/User.route');
const tasks = require('./src/Routes/Task.route');
const paragraphs = require('./src/Routes/Paragraph.route');
const meteos = require('./src/Routes/Meteo.route');

const app = express();

app.use(cors());
app.use(express.json());

// Initialize routers
app.use('/user', users);
app.use('/task', tasks);
app.use('/paragraph', paragraphs);
app.use('/meteo', meteos);

app.get('/', (req, res) => res.send({msg: 'Hello from server'}));

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
