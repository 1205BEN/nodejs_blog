const express = require('express');
const router = express.Router();
const  courseController = require('../app/controllers/course.controller');

// newsController.index

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/:id', courseController.update);
router.delete('/:id', courseController.detroy);
router.get('/:slug', courseController.show);



 
module.exports = router;