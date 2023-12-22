const { ElectronEgg } = require('ee-core')
const { ipcMain, app } = require('electron')
const fs = require('fs')
const https = require('https')
const path = require('path')  // 引入 path 模块
const os = require('os')
new ElectronEgg()

// 下载壁纸
ipcMain.on('download-image', async (event, arg) => {
  if (arg.type == 'download') {
    const baseDirectory = path.join(app.getPath('desktop'), '壁纸')
    const file = fs.createWriteStream(app.getPath('desktop') + '/壁纸/' + arg.name)
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
    const isWindows = os.platform() === 'win32' ? true : false
    const currentDir = app.getPath('userData')
    const currentFilePath = path.join(currentDir, arg.name)
    const wallpaperCommand = isWindows ? `PowerShell ${currentFilePath}` : `osascript -e 'tell application "Finder" to set desktop picture to POSIX file "${currentFilePath}"'`

    const fileStream = fs.createWriteStream(currentFilePath)
    https.get(arg.url, (response) => {
      response.pipe(fileStream)
      fileStream.on('finish', () => {
        fileStream.close()
        const childProcess = require('child_process').exec(wallpaperCommand, (error) => {
          if (error) {
            console.error(`Error setting wallpaper: ${error.message}`)
            event.reply('setimg', { type: 'no', msg: '设置失败' })
            fs.unlinkSync(currentFilePath)
          } else {
            event.reply('setimg', { type: 'ok' })
            fs.unlinkSync(currentFilePath)
          }
        })
      })
    }).on('error', (err) => {
      event.reply('setimg', { type: 'no', msg: '网络错误' })
    })




  }
})
