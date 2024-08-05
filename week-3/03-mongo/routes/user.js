const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username =req.headers.username;
    const password= req.headers.password;
    const user = new User({
        username:username,
        password:password
    })
    user.save();
    res.json({ message: "User created successfully" });
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({courses: courses})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username =req.headers.username;
    const password=req.headers.password;

    await User.updateOne(
      {
        username: username,
        password: password,
      },
      {
        "$push": {
             purchasedCourses: courseId 
            },
      }
    );
    res.json({ message: "Course purchased successfully" });

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username,
        password:req.headers.password
    })
    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    })
    
    res.json({purchasedCourses : courses})
});

module.exports = router