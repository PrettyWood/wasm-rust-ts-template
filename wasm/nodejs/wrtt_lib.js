let imports = {};
let wasm;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
module.exports.multiply = function (a, b) {
  var ret = wasm.multiply(a, b);
  return ret >>> 0;
};

const path = require("path").join(__dirname, "wrtt_lib_bg.wasm");
const bytes = require("fs").readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
