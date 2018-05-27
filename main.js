console.log("Testing electron app");

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require("path");
var url = require("url");

var winone, wintwo;
function createWindow(){
    winone = new BrowserWindow();
    wintwo = new BrowserWindow();
    winone.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));
    wintwo.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));
    //win.webContents.openDevTools();//open dev tools
    winone.on('closed',function(){
        win = null;
    })
    wintwo.on('closed',function(){
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

//IOS
app.on('activate', function(){
    if(win === null){
        createWindow();
    }
});