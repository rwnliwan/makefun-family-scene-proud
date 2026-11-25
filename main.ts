import { mkdirSync, writeFileSync } from "node:fs";

// Family scene for make.fun: "Make the AI Judge Feel Proud: A Family Scene".
// One small domestic moment: Grandpa hides behind the same curtain in every
// game of hide-and-seek, feet sticking out, and the whole family plays along
// for an hour because the game is the love, not the hiding.
const scene = [
  "Grandpa still hides behind the same curtain every game, feet sticking out at the bottom.",
  "We still pretend we can't find him for an hour — he's seventy-nine, and the curtain is winning.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene, "utf8");
