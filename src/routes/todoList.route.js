const express = require("express");
const router = express.Router();
const {idValidation, bodyValidation, bodyPatchValidation, alreadyExists, notFound} = require("../middlewares/todoList.middleware")

const todoListController = require("../controllers/todoList.controller");

router.get("/", todoListController.getAllTasks);
router.get("/:id", idValidation, notFound, todoListController.getTaskById);


router.post("/", bodyValidation, alreadyExists, todoListController.create);
router.put("/:id", idValidation, notFound, bodyValidation, todoListController.update);
router.patch("/:id", idValidation, notFound, bodyPatchValidation, todoListController.updatePatch);
router.delete("/:id", idValidation, notFound, todoListController.deleteTask);

module.exports = router;

