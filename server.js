const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// when client navigates to url/api, the app will use the router in apiRoutes
app.use('/api/', apiRoutes);
// if '/' is the endpoint, the router will serve back the HTML routes
app.use('/', htmlRoutes);

// allow js and css files to be accessed
app.use(express.static('public'));

// run the server or the appropriate PORT through Heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});