const path = require('path');
const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


db.connect();

route(app);

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logan
app.use(morgan('combined'));

//Templates engine
app.engine('hbs', handlebars({
    extname: '.hbs', 
    helpers: {
      sum: (a,b) => a+b,
    }
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})