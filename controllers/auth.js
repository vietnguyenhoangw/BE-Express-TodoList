const mongoose = require("mongoose");

// functions
var returnFunction = require("../functions/return_form.js");

const loginEmail = (req, res, next) => {
  const { email, password } = req.body;
  let isValidEmail = false
  let isValidPassword = false
  let resUser = null
  let errorMess = null

  mongoose.model("Users").find({email: email}, (error, user) => {
    if (error) {
      errorMess = error
     } else {
      resUser = user
    }
  });
  
  console.log("🚀 ~ file: auth.js ~ line 22 ~ isValidEmail=mongoose.model ~ isValidEmail", isValidEmail)
  console.log("🚀 ~ file: auth.js ~ line 19 ~ isValidEmail=mongoose.model ~ resUser", resUser)

  if (isValidEmail) {
    res.send(resUser)
  } else {
    res.send(errorMess)
  }
};

module.exports = { loginEmail };
