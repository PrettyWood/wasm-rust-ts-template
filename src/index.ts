export * from "./math";

export const WASM_MODULE_PATH = "../wasm/browser/wrtt_lib_bg.wasm";

export default async function initWasm() {
  const wasmModule = await import(WASM_MODULE_PATH);
  const wasmInstance = (await (wasmModule as any).default()) as typeof wasmModule;
  return wasmInstance;
}
