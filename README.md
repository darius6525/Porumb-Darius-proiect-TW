# AutoService Manager

An intuitive web dashboard for auto repair shops to track vehicle service appointments, repair status, and maintenance priorities.

## Data model

| Field | Type | Notes |
|---|---|---|
| `numar_inmatriculare` | text | required, max 100 chars (e.g. "Schimb ulei - B 123 ABC") |
| `finalizat` | boolean | toggled from the list, default false |
| `prioritate` | fixed values | `Scăzută`, `Medie`, `Urgente` |
| `categorie` | relation | `Mecanică`, `Electrica`, `Tinichigerie` |
| `mecanic` | relation | the assigned mechanic/owner of the item (from week 11) |

### Sample data used across all stages:
1. **Schimb plăcuțe frână - B 101 XYZ**, active, `Urgente`
2. **Diagnoză computerizată - B 777 TST**, done, `Medie`
3. **Înlocuire kit distribuție - CJ 99 MAI**, active, `Scăzută`

## AI usage
Tool | Used for
---|---
ChatGPT / Gemini | Generating HTML semantic structure, CSS variables setup, and responsive layout guidelines for Stage 1.

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification Checklist (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/USER/REPO/blob/MAIN_COMMIT/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/USER/REPO/blob/MAIN_COMMIT/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/USER/REPO/blob/MAIN_COMMIT/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L12-L68](https://github.com/USER/REPO/blob/MAIN_COMMIT/index.html#L12-L68) | open the page |
| S1-R5 | finished card looks different | [style.css#L105-L108](https://github.com/USER/REPO/blob/MAIN_COMMIT/style.css#L105-L108) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L110-L114](https://github.com/USER/REPO/blob/MAIN_COMMIT/style.css#L110-L114) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L116-L138](https://github.com/USER/REPO/blob/MAIN_COMMIT/style.css#L116-L138) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit Link](https://github.com/USER/REPO/commit/MAIN_COMMIT) | commit history |