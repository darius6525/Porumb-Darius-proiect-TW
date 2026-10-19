const ETICHETE_PRIORITATE = { Scăzută: "scazuta", Medie: "medie", Urgente: "urgente" };

export default function TaskCard({ task }) {
  return (
    <li className={task.finalizat ? "task-card done" : "task-card"}>
      <div>
        <h3>{task.numar_inmatriculare}</h3>
        <span className={`badge badge-${task.prioritate.toLowerCase()}`}>
          Prioritate: {task.prioritate}
        </span>
        <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#666" }}>
          Categorie: {task.categorie} | Mecanic: {task.mecanic}
        </p>
      </div>
      <span className="status">{task.finalizat ? "Gata" : "Activ"}</span>
    </li>
  );
}