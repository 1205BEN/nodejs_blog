const Course = require('../models/course.model');
const { multipleMongooseToObject} = require('../../util/mongoose');
class SiteController {

    index(req,res, next) {
        // Course.find({}, function(err, courses){
        //     if(!err){
        //         res.json(courses);
        //         return;
        //     }else{
        //         res.status(400).json({err: 'message'});
        //     }
            
        // })

        Course.find({})
            .then(courses => {
                // courses = courses.map( course=> course.toObject())
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);

        
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;