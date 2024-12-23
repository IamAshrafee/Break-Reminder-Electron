const { app, BrowserWindow } = require('electron');

const path = require('path');
require('electron-reload')(path.join(__dirname), {
    electron: require(`${__dirname}/node_modules/electron`)
});

// ... rest of your code

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);
