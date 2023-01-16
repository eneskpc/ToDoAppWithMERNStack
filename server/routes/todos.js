const express = require("express");
const todosController = require("../controller/todosController");

const router = express.Router();

// get all
router.get("/", todosController.getAll);

//get by id
router.get("/:id", todosController.getById);

//add
router.post("/", todosController.create);

//update
router.patch("/:id", todosController.update);

// mark as read
router.put(":id", todosController.markAsRead);

//delete
router.delete("/:id", todosController.remove);

module.exports = router;
