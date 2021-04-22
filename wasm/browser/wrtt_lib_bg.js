import * as wasm from "./wrtt_lib_bg.wasm";

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  var ret = wasm.multiply(a, b);
  return ret >>> 0;
}
