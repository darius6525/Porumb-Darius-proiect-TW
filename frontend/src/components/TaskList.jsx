import TaskCard from "./TaskCard.jsx";
import styles from "./TaskList.module.css";

export default function TaskList({ taskuri, onToggle, onDelete }) {
  if (!taskuri || taskuri.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun task.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {taskuri.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}