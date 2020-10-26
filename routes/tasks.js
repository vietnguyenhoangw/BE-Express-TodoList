const express = require("express"),
  router = express.Router(),
  taskController = require("../controllers/tasks");

router.route("/")
  .get(taskController.getTask)
  .post(taskController.addTask);


router.route('/:id')
  .get(taskController.deleteTask);

module.exports = router;
