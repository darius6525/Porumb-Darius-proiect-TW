import { useState } from "react";
import TaskList from "./components/TaskList.jsx";

const TASKURI_INITIALE = [
  { id: 1, titlu: "Schimb placute frana - B 101 XYZ", gata: false, prioritate: "urgente" },
  { id: 2, titlu: "Diagnoza computerizata - B 777 TST", gata: true, prioritate: "medie" },
  { id: 3, titlu: "Inlocuire kit distributie - CJ 99 MAI", gata: false, prioritate: "scazuta" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [taskuri, setTaskuri] = useState(TASKURI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);
  const [titluNou, setTitluNou] = useState("");
  const [prioritateNoua, setPrioritateNoua] = useState("scazuta");

  function handleToggle(id) {
    setTaskuri((prev) =>
      prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
    );
  }

  function handleDelete(id) {
    setTaskuri((prev) => prev.filter((t) => t.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!titluNou.trim()) return;
    const elementNou = {
      id: Date.now(),
      titlu: titluNou,
      gata: false,
      prioritate: prioritateNoua
    };
    setTaskuri((prev) => [...prev, elementNou]);
    setTitluNou("");
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = taskuri.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod intunecat"}
        </button>
        <h1>AutoService Manager</h1>
        <p>Gestiunea fiselor de reparatii si a programarilor din atelier.</p>
        <p className="app-count">
          {taskuri.length} lucrari inregistrate, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Adauga lucrari / masina</h2>
          <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label>Vehicul & Descriere</label>
              <input
                type="text"
                placeholder="Ex: Schimb ulei - B 123 ABC"
                value={titluNou}
                onChange={(e) => setTitluNou(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Prioritate</label>
              <select
                value={prioritateNoua}
                onChange={(e) => setPrioritateNoua(e.target.value)}
              >
                <option value="scazuta">Scazuta</option>
                <option value="medie">Medie</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">
              Adauga in service
            </button>
          </form>
        </section>

        <section className="panel">
          <h2>Lucrari in curs & finalizate</h2>
          <TaskList
            taskuri={taskuri}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}