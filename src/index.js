const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

route(app);

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logan
app.use(morgan('combined'));

//Templates engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})