const pool = require("./db");

module.exports = {
  createNewTodo: async (description) => {
    try {
      // TODO: create a todo
      const result = await pool.query(
        `INSERT INTO
        todo (description)
        VALUES ($1)
        RETURNING
        todo_id AS id,
        description`,
        [description]
      );
      return result.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
  getAllTodos: async () => {
    try {
      const result = await pool.query(
        `SELECT 
        todo_id AS id,
        description
      FROM todo`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  getTodoById: async (id) => {
    try {
      // TODO: get a todo by id
      const result = await pool.query(
        `SELECT 
          todo_id AS id,
          description
        FROM todo WHERE todo_id = $1`,
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
  updateTodoById: async (id, description) => {
    try {
      // TODO: update a todo by id
      const result = await pool.query(
        `UPDATE todo
          SET description = $1         
         WHERE todo_id = $2
        RETURNING todo_id AS id, description`,
        [description, id]
      );
      return result.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
  deleteTodoById: async (id) => {
    try {
      // TODO: delete a todo by id
      const result = await pool.query(
        `DELETE FROM todo
        WHERE todo_id = $1`,
        [id]
      );
      return result.rowCount;
    } catch (error) {
      throw Error(error);
    }
  },
};
