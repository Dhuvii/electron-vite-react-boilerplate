"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
exports.default = () => {
    electron_1.ipcMain.on("message", (event, message) => {
        console.log(message);
        setTimeout(() => event.sender.send("message", "hi from electron js"), 500);
    });
};
