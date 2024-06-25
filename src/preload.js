// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electron', {
//   exitApp: () => ipcRenderer.send('exitApp'),
// });

contextBridge.exposeInMainWorld('electron', {
  exitBtn: () => ipcRenderer.send('exitBtn'),
  viewPlot: () => ipcRenderer.send('viewPlot'),
  navigateToHome: (data) => ipcRenderer.send('navigate-to-home', data),
});
