const taskuri = [
  { id: 1, titlu: "Tema la Baze de date", gata: false, prioritate: "mare" },
  { id: 2, titlu: "Citit capitolul 3", gata: true, prioritate: "medie" },
  { id: 3, titlu: "Cumpărat cafea", gata: false, prioritate: "mica" }
];

const PRIORITATI = ["mica", "medie", "mare"];

function listeazaTitluri(lista) {
  return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
  return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaTask(lista, titlu, prioritate = "medie") {
  const titluCurat = titlu.trim();

  if (!titluCurat) {
    console.log("Eroare: Titlul nu poate fi gol!");
    return lista;
  }

  if (!PRIORITATI.includes(prioritate)) {
    console.log(`Eroare: Prioritatea '${prioritate}' este invalidă!`);
    return lista;
  }

  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    prioritate: prioritate
  };

  return [...lista, nou];
}

function comutaGata(lista, id) {
  return lista.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t));
}

function stergeTask(lista, id) {
  return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(taskuri).join(", "));
console.log("Active:", numaraActive(taskuri));
console.log("Căutare 'tema':", listeazaTitluri(cautaDupaTitlu(taskuri, "tema")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaTask(taskuri, "Proiect Tehnologii Web", "mare");
console.log("Lista nouă:", lista.length, "task-uri");
console.log("Originalul a rămas cu:", taskuri.length, "task-uri");

console.log("--- Modificare și ștergere ---");
lista = comutaGata(lista, 1);
console.log("După bifarea id 1, active:", numaraActive(lista));
lista = stergeTask(lista, 3);
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaTask(lista, " ");
adaugaTask(lista, "Ceva", "urgenta");