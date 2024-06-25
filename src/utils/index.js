const { app } = require('electron');
const path = require('node:path');
const { execFile } = require('child_process');

const pythonExecutable =
  process.platform === 'win32' ? 'venv/Scripts/python.exe' : 'venv/bin/python';

const APP_PATH =
  process.env.NODE_ENV === 'development'
    ? path.join(app.getAppPath(), 'python')
    : path.join(process.resourcesPath, 'python');

export function runPythonScript(script) {
  console.log('App dir : ', app.getAppPath());
  console.log('Path : ', path.join(__dirname));
  console.log(
    'File Path : ',
    path.join(__dirname, '../resources', `${script}.py`),
  );
  console.log('Process Path : ', process.resourcesPath);
  console.log('Env : ', process.env.NODE_ENV);

  return new Promise((resolve, reject) => {
    execFile(
      path.join(APP_PATH, pythonExecutable),
      [path.join(APP_PATH, `${script}.py`)],
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error}`);
          reject(error);
        }
        console.log(`Output: ${stdout}`);
        resolve(stdout);
      },
    );
  });
}

// View Plot function
export function viewPlot() {
  runPythonScript('viewPlot')
    .then((data) => {
      console.log('View Plot script : ', data);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
