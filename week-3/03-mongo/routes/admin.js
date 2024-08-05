const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = new Admin({
        username: username,
        password: password
    })
    admin.save();
    res.json({ message: "Admin created successfully" });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const des = req.body.description;
    const price = req.body.price;
    const course = new Course({
        title:title,
        description:des,
        price:price
    })
    course.save();
    res.json({
      message: "Course created successfully",
      courseId: `${course._id.toString()}`,
    });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({courses : courses})

});

module.exports = router;