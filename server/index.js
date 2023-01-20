//======================== SETUP ========================//
import express from "express";
import cors from "cors";
import postgres from "postgres";
// import dotenv from "dotenv";
// dontenv.config();
const app = express();
const PORT = process.env.port || 3000;
const sql = postgres({ database: "kanban" });
// const sql = postgres(process.env.DATABASE_URL);
app.use(cors());
app.use(express.json());
app.use(express.static("./client"));

//===================== API ROUTES =====================//
// GET - read all tasks
app.get("/api/tasks", (req, res, next) => {
  sql`SELECT * FROM tasks ORDER BY due_date ASC`.then((result) => res.json(result)).catch(next);
});

// POST - create a new task
app.post("/api/tasks", (req, res, next) => {
  const newTask = req.body;
  sql`INSERT INTO tasks ${sql(newTask)} RETURNING *`
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(next);
});

app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  res.sendStatus(200);
});

app.patch("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const result = await pool.query("UPDATE tasks SET description=$1 WHERE id=$2 RETURNING *", [
    description,
    id,
  ]);
  res.send(result.rows[0]);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
