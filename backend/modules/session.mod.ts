const session = require('express-session');

const settings = session({
    secret: 'some secret word here',
    resave: false,
    saveUninitialized: true,
    cookie: { secret: true }
});

module.exports = settings;