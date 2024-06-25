/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack',
);

document.addEventListener('DOMContentLoaded', function () {
  const exitBtn = document.querySelector('.exitBtn');
  const viewPlotBtn = document.querySelector('.viewPlotBtn');

  const pageRouteButton = document.querySelector('#page-link');
  const route = pageRouteButton.dataset.loc;

  console.log('Exit Button : ', exitBtn);
  console.log('View Plot Button : ', viewPlotBtn);
  console.log('Navigate to Home : ', pageRouteButton);
  console.log('Window Electron : ', window.electron);

  exitBtn.addEventListener('click', (event) => {
    // window.close();
    window.electron.exitBtn();
  });

  viewPlotBtn.addEventListener('click', (event) => {
    window.electron.viewPlot();
  });

  pageRouteButton.addEventListener('click', (event) => {
    console.log('Routing to ', route);
    window.electron.navigateToHome(route);
  });
});
