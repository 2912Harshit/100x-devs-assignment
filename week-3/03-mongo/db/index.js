const mongoose = require('mongoose');
const { jwtPassword } = require('../../02-jwt');
const { Int32 } = require('mongodb');

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Harshit:clowny_29@cluster0.c691vy7.mongodb.net/user_app"
);

// Define schemas
const AdminSchema = new mongoose.Schema({ username: String, password : String
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}