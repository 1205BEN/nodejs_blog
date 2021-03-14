const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {

    app.use('/news', newsRouter);
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