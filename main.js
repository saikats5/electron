console.log("Testing electron app");

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require("path");
var url = require("url");

var win;
function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed',function(){
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