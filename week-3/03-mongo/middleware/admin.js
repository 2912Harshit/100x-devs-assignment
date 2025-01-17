const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const dbUser = await Admin.findOne({username :username , password : password})
    if(dbUser){
      next();
    }else{
      res.json({message: "Validation error"}).status(403);
    }
}

module.exports = adminMiddleware;