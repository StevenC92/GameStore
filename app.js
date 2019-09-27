if (process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}

const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

const authorRouter = require('./routes/authors');

const mongoose = require('mongoose');

Game = require('./models/game');

// Connect to mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/authors', authorRouter);

app.listen(process.env.PORT || 3000)

/*
var routes = require('./routes');

// home
app.get('/', routes.home);

app.post('/',)

// not found
app.get('*', routes.notFound);
*/