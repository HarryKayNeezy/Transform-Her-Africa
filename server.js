const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/subjects/computer_courses.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/subjects/computer_courses.html'));
});
app.get('/subjects/advanced.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/subjects/advanced.html'));
});
app.get('/subjects/stem.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/subjects/stem.html'));
});
app.get('/subjects/quiz.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/subjects/quiz.html'));
});


// app.get('/contact', function(req, res) {
//     res.sendFile(path.join(__dirname, '/contact.html'));
// });

// app.get('/testimonials', function(req, res) {
//     res.sendFile(path.join(__dirname, '/testimonials.html'));
// });

app.listen(5000, console.log('server is listening'));