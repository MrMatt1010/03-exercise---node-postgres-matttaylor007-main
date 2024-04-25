require("dotenv").config();
const todos = require("./data/json/todos.json");
const repository = require("./repository");
const pool = require("./db");

describe("Todos repository", () => {
  afterAll(() => {
    pool.end();
  });

  test("getAllTodos returns all todos", async () => {
    const result = await repository.getAllTodos();

    expect(result).toEqual(todos);
  });

  test("getTodoById return the correct todo", async () => {
    const todo = await repository.getTodoById(1);
    expect(todo).toEqual(todos[0]);
  });

  test("createNewTodo creates a new todo", async () => {
    const description = "New todo";
    const newTodo = await repository.createNewTodo(description);
    expect(newTodo.description).toBe(description);
  });

  test("updateTodoById updates todo", async () => {
    const allTodos = await repository.getAllTodos();
    const id = allTodos[allTodos.length - 1].id;
    const description = "Updated todo";
    const updatedTodo = await repository.updateTodoById(id, description);
    expect(updatedTodo.description).toEqual(description);
  });

  test("deleteTodoById deletes the todo", async () => {
    const allTodos = await repository.getAllTodos();
    const id = allTodos[allTodos.length - 1].id;
    const numberOfDeletedTodos = await repository.deleteTodoById(id);
    expect(numberOfDeletedTodos).toBe(1);
  });
});
