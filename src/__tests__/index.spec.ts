import fs from "fs";
import path from "path";

import { WASM_MODULE_PATH } from "..";

let wasmInstance: any;

beforeAll(async () => {
  const wasmPath = path.resolve(__dirname, "..", WASM_MODULE_PATH);
  const buffer = fs.readFileSync(wasmPath);
  const results = await WebAssembly.instantiate(buffer, {
    env: {
      memoryBase: 0,
      tableBase: 0,
      memory: new WebAssembly.Memory({ initial: 1024 }),
      table: new WebAssembly.Table({ initial: 16, element: "anyfunc" }),
      abort: console.log,
    },
  });
  wasmInstance = results.instance.exports;
});

test("multiply", async () => {
  expect(wasmInstance.multiply(2, 3)).toBe(6);
});
