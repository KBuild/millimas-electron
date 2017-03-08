const electron = require('electron');
const {app, BrowserWindow} = electron;
const config = require('./config.json');

const init = () => {
    let win = new BrowserWindow(config.browser);
    win.on('closed', () => {
      win = null
    });
    win.loadURL('http://imas.gree-apps.net/app/index.php');
};

app.on('ready', () => {
    init();
});
