const { ElectronEgg } = require('ee-core')
const { ipcMain, app } = require('electron')
const fs = require('fs')
const https = require('https')
const path = require('path')  // 引入 path 模块
const os = require('os')
new ElectronEgg()

// 下载壁纸
ipcMain.on('download-image', async (event, arg) => {
  const baseDirectory = path.join(app.getPath('desktop'), '壁纸')
  const file = fs.createWriteStream(app.getPath('desktop') + '/壁纸/' + arg.name)
  const setupPath = path.join(app.getPath('desktop') + '/壁纸/', arg.name)
  const isWindows = os.platform() === 'win32' ? true : false
  const wallpaperCommand = isWindows ? `PowerShell ${setupPath}` : `osascript -e 'tell application "Finder" to set desktop picture to POSIX file "${setupPath}"'`
  if (arg.type == 'download') {
    if (!fs.existsSync(baseDirectory)) {
      fs.mkdirSync(baseDirectory, { recursive: true })
    }
    https.get(arg.url, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        event.reply('downloadimg', { type: 'ok' })
      })
    }).on('error', (err) => {
      event.reply('downloadimg', { type: 'error' })
    })
  } else {
    if (!fs.existsSync(baseDirectory)) {
      fs.mkdirSync(baseDirectory, { recursive: true })
    }
    https.get(arg.url, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        const childProcess = require('child_process').exec(wallpaperCommand, (error) => {
          if (error) {
            console.error(`Error setting wallpaper: ${error.message}`)
            event.reply('setimg', { type: 'no', msg: '设置失败' })
            fs.unlinkSync(setupPath)
          } else {
            event.reply('setimg', { type: 'ok' })
          }
        })
      })
    }).on('error', (err) => {
      event.reply('setimg', { type: 'no', msg: '网络错误' })
    })
  }
})
