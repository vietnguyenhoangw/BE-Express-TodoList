const { response } = require("express");
const mongoose = require("mongoose");

// functions
var returnFunction = require("../functions/return_form.js");

const indexUser = (_req, res, next) => {
  console.log("run index user method");
  // Retrieve all users from Mongo
  mongoose.model("Users").find({}, (error, users) => {
    if (error) {
      const responseResult = returnFunction.returnRequest(500, null, error);
      res.send(responseResult);
    }
    const responseResult = returnFunction.returnRequest(200, users);
    res.send(responseResult);
  });
};

const storeUser = (req, res) => {
  // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
  const {
    name,
    dob,
    phone,
    email,
    description,
    imageProfile,
    coverImage,
  } = req.body;

  //call the create function for our database
  mongoose.model("Users").create(
    {
      _id: new mongoose.Types.ObjectId(),
      name: name,
      dob: dob,
      phone: phone,
      email: email,
      createAt: new Date(),
      description: description,
      imageProfile: imageProfile,
      coverImage: coverImage,
    },
    (error, user) => {
      if (error) {
        const responseResult = returnFunction.returnRequest(500, null, error);
        res.send(responseResult);
      } else {
        const responseResult = returnFunction.returnRequest(200, user);
        res.send(responseResult);
      }
    }
  );
};

const getUser = (req, res, next) => {
  console.log("run user method");

  mongoose.model("Users").findById(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    }
    console.log("GET Retrieving ID: " + user._id);
    res.format({
      html: () => {
        res.render("users/view", {
          title: "View of " + user.name,
          user: user,
        });
      },
      json: () => {
        res.json(user);
      },
    });
  });
};

// call to edit user form
const editUser = (req, res) => {
  console.log("run edit user method");

  const id = req.params.id;
  // Search for the user within Mongo
  mongoose.model("Users").findById(id, (error, user) => {
    if (error) {
      return res.send("Error: There was a problem retrieving: " + error);
    }
    //Return the user
    // console.log('GET Retrieving ID: ' + user._id);
    res.format({
      //HTML response will render the 'edit.jade' template
      html: () => {
        res.render("users/edit", {
          // title: 'Edit user #' + user._id,
          user: user,
        });
      },
      //JSON response will return the JSON output
      json: () => {
        res.json(user);
      },
    });
  });
};

const updateUser = (req, res) => {
  console.log("run update user method");

  // Get our REST and form values.
  const id = req.params.id;
  const { name, email } = req.body;

  //find the document by ID
  mongoose.model("Users").findByIdAndUpdate(
    id,
    {
      name: name,
      email: email,
    },
    (error, user) => {
      if (error) {
        return res.send(
          "There was a problem updating the information to the database: " +
            error
        );
      }
      //HTML responds by going back to the page or you can be fancy and create a new view that shows a success page.
      res.format({
        html: () => {
          res.redirect("/users/" + user._id);
        },
        //JSON responds showing the updated values
        json: () => {
          res.json(user);
        },
      });
    }
  );
};

const deleteUser = (req, res, next) => {
  console.log("run delete user method");

  // Find user to delete by ID
  mongoose.model("Users").findById(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    }
    //remove it from Mongo
    user.remove((error, user) => {
      if (error) {
        return next(error);
      }
      res.send(user);
    });
  });
};

module.exports = {
  indexUser,
  getUser,
  editUser,
  updateUser,
  deleteUser,
  storeUser,
};
