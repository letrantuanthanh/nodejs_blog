// const mongoose = require('mongoose');
const Course = require('../models/Course');
class SiteController {
    async index(req, res) {
        const allCourses = await Course.find();
        res.status(200).json(allCourses);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
