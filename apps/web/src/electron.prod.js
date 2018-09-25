const {
  app,
  BrowserWindow,
  ipcMain,
  globalShortcut,
  dialog,
  Menu,
  MenuItem,
  shell,
  Tray,
  nativeImage
} = require('electron');
const path = require('path');
const url = require('url');
const { autoUpdater } =require('electron-updater');
const feedURL=`http://127.0.0.1:8090`;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
//应用程序菜单模板
const template = [
  {
    label: '操作',
    submenu: [{
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
    }, {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
    }, {
        label: '重新加载',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                // on reload, start fresh and close any old
                // open secondary windows
                if (focusedWindow.id === 1) {
                    BrowserWindow.getAllWindows().forEach(function (win) {
                        if (win.id > 1) {
                            win.close()
                        }
                    })
                }
                focusedWindow.reload()
            }
        }
    }]
  },
  {
    label: '加载网页',
    submenu: [
      {
        label: '电科院',
        accelerator: 'CmdOrCtrl+P',
        click: () => { console.log('time to print stuff') }
      },
      {
        type: 'separator'
      },
      {
        label: '一起嗨',
      }
    ]
  }
]
//如果系统是mac系统
if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [{
      label: `关于 ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: '服务',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `隐藏 ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: '隐藏其它',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: '显示全部',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: '退出',
      accelerator: 'Command+Q',
      click: function () {
        app.quit()
      }
    }]
  })
}

let win;
let child;
let tray;
const createWindow = () => {
  shell.beep()
  // Create the browser window.
  win = new BrowserWindow({
    width: 1120,
    height: 600,
    maxwidth:1300,
    minWidth:800,
    resizable:true,
    icon: path.join(__dirname, 'favicon.ico'),
    titleBarStyle: 'hidden',
    center: true,
    useContentSize :true,
    show: false
    // titleBarStyle: 'hiddenInset'
    // titleBarStyle: 'customButtonsOnHover',
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
  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

 //系统托盘图标
 const iconPath = path.join(__dirname,'favsmall.png')
 const nimage = nativeImage.createFromPath(iconPath);
  tray = new Tray(nimage);

  const contextMenu = Menu.buildFromTemplate([
    {label: '显示', type: 'radio', click: () => {win.show()}},
    {label: '隐藏', type: 'radio', click: () => {win.hide()}},
  ])
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show()
  })

  tray.setToolTip('这是文控云程序.') // 鼠标放上时候的提示
  tray.setContextMenu(contextMenu)
}

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
    globalShortcut.register('CmdOrCtrl+1',()=>{
      dialog.showMessageBox({
        type:'info',
        message:'你按下了全局的快捷键'
      })
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
// 监听自定义update事件
ipcMain.on('update', (e, arg) => {
  checkForUpdate()
})

const checkForUpdate = () => {
  // 设置检查更新的 url，并且初始化自动更新
  autoUpdater.setFeedURL(feedURL)

 // 监听错误
  autoUpdater.on('error', message => {
    sendUpdateMessage('err', message)
  })
 // 当开始检查更新的时候触发
  autoUpdater.on('checking-for-update', message => {
    sendUpdateMessage('checking-for-update', message);
  })
 //
  autoUpdater.on('download-progress', function(progressObj) {
    sendUpdateMessage('downloadProgress', progressObj);
  });
  // 更新下载完成事件
  autoUpdater.on('update-downloaded', function(event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {

      ipcMain.on('updateNow', (e, arg) => {
          autoUpdater.quitAndInstall();
      });
      sendUpdateMessage('isUpdateNow');
  });
 // 向服务端查询现在是否有可用的更新
  autoUpdater.checkForUpdates();
}

// 发送消息触发message事件
function sendUpdateMessage(message, data) {
  win.webContents.send('message', { message, data });
}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
