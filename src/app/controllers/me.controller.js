const Course = require('../models/course.model');
const { multipleMongooseToObject} = require('../../util/mongoose');
class MeController {

    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/store-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController;