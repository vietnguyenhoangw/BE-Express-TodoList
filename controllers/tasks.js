const mongoose = require("mongoose");
const users = require("./users");

const getTask = (_req, res, next) => {
  mongoose.model("Tasks").find({}, (err, task) => {
    if (err) {
      return res.send(`errors: ${error}`);
    }
    res.send(task);
  });
};

const addTask = (req, res) => {
  const { taskName, isDone } = req.body;
  mongoose.model("Tasks").create(
    {
      _id: new mongoose.Types.ObjectId(),
      taskName: taskName,
      isDone: isDone,
    },
    (error, task) => {
      if (error) {
        return res.send(
          `There was a problem adding the information to the database: ${error}`
        );
      }
      res.send(task);
    }
  );
};

const deleteTask = (req, res) => {
  mongoose.model("Tasks").findById(req.params.id, (error, task) => {
    console.log("deleteTask -> task", task);
    if (error) {
      return res.send(
        `There was a problem reomve the information to the database: ${error}`
      );
    }
    task.remove((err, task) => {
      if (err) {
        return res.send(
          `There was a problem remove the information to the database: ${error}`
        );
      }
      res.send('remove success !');
    });
  });
};

module.exports = { getTask, addTask, deleteTask };
