CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

INSERT INTO 
  todo (description)
VALUES
  ('Accept exercise'),
  ('Clone repository'),
  ('Create a new branch'),
  ('Push commits'),
  ('Open a pull request');