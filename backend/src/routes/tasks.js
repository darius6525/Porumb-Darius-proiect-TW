import { Router } from "express";
import { parseId, valideazaTask } from "../validation.js";

const router = Router();

let taskuri = [
  { id: 1, titlu: "Schimb plăcuțe de frână", gata: false, prioritate: "mare" },
  { id: 2, titlu: "Diagnoză motor", gata: true, prioritate: "medie" },
  { id: 3, titlu: "Verificare presiune roți", gata: false, prioritate: "mica" },
];
let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }

  const index = taskuri.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Task-ul nu există" });
    return -1;
  }

  return index;
}

// GET /tasks
router.get("/", (req, res) => {
  res.json(taskuri);
});

// GET /tasks/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(taskuri[index]);
});

// POST /tasks
router.post("/", (req, res) => {
  const { erori, date } = valideazaTask(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  const task = { id: nextId++, ...date };
  taskuri.push(task);
  res.status(201).json(task);
});

// PATCH /tasks/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  const { erori, date } = valideazaTask(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  taskuri[index] = { ...taskuri[index], ...date };
  res.json(taskuri[index]);
});

// DELETE /tasks/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  taskuri.splice(index, 1);
  res.status(204).end();
});

export default router;