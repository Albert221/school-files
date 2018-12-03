const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', express.static('dist'));
app.use('/imgs', express.static('imgs'));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000);