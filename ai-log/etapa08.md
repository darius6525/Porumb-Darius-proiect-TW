# Jurnal AI — Etapa 8: Navigare și stilizare pe componente

- **Obiectiv:** Împărțirea aplicației de gestiune a lucrărilor de service auto în rute (`/` pentru listă, `/tasks/:id` pentru detalii, `/despre` și `*` pentru 404) cu React Router, layout comun (`Layout.jsx` cu `Outlet` și `NavLink`), mutarea stilurilor în `*.module.css` și păstrarea variabilelor/claselor comune în `index.css`.
- **Ce s-a realizat:**
  - Instalare `react-router-dom` și configurare `BrowserRouter` în `frontend/src/main.jsx`.
  - Creare `TaskuriPage`, `TaskDetaliuPage` (cu `useParams` și `fetchTask(id)`), `DesprePage` și `NotFoundPage`.
  - Mutare constante în `frontend/src/constants.js` și stiluri pe componente în `*.module.css`, păstrând atributele `data-testid` și comutarea temei luminoase/întunecate.