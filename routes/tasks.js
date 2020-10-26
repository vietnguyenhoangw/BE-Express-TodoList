const express = require("express"),
  router = express.Router(),
  taskController = require("../controllers/tasks");

// get and add new task
router.route("/").get(taskController.getTask).post(taskController.addTask);

// remove task
router.route("/:id").get(taskController.deleteTask);

// edit task
router.route("/:id/edit").post(taskController.editTask);

module.exports = router;
