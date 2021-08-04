import ImportCompareFunction from "../ImportCompareFunction";
import Import from "../../Import";
import {dirname} from "path";

/**
 * Compares the path depth of two imports.
 * Shorter paths first.
 * @param importA Import A
 * @param importB Import B
 */
const flatPathsFirst: ImportCompareFunction = function (
  importA: Import,
  importB: Import
): -1 | 0 | 1 {
  const depthA = dirname(importA.source.name).split("/").length;
  const depthB = dirname(importB.source.name).split("/").length;
  if (depthA < depthB) return -1;
  if (depthA > depthB) return 1;
  return 0;
}

export default flatPathsFirst;
