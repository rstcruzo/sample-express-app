const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://ip-172-31-13-109.us-west-2.compute.internal:27017/test', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Db connected!');
    }
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});