"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runIpcs = void 0;
const hello_ipc_1 = __importDefault(require("./hello.ipc"));
function runIpcs() {
    (0, hello_ipc_1.default)();
}
exports.runIpcs = runIpcs;
