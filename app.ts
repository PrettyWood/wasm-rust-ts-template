import initWasm, { add } from "./src";

// @ts-ignore
const wasmInstance = await initWasm();

document.querySelector("#app")!.innerHTML = `
  <h1>Welcome to your library powered by TS, Rust, Wasm and Vite 👋</h1>
  <h2>Addition in TS: 2 + 3 = ${add(2, 3)}</h2>
  <h2>Multiplication in Rust + Wasm: 2 * 3 = ${wasmInstance.multiply(2, 3)}</h2>
`;
