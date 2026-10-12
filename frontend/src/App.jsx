const taskuri = [
  { id: 1, numar_inmatriculare: "Schimb plăcuțe frână - B 101 XYZ", finalizat: false, prioritate: "Urgente", categorie: "Mecanică", mecanic: "Ion Popescu" },
  { id: 2, numar_inmatriculare: "Diagnoză computerizată - B 777 TST", finalizat: true, prioritate: "Medie", categorie: "Electrica", mecanic: "Vasile Ionescu" },
  { id: 3, numar_inmatriculare: "Înlocuire kit distribuție - CJ 99 MAI", finalizat: false, prioritate: "Scăzută", categorie: "Mecanică", mecanic: "Andrei Radu" }
];

export default function App() {
  const active = taskuri.filter((t) => !t.finalizat).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoService Manager</h1>
        <p>Gestiunea fișelor de reparații și a programărilor din atelier.</p>
        <p className="app-count">
          {taskuri.length} lucrări înregistrate, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Lucrări în curs & finalizate</h2>
          <pre>{JSON.stringify(taskuri, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}