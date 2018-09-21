const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  MenuItem,
  globalShortcut,
  dialog,
  shell,
  Tray
} = require('electron');
const path = require('path');
const url = require('url');
const menu = new Menu();
//菜单管理
menu.append(new MenuItem({
  label:'自定义快捷键',
  submenu:[
    {
      label:'测试',
      accelerator:'CmdOrCtrl+P',
      click:()=>{
        console.log('我是本地快捷键')
      }
    }
  ]
}))
Menu.setApplicationMenu(menu)
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
        label: '优酷',
        accelerator: 'CmdOrCtrl+P',
        click: () => { console.log('time to print stuff') }
      },
      {
        type: 'separator'
      },
      {
        label: '百度',
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
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let newWin;
let tray;
const createWindow = () => {
  // set timeout to render the window not until the Angular
  // compiler is ready to show the project
  setTimeout(() => {
    shell.beep();
    // Create the browser window.
    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: './apps/web/src/favicon.icns',
      webPreferences: {
        nodeIntegration: false // turn it on to use node features
      },
      titleBarStyle: 'hidden'
    });

    // and load the app.
    win.loadURL(url.format({
      pathname: 'localhost:4222',
      protocol: 'http:',
      slashes: true
    }));

    win.webContents.openDevTools();

    // 当窗口关闭时候触发
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
    });
    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);


   //系统托盘图标
    tray = new Tray(__dirname + '/favicon-small.png');//系统托盘图标

    const contextMenu = Menu.buildFromTemplate([
      {label: '显示', type: 'radio', click: () => {win.show()}},
      {label: '隐藏', type: 'radio', click: () => {win.hide()}},
    ])
    tray.on('click', () => {
      win.isVisible() ? win.hide() : win.show()
    })

    tray.setToolTip('这是文控云程序.') // 鼠标放上时候的提示
    tray.setContextMenu(contextMenu)
    //全局快捷键
    globalShortcut.register('CmdOrCtrl+1',()=>{
      dialog.showMessageBox({
        type:'info',
        message:'你按下了全局的快捷键'
      })
    })
  }, 10000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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
