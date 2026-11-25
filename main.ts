import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran a million simulations of us meeting. In every single one, you said yes — so this is just a formality.";

// Gate: UTF-8 text of 1 to 200 characters, one line, not only white space.
if (line.length < 1 || line.length > 200) throw new Error(`gate: length ${line.length} outside 1-200`);
if (line.trim().length === 0) throw new Error("gate: entry is only white space");
if (line.includes("\n")) throw new Error("gate: entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
