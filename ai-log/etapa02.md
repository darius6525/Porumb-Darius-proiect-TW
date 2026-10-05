# AI Log - Etapa 2
link ul chat ului: https://gemini.google.com/app/dbc36b7108f5cd26
## Cerințe rezolvate
- Definirea structurii de date sub formă de array de obiecte cu ID unic.
- Implementarea funcțiilor imutabile folosind metodele de array (map, filter, reduce).
- Adăugarea validărilor pentru titlu gol și etichete invalide.
- Afișarea testelor în consolă grupate pe secțiuni.

## Prompt-uri folosite
- "Generează codul JavaScript pentru Etapa 2 pe baza cerințelor din ghid."

## Decizii și adaptări
- Calculul noului ID s-a realizat prin `reduce` (`Math.max`), asigurând evitarea duplicatelor în cazul ștergerilor.