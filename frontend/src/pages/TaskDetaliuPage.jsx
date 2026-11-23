import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTask } from "../api.js";
import { ETICHETE_PRIORITATE } from "../constants.js";
import styles from "./TaskDetaliuPage.module.css";

export default function TaskDetaliuPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchTask(id)
      .then((data) => {
        if (!ignore) {
          setTask(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Task-ul nu a putut fi încărcat: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la listă
      </Link>
      <h2 className={task.gata ? styles.done : undefined} data-testid="detail-title">
        {task.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Prioritate</dt>
        <dd>
          {task.prioritate && (
            <span className={`badge badge-${task.prioritate}`}>
              {ETICHETE_PRIORITATE[task.prioritate] || task.prioritate}
            </span>
          )}
        </dd>
        <dt>Status</dt>
        <dd>{task.gata ? "Gata" : "Activ"}</dd>
        <dt>ID</dt>
        <dd>{task.id}</dd>
      </dl>
    </section>
  );
}