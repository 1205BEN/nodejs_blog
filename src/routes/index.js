const newsRouter = require('./news.route');
const coursesRouter = require('./courses');
const siteRouter = require('./site.route');
const meRouter = require('./me');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home')
    //   });
      
      // app.get('/news', (req, res) => {
      //   res.render('news')
      // })


      
      // app.get('/search', (req, res) => {
      //   res.render('search')
      // });
      
    
      
}

module.exports = route;