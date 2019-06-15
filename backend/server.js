const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;
const morgan = require('morgan');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});