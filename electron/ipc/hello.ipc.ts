import { ipcMain, IpcMainEvent } from "electron";

export default () => {
  ipcMain.on("message", (event: IpcMainEvent, message: any) => {
    console.log(message);
    setTimeout(() => event.sender.send("message", "hi from electron js"), 500);
  });
};
