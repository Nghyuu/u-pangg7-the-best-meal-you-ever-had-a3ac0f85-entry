import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One sentence about the best meal ever had: a grandmother's rendang,
// simmered since dawn, eaten at her table.
const sentence =
  "At my grandmother's table, the rendang had simmered since dawn until the beef surrendered to coconut and chili, and one spoonful tasted like the whole house had been cooking just for me.";

const dir = dirname(fileURLToPath(import.meta.url));
void dir;

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, sentence + "\n", "utf8");
chmodSync(outPath, 0o644);
