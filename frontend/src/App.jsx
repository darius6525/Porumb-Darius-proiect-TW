import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TaskuriPage from "./pages/TaskuriPage.jsx";
import TaskDetaliuPage from "./pages/TaskDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TaskuriPage />} />
        <Route path="/tasks/:id" element={<TaskDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}