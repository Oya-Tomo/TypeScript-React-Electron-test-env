import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

function createBrowserWindow() {
    if (BrowserWindow.getAllWindows.length == 0) {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 500,
            titleBarStyle: "hidden",
            titleBarOverlay: {
                color: "#050505",
                symbolColor: "#ffffff",
            }
        });

        mainWindow.loadURL("file://" + path.join(__dirname, "../index.html"));
    }
}

app.on("ready", () => {
    createBrowserWindow();

    app.on("window-all-closed", () => {
        app.quit();
    })

});

