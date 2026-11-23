import { useEffect, useState } from "react";
import TaskList from "../components/TaskList.jsx";
import TaskForm from "../components/TaskForm.jsx";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api.js";
import styles from "./TaskuriPage.module.css";

export default function TaskuriPage() {
  const [taskuri, setTaskuri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchTasks();
        if (!ignore) setTaskuri(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(task) {
    const creat = await createTask(task);
    setTaskuri((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const task = taskuri.find((t) => t.id === id);
    try {
      const actualizat = await updateTask(id, { gata: !task.gata });
      setTaskuri((prev) =>
        prev.map((t) => (t.id === id ? actualizat : t))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTaskuri((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const active = taskuri.filter((t) => !t.gata).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă task</h2>
        <TaskForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Task-urile mele</h2>
        <p className={styles.summary}>
          {taskuri.length} task-uri, dintre care {active} active
        </p>
        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă...
          </p>
        )}
        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}
        {!loading && (
          <TaskList
            taskuri={taskuri}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}