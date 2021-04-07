const Course = require('../models/course.model');
const { mongooseToObject} = require('../../util/mongoose');
const bodyParser = require("body-parser");


class CourseController {

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
    }
    //[GET] courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] courses/create
    store(req, res, next) {
        const formData = req.body;
        // res.json(req.body);
        formData.images = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(()=> res.redirect('/'))
            .catch(error => {

            });

        res.send("Courses save");

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
        
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[Delete] courses/create
    detroy (req, res, next) {
        Course.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }


}

module.exports = new CourseController;