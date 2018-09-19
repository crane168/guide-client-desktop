const {
  app,
  BrowserWindow,
  ipcMain,
  globalShortcut
} = require('electron');
const path = require('path');
const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let child;
const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    maxwidth:1200,
    maxheight:1000,
    resizable:true,
    icon: path.join(__dirname, 'favicon.ico'),
    titleBarStyle: 'hidden',
    center: true,
    useContentSize :true,
    show: false
    // titleBarStyle: 'hiddenInset'
    // titleBarStyle: 'customButtonsOnHover',
    // transparent: true,
    // frame: false
  });
  //  open devTools
  // win.webContents.openDevTools();
  // and load the index.html of the app.

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
   win.show()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}
//ipcMain进程
// ipcMain.on('alert', () => {
//   newWin = new BrowserWindow({
//     width: 600,
//     height: 400,
//     // frame: false,
//     // parent: win,
//     // modal: true
//   })
//   // win = null;
//   newWin.loadURL("http://github.com")
//   // newWin.on('closed', () => {
//   //   newWin = null;
//   // })
// })
ipcMain.on('alert', () => {
   child = new BrowserWindow({
    width: 600,
    height: 400,
    parent: win,
    modal: true,
    show: false
  })
  child.loadURL(url.format({
    pathname:"localhost:4222/detail",
    protocol:"http:",
    slashes:true
  }))
  child.on('ready-to-show', () => {
    child.show()
  })
})
ipcMain.on('max',()=>{
  win.maximize();
  win.show();
})
ipcMain.on('clS',()=>{
  child.close();
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// const dragicon = path.join(__dirname, 'favicon.ico');
ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: filePath,
    icon: `${__dirname}/assets/dragicon.png`
  })
})
app.on('ready',()=>{
    createWindow();
    globalShortcut.register('CommandOrControl+Shift+N', () => {
      createWindow();
    })
  }
);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
