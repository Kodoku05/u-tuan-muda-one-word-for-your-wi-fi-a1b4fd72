// One Word for Your Wi-Fi (u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).
// The word is "Liar": full bars, nothing loads — the signal lies to your
// face. The most universal home Wi-Fi truth, in one instantly understood
// word, and a funny network name. Written with no trailing newline: the
// gate allows 1-20 characters and ties break toward the smaller text.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Liar";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
