import { dirToSilderItem } from "./navPlugins.ts";
import path from "node:path";

console.log(
  JSON.stringify(
    dirToSilderItem(path.join(import.meta.dirname, "../developer")),
    null,
    2
  )
);
