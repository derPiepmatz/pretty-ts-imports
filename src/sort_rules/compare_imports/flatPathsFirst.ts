import ImportCompareFunction from "../ImportCompareFunction";
import {dirname} from "path";

/**
 * Compares the path depth of two compare_imports.
 * Shorter paths first.
 * @param a Import A
 * @param b Import B
 */
const flatPathsFirst: ImportCompareFunction = function(a, b): -1 | 0 | 1 {
  const depthA = dirname(a.source.name).split("/").length;
  const depthB = dirname(b.source.name).split("/").length;
  if (depthA < depthB) return -1;
  if (depthA > depthB) return 1;
  return 0;
};

export default flatPathsFirst;
