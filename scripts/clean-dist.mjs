import { rm } from "node:fs/promises";
import { parse, relative, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectRoot, "dist");
const relativeOutput = relative(projectRoot, outputDirectory);

if (relativeOutput !== "dist" || parse(outputDirectory).root === outputDirectory) {
  throw new Error(`Directorio de salida inesperado: ${outputDirectory}`);
}

await rm(outputDirectory, { recursive: true, force: true, maxRetries: 3 });
