import ImportCompareFunction from "../ImportCompareFunction";
import Import from "../../import_management/Import";

/**
 * Simply compares the source names.
 * @param a Import A
 * @param b Import B
 */
const compareSources: ImportCompareFunction = function(a, b): number {
  return a.source.name.localeCompare(b.source.name);
};

export default compareSources;
