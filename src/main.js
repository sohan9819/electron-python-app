const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const { viewPlot } = require('./utils');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
    },
  });

  ipcMain.on('exitBtn', (event) => {
    app.exit();
  });

  ipcMain.on('viewPlot', (event) => {
    console.log('View Plot Triggered');
    viewPlot();
  });

  ipcMain.on('navigate-to-home', (event, page) => {
    console.log('Redirecting to ', page);

    console.log(
      'Loading file : ',
      path.join(__dirname, '../renderer/pages/home.html'),
    );

    switch (page) {
      case 'home':
        mainWindow.loadFile(
          path.join(__dirname, '../renderer/pages/home.html'),
        );
        break;

      case 'index':
        mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
        break;

      default:
        mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
        break;
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
