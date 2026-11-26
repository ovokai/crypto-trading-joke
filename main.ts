// Laugh Track: The Crypto Trading Joke Contest
// Writes one joke about crypto trading life to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";

const joke =
  "The group chat screamed 'buy the dip,' so I did — then bought the dip's dip, then a third dip in the basement. My bag isn't diversified; it's a staircase.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", joke, "utf8");
  } catch {
    // Fallback for local runs where /output is not writable.
    writeFileSync("entry.txt", joke, "utf8");
  }
}

main();
