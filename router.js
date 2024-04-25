const express = require("express");
const router = express.Router();
const repository = require("./repository");

// create a todo
router.post("/todos/", async (req, res) => {
  const { description } = req.body;
  const newTodo = await repository.createNewTodo(description);
  res.json(newTodo);
});

// get all todos
router.get("/todos/", async (req, res) => {
  const allTodos = await repository.getAllTodos();
  res.json(allTodos);
});

// get a todo
router.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await repository.getTodoById(id);
  res.json(todo);
});

// update a todo
router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const updatedTodo = await repository.updateTodoById(id, description);
  res.json(updatedTodo);
});

// delete a todo
router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const numberOfDeletedTodos = await repository.deleteTodoById(id);
  res.json(`Todos deleted: ${numberOfDeletedTodos}`);
});

module.exports = router;
