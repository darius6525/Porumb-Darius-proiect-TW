export const PRIORITATI = ["mica", "medie", "mare"];
const TITLU_MAX = 100;

export function valideazaTask(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.prioritate !== undefined) {
    const p = body.prioritate ?? "medie";
    if (!PRIORITATI.includes(p)) {
      erori.push(`prioritate trebuie să fie una din: ${PRIORITATI.join(", ")}`);
    } else {
      date.prioritate = p;
    }
  }

  if (body.gata !== undefined) {
    if (typeof body.gata !== "boolean") {
      erori.push("gata trebuie să fie true sau false");
    } else {
      date.gata = body.gata;
    }
  } else if (!partial) {
    date.gata = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}