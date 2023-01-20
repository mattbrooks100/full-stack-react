DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL,
  description TEXT,
  due_date DATE,
  to_do BOOLEAN,
  in_progress BOOLEAN,
  complete BOOLEAN
);

INSERT INTO tasks(description, due_date, to_do, in_progress, complete) VALUES 
('Work on MVP', '2023-01-23', TRUE, FALSE, FALSE),
('Drink more coffee', '2023-01-21', TRUE, FALSE, FALSE);
