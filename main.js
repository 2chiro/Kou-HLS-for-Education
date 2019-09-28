'use strict'

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer')

let mainWindow

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

function createWindow () {
  installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(name))
      .catch(err => console.log(err))
  installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(name))
      .catch(err => console.log(err))
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    resizable: true,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.setTitle('教育用高位合成CAD（仮）')
  mainWindow.loadURL(url.format({ //読み込むコンテンツを指定
    pathname: path.join(__dirname, 'out/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //ウィンドウを閉じるときの処理
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}