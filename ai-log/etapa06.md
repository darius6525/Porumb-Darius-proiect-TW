# AI Log - Etapa 5

Link-ul: https://gemini.google.com/u/3/app/2608f34135082894?pageId=none

 ## Cerinte rezolvate
Mutarea datelor aplicației din codul React într-un server API REST simulat cu json-server (db.json).

Configurarea scriptului api în package.json și crearea variabilei de mediu în .env.example.

Crearea modulului src/api.js pentru separarea cererilor HTTP (fetchTasks) și tratarea cazurilor în care serverul nu răspunde (res.ok).

Utilizarea hook-ului useEffect în App.jsx pentru încărcarea datelor la montarea componentei, folosind un flag de curățare (ignore) pentru prevenirea efectelor secundare.

Implementarea și afișarea celor 3 stări ale încărcării: stare de așteptare (loading), de succes (datele aduse din API) și de eroare explicită (error).

Actualizarea stilurilor CSS pentru afișarea corespunzătoare a mesajelor de încărcare și eroare în ambele teme (light/dark).

## Prompt-uri folosite

Cum se mută datele dintr-o aplicație React pe un server de test cu json-server?

Cum se folosește useEffect și fetch cu async/await pentru a trata stările de loading, succes și eroare?

Cum se rezolvă eroarea ENOENT package.json și neconcordanțele de rute /tasks în json-server?

Cum se folosesc variabilele de mediu VITE_API_URL în Vite/React?