import TaskList from "./components/TaskList.jsx";

const taskuri = [
  { id: 1, numar_inmatriculare: "Schimb placute frana - B 101 XYZ", finalizat: false, prioritate: "Urgente", categorie: "Mecanica", mecanic: "Ion Popescu" },
  { id: 2, numar_inmatriculare: "Diagnoza computerizata - B 777 TST", finalizat: true, prioritate: "Medie", categorie: "Electrica", mecanic: "Vasile Ionescu" },
  { id: 3, numar_inmatriculare: "Inlocuire kit distributie - CJ 99 MAI", finalizat: false, prioritate: "Scazuta", categorie: "Mecanica", mecanic: "Andrei Radu" }
];

export default function App() {
  const active = taskuri.filter((t) => !t.finalizat).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoService Manager</h1>
        <p>Gestiunea fiselor de reparatii si a programarilor din atelier.</p>
        <p className="app-count">
          {taskuri.length} lucrari inregistrate, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Lucrari in curs & finalizate</h2>
          <TaskList taskuri={taskuri} />
        </section>
      </main>
    </>
  );
}