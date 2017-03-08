const electron = require('electron');
const {app, BrowserWindow} = electron;

const init = () => {
    let win = new BrowserWindow({width: 480, height: 800});
    win.on('closed', () => {
      win = null
    });
    win.loadURL('http://imas.gree-apps.net/app/index.php');
};

app.on('ready', () => {
    init();
});
