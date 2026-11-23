// gta6-meme-x-01: the entry is a post on X, so this program only hands
// POST.json (the post's address) to the grader's output directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// The grader hands us an empty writable output directory, but make sure
// it exists so the copy never fails on a missing directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
