const express = require("express");
const router = express.Router();

const todoListController = require("../controllers/todoList.controller");

router.get("/all-tasks", todoListController.getAllTasks);
router.get("/task/:id", todoListController.getTaskById);

router.post("/new-task", todoListController.create);
router.put("/update-task/:id", todoListController.update);
router.delete("/delete-task/:id", todoListController.deleteTask);

module.exports = router;
